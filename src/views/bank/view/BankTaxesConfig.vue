<script lang="ts" setup>
import EditTaxesDialog from '@/views/bank/dialogs/EditTaxesDialog.vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable';

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const TaxesRequestHeaders: TableHeader[] = [
  { title: 'Tax Name', key: 'tax_name' },
  { title: 'Percentage', key: 'value' },
  { title: 'Account No', key: 'account_no' },
  { title: 'Status', key: 'status' },
  { title: 'Is Default', key: 'is_default' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const currency = ['KES', 'USD', 'Euro', 'Pound']
const tax = ref('')
const discount_rate = ref('')
const branches = ref('')
const industries = ref('')
const base_rates = ref('')
const holiday_list = ref('')
const faqs = ref('')
const date_format = ref('')
const languages = ref('')
const user_manuals = ref('')

const isAddPaymentMethodsDialogVisible = ref(false)
const isAddTaxDialogVisible = ref(false)

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const route = useRoute('bank-view-id')

// Taxes

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const { data: taxesData, execute: fetchTaxes } = await useApi<any>(createUrl(`get/UI/configurations/bank-taxes/${route.params.id}`,
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

const taxes = computed(() => taxesData.value.data)
const totalTaxes = computed(() => taxesData.value.total)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const formtaxes = ref<Array<{ name: string; percentage: string; account_no: string; status: string }>>([])

const addTax = () => {
  formtaxes.value.push({ name: '', percentage: '', account_no: '', status: 'Active' })
}

const removeTax = (index: number) => {
  formtaxes.value.splice(index, 1)
}

const resolveActionBtns = (is_default: string) => {
  if (is_default === '1')
    return { color: 'success', icon: 'tabler-thumb-up', title: 'Is Default' }
  else
    return { color: 'error', icon: 'tabler-thumb-down', title: 'Default' }
}

const submitTax = async () => {
  try {
    for (const tax of formtaxes.value) {
      const res = await $api('UI/configurations/tax-rates-configurations', {
        method: 'POST',
        body: {
          bank_id: route.params.id,
          name: tax.name,
          percentage: tax.percentage,
          account_no: tax.account_no,
          status: tax.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }
    formtaxes.value = [{ name: '', percentage: '', account_no: '', status: '' }]

    await nextTick(() => {
      fetchTaxes()
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}

const selectedTax = ref(null)

const isTaxesDialogVisible = ref(false)

const openDialog = rate => {
  selectedTax.value = rate
  isTaxesDialogVisible.value = true
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
                placeholder="Tax Name"
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
              Taxes
            </h4>
            <VDataTableServer
              v-model:items-per-page="itemsPerPage"
              v-model:page="page"
              :headers="TaxesRequestHeaders"
              :items="taxes"
              :items-length="totalTaxes"
              class="text-no-wrap"
              show-select
              @update:options="updateOptions"
            >
              <template #item.actions="{ item }">
                <IconBtn @click="openDialog(item)">
                  <VIcon
                    icon="tabler-pencil"
                    color="warning"
                  />
                </IconBtn>

                <IconBtn>
                  <VIcon
                    icon="tabler-trash"
                    color="danger"
                  />
                </IconBtn>
              </template>
              <template #item.is_default="{ item }">
                <IconBtn :title="resolveActionBtns(item.is_default)?.title">
                  <VIcon
                    :icon="resolveActionBtns(item.is_default)?.icon"
                    :color="resolveActionBtns(item.is_default)?.color"
                  />
                </IconBtn>
              </template>
              <!-- <template #bottom v-if="!showFooter"></template> -->
            </VDataTableServer>
            <VCard>
              <VCardItem>
                <VForm @submit.prevent="() => {}">
                  <template
                    v-for="(tax, index) in formtaxes"
                    :key="index"
                  >
                    <VRow>
                      <div class="config-d-flex flex-wrap mx-5">
                        <!-- 👉 Currency -->
                        <VCol
                          cols="12"
                          md="2"
                        >
                          <AppTextField
                            v-model="tax.name"
                            label="Name"
                            placeholder="Tax Name"
                          />
                        </VCol>
                        <VCol
                          cols="12"
                          md="3"
                        >
                          <AppTextField
                            v-model="tax.percentage"
                            type="number"
                            label="Value (%)"
                            placeholder="%"
                          />
                        </VCol>
                        <VCol
                          cols="12"
                          md="3"
                        >
                          <AppTextField
                            v-model="tax.account_no"
                            label="Account No"
                            placeholder="Account No"
                          />
                        </VCol>
                        <VCol
                          cols="12"
                          md="2"
                        >
                          <AppSelect
                            v-model="tax.status"
                            :items="status"
                            class="me-1"
                            clear-icon="tabler-x"
                            clearable
                            placeholder="Status"
                            style="inline-size: 200px;"
                          />
                        </VCol>
                        <VCol
                          cols="12"
                          md="1"
                        >
                          <IconBtn @click="removeTax(index)">
                            <VIcon
                              icon="tabler-trash"
                              color="error"
                            />
                          </IconBtn>
                        </VCol>
                        <!-- 👉 submit and reset button -->
                      </div>
                    </VRow>
                  </template>
                  <VRow>
                    <VCol
                      cols="12"
                      md="2"
                      class="text-left"
                    >
                      <VBtn
                        color="primary"
                        @click="addTax"
                      >
                        Add New Tax
                      </VBtn>
                    </VCol>
                    <VCol
                      v-if="formtaxes.length > 0"
                      class="d-flex gap-4"
                      cols="12"
                      md="4"
                    >
                      <VBtn
                        type="submit"
                        @click="submitTax"
                      >
                        Submit
                      </VBtn>
                      <VBtn
                        color="secondary"
                        type="reset"
                        variant="tonal"
                      >
                        Reset
                      </VBtn>
                    </VCol>
                  </VRow>
                </VForm>
              </VCardItem>
            </VCard>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </VForm>
  <AddCurrenciesDialog
    v-model:is-dialog-visible="isAddPaymentMethodsDialogVisible"
    @refresh="fetchCurrencies"
  />
  <AddTaxDialog
    v-model:is-dialog-visible="isAddTaxDialogVisible"
    @refresh="fetchTaxes"
  />
  <EditTaxesDialog
    v-if="isTaxesDialogVisible"
    v-model:isDialogVisible="isTaxesDialogVisible"
    :bank_id="route.params.id"
    :tax="selectedTax"
  />
</template>

<style lang="scss">
  .config-d-flex{
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
</style>
