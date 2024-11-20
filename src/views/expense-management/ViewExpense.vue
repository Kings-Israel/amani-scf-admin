<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { AccommodationDetails } from './index'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void

  (e: 'userData', value: AccommodationDetails): void
}

interface Props {
  isDrawerOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const file = ref()
const loading = ref(true)

const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    :width="400"
    class="scrollable-content"
    location="end"
    temporary
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="New Expense"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <AppTextField
                  v-model="leadName"
                  :rules="[requiredValidator]"
                  label="Lead Name"
                  placeholder="Lead Name"
                />
              </VCol>
              <!-- 👉 Country -->
              <VCol cols="12">
                <AppSelect
                  v-model="activity"
                  :items="['Airtime', 'Accomodation', 'Travel', 'Internet']"
                  :rules="[requiredValidator]"
                  label="Select Expense Purpose"
                  placeholder="Accomodation"
                />
              </VCol>
              <!-- 👉 Username -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="requestDate"
                  append-inner-icon="tabler-calendar-due"
                  label="Date"
                  placeholder="Select Date"
                />
              </VCol>

              <VCol cols="12">
                <VFileInput
                  v-model="file"
                  :loading="loading"
                  append-inner-icon="tabler-paperclip"
                  color="primary"
                  label="Attatch Document"
                  prepend-icon=""
                />
              </VCol>

              <!-- 👉 company -->
              <VCol cols="12">
                <AppTextField
                  v-model="amount"
                  :rules="[requiredValidator]"
                  label="Amount"
                  placeholder="Amount"
                  type="number"
                />
              </VCol>

              <!-- 👉 Role -->
              <VCol cols="12">
                <VTextarea
                  v-model="notes"
                  auto-grow
                  label="Notes"
                  placeholder="Any Additional Details"
                  rows="2"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  class="me-3"
                  type="submit"
                >
                  Submit
                </VBtn>
                <VBtn
                  color="secondary"
                  type="reset"
                  variant="outlined"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
