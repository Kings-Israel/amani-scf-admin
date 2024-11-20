<script lang="ts" setup>
interface Props {
  permissions: {
    name: string
    permissions_count: number
  }[]
}

const props = defineProps<Props>()
</script>

<template>
  <VTable
    class="text-no-wrap"
    fixed-header
    height="250"
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          Name
        </th>
        <th class="text-uppercase">
          Permissions Count
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in props.permissions"
        :key="item.name"
      >
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.permissions_count }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
