<script lang="ts" setup>
import { saveAs } from 'file-saver'
import { toast } from 'vue3-toastify'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { AccommodationDetails, ReimbursementDetails } from '@/views/expense-management'
import { headers, reimbursementheaders } from '@/views/expense-management'

import NewExpense from '@/views/expense-management/NewExpense.vue'
import NewReimbursement from '@/views/expense-management/NewReimbursement.vue'
import { paginationMeta } from '@api-utils/paginationMeta'
import 'vue3-toastify/dist/index.css'
import XLSX from 'xlsx'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Expenses',
  },
})

const user = {
  action: 'manage' as const,
  subject: 'View Expenses' as const,
}

const searchQuery = ref('')
const marker = ref(true)
const iconIndex = ref(0)
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const searchDate = ref()
const selectedUser = ref()
const expenseStatus = ref()
const selectedItems = ref<number[]>([])
const bulkactions = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

interface Users {
  id: string
  fullName: string
  avatar: string
}

interface ApiResponse {
  expenses?: Users[]
}

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  searchQuery.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}

const status = ref([
  { title: 'Pending', value: 'pending' },
  { title: 'Approved', value: 'approved' },
  { title: 'Closed', value: 'closed' },

])

const bulk_actions = ref([
  { title: 'Approve', value: 'approved' },
  { title: 'Reject', value: 'rejected' },
])

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'success', icon: 'tabler-thumb-up' }
  else
    return { color: 'error', icon: 'tabler-thumb-down' }
}

// 👉 Fetching expenses
const { data: expensesData, execute: fetchExpense } = await useApi<any>(createUrl('/expense/management', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    requestedBy: selectedUser,
    plan: selectedPlan,
    role: selectedRole,
    date: searchDate,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

// 👉 Fetching Reimbursements
const { data: reimbursementsData, execute: fetchReimbursement } = await useApi<any>(createUrl('/expense/reimbursements', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    requestedBy: selectedUser,
    plan: selectedPlan,
    date: searchDate,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const expenses = computed(() => expensesData.value.data)
const totalUsers = computed(() => expensesData.value.total)
const reimbursements = computed(() => reimbursementsData.value.data)
const totalReimbursements = computed(() => reimbursementsData.value.total)

const resolveUserStatusVariant = (stat: string) => {
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === 'pending')
    return { text: 'Pending', color: 'warning' }

  if (statLowerCase === 'pending_checker_approval')
    return { text: 'Pending Checker', color: 'warning' }

  if (statLowerCase === 'approved')
    return { text: 'Approved', color: 'success' }

  if (statLowerCase === 'rejected')
    return { text: 'Rejected', color: 'error' }

  if (statLowerCase === 'inactive')
    return { text: 'Inactive', color: 'secondary' }

  return { text: stat, color: 'primary' }
}

const isVisibleButton = computed(() => {
  return selectedItems.value.length < 1
})

const isCloseVisibleButton = computed(() => {
  return selectedItems.value.length < 1
})

const isAddNewExpenseDataVisible = ref(false)
const isAddNewReimbursementDataVisible = ref(false)

const addReimbursement = async (reimbursementData: ReimbursementDetails) => {
  const formData = new FormData()

  formData.append('leadName', reimbursementData.leadName)
  if (reimbursementData.file)
    formData.append('file', reimbursementData.file)
  formData.append('requestDate', reimbursementData.requestDate)
  formData.append('notes', reimbursementData.notes)
  formData.append('amount', reimbursementData.amount.toString())

  try {
    await $api('/new/UI/reimbursement', {
      method: 'POST',
      body: formData,
    })
    await fetchReimbursement()
    toast.success('Reimbursement added successfully!')
  }
  catch (error) {
    toast.error('Error adding reimbursement.')
    console.error('Error adding expense:', error)
  }
}

// 👉 Add new expense
const addExpense = async (expenseData: AccommodationDetails) => {
  const formData = new FormData()

  formData.append('leadName', expenseData.leadName)
  if (expenseData.file)
    formData.append('file', expenseData.file)
  formData.append('activity', expenseData.activity)
  formData.append('requestDate', expenseData.requestDate)
  formData.append('notes', expenseData.notes)
  formData.append('amount', expenseData.amount.toString())

  try {
    await $api('/new/UI/expenses', {
      method: 'POST',
      body: formData,
    })
    await fetchExpense()
    toast.success('Expense added successfully!')
  }
  catch (error) {
    toast.error('Error adding expense.')
    console.error('Error adding expense:', error)
  }
}

const approve = async (id: number) => {
  try {
    await $api('/approve/UI/expense', {
      method: 'POST',
      body: { id },
    })
    await fetchExpense()
    toast.success('Expense approved successfully!')
  }
  catch (error) {
    toast.error('Error approving expense.')
  }
}

const reject = async (id: number) => {
  try {
    await $api('/reject/UI/expense', {
      method: 'POST',
      body: { id },
    })
    await fetchExpense()
    toast.success('Expense rejected successfully!')
  }
  catch (error) {
    toast.error('Error rejecting expense.')
  }
}

const approveReimbursement = async (id: number) => {
  try {
    await $api('/approve/UI/reimbursement', {
      method: 'POST',
      body: { id },
    })
    await fetchReimbursement()
    toast.success('Reimbursement approved successfully!')
  }
  catch (error) {
    toast.error('Error approving reimbursement.')
  }
}

const rejectReimbursement = async (id: number) => {
  try {
    await $api('/approve/UI/reimbursement/reject', {
      method: 'POST',
      body: { id },
    })
    await fetchReimbursement()
    toast.success('Reimbursement rejected successfully!')
  }
  catch (error) {
    toast.error('Error rejecting reimbursement.')
  }
}

const closeExpense = async (id: number) => {
  try {
    await $api('/close/UI/expense', {
      method: 'POST',
      body: { id },
    })
    await fetchExpense()
    toast.success('Expense closed successfully!')
  }
  catch (error) {
    toast.error('Error closing expense.')
  }
}

const closeItem = async (id: number) => {
  try {
    await $api('/close/UI/reimbursement', {
      method: 'POST',
      body: { id },
    })
    await fetchReimbursement()
    toast.success('Reimbursement closed successfully!')
  }
  catch (error) {
    toast.error('Error closing reimbursement.')
  }
}

const updateStatus = async (id: any) => {
  try {
    await $api('/update/UI/expenses/status', {
      method: 'POST',
      body: {
        ids: id,
        status: bulkactions.value,
      },
    })
    await fetchExpense()
    toast.success('Status updated successfully!')
  }
  catch (error) {
    toast.error('Error updating status.')
  }
}

watch(bulkactions, val => {
  if (val && selectedItems.value.length)
    updateStatus(selectedItems.value)
})

const currentTab = ref('item-1')

const { data: usersData, execute: fetchUsers } = await useApi<ApiResponse | null>(createUrl('/users/UI/list?itemsPerPage=100'))

const userNames = computed(() => {
  // console.log(usersData.value?.users)
  if (!usersData.value || !usersData.value.users)
    return []

  return usersData.value.users
})

fetchExpense()
fetchReimbursement()

const exportExpensesToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(expenses.value)
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Expenses')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Expenses.xlsx')
}

const exportReimbursementsToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(reimbursements.value)
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Reimbursements')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Reimbursements.xlsx')
}
</script>

<template>
  <section>
    <h4 class="text-h4 text-high-emphasis mb-1">
      Expense Management
    </h4>
    <VCard>
      <VTabs v-model="currentTab">
        <VTab>
          <h5 class="text-h5">
            Expenses
          </h5>
        </VTab>
        <VTab>
          <h5 class="text-h5">
            Reimbursements
          </h5>
        </VTab>
      </VTabs>

      <VDivider />

      <!-- SECTION datatable -->
      <VWindow v-model="currentTab">
        <VWindowItem>
          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div class="d-flex flex-wrap gap-4 mx-5">
              <div class="d-flex align-center">
                <!-- 👉 Search  -->
                <AppTextField
                  v-model="searchQuery"
                  :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
                  class="me-3"
                  clear-icon="tabler-circle-x"
                  clearable
                  color="primary"
                  placeholder="Search"
                  style="inline-size: 200px;"
                  type="text"
                  @click:append-inner="toggleMarker"
                  @click:append="sendMessage"
                />
                <AppAutocomplete
                  v-model="selectedUser"
                  :item-title="(item:User) => item.fullName"
                  :item-value="(item:User) => item.id"
                  :items="userNames"
                  style="inline-size: 200px;"
                  class="me-3"
                  clear-icon="tabler-circle-x"
                  clearable
                  placeholder="Requested By"
                />
                <AppSelect
                  v-model="selectedStatus"
                  :items="status"
                  class="me-3"
                  clear-icon="tabler-circle-x"
                  clearable
                  placeholder="Status"
                  style="inline-size: 200px;"
                />
                <AppDateTimePicker
                  v-model="searchDate"
                  :append-inner-icon="marker ? 'tabler-calendar' : 'tabler-map-pin-off'"
                  class="me-3"
                  clear-icon="tabler-x"
                  clearable
                  placeholder="Select Date"
                  style="inline-size: 200px;"
                />
              </div>

              <VSpacer />
              <div class="d-flex gap-4 flex-wrap align-center">
                <AppSelect
                  v-if="$can('manage', 'Expenses Checker')"
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
                <AppSelect
                  v-model="itemsPerPage"
                  :items="[5, 10, 20, 25, 50]"
                />
                <!-- 👉 Export button -->
                <VBtn
                  color="primary"
                  prepend-icon="tabler-download"
                  style=" text-size-adjust: auto;text-transform: none;"
                  @click="exportExpensesToExcel"
                />
              </div>
              <!-- 👉 Add user button -->
              <VBtn
                v-if="$can(user.action, 'Expenses Maker')"
                prepend-icon="tabler-plus"
                @click="isAddNewExpenseDataVisible = true"
              >
                Request Expense
              </VBtn>
            </div>
          </VCardText>
          <VDataTableServer
            v-model="selectedItems"
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :headers="headers"
            :items="expenses"
            :items-length="totalUsers"
            class="text-no-wrap"
            show-select
            expand-on-click
            @update:options="updateOptions"
          >
            <!-- Expanded Row Data -->
            <template #expanded-row="slotProps">
              <tr class="v-data-table__tr">
                <td :colspan="headers.length">
                  <div class="my-2">
                    <p><strong>Requested By:</strong> {{ slotProps.item.user }}</p>
                    <p><strong>Lead Name:</strong> {{ slotProps.item.lead_name }}</p>
                    <p><strong>Activity:</strong> {{ slotProps.item.activity }}</p>
                    <p><strong>Amount:</strong> {{ slotProps.item.amount }}</p>
                    <p><strong>Request Date:</strong> {{ slotProps.item.date }}</p>
                    <p><strong>Approval Date:</strong> {{ slotProps.item.approved_date }}</p>
                    <p><strong>Notes:</strong> {{ slotProps.item.notes }}</p>
                    <p v-if="slotProps.item.attachment">
                      <strong>Attachment:</strong> <a
                        :href="slotProps.item.attachment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >View Attachment</a>
                    </p>
                  </div>
                </td>
                <td />
                <td />
                <td />
              </tr>
            </template>
            <!-- Status -->
            <template #item.amount="{ item }">
              <span :style="{ color: `${$vuetify.theme.global.current.colors.success}` }">{{ item.amount }}
              </span>
            </template>
            <template #item.status="{ item }">
              <VChip
                class="text-capitalize"
                size="small"
                v-bind="resolveUserStatusVariant(item.status)"
              />
            </template>

            <template #item.actions="{ item }">
              <IconBtn v-if="$can(user.action, 'Expenses Checker')">
                <VIcon icon="tabler-dots-vertical" />
                <VMenu activator="parent">
                  <VList>
                    <VListItem
                      v-if="item.attachment"
                      prepend-icon="tabler-eye"
                    >
                      <a
                        :href="item.attachment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Attachment
                      </a>
                    </VListItem>

                    <VListItem
                      v-if="(item.status === 'pending_checker_approval' || item.status === 'pending') && $can(user.action, user.subject)"
                      value="approve"
                      prepend-icon="tabler-thumb-up"
                      @click="approve(item.id)"
                    >
                      Approve
                    </VListItem>
                    <VListItem
                      v-if="(item.status === 'pending_checker_approval' || item.status === 'pending') && $can(user.action, user.subject)"
                      value="approve"
                      prepend-icon="tabler-thumb-down"
                      @click="reject(item.id)"
                    >
                      Reject
                    </VListItem>

                    <VListItem
                      v-if="item.status === 'approved' && $can(user.action, user.subject)"
                      value="close"
                      prepend-icon="tabler-check"
                      @click="closeExpense(item.id)"
                    >
                      Close
                    </VListItem>
                  </VList>
                </VMenu>
              </IconBtn>
              <p v-else>
                Insufficient Permissions
              </p>
            </template>
            <!-- pagination -->
            <template #bottom>
              <VDivider />
              <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                <p class="text-sm text-disabled mb-0">
                  {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
                </p>

                <VPagination
                  v-model="page"
                  :length="Math.ceil(totalUsers / itemsPerPage)"
                  :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalUsers / itemsPerPage)"
                >
                  <template #prev="slotProps">
                    <VBtn
                      color="default"
                      v-bind="slotProps"
                      variant="tonal"
                    >
                      Previous
                    </VBtn>
                  </template>

                  <template #next="slotProps">
                    <VBtn
                      color="default"
                      v-bind="slotProps"
                      variant="tonal"
                    >
                      Next
                    </VBtn>
                  </template>
                </VPagination>
              </div>
            </template>
          </VDataTableServer>
        </VWindowItem>
        <VWindowItem>
          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div class="d-flex flex-wrap gap-4 mx-5">
              <div class="d-flex align-center">
                <!-- 👉 Search  -->
                <AppTextField
                  v-model="searchQuery"
                  :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
                  class="me-3"
                  clear-icon="tabler-circle-x"
                  clearable
                  color="primary"
                  placeholder="Search"
                  style="inline-size: 200px;"
                  type="text"
                  @click:append-inner="toggleMarker"
                  @click:append="sendMessage"
                />
                <AppAutocomplete
                  v-model="selectedUser"
                  :item-title="(item:User) => item.fullName"
                  :item-value="(item:User) => item.id"
                  :items="userNames"
                  style="inline-size: 200px;"
                  class="me-3"
                  placeholder="Requested By"
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
                <AppDateTimePicker
                  v-model="searchDate"
                  :append-inner-icon="marker ? 'tabler-calendar' : 'tabler-map-pin-off'"
                  class="me-3"
                  clear-icon="tabler-x"
                  clearable
                  placeholder="Select Date"
                  style="inline-size: 200px;"
                />
              </div>

              <VSpacer />
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
                  @click="exportReimbursementsToExcel"
                />
              </div>

              <VBtn
                v-if="$can(user.action, 'Reimbursements Maker')"
                prepend-icon="tabler-plus"
                @click="isAddNewReimbursementDataVisible = true"
              >
                Request Reimbursement
              </VBtn>
            </div>
          </VCardText>
          <VDataTableServer
            v-model="selectedItems"
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :headers="reimbursementheaders"
            :items="reimbursements"
            :items-length="totalReimbursements"
            class="text-no-wrap"
            show-select
            @update:options="updateOptions"
          >
            <!-- Status -->
            <template #item.amount="{ item }">
              <span :style="{ color: `${$vuetify.theme.global.current.colors.success}` }">{{ item.amount }}
              </span>
            </template>
            <template #item.status="{ item }">
              <VChip
                class="text-capitalize"
                size="small"
                v-bind="resolveUserStatusVariant(item.status)"
              />
            </template>
            <template #item.actions="{ item }">
              <IconBtn v-if="$can(user.action, 'Reimbursements Checker')">
                <VIcon icon="tabler-dots-vertical" />
                <VMenu activator="parent">
                  <VList>
                    <VListItem
                      v-if="item.attachment"
                      prepend-icon="tabler-eye"
                    >
                      <a
                        :href="item.attachment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >View Attachment</a>
                    </VListItem>
                    <VListItem
                      v-if="(item.status === 'pending_checker_approval' || item.status === 'pending')"
                      value="approve"
                      prepend-icon="tabler-thumb-up"
                      @click="approveReimbursement(item.id)"
                    >
                      Approve
                    </VListItem>
                    <VListItem
                      v-if="(item.status === 'pending_checker_approval' || item.status === 'pending')"
                      value="reject"
                      prepend-icon="tabler-thumb-down"
                      @click="rejectReimbursement(item.id)"
                    >
                      Reject
                    </VListItem>
                    <VListItem
                      v-if="item.status === 'approved'"
                      value="approve"
                      prepend-icon="tabler-check"
                      @click="closeItem(item.id)"
                    >
                      Close
                    </VListItem>
                  </VList>
                </VMenu>
              </IconBtn>
              <p v-else>
                Insufficient Permissions
              </p>
            </template>
            <!-- pagination -->
            <template #bottom>
              <VDivider />
              <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                <p class="text-sm text-disabled mb-0">
                  {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
                </p>

                <VPagination
                  v-model="page"
                  :length="Math.ceil(totalUsers / itemsPerPage)"
                  :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalUsers / itemsPerPage)"
                >
                  <template #prev="slotProps">
                    <VBtn
                      color="default"
                      v-bind="slotProps"
                      variant="tonal"
                    >
                      Previous
                    </VBtn>
                  </template>

                  <template #next="slotProps">
                    <VBtn
                      color="default"
                      v-bind="slotProps"
                      variant="tonal"
                    >
                      Next
                    </VBtn>
                  </template>
                </VPagination>
              </div>
            </template>
          </VDataTableServer>
        </VWindowItem>
      </VWindow>

      <!-- SECTION -->
    </VCard>
    <!-- 👉 Add New User -->
    <NewExpense
      v-model:isDrawerOpen="isAddNewExpenseDataVisible"
      @user-data="addExpense"
    />
    <NewReimbursement
      v-model:isDrawerOpen="isAddNewReimbursementDataVisible"
      @user-data="addReimbursement"
    />
  </section>
</template>
