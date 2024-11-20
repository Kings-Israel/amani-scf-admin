export interface Company {
  id: number
  username: string
  email: string
  company: string
  status?: string
  contact: string
  county: string
  avatar: string
  industry: string
}
export interface Bank {
  id: number
  name: string
  url: string
  contactPerson: number | null
  created_at: string
  updated_at: string
}

export interface Document {
  id: number
  bank_id: number
  name: string
  requires_expiry_date: boolean
  created_at: string
  updated_at: string
}
export interface BankDocument {
  id: number
  name: string
  url: string
  documents: Document[]

}

// export type BankDocument = Bank & {
//   documents: Document[]
// }
export interface RouteParams {
  id?: string
}
