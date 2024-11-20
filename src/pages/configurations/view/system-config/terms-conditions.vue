<script lang="ts" setup>
interface Emit {
  (e: 'update:terms_and_conditions', value: string): void
  (e: 'update:terms_and_conditions_companies', value: string): void
  (e: 'update:terms_and_conditions_vendors', value: string): void
}

interface Props {
  terms_and_conditions: string
  terms_and_conditions_companies: string
  terms_and_conditions_vendors: string
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const formData = ref({
  terms_and_conditions: ref(props.terms_and_conditions),
  terms_and_conditions_companies: ref(props.terms_and_conditions_companies),
  terms_and_conditions_vendors: ref(props.terms_and_conditions_vendors),
})

watch(() => formData.value.terms_and_conditions, newValue => emit('update:terms_and_conditions', newValue))
watch(() => formData.value.terms_and_conditions_companies, newValue => emit('update:terms_and_conditions_companies', newValue))
watch(() => formData.value.terms_and_conditions_vendors, newValue => emit('update:terms_and_conditions_vendors', newValue))
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <p>Terms and Conditions</p>
      <TiptapEditor
        v-model="formData.terms_and_conditions"
        class="border rounded basic-editor"
      />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <p>Terms and Conditions for Companies</p>
      <TiptapEditor
        v-model="formData.terms_and_conditions_companies"
        class="border rounded basic-editor"
      />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <p>Terms and Conditions for Vendors</p>
      <TiptapEditor
        v-model="formData.terms_and_conditions_vendors"
        class="border rounded basic-editor"
      />
    </VCol>
  </VRow>
</template>
