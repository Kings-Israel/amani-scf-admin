<script lang="ts" setup>
import { ref } from 'vue'
import type { InteractionType } from '@/views/pipeline/InteractionType/index'
import { touchPoints } from '@/views/pipeline/InteractionType/index'

interface Props {
  interactionType: InteractionType
  isDialogVisible: boolean
  isSavedData: boolean
}

const props = withDefaults(defineProps<Props>(), {
  interactionType: () => ({
    id: 0,
    stage: 'Contact',
    name: '',
    remarks: '',
    touchPoint: 'Physical Meeting',
    veryNextStep: '',
  }),
})

const emit = defineEmits<Emit>()

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

interface Emit {
  (e: 'submit', value: InteractionType): void

  (e: 'update:isDialogVisible', val: boolean): void

  (e: 'update:isSavedData', val: boolean): void
}

const interactionType = ref<InteractionType>(structuredClone(toRaw(props.interactionType)))

watch(props, () => {
  interactionType.value = structuredClone(toRaw(props.interactionType))
})

const onFormSubmit = async () => {
  try {
    const res = await $api('/post/store/interaction', {
      method: 'POST',
      body: interactionType.value,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    console.log(res)

    const { message } = res

    console.log(message)
  }
  catch (err) {
    console.error(err)
  }
  emit('update:isDialogVisible', false)
  emit('submit', interactionType.value)
  emit('update:isSavedData', true)
}

const onFormReset = () => {
  interactionType.value = structuredClone(toRaw(props.interactionType))

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
          Add Interaction
        </VCardTitle>
        <p class="mb-0">
          Add a new interaction
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
              md="12"
            >
              <AppTextField
                v-model="interactionType.stage"
                label="Lead Type"
                placeholder=""
                readonly
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="interactionType.name"
                label="Name"
                placeholder="johndoe"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppSelect
                v-model="interactionType.touchPoint"
                :items="touchPoints"
                label="Touch Point"
                placeholder="Touch Point"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppSelect
                v-model="interactionType.veryNextStep"
                :items="touchPoints"
                label="Next Step"
                placeholder="Next Step"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextarea
                v-model="interactionType.remarks"
                counter
                label="Remarks"
                placeholder="Add remarks"
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
