<script lang="ts" setup>
const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))'
const dateRange = ref('')

const topicsChartConfig = {
  chart: {
    height: 270,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },

  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '70%',
      distributed: true,
      startingShape: 'rounded',
      borderRadius: 7,
    },
  },

  colors: [
    '#7367f0', '#16B1FF', '#56CA00', '#8A8D93', '#FF4C51', '#FFB400',
  ],

  grid: {
    borderColor,
    strokeDashArray: 10,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -35,
      bottom: -12,
    },
  },

  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontWeight: 200,
      fontSize: '13px',

    },
    offsetX: 0,
    dropShadow: {
      enabled: false,
    },
    formatter(val: string, opt: any) {
      return topicsChartConfig.labels[opt.dataPointIndex]
    },
  },
  labels: ['Lead', 'Contact', 'Opportunity', 'Closed'],

  xaxis: {
    categories: ['6', '5', '4', '3', '2', '1'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
        fontSize: '13px',
      },
      formatter(val: string) {
        return `${val}%`
      },
    },
  },

  yaxis: {
    max: 35,
    labels: {
      style: {
        colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
        fontSize: '13px',
      },
    },
  },

  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px',
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
  },
  legend: {
    show: false,
  },

}

interface Data {
  title: string
  value: number
  color: string

}

const {
  data: fetchedData,
  execute: fetchProducts,
} = await useApi<any>(createUrl('/get/UI/reports/conversion/analysis', {
  query: {
    date: dateRange,
  },
}))

const pipelineData: Ref<Data[]> = computed(() => fetchedData.value)

const topicsChartSeries = computed(() => {
  return [
    {
      data: pipelineData.value.map(entry => typeof entry.value === 'string' ? Number.parseInt(entry.value, 10) + 10 : entry.value + 10),
    },
  ]
})

const reportText = computed(() => {
  if (dateRange.value)
    return `Report from ${dateRange.value}`

  return 'Reports' // Fallback text if dateRange is null.
})

fetchProducts()
</script>

<template>
  <VCol
    cols="12"
    md="8"
  >
    <!-- 👉 Topic You are Interested in -->
    <VCard>
      <VCardText>
        <div class="d-flex flex-wrap justify-space-between align-center gap-4">
          <h5 class="text-h5 font-weight-medium">
            {{ reportText }}
          </h5>
          <div>
            <AppDateTimePicker
              v-model="dateRange"
              :config="{ mode: 'range' }"
              label="Range"
              placeholder="Select date"
              style=" max-inline-size: 200px;min-inline-size: 200px;"
            />
          </div>
        </div>
      </VCardText>

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <div>
              <VueApexCharts
                v-if="pipelineData && pipelineData.length > 0"
                :options="topicsChartConfig"
                :series="topicsChartSeries"
                height="260"
                type="bar"
              />
            </div>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <div
              class="d-flex flex-wrap gap-x-4 gap-y-10 mx-auto"
              style="inline-size: 300px;"
            >
              <div
                v-for="data in pipelineData"
                :key="data.title"
                class="d-flex gap-x-4"
              >
                <VBadge
                  :color="data.color"
                  class="mt-1 custom-badge"
                  dot
                  inline
                />
                <div>
                  <div
                    class="text-body-1"
                    style="min-inline-size: 90px;"
                  >
                    {{ data.title }}
                  </div>
                  <h4 class="text-h4">
                    {{ data.value }}
                  </h4>
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VCol>
</template>
