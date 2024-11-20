<script lang="ts" setup>
interface WidgetDataItem {
  id: number
  icon: string
  color: string
  title: number
  value: string
  isHover: boolean
}

interface WeekdayHours {
  Monday: number
  Tuesday: number
  Wednesday: number
  Thursday: number
  Friday: number
}

const widgetData: Ref<WidgetDataItem[]> = ref([])

const { data: productsData, execute: fetchProducts } = await useApi<any>(createUrl('/get/UI/reports/widget/data'))

fetchProducts()

const { data: scheduleData, execute: fetchData } = await useApi<any>(createUrl('/get/UI/meeting/daily/hours'))
const timeSpent: Ref<WeekdayHours> = computed(() => scheduleData.value)
const timeSpendingChartSeries = computed(() => Object.values(timeSpent.value))
const total = computed(() => Object.values(timeSpent.value).reduce((partialSum, value) => partialSum + value, 0))

watchEffect(() => {
  if (productsData.value)
    widgetData.value = productsData.value
})
fetchData()

const donutChartColors = {
  donut: {
    series1: '#22A95E',
    series2: '#24B364',
    series3: '#56CA00',
    series4: '#53D28C',
    series5: '#7EDDA9',
  },
}

const timeSpendingChartConfig = {
  chart: {
    height: 157,
    width: 130,
    parentHeightOffset: 0,
    type: 'donut',
  },
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
  colors: [
    donutChartColors.donut.series1,
    donutChartColors.donut.series2,
    donutChartColors.donut.series3,
    donutChartColors.donut.series4,
    donutChartColors.donut.series5,
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
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        labels: {
          show: true,
          value: {
            fontSize: '1.5rem',
            color: 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))',
            fontWeight: 500,
            offsetY: -15,
            formatter(val: string) {
              return `${Number.parseInt(val)}h`
            },
          },
          name: {
            offsetY: 20,
          },
          total: {
            show: true,
            fontSize: '.7rem',
            label: 'Total',
            color: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
            formatter() {
              return total.value
            },
          },
        },
      },
    },
  },
}
</script>

<template>
  <VRow class="py-6">
    <!-- 👉 Welcome -->
    <VCol
      :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
      cols="12"
      md="8"
    >
      <div class="pe-3">
        <h3 class="text-h3 text-high-emphasis mb-1">
          Welcome back,<span class="font-weight-medium"> 👋🏻 </span>
        </h3>

        <div
          class="mb-2 text-wrap"
          style="max-inline-size: 400px;"
        >
          Here is the reports summary
        </div>

        <div class="d-flex justify-space-between flex-wrap gap-4 flex-column flex-md-row">
          <div
            v-for="data in productsData"
            :key="data.title"
          >
            <div class="d-flex">
              <VAvatar
                :color="data.color"
                class="text-primary me-4"
                rounded
                size="54"
                variant="tonal"
              >
                <VIcon
                  :icon="data.icon"
                  size="38"
                />
              </VAvatar>
              <div>
                <span class="text-base">{{ data.value }}</span>
                <h4
                  :class="`text-${data.color}`"
                  class="text-h4 font-weight-medium"
                >
                  {{ data.title }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VCol>
    <VCol
      cols="12"
      md="4"
    >
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex flex-column ps-3">
          <h5 class="text-h5 text-high-emphasis mb-2 text-no-wrap">
            Meeting Time Spending
          </h5>
          <span class="mb-7">Weekly Report</span>
          <div class="text-h3 mb-2">
            {{ total }}
          </div>
          <div>
            <VChip
              color="success"
              label
            >
              hours
            </VChip>
          </div>
        </div>
        <div>
          <VueApexCharts
            :options="timeSpendingChartConfig"
            :series="timeSpendingChartSeries"
            height="150"
            type="donut"
            width="150"
          />
        </div>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>

</style>
