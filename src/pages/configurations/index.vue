<script lang="ts" setup>
import CurrencyConfiguration from '@/views/configurations/bank/currencies.vue'
import TaxConfiguration from '@/views/configurations/bank/taxes.vue'
import CurrencyConversion from '@/views/configurations/bank/currency-conversion.vue' 

definePage({
  meta: {
    action: 'manage',
    subject: 'View Taxes',
  },
})

const currentTab = ref('window1')
const tabItemContent = 'Coming Soon'

</script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Taxes</VTab>
    <VTab>Currencies</VTab>
    <VTab>Currency Converter</VTab> 
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem key="0">
          <TaxConfiguration />
        </VWindowItem>
        <VWindowItem
          v-for="item in 1"
          :key="`window${item}`"
        >
          <CurrencyConfiguration />
        </VWindowItem>
        <VWindowItem key="2">
          <CurrencyConversion /> 
        </VWindowItem>
        <VWindowItem key="3">
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
