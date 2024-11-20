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

const searchAnchor = ref('')

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

const filterselectedStatus = ref<string | undefined>(null);
const filterselectedBank = ref<string | undefined>(null);
const filtersearchQuery = ref<string | undefined>('');
const filterselectedProgramType = ref<string | undefined>(null);
const filtersearchAnchor = ref<string | undefined>('');
const filterfromdate = ref<string | undefined>('');

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
  { title: 'Pending', value: 'pending' },
  { title: 'Active', value: 'active' },
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
    title: 'PROGRAM NAME',
    key: 'name',
  },
  {
    title: 'ANCHOR NAME',
    key: 'anchor.anchor_name',
  },
  {
    title: 'PRODUCT TYPE',
    key: 'program_type',
  },
  {
    title: 'PRODUCT CODE',
    key: 'code',
  },
  {
    title: 'Bank',
    key: 'bank',
  },
  {
    title: 'Status',
    key: 'account_status',
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
    title: 'Utilized Limit',
    key: 'utilization_amount',
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

const queryParams = computed(() => ({
  q: searchQuery.value,
  asearch: searchAnchor.value,
  plan: selectedPlan.value,
  role: selectedRole.value,
  program_type: selectedProgramType.value,
  bank_id: selectedBank.value,
  status: selectedStatus.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}));

const { data: programData, execute: fetchPrograms } = await useApi<any>(createUrl('/get/UI/all/programs/exhausted', {
  query: queryParams,

}))

const { data: changesData, execute: fetchChanges } = await useApi<any>(createUrl('/programs/changes'))

const programs: Ref<Program[]> = computed(() => programData.value.data)
const totalPrograms = computed(() => programData.value.total)

fetchPrograms()
fetchChanges()

const chno = changesData.value.programchange

const isActionLoading = ref(false)

const approve = async (id: any) => {
  isActionLoading.value = true
  try {
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
  catch (error) {
    console.error('Error while activating/deactivating:', error)
  }
  finally {
    isActionLoading.value = false
  }
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

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Exhausted_Programs.xlsx')
}

const submitFilters = async () => {
  selectedBank.value = filterselectedBank.value;
  searchQuery.value = filtersearchQuery.value;
  selectedProgramType.value = filterselectedProgramType.value;
  searchAnchor.value = filtersearchAnchor.value;
  fromdate.value = filterfromdate.value;
  selectedStatus.value = filterselectedStatus.value;

  await fetchPrograms(); 
};

const clearFilters = () => {
  filterselectedBank.value = '';
  filtersearchQuery.value = '';
  filterselectedProgramType.value = '';
  filtersearchAnchor.value = '';
  filterfromdate.value = '';
  filterselectedStatus.value = '';
  page.value = 1;

  submitFilters();
};

fetchPrograms(); 
</script>

<template>
  <VCard class="mb-6">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5">
      <div class="d-flex flex-wrap align-items-center">
        <!-- 👉 Select Role -->
        <AppSelect
          v-model="filterselectedBank"
          :items="banks"
          class="me-3 mb-2"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Select Bank"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
          @change="fetchPrograms"
        />

        <AppSelect
          v-model="filterselectedProgramType"
          :items="ProgramsTypeStatus"
          class="me-3 mb-2"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Program Type"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
          @change="fetchPrograms"
        />

        <AppTextField
          v-model="filtersearchQuery"
          class="me-3 mb-2"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Program Name"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
          type="text"
        />

        <AppTextField
          v-model="filtersearchAnchor"
          class="me-3 mb-2"
          clear-icon="tabler-circle-x"
          clearable
          color="primary"
          placeholder="Anchor"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
          type="text"
        />

        <AppDateTimePicker
          v-model="filterfromdate"
          class="me-3 mb-2"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Approval Date"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
        />

        <AppSelect
          v-model="filterselectedStatus"
          :items="status"
          class="me-3 mb-2"
          clear-icon="tabler-circle-x"
          clearable
          placeholder="Status"
          style="min-width: 150px; max-width: 200px; flex: 1 1 auto;"
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
    <VDataTable
      v-model="selectedProduct"
      :headers="headers"
      :items="programs"
      :items-per-page="itemsPerPage"
      class="text-wrap"
      size="x-small"
    >
      <template #item.name="{ item }">
        <div class="d-flex align-center">
          <h6 class="text-h8 mb-0 mr-2">
            <a
              href="javascript:void(0)"
              @click="$router.push(`/program/view/${item.id}`)"
            >
              {{ item.name }}
            </a>
          </h6>

          <VIcon
            v-if="item.program_alert"
            icon="tabler-circle-letter-r"
            title="Program Limit Depletion alert"
            color="error"
            class="ml-1"
          />

          <IconBtn
            v-if="item.program_changes !== null"
            class="mx-1"
            small
            color="error"
          >
            <VTooltip bottom>
              <template #activator="{ props }">
                <VIcon
                  v-bind="props"
                  icon="tabler-info-circle"
                  size="20"
                  aria-label="Program changes awaiting approval"
                  @click="openaInfoDialog(item)"
                />
              </template>
              <span> Program pending changes awaiting approval</span>
            </VTooltip>
          </IconBtn>
        </div>
      </template>

      <template #item.program_limit="{ item }">
        <span class="text-success"> {{ item.program_limit.toLocaleString() }}</span>
      </template>
      <template #item.max_limit_per_account="{ item }">
        <span class="text-success">{{ item.max_limit_per_account.toLocaleString() }}</span>
      </template>
      <template #item.utilization_amount="{ item }">
        <span class="text-success">{{ item.utilization_amount.toLocaleString() }}</span>
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
            @click="$router.push(`/program/view/${item.id}`)"
          >
            <VIcon
              icon="tabler-eye"
              color="info"
            />
          </IconBtn>

          <!-- <IconBtn
            v-if="$can('manage', 'Program Changes Checker')"
            @click="$router.push(`/program/view/edit-program/${item.id}`)"
          >
            <VIcon
              icon="tabler-pencil"
              color="warning"
            />
          </IconBtn> -->

          <IconBtn
            v-if="$can('manage', 'Program Changes Checker')"
            class="small-icon-btn"
          >
            <VIcon
              :icon="resolveActionBtns(item.account_status)?.icon"
              :color="resolveActionBtns(item.account_status)?.color"
              :title="item.account_status"
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
          @click="isProgramDialogVisible = false"
        >
          Cancel
        </VBtn>

        <VBtn
          v-if="selectedProgram.account_status !== 'active'"
          color="success"
          :loading="isActionLoading"
          :disabled="isActionLoading"
          @click="approve([selectedProgram.id])"
        >
          <template v-if="!isActionLoading">
            Activate
          </template>
          <template v-else>
            <VProgressCircular
              indeterminate
              size="20"
              color="white"
            />
          </template>
        </VBtn>
        <VBtn
          v-else
          color="error"
          :loading="isActionLoading"
          :disabled="isActionLoading"
          @click="approve([selectedProgram.id])"
        >
          <template v-if="!isActionLoading">
            Deactivate
          </template>
          <template v-else>
            <VProgressCircular
              indeterminate
              size="20"
              color="white"
            />
          </template>
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
