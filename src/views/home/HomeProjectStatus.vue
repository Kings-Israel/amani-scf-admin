<script lang="ts" setup>
import type { Ref } from 'vue'
import { useTheme } from 'vuetify'
import { prefixWithPlus } from '@core/utils/formatters'

const vuetifyTheme = useTheme()

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      type: 'area',
      toolbar: false,
    },
    markers: {
      strokeColor: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: -5,
      },
    },
    stroke: {
      width: 3,
      curve: 'straight',
    },
    colors: [currentTheme.warning],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.15,
        stops: [0, 95, 100],
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      lines: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: 1000,
      max: 6000,
      tickAmount: 5,
    },
    tooltip: {
      enabled: false,
    },
  }
})

const { data: pipelineData, execute: fetchData } = await useApi<any>(createUrl('/get/UI/recent/pipeline/count'))

interface pipelineCount {
  status: string
  count: number
}

const pipelineStatusCountData: Ref<pipelineCount[] | null> = computed(() => pipelineData.value.pipelineStatusCount)
const totalPipeline = computed(() => pipelineData.value.total)

const seriesValue = computed(() => {
  return [
    {
      data: pipelineData.value.series,
    },
  ]
})

fetchData()
</script>

<template>
  <VCard title="Pipeline Count">
    <VCardText>
      <VList class="card-list">
        <VListItem>
          <template #prepend>
            <VAvatar
              color="warning"
              icon="tabler-apple"
              rounded
              size="34"
              variant="tonal"
            />
          </template>
          <VListItemTitle class="font-weight-medium">
            {{ totalPipeline }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            Pipelines
          </VListItemSubtitle>
        </VListItem>
      </VList>
      <VueApexCharts
        :options="chartOptions"
        :series="seriesValue"
        height="247"
      />

      <VList class="card-list">
        <VListItem
          v-for="data in pipelineStatusCountData"
          :key="data.status"
        >
          <VListItemTitle class="font-weight-medium">
            {{ data.status.toUpperCase() }}
          </VListItemTitle>
          <template #append>
            <span class="me-3 text-medium-emphasis">Count</span>
            <span
              :class="data.status > 0 ? 'text-success' : 'text-error'"
              class="font-weight-medium"
            >{{ prefixWithPlus(data.count) }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 15px;
}
</style>
