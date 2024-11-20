<script lang="ts" setup>
import GeneralSettings from '@/pages/configurations/view/system-config/general-settings.vue';

const props = defineProps<Props>()

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Terms and Conditions',
  },
})

interface Props {
  bank_user_manual: File
  anchor_user_manual: File
  vendor_user_manual: File
  dealer_user_manual: File
}

const isNewItemAdded = ref(false)

const router = useRouter()

// 👉 Fetching expenses
const { data: configsData, execute: fetchConfigs } = await useApi<any>(createUrl('get/UI/configurations/system-configurations', {
  query: {
  },
}))

fetchConfigs()

const configurations = configsData.value

const numberedSteps = [
  {
    title: 'General Settings',
    icon: 'tabler-file-description',
    subtitle: 'Logo, Contact Info etc...',
  },

  // {
  //   title: 'User Manuals',
  //   icon: 'tabler-align-justified',
  //   subtitle: 'Bank, Anchor, Vendor & Dealer User Manuals',
  // },
  // {
  //   title: 'Terms and Conditions',
  //   icon: 'tabler-align-justified',
  //   subtitle: 'Bank, Anchor, Vendor & Dealer Terms and Conditions',
  // },
]

const currentStep = ref(0)

const formData = ref({
  page_title: configurations.page_title || '',
  admin_logo: [],
  favicon: [],
  weekly_off: configurations.weekly_off || '',
  date_format: configurations.date_format || '',
  contact_no: configurations.help_contact_number || '',
  whatsapp_no: configurations.help_whatsapp_number || '',
  contact_email: configurations.help_contact_email || '',
  admin_maker_checker: configurations.admin_maker_checker == 1 ? ref(true) : ref(false),
})

const onSubmit = async () => {
  const data = new FormData()

  // Add form fields to FormData
  data.append('page_title', formData.value.page_title)
  if (formData.value.admin_logo.length > 0)
    data.append('admin_logo', formData.value.admin_logo[0].file)

  if (formData.value.favicon.length > 0)
    data.append('favicon', formData.value.favicon[0].file)
  data.append('weekly_off', formData.value.weekly_off)
  data.append('date_format', formData.value.date_format)
  data.append('contact_no', formData.value.contact_no)
  data.append('whatsapp_no', formData.value.whatsapp_no)
  data.append('contact_email', formData.value.contact_email)
  data.append('admin_maker_checker', formData.value.admin_maker_checker)

  await $api('/UI/configurations/system-configuration', {
    method: 'POST',
    body: data,
  })
  await fetchConfigs()
  setTimeout(async () =>
    await nextTick(() => {
      isNewItemAdded.value = true
    }),
  3000,
  )
}
</script>

<template>
  <VSnackbar
    v-model="isNewItemAdded"
    color="success"
    location="top end"
    variant="flat"
  >
    Configs Updated Successfully
  </VSnackbar>
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
                <GeneralSettings
                  v-model:page_title="formData.page_title"
                  v-model:admin_logo="formData.admin_logo"
                  v-model:favicon="formData.favicon"
                  v-model:weekly_off="formData.weekly_off"
                  v-model:date_format="formData.date_format"
                  v-model:contact_no="formData.contact_no"
                  v-model:whatsapp_no="formData.whatsapp_no"
                  v-model:contact_email="formData.contact_email"
                  v-model:logo_url="configurations.web_logo"
                  v-model:favicon_url="configurations.web_favicon"
                  v-model:admin_maker_checker="formData.admin_maker_checker"
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
