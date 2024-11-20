<script lang="ts" setup>
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
  isDialogVisible: boolean
  template?: any
}

const formData = ref({
  id: ref(props.template.id),
  name: ref(props.template.name),
  product_type: ref(props.template.product_type),
  body: ref(props.template.body),
  status: ref(props.template.status),
  is_default: ref(props.template.is_default),
})

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const productType = ref([
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Factoring', value: 'factoring' },
])

const onSubmit = async () => {
  await $api('/UI/configurations/edit/noa-template', {
    method: 'POST',
    body: formData.value,
  })
  setTimeout(async () =>
    await nextTick(() => {
      router.go(0)
    }),
  3000,
  )
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="1000"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 dialog close btn -->
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />
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
              :items="productType"
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
          <VCheckbox
            v-model="formData.is_default"
            label="Is Default"
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
  </VDialog>
</template>
