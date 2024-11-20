<script lang="ts" setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import EditCurrenciesDialog from '../dialogs/EditCurrenciesDialog.vue'

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
  { title: 'In active', value: 'inactive' },
])

// Data table options
const itemsPerPage = ref(25)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const isAddPaymentMethodsDialogVisible = ref(false)

const selectedCurrency = ref(null)

const openDialog = currency => {
  selectedCurrency.value = currency
  isCurrenciesDialogVisible.value = true
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }

  return { text: 'Inactive', color: 'error' }
}

// Currencies
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

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const currencies = computed(() => currenciesData.value.data)
const totalCurrencies = computed(() => currenciesData.value.total)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const formcurrencies = ref<Array<{ code: string; symbol: string; exchange_rate: string; decimals: string }>>([])

const addCurrency = () => {
  formcurrencies.value.push({ code: '', symbol: '', exchange_rate: '', decimals: '' })
}

const removeCurrency = (index: number) => {
  formcurrencies.value.splice(index, 1)
}

const isNewCurrencyAdded = ref(false)

// Form fields
const currency_title = ref('')
const symbol = ref('')
const exchange_rate = ref('')
const decimals = ref('')
const route = useRoute()
const router = useRouter()

const submitCurrency = async () => {
  try {
    for (const currency of formcurrencies.value) {
      const res = await $api('/UI/configurations/currency', {
        method: 'POST',
        body: {
          code: currency.code,
          symbol: currency.symbol,
          decimals: currency.decimals,
          exchange_rate: currency.exchange_rate,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    isNewCurrencyAdded.value = true
    formcurrencies.value = [{ code: '', symbol: '', exchange_rate: '', decimals: '' }]

    await nextTick(() => {
      fetchCurrencies()
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}


</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 Currency -->
      <VCol
        cols="12"
        md="12"
      >
        <VCard class="d-flex flex-column">
          <div class="d-flex flex-wrap gap-4 mx-5 my-5">
            <div class="d-flex align-center">
              <!-- 👉 Select Role -->
              <AppTextField
                v-model="searchQuery"
                class="me-3"
                clear-icon="tabler-circle-x"
                clearable
                color="primary"
                placeholder="Currency"
                style="inline-size: 200px;"
                type="text"
              />
              <AppSelect
                v-model="selectedStatus"
                :items="status"
                class="me-3"
                clear-icon="tabler-x"
                clearable
                placeholder="Status"
                style="inline-size: 200px;"
              />
            </div>
          </div>
          <!-- 👉 Header -->
          <VCardItem class="notification-section">
            <h4 class="text-h4">
              Currencies
            </h4>
            <VDataTableServer
              v-model:items-per-page="itemsPerPage"
              v-model:page="page"
              :headers="CurrenciesRequestHeaders"
              :items="currencies"
              :items-length="totalCurrencies"
              class="text-no-wrap"
              show-select
              @update:options="updateOptions"
            >
              <template #item.status="{ item }">
                <VChip
                  density="default"
                  label
                  v-bind="resolveStatus(item.status)"
                />
              </template>
              <template #item.actions="{ item }">
                <IconBtn @click="openDialog(item)">
                  <VIcon
                    icon="tabler-pencil"
                    color="warning"
                  />
                </IconBtn>

                <IconBtn :title="resolveActionBtns(item.status)?.title">
                  <VIcon
                    :icon="resolveActionBtns(item.status)?.icon"
                    :color="resolveActionBtns(item.status)?.color"
                    @click="approve(item.id)"
                  />
                </IconBtn>
              </template>
              <!-- <template #bottom v-if="!showFooter"></template> -->
            </VDataTableServer>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </VForm>

  <EditCurrenciesDialog
    v-if="isCurrenciesDialogVisible"
    v-model:isDialogVisible="isCurrenciesDialogVisible"
    :currency="selectedCurrency"
  />
</template>

<style lang="scss">
  .config-d-flex{
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
</style>
