<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable';

interface Activity {
  id: number
  section: string
  tatDays: number
  createdAt: Date
}

interface Lead {
  id: number
  name: string
  company: string
  product: string
  stage: string
  activities: Activity[]
  createdAt: string
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
  { title: 'Company', key: 'company' },
  { title: 'Product Type', key: 'product' },
  { title: 'Stage', key: 'stage' },
  { title: 'Creation Date', key: 'createdAt' },
]

const {
  data: followUpData,
  execute: fetchFollowUps,
} = await useApi<Lead[] | null>(createUrl('/get/UI/closed/deals/reports', {
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

const followUps: Ref<Lead[] | null> = computed(() => followUpData.value)

fetchFollowUps()

const resolveStatusVariant = (status: string) => {
  if (status === 'Contact')
    return { color: 'primary', text: 'Contact' }
  else if (status === 'Lead')
    return { color: 'success', text: 'Lead' }
  else if (status === 'Emailing Documents')
    return { color: 'info', text: 'Emailing Documents' }
  else if (status === 'Opportunity')
    return { color: 'success', text: 'Opportunity' }
  else
    return { color: 'error', text: 'Error' }
}

const resolveProductVariant = (statusMsg: string) => {
  if (statusMsg === 'dealer financing')
    return { text: 'Dealer Financing', color: 'primary' }

  return { text: 'Vendor Financing', color: 'success' }
}
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex flex-wrap justify-space-between align-center gap-4">
        <h5 class="text-h5 font-weight-medium">
          Closed Deals
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
          v-for="activity in slotProps.item.activities"
          :key="activity.id"
          class="v-data-table__tr"
        >
          <td :colspan="headers.length">
            <p class="my-1">
              <VChip
                :color="resolveStatusVariant(activity.section).color"
                class="font-weight-medium"
                size="small"
              >
                {{ resolveStatusVariant(activity.section).text }}
              </VChip>
            </p>
            <p class="my-1">
              Turn Around Time: {{ activity.tatDays }}
            </p>
            <p>Occurred at: {{ activity.createdAt }}</p>
          </td>
        </tr>
      </template>
      <template #item.product="{ item }">
        <VChip
          :color="resolveProductVariant(item.product).color"
          class="font-weight-medium"
          size="small"
        >
          {{ resolveProductVariant(item.product).text }}
        </VChip>
      </template>
    </VDataTable>
  </VCard>
</template>
