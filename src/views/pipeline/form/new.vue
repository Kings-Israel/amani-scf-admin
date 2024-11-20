<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'
import type { FormData } from './index'

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

const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refOtherDetailsForm = ref<VForm>()
const refAddressForm = ref<VForm>()

const accountForm = ref({
  lead_type: 'Individual',
  name: '',
  email: '',
  phone_number: '070000000',
  whatsapp_number: '07000000',
  gender: 'Other',
})

const setUpForm = ref({
  product: 'Vendor Financing',
  status: 'Hot',
  priority: 'high',
  source: 'Email',
  associated_user: '',
  industry: '',
})

const addressForm = ref({
  region: '',
  location: '',
  branch: '',
})

const otherDetailsForm = ref({
  department: '',
  note: '',
  interaction_type: 'Email',
})

const baseFormData: FormData = {
  gender: 'Other',
  whatsapp_number: '',
  name: '',
  company: '',
  tatDays: 20,
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
  owner: '',
  branch: 'Nairobi',
  associated_user: 'Nairobi',
  interaction_type: 'email',
  very_next_step: 'call',
  note: '',
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
  refPersonalForm.value?.validate().then(valid => {
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

const formData = ref<FormData>(baseFormData)

const onSubmit = () => {
  console.log(formData.value)
}

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
</script>

<template>
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
                  v-model="formData.name"
                  :rules="[requiredValidator]"
                  label="Name"
                  placeholder="Enter Name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  :rules="[requiredValidator]"
                  label="Email"
                  placeholder="@yofinvoice.com"
                  type="email"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.phone_number"
                  :rules="[requiredValidator]"
                  label="Phone Number"
                  placeholder="070000000"
                  type="number"
                />
              </VCol>
              <VCol
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
                  v-model="formData.gender"
                  :items="['Male', 'Female', 'Others']"
                  :rules="[requiredValidator]"
                  label="Gender"
                  placeholder="Select Gender"
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
                  v-model="formData.status"
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
                  v-model="formData.source"
                  :items="['Email',
                           'Marketing',
                           'Outdoor',
                           'LinkedIn',
                           'Messages',
                           'Google',
                           'Adverts']"
                  :rules="[requiredValidator]"
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
                  :rules="[requiredValidator]"
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
                  :rules="[requiredValidator]"
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
                  v-model="formData.branch"
                  :rules="[requiredValidator]"
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
                  v-model="formData.department"
                  :rules="[requiredValidator]"
                  label="Department"
                  placeholder="ICT"
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
                  :rules="[requiredValidator]"
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
                {{ formData.whatsapp_number }}
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
