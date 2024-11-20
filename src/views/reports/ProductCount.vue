<script lang="ts" setup>
interface Data {
  id: number
  title: string
  value: number
  color: string
  icon: string
}

const { data: fetchedData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/report/products/counts'))
const productData: Ref<Data[]> = computed(() => fetchedData.value)

fetchProducts()
</script>

<template>
  <VCard>
    <VCardItem title="Products Count">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in productData"
          :key="data.id"
        >
          <template #prepend>
            <VAvatar
              :color="data.color"
              rounded
              variant="tonal"
            >
              <VIcon
                :icon="data.icon"
                size="24"
              />
            </VAvatar>
          </template>

          <VListItemTitle class="me-4">
            <div class="d-flex flex-column">
              <div class="font-weight-medium text-truncate">
                {{ data.title }}
              </div>
              <div>
                <VChip
                  color="secondary"
                  label
                  variant="tonal"
                >
                  {{ data.value }}
                </VChip>
              </div>
            </div>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
