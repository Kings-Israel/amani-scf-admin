<script lang="ts" setup>
import { paginationMeta } from '@api-utils/paginationMeta'
import { computed, onMounted, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { VDataTable } from 'vuetify/labs/VDataTable'

const route = useRoute()
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref('')
const orderBy = ref('')
const search = ref('')
const bankId = route.params.id // Assuming bank ID comes from route parameters
const isDeactivateDialogVisible = ref(false) // Control for the deactivate dialog

const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key || ''
  orderBy.value = options.sortBy[0]?.order || ''
}

const options = ref({ itemsPerPage: 5, page: 1 })

interface User {
  id: number
  name: string
  email: string
  phone_number: string
  created_at: Date
  status: string
  checker_status: boolean
}

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'NAME', key: 'name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'PHONE NUMBER', key: 'phone_number' },
  { title: 'CREATED AT', key: 'created_at' },
  { title: 'STATUS', key: 'status', sortable: false },
  { title: 'ACTIONS', key: 'actions', sortable: false },
]

const { data: userData, execute: fetchBankUser } = useApi<any>(
  `/get/bank/users/${bankId}`,
  {
    query: {
      q: search,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  }
)

const users: Ref<User[]> = computed(() => userData.value?.data || [])
const total = computed(() => userData.value?.total || 0)

onMounted(() => fetchBankUser())

const approveUser = async (userId: number) => {
  try {
    const response = await $api('/add/user/activate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId, 
      }),
    });

    if (response.message === 'User activated successfully') {
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 3000,
      });

      await fetchBankUser(); 
    } else if (response.status === 403) {
      toast.warn(response.message || 'You cannot deactivate this user', {
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
    const errorMessage = error.response?.data?.message || 'Error deactivating the user';
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'Active') {
    return { text: 'Active', color: 'success' };
  }
  if (statusMsg === 'Waiting Approval') {
    return { text: 'Pending Checker', color: 'info' };
  }
  return { text: 'Inactive', color: 'error' };
};
</script>


<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Bank Users">
        <VCardText>
          <div class="d-flex">
            <AppSelect
              v-model="options.itemsPerPage"
              :items="[
                { value: 5, title: '5' },
                { value: 10, title: '10' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 6.25rem;"
            />
            <div class="flex-grow-1" />
            <!-- <AppTextField
              v-model="search"
              placeholder="Search..."
            /> -->
          </div>
        </VCardText>
        <VDivider />

        <!-- SECTION Datatable -->
        <VDataTable
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="headers"
          :items="users"
          :items-length="total"
          class="text-no-wrap"
          @update:options="updateOptions"
        >
            <template #item.status="{ item }">
              <VChip
                density="default"
                label
                v-bind="resolveStatus(item.status)"
              />
             </template>
          <!-- User name -->
          <template #item.name="{ item }">
            <div class="d-flex">
              <div>
                <div class="font-weight-medium mb-0 text-no-wrap">
                  {{ item.name }}
                </div>
                <p class="text-xs text-medium-emphasis mb-0">
                  {{ item.email }}
                </p>
              </div>
            </div>
          </template>


          <template #item.actions="{ item }">
            <IconBtn
              v-if="item.status === 'Waiting Approval' && item.checker_status"
              @click="approveUser(item.id)"
            >
              <VIcon icon="tabler-circle-check" color="primary" />
            </IconBtn>
          </template>


          <!-- Pagination -->
          <template #bottom>
            <VDivider />
            <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
              <p class="text-sm text-disabled mb-0">
                {{ paginationMeta({ page, itemsPerPage }, total) }}
              </p>

              <VPagination
                v-model="page"
                :length="Math.ceil(total / itemsPerPage)"
                :total-visible="$vuetify.display.xs ? 1 : 5"
              />
            </div>
          </template>
        </VDataTable>
        <!-- !SECTION -->
      </VCard>
    </VCol>
  </VRow>
</template>
