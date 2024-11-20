<script lang="ts" setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { LeadsHeaders } from './index'
import { paginationMeta } from '@api-utils/paginationMeta'

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-Leads',
    key: 'tab',
    action: 'manage',
    subject: 'Convert to Opportunity',
  },
})

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const header = ref<TableHeader[]>(LeadsHeaders)

// const emit = defineEmits(['changeTab', 'reloadTab'])
const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const searchContact = ref('')
const selectedStatus = ref()
const isAdmin = ref(false)

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
  { title: 'ICT', value: 'Pending' },
  { title: 'Factory', value: 'Completed' },
  { title: 'Bank', value: 'Initiation' },
])

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/pipelines/leads',
  {
    query: {
      q: searchQuery,
      cname: searchContact,
      status: selectedStatus,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
      stage: 'Lead',
    },
  },
))

interface Cookie {
  name: string
}

const products = computed(() => productsData.value.data)
const totalProduct = computed(() => productsData.value.total)
const cookies = ref(useCookie<Cookie>('userData'))

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
          <DownloadExcel
            :data="products"
            name="leads.xls"
            worksheet="My Worksheet"
          >
            <VBtn
              color="primary"
              prepend-icon="tabler-download"
              style=" text-size-adjust: auto;text-transform: none;"
            />
          </DownloadExcel>

          <VBtn
            color="primary"
            prepend-icon="tabler-plus"
            @click="$router.push('/pipeline/new')"
          >
            New Lead
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="header"
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >
        <template
          v-if="isAdmin"
          #item.sales
        >
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex flex-column">
              <span>{{ cookies.name }}</span>
            </div>
          </div>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn>
            <VIcon
              icon="tabler-edit"
              @click="$router.push(`/pipeline/edit/${item.id}`)"
            />
          </IconBtn>
          <IconBtn>
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem
                  prepend-icon="tabler-calendar"
                  value="schedule"
                  @click="$router.push('/calendar/schedules')"
                >
                  Schedule Follow up
                </VListItem>

                <VListItem
                  prepend-icon="tabler-status-change"
                  value="opportunity"
                  @click="$router.push(`/pipeline/opportunity/new/${item.id}`)"
                >
                  Convert to Opportunity
                </VListItem>

                <VListItem
                  prepend-icon="tabler-eye"
                  value="cold"
                  @click="$router.push(`/pipeline/view/${item.id}`)"
                >
                  View
                </VListItem>
              </VList>
            </VMenu>
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
