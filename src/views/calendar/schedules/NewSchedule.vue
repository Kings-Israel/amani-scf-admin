<script lang="ts" setup>
const props = defineProps<Props>()

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

interface Props {
  pipeline?: number
}
const router = useRouter()

const LeadDetails = {
  stage: 'Lead',
  pointOfContact: '',
  region: '',
  branch: '',
  status: 'Hot',
}

const isConfirmDialogOpen = ref(false)
const LeadDetailsLocal = ref(structuredClone(LeadDetails))
const isAccountDeactivated = ref(false)

const validateAccountDeactivation = [(v: string) => !!v || 'Please confirm before saving the details']

const resetForm = () => {
  LeadDetailsLocal.value = structuredClone(LeadDetails)
}

const saveData = async () => {
  try {
    const res = await $api(`/store/UI/pipeline/lead/data/${props.pipeline}`, {
      method: 'POST',
      body: LeadDetailsLocal.value,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    console.log(res)

    const { message } = res

    console.log(message)

    // Redirect to `to` query if exist or redirect to index route
    // ❗ nextTick is required to wait for DOM updates and later redirect
    await nextTick(() => {
      router.push('/lead/management')
    })
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="LeadDetailsLocal.pointOfContact"
                  placeholder="Point of Contact"
                  label="Point of Contact"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="LeadDetailsLocal.region"
                  label="Region"
                  placeholder="region"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="LeadDetailsLocal.branch"
                  label="Branch"
                  placeholder="Branch"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="LeadDetailsLocal.status"
                  label="Status"
                  placeholder="Select Status"
                  :items="['Hot', 'Warm', 'Cold']"
                />
              </VCol>
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
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
      <VCard title="Converting Contact to Lead">
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
            color="error"
            class="mt-3"
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
    confirmation-question="Are you sure you want to save this details?"
    confirm-title="Saved!"
    confirm-msg="Your account has been saved successfully."
    cancel-title="Cancelled"
    cancel-msg="Leads contact Cancelled!"
    @confirm="saveData"
  />
</template>
