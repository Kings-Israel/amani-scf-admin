<script lang="ts" setup>

const emit = defineEmits<Emit>()

definePage({
  meta: {
    navActiveLink: 'company',
    action: 'manage',
    subject: 'Edit Companies',
  },
})

const router = useRoute('companies-view-id')
const route = useRouter()

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

interface Emit {
  (e: 'update:product_type', value: []): void
}

const { data: roleData } = await useApi<any>(createUrl('/get/UI/user/roles', {
  query: {
    module: 'Bank',
  },
}))

const roles = computed(() => roleData.value)

const numberedSteps = [
  {
    title: 'Company Details',
    icon: 'tabler-building',
    subtitle: 'Name/KRA PIN/Type',
  },
  {
    title: 'Company Address Details',
    icon: 'tabler-location',
    subtitle: 'Location Details',
  },
  {
    title: 'Relationship Manager Details',
    icon: 'tabler-user',
  },
]

const currentStep = ref(0)
const companyID = ref(router.params.id)

const { data: companyData, execute: fetchAboutData } = await useApi<any>(createUrl(`all/UI/companies/${companyID.value}/details`))

const companyTabData = computed(() => companyData.value)

fetchAboutData()

const relationshipManagerName = ref(companyTabData.value.relationship_manager_name)

const companylogo = companyTabData.value.logo

const formData = ref({
  companyName: companyTabData.value.name || '',
  topLevelBorrowerLimit: companyTabData.value.top_level_borrower_limit || '',
  limitExpiryDate: companyTabData.value.limit_expiry_date || '',
  uniqueIdentificationNo: companyTabData.value.unique_identification_number || '',
  branchCode: companyTabData.value.branch_code || '',
  businessIdentificationNo: companyTabData.value.business_identification_number || '',
  organizationType: companyTabData.value.organization_type || '',
  bankCustomer: companyTabData.value.customer_type || '',
  kraPin: companyTabData.value.kra_pin || '',
  CUST_ANCODE: companyTabData.value.cust_ancode || '',
  companyLogo: '',
  city: companyTabData.value.city || '',
  postalCode: companyTabData.value.postal_code || '',
  address: companyTabData.value.address || '',
  relationshipManagerName: '',
  relationshipManagerEmail: companyTabData.value.relationship_manager_email || '',
  relationshipManagerMobile: companyTabData.value.relationship_manager_phone_number || '',
})

const { data: usersData, execute: fetchUsers } = await useApi<ApiResponse | null>(createUrl('/users/UI/list'))

const userNames = computed(() => {
  console.log(usersData.value?.users)
  if (!usersData.value || !usersData.value.users)
    return []

  return usersData.value.users
})

const cities = [
  {
    name: 'Nairobi',
    value: 'Nairobi',
  },
  {
    name: 'Nakuru',
    value: 'Nakuru',
  },
  {
    name: 'Kisumu',
    value: 'Kisumu',
  },
  {
    name: 'Mombasa',
    value: 'Mombasa',
  },
]

const customerType = [
  {
    name: 'Yes',
    value: 'Bank Customer',
  },
  {
    name: 'No',
    value: 'Non-bank Customer',
  },
]

const fetchUserData = async () => {
  const { data, error } = await useApi<any>(createUrl('/get/user/data/for/mapping', {
    query: {
      id: relationshipManagerName.value,
    },
  }))

  if (error.value)
    return error.value

  formData.value.relationshipManagerName = data.value.name
  formData.value.relationshipManagerEmail = data.value.email
  formData.value.relationshipManagerMobile = data.value.phone_number
}

const formFields = ref([
  {
    key: 'companyName',
    type: 'text',
    model: 'companyName',
    label: 'Company Name',
    placeholder: 'Company Name',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'topLevelBorrowerLimit',
    type: 'text',
    model: 'topLevelBorrowerLimit',
    label: 'Top Level Borrower Limit',
    placeholder: 'Top Level Borrower Limit',
    rules: [requiredValidator],
  },
  {
    key: 'limitExpiryDate',
    type: 'date',
    model: 'limitExpiryDate',
    label: 'Limit Expiry Date',
    placeholder: 'Limit Expiry Date',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'uniqueIdentificationNo',
    type: 'text',
    model: 'uniqueIdentificationNo',
    label: 'Unique Identification No.',
    placeholder: 'Unique Identification No.',
    readonly: true,
  },
  {
    key: 'branchCode',
    type: 'text',
    model: 'branchCode',
    label: 'Branch Code',
    placeholder: 'Branch Code',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'businessIdentificationNo',
    type: 'text',
    model: 'businessIdentificationNo',
    label: 'Business Identification No.',
    placeholder: 'Business Identification No.',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'organizationType',
    type: 'text',
    model: 'organizationType',
    label: 'Organization Type',
    placeholder: 'Organization Type',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'bankCustomer',
    type: 'text',
    model: 'bankCustomer',
    label: 'Bank Customer',
    placeholder: 'Bank Customer',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'kraPin',
    type: 'text',
    model: 'kraPin',
    label: 'KRA PIN',
    placeholder: 'KRA PIN',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'CUST_ANCODE',
    type: 'text',
    model: 'CUST_ANCODE',
    label: 'CUST_ANCODE',
    placeholder: 'CUST_ANCODE',
    rules: [requiredValidator],
    readonly: false,
  },
  {
    key: 'companyLogo',
    type: 'text',
    model: 'companyLogo',
    label: 'Company Logo',
    placeholder: 'Company Logo',
    rules: [requiredValidator],
    readonly: false,
  },

])

const userFields = ref([
  {
    key: 'city',
    type: 'select',
    items: cities,
    model: 'city',
    label: 'City',
    placeholder: 'City',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'postalCode',
    type: 'text',
    model: 'postalCode',
    label: 'Pin/Zip/Postal Code',
    placeholder: 'Pin/Zip/Postal Code',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'address',
    type: 'text',
    show: true,
    model: 'address',
    label: 'Address',
    placeholder: 'Address',
    rules: [requiredValidator],
  },
])

const managerDetails = ref([
  {
    key: 'relationshipManagerName',
    type: 'select',
    model: 'relationshipManagerName',
    label: 'Relationship Manager Name',
    placeholder: 'Relationship Manager Name',
    readonly: false,
    rules: [requiredValidator],
  },
  {
    key: 'relationshipManagerEmail',
    type: 'text',
    model: 'relationshipManagerEmail',
    label: 'Relationship Manager Email',
    placeholder: 'Relationship Manager Email',
    readonly: true,
    rules: [requiredValidator],
  },
  {
    key: 'relationshipManagerMobile',
    type: 'text',
    model: 'relationshipManagerMobile',
    label: 'Relationship Manager Mobile',
    placeholder: 'Relationship Manager Mobile',
    readonly: true,
    rules: [requiredValidator],
  },
])

const isFlatSnackbarVisible = ref(false)
const iserrorFlatSnackbarVisible = ref(false)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const usersItems = ref<Users[]>([])

const { data: mappingUserData } = await useApi<any>(createUrl('/users/UI/list/?itemsPerPage=100'))
const users = computed(() => mappingUserData.value.users)

usersItems.value = users.value

const errormessage = ref('')

const onSubmit = async () => {
  const data = new FormData()

  data.append('company_id', companyID.value)
  data.append('companyName', formData.value.companyName)
  data.append('topLevelBorrowerLimit', formData.value.topLevelBorrowerLimit)
  data.append('limitExpiryDate', formData.value.limitExpiryDate)
  data.append('uniqueIdentificationNo', formData.value.uniqueIdentificationNo)
  data.append('branchCode', formData.value.branchCode)
  data.append('businessIdentificationNo', formData.value.businessIdentificationNo)
  data.append('organizationType', formData.value.organizationType)
  data.append('bankCustomer', formData.value.bankCustomer)
  data.append('kraPin', formData.value.kraPin)
  data.append('CUST_ANCODE', formData.value.CUST_ANCODE)
  if (formData.value.companyLogo)
    data.append('companyLogo', formData.value.companyLogo[0])

  data.append('city', formData.value.city)
  data.append('postalCode', formData.value.postalCode)
  data.append('address', formData.value.address)
  data.append('relationshipManagerName', formData.value.relationshipManagerName)
  data.append('relationshipManagerEmail', formData.value.relationshipManagerEmail)
  data.append('relationshipManagerMobile', formData.value.relationshipManagerMobile)

  await $api('/company/edit', {
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
      route.push({ path: `/company` });
    }),
  3000,
  )
}

fetchUsers()

watch(relationshipManagerName, () => {
  fetchUserData()
})
</script>

<template>
  <VSnackbar
    v-model="isFlatSnackbarVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    Company Updated Successfully
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
                    v-for="field in formFields"
                    :key="field.key"
                  >
                    <template v-if="field.key === 'limitExpiryDate'">
                      <VCol
                        cols="12"
                        md="6"
                      >
                        <AppDateTimePicker
                          v-model="formData[field.model]"
                          :label="field.label"
                          class="me-3"
                          clear-icon="tabler-x"
                          clearable
                          placeholder="Select Date"
                        />
                      </VCol>
                    </template>
                    <template v-else-if="field.key === 'bankCustomer'">
                      <VCol
                        cols="12"
                        md="6"
                      >
                        <AppSelect
                          v-model="formData[field.model]"
                          :items="customerType"
                          item-title="name"
                          item-value="value"
                          :rules="field.rules"
                          :label="field.label"
                          :placeholder="field.placeholder"
                        />
                      </VCol>
                    </template>
                    <template v-else-if="field.key === 'companyLogo'">
                      <VCol
                        cols="12"
                        md="6"
                      >
                        <div class="mb-5">
                          <img
                            height="50"
                            width="50"
                            :src="companylogo"
                            alt="Company Logo"
                          >
                        </div>
                        <div class="d-flex flex-wrap gap-4 justify-sm-flex-start">
                          <label>Company Logo</label>
                        </div>
                        <VFileInput
                          v-model="formData[field.model]"
                          label="Company Logo"
                          accept="image/*"
                        />
                      </VCol>
                    </template>
                    <template v-else>
                      <VCol
                        cols="12"
                        md="6"
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
                  <VCol
                    cols="12"
                    md="12"
                  />
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <template
                    v-for="field in userFields"
                    :key="field.key"
                  >
                    <template v-if="field.key === 'city'">
                      <VCol
                        cols="12"
                        md="8"
                      >
                        <AppSelect
                          v-model="formData[field.model]"
                          :items="cities"
                          item-title="name"
                          item-value="name"
                          :rules="field.rules"
                          chips
                          :label="field.label"
                          placeholder="Select City"
                        />
                      </VCol>
                    </template>
                    <template v-else="field.key">
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
                  <VCol
                    cols="12"
                    md="12"
                  />
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <template
                    v-for="field in managerDetails"
                    :key="field.key"
                  >
                    <template v-if="field.key === 'relationshipManagerName'">
                      <VCol
                        cols="12"
                        md="8"
                      >
                        <AppAutocomplete
                          v-model="relationshipManagerName"
                          chips
                          closable-chips
                          :items="usersItems"
                          item-title="fullName"
                          item-value="id"
                          placeholder="Search Users"
                          label="Relationship Manager Name"
                        />
                      </VCol>
                    </template>
                    <template v-else="field.key">
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
                  <VCol
                    cols="12"
                    md="12"
                  />
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
