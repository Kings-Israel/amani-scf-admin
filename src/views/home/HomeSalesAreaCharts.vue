<script lang="ts" setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const chartOptions = {
  chart: {
    type: 'area',
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  markers: {
    colors: 'transparent',
    strokeColors: 'transparent',
  },
  grid: {
    show: false,
  },
  colors: [currentTheme.success],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.5,
      opacityTo: 0.07,
      stops: [0, 80, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  xaxis: {
    show: true,
    lines: {
      show: false,
    },
    labels: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    stroke: {
      width: 0,
    },
    show: false,
  },
  tooltip: {
    enabled: false,
  },
}

const { data: pipelineData, execute: fetchData } = await useApi<any>(createUrl('/get/UI/top/product'))

const series = computed(() => {
  return [
    {
      name: 'Subscribers',
      data: [200, 55, 400, 250],
    },
  ]
})

const totalCount = computed(() => pipelineData.value.count)

fetchData()
</script>

<template>
  <VCard>
    <VCardText class="pb-2">
      <h5 class="text-h5">
        Product
      </h5>
      <p class="mb-0 text-sm text-disabled">
        Vendor Financing
      </p>
    </VCardText>

    <VueApexCharts
      :height="72"
      :options="chartOptions"
      :series="series"
    />

    <VCardText class="pt-0">
      <div class="d-flex align-center justify-space-between mt-3">
        <h4 class="text-h4">
          {{ totalCount }}
        </h4>
        <p class="mb-0 text-sm text-success">
          total
        </p>
      </div>
    </VCardText>
  </VCard>
</template>
