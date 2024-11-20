<script lang="ts" setup>
import type { BankDocument, Company, RouteParams } from '../index'
import ActivityTimeline from '@/views/pipeline/opportunity/ActivityTimeline.vue'
import CompanyDetails from '@/views/pipeline/opportunity/CompanyDetails.vue'
import Documents from '@/views/pipeline/opportunity/Documents.vue'
import OtherDetails from '@/views/pipeline/opportunity/OtherDetails.vue'
import Remarks from '@/views/pipeline/opportunity/Remarks.vue'

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-Leads',
    key: 'tab',
    action: 'manage',
    subject: 'Convert to Opportunity',
  },
})


interface ApiResponse<T> {
  data: T
}

const isDialogVisible = ref(false)
const isLinkGenerated = ref(false)
const companyDetail = ref<Company>()
const route = useRoute()
const pipeline = ref<string | undefined>((route.params as RouteParams).id)
const { data: pipelineData, execute: fetchData } = await useApi<any>(createUrl('/details/UI/bank/documents'))
const bankDocuments: Ref<BankDocument[]> = computed(() => pipelineData.value.data)

interface Mapped {
  name: string
  bank_id: number
}

const mappedDocuments = computed<Mapped[]>(() => {
  return pipelineData.value.data.map((doc: BankDocument) => ({
    name: doc.name,
    bank_id: doc.id,
  }))
})

const selectedOption = ref({
  name: mappedDocuments.value[0].name,
  bank_id: mappedDocuments.value[0].bank_id,
})

fetchData()
onBeforeMount(() => fetchData())

const { data, error } = await useApi<ApiResponse<Company>>(`/company/detail/${pipeline.value}`)

const setDialog = (state: boolean) => {
  isDialogVisible.value = state
}

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
    isLinkGenerated.value = true
  }, 4000)
})

if (error.value)
  console.log(error.value)
else if (data.value)
  companyDetail.value = data.value.data
</script>

<template>
  <VSnackbar
    v-model="isLinkGenerated"
    color="success"
    location="top end"
    variant="flat"
  >
    Link Successfully generated.
  </VSnackbar>
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Generating link
        <VProgressLinear
          :height="8"
          class="mb-0 mt-4"
          color="white"
          indeterminate
        />
      </VCardText>
    </VCard>
  </VDialog>
  <VContainer>
    <VRow class="d-flex">
      <VCol
        v-if="companyDetail"
        cols="4"
        lg="4"
        md="5"
      >
        <CompanyDetails :company-detail="companyDetail" />
      </VCol>
      <VCol>
        <VRow>
          <VCol>
            <!-- Activity Component -->
            <ActivityTimeline />
          </VCol>
          <VCol>
            <!-- Remarks Component -->
            <Remarks />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <AppSelect
              v-model="selectedOption"
              :items="mappedDocuments"
              item-title="name"
              item-value="bank_id"
              label="Select Bank"
              placeholder="Select Bank"
              return-object
              single-line
              @change="fetchData"
            />
          </VCol>
          <VContainer>
            <Documents
              :bank="selectedOption.bank_id"
              :documents="bankDocuments"
              :name="selectedOption.name"
            />
          </VContainer>
          <OtherDetails
            v-if="pipeline"
            :bank="selectedOption.bank_id"
            :pipeline="pipeline"
            @change-loading="setDialog"
          />
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>
