<script setup lang="ts">
import { useTheme } from 'vuetify'

const props = defineProps<Props>()

interface Props {
  reports: any
}

const invoice = props.reports
const totalAmount = invoice.revenue

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    data: [400, 200, 650, 500],
  },
]

const chartOptions = {
  chart: {
    type: 'area',
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
  tooltip: {
    enabled: false, // Disable tooltip on hover
  },
  grid: {
    show: false,
  },
  colors: [currentTheme.success],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.8,
      opacityFrom: 0.6,
      opacityTo: 0.1,
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
  responsive: [
    {
      breakpoint: 1387,
      options: {
        chart: {
          height: 80,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 120,
        },
      },
    },
  ],
}
</script>

<template>
  <VCard>
    <VCardText>
      <VAvatar
        variant="tonal"
        rounded
        size="42"
        class="mb-3"
      >
        <VIcon
          icon="tabler-file-invoice"
          size="26"
          color="high-emphasis"
        />
      </VAvatar>
      <h4 class="text-h4">
        {{ totalAmount }}
      </h4>
      <p class="mb-0">
        Revenue Generated
      </p>
    </VCardText>

    <VueApexCharts
      :options="chartOptions"
      :series="series"
      :height="80"
    />
  </VCard>
</template>
