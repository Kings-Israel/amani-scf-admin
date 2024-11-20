<script lang="ts" setup>
import type { Ref } from 'vue'

const { data: invoiceData, execute: fetchInvoiceData } = await useApi<any>(createUrl('/admin/reports/invoices'))
  
const invoices = invoiceData.value;
const totaliamount = invoices.totalInvoiceAmount.toLocaleString()
const totalApprovedInvoiceAmount = invoices.totalApprovedInvoiceAmount.toLocaleString()
const totalRejectedInvoiceAmount = invoices.totalInactiveInvoiceAmount.toLocaleString()
const approvedPercentage = invoices.approvedPercentage.toFixed(2)
const inactivePercentage = invoices.inactivePercentage.toFixed(2)
</script>

<template>
  <VCard>
    <VCardText class="pa-5">
      <div class="d-flex align-center justify-space-between">
        <span class="text-sm text-disabled">Invoice</span>
        <span class="text-success">+18.2%</span>
      </div>
      <h4 class="text-h4">
        Ksh {{ totaliamount }}
      </h4>
    </VCardText>

    <VCardText class="pa-5">
      <VRow no-gutters>
        <VCol cols="5">
          <div class="d-flex align-center mb-3">
            <VAvatar
              color="info"
              variant="tonal"
              :size="24"
              rounded
              class="me-2"
            >
              <VIcon
                size="18"
                icon="tabler-shopping-cart"
              />
            </VAvatar>

            <span>Active</span>
          </div>
          <h5 class="text-h5">
            {{ approvedPercentage }}%
          </h5>
          <span class="text-sm text-disabled">{{ totalApprovedInvoiceAmount }}</span>
        </VCol>

        <VCol cols="2">
          <div class="d-flex flex-column align-center justify-center h-100">
            <VDivider
              vertical
              class="mx-auto"
            />

            <div class="pa-1">
              <VChip size="20">
                <span class="text-xs pa-1">VS</span>
              </VChip>
            </div>

            <VDivider
              vertical
              class="mx-auto"
            />
          </div>
        </VCol>

        <VCol
          cols="5"
          class="text-end"
        >
          <div class="d-flex align-center justify-end mb-3">
            <span class="me-2">Pending</span>

            <VAvatar
              color="primary"
              variant="tonal"
              :size="24"
              rounded
            >
              <VIcon
                size="18"
                icon="tabler-link"
              />
            </VAvatar>
          </div>
          <h5 class="text-h5">
            {{ inactivePercentage }}%
          </h5>
          <span class="text-sm text-disabled">{{ totalRejectedInvoiceAmount }}</span>
        </VCol>
      </VRow>

      <div class="mt-6">
        <VProgressLinear
          model-value="80"
          color="info"
          height="8"
          rounded
        />
      </div>
    </VCardText>
  </VCard>
</template>
