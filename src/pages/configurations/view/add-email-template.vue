<script lang="ts" setup>
import EmailDetails from './form/email-details.vue';
import HeaderFooter from './form/header-footer.vue';

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Email Templates',
  },
})

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
  header: '<p>Dear Sir/Madam,</p>',
  footer: '<p>Regards,<br />Team YoFinvoice</p>',
  signature: '<p>Regards,<br />Team YoFinvoice</p>',
  name: '',
  product_type: '',
  subject: '',
  body: '',
  status: '',
})

// const onSubmit = async () => {
//   await $api('/UI/configurations/email-template', {
//     method: 'POST',
//     body: formData.value,
//   })
//   setTimeout(async () =>
//     await nextTick(() => {
//       router.push('/configurations/email-templates')
//     }),
//   3000,
//   )
// }

const onSubmit = async () => {
  try {
    console.log('Submitting form data:', formData.value);
    await $api('/UI/configurations/email-template', {
      method: 'POST',
      body: formData.value,
    });

    setTimeout(async () => {
      await nextTick();
      router.push('/configurations/email-templates');
    }, 3000); 
  } catch (error) {
    console.error('Error submitting email template:', error);
  }
};
</script>

<template>
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
</template>
