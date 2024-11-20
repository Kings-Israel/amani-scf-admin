<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { saveAs } from 'file-saver';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import XLSX from 'xlsx';

definePage({
  meta: {
    public: true,
  },
})

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()
const bulkactions = ref()
const vendor = ref()
const anchor = ref()
const bank = ref()
const invoice_amount = ref()
const expiry_date = ref()
const due_date = ref()
const date_requested = ref()
const isopenProgramDialogVisible = ref(false)
const isopenPIDialogVisible = ref(false)

const selectedInvoice = ref(null)


const selectedCompany = ref([])

const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
  console.log(options + 0)
}

// Data table options
const itemsPerPage = ref(15)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const status = ref([
  { title: 'Created', value: 'created' },
  { title: 'Pending', value: 'pending' },
  { title: 'Approved', value: 'approved' },
  { title: 'Submitted', value: 'submitted' },
  { title: 'Disbursed', value: 'disbursed' },
  { title: 'Denied', value: 'denied' },
])

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

const InvoiceRequestHeaders: TableHeader[] = [
  { title: 'Invoice Number', key: 'invoice_number' },
  { title: 'Vendor', key: 'vendor' },
  { title: 'Bank', key: 'bank' },
  { title: 'Anchor', key: 'anchor' },
  { title: 'Date Requested', key: 'date_requested' },
  { title: 'Invoice Amount', key: 'amount' },
  { title: 'Expiry Date', key: 'expiry_date' },
  { title: 'Invoice Due Date', key: 'due_date' },
  { title: 'Discount Amount ', key: 'discount_amount' },
  { title: 'Status', key: 'status' },
]

const { data: invoiceData, execute: fetchInvoiceData } = await useApi<any>(createUrl('/admin/invoices', 
  {
    query: {
      vendor,
      anchor,
      bank,
      status: selectedStatus,
      invoice_amount,
      expiry_date,
      due_date,
      date_requested,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))
  
const invoices = computed(() => invoiceData.value.data)
const totalInvoices = computed(() => invoiceData.value.total)

fetchInvoiceData()

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
    const ws = XLSX.utils.json_to_sheet(invoices.value);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Invoice Requests');
    
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'invoice-requests.xlsx');
  }
</script>

<template>
  <VRow>
    <!-- Button Column -->
    <VCol cols="11" class="d-flex justify-end mx-5 my-5">
      <router-link to="/reports/allinvoice">
        <VBtn color="primary">
          View All
        </VBtn>
      </router-link>
    </VCol>
    
    <!-- Data Table Column -->
    <VCol>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        v-model="selectedCompany"
        :headers="InvoiceRequestHeaders"
        :items="invoices"
        :items-length="totalInvoices"
        item-key="id"
        class="text-wrap"
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

        <template #item.status="{ item }">
          <VChip
            density="default"
            label
            v-bind="resolveStatus(item.status)"
            class="text-capitalize"
          />
        </template>

                <!-- Template for Invoice Amount -->
        <template #item.amount="{ item }">
          <span class="text-success">{{ item.amount }}</span>
        </template>

        <!-- Template for Discount Amount -->
        <template #item.discount_amount="{ item }">
          <span class="text-success">{{ item.discount_amount }}</span>
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
  <!-- Smaller Receipt Modal -->
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
