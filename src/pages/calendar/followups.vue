<script lang="ts" setup>
import { ref } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import FollowUpModal from './FollowUpModal.vue';
import type { InteractionType } from './index';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Follow Ups',
  },
})

interface EventExtendedProps {
  guests: number[]
  location: string
  description: string
  calendar: string
}

interface Event {
  id: number
  title: string
  start: string
  end: string
  allDay: boolean
  url: string
  extendedProps: EventExtendedProps
}

interface APIEvent {
  data: Event[]
}

const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const selectedCalendar = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Headers
const headers = [
  { title: '', key: 'data-table-expand' },
  { title: 'TITLE', key: 'title' },
  { title: 'START', key: 'start' },
  { title: 'END', key: 'end' },
  { title: 'URL', key: 'url' },
  { title: 'Done', key: 'done' },
  { title: 'TYPE', key: 'status' },
  { title: 'Action', key: 'actions' },
]

const {
  data: followUpData,
  execute: fetchFollowUps,
} = await useApi<APIEvent | null>(createUrl('/all/UI/data/followups', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    calendar: selectedCalendar,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const status = ref([
  { title: 'Done', value: '1' },
  { title: 'Not Done', value: '0' },
])

const calendar = ref([
  { title: 'Physical Meeting', value: 'Physical Meeting' },
  { title: 'Online Meeting', value: 'Online Meeting' },
  { title: 'Follow Ups', value: 'Follow Ups' },
  { title: 'Activity', value: 'Activity' },
  { title: 'ETC', value: 'ETC' },
])

const followUps = computed(() => followUpData.value?.data)

fetchFollowUps()

const resolveStatusVariant = (status: string) => {
  if (status === 'Physical Meetings')
    return { color: 'primary', text: 'Physical Meetings' }
  else if (status === 'Online Meetings')
    return { color: 'success', text: 'Online Meetings' }
  else if (status === 'Corporate Events')
    return { color: 'error', text: 'Corporate Events' }
  else if (status === 'Follow ups')
    return { color: 'warning', text: 'Follow ups' }
  else
    return { color: 'info', text: 'ETC' }
}

const resolveDoneVariant = (stat: string) => {
  if (stat === '1')
    return { color: 'success', text: 'Done' }

  return { color: 'error', text: 'Not Done' }
}

const userData = ref<InteractionType>({
  id: 0,
  date: '',
  checked: 'done',
  touchPoint: 'Physical Meeting',
  remarks: '',
  veryNextStep: '',

})

function getTodayDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const isSavedData = ref<boolean>(false)

watch(isSavedData, newISaved => {
  fetchFollowUps()
  console.log(newISaved)
})

const isAddNewInteractionVisible = ref<boolean>(false)

const addNewInteraction = (item: InteractionType) => {
  userData.value.id = item.id
  userData.value.date = getTodayDate()
  isAddNewInteractionVisible.value = !isAddNewInteractionVisible.value
}
</script>

<template>
  <VSnackbar
    v-model="isSavedData"
    color="success"
    location="top end"
    variant="flat"
  >
    New Note added successfully
  </VSnackbar>
  <FollowUpModal
    v-model:interaction-type="userData"
    v-model:isDialogVisible="isAddNewInteractionVisible"
    v-model:isSavedData="isSavedData"
  />
  <VCard
    class="mb-6"
    title="Filters"
  >
    <VCardText>
      <VRow>
        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div class="d-flex flex-wrap gap-4 mx-5">
            <div class="d-flex align-center">
              <AppTextField
                v-model="searchQuery"
                class="me-3"
                density="compact"
                placeholder="Search"
                style="inline-size: 200px;"
              />
              <AppSelect
                v-model="selectedStatus"
                :items="status"
                clear-icon="tabler-x"
                clearable
                placeholder="Status"
                style="inline-size: 200px;"
              />
              <AppSelect
                v-model="selectedCalendar"
                :items="calendar"
                clear-icon="tabler-x"
                clearable
                placeholder="Type"
                style="inline-size: 200px;"
              />
            </div>
          </div>
        </div>
      </VRow>
    </VCardText>
  </VCard>
  <VSpacer />
  <VCard>
    <VDataTable
      :headers="headers"
      :items="followUps"
      :items-per-page="5"
      expand-on-click
    >
      <!-- Expanded Row Data -->
      <template #expanded-row="slotProps">
        <tr class="v-data-table__tr">
          <td :colspan="headers.length">
            <p class="my-1">
              Guests: {{ slotProps.item.extendedProps.guests }}
            </p>
            <p class="my-1">
              Location: {{ slotProps.item.extendedProps.location }}
            </p>
            <p>Description: {{ slotProps.item.extendedProps.description }}</p>
          </td>
        </tr>
      </template>
      <!-- full name -->
      <template #item.title="{ item }">
        <div class="d-flex align-center">
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.title }}</span>
            <small> {{ new Date(item.start).toLocaleDateString() }}</small>
          </div>
        </div>
      </template>
      <template #item.start="{ item }">
        <span>{{ new Date(item.start).toLocaleDateString() }}</span>
      </template>

      <template #item.end="{ item }">
        <span>{{ new Date(item.end).toLocaleDateString() }}</span>
      </template>
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusVariant(item.extendedProps.calendar).color"
          class="font-weight-medium"
          size="small"
        >
          {{ resolveStatusVariant(item.extendedProps.calendar).text }}
        </VChip>
      </template>
      <template #item.done="{ item }">
        <VChip
          :color="resolveDoneVariant(item.done).color"
          class="font-weight-medium"
          size="small"
        >
          {{ resolveDoneVariant(item.done).text }}
        </VChip>
      </template>
      <template #item.actions="{ item }">
        <div class="d-flex gap-1">
          <IconBtn @click="addNewInteraction(item)">
            <VIcon icon="tabler-arrow-autofit-width" />
          </IconBtn>
        </div>
      </template>
    </VDataTable>
  </VCard>
</template>
