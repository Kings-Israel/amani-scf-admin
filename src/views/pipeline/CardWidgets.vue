<script lang="ts" setup>
import CardStatistics from './CardStatistics.vue'

interface WidgetDataItem {
  title: string
  color?: string
  icon: string
  value: string
}

const widgetData: Ref<WidgetDataItem[]> = ref([])

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/pipeline/widget/data'))

fetchProducts()

watchEffect(() => {
  if (productsData.value)
    widgetData.value = productsData.value
})
</script>

<template>
  <VRow class="match-height">
    <VCol
      v-for="statistics in widgetData"
      :key="statistics.title"
      cols="12"
      md="3"
      sm="6"
    >
      <div>
        <CardStatistics v-bind="statistics" />
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
