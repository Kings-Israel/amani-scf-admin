interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

export const ContactsHeaders: TableHeader[] = [
  { title: 'Contact Name', key: 'name' },
  { title: 'Stage', key: 'stage' },
  { title: 'Company', key: 'company' },
  { title: 'Product', key: 'product' },
  { title: 'Email', key: 'email' },
  { title: 'Source', key: 'source' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const TargetPerformanceHeaders: TableHeader[] = [
  { title: 'Type', key: 'type' },
  { title: 'Target', key: 'target' },
  { title: 'Start Date', key: 'start_date' },
  { title: 'Deadline', key: 'deadline' },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Success Ratio', key: 'success_ratio', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const TasksActivitiesHeaders: TableHeader[] = [
  { title: 'Type of Activities', key: 'type_of_activity' },
  { title: 'Activity Name', key: 'activity_name' },
  { title: 'No. of Contacts', key: 'no_contacts' },
  { title: 'No. of Leads', key: 'no_of_leads' },
  { title: 'No. of Deals', key: 'no_of_deals' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const CustomerFeedbackHeaders: TableHeader[] = [
  { title: 'Bank Name', key: 'bank_name' },
  { title: 'Company Name', key: 'company' },
  { title: 'Contact Person', key: 'contact_person' },
  { title: 'Status', key: 'status' },
  { title: 'Date', key: 'date', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const ConversionRateAnalysisHeader: TableHeader[] = [
  { title: 'Bank Name', key: 'bank_name' },
  { title: 'Company Name', key: 'company' },
  { title: 'Contact Person', key: 'contact_person' },
  { title: 'Status', key: 'status' },
  { title: 'Date', key: 'date', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]
