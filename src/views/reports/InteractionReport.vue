<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable';

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
  { title: 'STATUS', key: 'status' },
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
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

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
</script>

<template>
  <VCard
    class="mb-6"
    title="Filters"
  >
    <VCardText>
      <VRow>
        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 10rem;">
            <AppTextField
              v-model="searchQuery"
              density="compact"
              placeholder="Search"
            />
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
    </VDataTable>
  </VCard>
</template>
