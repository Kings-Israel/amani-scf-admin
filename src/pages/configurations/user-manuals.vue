<script lang="ts" setup>
import { toast } from 'vue3-toastify'
import { ref, computed } from 'vue'
import AnchorManual from '@/pages/configurations/components/anchor-manual.vue'
import BankManual from '@/pages/configurations/components/bank-manual.vue'
import DealerManual from '@/pages/configurations/components/dealer-manual.vue'
import VendorManual from '@/pages/configurations/components/vendor-manual.vue'
import { useRouter } from 'vue-router'
import 'vue3-toastify/dist/index.css'
import { paginationMeta } from '@api-utils/paginationMeta';

// Define props and emits
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage User Manuals',
  },
})

interface Emit {
  (e: 'update:bank_user_manual', value: File): void
  (e: 'update:factoring_user_manual', value: File): void
  (e: 'update:vendor_user_manual', value: File): void
  (e: 'update:dealer_user_manual', value: File): void
}

interface Props {
}

const isNewContactAdded = ref(false)
const errorMessage = ref<string | null>(null)

// Fetching manuals data
const { data: manualsData, execute: fetchManuals } = await useApi<ApiResponse | null>(createUrl('/UI/configurations/user-manuals'))

const manuals = computed(() => manualsData.value)
fetchManuals()

const formData = ref({
  bank_user_manual: [],
  anchor_user_manual: [],
  vendor_user_manual: [],
  dealer_user_manual: [],
})

const router = useRouter()

// Check if all files are provided
const validateForm = () => {
  const { bank_user_manual, anchor_user_manual, vendor_user_manual, dealer_user_manual } = formData.value
  if (!bank_user_manual.length || !anchor_user_manual.length || !vendor_user_manual.length || !dealer_user_manual.length) {
    errorMessage.value = 'Please upload all required files before submitting.'
    return false
  }
  return true
}

// Submit the form
const onSubmit = async () => {
  if (!validateForm()) return
  
  const data = new FormData()
  try {
    data.append('bank_user_manual', formData.value.bank_user_manual[0].file)
    data.append('anchor_user_manual', formData.value.anchor_user_manual[0].file)
    data.append('vendor_user_manual', formData.value.vendor_user_manual[0].file)
    data.append('dealer_user_manual', formData.value.dealer_user_manual[0].file)

    await $api('/UI/configurations/user-manuals', {
      method: 'POST',
      body: data,
    })
    
    await fetchManuals()
    toast.success("User Manuals Saved Successfully", {
      position: 'top-right',
      autoClose: 3000,
    })
  } catch (error) {
    errorMessage.value = 'An error occurred while uploading the user manuals. Please try again.'
  }
}

// Approve or reject manual
const approveManual = async (id) => {
  await $api(`/UI/configurations/user-manuals/${id}/approve`, { method: 'POST' })
  await fetchManuals()
}

const rejectManual = async (id) => {
  await $api(`/UI/configurations/user-manuals/${id}/reject`, { method: 'POST' })
  await fetchManuals()
}

</script>

<template>
  <VSnackbar v-model="isNewContactAdded" color="success" location="top end" variant="flat">
    User Manual Uploaded Successfully
  </VSnackbar>

  <VSnackbar v-model="errorMessage" color="error" location="top end" variant="flat">
    {{ errorMessage }}
  </VSnackbar>

  <VRow>
    <VCol cols="12" md="12">
      <VCard class="mb-6">
        <VCardItem>
          <VCardTitle class="pb-2">
            <h2>User Manuals</h2>
          </VCardTitle>
          <VCardText>
            <span 
              :class="{
                'text-success': manuals.status === 'active',
                'text-error': manuals.status === 'inactive',
                'text-warning': manuals.status === 'waiting_checker_approval'
              }"
            >
              <VChip density="default" label class="text-capitalize">
                {{ manuals.status }}
              </VChip>
            </span>
          </VCardText>
          <VCardText v-if="manuals.status === 'waiting_checker_approval' && manuals.checker_status === true">
            <VBtn color="success" @click="approveManual(manuals.id)" style="margin-right: 12px;">
              Approve
            </VBtn>
            <VBtn color="error" @click="rejectManual(manuals.id)">
              Reject
            </VBtn>
          </VCardText>
        </VCardItem>
      </VCard>
    </VCol>

    <VCol cols="12" md="3">
      <VCard class="mb-6">
        <VCardItem>
          <VCardTitle class="pb-2">Bank User Manual</VCardTitle>
          <VCardTitle v-if="manuals.length !== 0">
            <a :href="manuals.bank_user_manual" target="_blank">View Bank User Manual</a>
          </VCardTitle>
        </VCardItem>
        <VCardText>
          <BankManual v-model:bankManual="formData.bank_user_manual" />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="3">
      <VCard class="mb-6">
        <VCardItem>
          <VCardTitle class="pb-2">Anchor User Manual</VCardTitle>
          <VCardTitle v-if="manuals.length !== 0">
            <a :href="manuals.anchor_user_manual" target="_blank">View Anchor User Manual</a>
          </VCardTitle>
        </VCardItem>
        <VCardText>
          <AnchorManual v-model:anchorManual="formData.anchor_user_manual" />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="3">
      <VCard class="mb-6">
        <VCardItem>
          <VCardTitle class="pb-2">Vendor User Manual</VCardTitle>
          <VCardTitle v-if="manuals.length !== 0">
            <a :href="manuals.vendor_user_manual" target="_blank">View Vendor User Manual</a>
          </VCardTitle>
        </VCardItem>
        <VCardText>
          <VendorManual v-model:vendorManual="formData.vendor_user_manual" />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="3">
      <VCard class="mb-6">
        <VCardItem>
          <VCardTitle class="pb-2">Dealer User Manual</VCardTitle>
          <VCardTitle v-if="manuals.length !== 0">
            <a :href="manuals.dealer_user_manual" target="_blank">View Dealer User Manual</a>
          </VCardTitle>
        </VCardItem>
        <VCardText>
          <DealerManual v-model:dealerManual="formData.dealer_user_manual" />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="12">
      <VBtn color="success" @click="onSubmit">Submit</VBtn>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.drop-zone {
  border: 2px dashed rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 6px;
}

.inventory-card {
  .v-radio-group,
  .v-checkbox {
    .v-selection-control {
      align-items: start !important;

      .v-selection-control__wrapper {
        margin-block-start: -0.375rem !important;
      }
    }

    .v-label.custom-input {
      border: none !important;
    }
  }

  .v-tabs.v-tabs-pill {
    .v-slide-group-item--active.v-tab--selected.text-primary {
      h6 {
        color: #fff !important
      }
    }
  }
}

.ProseMirror {
  p {
    margin-block-end: 0;
  }

  padding: 0.5rem;
  outline: none;

  p.is-editor-empty:first-child::before {
    block-size: 0;
    color: #adb5bd;
    content: attr(data-placeholder);
    float: inline-start;
    pointer-events: none;
  }
}
</style>
