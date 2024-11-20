<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { VDataTable } from 'vuetify/labs/VDataTable';
import XLSX from 'xlsx';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Reports',
  },
})

interface Users {
  id: string
  fullName: string
  avatar: string
}

interface ApiResponse {
  users?: Users[]
}

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const fromdate = ref()
const todate = ref()
const selectedTemplate = ref(null)
const selectedProduct = ref()
const bulkactions = ref()
const userType = ref()
const userName = ref()

const isDialogVisible = ref(false)
const isDeleteDialogVisible = ref(false)

const openDeleteDialog = template => {
  selectedTemplate.value = template
  isDeleteDialogVisible.value = true
}

const openDialog = template => {
  selectedTemplate.value = template
  isDialogVisible.value = true
}

const user_type = ref([
  { title: 'All Users', value: 'all' },
  { title: 'Bank', value: 'bank' },
  { title: 'Anchor', value: 'anchor' },
  { title: 'Vendor', value: 'vendor' },
  { title: 'Dealer', value: 'dealer' },
])

const products = ref([
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Factoring', value: 'factoring' },
])

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'success', icon: 'tabler-thumb-up' }
  else
    return { color: 'error', icon: 'tabler-thumb-down' }
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }

  return { text: 'Inactive', color: 'error' }
}

const resolveProductType = (statusMsg: string) => {
  if (statusMsg === 'vendor_financing')
    return { text: 'Vendor Financing' }
  if (statusMsg === 'dealer_financing')
    return { text: 'Dealer Financing' }

  return { text: 'Factoring' }
}

// Headers
const headers = [
  {
    title: 'User',
    key: 'user',
  },
  // {
  //   title: 'User Type',
  //   key: 'user_type',
  // },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Subject Type',
    key: 'subject_type',
  },
  {
    title: 'Device Info',
    key: 'device_info',
  },
  {
    title: 'IP Address',
    key: 'ip_address',
  },
  {
    title: 'Date & Time',
    key: 'updated_at',
  },
]

const { data: templateData, execute: fetchTemplates } = await useApi<any>(createUrl('/get/UI/activities/reports', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    product: selectedProduct,
    user_id: userName,
    fromdate: fromdate,
    todate: todate,
    page,
    sortBy,
    orderBy,
  },
}))

const templates: Ref<Template[]> = computed(() => templateData.value.data)

fetchTemplates()



const totalReports = computed(() => templateData.value.total)

const { data: usersData, execute: fetchUsers } = await useApi<ApiResponse | null>(createUrl('/users/UI/list'))

const userNames = computed(() => {
  if (!usersData.value || !usersData.value.users)
    return []

  return usersData.value.users
})

const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(templates.value);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Activities');
    
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'activity.xlsx');
  }
const exportToPDF = () => {
    const doc = new jsPDF('landscape');
    const pageWidth = doc.internal.pageSize.getWidth();

    const date = new Date().toLocaleDateString();

    doc.setFontSize(16);
    doc.text('Activity Log Report', 14, 20);

    doc.setFontSize(12);
    doc.text(`Generated on: ${date}`, 14, 30);

    if (templates.value.length > 0) {
    const pdfheaders = headers.map(header => header.title);
    const data = templates.value.map(activity => [activity.user, activity.user_type, activity.description, activity.subject_type, activity.device_info, activity.ip_address, activity.updated_at]);

    const colWidths = headers.map(() => pageWidth / headers.length);

    doc.autoTable({
        startY: 25,
        head: [headers],
          body: data,
          styles: {
            fontSize: 10, 
            cellPadding: 2,
          },
          margin: { top: 20 },
    
    });

    doc.save('activity_log_'+''+date+'.pdf');
    } else {
    console.log('No data to export');
    }
  }
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex align-center">
        <!-- 👉 Select Role -->
        <AppTextField
          v-model="searchQuery"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Search by description"
          style="inline-size: 12.5rem;"
          type="text"
        />
        <AppAutocomplete
            v-model="userName"
            :item-title="(item:User) => item.fullName"
            :item-value="(item:User) => item.id"
            :items="userNames"
            class="me-3"
            placeholder="User Name"
            style="inline-size: 200px;"
        />
        <!-- <AppSelect
          v-model="userType"
          :items="user_type"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="User Type"
          style="inline-size: 12.5rem;"
        /> -->
        <AppDateTimePicker
          v-model="fromdate"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="From Date"
          style="inline-size: 12.5rem;"
        />
        <AppDateTimePicker
          v-model="todate"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="To Date"
          style="inline-size: 12.5rem;"
        />
      </div>
      <div class="d-flex gap-4 flex-wrap align-center">
        <AppSelect
          v-model="itemsPerPage"
          :items="[5, 10, 20, 25, 50]"
        />
        <!-- 👉 Export button -->
        <VBtn
          color="primary"
          prepend-icon="tabler-file-spreadsheet"
          title="Download Excel"
          style=" text-size-adjust: auto;text-transform: none;"
          @click="exportToExcel()"
        />
        <VBtn
          color="primary"
          prepend-icon="tabler-file"
          title="Download PDF"
          style=" text-size-adjust: auto;text-transform: none;"
          @click="exportToPDF()"
        />
      </div>
    </div>
    <VDataTable
      :headers="headers"
      :items="templates"
      :items-per-page="itemsPerPage"
      class="text-wrap"
    >
      <template #item.name="{ item }">
        <h6 class="text-h6">
          <a href="javascript:void(0)">{{ item.name }}</a>
        </h6>
      </template>
      <template #item.status="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveStatus(item.status)"
        />
      </template>
      <template #item.product_type="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveProductType(item.product_type)"
        />
      </template>
      <!-- Actions -->
      <template #bottom>
        <VDivider />

        <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-medium-emphasis mb-0">
            {{ paginationMeta({ page, itemsPerPage }, totalReports) }}
          </p>

          <VPagination
            v-model="page"
            :length="Math.ceil(totalReports / itemsPerPage)"
            :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalReports / itemsPerPage), 5)"
            active-color="primary"
            next-icon="tabler-caret-right"
            prev-icon="tabler-caret-left"
          />
        </div>
      </template>
    </VDataTable>
  </VCard>
</template>
