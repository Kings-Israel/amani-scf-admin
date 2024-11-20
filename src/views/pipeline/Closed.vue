<script lang="ts" setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { OpportunitiesHeaders } from './index'
import { paginationMeta } from '@api-utils/paginationMeta'

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const searchContact = ref('')
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
  searchContact.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}

const status = ref([
  { title: 'Hot', value: 'hot' },
  { title: 'Warm', value: 'warm' },
  { title: 'Cold', value: 'cold' },
])

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'warm')
    return { text: 'Warm', color: 'warning' }

  if (statusMsg === 'hot')
    return { text: 'Hot', color: 'success' }

  return { text: 'cold', color: 'error' }
}

const {
  data: productsData,
  execute: fetchProducts,
} = await useApi<any>(createUrl('/get/UI/pipelines/closed',
  {
    query: {
      q: searchQuery,
      cname: searchContact,
      status: selectedStatus,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
      stage: 'Opportunity',
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
    <VCard class="mb-6 pt-10">
      <div class="d-flex flex-wrap gap-4 mx-5">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <AppTextField
            v-model="searchQuery"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Company Name"
            style="inline-size: 200px;"
            type="text"
          />
          <AppTextField
            v-model="searchContact"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Contact Person"
            style="inline-size: 200px;"
            type="text"
          />

          <VBtn
          color="primary"
          prepend-icon="tabler-search"
          style="text-size-adjust: auto; text-transform: none;"
          @click="submitFilters"
        >
        </VBtn>
        <VBtn
          color="primary"
          prepend-icon="tabler-refresh"
          style="text-size-adjust: auto; text-transform: none;"
          @click="clearFilters"
        >
        </VBtn>
        </div>

        <VSpacer />
        <div class="d-flex gap-4 flex-wrap align-center">
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50]"
          />
          <!-- 👉 Export button -->
          <DownloadExcel
            :data="products"
            name="opportunity.xls"
            worksheet="My Worksheet"
          >
            <VBtn
              color="primary"
              prepend-icon="tabler-download"
              style=" text-size-adjust: auto;text-transform: none;"
            />
          </DownloadExcel>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="OpportunitiesHeaders"
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >
        <!-- product  -->
        <!-- <template #item.company="{ item }">
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex flex-column">
              <RouterLink
                :to="`/view/${item.id}`"
                style="text-decoration: underline;"
              >
                <span
                  :style="{ color: `${$vuetify.theme.global.current.colors.primary}` }"
                  class="text-body-1 font-weight-medium"
                >{{ item.company }}</span>
              </RouterLink>
            </div>
          </div>
        </template> -->

        <!-- category -->
        <template #item.contact_name="{ item }">
          <span class="text-body-1 font-weight-medium">{{ item.contact_name }}</span>
        </template>

        <!-- stock -->
        <template #item.converted_on="{ item }">
          <span class="text-body-1 font-weight-medium">{{ item.converted_on }}</span>
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <VChip
            density="default"
            label
            v-bind="resolveStatus(item.status)"
          />
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn>
            <VIcon
              icon="tabler-eye"
              @click="$router.push(`/pipeline/view/${item.id}`)"
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
