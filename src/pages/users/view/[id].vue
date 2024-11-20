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

const route = useRoute('users-view-id')

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
const selectedModule = ref<'CRM' | 'Bank' | 'Company'>('CRM')
const selectedRoleType = ref<'Dealer' | 'Vendor' | 'Anchor'>('Dealer')

interface DataInterface {
  user_id: string
  module: 'CRM' | 'Bank' | 'Company'
  category: string
  role: string
  name: string
  email: string
  contactNumber: string
}

const { data: roleData, execute: fetchRoles } = await useApi<any>(createUrl('/get/UI/user/roles', {
  query: {
    roleType: selectedRoleType,
  },
}))


const { data: userData } = await useApi<any>(`/get/UI/user/roles/${route.params.id}`)
const { data: permissions } = await useApi<any>(`/UI/roles/permissions/${route.params.id}`)

const defaultData = {
  module: '',
  category: '',
  role: userData.value?.role,
  user_id: route.params.id,
  name: userData.value?.name,
  email: userData.value?.email,
  contactNumber: userData.value?.phone_number,
}

const formData = ref<DataInterface>(<DataInterface>structuredClone(defaultData))

const roles = computed(() => roleData.value)
const commonFields = [
  {
    key: 'name',
    show: true,
    type: 'text',
    model: 'name',
    label: 'Full Name',
    placeholder: 'Enter Full Name',
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
    items: ['Bank', 'Company', 'CRM'],
    rules: [requiredValidator],
  },
]

const crmFields = computed(() => [
  {
    key: 'roles',
    type: 'select',
    show: true,
    model: 'role',
    label: 'Roles',
    placeholder: 'Roles',
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

const onSubmit = async () => {
  try {
    const res = await $api('/auth/UI/edit/user', {
      method: 'POST',
      body: formData.value,
      onResponseError({ response }) {
        const errorMessage = response?.data?.message || 'An error occurred while updating the user';
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
      
      // Redirect to users list page
      await nextTick(() => {
        router.push('/users/list'); 
      });
    }
  } catch (err) {
  }
};




</script>

<template>
  <div v-if="userData">
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      color="success"
      location="top end"
      variant="flat"
    >
      User updated Successfully
    </VSnackbar>
    <VCard>
      <VRow>
        <VCol
          :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
          cols="12"
          md="4"
        >
          <VCardText>
            <!-- 👉 Stepper -->
            <AppStepper
              v-model:current-step="currentStep"
              :items="numberedSteps"
              class="stepper-icon-step-bg"
              direction="vertical"
              icon-size="24"
            />
          </VCardText>
        </VCol>
        <!-- 👉 stepper content -->
        <VCol
          cols="12"
          md="8"
        >
          <VCardText>
            <VForm>
              <VWindow
                v-model="currentStep"
                class="disable-tab-transition"
              >
                <VWindowItem>
                  <VRow>
                    <template
                      v-for="field in dynamicFormFields"
                      :key="field.key"
                    >

                      <template v-if="field.type === 'select' && field.key === 'roleTypes' && !field.show">
                        <VCol
                          cols="12"
                          md="12"
                        >
                          <AppSelect
                            v-model="selectedRoleType"
                            :items="field.items"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            :rules="field.rules"
                          />
                        </VCol>
                      </template>
                      <template v-else-if="field.type === 'select' && field.show">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppSelect
                            v-model="formData[field.model]"
                            :items="field.items"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            :rules="field.rules"
                            chips
                            multiple
                            closable-chips
                          />
                        </VCol>
                      </template>
                      <template v-else-if="field.type === 'text'">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppTextField
                            v-model="formData[field.model]"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            :readonly="field.readonly"
                            :rules="field.rules"
                          />
                        </VCol>
                      </template>
                      <template v-else-if="field.type === 'email'">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppTextField
                            v-model="formData[field.model]"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            :readonly="field.readonly"
                            :rules="field.rules"
                          />
                        </VCol>
                      </template>
                      <template>
                      <div v-if="userData">

                        <VCol cols="12" md="8">
                          <AppTextField
                            v-model="formData.contactNumber"
                            label="Phone Number"
                            placeholder="+254 XXX XXX XXX"
                            :rules="[requiredValidator, numericValidator]"
                            inputmode="tel"
                            pattern="^\+?\d*$"
                            maxlength="15" 
                          />
                        </VCol>

                      </div>
                    </template>

                    </template>
                  </VRow>
                </VWindowItem>
    
              </VWindow>

              <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                <VBtn
                  append-icon="tabler-check"
                  color="success"
                  @click="onSubmit"
                >
                  submit
                </VBtn>
              </div>
            </VForm>
          </VCardText>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>
