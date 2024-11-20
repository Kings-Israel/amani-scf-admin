<script lang="ts" setup>
import Configuration from '@/pages/bank/forms/configuration.vue';
import TermsConditions from '@/pages/bank/forms/terms-conditions.vue';
import BankLogo from '@/pages/bank/new/BankLogo.vue';
import UserManuals from '@/pages/bank/new/UserManuals.vue';
import { countryCodes } from "@/pages/bank/new/index";
import { VForm } from 'vuetify/components/VForm';

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

definePage({
  meta: {
    navActiveLink: 'bank-banks',
    action: 'manage',
    subject: 'Edit Banks & Mapping',
  },
})

const router = useRouter()

interface Users {
  id: string
  fullName: string
  avatar: string
}

interface Roles {
  id: string
  name: string
}

interface ApiResponse {
  users?: Users[]
}

interface Props {
  productYtype: []
}

interface Emit {
  (e: 'update:productYtype', value: []): void
}


const refBankDetails = ref<VForm>()
const refBankUser = ref<VForm>()
const refLogoTheme = ref<VForm>()
const refConfigurations = ref<VForm>()
const refBankManuals = ref<VForm>()
const isCurrentStepValid = ref(true)

const { data: roleData } = await useApi<any>(createUrl('/get/UI/user/roles', {
  query: {
    module: 'Bank',
  },
}))

const roles = computed(() => roleData.value)

const numberedSteps = [
  {
    title: 'Bank Details',
    icon: 'tabler-building',
    subtitle: 'Setup bank details',
  },
  {
    title: 'Bank User',
    icon: 'tabler-user',
    subtitle: 'Setup account details',
  },
  {
    title: 'Logo & Theme',
    icon: 'tabler-brush',
    subtitle: 'Logos and themes',
  },
  {
    title: 'Bank Configurations',
    icon: 'tabler-settings',
    subtitle: 'Configurations',
  },
  {
    title: 'User Manuals',
    icon: 'tabler-settings',
    subtitle: 'User manuals',
  },
  {
    title: 'Review & Submit',
    icon: 'tabler-settings',
    subtitle: 'Review & Submit',
  },

  // {
  //   title: 'Terms & Conditions',
  //   icon: 'tabler-settings',
  //   subtitle: 'Terms & Conditions',
  // },
]

const logoTitle = 'Drag and drop your logo here'
const favTitle = 'Drag and drop your favicon here'

const currentStep = ref(0)

const validateAccountForm = () => {
  refBankDetails.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateBankUserForm = () => {
  refBankUser.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateLogoThemeForm = () => {
  refLogoTheme.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateBankConfigForm = () => {
  refConfigurations.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateBankManualsForm = () => {
  refBankManuals.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}


const cCode = ref();

const formData = ref({
  user: [],
  name: '',
  branch: '',
  bankUrl: '',
  bankEmail: '',
  productType: ref([]),
  mapUser: '',
  contactEmail: '',
  contactPersonName: '',
  phoneNumber: '',
  logo: [],
  favicon: [],
  webbanner: '',
  page_title: '',
  primary_color: '#014b9d',
  secondary_color: '#014b9d',

  selectedCurrencyIds: '',
  selectedRateIds: '',
  selectedTaxIds: '',
  defaultCurrencyId: '',
  defaultRateId: '',
  defaultTaxId: '',
  offdays: '',
  languages: '',
  date_format: '',
  help_contact_number: '',
  help_contact_email: '',

  bank_user_manual: [],
  use_default_bank_manual: false,
  factoring_user_manual: [],
  use_default_factoring_manual: false,
  vendor_user_manual: [],
  use_default_vendor_manual: false,
  dealer_user_manual: [],
  use_default_dealer_manual: false,

  terms_and_conditions: '',
  terms_and_conditions_companies: '',
  terms_and_conditions_vendors: '',
})

const computedUrl = computed({
  get() {
    return `${import.meta.env.VITE_BANK_BASE_URL}bank/${formData.value.name}`
  },
  set(value) {
    formData.value.bankUrl = value
  },
})

const { data: usersData, execute: fetchUsers } = await useApi<ApiResponse | null>(createUrl('/users/UI/list'))

const userNames = computed(() => {
  console.log(usersData.value?.users)
  if (!usersData.value || !usersData.value.users)
    return []

  return usersData.value.users
})


const productYtype = ref([
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Factoring', value: 'factoring' },
])

const userFields = ref([
  {
    key: 'mapuser',
    type: 'select',
    model: 'mapUser',
    label: 'Map User',
    placeholder: 'Map User',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'contactPersonName',
    type: 'text',
    model: 'contactPersonName',
    label: 'Full Name *',
    placeholder: 'john doe',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'email',
    type: 'email',
    model: 'contactEmail',
    label: 'Email  *',
    placeholder: 'Contact Email Address',
    rules: [requiredValidator, emailValidator],
    readonly: false,
  },
  {
    key: 'phoneNumber',
    type: 'text',
    model: 'phoneNumber',
    label: 'Phone Number  *',
    placeholder: '',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'role',
    type: 'select',
    show: true,
    model: 'role',
    label: 'Role  *',
    placeholder: 'Select Role',
    rules: [requiredValidator],
  },
])

const formFields = ref([
  {
    key: 'productType',
    type: 'select',
    model: 'productType',
    label: 'Product Type  *',
    placeholder: 'Select Product Type',
    items: productYtype,
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'name',
    type: 'text',
    model: 'name',
    label: 'Name  *',
    placeholder: 'Enter the name ',
    rules: [requiredValidator],
  },
  {
    key: 'branch',
    type: 'text',
    model: 'branch',
    label: 'Branch  *',
    placeholder: 'Enter the Branch ',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'bankUrl',
    type: 'text',
    model: computedUrl,
    label: 'Bank URL',
    placeholder: 'Enter the Branch ',
    readonly: true,
  },
  {
    key: 'email',
    type: 'email',
    model: 'bankEmail',
    label: 'Bank Email  *',
    placeholder: 'Contact Email Address',
    rules: [requiredValidator, emailValidator],
    readonly: false,
  },

])

const isFlatSnackbarVisible = ref(false)
const iserrorFlatSnackbarVisible = ref(false)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const usersItems = ref<Users[]>([])

const { data: mappingUserData } = await useApi<any>(createUrl('/users/UI/list'))
const users = computed(() => mappingUserData.value.users)

usersItems.value = users.value

const errormessage = ref('')

const onSubmit = async () => {
  const data = new FormData()

  for (const file of formData.value.bank_user_manual)
    data.append('bank_user_manual[]', file.file)

  for (const file of formData.value.factoring_user_manual)
    data.append('factoring_user_manual[]', file.file)

  for (const file of formData.value.vendor_user_manual)
    data.append('vendor_user_manual[]', file.file)

  for (const file of formData.value.dealer_user_manual)
    data.append('dealer_user_manual[]', file.file)

  data.append('product_type', formData.value.productType)
  data.append('name', formData.value.name)
  data.append('branch', formData.value.branch)
  data.append('bankUrl', formData.value.bankUrl)
  data.append('bankEmail', formData.value.bankEmail)
  data.append('mapUser', formData.value.mapUser)
  data.append('contactEmail', formData.value.contactEmail)
  data.append('contactPersonName', formData.value.contactPersonName)
  data.append('phoneNumber', cCode.value + formData.value.phoneNumber)
  data.append('role', formData.value.role)
  console.log (formData.value.logo[0])
  if(formData.value.logo[0] != undefined){
    data.append('logo', formData.value.logo[0].file)
  }
  data.append('webbanner', formData.value.webbanner[0])
  data.append('page_title', formData.value.page_title)
  data.append('primary_color', formData.value.primary_color)
  data.append('secondary_color', formData.value.secondary_color)

  data.append('use_default_bank_manual', formData.value.use_default_bank_manual)
  data.append('use_default_factoring_manual', formData.value.use_default_factoring_manual)
  data.append('use_default_vendor_manual', formData.value.use_default_vendor_manual)
  data.append('use_default_dealer_manual', formData.value.use_default_dealer_manual)

  data.append('selectedCurrencyIds', formData.value.selectedCurrencyIds)
  data.append('selectedRateIds', formData.value.selectedRateIds)
  data.append('selectedTaxIds', formData.value.selectedTaxIds)
  data.append('defaultCurrencyId', formData.value.defaultCurrencyId)
  data.append('defaultRateId', formData.value.defaultRateId)
  data.append('defaultTaxId', formData.value.defaultTaxId)
  data.append('offdays', formData.value.offdays)
  data.append('languages', formData.value.languages)
  data.append('date_format', formData.value.date_format)
  data.append('help_contact_number', formData.value.help_contact_number)

  data.append('help_contact_email', formData.value.help_contact_email)

  await $api('/UI/new/bank', {
    method: 'POST',
    body: data,
    onResponseError({ response }) {
      errors.value = response._data.errors
      isFlatSnackbarVisible.value = false
      iserrorFlatSnackbarVisible.value = true
      errormessage.value = JSON.stringify(errors.value, null, 2)
    },
  })
  isFlatSnackbarVisible.value = true
  setTimeout(async () =>
    await nextTick(() => {
      router.push('/bank/banks')
    }),
  3000,
  )
}

fetchUsers()
</script>

<template>
  <VSnackbar
    v-model="isFlatSnackbarVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    New Bank Created Successfully
  </VSnackbar>
  <VSnackbar
    v-model="iserrorFlatSnackbarVisible"
    color="error"
    location="top end"
    variant="flat"
  >
    {{ errormessage }}
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
            :is-active-step-valid="isCurrentStepValid"
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
                <VForm
                  ref="refBankDetails"
                  @submit.prevent="validateAccountForm"
                >
                  <VRow>
                    <template
                      v-for="field in formFields"
                      :key="field.key"
                    >
                      <template v-if="field.key === 'bankUrl'">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppTextField
                            v-model="computedUrl"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            :readonly="field.readonly"
                            :rules="field.rules"
                          />
                        </VCol>
                      </template>
                      <template v-else-if="field.key === 'productType'">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppSelect
                            v-model="formData[field.model]"
                            :item-title="productYtype.title"
                            :item-value="productYtype.value"
                            :items="productYtype"
                            :rules="field.rules"
                            chips
                            multiple
                            :label="field.label"
                            placeholder="Select Product Type"
                          />
                        </VCol>
                      </template>
                      <template v-else>
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
                    </template>
                    <VCol cols="12">
                        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                          <VBtn
                            color="secondary"
                            variant="tonal"
                            @click="currentStep--"
                          >
                            <VIcon
                              class="flip-in-rtl"
                              icon="tabler-arrow-left"
                              start
                            />
                            Previous
                          </VBtn>

                          <VBtn type="submit">
                            Next
                            <VIcon
                              class="flip-in-rtl"
                              end
                              icon="tabler-arrow-right"
                            />
                          </VBtn>
                        </div>
                    </VCol>
                  </VRow>
                </VForm>
              </VWindowItem>
              <VWindowItem>
                <VForm
                  ref="refBankUser"
                  @submit.prevent="validateBankUserForm"
                >
                  <VRow>
                    <template
                      v-for="field in userFields"
                      :key="field.key"
                    >
                      <template v-if="field.key === 'mapuser'">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppAutocomplete
                            v-model="formData[field.model]"
                            chips
                            closable-chips
                            :items="usersItems"
                            item-title="fullName"
                            item-value="id"
                            placeholder="Search Users"
                            label="Map Existing User"
                          />
                        </VCol>
                      </template>
                      <template v-else-if="field.key === 'role'">
                        <VCol
                          cols="12"
                          md="8"
                        >
                          <AppSelect
                            v-model="formData[field.model]"
                            :item-title="(item:Roles) => item.name"
                            :item-value="(item:Roles) => item.id"
                            :items="roles"
                            :rules="field.rules"
                            chips
                            :label="field.label"
                            placeholder="Select Role"
                          />
                        </VCol>
                      </template>
                      <template v-else-if="field.key === 'phoneNumber'">
                        <VCol
                          cols="12"
                          md="12"
                        >
                        <VRow>
                        <VCol
                          cols="12"
                          md="2"
                        >
                        <AppAutocomplete
                        v-model="cCode"
                            label="Country Code  *"
                            :items="countryCodes"
                            item-title="code"
                            item-value="code"
                            placeholder="Select Country"
                            clearable
                            :rules="[requiredValidator]"
                          />
                        </VCol>
                        <VCol
                          cols="12"
                          md="7"
                        >
                        <AppTextField
                            v-model="formData[field.model]"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            :readonly="field.readonly"
                            :rules="field.rules"
                          />
                        </VCol>
                        </VRow>
                          </VCol>
                      </template>
                      <template v-else="field.key">
                        <template v-if="!formData.mapUser">
                          <VCol
                            cols="12"
                            md="8"
                          >
                            <AppTextField
                              v-model="formData[field.model]"
                              :label="field.label"
                              :placeholder="field.placeholder"
                              :readonly="field.readonly"
                            />
                          </VCol>
                        </template>
                      </template>
                    </template>
                    <VCol cols="12">
                      <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                        <VBtn
                          color="secondary"
                          variant="tonal"
                          @click="currentStep--"
                        >
                          <VIcon
                            class="flip-in-rtl"
                            icon="tabler-arrow-left"
                            start
                          />
                          Previous
                        </VBtn>

                        <VBtn type="submit">
                          Next
                          <VIcon
                            class="flip-in-rtl"
                            end
                            icon="tabler-arrow-right"
                          />
                        </VBtn>
                      </div>
                    </VCol>
                  </VRow>
              </VForm>
              </VWindowItem>
              <VWindowItem>
                <VForm
                  ref="refLogoTheme"
                  @submit.prevent="validateLogoThemeForm"
                >
                <VRow>
                  <VCol
                    cols="12"
                    md="12"
                  >
                    <AppTextField
                      v-model="formData.page_title"
                      label="Page Title  *"
                      placeholder="Page Title"
                      :rules="[requiredValidator]"
                      style="inline-size: 50%;"
                    />
                  </VCol>
                  <!-- 👉 Color -->
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <p>Logo</p>
                    <BankLogo
                      v-model:file="formData.logo"
                      v-model:title="logoTitle"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="3"
                  >
                    <p>Favicon</p>
                    <BankLogo
                      v-model:file="formData.favicon"
                      v-model:title="favTitle"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="12"
                  >
                    <AppTextField
                      v-model="formData.primary_color"
                      type="color"
                      label="Theme Primary Color  *"
                      placeholder="Select Primary Color"
                      style="inline-size: 30%;"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="12"
                  >
                    <AppTextField
                      v-model="formData.secondary_color"
                      type="color"
                      label="Theme Secondary Color"
                      placeholder="Select Secondary Color"
                      style="inline-size: 30%;"
                    />
                  </VCol>
                  <VCol cols="12">
                    <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                      <VBtn
                        color="secondary"
                        variant="tonal"
                        @click="currentStep--"
                      >
                        <VIcon
                          class="flip-in-rtl"
                          icon="tabler-arrow-left"
                          start
                        />
                        Previous
                      </VBtn>

                      <VBtn type="submit">
                        Next
                        <VIcon
                          class="flip-in-rtl"
                          end
                          icon="tabler-arrow-right"
                        />
                      </VBtn>
                    </div>
                  </VCol>
                </VRow>
              </VForm>
              </VWindowItem>
              <VWindowItem>
                <VForm
                  ref="refConfigurations"
                  @submit.prevent="validateBankConfigForm"
                >
                  <Configuration
                    v-model:selectedCurrencyIds="formData.selectedCurrencyIds"
                    v-model:selectedRateIds="formData.selectedRateIds"
                    v-model:selectedTaxIds="formData.selectedTaxIds"
                    v-model:defaultCurrencyId="formData.defaultCurrencyId"
                    v-model:defaultRateId="formData.defaultRateId"
                    v-model:defaultTaxId="formData.defaultTaxId"
                    v-model:languages="formData.languages"
                    v-model:date_format="formData.date_format"
                    v-model:offdays="formData.offdays"
                    v-model:help_contact_phone="formData.help_contact_number"
                    v-model:help_contact_email="formData.help_contact_email"
                  />
                  <VCol cols="12">
                  <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                    <VBtn
                      color="secondary"
                      variant="tonal"
                      @click="currentStep--"
                    >
                      <VIcon
                        class="flip-in-rtl"
                        icon="tabler-arrow-left"
                        start
                      />
                      Previous
                    </VBtn>

                    <VBtn type="submit">
                      Next
                      <VIcon
                        class="flip-in-rtl"
                        end
                        icon="tabler-arrow-right"
                      />
                    </VBtn>
                  </div>
                </VCol>
                </VForm>
              </VWindowItem>
              <VWindowItem>
                <VForm
                  ref="refBankManuals"
                  @submit.prevent="validateBankManualsForm"
                >
                <VRow>
                  <VCol
                    cols="12"
                    md="12"
                  >
                    <p>Bank User Manual</p>

                    <UserManuals v-model:file="formData.bank_user_manual" />
                  </VCol>
                  <VCol
                    v-if="formData.productType.includes('factoring')"
                    cols="12"
                    md="12"
                  >
                    <p>Factoring User Manual</p>

                    <UserManuals v-model:file="formData.factoring_user_manual" />
                  </VCol>
                  <VCol
                    v-if="formData.productType.includes('vendor_financing')"
                    cols="12"
                    md="12"
                  >
                    <p>Vendor User Manual</p>

                    <UserManuals v-model:file="formData.vendor_user_manual" />
                  </VCol>
                  <VCol
                    v-if="formData.productType.includes('dealer_financing')"
                    cols="12"
                    md="12"
                  >
                    <p>Dealer User Manual</p>

                    <UserManuals v-model:file="formData.dealer_user_manual" />
                  </VCol>
                  <VCol cols="12">
                    <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                    <VBtn
                      color="secondary"
                      variant="tonal"
                      @click="currentStep--"
                    >
                      <VIcon
                        class="flip-in-rtl"
                        icon="tabler-arrow-left"
                        start
                      />
                      Previous
                    </VBtn>

                    <VBtn type="submit">
                      Next
                      <VIcon
                        class="flip-in-rtl"
                        end
                        icon="tabler-arrow-right"
                      />
                    </VBtn>
                  </div>
              </VCol>
                </VRow>
              </VForm>
              </VWindowItem>
              <VWindowItem>
                <VForm>
                <VRow>
                  <VCol
                    cols="12"
                    md="12"
                  >
                  <div class="text-base">
                    <h6 class="text-base text-h5 font-weight-medium mb-3">
                      Bank Details
                    </h6>
                    <p class="mb-1">
                      <strong>
                        Product Type:
                      </strong>

                      {{ formData.productType }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Bank Name:
                      </strong>

                      {{ formData.name }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Branch:
                      </strong>

                      {{ formData.name }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Email:
                      </strong>

                      {{ formData.bankEmail }}
                    </p>
                  </div>

                  <div class="text-base mt-5">
                    <h6 class="text-base text-h5 font-weight-medium mb-3">
                      Bank User
                    </h6>
                    <p class="mb-1">
                      <strong>
                        Mapped User:
                      </strong>

                      {{ formData.mapUser }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Full Name:
                      </strong>

                      {{ formData.contactPersonName }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Email:
                      </strong>

                      {{ formData.contactEmail }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Phone Number:
                      </strong>

                      {{ cCode+formData.phoneNumber }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Role:
                      </strong>

                      {{ formData.role }}
                    </p>
                  </div>

                  <div class="text-base mt-5">
                    <h6 class="text-base text-h5 font-weight-medium mb-3">
                      Logo & Theme
                    </h6>
                    <p class="mb-1">
                      <strong>
                        Page Title:
                      </strong>

                      {{ formData.page_title }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Primary Color:
                      </strong>
                    </p>
                    <!-- <div class="py-5 px-3" style="background-color: '{{ formData.primary_color }}'; width: 200px;"></div> -->
                    {{ formData.primary_color }}

                    <p class="mb-1">
                      <strong>
                        Secondary Color:
                      </strong>
                    </p>
                    {{ formData.secondary_color }}

                  </div>
                  <div class="text-base mt-5">
                    <h6 class="text-base text-h5 font-weight-medium mb-3">
                      Bank Configurations
                    </h6>
                    <p class="mb-1">
                      <strong>
                        Currencies
                      </strong>

                      {{ formData.selectedCurrencyIds }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Default Currency
                      </strong>

                      {{ formData.defaultCurrencyId }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Select Rates
                      </strong>
                      {{ formData.selectedRateIds }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Default Rate
                      </strong>
                      {{ formData.defaultRateId }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Select Tax
                      </strong>
                      {{ formData.selectedTaxIds }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Default Tax
                      </strong>
                      {{ formData.defaultTaxId }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Weekly Off Days
                      </strong>
                      {{ formData.offdays }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Languages
                      </strong>
                      {{ formData.languages }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Date Format
                      </strong>
                      {{ formData.date_format }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Help Page Contact Number
                      </strong>
                      {{ formData.help_contact_number }}
                    </p>
                    <p class="mb-1">
                      <strong>
                        Help Page Contact Email
                      </strong>
                      {{ formData.help_contact_email }}
                    </p>
                  </div>
                  <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      class="flip-in-rtl"
                      icon="tabler-arrow-left"
                      start
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    v-if="numberedSteps.length - 1 === currentStep"
                    append-icon="tabler-check"
                    color="success"
                    @click="onSubmit"
                  >
                    submit
                  </VBtn>
                </div>
                </VCol>
                </VRow>
                </VForm>
              </VWindowItem>
              <VWindowItem>
                <TermsConditions
                  v-model:terms_and_conditions="formData.terms_and_conditions"
                  v-model:terms_and_conditions_companies="formData.terms_and_conditions_companies"
                  v-model:terms_and_conditions_vendors="formData.terms_and_conditions_vendors"
                />
              </VWindowItem>
            </VWindow>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
