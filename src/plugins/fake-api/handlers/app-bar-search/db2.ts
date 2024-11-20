import type { SearchResults } from '@/plugins/fake-api/handlers/app-bar-search/types'

interface DB {
  searchItems: SearchResults[]
}

export const db: DB = {
  searchItems: [
    {
      title: 'Dashboards',
      category: 'dashboards',
      children: [
        {
          url: { name: 'dashboards-analytics' },
          icon: 'tabler-timeline',
          title: 'Analytics Dashboard',
        },
        {
          url: { name: 'dashboards-crm' },
          icon: 'tabler-file-analytics',
          title: 'CRM Dashboard',
        },
        {
          url: { name: 'dashboards-ecommerce' },
          icon: 'tabler-shopping-cart',
          title: 'ECommerce Dashboard',
        },
        {
          url: { name: 'dashboards-academy' },
          icon: 'tabler-book',
          title: 'Academy Dashboard',
        },
        {
          url: { name: 'dashboards-logistics' },
          icon: 'tabler-truck',
          title: 'Logistics Dashboard',
        },
      ],
    },
    {
      title: 'Chart & Misc',
      category: 'chartsMisc',
      children: [
        {
          url: { name: 'charts-apex-chart' },
          icon: 'tabler-chart-area-line',
          title: 'Apex Charts',
        },
        {
          url: { name: 'charts-chartjs' },
          icon: 'tabler-chart-histogram',
          title: 'ChartJS',
        },
        {
          url: { name: 'access-control' },
          icon: 'tabler-shield',
          title: 'Access Control (ACL)',
        },
      ],
    },
  ],
}
