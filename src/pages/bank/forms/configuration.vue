<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<Emit>()

const router = useRouter()

interface Emit {
  (e: 'update:selectedCurrencyIds', value: number[]): void
  (e: 'update:selectedRateIds', value: number[]): void
  (e: 'update:selectedTaxIds', value: number[]): void
  (e: 'update:defaultCurrencyId', value: number[]): void
  (e: 'update:defaultRateId', value: number[]): void
  (e: 'update:defaultTaxId', value: number[]): void
  (e: 'update:offdays', value: string): void
  (e: 'update:languages', value: string): void
  (e: 'update:date_format', value: string): void
  (e: 'update:help_contact_number', value: string): void
  (e: 'update:help_contact_email', value: string): void
}
interface Currency {
  id: number
  code: string
  name: string
  symbol: string
  status: string
}

interface Rates {
  id: number
  rate_code: string
}

interface Taxes {
  id: number
  name: string
}

const formData = ref({
  selectedCurrencyIds: ref<number[]>([]),
  selectedRateIds: ref<number[]>([]),
  selectedTaxIds: ref<number[]>([]),
  defaultCurrencyId: '',
  defaultRateId: '',
  defaultTaxId: '',
  offdays: '',
  languages: ref([]),
  date_format: ref(''),
  help_contact_number: '',
  help_contact_email: '',
})

watch(() => formData.value.selectedCurrencyIds, newValue => emit('update:selectedCurrencyIds', newValue))
watch(() => formData.value.selectedRateIds, newValue => emit('update:selectedRateIds', newValue))
watch(() => formData.value.selectedTaxIds, newValue => emit('update:selectedTaxIds', newValue))
watch(() => formData.value.defaultCurrencyId, newValue => emit('update:defaultCurrencyId', newValue))
watch(() => formData.value.defaultRateId, newValue => emit('update:defaultRateId', newValue))
watch(() => formData.value.defaultTaxId, newValue => emit('update:defaultTaxId', newValue))
watch(() => formData.value.offdays, newValue => emit('update:offdays', newValue))
watch(() => formData.value.languages, newValue => emit('update:languages', newValue))
watch(() => formData.value.date_format, newValue => emit('update:date_format', newValue))
watch(() => formData.value.help_contact_number, newValue => emit('update:help_contact_number', newValue))
watch(() => formData.value.help_contact_email, newValue => emit('update:help_contact_email', newValue))

const conf_languages = [
  {
    code: 'EN',
    name: 'English',
  },
  {
    code: 'SW',
    name: 'Swahili',
  },
  {
    code: 'FR',
    name: 'French',
  },
]

const currencyItems = ref<Currency[]>([])
const rateItems = ref<Rates[]>([])
const taxItems = ref<Taxes[]>([])

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(150)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const week_items = ['Saturday', 'Sunday', 'Friday - Saturday', 'Saturday - Sunday', '2nd and 4th Saturday and all Sundays']
const date_formats = ['DD/MM/YYYY (Ex. 12/02/2020)', 'MM/DD/YYYY (Ex. 02/12/2020)', 'DD-MM-YYYY (Ex. 12-02-2020)', 'MM-DD-YYYY (Ex. 02-12-2020)', 'DD-MMM-YYYY (Ex. 12-Feb-2020)', 'DD MMM YYYY (Ex. 02 Feb 2020)']

const { data: currenciesData, execute: fetchCurrencies } = await useApi<any>(createUrl('/UI/configurations/currencies',
  {
    query: {
      q: searchQuery,
      status: selectedStatus,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))

const { data: ratesData, execute: fetchRates } = await useApi<any>(createUrl('/UI/configurations/base-rates',
  {
    query: {
      q: searchQuery,
      status: selectedStatus,
      page,
      sortBy,
      orderBy,
    },
  },
))

const { data: taxesData, execute: fetchTaxes } = await useApi<any>(createUrl('/UI/configurations/taxes',
  {
    query: {
      q: searchQuery,
      status: selectedStatus,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))

const selectedCurrencies = computed(() => {
  if (!formData.value.selectedCurrencyIds.length || !currencyItems.value.length)
    return []

  return currencyItems.value.filter(item => formData.value.selectedCurrencyIds.includes(item.id))
})

const selectedRates = computed(() => {
  if (!formData.value.selectedRateIds.length || !rateItems.value.length)
    return []

  return rateItems.value.filter(item => formData.value.selectedRateIds.includes(item.id))
})

const selectedTaxes = computed(() => {
  if (!formData.value.selectedTaxIds.length || !taxItems.value.length)
    return []

  return taxItems.value.filter(item => formData.value.selectedTaxIds.includes(item.id))
})

const taxes = computed(() => taxesData.value.data)

const rates = computed(() => ratesData.value.data)

const currencies = computed(() => currenciesData.value.data)

currencyItems.value = currencies.value

rateItems.value = rates.value
taxItems.value = taxes.value

onMounted(() => {
  fetchCurrencies()
  fetchRates()
  fetchTaxes()

//   console.log(currencyItems.value)
})

const currency = ['KES', 'USD', 'Euro', 'Pound']
const languages = ref([])
const base_rates = ref('')
const faqs = ref('')
const user_manuals = ref('')
</script>

<template>
  <VRow>
    <!-- 👉 Currency -->
    <VCol
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.selectedCurrencyIds"
        chips
        closable-chips
        multiple
        :items="currencyItems"
        item-title="name"
        item-value="id"
        placeholder="Search Default Currency"
        label="Select Currency *"
        :rules="[requiredValidator]"
      >
        <template #chip="{ props, item }">
          <VChip
            v-bind="props"
            :text="item.raw.name"
          />
        </template>
        <template #item="{ props, item }">
          <VListItem
            v-bind="props"
            :title="item?.raw?.name"
          />
        </template>
      </AppAutocomplete>
    </VCol>

    <VCol
      v-if="formData.selectedCurrencyIds.length"
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.defaultCurrencyId"
        chips
        closable-chips
        :items="selectedCurrencies"
        item-title="name"
        item-value="id"
        placeholder="Default Currency"
        label="Default Currency *"
        :rules="[requiredValidator]"
      />
    </VCol>
    <!-- 👉 Base rates -->
    <VCol
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.selectedRateIds"
        chips
        closable-chips
        multiple
        :items="rateItems"
        item-title="rate_code"
        item-value="id"
        placeholder="Search Rates"
        label="Select Rates *"
        :rules="[requiredValidator]"
      >
        <template #chip="{ props, item }">
          <VChip
            v-bind="props"
            :text="item.raw.rate_code"
          />
        </template>
        <template #item="{ props, item }">
          <VListItem
            v-bind="props"
            :title="item?.raw?.rate_code"
          />
        </template>
      </AppAutocomplete>
    </VCol>

    <VCol
      v-if="formData.selectedRateIds.length"
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.defaultRateId"
        chips
        closable-chips
        :items="selectedRates"
        item-title="rate_code"
        item-value="id"
        placeholder="Default Rate"
        label="Default Rate *"
        :rules="[requiredValidator]"
      />
    </VCol>

    <!-- 👉 Taxes -->
    <VCol
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.selectedTaxIds"
        chips
        closable-chips
        multiple
        :items="taxItems"
        item-title="name"
        item-value="id"
        placeholder="Search Taxes"
        label="Select Tax *"
        :rules="[requiredValidator]"
      >
        <template #chip="{ props, item }">
          <VChip
            v-bind="props"
            :text="item.raw.name"
          />
        </template>
        <template #item="{ props, item }">
          <VListItem
            v-bind="props"
            :title="`${item?.raw?.name} (${item?.raw?.percentage}%)`"
          />
        </template>
      </AppAutocomplete>
    </VCol>

    <VCol
      v-if="formData.selectedTaxIds.length"
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.defaultTaxId"
        chips
        closable-chips
        :items="selectedTaxes"
        item-title="name"
        item-value="id"
        placeholder="Default Tax"
        label="Default Tax *"
        :rules="[requiredValidator]"
      >
        <template #item="{ props, item }">
          <VListItem
            v-bind="props"
            :title="`${item?.raw?.name} (${item?.raw?.percentage}%)`"
          />
        </template>
      </AppAutocomplete>
    </VCol>

    <!-- 👉 Week Off -->
    <VCol
      cols="12"
      md="6"
    >
      <AppSelect
        v-model="formData.offdays"
        :items="week_items"
        placeholder="Select Week Off"
        label="Weekly Off *"
        chips
        closable-chips
        :rules="[requiredValidator]"
      />
    </VCol>

    <!-- 👉 Languages -->
    <VCol
      cols="12"
      md="6"
    >
      <AppAutocomplete
        v-model="formData.languages"
        chips
        closable-chips
        multiple
        :items="conf_languages"
        item-title="name"
        item-value="id"
        placeholder="Languages"
        label="Languages *"
        :rules="[requiredValidator]"
      />
    </VCol>

    <!-- 👉 Date format -->
    <VCol
      cols="12"
      md="6"
    >
      <AppSelect
        v-model="formData.date_format"
        :items="date_formats"
        placeholder="Date Format"
        label="Select Date Format *"
        chips
        closable-chips
        :rules="[requiredValidator]"
      />
    </VCol>

    <!-- 👉 Help Contact No -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.help_contact_number"
        label="Help Page Contact Number *"
        :rules="[requiredValidator]"
      />
    </VCol>

    <!-- 👉 Help Contact No -->
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.help_contact_email"
        label="Help Page Contact Email *"
        :rules="[requiredValidator]"
      />
    </VCol>
  </VRow>
</template>
