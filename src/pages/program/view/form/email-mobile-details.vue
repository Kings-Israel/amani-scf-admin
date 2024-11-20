<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'update:anchorDetails', value: []): void
  (e: 'update:bankUserDetails', value: []): void
}

interface Props {
  programsdata: []
  anchorDetails: [any]
  bankUserDetails: [any]
}

const anchorDetails = props.anchorDetails

const bankUserDetails = props.bankUserDetails

for (const anchor of props.programsdata.anchor_details) {
  anchorDetails.push({
    phone_number: anchor.phone_number,
    email: anchor.email,
  })
}

for (const bankuser of props.programsdata.bank_user_details) {
  bankUserDetails.push({
    name: bankuser.name,
    phone_number: bankuser.phone_number,
    email: bankuser.email,
  })
}

const formData = ref({
  anchorEmailId: '',
  anchorMobileNo: '',
  bankUserName: '',
  bankEmail: '',
  bankUserMobileNo: '',
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h6 class="text-h6 font-weight-medium">
        Account Details
      </h6>
      <p class="mb-0">
        Enter your Account Details
      </p>
    </VCol>
    <template
      v-for="(anchor, index) in anchorDetails"
      :key="index"
    >
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="anchor.email"
          placeholder="Anchor Email ID"
          label="Anchor Email ID"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="anchor.phone_number"
          placeholder="Anchor Mobile No"
          label="Anchor Mobile No"
        />
      </VCol>
    </template>
    <template
      v-for="(bankuser, index) in bankUserDetails"
      :key="index"
    >
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bankuser.name"
          placeholder="Bank User Name"
          label="Bank User Name"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bankuser.email"
          placeholder="Bank Email"
          label="Bank Email"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="bankuser.phone_number"
          placeholder="Bank User Mobile No"
          label="Bank User Mobile No"
        />
      </VCol>
    </template>
  </VRow>
</template>
