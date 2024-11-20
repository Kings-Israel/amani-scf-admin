<script lang="ts" setup>
interface Data {
  stage: string
  count: number

}

const { data: fetchedData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/reports/pipeline/count'))
const pipelineData: Ref<Data[]> = computed(() => fetchedData.value)

fetchProducts()
</script>

<template>
  <VCard>
    <VCardItem title="Pipeline Count">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>
    <VDivider />
    <div class="text-overline d-flex justify-space-between px-5">
      <span>Pipeline</span>
      <span>Count</span>
    </div>
    <VDivider />
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in pipelineData"
          :key="data.stage"
        >
          <VListItemTitle class="font-weight-medium">
            {{ data.stage }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            pipeline
          </VListItemSubtitle>

          <template #append>
            <span class="text-body-1 text-high-emphasis">
              {{ data.count }}
            </span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
