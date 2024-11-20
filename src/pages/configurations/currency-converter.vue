<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Taxes',
  },
})

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const CurrenciesRequestHeaders: TableHeader[] = [
  { title: 'Currency Title', key: 'name' },
  { title: 'Symbol', key: 'symbol' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const isCurrenciesDialogVisible = ref(false)

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'error', icon: 'tabler-circle-dot', title: 'Deactivate' }
  else
    return { color: 'primary', icon: 'tabler-circle-check', title: 'Activate' }
}

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'Inactive', value: 'inactive' },
])

// Data table options
const itemsPerPage = ref(25)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const isAddPaymentMethodsDialogVisible = ref(false)

const selectedCurrency = ref(null)

// Selected currencies for conversion
const fromCurrency = ref('')
const toCurrency = ref('')
const amount = ref(0)
const convertedAmount = ref(0)

const currencies = ref([])

const fetchCurrencies = async () => {
  try {
    const { data } = await $api('/UI/configurations/currencies', {
      method: 'GET',
    })
    currencies.value = data
  } catch (error) {
    console.error('Error fetching currencies:', error)
  }
}

// Fetch conversion rate between two currencies
const fetchConversionRate = async () => {
  if (!fromCurrency.value || !toCurrency.value || !amount.value) return

  try {
    const { data } = await $api(`/UI/configurations/currency-conversion`, {
      method: 'GET',
      query: {
        from: fromCurrency.value,
        to: toCurrency.value,
      },
    })

    const rate = data.rate
    convertedAmount.value = amount.value * rate
  } catch (error) {
    console.error('Error fetching conversion rate:', error)
  }
}

const submitCurrencyConversion = () => {
  fetchConversionRate()
}

// Initialize on component mount
fetchCurrencies()

</script>

<template>
  <VForm @submit.prevent="submitCurrencyConversion">
    <VRow>
      <!-- Currency Conversion -->
      <VCol cols="12" md="6">
        <VCard>
          <div class="d-flex flex-column p-4">
            <h3>Currency Conversion</h3>

            <!-- From Currency -->
            <VSelect
              v-model="fromCurrency"
              :items="currencies"
              item-text="name"
              item-value="code"
              label="From Currency"
              class="mb-4"
              placeholder="Select From Currency"
            />

            <!-- To Currency -->
            <VSelect
              v-model="toCurrency"
              :items="currencies"
              item-text="name"
              item-value="code"
              label="To Currency"
              class="mb-4"
              placeholder="Select To Currency"
            />

            <!-- Amount -->
            <VTextField
              v-model="amount"
              label="Amount"
              type="number"
              class="mb-4"
              placeholder="Enter amount to convert"
            />

            <!-- Converted Amount -->
            <VTextField
              v-model="convertedAmount"
              label="Converted Amount"
              type="text"
              readonly
              class="mb-4"
              :placeholder="'Converted amount will be displayed here'"
            />

            <VBtn @click="submitCurrencyConversion" color="primary" class="mt-4">
              Convert
            </VBtn>
          </div>
        </VCard>
      </VCol>
    </VRow>

  </VForm>
</template>

<style lang="scss">
  .config-d-flex {
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
  .currency-conversion-card {
    max-width: 400px;
    margin: auto;
  }
</style>
