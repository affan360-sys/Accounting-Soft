# 💼 Odoo Accounting Pro - Enterprise Double-Entry Financial Software

A comprehensive, full-featured enterprise accounting software suite inspired by **Odoo Accounting (Enterprise Edition)**. Built with high-performance modern web standards, GAAP/IFRS financial integrity, and zero complex external runtime dependencies.

---

## 🌟 Key Highlights & Features

### 1. 📊 Odoo Signature Accounting Overview & Dashboard
- **Live Financial Health KPIs:** Total Accounts Receivable (A/R), Total Accounts Payable (A/P), Cash & Bank Holdings, and Net Profit (YTD) with margin calculations.
- **Dynamic Journal Kanban Cards:**
  - **Customer Invoices (`INV`)**: Invoices to validate (Draft), open unpaid invoices, overdue invoices, and 1-click invoice creation.
  - **Vendor Bills (`BILL`)**: Bills to validate, bills to pay, overdue bills, and 1-click bill entry.
  - **Bank Account (`BNK` - Silicon Valley Bank)**: Live General Ledger book balance vs Bank statement balance with pending reconciliation badges.
  - **Petty Cash (`CSH`)**: On-hand cash tracking.
  - **Miscellaneous Operations (`MISC`)**: Manual journal adjustments, opening balances, and asset depreciations.

### 2. 🧾 Customer Invoicing (Accounts Receivable - A/R)
- **Document Status Bar:** Signature Odoo step tracker (`Draft` ➔ `Posted` ➔ `Paid`).
- **Dynamic Line Items Grid:** Automatic product selection, description lookup, income account mapping, and real-time sales tax calculation.
- **Automated Double-Entry Posting:** Confirming an invoice automatically generates a balanced General Ledger journal entry (`DR Accounts Receivable`, `CR Product Revenue`, `CR Sales Tax Payable`).
- **Register Payment Flow:** Direct payment allocation to Bank or Cash journal with instant A/R clearing.
- **Print to PDF:** Pixel-perfect, formal corporate invoice layout ready for browser PDF printing or client dispatch.

### 3. 🛍️ Vendor Bills & Purchasing (Accounts Payable - A/P)
- **Supplier Bill Tracking:** Vendor selection, bill reference numbers, due date tracking, and payment terms.
- **Expense Account Allocation:** Automatically records expenses to Operating Expenses or Cost of Goods Sold.
- **Vendor Payments:** Register outgoing bank transfers and direct debits with automatic A/P liability clearance.

### 4. 🏦 Interactive Bank Reconciliation Engine
- **Odoo Two-Column Split Screen:**
  - **Left Panel:** Unreconciled bank statement transactions (incoming customer wires in green, outgoing vendor disbursements in red).
  - **Right Panel:** Intelligent candidate matching algorithm with **100% match score detection** against open invoices and bills.
- **1-Click Write-Offs:** Direct allocation of bank charges, merchant fees, interest income, or travel expenses into General Ledger accounts.
- **Simulate Transactions:** Add bank statement lines on the fly to test real-world bank feed matching.

### 5. 📈 GAAP & IFRS Compliant Financial Reports
- **Profit & Loss (Income Statement):** Operating Revenue, Cost of Goods Sold (COGS), Gross Profit, Gross Margin %, Operating Expenses, and Net Operating Profit.
- **Balance Sheet (with Equation Validation):**
  - Current & Non-Current Assets
  - Current & Non-Current Liabilities
  - Owner's Equity, Retained Earnings, and dynamic Current Year Net Profit integration.
  - Real-time verification badge: `✓ Balanced: Total Assets = Total Liabilities & Equity`.
- **Trial Balance:** Full ledger verification confirming $\sum \text{Debits} = \sum \text{Credits}$.
- **General Ledger (GL):** Account-by-account transaction audit trail with running balances.
- **Aged Receivables & Aged Payables:** Aging buckets (Current, 1–30 days, 31–60 days, 61–90 days, 90+ days).
- **Tax Audit Report:** Output Tax (Collected) vs Input Tax (Recoverable) and Net Tax Payable.
- **CSV Data Export:** One-click export of any financial report table directly into CSV/Excel format.

### 6. 📚 Chart of Accounts (COA) & Master Data
- Standard 6-digit accounts categorized under Assets (100000s), Liabilities (200000s), Equity (300000s), Revenue (400000s), COGS (500000s), and Expenses (600000s).
- Create new accounts wizard with automatic classification.
- Customer & Vendor directory with live balance badges.
- Products & Services catalog with SKU, cost, sales price, and margin calculations.

### 7. 💾 Data Persistence & Management
- All data automatically persists in the browser (`localStorage`).
- **Backup & Restore:** Download complete financial database as JSON, or upload a backup file.
- **Demo Reset:** One-click reset to the pre-loaded corporate demo dataset (**Unifly Bangladesh**).
- **Dark Mode:** Built-in sleek dark mode toggle.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)

### Starting the Application
From the project folder, start the local server:
```bash
npm start
```
Or:
```bash
node server.js
```

Then open your browser at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔐 Authentication & Role-Based Access Control (RBAC)

The system features enterprise authentication and role-based access control. All administrative power rests with the **Super Admin** and **Admin**:

| Role | Username | Password | Powers & Permissions |
| :--- | :--- | :--- | :--- |
| **👑 Super Admin** | `superadmin` | `password123` | **Full Unrestricted Power:** Manage all accounting, financial reports, add/edit/delete any employee or admin, grant roles, and company configuration. |
| **🛡️ Admin** | `admin` | `password123` | **Administrative Power:** Full accounting operations, add new employees, manage staff accounts, and configure business settings. |
| **👤 Employee** | `accountant` | `password123` | **Operational Staff:** Access to customer invoicing, vendor bills, payments, bank reconciliation, and accounting ledgers. Employee management is locked. |

### 👥 Adding New Employees
- Any **Super Admin** or **Admin** can add a new employee by navigating to **Configuration ➔ Employees & Staff** (or via the user profile menu in the top-right navbar) and clicking **`+ Add New Employee`**.
- Admins can assign system roles (`Employee` or `Admin`). Only the Super Admin can create another Super Admin.

## 📁 Project Structure

```
Accounting software/
├── package.json           # Application manifest (ESM)
├── server.js              # Fast, zero-dependency Node HTTP server
├── index.html             # Single Page Application shell
├── css/
│   ├── variables.css      # Odoo purple/teal theme, dark mode, design tokens
│   ├── layout.css         # Navbar, control panel, omnibar, view switchers
│   ├── components.css     # Tables, badges, form controls, modals, toasts
│   ├── views.css          # Dashboard kanbans, document sheets, bank reconciliation
│   └── print.css          # Print stylesheet for clean invoice & report PDFs
└── js/
    ├── app.js             # Main router & application coordinator
    ├── store.js           # Reactive data store with double-entry auto-posting
    ├── accounting.js      # GAAP/IFRS accounting calculation engine
    ├── default-data.js    # Pre-loaded corporate dataset (Unifly Bangladesh)
    ├── components/
    │   ├── navbar.js      # Odoo multi-level menu navigation
    │   ├── modal.js       # Dynamic modal dialogs (payment, account, contact)
    │   ├── toast.js       # Toast notifications
    │   └── icons.js       # Offline crisp SVG icon library
    └── views/
        ├── dashboard.js    # Odoo Accounting Overview
        ├── invoices.js     # Customer Invoicing & payment registration
        ├── credit-notes.js # Customer Credit Notes (Refunds & Reversals)
        ├── payments.js     # Customer Payments & Collection Tracking
        ├── bills.js        # Vendor Bills & Accounts Payable
        ├── bank.js         # Bank statement reconciliation
        ├── journal.js      # Journal entries & balanced entry wizard
        ├── reports.js      # Financial statements (P&L, Balance Sheet, GL, etc.)
        ├── coa.js          # Chart of Accounts management
        ├── contacts.js     # Customers & Vendors directory
        ├── products.js     # Products & Services catalog
        └── settings.js     # Company configuration, taxes & backups
```
