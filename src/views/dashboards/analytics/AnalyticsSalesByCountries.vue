<script setup lang="ts">
const { data: invoiceReportsData, execute: fetchInvoiceReportsData } = await useApi<any>(createUrl('/admin/reports/anchors'))

const reportInvoices = invoiceReportsData.value.data

console.log(reportInvoices)

const salesByCountries = [
  {
    avatarImg: '',
    stats: '$8.45k',
    subtitle: 'United states',
    profitLoss: 25.8,
  },
  {
    avatarImg: '',
    stats: '$7.78k',
    subtitle: 'Brazil',
    profitLoss: -16.2,
  },
  {
    avatarImg: '',
    stats: '$6.48k',
    subtitle: 'India',
    profitLoss: 12.3,
  },
  {
    avatarImg: '',
    stats: '$5.12k',
    subtitle: 'Australia',
    profitLoss: -11.9,
  },
  {
    avatarImg: '',
    stats: '$4.45k',
    subtitle: 'France',
    profitLoss: 16.2,
  },
  {
    avatarImg: '',
    stats: '$3.90k',
    subtitle: 'China',
    profitLoss: 14.8,
  },
]

const moreList = [
  { title: 'Refresh', value: 'refresh' },
  { title: 'Download', value: 'download' },
  { title: 'View All', value: 'View All' },
]
</script>

<template>
  <VCard
    title="Most Financed Anchors"
    subtitle="By limit utilisation (%)"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="anchor in reportInvoices"
          :key="anchor.id"
        >
          <template #prepend>
            <VAvatar
              size="34"
              color="secondary"
            />
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ anchor.percentage_utilized }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ anchor.programe_name }}
          </VListItemSubtitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
