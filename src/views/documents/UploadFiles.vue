<script setup lang="ts">
const props = defineProps<Props>()
const emit = defineEmits(['update:fileData'])
const dropZoneRef = ref<HTMLDivElement>()
interface FileData {
  file: File
  url: string
}
interface Props {
  document: string
}
const document = ref(props.document)

const fileData = ref<FileData[]>([])
const date = ref('D/M/YYYY')
const { open, onChange } = useFileDialog({ accept: 'application/pdf' })
function onDrop(DroppedFiles: File[] | null) {
  if (DroppedFiles) {
    const newFileData = [...fileData.value]

    // ... your existing code to push to newFileData instead of fileData.value
    updateFileData(newFileData)
  }
  DroppedFiles?.forEach(file => {
    if (file.type.slice(0, 6) !== 'image/') {
      // eslint-disable-next-line no-alert
      alert('Only image files are allowed')

      return
    }

    fileData.value.push({
      file,
      url: useObjectUrl(file).value ?? '',
    })
  },
  )
}

onChange(selectedFiles => {
  if (!selectedFiles)
    return

  for (const file of selectedFiles) {
    fileData.value.push({
      file,
      url: useObjectUrl(file).value ?? '',
    })
  }
  updateFileData(fileData.value)
})

useDropZone(dropZoneRef, onDrop)
function updateFileData(newFileData: FileData[]) {
  fileData.value = newFileData
  console.log(newFileData[0].file)

  const data = {
    url: newFileData[0].url,
    file: newFileData[0].file,
  }

  emit('update:fileData', data)
}
</script>

<template>
  <VRow>
    <VCol cols="6">
      <AppTextField
        v-model="document"
        :rules="[requiredValidator]"
        :label="document"
        :placeholder="document"
        required
      />
    </VCol>
    <VCol cols="6">
      <AppTextField
        v-model="date"
        :rules="[requiredValidator]"
        label="Date"
        placeholder="20/3/2020"
        required
      />
    </VCol>
  </VRow>
  <VRow>
    <VRow>
      <VCol class="cols-12">
        <!-- 👉 Media -->
        <VCard class="mb-6">
          <VCardItem>
            <template #title>
              Media
            </template>
            <template #append>
              <span class="text-primary font-weight-medium text-sm cursor-pointer">Add Media from URL</span>
            </template>
          </VCardItem>

          <VCardText>
            <div class="flex">
              <div class="w-full h-auto relative">
                <div
                  ref="dropZoneRef"
                  class="cursor-pointer"
                  @click="() => open()"
                >
                  <div
                    v-if="fileData.length === 0"
                    class="d-flex flex-column justify-center align-center gap-y-3 px-6 py-10 border-dashed drop-zone"
                  >
                    <IconBtn
                      variant="tonal"
                      class="rounded-sm"
                    >
                      <VIcon icon="tabler-upload" />
                    </IconBtn>
                    <div class="text-base text-high-emphasis font-weight-medium">
                      Drag and Drop Your Image Here.
                    </div>
                    <span class="text-disabled">or</span>

                    <VBtn variant="tonal">
                      Browse Images
                    </VBtn>
                  </div>

                  <div
                    v-else
                    class="d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                  >
                    <VRow class="match-height w-100">
                      <template
                        v-for="(item, index) in fileData"
                        :key="index"
                      >
                        <VCol
                          cols="12"
                          sm="4"
                        >
                          <VCard
                            :ripple="false"
                            border
                          >
                            <VCardText
                              class="d-flex flex-column"
                              @click.stop
                            >
                              <VImg
                                :src="item.url"
                                width="200px"
                                height="150px"
                                class="w-100 mx-auto"
                              />
                              <div class="mt-2">
                                <span class="clamp-text text-wrap">
                                  {{ item.file.name }}
                                </span>
                                <span>
                                  {{ item.file.size / 1000 }} KB
                                </span>
                              </div>
                            </VCardText>
                            <VSpacer />
                            <VCardActions>
                              <VBtn
                                variant="outlined"
                                block
                                @click.stop="fileData.splice(index, 1)"
                              >
                                Remove File
                              </VBtn>
                            </VCardActions>
                          </VCard>
                        </VCol>
                      </template>
                    </VRow>
                  </div>
                </div>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VRow>
</template>
