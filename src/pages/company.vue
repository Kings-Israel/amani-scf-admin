<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta'
import { saveAs } from 'file-saver'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import XLSX from 'xlsx'

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
  { title: 'Company Name', key: 'name' },
  { title: 'Bank', key: 'bank' },
  { title: 'Branch Code', key: 'branch_code' },
  { title: 'Business ID Number', key: 'business_identification_number' },
  { title: 'Company Type', key: 'organization_type' },
  { title: 'Customer Type', key: 'customer_type' },
  { title: 'Approval Status', key: 'approval_status' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()
const branchCode = ref()
const companyType = ref()
const selectedApprovalStatus = ref()

const bulkactions = ref()

const selectedCompany = ref([])

const filterselectedStatus = ref<string | undefined>(null)
const filterselectedBank = ref<string | undefined>(null)
const filtersearchQuery = ref<string | undefined>('')
const filterselectedApprovalStatus = ref<string | undefined>(null)
const filterbranchCode = ref<string | undefined>('')
const filtercompanyType = ref<string | undefined>(null)

// Data table options
const itemsPerPage = ref(45)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const isCompanyDialogVisible = ref(false)
const selectedCompanyA = ref(null)

const isADialogVisible = ref(false)
const isRDialogVisible = ref(false)

const openDeactivateDialog = company => {
  selectedCompanyA.value = company
  isCompanyDialogVisible.value = true
}

const openADialog = company => {
  selectedCompanyA.value = company
  isADialogVisible.value = true
}

const openRDialog = company => {
  selectedCompanyA.value = company
  isRDialogVisible.value = true
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

const Approvalstatus = ref([
  { title: 'Approved', value: 'approved' },
  { title: 'Pending', value: 'pending' },
  { title: 'Denied', value: 'rejected' },
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
    return { text: 'Active', color: 'primary' }

  return { text: 'Inactive', color: 'error' }
}

const resolveApprovalStatus = (statusMsg: string) => {
  if (statusMsg === 'approved')
    return { text: 'Approved', color: 'success' }
  if (statusMsg === 'pending')
    return { text: 'Pending', color: 'info' }

  return { text: 'Denied', color: 'warning' }
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

const queryParams = computed(() => ({
  q: searchQuery.value,
  company_type: companyType.value,
  branch_code: branchCode.value,
  approval_status: selectedApprovalStatus.value,
  bank: selectedBank.value,
  status: selectedStatus.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}))

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/all/UI/companies',
  {
    query: queryParams,
  },
))

const products = computed(() => productsData.value.data)
const totalProduct = computed(() => productsData.value.total)

const { data: changesData, execute: fetchChanges } = await useApi<any>(createUrl('/UI/companies/changes'))

const totalChanges = computed(() => productsData.value.total || 0)

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

  toast.success('Company Updated Successfully', {
    position: 'top-right',
    autoClose: 3000,
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

  XLSX.utils.book_append_sheet(wb, ws, 'Companies')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Companies.xlsx')
}

const submitFilters = async () => {
  selectedBank.value = filterselectedBank.value
  searchQuery.value = filtersearchQuery.value
  selectedApprovalStatus.value = filterselectedApprovalStatus.value
  branchCode.value = filterbranchCode.value
  selectedStatus.value = filterselectedStatus.value
  selectedStatus.value = filterselectedStatus.value

  await fetchProducts()
}

const clearFilters = () => {
  filterselectedBank.value = ''
  filtersearchQuery.value = ''
  filterselectedApprovalStatus.value = ''
  filterbranchCode.value = ''
  filtercompanyType.value = ''
  filterselectedStatus.value = ''
  page.value = 1

  submitFilters()
}

fetchProducts()

const approveCompany = async companyId => {
  try {
    const response = await $api('/company/approve-changes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_id: companyId,
      }),
    })

    if (response.message === 'Company updated successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchProducts()
      isADialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this company', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
    else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error approving the company'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const rejectCompany = async companyId => {
  try {
    const response = await $api('/company/reject-changes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_id: companyId,
      }),
    })

    if (response.message === 'Company changes rejected successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchProducts()
      isRDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this company', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
    else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error rejecting the company'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5 row">
      <div class="d-flex flex-wrap align-items-center">
        <!-- 👉 Search  -->
        <AppSelect
          v-model="filterselectedBank"
          :items="banks"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Bank"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
        />

        <AppTextField
          v-model="filtersearchQuery"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Company Name"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
          type="text"
        />
        <AppSelect
          v-model="filterselectedApprovalStatus"
          :items="Approvalstatus"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Approval Status"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
        />
        <AppSelect
          v-model="filterselectedStatus"
          :items="status"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Status"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
        />
        <AppTextField
          v-model="filterbranchCode"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Branch Code"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
        />
        <AppTextField
          v-model="filtercompanyType"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Company Type"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
          type="text"
        />
        <AppSelect
          v-if="($can('manage', 'Company Changes Checker') && $can('manage', 'Company Bulk Approve'))"
          v-model="bulkactions"
          :items="bulk_actions"
          item-title="title"
          item-value="value"
          class="me-1"
          clear-icon="tabler-circle-x"
          clearable
          chips
          placeholder="Bulk Actions"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
        />
        <VBtn
          color="primary"
          prepend-icon="tabler-search"
          style="text-size-adjust: auto; text-transform: none;"
          @click="submitFilters"
        />
        <VBtn
          color="primary"
          prepend-icon="tabler-refresh"
          style="text-size-adjust: auto; text-transform: none;"
          @click="clearFilters"
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
    <VCardText v-if="totalChanges > 0">
      Current pending changes
      <VAvatar
        color="error"
        size="x-small"
      >
        <small>{{ totalChanges }}</small>
      </VAvatar>
    </VCardText>

    <VDivider class="mt-4" />

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
        <div class="d-flex align-center">
          <h6 class="text-h8 mb-0 mr-2">
            <a
              href="javascript:void(0)"
              @click="$router.push(`/companies/view/${item.id}`)"
            >
              {{ item.name }}
            </a>
          </h6>

          <IconBtn
            v-if="item.changes !== null"
            class="mx-1"
            small
            color="error"
          >
            <VTooltip bottom>
              <template #activator="{ props }">
                <VIcon
                  v-bind="props"
                  icon="tabler-info-circle"
                  size="20"
                  aria-label="Program changes awaiting approval"
                  @click="openaInfoDialog(item)"
                />
              </template>
              <span> Company pending changes awaiting approval</span>
            </VTooltip>
          </IconBtn>
        </div>
      </template>
      <template #item.approval_status="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveApprovalStatus(item.approval_status)"
        />
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
        <!--
          <IconBtn
          v-if="$can('manage', 'Company Changes Checker') && item.changes == null"
          @click="$router.push(`/companies/edit/${item.id}`)">
          <VIcon
          icon="tabler-pencil"
          color="warning"
          />
          </IconBtn>
        -->
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
        <!--
          <IconBtn v-if="$can('manage', 'Company Changes Checker') && item.checker_status === true">
          <VIcon
          icon="tabler-square-check"
          color="success"
          @click="openADialog(item)"
          />
          </IconBtn>

          <IconBtn v-if="$can('manage', 'Company Changes Checker') && item.checker_status === true">
          <VIcon
          icon="tabler-square-x"
          color="error"
          @click="openRDialog(item)"
          />
          </IconBtn>
        -->
      </template>
      <template #bottom>
        <VDivider />
        <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-medium-emphasis mb-0">
            {{ paginationMeta({ page, itemsPerPage }, totalProduct) }}
          </p>

          <VPagination
            v-model="page"
            :length="Math.ceil(totalProduct / itemsPerPage)"
            :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalProduct / itemsPerPage), 5)"
            active-color="primary"
            next-icon="tabler-caret-right"
            prev-icon="tabler-caret-left"
          />
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
  <VDialog
    v-model="isADialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isADialogVisible = !isADialogVisible" />

    <VCard>
      <VCardText>
        Are you sure you want to Approve changes for this Company: {{ selectedCompanyA.name }}? <br> This action can not be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isADialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="approveCompany(selectedCompanyA.id)"
        >
          Approve
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isRDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isRDialogVisible = !isRDialogVisible" />

    <VCard>
      <VCardText>
        Are you sure you want to Reject Changes for this Company: {{ selectedCompanyA.name }}? <br> This action can not be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isRDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="rejectCompany(selectedCompanyA.id)"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
