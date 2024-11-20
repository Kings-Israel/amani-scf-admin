<script lang="ts" setup>
import AddIndustryDialog from '@/pages/configurations/dialogs/AddIndustryDialog.vue'
import EditTermsDialog from '@/pages/configurations/dialogs/EditIndustryDialog.vue'
import { computed, ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as XLSX from 'xlsx'

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Industries',
  },
})

interface Template {
  id: number
  name: string
  product_type: string
  subject: string
  header: number
  footer: number
  body: string
  signature: string
  status: string
}

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedTemplate = ref(null)
const bulkactions = ref()

const filterselectedStatus = ref<string | undefined>(null)
const filterselectedProduct = ref<string | undefined>('')
const filtersearchQuery = ref<string | undefined>('')

const isDialogVisible = ref(false)
const isDeleteDialogVisible = ref(false)
const isApproveDialogVisible = ref(false)
const isRejectDialogVisible = ref(false)
const isEnableDialogVisible = ref(false)
const isDisableDialogVisible = ref(false)

const isAddDialogVisible = ref(false)

const openDeleteDialog = (template: Template) => {
  selectedTemplate.value = template
  isDeleteDialogVisible.value = true
}

const openApproveDialog = (template: Template) => {
  selectedTemplate.value = template
  isApproveDialogVisible.value = true
}

const openRejectDialog = (template: Template) => {
  selectedTemplate.value = template
  isRejectDialogVisible.value = true
}

const openEnableDialog = (template: Template) => {
  selectedTemplate.value = template
  isEnableDialogVisible.value = true
}

const openDisableDialog = (template: Template) => {
  selectedTemplate.value = template
  isDisableDialogVisible.value = true
}

const openDialog = (template: Template) => {
  selectedTemplate.value = template
  isDialogVisible.value = true
}

const openAddDialog = () => {
  isAddDialogVisible.value = true
}

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }
  if (statusMsg === 'waiting_checker_approval')
    return { text: 'Pending Checker', color: 'info' }

  return { text: 'Inactive', color: 'error' }
}

const resolveActionBtns = (pending_action: string) => {
  if (pending_action === 'deactivate')
    return { color: 'error', icon: 'tabler-circle-dot', action: deactivateIndustry }
  else
    return { color: 'primary', icon: 'tabler-circle-check', action: activateIndustry }
}

// Headers
const headers = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const queryParams = computed(() => ({
  q: searchQuery.value,
  status: selectedStatus.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}))

const { data: templateData, execute: fetchTemplates } = await useApi<any>(createUrl('/industries', {
  query: queryParams,
}))

const templates: Ref<Template[]> = computed(() => templateData.value.data)
const totaltemplates = computed(() => templateData.value.total)

fetchTemplates()

const approve = async (industryId: any) => {
  try {
    const response = await $api('/industry/approve', {
      method: 'POST',
      body: {
        industry_id: industryId,
      },
    })

    if (response.message === 'Industry approved successfully') {
      toast.success(response.message || 'Industry approved successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchTemplates()
      isApproveDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this industry', {
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
    const errorMessage = error.response?.data?.message || 'Error approving the industry'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const reject = async (industryId: any) => {
  try {
    const response = await $api('/industry/reject', {
      method: 'POST',
      body: {
        industry_id: industryId,
      },
    })

    if (response.message === 'Industry rejected successfully') {
      toast.success(response.message || 'Industry rejected successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchTemplates()
      isRejectDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this industry', {
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
    const errorMessage = error.response?.data?.message || 'Error rejecting the industry'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const enable = async (industryId: any) => {
  try {
    const response = await $api('/industry/initiate-activate', {
      method: 'POST',
      body: {
        industry_id: industryId,
      },
    })

    if (response.message === 'Activation initiated successfully') {
      toast.success(response.message || 'Activation initiated successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchTemplates()
      isEnableDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot activate this industry', {
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
    const errorMessage = error.response?.data?.message || 'Error activating the industry'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const disable = async (industryId: any) => {
  try {
    const response = await $api('/industry/initiate-deactivate', {
      method: 'POST',
      body: {
        industry_id: industryId,
      },
    })

    if (response.message === 'Deactivation initiated successfully') {
      toast.success(response.message || 'Deactivation initiated successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchTemplates()
      isDisableDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this industry', {
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
    const errorMessage = error.response?.data?.message || 'Error deactivating the industry'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const deleteTemplate = async (id: number) => {
  try {
    await $api(`/industries/${id}`, {
      method: 'DELETE',
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
    await fetchTemplates()
    isDeleteDialogVisible.value = false
  }
  catch (err) {
    console.error(err)
  }
}

const activateIndustry = async (id: number) => {
  try {
    await $api(`/industries/${id}/activate`, {
      method: 'PATCH',
    })
    await fetchTemplates()
  }
  catch (err) {
    console.error(err)
  }
}

const deactivateIndustry = async (id: number) => {
  try {
    await $api(`/industries/${id}/deactivate`, {
      method: 'PATCH',
    })
    await fetchTemplates()
  }
  catch (err) {
    console.error(err)
  }
}

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(templates.value.map(template => ({
    Name: template.name,
    Status: resolveStatus(template.status).text,
  })))

  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Industries')

  XLSX.writeFile(wb, 'industries.xlsx')
}

const submitFilters = async () => {
  searchQuery.value = filtersearchQuery.value
  selectedStatus.value = filterselectedStatus.value

  await fetchTemplates()
}

const clearFilters = () => {
  filtersearchQuery.value = ''
  filterselectedStatus.value = ''
  page.value = 1

  submitFilters()
}

fetchTemplates()
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Search Field -->
        <AppTextField
          v-model="filtersearchQuery"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Search"
          style="inline-size: 200px;"
          type="text"
        />
        <!-- 👉 Status Filter -->
        <AppSelect
          v-model="filterselectedStatus"
          :items="status"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Status"
          style="inline-size: 100px;"
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
        <!-- 👉 Items Per Page Selector -->
        <AppSelect
          v-model="itemsPerPage"
          :items="[5, 10, 20, 25, 50]"
        />
        <!-- 👉 Export button -->
        <VBtn
          color="primary"
          prepend-icon="tabler-download"
          style="text-size-adjust: auto; text-transform: none;"
          @click="exportToExcel"
        />
        <!-- 👉 Add Industry Button -->
        <VBtn
          color="primary"
          prepend-icon="tabler-plus"
          style="text-size-adjust: auto; text-transform: none;"
          @click="openAddDialog"
        >
          Add Industry
        </VBtn>
      </div>
    </div>

    <VDataTable
      :headers="headers"
      :items="templates"
      :items-per-page="itemsPerPage"
      class="text-no-wrap"
    >
      <!-- Custom Columns -->
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
      <template #item.actions="{ item }">
        <!-- Edit Button -->
        <IconBtn @click="openDialog(item)">
          <VIcon
            v-if="item.status === 'active' || item.status === 'inactive'"
            icon="tabler-pencil"
            color="warning"
          />
        </IconBtn>

        <!-- Activate/Deactivate Button -->
        <IconBtn v-if="item.status === 'waiting_checker_approval' && item.pending_action === 'activate' || item.pending_action === 'deactivate' && item.checker_status === true">
          <VIcon
            :icon="resolveActionBtns(item.pending_action)?.icon"
            :color="resolveActionBtns(item.pending_action)?.color"
            :title="item.status"
            @click="resolveActionBtns(item.pending_action)?.action(item.id)"
          />
        </IconBtn>

        <!-- Delete Button -->
        <IconBtn>
          <VIcon
            icon="tabler-trash"
            is-disable-dialog-visible
            color="error"
            @click="openDeleteDialog(item)"
          />
        </IconBtn>

        <!-- Approve Button -->
        <IconBtn v-if="item.checker_status === true && item.pending_action === 'Industry Created - Waiting Checker Approval'">
          <VIcon
            icon="tabler-square-check"
            color="success"
            @click="openApproveDialog(item)"
          />
        </IconBtn>

        <!-- Reject Button -->
        <IconBtn v-if="item.checker_status === true && item.pending_action === 'Industry Created - Waiting Checker Approval'">
          <VIcon
            icon="tabler-square-x"
            color="error"
            @click="openRejectDialog(item)"
          />
        </IconBtn>

        <!-- Enable Button -->
        <IconBtn v-if="item.status === 'inactive' && item.pending_action === null">
          <VIcon
            icon="tabler-thumb-down"
            color="error"
            @click="openEnableDialog(item)"
          />
        </IconBtn>

        <!-- Disable Button -->
        <IconBtn v-if="item.status === 'active' && item.pending_action === null">
          <VIcon
            icon="tabler-thumb-up"
            color="success"
            @click="openDisableDialog(item)"
          />
        </IconBtn>
      </template>

      <template #bottom>
        <VDivider />

        <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-medium-emphasis mb-0">
            Showing {{ (page - 1) * itemsPerPage + 1 }} to {{ Math.min(page * itemsPerPage, totaltemplates) }} of {{ totaltemplates }} entries
          </p>

          <VPagination
            v-model="page"
            :length="Math.ceil(totaltemplates / itemsPerPage)"
            :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totaltemplates / itemsPerPage), 5)"
            active-color="primary"
            next-icon="tabler-caret-right"
            prev-icon="tabler-caret-left"
          />
        </div>
      </template>
    </VDataTable>
  </VCard>

  <!-- Add Industry Dialog -->
  <AddIndustryDialog
    v-if="isAddDialogVisible"
    v-model:isDialogVisible="isAddDialogVisible"
  />

  <!-- Edit Terms Dialog -->
  <EditTermsDialog
    v-if="isDialogVisible"
    v-model:isDialogVisible="isDialogVisible"
    :template="selectedTemplate"
  />

  <!-- Delete Confirmation Dialog -->
  <VDialog
    v-model="isDeleteDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDeleteDialogVisible = false" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to delete Industry: {{ selectedTemplate.name }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDeleteDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="deleteTemplate(selectedTemplate.id)"
        >
          Delete
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isApproveDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isApproveDialogVisible = false" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to approve this  Industry: {{ selectedTemplate.name }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isApproveDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="ApproveTemplate(selectedTemplate.id)"
        >
          Delete
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isApproveDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isApproveDialogVisible = false" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to approve this  Industry: {{ selectedTemplate.name }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isApproveDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="approve(selectedTemplate.id)"
        >
          Approve
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isRejectDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isRejectDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Reject this  Industry: {{ selectedTemplate.name }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isRejectDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="reject(selectedTemplate.id)"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isEnableDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isEnableDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Enable this  Industry: {{ selectedTemplate.name }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isEnableDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="enable(selectedTemplate.id)"
        >
          Enable
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isDisableDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isDisableDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Disable this  Industry: {{ selectedTemplate.name }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDisableDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="disable(selectedTemplate.id)"
        >
          Disable
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
