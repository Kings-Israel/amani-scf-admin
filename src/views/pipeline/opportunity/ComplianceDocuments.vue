<script lang="ts" setup>
interface Document {
  title: string
  uploadedDate: string
  checked: boolean
}

const props = defineProps<Props>()
interface Props {
  documents: Document[]
}
console.log('Documents props ', props.documents)

// Define your documents here
const documents = ref<Document[]>(props.documents)

const openedPanels = ref<number[]>([])

// Watcher to update the checked state when panels are opened/closed
watch(openedPanels, (newVal, oldVal) => {
  // Find which panel index was added or removed
  const changedIndex = newVal.find(index => !oldVal.includes(index)) ?? oldVal.find(index => !newVal.includes(index))

  // If a panel was opened or closed, update the corresponding checkbox state
  if (changedIndex !== undefined)
    documents.value[changedIndex].checked = newVal.includes(changedIndex)
})

watch(() => props.documents, newVal => {
  documents.value = newVal
})
</script>

<template>
  <VCard title="Documents">
    <VExpansionPanels
      v-model="openedPanels"
      multiple
    >
      <VExpansionPanel
        v-for="(document, index) in documents"
        :key="index"
      >
        <VExpansionPanelTitle>
          {{ document.title }}
        </VExpansionPanelTitle>
        <VExpansionPanelText>
          Uploaded: {{ document.uploadedDate }}. YoFInvoice.
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </VCard>
</template>
