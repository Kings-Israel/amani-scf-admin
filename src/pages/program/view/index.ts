export interface Anchor {
  id: number;
  bank_id: number;
  name: string;
  unique_identification_number: string;
  branch_code: string;
  business_identification_number: string;
  organization_type: string;
  business_segment?: string | null;
  customer_type: string;
  kra_pin: string;
  cust_ancode?: string | null;
  logo: string | null;
  city: string;
  postal_code: string;
  address: string;
  approval_status: string;
  status: string;
  relationship_manager_name: string;
  relationship_manager_email: string;
  relationship_manager_phone_number: string;
  created_at: string;
  updated_at: string;
  pipeline_id: string | null;
  top_level_borrower_limit: string;
  limit_expiry_date: string;
  is_current: number;
  is_published: number;
  published_at: string | null;
  uuid: string | null;
  publisher_type: string | null;
  publisher_id: string | null;
  rejection_reason: string | null;
}

// Interface for the buyer object
export interface Buyer {
  id: number;
  bank_id: number;
  name: string;
  unique_identification_number: string;
  branch_code: string;
  business_identification_number: string;
  organization_type: string;
  business_segment?: string | null;
  customer_type: string;
  kra_pin: string;
  cust_ancode?: string | null;
  logo: string | null;
  city: string;
  postal_code: string;
  address: string;
  approval_status: string;
  status: string;
  relationship_manager_name: string;
  relationship_manager_email: string;
  relationship_manager_phone_number: string;
  created_at: string;
  updated_at: string;
  pipeline_id: string | null;
  top_level_borrower_limit: string;
  limit_expiry_date: string;
  is_current: number;
  is_published: number;
  published_at: string | null;
  uuid: string | null;
  publisher_type: string | null;
  publisher_id: string | null;
  rejection_reason: string | null;
}

// Interface for the program object
export interface Program {
  id: number;
  bank_id: number;
  program_type_id: number;
  program_code_id: number;
  name: string;
  code: string;
  eligibility: number;
  invoice_margin: string | null;
  program_limit: number;
  approved_date: string;
  limit_expiry_date: string;
  max_limit_per_account: number;
  collection_account: string | null;
  request_auto_finance: boolean;
  stale_invoice_period: string | null;
  min_financing_days: number;
  max_financing_days: number;
  segment: string | null;
  auto_debit_anchor_financed_invoices: boolean;
  auto_debit_anchor_non_financed_invoices: boolean;
  anchor_can_change_due_date: boolean;
  max_days_due_date_extension: number;
  days_limit_for_due_date_change: number;
  default_payment_terms: number;
  anchor_can_change_payment_term: boolean;
  repayment_appropriation: string | null;
  mandatory_invoice_attachment: boolean;
  partner: string | null;
  recourse: string | null;
  due_date_calculated_from: string;
  noa: string | null;
  account_status: string;
  board_resolution_attachment: string | null;
  created_at: string;
  updated_at: string;
  is_current: number;
  is_published: number;
  published_at: string | null;
  uuid: string | null;
  publisher_id: string | null;
  publisher_type: string | null;
  stop_supply: string | null;
  buyer_invoice_approval_required: number;
  factoring_payment_account: string | null;
  program_type: ProgramType;
  anchor: Anchor;
  vendors: any[]; // Assuming vendors can be of any type
  buyers: Buyer;
}

interface ProgramType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export const readableProgramProperties = {
  id: 'ID',
  bank_id: 'Bank ID',
  program_type_id: 'Program Type ID',
  program_code_id: 'Program Code ID',
  name: 'Name',
  code: 'Code',
  eligibility: 'Eligibility',
  invoice_margin: 'Invoice Margin',
  program_limit: 'Program Limit',
  approved_date: 'Approved Date',
  limit_expiry_date: 'Limit Expiry Date',
  max_limit_per_account: 'Max Limit Per Account',
  collection_account: 'Collection Account',
  request_auto_finance: 'Request Auto Finance',
  stale_invoice_period: 'Stale Invoice Period',
  min_financing_days: 'Min Financing Days',
  max_financing_days: 'Max Financing Days',
  segment: 'Segment',
  auto_debit_anchor_financed_invoices: 'Auto Debit Anchor Financed Invoices',
  auto_debit_anchor_non_financed_invoices: 'Auto Debit Anchor Non Financed Invoices',
  anchor_can_change_due_date: 'Anchor Can Change Due Date',
  max_days_due_date_extension: 'Max Days Due Date Extension',
  days_limit_for_due_date_change: 'Days Limit For Due Date Change',
  default_payment_terms: 'Default Payment Terms',
  anchor_can_change_payment_term: 'Anchor Can Change Payment Term',
  repayment_appropriation: 'Repayment Appropriation',
  mandatory_invoice_attachment: 'Mandatory Invoice Attachment',
  partner: 'Partner',
  recourse: 'Recourse',
  due_date_calculated_from: 'Due Date Calculated From',
  noa: 'NOA',
  account_status: 'Account Status',
  board_resolution_attachment: 'Board Resolution Attachment',
  created_at: 'Created At',
  updated_at: 'Updated At',
  is_current: 'Is Current',
  is_published: 'Is Published',
  published_at: 'Published At',
  uuid: 'UUID',
  publisher_id: 'Publisher ID',
  publisher_type: 'Publisher Type',
  stop_supply: 'Stop Supply',
  buyer_invoice_approval_required: 'Buyer Invoice Approval Required',
  factoring_payment_account: 'Factoring Payment Account',
  anchor: 'Anchor',
  vendors: 'Vendors',
  buyers: 'Buyers',
};


// For an array of Program objects
export interface ProgramArray {
  [index: number]: Program
}

// For an array of Anchor objects
export interface AnchorArray {
  [index: number]: Anchor
}
// For an array of Anchor objects
export interface BuyerArray {
  [index: number]: Buyer
}


// Interface for the main object
export interface MainObject {
  1: Program;
  data: number;
  program: number;
}
