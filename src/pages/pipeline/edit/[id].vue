<script lang="ts" setup>
import { debounce } from 'lodash'
import { ref } from 'vue'
import type { User } from '@core/types'

definePage({
  meta: {
    action: 'manage',
    subject: 'Edit Contact',
  },
})

const errors = ref<Record<string, any | undefined>>({
  message: undefined,
  statusCode: undefined,
})

interface RouteParams {
  id?: number
}

const router = useRouter()
const userData = useCookie<User>('userData')
const userName = ref<string>(userData.value.name)
const route = useRoute()
const editID: Ref<number | undefined> = ref((route.params as RouteParams).id)

const iconsSteps = [
  {
    title: 'Account Details',
    icon: 'custom-address',
  },
  {
    title: 'Account Info',
    icon: 'custom-wizard-personal',
  },
  {
    title: 'Address',
    icon: 'custom-wizard-address',
  },
  {
    title: 'Other Details',
    icon: 'custom-wizard-social-link',
  },
  {
    title: 'Review & Submit',
    icon: 'custom-wizard-submit',
  },
]

const currentStep = ref<number>(0)
const isCompany = ref<boolean>(false)
const isSameAsPhone = ref<boolean>(false)

const leadTypeItems = ['Individual', 'Corporate']

interface FormData {
  name: string
  company: string
  tatDays: number
  department: string
  lead_type: 'Individual' | 'Corporate'
  product: 'vendor financing' | 'dealer financing'
  email: string
  point_of_contact?: string | null
  phone_number: string
  whatsapp_number: string
  bank_id: string
  industry: null
  region?: string | null
  location?: string | null
  gender?: 'male' | 'female' | 'Other'
  firstName: string
  lastName: string
  contactEmail: string
  contact_phone_number: string
  contact_role: string
  contactRole: string
  status: 'hot' | 'warm' | 'cold'
  priority: 'high' | 'medium' | 'low'
  source: string
  owner: string
  branch: string
  associated_user: string
  interaction_type: 'phone' | 'email' | 'sms' | 'physical'
  very_next_step: string
  note: ''
}

// Initial formData without gender
const baseFormData: FormData = {
  gender: 'Other',
  firstName: '',
  lastName: '',
  contactEmail: '',
  contact_phone_number: '',
  contact_role: '',
  contactRole: '',
  whatsapp_number: '',
  name: '',
  company: '',
  tatDays: 0,
  department: '',
  lead_type: 'Individual',
  product: 'vendor financing',
  email: '',
  phone_number: '07000000',
  point_of_contact: null,
  bank_id: '1',
  region: null,
  industry: null,
  location: null,
  status: 'hot',
  priority: 'high',
  source: 'Google',
  owner: userName.value,
  branch: 'Nairobi',
  associated_user: '',
  interaction_type: 'email',
  very_next_step: 'call',
  note: '',
}

const isNotificationVisible = ref(false)

const checkEmailExists = debounce(async (email: string) => {
  try {
    const { exists } = await $api('/check/email', {
      method: 'POST',
      query: {
        email,
      },
    })

    console.log('Testing email response', exists)
    if (exists)
      errors.value.message = 'Email already exists.'
    else
      errors.value.message = ''
  }
  catch (error) {
    console.error('Error checking email:', error)
    errors.value.message = 'Error checking email.'
  }
}, 500)

const formData = ref<FormData>(baseFormData)

watchEffect(() => {
  isCompany.value = formData.value.lead_type !== 'Corporate'
})

const whatsappNumber = computed({
  get() {
    return isSameAsPhone.value ? formData.value.phone_number : formData.value.whatsapp_number
  },
  set(value) {
    // Update the correct property based on isSameAsPhone
    if (isSameAsPhone.value)
      formData.value.phone_number = value
    else
      formData.value.whatsapp_number = value
  },
})

const onSubmit = async () => {
  try {
    const res = await $api(`/update/UI/pipeline/data/${editID.value}`, {
      method: 'POST',
      body: formData.value,
      onResponseError({ response }) {
        console.log('Error', response)
        errors.value = response._data.errors
      },
    })

    console.log(res)

    const { message } = res

    console.log(message)
    isNotificationVisible.value = true
    setTimeout(() => {
      navigateToPipelineWithTab('Contacts')
    }, 3000)
  }
  catch (err) {
    console.error(err)
  }

  async function navigateToPipelineWithTab(tabName: string) {
    await nextTick()
    await router.push({ path: `/pipeline/contacts/${tabName}` })
  }
}

watch(() => formData.value.email, newEmail => {
  errors.value.message = ''
  if (newEmail)
    checkEmailExists(newEmail)
})

const fetchPipelineData = async () => {
  const data = await $api(`/get/UI/pipeline/${editID.value}`).catch(err => console.log(err))

  formData.value = data[0]
}

const resolveCompany = () => {
  if (!isCompany.value)
    return 'Corporate'

  return ''
}

onMounted(() => {
  fetchPipelineData()
})
</script>

<template>
  <VSnackbar
    v-model="isNotificationVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    Data Successfully saved
  </VSnackbar>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      :items="iconsSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.lead_type"
                  :items="leadTypeItems"
                  label="Lead Type"
                  placeholder="Select Lead Type"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.name"
                  :label="`${resolveCompany()} Name`"
                  placeholder="Enter Name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  :label="`${resolveCompany()} Email`"
                  placeholder="@yofinvoice.com"
                  type="email"
                />
              </VCol>
              <VCol
                v-if="isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.phone_number"
                  label="Phone Number"
                  placeholder="070000000"
                  type="number"
                />
              </VCol>
              <VCol
                v-if="isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="whatsappNumber"
                  label="WhatsApp Number"
                  placeholder="070000000"
                  type="number"
                />
                <VCheckbox
                  v-model="isSameAsPhone"
                  label="Same as Phone Number"
                />
              </VCol>
              <VCol
                v-if="isCompany"
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.gender"
                  :items="['Male', 'Female', 'Others']"
                  label="Gender"
                  placeholder="Select Gender"
                />
              </VCol>
              <VCol
                v-if="!isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.contactEmail"
                  :rules="[requiredValidator]"
                  label="Contact Email"
                  placeholder="Contact Email"
                  type="email"
                />
              </VCol>
              <VCol
                v-if="!isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.contact_phone_number"
                  :rules="[requiredValidator]"
                  label="Corporate Phone Number"
                  placeholder="Corporate Phone Number"
                  type="text"
                />
              </VCol>
              <VCol
                v-if="!isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.contact_role"
                  :rules="[requiredValidator]"
                  label="Contact Role"
                  placeholder="Contact Role"
                  type="text"
                />
              </VCol>
              <VCol
                v-if="!isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.department"
                  :rules="[requiredValidator]"
                  label="Department"
                  placeholder="Department"
                  type="text"
                />
              </VCol>
              <VCol
                v-if="!isCompany"
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.website"
                  label="Website"
                  placeholder="Website Link"
                  type="text"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.product"
                  :items="['Vendor Financing', 'Dealer Financing']"
                  label="Product Type"
                  placeholder="Select Product Type"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.status"
                  :items="['Hot', 'Cold', 'Warm']"
                  label="Status"
                  placeholder="Status"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.source"
                  :items="['Email',
                           'Marketing',
                           'Outdoor',
                           'LinkedIn',
                           'Messages',
                           'Google',
                           'Adverts']"
                  label="Source"
                  placeholder="Source"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.associated_user"
                  :items="['Ish', 'Kings', 'Linet', 'Martin', 'Barry']"
                  label="Associated User"
                  placeholder="Select Associated User"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.industry"
                  :items="['ICT',
                           'Healthcare',
                           'Finance and Banking',
                           'Retail',
                           'Manufacturing',
                           'Education',
                           'Transportation and Logistics',
                           'Energy and Utilities',
                           'Hospitality and Tourism',
                           'Agriculture']"
                  label="Industy"
                  placeholder="Select Industry"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.region"
                  label="Region"
                  placeholder="region"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.location"
                  label="Location"
                  placeholder="Location"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.branch"
                  label="Branch"
                  placeholder="branch"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Other Details
                </h6>
                <p class="mb-0">
                  Add Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.tatDays"
                  label="Turn Around Time"
                  placeholder="0"
                  type="20"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.department"
                  label="Department"
                  placeholder="ICT"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.company"
                  label="Company"
                  placeholder="Company"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.owner"
                  :placeholder="userName"
                  :value="userName"
                  label="Owner"
                  readonly
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextarea
                  v-model="formData.note"
                  :label="`Add a Note for ${formData.name}`"
                  :placeholder="`Add you note here about ${formData.name} for example a reminder`"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                <strong>
                  Lead Type:
                </strong>

                {{ formData.lead_type }}
              </p>
              <p class="mb-1">
                <strong>
                  Name:
                </strong>
                {{ formData.name }}
              </p>
              <p class="mb-1">
                <strong>
                  Email:
                </strong>
                {{ formData.email }}
              </p>
              <p class="mb-1">
                <strong>
                  Phone Number:
                </strong>
                {{ formData.phone_number }}
              </p>
              <p class="mb-1">
                <strong>
                  WhatsApp Number:
                </strong>
                {{ whatsappNumber }}
              </p>
              <p
                v-if="isCompany"
                class="mb-1"
              >
                <strong>
                  Gender:
                </strong>
                {{ formData.gender }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                <strong>
                  Product Type:
                </strong>
                {{ formData.product }}
              </p>
              <p class="mb-1">
                <strong>
                  Status:
                </strong>
                {{ formData.status }}
              </p>
              <p class="mb-1">
                <strong>
                  Source:
                </strong>
                {{ formData.source }}
              </p>
              <p class="mb-1">
                <strong>
                  Associated User
                </strong>
                {{ formData.associated_user }}
              </p>
              <p class="mb-1">
                <strong>
                  Industry
                </strong>
                {{ formData.industry }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                <strong>
                  Region:
                </strong>
                {{ formData.region }}
              </p>
              <p class="mb-1">
                <strong>
                  Location:
                </strong>
                {{ formData.location }}
              </p>
              <p class="mb-1">
                <strong>
                  Branch:
                </strong>
                {{ formData.branch }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Other Details
              </h6>

              <p class="mb-1">
                <strong>
                  Turn Around Time:
                </strong>
                {{ formData.tatDays }}
              </p>
              <p class="mb-1">
                <strong>
                  Department:
                </strong>
                {{ formData.department }}
              </p>
              <p class="mb-1">
                <strong>
                  Owner:
                </strong>
                {{ formData.owner }}
              </p>
              <p class="mb-1">
                <strong>
                  Note:
                </strong>
                {{ formData.note }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            :disabled="currentStep === 0"
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
            v-if="iconsSteps.length - 1 === currentStep"
            append-icon="tabler-check"
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
              class="flip-in-rtl"
              end
              icon="tabler-arrow-right"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
