<script lang="ts" setup>
import CardWidgets from '@/views/pipeline/CardWidgets.vue'
import Closed from '@/views/pipeline/Closed.vue'
import ColdLeads from '@/views/pipeline/ColdLeads.vue'
import Contacts from '@/views/pipeline/Contacts.vue'
import Leads from '@/views/pipeline/Leads.vue'
import Opportunity from '@/views/pipeline/Opportunity.vue'
import Rejects from '@/views/pipeline/Rejects.vue'

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-Leads',
    key: 'tab',
    action: 'manage',
    subject: 'View Lead',
  },
})

const route = useRoute('pipeline-leads-tab')

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
      :to="{ name: 'pipeline-leads-tab', params: { tab: item.tab } }"
      :value="item.tab"
    >
      <VIcon
        :icon="item.icon"
        size="20"
        start
      />
      {{ item.title }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="activeTab"
    :touch="false"
    class="mt-5 disable-tab-transition"
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
