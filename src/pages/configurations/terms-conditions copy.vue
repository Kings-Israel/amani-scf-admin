<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import EditEmailsDialog from '@/pages/configurations/view/edit-email-template.vue'
import { paginationMeta } from '@api-utils/paginationMeta'

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

// Data table options
const selectedTemplate = ref<Template | null>(null)
const searchQuery = ref('')
const selectedEmail = ref<Template | null>(null)
const selectedStatus = ref<string | null>(null)
const selectedProduct = ref<string | null>(null)
const bulkactions = ref<string | null>(null)

const filterselectedStatus = ref<string | undefined>('')
const filterselectedProduct = ref<string | undefined>('')
const filtersearchQuery = ref<string | undefined>('')

const isDialogVisible = ref(false)
const isDeleteDialogVisible = ref(false)

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref<string | null>(null)
const orderBy = ref<string | null>(null)
const fromdate = ref<string | null>(null)
const todate = ref<string | null>(null)

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'Inactive', value: 'inactive' },
])

const products = ref([
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Factoring', value: 'factoring' },
])

const openDeleteDialog = (email: Template) => {
  selectedEmail.value = email
  isDeleteDialogVisible.value = true
}

const openDialog = (template: Template) => {
  selectedTemplate.value = template
  isDialogVisible.value = true
}

const resolveActionBtns = (status: string) => {
  return status === 'active'
    ? { color: 'error', icon: 'tabler-circle-dot' }
    : { color: 'primary', icon: 'tabler-circle-check' }
}

const resolveStatus = (statusMsg: string) => {
  return statusMsg === 'active'
    ? { text: 'Active', color: 'success' }
    : { text: 'Inactive', color: 'error' }
}

const resolveProductType = (productType: string) => {
  const productNames = {
    vendor_financing: 'Vendor Financing',
    dealer_financing: 'Dealer Financing',
    factoring: 'Factoring',
  }

  return { text: productNames[productType] || 'Unknown' }
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
  product: selectedProduct.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}))

// Fetch templates from API
const { data: templateData, execute: fetchTemplates } = await useApi<any>(
  createUrl('/UI/configurations/terms-and-conditions', {
    query: queryParams,
  }),
)

const templates = computed<Template[]>(() => templateData.value.data)
const totalTemplates = computed(() => templateData.value.total)

await fetchTemplates()

const deleteTemplate = async (id: number) => {
  try {
    await $api(`/UI/configurations/delete/terms-and-conditions/${id}`, {
      method: 'POST',
    })
    await fetchTemplates()
    isDeleteDialogVisible.value = false
  }
  catch (err) {
    console.error(err)
  }
}

const approve = async (id: number[]) => {
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
  selectedProduct.value = filterselectedProduct.value

  await fetchTemplates()
}

const clearFilters = () => {
  filtersearchQuery.value = ''
  filterselectedStatus.value = ''
  filterselectedProduct.value = ''
  page.value = 1

  submitFilters()
}

fetchTemplates()
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5 align-center">
      <div class="d-flex align-center flex-wrap gap-4">
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
          style="inline-size: 200px;"
        />
        <AppSelect
          v-model="filterselectedProduct"
          :items="products"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Product Type"
          style="inline-size: 200px;"
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
      <div class="d-flex gap-4 align-center">
        <AppSelect
          v-model="itemsPerPage"
          :items="[5, 10, 20, 25, 50]"
          style="inline-size: 100px;"
        />
        <VBtn
          color="primary"
          prepend-icon="tabler-download"
          style="text-size-adjust: auto; text-transform: none;"
        >
          Export
        </VBtn>
        <VBtn
          color="primary"
          prepend-icon="tabler-plus"
          style="text-size-adjust: auto; text-transform: none;"
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
      <template #item.product_type="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveProductType(item.product_type)"
        />
      </template>
      <template #item.actions="{ item }">
        <IconBtn @click="openDialog(item)">
          <VIcon
            icon="tabler-pencil"
            color="warning"
          />
        </IconBtn>
        <IconBtn>
          <VIcon
            :icon="resolveActionBtns(item.status)?.icon"
            :color="resolveActionBtns(item.status)?.color"
            :title="item.status"
            @click="approve([item.id])"
          />
        </IconBtn>
        <IconBtn>
          <VIcon
            icon="tabler-trash"
            color="error"
            @click="openDeleteDialog(item)"
          />
        </IconBtn>
      </template>
      <template #bottom>
        <VDivider />
        <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-medium-emphasis mb-0">
            {{ paginationMeta({ page, itemsPerPage }, totalTemplates) }}
          </p>
          <VPagination
            v-model="page"
            :length="Math.ceil(totalTemplates / itemsPerPage)"
            :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalTemplates / itemsPerPage), 5)"
            active-color="primary"
            next-icon="tabler-caret-right"
            prev-icon="tabler-caret-left"
          />
        </div>
      </template>
    </VDataTable>
  </VCard>

  <EditEmailsDialog
    v-if="isDialogVisible"
    v-model:isDialogVisible="isDialogVisible"
    :email="selectedEmail"
  />

  <VDialog
    v-model="isDeleteDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isDeleteDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to delete email template: {{ selectedEmail?.name }}? <br> This action cannot be undone.
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
          @click="deleteTemplate(selectedEmail?.id)"
        >
          Delete
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
