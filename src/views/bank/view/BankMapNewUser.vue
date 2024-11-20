<script lang="ts" setup>
const name = ref('')
const email = ref('')
const mobile = ref()
const role = ref()
const route = useRoute()
const router = useRouter()

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const { data: roleData } = await useApi<any>(createUrl('/get/UI/user/roles', {
  query: {
    module: 'Bank',
  },
}))

const fetchUserData = async () => {
  const { data, error } = await useApi<any>(createUrl('/get/user/data/for/mapping', {
    query: {
      name: name.value,
    },
  }))

  if (error.value)
    return error.value

  email.value = data.value.email
  mobile.value = data.value.phone_number
}

const isNewContactAdded = ref(false)
const roles = computed(() => roleData.value)
const { data: mappingUserData } = await useApi<any>(createUrl(`/get/users/for/mapping/${route.params.id}`))
const users = computed(() => mappingUserData.value)

// State to track loading status
const loading = ref(false)

const submitContact = async () => {
  loading.value = true // Set loading to true when submitting
  try {
    const res = await $api('/post/mapped/bank/user', {
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
      },
    })

    isNewContactAdded.value = true
    console.log(res)

    const { message } = res

    setInterval(() => {
      router.push(`/bank/view/${route.params.id}`)
      router.go(0)
    }, 3000)

    console.log(message)
    isNewContactAdded.value = true
  }
  catch (err) {
    console.error(err)
  } finally {
    loading.value = false // Set loading to false after the request is done
  }
}

watch(name, () => {
  fetchUserData()
})
</script>

<template>
  <VSnackbar
    v-model="isNewContactAdded"
    color="success"
    location="top end"
    variant="flat"
  >
    New Mapped Successfully
  </VSnackbar>

  <VCard title="Add New User">
    <VCardText>
      <VForm @submit.prevent="() => {}">
        <VRow>
          <!-- Name Input -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label class="v-label text-body-2 text-high-emphasis">Name</label>
              </VCol>
              <VCol cols="12" md="9">
                <AppSelect
                  v-model="name"
                  :items="users"
                  :rules="[requiredValidator]"
                  label="Item"
                  name="selectUser"
                  placeholder="Select an Item"
                  prepend-inner-icon="tabler-a-b-2"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Email Input -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label class="v-label text-body-2 text-high-emphasis">Email</label>
              </VCol>
              <VCol cols="12" md="9">
                <AppTextField
                  v-model="email"
                  readonly
                  placeholder="johndoe@email.com"
                  prepend-inner-icon="tabler-mail"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Mobile Input -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label class="v-label text-body-2 text-high-emphasis">Mobile</label>
              </VCol>
              <VCol cols="12" md="9">
                <AppTextField
                  v-model="mobile"
                  readonly
                  placeholder="+1 123 456 7890"
                  prepend-inner-icon="tabler-device-mobile"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Role Input -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol
                class="d-flex align-items-center"
                cols="12"
                md="3"
              >
                <label class="v-label text-body-2 text-high-emphasis">Role</label>
              </VCol>
              <VCol cols="12" md="9">
                <AppSelect
                  v-model="role"
                  :items="roles"
                  :rules="[requiredValidator]"
                  label="Item"
                  name="select"
                  placeholder="Select an Item"
                  prepend-inner-icon="tabler-air-balloon"
                />
              </VCol>
            </VRow>
          </VCol>

          <!-- Submit and Reset Buttons with Spinner -->
          <VCol class="d-flex gap-4" cols="12" md="9" offset-md="3">
            <VBtn :disabled="loading" @click="submitContact">
              <template v-if="loading">
                <VProgressCircular indeterminate size="20"></VProgressCircular>
              </template>
              <template v-else>
                Submit
              </template>
            </VBtn>
            <VBtn color="secondary" type="reset" variant="tonal">
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>
