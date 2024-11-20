<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import { internalReferralHeaders } from './index';

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  searchQuery.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}

const status = ref([
  { title: 'Pending Program Onboard', value: 'Pending Program Onboard' },
  { title: 'Successfully Program Setup', value: 'Successfully Program Setup' },
])

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/internal/referrals',
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
const totalProduct = computed(() => productsData.value.total)

fetchProducts()
</script>

<template>
  <div>
    <!-- 👉 products -->
    <VCard
      class="mb-6"
      title="Filters"
    >
      <div class="d-flex flex-wrap gap-4 mx-5">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <AppTextField
            v-model="searchQuery"
            :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Company Name"
            style="inline-size: 200px;"
            type="text"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
          />
          <AppSelect
            v-model="selectedStatus"
            :items="status"
            class="me-3"
            clear-icon="tabler-x"
            clearable
            placeholder="Status"
            style="inline-size: 200px;"
          />
          <AppTextField
            v-model="searchQuery"
            :append-inner-icon="marker ? 'tabler-calendar' : 'tabler-map-pin-off'"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Date"
            style="inline-size: 200px;"
            type="text"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
          />
        </div>

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
        :headers="internalReferralHeaders"
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
                >
                  Previous
                </VBtn>
              </template>

              <template #next="slotProps">
                <VBtn
                  :icon="false"
                  color="default"
                  v-bind="slotProps"
                  variant="tonal"
                >
                  Next
                </VBtn>
              </template>
            </VPagination>
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
