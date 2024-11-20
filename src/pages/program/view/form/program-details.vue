<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'update:anchor', value: string): void
  (e: 'update:programName', value: string): void
  (e: 'update:productType', value: string): void
  (e: 'update:productCode', value: string): void
  (e: 'update:eligibility', value: string): void
  (e: 'update:totalProgramLimit', value: string): void
  (e: 'update:programApprovalDate', value: string): void
  (e: 'update:limitExpiryDate', value: string): void
  (e: 'update:maximumLimitPerAccount', value: string): void
  (e: 'update:requestAutoFinance', value: string): void
  (e: 'update:minimumFinancingDays', value: string): void
  (e: 'update:maximumFinancingDays', value: string): void
  (e: 'update:staleInvoicePeriod', value: string): void
  (e: 'update:stopSupply', value: string): void
  (e: 'update:autoDebitAnchorForFinancedInvoices', value: string): void
  (e: 'update:autoDebitAnchorForNonFinancedInvoices', value: string): void
  (e: 'update:allowAnchorToChangeDueDate', value: string): void
  (e: 'update:maximumNoOfDaysForInvoiceDueDateExtensions', value: string): void
  (e: 'update:noOfDaysLimitForChangingInvoiceDueDate', value: string): void
  (e: 'update:defaultPaymentTerms', value: string): void
  (e: 'update:allowAnchorToChangePaymentTerms', value: string): void
  (e: 'update:recourse', value: string): void
  (e: 'update:mandatoryForInvoiceAttachment', value: string): void
  (e: 'update:dueDateCalculatedFrom', value: string): void
  (e: 'update:companyBoardResolutionAttachment', value: string): void
  (e: 'update:status', value: string): void
}

interface Props {
  anchor: string
  programName: string
  productType: string
  productCode: string
  eligibility: string
  totalProgramLimit: string
  programApprovalDate: string
  limitExpiryDate: string
  maximumLimitPerAccount: string
  requestAutoFinance: boolean
  minimumFinancingDays: string
  maximumFinancingDays: string
  staleInvoicePeriod: string
  stopSupply: string
  autoDebitAnchorForFinancedInvoices: boolean
  autoDebitAnchorForNonFinancedInvoices: boolean
  allowAnchorToChangeDueDate: boolean
  maximumNoOfDaysForInvoiceDueDateExtensions: string
  noOfDaysLimitForChangingInvoiceDueDate: string
  defaultPaymentTerms: string
  allowAnchorToChangePaymentTerms: boolean
  recourse: string
  mandatoryForInvoiceAttachment: boolean
  dueDateCalculatedFrom: string
  companyBoardResolutionAttachment: string
  status: string
}

const formData = ref({
  anchor: props.anchor,
  productType: props.productType,
  productCode: props.productCode,
  programName: props.programName,
  programCode: props.productCode,
  eligibilityPercentage: props.eligibility,
  totalProgramLimit: props.totalProgramLimit,
  programApprovalDate: props.programApprovalDate,
  limitExpiryDate: props.limitExpiryDate,
  maximumLimitPerAccount: props.maximumLimitPerAccount,
  requestAutoFinance: props.requestAutoFinance ? 1 : 0,
  minimumFinancingDays: props.minimumFinancingDays,
  maximumFinancingDays: props.maximumFinancingDays,
  staleInvoicePeriod: props.staleInvoicePeriod,
  stopSupply: props.stopSupply,
  autoDebitAnchorForFinancedInvoices: props.autoDebitAnchorForFinancedInvoices ? 1 : 0,
  autoDebitAnchorForNonFinancedInvoices: props.autoDebitAnchorForNonFinancedInvoices ? 1 : 0,
  allowAnchorToChangeDueDate: props.allowAnchorToChangeDueDate ? 1 : 0,
  maximumNoOfDaysForInvoiceDueDateExtensions: props.maximumNoOfDaysForInvoiceDueDateExtensions,
  noOfDaysLimitForChangingInvoiceDueDate: props.noOfDaysLimitForChangingInvoiceDueDate,
  defaultPaymentTerms: props.defaultPaymentTerms,
  allowAnchorToChangePaymentTerms: props.allowAnchorToChangePaymentTerms ? 1 : 0,
  recourse: props.recourse,
  mandatoryForInvoiceAttachment: props.mandatoryForInvoiceAttachment ? 1 : 0,
  dueDateCalculatedFrom: props.dueDateCalculatedFrom,
  companyBoardResolutionAttachment: props.companyBoardResolutionAttachment,
  status: props.status,
})

const activateSelections = [
  {
    name: 'Yes',
    value: 1,
  },
  {
    name: 'No',
    value: 0,
  },
]

const statuses = [
  {
    name: 'Active',
    value: 'active',
  },
  {
    name: 'Suspended',
    value: 'suspended',
  },
]

watch(() => formData.value.productType, newValue => emit('update:productType', newValue))
watch(() => formData.value.productCode, newValue => emit('update:productCode', newValue))
watch(() => formData.value.programName, newValue => emit('update:programName', newValue))
watch(() => formData.value.eligibilityPercentage, newValue => emit('update:eligibility', newValue))
watch(() => formData.value.totalProgramLimit, newValue => emit('update:totalProgramLimit', newValue))
watch(() => formData.value.programApprovalDate, newValue => emit('update:programApprovalDate', newValue))
watch(() => formData.value.limitExpiryDate, newValue => emit('update:limitExpiryDate', newValue))
watch(() => formData.value.maximumLimitPerAccount, newValue => emit('update:maximumLimitPerAccount', newValue))
watch(() => formData.value.requestAutoFinance, newValue => emit('update:requestAutoFinance', newValue))
watch(() => formData.value.minimumFinancingDays, newValue => emit('update:minimumFinancingDays', newValue))
watch(() => formData.value.maximumFinancingDays, newValue => emit('update:maximumFinancingDays', newValue))
watch(() => formData.value.staleInvoicePeriod, newValue => emit('update:staleInvoicePeriod', newValue))
watch(() => formData.value.stopSupply, newValue => emit('update:stopSupply', newValue))
watch(() => formData.value.autoDebitAnchorForFinancedInvoices, newValue => emit('update:autoDebitAnchorForFinancedInvoices', newValue))
watch(() => formData.value.autoDebitAnchorForNonFinancedInvoices, newValue => emit('update:autoDebitAnchorForNonFinancedInvoices', newValue))
watch(() => formData.value.allowAnchorToChangeDueDate, newValue => emit('update:allowAnchorToChangeDueDate', newValue))
watch(() => formData.value.maximumNoOfDaysForInvoiceDueDateExtensions, newValue => emit('update:maximumNoOfDaysForInvoiceDueDateExtensions', newValue))
watch(() => formData.value.noOfDaysLimitForChangingInvoiceDueDate, newValue => emit('update:noOfDaysLimitForChangingInvoiceDueDate', newValue))
watch(() => formData.value.defaultPaymentTerms, newValue => emit('update:defaultPaymentTerms', newValue))
watch(() => formData.value.allowAnchorToChangePaymentTerms, newValue => emit('update:allowAnchorToChangePaymentTerms', newValue))
watch(() => formData.value.recourse, newValue => emit('update:recourse', newValue))
watch(() => formData.value.mandatoryForInvoiceAttachment, newValue => emit('update:mandatoryForInvoiceAttachment', newValue))
watch(() => formData.value.dueDateCalculatedFrom, newValue => emit('update:dueDateCalculatedFrom', newValue))
watch(() => formData.value.companyBoardResolutionAttachment, newValue => emit('update:companyBoardResolutionAttachment', newValue))

const programFields = ref([
  {
    key: 'productType',
    type: 'text',
    model: 'productType',
    label: 'Product Type',
    placeholder: 'Product Type',
    readonly: true,
    rules: [],
  },
  {
    key: 'anchor',
    type: 'text',
    model: 'anchor',
    label: 'Anchor',
    placeholder: 'Anchor',
    readonly: true,
    rules: [],
  },
  {
    key: 'programName',
    type: 'text',
    model: 'programName',
    label: 'Name',
    placeholder: 'Name',
    readonly: false,
    rules: [],
  },
  {
    key: 'productCode',
    type: 'text',
    model: 'productCode',
    label: 'Product Code',
    placeholder: 'Product Code',
    readonly: true,
    rules: [],
  },
  {
    key: 'eligibilityPercentage',
    type: 'text',
    model: 'eligibilityPercentage',
    label: 'Eligibility Percentage',
    placeholder: 'Eligibility Percentage',
    readonly: false,
    rules: [],
  },
  {
    key: 'totalProgramLimit',
    type: 'text',
    model: 'totalProgramLimit',
    label: 'Total Program Limit',
    placeholder: 'Total Program Limit',
    readonly: false,
    rules: [],
  },
  {
    key: 'programApprovalDate',
    type: 'date',
    model: 'programApprovalDate',
    label: 'Program Approval Date',
    placeholder: 'Program Approval Date',
    readonly: false,
    rules: [],
  },
  {
    key: 'limitExpiryDate',
    type: 'date',
    model: 'limitExpiryDate',
    label: 'Limit Expiry Date',
    placeholder: 'Limit Expiry Date',
    readonly: false,
    rules: [],
  },
  {
    key: 'maximumLimitPerAccount',
    type: 'text',
    model: 'maximumLimitPerAccount',
    label: 'Maximum Limit Per Account',
    placeholder: 'Maximum Limit Per Account',
    readonly: false,
    rules: [],
  },
  {
    key: 'requestAutoFinance',
    type: 'select',
    items: activateSelections,
    model: 'requestAutoFinance',
    label: 'Request Auto Finance',
    placeholder: 'Request Auto Finance',
    readonly: false,
    rules: [],
  },

  // {
  //   key: 'minimumFinancingDays',
  //   type: 'text',
  //   model: 'minimumFinancingDays',
  //   label: 'Minimum Financing Days',
  //   placeholder: 'Minimum Financing Days',
  //   readonly: false,
  //   rules: [],
  // },
  // {
  //   key: 'maximumFinancingDays',
  //   type: 'text',
  //   model: 'maximumFinancingDays',
  //   label: 'Maximum Financing Days',
  //   placeholder: 'Maximum Financing Days',
  //   readonly: false,
  //   rules: [],
  // },
  {
    key: 'staleInvoicePeriod',
    type: 'text',
    model: 'staleInvoicePeriod',
    label: 'Stale Invoice Period',
    placeholder: 'Stale Invoice Period',
    readonly: false,
    rules: [],
  },
  {
    key: 'stopSupply',
    type: 'text',
    model: 'stopSupply',
    label: 'Stop Supply (Days)',
    placeholder: 'Stop Supply (Days)',
    readonly: false,
    rules: [],
  },
  {
    key: 'autoDebitAnchorForFinancedInvoices',
    type: 'select',
    items: activateSelections,
    model: 'autoDebitAnchorForFinancedInvoices',
    label: 'Auto Debit Anchor for Financed Invoices',
    placeholder: 'Auto Debit Anchor for Financed Invoices',
    readonly: false,
    rules: [],
  },
  {
    key: 'autoDebitAnchorForNonFinancedInvoices',
    type: 'select',
    items: activateSelections,
    model: 'autoDebitAnchorForNonFinancedInvoices',
    label: 'Auto Debit Anchor for Non-Financed Invoices',
    placeholder: 'Auto Debit Anchor for Non-Financed Invoices',
    readonly: false,
    rules: [],
  },
  {
    key: 'allowAnchorToChangeDueDate',
    type: 'select',
    items: activateSelections,
    model: 'allowAnchorToChangeDueDate',
    label: 'Allow Anchor to change due date',
    placeholder: 'Allow Anchor to change due date',
    readonly: false,
    rules: [],
  },
  {
    key: 'maximumNoOfDaysForInvoiceDueDateExtensions',
    type: 'text',
    model: 'maximumNoOfDaysForInvoiceDueDateExtensions',
    label: 'Maximum No. of days for Invoice Due Date Extensions',
    placeholder: 'Maximum No. of days for Invoice Due Date Extensions',
    readonly: false,
    rules: [],
  },

  {
    key: 'noOfDaysLimitForChangingInvoiceDueDate',
    type: 'text',
    model: 'noOfDaysLimitForChangingInvoiceDueDate',
    label: 'No. of Days Limit for changing Invoice Due Date',
    placeholder: 'No. of Days Limit for changing Invoice Due Date',
    readonly: false,
    rules: [],
  },
  {
    key: 'defaultPaymentTerms',
    type: 'text',
    model: 'defaultPaymentTerms',
    label: 'Default Payment Terms(Days)',
    placeholder: 'Default Payment Terms',
    readonly: false,
    rules: [],
  },
  {
    key: 'allowAnchorToChangePaymentTerms',
    type: 'select',
    items: activateSelections,
    model: 'allowAnchorToChangePaymentTerms',
    label: 'Allow Anchor to change Payment Terms',
    placeholder: 'Allow Anchor to change Payment Terms',
    readonly: false,
    rules: [],
  },
  {
    key: 'recourse',
    type: 'text',
    model: 'recourse',
    label: 'Recourse',
    placeholder: 'Recourse',
    readonly: false,
    rules: [],
  },
  {
    key: 'mandatoryForInvoiceAttachment',
    type: 'select',
    items: activateSelections,
    model: 'mandatoryForInvoiceAttachment',
    label: 'Mandatory For Invoice Attachment',
    placeholder: 'Mandatory For Invoice Attachment',
    readonly: false,
    rules: [],
  },
  {
    key: 'companyBoardResolutionAttachment',
    type: 'file',
    model: 'companyBoardResolutionAttachment',
    label: 'Company Board Resolution Attachment',
    accept: 'image/*',
    placeholder: 'Company Board Resolution Attachment',
    readonly: false,
    rules: [],
  },
  {
    key: 'status',
    type: 'select',
    items: statuses,
    model: 'status',
    label: 'Status',
    placeholder: 'Status',
    readonly: false,
    rules: [],
  },
])
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h6 class="text-h6 font-weight-medium">
        Program Details
      </h6>
      <p class="mb-0">
        Edit Program Details
      </p>
    </VCol>
    <template
      v-for="field in programFields"
      :key="field.key"
    >
      <template v-if="field.type === 'date'">
        <VCol
          cols="12"
          md="6"
        >
          <AppDateTimePicker
            v-model="formData[field.model]"
            :label="field.label"
            class="me-3"
            clear-icon="tabler-x"
            clearable
            placeholder="Select Date"
          />
        </VCol>
      </template>
      <template v-else-if="field.type === 'select'">
        <VCol
          cols="12"
          md="6"
        >
          <AppSelect
            v-model="formData[field.model]"
            :items="field.items"
            item-title="name"
            item-value="value"
            :rules="field.rules"
            :label="field.label"
            :placeholder="field.placeholder"
          />
        </VCol>
      </template>
      <template v-else-if="field.type === 'file'">
        <VCol
          cols="12"
          md="6"
        >
          <VFileInput
            v-model="formData[field.model]"
            :label="field.label"
            :accept="field.accept"
          />
        </VCol>
      </template>
      <template v-else>
        <VCol
          cols="12"
          md="6"
        >
          <AppTextField
            v-model="formData[field.model]"
            :label="field.label"
            :placeholder="field.placeholder"
            :readonly="field.readonly"
            :rules="field.rules"
          />
        </VCol>
      </template>
    </template>
  </VRow>
</template>
