<script lang="ts" setup>
import girlWithLaptop from '@images/illustrations/laptop-girl.png'

interface Data {
  title: string
  count: number
  start: Date
  end: Date
  calendar: string
  url: string
}

const { data: fetchedData, execute: fetchProducts } = await useApi<any>(createUrl('/get/latest/schedule'))
const scheduleData: Ref<Data> = computed(() => fetchedData.value)

fetchProducts()
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-center  align-start pb-0 px-3 pt-3 mb-4 bg-light-primary rounded">
        <VImg
          :src="girlWithLaptop"
          height="140"
          width="145"
        />
      </div>
      <div>
        <h4 class="text-h4 mb-1">
          Upcoming Meeting
        </h4>
        <span class="text-body-2">{{ scheduleData.title }}</span>
        <div class="d-flex justify-space-between my-4 flex-wrap">
          <div class="d-flex gap-x-3 align-center">
            <VAvatar
              color="primary"
              rounded
              variant="tonal"
            >
              <VIcon icon="tabler-calendar" />
            </VAvatar>
            <div>
              <h6 class="text-h6 text-high-emphasis">
                Start
              </h6>
              <div class="text-sm">
                {{ scheduleData.start }}
              </div>
            </div>
            <VAvatar
              color="primary"
              rounded
              variant="tonal"
            >
              <VIcon icon="tabler-clock" />
            </VAvatar>
            <div>
              <h6 class="text-h6 text-high-emphasis">
                End
              </h6>
              <div class="text-sm">
                {{ scheduleData.start }}
              </div>
            </div>
          </div>
        </div>
        <VBtn block>
          Join the event
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
