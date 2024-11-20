<script lang="ts" setup>

interface Emit {
  (e: 'update:header', value: string): void
  (e: 'update:footer', value: string): void
  (e: 'update:signature', value: string): void
}

interface Props {
  header: string
  footer: string
  signature: string
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const formData = ref({
  header: ref(props.header),
  footer: ref(props.footer),
  signature: ref(props.signature),
})

watch(() => formData.value.header, (newValue) => emit('update:header', newValue))
watch(() => formData.value.footer, (newValue) => emit('update:footer', newValue))
watch(() => formData.value.signature, (newValue) => emit('update:signature', newValue))

const onSubmit = () => {
  console.log(formData.value)
}
</script>

<template>
<VRow>
  <VCol cols="12">
    <h6 class="text-h6 font-weight-medium">
      Header Footer
    </h6>
    <p class="mb-0">
      Enter your header, footer & signature
    </p>
  </VCol>

  <VCol
    cols="12"
    md="12"
  >
  <p>Header</p>
    <TiptapEditor
      v-model="formData.header"
      class="border rounded basic-editor"
    />
  </VCol>

  <VCol
    cols="12"
    md="12"
  >
  <p>Footer</p>
    <TiptapEditor
      v-model="formData.footer"
      class="border rounded basic-editor"
    />
  </VCol>

  <VCol
    cols="12"
    md="12"
  >
  <p>Signature</p>
    <TiptapEditor
      v-model="formData.signature"
      class="border rounded basic-editor"
    />
  </VCol>
</VRow>
</template>
