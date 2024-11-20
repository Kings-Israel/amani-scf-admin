<script setup lang="ts">
definePage({
  meta: {
    action: 'manage',
    subject: 'View Companies',
  },
})

const faqSearchQuery = ref('')

const { data: configsData, execute: fetchConfigs } = await useApi<any>(createUrl('get/UI/configurations/system-configurations', {
  query: {
  },
}))

fetchConfigs()

const { data: manualsData, execute: fetchManuals } = await useApi<ApiResponse | null>(createUrl('/UI/configurations/user-manuals'))

const manuals = computed(() => manualsData.value)

fetchManuals()

const { data: termsData, execute: fetchTerms } = await useApi<ApiResponse | null>(createUrl('/UI/configurations/terms-and-conditions'))

const terms = computed(() => termsData.value.data.value)

fetchTerms()

const contactUs = [
  {
    icon: 'tabler-phone',
    via: configsData.value?.help_contact_number,
    tagLine: 'We are always happy to help!',
  },
  {
    icon: 'tabler-brand-whatsapp',
    via: configsData.value?.help_whatsapp_number,
    tagLine: 'Contact Us on WhatsApp',
  },
  {
    icon: 'tabler-mail',
    via: configsData.value?.help_contact_email,
    tagLine: 'Best way to get answer faster!',
  },
]
</script>

<template>
  <VCard class="py-5">
    <section>
      <!-- 👉 You still have a question? -->
      <div class="text-center pt-16">
        <VChip
          label
          color="primary"
          size="small"
          class="mb-2"
        >
          Question
        </VChip>

        <h4 class="text-h4 mb-2">
          How can we help you?
        </h4>

        <!-- contacts -->
        <VRow class="mt-9">
          <VCol
            v-for="contact in contactUs"
            :key="contact.icon"
            sm="4"
            cols="12"
          >
            <VCard
              flat
              style="background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));"
            >
              <VCardText class="pb-4">
                <VAvatar
                  rounded
                  color="primary"
                  variant="tonal"
                  size="46"
                >
                  <VIcon
                    :icon="contact.icon"
                    size="26"
                  />
                </VAvatar>
              </VCardText>
              <VCardText>
                <h5 class="text-h5 mb-1">
                  {{ contact.via }}
                </h5>
                <div>{{ contact.tagLine }}</div>
              </VCardText>
            </VCard>
          </VCol>
          <VCol
            sm="6"
            cols="12"
          >
            <VCard
              flat
              style="background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));"
            >
              <VCardText class="pb-4">
                <VAvatar
                  rounded
                  color="primary"
                  variant="tonal"
                  size="46"
                >
                  <VIcon
                    icon="tabler-phone"
                    size="26"
                  />
                </VAvatar>
              </VCardText>
              <VCardText
                v-if="manuals.bank_user_manual !== null"
                class=""
              >
                <h5 class="text-h5">
                  User Manuals
                </h5>
              </VCardText>

              <VCardText
                v-if="manuals.bank_user_manual !== null"
                class="py-0"
              >
                <a
                  :href="manuals.bank_user_manual"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="">
                    Bank User Manual
                  </p>
                </a>
                <!-- <div>{{ contact.tagLine }}</div> -->
              </VCardText>
              <VCardText
                v-if="manuals.dealer_user_manual !== null"
                class="py-0"
              >
                <a
                  :href="manuals.dealer_user_manual"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="">
                    Dealer User Manual
                  </p>
                </a>
              </VCardText>
              <VCardText
                v-if="manuals.factoring_user_manual !== null"
                class="py-0"
              >
                <a
                  :href="manuals.factoring_user_manual"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="">
                    Anchor User Manual
                  </p>
                </a>
              </VCardText>
              <VCardText v-if="manuals.vendor_user_manual !== null">
                <a
                  :href="manuals.vendor_user_manual"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="">
                    Vendor User Manual
                  </p>
                </a>
              </VCardText>
            </VCard>
          </VCol>
          <VCol
            sm="6"
            cols="12"
          >
            <VCard
              flat
              style="background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));"
            >
              <VCardText class="pb-4">
                <VAvatar
                  rounded
                  color="primary"
                  variant="tonal"
                  size="46"
                >
                  <VIcon
                    icon="tabler-phone"
                    size="26"
                  />
                </VAvatar>
              </VCardText>
              <VCardText>
                <h5 class="text-h5">
                  Terms & Conditions
                </h5>
              </VCardText>
              <VCardText
                v-if="terms !== null"
                class="py-0"
              >
                <div
                  v-for="pdfs in terms"
                  :key="pdfs.id"
                >
                  <a
                    :href="pdfs.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p class="">
                      {{ pdfs.name }}
                    </p>
                  </a>
                </div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </section>
  </VCard>
</template>

<style lang="scss">
.faq-v-window {
  .v-window__container {
    z-index: 0;
  }
}
</style>
