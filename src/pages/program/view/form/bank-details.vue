<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'update:banksAsPerBank', value: []): void
}

interface Props {
  programsdata: []
  banksAsPerBank: [any]
}

const bankDetails = props.banksAsPerBank

for (const bank of props.programsdata.bank_details) {
  bankDetails.push({
    name_as_per_bank: bank.name_as_per_bank,
    account_number: bank.account_number,
    bank_name: bank.bank_name,
    branch: bank.branch,
    swift_code: bank.swift_code,
    account_type: bank.account_type,
  })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h6 class="text-h6 font-weight-medium">
        Bank Details
      </h6>
      <p class="mb-0">
        Edit Bank Details
      </p>
    </VCol>
    <template
      v-for="(bank, index) in bankDetails"
      :key="index"
    >
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bank.name_as_per_bank"
          placeholder="Name as per Bank"
          label="Name as per Bank"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bank.account_number"
          placeholder="Account No"
          label="Account No"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bank.bank_name"
          placeholder="Bank Name"
          label="Bank Name"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bank.branch"
          placeholder="Branch"
          label="Branch"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bank.swift_code"
          placeholder="SWIFT Code"
          label="SWIFT Code"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bank.account_type"
          placeholder="Account Type"
          label="Account Type"
        />
      </VCol>
    </template>
  </VRow>
</template>
