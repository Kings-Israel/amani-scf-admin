<script lang="ts" setup>
import { headers } from '@/views/notifications';
import { paginationMeta } from '@api-utils/paginationMeta';
import { computed, ref } from 'vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable';

// Define Page Metadata
definePage({
  meta: {
    public: true,
  },
})

// State Variables
const searchQuery = ref('')
const marker = ref(true)
const iconIndex = ref(0)
const selectedItems = ref<number[]>([])

// Data Table Options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update Data Table Options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Toggle Marker and Clear Functions
const toggleMarker = () => marker.value = !marker.value
const clearMessage = () => searchQuery.value = ''
const resetIcon = () => iconIndex.value = 0
const sendMessage = () => {
  resetIcon()
  clearMessage()
}

// Notification Status
const isSeen = ref([
  { isSeen: 'true', value: 'true' },
  { isSeen: 'false', value: 'false' },
])

// Fetch Notifications
const { data: usersData, execute: fetchNotifications } = await useApi<any>(createUrl('/get/admin/UI/notifications/all', {
  query: {
    q: searchQuery,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const users = computed(() => usersData.value.data)
const totalUsers = computed(() => usersData.value.total)

// Determine Status Color
const resolveUserStatusVariant = (status: string) => {
  const statusLowerCase = status.toLowerCase()
  return statusLowerCase === 'unread' ? 'warning' : 'success'
}

// Computed Properties
const isVisibleButton = computed(() => selectedItems.value.length < 1)
const isAddNewExpenseDataVisible = ref(false)

// Add Expense
const addExpense = async (expenseData: any) => {
  await $api('/new/UI/expense', {
    method: 'POST',
    body: expenseData,
  })
  await fetchNotifications()
}

// Approve
const approve = async () => {
  await $api('/approve/UI/expense', {
    method: 'POST',
    body: selectedItems.value,
  })
  await fetchNotifications()
  selectedItems.value = []
}

// Mark as Read
const markAsRead = async (notificationId: number) => {
  await $api('/notifications/mark/read', {
    method: 'POST',
    body: { id: notificationId },
  })
  await fetchNotifications()
}

fetchNotifications()
</script>
<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div class="d-flex flex-wrap gap-4 mx-5">
          <h4 class="text-h4 text-high-emphasis mb-1">
            All Notifications
          </h4>
          <VSpacer />
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
        expand-on-click
        @update:options="updateOptions"
      >
        <template #item.combined="{ item }">
          <div class="d-flex justify-between w-100">
            <div class="font-weight-bold">{{ item.title }} : </div>
            <div>{{ item.subtitle }}</div>
          </div>
        </template>
        <template #item.amount="{ item }">
          <span :style="{ color: $vuetify.theme.global.current.colors.success }">{{ item.amount }}</span>
        </template>
        <template #item.status="{ item }">
          <VChip :color="resolveUserStatusVariant(item.status)" class="text-capitalize" size="small">
            {{ item.status }}
          </VChip>
        </template>

        <!-- Action Column -->
        <template #item.actions="{ item }">
          <VBtn @click="markAsRead(item.id)" color="primary" small>Mark as Read</VBtn>
        </template>

        <!-- Pagination -->
        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-medium-emphasis mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
            </p>
            <VPagination
              v-model="page"
              :length="Math.min(Math.ceil(totalUsers / itemsPerPage), 5)"
              :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalUsers / itemsPerPage), 5)"
            />
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </section>
</template>
