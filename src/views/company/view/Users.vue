<script lang="ts" setup>
import { ref, watch, onMounted, defineProps } from 'vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import type { Company } from './index';

interface TableHeader {
  title: string;
  key: string;
  sortable?: boolean;
}

const props = defineProps<{
  data: Company;
}>();

const UsersRequestHeaders: TableHeader[] = [
  { title: 'USER NAME', key: 'user.name' },
  { title: 'USER EMAIL', key: 'user.email' },
  { title: 'USER PHONE NUMBER', key: 'user.phone_number' },
];

// Watch and ensure company data is reactive
const companyUsers = ref(props.data?.company_users ?? []);
const itemsPerPage = ref(5);
const page = ref(1);

</script>

<template>
  <VCard class="mb-4">
    <div class="d-flex flex-wrap gap-4 mx-5 my-5 row justify-space-between">
      <div class="d-flex flex-wrap gap-4 mx-5 my-5 row">
        <!-- Search functionality (optional) -->
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
        <!-- Export button (optional) -->
        <VBtn
          color="primary"
          prepend-icon="tabler-download"
          style="text-size-adjust: auto; text-transform: none;"
        />
      </div>
    </div>

    <!-- Ensure companyUsers has valid data -->
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
      <template #item.is_active="{ item }">
        <VChip :color="resolveStatus(item.active).color" :text="resolveStatus(item.active).text" />
      </template>
    </VDataTableServer>
  </VCard>
</template>
