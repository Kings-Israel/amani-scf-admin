<script lang="ts" setup>
import { ref } from 'vue'

interface Document {
  id: number
  name: string
  status: string
  created_at: string
  path: string | null
}

const props = defineProps<{ documents: Document[] }>()

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'pending') return { text: 'Pending Approval', color: 'warning' }
  if (statusMsg === 'approved') return { text: 'Approved', color: 'success' }
  return { text: 'Rejected', color: 'error' }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
</script>

<template>
  <VCard>
    <VCardItem>
      <template #prepend>
        <VIcon icon="tabler-timeline" />
      </template>
      <VCardTitle>Compliance Documents</VCardTitle>
    </VCardItem>

    <div v-if="documents && documents.length > 0">
      <VCardText>
        <VTimeline align="start" class="v-timeline-density-compact" density="compact">
          <VTimelineItem
            v-for="item in documents"
            :key="item.id"
            dot-color="info"
            size="x-small"
          >
            <div class="d-flex justify-space-between align-center flex-wrap">
              <span class="app-timeline-title">{{ item.name || 'Document' }}</span>
              <span class="app-timeline-meta">Uploaded on {{ formatDate(item.created_at) }}</span>
            </div>
            <p class="app-timeline-text mb-0">
              <strong>Status:</strong>
              <VChip density="default" label v-bind="resolveStatus(item.status)" />
            </p>
            <div class="d-flex align-center mt-3">
              <VIcon class="me-2" color="warning" icon="tabler-file-text" size="20" />
              <h6 class="font-weight-medium text-xs me-3">{{ item.name }}</h6>
              <VIcon class="me-2" color="success" icon="tabler-table" size="20" />
              <h6 class="font-weight-medium text-xs">
                <a
                  v-if="item.path"
                  :href="item.path"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  link
                </a>
                <span v-else>No Link Available</span>
              </h6>
            </div>
          </VTimelineItem>
        </VTimeline>
      </VCardText>
    </div>
    <div v-else>
      <VCardText>
        <VTimeline align="start" class="v-timeline-density-compact" density="compact">
          <VTimelineItem dot-color="info" size="x-small">
            <div class="d-flex justify-space-between align-center flex-wrap">
              <span class="app-timeline-title">No Documents Uploaded</span>
              <span class="app-timeline-meta">{{ new Date().toLocaleDateString() }}</span>
            </div>
            <p class="app-timeline-text mb-0">
              <strong>Status:</strong>
              <VChip density="default" label color="error" text="No Documents" />
            </p>
          </VTimelineItem>
        </VTimeline>
      </VCardText>
    </div>
  </VCard>
</template>
