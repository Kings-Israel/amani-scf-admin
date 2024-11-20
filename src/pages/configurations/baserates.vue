<script lang="ts" setup>
import EditRatesDialog from '@/pages/configurations/dialogs/EditRatesDialog.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTableServer } from 'vuetify/labs/VDataTable'

definePage({
  meta: {
    action: 'manage',
    subject: 'View Base Rates',
  },
})

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()

const filterselectedStatus = ref<string | undefined>(null)
const filtersearchQuery = ref<string | undefined>('')

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const bulkactions = ref()

const selectedRate = ref(null)

const isRatesDialogVisible = ref(false)
const isDialogVisible = ref(false)

const isADialogVisible = ref(false)

const isRDialogVisible = ref(false)

const isEDialogVisible = ref(false)

const isDDialogVisible = ref(false)

const RatesRequestHeaders: TableHeader[] = [
  { title: 'Rate Code', key: 'rate_code' },
  { title: 'Rate', key: 'rate' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

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

const queryParams = computed(() => ({
  q: searchQuery.value,
  status: selectedStatus.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}))

const { data: ratesData, execute: fetchRates } = await useApi<any>(createUrl('/UI/configurations/base-rates',
  {
    query: queryParams,
  },
))

const rates = computed(() => ratesData.value.data)
const totalRates = computed(() => ratesData.value.total)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const openDeleteDialog = rate => {
  selectedRate.value = rate
  isDialogVisible.value = true
}

const openApproveDialog = rate => {
  selectedRate.value = rate
  isADialogVisible.value = true
}

const openRejectDialog = rate => {
  selectedRate.value = rate
  isRDialogVisible.value = true
}

const openEnableDialog = rate => {
  selectedRate.value = rate
  isEDialogVisible.value = true
}

const openDisableDialog = rate => {
  selectedRate.value = rate
  isDDialogVisible.value = true
}

const openDialog = rate => {
  selectedRate.value = rate
  isRatesDialogVisible.value = true
}

const formrates = ref<Array<{ rate_code: string; rate: string; future_rate: string; effective_date: string }>>([])

const addRate = () => {
  formrates.value.push({ rate_code: '', rate: '', future_rate: '', effective_date: 'Active' })
}

const removeRate = (index: number) => {
  formrates.value.splice(index, 1)
}

const resolveActionBtns = (status: string) => {
  if (status && status === 'active')
    return { color: 'error', icon: 'tabler-circle-dot', title: 'Deactivate' }
  else
    return { color: 'primary', icon: 'tabler-circle-check', title: 'Activate' }
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }
  if (statusMsg === 'waiting_checker_approval')
    return { text: 'Pending Checker', color: 'info' }

  return { text: 'Inactive', color: 'error' }
}

const submitRate = async () => {
  try {
    for (const rate of formrates.value) {
      const res = await $api('/UI/configurations/base-rate', {
        method: 'POST',
        body: {
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

const deleteRate = async id => {
  try {
    await $api(`UI/configurations/delete/base-rates-configurations/${id}`, {
      method: 'POST',
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
    await fetchRates()
    isDialogVisible.value = false
  }
  catch (err) {
    console.error(err)
  }
}

const approval = async (rateId: any) => {
  try {
    const response = await $api('/UI/configurations/base-rate/approve', {
      method: 'POST',
      body: {
        rate_id: rateId,
      },
    })

    if (response.message === 'Rate approved successfully') {
      toast.success(response.message || 'Rate approved successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchRates()
      isADialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this Rate', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
    else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error activating the tax'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const reject = async (rateId: any) => {
  try {
    const response = await $api('/UI/configurations/base-rate/disable', {
      method: 'POST',
      body: {
        rate_id: rateId,
      },
    })

    if (response.message === 'Rate deactivated successfully') {
      toast.success(response.message || 'Rate deactivated successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchRates()
      isRDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this rate', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
    else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error deactivating the tax'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const enable = async (rateId: any) => {
  try {
    const response = await $api('/UI/configurations/base-rate/initiate-activate', {
      method: 'POST',
      body: {
        rate_id: rateId,
      },
    })

    if (response.message === 'Activation initiated successfully') {
      toast.success(response.message || 'Activation initiated successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchRates()
      isEDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this tax', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
    else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error deactivating the tax'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const disable = async (rateId: any) => {
  try {
    const response = await $api('/UI/configurations/base-rate/initiate-deactivate', {
      method: 'POST',
      body: {
        rate_id: rateId,
      },
    })

    if (response.message === 'Deactivation initiated successfully') {
      toast.success(response.message || 'Deactivation initiated successfully', {
        position: 'top-right',
        autoClose: 3000,
      })

      await fetchRates()
      isDDialogVisible.value = false
    }
    else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this tax', {
        position: 'top-right',
        autoClose: 3000,
      }); qew
    }
    else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error deactivating the tax'

    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    })
  }
}

const approve = async (id: any) => {
  await $api('UI/configurations/activate/base-rates-configurations', {
    method: 'POST',
    body: {
      ids: id,
      status: bulkactions.value,
    },
  })
  await fetchRates()
}

const submitFilters = async () => {
  searchQuery.value = filtersearchQuery.value
  selectedStatus.value = filterselectedStatus.value

  await fetchRates()
}

const clearFilters = () => {
  filtersearchQuery.value = ''
  filterselectedStatus.value = ''
  page.value = 1

  submitFilters()
}

fetchRates()
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
            <div class="d-flex align-center flex-wrap gap-4">
              <!-- 👉 Select Role -->
              <AppTextField
                v-model="filtersearchQuery"
                class="me-3"
                clear-icon="tabler-circle-x"
                clearable
                color="primary"
                placeholder="Rate Code"
                style="inline-size: 200px;"
                type="text"
              />
              <AppSelect
                v-model="filterselectedStatus"
                :items="status"
                class="me-3"
                clear-icon="tabler-x"
                clearable
                placeholder="Status"
                style="inline-size: 200px;"
              />
              <VBtn
                color="primary"
                prepend-icon="tabler-search"
                style="text-size-adjust: auto; text-transform: none;"
                @click="submitFilters"
              />
              <VBtn
                color="primary"
                prepend-icon="tabler-refresh"
                style="text-size-adjust: auto; text-transform: none;"
                @click="clearFilters"
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
            <template #item.status="{ item }">
              <VChip
                density="default"
                label
                v-bind="resolveStatus(item.status)"
              />
            </template>
            <template #item.actions="{ item }">
              <IconBtn @click="openDialog(item)" v-if="item.status === 'active' || item.status === 'inactive'">
                <VIcon
                  icon="tabler-pencil"
                  color="warning"
                />
              </IconBtn>
              <IconBtn v-if="item.status === 'waiting_checker_approval' && item.pending_action === 'activate' || item.pending_action === 'deactivate' && item.checker_status === true">
                <VIcon
                  :icon="resolveActionBtns(item.status)?.icon"
                  :color="resolveActionBtns(item.status)?.color"
                  :title="item.status"
                  @click="approve([item.id])"
                />
              </IconBtn>
              <IconBtn v-if="item.status === 'active' || item.status === 'inactive'">
                <VIcon
                  icon="tabler-trash"
                  color="danger"
                  @click="openDeleteDialog(item)"
                />
              </IconBtn>
              <IconBtn v-if="item.checker_status === true && item.pending_action === 'Base Rate Created - Waiting Checker Approval'">
                <VIcon
                  icon="tabler-square-check"
                  color="success"
                  @click="openApproveDialog(item)"
                />
              </IconBtn>
              <IconBtn v-if="item.checker_status === true && item.pending_action === 'Base Rate Created - Waiting Checker Approval'">
                <VIcon
                  icon="tabler-square-x"
                  color="error"
                  @click="openRejectDialog(item)"
                />
              </IconBtn>
              <IconBtn v-if="item.status === 'inactive' && item.pending_action === null" >
                <VIcon
                  icon="tabler-thumb-down"
                  color="error"
                  @click="openEnableDialog(item)"
                />
              </IconBtn>
              <IconBtn v-if="item.status === 'active' && item.pending_action === null">
                <VIcon
                  icon="tabler-thumb-up"
                  color="success"
                  @click="openDisableDialog(item)"
                />
              </IconBtn>
            </template>
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
    :rate="selectedRate"
  />
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to delete rate: {{ selectedRate.rate_code }}? <br> This action can not be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="deleteRate(selectedRate.id)"
        >
          Delete
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isADialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isADialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Approve this Rate: {{ selectedRate.rate_code }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isADialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="approval(selectedRate.id)"
        >
          Approve
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isRDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isRDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Reject this  Rate: {{ selectedRate.rate_code }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isRDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="reject(selectedRate.id)"
        >
          Reject
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isEDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isEDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Enable this  Rate: {{ selectedRate.rate_code }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isEDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="enable(selectedRate.id)"
        >
          Enable
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isDDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDDialogVisible = false" />

    <VCard>
      <VCardText>
        Are you sure you want to Disable this  Rate: {{ selectedRate.rate_code }}? <br> This action cannot be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="disable(selectedRate.id)"
        >
          Disable
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
  .config-d-flex{
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
</style>
