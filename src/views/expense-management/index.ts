interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

export const headers: TableHeader[] = [
  { title: 'Requested By', key: 'user', sortable: false },
  { title: 'Lead Name', key: 'lead_name' },
  { title: 'Activity', key: 'activity' },
  { title: 'Amount', key: 'amount' },
  { title: 'Approval Date', key: 'approved_date', sortable: false },
  { title: 'Request Date', key: 'date', sortable: false },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

export const reimbursementheaders: TableHeader[] = [
  { title: 'Lead Name', key: 'lead_name' },
  { title: 'Amount', key: 'amount' },
  { title: 'Approval Date', key: 'approval_date', sortable: false },
  { title: 'Request Date', key: 'date', sortable: false },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

export interface AccommodationDetails {
  leadName: string
  activity: string
  file?: File
  requestDate: Date
  attachmentFile: string
  notes: string
  amount: number
  user_id?: number
}

export interface ReimbursementDetails {
  leadName: string
  file?: File
  requestDate: Date
  attachmentFile: string
  notes: string
  amount: number
  user_id?: number
}
