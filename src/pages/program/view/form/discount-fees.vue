<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'update:benchmarkTitle', value: string): void
  (e: 'update:currentBaseRate', value: string): void
  (e: 'update:businessStrategySpread', value: string): void
  (e: 'update:creditSpread', value: string): void
  (e: 'update:totalSpread', value: string): void
  (e: 'update:totalROI', value: string): void
  (e: 'update:taxOnDiscount', value: string): void
  (e: 'update:limitBlockOverdueDays', value: string): void
  (e: 'update:penalDiscountOnPrinciple', value: string): void
  (e: 'update:discountOnPostedDiscountSpread', value: string): void
  (e: 'update:discountOnPostedDiscount', value: string): void
  (e: 'update:discountType', value: string): void
  (e: 'update:gracePeriodDays', value: string): void
  (e: 'update:gracePeriodDiscount', value: string): void
  (e: 'update:maturityHandlingOnHolidays', value: string): void
  (e: 'update:feeName', value: string): void
  (e: 'update:feeType', value: string): void
  (e: 'update:rawDiscounts', value: []): void
}

interface Props {
  benchmarkTitle: string
  currentBaseRate: string
  programsdata: []
  taxOnDiscount: string
  limitBlockOverdueDays: string
  penalDiscountOnPrinciple: string
  discountOnPostedDiscountSpread: string
  discountOnPostedDiscount: string
  discountType: string
  gracePeriodDays: string
  gracePeriodDiscount: string
  maturityHandlingOnHolidays: string
  feeName: string
  feeType: string
  feePercentage: string
  feeValue: string
  anchorBearing: string
  vendorBearing: string
  taxes: string
  rawDiscounts: [any]
  rawFees: [any]
}

const formData = ref({
  benchmarkTitle: props.benchmarkTitle,
  currentBaseRate: props.currentBaseRate,
  businessStrategySpread: '',
  creditSpread: '',
  totalSpread: '',
  totalROI: '',
  taxOnDiscount: props.taxOnDiscount,
  limitBlockOverdueDays: props.limitBlockOverdueDays,
  penalDiscountOnPrinciple: props.penalDiscountOnPrinciple,
  discountOnPostedDiscountSpread: props.discountOnPostedDiscountSpread,
  discountOnPostedDiscount: props.discountOnPostedDiscount,
  discountType: props.discountType,
  gracePeriodDays: props.gracePeriodDays,
  gracePeriodDiscount: props.gracePeriodDiscount,
  maturityHandlingOnHolidays: props.maturityHandlingOnHolidays,
  feeName: '',
  feeType: '',
  feePercentage: '',
  feeValue: '',
  anchorBearing: '',
  vendorBearing: '',
  taxes: props.taxes,
  rawDiscounts: props.rawDiscounts,
  rawFees: props.rawFees,

})

const discountTypes = [
  {
    name: 'Front Ended',
    value: 'Front Ended',
  },
  {
    name: 'Rear Ended',
    value: 'Rear Ended',
  },
]

const maturityOnHolidays = [
  {
    name: 'No Effect',
    value: 'No Effect',
  },
  {
    name: 'Prepone to previous working day',
    value: 'Postpone to next working day',
  },
  {
    name: 'Postpone to next working day',
    value: 'Postpone to next working day',
  },
]

const discountTaxes = [
  {
    name: 'VAT (16%)',
    value: 'VAT (16%)',
  },
  {
    name: 'Withholding Vat (2%)',
    value: 'Withholding Vat (2%)',
  },
]

watch(() => formData.value.benchmarkTitle, newValue => emit('update:benchmarkTitle', newValue))
watch(() => formData.value.currentBaseRate, newValue => emit('update:currentBaseRate', newValue))
watch(() => formData.value.businessStrategySpread, newValue => emit('update:businessStrategySpread', newValue))
watch(() => formData.value.creditSpread, newValue => emit('update:creditSpread', newValue))
watch(() => formData.value.totalSpread, newValue => emit('update:totalSpread', newValue))
watch(() => formData.value.totalROI, newValue => emit('update:totalROI', newValue))
watch(() => formData.value.taxOnDiscount, newValue => emit('update:taxOnDiscount', newValue))
watch(() => formData.value.limitBlockOverdueDays, newValue => emit('update:limitBlockOverdueDays', newValue))
watch(() => formData.value.penalDiscountOnPrinciple, newValue => emit('update:penalDiscountOnPrinciple', newValue))
watch(() => formData.value.discountOnPostedDiscountSpread, newValue => emit('update:discountOnPostedDiscountSpread', newValue))
watch(() => formData.value.discountOnPostedDiscount, newValue => emit('update:discountOnPostedDiscount', newValue))
watch(() => formData.value.discountType, newValue => emit('update:discountType', newValue))
watch(() => formData.value.gracePeriodDays, newValue => emit('update:gracePeriodDays', newValue))
watch(() => formData.value.gracePeriodDiscount, newValue => emit('update:gracePeriodDiscount', newValue))
watch(() => formData.value.maturityHandlingOnHolidays, newValue => emit('update:maturityHandlingOnHolidays', newValue))
watch(() => formData.value.rawDiscounts, newValue => emit('update:rawDiscounts', newValue))
watch(() => formData.value.rawFees, newValue => emit('update:rawFees', newValue))

const discountFields = ref([
  {
    key: 'taxOnDiscount',
    type: 'text',
    model: 'taxOnDiscount',
    label: 'Tax on Discount',
    placeholder: 'Tax on Discount',
    readonly: false,
    rules: [],
  },
  {
    key: 'limitBlockOverdueDays',
    type: 'text',
    model: 'limitBlockOverdueDays',
    label: 'Limit Block Overdue Days',
    placeholder: 'Limit Block Overdue Days',
    readonly: false,
    rules: [],
  },
  {
    key: 'penalDiscountOnPrinciple',
    type: 'text',
    model: 'penalDiscountOnPrinciple',
    label: 'Penal Discount on Principle (%)',
    placeholder: 'Penal Discount on Principle',
    readonly: false,
    rules: [],
  },
  {
    key: 'discountOnPostedDiscountSpread',
    type: 'text',
    model: 'discountOnPostedDiscountSpread',
    label: 'Discount on Posted Discount Spread',
    placeholder: 'Discount on Posted Discount Spread',
    readonly: false,
    rules: [],
  },
  {
    key: 'discountOnPostedDiscount',
    type: 'text',
    model: 'discountOnPostedDiscount',
    label: 'Discount on Posted Discount (%)',
    placeholder: 'Discount on Posted Discount (%)',
    readonly: false,
    rules: [],
  },
  {
    key: 'discountType',
    type: 'select',
    items: discountTypes,
    model: 'discountType',
    label: 'Discount Type',
    placeholder: 'Discount Type',
    readonly: false,
    rules: [],
  },
  {
    key: 'gracePeriodDays',
    type: 'text',
    model: 'gracePeriodDays',
    label: 'Grace Period (Days)',
    placeholder: 'Grace Period (Days)',
    readonly: false,
    rules: [],
  },
  {
    key: 'gracePeriodDiscount',
    type: 'text',
    model: 'gracePeriodDiscount',
    label: 'Grace Period Discount',
    placeholder: 'Grace Period Discount',
    readonly: false,
    rules: [],
  },
  {
    key: 'maturityHandlingOnHolidays',
    type: 'select',
    items: maturityOnHolidays,
    model: 'maturityHandlingOnHolidays',
    label: 'Maturity Handling on Holidays',
    placeholder: 'Maturity Handling on Holidays',
    readonly: false,
    rules: [],
  },
])

// const discounts = ref<Array<{
//   from_day: string
//   to_day: string
//   credit_spread: string
//   total_spread: string
//   total_roi: string
//   business_strategy_spread: string
// }>>([])

// const discountsFees = ref<Array<{
//   fee_name: string
//   type: string
//   value: string
//   dealer_bearing: string
//   taxes: string
// }>>([])

for (const discount of props.programsdata.discount_details) {
  formData.value.rawDiscounts.push({
    from_day: discount.from_day,
    to_day: discount.to_day,
    credit_spread: discount.credit_spread,
    total_spread: discount.total_spread,
    total_roi: discount.total_roi,
    business_strategy_spread: discount.business_strategy_spread,
  })
}

for (const fee of props.programsdata.fees) {
  formData.value.rawFees.push({
    fee_name: fee.fee_name,
    type: fee.type,
    value: fee.value,
    dealer_bearing: fee.dealer_bearing,
    taxes: fee.taxes,
  })
}

const removeDiscount = (index: number) => {
  formData.value.rawDiscounts.splice(index, 1)
}

const addDiscount = () => {
  formData.value.rawDiscounts.push({ from_day: '', to_day: '', credit_spread: '', total_spread: '', total_roi: '', business_strategy_spread: '' })
}

const removeFee = (index: number) => {
  formData.value.rawFees.splice(index, 1)
}

const addDiscountTax = () => {
  formData.value.rawFees.push({ fee_name: '', type: '', value: '', dealer_bearing: '', taxes: '' })
}
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
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.benchmarkTitle"
        placeholder="Benchmark Title(Maturity)"
        label="Benchmark Title(Maturity)"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.currentBaseRate"
        placeholder="Current Base Rate"
        label="Current Base Rate"
      />
    </VCol>
    <template
      v-for="(discount, index) in formData.rawDiscounts"
      :key="index"
    >
      <VCol
        cols="12"
        md="12"
      >
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="discount.from_day"
              placeholder="From Day"
              label="From Day"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="discount.to_day"
              placeholder="To Day"
              label="To Day"
            />
          </VCol>

          <VCol
            cols="12"
            md="3"
            class="py-0"
          >
            <AppTextField
              v-model="discount.credit_spread"
              placeholder="Credit Spread (%)"
              label="Credit Spread (%)"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
            class="py-0"
          >
            <AppTextField
              v-model="discount.business_strategy_spread"
              placeholder="Business Strategy Spread (%)"
              label="Business Strategy Spread (%)"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
            class="py-0"
          >
            <AppTextField
              v-model="discount.total_spread"
              placeholder="Total Spread (%)"
              label="Total Spread (%)"
            />
          </VCol>

          <VCol
            cols="12"
            md="3"
            class="py-0"
          >
            <AppTextField
              v-model="discount.total_roi"
              placeholder="Total ROI (%)"
              label="Total ROI (%)"
            />
          </VCol>
        </VRow>
      </VCol>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <IconBtn
            v-if="formData.rawDiscounts.length > 1"
            @click="removeDiscount(index)"
          >
            <VIcon
              icon="tabler-trash"
              color="error"
            />
          </IconBtn>
        </VCol>
      </VRow>
    </template>
    <VCol
      cols="12"
      md="6"
      class="text-left"
    >
      <VBtn
        color="primary"
        @click="addDiscount"
      >
        Add
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <VRow>
        <template
          v-for="field in discountFields"
          :key="field.key"
        >
          <template v-if="field.type === 'select'">
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
        <VCol
          cols="12"
          md="12"
        >
          <template
            v-for="(fee, index) in formData.rawFees"
            :key="index"
          >
            <VRow>
              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="fee.fee_name"
                  placeholder="Fee Name"
                  label="Fee Name"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="fee.type"
                  placeholder="Type"
                  label="Type"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="fee.value"
                  placeholder="Value"
                  label="Value"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="fee.dealer_bearing"
                  placeholder="Dealer Bearing (%)"
                  label="Dealer Bearing (%)"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="fee.vendor_bearing_discount"
                  placeholder="Vendor Bearing (%)"
                  label="Vendor Bearing (%)"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <AppSelect
                  v-model="fee.taxes"
                  :items="discountTaxes"
                  item-title="name"
                  item-value="value"
                  placeholder="Taxes"
                  label="Taxes"
                />
              </VCol>
            </VRow>

            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <IconBtn
                  v-if="formData.rawFees.length > 1"
                  @click="removeFee(index)"
                >
                  <VIcon
                    icon="tabler-trash"
                    color="error"
                  />
                </IconBtn>
              </VCol>
            </VRow>
          </template>
          <VCol
            cols="12"
            md="6"
            class="text-left"
          >
            <VBtn
              color="primary"
              @click="addDiscountTax"
            >
              Add
            </VBtn>
          </VCol>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
