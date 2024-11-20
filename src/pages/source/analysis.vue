<script lang="ts" setup>
import InternalReferrals from '@/views/source-analysis/InternalReferrals.vue';
import OtherSourcingChannel from '@/views/source-analysis/OtherSourcingChannel.vue';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Reports',
  },
})

const cardIndex = ref(1)
const isChange = ref(false)

const statisticsData = [

  {
    index: 1,
    title: 'Other Sourcing Channels',
    stats: '783',
  },
  {
    index: 2,
    title: 'Internal Referrals',
    stats: '1739',
  },
]

function handleChangedEvent(index: number) {
  cardIndex.value = index
  isChange.value = !isChange
}
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VRow class="match-height mb-2">
      <!-- <VCol
        v-for="statistics in statisticsData"
        :key="statistics.title"
        cols="12"
        md="3"
        sm="6"
      >
        <CardStatistics
          :is-changed="isChange"
          v-bind="statistics"
          @changed="handleChangedEvent"
        />
      </VCol> -->
    </VRow>
    <!-- 👉 Opportunities -->
    <VCard>
      <VCard>
        <OtherSourcingChannel v-if="cardIndex === 1" />
        <InternalReferrals v-else-if="cardIndex === 2" />
      </VCard>
    </VCard>
  </div>
</template>
