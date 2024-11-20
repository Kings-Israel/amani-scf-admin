export interface Company {
  username: string
  company: string
  email: string
  county: string
  contact: string
  status: 'active' | 'inactive'
  industry: number
  avatar: string
}

// For an array of Company objects
export interface CompanyArray {
  [index: number]: Company
}
