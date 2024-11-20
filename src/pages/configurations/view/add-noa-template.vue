<script lang="ts" setup>

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage NOA Templates',
  },
})

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const router = useRouter()

interface Emit {
  (e: 'update:name', value: string): void
  (e: 'update:subject', value: string): void
  (e: 'update:product_type', value: string): void
  (e: 'update:body', value: string): void
  (e: 'update:status', value: string): void
}
interface Props {
  name: string
  product_type: string
  body: string
  status: string
}

const formData = ref({
  name: ref(props.name),
  product_type: ref(props.product_type),
  body: ref(props.body),
  status: ref(props.status),
})

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const product_type = ref([
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Generic', value: 'generic' },
])

const onSubmit = async () => {
  await $api('/UI/configurations/noa-template', {
    method: 'POST',
    body: formData.value,
  })
  setTimeout(async () =>
    await nextTick(() => {
      router.push('/configurations/noa-templates')
    }),
  3000,
  )
}
</script>

<template>
  <VCard>
    <VCardItem>
      <VRow>
        <VCol cols="12">
          <h6 class="text-h6 font-weight-medium">
            Noa Template Details
          </h6>
          <p class="mb-0">
            Enter NOA Template Details
          </p>
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <AppTextField
            v-model="formData.name"
            placeholder="Template Name"
            label="Template Name"
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <AppSelect
            v-model="formData.product_type"
            :items="product_type"
            class="me-1"
            clear-icon="tabler-x"
            clearable
            label="Product Type"
            placeholder="Product Type"
          />
        </VCol>
        <VCol
          cols="12"
          md="12"
        >
          <p>Content</p>
          <TiptapEditor
            v-model="formData.body"
            class="border rounded basic-editor"
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <AppSelect
            v-model="formData.status"
            :items="status"
            class="me-1"
            clear-icon="tabler-x"
            clearable
            placeholder="Status"
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <AppTextField
            value="date,buyerName,anchorName,company,anchorCompanyUniqueID,time,agreementDate,contract,anchorAccountName,anchorAccountNumber,anchorCustomerId,anchorBranch,anchorIFSCCode,anchorAddress,penalnterestRate,sellerName"
            disabled
            label="Variables"
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <VBtn
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>
        </VCol>
      </VRow>
    </VCardItem>
  </VCard>
</template>
