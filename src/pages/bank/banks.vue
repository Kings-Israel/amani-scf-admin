<script lang="ts" setup>
import type { BankDetails } from '@/views/bank'
import { headers } from '@/views/bank'
import NewBank from '@/views/bank/NewBank.vue'
import { paginationMeta } from '@api-utils/paginationMeta'
import { saveAs } from 'file-saver'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import XLSX from 'xlsx'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Banks',
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
const marker = ref(true)
const iconIndex = ref(0)
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const bulkactions = ref()
const reason = ref('')
const user = ref()
const date = ref()
const selectedItems = ref<number[]>([])
const NewContact = defineAsyncComponent(() => import('@/views/bank/NewContact.vue'))
const AssociatedContact = defineAsyncComponent(() => import('@/views/bank/AssociatedContact.vue'))
const isContactAssociated = ref(false)

const isDialogVisible = ref(false)
const isRejectDialogVisible = ref(false)

const selectedBankA = ref(null)

const openRejectDialog = item => {
  selectedBankA.value = item
  isRejectDialogVisible.value = true
}

const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const selectedBank = ref([])

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

const { data: banksData, execute: fetchExpense } = await useApi<any>(createUrl('/UI/get/banks', {
  query: {
    q: searchQuery,
    user_id: user,
    status: selectedStatus,
    date,
    plan: selectedPlan,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const banks = computed(() => banksData.value.data)
const totalUsers = computed(() => banksData.value.total)
const isAddNewBankVisible = ref(false)

const isDisableDialogVisible = ref(false)
const selectedBankId = ref(null)

const openDisableBankDialog = bankId => {
  selectedBankId.value = bankId
  isDisableDialogVisible.value = true
}

const confirmDisableBank = async () => {
  console.log(`Bank with ID ${selectedBankId.value} is being disabled`)

  try {
    await $api('/UI/bank/disable', {
      method: 'POST',
      body: JSON.stringify({ bankId: selectedBankId.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    isDisableDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank disabled successfully!')
  }
  catch (error) {
    toast.error('Failed to disable the bank. Please try again.')
  }
  finally {
    isDisableDialogVisible.value = false
  }
}

const isEnableDialogVisible = ref(false)

const openEnableBankDialog = bankId => {
  selectedBankId.value = bankId
  isEnableDialogVisible.value = true
}

const confirmEnableBank = async () => {
  console.log(`Bank with ID ${selectedBankId.value} is being Enabled`)

  try {
    await $api('/UI/bank/enable', {
      method: 'POST',
      body: JSON.stringify({ bankId: selectedBankId.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    isEnableDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank Enabled successfully!')
  }
  catch (error) {
    toast.error('Failed to Enable the bank. Please try again.')
  }
  finally {
    isEnableDialogVisible.value = false
  }
}

const addExpense = async (Data: BankDetails) => {
  await $api('/UI/new/bank', {
    method: 'POST',
    body: Data,
  })
  await fetchExpense()
}

fetchExpense()

const isAddNewContact = ref(false)
const isAssociatedContact = ref(false)
const isNewContactAdded = ref(false)
const associationPipeline = ref<number>(0)

const submitContact = async (data: any) => {
  try {
    console.log(data)
  }
  catch (err) {
    console.error(err)
  }
}

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'error', icon: 'tabler-circle-dot' }
  else
    return { color: 'primary', icon: 'tabler-circle-check' }
}

const submittedContactAssociation = async () => {
  isNewContactAdded.value = !isNewContactAdded.value
  await fetchExpense()
}

const { data: usersData, execute: fetchUsers } = await useApi<ApiResponse | null>(createUrl('/users/UI/list'))

const userNames = computed(() => {
  if (!usersData.value || !usersData.value.users)
    return []

  return usersData.value.users
})

const bulk_actions = ref([
  { title: 'Activate', value: 'active' },
  { title: 'Deactivate', value: 'inactive' },
])

const deactivationReason = ref('')
const customReason = ref('')
const rejectionReason = ref('')
const customRejectionReason = ref('')

const rejectionReasons = ref([
  'Insufficient Documentation',
  'Invalid Information',
  'Compliance Issues',
  'Other',
])

const rejectBank = async (id, rejectionReason) => {
  try {
    await $api('/UI/banks/deactivate', {
      method: 'POST',
      body: { id, rejectionReason },
    })
    isRejectDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank rejected successfully!')
  }
  catch (error) {
    toast.error('Failed to reject the bank. Please try again.')
  }
}

const approveBank = async (id, reason) => {
  try {
    await $api('/UI/bank/approve', {
      method: 'POST',
      body: { id, reason },
    })
    isDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank approved successfully!')
  }
  catch (error) {
    toast.error('Failed to approve the bank. Please try again.')
  }
}

const DisableRequestBank = async (id, reason) => {
  try {
    await $api('/UI/bank/disable/request', {
      method: 'POST',
      body: { id, reason },
    })
    isDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank Request submitted successfully!')
  }
  catch (error) {
    toast.error('Failed to disable the bank. Please try again.')
  }
}

const DisableBank = async (id, reason) => {
  try {
    await $api('/UI/bank/disable', {
      method: 'POST',
      body: { id, reason },
    })
    isDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank Disabled successfully!')
  }
  catch (error) {
    toast.error('Failed to disable the bank. Please try again.')
  }
}

const EnableRequestBank = async (id, reason) => {
  try {
    await $api('/UI/bank/enable/request', {
      method: 'POST',
      body: { id, reason },
    })
    isDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank Request submitted successfully!')
  }
  catch (error) {
    toast.error('Failed to enable the bank. Please try again.')
  }
}

const EnableBank = async (id, reason) => {
  try {
    await $api('/UI/bank/enable', {
      method: 'POST',
      body: { id, reason },
    })
    isDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank Enabled successfully!')
  }
  catch (error) {
    toast.error('Failed to enable the bank. Please try again.')
  }
}

const approve = async (id: any) => {
  if (!reason.value) {
    toast.error('Please provide a reason for deactivating the bank.')

    return
  }

  try {
    await $api('/UI/banks/activate', {
      method: 'POST',
      body: { ids: id, status: bulkactions.value, reason: reason.value },
    })
    reason.value = ''
    isDialogVisible.value = false
    await fetchExpense()

    toast.success('Bank activated successfully!')
  }
  catch (error) {
    toast.error('Failed to activate the bank.')
  }
}

watch(bulkactions, val => {
  if (val && selectedBank.value.length)
    approve(selectedBank.value)
})

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }
  if (statusMsg === 'inactive')
    return { text: 'Inactive', color: 'error' }
  if (statusMsg === 'pending_checker')
    return { text: 'Pending Checker', color: 'info' }
  if (statusMsg === 'suspended')
    return { text: 'Suspended', color: 'error' }
}

const resolveStats = (statusMsg: string) => {
  if (statusMsg === 'approved')
    return { text: 'Approved', color: 'success' }
  if (statusMsg === 'pending')
    return { text: 'Pending', color: 'info' }
  if (statusMsg === 'rejected')
    return { text: 'Rejected', color: 'error' }
  if (statusMsg === 'suspended')
    return { text: 'Pending Checker', color: 'info' }
}

const confirmRejection = async () => {
  if (!selectedBankA.value || !rejectionReason.value)
    return

  const reasonToSend = rejectionReason.value === 'Other' ? customRejectionReason.value : rejectionReason.value

  await rejectBank(selectedBankA.value.id, reasonToSend)
}

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(banks.value)
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Banks')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Banks.xlsx')
}
</script>

<template>
  <section>
    <h4 class="text-h4 text-high-emphasis mb-1">
      Bank Management
    </h4>
    <VCard>
      <VCardText class="py-4 gap-4">
        <div class="d-flex flex-wrap gap-4 mx-5">
          <VRow>
            <VCol
              cols="12"
              md="9"
            >
              <div class="d-flex align-center">
                <!-- 👉 Search  -->
                <AppTextField
                  v-model="searchQuery"
                  :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
                  class="me-3"
                  clear-icon="tabler-circle-x"
                  clearable
                  color="primary"
                  placeholder="Search Bank"
                  type="text"
                  @click:append-inner="toggleMarker"
                  @click:append="sendMessage"
                />
                <AppAutocomplete
                  v-model="user"
                  :item-title="(item:User) => item.fullName"
                  :item-value="(item:User) => item.id"
                  :items="userNames"
                  class="me-3"
                  placeholder="Contact Person"
                  style="inline-size: 200px;"
                />
                <AppDateTimePicker
                  v-model="date"
                  class="me-3"
                  clear-icon="tabler-circle-x"
                  clearable
                  placeholder="Select Date"
                  style="inline-size: 200px;"
                />

                <AppSelect
                  v-if="($can('manage', 'Banks Checker') && $can('manage', 'Banks Bulk Approve'))"
                  v-model="bulkactions"
                  :items="bulk_actions"
                  item-title="title"
                  item-value="value"
                  class="me-1"
                  clear-icon="tabler-circle-x"
                  clearable
                  chips
                  placeholder="Bulk Actions"
                  style="inline-size: 200px;"
                />
              </div>
            </VCol>
            <VCol
              cols="12"
              md="3"
            >
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
                <VBtn
                  v-if="$can('manage', 'Banks Maker')"
                  prepend-icon="tabler-plus"
                  @click="$router.push('/bank/new')"
                >
                  Add New Bank
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </div>
      </VCardText>

      <VDivider />

      <VDataTableServer
        v-model="selectedBank"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        :items="banks"
        :items-length="totalUsers"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >
        <template #item.name="{ item }">
          <div class="d-flex align-center">
            <span>{{ item.name }}</span>

            <IconBtn
              v-if="item.current_reason !== null"
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
                    @click="openInfoDialog(item)"
                  />
                </template>
                <span>{{ item.current_reason }}</span>
              </VTooltip>
            </IconBtn>
          </div>
        </template>

        <template #item.amount="{ item }">
          <span :style="{ color: `${$vuetify.theme.global.current.colors.success}` }">{{ item.amount }}
          </span>
        </template>

        <template #item.url="{ item }">
          <span :style="{ color: `${$vuetify.theme.global.current.colors.success}` }">
            {{ item.url }}
          </span>
        </template>

        <template #item.actions="{ item }">
          <div
            v-if="$can('manage', 'Banks Checker')"
            class="d-flex align-center"
          >
            <IconBtn
              class="mx-1"
              small
              color="warning"
              title="Edit Bank"
            >
              <VIcon
                icon="tabler-edit"
                size="20"
                @click="$router.push(`/bank/view/${item.id}`)"
              />
            </IconBtn>

            <IconBtn
              v-if="item.approval_status === 'rejected'"
              class="mx-1"
              small
              color="error"
              title="Bank Rejected"
            >
              <VIcon
                icon="tabler-circle-half-vertical"
                size="20"
              />
            </IconBtn>

            <IconBtn
              v-if="item.status === 'inactive' && item.approval_status === 'rejected'"
              class="mx-1"
              small
              color="error"
              title="Enable Bank"
            >
              <VIcon
                icon="tabler-thumb-down"
                size="20"
                @click="EnableRequestBank(item.id)"
              />
            </IconBtn>

            <IconBtn
              v-if="item.status === 'active' && item.approval_status === 'approved'"
              class="mx-1"
              small
              color="success"
              title="Disable Bank"
            >
              <VIcon
                icon="tabler-thumb-up"
                size="20"
                @click="DisableRequestBank(item.id)"
              />
            </IconBtn>

            <IconBtn
              v-if="item.status === 'active' && item.approval_status === 'suspended' && item.maker_checker_status === true && item.current_reason === 'Bank Disable - Waiting Approval'"
              class="mx-1"
              small
              color="primary"
              title="Bank has pending changes - Disable Bank"
              @click="openDisableBankDialog(item.id)"
            >
              <VIcon
                icon="tabler-clock"
                size="20"
              />
            </IconBtn>

            <IconBtn
              v-if="item.status === 'inactive' && item.approval_status === 'suspended' && item.maker_checker_status === true && item.current_reason === 'Bank Enable - Waiting Approval'"
              class="mx-1"
              small
              color="primary"
              title="Bank has pending changes-Enable Bank"
              @click="openEnableBankDialog(item.id)"
            >
              <VIcon
                icon="tabler-clock"
                size="20"
              />
            </IconBtn>

            <IconBtn
              v-if="item.approval_status === 'pending' && item.maker_checker_status === true"
              class="mx-1"
              small
              color="success"
              title="Approve Bank"
            >
              <VIcon
                icon="tabler-square-check"
                size="20"
                @click="approveBank(item.id)"
              />
            </IconBtn>

            <IconBtn
              v-if="item.approval_status === 'pending' && item.maker_checker_status === true"
              class="mx-1"
              small
              color="error"
              title="Reject Bank"
            >
              <VIcon
                icon="tabler-square-x"
                size="20"
                @click="openRejectDialog(item)"
              />
            </IconBtn>
          </div>
        </template>

        <template #item.status="{ item }">
          <VChip
            density="default"
            label
            v-bind="resolveStatus(item.status)"
          />
        </template>

        <template #item.approval_status="{ item }">
          <VChip
            density="default"
            label
            v-bind="resolveStats(item.approval_status)"
          />
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
            />
          </div>
        </template>
      </VDataTableServer>
    </VCard>
    <NewBank
      v-model:isDrawerOpen="isAddNewBankVisible"
      @user-data="addExpense"
    />
    <VSnackbar
      v-model="isNewContactAdded"
      color="success"
      location="top end"
      variant="flat"
    >
      New Contact Added Successfully
    </VSnackbar>
    <VSnackbar
      v-model="isContactAssociated"
      color="success"
      location="top end"
      variant="flat"
    >
      New Contact associated successfully
    </VSnackbar>
    <VCard class="text-high-emphasis text-center">
      <NewContact
        v-model:isDialogVisible="isAddNewContact"
        v-model:isNewContactAdded="isNewContactAdded"
        v-model:pipeline="associationPipeline"
        @submit="submitContact"
      />
    </VCard>
    <VCard class="text-high-emphasis text-center">
      <AssociatedContact
        v-model:isContactAssociated="isContactAssociated"
        v-model:isDialogVisible="isAssociatedContact"
        v-model:pipeline="associationPipeline"
        @update:is-dialog-visible="submittedContactAssociation"
      />
    </VCard>
  </section>

  <VDialog
    v-model="isRejectDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isRejectDialogVisible = false" />
    <VCard>
      <VCardText>
        <h3>Reject Bank</h3>
        <p v-if="selectedBankA.value">
          Are you sure you want to reject bank: <strong>{{ selectedBankA.value.name }}</strong>?
        </p>

        <VSelect
          v-model="rejectionReason"
          :items="rejectionReasons"
          label="Select Reason for Rejection"
          placeholder="Select reason for rejection"
          clearable
          @change="handleRejectionReasonChange"
        />
        <VTextField
          v-if="rejectionReason === 'Other'"
          v-model="customRejectionReason"
          label="Specify reason"
          placeholder="Enter custom reason"
          clearable
          class="mt-3"
        />
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
          :disabled="!rejectionReason || (rejectionReason === 'Other' && !customRejectionReason)"
          @click="confirmRejection"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Disable Bank Confirmation Dialog -->
  <VDialog
    v-model="isDisableDialogVisible"
    persistent
    max-width="400"
  >
    <VCard>
      <VCardTitle class="text-h5">
        Confirm Disable Bank
      </VCardTitle>

      <VCardText>
        Are you sure you want to disable this bank? This action may be irreversible.
      </VCardText>

      <VCardActions class="d-flex justify-end">
        <VBtn
          color="secondary"
          text
          @click="isDisableDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          text
          @click="confirmDisableBank"
        >
          Confirm
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Enable Bank Confirmation Dialog -->
  <VDialog
    v-model="isEnableDialogVisible"
    persistent
    max-width="400"
  >
    <VCard>
      <VCardTitle class="text-h5">
        Confirm Enaable Bank
      </VCardTitle>

      <VCardText>
        Are you sure you want to enaable this bank?
      </VCardText>

      <VCardActions class="d-flex justify-end">
        <VBtn
          color="secondary"
          text
          @click="isEnableDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          text
          @click="confirmEnableBank"
        >
          Confirm
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
