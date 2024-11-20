<script lang="ts" setup>
import AccountSettingsAccount from '@/views/settings/AccountSettingsAccount.vue'
import AccountSettingsNotification from '@/views/settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/settings/AccountSettingsSecurity.vue'

const route = useRoute('settings-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'Account', icon: 'tabler-users', tab: 'account' },
  { title: 'Security', icon: 'tabler-lock', tab: 'security' },
  { title: 'Notifications', icon: 'tabler-bell', tab: 'notification' },
]

definePage({
  meta: {
    navActiveLink: 'home',
  },
})
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :to="{ name: 'settings-tab', params: { tab: item.tab } }"
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
      class="mt-6 disable-tab-transition"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>
    </VWindow>
  </div>
</template>
