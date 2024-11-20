<script lang="ts" setup>
import yofinvoice from '@images/logos/yofinvoice.png'

interface extendedProps {
  guests: string[]
  location: string
  description: string
  calendar: string
}

interface Timeline {
  id: number
  start: Date
  end: Date
  createdAt: Date
  title: string
  url: string
  extendedProps: extendedProps
}

const formData = ref<Timeline[]>([])

const fetchData = async () => {
  const { data } = await $api('/recent/activity/dashboard').catch(err => console.log(err))

  formData.value = data
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <VCard title="Recent Activity Timeline">
    <VCardText>
      <VTimeline
        v-for="data in formData"
        align="start"
        class="v-timeline-density-compact"
        density="compact"
        side="end"
        truncate-line="both"
      >
        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              {{ data.extendedProps.calendar }}
            </span>
            <span class="app-timeline-meta">created on{{ data.createdAt }}</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-3">
            {{ data.title }}
          </p>
          <div class="d-flex align-center">
            <VAvatar
              :image="yofinvoice"
              class="me-3"
            />
            <div>
              <h6 class="text-h6">
                Guests: {{ data.extendedProps.guests }}
              </h6>
              <p class="mb-0 text-sm">
                {{ data.url }}
              </p>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Description: {{ data.extendedProps.description }}
            </span>
            <span class="app-timeline-meta">Start Date {{ data.start }}</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-1">
            Location: {{ data.extendedProps.location }}
          </p>
        </VTimelineItem>

        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              End Date
            </span>
            <span class="app-timeline-meta">End {{ data.end }}</span>
          </div>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
