<script setup lang="ts">
import LeadsDetails from '@/views/pipeline/form/LeadDetails.vue'

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-tab',
    key: 'tab',
  },
})

const currentStep = ref(0)

interface RouteParams {
  id?: string
}
const route = useRoute()
const pipeline: Ref<string | undefined> = ref((route.params as RouteParams).id)

const createDealSteps = [
  {
    title: 'Lead Details',
    subtitle: 'Lead Info',
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
              <LeadsDetails :pipeline="pipeline" />
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
