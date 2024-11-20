<script lang="ts" setup>
import type { Opportunity } from '@/views/pipeline/view'
import About from '@/views/pipeline/view/About.vue'
import Documents from '@/views/pipeline/view/Documents.vue'


definePage({
  meta: {
    navActiveLink: 'lead-pipeline-new',
    key: 'tab',
    action: 'manage',
    subject: 'Add Contact',
  },
})

const router = useRoute('pipeline-view-id')
const profileTabData = ref<Opportunity[]>([])
const userID = ref(router.params.id)

const fetchAboutData = async () => {
  profileTabData.value = await $api(`/get/UI/pipeline/${userID.value}`).catch(err => console.log(err))
}

console.log(profileTabData.value)

onMounted(() => {
  fetchAboutData()
})
watch(router, fetchAboutData, { immediate: true })
</script>

<template>
  <VRow v-if="profileTabData">
    <VCol
      cols="12"
      md="4"
    >
      <About :data="profileTabData" />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <VRow>
        <VCol cols="12">
          <Documents :id="router.params.id" />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <!-- <Connection :connections-data="profileTabData.connections" /> -->
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <!-- <Teams :teams-data="profileTabData.teamsTech" /> -->
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
