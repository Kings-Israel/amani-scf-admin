<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable'

interface Faqs {
  id: number
  name: string
  product_type: string
  faq: string
  status: string
}

const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const fromdate = ref()
const todate = ref()

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
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

  return { text: 'Generic', color: 'error' }
}

// Headers
const headers = [
  {
    title: 'Faq Name',
    key: 'name',
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

const { data: faqData, execute: fetchFaqs } = await useApi<any>(createUrl('get/UI/configurations/faqs', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const faqs: Ref<Faqs[]> = computed(() => faqData.value.data)

fetchFaqs()
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
          placeholder="Template Name"
          style="inline-size: 200px;"
          type="text"
        />
        <AppSelect
          v-model="selectedStatus"
          :items="status"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Status"
          style="inline-size: 100px;"
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
          @click="$router.push(`/configurations/view/add-faq`)"
        >
          Add Faq
        </VBtn>
      </div>
    </div>
    <VDataTable
      :headers="headers"
      :items="faqs"
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
      <!-- Actions -->
      <template #item.actions="{ item }">
        <!-- <IconBtn @click="$router.push(`/program/view/${item.id}`)"> -->
        <IconBtn>
          <VIcon
            icon="tabler-eye"
            color="info"
          />
        </IconBtn>

        <IconBtn @click="deleteUser(item.id)">
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
          />
        </IconBtn>
      </template>
    </VDataTable>
  </VCard>
</template>
