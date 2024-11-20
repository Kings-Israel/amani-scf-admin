<script lang="ts" setup>
import HeroSection from '@/views/documents/hero-section.vue'

definePage({
  meta: {
    layout: 'blank',
    public: true,
    unauthenticatedOnly: true,
  },
})

const documentIsSubmitted = ref(true)

const refHome = ref()

onMounted(() => {
  setTimeout(() => {
    documentIsSubmitted.value = false
  }, 4000)
})
</script>

<template>
  <VSnackbar
    v-model="documentIsSubmitted"
    color="success"
    location="top end"
    variant="flat"
  >
    The documents have been Successfully submit
  </VSnackbar>
  <div class="landing-page-wrapper">
    <!-- 👉 Hero Section  -->
    <HeroSection ref="refHome" />
  </div>
</template>

<style lang="scss">
@media (max-width: 960px) and (min-width: 600px) {
  .landing-page-wrapper {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>
