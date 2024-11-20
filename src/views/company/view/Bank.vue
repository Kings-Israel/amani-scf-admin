<script lang="ts" setup>
import type { Company } from './index'
import { ref } from 'vue'

interface Props {
  data: Company
}

const props = defineProps<Props>()
const showAllManagers = ref(false) // State to control visibility of all relationship managers

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

  <VCard class="mb-8">
    <VCardTitle class="d-flex justify-space-between align-center py-3 px-8">
      <h4 class="text-h6 font-weight-bold text-center mb-0"> Relationship Managers </h4>
      <VIcon @click="toggleManagers" class="eye-icon">
        <template v-if="showAllManagers">mdi-eye-off</template>
        <template v-else>mdi-eye</template>
      </VIcon>
    </VCardTitle>

    <VCardText>
      <VList class="card-list mt-2">
        <template v-for="(manager, index) in props.data.relationship_managers" :key="manager.id">
          <!-- Only show the first two managers or all if showAllManagers is true -->
          <VListItem class="my-8" v-if="index < 2 || showAllManagers">
            <VDivider></VDivider>

            <VListItemTitle class="d-flex align-items-center my-2">
              <h5 class="text-body-1 font-weight-bold me-2">Name:</h5>
              <span class="text-muted">{{ manager.name }}</span>
            </VListItemTitle>

            <VListItemTitle class="d-flex align-items-center my-2">
              <h5 class="text-body-1 font-weight-bold me-2">Email:</h5>
              <span class="text-muted">{{ manager.email }}</span>
            </VListItemTitle>

            <VListItemTitle class="d-flex align-items-center my-2">
              <h5 class="text-body-1 font-weight-bold me-2">Phone Number:</h5>
              <span class="text-muted">{{ manager.phone_number }}</span>
            </VListItemTitle>
          </VListItem>
        </template>
      </VList>
    </VCardText>
</VCard>

<VCard class="mb-8">
  <VCardTitle class="d-flex justify-space-between align-center py-3 px-8">
    <h4 class="text-h6 font-weight-bold text-center mb-0">Bank Details</h4>
  </VCardTitle>

  <VCardText>
    <VList class="card-list mt-2">
      <VListItem class="my-8">
        <VDivider></VDivider>

        <VListItemTitle class="d-flex align-items-center my-2" v-if="props.data.bank">
          <h5 class="text-body-1 font-weight-bold me-2">Bank Name:</h5>
          <span class="text-muted">{{ props.data.bank.name }}</span>
        </VListItemTitle>

        <VListItemTitle class="d-flex align-items-center my-2" v-if="props.data.bank">
          <h5 class="text-body-1 font-weight-bold me-2">Bank Url:</h5>
          <span class="text-muted">{{ props.data.bank.url }}</span>
        </VListItemTitle>

        <VListItemTitle class="d-flex align-items-center my-2" v-if="props.data.bank">
          <h5 class="text-body-1 font-weight-bold me-2">Bank Email:</h5>
          <span class="text-muted">{{ props.data.bank.email }}</span>
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
