<script setup lang="ts">
import LeadsDetails from '@/views/pipeline/form/ContactDetails.vue';

definePage({
  meta: {
    navActiveLink: 'lead-pipeline-new',
    key: 'tab',
    action: 'manage',
    subject: 'Add Contact',
  },
})

const currentStep = ref(0)

const createDealSteps = [
  {
    title: 'Contact Details',
    subtitle: 'Contact Info',
    icon: 'tabler-users',
  },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="4"
        lg="3"
        :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
      >
        <VCardText>
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="createDealSteps"
            icon-size="24"
            class="stepper-icon-step-bg"
          />
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        md="8"
        lg="9"
      >
        <VCardText>
          <VWindow
            v-model="currentStep"
            class="disable-tab-transition"
          >
            <VWindowItem>
              <LeadsDetails />
            </VWindowItem>

            <VWindowItem>
              No Draft
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
