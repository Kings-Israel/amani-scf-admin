<script lang="ts" setup>
interface Emit {
  (e: 'update:bank_user_manual', value: File): void
  (e: 'update:anchor_user_manual', value: File): void
  (e: 'update:vendor_user_manual', value: File): void
  (e: 'update:dealer_user_manual', value: File): void
}

interface Props {
  bank_user_manual: File
  anchor_user_manual: File
  vendor_user_manual: File
  dealer_user_manual: File
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const formData = ref({
  bank_user_manual: ref(props.bank_user_manual),
  anchor_user_manual: ref(props.anchor_user_manual),
  vendor_user_manual: ref(props.vendor_user_manual),
  dealer_user_manual: ref(props.dealer_user_manual),
})

watch(() => formData.value.bank_user_manual, newValue => emit('update:bank_user_manual', newValue))
watch(() => formData.value.anchor_user_manual, newValue => emit('update:anchor_user_manual', newValue))
watch(() => formData.value.vendor_user_manual, newValue => emit('update:vendor_user_manual', newValue))
watch(() => formData.value.dealer_user_manual, newValue => emit('update:dealer_user_manual', newValue))
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <p>Bank User Manual</p>
      <VFileInput
        v-model="formData.bank_user_manual"
        label="Upload file..."
      />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <p>Anchor User Manual</p>
      <VFileInput
        v-model="formData.anchor_user_manual"
        label="Upload file..."
      />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <p>Vendor User Manual</p>
      <VFileInput
        v-model="formData.vendor_user_manual"
        label="Upload file..."
      />
    </VCol>
    <VCol
      cols="12"
      md="12"
    >
      <p>Dealer User Manual</p>
      <VFileInput
        v-model="formData.dealer_user_manual"
        label="Upload file..."
      />
    </VCol>
  </VRow>
</template>
