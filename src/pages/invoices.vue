<script lang="ts" setup>
const Welcome = defineAsyncComponent(() => import('@/views/reports/Welcome.vue'))
const ClosedDeal = defineAsyncComponent(() => import('@/views/reports/ClosedDeal.vue'))
const LeadReport = defineAsyncComponent(() => import('@/views/reports/LeadReport.vue'))
const PipelineCardCount = defineAsyncComponent(() => import('@/views/reports/PipelineCardCount.vue'))
const ProductCount = defineAsyncComponent(() => import('@/views/reports/ProductCount.vue'))
const ProductReport = defineAsyncComponent(() => import('@/views/reports/ProductReport.vue'))
const UpcomingEvent = defineAsyncComponent(() => import('@/views/reports/UpcomingEvent.vue'))
const ConversionAnalysis = defineAsyncComponent(() => import('@/views/reports/ConversionAnalysis.vue'))
</script>

<template>
  <div>
    <Welcome />
    <VRow class="match-height">
      <!-- 👉 Topics you are interested in -->
      <Suspense>
        <template #default>
          <ConversionAnalysis />
        </template>
        <template #fallback>
          <div class="loading">
            <div class="effect-1 effects" />
            <div class="effect-2 effects" />
            <div class="effect-3 effects" />
          </div>
        </template>
      </Suspense>

      <!-- 👉 Popular Instructors  -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <PipelineCardCount />
      </VCol>

      <!-- 👉 Academy Top Courses  -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <ProductCount />
      </VCol>

      <!-- 👉 Academy Upcoming Webinar -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <UpcomingEvent />
      </VCol>

      <!-- 👉 Academy Assignment Progress  -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <!--        <AcademyAssignmentProgress /> -->
      </VCol>

      <VCol>
        <ClosedDeal />
      </VCol>
      <VCol>
        <LeadReport />
      </VCol>
      <VCol>
        <ProductReport />
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>

<style scoped>
.loading {
  position: relative;
  box-sizing: border-box;
  border: 3px solid transparent;
  border-radius: 50%;
  block-size: 55px;
  inline-size: 55px;
}

.loading .effect-1,
.loading .effect-2,
.loading .effect-3 {
  position: absolute;
  box-sizing: border-box;
  border: 3px solid transparent;
  border-radius: 50%;
  block-size: 100%;
  border-inline-start: 3px solid var(--initial-loader-color, #eee);
  inline-size: 100%;
}

.loading .effect-1 {
  animation: rotate 1s ease infinite;
}

.loading .effect-2 {
  animation: rotate-opacity 1s ease infinite 0.1s;
}

.loading .effect-3 {
  animation: rotate-opacity 1s ease infinite 0.2s;
}

.loading .effects {
  transition: all 0.3s ease;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1turn);
  }
}

@keyframes rotate-opacity {
  0% {
    opacity: 0.1;
    transform: rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: rotate(1turn);
  }
}
</style>
