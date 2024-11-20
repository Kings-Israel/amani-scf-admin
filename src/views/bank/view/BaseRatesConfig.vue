<script lang="ts" setup>
import EditRatesDialog from '@/views/bank/dialogs/EditRatesDialog.vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable';

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()

const isRatesDialogVisible = ref(false)

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const route = useRoute('bank-view-id')

const RatesRequestHeaders: TableHeader[] = [
  { title: 'Rate Code', key: 'name' },
  { title: 'Rate', key: 'rate' },
  { title: 'Status', key: 'status' },
  { title: 'Is Default', key: 'is_default' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const resolveActionBtns = (is_default: string) => {
  if (is_default === '1')
    return { color: 'success', icon: 'tabler-thumb-up', title: 'Is Default' }
  else
    return { color: 'error', icon: 'tabler-thumb-down', title: 'Default' }
}

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])

const { data: ratesData, execute: fetchRates } = await useApi<any>(createUrl(`/get/UI/configurations/bank-rates/${route.params.id}`,
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

const rates = computed(() => ratesData.value.data)
const totalRates = computed(() => ratesData.value.total)

const selectedRate = ref(null)

const openDialog = rate => {
  selectedRate.value = rate
  isRatesDialogVisible.value = true
}

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const formrates = ref<Array<{ rate_code: string; rate: string; future_rate: string; effective_date: string }>>([])

const addRate = () => {
  formrates.value.push({ rate_code: '', rate: '', future_rate: '', effective_date: 'Active' })
}

const removeRate = (index: number) => {
  formrates.value.splice(index, 1)
}

const submitRate = async () => {
  try {
    for (const rate of formrates.value) {
      const res = await $api('/UI/configurations/bank-rates-configurations', {
        method: 'POST',
        body: {
          bank_id: route.params.id,
          rate_code: rate.rate_code,
          rate: rate.rate,
          future_rate: rate.future_rate,
          effective_date: rate.effective_date,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }
    formrates.value = [{ rate_code: '', rate: '', future_rate: '', effective_date: '' }]

    await nextTick(() => {
      fetchRates()
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <VCard class="mt-5">
        <VCardText>
          <div class="d-flex flex-wrap gap-4 mx-5 my-5">
            <div class="d-flex align-center">
              <!-- 👉 Select Role -->
              <AppTextField
                v-model="searchQuery"
                class="me-3"
                clear-icon="tabler-circle-x"
                clearable
                color="primary"
                placeholder="Rate Code"
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
          <VDataTableServer
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :headers="RatesRequestHeaders"
            :items="rates"
            :items-length="totalRates"
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
                  v-for="(rate, index) in formrates"
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
                          v-model="rate.rate_code"
                          label="Rate Code"
                          placeholder="Rate Code"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <AppTextField
                          v-model="rate.rate"
                          type="number"
                          label="Rate (%)"
                          placeholder="%"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <AppTextField
                          v-model="rate.future_rate"
                          label="Future Rate"
                          placeholder="Future Rate"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="3"
                      >
                        <AppDateTimePicker
                          v-model="rate.effective_date"
                          append-inner-icon="tabler-calendar-due"
                          label="Date"
                          placeholder="Select Date"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <AppSelect
                          v-model="rate.status"
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
                        <IconBtn @click="removeRate(index)">
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
                      @click="addRate"
                    >
                      Add New Rate
                    </VBtn>
                  </VCol>
                  <VCol
                    v-if="formrates.length > 0"
                    class="d-flex gap-4"
                    cols="12"
                    md="4"
                  >
                    <VBtn
                      type="submit"
                      @click="submitRate"
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
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <EditRatesDialog
    v-if="isRatesDialogVisible"
    v-model:isDialogVisible="isRatesDialogVisible"
    :bank_id="route.params.id"
    :rate="selectedRate"
  />
</template>

<style lang="scss">
  .config-d-flex{
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
</style>
