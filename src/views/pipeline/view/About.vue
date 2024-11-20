<script lang="ts" setup>
import type { Opportunity } from './index'

definePage({
  meta: {
    navActiveLink: 'lead-pipeline-new',
    key: 'tab',
    action: 'manage',
    subject: 'Add Contact',
  },
})

interface Props {
  data: Opportunity[]
}

const props = defineProps<Props>()
const opportunity = toRef(props.data)

console.log('Opportunity', opportunity.value)
</script>

<template>
  <VCard class="mb-4">
    <VCardText>
      <p class="text-xs">
        ABOUT
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in opportunity"
          :key="item.name"
        >
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-user"
              size="20"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Name:</span>
            <span>{{ item.name }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Branch:</span>
            <span>{{ item.branch }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Department:</span>
            <span>{{ item.department }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Interaction Type:</span>
            <span>{{ item.interaction_type }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Gender Type:</span>
            <span>{{ item.gender }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>

      <p class="text-xs mt-5">
        CONTACTS
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data"
          :key="item.name"
        >
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-mail"
              size="20"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Email:</span>
            <span>{{ item.email }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Phone Number:</span>
            <span>{{ item.phone_number }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Priority:</span>
            <span>{{ item.priority }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>

      <p class="text-xs mt-5">
        Product
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data"
          :key="item.name"
        >
          <template #prepend>
            <VIcon
              :color="item.name"
              class="me-2"
              icon="tabler-package"
              size="20"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Product:</span>
            <span>{{ item.product }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>

  <VCard>
    <VCardText>
      <p class="text-xs">
        OVERVIEW
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data"
          :key="item.name"
        >
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-eye-bolt"
              size="20"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Region:</span>
            <span>{{ item.region }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Source:</span>
            <span>{{ item.source }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Turn Time:</span>
            <span>{{ item.tatDays }}</span>
          </VListItemTitle>
          <VListItemTitle>
            <span class="font-weight-medium me-1">Very Next Step:</span>
            <span>{{ item.very_next_step }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
