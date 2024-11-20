export interface Account {
  lead_type: 'Individual' | 'Corporate'
  name: string
  email: string
  phone_number: string
  whatsapp_number: string
  firstName: string,
  lastName: string,
  contactEmail: string,
  contact_phone_number: string,
  contact_role: string,
  contactRole: string,
  department: string,
  website: string,
  gender?: 'male' | 'female' | 'Other'
}

export interface SetUp {
  product: 'Vendor Financing' | 'Dealer Financing'
  status: 'Hot' | 'Warm' | 'Cold'
  priority: 'High' | 'Medium' | 'Low'
  source: string
  associated_user: string
  industry: string
}

export interface Address {
  country: string,
  region?: string
  location?: string
  branch: string
}

export interface OtherDetails {
  department: string
  note: string
  company: string
  interaction_type: string
  tatDays: number
  owner: string
  very_next_step: string
}

export interface FormData {
  name: string
  company: string
  tatDays: number
  department: string
  lead_type: 'Individual' | 'Corporate'
  product: 'vendor financing' | 'dealer financing'
  email: string
  point_of_contact?: string | null
  phone_number: string
  whatsapp_number: string
  bank_id: string
  industry: null
  region?: string | null
  location?: string | null
  gender?: 'male' | 'female' | 'Other'
  status: 'hot' | 'warm' | 'cold'
  priority: 'high' | 'medium' | 'low'
  source: string
  owner: string
  branch: string
  associated_user: string
  interaction_type: 'phone' | 'email' | 'sms' | 'physical'
  very_next_step: string
  note: ''
}
