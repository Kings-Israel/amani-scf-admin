interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

export const headers: TableHeader[] = [
  { title: 'Notification', key: 'combined' },
  { title: 'Date', key: 'formatted_created_at' },
  { title: 'Action', key: 'actions' },
]

export const Notification: TableHeader[] = [
  { title: 'Title', key: 'title' },
  { title: 'SubTitle', key: 'subtitle' },
  { title: 'Time', key: 'time' },
  { title: 'Status', key: 'isSeeen' },
]
