<script setup lang="ts">
import type { Company } from './index'

const props = defineProps<Props>()
interface Props {
  companyDetail: Company
}

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-Leads',
    key: 'tab',
    action: 'manage',
    subject: 'Convert to Opportunity',
  },
})
</script>

<template>
  <VRow>
    <!-- SECTION Customer Details -->
    <VCol cols="12">
      <VCard v-if="props.companyDetail">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="100"
            :color="!props.companyDetail.username ? 'primary' : undefined"
            :variant="!props.companyDetail.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="props.companyDetail.avatar"
              :src="props.companyDetail.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-medium"
            >
              {{ avatarText(props.companyDetail.username) }}
            </span>
          </VAvatar>

          <!-- 👉 Customer fullName -->
          <h4 class="text-h4  mt-4">
            {{ props.companyDetail.company }}
          </h4>
          <span class="text-sm">Customer ID #{{ props.companyDetail.id }}</span>
        </VCardText>

        <!-- 👉 Customer Details -->
        <VCardText>
          <VDivider class="my-4" />
          <div class="text-disabled text-uppercase text-sm">
            Details
          </div>

          <VList class="card-list mt-2">
            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Username:</span>
                <span>
                  {{ props.companyDetail.username }}
                </span>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Billing Email:</span>
                <span>
                  {{ props.companyDetail.email }}
                </span>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Status:</span>
                <VChip
                  label
                  color="success"
                >
                  {{ props.companyDetail.status }}
                </VChip>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Contact:</span>
                <span>
                  {{ props.companyDetail.contact }}
                </span>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">County:</span>
                <span>
                  {{ props.companyDetail.county }}
                </span>
              </div>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.75rem;
}

.current-plan{
  background: linear-gradient(45deg, rgb(var(--v-theme-primary)) 0%, #9E95F5 100%);
  color: #fff;
}
</style>
