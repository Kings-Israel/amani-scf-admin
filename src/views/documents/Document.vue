<script lang="ts" setup>
import { ref } from 'vue'

const prop = defineProps<Props>()
const emit = defineEmits(['update:fileData', 'change'])

interface FileData {
  file: File
  url: string
}

interface Props {
  document: string
}

const document = ref(prop.document)

const fileData = ref<FileData>()
const pdfSrc = ref<string | null>(null)
const isDialogVisible = ref(false)
const isEnabledButton = ref(true)

function previewPDF(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) {
    // eslint-disable-next-line no-alert
    alert('No file selected!')
    input.value = ''
    clearFileData()

    return
  }
  const file = input.files[0]
  if (file.type !== 'application/pdf') {
    // eslint-disable-next-line no-alert
    alert('Please select a PDF file.')
    input.value = ''
    clearFileData()

    return
  }
  if (file.size > 2500000) {
    // eslint-disable-next-line no-alert
    alert('The PDF file is too large.')
    input.value = ''
    clearFileData()

    return
  }

  isEnabledButton.value = false

  const reader = new FileReader()

  reader.onload = e => {
    if (e.target?.result) {
      pdfSrc.value = e.target.result as string

      // Construct newFileData object with correct types
      const newFileData: FileData = { file, url: e.target.result as string }

      updateFileData(newFileData)
    }
  }
  reader.readAsDataURL(file)
}

function updateFileData(newFileData: FileData) {
  fileData.value = newFileData
  console.log(newFileData.file)

  const data = {
    url: newFileData.url,
    file: newFileData.file,
  }

  emit('update:fileData', data)
}

function clearFileData() {
  emit('change', fileData.value)
}

watch(isEnabledButton, () => {
  console.log(isEnabledButton)
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h6 class="text-h6 font-weight-medium">
        {{ document }}
      </h6>
      <p class="mb-0">
        Upload the document
      </p>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VFileInput
        accept="application/pdf"
        clearable
        label="Select PDF"
        @change="previewPDF"
        @click:clear="clearFileData"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VDialog
        v-model="isDialogVisible"
        class="v-dialog-sm demo-space-x"
      >
        <!-- Dialog Activator -->
        <template #activator="{ props }">
          <VBtn
            :disabled="isEnabledButton"
            color="success"
            v-bind="props"
          >
            Preview
          </VBtn>
        </template>

        <!-- Dialog close btn -->
        <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

        <!-- Dialog Content -->
        <VCard title="File Upload">
          <VCardText>
            <iframe
              v-if="pdfSrc"
              :src="pdfSrc"
              height="500"
              style="border: none;"
              width="100%"
            />
          </VCardText>

          <VCardText class="d-flex justify-end flex-wrap gap-3">
            <VBtn
              color="success"
              variant="tonal"
              @click="isDialogVisible = false"
            >
              Agree
            </VBtn>
          </VCardText>
        </VCard>
      </VDialog>
    </VCol>
  </VRow>
</template>

<style scoped>
.v-dialog-sm .v-card {
  max-inline-size: 800px;
}
</style>
