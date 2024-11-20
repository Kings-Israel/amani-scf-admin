<script lang="ts" setup>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePage({
  meta: {
    navActiveLink: 'users-list',
    action: 'manage',
    subject: 'Add/Edit Users',
  },
})

const contactNumberValidator = (value: string) => {
  const regex = /^\+(\d{1,3})(\d{9,15})$/;
  if (!regex.test(value)) {
    return 'Please enter a valid phone number with the country code (e.g., +2547XXXXXXXX)';
  }
  return true;
}

const numberedSteps = [
  {
    title: 'User Details',
    icon: 'tabler-building',
    subtitle: 'Setup account details',
  },
]

const router = useRouter()
const banks = ref<string[]>([])
const companies = ref<string[]>([])
const currentStep = ref(0)
const selectedModule = ref<'CRM' | 'Bank' | 'Admin'>('CRM')
const selectedRoleType = ref<'Dealer' | 'Vendor' | 'Anchor'>('Dealer')

interface DataInterface {
  module: 'CRM' | 'Bank' | 'Admin'
  category: string
  role: string
  firstName: string
  lastName: string
  email: string
  contactNumber: string
}

const defaultData = {
  module: 'CRM',
  category: '',
  role: '',
  firstName: '',
  lastName: '',
  email: '',
  contactNumber: '',
  countryCode: '+254',
}

const formData = ref<DataInterface>(<DataInterface>structuredClone(defaultData))

const { data: roleData, execute: fetchRoles } = await useApi<any>(createUrl('/admin/get/UI/user/roles', {
  query: {
    module: selectedModule,
    roleType: selectedRoleType,
  },
}))

const roles = computed(() => roleData.value)
const commonFields = [
  {
    key: 'firstName',
    show: true,
    type: 'text',
    model: 'firstName',
    label: 'First Name',
    placeholder: 'Enter First Name',
    rules: [requiredValidator],
  },
  {
    key: 'lastName',
    type: 'text',
    model: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter Last Name',
    rules: [requiredValidator],
  },
  {
    key: 'email',
    show: true,
    type: 'email',
    model: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
    rules: [requiredValidator, emailValidator],
  },
  {
    key: 'contactNumber',
    type: 'text',
    show: true,
    model: 'contactNumber',
    label: 'Contact No.',
    placeholder: '+2547XXXXXXXX',
    rules: [requiredValidator, contactNumberValidator],
  },
]

const formFields = [
  {
    key: 'typeOfModule',
    type: 'select',
    show: false,
    model: 'selectedModule',
    label: 'Module',
    placeholder: 'Module',
    items: ['Bank', 'CRM', 'Admin'],
    rules: [requiredValidator],
  },
]

const bankFields = computed(() => [
  {
    key: 'bank',
    type: 'select',
    show: true,
    model: 'bank',
    label: 'Bank',
    placeholder: 'Select Bank',
    items: banks.value,
    rules: [requiredValidator],
  },
])

const crmFields = computed(() => [
  {
    key: 'roles',
    type: 'select',
    show: true,
    model: 'role',
    label: 'Role',
    placeholder: 'Role',
    items: roles.value,
    rules: [requiredValidator],
  },
])

const companyFields = computed(() => [
  {
    key: 'company',
    type: 'select',
    model: 'company',
    label: 'Companies',
    placeholder: 'Select Company',
    items: companies.value,
    rules: [requiredValidator],
  },
  {
    key: 'roleTypes',
    type: 'select',
    show: false,
    value: selectedRoleType,
    model: selectedRoleType,
    label: 'Different Role Types',
    placeholder: 'Role Types',
    rules: [requiredValidator],
    items: ['Dealer', 'Vendor', 'Anchor'],
  },
])
watch(selectedModule, (newModule) => {
  formData.value.module = newModule
})
watchEffect(async () => {
  banks.value = await $api('/get/banks/names')
  companies.value = await $api('/company/names')
})
const isFlatSnackbarVisible = ref(false)
const isFlatErrorSnackbarVisible = ref(false)
const dynamicFormFields = computed(() => {
  let fields = [...formFields]

  if (formData.value.module === 'Bank') {
    fields = fields.concat(bankFields.value)
  } else if (formData.value.module === 'Company') {
    fields = fields.concat(companyFields.value)
  }

  fields = fields.concat(crmFields.value)
  return fields.concat(commonFields)
})

const errormessage = ref('')

const onSubmit = async () => {
  try {
    const res = await $api('/auth/UI/add/user', {
      method: 'POST',
      body: formData.value,
      onResponseError({ response }) {
        const errorMessage = response?.data?.message || 'An error occurred while adding the user';
        console.log('Error', response);
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
        });
      },
    });

    const { message } = res;

    if (message) {
      toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
      });
    }

    await nextTick(() => {
      router.push('/users/list');
    });
  } catch (err) {
    console.error(err);
  }
};

fetchRoles()
</script>
<template>
  <VSnackbar
    v-model="isFlatErrorSnackbarVisible"
    color="error"
    location="top end"
    variant="flat"
  >
    {{ errormessage }}
  </VSnackbar>

  <VSnackbar
    v-model="isFlatSnackbarVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    User Created Successfully
  </VSnackbar>

  <VCard class="pa-6">
    <VRow>
      <!-- Stepper Section -->
      <VCol
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
        cols="12"
        md="4"
      >
        <VCardText>
          <!-- Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            :items="numberedSteps"
            class="stepper-icon-step-bg"
            direction="vertical"
            icon-size="24"
          />
        </VCardText>
      </VCol>

      <!-- Form Section -->
      <VCol cols="12" md="8">
        <VCardText>
          <VForm>
            <VWindow v-model="currentStep" class="disable-tab-transition">
              <VWindowItem>
                <VRow>
                  <!-- Form Fields -->
                  <template
                    v-for="field in dynamicFormFields"
                    :key="field.key"
                  >
                    <!-- Select Fields -->
                    <template v-if="field.type === 'select' && !field.show">
                      <VCol cols="12" md="6" class="mb-4">
                        <AppSelect
                          v-model="selectedModule"
                          :items="field.items"
                          :label="field.label"
                          :placeholder="field.placeholder"
                          :rules="field.rules"
                        />
                      </VCol>
                    </template>

                    <template v-if="field.type === 'select' && field.key === 'roleTypes' && !field.show">
                      <VCol cols="12" md="6" class="mb-4">
                        <AppSelect
                          v-model="selectedRoleType"
                          :items="field.items"
                          :label="field.label"
                          :placeholder="field.placeholder"
                          :rules="field.rules"
                        />
                      </VCol>
                    </template>

                    <!-- Dynamic Select Fields -->
                    <template v-else-if="field.type === 'select' && field.show">
                      <VCol cols="12" md="6" class="mb-4">
                        <AppSelect
                          v-model="formData[field.model]"
                          :items="field.items"
                          :label="field.label"
                          :placeholder="field.placeholder"
                          :rules="field.rules"
                        />
                      </VCol>
                    </template>

                    <!-- Text Fields -->
                    <template v-else-if="field.type === 'text'">
                      <VCol cols="12" md="6" class="mb-4">
                        <AppTextField
                          v-model="formData[field.model]"
                          :label="field.label"
                          :placeholder="field.placeholder"
                          :readonly="field.readonly"
                          :rules="field.rules"
                        />
                      </VCol>
                    </template>

                    <!-- Email Fields -->
                    <template v-else-if="field.type === 'email'">
                      <VCol cols="12" md="6" class="mb-4">
                        <AppTextField
                          v-model="formData[field.model]"
                          :label="field.label"
                          :placeholder="field.placeholder"
                          :readonly="field.readonly"
                          :rules="field.rules"
                        />
                      </VCol>
                    </template>
                  </template>
                </VRow>
              </VWindowItem>
            </VWindow>

            <!-- Submit Button -->
            <div class="d-flex justify-center mt-6">
              <VBtn
                append-icon="tabler-check"
                color="primary"
                @click="onSubmit"
                class="px-6 py-3"
                elevation="2"
              >
                Submit
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template> 
