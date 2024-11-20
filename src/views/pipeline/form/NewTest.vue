<script lang="ts" setup>
import { debounce } from 'lodash'
import type { User } from '@core/types'

const errors = ref<Record<string, any | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const router = useRouter()

const userData = useCookie<User>('userData')
const userName = ref<string>(userData.value.name)

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

const contactDetails = {
  stage: 'Contact',
  name: '',
  company: '',
  department: '',
  phoneNumber: '',
  email: '',
  gender: 'Male',
  status: 'Hot',
  owner: userData.value.name,
  campaign: 'None',
  source: 'Email',
  veryNextStep: 'Call',
}

const isConfirmDialogOpen = ref(false)
const isNotificationVisible = ref(false)
const contactDetailsLocal = ref(structuredClone(contactDetails))
const isAccountDeactivated = ref(false)

const validateAccountDeactivation = [(v: string) => !!v || 'Please confirm before saving the details']

const resetForm = () => {
  contactDetailsLocal.value = structuredClone(contactDetails)
}

const saveData = async () => {
  try {
    const res = await $api('/store/UI/pipeline/data', {
      method: 'POST',
      body: contactDetailsLocal.value,
      onResponseError({ response }) {
        console.log('Error', response)
        errors.value = response._data.errors
      },
    })

    console.log(res)

    const { message } = res

    console.log(message)
    isNotificationVisible.value = true
    await navigateToPipelineWithTab('Contacts')
  }
  catch (err) {
    console.error(err)
  }

  async function navigateToPipelineWithTab(tabName: string) {
    await nextTick()
    await router.push({ path: `/pipeline/contacts/${tabName}` })
  }
}

watch(() => contactDetailsLocal.value.email, newEmail => {
  errors.value.message = ''
  if (newEmail)
    checkEmailExists(newEmail)
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
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 Last Name -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.name"
                  :rules="[requiredValidator]"
                  label="Name"
                  placeholder="Name"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.email"
                  :error-messages="errors.message"
                  :rules="[requiredValidator]"
                  label="E-mail"
                  placeholder="johndoe@gmail.com"
                  type="email"
                  @blur="checkEmailExists(contactDetailsLocal.email)"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.phoneNumber"
                  :rules="[requiredValidator]"
                  label="Phone Number"
                  placeholder="070000000"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.company"
                  :rules="[requiredValidator]"
                  label="Company"
                  placeholder="company"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.department"
                  :rules="[requiredValidator]"
                  label="Department"
                  placeholder="department"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="contactDetailsLocal.gender"
                  :items="['Male', 'Female', 'Others']"
                  :rules="[requiredValidator]"
                  label="Gender"
                  placeholder="Select gender"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="contactDetailsLocal.status"
                  :items="['Hot', 'Warm', 'Cold']"
                  :rules="[requiredValidator]"
                  label="Contact Status"
                  placeholder="Select Status"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.owner"
                  :rules="[requiredValidator]"
                  :value="userName"
                  label="Owner"
                  placeholder="Select Owner"
                  readonly
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="contactDetailsLocal.campaign"
                  :items="['None', 'Email', 'Outdoor']"
                  :rules="[requiredValidator]"
                  label="Campaign"
                  placeholder="Select Campaign"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="contactDetailsLocal.source"
                  :items="['Email', 'Marketing', 'LinkedIn']"
                  :rules="[requiredValidator]"
                  label="Source"
                  placeholder="Select Source"
                />
              </VCol>

              <!-- 👉 Zip Code -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="contactDetailsLocal.veryNextStep"
                  :rules="[requiredValidator]"
                  label="Very Next Step"
                  placeholder="Call"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                class="d-flex flex-wrap gap-4"
                cols="12"
              >
                <VBtn
                  color="secondary"
                  type="reset"
                  variant="tonal"
                  @click.prevent="resetForm"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Saving contact Details">
        <VCardText>
          <!-- 👉 Checkbox and Button  -->
          <div>
            <VCheckbox
              v-model="isAccountDeactivated"
              :rules="validateAccountDeactivation"
              label="I confirm that the details are correct"
            />
          </div>

          <VBtn
            :disabled="!isAccountDeactivated"
            class="mt-3"
            color="error"
            @click="isConfirmDialogOpen = true"
          >
            Save & Contact
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- Confirm Dialog -->
  <ConfirmDialog
    v-model:isDialogVisible="isConfirmDialogOpen"
    cancel-msg="Leads contact Cancelled!"
    cancel-title="Cancelled"
    confirm-msg="Your account has been saved successfully."
    confirm-title="Saved!"
    confirmation-question="Are you sure you want to save this details?"
    @confirm="saveData"
  />
</template>
