
const invoices = [
  { id: 'INV-2024-001', vendor: 'Office Supplies Co.', amount: 1250, status: 'Pending', issueDate: '2024-01-14', dueDate: '2024-02-14' },
  { id: 'INV-2024-002', vendor: 'Tech Solutions Inc.', amount: 5800, status: 'Approved', issueDate: '2024-01-09', dueDate: '2024-02-09' },
  { id: 'INV-2024-003', vendor: 'Marketing Agency LLC', amount: 3200, status: 'Paid', issueDate: '2024-01-19', dueDate: '2024-02-19' },
  { id: 'INV-2024-004', vendor: 'Facility Management Corp.', amount: 2100, status: 'Overdue', issueDate: '2023-12-27', dueDate: '2024-01-27' }
];

const approvals = [
  { id: 'INV-2024-001', vendor: 'Office Supplies Co.', amount: 1250, submittedBy: 'John Smith', submittedDate: '2024-01-14', daysPending: 680 },
  { id: 'INV-2024-005', vendor: 'Legal Services Group', amount: 4500, submittedBy: 'Sarah Johnson', submittedDate: '2024-01-17', daysPending: 677 }
];

