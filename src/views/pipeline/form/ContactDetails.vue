<script lang="ts" setup>
import { debounce } from 'lodash'
import { VForm } from 'vuetify/components/VForm'
import type { Account, Address, OtherDetails, SetUp } from './index'
import type { User } from '@core/types'

const errors = ref<Record<string, any | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const success = ref<Record<string, any | undefined>>({
  message: undefined,
  statusCode: undefined,
})

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

const router = useRouter()
const userData = useCookie<User>('userData')
const userName = ref<string>(userData.value.name)
const currentStep = ref<number>(0)
const isCompany = ref<boolean>(false)
const isSameAsPhone = ref<boolean>(false)
const leadTypeItems = ['Individual', 'Corporate']
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refSetUpForm = ref<VForm>()
const refOtherDetailsForm = ref<VForm>()
const refAddressForm = ref<VForm>()

const accountForm = ref<Account>({
  lead_type: 'Individual',
  name: '',
  email: '',
  firstName: '',
  lastName: '',
  contactEmail: '',
  contact_phone_number: '',
  contact_role: '',
  contactRole: '',
  department: '',
  website: '',
  phone_number: '070000000',
  whatsapp_number: '07000000',
  gender: 'Other',
})

const setUpForm = ref<SetUp>({
  product: 'Vendor Financing',
  status: 'Hot',
  priority: 'High',
  source: 'Email',
  associated_user: '',
  industry: '',
})

const addressForm = ref<Address>({
  country: 'Kenya',
  region: 'Nairobi',
  location: '',
  branch: '',
})

const otherDetailsForm = ref<OtherDetails>({
  department: '',
  company: '',
  note: '',
  interaction_type: 'Email',
  tatDays: 20,
  owner: userName.value,
  very_next_step: 'Call',
})

const resolveCompany = () => {
  if (!isCompany.value)
    return 'Corporate'

    return ''
}

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSetUpForm = () => {
  refSetUpForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateOtherDetailsFormForm = () => {
  refOtherDetailsForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const isNotificationVisible = ref(false)

const industries = ref([])
const isLoadingIndustries = ref(false)

onMounted(async () => {
  await loadIndustries()
})

const loadIndustries = async () => {
  isLoadingIndustries.value = true
  try {
    const response = await $api('/industries', {
      method: 'GET'
    })
    
    industries.value = response.data.map(industry => industry.name)
  } catch (error) {
    console.error('Failed to load industries:', error)
  } finally {
    isLoadingIndustries.value = false
  }
}

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

watchEffect(() => {
  isCompany.value = accountForm.value.lead_type !== 'Corporate'
})

const whatsappNumber = computed({
  get() {
    return isSameAsPhone.value ? accountForm.value.phone_number : accountForm.value.whatsapp_number
  },
  set(value) {
    if (isSameAsPhone.value)
      accountForm.value.phone_number = value
    else
      accountForm.value.whatsapp_number = value
  },
})

const isDialogVisible = ref(false)
const isLinkGenerated = ref(false)
const companyDetail = ref<Company>()
const route = useRoute()
const pipeline = ref<string | undefined>((route.params as RouteParams).id)
const { data: pipelineData, execute: fetchData } = await useApi<any>(createUrl('/details/UI/bank/documents'))
const bankDocuments: Ref<BankDocument[]> = computed(() => pipelineData.value.data)

interface Mapped {
  name: string
  bank_id: number
}

const mappedDocuments = computed<Mapped[]>(() => {
  return pipelineData.value.data.map((doc: BankDocument) => ({
    name: doc.name,
    bank_id: doc.id,
  }))
})

const selectedOption = ref({
  name: mappedDocuments.value[0].name,
  bank_id: mappedDocuments.value[0].bank_id,
})

const onSubmit = async () => {
  try {
    const res = await $api('/store/UI/pipeline/data', {
      method: 'POST',
      body: {
        ...accountForm.value,
        ...setUpForm.value,
        ...addressForm.value,
        ...otherDetailsForm.value,
        bank_id: selectedOption.value.bank_id,
      },
      onResponseError({ response }) {
        console.log('Error', response)
        errors.value = response._data.errors
      },
    })

    const { message } = res

    success.value.message = message
    isNotificationVisible.value = true
    setTimeout(() => {
      navigateToPipelineWithTab('Contacts')
    }, 2000)
  }
  catch (err) {
    console.error(err)
  }

  async function navigateToPipelineWithTab(tabName: string) {
    await nextTick()
    await router.push({ path: `/pipeline/contacts/${tabName}` })
  }
}



watch(() => accountForm.value.email, newEmail => {
  errors.value.message = ''
  if (newEmail)
    checkEmailExists(newEmail)
})

const countries = ['Kenya']
const regions = ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo/Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita/Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"]
</script>

<template>
  <VCard>
    <VSnackbar
      v-model="isNotificationVisible"
      color="success"
      location="top end"
      variant="flat"
    >
      {{ success.message }}
    </VSnackbar>
    <!-- 👉 Stepper -->
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :is-active-step-valid="isCurrentStepValid"
        :items="iconsSteps"
      />
    </VCardText>

    <VDivider />
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VForm
              ref="refAccountForm"
              @submit.prevent="validateAccountForm"
            >
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
                    v-model="accountForm.lead_type"
                    :items="leadTypeItems"
                    :rules="[requiredValidator]"
                    label="Lead Type"
                    placeholder="Select Lead Type"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="accountForm.name"
                    :rules="[requiredValidator]"
                    :label="resolveCompany()+' Name'"
                    placeholder="Enter Name"
                  />
                </VCol>

                <!-- <VCol cols="12" md="6">
                  <AppSelect
                    v-model="selectedOption"
                    :items="mappedDocuments"
                    item-title="name"
                    item-value="bank_id"
                    label="Associate Bank"
                    placeholder="Select Bank"
                    return-object
                    single-line
                    @change="fetchData"
                  />
                </VCol> -->

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="accountForm.email"
                    :error-messages="errors.message"
                    :rules="[requiredValidator]"
                    :label="resolveCompany()+' Email'"
                    placeholder="@yofinvoice.com"
                    type="email"
                    @change="checkEmailExists(accountForm.email)"
                  />
                </VCol>
                <VCol
                  v-if="isCompany"
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="accountForm.phone_number"
                    :rules="[requiredValidator]"
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
                    :rules="[requiredValidator]"
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
                    v-model="accountForm.gender"
                    :items="['Male', 'Female', 'Others']"
                    :rules="[requiredValidator]"
                    label="Gender"
                    placeholder="Select Gender"
                  />
                </VCol>
                <VCol v-if="!isCompany" cols="12" md="6">
                  <AppTextField v-model="accountForm.contactEmail" :rules="[requiredValidator]" label="Contact Email" placeholder="Contact Email" type="email"/>
                </VCol>
                <VCol v-if="!isCompany" cols="12" md="6">
                  <AppTextField v-model="accountForm.contact_phone_number" :rules="[requiredValidator]" label="Corporate Phone Number" placeholder="Corporate Phone Number" type="text"/>
                </VCol>
                <VCol v-if="!isCompany" cols="12" md="6">
                  <AppTextField v-model="accountForm.contact_role" :rules="[requiredValidator]" label="Contact Role" placeholder="Contact Role" type="text"/>
                </VCol>
                <VCol v-if="!isCompany" cols="12" md="6">
                  <AppTextField v-model="accountForm.department" :rules="[requiredValidator]" label="Department" placeholder="Department" type="text"/>
                </VCol>
                <VCol v-if="!isCompany" cols="12" md="6">
                  <AppTextField v-model="accountForm.website" label="Website" placeholder="Website Link" type="text"/>
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
              ref="refSetUpForm"
              @submit.prevent="validateSetUpForm"
            >
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
                    v-model="setUpForm.product"
                    :items="['Vendor Financing', 'Dealer Financing']"
                    :rules="[requiredValidator]"
                    label="Product Type"
                    placeholder="Select Product Type"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppSelect
                    v-model="setUpForm.status"
                    :items="['Hot', 'Cold', 'Warm']"
                    :rules="[requiredValidator]"
                    label="Status"
                    placeholder="Status"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppSelect
                    v-model="setUpForm.priority"
                    :items="['High', 'Medium', 'Low']"
                    :rules="[requiredValidator]"
                    label="Priority"
                    placeholder="Priority"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppSelect
                    v-model="setUpForm.source"
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
                    v-model="setUpForm.associated_user"
                    :items="['Ish', 'Kings', 'Linet', 'Martin', 'Barry']"
                    :rules="[requiredValidator]"
                    label="Associated User"
                    placeholder="Select Associated User"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppSelect
                  v-model="setUpForm.industry"
                  :items="industries"
                  :rules="[requiredValidator]"
                  :loading="isLoadingIndustries"
                  label="Industry"
                  placeholder="Select Industry"
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
              ref="refAddressForm"
              @submit.prevent="validateAddressForm"
            >
              <VRow>
                <VCol cols="12">
                  <h6 class="text-h6 font-weight-medium">
                    Address
                  </h6>
                  <p class="mb-0">
                    Enter Your Address.
                  </p>
                </VCol>

                <VCol cols="12" md="6">
                  <AppSelect v-model="addressForm.country" :items="countries" placeholder="Select Country" label="Chips" chips closable-chips/>
                </VCol>

                <VCol cols="12" md="6">
                  <AppSelect v-model="addressForm.region" :items="regions" placeholder="Region" label="Chips" chips closable-chips/>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="addressForm.location"
                    :rules="[requiredValidator]"
                    label="Location"
                    placeholder="Location"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="addressForm.branch"
                    :rules="[requiredValidator]"
                    label="Branch"
                    placeholder="branch"
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
              ref="refOtherDetailsForm"
              @submit.prevent="validateOtherDetailsFormForm"
            >
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
                    v-model="otherDetailsForm.company"
                    :rules="[requiredValidator]"
                    label="Company"
                    placeholder="Company"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="otherDetailsForm.owner"
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
                    v-model="otherDetailsForm.note"
                    :label="`Add a Note for ${accountForm.name}`"
                    :placeholder="`Add you note here about ${accountForm.name} for example a reminder`"
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
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                <strong>
                  Lead Type:
                </strong>

                {{ accountForm.lead_type }}
              </p>
              <p class="mb-1">
                <strong>
                  Name:
                </strong>
                {{ accountForm.name }}
              </p>
              <p class="mb-1">
                <strong>
                  Email:
                </strong>
                {{ accountForm.email }}
              </p>
              <p class="mb-1">
                <strong>
                  Phone Number:
                </strong>
                {{ accountForm.phone_number }}
              </p>
              <p class="mb-1">
                <strong>
                  WhatsApp Number:
                </strong>
                {{ accountForm.whatsapp_number }}
              </p>
              <p
                v-if="isCompany"
                class="mb-1"
              >
                <strong>
                  Gender:
                </strong>
                {{ accountForm.gender }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                <strong>
                  Product Type:
                </strong>
                {{ setUpForm.product }}
              </p>
              <p class="mb-1">
                <strong>
                  Status:
                </strong>
                {{ setUpForm.status }}
              </p>
              <p class="mb-1">
                <strong>
                  Source:
                </strong>
                {{ setUpForm.source }}
              </p>
              <p class="mb-1">
                <strong>
                  Associated User
                </strong>
                {{ setUpForm.associated_user }}
              </p>
              <p class="mb-1">
                <strong>
                  Industry
                </strong>
                {{ setUpForm.industry }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>
              <p class="mb-1">
                <strong>
                  Country:
                </strong>
                {{ addressForm.country }}
              </p>
              <p class="mb-1">
                <strong>
                  Region:
                </strong>
                {{ addressForm.region }}
              </p>
              <p class="mb-1">
                <strong>
                  Location:
                </strong>
                {{ addressForm.location }}
              </p>
              <p class="mb-1">
                <strong>
                  Branch:
                </strong>
                {{ addressForm.branch }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Other Details
              </h6>

              <p class="mb-1">
                <strong>
                  Turn Around Time:
                </strong>
                {{ otherDetailsForm.tatDays }}
              </p>
              <p class="mb-1">
                <strong>
                  Department:
                </strong>
                {{ accountForm.department }}
              </p>
              <p class="mb-1">
                <strong>
                  Owner:
                </strong>
                {{ otherDetailsForm.owner }}
              </p>
              <p class="mb-1">
                <strong>
                  Note:
                </strong>
                {{ otherDetailsForm.note }}
              </p>
            </div>
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

                <VBtn
                  v-if="iconsSteps.length - 1 === currentStep"
                  append-icon="tabler-check"
                  color="success"
                  @click="onSubmit"
                >
                  submit
                </VBtn>
              </div>
            </VCol>
          </VWindowItem>
        </VWindow>
      </VForm>
    </VCardText>
  </VCard>
</template>
