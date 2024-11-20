<script lang="ts" setup>
import Invoices from '@/views/reports/InvoiceReports.vue';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Reports',
  },
})

const currentTab = ref('All Uploaded Invoices')
const items = ['All Uploaded Invoices', 'Requested', 'Expired']

const { data: invoiceData, execute: fetchInvoiceData } = await useApi<any>(createUrl('/admin/invoices'))
  
const invoices = computed(() => invoiceData.value.data)
const totalInvoices = computed(() => invoiceData.value.total)
const totalCreated = computed(() => invoiceData.value.totalCreated)
const totalExpired = computed(() => invoiceData.value.totalExpired)
const totalApproved = computed(() => invoiceData.value.totalApproved)
const totalPending = computed(() => invoiceData.value.totalPending)
const totalDenied = computed(() => invoiceData.value.totalDenied)
const totalPaid = computed(() => invoiceData.value.totalPaid)

const widgetData = ref([
  { title: 'Anchor Invoices', value: totalInvoices, icon: 'tabler-mail-opened', color: '#42A5F5' },
  { title: 'Expired Invoices', value: totalExpired, icon: 'tabler-checks', color: '#EF5350' },
  { title: 'Approved Invoices', value: totalApproved, icon: 'tabler-checks', color: '#66BB6A' },
  { title: 'Disbursed Invoices', value: totalPaid, icon: 'tabler-file-invoice', color: '#26A69A' },
  { title: 'Pending Invoices', value: totalPending, icon: 'tabler-clock', color: '#FFCA28' },
  { title: 'Rejected Invoices', value: totalDenied, icon: 'tabler-x', color: '#D32F2F' },
])

</script>

<template>
  <div>
    <!-- <VRow class="match-height">
      <VCol
        cols="12"
        md="12"
        sm="12"
      >
        <h3 class="text-h3">Invoice Reports</h3>
      </VCol> 
    </VRow> -->

    <section>
      <!-- Invoice Widgets -->
      <VCard class="mb-6">
        <VCardText class="px-3">
          <VRow>
            <template v-for="(data, id) in widgetData" :key="id">
              <VCol
                cols="12"
                sm="4"
                md="2" 
                class="d-flex flex-column align-center"
              >
                <VAvatar
                  variant="tonal"
                  rounded
                  size="42"
                  class="mb-3"
                >
                  <VIcon
                    :icon="data.icon"
                    size="26"
                    :color="data.color"
                  />
                </VAvatar>
                <div class="text-center">
                  <span class="text-body-1 text-capitalize">{{ data.title }}</span>
                  <h4 class="text-h4">{{ data.value }}</h4>
                </div>
              </VCol>
            </template>
          </VRow>
        </VCardText>
      </VCard>

      <VCard>
        <VCardText>
          <VWindow v-model="currentTab">
            <VWindowItem value="All Uploaded Invoices">
              <Invoices />
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </section>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.align-between {
  justify-content: space-between;
}

.match-height {
  align-items: center;
}

.v-avatar {
  background-color: rgba(0, 0, 0, 0.05);
}

.text-body-1 {
  font-weight: bold;
}

.text-h4 {
  margin: 0;
}

@media (min-width: 960px) {
  .widget-card {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
}
</style>
