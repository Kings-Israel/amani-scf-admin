<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineEmits, defineProps } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const router = useRouter()

interface Emit {
  (e: 'update:name', value: string): void
  (e: 'update:body', value: string): void
  (e: 'update:status', value: string): void
  (e: 'update:isDialogVisible', value: boolean): void
}

definePage({
  meta: {
    action: 'manage',
    subject: 'Manage Industries',
  },
})

interface Props {
  isDialogVisible: boolean
  template?: any
}

const formData = ref({
  id: props.template?.id || '',
  name: props.template?.name || '',
  status: props.template?.status || 'inactive',
})


const onSubmit = async () => {
  try {
    await $api(`/industries/${formData.value.id}`, {
      method: 'PATCH',
      body: formData.value,
    })
    await nextTick()
    router.go(0)
  } catch (error) {
    console.error('Update failed:', error)
  }
}
</script>


<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="500"
    @update:model-value="emit('update:isDialogVisible', $event)"
  >
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />
    <VCard>
      <VCardItem>
        <VRow class="pa-4">
          <VCol cols="12">
            <h6 class="text-h6 font-weight-medium mb-2">
              Industry Details
            </h6>
          </VCol>

          <VCol cols="12">
            <AppTextField
              v-model="formData.name"
              placeholder="Name"
              label="Name"
              class="mb-4"
            />
          </VCol>

          <VCol cols="12">
            <VBtn
              color="success"
              @click="onSubmit"
            >
              Submit
            </VBtn>
          </VCol>
        </VRow>
      </VCardItem>
    </VCard>
  </VDialog>
</template>
