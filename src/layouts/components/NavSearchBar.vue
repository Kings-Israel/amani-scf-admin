<script lang="ts" setup>
import Shepherd from 'shepherd.js'
import { withQuery } from 'ufo'
import type { RouteLocationRaw } from 'vue-router'
import type { SearchResults } from '@db/app-bar-search/types'
import { useConfigStore } from '@core/stores/config'

interface Suggestion {
  icon: string
  title: string
  url: RouteLocationRaw
}

defineOptions({
  inheritAttrs: false,
})

const configStore = useConfigStore()

interface SuggestionGroup {
  title: string
  content: Suggestion[]
}

// 👉 Is App Search Bar Visible
const isAppSearchBarVisible = ref(false)

// 👉 Default suggestions

const suggestionGroups: SuggestionGroup[] = [
  {
    title: 'Pipeline',
    content: [
      { icon: 'tabler-pencil', title: 'New', url: { name: 'pipeline-new' } },
      {
        icon: 'tabler-chart-bubble',
        title: 'Contact',
        url: { name: 'pipeline-contacts-tab', params: { tab: 'Contacts' } },
      },
      { icon: 'tabler-file', title: 'Leads', url: { name: 'pipeline-leads-tab', params: { tab: 'Leads' } } },
      {
        icon: 'tabler-users',
        title: 'Opportunity',
        url: { name: 'pipeline-opportunity-tab', params: { tab: 'Opportunity' } },
      },
      { icon: 'tabler-users', title: 'Closed', url: { name: 'pipeline-closed-tab', params: { tab: 'Closed' } } },
    ],
  },
  {
    title: 'Calendar',
    content: [
      { icon: 'tabler-calendar', title: 'Schedules', url: { name: 'calendar-schedules' } },
      { icon: 'tabler-calendar', title: 'Follow Ups', url: { name: 'calendar-followups' } },
    ],
  },
  {
    title: 'Popular Searches',
    content: [
      { icon: 'tabler-truck-loading', title: 'Source Analysis', url: { name: 'source-analysis' } },
      { icon: 'tabler-cash-banknote', title: 'Expense Management', url: { name: 'expense-management' } },
      { icon: 'tabler-report', title: 'Report', url: { name: 'reports' } },
    ],
  },
]

// 👉 No Data suggestion
const noDataSuggestions: Suggestion[] = [
  {
    title: 'Report',
    icon: 'tabler-shopping-cart',
    url: { name: 'reports' },
  },
  {
    title: 'Account Settings',
    icon: 'tabler-user',
    url: { name: 'settings-tab', params: { tab: 'account' } },
  },
]

const searchQuery = ref('')

const router = useRouter()
const searchResult = ref<SearchResults[]>([])

const fetchResults = async () => {
  const { data } = await useApi<any>(withQuery('/app/bar/search', { q: searchQuery.value }))

  searchResult.value = data.value
}

const getOsKey = () => {
  if (navigator.platform.toUpperCase().includes('MAC')) {
    // macOS
    return '⌘'
  }
  else {
    // Windows/Linux
    return 'Ctrl+'
  }
}

const osKey = ref(getOsKey())

watch(searchQuery, fetchResults)

// 👉 redirect the selected page
const redirectToSuggestedOrSearchedPage = (selected: Suggestion) => {
  router.push(selected.url as string)
  isAppSearchBarVisible.value = false
  searchQuery.value = ''
}

const LazyAppBarSearch = defineAsyncComponent(() => import('@core/components/AppBarSearch.vue'))
</script>

<template>
  <div
    class="d-flex align-center cursor-pointer"
    style="user-select: none;"
    v-bind="$attrs"
    @click="isAppSearchBarVisible = !isAppSearchBarVisible"
  >
    <!-- 👉 Search Trigger button -->
    <!-- close active tour while opening search bar using icon -->
    <IconBtn
      class="me-1"
      @click="Shepherd.activeTour?.cancel()"
    >
      <VIcon
        icon="tabler-search"
        size="26"
      />
    </IconBtn>

    <span
      v-if="configStore.appContentLayoutNav === 'vertical'"
      class="d-none d-md-flex align-center text-disabled"
      @click="Shepherd.activeTour?.cancel()"
    >
      <span class="me-3">Search</span>
      <span class="meta-key">{{ osKey }} K</span>
    </span>
  </div>

  <!-- 👉 App Bar Search -->
  <LazyAppBarSearch
    v-model:isDialogVisible="isAppSearchBarVisible"
    :search-results="searchResult"
    @search="searchQuery = $event"
  >
    <!-- suggestion -->
    <template #suggestions>
      <VCardText class="app-bar-search-suggestions h-100 pa-10">
        <VRow
          v-if="suggestionGroups"
          class="gap-y-4"
        >
          <VCol
            v-for="suggestion in suggestionGroups"
            :key="suggestion.title"
            class="ps-6"
            cols="12"
            sm="6"
          >
            <p class="text-xs text-disabled text-uppercase">
              {{ suggestion.title }}
            </p>
            <VList class="card-list">
              <VListItem
                v-for="item in suggestion.content"
                :key="item.title"
                :title="item.title"
                class="app-bar-search-suggestion"
                link
                @click="redirectToSuggestedOrSearchedPage(item)"
              >
                <template #prepend>
                  <VIcon
                    :icon="item.icon"
                    class="me-2"
                    size="20"
                  />
                </template>
              </VListItem>
            </VList>
          </VCol>
        </VRow>
      </VCardText>
    </template>
    <!-- no data suggestion -->
    <template #noDataSuggestion>
      <div class="mt-8">
        <span class="d-flex justify-center text-disabled">Try searching for</span>
        <h6
          v-for="suggestion in noDataSuggestions"
          :key="suggestion.title"
          class="app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3"
          @click="redirectToSuggestedOrSearchedPage(suggestion)"
        >
          <VIcon
            :icon="suggestion.icon"
            class="me-3"
            size="20"
          />
          <span class="text-sm">{{ suggestion.title }}</span>
        </h6>
      </div>
    </template>
    <!-- search result -->
    <template #searchResult="{ item }">
      <VListSubheader class="text-disabled">
        {{ item.title }}
      </VListSubheader>
      <VListItem
        v-for="list in item.children"
        :key="list.title"
        link
        @click="redirectToSuggestedOrSearchedPage(list)"
      >
        <template #prepend>
          <VIcon
            :icon="list.icon"
            class="me-3"
            size="20"
          />
        </template>
        <template #append>
          <VIcon
            class="enter-icon text-disabled"
            icon="tabler-corner-down-left"
            size="20"
          />
        </template>
        <VListItemTitle>
          {{ list.title }}
        </VListItemTitle>
      </VListItem>
    </template>
  </LazyAppBarSearch>
</template>

<style lang="scss" scoped>
@use "@styles/variables/_vuetify.scss";

.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
