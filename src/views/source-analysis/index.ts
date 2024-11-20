interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

export const sourcingHeaders: TableHeader[] = [
  { title: 'Source', key: 'source' },
  { title: 'Contact', key: 'contact_count' },
  { title: 'Leads', key: 'lead_count' },
  { title: 'Opportunity', key: 'opportunity_count' },
  { title: 'Cold', key: 'cold_count' },
  { title: 'Rejects', key: 'reject_count' },
  { title: 'Actions', key: 'actions', sortable: false },
]
export const internalReferralHeaders: TableHeader[] = [
  { title: 'Referral Name', key: 'referral_name' },
  { title: 'Department', key: 'department' },
  { title: 'Total Referred', key: 'total_referred' },
  { title: 'Total Opportunities', key: 'total_opportunities' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// {
//   "source": "Email",
//   "contact_count": 0,
//   "lead_count": 0,
//   "opportunity_count": 1,
//   "cold_count": 0,
//   "reject_count": 0
// }
