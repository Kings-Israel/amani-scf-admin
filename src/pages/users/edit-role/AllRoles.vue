<script lang="ts" setup>
import { AnyAaaaRecord } from 'dns';

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
  currentdata: AnyAaaaRecord
  selectedIds: number[]
}>()
const emit = defineEmits(['update:selected-ids', 'checkboxChanged', 'update:selectedIds']);
const selectedIds = ref<number[]>([]);


// Determine if a group is entirely selected
const isGroupSelected = (groupId: number, accessGroups: { id: number }[]) => {
  return accessGroups.every(group => selectedIds.value.includes(group.id));
};

const isItemSelected = (id: number) => {
  return selectedIds.value.includes(id);
};

// Function to handle selecting or deselecting an entire group
const handleGroupSelection = (group: { id: number; access_groups: { id: number }[] }) => {
  let idsChanged: number[];
  if (isGroupSelected(group.id, group.access_groups)) {
    // Deselect all
    idsChanged = [group.id, ...group.access_groups.map(ag => ag.id)];
    selectedIds.value = selectedIds.value.filter(id => !idsChanged.includes(id));
  } else {
    // Select all
    idsChanged = [group.id, ...group.access_groups.map(ag => ag.id)].filter(id => !selectedIds.value.includes(id));
    selectedIds.value.push(...idsChanged);
  }
  emit('checkboxChanged', idsChanged); // Emit the changed IDs
};

const handleSelection = ( id: number ) => {
  let idsChanged: number[];
  if (isItemSelected(id)) {
    console.log('Item is selected, will remove:', id);
    selectedIds.value = selectedIds.value.filter(selectedId => {
      console.log(`Comparing: ${selectedId} !== ${id}`);
      return selectedId !== id;
    });
  } else {
    console.log('Item is not selected, will add:', id);
    selectedIds.value = [...selectedIds.value, id]; // Create a new array to ensure reactivity
  }
  console.log('Updated selectedIds:', JSON.stringify(selectedIds.value));
};

// Reactive computed for mapping group data with selection status
const groupData = computed(() => props.group.map(group => ({
  ...group,
  isSelected: isGroupSelected(group.id, group.access_groups),
})));

// Initialize selectedIds based on props
props.currentdata[0].role_i_ds.forEach(role => {
  if (!selectedIds.value.includes(role.access_right_group_id)) {
    selectedIds.value.push(role.access_right_group_id);
  }
});
console.log(selectedIds.value)

watch(() => props.selectedIds, newValue => emit('update:selectedIds', newValue))
// Emit the selectedIds whenever they change
watch(selectedIds, newValue => {
  emit('update:selected-ids', newValue)
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
        v-model="data.isSelected"
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
          @click="handleSelection(value.id)"
        />
      </VCol>
    </VRow>
  </div>
</template>
