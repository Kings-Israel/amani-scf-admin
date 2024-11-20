<script lang="ts" setup>
import EmailDetails from './form/email-details.vue'
import HeaderFooter from './form/header-footer.vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

interface Props {
  isDialogVisible: boolean
  email?: any
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'update:email', val: any): void
}

const router = useRouter()

const numberedSteps = [
  {
    title: 'Header Footer',
    icon: 'tabler-file-description',
    subtitle: 'Header/Footer/Signature',
  },
  {
    title: 'Email Details',
    icon: 'tabler-align-justified',
  },
]

const currentStep = ref(0)

const formData = ref({
  template_id: props.email.id,
  header: props.email.header,
  footer: props.email.footer,
  signature: props.email.signature,
  name: props.email.name,
  product_type: props.email.product_type,
  subject: props.email.subject,
  body: props.email.body,
  status: props.email.status,
})

const onSubmit = async () => {
  console.log(formData.value)
  await $api('/UI/configurations/edit/email-template', {
    method: 'POST',
    body: formData.value,
  })
  setTimeout(async () =>
    await nextTick(() => {
      router.go(0)
    }),
  3000,
  )
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="1000"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 dialog close btn -->
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />
    <VCard>
      <VRow>
        <VCol
          cols="12"
          md="4"
          :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
        >
          <VCardText>
            <!-- 👉 Stepper -->
            <AppStepper
              v-model:current-step="currentStep"
              direction="vertical"
              :items="numberedSteps"
              icon-size="24"
              class="stepper-icon-step-bg"
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
                  <HeaderFooter
                    v-model:header="formData.header"
                    v-model:footer="formData.footer"
                    v-model:signature="formData.signature"
                  />
                </VWindowItem>

                <VWindowItem>
                  <EmailDetails
                    v-model:name="formData.name"
                    v-model:product_type="formData.product_type"
                    v-model:subject="formData.subject"
                    v-model:body="formData.body"
                    v-model:status="formData.status"
                  />
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
  </VDialog>
</template>
