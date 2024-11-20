<script lang="ts" setup>
import EditTermsDialog from '@/pages/configurations/view/edit-terms.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTable } from 'vuetify/labs/VDataTable'

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Terms and Conditions',
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

const isDialogVisible = ref(false)
const isDeleteDialogVisible = ref(false)
const isApproveDialogVisible = ref(false)
const isRejectDialogVisible = ref(false)
const isEnableDialogVisible = ref(false)
const isDisableDialogVisible = ref(false)

const filterselectedStatus = ref<string | undefined>(null)
const filtersearchQuery = ref<string | undefined>('')

const openDeleteDialog = template => {
  selectedTemplate.value = template
  isDeleteDialogVisible.value = true
}

const openApproveDialog = template => {
  selectedTemplate.value = template
  isApproveDialogVisible.value = true
}

const openRejectDialog = template => {
  selectedTemplate.value = template
  isRejectDialogVisible.value = true
}

const openEnableDialog = template => {
  selectedTemplate.value = template
  isEnableDialogVisible.value = true
}

const openDisableDialog = template => {
  selectedTemplate.value = template
  isDisableDialogVisible.value = true
}

const openDialog = template => {
  selectedTemplate.value = template
  isDialogVisible.value = true
}

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'error', icon: 'tabler-circle-dot' }
  else
    return { color: 'primary', icon: 'tabler-circle-check' }
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }
  if (statusMsg === 'waiting_checker_approval')
    return { text: 'Pending Checker', color: 'info' }

  return { text: 'Inactive', color: 'error' }
}

const resolveSection = (statusMsg: string) => {
  if (statusMsg === 'admin')
    return { text: 'Admin', color: 'primary' }
  if (statusMsg === 'crm')
    return { text: 'CRM', color: 'info' }
  if (statusMsg === 'vendor')
  return { text: 'Vendor', color: 'primary' }
  if (statusMsg === 'anchor')
  return { text: 'Archor', color: 'info' }
  if (statusMsg === 'bank')
  return { text: 'Bank', color: 'primary' }
  if (statusMsg === 'dealer')
  return { text: 'Dealer', color: 'info' }
}

const resolveProductType = (statusMsg: string) => {
  if (statusMsg === 'vendor_financing')
    return { text: 'Vendor Financing' }
  if (statusMsg === 'dealer_financing')
    return { text: 'Dealer Financing' }
  if (statusMsg === 'factoring')
    return { text: 'Factoring' }

  return { text: 'Unknown' }
}

// Headers
const headers = [
  {
    title: 'T&C Name',
    key: 'name',
  },
  {
    title: 'Section',
    key: 'section',
  },
  {
    title: 'Product Type',
    key: 'product_type',
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

const { data: templateData, execute: fetchTemplates } = await useApi<any>(createUrl('/UI/configurations/terms-and-conditions', {
  query: queryParams,
}))

const templates: Ref<Template[]> = computed(() => templateData.value.data)

fetchTemplates()

const approveTemplate = async termsId => {
  try {
    const response = await $api('/UI/configurations/activate/terms-and-condition/approve', {
      method: 'POST',
      body: {
        terms_id: termsId,
      },
    })

    if (response.message === 'Terms and Condition approved successfully') {
      toast.success(response.message || 'Terms and Condition approved successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchTemplates()
      isApproveDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this terms and condition', {
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
    const errorMessage = error.response?.data?.message || 'Error approving the terms and condition'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const rejectTemplate = async termsId => {
  try {
    const response = await $api('/UI/configurations/activate/terms-and-condition/reject', {
      method: 'POST',
      body: {
        terms_id: termsId,
      },
    })

    if (response.message === 'Terms and Condition rejected successfully') {
      toast.success(response.message || 'Terms and Condition rejected successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchTemplates()
      isRejectDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this terms and condition', {
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
    const errorMessage = error.response?.data?.message || 'Error rejecting the terms and condition'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const enableTemplate = async termsId => {
  try {
    const response = await $api('UI/configurations/activate/terms-and-condition/enable', {
      method: 'POST',
      body: {
        terms_id: termsId,
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
      toast.warn(response.message || 'You cannot enable this terms and condition', {
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
    const errorMessage = error.response?.data?.message || 'Error enabling the terms and condition'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const disableTemplate = async termsId => {
  try {
    const response = await $api('/UI/configurations/activate/terms-and-condition/disable', {
      method: 'POST',
      body: {
        terms_id: termsId,
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
      toast.warn(response.message || 'You cannot disable this terms and condition', {
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
    const errorMessage = error.response?.data?.message || 'Error disabling the terms and condition'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const deleteTemplate = async id => {
  try {
    await $api(`/UI/configurations/delete/terms-and-conditions/${id}`, {
      method: 'POST',
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

const approve = async (id: any) => {
  await $api('/UI/configurations/activate/terms-and-conditions', {
    method: 'POST',
    body: {
      ids: id,
      status: bulkactions.value,
    },
  })
  await fetchTemplates()
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
        <!-- 👉 Select Role -->
        <AppTextField
          v-model="filtersearchQuery"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Template Name"
          style="inline-size: 200px;"
          type="text"
        />
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
        <VBtn
          color="primary"
          prepend-icon="tabler-plus"
          style=" text-size-adjust: auto;text-transform: none;"
          @click="$router.push(`/configurations/view/add-terms-conditions`)"
        >
          Add Terms & Conditions
        </VBtn>
      </div>
    </div>
    <VDataTable
      :headers="headers"
      :items="templates"
      :items-per-page="itemsPerPage"
      class="text-no-wrap"
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
      <template #item.section="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveSection(item.section)"
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
      <template #item.actions="{ item }">
        <IconBtn @click="openDialog(item)" v-if="item.status === 'active' || item.status === 'inactive'">
          <VIcon
            icon="tabler-pencil"
            color="warning"
          />
        </IconBtn>

        <IconBtn v-if="item.status === 'waiting_checker_approval' && item.pending_action === 'activate' || item.pending_action === 'deactivate' && item.checker_status === true" >
          <VIcon
            :icon="resolveActionBtns(item.status)?.icon"
            :color="resolveActionBtns(item.status)?.color"
            :title="item.status"
            @click="approve([item.id])"
          />
        </IconBtn>
        <IconBtn v-if="item.status === 'active' || item.status === 'inactive'">
          <VIcon
            icon="tabler-trash"
            color="error"
            @click="openDeleteDialog(item)"
          />
        </IconBtn>
        <IconBtn v-if="item.checker_status === true && item.pending_action === 'Email Template Created - Waiting Checker Approval'">
          <VIcon
            icon="tabler-square-check"
            color="success"
            @click="openApproveDialog(item)"
          />
        </IconBtn>

        <!-- Reject Button -->
        <IconBtn v-if="item.checker_status === true && item.pending_action === 'Email Template Created - Waiting Checker Approval'">
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
    </VDataTable>
  </VCard>
  <EditTermsDialog
    v-if="isDialogVisible"
    v-model:isDialogVisible="isDialogVisible"
    :template="selectedTemplate"
  />
  <VDialog
    v-model="isDeleteDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to delete template: {{ selectedTemplate.name }}? <br> This action can not be undone.
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
        Are you sure you want to Approve this Terms template: {{ selectedTemplate.name }}? <br> This action cannot be undone.
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
          @click="approveTemplate(selectedTemplate.id)"
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
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isRejectDialogVisible = false" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Reject  this Terms template: {{ selectedTemplate.name }}? <br> This action cannot be undone.
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
          @click="rejectTemplate(selectedTemplate.id)"
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
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isEnableDialogVisible = false" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Enable  this Terms template: {{ selectedTemplate.name }}? <br> This action cannot be undone.
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
          @click="enableTemplate(selectedTemplate.id)"
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
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDisableDialogVisible = false" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Disable  this Terms template: {{ selectedTemplate.name }}? <br> This action cannot be undone.
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
          @click="disableTemplate(selectedTemplate.id)"
        >
          Disable
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
