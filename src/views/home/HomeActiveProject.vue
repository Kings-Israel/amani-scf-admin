<script lang="ts" setup>
import yofinvoice from '@images/logos/yofinvoice.png'

interface Status {
  Closed: string
  Contact: string
  Opportunity: string
  reject: string
}

const resolveStatus: Status = {
  Closed: 'success',
  Contact: 'info',
  Opportunity: 'primary',
  reject: 'error',
}

interface Project {
  id: number
  name: string
  stage: string
  progress: number

}

const formData = ref<Project[]>([])

const fetchData = async () => {
  const { data } = await $api('/get/UI/active/dashboard/pipeline').catch(err => console.log(err))

  formData.value = data
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <VCard
    subtitle="Pipeline"
    title="Active Projects"
  >
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="project in formData"
          :key="project.id"
        >
          <template #prepend>
            <VAvatar
              rounded
              size="34"
            >
              <VImg :src="yofinvoice" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ project.name }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ project.stage }}
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <div
                class="me-2"
                style="inline-size: 4.875rem;"
              >
                <VProgressLinear
                  :color="resolveStatus[project.stage] ?? 'error'"
                  :model-value="project.progress"
                  height="5"
                  rounded
                  rounded-bar
                />
              </div>
              <span class="text-disabled">{{ project.progress }}</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
