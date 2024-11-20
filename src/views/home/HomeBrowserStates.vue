<script lang="ts" setup>
import yofinvoice from '@images/logos/yofinvoice.png'

const currentMonthYear = computed(() => {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentYear = currentDate.getFullYear()

  return `Counter ${currentMonth} ${currentYear}`
},
)

interface stats {
  source: string
  count: number
}

const formData = ref<stats[]>([])

const fetchSourceData = async () => {
  const { data } = await $api('/get/UI/dashboard/source/analysis').catch(err => console.log(err))

  formData.value = data
}

onMounted(() => {
  fetchSourceData()
})
</script>

<template>
  <VCard
    :subtitle="currentMonthYear"
    title="Top Lead Source"
  >
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in formData"
          :key="data.source"
        >
          <template #prepend>
            <VAvatar size="28">
              <VImg :src="yofinvoice" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ data.source }}
          </VListItemTitle>

          <template #append>
            <span class="font-weight-medium text-medium-emphasis me-3">{{ data.count }}</span>
            <VProgressCircular
              :model-value="data.count"
              color="primary"
              size="28"
              width="3"
            />
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 30px;
}
</style>
