<script lang="ts" setup>
import Programs from '@/views/programs/Programs.vue'
import PendingApproval from '@/views/programs/PendingApproval.vue'
import ExpiredApproval from '@/views/programs/ExpiredApproval.vue'
import ExhaustedApproval from '@/views/programs/ExhaustedApproval.vue'



definePage({
  meta: {
    action: 'manage',
    subject: 'View Programs & Mapping',
  },
});

const currentTab = ref('Programs');

const items = ['Programs', 'Pending Approval', 'Exhausted Programs', 'Expired Programs'];

</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="12">
      <VCard>
        <VTabs v-model="currentTab">
          <VTab value="Programs">Programs</VTab>
          <!-- <VTab value="Pending Approval">Pending Approval</VTab> -->
          <VTab value="Exhausted Programs">Exhausted Programs</VTab>
          <VTab value="Expired Programs">Expired Programs</VTab>
        </VTabs>

        <VCardText>
          <VWindow v-model="currentTab">
            <VWindowItem value="Programs">
              <Programs />
            </VWindowItem>
            <!-- <VWindowItem value="Pending Approval">
              <PendingApproval />
            </VWindowItem> -->
            <VWindowItem value="Exhausted Programs">
              <ExhaustedApproval />
            </VWindowItem>
            <VWindowItem value="Expired Programs">
              <ExpiredApproval />
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
