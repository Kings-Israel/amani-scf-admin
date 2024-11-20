<script lang="ts" setup>
import { saveAs } from 'file-saver'
import { VDataTable } from 'vuetify/labs/VDataTable'
import XLSX from 'xlsx'
import { paginationMeta } from '@api-utils/paginationMeta'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Programs & Mapping',
  },
})

const { data: banksData, execute: fetchBanks } = await useApi<any>(createUrl('UI/get/banks/list'))

await fetchBanks()

const banks = banksData.value.data.map(bank => ({ title: bank.name, value: bank.id }))

const selectedBank = ref(null)

const { data: configsData, execute: fetchConfigs } = await useApi<any>(createUrl('get/UI/configurations/system-configurations', {
  query: {
  },
}))

fetchConfigs()

const configurations = configsData.value
const checkerstatus = configurations.admin_maker_checker

const isDialogVisible = ref(false)

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }
  if (statusMsg === 'pending')
    return { text: 'Pending', color: 'info' }
  if (statusMsg === 'pending_checker_approval')
    return { text: 'Pending Checker', color: 'info' }
  if (statusMsg === 'suspended')
    return { text: 'Suspended', color: 'error' }
}

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
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const fromdate = ref()
const todate = ref()

const isProgramDialogVisible = ref(false)

const selectedProgram = ref(null)

const openDeactivateDialog = program => {
  selectedProgram.value = program
  isProgramDialogVisible.value = true
}

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
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
    title: 'Status',
    key: 'account_status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const selectedProgramType = ref(null)

const ProgramsTypeStatus = ref([
  { title: 'Dealer Financing', value: 'dealer financing' },
  { title: 'Vendor Financing', value: 'vendor financing' },
  { title: 'Factoring', value: 'factoring' },
])

const { data: programData, execute: fetchPrograms } = await useApi<any>(createUrl('/get/UI/all/programs', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    bank_id: selectedBank,
    program_type: selectedProgramType,
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
const totalPrograms = computed(() => programData.value.total)

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
  isProgramDialogVisible.value = false
}

watch(bulkactions, val => {
  if (val && selectedProduct.value.length)
    approve(selectedProduct.value)
})

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(programs.value)
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Programs')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'programs.xlsx')
}
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex align-center">
        <!-- 👉 Select Role -->
        <AppSelect
          v-model="selectedBank"
          :items="banks"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Select Bank"
          style="inline-size: 200px;"
          @change="fetchPrograms"
        />
        <AppSelect
          v-model="selectedProgramType"
          :items="ProgramsTypeStatus"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Program Type"
          style="inline-size: 200px;"
          @change="fetchPrograms"
        />
        <AppTextField
          v-model="searchQuery"
          class="me-3"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Program Name"
          style="inline-size: 200px;"
          type="text"
        />
        <AppDateTimePicker
          v-model="fromdate"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Select Date"
          style="inline-size: 200px;"
        />
        <AppSelect
          v-model="selectedStatus"
          :items="status"
          class="me-3"
          clear-icon="tabler-x"
          clearable
          placeholder="Status"
          style="inline-size: 200px;"
        />
        <AppSelect
          v-if="($can('manage', 'Program Changes Checker') && $can('manage', 'Program Bulk Approve'))"
          v-model="bulkactions"
          :items="bulk_actions"
          item-title="title"
          item-value="value"
          class="me-1"
          clear-icon="tabler-x"
          clearable
          chips
          placeholder="Bulk Actions"
          style="inline-size: 200px;"
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
          @click="exportToExcel"
        />
        <!--
          <VBtn
          color="primary"
          prepend-icon="tabler-plus"
          style=" text-size-adjust: auto;text-transform: none;"
          @click="$router.push(`/program/view/add-program`)"
          >
          Add Program
          </VBtn>
        -->
      </div>
    </div>
    <VCardText v-if="chno > 0">
      Current pending changes
      <VAvatar
        color="error"
        size="x-small"
      >
        <small>{{ chno }}</small>
      </VAvatar>
    </VCardText>
    <VDataTable
      v-model="selectedProduct"
      :headers="headers"
      :items="programs"
      :items-per-page="itemsPerPage"
      class="text-wrap"
      size="x-small"
      show-select
    >
      <template #item.name="{ item }">
        <h6 class="text-h8">
          <a
            href="javascript:void(0)"
            @click="$router.push(`/program/view/${item.id}`)"
          >{{ item.name }}</a>
        </h6>
        <VIcon
          v-if="utilizedLimit(item.program_limit, item.max_limit_per_account) < 10"
          icon="tabler-alert-circle"
          title="Program Limit is almost depleted"
          color="error"
        />
      </template>
      <template #item.program_limit="{ item }">
        <p>{{ item.program_limit.toLocaleString() }}</p>
      </template>
      <template #item.max_limit_per_account="{ item }">
        <p>{{ item.max_limit_per_account.toLocaleString() }}</p>
      </template>

      <template #item.account_status="{ item }">
        <VChip
          density="default"
          label
          v-bind="resolveStatus(item.account_status)"
        />
      </template>
      <!-- Actions -->
      <template #item.actions="{ item }">
        <div class="d-flex align-center">
          <IconBtn
            v-if="$can('manage', 'Program Changes Checker')"
            class="small-icon-btn"
            @click="$router.push(`/program/view/${item.id}`)"
          >
            <VIcon
              icon="tabler-eye"
              color="info"
              size="small"
            />
          </IconBtn>

          <IconBtn
            v-if="$can('manage', 'Program Changes Checker')"
            class="small-icon-btn"
            @click="$router.push(`/program/view/edit-program/${item.id}`)"
          >
            <VIcon
              icon="tabler-pencil"
              color="warning"
              size="small"
            />
          </IconBtn>

          <IconBtn
            v-if="$can('manage', 'Program Changes Checker')"
            class="small-icon-btn"
          >
            <VIcon
              :icon="resolveActionBtns(item.account_status)?.icon"
              :color="resolveActionBtns(item.account_status)?.color"
              :title="item.account_status"
              size="small"
              @click="openDeactivateDialog(item)"
            />
          </IconBtn>
        </div>
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
    </VDataTable>
  </VCard>
  <VDialog
    v-model="isProgramDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isProgramDialogVisible = !isProgramDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText v-if="selectedProgram.account_status !== 'active'">
        Are you sure you want to activate program: {{ selectedProgram.name }}? <br>
      </VCardText>

      <VCardText v-else>
        Are you sure you want to deactivate program: {{ selectedProgram.name }}? <br>
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          v-if="selectedProgram.account_status !== 'active'"
          color="success"
          @click="approve([selectedProgram.id])"
        >
          Activate
        </VBtn>
        <VBtn
          v-else
          color="error"
          @click="approve([selectedProgram.id])"
        >
          Deactivate
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style scoped>
.small-icon-btn {
  margin-right: 4px;
  padding: 4px;
}
</style>
