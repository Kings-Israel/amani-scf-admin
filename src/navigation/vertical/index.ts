export default [
  {
    title: 'Home',
    to: { name: 'home' },
    icon: { icon: 'tabler-smart-home' },
    action: 'manage',
    subject: 'View Reports',
  },
  {
    title: 'Pipeline',
    icon: { icon: 'tabler-test-pipe-2' },
    children: [
      {
        title: 'New',
        icon: { icon: 'tabler-pencil' },
        to: { name: 'pipeline-new' },
        action: 'manage',
        subject: 'Add Contact',
      },
      {
        title: 'Contacts',
        icon: { icon: 'tabler-eye-code' },
        to: { name: 'pipeline-contacts-tab', params: { tab: 'Contacts' } },
        action: 'manage',
        subject: 'View Contact',
      },
      {
        title: 'Leads',
        icon: { icon: 'tabler-eye-code' },
        to: { name: 'pipeline-leads-tab', params: { tab: 'Leads' } },
        action: 'manage',
        subject: 'View Lead',
      },
      {
        title: 'Opportunity',
        icon: { icon: 'tabler-eye-code' },
        to: { name: 'pipeline-opportunity-tab', params: { tab: 'Opportunity' } },
        action: 'manage',
        subject: 'View Opportunity',
      },
      {
        title: 'Closed',
        icon: { icon: 'tabler-eye-code' },
        to: { name: 'pipeline-closed-tab', params: { tab: 'Closed' } },
        action: 'manage',
        subject: 'View Closed',
      },
    ],
  },
  {
    title: 'Calendar',
    icon: { icon: 'tabler-calendar' },
    children: [
      {
        title: 'Schedules',
        to: 'calendar-schedules',
        action: 'manage',
        subject: 'View Schedules',
      },
      {
        title: 'Follow Ups',
        to: 'calendar-followups',
        action: 'manage',
        subject: 'View Follow Ups',
      },

    ],
  },
  {
    title: 'User Management',
    icon: { icon: 'tabler-calendar' },
    children: [
      {
        title: 'Users',
        to: 'users-list',
        action: 'manage',
        subject: 'View Users',
      },
      {
        title: 'Roles',
        to: 'users-role',
        action: 'manage',
        subject: 'Manage Roles',
      },
    ],
  },
  {
    title: 'Programs',
    to: { name: 'programs' },
    icon: { icon: 'tabler-border-top' },
    action: 'manage',
    subject: 'View Programs & Mapping',
    badgeContent: '5',
    badgeClass: 'bg-error',
  },
  {
    title: 'Companies',
    to: { name: 'company' },
    icon: { icon: 'tabler-truck-delivery' },
    action: 'manage',
    subject: 'View Companies',
  },
  {
    title: 'Banks',
    to: { name: 'bank-banks' },
    icon: { icon: 'tabler-building' },
    children: [
      {
        title: 'All Banks',
        to: { name: 'bank-banks' },
        action: 'manage',
        subject: 'View Banks',
      },
      {
        title: 'Banks Masterlist',
        to: { name: 'bank-masterlist' },
        action: 'manage',
        subject: 'View Banks',
      },
    ]
  },
  {
    title: 'Source Analysis',
    to: { name: 'source-analysis' },
    icon: { icon: 'tabler-truck-loading' },
    action: 'manage',
    subject: 'Add Contact',
  },
  {
    title: 'Expense Management',
    to: { name: 'expense-management' },
    icon: { icon: 'tabler-cash-banknote' },
    action: 'manage',
    subject: 'View Expenses',
  },
  {
    title: 'Reports',
    to: { name: 'reports' },
    icon: { icon: 'tabler-report' },
    children: [
      {
        title: 'All Reports',
        to: { name: 'reports' },
        action: 'manage',
        subject: 'View Reports',
      },
      {
        title: 'All Invoice Reports',
        to: { name: 'reports-allinvoice' },
        action: 'manage',
        subject: 'View Reports',
      },
      {
        title: 'Requested Invoice Reports',
        to: { name: 'reports-requestedinvoice' },
        action: 'manage',
        subject: 'View Reports',
      },
      {
        title: 'Expired Invoice Reports',
        to: { name: 'reports-expiredinvoice' },
        action: 'manage',
        subject: 'View Reports',
      },
      {
        title: 'DF - Potential Financing Report',
        to: { name: 'reports-dfpotential-financing' },
        action: 'manage',
        subject: 'View Reports',
      },
      {
        title: 'VF - Potential Financing Report',
        to: { name: 'reports-vfpotential-financing' },
        action: 'manage',
        subject: 'View Reports',
      },
      {
        title: 'Activity Logs',
        to: { name: 'report-activity' },
        action: 'manage',
        subject: 'View Reports',
      },
    ],
  },
  {
    title: 'Configurations',
    icon: { icon: 'tabler-settings' },
    children: [
      {
        title: 'Taxes & Currencies',
        to: { name: 'configurations' },
        action: 'manage',
        subject: 'View Taxes',
      },
      {
        title: 'Base Rates',
        to: { name: 'configurations-baserates' },
        action: 'manage',
        subject: 'View Base Rates',
      },
      {
        title: 'Email Templates',
        to: { name: 'configurations-email-templates' },
        action: 'manage',
        subject: 'Manage Email Templates',
      },
      {
        title: 'NOA Templates',
        to: { name: 'configurations-noa-templates' },
        action: 'manage',
        subject: 'Manage NOA Templates',
      },
      {
        title: 'User Manuals',
        to: { name: 'configurations-user-manuals' },
        action: 'manage',
        subject: 'Manage User Manuals',
      },
      {
        title: 'Terms & Conditions',
        to: { name: 'configurations-terms-conditions' },
        action: 'manage',
        subject: 'Manage Terms and Conditions',
      },
      {
        title: 'Plartform Configurations',
        to: { name: 'configurations-system-configurations' },
        action: 'manage',
        subject: 'Manage Email Templates',
      },
      {
        title: 'Industries',
        to: { name: 'configurations-industries' },
        action: 'manage',
        subject: 'Manage Email Templates',
      },
    ],
  },
]
