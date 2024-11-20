<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { VDataTableServer } from 'vuetify/labs/VDataTable';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Reports',
  },
})

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const InvoiceRequestHeaders: TableHeader[] = [
  { title: 'Anchor', key: 'name' },
  { title: 'TOTAL DEALERS', key: 'dealers' },
  { title: 'ACTIVE DEALERS', key: 'active_dealers' },
  { title: 'PASSIVE DEALERS', key: 'passive_dealers' },
  { title: 'PERCENTAGE OF ACTIVE DEALERS', key: 'active_dealers_percent' },
]

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
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const bulk_actions = ref([
  { title: 'Approve', value: 'active' },
  { title: 'Reject', value: 'inactive' },
])

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const approve = async (id: number) => {
  await $api('/approve/UI/company', {
    method: 'POST',
    body: { id },
  })
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }

  return { text: 'Inactive', color: 'error' }
}

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'success', icon: 'tabler-thumb-up', title: 'Deactivate' }
  else
    return { color: 'error', icon: 'tabler-thumb-down', title: 'Activate' }
}

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/reports/vendors',
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
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5 row">
      <div class="d-flex align-center">
        <!-- 👉 Search  -->
        <AppTextField
          v-model="searchQuery"
          :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Anchor"
          style="inline-size: 200px;"
          type="text"
          @click:append-inner="toggleMarker"
          @click:append="sendMessage"
        />
        <AppSelect
          v-model="selectedStatus"
          :items="status"
          class="me-1"
          clear-icon="tabler-x"
          clearable
          placeholder="Bank"
          style="inline-size: 200px;"
        />
        <VSpacer />
      </div>
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
      :headers="InvoiceRequestHeaders"
      :items="products"
      :items-length="totalProduct"
      class="text-no-wrap"
      show-select
      @update:options="updateOptions"
    >
      <template #item.name="{ item }">
        <h6>
          <a
            href="javascript:void(0)"
            class="text-primary"
            @click="$router.push(`/companies/view/${item.id}`)"
          >{{ item.name }}</a>
        </h6>
      </template>

      <template #item.status="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveStatus(item.status)"
        />
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn :title="resolveActionBtns(item.status)?.title">
          <VIcon
            :icon="resolveActionBtns(item.status)?.icon"
            :color="resolveActionBtns(item.status)?.color"
            @click="approve(item.id)"
          />
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
                color="default"
                v-bind="slotProps"
                variant="tonal"
              />
            </template>

            <template #next="slotProps">
              <VBtn
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
./index.js
