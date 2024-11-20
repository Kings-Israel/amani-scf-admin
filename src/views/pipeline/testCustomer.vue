<script lang="ts" setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { ContactsHeaders } from './index'
import { paginationMeta } from '@api-utils/paginationMeta'

// TODO: Updates this tomorrow morning
const marker = ref(true)
const iconIndex = ref(0)
const searchQuery = ref('')
const selectedStatus = ref()
const router = useRouter()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  searchQuery.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}

const status = ref([
  { title: 'Hot', value: 'hot' },
  { title: 'Warm', value: 'warm' },
  { title: 'Cold', value: 'cold' },
])

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const limitString = (str: string, maxLength: number) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'warm')
    return { text: 'Warm', color: 'warning' }

  if (statusMsg === 'hot')
    return { text: 'Hot', color: 'success' }

  return { text: 'Cold', color: 'error' }
}

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/pipelines/contacts',
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

const schedule = async (id: number) => {
  useCookie('scheduleIDCookie').value = id.toString()
  await router.push('/calendar/schedules')
}

const products = computed(() => productsData.value.data)
const totalProduct = computed(() => productsData.value.total)

fetchProducts()
</script>

<template>
  <div>
    <!-- 👉 products -->
    <VCard class="mb-6 pt-10">
      <div class="d-flex flex-wrap gap-4 mx-5">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <AppTextField
            v-model="searchQuery"
            :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Company Name"
            style="inline-size: 200px;"
            type="text"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
          />
          <AppTextField
            v-model="searchQuery"
            :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Contact Person"
            style="inline-size: 200px;"
            type="text"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
          />
          <AppTextField
            v-model="searchQuery"
            :append-inner-icon="marker ? 'tabler-calendar' : 'tabler-map-pin-off'"
            class="me-3"
            clear-icon="tabler-circle-x"
            clearable
            color="primary"
            placeholder="Date"
            style="inline-size: 200px;"
            type="text"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
          />
          <AppSelect
            v-model="selectedStatus"
            :items="status"
            clear-icon="tabler-x"
            clearable
            placeholder="Status"
            style="inline-size: 200px;"
          />
        </div>

        <VSpacer />
        <div class="d-flex gap-4 flex-wrap align-center">
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50]"
          />
          <DownloadExcel
            :data="products"
            name="contacts.xls"
            worksheet="My Worksheet"
          >
            <VBtn
              color="primary"
              prepend-icon="tabler-download"
              style=" text-size-adjust: auto;text-transform: none;"
            />
          </DownloadExcel>

          <VBtn
            color="primary"
            @click="$router.push('/pipeline/new')"
          >
            New Contact
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="ContactsHeaders"
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >
        <template #item.email="{ item }">
          <span :title="item.email">{{ limitString(item.email, 10) }}</span>
        </template>
        <!-- status -->
        <template #item.status="{ item }">
          <VChip
            density="default"
            label
            v-bind="resolveStatus(item.status)"
          />
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn>
            <VIcon
              icon="tabler-edit"
              @click="$router.push(`/pipeline/edit/${item.id}`)"
            />
          </IconBtn>
          <IconBtn>
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem
                  prepend-icon="tabler-mail"
                  value="download"
                  @click="schedule(item.id)"
                >
                  Schedule Visit
                </VListItem>

                <VListItem
                  prepend-icon="tabler-share"
                  value="convertToLead"
                  @click="$router.push(`/pipeline/leads/new/${item.id}`)"
                >
                  Convert to Lead
                </VListItem>

                <VListItem
                  prepend-icon="tabler-eye"
                  value="duplicate"
                  @click="$router.push(`/pipeline/view/${item.id}`)"
                >
                  View
                </VListItem>
              </VList>
            </VMenu>
          </IconBtn>
        </template>

        <template #bottom>
          <VDivider />

          <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-medium-emphasis mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalProduct) }}
            </p>

            <VPagination
              v-model="page"
              :length="Math.min(Math.ceil(totalProduct / itemsPerPage), 5)"
              :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalProduct / itemsPerPage), 5)"
            />
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
