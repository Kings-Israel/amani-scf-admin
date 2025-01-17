<script setup lang="ts">
import { hexToRgb } from '@layouts/utils';
import { useDisplay, useTheme } from 'vuetify';

const props = defineProps<Props>()

interface Props {
  stats: any
}

const statisticsReport = props.stats
const programLimit = statisticsReport.program_limit.toLocaleString()

const vuetifyTheme = useTheme()
const display = useDisplay()

const series = [45, 58, 30, 50]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const labelSuccessColor = `rgba(${hexToRgb(currentTheme.success)},0.2)`
  const headingColor = `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`

  const chartColors = {
    donut: {
      series1: currentTheme.success,
      series2: '#28c76fb3',
      series3: '#28c76f80',
      series4: labelSuccessColor,
    },
  }

  return {
    chart: {
      parentHeightOffset: 0,
      type: 'donut',
    },
    labels: [],
    colors: [
      chartColors.donut.series1,
      chartColors.donut.series2,
      chartColors.donut.series3,
      chartColors.donut.series4,
    ],
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
      formatter(val: string) {
        return `${Number.parseInt(val)}%`
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: false,
    },
    grid: {
      padding: {
        top: 0,
        bottom: -10,
        right: -20,
        left: -20,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            value: {
              fontSize: '1.375rem',
              fontFamily: 'Public Sans',
              color: headingColor,
              fontWeight: 600,
              offsetY: -15,
              formatter(val: string) {
                return `${Number.parseInt(val)}%`
              },
            },
            name: {
              offsetY: 20,
              fontFamily: 'Public Sans',
            },
            total: {
              show: true,
              showAlways: true,
              color: currentTheme.success,
              fontSize: '.8125rem',
              label: 'Total',
              fontFamily: 'Public Sans',
              formatter() {
                return '184'
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: display.thresholds.value.lg,
        options: {
          chart: { width: 200, height: 160 },
        },
      },
      {
        breakpoint: 420,
        options: {
          chart: { width: 150, height: 120 },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between">
      <div class="d-flex flex-column">
        <div class="mb-auto">
          <h5 class="text-h5 text-no-wrap">
            Total Program Limit
          </h5>
          <span class="text-sm">Summary Report</span>
        </div>

        <div>
          <h3 class="text-h3 mb-1">
            {{ programLimit }}
          </h3>
          <div>
            <!-- <VIcon
              icon="tabler-chevron-up"
              color="success"
              class="me-1"
            />
            <span class="text-success font-weight-medium">15.8% </span> -->
          </div>
        </div>
      </div>
      <div>
        <!-- <VueApexCharts
          :options="chartOptions"
          :series="series"
          :height="110"
          :width="130"
        /> -->
      </div>
    </VCardText>
  </VCard>
</template>
