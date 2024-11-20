<script lang="ts" setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import EditTaxesDialog from '../dialogs/EditTaxesDialog.vue';

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const TaxesRequestHeaders: TableHeader[] = [
  { title: 'Tax Name', key: 'name' },
  { title: 'Percentage', key: 'percentage' },
  { title: 'Account No', key: 'account_no' },
  { title: 'Status', key: 'status' },
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

const filterselectedStatus = ref<string | undefined>(null);
const filtersearchQuery = ref<string | undefined>('');

const isAddPaymentMethodsDialogVisible = ref(false)
const isTaxesDialogVisible = ref(false)

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Taxes

const selectedTax = ref(null)

const isDialogVisible = ref(false)

const isADialogVisible = ref(false)

const isRDialogVisible = ref(false)

const isEDialogVisible = ref(false)

const isDDialogVisible = ref(false)

const bulkactions = ref()

const openDeleteDialog = tax => {
  selectedTax.value = tax
  isDialogVisible.value = true
}

const openApproveDialog = tax => {
  selectedTax.value = tax
  isADialogVisible.value = true
}

const openRejectDialog = tax => {
  selectedTax.value = tax
  isRDialogVisible.value = true
}

const openEnableDialog = tax => {
  selectedTax.value = tax
  isEDialogVisible.value = true
}

const openDisableDialog = tax => {
  selectedTax.value = tax
  isDDialogVisible.value = true
}

const openDialog = tax => {
  selectedTax.value = tax
  isTaxesDialogVisible.value = true
}

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
  { title: 'Waitng Checker Approval', value: 'waiting_checker_approval' },
])

const queryParams = computed(() => ({
  q: searchQuery.value,
  status: selectedStatus.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}));

const { data: taxesData, execute: fetchTaxes } = await useApi<any>(createUrl('/UI/configurations/taxes',
  {
    query: queryParams,
  },
))

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

const deleteTax = async id => {
  try {
    await $api(`UI/configurations/delete/tax-rates-configurations/${id}`, {
      method: 'POST',
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
    await fetchTaxes()
    isDialogVisible.value = false
  }
  catch (err) {
    console.error(err)
  }
}

const approve = async (id: any) => {
  await $api('/UI/configurations/activate/tax', {
    method: 'POST',
    body: {
      ids: id,
      status: bulkactions.value,
    },
  })
  await fetchTaxes()
}

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

const reject = async (taxId: any) => {
  try {
    const response = await $api('/UI/configurations/tax/disable', {
      method: 'POST',
      body: {
        tax_id: taxId,
      },
    });


    if (response.message === 'Tax deactivated successfully') {
      toast.success(response.message || 'Tax deactivated successfully', {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchTaxes();
      isRDialogVisible.value = false;
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this tax', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  } catch (error) {

    const errorMessage = error.response?.data?.message || 'Error deactivating the tax';
      toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const approval = async (taxId: any) => {
  try {
    const response = await $api('/UI/configurations/tax/approve', {
      method: 'POST',
      body: {
        tax_id: taxId, 
      },
    });

    if (response.message === 'Tax approved successfully') {
      toast.success(response.message || 'Tax approved successfully', {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchTaxes(); 
      isADialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this tax', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  } catch (error) {
    // Handle any unexpected errors that might arise
    const errorMessage = error.response?.data?.message || 'Error activating the tax';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const enable = async (taxId: any) => {
  try {
    const response = await $api('/UI/configurations/tax/initiate-activate', {
      method: 'POST',
      body: {
        tax_id: taxId,
      },
    });


    if (response.message === 'Activation initiated successfully') {
      toast.success(response.message || 'Activation initiated successfully', {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchTaxes();
      isRDialogVisible.value = false;
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this tax', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  } catch (error) {

    const errorMessage = error.response?.data?.message || 'Error deactivating the tax';
      toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const disable = async (taxId: any) => {
  try {
    const response = await $api('/UI/configurations/tax/initiate-deactivate', {
      method: 'POST',
      body: {
        tax_id: taxId,
      },
    });


    if (response.message === 'Deactivation initiated successfully') {
      toast.success(response.message || 'Deactivation initiated successfully', {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchTaxes();
      isRDialogVisible.value = false;
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this tax', {
        position: 'top-right',
        autoClose: 3000,
      });qew
    } else {
      toast.error(response.message || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  } catch (error) {

    const errorMessage = error.response?.data?.message || 'Error deactivating the tax';
      toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const submitTax = async () => {
  try {
    for (const tax of formtaxes.value) {
      const res = await $api('/UI/configurations/tax', {
        method: 'POST',
        body: {
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

const submitFilters = async () => {
  searchQuery.value = filtersearchQuery.value;
  selectedStatus.value = filterselectedStatus.value;

  await fetchTaxes(); 
};

const clearFilters = () => {
  filtersearchQuery.value = '';
  filterselectedStatus.value = '';
  page.value = 1;

  submitFilters();
};

fetchTaxes(); 
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
            <div class="d-flex align-center flex-wrap gap-4">
              <!-- 👉 Select Role -->
              <AppTextField
                v-model="filtersearchQuery"
                class="me-3"
                clear-icon="tabler-circle-x"
                clearable
                color="primary"
                placeholder="Tax Name"
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
              >
              </VBtn>
              <VBtn
                color="primary"
                prepend-icon="tabler-refresh"
                style="text-size-adjust: auto; text-transform: none;"
                @click="clearFilters"
              >
              </VBtn>
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
              <template #item.status="{ item }">
                <VChip
                  density="default"
                  label
                  v-bind="resolveStatus(item.status)"
                />
              </template>
              <template #item.actions="{ item }">
                <IconBtn @click="openDialog(item)" v-if="item.status === 'active' || item.status === 'inactive'" >
                  <VIcon
                    icon="tabler-pencil"
                    color="warning"
                  />
                </IconBtn>
                <IconBtn  v-if="item.status === 'waiting_checker_approval' && item.pending_action === 'activate' || item.pending_action === 'deactivate' && item.checker_status === true">
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
                    color="error"
                    @click="openDeleteDialog(item)"
                  />
                </IconBtn>
                <IconBtn v-if="item.checker_status === true && item.pending_action === 'Tax Created - Waiting Checker Approval'">
                  <VIcon
                    icon="tabler-square-check"
                    color="success"
                    @click="openApproveDialog(item)"
                  />
                </IconBtn>
                <IconBtn v-if="item.checker_status === true && item.pending_action === 'Tax Created - Waiting Checker Approval'">
                  <VIco
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
                <IconBtn  v-if="item.status === 'active' && item.pending_action === null" >
                  <VIcon
                    icon="tabler-thumb-up"
                    color="success"
                    @click="openDisableDialog(item)"
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
  <EditTaxesDialog
    v-if="isTaxesDialogVisible"
    v-model:isDialogVisible="isTaxesDialogVisible"
    :tax="selectedTax"
  />
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />
    <VCard>
      <VCardText>
        Are you sure you want to delete tax: {{ selectedTax.name }}? <br> This action can not be undone.
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
          @click="deleteTax(selectedTax.id)"
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
        Are you sure you want to Approve this tax: {{ selectedTax.name }}? <br> This action cannot be undone.
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
          @click="approval(selectedTax.id)"
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
        Are you sure you want to Reject this tax: {{ selectedTax.name }}? <br> This action cannot be undone.
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
          @click="reject(selectedTax.id)"
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
        Are you sure you want to Enable this tax: {{ selectedTax.name }}? <br> This action cannot be undone.
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
          @click="enable(selectedTax.id)"
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
        Are you sure you want to Disable this tax: {{ selectedTax.name }}? <br> This action cannot be undone.
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
          @click="disable(selectedTax.id)"
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
