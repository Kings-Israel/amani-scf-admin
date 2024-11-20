<script lang="ts" setup>
import EditBank from '@/views/bank/view/EditBank.vue'

interface Props {
  userData: {
    id: number
    bank: string
    email: string
    url: string
    contactPerson: string
  }
}

const props = defineProps<Props>()

const isBankInfoEditDialogVisible = ref(false)

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'Active') {
    return { text: 'Active', color: 'success' };
  }
  return { text: 'Inactive', color: 'error' };
};

</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <h6 class="text-h4 mt-4">
            {{ props.userData.bank }}
          </h6>
        </VCardText>

        <VDivider />

        <!-- 👉 Details -->
        <VCardText>
          <p class="text-sm text-uppercase text-disabled">
            Details
          </p>

          <!-- 👉 User Details list -->
          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Username:
                  <span class="text-body-1">
                    {{ props.userData.bank }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Email:
                  <span class="text-body-1">
                    {{ props.userData.email }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Status:
                  <span class="text-body-1">
                    {{ props.userData.status }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  URL:
                  <span class="text-body-1">{{ props.userData.url }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Status:
                  <div
                    :class="{
                      'overlay-success': props.userData.status === 'active',
                      'overlay-warning': props.userData.status !== 'active',
                    }"
                    class="status-overlay"
                  >
                    <span class="text-body-1">
                      {{ props.userData.status === 'active' ? 'Active' : 'Inactive' }}
                    </span>
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 Edit and Suspend button -->
        <!-- <VCardText class="d-flex justify-center">
          <VBtn
            class="me-4"
            variant="elevated"
            @click="isBankInfoEditDialogVisible = true"
          >
            Edit
          </VBtn>
        </VCardText> -->
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Edit Bank info dialog -->
  <EditBank
    v-model:isDialogVisible="isBankInfoEditDialogVisible"
    :user-data="props.userData"
  />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.75rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.status-overlay {
  display: inline-block; 
  padding: 0.1rem 0.5rem;
  border-radius: 30px; 
}

.overlay-success {
  background-color: rgba(76, 175, 80, 0.2);
  border: 1px solid #4caf50; 
}

.overlay-warning {
  background-color: rgba(255, 193, 7, 0.2);
  border: 1px solid #ff9800;
}
</style>
