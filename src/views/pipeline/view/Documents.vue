<script lang="ts" setup>

definePage({
  meta: {
    navActiveLink: 'lead-pipeline-new',
    key: 'tab',
    action: 'manage',
    subject: 'Add Contact',
  },
})

interface Props {
  id: string
}

interface Document {
  id: number
  type: string
  status: string
  createdAt: Date
  path: string
  originalName: string
}

const props = defineProps<Props>()
const documents = ref<Document[]>([])

const fetchAboutData = async () => {
  console.log('email', props.id)

  const res = await $api<Document[]>(`/compliance/uuid/documents/${props.id}`).catch(err => console.log(err))

  documents.value = res.data
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'pending')
    return { text: 'Pending Approval', color: 'warning' }

  if (statusMsg === 'approved')
    return { text: 'Approved', color: 'success' }

  return { text: 'Rejected', color: 'error' }
}

onMounted(() => {
  fetchAboutData()
})
</script>

<template>
  <VCard>
    <VCardItem>
      <template #prepend>
        <VIcon icon="tabler-timeline" />
      </template>

      <VCardTitle>Compliance Documents</VCardTitle>
    </VCardItem>

    <div v-if="documents.length > 0">
      <VCardText>
        <VTimeline
          align="start"
          class="v-timeline-density-compact"
          density="compact"
          truncate-line="both"
        >
          <VTimelineItem
            v-for="item in documents"
            :key="item.id"
            dot-color="info"
            size="x-small"
          >
            <div class="d-flex justify-space-between align-center flex-wrap">
              <span class="app-timeline-title">
                Project Files
              </span>
              <span class="app-timeline-meta">Send on {{ item.createdAt }}</span>
            </div>
            <p class="app-timeline-text mb-0">
              <strong>Status:</strong>
              <VChip
                density="default"
                label
                v-bind="resolveStatus(item.status)"
              />
            </p>
            <div class="d-flex align-center mt-3">
              <VIcon
                class="me-2"
                color="warning"
                icon="tabler-file-text"
                size="20"
              />
              <h6 class="font-weight-medium text-xs me-3">
                {{ item.originalName }}
              </h6>
              <VIcon
                class="me-2"
                color="success"
                icon="tabler-table"
                size="20"
              />
              <h6 class="font-weight-medium text-xs">
                <a
                  :href="item.path"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  link
                </a>
              </h6>
            </div>
          </VTimelineItem>
        </VTimeline>
      </VCardText>
    </div>
    <div v-else>
      <VCardText>
        <VTimeline
          align="start"
          class="v-timeline-density-compact"
          density="compact"
          truncate-line="both"
        >
          <VTimelineItem
            dot-color="info"
            size="x-small"
          >
            <div class="d-flex justify-space-between align-center flex-wrap">
              <span class="app-timeline-title">
                No Documents Uploaded
              </span>
              <span class="app-timeline-meta">{{ new Date().toLocaleDateString() }}</span>
            </div>
            <p class="app-timeline-text mb-0">
              <strong>Status:</strong>
              <VChip
                density="default"
                label
                v-bind="resolveStatus('error')"
              />
            </p>
            <div class="d-flex align-center mt-3">
              <VIcon
                class="me-2"
                color="warning"
                icon="tabler-file-text"
                size="20"
              />
              <h6 class="font-weight-medium text-xs me-3">
                No Documents Uploaded
              </h6>

              <VIcon
                class="me-2"
                color="success"
                icon="tabler-table"
                size="20"
              />
              <h6 class="font-weight-medium text-xs">
                No File
              </h6>
            </div>
          </VTimelineItem>
        </VTimeline>
      </VCardText>
    </div>
  </VCard>
</template>
