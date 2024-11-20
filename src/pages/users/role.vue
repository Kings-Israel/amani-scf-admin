<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTableServer } from 'vuetify/labs/VDataTable'

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Roles',
  },
})

interface RoleType {
  id: number
  name: string
}

// 👉 headers
const headers = [
  { title: 'ID', key: 'id', sortable: false },
  { title: 'Role', key: 'RoleName', sortable: false },
  { title: 'Role Type', key: 'RoleTypeName', sortable: false },
  { title: 'Role Description', key: 'RoleDescription', sortable: false },
  { title: 'Created At', key: 'created_at', sortable: false },
  { title: 'Total Permissions', key: 'role_i_ds_count', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]

const search = ref('')
const selectedRole = ref(null)
const selectedStatus = ref<string | null>(null)

const filtersearch = ref<string | undefined>('')
const filterRoleTypeName = ref<string | undefined>(null)
const filtercreatedAt = ref<string | undefined>('')
const filterselectedStatus = ref<string | undefined>(null)

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const createdAt = ref()
const isADialogVisible = ref(false)
const isRDialogVisible = ref(false)

const RoleTypes = ref<string[]>([])

const { data: roleData, execute: fetchRoles } = await useApi<any>(createUrl('/UI/roles/permissions'))

const roles: Ref<RoleType[]> = computed(() => roleData.value)

const RoleTypeName = ref<string>()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const openADialog = role => {
  selectedRole.value = role
  isADialogVisible.value = true
}

const openRDialog = role => {
  selectedRole.value = role
  isRDialogVisible.value = true
}

const status = ref([
  { title: 'Pending', value: 'pending' },
  { title: 'Approved', value: 'approved' },
  { title: 'Rejected', value: 'rejected' },
])

const isPermissionDialogVisible = ref(false)
const isAddPermissionDialogVisible = ref(false)
const permissionName = ref('')
const permissionID = ref('')

const queryParams = computed(() => ({
  q: search.value,
  roleType: RoleTypeName.value,
  status: selectedStatus.value,
  createdAt: createdAt.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}))

const { data: permissionsData, execute: fetchData } = await useApi<any>(createUrl('/UI/all/roles/data', {
  query: queryParams,
},
))

const permissions = computed(() => permissionsData.value.permissions)
const totalPermissions = computed(() => permissionsData.value.totalPermissions)

const editPermission = (name: string, id: string) => {
  isPermissionDialogVisible.value = true
  permissionName.value = name
  permissionID.value = id
}

RoleTypes.value = roles.value.map(role => role.name)

const deleteRole = async (id: any) => {
  await $api('/UI/delete/role', {
    method: 'POST',
    body: {
      role_id: id,
    },
  })
  await fetchData()
}

onMounted(async () => {
  await fetchData()
  RoleTypes.value = roles.value.map(role => role.name)

  watch(RoleTypeName, newRoleTypeName => {
    const matchingRole = roles.value.find(role => role.name === newRoleTypeName)
  }, {
    immediate: true,
  })
})

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'approved')
    return { text: 'Approved', color: 'success' }
  if (statusMsg === 'pending')
    return { text: 'Pending', color: 'info' }

  return { text: 'Rejected', color: 'error' }
}

const approveRole = async roleId => {
  try {
    const response = await $api('/post/role/approve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role_id: roleId,
      }),
    })

    if (response.message === 'Role approved successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchData()
      isADialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this role', {
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
    const errorMessage = error.response?.data?.message || 'Error approving the role'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const rejectRole = async roleId => {
  try {
    const response = await $api('/post/role/reject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role_id: roleId,
      }),
    })

    if (response.message === 'Role rejected successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchData()
      isRDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this role', {
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
    const errorMessage = error.response?.data?.message || 'Error rejecting the role'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const submitFilters = async () => {
  search.value = filtersearch.value
  RoleTypeName.value = filterRoleTypeName.value
  selectedStatus.value = filterselectedStatus.value
  createdAt.value = filtercreatedAt.value

  await fetchData()
}

const clearFilters = () => {
  filtersearch.value = ''
  filterRoleTypeName.value = ''
  filterselectedStatus.value = ''
  filtercreatedAt.value = ''
  page.value = 1

  submitFilters()
}

fetchData()
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h5 class="text-h4 mb-6">
        Roles List
      </h5>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardText class="d-flex align-center justify-space-between flex-wrap gap-4">
          <div class="d-flex align-center gap-4 flex-wrap">
            <div>
              <AppTextField
                v-model="filtersearch"
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
                v-model="filterRoleTypeName"
                :items="RoleTypes"
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
              <AppDateTimePicker
                v-model="filtercreatedAt"
                class="me-3"
                clear-icon="tabler-circle-x"
                clearable
                placeholder="Select Date"
                style="inline-size: 200px;"
              />
            </div>
            <div
              cols="12"
              md="3"
            >
              <AppSelect
                v-model="filterselectedStatus"
                :items="status"
                class="me-3"
                clear-icon="tabler-x"
                clearable
                placeholder="Status"
                style="inline-size: 200px;"
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
              @click="$router.push('/users/permission')"
            >
              Add Role
            </VBtn>
          </div>
        </VCardText>

        <VDivider />

        <VDataTableServer
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="headers"
          :items="permissions"
          :items-length="totalPermissions"
          :items-per-page-options="[
            { value: 5, title: '5' },
            { value: 10, title: '10' },
            { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
          ]"
          class="text-no-wrap"
          @update:options="updateOptions"
        >
          <!-- Assigned To -->
          <template #item.created_at="{ item }">
            <span>{{ new Date(item.created_at).toISOString().split('T')[0] }}</span>
          </template>

          <template #item.status="{ item }">
            <VChip
              density="default"
              label
              v-bind="resolveStatus(item.status)"
            />
          </template>

          <template #bottom>
            <VDivider />

            <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
              <p class="text-sm text-medium-emphasis mb-0">
                {{ paginationMeta({ page, itemsPerPage }, totalPermissions) }}
              </p>

              <VPagination
                v-model="page"
                :length="Math.ceil(totalPermissions / itemsPerPage)"
                :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalPermissions / itemsPerPage), 5)"
                active-color="primary"
                next-icon="tabler-caret-right"
                prev-icon="tabler-caret-left"
              />
            </div>
          </template>

          <template #item.createdDate="{ item }">
            <span>{{ item.createdDate.toLocaleString() }}</span>
          </template>

          <!-- Actions -->
          <template #item.actions="{ item }">
            <VBtn
              v-if="item.status === 'approved'"
              color="warning"
              icon
              size="small"
              variant="text"
              @click="$router.push(`/users/edit-role/${item.id}`)"
            >
              <VIcon
                icon="tabler-edit"
                size="22"
              />
            </VBtn>

            <IconBtn v-if="item.checker_status === true && item.status === 'pending'">
              <VIcon
                icon="tabler-square-check"
                color="success"
                @click="openADialog(item)"
              />
            </IconBtn>

            <!-- Reject Button -->
            <IconBtn v-if="item.checker_status === true && item.status === 'pending'">
              <VIcon
                icon="tabler-square-x"
                color="error"
                @click="openRDialog(item)"
              />
            </IconBtn>
          </template>
        </VDataTableServer>
      </VCard>

      <AddEditPermissionDialog
        v-model:isDialogVisible="isPermissionDialogVisible"
        v-model:permissionName="permissionName"
        v-model:permissionID="permissionID"
        v-model:fetchData="fetchData"
      />
      <AddEditPermissionDialog v-model:isDialogVisible="isAddPermissionDialogVisible" />
    </VCol>
  </VRow>

  <VDialog
    v-model="isADialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isADialogVisible = !isADialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Approve this Role: {{ selectedRole.name }}? <br> This action cannot be undone.
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
          @click="approveRole(selectedRole.id)"
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
        Are you sure you want to Reject this Role: {{ selectedRole.name }}? <br> This action cannot be undone.
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
          @click="rejectRole(selectedRole.id)"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
