<script lang="ts" setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Program, Anchor, Buyer } from './index'
import { readableProgramProperties } from './index'

interface Props {
  program_data: Program
  anchor: Anchor
  buyer: Buyer
}

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const resolveStatusValiant = (status: string) => {
  if (status === 'active')
    return { color: 'primary', text: 'Active' }

  return { color: 'error', text: 'Inactive' }
}

const props = defineProps<Props>()
const program = toRef(props.program_data)
const anchor = toRef(props.anchor)
const buyer = toRef(props.buyer)

const DiscountHeaders: TableHeader[] = [
  { title: 'BENCHMARK RATE', key: 'benchmark_rate' },
  { title: 'BUSINESS STRATEGY SPREAD', key: 'business_strategy_spread' },
  { title: 'CREDIT SPREAD', key: 'credit_spread' },
  { title: 'TOTAL SPREAD', key: 'total_spread' },
  { title: 'TOTAL ROI', key: 'total_roi' },
  { title: 'ANCHOR DISCOUNT BEARING', key: 'anchor_discount_bearing' },
  { title: 'VENDOR DISCOUNT BEARING', key: 'vendor_discount_bearing' },
]
const BuyersHeaders: TableHeader[] = [
  { title: 'COMPANY NAME', key: 'name' },
  { title: 'COMPANY TYPE', key: 'organization_type' },
  { title: 'LIMIT', key: 'top_level_borrower_limit' },
  { title: 'UTILIZED LIMIT', key: 'is_current' },
  { title: 'PIPELINE AMOUNT', key: 'is_published' },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'success', icon: 'tabler-toggle-right', title: 'Deactivate' }
  else{
    return { color: 'error', icon: 'tabler-toggle-left', title: 'Activate' }
  }
}


</script>

<template>
<VRow v-if="props.program_data">
  <VCol v-if="props.anchor">
    <h3 class="text-h3">{{ anchor.name }} <span>Details</span></h3>
  </VCol>
  <VCard class="pa-sm-10 pa-2 w-100">
    <div>
      <VRow>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Program Type:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.program_type.name }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Program Code:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.code }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Code:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.code }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Eligibility:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.eligibility }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Invoice Margin:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.invoice_margin }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Program Limit:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.program_limit }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Maximum Limit Per Account:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.max_limit_per_account }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Request Auto Finance:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.request_auto_finance }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Stale Invoice Period:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.stale_invoice_period }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Minimum Financing Days:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.min_financing_days }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Maximum Financing Days:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.max_financing_days }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Auto Debit Anchor for Financed Invoices:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.auto_debit_anchor_financed_invoices }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Auto Debit Anchor For Non-financed Invoices:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.auto_debit_anchor_non_financed_invoices }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Maximum Days for due date extension:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.max_days_due_date_extension }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Days Limit for Due date change:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.days_limit_for_due_date_change }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Default Payment Terms:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.default_payment_terms }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Anchor can change Payment Term:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.anchor_can_change_payment_term }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Repayment Appropriation:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.repayment_appropriation }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Mandatory Invoice Attachment:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.mandatory_invoice_attachment }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Recourse:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.recourse }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Due Date Calculated From:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.due_date_calculated_from }}</h6>
          </div>
        </VCol>
        <VCol cols="12" md="4" class="d-flex justify-space-between">
          <div class="ms-4 overflow-hidden">
            <p class="my-0">Account Status:</p>
          </div>
          <div class="title">
            <h6 class="text-h6 font-weight-medium my-0">{{ program.account_status }}</h6>
          </div>
        </VCol>
      </VRow>
    </div>
  </VCard>
  <VCard class="pa-sm-5 mt-5 pa-2 w-100">
    <VCol v-if="props.anchor">
      <h5 class="text-h5">Discounts</h5>
    </VCol>
    <div>
      <VDataTableServer
        :headers="DiscountHeaders"
        :items="props.program_data.discount_details"
        class="text-no-wrap"
      >
      <template #item.benchmark_rate="{ item }">
        <p>{{ item.benchmark_rate }}<span>%</span></p>
      </template>
      <template #item.business_strategy_spread="{ item }">
        <p>{{ item.business_strategy_spread }}<span>%</span></p>
      </template>
      <template #item.credit_spread="{ item }">
        <p>{{ item.credit_spread }}<span>%</span></p>
      </template>
      <template #item.total_spread="{ item }">
        <p>{{ item.total_spread }}<span>%</span></p>
      </template>
      <template #item.total_roi="{ item }">
        <p>{{ item.total_roi }}<span>%</span></p>
      </template>
      <template #item.anchor_discount_bearing="{ item }">
        <p>{{ item.anchor_discount_bearing }}<span>%</span></p>
      </template>
      <template #item.vendor_discount_bearing="{ item }">
        <p>{{ item.vendor_discount_bearing }}<span>%</span></p>
      </template>
      </VDataTableServer>
    </div>
  </VCard>
  <!-- Fees -->
  <VCard class="pa-sm-5 mt-5 pa-2 w-100">
    <VCol v-if="props.anchor">
      <h5 class="text-h5">Fees</h5>
    </VCol>
    <div>
      <!-- <VDataTableServer
        :headers="DiscountHeaders"
        :items="props.program_data.discount_details"
        :items-length="1"
        class="text-no-wrap"
      >
      <template #item.benchmark_rate="{ item }">
        <p>{{ item.benchmark_rate }}<span>%</span></p>
      </template>
      <template #item.business_strategy_spread="{ item }">
        <p>{{ item.business_strategy_spread }}<span>%</span></p>
      </template>
      <template #item.credit_spread="{ item }">
        <p>{{ item.credit_spread }}<span>%</span></p>
      </template>
      <template #item.total_spread="{ item }">
        <p>{{ item.total_spread }}<span>%</span></p>
      </template>
      <template #item.total_roi="{ item }">
        <p>{{ item.total_roi }}<span>%</span></p>
      </template>
      <template #item.anchor_discount_bearing="{ item }">
        <p>{{ item.anchor_discount_bearing }}<span>%</span></p>
      </template>
      <template #item.vendor_discount_bearing="{ item }">
        <p>{{ item.vendor_discount_bearing }}<span>%</span></p>
      </template>
      </VDataTableServer> -->
    </div>
  </VCard>
  <!-- Anchor -->
  <VCard class="pa-sm-5 mt-5 pa-2 w-100">
    <VCol v-if="props.anchor">
      <h5 class="text-h5">Anchor</h5>
    </VCol>
    <div>
      <VCardTitle>
        <h6><a href="javascript:void(0)" @click="$router.push(`/companies/view/${anchor.id}`)" class="text-primary">{{ anchor.name }}</a></h6>
      </VCardTitle>
    </div>
  </VCard>
  <!-- Buyers -->
  <VCard class="pa-sm-5 mt-5 pa-2 w-100">
    <VCol v-if="props.program_data.discount_details">
      <h5 class="text-h5">Buyers</h5>
    </VCol>
    <div>
      <VDataTableServer
        :headers="BuyersHeaders"
        :items="props.buyer"
        :items-length="1"
        class="text-no-wrap"
      >
      <template #item.top_level_borrower_limit="{ item }">
        <p>{{ item.top_level_borrower_limit.toLocaleString() }}</p>
      </template>
      <template #item.actions="{ item }">
        <IconBtn :title="resolveActionBtns(item.status)?.title">
          <VIcon :icon="resolveActionBtns(item.status)?.icon" :color="resolveActionBtns(item.status)?.color"
          />
        </IconBtn>
      </template>
      </VDataTableServer>
    </div>
  </VCard>
</VRow>

</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
