<script lang="ts" setup>
const recentDevices = ref(
  [
    {
      type: 'New Leads',
      email: true,
      sms: true,
    },
    {
      type: 'Conversion of Opportunity',
      email: true,
      sms: true,
    },
    {
      type: 'Document Uploaded',
      email: true,
      sms: true,
    },
    {
      type: 'Rejected Leads',
      email: true,
      browser: false,
      app: false,
    },
  ],
)

const selectedNotification = ref('Only when I\'m online')
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Notification</VCardTitle>
    </VCardItem>

    <VCardText>
      <VTable class="text-no-wrap rounded border">
        <thead>
          <tr>
            <th scope="col">
              Type
            </th>
            <th scope="col">
              EMAIL
            </th>
            <th scope="col">
              SMS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="device in recentDevices"
            :key="device.type"
          >
            <td>
              {{ device.type }}
            </td>
            <td>
              <VCheckbox v-model="device.email" />
            </td>
            <td>
              <VCheckbox v-model="device.sms" />
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCardText>
    <VDivider />

    <VCardText>
      <VForm @submit.prevent="() => {}">
        <div class="d-flex flex-wrap gap-4 mt-4">
          <VBtn type="submit">
            Save Changes
          </VBtn>
          <VBtn
            color="secondary"
            type="reset"
            variant="tonal"
          >
            Reset
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
