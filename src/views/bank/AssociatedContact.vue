<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  isDialogVisible: boolean
  pipeline: number
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void

  (e: 'update:isContactAssociated', val: boolean): void
}

const contact = ref()

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

interface Member {
  avatar: string
  name: string
  email: string
}

const { data: usersData, execute: fetchAssociation } = await useApi<any>(createUrl('/associated/users/bank'))
const membersList: Ref<Member[]> = computed(() => usersData.value)

const pipelineId = computed(() => props.pipeline)

const submitContact = async () => {
  try {
    const res = await $api('/post/UI/association/contacts', {
      method: 'POST',
      body: {
        contact_id: contact.value,
        pipeline_id: pipelineId.value,
      },
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
  emit('update:isContactAssociated', true)
  emit('update:isDialogVisible', false)
}

fetchAssociation()
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="800"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

    <VCard class="share-project-dialog pa-5 pa-sm-8">
      <VCardText>
        <h3 class="text-h3 text-center mb-3">
          Associate Contact
        </h3>
        <p class="text-sm-body-1 text-center mb-6">
          Select a contact to associate
        </p>

        <p class="font-weight-medium mb-1">
          Add Contact
        </p>
        <AppAutocomplete
          v-model="contact"
          :items="membersList"
          density="compact"
          item-title="name"
          item-value="id"
          placeholder="Add project members..."
        >
          <template #item="{ props: listItemProp, item }">
            <VListItem v-bind="listItemProp">
              <template #prepend>
                <VAvatar
                  :image="item.raw.avatar"
                  size="30"
                />
              </template>
            </VListItem>
          </template>
        </AppAutocomplete>

        <h4 class="text-h4 mb-4 mt-8">
          {{ membersList.length }} Contacts
        </h4>

        <VList class="card-list">
          <VListItem
            v-for="member in membersList"
            :key="member.name"
          >
            <template #prepend>
              <VAvatar :image="member.avatar" />
            </template>

            <VListItemTitle>
              <span class="font-weight-medium">{{ member.name }}</span>
            </VListItemTitle>
            <VListItemSubtitle>
              <span class="text-disabled font-weight-medium text-body-1">{{ member.email }}</span>
            </VListItemSubtitle>
          </VListItem>
        </VList>

        <div class="d-flex align-center justify-space-between flex-wrap gap-3 mt-6">
          <h6 class="text-h6 font-weight-medium d-flex align-start">
            <VIcon
              class="me-2"
              icon="tabler-users"
              size="20"
            />
            <div>Associate User</div>
          </h6>

          <VBtn
            class="text-capitalize"
            @click="submitContact"
          >
            Associate
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.share-project-dialog {
  .card-list {
    --v-card-list-gap: 1rem;
  }
}
</style>
