<script lang="ts" setup>
import '@selemondev/vue3-marquee/dist/style.css'

interface WidgetDataItem {
  id: number
  icon: string
  color: string
  title: number
  value: string
  isHover: boolean
}

const widgetData: Ref<WidgetDataItem[]> = ref([])

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/reports/widget/data'))

fetchProducts()
watchEffect(() => {
  if (productsData.value)
    widgetData.value = productsData.value
})
</script>

<template>
  <VRow class="match-height">
    <VCol
      v-for="data in widgetData"
      :key="data.number"
      cols="12"
      md="3"
      sm="6"
    >
      <div class="px-1.5">
        <VCard
          :style="data.isHover ? { 'border-block-end': `2px solid rgba(var(--v-theme-${data.color}))` } : { 'border-block-end': `2px solid rgba(var(--v-theme-${data.color}), var(--v-disabled-opacity))` }"
          class="logistics-card-statistics cursor-pointer"
          @mouseenter="data.isHover = true"
          @mouseleave="data.isHover = false"
        >
          <VCardText>
            <div class="d-flex align-center gap-x-4 mb-2">
              <VAvatar
                :color="data.color"
                rounded
                variant="tonal"
              >
                <VIcon
                  :icon="data.icon"
                  size="28"
                />
              </VAvatar>
              <h6 class="text-h6 font-weight-medium text-sm-justify">
                {{ data.value }}
              </h6>
            </div>
            <div class="text-body-4 text-sm">
              {{ data.title }}
            </div>
          </VCardText>
        </VCard>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
@use "@core/scss/base/mixins" as mixins;

.logistics-card-statistics:hover {
  @include mixins.elevation(12);

  transition: all 0.1s ease-out;
}
</style>
