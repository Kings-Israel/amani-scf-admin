<script lang="ts" setup>
import { ref, onMounted, defineProps } from 'vue';
import About from '@/views/company/view/About.vue';
import Bank from '@/views/company/view/Bank.vue';
import Documents from '@/views/company/view/Documents.vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import type { Company } from './index';

definePage({
  meta: {
    navActiveLink: 'company',
    key: 'tab',
    action: 'manage',
    subject: 'View Companies',
  },
})

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const props = defineProps<{
  data: Company
}>()

const UsersRequestHeaders: TableHeader[] = [
  { title: 'Username', key: 'user.name' },
  { title: 'Email', key: 'user.email' },
  { title: 'Phone Number', key: 'user.phone_number' },
  { title: 'Status', key: 'user.is_active' }, 
]

const companyUsers = ref(props.data?.company_users ?? [])
const itemsPerPage = ref(5)
const page = ref(1)

const router = useRoute('companies-view-id')
const companyTabData = ref<Company>([])
const companyID = ref(router.params.id)

const fetchAboutData = async () => {
  try {
    const response = await $api(`all/UI/companies/${companyID.value}/details`);

    companyTabData.value = response;

    if (response?.company_users) {
      companyUsers.value = response.company_users;
      console.log(companyUsers.value); // Log the data to check the structure
    }
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

const statusOptions = [
  { title: 'Active', value: 1 },
  { title: 'Inactive', value: 0 },
]

const getStatusLabel = (status: number) => {
  return status === 1 ? 'Active' : 'Inactive';
};

onMounted(() => {
  fetchAboutData();
});

const updateOptions = (options) => {
  // Optional logic for updating options if needed
};

</script>

<template>
  <VRow>
    <VCol cols="12" md="12">
      <h5 class="text-h5">Company Details</h5>
      <h5 class="text-h5">Company ID# {{ companyTabData?.unique_identification_number }}</h5>
      <span>{{ companyTabData?.published_at }}</span>
    </VCol>
  </VRow>

  <VRow v-if="companyTabData">
    <VCol cols="12" md="4">
      <About :data="companyTabData" />
    </VCol>
    <VCol cols="12" md="8">
      <VRow>
        <VCol cols="12">
          <VCard class="mb-4">
            <VCardTitle class="d-flex justify-space-between align-center py-3 px-8">
              <h4 class="text-h6 font-weight-bold text-center mb-0"> Users</h4>
            </VCardTitle>
            <div class="d-flex flex-wrap gap-4 mx-5 my-5 row justify-space-between">
              <div class="d-flex flex-wrap gap-4 mx-5 my-5 row">
                <AppTextField
                  append-inner-icon="tabler-search"
                  class="me-1"
                  clear-icon="tabler-circle-x"
                  clearable
                  color="primary"
                  placeholder="User Name/Email"
                  style="inline-size: 200px;"
                  type="text"
                  @click:append-inner="toggleMarker"
                  @click:append="sendMessage"
                />
              </div>

              <div class="d-flex gap-4 flex-wrap align-center">
                <AppSelect
                  v-model="itemsPerPage"
                  :items="[5, 10, 20, 25, 50]"
                />
                <VBtn
                  color="primary"
                  prepend-icon="tabler-download"
                  style="text-size-adjust: auto; text-transform: none;"
                />
              </div>
            </div>

            <VDataTableServer
              v-model:items-per-page="itemsPerPage"
              v-model:page="page"
              :headers="UsersRequestHeaders"
              :items="companyUsers"
              :items-length="companyUsers.length"
              class="text-no-wrap"
              show-select
              @update:options="updateOptions"
            >
              <template #item.user.is_active="{ item }">
                <VChip
                  :color="item.user.is_active === 1 ? 'success' : 'error'"
                  label
                  size="small"
                >
                  {{ getStatusLabel(item.user.is_active) }}
                </VChip>
              </template>
            </VDataTableServer>
          </VCard>
        </VCol>
        
        <VCol cols="12">
          <Documents :documents="companyTabData.documents" />
        </VCol>
        
        <VCol cols="12" md="12">
          <Bank :data="companyTabData" />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
