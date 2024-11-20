<script lang="ts" setup>
import { debounce } from 'lodash'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'

import type { BankDetails } from './index'
import type { User } from '@core/types'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void

  (e: 'userData', value: BankDetails): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const errors = ref<Record<string, any | undefined>>({
  message: undefined,
  statusCode: undefined,
})

interface Props {
  isDrawerOpen: boolean
}

const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})

const user = useCookie<User>('userData')
const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')
const email = ref('')
const url = ref('')

const checkEmailExists = debounce(async (emailNew: string) => {
  try {
    const { exists } = await $api('/UI/bank/email/check', {
      method: 'POST',
      query: {
        emailNew,
      },
    })

    console.log('Testing email response', exists)
    if (exists)
      errors.value.message = 'Email already exists.'
    else
      errors.value.message = ''
  }
  catch (error) {
    console.error('Error checking email:', error)
    errors.value.message = 'Error checking email.'
  }
}, 500)

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
        name: name.value,
        url: url.value,
        email: email.value,
        createdBy: user.value.id,
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

watch(() => email.value, newEmail => {
  errors.value.message = ''
  if (newEmail)
    checkEmailExists(newEmail)
})
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
      title="New Bank"
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
                  v-model="name"
                  :rules="[requiredValidator]"
                  label="Bank Name"
                  placeholder="Bank Name"
                />
              </VCol>
              <VCol cols="12">
                <AppTextField
                  v-model="url"
                  :rules="[requiredValidator]"
                  label="Bank URL"
                  placeholder="Bank URL"
                />
              </VCol>
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  :error-messages="errors.message"
                  :rules="[requiredValidator]"
                  label="Bank Email"
                  placeholder="bank@yofinvoice.com"
                  type="email"
                  @change="checkEmailExists(email)"
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
