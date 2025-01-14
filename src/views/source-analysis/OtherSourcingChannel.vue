<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import { sourcingHeaders } from './index';

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/other/sourcing/channels',
  {
    query: {
      q: searchQuery,
      status: selectedStatus,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))

const products = computed(() => productsData.value.data)
const totalProduct = computed(() => productsData.value.total ?? 7)

fetchProducts()
</script>

<template>
  <VCard class="mb-6 py-2">
    <div class="d-flex flex-wrap gap-4 mx-5">
      <VSpacer />
      <div class="d-flex gap-4 flex-wrap align-center">
        <AppSelect
          v-model="itemsPerPage"
          :items="[5, 10, 20, 25, 50]"
        />
        <!-- 👉 Export button -->
        <VBtn
          color="primary"
          prepend-icon="tabler-download"
          style=" text-size-adjust: auto;text-transform: none;"
        />
      </div>
    </div>

    <VDivider class="mt-4" />

    <!-- 👉 Datatable  -->
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :headers="sourcingHeaders"
      :items="products"
      :items-length="totalProduct"
      class="text-no-wrap"
      show-select
      @update:options="updateOptions"
    >
      <!-- Actions -->
      <template #item.actions>
        <IconBtn to="/home">
          <VIcon icon="tabler-eye" />
        </IconBtn>
      </template>

      <template #bottom>
        <VDivider />

        <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-medium-emphasis mb-0">
            {{ paginationMeta({ page, itemsPerPage }, totalProduct) }}
          </p>

          <VPagination
            v-model="page"
            :length="Math.min(Math.ceil(totalProduct / itemsPerPage), 5)"
            :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalProduct / itemsPerPage), 5)"
          >
            <template #prev="slotProps">
              <VBtn
                :icon="false"
                color="default"
                v-bind="slotProps"
                variant="tonal"
              />
            </template>

            <template #next="slotProps">
              <VBtn
                :icon="false"
                color="default"
                v-bind="slotProps"
                variant="tonal"
              />
            </template>
          </VPagination>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
