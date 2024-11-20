export interface Opportunity {
  associated_user: string
  branch: string
  company: string
  created_at: string
  department: string
  email: string
  gender: 'male' | 'female'
  id: number
  interaction_type: string
  lead_type: string
  location: string | null
  name: string
  owner: string
  phone_number: string
  point_of_contact: string
  priority: 'high' | 'medium' | 'low' // Adjust based on your actual priority levels
  product: string
  region: string
  source: string
  stage: string
  status: string
  tatDays: number
  updated_at: string
  very_next_step: string
}

// For an array of Opportunity objects
export interface OpportunityArray {
  [index: number]: Opportunity
}
