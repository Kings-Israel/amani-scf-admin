interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

export const ContactsHeaders: TableHeader[] = [
  { title: 'Contact Name', key: 'name' },
  { title: 'Company', key: 'company' },
  { title: 'Department', key: 'department' },
  { title: 'Email', key: 'email' },
  { title: 'Source', key: 'source' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const AdminContactsHeaders: TableHeader[] = [
  { title: 'Contact Name', key: 'name' },
  { title: 'Company', key: 'company' },
  { title: 'Sales Agents', key: 'sales' },
  { title: 'Department', key: 'department' },
  { title: 'Email', key: 'email' },
  { title: 'Source', key: 'source' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const LeadsHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'name' },
  { title: 'Date', key: 'created_at', sortable: false },
  { title: 'Contact Email', key: 'email' },
  { title: 'Phone Number', key: 'phone_number' },
  { title: 'Source', key: 'source' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const AdminLeadsHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'name' },
  { title: 'Sales Agents', key: 'sales' },
  { title: 'Date', key: 'created_at', sortable: false },
  { title: 'Contact Email', key: 'email' },
  { title: 'Phone Number', key: 'phone_number' },
  { title: 'Source', key: 'source' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const OpportunitiesHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Name', key: 'name' },
  { title: 'Convert On', key: 'converted_on', sortable: false },
  { title: 'Email', key: 'email' },
  { title: 'Phone Number', key: 'phone_number' },
  { title: 'Branch', key: 'branch' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const AdminOpportunitiesHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Name', key: 'name' },
  { title: 'Convert On', key: 'converted_on', sortable: false },
  { title: 'Email', key: 'email' },
  { title: 'Phone Number', key: 'phone_number' },
  { title: 'Branch', key: 'branch' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const ConversionHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'contact_name' },
  { title: 'Convert On', key: 'converted_on', sortable: false },
  { title: 'Contact Email', key: 'email' },
  { title: 'Phone Number', key: 'phone_number' },
  { title: 'Region', key: 'region' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const AdminConversionHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'contact_name' },
  { title: 'Convert On', key: 'converted_on', sortable: false },
  { title: 'Contact Email', key: 'email' },
  { title: 'Phone Number', key: 'phone_number' },
  { title: 'Region', key: 'region' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const ColdLeadsHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'name' },
  { title: 'Contact', key: 'phone_number' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const AdminColdLeadsHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'name' },
  { title: 'Contact', key: 'phone_number' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const RejectsHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'contact_name' },
  { title: 'Date Added', key: 'converted_on', sortable: false },
  { title: 'Contact Email', key: 'email' },
  { title: 'Region', key: 'region' },
  { title: 'Lead Source', key: 'source' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const AdminRejectsHeaders: TableHeader[] = [
  { title: 'Company', key: 'company' },
  { title: 'Contact Name', key: 'contact_name' },
  { title: 'Date Added', key: 'converted_on', sortable: false },
  { title: 'Contact Email', key: 'email' },
  { title: 'Region', key: 'region' },
  { title: 'Lead Source', key: 'source' },
  { title: 'Actions', key: 'actions', sortable: false },
]
