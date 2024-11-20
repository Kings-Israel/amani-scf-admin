<script lang="ts" setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import Invoices from '@/views/dashboards/analytics/AnalyticsInvoices.vue'
import Programs from '@/views/dashboards/analytics/AnalyticsPrograms.vue'
import EcommerceExpensesRadialBarCharts from '@/views/dashboards/ecommerce/EcommerceExpensesRadialBarCharts.vue'
import EcommerceGeneratedLeads from '@/views/dashboards/ecommerce/EcommerceGeneratedLeads.vue'
import EcommerceStatistics from '@/views/dashboards/ecommerce/EcommerceStatistics.vue'
import EcommerceTotalProfitLineCharts from '@/views/dashboards/ecommerce/EcommerceTotalProfitLineCharts.vue'
import CrmEarningReportsYearlyOverview from '@/views/home/HomeEarningReportsYearlyOverview.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePage({
  meta: {
    public: true,
  },
})

const accepted_terms = ref(0)
const showTermsModal = ref(false)
const termsContent = ref<string>('')
const acceptedCheckbox = ref(false) // Checkbox state

const { data: statisticsHomeData, execute: fetchStatisticsData } = await useApi<any>(createUrl('/admin/dashboard/statistics'))
const statisticsReport = statisticsHomeData.value

const { data: pipelineData, execute: fetchData } = await useApi<any>(createUrl('/get/UI/dashboard/lead/opportunity'))
const statisticsData = computed(() => pipelineData.value.data)

const { data: termsData, execute: fetchTermsData } = await useApi<any>(createUrl('/UI/configurations/terms/admin'))
const termsDataResponse = termsData.value

const { data: userTermsStatus, execute: fetchUserTermsStatus } = await useApi<any>(createUrl('/user/terms/status'))

fetchData()

onMounted(async () => {
  if (userTermsStatus.value.accepted_terms === 0) {
    showTermsModal.value = true
  } else {
    showTermsModal.value = false
  }

  if (termsDataResponse && termsDataResponse.length > 0) {
    termsContent.value = termsDataResponse[0].terms_conditions
  }
})

const acceptTerms = async () => {
  if (!acceptedCheckbox.value) {
    toast.error('You must accept the terms to proceed.')
    return
  }

  try {
    const res = await $api('/user/terms/accept', {
      method: 'POST',
      body: { accepted_terms: 1 },
      onResponseError({ response }) {
        errors.value = response._data.errors
        toast.error('Failed to accept terms. Please try again.')
      },
    })
    showTermsModal.value = false
    toast.success('Terms accepted successfully!')
  } catch (err) {
    console.error(err)
    toast.error('An error occurred. Please try again.')
  }
}

// Define the active tab and available tabs
const currentTab = ref('Invoice Requests')  // Default selected tab
const items = ref(['Invoice Requests', 'Program Approval'])
</script>

<template>
  <VRow class="match-height">
    <!-- Main Statistics Column -->
    <VCol cols="12" md="8">
      <EcommerceStatistics v-model:stats="statisticsReport" />
    </VCol>

    <!-- Welcome Message Column -->
    <VCol cols="12" md="4">
      <VCard>
        <VCardText>
          <h3 class="text-h">Welcome to Yofinvoice</h3>
          <p>You can handle tasks through the CRM</p>
          <a href="https://yofinvoice.deveint.live/crm/" target="_blank">
            <VBtn class="me-3">Switch to CRM</VBtn>
          </a>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Terms Modal Dialog -->
    <VDialog v-model="showTermsModal" max-width="900px" persistent>
      <VCard>
        <VCardTitle class="headline text-center">Terms and Conditions</VCardTitle>
        <VCardText class="pa-4">
          <p class="mb-4 text-subtitle-1 text-center">
            Please review and accept our terms and conditions to proceed.
          </p>
          <div 
            v-html="termsContent" 
            class="terms-content"
            style="max-height: 600px; overflow-y: auto; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px;">
          </div>
          
          <VCheckbox
            v-model="acceptedCheckbox"
            label="I have read and accept the terms and conditions"
            class="mt-4"
            :rules="[value => value || 'You must accept the terms to proceed.']"
          />
        </VCardText>
        <VCardActions class="justify-end pa-4">
          <VBtn 
            @click="acceptTerms" 
            color="primary" 
            class="ml-2"
            :disabled="!acceptedCheckbox"
          > 
            Accept
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Ecommerce Charts and Data -->
    <VCol cols="12" lg="4">
      <VRow>
        <VCol cols="12" lg="6" md="3" sm="6">
          <EcommerceExpensesRadialBarCharts v-model:stats="statisticsReport" />
        </VCol>
        <VCol cols="12" lg="6" md="3" sm="6">
          <EcommerceTotalProfitLineCharts v-model:stats="statisticsReport" />
        </VCol>
        <VCol cols="12" md="6" lg="12">
          <EcommerceGeneratedLeads v-model:stats="statisticsReport" />
        </VCol>
      </VRow>
    </VCol>

    <!-- CRM Yearly Overview -->
    <VCol cols="12" lg="8" md="8">
      <CrmEarningReportsYearlyOverview />
    </VCol>

    <!-- Tabs for Invoice Requests and Program Approval -->
    <VCol cols="12" md="12">
      <VCard>
        <!-- Tab Selector -->
        <VTabs v-model="currentTab">
          <VTab v-for="item in items" :key="item" :value="item">{{ item }}</VTab>
        </VTabs>

        <VCardText>
          <!-- Tab Content -->
          <VWindow v-model="currentTab">
            <VWindowItem value="Invoice Requests">
              <Invoices />
            </VWindowItem>
            <VWindowItem value="Program Approval">
              <Programs />
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
