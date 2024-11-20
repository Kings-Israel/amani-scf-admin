<script lang="ts" setup>
import Document from '@/views/documents/Document.vue'

definePage({
  alias: 'documents',
  meta: {
    layout: 'blank',
    public: true,
    unauthenticatedOnly: true,
  },
})

const isSuccessful = ref(false)
const isSubmitted = ref(false)

interface FileData {
  file: File
  url: string
}

const files = ref<FileData[]>([])
const documents = ref<string[] | null>(null)

const currentStep = ref(0)

interface RouteParams {
  uuid?: number
}

const route = useRoute()
const router = useRouter()
const uuid: Ref<number | undefined> = ref((route.params as RouteParams).uuid)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const success = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const fetchDocuments = async () => {
  try {
    const res = await $api(`/get/uuid/document/${uuid.value}`, {
      method: 'GET',
      params: uuid.value?.toString,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { data } = res

    console.log(data)
    documents.value = data.documents.split(',').map((item: string) => item.trim())
  }
  catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchDocuments()
})

const createDealSteps = [
  {
    title: 'Documents',
    subtitle: 'List of Required Documents',
    icon: 'tabler-users',
  },
]

const handleFileDataUpdate = (newFileData: FileData) => {
  files.value.push(newFileData)
}

const handleFileRemove = (fileToRemove: FileData) => {
  console.log('File to remove', fileToRemove)
  console.log('Files before removing', files.value)

  files.value = files.value.filter(
    file => file.file.name !== fileToRemove.file.name
      || file.file.lastModified !== fileToRemove.file.lastModified,
  )

  console.log('Files after removing', files.value)
}

const submit = async () => {
  const formData = new FormData()

  if (uuid.value !== undefined)
    formData.append('uuid', uuid.value.toString())

  files.value.forEach((fileData, index) => {
    formData.append(`files[${index}]`, fileData.file)
  })
  isSubmitted.value = true
  try {
    const res = await $api('/post/uuid/document', {
      method: 'POST',
      body: formData,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { message } = res

    isSuccessful.value = true
    success.value.message = message
  }
  catch (error) {
    console.error(error)
  }
  await nextTick(() => {
    router.push('/documents/uploaded')
  })
}
</script>

<template>
  <!-- tonal snackbar -->
  <VSnackbar
    v-model="isSuccessful"
    color="success"
    location="top end"
    variant="flat"
  >
    {{ success.message }}
  </VSnackbar>
  <VCard>
    <VRow no-gutters>
      <VCol
        :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
        cols="12"
        lg="3"
        md="4"
      >
        <VCardText>
          <AppStepper
            v-model:current-step="currentStep"
            :items="createDealSteps"
            class="stepper-icon-step-bg"
            direction="vertical"
            icon-size="24"
          />
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        lg="9"
        md="8"
      >
        <VCardText>
          <VWindow
            v-model="currentStep"
            class="disable-tab-transition"
          >
            <VWindowItem v-if="documents">
              <template
                v-for="(item, key) in documents"
                :key="key"
              >
                <Document
                  :document="item"
                  @change="handleFileRemove"
                  @update:file-data="handleFileDataUpdate"
                />
              </template>
            </VWindowItem>
            <VWindowItem v-else>
              Error
            </VWindowItem>
          </VWindow>
        </VCardText>
        <VCol>
          <VContainer>
            <VCard class="p-2 m-5">
              <VCol>
                <VCol
                  class="d-flex gap-4 align-items-end"
                  cols="12"
                >
                  <div v-if="isSubmitted">
                    <VProgressCircular
                      color="primary"
                      indeterminate
                    />
                  </div>
                  <div v-else>
                    <VBtn
                      type="submit"
                      @click="submit"
                    >
                      submit
                    </VBtn>
                  </div>
                </VCol>
              </VCol>
            </VCard>
          </VContainer>
        </VCol>
      </VCol>
    </VRow>
  </VCard>
</template>
