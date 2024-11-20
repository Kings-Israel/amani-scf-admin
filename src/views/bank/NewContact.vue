<script lang="ts" setup>
interface UserData {
  pipeline_id: number
  firstName: string
  lastName: string
  phone_number: string
  gender: string
  email: string
  owner: string
}

interface Props {
  userData?: UserData
  isDialogVisible: boolean
  pipeline: number
}

interface Emit {
  (e: 'submit', value: UserData): void

  (e: 'update:isDialogVisible', val: boolean): void

  (e: 'update:isNewContactSaved', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  userData: () => ({
    pipeline_id: 0,
    firstName: '',
    lastName: '',
    phone_number: '',
    gender: 'other',
    email: '',
    owner: 'Ish',
  }),
})

const emit = defineEmits<Emit>()

const userData = ref<UserData>(structuredClone(toRaw(props.userData)))

watch(props, newProps => {
  // Clone the userData from props
  userData.value = structuredClone(toRaw(newProps.userData))

  // Update pipeline_id to match the current prop value
  userData.value.pipeline_id = newProps.pipeline
}, { deep: true })

const onFormSubmit = () => {
  emit('update:isNewContactSaved', true)
  emit('update:isDialogVisible', false)
  emit('submit', userData.value)
}

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))

  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    :width="$vuetify.display.smAndDown ? 'auto' : 677"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-8 pa-5">
      <VCardItem class="text-center">
        <VCardTitle class="text-h3 mb-3">
          Add New Contact
        </VCardTitle>
        <p class="mb-0">
          Adding New Contact
        </p>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm
          class="mt-6"
          @submit.prevent="onFormSubmit"
        >
          <VRow>
            <!-- 👉 First Name -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="userData.firstName"
                :rules="[requiredValidator]"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="userData.lastName"
                :rules="[requiredValidator]"
                label="Last Name"

                placeholder="Doe"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="userData.email"
                :rules="[requiredValidator]"
                label="Email"

                placeholder="johndoe@email.com"
              />
            </VCol>

            <!-- 👉 Contact -->
            <VCol
              cols="12"
              md="6"
            >
              <AppSelect
                v-model="userData.gender"
                :items="['other', 'male', 'female']"
                :rules="[requiredValidator]"
                label="Select Gender"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="userData.phone_number"
                label="Contact"
                placeholder="070000000"
              />
            </VCol>
            <!-- 👉 Submit and Cancel -->
            <VCol
              class="d-flex flex-wrap justify-center gap-4"
              cols="12"
            >
              <VBtn type="submit">
                Submit
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="onFormReset"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
