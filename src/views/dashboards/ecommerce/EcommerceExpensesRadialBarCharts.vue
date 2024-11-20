<script setup lang="ts">
import { hexToRgb } from '@layouts/utils';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()

const props = defineProps<Props>()

interface Props {
  stats: any
}

const statisticsReport = props.stats
const total_invoices = statisticsReport.total_invoices
const approved_invoices = statisticsReport.approved_invoices.toFixed(2)

const series = [approved_invoices]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    chart: {
      sparkline: {
        enabled: true,
      },
      parentHeightOffset: 0,
      type: 'radialBar',
    },
    colors: [currentTheme.warning],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '65%',
        },
        track: {
          strokeWidth: '45%',
          background: `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '22px',
            color: `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`,
            fontWeight: 600,
            offsetY: -5,
          },
        },
      },
    },
    grid: {
      show: false,
      padding: {
        bottom: 5,
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
    responsive: [
      {
        breakpoint: 1442,
        options: {
          chart: {
            height: 140,
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: '18px',
                },
              },
              hollow: {
                size: '60%',
              },
            },
          },
        },
      },
      {
        breakpoint: 1370,
        options: {
          chart: {
            height: 120,
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            height: 150,
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: '18px',
                },
              },
              hollow: {
                size: '70%',
              },
            },
          },
        },
      },
      {
        breakpoint: 960,
        options: {
          chart: {
            height: 250,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              },
              dataLabels: {
                value: {
                  fontSize: '18px',
                },
              },
            },
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <div class="mb-n2">
        <h5 class="text-h5">
          {{ total_invoices }}
        </h5>
        <span class="text-disabled text-sm">Invoices</span>
      </div>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        type="radialBar"
        :height="155"
      />

      <div class="text-sm text-center clamp-text text-disabled mt-3">
        {{ approved_invoices }}% invoices have been approved
      </div>
    </VCardText>
  </VCard>
</template>
