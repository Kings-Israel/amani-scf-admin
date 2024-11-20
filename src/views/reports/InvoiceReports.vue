<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta'
import { saveAs } from 'file-saver'
import { computed, ref, watch } from 'vue'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import XLSX from 'xlsx'

// Page Definition
definePage({ meta: { public: true } })

// Filter Variables
const marker = ref(true)
const selectedStatus = ref<string | undefined>()
const selectedType = ref<string | undefined>()
const selectedSorting = ref<string | undefined>()
const selectedInvoice = ref(null)

// Temporary filter variables
const filterselectedStatus = ref<string | undefined>(null)
const filterselectedSorting = ref<string | undefined>(null)


const filterVendor = ref<string | undefined>('')
const filterAnchor = ref<string | undefined>('')
const filterBank = ref<string | undefined>('')
const filterInvoiceAmount = ref<number | undefined>()
const filterInvoiceNumber = ref<number | undefined>()
const filterExpiryDate = ref<string | undefined>('')
const filterDueDate = ref<string | undefined>('')
const filterDateRequested = ref<string | undefined>('')
const filterStartDate = ref<string | undefined>('')
const filterEndDate = ref<string | undefined>('')

const vendor = ref<string | undefined>()
const anchor = ref<string | undefined>()
const bank = ref<string | undefined>()
const invoiceAmount = ref<number | undefined>()
const invoiceNumber = ref<number | undefined>()
const expiryDate = ref<string | undefined>()
const dueDate = ref<string | undefined>()
const requestDate = ref<string | undefined>()
const dateRequested = ref<string | undefined>()
const startDate = ref<string | undefined>()
const endDate = ref<string | undefined>()
const isopenProgramDialogVisible = ref(false)
const isopenPIDialogVisible = ref(false)

// Pagination and Sorting
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref<string | undefined>()
const orderBy = ref<string | undefined>()

// Header Interface and Data
interface TableHeader { title: string; key: string; sortable?: boolean }

const invoiceRequestHeaders: TableHeader[] = [
  { title: 'Invoice Number', key: 'invoice_number' },
  { title: 'Vendor', key: 'vendor' },
  { title: 'Bank', key: 'bank' },
  { title: 'Anchor', key: 'anchor' },
  { title: 'Date Requested', key: 'date_requested' },
  { title: 'PI Amount', key: 'amount' },
  { title: 'Discount Amount', key: 'discount_amount' },
  { title: 'Expiry Date', key: 'expiry_date' },
  { title: 'Invoice Due Date', key: 'due_date' },
  { title: 'Status', key: 'status' },
]

// Options for Dropdowns
const statusOptions = ref([
  { title: 'Submitted', value: 'submitted' },
  { title: 'Pending Approval', value: 'pending_approval' },
  { title: 'Approved', value: 'approved' },
  { title: 'Disbursed', value: 'disbursed' },
  { title: 'Rejected', value: 'denied' },
  { title: 'Closed', value: 'closed' },
])

const sortingOptions = ref([
  { title: 'Invoice No. (ASC)', value: 'asc_invoice_number' },
  { title: 'Invoice No (DESC)', value: 'desc_invoice_number' },
  { title: 'Vendor (ASC)', value: 'asc_vendor' },
  { title: 'Vendor (DESC)', value: 'desc_vendor' },
  { title: 'Anchor (ASC)', value: 'asc_anchor' },
  { title: 'Anchor (DESC)', value: 'desc_anchor' },
  { title: 'Due Date (ASC)', value: 'asc_due_date' },
  { title: 'Due Date (DESC)', value: 'desc_due_date' },
  { title: 'Request Date (ASC)', value: 'asc_date_requested' },
  { title: 'Request Date (DESC)', value: 'desc_date_requested' },
])

const typeOptions = ref([
  { title: 'Vendor Financing', value: 1 },
  { title: 'Dealer Financing', value: 2 },
])

// Computed Query Params for API
const queryParams = computed(() => ({
  vendor: vendor.value,
  anchor: anchor.value,
  bank: bank.value,
  status: selectedStatus.value,
  program_type: selectedType.value,
  sortBy: selectedSorting.value,
  invoice_number: invoiceNumber.value,
  invoice_amount: invoiceAmount.value,
  expiry_date: expiryDate.value,
  due_date: dueDate.value,
  request_date: requestDate.value,
  date_requested: dateRequested.value,
  start_date: startDate.value,
  end_date: endDate.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}))

// API Call and Data Handlers
const { data: invoiceData, execute: fetchInvoiceData } = await useApi<any>(createUrl('/admin/invoices', {
  query: queryParams,
}))

const invoices = computed(() => invoiceData.value.data)
const totalInvoices = computed(() => invoiceData.value.total)

const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const resolveStatus = (statusMsg: string) => {
  switch (statusMsg) {
  case 'Approved': return { text: 'Approved', color: 'success' }
  case 'Past Due': return { text: statusMsg, color: 'error' }
  case 'Closed': return { text: 'Closed', color: 'success' }
  case 'Rejected': return { text: 'Rejected', color: 'error' }
  case 'Disbursed': return { text: 'Disbursed', color: 'info' }
  default: return { text: statusMsg, color: 'default' }
  }
}

const submitFilters = async () => {
  vendor.value = filterVendor.value
  anchor.value = filterAnchor.value
  bank.value = filterBank.value
  invoiceNumber.value = filterInvoiceNumber.value
  selectedStatus.value = filterselectedStatus.value
  selectedSorting.value = filterselectedSorting.value
  invoiceAmount.value = filterInvoiceAmount.value
  expiryDate.value = filterExpiryDate.value
  dueDate.value = filterDueDate.value
  dateRequested.value = filterDateRequested.value
  startDate.value = filterStartDate.value
  endDate.value = filterEndDate.value

  await fetchInvoiceData()
}

const clearFilters = () => {
  filterVendor.value = ''
  filterAnchor.value = ''
  filterBank.value = ''
  filterselectedStatus.value = undefined
  selectedType.value = undefined
  filterselectedSorting.value = undefined
  filterInvoiceNumber.value = undefined
  filterInvoiceAmount.value = undefined
  filterExpiryDate.value = undefined
  filterDueDate.value = undefined
  filterDateRequested.value = undefined
  filterStartDate.value = undefined
  filterEndDate.value = undefined
  page.value = 1

  submitFilters()
}

const openProgramModal = invoice => {
  selectedInvoice.value = invoice
  isopenProgramDialogVisible.value = true
}

const openPIDialog = (invoice) => {
  isopenProgramDialogVisible.value = false;

  selectedInvoice.value = invoice;

  isopenPIDialogVisible.value = true;
};

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(invoices.value)
  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Invoices')

  const workbookOutput = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([workbookOutput], { type: 'application/octet-stream' }), 'invoices.xlsx')
}

watch(queryParams, fetchInvoiceData, { immediate: true })

fetchInvoiceData()
</script>

<template>
  <VCol>
    <h2 class="my-4 mx-5">
      <b> All Invoices</b>
    </h2>
  </VCol>

  <VRow>
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex align-center flex-wrap gap-4">
        <!-- Status Filter -->
        <AppSelect
          v-model="selectedType"
          :items="typeOptions"
          item-value="value"
          item-title="title"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Program Type"
          style=" flex: 1 1 auto;min-inline-size: 400px;"
        />
      </div>
    </div>
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex align-center flex-wrap gap-4">
        <!-- Status Filter -->
        <AppTextField
          v-model="filterInvoiceNumber"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Invoice Number"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
          type="text"
        />
        <AppTextField
          v-model="filterInvoiceAmount"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Invoice Amount"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
          type="text"
        />

        <AppTextField
          v-model="filterVendor"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Vendor"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
          type="text"
        />
        <AppTextField
          v-model="filterBank"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Bank"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
          type="text"
        />
        <AppTextField
          v-model="filterAnchor"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Anchor"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
          type="text"
        />
        <AppDateTimePicker
          v-model="filterDateRequested"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Request Date"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
        />
        <AppDateTimePicker
          v-model="filterDueDate"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Invoice Due Date"
          style=" flex: 1 1 auto;min-inline-size: 150px;"
        />
        <AppSelect
          v-model="filterselectedStatus"
          :items="statusOptions"
          item-value="value"
          item-title="title"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Select Status"
          style="flex: 1 1 auto; max-inline-size: 200px; min-inline-size: 150px;"
        />
        <AppSelect
          v-model="filterselectedSorting"
          :items="sortingOptions"
          item-value="value"
          item-title="title"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Sort By"
          style=" flex: 1 1 auto;max-inline-size: 200px; min-inline-size: 150px;"
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
      </div>
      <div class="d-flex gap-4 flex-wrap align-center">
        <AppSelect
          v-model="itemsPerPage"
          :items="[5, 10, 20, 25, 50, 100]"
          style="flex: 1 1 auto;"
        />
        <!-- Export Button -->
        <VBtn
          color="primary"
          prepend-icon="tabler-download"
          style="text-size-adjust: auto; text-transform: none;"
          @click="exportToExcel"
        >
          Export
        </VBtn>
      </div>
    </div>
    <VCol>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        v-model="selectedCompany"
        :headers="invoiceRequestHeaders"
        :items="invoices"
        :items-length="totalInvoices"
        item-key="id"
        class="text-wrap"
        show-select
        @update:options="updateOptions"
      >
        <template #item.invoice_number="{ item }">
          <div class="d-flex align-center">
            <h6 class="text-h8 mb-0 mr-2">
              <a
                href="javascript:void(0)"
                @click="openProgramModal(item)"
              >
                {{ item.invoice_number }}
              </a>
            </h6>
        
            <IconBtn
              v-if="item.reason != null"
              class="mx-1"
              small
              color="error"
            >
              <VTooltip bottom>
                <template #activator="{ props }">
                  <VIcon
                    v-bind="props"
                    icon="tabler-info-circle"
                    size="15"
                    @click="openInfoDialog(item)"
                  />
                </template>
                <span>{{ item.reason }}</span>
              </VTooltip>
            </IconBtn>
          </div>
        </template>

        <template #item.vendor="{ item }">
          <div class="d-flex align-center">
            <h6 class="text-h8 mb-0 mr-2">
              <a
                href="javascript:void(0)"
                @click="$router.push(`/companies/view/${item.vendor_id}`)"
              >
                {{ item.vendor }}
              </a>
          </h6>
          </div>
        </template>

        <template #item.anchor="{ item }">
          <div class="d-flex align-center">
            <h6 class="text-h8 mb-0 mr-2">
              <a
                href="javascript:void(0)"
                @click="$router.push(`/companies/view/${item.vendor_id}`)"
              >
                {{ item.anchor }}
              </a>
          </h6>
          </div>
        </template>

        <!-- Template for Invoice Amount -->
        <template #item.amount="{ item }">
          <span class="text-success">{{ item.amount }}</span>
        </template>

        <!-- Template for Discount Amount -->
        <template #item.discount_amount="{ item }">
          <span class="text-success">{{ item.discount_amount }}</span>
        </template>

        <template #item.status="{ item }">
          <VChip
            density="default"
            label
            v-bind="resolveStatus(item.status)"
            class="text-capitalize"
          />
        </template>

        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-medium-emphasis mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalInvoices) }}
            </p>
            <VPagination
              v-model="page"
              :length="Math.ceil(totalInvoices / itemsPerPage)"
              :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalInvoices / itemsPerPage), 5)"
              active-color="primary"
              next-icon="tabler-caret-right"
              prev-icon="tabler-caret-left"
            />
          </div>
        </template>
      </VDataTableServer>
    </VCol>
  </VRow>
  <VDialog
    v-model="isopenProgramDialogVisible"
    persistent
    max-width="600px"
    class="elevation-10"
  >
    <DialogCloseBtn 
      @click="isopenProgramDialogVisible = !isopenProgramDialogVisible" 
      class="text-h6 d-flex align-center justify-center"
    />
    
    <VCard class="pa-4">
      <VCardTitle class="text-h5 font-weight-bold text-center">
        Invoice Details
      </VCardTitle>

      <VCardText>
        <div class="my-3">
          <strong class="text-subtitle-1">Invoice Number:</strong>
          <span class="text-body-1">{{ selectedInvoice.invoice_number }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">PI Number:</strong>
          <span 
            class="text-primary cursor-pointer"
            @click="openPIDialog(selectedInvoice)"
          >
            {{ selectedInvoice.pi_number }}
          </span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Vendor:</strong>
          <span class="text-body-1">
            <a 
              :href="`/admin/companies/view/${selectedInvoice.vendor_id}`"
              class="text-primary"
            >
              {{ selectedInvoice.vendor }}
            </a>
          </span>
        </div>

        <div class="my-3">
          <strong class="text-subtitle-1">Bank:</strong>
          <span class="text-body-1">{{ selectedInvoice.bank }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Anchor:</strong>
          <span class="text-body-1">{{ selectedInvoice.anchor }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Request Date:</strong>
          <span class="text-body-1">{{ formatDate(selectedInvoice.date_requested) }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Invoice Date:</strong>
          <span class="text-body-1">{{ formatDate(selectedInvoice.invoice_date) }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Expiry Date:</strong>
          <span class="text-body-1">{{ formatDate(selectedInvoice.expiry_date) }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Due Date:</strong>
          <span class="text-body-1">{{ formatDate(selectedInvoice.due_date) }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Amount:</strong>
          <span class="text-success">{{ selectedInvoice.amount }}</span>
        </div>
        <div class="my-3">
          <strong class="text-subtitle-1">Discount Amount:</strong>
          <span class="text-success">{{ selectedInvoice.discount_amount }}</span>
        </div>

        <div v-if="selectedInvoice.financial_approval_status" class="my-3">
          <strong class="text-subtitle-1">Financial Approval Status:</strong>
          <span class="text-body-1">{{ selectedInvoice.financial_approval_status || 'N/A' }}</span>
        </div>

        <div class="d-flex align-center mb-3">
          <strong class="me-2 text-subtitle-1">Status:</strong>
          <VChip
            :color="resolveStatus(selectedInvoice.status).color"
            label
            class="text-capitalize"
          >
            {{ resolveStatus(selectedInvoice.status).text }}
          </VChip>
        </div>

        <div v-if="selectedInvoice.approvals.length > 0" class="my-3">
          <strong class="text-subtitle-1">Approved By:</strong>
          <span class="text-body-1">{{ selectedInvoice.approvals[selectedInvoice.approvals.length - 1].approved_by.name || 'N/A' }}</span>
        </div>

        <div v-if="selectedInvoice.reason" class="my-3">
          <strong class="text-subtitle-1">Reason:</strong>
          <span class="text-body-1">{{ selectedInvoice.reason || 'N/A' }}</span>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isopenPIDialogVisible"
    persistent
    max-width="600px"  
  >
    <DialogCloseBtn 
      @click="isopenPIDialogVisible = !isopenPIDialogVisible" 
      class="text-h6 d-flex align-center justify-center"
    />

    <VCard class="pa-4">
      <VCardTitle class="text-h5 font-weight-bold text-center">
        Payment Instruction
      </VCardTitle>

      <VCardText>
        <!-- Invoice Header -->
        <div class="d-flex justify-content-between mb-3">
          <h6 class="fw-light">{{ $t('Anchor') }}:</h6>
          <h6 class="fw-bold">{{ selectedInvoice.anchor }}</h6>
        </div>   
        <!-- Invoice Details -->
        <div class="d-flex justify-content-between mb-3">
          <h6 class="fw-light">{{ $t('Invoice/Unique Ref No') }}:</h6>
          <h6 class="fw-bold">{{ selectedInvoice.invoice_number }}</h6>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

</template>
