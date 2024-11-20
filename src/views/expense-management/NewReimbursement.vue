<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { VForm } from 'vuetify/components/VForm';

import type { User } from '@core/types';
import type { AccommodationDetails } from './index';

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

watch(file, () => {
  loading.value = !file.value[0]
})

const user = useCookie<User>('userData')
const isFormValid = ref(false)
const refForm = ref<VForm>()
const leadName = ref('')
const requestDate = ref('')
const activity = ref('')
const amount = ref('')
const notes = ref('')

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        leadName: leadName.value,
        file: file.value !== undefined ? file.value[0] : null,
        activity: activity.value,
        requestDate: requestDate.value,
        amount: amount.value,
        notes: notes.value,
        user_id: user.value.id,
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
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
      title="New Reimbursement"
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
              <!-- <VCol cols="12">
                <AppSelect
                  v-model="activity"
                  :items="['Airtime', 'Accomodation', 'Travel', 'Internet']"
                  :rules="[requiredValidator]"
                  label="Select Expense Purpose"
                  placeholder="Accomodation"
                />
              </VCol> -->
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
