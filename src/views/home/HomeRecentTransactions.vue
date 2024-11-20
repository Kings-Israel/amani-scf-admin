<script lang="ts" setup>
import yofinvoice from '@images/logos/yofinvoice.png'

interface Status {
  hot: string
  cold: string
  warm: string
}

interface RecentLeads {
  id: number
  name: string
  stage: string
  createdAt: Date
  status: string
  phoneNumber: string
}

const resolveStatus: Status = {
  hot: 'success',
  cold: 'error',
  warm: 'secondary',
}

const formData = ref<RecentLeads[]>([])

const fetchSourceData = async () => {
  const { data } = await $api('/get/UI/recent/prospects/dashboard').catch(err => console.log(err))

  formData.value = data
}

onMounted(() => {
  fetchSourceData()
})
</script>

<template>
  <VCard title="Recent Prospects">
    <VDivider />
    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th class="font-weight-medium">
            NAME
          </th>
          <th class="font-weight-medium">
            STAGE
          </th>
          <th class="font-weight-medium">
            STATUS
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="data in formData"
          :key="data.name"
        >
          <td style="padding-block: 0.65rem;">
            <div class="d-flex align-center">
              <div class="me-3">
                <VImg
                  :src="yofinvoice"
                  width="50"
                />
              </div>
              <div>
                <p class="font-weight-medium text-base mb-0">
                  {{ data.stage }}
                </p>
                <p class="text-sm mb-0 text-disabled">
                  {{ data.phoneNumber }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <p class="font-weight-medium text-base mb-0">
              Sent
            </p>
            <span class="text-sm text-disabled">{{ data.createdAt }}</span>
          </td>
          <td>
            <VChip
              :color="resolveStatus[data.status]"
              label
            >
              {{ data.status }}
            </VChip>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss" scoped>
.v-table {
  tbody {
    tr:not(:last-child) {
      td {
        border: none !important;
      }
    }
  }
}
</style>
