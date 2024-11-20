<script lang="ts" setup>
import VFInvoices from '@/views/reports/VFInvoiceReport.vue';

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
  { title: 'Paid Invoices', value: totalPaid, icon: 'tabler-file-invoice', color: '#26A69A' },
  { title: 'Pending Invoices', value: totalPending, icon: 'tabler-clock', color: '#FFCA28' },
  { title: 'Rejected Invoices', value: totalDenied, icon: 'tabler-x', color: '#D32F2F' },
])
</script>

<template>
  <div>
    <section>
      <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="Requested">
            <VFInvoices />
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
