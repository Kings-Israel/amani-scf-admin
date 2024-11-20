<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { saveAs } from 'file-saver';
import { computed, ref } from 'vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import XLSX from 'xlsx';

definePage({
  meta: {
    public: true,
  },
});

const selectedStatus = ref<string | undefined>();
const selectedType = ref<string | undefined>();
const selectedSorting = ref<string | undefined>();

// Temporary filter variables
const filterVendor = ref<string | undefined>('');
const filterAnchor = ref<string | undefined>('');
const filterBank = ref<string | undefined>('');
const filterInvoiceAmount = ref<number | undefined>();
const filterInvoiceNumber = ref<number | undefined>();
const filterExpiryDate = ref<string | undefined>('');
const filterDueDate = ref<string | undefined>('');
const filterDateRequested = ref<string | undefined>('');
const filterStartDate = ref<string | undefined>('');
const filterEndDate = ref<string | undefined>('');

// Selected query parameters for the API
const vendor = ref<string | undefined>('');
const anchor = ref<string | undefined>('');
const bank = ref<string | undefined>('');
const invoiceAmount = ref<number | undefined>();
const invoiceNumber = ref<number | undefined>();
const expiryDate = ref<string | undefined>('');
const dueDate = ref<string | undefined>('');
const dateRequested = ref<string | undefined>('');
const startDate = ref<string | undefined>(''); 
const endDate = ref<string | undefined>(''); 

const selectedCompany = ref([]);
const itemsPerPage = ref(50);
const page = ref(1);
const sortBy = ref<string | undefined>();
const orderBy = ref<string | undefined>();

interface TableHeader {
  title: string;
  key: string;
  sortable?: boolean;
}

const invoiceRequestHeaders: TableHeader[] = [
  { title: 'Invoice/Unique Ref No.', key: 'invoice_number' },
  { title: 'Bank', key: 'bank' },
  { title: 'Vendor', key: 'vendor' },
  { title: 'Anchor', key: 'anchor' },
  { title: 'Net Invoice Amount (Ksh)', key: 'amount' },
  { title: 'Invoice Date', key: 'invoice_date' },
  { title: 'Due Date', key: 'due_date' },
];

const statusOptions = ref([
  { title: 'Submitted', value: 'submitted' },
  { title: 'Pending Approval', value: 'pending_approval' },
  { title: 'Approved', value: 'approved' },
  { title: 'Disbursed', value: 'disbursed' },
  { title: 'Rejected', value: 'denied' },
  { title: 'Closed', value: 'closed' },
]);

const sortingOptions = ref([
  { title: 'Due Date (ASC)', value: 'asc_due_date' },
  { title: 'Due Date (DESC)', value: 'desc_due_date' },
  { title: 'Request Date (ASC)', value: 'asc_date_requested' },
  { title: 'Request Date (DESC)', value: 'desc_date_requested' },
  { title: 'Invoice Amount (ASC)', value: 'asc_amount' },
  { title: 'Invoice Amount (DESC)', value: 'desc_amount' },
  { title: 'Created (ASC)', value: 'asc_created' },
  { title: 'Created (DESC)', value: 'desc_created' },
]);

const typeOptions = ref([
  { title: 'Vendor Financing', value: 1 },
  { title: 'Dealer Financing', value: 2 },
]);

// Update queryParams only when submitFilters is called
const queryParams = computed(() => ({
  vendor: vendor.value || undefined,
  anchor: anchor.value || undefined,
  bank: bank.value || undefined,
  status: selectedStatus.value,
  program_type: selectedType.value,
  sortBy: selectedSorting.value,
  invoice_number: invoiceNumber.value || undefined,
  invoice_amount: invoiceAmount.value || undefined,
  expiry_date: expiryDate.value || undefined,
  due_date: dueDate.value || undefined,
  date_requested: dateRequested.value || undefined,
  start_date: startDate.value || undefined,
  end_date: endDate.value || undefined,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}));

const { data: invoiceData, execute: fetchInvoiceData } = await useApi<any>(createUrl('/admin/dfrequests/invoices', {
  query: queryParams,
}));

const invoices = computed(() => invoiceData.value.data);
const totalInvoices = computed(() => invoiceData.value.total);

const updateOptions = (options: any) => {
  page.value = options.page;
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
};

const resolveStatus = (statusMsg: string) => {
  const statusMapping = {
    'Approved': { text: 'Approved', color: 'success' },
    'Past Due': { text: statusMsg, color: 'error' },
    'Closed': { text: 'Closed', color: 'success' },
    'Rejected': { text: 'Rejected', color: 'error' },
    'Disbursed': { text: 'Disbursed', color: 'info' }
  };
  return statusMapping[statusMsg] || { text: statusMsg, color: 'default' };
};

const submitFilters = async () => {
  // Update actual filter variables from temporary filters
  vendor.value = filterVendor.value;
  anchor.value = filterAnchor.value;
  bank.value = filterBank.value;
  invoiceNumber.value = filterInvoiceNumber.value;
  invoiceAmount.value = filterInvoiceAmount.value;
  expiryDate.value = filterExpiryDate.value;
  dueDate.value = filterDueDate.value;
  dateRequested.value = filterDateRequested.value;
  startDate.value = filterStartDate.value;
  endDate.value = filterEndDate.value;

  // Fetch filtered invoice data
  await fetchInvoiceData();
};

const clearFilters = () => {
  // Clear filter inputs
  filterVendor.value = '';
  filterAnchor.value = '';
  filterBank.value = '';
  selectedStatus.value = undefined;
  selectedType.value = undefined;
  selectedSorting.value = undefined;
  filterInvoiceNumber.value = undefined;
  filterInvoiceAmount.value = undefined;
  filterExpiryDate.value = undefined;
  filterDueDate.value = undefined;
  filterDateRequested.value = undefined;
  filterStartDate.value = undefined;
  filterEndDate.value = undefined;
  page.value = 1;

  // Clear actual query parameters
  submitFilters();
};

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(invoices.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Invoices');
  const workbookOutput = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  saveAs(new Blob([workbookOutput], { type: 'application/octet-stream' }), 'invoices.xlsx');
};

// Initial fetch for invoices data
fetchInvoiceData();
</script>


<template>
  <VCol>
    <h2 class="my-4 mx-5"><b> DF - Potential Financing Report  </b></h2>

    <VRow>
      <!-- Wrap the filter controls and the table in a single column layout -->
      <VCol>
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
              style="min-width: 250px; flex: 1 auto;"
              type="text"
            />
            <AppTextField
              v-model="filterVendor"
              class="me-3"
              clear-icon="tabler-circle-x"
              clearable
              color="primary"
              placeholder="Dealer"
              style="min-width: 250px; flex: 1 1 auto;"
              type="text"
            />
            <AppTextField
              v-model="filterAnchor"
              class="me-3"
              clear-icon="tabler-circle-x"
              clearable
              color="primary"
              placeholder="Anchor"
              style="min-width: 250px; flex: 1 1 auto;"
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

        <!-- Data Table Section -->
        <VCardItem class="notification-section">
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
                <span>{{ item.invoice_number }}</span>
                <IconBtn v-if="item.reason != null" class="mx-1" small color="error">
                  <VTooltip bottom>
                    <template #activator="{ props }">
                      <VIcon v-bind="props" icon="tabler-info-circle" size="15" @click="openInfoDialog(item)" />
                    </template>
                    <span>{{ item.reason }}</span>
                  </VTooltip>
                </IconBtn>
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
        </VCardItem>
      </VCol>
    </VRow>
  </VCol>
</template>
