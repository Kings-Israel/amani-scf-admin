<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta';
import { saveAs } from 'file-saver';
import { VDataTable } from 'vuetify/labs/VDataTable';
import XLSX from 'xlsx';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Programs & Mapping',
  },
})

interface Program {
  id: number
  bank: string
  name: string
  code: string
  eligibility: number
  program_limit: number
  approved_date: string
  limit_expiry_date: string
  max_limit_per_account: number
  min_financing_days: number
  recourse: string
  max_financing_days: number
  program_type: string
  program_code: string
  account_status: string
  anchor: Anchor
}

interface Anchor {
  id: number
  branch_code: string | null
  organization_type: string | null
  approval_status: string | null
  status: string | null
  customer_type: string | null
  name: string
}

const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()

const selectedProduct = ref([])
const bulkactions = ref()

// Data table options
const itemsPerPage = ref(15)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const fromdate = ref()
const todate = ref()

const status = ref([
  { title: 'Pending', value: 'pending' },
  { title: 'Suspended', value: 'suspended' },
])

const bulk_actions = ref([
  { title: 'Approve', value: 'active' },
  { title: 'Reject', value: 'inactive' },
])

const resolveActionBtns = (account_status: string) => {
  if (account_status && account_status === 'active')
    return { color: 'success', icon: 'tabler-thumb-up' }
  else
    return { color: 'error', icon: 'tabler-thumb-down' }
}

const utilizedLimit = (programLimit: number, maxLimit: number) => {
  return (programLimit / maxLimit) * 100
}

// Headers
const headers = [
  {
    title: 'Anchor',
    key: 'name',
  },
  {
    title: 'Name',
    key: 'code',
  },
  {
    title: 'Bank',
    key: 'bank',
  },
  {
    title: 'Approval Date',
    key: 'approved_date',
  },
  {
    title: 'Program Limit',
    key: 'program_limit',
  },
  {
    title: 'Max Limit Per Account',
    key: 'max_limit_per_account',
  },
  {
    title: 'Min Financing Days',
    key: 'min_financing_days',
  },
  {
    title: 'Max Financing Days',
    key: 'max_financing_days',
  },

  // {
  //   title: 'Recourse',
  //   key: 'recourse',
  // },
  // {
  //   title: 'Program Code',
  //   key: 'program_code',
  // },
  {
    title: 'Program Type',
    key: 'program_type',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const { data: programData, execute: fetchPrograms } = await useApi<any>(createUrl('/all/UI/program/approved', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
    fromdate,
    todate,
  },
}))

const { data: changesData, execute: fetchChanges } = await useApi<any>(createUrl('/programs/changes'))

const programs: Ref<Program[]> = computed(() => programData.value.data)

console.log(programs);

const totalPrograms = computed(() => changesData.value.total)

fetchPrograms()
fetchChanges()

const chno = changesData.value.programchange

const approve = async (id: any) => {
  await $api('/programs/admin/activate', {
    method: 'POST',
    body: {
      ids: id,
      status: bulkactions.value,
    },
  })
  await fetchPrograms()
}

watch(bulkactions, val => {
  if (val && selectedProduct.value.length)
    approve(selectedProduct.value)
})

const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(programs.value);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Pending Programs');
    
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'pending-programs.xlsx');
  }
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex align-center">
     
      </div>
      <div class="d-flex gap-4 flex-wrap align-center">
        <router-link to="/programs" class="btn btn-primary">
        View All
      </router-link>
      </div>
    </div>
    <!-- <VCardText v-if="chno > 0">
      Current pending changes
      <VAvatar
        color="error"
        size="x-small"
      >
        <small>{{ chno }}</small>
      </VAvatar>
    </VCardText> -->
    <VDataTable
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      v-model="selectedProduct"
      :headers="headers"
      :items="programs"
      :items-length="totalPrograms"
      class="text-no-wrap"
      show-select
    >
    
      <template #item.program_limit="{ item }">
        <p>{{ item.program_limit.toLocaleString() }}</p>
      </template>
      <template #item.max_limit_per_account="{ item }">
        <p>{{ item.max_limit_per_account.toLocaleString() }}</p>
      </template>

      <template #bottom>
          <VDivider />
            <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
              <p class="text-sm text-medium-emphasis mb-0">
                {{ paginationMeta({ page, itemsPerPage }, totalPrograms) }}
              </p>
    
              <VPagination
                v-model="page"
                :length="Math.ceil(totalPrograms / itemsPerPage)"
                :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalPrograms / itemsPerPage), 5)"
                active-color="primary"
                next-icon="tabler-caret-right"
                prev-icon="tabler-caret-left"
              />
            </div>
        </template>
      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn v-if="$can('manage', 'Program Changes Checker')" @click="$router.push(`/program/view/${item.id}`)">
          <VIcon
            icon="tabler-eye"
            color="info"
          />
        </IconBtn>

        <IconBtn v-if="$can('manage', 'Program Changes Checker')" @click="$router.push(`/program/view/edit-program/${item.id}`)">
          <VIcon
            icon="tabler-pencil"
            color="warning"
          />
        </IconBtn>

        <IconBtn  v-if="$can('manage', 'Program Changes Checker')">
          <VIcon
            :icon="resolveActionBtns(item.account_status)?.icon"
            :color="resolveActionBtns(item.account_status)?.color"
            :title="item.account_status"
            @click="approve([item.id])"
          />
        </IconBtn>
      </template>
    </VDataTable>
  </VCard>
</template>
