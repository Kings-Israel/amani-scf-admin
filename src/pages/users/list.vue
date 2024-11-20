<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta'
import { saveAs } from 'file-saver'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import * as XLSX from 'xlsx'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Users',
  },
})

const searchQuery = ref('')
const selectedRole = ref<number | null>(null)
const selectedUser = ref(null)
const selectedStatus = ref<number | null>(null)
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref('')
const orderBy = ref('')
const isADialogVisible = ref(false)
const isRDialogVisible = ref(false)
const isAUDialogVisible = ref(false)
const isRUDialogVisible = ref(false)

const filtersearchQuery = ref<string | undefined>('')
const filterselectedRole = ref<string | undefined>(null)
const filterselectedStatus = ref<string | undefined>(null)

const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key ?? ''
  orderBy.value = options.sortBy[0]?.order ?? ''
}

const headers = [
  { title: 'Full Name', key: 'fullName' },
  { title: 'Role', key: 'roles' },
  { title: 'Email', key: 'email' },
  { title: 'Contact', key: 'contact' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const { data: rolesData } = await useApi<any>('/users/UI/roles')

const roles = computed(() =>
  rolesData.value.roles.map((role: any) => ({
    title: role.name,
    value: role.id,
    userCount: role.user_count || 0,
  })),
)

const fetchUsers = async () => {
  const query = {
    q: searchQuery.value || '',
    status: selectedStatus.value !== null ? selectedStatus.value : undefined,
    role: selectedRole.value !== null ? selectedRole.value : undefined,
    itemsPerPage: itemsPerPage.value,
    page: page.value,
    sortBy: sortBy.value || '',
    orderBy: orderBy.value || '',
  }

  const { data: usersData } = await useApi<any>(createUrl('/users/UI/list', { query }))

  users.value = usersData.value.users
  totalUsers.value = usersData.value.total
}

fetchUsers()

watch([searchQuery, selectedRole, selectedStatus, itemsPerPage, page, sortBy, orderBy], fetchUsers)

const users = ref([])
const totalUsers = ref(0)

const openADialog = user => {
  selectedUser.value = user
  isADialogVisible.value = true
}

const openRDialog = user => {
  selectedUser.value = user
  isRDialogVisible.value = true
}

const openAUDialog = user => {
  selectedUser.value = user
  isAUDialogVisible.value = true
}

const openRUDialog = user => {
  selectedUser.value = user
  isRUDialogVisible.value = true
}

const statusOptions = [
  { title: 'Active', value: 1 },
  { title: 'Pending Checker', value: 'waiting_checker_approval' },
  { title: 'Inactive', value: 0 },
]

const deactivate = async (id: number) => {
  try {
    await $api(`/user/deactivate/${id}`, { method: 'POST' })
    await fetchUsers()

    // Show success toast
    toast.success('User Updated saved successfully')
  }
  catch (error) {
    // Show error toast if the request fails
    toast.error('Failed to deactivate the user')
  }
}

const activate = async (id: number) => {
  try {
    await $api(`/user/activate/${id}`, { method: 'POST' })
    await fetchUsers()

    // Show success toast
    toast.success('User changes saved successfully')
  }
  catch (error) {
    // Show error toast if the request fails
    toast.error('Failed to activate the user')
  }
}

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(users.value)
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Users Data')

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'users_data.xlsx')
}

const topRoles = computed(() => {
  return roles.value.slice(0, 4)
})

const approveUser = async userId => {
  try {
    const response = await $api('/post/user/approve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })

    if (response.message === 'User approved successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchUsers()
      isADialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this user', {
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
    const errorMessage = error.response?.data?.message || 'Error approving the user'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const rejectUser = async userId => {
  try {
    const response = await $api('/post/user/reject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })

    if (response.message === 'User rejected successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchUsers()
      isRDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this user', {
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
    const errorMessage = error.response?.data?.message || 'Error rejecting the user'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const approveUserChanges = async userId => {
  try {
    const response = await $api('/approve/user/changes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })

    if (response.message === 'User changes approved successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchUsers()
      isAUDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this user', {
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
    const errorMessage = error.response?.data?.message || 'Error approving the user'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const rejectUserChanges = async userId => {
  try {
    const response = await $api('/reject/user/changes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })

    if (response.message === 'User changes rejected successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchUsers()
      isRUDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this user', {
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
    const errorMessage = error.response?.data?.message || 'Error rejecting the user'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const submitFilters = async () => {
  searchQuery.value = filtersearchQuery.value
  selectedRole.value = filterselectedRole.value
  selectedStatus.value = filterselectedStatus.value

  await fetchUsers()
}

const clearFilters = () => {
  filtersearchQuery.value = ''
  filterselectedRole.value = ''
  filterselectedStatus.value = ''
  page.value = 1

  submitFilters()
}

fetchUsers()
</script>

<template>
  <section>
    <!-- 👉 Widgets -->
    <div class="d-flex mb-6">
      <VRow>
        <VCol
          v-for="data in topRoles"
          :key="data.title"
          cols="12"
          md="3"
          sm="6"
        >
          <VCard>
            <VCardText>
              <div class="d-flex justify-space-between">
                <div class="d-flex flex-column gap-y-1">
                  <span class="text-body-1 text-medium-emphasis">{{ data.title }}</span>
                  <h4 class="text-h4">
                    {{ data.userCount }}
                  </h4>
                </div>
                <VAvatar
                  :color="data.iconColor"
                  rounded
                  size="38"
                  variant="tonal"
                >
                  <VIcon
                    :icon="data.icon"
                    size="26"
                  />
                </VAvatar>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
    <!-- Data Table -->
    <VCard>
      <VCardText class="d-flex align-center justify-space-between flex-wrap gap-4">
        <div class="d-flex align-center gap-4 flex-wrap">
          <div>
            <AppTextField
              v-model="filtersearchQuery"
              density="compact"
              placeholder="Search"
              clear-icon="tabler-circle-x"
              clearable
              style="inline-size: 12.5rem;"
            />
          </div>
          <div
            cols="12"
            md="3"
          >
            <AppSelect
              v-model="filterselectedRole"
              :items="roles"
              clear-icon="tabler-circle-x"
              clearable
              placeholder="Select Role Type"
              style="inline-size: 12.5rem;"
            />
          </div>
          <div
            cols="12"
            md="3"
          >
            <AppSelect
              v-model="filterselectedStatus"
              :items="statusOptions"
              clear-icon="tabler-circle-x"
              clearable
              placeholder="Select Status"
              style="inline-size: 12.5rem;"
            />
          </div>
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
        <div class="d-flex align-center gap-4 flex-wrap">
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50, 100]"
          />
          <VBtn
            density="default"
            @click="$router.push('/users/AddNewUser')"
          >
            Add New User
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        :items="users"
        :items-length="totalUsers"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.fullName="{ item }">
          <div class="d-flex align-center">
            <h6 class="text-h8 mb-0 mr-2">
              <a href="javascript:void(0)">
                {{ item.fullName }}
              </a>
            </h6>
            <IconBtn
              v-if="item.user_changes !== null"
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
                    aria-label="User changes awaiting approval"
                    @click="openaInfoDialog(item)"
                  />
                </template>
                <span> User pending changes awaiting approval</span>
              </VTooltip>
            </IconBtn>
          </div>
        </template>
        <template #item.status="{ item }">
          <VChip
            :color="item.status === 'active' ? 'success' : item.status === 'waiting_checker_approval' ? 'info' : 'error'"
            label
            size="small"
          >
            {{ item.status === 'active' ? 'Active' : item.status === 'waiting_checker_approval' ? 'Pending Checker' : 'Inactive' }}
          </VChip>
        </template>

        <template #item.actions="{ item }">
          <VBtn
            v-if="item.status === 'active' || item.status === 'inactive'"
            :to="{ name: 'users-view-id', params: { id: item.id } }"
            icon
            size="small"
            variant="text"
            color="primary"
          >
            <VIcon
              icon="tabler-eye"
              size="20"
            />
          </VBtn>

          <VBtn
            v-if="item.status === 'waiting_checker_approval' && item.checker_status"
            icon
            size="small"
            variant="text"
            color="success"
            @click="openADialog(item)"
          >
            <VIcon
              icon="tabler-square-check"
              size="20"
            />
          </VBtn>

          <VBtn
            v-if="item.status === 'waiting_checker_approval' && item.checker_status"
            icon
            size="small"
            variant="text"
            color="error"
            @click="openRDialog(item)"
          >
            <VIcon
              icon="tabler-square-x"
              size="20"
            />
          </VBtn>

          <VBtn
            v-if="item.user_changes !== null && item.user_checker_status"
            icon
            size="small"
            variant="text"
            color="success"
            @click="openAUDialog(item)"
          >
            <VIcon
              icon="tabler-square-check"
              size="20"
            />
          </VBtn>

          <VBtn
            v-if="item.user_changes !== null && item.user_checker_status"
            icon
            size="small"
            variant="text"
            color="error"
            @click="openRUDialog(item)"
          >
            <VIcon
              icon="tabler-square-x"
              size="20"
            />
          </VBtn>

          <VBtn
            v-if="item.user_changes === null && item.status === 'active'"
            icon
            size="small"
            variant="text"
            color="success"
            @click="deactivate(item.id)"
          >
            <VIcon
              icon="tabler-thumb-up"
              size="20"
              title="Click to Suspend user"
            />
          </VBtn>

          <VBtn
            v-if="item.user_changes === null && item.status === 'inactive'"
            icon
            size="small"
            variant="text"
            color="error"
            @click="activate(item.id)"
          >
            <VIcon
              icon="tabler-thumb-down"
              size="20"
              title="Click to Activate user"
            />
          </VBtn>
        </template>

        <!-- Roles Column -->
        <template #item.roles="{ item }">
          <div class="d-flex align-center gap-4">
            <VChip
              v-for="role in item.roles"
              :key="role.id"
              color="primary"
            >
              {{ role.name }}
            </VChip>
          </div>
        </template>

        <!-- Pagination -->
        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-disabled mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
            </p>
            <VPagination
              v-model="page"
              :length="Math.ceil(totalUsers / itemsPerPage)"
              :total-visible="$vuetify.display.xs ? 1 : 7"
            />
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </section>

  <VDialog
    v-model="isADialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isADialogVisible = !isADialogVisible" />

    <VCard>
      <VCardText>
        Are you sure you want to Approve this User: {{ selectedUser.fullName }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isADialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="approveUser(selectedUser.id)"
        >
          Approve
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VDialog
    v-model="isRDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isRDialogVisible = !isRDialogVisible" />

    <VCard>
      <VCardText>
        Are you sure you want to Reject this User: {{ selectedUser.fullName }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isRDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="rejectUser(selectedUser.id)"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VDialog
    v-model="isAUDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isAUDialogVisible = !isAUDialogVisible" />

    <VCard>
      <VCardText>
        Are you sure you want to Approve this User Chnages: {{ selectedUser.fullName }}?
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isAUDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="approveUserChanges(selectedUser.id)"
        >
          Approve
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VDialog
    v-model="isRUDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn @click="isRUDialogVisible = !isRUDialogVisible" />

    <VCard>
      <VCardText>
        Are you sure you want to Reject this User Changes: {{ selectedUser.fullName }}?
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isRUDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="rejectUserChanges(selectedUser.id)"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
