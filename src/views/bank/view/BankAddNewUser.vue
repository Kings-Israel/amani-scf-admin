<script lang="ts" setup>
const name = ref('')
const email = ref('')
const mobile = ref()
const role = ref()
const route = useRoute()
const router = useRouter()
const isLoading = ref(false) // Manage loading state
const isNewContactAdded = ref(false) // Success state
const isError = ref(false) // Error state for notification

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const { data: roleData } = await useApi<any>(createUrl('/get/UI/user/roles', {
  query: {
    module: 'Bank',
  },
}))

const roles = computed(() => roleData.value)

const submitContact = async () => {
  isLoading.value = true // Start loading
  try {
    const res = await $api('/add/user/bank', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        role: role.value,
        mobile: mobile.value,
        bank_id: route.params.id,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
        isError.value = true // Show error snackbar
      },
    })

    isNewContactAdded.value = true // Show success snackbar
    const { message } = res

    await nextTick(() => {
      router.push(`/bank/view/${route.params.id}`)
      router.go(0)
    })
  }
  catch (err) {
    console.error(err)
    isError.value = true // Show error snackbar
  }
  finally {
    isLoading.value = false // Stop loading
  }
}
</script>

<template>
  <!-- Success Notification -->
  <VSnackbar
    v-model="isNewContactAdded"
    color="success"
    location="top end"
    variant="flat"
  >
    New User Added Successfully
  </VSnackbar>

  <!-- Error Notification -->
  <VSnackbar
    v-model="isError"
    color="error"
    location="top end"
    variant="flat"
  >
    Error Adding Contact. Please try again.
  </VSnackbar>

  <VCard title="Add New User">
    <VCardText>
      <VForm @submit.prevent="() => {}">
        <VRow>
          <!-- Name -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label
                  class="v-label text-body-2 text-high-emphasis"
                  for="firstNameHorizontalIcons"
                >First Name</label>
              </VCol>

              <VCol
                cols="12"
                md="9"
              >
                <AppTextField
                  id="firstNameHorizontalIcons"
                  v-model="name"
                  :rules="[requiredValidator]"
                  persistent-placeholder
                  placeholder="John"
                  prepend-inner-icon="tabler-user"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Email -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label
                  class="v-label text-body-2 text-high-emphasis"
                  for="emailHorizontalIcons"
                >Email</label>
              </VCol>

              <VCol
                cols="12"
                md="9"
              >
                <AppTextField
                  id="emailHorizontalIcons"
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  persistent-placeholder
                  placeholder="johndoe@email.com"
                  prepend-inner-icon="tabler-mail"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Mobile -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label
                  class="v-label text-body-2 text-high-emphasis"
                  for="mobileHorizontalIcons"
                >Mobile</label>
              </VCol>

              <VCol
                cols="12"
                md="9"
              >
                <AppTextField
                  id="mobileHorizontalIcons"
                  v-model="mobile"
                  :rules="[requiredValidator]"
                  persistent-placeholder
                  placeholder="+1 123 456 7890"
                  prepend-inner-icon="tabler-device-mobile"
                  type="number"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Role -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label
                  class="v-label text-body-2 text-high-emphasis"
                  for="firstNameHorizontalIcons"
                >Role</label>
              </VCol>

              <VCol
                cols="12"
                md="9"
              >
                <AppSelect
                  v-model="role"
                  :items="roles"
                  :rules="[requiredValidator]"
                  label="Item"
                  name="select"
                  placeholder="Select an Item"
                  prepend-inner-icon="tabler-air-balloon"
                  require
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Submit and Reset buttons -->
          <VCol
            class="d-flex gap-4"
            cols="12"
            md="9"
            offset-md="3"
          >
            <VBtn
              type="submit"
              :loading="isLoading"
              @click="submitContact"
              :disabled="isLoading"
            >
              <template v-if="!isLoading">
                Submit
              </template>
              <template v-else>
                <VProgressCircular
                  indeterminate
                  size="20"
                  color="white"
                />
              </template>
            </VBtn>
            <VBtn
              color="secondary"
              type="reset"
              variant="tonal"
              :disabled="isLoading"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>
