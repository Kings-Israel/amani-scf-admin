<script lang="ts" setup>

import ExpiredInvoices from '@/views/reports/ExpiredInvoiceReport.vue';
import Invoices from '@/views/reports/InvoiceReports.vue';
import RequestedInvoices from '@/views/reports/RequestedInvoiceReport.vue';

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

const widgetData = ref([
  { title: 'Invoices Uploaded', value: totalInvoices, icon: 'tabler-mail-opened' },
  { title: 'Invoices Requested', value: totalCreated, icon: 'tabler-file-invoice' },
  { title: 'Expired Invoices', value: totalExpired, icon: 'tabler-checks' },
])

</script>

<template>
  <div>
    <!-- <Welcome /> -->
    <VRow class="match-height">
      <VCol
        cols="12"
        md="12"
        sm="12"
      >
    <h3 class="text-h3">Invoice Reports</h3>
    </VCol>    
    </VRow>

    <section>
    <!-- 👉 Invoice Widgets -->
    <VCard class="mb-6">
  <VCardText class="px-3">
    <VRow>
      <template
        v-for="(data, id) in widgetData"
        :key="id"
      >
        <!-- Ensure all three widgets display horizontally by adjusting columns -->
        <VCol
          cols="12"
          sm="4"
          class="px-6"
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
              color="high-emphasis"
            />
          </VAvatar>
          <div
            class="d-flex justify-space-between align-center"
            :class="$vuetify.display.xs
              ? id !== widgetData.length - 1 ? 'border-b pb-4' : ''
              : $vuetify.display.sm
                ? id < (widgetData.length / 2) ? 'border-b pb-4' : ''
                : ''"
          >
            <div class="d-flex flex-column">
              <span class="text-body-1 text-capitalize">{{ data.title }}</span>
              <h4 class="text-h4">
                {{ data.value }}
              </h4>
            </div>
          </div>
        </VCol>
        
        <!-- Divider for spacing between widgets -->
        <VDivider
          v-if="id !== widgetData.length - 1"
          class="yof-divider"
          vertical
          inset
          length="60"
        />
      </template>
    </VRow>
  </VCardText>
</VCard>


    <VCard>
    <VTabs
      v-model="currentTab"
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem value="All Uploaded Invoices">
          <Invoices />
        </VWindowItem>

        <VWindowItem value="Requested">
          <RequestedInvoices />
        </VWindowItem>

        <VWindowItem value="Expired">
          <ExpiredInvoices />
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
    </section>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>

<style scoped>
.loading {
  position: relative;
  box-sizing: border-box;
  border: 3px solid transparent;
  border-radius: 50%;
  block-size: 55px;
  inline-size: 55px;
}

.loading .effect-1,
.loading .effect-2,
.loading .effect-3 {
  position: absolute;
  box-sizing: border-box;
  border: 3px solid transparent;
  border-radius: 50%;
  block-size: 100%;
  border-inline-start: 3px solid var(--initial-loader-color, #eee);
  inline-size: 100%;
}

.loading .effect-1 {
  animation: rotate 1s ease infinite;
}

.loading .effect-2 {
  animation: rotate-opacity 1s ease infinite 0.1s;
}

.loading .effect-3 {
  animation: rotate-opacity 1s ease infinite 0.2s;
}

.loading .effects {
  transition: all 0.3s ease;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1turn);
  }
}

@keyframes rotate-opacity {
  0% {
    opacity: 0.1;
    transform: rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: rotate(1turn);
  }
}
</style>
