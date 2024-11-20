<script lang="ts" setup>
import EditBankDialog from '@/pages/configurations/dialogs/EditBankDialog.vue';
import EditBankMasterlistDialog from '@/pages/configurations/dialogs/EditBankMasterlistDialog.vue';
import { paginationMeta } from '@api-utils/paginationMeta';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { VDataTableServer } from 'vuetify/labs/VDataTable';


definePage({
  meta: {
    action: 'manage',
    subject: 'View Banks',
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
// const selectedStatus = ref()

const filterselectedStatus = ref<string | undefined>(null);
const filterBank = ref<string | undefined>('');

const bank = ref<string | undefined>();
const selectedStatus = ref<string | undefined>();

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const bulkactions = ref()

const selectedBank = ref(null)

const isBankDialogVisible = ref(false)
const isActivateDialogVisible = ref(false)
const isDeactivateDialogVisible = ref(false)
const isBankMDialogVisible = ref(false)
const isDialogVisible = ref(false)
const isADialogVisible = ref(false)
const isRDialogVisible = ref(false)
const isEDialogVisible = ref(false)
const isDDialogVisible = ref(false)

const BanksRequestHeaders: TableHeader[] = [
  { title: 'Bank Name', key: 'name' },
  { title: 'Swift Code', key: 'swift_code' },
  { title: 'Status', key: 'status' },
  { title: 'Created At', key: 'created_at' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const status = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])


// Computed Query Params for API
const queryParams = computed(() => ({
  bank: bank.value,
  status: selectedStatus.value,
  page: page.value,
  itemsPerPage: itemsPerPage.value,
  orderBy: orderBy.value,
}));

const { data: banksData, execute: fetchList } = await useApi<any>(createUrl('/bank/masterlist', {
  query: queryParams,
}
))

const banks = computed(() => banksData.value.data)
const totalBanks = computed(() => banksData.value.total)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const updateOptions = (options: any) => {
  page.value = options.page;
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
};

const openDeleteDialog = bank => {
  selectedBank.value = bank
  isDialogVisible.value = true
}

const openADialog = bank => {
  selectedBank.value = bank
  isADialogVisible.value = true
}

const openRDialog = bank => {
  selectedBank.value = bank
  isRDialogVisible.value = true
}

const openEDialog = bank => {
  selectedBank.value = bank
  isEDialogVisible.value = true
}

const openDDialog = bank => {
  selectedBank.value = bank
  isDDialogVisible.value = true
}

const openDialog = bank => {
  selectedBank.value = bank
  isBankDialogVisible.value = true
}

const openActivateDialog = bank => {
  selectedBank.value = bank
  isActivateDialogVisible.value = true
}

const openDeactivateDialog = bank => {
  selectedBank.value = bank
  isDeactivateDialogVisible.value = true
}

const openMasterlistDialog = () => {
  isBankMDialogVisible.value = true
}

const formbanks = ref<Array<{ bank_name: string; swift_code: string; status: string; }>>([])

const addBank = () => {
  formbanks.value.push({ bank_name: '', swift_code: '', status: 'Active'})
}

const removeRate = (index: number) => {
  formbanks.value.splice(index, 1)
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'active')
    return { text: 'Active', color: 'success' }
  if (statusMsg === 'waiting_checker_approval')
    return { text: 'Waiting Checker A', color: 'info' }
  return { text: 'Inactive', color: 'error' }
}

const resolveActionBtns = (pending_status: string) => {
  if (pending_status && pending_status === 'activate')
    return { color: 'error', icon: 'tabler-circle-dot' }
  else
    return { color: 'primary', icon: 'tabler-circle-check' }
}

const submitRate = async () => {
  try {
    for (const bank of formbanks.value) {
      const res = await $api('/post/bank/masterlist', {
        method: 'POST',
        body: {
          bank_name: bank.bank_name,
          swift_code: bank.swift_code,
          status: bank.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }
    formbanks.value = [{ bank_name: '', swift_code: '', status: ''}]

    await nextTick(() => {
      toast.success("Bank added successfully", {
        position: 'top-right',
        autoClose: 3000,
      });

      fetchList()
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}

const deleteRate = async id => {
  try {
    await $api(`delete/bank/masterlist/${id}`, {
      method: 'POST',
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
    await fetchList()
    isDialogVisible.value = false
  }
  catch (err) {
    console.error(err)
  }
}

const approve = async (id: any) => {
  await $api('/activate/bank/masterlist', {
    method: 'POST',
    body: {
      ids: id,
      status: bulkactions.value,
    },
  })
  await fetchList()
}

const approveBank = async (bankId) => {
  try {
    const response = await $api('/post/bank/masterlist/approve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_id: bankId,
      }),
    });

    if (response.message === 'Bank approved successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchList();
      isADialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot approve this bank', {
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
    const errorMessage = error.response?.data?.message || 'Error approving the bank';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const rejectBank = async (bankId) => {
  try {
    const response = await $api('/post/bank/masterlist/reject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_id: bankId,
      }),
    });

    if (response.message === 'Bank rejected successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchList();
      isRDialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot reject this bank', {
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
    const errorMessage = error.response?.data?.message || 'Error rejecting the bank';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const enableBank = async (bankId) => {
  try {
    const response = await $api('/post/bank/masterlist/enable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_id: bankId,
      }),
    });

    if (response.message === 'Bank updated successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchList();  
      isEDialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot enable this bank', {
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
    const errorMessage = error.response?.data?.message || 'Error enabling the bank';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const disableBank = async (bankId) => {
  try {
    const response = await $api('/post/bank/masterlist/disable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_id: bankId,
      }),
    });

    if (response.message === 'Bank updated successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchList(); 
      isDDialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot disable this bank', {
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
    const errorMessage = error.response?.data?.message || 'Error disabling the bank';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const activateBank = async (bankId) => {
  try {
    const response = await $api('/post/bank/masterlist/activate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_id: bankId,
      }),
    });

    if (response.message === 'Bank activated successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchList(); 
      isActivateDialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot activate this bank', {
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
    const errorMessage = error.response?.data?.message || 'Error activating the bank';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
};

const deactivateBank = async (bankId) => {
  try {
    const response = await $api('/post/bank/masterlist/deactivate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_id: bankId,
      }),
    });

    if (response.message === 'Bank deactivated successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchList(); 
      isDeactivateDialogVisible.value = false; 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this bank', {
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
    const errorMessage = error.response?.data?.message || 'Error deactivating the bank';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
};

const submitFilters = async () => {
  bank.value = filterBank.value;
  selectedStatus.value = filterselectedStatus.value;

  await fetchList(); 
};

const clearFilters = () => {
  filterBank.value = '';
  filterselectedStatus.value = '';
  page.value = 1;

  submitFilters();
};

fetchList(); 
</script>

<template>
  <VRow>
    <VCol cols="12" md="12">
      <VCard class="mt-5">
        <VCardText>
          <div class="d-flex align-center gap-4 mx-5 my-5">
            <div class="d-flex align-center flex-wrap gap-4">

            <AppTextField
              v-model="filterBank"
              class="me-3"
              clear-icon="tabler-circle-x"
              clearable
              color="primary"
              placeholder="Bank Name"
              type="text"
              style="inline-size: 200px;"
            />
            <AppSelect
              v-model="filterselectedStatus"
              :items="status"
              clear-icon="tabler-circle-x"
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

            <div class="d-flex gap-4 flex-wrap align-center">
            <AppSelect
              v-model="itemsPerPage"
              :items="[5, 10, 20, 25, 50, 100]"
              style="flex: 1 1 auto;"
              
            />
            <!-- Export Button -->
            <VBtn
              color="primary"
              prepend-icon="tabler-download"
              style="text-size-adjust: auto; text-transform: none;"
              @click="exportToExcel"
            >
              Export
            </VBtn>

          </div>
          </div>
        </div>
          <VDataTableServer
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :headers="BanksRequestHeaders"
            :items="banks"
            :items-length="totalBanks"
            class="text-no-wrap"
            show-select
            @update:options="updateOptions"
          >
              <template #item.name="{ item }">
              <div class="d-flex align-center">
                <span>{{ item.name }}</span>

                <IconBtn
                  v-if="item.pending_action !== null"
                  class="mx-1"
                  small
                  color="error"
                >
                  <VTooltip bottom>
                    <template #activator="{ props }">
                      <VIcon
                        v-bind="props"
                        icon="tabler-info-circle"
                        size="20"
                        @click="openInfoDialog(item)"
                      />
                    </template>
                    <span> Bank Creation/Updation - {{ item.pending_action }}</span>
                  </VTooltip>
                </IconBtn>
              </div>
            </template>
            <template #item.status="{ item }">
              <VChip
                density="default"
                label
                v-bind="resolveStatus(item.status)"
              />
            </template>
            <template #item.actions="{ item }">
              <IconBtn 
                v-if="item.status === 'active' || item.status === 'inactive'"
                @click="openDialog(item)">
                <VIcon

                  icon="tabler-pencil"
                  color="warning"
                />
              </IconBtn>
              <IconBtn 
              v-if="item.status === 'waiting_checker_approval' && item.pending_action === 'activate' && item.checker_status === true"
              >
                <VIcon
                  icon="tabler-circle-check"
                  color="primary"
                  @click="openActivateDialog(item)"
                />
              </IconBtn>

              <!-- Reject Button -->
              <IconBtn 
              v-if="item.status === 'waiting_checker_approval' && item.pending_action === 'deactivate' && item.checker_status === true"
              >
                <VIcon
                  icon="tabler-circle-x"
                  color="error"
                  @click="openDeactivateDialog(item)"
                />
              </IconBtn>
              <IconBtn
              v-if="item.status === 'active' || item.status === 'inactive'"
              >
                <VIcon
                  icon="tabler-trash"
                  color="danger"
                  @click="openDeleteDialog(item)"
                />
              </IconBtn>
              <IconBtn v-if="item.checker_status === true && item.pending_action === 'Bank Creation - Waiting for Approval'">
                <VIcon
                  icon="tabler-square-check"
                  color="success"
                  @click="openADialog(item)"
                />
              </IconBtn>

              <!-- Reject Button -->
              <IconBtn v-if="item.checker_status === true && item.pending_action === 'Bank Creation - Waiting for Approval'">
                <VIcon
                  icon="tabler-square-x"
                  color="error"
                  @click="openRDialog(item)"
                />
              </IconBtn>

              <!-- Enable Button -->
              <IconBtn v-if="item.status === 'inactive' && item.pending_action === null">
                <VIcon
                  icon="tabler-thumb-down"
                  color="error"
                  @click="openEDialog(item)"
                />
              </IconBtn>

              <!-- Disable Button -->
              <IconBtn v-if="item.status === 'active' && item.pending_action === null">
                <VIcon
                  icon="tabler-thumb-up"
                  color="success"
                  @click="openDDialog(item)"
                />
              </IconBtn>
            </template>
            <!-- <template #bottom v-if="!showFooter"></template> -->
            <template #bottom>
              <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
                <p class="text-sm text-medium-emphasis mb-0">
                  {{ paginationMeta({ page, itemsPerPage }, totalBanks) }}
                </p>
                <VPagination
                  v-model="page"
                  :length="Math.ceil(totalBanks / itemsPerPage)"
                  :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalBanks / itemsPerPage), 5)"
                  active-color="primary"
                  next-icon="tabler-caret-right"
                  prev-icon="tabler-caret-left"
                />
              </div>
            </template>
          </VDataTableServer>
          <VCard>
  <VCardItem>
    <VForm @submit.prevent="() => {}">
      <template
        v-for="(bank, index) in formbanks"
        :key="index"
      >
        <VRow>
          <div class="config-d-flex flex-wrap mx-5">
            <!-- 👉 Currency -->
            <VCol cols="12" md="2">
              <AppTextField
                v-model="bank.bank_name"
                label="Bank Name * "
                placeholder="Bank Name"
                :label-html="true"
              />
            </VCol>
            <VCol cols="12" md="2">
              <AppTextField
                v-model="bank.swift_code"
                label="Swift Code  *"
                placeholder="Swift Code"
                :label-html="true"
              />
            </VCol>
            
            <VCol cols="12" md="1">
              <IconBtn @click="removeRate(index)">
                <VIcon icon="tabler-trash" color="error" />
              </IconBtn>
            </VCol>
          </div>
        </VRow>
      </template>
      <VRow>
        <VCol cols="12" md="2" class="text-left">
          <VBtn color="primary" @click="addBank">
            Add New Bank
          </VBtn>
        </VCol>
        <VCol v-if="formbanks.length > 0" class="d-flex gap-4" cols="12" md="4">
          <VBtn type="submit" @click="submitRate">
            Submit
          </VBtn>
          <VBtn color="secondary" type="reset" variant="tonal">
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
    <EditBankDialog
      v-if="isBankDialogVisible"
      v-model:isDialogVisible="isBankDialogVisible"
      :bank="selectedBank"
    />
    <EditBankMasterlistDialog
      v-if="isBankMDialogVisible"
      v-model:isDialogVisible="isBankMDialogVisible"
    />
  </VRow>
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
        Are you sure you want to delete bank: {{ selectedBank.name }}? <br> This action can not be undone.
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
          @click="deleteRate(selectedBank.id)"
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
    <DialogCloseBtn @click="isADialogVisible = !isADialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Approve this bank: {{ selectedBank.name }}? <br> This action can not be undone.
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
          @click="approveBank(selectedBank.id)"
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
    <DialogCloseBtn @click="isRDialogVisible = !isRDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Reject this bank: {{ selectedBank.name }}? <br> This action can not be undone.
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
          @click="rejectBank(selectedBank.id)"
        >
          Reject
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
    <DialogCloseBtn @click="isDDialogVisible = !isDDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Disable this bank: {{ selectedBank.name }}? <br> This action can not be undone.
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
          @click="disableBank(selectedBank.id)"
        >
          Disable
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
    <DialogCloseBtn @click="isEDialogVisible = !isEDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Enable this bank: {{ selectedBank.name }}? <br> This action can not be undone.
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
          @click="enableBank(selectedBank.id)"
        >
          Enable
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
    <DialogCloseBtn @click="isEDialogVisible = !isEDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Enable this bank: {{ selectedBank.name }}? <br> This action can not be undone.
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
          @click="enableBank(selectedBank.id)"
        >
          Enable
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isActivateDialogVisible"
    persistent
    class="v-dialog-sm"
    >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isActivateDialogVisible = !isActivateDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Activate this bank: {{ selectedBank.name }}? <br> This action can not be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isActivateDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="success"
          @click="activateBank(selectedBank.id)"
        >
          Activate
        </VBtn>
      </VCardText>
    </VCard>
    </VDialog>
    <VDialog
    v-model="isDeactivateDialogVisible"
    persistent
    class="v-dialog-sm"
    >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDeactivateDialogVisible = !isDeactivateDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardText>
        Are you sure you want to Activate this bank: {{ selectedBank.name }}? <br> This action can not be undone.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDeactivateDialogVisible = false"
        >
          Cancel
        </VBtn>
        <VBtn
          color="error"
          @click="deactivateBank(selectedBank.id)"
        >
          Deactivate
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

  .required-asterisk {
  color: red;
  font-weight: bold;
}
</style>

