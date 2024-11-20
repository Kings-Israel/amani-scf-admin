<script lang="ts" setup>
import BankDetails from '../form/bank-details.vue';
import DiscountFees from '../form/discount-fees.vue';
import EmailDetails from '../form/email-mobile-details.vue';
import ProgramDetails from '../form/program-details.vue';

definePage({
  meta: {
    action: 'manage',
    subject: 'Edit Program & Mapping',
  },
})

const route = useRouter()

const numberedSteps = [
  {
    title: 'Program Details',
    icon: 'tabler-file-description',
    subtitle: 'Name/Anchor/Type',
  },
  {
    title: 'Discount & Fee Details',
    icon: 'tabler-user',
  },
  {
    title: 'Email & Mobile Details',
    icon: 'tabler-link',
  },
  {
    title: 'Bank Details',
    icon: 'tabler-link',
  },
]

const router = useRoute('program-view-id')

const programID = ref(router.params.id)
const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const isFlatSnackbarVisible = ref(false)
const iserrorFlatSnackbarVisible = ref(false)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const errormessage = ref('')

const {
  data: fetchedData,
  execute: fetchProgram,
} = await useApi<any>(createUrl(`/all/UI/program/${programID.value}/details`))

const formData = ref({
  anchor: fetchedData.value.data.anchor.name,
  programName: fetchedData.value.data.program.name,
  productType: fetchedData.value.data.program.program_type.name,
  productCode: fetchedData.value.data.program.code,
  eligibility: fetchedData.value.data.program.eligibility,
  totalProgramLimit: fetchedData.value.data.program.program_limit,
  programApprovalDate: fetchedData.value.data.program.approved_date,
  limitExpiryDate: fetchedData.value.data.program.limit_expiry_date,
  maximumLimitPerAccount: fetchedData.value.data.program.max_limit_per_account,
  requestAutoFinance: fetchedData.value.data.program.request_auto_finance,
  minimumFinancingDays: fetchedData.value.data.program.min_financing_days,
  maximumFinancingDays: fetchedData.value.data.program.max_financing_days,
  staleInvoicePeriod: fetchedData.value.data.program.stale_invoice_period,
  stopSupply: fetchedData.value.data.program.stop_supply,
  autoDebitAnchorForFinancedInvoices: fetchedData.value.data.program.auto_debit_anchor_financed_invoices,
  autoDebitAnchorForNonFinancedInvoices: fetchedData.value.data.program.auto_debit_anchor_non_financed_invoices,
  allowAnchorToChangeDueDate: fetchedData.value.data.program.anchor_can_change_due_date,
  maximumNoOfDaysForInvoiceDueDateExtensions: fetchedData.value.data.program.max_days_due_date_extension,
  noOfDaysLimitForChangingInvoiceDueDate: fetchedData.value.data.program.days_limit_for_due_date_change,
  defaultPaymentTerms: fetchedData.value.data.program.default_payment_terms,
  allowAnchorToChangePaymentTerms: fetchedData.value.data.program.anchor_can_change_payment_term,
  recourse: fetchedData.value.data.program.recourse,
  mandatoryForInvoiceAttachment: fetchedData.value.data.program.mandatory_invoice_attachment,
  dueDateCalculatedFrom: fetchedData.value.data.program.due_date_calculated_from,
  companyBoardResolutionAttachment: fetchedData.value.data.program.board_resolution_attachment,
  status: fetchedData.value.data.program.account_status,

  benchmarkTitle: fetchedData.value.data.program.discount_details[0].benchmark_title,
  currentBaseRate: fetchedData.value.data.program.discount_details[0].benchmark_rate,
  rawDiscounts: [],
  rawFees: [],
  anchorDetails: [],
  bankUserDetails: [],
  banksAsPerBank: [],

  taxOnDiscount: fetchedData.value.data.program.discount_details[0].tax_on_discount,
  limitBlockOverdueDays: fetchedData.value.data.program.discount_details[0].limit_block_overdue_days,
  penalDiscountOnPrinciple: fetchedData.value.data.program.discount_details[0].penal_discount_on_principle,
  discountOnPostedDiscountSpread: fetchedData.value.data.program.discount_details[0].discount_on_posted_discount_spread,
  discountOnPostedDiscount: fetchedData.value.data.program.discount_details[0].discount_on_posted_discount,
  discountType: fetchedData.value.data.program.discount_details[0].discount_type,
  gracePeriodDays: fetchedData.value.data.program.discount_details[0].grace_period,
  gracePeriodDiscount: fetchedData.value.data.program.discount_details[0].grace_period_discount,
  maturityHandlingOnHolidays: fetchedData.value.data.program.discount_details[0].maturity_handling_on_holidays,

  // anchorEmailId: fetchedData.value.data.program.email_mobile_details[0].email_id,
  // anchorMobileNo: fetchedData.value.data.program.email_mobile_details[0].mobile_no,
  // bankUserName: fetchedData.value.data.program.bank_details[0].bank_user_name,
  // bankEmailId: fetchedData.value.data.program.bank_details[0].bank_email_id,
  // bankUseMobileNo: fetchedData.value.data.program.bank_details[0].bank_mobile_no,
})

const programsdata = fetchedData.value.data.program

// const onSubmit = async () => {
//   const data = new FormData()

//   data.append('program_id', programID.value)
//   data.append('anchor', formData.value.anchor)
//   data.append('name', formData.value.programName)

//   data.append('productType', formData.value.productType)
//   data.append('code', formData.value.productCode)
//   data.append('eligibility', formData.value.eligibility)

//   data.append('program_limit', formData.value.totalProgramLimit)
//   data.append('approved_date', formData.value.programApprovalDate)
//   data.append('limit_expiry_date', formData.value.limitExpiryDate)
//   data.append('max_limit_per_account', formData.value.maximumLimitPerAccount)
//   data.append('request_auto_finance', formData.value.requestAutoFinance)
//   data.append('min_financing_days', formData.value.minimumFinancingDays == null ? '0' : formData.value.minimumFinancingDays)
//   data.append('max_financing_days', formData.value.maximumFinancingDays == null ? '0' : formData.value.maximumFinancingDays)
//   data.append('stale_invoice_period', formData.value.staleInvoicePeriod)
//   data.append('stop_supply', formData.value.stopSupply ?? 0)
//   data.append('auto_debit_anchor_financed_invoices', formData.value.autoDebitAnchorForFinancedInvoices)
//   data.append('auto_debit_anchor_non_financed_invoices', formData.value.autoDebitAnchorForNonFinancedInvoices)
//   data.append('anchor_can_change_due_date', formData.value.allowAnchorToChangeDueDate === true ? '1' : '0')
//   data.append('max_days_due_date_extension', formData.value.maximumNoOfDaysForInvoiceDueDateExtensions)
//   data.append('days_limit_for_due_date_change', formData.value.noOfDaysLimitForChangingInvoiceDueDate)
//   data.append('default_payment_terms', formData.value.defaultPaymentTerms)
//   data.append('anchor_can_change_payment_term', formData.value.allowAnchorToChangePaymentTerms)
//   data.append('recourse', formData.value.recourse)
//   data.append('mandatory_invoice_attachment', formData.value.mandatoryForInvoiceAttachment)
//   data.append('due_date_calculated_from', formData.value.dueDateCalculatedFrom)
//   data.append('companyBoardResolutionAttachment', formData.value.companyBoardResolutionAttachment)
//   data.append('account_status', formData.value.status)
//   data.append('discounts', JSON.stringify(Object.values(formData.value.rawDiscounts)))
//   data.append('benchmark_title', formData.value.benchmarkTitle)
//   data.append('benchmark_rate', formData.value.currentBaseRate)
//   data.append('discount_posted', formData.value.taxOnDiscount)
//   data.append('limit_block_overdue_days', formData.value.limitBlockOverdueDays)
//   data.append('penal_discount_on_principle', formData.value.penalDiscountOnPrinciple ?? 0)
//   data.append('discount_on_posted_discount_spread', formData.value.discountOnPostedDiscountSpread ?? '')
//   data.append('discount_on_posted_discount', formData.value.discountOnPostedDiscount ?? '')
//   data.append('discount_type', formData.value.discountType)
//   data.append('grace_period', formData.value.gracePeriodDays)
//   data.append('grace_period_discount', formData.value.gracePeriodDiscount)
//   data.append('maturity_handling_on_holidays', formData.value.maturityHandlingOnHolidays)
//   data.append('fees', JSON.stringify(Object.values(formData.value.rawFees)))
//   data.append('anchor_emails', JSON.stringify(Object.values(formData.value.anchorDetails)))
//   data.append('bank_user_emails', JSON.stringify(Object.values(formData.value.bankUserDetails)))
//   data.append('bank_names_as_per_banks', JSON.stringify(Object.values(formData.value.banksAsPerBank)))

//   await $api('/programs/update', {
//     method: 'POST',
//     body: data,
//     onResponseError({ response }) {
//       errors.value = response._data.message
//       isFlatSnackbarVisible.value = false
//       iserrorFlatSnackbarVisible.value = true
//       errormessage.value = JSON.stringify(errors.value, null, 2)
//     },
//   })
//   isFlatSnackbarVisible.value = true
//   setTimeout(async () =>
//     await nextTick(() => {
//       route.push({ path: `/program` });

//     }),
//   3000,
//   )
// }

const onSubmit = async () => {
  const data = new FormData()

  data.append('program_id', programID.value)
  data.append('anchor', formData.value.anchor)
  data.append('name', formData.value.programName)

  data.append('productType', formData.value.productType)
  data.append('code', formData.value.productCode)
  data.append('eligibility', formData.value.eligibility)

  data.append('program_limit', formData.value.totalProgramLimit)
  data.append('approved_date', formData.value.programApprovalDate)
  data.append('limit_expiry_date', formData.value.limitExpiryDate)
  data.append('max_limit_per_account', formData.value.maximumLimitPerAccount)
  data.append('request_auto_finance', formData.value.requestAutoFinance)
  data.append('min_financing_days', formData.value.minimumFinancingDays == null ? '0' : formData.value.minimumFinancingDays)
  data.append('max_financing_days', formData.value.maximumFinancingDays == null ? '0' : formData.value.maximumFinancingDays)
  data.append('stale_invoice_period', formData.value.staleInvoicePeriod)
  data.append('stop_supply', formData.value.stopSupply ?? 0)
  data.append('auto_debit_anchor_financed_invoices', formData.value.autoDebitAnchorForFinancedInvoices)
  data.append('auto_debit_anchor_non_financed_invoices', formData.value.autoDebitAnchorForNonFinancedInvoices)
  data.append('anchor_can_change_due_date', formData.value.allowAnchorToChangeDueDate === true ? '1' : '0')
  data.append('max_days_due_date_extension', formData.value.maximumNoOfDaysForInvoiceDueDateExtensions)
  data.append('days_limit_for_due_date_change', formData.value.noOfDaysLimitForChangingInvoiceDueDate)
  data.append('default_payment_terms', formData.value.defaultPaymentTerms)
  data.append('anchor_can_change_payment_term', formData.value.allowAnchorToChangePaymentTerms)
  data.append('recourse', formData.value.recourse)
  data.append('mandatory_invoice_attachment', formData.value.mandatoryForInvoiceAttachment)
  data.append('due_date_calculated_from', formData.value.dueDateCalculatedFrom)
  data.append('companyBoardResolutionAttachment', formData.value.companyBoardResolutionAttachment)
  data.append('account_status', formData.value.status)
  data.append('discounts', JSON.stringify(Object.values(formData.value.rawDiscounts)))
  data.append('benchmark_title', formData.value.benchmarkTitle)
  data.append('benchmark_rate', formData.value.currentBaseRate)
  data.append('discount_posted', formData.value.taxOnDiscount)
  data.append('limit_block_overdue_days', formData.value.limitBlockOverdueDays)
  data.append('penal_discount_on_principle', formData.value.penalDiscountOnPrinciple ?? 0)
  data.append('discount_on_posted_discount_spread', formData.value.discountOnPostedDiscountSpread ?? '')
  data.append('discount_on_posted_discount', formData.value.discountOnPostedDiscount ?? '')
  data.append('discount_type', formData.value.discountType)
  data.append('grace_period', formData.value.gracePeriodDays)
  data.append('grace_period_discount', formData.value.gracePeriodDiscount)
  data.append('maturity_handling_on_holidays', formData.value.maturityHandlingOnHolidays)
  data.append('fees', JSON.stringify(Object.values(formData.value.rawFees)))
  data.append('anchor_emails', JSON.stringify(Object.values(formData.value.anchorDetails)))
  data.append('bank_user_emails', JSON.stringify(Object.values(formData.value.bankUserDetails)))
  data.append('bank_names_as_per_banks', JSON.stringify(Object.values(formData.value.banksAsPerBank)))

  await $api('/programs/update', {
    method: 'POST',
    body: data,
    onResponseError({ response }) {
      errors.value = response._data.message
      isFlatSnackbarVisible.value = false
      iserrorFlatSnackbarVisible.value = true
      errormessage.value = JSON.stringify(errors.value, null, 2)
    },
  })

  isFlatSnackbarVisible.value = true

  setTimeout(async () =>
    await nextTick(() => {
      route.push({ path: `/programs` });
    }),
  1000,
  )
}

onMounted(() => {
  fetchProgram()
},
)
</script>

<template>
  <VSnackbar
    v-model="isFlatSnackbarVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    Program Updated Successfully
  </VSnackbar>
  <VSnackbar
    v-model="iserrorFlatSnackbarVisible"
    color="error"
    location="top end"
    variant="flat"
  >
    {{ errormessage }}
  </VSnackbar>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
            icon-size="24"
            class="stepper-icon-step-bg"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <ProgramDetails
                  v-model:anchor="formData.anchor"
                  v-model:programName="formData.programName"
                  v-model:productType="formData.productType"
                  v-model:productCode="formData.productCode"
                  v-model:eligibility="formData.eligibility"
                  v-model:totalProgramLimit="formData.totalProgramLimit"
                  v-model:programApprovalDate="formData.programApprovalDate"
                  v-model:limitExpiryDate="formData.limitExpiryDate"
                  v-model:maximumLimitPerAccount="formData.maximumLimitPerAccount"
                  v-model:requestAutoFinance="formData.requestAutoFinance"
                  v-model:minimumFinancingDays="formData.minimumFinancingDays"
                  v-model:maximumFinancingDays="formData.maximumFinancingDays"
                  v-model:staleInvoicePeriod="formData.staleInvoicePeriod"
                  v-model:stopSupply="formData.stopSupply"
                  v-model:autoDebitAnchorForFinancedInvoices="formData.autoDebitAnchorForFinancedInvoices"
                  v-model:autoDebitAnchorForNonFinancedInvoices="formData.autoDebitAnchorForNonFinancedInvoices"
                  v-model:allowAnchorToChangeDueDate="formData.allowAnchorToChangeDueDate"
                  v-model:maximumNoOfDaysForInvoiceDueDateExtensions="formData.maximumNoOfDaysForInvoiceDueDateExtensions"
                  v-model:noOfDaysLimitForChangingInvoiceDueDate="formData.noOfDaysLimitForChangingInvoiceDueDate"
                  v-model:defaultPaymentTerms="formData.defaultPaymentTerms"
                  v-model:allowAnchorToChangePaymentTerms="formData.allowAnchorToChangePaymentTerms"
                  v-model:recourse="formData.recourse"
                  v-model:mandatoryForInvoiceAttachment="formData.mandatoryForInvoiceAttachment"
                  v-model:dueDateCalculatedFrom="formData.dueDateCalculatedFrom"
                  v-model:companyBoardResolutionAttachment="formData.companyBoardResolutionAttachment"
                  v-model:status="formData.status"
                />
              </VWindowItem>

              <VWindowItem>
                <DiscountFees
                  v-model:benchmarkTitle="formData.benchmarkTitle"
                  v-model:currentBaseRate="formData.currentBaseRate"
                  v-model:taxOnDiscount="formData.taxOnDiscount"
                  v-model:limitBlockOverdueDays="formData.limitBlockOverdueDays"
                  v-model:penalDiscountOnPrinciple="formData.penalDiscountOnPrinciple"
                  v-model:discountOnPostedDiscountSpread="formData.discountOnPostedDiscountSpread"
                  v-model:discountOnPostedDiscount="formData.discountOnPostedDiscount"
                  v-model:discountType="formData.discountType"
                  v-model:gracePeriodDays="formData.gracePeriodDays"
                  v-model:gracePeriodDiscount="formData.gracePeriodDiscount"
                  v-model:maturityHandlingOnHolidays="formData.maturityHandlingOnHolidays"
                  v-model:programsdata="programsdata"
                  v-model:rawDiscounts="formData.rawDiscounts"
                  v-model:rawFees="formData.rawFees"
                />
              </VWindowItem>

              <VWindowItem>
                <EmailDetails
                  v-model:programsdata="programsdata"
                  v-model:anchorDetails="formData.anchorDetails"
                  v-model:bankUserDetails="formData.bankUserDetails"
                />
              </VWindowItem>
              <VWindowItem>
                <BankDetails
                  v-model:programsdata="programsdata"
                  v-model:banksAsPerBank="formData.banksAsPerBank"
                />
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
