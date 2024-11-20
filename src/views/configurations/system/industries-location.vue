<script lang="ts" setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import { paginationMeta } from '@api-utils/paginationMeta';

interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

const IndustriesRequestHeaders: TableHeader[] = [
  { title: 'Industry', key: 'name' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const LocationsRequestHeaders: TableHeader[] = [
  { title: 'Location', key: 'name' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()
// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Industries
const { data: industriesData, execute: fetchIndustries } = await useApi<any>(createUrl('/UI/configurations/industries',
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
));

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const industries = computed(() => industriesData.value.data)
const totalIndustries = computed(() => industriesData.value.total)
// Taxes

const { data: locationsData, execute: fetchLocations } = await useApi<any>(createUrl('/UI/configurations/locations',
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
));

const locations = computed(() => locationsData.value.data)
const totalLocations = computed(() => locationsData.value.total)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
});

const formindustries = ref<Array<{ name: string; status: string }>>([
  { name: '', status: 'Active' }
]);

const formlocations = ref<Array<{ name: string; status: string;}>>([
  { name: '', status: 'Active'}
]);

const addLocation = () => {
  formlocations.value.push({ name: '', status: 'Active'});
};

const removeLocation = (index: number) => {
  formlocations.value.splice(index, 1);
};
const addIndustry = () => {
  formindustries.value.push({ name: '', status: 'Active' });
};

const removeIndustry = (index: number) => {
  formindustries.value.splice(index, 1);
};

const isNewIndustryAdded = ref(false)
const isNewLocationAdded = ref(false)

const submitIndustry = async () => {
  try {
    for (const industry of formindustries.value) {
      const res = await $api('/UI/configurations/industry', {
        method: 'POST',
        body: {
          name: industry.name,
          status: industry.status
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    isNewIndustryAdded.value = true;
    formindustries.value = [{ name: '', status: '' }];

    await nextTick(() => {
      fetchIndustries();
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}

const submitLocation = async () => {
  try {
    for (const location of formlocations.value) {
    const res = await $api('/UI/configurations/location', {
      method: 'POST',
      body: {
        name: location.name,
        status: location.status,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
    }

    isNewLocationAdded.value = true
    formlocations.value = [{ name: '', status: ''}];

    await nextTick(() => {
      fetchLocations();
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
        <!-- 👉 Header -->
        <VCardItem class="notification-section">
          <h4 class="text-h4">
            Industries
          </h4>
        <VDataTableServer
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="IndustriesRequestHeaders"
          :items="industries"
          :items-length="totalIndustries"
          class="text-no-wrap"
          show-select
          @update:options="updateOptions"
        >
        <template #item.actions="{ item }">
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-pencil" color="warning" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-trash" color="danger" />
          </IconBtn>
        </template>
        <template #bottom v-if="!showFooter"></template>
        </VDataTableServer>

        <VForm @submit.prevent="() => {}">
          <template v-for="(industry, index) in formindustries" :key="index">
            <VRow>
            <div class="config-d-flex flex-wrap mx-5">
              <!-- 👉 Currency -->
              <VCol
                cols="12"
                md="2"
              >
                <AppTextField
                  v-model="industry.name"
                  label="Industry Title"
                  placeholder="Industry"
                />
              </VCol>
              <VCol cols="12" md="3">
                <label for="">Status</label>
                  <VSwitch
                    v-model="industry.status"
                    :label="industry.status.toString()"
                    true-value="Active"
                    false-value="Inactive"
                  />
              </VCol>
              <VCol cols="12" md="1">
                <IconBtn @click="removeIndustry(index)">
                  <VIcon icon="tabler-trash" color="error" />
                </IconBtn>
                </VCol>
              <!-- 👉 submit and reset button -->
            </div>
            </VRow>
          </template>
          <VRow>
            <VCol cols="12" md="12" class="text-right px-8">
              <a href="javascript:void(0)" @click="addIndustry">Add Industry</a>
            </VCol>
            <VCol
              class="d-flex gap-4"
              cols="12"
              md="9"
            >
              <VBtn
                type="submit"
                @click="submitIndustry"
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
      </VCol>

      <VCol
        cols="12"
        md="12"
      >
      <VCard class="d-flex flex-column">
        <!-- 👉 Header -->
        <VCardItem class="notification-section">
          <h4 class="text-h4">
            Locations
          </h4>
        <VDataTableServer
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="LocationsRequestHeaders"
          :items="locations"
          :items-length="totalLocations"
          class="text-no-wrap"
          show-select
          @update:options="updateOptions"
        >
        <template #item.actions="{ item }">
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-pencil" color="warning" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-trash" color="danger" />
          </IconBtn>
        </template>
        <template #bottom v-if="!showFooter"></template>
        </VDataTableServer>
          <VForm @submit.prevent="() => {}">
            <template v-for="(location, index) in formlocations" :key="index">
              <VRow>
              <div class="config-d-flex flex-wrap mx-5">
                <!-- 👉 Currency -->
                <VCol cols="12" md="4">
                  <AppTextField
                    v-model="location.name"
                    label="Name"
                    placeholder="Location Name"
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <label for="">Status</label>
                  <VSwitch
                    v-model="location.status"
                    :label="location.status.toString()"
                    true-value="Active"
                    false-value="Inactive"
                  />
                </VCol>
                <VCol cols="12" md="1">
                <IconBtn @click="removeLocation(index)">
                  <VIcon icon="tabler-trash" color="error" />
                </IconBtn>
                </VCol>
                <!-- 👉 submit and reset button -->
              </div>
            </VRow>
            </template>
            <VRow>
              <VCol cols="12" md="12" class="text-right px-8">
                <a href="javascript:void(0)" @click="addLocation">Add Location</a>
              </VCol>
              <VCol class="d-flex gap-4" cols="12" md="9">
                <VBtn
                  type="submit"
                  @click="submitLocation"
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
      </VCol>

      <!-- 👉 Tax -->
    </VRow>
  </VForm>
</template>
<style lang="scss">
  .config-d-flex{
    display: flex;
    // align-items: flex-end;
    width: 100%;
  }
</style>
