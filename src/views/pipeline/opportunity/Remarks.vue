<template>
  <VCard title="Remarks">
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
      <div
        side="end"
        align="start"
        truncate-line="both"
        density="compact"
        class="v-timeline-density-compact"
      >
        <VTimelineItem size="x-small">
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

        <VTimelineItem size="x-small">
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
      </div>
    </VCardText>
  </VCard>
</template>
