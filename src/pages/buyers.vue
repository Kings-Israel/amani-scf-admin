<script lang="ts" setup>
import { saveAs } from 'file-saver'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import XLSX from 'xlsx'
import { paginationMeta } from '@api-utils/paginationMeta'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Companies',
  },
})

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const InvoiceRequestHeaders: TableHeader[] = [
  { title: 'Name', key: 'name' },
  { title: 'Bank', key: 'bank' },
  { title: 'Business ID Number', key: 'business_identification_number' },
  { title: 'Customer Type', key: 'customer_type' },
  { title: 'Bank Manager', key: 'relationship_manager_name' },
  { title: 'Business Segment', key: 'business_segment' },
  { title: 'Organization Type', key: 'organization_type' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()
const bulkactions = ref()

const selectedCompany = ref([])

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const isCompanyDialogVisible = ref(false)
const selectedCompanyA = ref(null)

const openDeactivateDialog = company => {
  selectedCompanyA.value = company
  isCompanyDialogVisible.value = true
}

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
  console.log(options + 0)
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

const selectedBank = ref()

const { data: banksData, execute: fetchBanks } = await useApi<any>(createUrl('UI/get/banks/list'))

const banks = banksData.value.data.map(bank => ({ title: bank.name, value: bank.id }))

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/programs/buyers-dealers/buyers',
  {
    query: {
      q: searchQuery,
      status: selectedStatus,
      bank: selectedBank,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))

const products = computed(() => productsData.value.data)
const totalProduct = computed(() => productsData.value.total)

const { data: changesData, execute: fetchChanges } = await useApi<any>(createUrl('/UI/companies/changes'))

fetchProducts()
fetchChanges()

const chno = changesData.value.companychange

const selectedProduct = ref([])

const checkSelected = selectedItems => {
  if (selectedItems.length === 1) {
    selectedProduct.value = selectedItems[0]
    console.log('Selected product:', selectedProduct)
  }
  console.log(selectedCompany)
}

const approve = async (id: any) => {
  await $api('/UI/companies/activate', {
    method: 'POST',
    body: {
      ids: id,
      status: bulkactions.value,
    },
  })
  await fetchProducts()
  isCompanyDialogVisible.value = false
}

watch(bulkactions, val => {
  if (val && selectedCompany.value.length)
    approve(selectedCompany.value)
})

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(products.value)
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Buyers')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Buyers.xlsx')
}
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5 row">
      <div class="d-flex align-center">
        <!-- 👉 Search  -->
        <AppSelect
          v-model="selectedBank"
          :items="banks"
          class="me-1"
          clear-icon="tabler-x"
          clearable
          placeholder="Bank"
          style="inline-size: 200px;"
        />

        <AppTextField
          v-model="searchQuery"
          :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
          class="me-1"
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
          class="me-1"
          clear-icon="tabler-x"
          clearable
          placeholder="Status"
          style="inline-size: 100px;"
        />
        <AppSelect
          v-if="($can('manage', 'Company Changes Checker') && $can('manage', 'Company Bulk Approve'))"
          v-model="bulkactions"
          :items="bulk_actions"
          item-title="title"
          item-value="value"
          class="me-1"
          clear-icon="tabler-x"
          clearable
          chips
          placeholder="Bulk Actions"
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
          @click="exportToExcel"
        />
        <!--
          <VBtn
          color="primary"
          prepend-icon="tabler-plus"
          style=" text-size-adjust: auto;text-transform: none;"
          >
          Add Company
          </VBtn>
        -->
      </div>
    </div>
    <!--
      <VCardText v-if="chno > 0">
      Current pending changes
      <VAvatar
      color="error"
      size="x-small"
      >
      <small>{{ chno }}</small>
      </VAvatar>
      </VCardText>
      <VDivider class="mt-4" />
    -->

    <!-- 👉 Datatable  -->
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      v-model="selectedCompany"
      :headers="InvoiceRequestHeaders"
      :items="products"
      :items-length="totalProduct"
      item-key="id"
      class="text-wrap"
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
        <IconBtn
          v-if="$can('manage', 'Company Changes Checker')"
          @click="$router.push(`/companies/view/${item.id}`)"
        >
          <VIcon
            icon="tabler-eye"
            color="info"
          />
        </IconBtn>

        <IconBtn
          v-if="$can('manage', 'Company Changes Checker')"
          @click="$router.push(`/companies/edit/${item.id}`)"
        >
          <VIcon
            icon="tabler-pencil"
            color="warning"
          />
        </IconBtn>
        <IconBtn
          v-if="$can('manage', 'Company Changes Checker')"
          :title="resolveActionBtns(item.status)?.title"
        >
          <VIcon
            :icon="resolveActionBtns(item.status)?.icon"
            :color="resolveActionBtns(item.status)?.color"
            @click="openDeactivateDialog(item)"
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
  <VDialog
    v-model="isCompanyDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isCompanyDialogVisible = !isCompanyDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText v-if="selectedCompanyA.status !== 'active'">
        Are you sure you want to activate company: {{ selectedCompanyA.name }}? <br>
      </VCardText>

      <VCardText v-else>
        Are you sure you want to deactivate company: {{ selectedCompanyA.name }}? <br>
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isCompanyDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          v-if="selectedCompanyA.status !== 'active'"
          color="success"
          @click="approve([selectedCompanyA.id])"
        >
          Activate
        </VBtn>
        <VBtn
          v-else
          color="error"
          @click="approve([selectedCompanyA.id])"
        >
          Deactivate
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
./index.js
