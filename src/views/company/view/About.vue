<script lang="ts" setup>
import type { Company } from './index'
import { ref } from 'vue'

interface Props {
  data: Company
}

const props = defineProps<Props>()
const showAllManagers = ref(false) 

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }

  return { text: 'Inactive', color: 'error' }
}

const resolveApprovalStatus = (statusMsg: string) => {
  if (statusMsg === 'approved')
    return { text: 'Approved', color: 'success' }

  return { text: 'Pending', color: 'warning' }
}

const toggleManagers = () => {
  showAllManagers.value = !showAllManagers.value
}
</script>

<template>
  <VCard class="mb-4">
    <VCardTitle class="py-4">
      <h5 class="text-h5 text-center font-weight-bold">{{ props.data.name }}</h5>
    </VCardTitle>

    <VDivider></VDivider>

    <VCardText>
      <VList class="card-list mt-3">
        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">Approval Status:</h6>
            <VChip class="ms-2" color="green" density="comfortable" v-bind="resolveApprovalStatus(props.data.approval_status)" />
          </VListItemTitle>
        </VListItem>

        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">Active Status:</h6>
            <VChip class="ms-2" color="blue" density="comfortable" v-bind="resolveStatus(props.data.status)" />
          </VListItemTitle>
        </VListItem>

        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">KRA PIN:</h6>
            <span class="text-muted">{{ props.data.kra_pin }}</span>
          </VListItemTitle>
        </VListItem>

        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">Branch Code:</h6>
            <span class="text-muted">{{ props.data.branch_code || 'N/A' }}</span>
          </VListItemTitle>
        </VListItem>

        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">Organization Type:</h6>
            <span class="text-muted">{{ props.data.organization_type }}</span>
          </VListItemTitle>
        </VListItem>

        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">City:</h6>
            <span class="text-muted">{{ props.data.city }}</span>
          </VListItemTitle>
        </VListItem>

        <VListItem class="mb-3">
          <VListItemTitle class="d-flex align-items-center">
            <h6 class="text-body-1 me-2 font-weight-bold">Customer Type:</h6>
            <span class="text-muted">{{ props.data.customer_type || 'N/A' }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>


</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
.eye-icon {
  cursor: pointer; 
  margin-left: 10px; 
}
</style>
