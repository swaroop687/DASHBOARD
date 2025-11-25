
function showPage(page) {
  const content = document.getElementById('content');
  if (page === 'invoices') {
    content.innerHTML = `
      <h1>Invoices</h1>
      <input type="text" id="search" placeholder="Search invoices..." onkeyup="filterInvoices()">
      <table>
        <thead>
          <tr><th>Invoice #</th><th>Vendor</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody id="invoiceTable">${renderInvoices(invoices)}</tbody>
      </table>
    `;
  } else if (page === 'approvals') {
    content.innerHTML = `
      <h1>Approvals</h1>
      <div class="summary">
        <p>Pending Approval: ${approvals.length}</p>
      </div>
      ${renderApprovals(approvals)}
    `;
  } else {
    content.innerHTML = `<h1>Dashboard</h1><p>Welcome to AP Automation!</p>`;
  }
}

function renderInvoices(data) {
  return data.map(inv => `
    <tr>
      <td>${inv.id}</td>
      <td>${inv.vendor}</td>
      <td>$${inv.amount}</td>
      <td><span class="badge ${inv.status.toLowerCase()}">${inv.status}</span></td>
    </tr>
  `).join('');
}

function filterInvoices() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = invoices.filter(inv => inv.id.toLowerCase().includes(query) || inv.vendor.toLowerCase().includes(query));
  document.getElementById('invoiceTable').innerHTML = renderInvoices(filtered);
}

function renderApprovals(data) {
  return data.map(app => `
    <div class="approval-card">
      <p><strong>${app.id}</strong> - ${app.vendor}</p>
      <p>Amount: $${app.amount}</p>
      <p>Submitted By: ${app.submittedBy}</p>
      <p>Days Pending: ${app.daysPending}</p>
      <button onclick="approve('${app.id}')">Approve</button>
      <button onclick="reject('${app.id}')">Reject</button>
    </div>
  `).join('');
}

function approve(id) {
  alert(`Invoice ${id} approved!`);
}

function reject(id) {
  alert(`Invoice ${id} rejected!`);
}

// Load default page
showPage('dashboard');

