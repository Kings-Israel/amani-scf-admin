<script lang="ts" setup>
interface Emit {
  (e: 'update:bank_user_manual', value: File): void
  (e: 'update:factoring_user_manual', value: File): void
  (e: 'update:vendor_user_manual', value: File): void
  (e: 'update:dealer_user_manual', value: File): void
  (e: 'update:productYtype', value: object): void
}

interface Props {
  productYtype: []
  bank_user_manual: File
  factoring_user_manual: File
  vendor_user_manual: File
  dealer_user_manual: File
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const formData = ref({
  bank_user_manual: ref(props.bank_user_manual),
  factoring_user_manual: ref(props.factoring_user_manual),
  vendor_user_manual: ref(props.vendor_user_manual),
  dealer_user_manual: ref(props.dealer_user_manual),
})

watch(() => props.productYtype, newValue => emit('update:productYtype', newValue))
watch(() => formData.value.bank_user_manual, newValue => emit('update:bank_user_manual', newValue))
watch(() => formData.value.factoring_user_manual, newValue => emit('update:factoring_user_manual', newValue))
watch(() => formData.value.vendor_user_manual, newValue => emit('update:vendor_user_manual', newValue))
watch(() => formData.value.dealer_user_manual, newValue => emit('update:dealer_user_manual', newValue))

const { data: manualsData, execute: fetchManuals } = await useApi<ApiResponse | null>(createUrl('/UI/configurations/user-manuals'))

const manuals = computed(() => manualsData.value)

console.log(props.productYtype)
fetchManuals()
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <p>Bank User Manual</p>
      <div v-if="manuals.bank_user_manual">
        <a
          :href="manuals.bank_user_manual"
          target="_blank"
        >View Bank User Manual</a>
      </div>
      <VFileInput
        v-model="formData.bank_user_manual"
        label="Upload file..."
      />
    </VCol>

    <VCol
      v-if="props.productYtype.includes('factoring')"
      cols="12"
      md="12"
    >
      <p>Factoring User Manual</p>
      <div v-if="manuals.factoring_user_manual">
        <a
          :href="manuals.factoring_user_manual"
          target="_blank"
        >View Factoring User Manual</a>
      </div>
      <VFileInput
        v-model="formData.factoring_user_manual"
        label="Upload file..."
      />
    </VCol>

    <VCol
      v-if="props.productYtype.includes('vendor_financing')"
      cols="12"
      md="12"
    >
      <p>Vendor User Manual</p>
      <div v-if="manuals.vendor_user_manual">
        <a
          :href="manuals.vendor_user_manual"
          target="_blank"
        >View Vendor User Manual</a>
      </div>
      <VFileInput
        v-model="formData.vendor_user_manual"
        label="Upload file..."
      />
    </VCol>
    <VCol
      v-if="props.productYtype.includes('dealer_financing')"
      cols="12"
      md="12"
    >
      <p>Dealer User Manual</p>
      <div v-if="manuals.dealer_user_manual">
        <a
          :href="manuals.dealer_user_manual"
          target="_blank"
        >View Dealer User Manual</a>
      </div>
      <VFileInput
        v-model="formData.dealer_user_manual"
        label="Upload file..."
      />
    </VCol>
  </VRow>
</template>
