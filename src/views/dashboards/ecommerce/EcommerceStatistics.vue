<script setup lang="ts">

const props = defineProps<Props>()

interface Props {
  stats: any
}


const statisticsReport = props.stats
const statistics = [
  {
    title: 'Anchors',
    stats: statisticsReport.anchors,
    icon: 'tabler-chart-pie-2',
    color: 'primary',
    slug: 'admin/anchor'
  },
  {
    title: 'Vendors',
    stats: statisticsReport.vendors,
    icon: 'tabler-users',
    color: 'info',
    slug: 'admin/vendor'
  },
  {
    title: 'Buyers',
    stats: statisticsReport.buyers,
    icon: 'tabler-shopping-cart',
    color: 'error',
    slug: 'admin/buyers'

  },
  {
    title: 'Banks',
    stats: statisticsReport.banks,
    icon: 'tabler-currency-dollar',
    color: 'success',
    slug: 'admin/bank/banks'

  },
]
</script>

<template>
  <VCard title="STATISTICS">
    <template #append>
      <span class="text-sm text-disabled">Updated 1 month ago</span>
    </template>

    <VCardText class="pt-6">
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex align-center gap-4">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
            >
              <VIcon :icon="item.icon" />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-medium">{{ item.stats }}</span>
              <a v-if="item.slug" :href="'https://yofinvoice.deveint.live/' + '' + item.slug " target="_blank" >
                <span class="text-sm">
                  {{ item.title }}
                </span>
              </a>
                <span v-else class="text-sm">
                  {{ item.title }}
                </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
