<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits<Emit>()

const router = useRouter()

interface Emit {
  (e: 'update:selectedCurrencyIds', value: number[]): void
  (e: 'update:selectedRateIds', value: number[]): void
  (e: 'update:selectedTaxIds', value: number[]): void
  (e: 'update:offdays', value: string): void
  (e: 'update:languages', value: string): void
  (e: 'update:date_format', value: string): void
  (e: 'update:help_contact_number', value: string): void
  (e: 'update:help_contact_email', value: string): void
}
const route = useRoute('bank-view-id')
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

interface Configs {
  id: number
}

const currencyItems = ref<Currency[]>([])
const rateItems = ref<Rates[]>([])
const configItems = ref<Configs[]>([])

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

const { data: configsData, execute: fetchConfigs } = await useApi<any>(createUrl(`get/UI/configurations/bank-configurations/${route.params.id}`,
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

const languages = [
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

const configs = configsData.value

const currencies = computed(() => currenciesData.value.data)

currencyItems.value = currencies.value

configItems.value = configs.value

const formData = ref({
  page_title: configs.page_title || '',
  selectedCurrencyIds: configs.selectedCurrencyIds || ref<number[]>([]),
  defaultCurrencyId: '',
  offdays: configs.offdays || '',
  languages: configs.languages || ref([]),
  date_format: configs.date_format || ref(''),
  help_contact_number: configs.help_contact_number || '',
  help_contact_email: configs.help_contact_email || '',
})

onMounted(() => {
  fetchCurrencies()
  fetchConfigs()

//   console.log(currencyItems.value)
})

const selectedCurrencies = computed(() => {
  if (!formData.value.selectedCurrencyIds.length || !currencyItems.value.length)
    return []

  return currencyItems.value.filter(item => formData.value.selectedCurrencyIds.includes(item.id))
})

const submitConfig = async () => {
  const data = new FormData()

  data.append('bank_id', route.params.id)
  data.append('page_title', formData.value.page_title)
  data.append('selectedCurrencyIds', formData.value.selectedCurrencyIds)
  data.append('defaultCurrencyId', formData.value.defaultCurrencyId)
  data.append('offdays', formData.value.offdays)
  data.append('languages', formData.value.languages)
  data.append('date_format', formData.value.date_format)
  data.append('help_contact_number', formData.value.help_contact_number)

  data.append('help_contact_email', formData.value.help_contact_email)

  try {
    const res = await $api('edit/UI/configurations/bank-configurations', {
      method: 'POST',
      body: data,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { message } = res

    await nextTick(() => {
      // router.push(`/bank/view/${route.params.id}`)
      // router.go(0)
    })

    console.log(message)
    isNewContactAdded.value = true
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <VRow>
    <div>
      <VCard>
        <VCardText>
          <!-- 👉 Currency -->
          <VRow>
            <!-- 👉 Page Title -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="formData.page_title"
                label="Page Title"
              />
            </VCol>
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
                label="Select Currency"
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
                label="Default Currency"
              />
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
                label="Weekly Off"
                chips
                closable-chips
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
                :items="languages"
                item-title="name"
                item-value="id"
                placeholder="Languages"
                label="Languages"
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
                label="Select Date Format"
                chips
                closable-chips
              />
            </VCol>

            <!-- 👉 Help Contact No -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="formData.help_contact_number"
                label="Help Page Contact Number"
              />
            </VCol>

            <!-- 👉 Help Contact No -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="formData.help_contact_email"
                label="Help Page Contact Email"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                @click="submitConfig"
              >
                Submit
              </VBtn>

              <VBtn
                type="reset"
                color="secondary"
                variant="tonal"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </div>
  </VRow>
</template>
