<script setup lang="ts">
import CardWidgets from '@/views/pipeline/CardWidgets.vue'
import Closed from '@/views/pipeline/Closed.vue'
import ColdLeads from '@/views/pipeline/ColdLeads.vue'
import Contacts from '@/views/pipeline/Contacts.vue'
import Leads from '@/views/pipeline/Leads.vue'
import Opportunity from '@/views/pipeline/Opportunity.vue'
import Rejects from '@/views/pipeline/Rejects.vue'

definePage({
  meta: {
    navActiveLink: 'pipeline-contacts-Contacts',
    key: 'tab',
  },
})

const route = useRoute('pipeline-contacts-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'Contacts', icon: 'tabler-user-check', tab: 'Contacts' },
  { title: 'Leads', icon: 'tabler-users', tab: 'Leads' },
  { title: 'Opportunities', icon: 'tabler-layout-grid', tab: 'Opportunity' },
  { title: 'Cold Leads', icon: 'tabler-coffee-off', tab: 'ColdLeads' },
  { title: 'Rejects', icon: 'tabler-flag-cancel', tab: 'Rejects' },
  { title: 'Closed', icon: 'tabler-link', tab: 'Closed' },
]
</script>

<template>
  <div>
    <CardWidgets />
  </div>

  <VTabs
    v-model="activeTab"
    class="v-tabs-pill"
  >
    <VTab
      v-for="item in tabs"
      :key="item.icon"
      :value="item.tab"
      :to="{ name: 'pipeline-contacts-tab', params: { tab: item.tab } }"
    >
      <VIcon
        size="20"
        start
        :icon="item.icon"
      />
      {{ item.title }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="activeTab"
    class="mt-5 disable-tab-transition"
    :touch="false"
  >
    <!-- Profile -->
    <VWindowItem value="Contacts">
      <Contacts />
    </VWindowItem>

    <!-- Teams -->
    <VWindowItem value="Leads">
      <Leads />
    </VWindowItem>

    <!-- Projects -->
    <VWindowItem value="Opportunity">
      <Opportunity />
    </VWindowItem>

    <!-- Connections -->
    <VWindowItem value="ColdLeads">
      <ColdLeads />
    </VWindowItem>
    <VWindowItem value="Rejects">
      <Rejects />
    </VWindowItem>
    <VWindowItem value="Closed">
      <Closed />
    </VWindowItem>
  </VWindow>
</template>
