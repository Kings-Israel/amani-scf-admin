<script lang="ts" setup>
import type { User } from '@core/types'

const props = defineProps<Props>()


const emit = defineEmits<{
  (e: 'changeLoading', isLoading: true): void
}>()

interface Props {
  pipeline: string
  bank: number
}

interface Url {
  url?: string
}

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-Leads',
    key: 'tab',
    action: 'manage',
    subject: 'Convert to Opportunity',
  },
})

const urlLink = ref<Url>()
const isLinkGenerated = ref(true)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const userData = useCookie<User>('userData')
const userName = ref<string>(userData.value.name)
const router = useRouter()

const opportunityDetails = {
  stage: 'Opportunity',
  product: 'Vendor Financing',
  industry: 'ICT',
  tatDays: 0,
  priority: 'High',
  status: 'Converted',
  source: 'Email',
  customerType: 'Vendor',
  branch: 'None',
  email: 'Email',
  owner: userName,
  associatedUsers: '',
}

const opportunityDetailsLocal = ref(structuredClone(opportunityDetails))

const statusItems = [
  'Converted',
  'Moved to SCF',
  'Contact us in 2 -3 months',
  'Contact us Later',
  'Agreement Signing',
  'Assign Financier',
  'Document Collection',
  'Future Opportunities',
  'In discussion',
  'Lost',
  'Not Interested',
]

const campaignItems = [
  'Email',
  'Marketing',
  'Outdoor',
  'LinkedIn',
  'Messages',
  'Google',
  'Adverts',
]

const bankID = toRef(() => props.bank)
const pipelineID = toRef(() => props.pipeline)

const generateLink = async () => {
  emit('changeLoading', true)
  try {
    const res = await $api('/generate/documents/link', {
      method: 'POST',
      body: {
        bank: bankID.value,
        pipeline: pipelineID.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { url } = res

    urlLink.value = url
    isLinkGenerated.value = false
  }
  catch (error) {
    console.error(error)
  }
}

const navigateToOpportunityTab = async (tabName: string) => {
  await nextTick()
  await router.push(`/pipeline/opportunity/${tabName}`)
}

const convertToOpportunity = async () => {
  try {
    const res = await $api(`/store/UI/pipeline/opportunity/data/${props.pipeline}`, {
      method: 'POST',
      body: opportunityDetailsLocal.value,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    console.log(res)

    const { message } = res

    console.log(message)
    await navigateToOpportunityTab('Opportunity')
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <VForm @submit.prevent="() => {}">
      <VContainer>
        <VCard class="p-2 m-5">
          <VCol>
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="opportunityDetailsLocal.product"
                  :items="['Vendor Financing', 'Dealer Financing', 'Reverse Factor']"
                  :rules="[requiredValidator]"
                  label="Product"
                  placeholder="Select Item"
                />
              </VCol>
              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="opportunityDetailsLocal.priority"
                  :items="['High', 'Medium', 'Low']"
                  :rules="[requiredValidator]"
                  label="Priority"
                  placeholder="Select Item"
                />
              </VCol>
              <!-- 👉 City -->
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="opportunityDetailsLocal.status"
                  :items="statusItems"
                  :rules="[requiredValidator]"
                  label="Status"
                  placeholder="Select Item"
                />
              </VCol>
              <!-- 👉 Country -->
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="opportunityDetailsLocal.customerType"
                  :items="['Vendor', 'Buyer', 'Anchor']"
                  :rules="[requiredValidator]"
                  label="Customer Type"
                  placeholder="Select Item"
                />
              </VCol>
              <!-- 👉 Company -->
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="opportunityDetailsLocal.source"
                  :items="campaignItems"
                  :rules="[requiredValidator]"
                  label="Source"
                  placeholder="Select Item"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="opportunityDetailsLocal.industry"
                  :items="['ICT', 'Bank', 'Others']"
                  :rules="[requiredValidator]"
                  label="Industry"
                  placeholder="Select Item"
                />
              </VCol>
            </VRow>
          </VCol>
        </VCard>
      </VContainer>
      <VContainer>
        <VCard class="p-2 m-5">
          <VCol>
            <VCol
              class="d-flex gap-4 align-items-end"
              cols="12"
            >
              <VBtn
                color="primary"
                type="submit"
                variant="tonal"
                @click="generateLink"
              >
                Generate Link
              </VBtn>
              <VBtn
                :disabled="isLinkGenerated"
                type="submit"
                @click="convertToOpportunity"
              >
                Convert to Opportunity
              </VBtn>
              <VBtn
                color="secondary"
                type="reset"
                variant="tonal"
              >
                Reset
              </VBtn>
            </VCol>
          </VCol>
        </VCard>
      </VContainer>
    </VForm>
    <template v-if="urlLink">
      <div class="d-flex align-center gap-x-2">
        <div class="d-flex flex-column">
          <a
            :href="urlLink.toString()"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              :style="{ color: `${$vuetify.theme.global.current.colors.primary}` }"
              class="text-body-1 font-weight-medium"
            >{{ urlLink }}</span>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.drop-zone {
  border: 2px dashed rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 6px;
}
</style>

<style lang="scss">
.ProseMirror {
  p {
    margin-block-end: 0;
  }

  padding: 0.5rem;
  outline: none;
}
</style>
