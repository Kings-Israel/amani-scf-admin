<script lang="ts" setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { ref, nextTick, computed } from 'vue';
import { useRouter } from 'vue-router';

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Terms and Conditions',
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
  (e: 'update:section', value: string): void
}
interface Props {
  name: string
  product_type: string
  body: string
  section: string
}

const formData = ref({
  name: ref(props.name),
  product_type: ref(props.product_type),
  body: ref(props.body),
  section: ref(props.section),
})

const section = ref([
  { title: 'Admin', value: 'admin' },
  { title: 'Crm', value: 'crm' },
  { title: 'Bank', value: 'bank' },
  { title: 'Vendor', value: 'vendor' },
  { title: 'Anchor', value: 'anchor' },
])

const product_type = ref([
  { title: 'Vendor Financing', value: 'vendor_financing' },
  { title: 'Dealer Financing', value: 'dealer_financing' },
  { title: 'Factoring', value: 'factoring' },
])

const isLoading = ref(false)

// Computed property to determine if product type should be visible
const showProductType = computed(() => {
  // Hide product type for Admin, Bank, and Crm sections
  return !['admin', 'crm', 'bank'].includes(formData.value.section);
});

const onSubmit = async () => {
  // Validate required fields
  if (!formData.value.name || !formData.value.body || !formData.value.section) {
    toast.error('Please fill in all required fields.');
    return;
  }

  isLoading.value = true 
  try {
    await $api('/UI/configurations/add/terms-and-conditions', {
      method: 'POST',
      body: formData.value,
    })

    toast.success('Terms & Conditions added successfully!')

    setTimeout(async () => {
      await nextTick(() => {
        router.push('/configurations/terms-conditions')
      })
    }, 3000)
  } catch (error) {
    toast.error('Failed to add Terms & Conditions. Please try again.')
  } finally {
    isLoading.value = false 
  }
}
</script>

<template>
  <VCard>
    <VCardItem>
      <VRow>
        <VCol cols="12">
          <h6 class="text-h6 font-weight-medium">
            Terms & Conditions
          </h6>
          <p class="mb-0">
            Enter Terms & Conditions Details
          </p>
        </VCol>

        <VCol cols="12" md="12">
          <AppTextField
            v-model="formData.name"
            placeholder="T&C Name"
            label="T&C Name"
            :rules="[value => !!value || 'T&C Name is required']"
          />
        </VCol>

        <VCol cols="12" md="12">
          <AppSelect
            v-model="formData.section"
            :items="section"
            class="me-1"
            clear-icon="tabler-circle-x"
            clearable
            placeholder="Usage section"
            label="Section"
            :rules="[value => !!value || 'Section is required']"
          />
        </VCol>

        <!-- Conditionally render the product type field -->
        <VCol v-if="showProductType" cols="12" md="12">
          <AppSelect
            v-model="formData.product_type"
            :items="product_type"
            class="me-1"
            clear-icon="tabler-circle-x"
            clearable
            label="Product Type"
            placeholder="Product Type"
          />
        </VCol>

        <VCol cols="12" md="12">
          <p>Content</p>
          <TiptapEditor
            v-model="formData.body"
            class="border rounded basic-editor"
          />
        </VCol>

        <VCol cols="12" md="12">
          <VBtn color="success" @click="onSubmit" :disabled="isLoading">
            <template v-if="isLoading">
              <VSpinner />
            </template>
            <template v-else>
              Submit
            </template>
          </VBtn>
        </VCol>
      </VRow>
    </VCardItem>
  </VCard>
</template>
