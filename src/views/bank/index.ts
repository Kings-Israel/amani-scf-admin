interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

export const headers: TableHeader[] = [
  { title: 'Name', key: 'name' },
  { title: 'URL', key: 'url' },
  { title: 'email', key: 'email' },
  { title: 'Contact Person', key: 'contact_person' },
  { title: 'Date', key: 'created_at', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Action', key: 'actions', sortable: false },
]

export interface BankDetails {
  name: string
  url: string
  email: string
  createdBy: string
}
