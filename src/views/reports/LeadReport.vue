<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable';

interface ExtendedProps {
  guests: string[]
  location: string
  description: string
  calendar: string
}

interface Schedule {
  id: number
  title: string
  start: string
  end: string
  allDay: boolean
  url: string
  extendedProps: ExtendedProps
}

interface Lead {
  id: number
  name: string
  pointOfContact: string
  leadType: string
  email: string
  schedules: Schedule[]
  CreationDate: string
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
  { title: 'Name', key: 'name' },
  { title: 'Contact Person', key: 'pointOfContact' },
  { title: 'Lead Type', key: 'leadType' },
  { title: 'Email', key: 'email' },
  { title: 'Creation Date', key: 'CreationDate' },
  { title: 'tatDays', key: 'tatDays' },
]

const {
  data: followUpData,
  execute: fetchFollowUps,
} = await useApi<Lead[] | null>(createUrl('/get/UI/leads/reports', {
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

const followUps = computed(() => followUpData.value)

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

const resolveExpiredValiant = (status: string) => {
  if (status === 'active')
    return { color: 'primary', text: 'Active' }

  return { color: 'error', text: 'Expired' }
}
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex flex-wrap justify-space-between align-center gap-4">
        <h5 class="text-h5 font-weight-medium">
          Leads Reports
        </h5>
        <div>
          <AppTextField
            v-model="searchQuery"
            placeholder="Search"
            style=" max-inline-size: 200px;min-inline-size: 200px;"
          />
        </div>
      </div>
    </VCardText>
    <VDataTable
      :headers="headers"
      :items="followUps"
      :items-per-page="5"
      expand-on-click
    >
      <!-- Expanded Row Data -->
      <template #expanded-row="slotProps">
        <tr
          v-for="schedule in slotProps.item.schedules"
          class="v-data-table__tr"
        >
          <td :colspan="headers.length">
            <p class="my-1">
              <VChip
                :color="resolveStatusVariant(schedule.extendedProps.calendar).color"
                class="font-weight-medium"
                size="small"
              >
                {{ resolveStatusVariant(schedule.extendedProps.calendar).text }}
              </VChip>
            </p>
            <p class="my-1">
              <VChip
                :color="resolveExpiredValiant(schedule.expired).color"
                class="font-weight-medium"
                size="small"
              >
                {{ resolveExpiredValiant(schedule.expired).text }}
              </VChip>
            </p>
            <p class="my-1">
              Title: {{ schedule.title }}
            </p>
            <p class="my-1">
              Location: {{ schedule.extendedProps.location }}
            </p>
            <p class="my-1">
              Guests: {{ schedule.extendedProps.guests }}
            </p>
            <p>Description: {{ schedule.extendedProps.description }}</p>
          </td>
        </tr>
      </template>
      <!-- full name -->
    </VDataTable>
  </VCard>
</template>
