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
  name: string
  subject: string
  product_type: string
  body: string
  status: string
}

const formData = ref({
  name: ref(props.name),
  subject: ref(props.subject),
  product_type: ref(props.product_type),
  body: ref(props.body),
  status: ref(props.status),
})

watch(() => formData.value.name, newValue => emit('update:name', newValue))
watch(() => formData.value.subject, newValue => emit('update:subject', newValue))
watch(() => formData.value.product_type, newValue => emit('update:product_type', newValue))
watch(() => formData.value.body, newValue => emit('update:body', newValue))
watch(() => formData.value.status, newValue => emit('update:status', newValue))

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'Inactive', value: 'inactive' },
])

const productType = ref([
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Factoring', value: 'factoring' },
])
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h6 class="text-h6 font-weight-medium">
        Template Details
      </h6>
      <p class="mb-0">
        Enter your Template Details
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
      <AppTextField
        v-model="formData.subject"
        placeholder="Mail Subject"
        label="Subject"
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
      <p>Email Body</p>
      <TiptapEditor
        v-model="formData.body"
        class="border rounded basic-editor"
      />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <p><b>Note:</b> You can use the following variables only {symbol},{ amount},{ invoice_number},{ date},{ loan_amount},{ due_date}</p>
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
        label="Status"
        placeholder="Status"
      />
    </VCol>
  </VRow>
</template>
