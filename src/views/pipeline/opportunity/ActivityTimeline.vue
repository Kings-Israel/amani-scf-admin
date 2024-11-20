<template>
  <VCard title="Activity Timeline">
    <template #append>
      <div
        class="me-n2"
        style="text-decoration:underline"
      >
        <VBtn
          prepend-icon="tabler-plus"
          variant="plain"
          style="text-decoration:underline"
        >
          Add
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VTimeline
        side="end"
        align="start"
        truncate-line="both"
        density="compact"
        class="v-timeline-density-compact"
      >
        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap mb-1">
            <span class="app-timeline-title">
              Client Meeting
            </span>
            <span class="app-timeline-meta">Today</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-2">
            Project meeting with john @10:15am
          </p>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">
              Create a new project for client
            </span>
            <span class="app-timeline-meta">2 Day Ago</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-1">
            Add files to new design folder
          </p>
        </VTimelineItem>

        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">
              Shared 2 New Project Files
            </span>
            <span class="app-timeline-meta">6 Day Ago</span>
          </div>

          <!-- 👉 Content -->
          <div class="d-flex align-center">
            <p class="mb-1 app-timeline-text me-2">
              Sent by Mollie Dixon
            </p>
          </div>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
