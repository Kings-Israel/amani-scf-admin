<script lang="ts" setup>
const props = defineProps<{
  group: {
    id: number
    name: string
    description: string
    role_type_id: number
    access_groups: {
      id: number
      target_role_id: number
      name: string
    }[]
  }[]
}>()

const emit = defineEmits(['update:selectedIds', 'checkboxChanged'])

const selectedIds = ref<number[]>([])

// Determine if a group is entirely selected
const isGroupSelected = (groupId: number, accessGroups: { id: number }[]) => {
  return accessGroups.every(group => selectedIds.value.includes(group.id))
}

// Function to handle selecting or deselecting an entire group
const handleGroupSelection = (group: { id: number; access_groups: { id: number }[] }) => {
  let idsChanged: number[]
  if (isGroupSelected(group.id, group.access_groups)) {
    // Deselect all
    idsChanged = [group.id, ...group.access_groups.map(ag => ag.id)]
    selectedIds.value = selectedIds.value.filter(id => !idsChanged.includes(id))
  }
  else {
    // Select all
    idsChanged = [group.id, ...group.access_groups.map(ag => ag.id)].filter(id => !selectedIds.value.includes(id))
    selectedIds.value.push(...idsChanged)
  }
  emit('checkboxChanged', idsChanged) // Emit the changed IDs
}

// Reactive computed for mapping group data with selection status
const groupData = computed(() => props.group.map(group => ({
  ...group,
  isSelected: isGroupSelected(group.id, group.access_groups),
})))

// Emit the selectedIds whenever they change
watch(selectedIds, newValue => {
  emit('update:selectedIds', newValue)
}, { deep: true })
</script>

<template>
  <div
    v-for="data in groupData"
    :key="data.id"
  >
    <VDivider class="my-4" />
    <!-- Heading -->
    <VCol>
      <VCheckbox
        :checked="data.isSelected"
        @click="handleGroupSelection(data)"
      >
        <template #label>
          <div>
            <strong>{{ data.name }}</strong>
          </div>
        </template>
      </VCheckbox>
    </VCol>
    <VDivider class="my-4" />
    <!-- Subheadings -->
    <VRow>
      <VCol
        v-for="value in data.access_groups"
        :key="value.id"
        cols="12"
        md="6"
      >
        <VCheckbox
          v-model="selectedIds"
          :label="value.name"
          :value="value.id"
          @change="() => emit('checkboxChanged', [value.id])"
        />
      </VCol>
    </VRow>
  </div>
</template>
