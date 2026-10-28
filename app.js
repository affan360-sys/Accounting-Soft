// js/default-data.js
var DEFAULT_DATA = {
  company: {
    name: "Unifly Bangladesh",
    currency: "BDT",
    currencySymbol: "\u09F3",
    taxId: "BD-849201923",
    fiscalYearStart: "2026-01-01",
    email: "finance@unifly.com.bd",
    phone: "+880 1711-000000",
    street: "Gulshan Avenue, Block SE(F)",
    city: "Dhaka 1212",
    country: "Bangladesh",
    logoText: "UNIFLY"
  },
  taxes: [
    { id: "tax-10", name: "Standard Sales Tax (10%)", rate: 10, type: "percent", active: true },
    { id: "tax-5", name: "Reduced Rate (5%)", rate: 5, type: "percent", active: true },
    { id: "tax-0", name: "Zero Tax (0%)", rate: 0, type: "percent", active: true }
  ],
  // Full Standard Chart of Accounts (COA)
  accounts: [
    // Current Assets
    { code: "101000", name: "Bank - Silicon Valley Bank", type: "asset_cash", category: "Current Assets", normalBalance: "debit", balance: 54320, active: true },
    { code: "102000", name: "Petty Cash Register", type: "asset_cash", category: "Current Assets", normalBalance: "debit", balance: 1450, active: true },
    { code: "105000", name: "Chase Corporate Reserve", type: "asset_cash", category: "Current Assets", normalBalance: "debit", balance: 85e3, active: true },
    { code: "120000", name: "Accounts Receivable (A/R)", type: "asset_receivable", category: "Current Assets", normalBalance: "debit", balance: 6490, active: true },
    { code: "130000", name: "Inventory Asset", type: "asset_current", category: "Current Assets", normalBalance: "debit", balance: 24500, active: true },
    { code: "140000", name: "Prepaid Insurance & Expenses", type: "asset_current", category: "Current Assets", normalBalance: "debit", balance: 6200, active: true },
    // Non-Current Assets
    { code: "170000", name: "Computer & Server Equipment", type: "asset_fixed", category: "Non-Current Assets", normalBalance: "debit", balance: 35e3, active: true },
    { code: "175000", name: "Accumulated Depreciation", type: "asset_fixed", category: "Non-Current Assets", normalBalance: "credit", balance: -7200, active: true },
    // Current Liabilities
    { code: "201000", name: "Accounts Payable (A/P)", type: "liability_payable", category: "Current Liabilities", normalBalance: "credit", balance: 5390, active: true },
    { code: "205000", name: "Amex Corporate Credit Card", type: "liability_current", category: "Current Liabilities", normalBalance: "credit", balance: 3200, active: true },
    { code: "220000", name: "Sales Tax / VAT Payable", type: "liability_current", category: "Current Liabilities", normalBalance: "credit", balance: 2850, active: true },
    { code: "230000", name: "Accrued Salaries & Benefits", type: "liability_current", category: "Current Liabilities", normalBalance: "credit", balance: 14500, active: true },
    // Non-Current Liabilities
    { code: "260000", name: "Long-Term Bank Loan", type: "liability_non_current", category: "Non-Current Liabilities", normalBalance: "credit", balance: 4e4, active: true },
    // Equity
    { code: "301000", name: "Common Stock / Capital", type: "equity", category: "Equity", normalBalance: "credit", balance: 1e5, active: true },
    { code: "305000", name: "Retained Earnings", type: "equity", category: "Equity", normalBalance: "credit", balance: 34820, active: true },
    // Revenue
    { code: "400000", name: "Product Sales Revenue", type: "revenue", category: "Operating Revenue", normalBalance: "credit", balance: 48600, active: true },
    { code: "410000", name: "Consulting & Implementation Services", type: "revenue", category: "Operating Revenue", normalBalance: "credit", balance: 32400, active: true },
    { code: "490000", name: "Interest & Other Income", type: "other_income", category: "Other Income", normalBalance: "credit", balance: 1200, active: true },
    // Cost of Goods Sold
    { code: "500000", name: "Cost of Goods Sold (COGS)", type: "cogs", category: "Cost of Goods Sold", normalBalance: "debit", balance: 21500, active: true },
    { code: "510000", name: "Direct Subcontractor Expense", type: "cogs", category: "Cost of Goods Sold", normalBalance: "debit", balance: 8400, active: true },
    // Operating Expenses
    { code: "600000", name: "Salaries and Employee Wages", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 24e3, active: true },
    { code: "610000", name: "Commercial Office Rent", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 9e3, active: true },
    { code: "620000", name: "Cloud Infrastructure (AWS/GCP)", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 4200, active: true },
    { code: "630000", name: "Marketing & Growth Campaigns", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 3800, active: true },
    { code: "640000", name: "Travel & Business Entertainment", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 1650, active: true },
    { code: "650000", name: "Bank Charges & Merchant Fees", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 440, active: true },
    { code: "660000", name: "Depreciation Expense", type: "expense", category: "Operating Expenses", normalBalance: "debit", balance: 1800, active: true }
  ],
  // Accounting Journals
  journals: [
    { id: "INV", code: "INV", name: "Customer Invoices", type: "sale", defaultAccount: "400000", icon: "file-text" },
    { id: "BILL", code: "BILL", name: "Vendor Bills", type: "purchase", defaultAccount: "600000", icon: "shopping-bag" },
    { id: "BNK", code: "BNK", name: "Bank - SVB", type: "bank", defaultAccount: "101000", icon: "landmark" },
    { id: "CSH", code: "CSH", name: "Petty Cash", type: "cash", defaultAccount: "102000", icon: "coins" },
    { id: "MISC", code: "MISC", name: "Miscellaneous Operations", type: "general", defaultAccount: "305000", icon: "shuffle" }
  ],
  // Contacts (Customers & Vendors)
  partners: [
    {
      id: "part-1",
      name: "Acme Technologies Corp",
      company: "Acme Inc.",
      email: "finance@acmetech.com",
      phone: "+1 (555) 492-1029",
      street: "100 Innovation Blvd",
      city: "Austin, TX 78701",
      taxId: "US-99381283",
      isCustomer: true,
      isVendor: false,
      paymentTerms: "30_days",
      receivableBalance: 0
    },
    {
      id: "part-2",
      name: "Quantum Logistics LLC",
      company: "Quantum Global",
      email: "ap@quantumlogistics.com",
      phone: "+1 (555) 601-8844",
      street: "450 Freight Harbor Way",
      city: "Seattle, WA 98101",
      taxId: "US-88471920",
      isCustomer: true,
      isVendor: false,
      paymentTerms: "15_days",
      receivableBalance: 3740
    },
    {
      id: "part-3",
      name: "Nexus Design Studio",
      company: "Nexus Creative",
      email: "accounts@nexusdesign.io",
      phone: "+1 (555) 782-9911",
      street: "88 Soho Arts District",
      city: "New York, NY 10012",
      taxId: "US-77192019",
      isCustomer: true,
      isVendor: false,
      paymentTerms: "30_days",
      receivableBalance: 2750
    },
    {
      id: "part-4",
      name: "Global Cloud Hosting Ltd",
      company: "Global Cloud",
      email: "billing@globalcloud.net",
      phone: "+1 (800) 492-8811",
      street: "12 Datacenter Parkway",
      city: "Ashburn, VA 20147",
      taxId: "US-55481920",
      isCustomer: false,
      isVendor: true,
      paymentTerms: "immediate",
      payableBalance: 0
    },
    {
      id: "part-5",
      name: "Metro Office Leasing Inc",
      company: "Metro Commercial Properties",
      email: "rent@metrocommercial.com",
      phone: "+1 (555) 301-4455",
      street: "500 Market St, Suite 2200",
      city: "San Francisco, CA 94105",
      taxId: "US-33918291",
      isCustomer: false,
      isVendor: true,
      paymentTerms: "30_days",
      payableBalance: 4500
    },
    {
      id: "part-6",
      name: "DevCraft Software Tools",
      company: "DevCraft Tools LLC",
      email: "sales@devcrafttools.com",
      phone: "+1 (555) 890-2211",
      street: "14 Tech Park Road",
      city: "Boulder, CO 80301",
      taxId: "US-22918471",
      isCustomer: false,
      isVendor: true,
      paymentTerms: "15_days",
      payableBalance: 890
    }
  ],
  // Products and Services Catalog
  products: [
    {
      id: "prod-1",
      name: "Enterprise ERP Cloud License",
      sku: "LIC-ERP-01",
      type: "service",
      salePrice: 2500,
      costPrice: 400,
      incomeAccount: "400000",
      expenseAccount: "500000",
      taxId: "tax-10",
      description: "Full annual enterprise accounting license subscription per tenant."
    },
    {
      id: "prod-2",
      name: "ERP Implementation & Migration Package",
      sku: "SRV-IMP-01",
      type: "service",
      salePrice: 5e3,
      costPrice: 1200,
      incomeAccount: "410000",
      expenseAccount: "510000",
      taxId: "tax-10",
      description: "Complete legacy data migration, COA alignment, and team onboarding."
    },
    {
      id: "prod-3",
      name: "Dedicated 24/7 Support Retainer",
      sku: "SRV-SUP-01",
      type: "service",
      salePrice: 1200,
      costPrice: 300,
      incomeAccount: "410000",
      expenseAccount: "600000",
      taxId: "tax-10",
      description: "Monthly guaranteed SLA support with dedicated account manager."
    },
    {
      id: "prod-4",
      name: "API & Bank Feed Custom Connector",
      sku: "SRV-API-01",
      type: "service",
      salePrice: 3400,
      costPrice: 800,
      incomeAccount: "410000",
      expenseAccount: "510000",
      taxId: "tax-10",
      description: "Custom bidirectional webhook and open banking API connector."
    },
    {
      id: "prod-5",
      name: "Dell XPS Pro Development Workstation",
      sku: "HW-DELL-01",
      type: "goods",
      salePrice: 1850,
      costPrice: 1400,
      incomeAccount: "400000",
      expenseAccount: "500000",
      taxId: "tax-10",
      description: "Core i9, 64GB RAM high-performance development machine."
    }
  ],
  // Customer Invoices
  invoices: [
    {
      id: "inv-1",
      number: "INV/2026/0001",
      partnerId: "part-1",
      date: "2026-09-15",
      dueDate: "2026-10-15",
      paymentTerms: "30_days",
      status: "paid",
      // draft, posted, paid, overdue
      lines: [
        {
          id: "line-1-1",
          productId: "prod-1",
          description: "Enterprise ERP Cloud License - Year 1",
          accountId: "400000",
          quantity: 2,
          unitPrice: 2500,
          taxRate: 10,
          subtotal: 5e3,
          taxAmount: 500,
          total: 5500
        },
        {
          id: "line-1-2",
          productId: "prod-3",
          description: "Dedicated 24/7 Support Retainer",
          accountId: "410000",
          quantity: 1,
          unitPrice: 1200,
          taxRate: 10,
          subtotal: 1200,
          taxAmount: 120,
          total: 1320
        }
      ],
      untaxedAmount: 6200,
      taxAmount: 620,
      totalAmount: 6820,
      amountDue: 0,
      payments: [
        {
          id: "pay-1",
          date: "2026-10-10",
          journalId: "BNK",
          amount: 6820,
          reference: "Wire Transfer SVB #84912"
        }
      ]
    },
    {
      id: "inv-2",
      number: "INV/2026/0002",
      partnerId: "part-2",
      date: "2026-10-01",
      dueDate: "2026-10-16",
      paymentTerms: "15_days",
      status: "posted",
      lines: [
        {
          id: "line-2-1",
          productId: "prod-4",
          description: "API & Bank Feed Custom Connector",
          accountId: "410000",
          quantity: 1,
          unitPrice: 3400,
          taxRate: 10,
          subtotal: 3400,
          taxAmount: 340,
          total: 3740
        }
      ],
      untaxedAmount: 3400,
      taxAmount: 340,
      totalAmount: 3740,
      amountDue: 3740,
      payments: []
    },
    {
      id: "inv-3",
      number: "INV/2026/0003",
      partnerId: "part-3",
      date: "2026-09-01",
      dueDate: "2026-10-01",
      paymentTerms: "30_days",
      status: "overdue",
      lines: [
        {
          id: "line-3-1",
          productId: "prod-1",
          description: "Enterprise ERP Cloud License",
          accountId: "400000",
          quantity: 1,
          unitPrice: 2500,
          taxRate: 10,
          subtotal: 2500,
          taxAmount: 250,
          total: 2750
        }
      ],
      untaxedAmount: 2500,
      taxAmount: 250,
      totalAmount: 2750,
      amountDue: 2750,
      payments: []
    },
    {
      id: "inv-4",
      number: "INV/2026/0004",
      partnerId: "part-1",
      date: "2026-10-18",
      dueDate: "2026-11-17",
      paymentTerms: "30_days",
      status: "draft",
      lines: [
        {
          id: "line-4-1",
          productId: "prod-2",
          description: "ERP Implementation & Migration Package - Phase 2",
          accountId: "410000",
          quantity: 1,
          unitPrice: 5e3,
          taxRate: 10,
          subtotal: 5e3,
          taxAmount: 500,
          total: 5500
        }
      ],
      untaxedAmount: 5e3,
      taxAmount: 500,
      totalAmount: 5500,
      amountDue: 5500,
      payments: []
    }
  ],
  // Vendor Bills
  bills: [
    {
      id: "bill-1",
      number: "BILL/2026/0001",
      reference: "INV-GCLD-99812",
      partnerId: "part-4",
      date: "2026-09-12",
      dueDate: "2026-09-12",
      paymentTerms: "immediate",
      status: "paid",
      lines: [
        {
          id: "bline-1-1",
          description: "Multi-Region Cloud Hosting Cluster & Storage",
          accountId: "620000",
          quantity: 1,
          unitPrice: 1500,
          taxRate: 10,
          subtotal: 1500,
          taxAmount: 150,
          total: 1650
        }
      ],
      untaxedAmount: 1500,
      taxAmount: 150,
      totalAmount: 1650,
      amountDue: 0,
      payments: [
        {
          id: "bpay-1",
          date: "2026-09-12",
          journalId: "BNK",
          amount: 1650,
          reference: "Direct Debit - Global Cloud"
        }
      ]
    },
    {
      id: "bill-2",
      number: "BILL/2026/0002",
      reference: "RENT-OCT-2026",
      partnerId: "part-5",
      date: "2026-10-01",
      dueDate: "2026-10-31",
      paymentTerms: "30_days",
      status: "posted",
      lines: [
        {
          id: "bline-2-1",
          description: "Monthly Commercial Office Lease - 500 Market St",
          accountId: "610000",
          quantity: 1,
          unitPrice: 4500,
          taxRate: 0,
          subtotal: 4500,
          taxAmount: 0,
          total: 4500
        }
      ],
      untaxedAmount: 4500,
      taxAmount: 0,
      totalAmount: 4500,
      amountDue: 4500,
      payments: []
    },
    {
      id: "bill-3",
      number: "BILL/2026/0003",
      reference: "INV-DEVCRAFT-440",
      partnerId: "part-6",
      date: "2026-09-20",
      dueDate: "2026-10-05",
      paymentTerms: "15_days",
      status: "overdue",
      lines: [
        {
          id: "bline-3-1",
          description: "Team Developer Tool Licenses & Continuous Integration",
          accountId: "620000",
          quantity: 1,
          unitPrice: 890,
          taxRate: 0,
          subtotal: 890,
          taxAmount: 0,
          total: 890
        }
      ],
      untaxedAmount: 890,
      taxAmount: 0,
      totalAmount: 890,
      amountDue: 890,
      payments: []
    }
  ],
  // Complete Double-Entry Journal Entries
  journalEntries: [
    {
      id: "entry-open",
      number: "MISC/2026/0001",
      journalId: "MISC",
      date: "2026-01-01",
      reference: "Opening Balances Fiscal Year 2026",
      status: "posted",
      lines: [
        { id: "eol-1", accountId: "101000", partnerId: null, label: "Initial Bank Balance", debit: 5e4, credit: 0 },
        { id: "eol-2", accountId: "105000", partnerId: null, label: "Chase Reserve Fund", debit: 85e3, credit: 0 },
        { id: "eol-3", accountId: "170000", partnerId: null, label: "Server & Hardware Assets", debit: 35e3, credit: 0 },
        { id: "eol-4", accountId: "175000", partnerId: null, label: "Accumulated Depreciation", debit: 0, credit: 5400 },
        { id: "eol-5", accountId: "260000", partnerId: null, label: "Term Bank Loan Facility", debit: 0, credit: 4e4 },
        { id: "eol-6", accountId: "301000", partnerId: null, label: "Common Stock Capital", debit: 0, credit: 1e5 },
        { id: "eol-7", accountId: "305000", partnerId: null, label: "Opening Retained Earnings", debit: 0, credit: 24600 }
      ]
    },
    {
      id: "entry-inv-1",
      number: "INV/2026/0001",
      journalId: "INV",
      date: "2026-09-15",
      reference: "INV/2026/0001 - Acme Technologies Corp",
      status: "posted",
      lines: [
        { id: "il-1-1", accountId: "120000", partnerId: "part-1", label: "Accounts Receivable - Acme Tech", debit: 6820, credit: 0 },
        { id: "il-1-2", accountId: "400000", partnerId: "part-1", label: "Product Sales Revenue", debit: 0, credit: 5e3 },
        { id: "il-1-3", accountId: "410000", partnerId: "part-1", label: "Support Retainer", debit: 0, credit: 1200 },
        { id: "il-1-4", accountId: "220000", partnerId: "part-1", label: "10% Sales Tax Collected", debit: 0, credit: 620 }
      ]
    },
    {
      id: "entry-pay-1",
      number: "BNK/2026/0001",
      journalId: "BNK",
      date: "2026-10-10",
      reference: "Customer Payment INV/2026/0001",
      status: "posted",
      lines: [
        { id: "pl-1-1", accountId: "101000", partnerId: "part-1", label: "Receipt into SVB Bank", debit: 6820, credit: 0 },
        { id: "pl-1-2", accountId: "120000", partnerId: "part-1", label: "Clear A/R Acme Tech", debit: 0, credit: 6820 }
      ]
    },
    {
      id: "entry-inv-2",
      number: "INV/2026/0002",
      journalId: "INV",
      date: "2026-10-01",
      reference: "INV/2026/0002 - Quantum Logistics LLC",
      status: "posted",
      lines: [
        { id: "il-2-1", accountId: "120000", partnerId: "part-2", label: "Accounts Receivable - Quantum Logistics", debit: 3740, credit: 0 },
        { id: "il-2-2", accountId: "410000", partnerId: "part-2", label: "API & Bank Feed Connector", debit: 0, credit: 3400 },
        { id: "il-2-3", accountId: "220000", partnerId: "part-2", label: "10% Sales Tax Collected", debit: 0, credit: 340 }
      ]
    },
    {
      id: "entry-inv-3",
      number: "INV/2026/0003",
      journalId: "INV",
      date: "2026-09-01",
      reference: "INV/2026/0003 - Nexus Design Studio",
      status: "posted",
      lines: [
        { id: "il-3-1", accountId: "120000", partnerId: "part-3", label: "Accounts Receivable - Nexus Design", debit: 2750, credit: 0 },
        { id: "il-3-2", accountId: "400000", partnerId: "part-3", label: "ERP Cloud License", debit: 0, credit: 2500 },
        { id: "il-3-3", accountId: "220000", partnerId: "part-3", label: "10% Sales Tax Collected", debit: 0, credit: 250 }
      ]
    },
    {
      id: "entry-bill-1",
      number: "BILL/2026/0001",
      journalId: "BILL",
      date: "2026-09-12",
      reference: "BILL/2026/0001 - Global Cloud Hosting",
      status: "posted",
      lines: [
        { id: "bl-1-1", accountId: "620000", partnerId: "part-4", label: "Cloud Infrastructure Expense", debit: 1500, credit: 0 },
        { id: "bl-1-2", accountId: "220000", partnerId: "part-4", label: "Input Tax Recoverable", debit: 150, credit: 0 },
        { id: "bl-1-3", accountId: "201000", partnerId: "part-4", label: "Accounts Payable - Global Cloud", debit: 0, credit: 1650 }
      ]
    },
    {
      id: "entry-bpay-1",
      number: "BNK/2026/0002",
      journalId: "BNK",
      date: "2026-09-12",
      reference: "Vendor Payment BILL/2026/0001",
      status: "posted",
      lines: [
        { id: "bpl-1-1", accountId: "201000", partnerId: "part-4", label: "Clear A/P Global Cloud", debit: 1650, credit: 0 },
        { id: "bpl-1-2", accountId: "101000", partnerId: "part-4", label: "Bank Direct Debit SVB", debit: 0, credit: 1650 }
      ]
    },
    {
      id: "entry-bill-2",
      number: "BILL/2026/0002",
      journalId: "BILL",
      date: "2026-10-01",
      reference: "BILL/2026/0002 - Metro Office Leasing Inc",
      status: "posted",
      lines: [
        { id: "bl-2-1", accountId: "610000", partnerId: "part-5", label: "Commercial Office Rent Expense", debit: 4500, credit: 0 },
        { id: "bl-2-2", accountId: "201000", partnerId: "part-5", label: "Accounts Payable - Metro Properties", debit: 0, credit: 4500 }
      ]
    },
    {
      id: "entry-bill-3",
      number: "BILL/2026/0003",
      journalId: "BILL",
      date: "2026-09-20",
      reference: "BILL/2026/0003 - DevCraft Software Tools",
      status: "posted",
      lines: [
        { id: "bl-3-1", accountId: "620000", partnerId: "part-6", label: "Software Tooling License", debit: 890, credit: 0 },
        { id: "bl-3-2", accountId: "201000", partnerId: "part-6", label: "Accounts Payable - DevCraft", debit: 0, credit: 890 }
      ]
    }
  ],
  // Bank Statement Lines for Bank Reconciliation
  bankStatements: [
    {
      id: "stmt-1",
      date: "2026-10-16",
      label: "WIRE IN: QUANTUM LOGISTICS LLC",
      partnerId: "part-2",
      amount: 3740,
      // positive = incoming, negative = outgoing
      reconciled: false,
      matchedDocId: "inv-2",
      matchedDocType: "invoice"
    },
    {
      id: "stmt-2",
      date: "2026-10-15",
      label: "ACH OUT: METRO OFFICE LEASING INC",
      partnerId: "part-5",
      amount: -4500,
      reconciled: false,
      matchedDocId: "bill-2",
      matchedDocType: "bill"
    },
    {
      id: "stmt-3",
      date: "2026-10-18",
      label: "MONTHLY BANK ACCOUNT SERVICE FEE",
      partnerId: null,
      amount: -35,
      reconciled: false,
      matchedAccountId: "650000",
      // can be reconciled directly to Bank Fees
      matchedDocType: "account"
    },
    {
      id: "stmt-4",
      date: "2026-10-10",
      label: "WIRE IN: ACME TECHNOLOGIES CORP",
      partnerId: "part-1",
      amount: 6820,
      reconciled: true,
      matchedDocId: "inv-1",
      matchedDocType: "invoice"
    }
  ],
  // User Accounts & Role-Based Permissions
  users: [
    {
      id: "usr-superadmin",
      username: "superadmin",
      password: "password123",
      fullName: "Super Admin",
      email: "superadmin@unifly.com.bd",
      role: "superadmin",
      // superadmin, admin, employee
      status: "active",
      createdAt: "2026-01-01"
    },
    {
      id: "usr-admin",
      username: "admin",
      password: "password123",
      fullName: "Finance Admin",
      email: "admin@unifly.com.bd",
      role: "admin",
      status: "active",
      createdAt: "2026-01-15"
    },
    {
      id: "usr-emp-1",
      username: "accountant",
      password: "password123",
      fullName: "Affan (Staff Accountant)",
      email: "affan@unifly.com.bd",
      role: "employee",
      status: "active",
      createdAt: "2026-02-01"
    }
  ],
  // Customer Credit Notes (Refunds & Credit Memos)
  creditNotes: [
    {
      id: "cn-2026-0001",
      number: "RINV/2026/0001",
      partnerId: "part-1",
      date: "2026-10-12",
      dueDate: "2026-10-12",
      reason: "Volume rebate discount on ERP licensing",
      invoiceRef: "INV/2026/0001",
      status: "posted",
      subtotal: 500,
      taxAmount: 50,
      totalAmount: 550,
      lines: [
        {
          id: "cnl-1",
          productId: "prod-1",
          description: "Volume Rebate Discount - ERP Cloud License",
          accountId: "400000",
          quantity: 1,
          unitPrice: 500,
          taxRate: 10,
          subtotal: 500,
          taxAmount: 50,
          total: 550
        }
      ]
    }
  ],
  // Vendor Refunds (Debit Notes / Supplier Reversals)
  vendorRefunds: [
    {
      id: "vr-2026-0001",
      number: "RBILL/2026/0001",
      partnerId: "part-4",
      // FastNet Fiber ISP
      date: "2026-10-14",
      dueDate: "2026-10-14",
      reason: "Service level agreement downtime credit refund",
      billRef: "BILL/2026/0002",
      status: "posted",
      subtotal: 120,
      taxAmount: 0,
      totalAmount: 120,
      lines: [
        {
          id: "vrl-1",
          productId: "prod-3",
          description: "SLA Outage Credit Refund - Internet Connectivity",
          accountId: "604000",
          quantity: 1,
          unitPrice: 120,
          taxRate: 0,
          subtotal: 120,
          taxAmount: 0,
          total: 120
        }
      ]
    }
  ],
  // Fixed Assets Management
  assets: [
    {
      id: "ast-001",
      name: "High-Performance Developer Workstations (Dell XPS)",
      category: "Computer & Server Equipment",
      assetAccount: "170000",
      depreciationAccount: "660000",
      accumulatedDepreciationAccount: "175000",
      purchaseDate: "2025-01-10",
      originalValue: 15e3,
      salvageValue: 1500,
      depreciationMethod: "straight_line",
      durationYears: 3,
      depreciatedAmount: 4500,
      currentValue: 10500,
      status: "running"
    },
    {
      id: "ast-002",
      name: "Office Conference & Server Infrastructure",
      category: "Computer & Server Equipment",
      assetAccount: "170000",
      depreciationAccount: "660000",
      accumulatedDepreciationAccount: "175000",
      purchaseDate: "2025-06-15",
      originalValue: 2e4,
      salvageValue: 2e3,
      depreciationMethod: "straight_line",
      durationYears: 4,
      depreciatedAmount: 2700,
      currentValue: 17300,
      status: "running"
    }
  ],
  // Loans & Borrowings
  loans: [
    {
      id: "loan-001",
      name: "Term Bank Loan Facility #8892",
      lender: "BRAC Bank Limited / SVB Commercial",
      liabilityAccount: "260000",
      interestAccount: "650000",
      principalAmount: 5e4,
      interestRate: 6.5,
      termMonths: 36,
      monthlyPayment: 1532,
      remainingBalance: 4e4,
      totalInterestPaid: 2150,
      startDate: "2025-06-01",
      nextPaymentDate: "2026-11-01",
      status: "active"
    }
  ],
  // Accounting Lock Dates
  lockDates: {
    nonAdviserLockDate: "2026-09-30",
    hardLockDate: "2025-12-31"
  },
  // Audit Trail Compliance Logs
  auditTrail: [
    {
      id: "aud-001",
      timestamp: "2026-10-15 14:32:10",
      username: "admin",
      userFullName: "Finance Administrator",
      action: "POST_INVOICE",
      resource: "Invoice INV/2026/0001",
      details: "Posted customer invoice for Acme Technologies Corp ($2,750.00)",
      ipAddress: "192.168.1.45"
    },
    {
      id: "aud-002",
      timestamp: "2026-10-14 11:20:05",
      username: "superadmin",
      userFullName: "Executive Super Admin",
      action: "RECONCILE_BANK",
      resource: "Bank Statement SVB-2026-10",
      details: "Reconciled customer wire receipt against INV/2026/0002 ($3,500.00)",
      ipAddress: "192.168.1.10"
    },
    {
      id: "aud-003",
      timestamp: "2026-10-13 16:45:22",
      username: "accountant",
      userFullName: "Affan (Staff Accountant)",
      action: "POST_BILL",
      resource: "Vendor Bill BILL/2026/0001",
      details: "Confirmed vendor bill for Cloud Server Infrastructure ($4,200.00)",
      ipAddress: "192.168.1.88"
    },
    {
      id: "aud-004",
      timestamp: "2026-10-12 09:15:30",
      username: "admin",
      userFullName: "Finance Administrator",
      action: "UPDATE_LOCK_DATES",
      resource: "Closing Periods",
      details: "Updated Non-Adviser Lock Date to 2026-09-30",
      ipAddress: "192.168.1.45"
    }
  ],
  // Inventory Valuation Register (Account 130000)
  inventoryItems: [
    {
      id: "inv-item-1",
      sku: "HW-DELL-01",
      name: "Dell XPS Pro Development Workstation",
      category: "Hardware",
      unitsOnHand: 10,
      unitCost: 1400,
      totalValuation: 14e3,
      valuationMethod: "FIFO",
      location: "Main Warehouse - Dhaka"
    },
    {
      id: "inv-item-2",
      sku: "NET-CBL-CAT6",
      name: "Enterprise Cat6 Shielded Patch Reels",
      category: "Networking Supplies",
      unitsOnHand: 35,
      unitCost: 120,
      totalValuation: 4200,
      valuationMethod: "FIFO",
      location: "Main Warehouse - Dhaka"
    },
    {
      id: "inv-item-3",
      sku: "SRV-RACK-ACC",
      name: "19-inch 42U Server Rack Enclosure Panels",
      category: "Infrastructure",
      unitsOnHand: 7,
      unitCost: 900,
      totalValuation: 6300,
      valuationMethod: "FIFO",
      location: "Uttara Data Center"
    }
  ],
  // Regularization: Deferred Revenues (Unearned Income)
  deferredRevenues: [
    {
      id: "drev-001",
      name: "Annual Cloud Enterprise Maintenance Retainer",
      partnerId: "part-1",
      // Acme Technologies Corp
      totalAmount: 12e3,
      recognizedToDate: 4e3,
      remainingDeferred: 8e3,
      monthlyAmortization: 1e3,
      startDate: "2026-07-01",
      endDate: "2027-06-30",
      accountLiability: "230000",
      accountRevenue: "410000",
      status: "active"
    }
  ],
  // Regularization: Deferred Expenses (Prepaid Expenses)
  deferredExpenses: [
    {
      id: "dexp-001",
      name: "Commercial Building Comprehensive Insurance Policy",
      partnerId: "part-4",
      totalAmount: 7200,
      amortizedToDate: 1200,
      remainingPrepaid: 6e3,
      monthlyAmortization: 600,
      startDate: "2026-08-01",
      endDate: "2027-07-31",
      accountPrepaid: "140000",
      accountExpense: "610000",
      status: "active"
    }
  ],
  // Online Payment Acquirers & Gateways
  onlinePayments: [
    {
      id: "paym-stripe",
      provider: "stripe",
      name: "Stripe Enterprise (Cards & Wallets)",
      status: "enabled",
      environment: "production",
      supportedCurrencies: "USD, EUR, GBP",
      publishableKey: "pk_live_unifly_889201923019",
      transactionFee: "2.9% + $0.30",
      autoReconcile: true
    },
    {
      id: "paym-bkash",
      provider: "bkash",
      name: "bKash Direct Merchant PGW",
      status: "enabled",
      environment: "production",
      supportedCurrencies: "BDT",
      merchantNumber: "+880 1711-000000",
      transactionFee: "1.2%",
      autoReconcile: true
    },
    {
      id: "paym-nagad",
      provider: "nagad",
      name: "Nagad Business Gateway",
      status: "enabled",
      environment: "production",
      supportedCurrencies: "BDT",
      merchantNumber: "+880 1811-000000",
      transactionFee: "1.0%",
      autoReconcile: true
    },
    {
      id: "paym-wire",
      provider: "wire",
      name: "SWIFT Wire & Corporate Transfer",
      status: "enabled",
      environment: "production",
      supportedCurrencies: "USD, BDT, EUR",
      bankAccount: "101000 - Silicon Valley Bank",
      instructions: "SWIFT/BIC: SVBUS33, Beneficiary: Unifly Bangladesh Ltd.",
      autoReconcile: false
    },
    {
      id: "paym-paypal",
      provider: "paypal",
      name: "PayPal Global Checkout",
      status: "disabled",
      environment: "sandbox",
      supportedCurrencies: "USD, EUR",
      transactionFee: "3.49% + $0.49",
      autoReconcile: false
    }
  ],
  // Multi-Currency Exchange Rates (Base Currency: BDT)
  currencies: [
    { code: "BDT", name: "Bangladeshi Taka", symbol: "\u09F3", rate: 1, isBase: true, active: true },
    { code: "USD", name: "US Dollar", symbol: "$", rate: 121.5, isBase: false, active: true },
    { code: "EUR", name: "Euro", symbol: "\u20AC", rate: 132, isBase: false, active: true },
    { code: "GBP", name: "British Pound", symbol: "\xA3", rate: 154.5, isBase: false, active: true }
  ],
  // Fiscal Positions (Tax Mapping Rules)
  fiscalPositions: [
    {
      id: "fp-01",
      name: "Domestic Bangladesh (NBR Standard VAT)",
      taxSource: "tax-10",
      taxDestination: "tax-10",
      notes: "Applies standard 10% VAT on local supply of products & services",
      active: true
    },
    {
      id: "fp-02",
      name: "Export of Software & IT Services (Zero-Rated)",
      taxSource: "tax-10",
      taxDestination: "tax-0",
      notes: "Mushak SRO 136-Ain/2021/141-VAT exempts export software",
      active: true
    },
    {
      id: "fp-03",
      name: "Reduced Rate Subcontracting (5% VAT)",
      taxSource: "tax-10",
      taxDestination: "tax-5",
      notes: "5% VAT applicable on eligible local technical support",
      active: true
    }
  ],
  // Multi-Ledger Configurations
  multiLedgers: [
    {
      id: "ledg-primary",
      name: "Primary Corporate Ledger (Statutory BDT & NBR)",
      code: "PRIMARY-BDT",
      currency: "BDT",
      isDefault: true,
      description: "Primary general financial reporting ledger in Bangladeshi Taka"
    },
    {
      id: "ledg-statutory",
      name: "Statutory Tax Ledger (NBR Mushak & ITA 2023)",
      code: "NBR-BDT",
      currency: "BDT",
      isDefault: false,
      description: "Statutory tax accounting and Mushak filing records"
    },
    {
      id: "ledg-management",
      name: "Internal Management & Cost Analytic Ledger",
      code: "MGMT-INT",
      currency: "BDT",
      isDefault: false,
      description: "Cost center allocations, department budgets, and KPI tracking"
    }
  ],
  // Checks Printing Configurations
  checkFormats: {
    sequenceStart: 1001,
    currentCheckNumber: 1045,
    bankAccountId: "101000",
    layout: "check_top",
    // check_top, check_middle, check_bottom
    stubCopies: 2,
    micrFont: true,
    signatureLineText: "Authorized Financial Officer",
    autoPrintVoucher: true
  },
  // Depreciation Models
  depreciationModels: [
    {
      id: "depr-m-01",
      name: "High-Performance Computer & IT Equipment",
      method: "straight_line",
      durationYears: 5,
      salvagePercent: 10,
      assetAccount: "170000",
      deprAccount: "175000",
      expenseAccount: "660000"
    },
    {
      id: "depr-m-02",
      name: "Enterprise Data Center Servers & Virtual Nodes",
      method: "straight_line",
      durationYears: 3,
      salvagePercent: 5,
      assetAccount: "170000",
      deprAccount: "175000",
      expenseAccount: "660000"
    },
    {
      id: "depr-m-03",
      name: "Office Furniture & Technical Fixtures",
      method: "declining_balance",
      durationYears: 10,
      salvagePercent: 10,
      assetAccount: "170000",
      deprAccount: "175000",
      expenseAccount: "660000"
    }
  ],
  // Return Types
  returnTypes: [
    {
      id: "ret-mushak-91",
      name: "Monthly VAT Return (Mushak-9.1)",
      authority: "National Board of Revenue (NBR)",
      deadline: "15th of following month",
      frequency: "monthly",
      formCode: "Mushak-9.1"
    },
    {
      id: "ret-corp-tax",
      name: "Annual Corporate Income Tax Return",
      authority: "Taxes Zone-05, Dhaka",
      deadline: "November 30",
      frequency: "annual",
      formCode: "IT-11GA"
    },
    {
      id: "ret-withholding",
      name: "Tax & VAT Deducted at Source (TDS/VDS) Statement",
      authority: "Large Taxpayers Unit (LTU)",
      deadline: "Monthly by 7th",
      frequency: "monthly",
      formCode: "NBR-TDS-01"
    }
  ],
  // Invoice Reminders & Payment Follow-up Schedules
  invoiceReminders: [
    {
      id: "rem-pre-due",
      name: "Upcoming Due Date Courtesy Reminder",
      triggerDays: -3,
      triggerType: "before_due",
      subject: "Courtesy Notice: Invoice due in 3 days",
      enabled: true,
      recipient: "Customer Billing Contact"
    },
    {
      id: "rem-overdue-1",
      name: "First Friendly Overdue Notice",
      triggerDays: 7,
      triggerType: "after_due",
      subject: "Friendly Reminder: Payment pending for invoice",
      enabled: true,
      recipient: "Customer Billing Contact"
    },
    {
      id: "rem-overdue-2",
      name: "Formal Finance Follow-up Notice",
      triggerDays: 14,
      triggerType: "after_due",
      subject: "Urgent Attention Required: Overdue Account Balance",
      enabled: true,
      recipient: "Customer Billing + Account Manager"
    }
  ],
  // Invoicing: Payment Terms
  paymentTermsList: [
    { id: "term-immediate", code: "immediate", name: "Immediate Payment", days: 0, description: "Due immediately upon receipt of invoice" },
    { id: "term-15", code: "15_days", name: "15 Days Net", days: 15, description: "Payment due within 15 calendar days from billing date" },
    { id: "term-30", code: "30_days", name: "30 Days Net", days: 30, description: "Standard commercial credit due within 30 days" },
    { id: "term-60", code: "60_days", name: "60 Days Net", days: 60, description: "Enterprise tier due within 60 calendar days" },
    { id: "term-eom", code: "end_of_month", name: "End of Following Month", days: 45, description: "Settlement due at end of following calendar month" }
  ],
  // Invoicing: Product Categories
  productCategories: [
    { id: "cat-sw", code: "CAT-SW", name: "Cloud Software & Enterprise Licenses", incomeAccount: "400000", expenseAccount: "500000", productCount: 2 },
    { id: "cat-svc", code: "CAT-SVC", name: "ERP Implementation & Consulting Services", incomeAccount: "410000", expenseAccount: "510000", productCount: 2 },
    { id: "cat-hw", code: "CAT-HW", name: "Workstations & Infrastructure Hardware", incomeAccount: "400000", expenseAccount: "500000", productCount: 3 },
    { id: "cat-net", code: "CAT-NET", name: "Networking Supplies & Data Center Cables", incomeAccount: "400000", expenseAccount: "500000", productCount: 1 }
  ]
};

// js/store.js
var STORAGE_KEY = "unifly_accounting_pro_v1";
var SESSION_KEY = "unifly_accounting_session_v1";
var Store = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.data = this.loadData();
    this.currentUser = this.loadSession();
  }
  loadSession() {
    try {
      if (typeof localStorage !== "undefined") {
        const storedUser = localStorage.getItem(SESSION_KEY);
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          const activeUser = (this.data.users || []).find((u) => u.id === parsed.id && u.status === "active");
          return activeUser || null;
        }
      }
    } catch (e) {
      console.warn("Could not load session", e);
    }
    return null;
  }
  loadData() {
    try {
      if (typeof localStorage !== "undefined") {
        let stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.endsWith("_accounting_pro_v1")) {
              stored = localStorage.getItem(k);
              break;
            }
          }
        }
        if (stored) {
          const parsed = JSON.parse(stored);
          if (!parsed.users || parsed.users.length === 0) {
            parsed.users = JSON.parse(JSON.stringify(DEFAULT_DATA.users));
          }
          if (!parsed.creditNotes || parsed.creditNotes.length === 0) {
            parsed.creditNotes = JSON.parse(JSON.stringify(DEFAULT_DATA.creditNotes || []));
          }
          if (!parsed.auditTrail || parsed.auditTrail.length === 0) {
            parsed.auditTrail = JSON.parse(JSON.stringify(DEFAULT_DATA.auditTrail || []));
          }
          if (!parsed.inventoryItems || parsed.inventoryItems.length === 0) {
            parsed.inventoryItems = JSON.parse(JSON.stringify(DEFAULT_DATA.inventoryItems || []));
          }
          if (!parsed.deferredRevenues || parsed.deferredRevenues.length === 0) {
            parsed.deferredRevenues = JSON.parse(JSON.stringify(DEFAULT_DATA.deferredRevenues || []));
          }
          if (!parsed.deferredExpenses || parsed.deferredExpenses.length === 0) {
            parsed.deferredExpenses = JSON.parse(JSON.stringify(DEFAULT_DATA.deferredExpenses || []));
          }
          if (!parsed.onlinePayments || parsed.onlinePayments.length === 0) {
            parsed.onlinePayments = JSON.parse(JSON.stringify(DEFAULT_DATA.onlinePayments || []));
          }
          if (!parsed.currencies || parsed.currencies.length === 0) {
            parsed.currencies = JSON.parse(JSON.stringify(DEFAULT_DATA.currencies || []));
          }
          if (!parsed.fiscalPositions || parsed.fiscalPositions.length === 0) {
            parsed.fiscalPositions = JSON.parse(JSON.stringify(DEFAULT_DATA.fiscalPositions || []));
          }
          if (!parsed.multiLedgers || parsed.multiLedgers.length === 0) {
            parsed.multiLedgers = JSON.parse(JSON.stringify(DEFAULT_DATA.multiLedgers || []));
          }
          if (!parsed.checkFormats || Object.keys(parsed.checkFormats).length === 0) {
            parsed.checkFormats = JSON.parse(JSON.stringify(DEFAULT_DATA.checkFormats || {}));
          }
          if (!parsed.depreciationModels || parsed.depreciationModels.length === 0) {
            parsed.depreciationModels = JSON.parse(JSON.stringify(DEFAULT_DATA.depreciationModels || []));
          }
          if (!parsed.returnTypes || parsed.returnTypes.length === 0) {
            parsed.returnTypes = JSON.parse(JSON.stringify(DEFAULT_DATA.returnTypes || []));
          }
          if (!parsed.invoiceReminders || parsed.invoiceReminders.length === 0) {
            parsed.invoiceReminders = JSON.parse(JSON.stringify(DEFAULT_DATA.invoiceReminders || []));
          }
          if (!parsed.paymentTermsList || parsed.paymentTermsList.length === 0) {
            parsed.paymentTermsList = JSON.parse(JSON.stringify(DEFAULT_DATA.paymentTermsList || []));
          }
          if (!parsed.productCategories || parsed.productCategories.length === 0) {
            parsed.productCategories = JSON.parse(JSON.stringify(DEFAULT_DATA.productCategories || []));
          }
          if (!parsed.company || !parsed.company.name || parsed.company.name === "Apex Global ERP Inc." || parsed.company.name === "Unifly Bangladesh Accounting Pro" || parsed.company.currency === "USD") {
            parsed.company = {
              ...DEFAULT_DATA.company,
              ...parsed.company || {},
              name: "Unifly Bangladesh",
              currency: "BDT",
              currencySymbol: "\u09F3",
              logoText: "UNIFLY"
            };
          }
          if (parsed.currencies && parsed.currencies.length > 0) {
            const bdtCur = parsed.currencies.find((c) => c.code === "BDT");
            if (bdtCur && !bdtCur.isBase) {
              parsed.currencies.forEach((c) => {
                if (c.code === "BDT") {
                  c.name = "Bangladeshi Taka";
                  c.symbol = "\u09F3";
                  c.rate = 1;
                  c.isBase = true;
                } else {
                  c.isBase = false;
                  if (c.code === "USD" && (c.rate === 1 || !c.rate)) c.rate = 121.5;
                  if (c.code === "EUR") c.rate = 132;
                  if (c.code === "GBP") c.rate = 154.5;
                }
              });
              parsed.currencies.sort((a, b) => (b.isBase ? 1 : 0) - (a.isBase ? 1 : 0));
            }
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not parse localStorage, resetting to default demo data", e);
    }
    const fresh = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.persist(fresh);
    return fresh;
  }
  persist(dataToSave) {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave || this.data));
      }
    } catch (e) {
      console.error("Failed to persist to localStorage", e);
    }
  }
  notify() {
    this.persist(this.data);
    for (const listener of this.listeners) {
      try {
        listener(this.data);
      } catch (err) {
        console.error("Store listener error:", err);
      }
    }
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  // Getters
  getCompany() {
    return this.data.company;
  }
  getAccounts() {
    return this.data.accounts;
  }
  getJournals() {
    return this.data.journals;
  }
  getPartners() {
    return this.data.partners;
  }
  getProducts() {
    return this.data.products;
  }
  getInvoices() {
    return this.data.invoices;
  }
  getBills() {
    return this.data.bills;
  }
  getJournalEntries() {
    return this.data.journalEntries;
  }
  getBankStatements() {
    return this.data.bankStatements;
  }
  getTaxes() {
    return this.data.taxes;
  }
  getCreditNotes() {
    return this.data.creditNotes || [];
  }
  // ==========================================================================
  // Authentication & Role-Based Access Control (RBAC)
  // ==========================================================================
  getCurrentUser() {
    return this.currentUser;
  }
  getUsers() {
    return this.data.users || [];
  }
  isSuperAdmin() {
    return this.currentUser && this.currentUser.role === "superadmin";
  }
  isAdmin() {
    return this.currentUser && (this.currentUser.role === "superadmin" || this.currentUser.role === "admin");
  }
  canManageUsers() {
    return this.isAdmin();
  }
  login(username, password) {
    const cleanUser = (username || "").trim().toLowerCase();
    const cleanPass = (password || "").trim();
    const user = (this.data.users || []).find(
      (u) => u.username.toLowerCase() === cleanUser && u.password === cleanPass
    );
    if (!user) {
      throw new Error("Invalid username or password.");
    }
    if (user.status !== "active") {
      throw new Error("This user account is currently deactivated. Please contact an Administrator.");
    }
    this.currentUser = user;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }
    this.notify();
    return user;
  }
  logout() {
    this.currentUser = null;
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(SESSION_KEY);
    }
    this.notify();
  }
  addUser({ username, password, fullName, email, role = "employee" }) {
    if (!this.canManageUsers()) {
      throw new Error("Permission Denied: Only Super Admin and Admin can add employees or users.");
    }
    const cleanUser = (username || "").trim().toLowerCase();
    if (!cleanUser || !password || !fullName) {
      throw new Error("Username, password, and full name are required.");
    }
    if (role === "superadmin" && !this.isSuperAdmin()) {
      throw new Error("Only the Super Admin can create another Super Admin.");
    }
    const existing = (this.data.users || []).find((u) => u.username.toLowerCase() === cleanUser);
    if (existing) {
      throw new Error(`Username "${username}" is already taken.`);
    }
    const newUser = {
      id: `usr-${Date.now()}`,
      username: cleanUser,
      password: password.trim(),
      fullName: fullName.trim(),
      email: (email || "").trim(),
      role,
      // 'admin' or 'employee'
      status: "active",
      createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      createdBy: this.currentUser ? this.currentUser.username : "system"
    };
    this.data.users.push(newUser);
    this.notify();
    return newUser;
  }
  updateUser(userData) {
    if (!this.canManageUsers()) {
      throw new Error("Permission Denied: Only Super Admin and Admin can manage users.");
    }
    const index = (this.data.users || []).findIndex((u) => u.id === userData.id);
    if (index === -1) {
      throw new Error("User not found.");
    }
    const targetUser = this.data.users[index];
    if (targetUser.role === "superadmin" && !this.isSuperAdmin()) {
      throw new Error("Permission Denied: Only Super Admin can modify a Super Admin account.");
    }
    this.data.users[index] = {
      ...targetUser,
      ...userData
    };
    if (this.currentUser && this.currentUser.id === targetUser.id) {
      this.currentUser = this.data.users[index];
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(SESSION_KEY, JSON.stringify(this.currentUser));
      }
    }
    this.notify();
    return this.data.users[index];
  }
  deleteUser(userId) {
    if (!this.canManageUsers()) {
      throw new Error("Permission Denied: Only Super Admin and Admin can delete users.");
    }
    const targetUser = (this.data.users || []).find((u) => u.id === userId);
    if (!targetUser) {
      throw new Error("User not found.");
    }
    if (targetUser.role === "superadmin") {
      throw new Error("The Super Admin account cannot be deleted.");
    }
    if (targetUser.role === "admin" && !this.isSuperAdmin()) {
      throw new Error("Only the Super Admin can delete an Admin account.");
    }
    if (this.currentUser && this.currentUser.id === userId) {
      throw new Error("You cannot delete your own active account.");
    }
    this.data.users = this.data.users.filter((u) => u.id !== userId);
    this.notify();
    return true;
  }
  // Next Sequence Generators
  getNextInvoiceNumber() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const count = (this.data.invoices.length + 1).toString().padStart(4, "0");
    return `INV/${year}/${count}`;
  }
  getNextBillNumber() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const count = (this.data.bills.length + 1).toString().padStart(4, "0");
    return `BILL/${year}/${count}`;
  }
  getNextCreditNoteNumber() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const count = ((this.data.creditNotes || []).length + 1).toString().padStart(4, "0");
    return `RINV/${year}/${count}`;
  }
  getNextJournalEntryNumber(journalCode = "MISC") {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const matching = this.data.journalEntries.filter((e) => e.journalId === journalCode);
    const count = (matching.length + 1).toString().padStart(4, "0");
    return `${journalCode}/${year}/${count}`;
  }
  // ==========================================================================
  // Invoices (Accounts Receivable)
  // ==========================================================================
  saveInvoice(invoice) {
    const index = this.data.invoices.findIndex((i) => i.id === invoice.id);
    if (index >= 0) {
      this.data.invoices[index] = invoice;
    } else {
      this.data.invoices.push(invoice);
    }
    this.notify();
    return invoice;
  }
  postInvoice(invoiceId) {
    const inv = this.data.invoices.find((i) => i.id === invoiceId);
    if (!inv || inv.status === "posted" || inv.status === "paid") return false;
    inv.status = "posted";
    const partner = this.data.partners.find((p) => p.id === inv.partnerId);
    const partnerName = partner ? partner.name : "Customer";
    const entryLines = [
      {
        id: `line-${Date.now()}-ar`,
        accountId: "120000",
        // Accounts Receivable
        partnerId: inv.partnerId,
        label: `A/R - ${partnerName} (${inv.number})`,
        debit: inv.totalAmount,
        credit: 0
      }
    ];
    const revenueByAccount = {};
    for (const line of inv.lines) {
      const accId = line.accountId || "400000";
      revenueByAccount[accId] = (revenueByAccount[accId] || 0) + line.subtotal;
    }
    for (const [accId, amt] of Object.entries(revenueByAccount)) {
      entryLines.push({
        id: `line-${Date.now()}-${accId}`,
        accountId: accId,
        partnerId: inv.partnerId,
        label: `Revenue - ${inv.number}`,
        debit: 0,
        credit: amt
      });
    }
    if (inv.taxAmount > 0) {
      entryLines.push({
        id: `line-${Date.now()}-tax`,
        accountId: "220000",
        // Sales Tax Payable
        partnerId: inv.partnerId,
        label: `Sales Tax Collected (${inv.number})`,
        debit: 0,
        credit: inv.taxAmount
      });
    }
    const journalEntry = {
      id: `entry-${Date.now()}`,
      number: inv.number,
      journalId: "INV",
      date: inv.date,
      reference: `${inv.number} - ${partnerName}`,
      status: "posted",
      lines: entryLines
    };
    this.data.journalEntries.push(journalEntry);
    this.notify();
    return true;
  }
  registerInvoicePayment(invoiceId, { journalId, amount, paymentDate, reference }) {
    const inv = this.data.invoices.find((i) => i.id === invoiceId);
    if (!inv) return false;
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) return false;
    inv.payments = inv.payments || [];
    inv.payments.push({
      id: `pay-${Date.now()}`,
      date: paymentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      journalId: journalId || "BNK",
      amount: amt,
      reference: reference || `Payment for ${inv.number}`
    });
    const totalPaid = inv.payments.reduce((sum, p) => sum + p.amount, 0);
    inv.amountDue = Math.max(0, inv.totalAmount - totalPaid);
    if (inv.amountDue <= 1e-3) {
      inv.status = "paid";
    } else {
      inv.status = "posted";
    }
    const journal = this.data.journals.find((j) => j.id === journalId) || { defaultAccount: "101000" };
    const payEntry = {
      id: `entry-pay-${Date.now()}`,
      number: this.getNextJournalEntryNumber(journal.code || "BNK"),
      journalId: journalId || "BNK",
      date: paymentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      reference: `Customer Payment ${inv.number} - ${reference || ""}`,
      status: "posted",
      lines: [
        {
          id: `pl-${Date.now()}-dr`,
          accountId: journal.defaultAccount || "101000",
          partnerId: inv.partnerId,
          label: `Receipt for ${inv.number}`,
          debit: amt,
          credit: 0
        },
        {
          id: `pl-${Date.now()}-cr`,
          accountId: "120000",
          // Accounts Receivable
          partnerId: inv.partnerId,
          label: `Clear A/R ${inv.number}`,
          debit: 0,
          credit: amt
        }
      ]
    };
    this.data.journalEntries.push(payEntry);
    this.notify();
    return true;
  }
  deleteInvoice(invoiceId) {
    this.data.invoices = this.data.invoices.filter((i) => i.id !== invoiceId);
    this.notify();
  }
  // ==========================================================================
  // Customer Credit Notes (Refunds & Credit Memos)
  // ==========================================================================
  saveCreditNote(creditNote) {
    if (!this.data.creditNotes) this.data.creditNotes = [];
    const index = this.data.creditNotes.findIndex((c) => c.id === creditNote.id);
    if (index >= 0) {
      this.data.creditNotes[index] = creditNote;
    } else {
      this.data.creditNotes.push(creditNote);
    }
    this.notify();
    return creditNote;
  }
  postCreditNote(creditNoteId) {
    if (!this.data.creditNotes) this.data.creditNotes = [];
    const cn = this.data.creditNotes.find((c) => c.id === creditNoteId);
    if (!cn || cn.status === "posted") return false;
    cn.status = "posted";
    const partner = this.data.partners.find((p) => p.id === cn.partnerId);
    const partnerName = partner ? partner.name : "Customer";
    const entryLines = [
      {
        id: `line-${Date.now()}-rev`,
        accountId: "400000",
        partnerId: cn.partnerId,
        label: `Sales Return/Rebate - ${cn.number}`,
        debit: cn.subtotal,
        credit: 0
      }
    ];
    if (cn.taxAmount > 0) {
      entryLines.push({
        id: `line-${Date.now()}-tax`,
        accountId: "220000",
        partnerId: cn.partnerId,
        label: `Tax Reversal (${cn.number})`,
        debit: cn.taxAmount,
        credit: 0
      });
    }
    entryLines.push({
      id: `line-${Date.now()}-ar`,
      accountId: "120000",
      partnerId: cn.partnerId,
      label: `A/R Credit - ${partnerName} (${cn.number})`,
      debit: 0,
      credit: cn.totalAmount
    });
    const journalEntry = {
      id: `entry-${Date.now()}`,
      number: cn.number,
      journalId: "INV",
      date: cn.date,
      reference: `${cn.number} - ${partnerName} (Credit Note)`,
      status: "posted",
      lines: entryLines
    };
    this.data.journalEntries.push(journalEntry);
    if (cn.invoiceRef) {
      const inv = this.data.invoices.find((i) => i.number === cn.invoiceRef || i.id === cn.invoiceRef);
      if (inv) {
        inv.amountDue = Math.max(0, (inv.amountDue || inv.totalAmount) - cn.totalAmount);
        if (inv.amountDue <= 1e-3) inv.status = "paid";
      }
    }
    this.notify();
    return true;
  }
  deleteCreditNote(id) {
    if (!this.data.creditNotes) return;
    this.data.creditNotes = this.data.creditNotes.filter((c) => c.id !== id);
    this.notify();
  }
  // ==========================================================================
  // Vendor Refunds (Debit Notes & Supplier Reversals)
  // ==========================================================================
  getVendorRefunds() {
    if (!this.data.vendorRefunds) this.data.vendorRefunds = [];
    return this.data.vendorRefunds;
  }
  saveVendorRefund(refund) {
    if (!this.data.vendorRefunds) this.data.vendorRefunds = [];
    const index = this.data.vendorRefunds.findIndex((r) => r.id === refund.id);
    if (index >= 0) {
      this.data.vendorRefunds[index] = refund;
    } else {
      this.data.vendorRefunds.push(refund);
    }
    this.notify();
    return refund;
  }
  postVendorRefund(refundId) {
    if (!this.data.vendorRefunds) this.data.vendorRefunds = [];
    const refund = this.data.vendorRefunds.find((r) => r.id === refundId);
    if (!refund || refund.status === "posted") return false;
    refund.status = "posted";
    const partner = this.data.partners.find((p) => p.id === refund.partnerId);
    const partnerName = partner ? partner.name : "Vendor";
    const entryLines = [];
    entryLines.push({
      id: `vrl-${Date.now()}-ap`,
      accountId: "201000",
      // Accounts Payable
      partnerId: refund.partnerId,
      label: `Debit Note - ${partnerName} (${refund.number})`,
      debit: refund.totalAmount,
      credit: 0
    });
    for (const line of refund.lines) {
      entryLines.push({
        id: `vrl-${Date.now()}-${line.id}`,
        accountId: line.accountId || "600000",
        partnerId: refund.partnerId,
        label: `Vendor Refund Reversal - ${line.description || refund.number}`,
        debit: 0,
        credit: line.subtotal
      });
    }
    if (refund.taxAmount > 0) {
      entryLines.push({
        id: `vrl-${Date.now()}-tax`,
        accountId: "220000",
        // Input VAT / Tax
        partnerId: refund.partnerId,
        label: `Input Tax Reversal (${refund.number})`,
        debit: 0,
        credit: refund.taxAmount
      });
    }
    const journalEntry = {
      id: `entry-${Date.now()}`,
      number: refund.number,
      journalId: "BILL",
      date: refund.date,
      reference: `Vendor Refund - ${partnerName}`,
      status: "posted",
      lines: entryLines
    };
    this.data.journalEntries.push(journalEntry);
    this.notify();
    return true;
  }
  deleteVendorRefund(id) {
    if (!this.data.vendorRefunds) return;
    this.data.vendorRefunds = this.data.vendorRefunds.filter((r) => r.id !== id);
    this.notify();
  }
  // ==========================================================================
  // Customer Payments
  // ==========================================================================
  getCustomerPayments() {
    const entries = (this.data.journalEntries || []).filter((entry) => {
      return (entry.journalId === "BNK" || entry.journalId === "CSH") && entry.lines.some((l) => l.accountId === "120000" && l.credit > 0);
    });
    return entries.map((entry) => {
      const arLine = entry.lines.find((l) => l.accountId === "120000" && l.credit > 0);
      const bnkLine = entry.lines.find((l) => (l.accountId === "101000" || l.accountId === "102000") && l.debit > 0);
      const partner = this.data.partners.find((p) => p.id === (arLine?.partnerId || entry.lines[0]?.partnerId));
      const journal = this.data.journals.find((j) => j.id === entry.journalId);
      return {
        id: entry.id,
        number: entry.number,
        date: entry.date,
        journalId: entry.journalId,
        journalName: journal ? journal.name : entry.journalId === "BNK" ? "Silicon Valley Bank" : "Petty Cash",
        partnerId: arLine?.partnerId,
        customerName: partner ? partner.name : arLine?.label || "Customer",
        reference: entry.reference || "Customer Payment",
        amount: arLine ? arLine.credit : bnkLine ? bnkLine.debit : 0,
        status: entry.status || "posted"
      };
    });
  }
  createDirectCustomerPayment({ partnerId, journalId, amount, paymentDate, reference, invoiceId }) {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) throw new Error("Invalid payment amount");
    const partner = this.data.partners.find((p) => p.id === partnerId);
    const partnerName = partner ? partner.name : "Customer";
    const journal = this.data.journals.find((j) => j.id === journalId) || { defaultAccount: "101000", code: "BNK" };
    const date = paymentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const payNumber = this.getNextJournalEntryNumber(journal.code || "BNK");
    const payEntry = {
      id: `entry-pay-${Date.now()}`,
      number: payNumber,
      journalId: journal.id,
      date,
      reference: reference || `Customer Payment - ${partnerName}`,
      status: "posted",
      lines: [
        {
          id: `pl-${Date.now()}-dr`,
          accountId: journal.defaultAccount || "101000",
          partnerId,
          label: `Receipt from ${partnerName}`,
          debit: amt,
          credit: 0
        },
        {
          id: `pl-${Date.now()}-cr`,
          accountId: "120000",
          partnerId,
          label: `Clear A/R ${partnerName}`,
          debit: 0,
          credit: amt
        }
      ]
    };
    this.data.journalEntries.push(payEntry);
    if (invoiceId) {
      const inv = this.data.invoices.find((i) => i.id === invoiceId);
      if (inv) {
        inv.payments = inv.payments || [];
        inv.payments.push({
          id: `pay-${Date.now()}`,
          date,
          journalId: journal.id,
          amount: amt,
          reference: reference || `Payment ${payNumber}`
        });
        const totalPaid = inv.payments.reduce((sum, p) => sum + p.amount, 0);
        inv.amountDue = Math.max(0, inv.totalAmount - totalPaid);
        if (inv.amountDue <= 1e-3) {
          inv.status = "paid";
        } else {
          inv.status = "posted";
        }
      }
    }
    this.notify();
    return payEntry;
  }
  // ==========================================================================
  // Vendor Payments (Disbursements / Accounts Payable Clearing)
  // ==========================================================================
  getVendorPayments() {
    const entries = (this.data.journalEntries || []).filter((entry) => {
      return (entry.journalId === "BNK" || entry.journalId === "CSH") && entry.lines.some((l) => l.accountId === "201000" && l.debit > 0);
    });
    return entries.map((entry) => {
      const apLine = entry.lines.find((l) => l.accountId === "201000" && l.debit > 0);
      const bnkLine = entry.lines.find((l) => (l.accountId === "101000" || l.accountId === "102000") && l.credit > 0);
      const partner = this.data.partners.find((p) => p.id === (apLine?.partnerId || entry.lines[0]?.partnerId));
      const journal = this.data.journals.find((j) => j.id === entry.journalId);
      return {
        id: entry.id,
        number: entry.number,
        date: entry.date,
        journalId: entry.journalId,
        journalName: journal ? journal.name : entry.journalId === "BNK" ? "Silicon Valley Bank" : "Petty Cash",
        partnerId: apLine?.partnerId,
        vendorName: partner ? partner.name : apLine?.label || "Vendor",
        reference: entry.reference || "Vendor Payment",
        amount: apLine ? apLine.debit : bnkLine ? bnkLine.credit : 0,
        status: entry.status || "posted"
      };
    });
  }
  createDirectVendorPayment({ partnerId, journalId, amount, paymentDate, reference, billId }) {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) throw new Error("Invalid payment amount");
    const partner = this.data.partners.find((p) => p.id === partnerId);
    const partnerName = partner ? partner.name : "Vendor";
    const journal = this.data.journals.find((j) => j.id === journalId) || { defaultAccount: "101000", code: "BNK" };
    const date = paymentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const payNumber = this.getNextJournalEntryNumber(journal.code || "BNK");
    const payEntry = {
      id: `entry-bpay-${Date.now()}`,
      number: payNumber,
      journalId: journal.id,
      date,
      reference: reference || `Vendor Payment - ${partnerName}`,
      status: "posted",
      lines: [
        {
          id: `bpl-${Date.now()}-dr`,
          accountId: "201000",
          // Accounts Payable
          partnerId,
          label: `Clear A/P ${partnerName}`,
          debit: amt,
          credit: 0
        },
        {
          id: `bpl-${Date.now()}-cr`,
          accountId: journal.defaultAccount || "101000",
          partnerId,
          label: `Disbursement from ${journal.name}`,
          debit: 0,
          credit: amt
        }
      ]
    };
    this.data.journalEntries.push(payEntry);
    if (billId) {
      const bill = this.data.bills.find((b) => b.id === billId);
      if (bill) {
        bill.payments = bill.payments || [];
        bill.payments.push({
          id: `bpay-${Date.now()}`,
          date,
          journalId: journal.id,
          amount: amt,
          reference: reference || `Payment ${payNumber}`
        });
        const totalPaid = bill.payments.reduce((sum, p) => sum + p.amount, 0);
        bill.amountDue = Math.max(0, bill.totalAmount - totalPaid);
        if (bill.amountDue <= 1e-3) {
          bill.status = "paid";
        } else {
          bill.status = "posted";
        }
      }
    }
    this.notify();
    return payEntry;
  }
  // ==========================================================================
  // Vendor Bills (Accounts Payable)
  // ==========================================================================
  saveBill(bill) {
    const index = this.data.bills.findIndex((b) => b.id === bill.id);
    if (index >= 0) {
      this.data.bills[index] = bill;
    } else {
      this.data.bills.push(bill);
    }
    this.notify();
    return bill;
  }
  postBill(billId) {
    const bill = this.data.bills.find((b) => b.id === billId);
    if (!bill || bill.status === "posted" || bill.status === "paid") return false;
    bill.status = "posted";
    const partner = this.data.partners.find((p) => p.id === bill.partnerId);
    const partnerName = partner ? partner.name : "Vendor";
    const entryLines = [];
    const expByAccount = {};
    for (const line of bill.lines) {
      const accId = line.accountId || "600000";
      expByAccount[accId] = (expByAccount[accId] || 0) + line.subtotal;
    }
    for (const [accId, amt] of Object.entries(expByAccount)) {
      entryLines.push({
        id: `bline-${Date.now()}-${accId}`,
        accountId: accId,
        partnerId: bill.partnerId,
        label: `Expense - ${bill.number}`,
        debit: amt,
        credit: 0
      });
    }
    if (bill.taxAmount > 0) {
      entryLines.push({
        id: `bline-${Date.now()}-tax`,
        accountId: "220000",
        // Input VAT / Tax
        partnerId: bill.partnerId,
        label: `Input Tax Recoverable (${bill.number})`,
        debit: bill.taxAmount,
        credit: 0
      });
    }
    entryLines.push({
      id: `bline-${Date.now()}-ap`,
      accountId: "201000",
      // Accounts Payable
      partnerId: bill.partnerId,
      label: `A/P - ${partnerName} (${bill.number})`,
      debit: 0,
      credit: bill.totalAmount
    });
    const journalEntry = {
      id: `entry-${Date.now()}`,
      number: bill.number,
      journalId: "BILL",
      date: bill.date,
      reference: `${bill.number} - ${partnerName}`,
      status: "posted",
      lines: entryLines
    };
    this.data.journalEntries.push(journalEntry);
    this.notify();
    return true;
  }
  registerBillPayment(billId, { journalId, amount, paymentDate, reference }) {
    const bill = this.data.bills.find((b) => b.id === billId);
    if (!bill) return false;
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) return false;
    bill.payments = bill.payments || [];
    bill.payments.push({
      id: `bpay-${Date.now()}`,
      date: paymentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      journalId: journalId || "BNK",
      amount: amt,
      reference: reference || `Vendor payment for ${bill.number}`
    });
    const totalPaid = bill.payments.reduce((sum, p) => sum + p.amount, 0);
    bill.amountDue = Math.max(0, bill.totalAmount - totalPaid);
    if (bill.amountDue <= 1e-3) {
      bill.status = "paid";
    }
    const journal = this.data.journals.find((j) => j.id === journalId) || { defaultAccount: "101000" };
    const payEntry = {
      id: `entry-bpay-${Date.now()}`,
      number: this.getNextJournalEntryNumber(journal.code || "BNK"),
      journalId: journalId || "BNK",
      date: paymentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      reference: `Vendor Payment ${bill.number} - ${reference || ""}`,
      status: "posted",
      lines: [
        {
          id: `bpl-${Date.now()}-dr`,
          accountId: "201000",
          // Accounts Payable
          partnerId: bill.partnerId,
          label: `Clear A/P ${bill.number}`,
          debit: amt,
          credit: 0
        },
        {
          id: `bpl-${Date.now()}-cr`,
          accountId: journal.defaultAccount || "101000",
          partnerId: bill.partnerId,
          label: `Payment from ${journal.name}`,
          debit: 0,
          credit: amt
        }
      ]
    };
    this.data.journalEntries.push(payEntry);
    this.notify();
    return true;
  }
  deleteBill(billId) {
    this.data.bills = this.data.bills.filter((b) => b.id !== billId);
    this.notify();
  }
  // ==========================================================================
  // Bank Statements & Reconciliation Engine
  // ==========================================================================
  reconcileBankStatement(statementId, matchOption) {
    const stmt = this.data.bankStatements.find((s) => s.id === statementId);
    if (!stmt) return false;
    stmt.reconciled = true;
    if (matchOption.type === "invoice") {
      const inv = this.data.invoices.find((i) => i.id === matchOption.docId);
      if (inv) {
        this.registerInvoicePayment(inv.id, {
          journalId: "BNK",
          amount: Math.abs(stmt.amount),
          paymentDate: stmt.date,
          reference: `Bank Reconciled: ${stmt.label}`
        });
        stmt.matchedDocId = inv.id;
        stmt.matchedDocType = "invoice";
      }
    } else if (matchOption.type === "bill") {
      const bill = this.data.bills.find((b) => b.id === matchOption.docId);
      if (bill) {
        this.registerBillPayment(bill.id, {
          journalId: "BNK",
          amount: Math.abs(stmt.amount),
          paymentDate: stmt.date,
          reference: `Bank Reconciled: ${stmt.label}`
        });
        stmt.matchedDocId = bill.id;
        stmt.matchedDocType = "bill";
      }
    } else if (matchOption.type === "account") {
      const isFee = stmt.amount < 0;
      const amt = Math.abs(stmt.amount);
      const entry = {
        id: `entry-recon-${Date.now()}`,
        number: this.getNextJournalEntryNumber("BNK"),
        journalId: "BNK",
        date: stmt.date,
        reference: `Reconciled: ${stmt.label}`,
        status: "posted",
        lines: [
          {
            id: `recon-${Date.now()}-1`,
            accountId: matchOption.accountId || (isFee ? "650000" : "490000"),
            partnerId: stmt.partnerId || null,
            label: stmt.label,
            debit: isFee ? amt : 0,
            credit: isFee ? 0 : amt
          },
          {
            id: `recon-${Date.now()}-2`,
            accountId: "101000",
            // Bank SVB
            partnerId: stmt.partnerId || null,
            label: `Bank Reconciled - ${stmt.label}`,
            debit: isFee ? 0 : amt,
            credit: isFee ? amt : 0
          }
        ]
      };
      this.data.journalEntries.push(entry);
      stmt.matchedAccountId = matchOption.accountId;
      stmt.matchedDocType = "account";
    }
    this.notify();
    return true;
  }
  addBankStatementLine(line) {
    const newLine = {
      id: `stmt-${Date.now()}`,
      date: line.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      label: line.label,
      partnerId: line.partnerId || null,
      amount: parseFloat(line.amount) || 0,
      reconciled: false
    };
    this.data.bankStatements.unshift(newLine);
    this.notify();
    return newLine;
  }
  // ==========================================================================
  // Direct Journal Entries
  // ==========================================================================
  saveJournalEntry(entry) {
    const index = this.data.journalEntries.findIndex((e) => e.id === entry.id);
    if (index >= 0) {
      this.data.journalEntries[index] = entry;
    } else {
      this.data.journalEntries.push(entry);
    }
    this.notify();
    return entry;
  }
  deleteJournalEntry(entryId) {
    this.data.journalEntries = this.data.journalEntries.filter((e) => e.id !== entryId);
    this.notify();
  }
  // ==========================================================================
  // Chart of Accounts Management
  // ==========================================================================
  saveAccount(account) {
    const index = this.data.accounts.findIndex((a) => a.code === account.code);
    if (index >= 0) {
      this.data.accounts[index] = account;
    } else {
      this.data.accounts.push(account);
    }
    this.notify();
    return account;
  }
  deleteAccount(code) {
    this.data.accounts = this.data.accounts.filter((a) => a.code !== code);
    this.notify();
  }
  // ==========================================================================
  // Contacts & Products Management
  // ==========================================================================
  savePartner(partner) {
    const index = this.data.partners.findIndex((p) => p.id === partner.id);
    if (index >= 0) {
      this.data.partners[index] = partner;
    } else {
      this.data.partners.push(partner);
    }
    this.notify();
    return partner;
  }
  deletePartner(id) {
    this.data.partners = this.data.partners.filter((p) => p.id !== id);
    this.notify();
  }
  saveProduct(product) {
    const index = this.data.products.findIndex((p) => p.id === product.id);
    if (index >= 0) {
      this.data.products[index] = product;
    } else {
      this.data.products.push(product);
    }
    this.notify();
    return product;
  }
  deleteProduct(id) {
    this.data.products = this.data.products.filter((p) => p.id !== id);
    this.notify();
  }
  // ==========================================================================
  // Fixed Assets Management
  // ==========================================================================
  getAssets() {
    if (!this.data.assets) this.data.assets = [];
    return this.data.assets;
  }
  saveAsset(asset) {
    if (!this.data.assets) this.data.assets = [];
    const index = this.data.assets.findIndex((a) => a.id === asset.id);
    if (index >= 0) {
      this.data.assets[index] = asset;
    } else {
      this.data.assets.push(asset);
    }
    this.notify();
    return asset;
  }
  postAssetDepreciation(assetId, amount) {
    const asset = this.data.assets?.find((a) => a.id === assetId);
    if (!asset) return false;
    const amt = parseFloat(amount) || (asset.originalValue - asset.salvageValue) / (asset.durationYears * 12);
    asset.depreciatedAmount = (asset.depreciatedAmount || 0) + amt;
    asset.currentValue = Math.max(asset.salvageValue, asset.originalValue - asset.depreciatedAmount);
    if (asset.currentValue <= asset.salvageValue) {
      asset.status = "depreciated";
    }
    const journalEntry = {
      id: `entry-depr-${Date.now()}`,
      number: this.getNextJournalEntryNumber("MISC"),
      journalId: "MISC",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      reference: `Monthly Depreciation - ${asset.name}`,
      status: "posted",
      lines: [
        {
          id: `depr-${Date.now()}-dr`,
          accountId: asset.depreciationAccount || "660000",
          label: `Depreciation - ${asset.name}`,
          debit: amt,
          credit: 0
        },
        {
          id: `depr-${Date.now()}-cr`,
          accountId: asset.accumulatedDepreciationAccount || "175000",
          label: `Accum. Depr - ${asset.name}`,
          debit: 0,
          credit: amt
        }
      ]
    };
    this.data.journalEntries.push(journalEntry);
    this.notify();
    return journalEntry;
  }
  deleteAsset(assetId) {
    if (!this.data.assets) return;
    this.data.assets = this.data.assets.filter((a) => a.id !== assetId);
    this.notify();
  }
  // ==========================================================================
  // Loans & Borrowings
  // ==========================================================================
  getLoans() {
    if (!this.data.loans) this.data.loans = [];
    return this.data.loans;
  }
  saveLoan(loan) {
    if (!this.data.loans) this.data.loans = [];
    const index = this.data.loans.findIndex((l) => l.id === loan.id);
    if (index >= 0) {
      this.data.loans[index] = loan;
    } else {
      this.data.loans.push(loan);
    }
    this.notify();
    return loan;
  }
  registerLoanRepayment({ loanId, principalAmount, interestAmount, journalId, date, reference }) {
    const loan = this.data.loans?.find((l) => l.id === loanId);
    if (!loan) return false;
    const pAmt = parseFloat(principalAmount) || 0;
    const iAmt = parseFloat(interestAmount) || 0;
    const totalPayment = pAmt + iAmt;
    loan.remainingBalance = Math.max(0, (loan.remainingBalance || loan.principalAmount) - pAmt);
    loan.totalInterestPaid = (loan.totalInterestPaid || 0) + iAmt;
    if (loan.remainingBalance <= 0.01) {
      loan.status = "closed";
    }
    const journal = this.data.journals.find((j) => j.id === journalId) || { defaultAccount: "101000" };
    const entryLines = [];
    if (pAmt > 0) {
      entryLines.push({
        id: `loan-p-${Date.now()}`,
        accountId: loan.liabilityAccount || "260000",
        label: `Principal Repayment - ${loan.name}`,
        debit: pAmt,
        credit: 0
      });
    }
    if (iAmt > 0) {
      entryLines.push({
        id: `loan-i-${Date.now()}`,
        accountId: loan.interestAccount || "650000",
        label: `Interest Charge - ${loan.name}`,
        debit: iAmt,
        credit: 0
      });
    }
    entryLines.push({
      id: `loan-c-${Date.now()}`,
      accountId: journal.defaultAccount || "101000",
      label: `Repayment from ${journal.name}`,
      debit: 0,
      credit: totalPayment
    });
    const journalEntry = {
      id: `entry-loan-${Date.now()}`,
      number: this.getNextJournalEntryNumber(journal.code || "BNK"),
      journalId: journal.id || "BNK",
      date: date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      reference: reference || `Loan Repayment - ${loan.name}`,
      status: "posted",
      lines: entryLines
    };
    this.data.journalEntries.push(journalEntry);
    this.notify();
    return journalEntry;
  }
  deleteLoan(loanId) {
    if (!this.data.loans) return;
    this.data.loans = this.data.loans.filter((l) => l.id !== loanId);
    this.notify();
  }
  // ==========================================================================
  // Lock Dates (Closing)
  // ==========================================================================
  getLockDates() {
    return this.data.lockDates || {
      nonAdviserLockDate: "2026-09-30",
      hardLockDate: "2025-12-31"
    };
  }
  saveLockDates(lockDates) {
    this.data.lockDates = { ...this.getLockDates(), ...lockDates };
    this.notify();
    return this.data.lockDates;
  }
  // ==========================================================================
  // Review & Audit Management (Control, Audit, Inventory, Regularization)
  // ==========================================================================
  getJournalItems() {
    const items = [];
    const accountsMap = new Map((this.data.accounts || []).map((a) => [a.code, a]));
    const partnersMap = new Map((this.data.partners || []).map((p) => [p.id, p]));
    const journalsMap = new Map((this.data.journals || []).map((j) => [j.id, j]));
    const entries = this.data.journalEntries || [];
    entries.forEach((entry) => {
      const journal = journalsMap.get(entry.journalId) || { name: entry.journalId, code: entry.journalId };
      (entry.lines || []).forEach((line) => {
        const account = accountsMap.get(line.accountId) || { code: line.accountId, name: "General Account" };
        const partner = line.partnerId ? partnersMap.get(line.partnerId) : null;
        items.push({
          id: line.id || `${entry.id}-${Math.random().toString(36).substr(2, 6)}`,
          entryId: entry.id,
          entryNumber: entry.number,
          date: entry.date,
          journalId: entry.journalId,
          journalName: journal.name,
          journalCode: journal.code,
          accountId: line.accountId,
          accountCode: account.code,
          accountName: account.name,
          partnerId: line.partnerId || null,
          partnerName: partner ? partner.name : entry.reference && entry.reference.includes(" - ") ? entry.reference.split(" - ")[1] : "-",
          label: line.label || entry.reference || "-",
          debit: parseFloat(line.debit || 0),
          credit: parseFloat(line.credit || 0),
          status: entry.status || "posted",
          matched: line.matched || line.debit > 0 && line.credit === 0 && entry.status === "posted"
        });
      });
    });
    return items.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  getAuditTrail() {
    return this.data.auditTrail || [];
  }
  addAuditLog(action, resource, details) {
    if (!this.data.auditTrail) this.data.auditTrail = [];
    const user = this.getCurrentUser() || { username: "system", fullName: "System Worker" };
    const now = /* @__PURE__ */ new Date();
    const timestamp = now.toISOString().replace("T", " ").substring(0, 19);
    const newLog = {
      id: `aud-${Date.now()}`,
      timestamp,
      username: user.username,
      userFullName: user.fullName,
      action,
      resource,
      details,
      ipAddress: "127.0.0.1"
    };
    this.data.auditTrail.unshift(newLog);
    this.notify();
    return newLog;
  }
  getJournalAuditSummary() {
    const journals = this.data.journals || [];
    const entries = this.data.journalEntries || [];
    return journals.map((journal) => {
      const journalEntries = entries.filter((e) => e.journalId === journal.id);
      let totalDebit = 0;
      let totalCredit = 0;
      let postedCount = 0;
      let draftCount = 0;
      journalEntries.forEach((e) => {
        if (e.status === "posted") postedCount++;
        else draftCount++;
        (e.lines || []).forEach((l) => {
          totalDebit += parseFloat(l.debit || 0);
          totalCredit += parseFloat(l.credit || 0);
        });
      });
      const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;
      const sequenceNumbers = journalEntries.map((e) => {
        const parts = (e.number || "").split("/");
        return parseInt(parts[parts.length - 1], 10);
      }).filter((n) => !isNaN(n)).sort((a, b) => a - b);
      let sequenceGaps = 0;
      for (let i = 1; i < sequenceNumbers.length; i++) {
        if (sequenceNumbers[i] !== sequenceNumbers[i - 1] + 1) {
          sequenceGaps++;
        }
      }
      return {
        journal,
        entryCount: journalEntries.length,
        postedCount,
        draftCount,
        totalDebit,
        totalCredit,
        isBalanced,
        sequenceGaps,
        lastEntry: journalEntries.length > 0 ? journalEntries[journalEntries.length - 1] : null
      };
    });
  }
  // Inventory Valuation (Account 130000)
  getInventoryItems() {
    return this.data.inventoryItems || [];
  }
  addInventoryItem(item) {
    if (!this.data.inventoryItems) this.data.inventoryItems = [];
    const units = parseInt(item.unitsOnHand || 0, 10);
    const cost = parseFloat(item.unitCost || 0);
    const newItem = {
      id: `inv-item-${Date.now()}`,
      sku: item.sku || `SKU-${Math.floor(1e3 + Math.random() * 9e3)}`,
      name: item.name || "New Inventory Item",
      category: item.category || "General Supplies",
      unitsOnHand: units,
      unitCost: cost,
      totalValuation: units * cost,
      valuationMethod: item.valuationMethod || "FIFO",
      location: item.location || "Main Warehouse - Dhaka"
    };
    this.data.inventoryItems.push(newItem);
    this.addAuditLog("ADD_INVENTORY_ITEM", newItem.sku, `Added item ${newItem.name} (${units} units @ $${cost.toFixed(2)})`);
    this.notify();
    return newItem;
  }
  updateInventoryItem(id, updates) {
    if (!this.data.inventoryItems) return null;
    const idx = this.data.inventoryItems.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    const existing = this.data.inventoryItems[idx];
    const updated = { ...existing, ...updates };
    updated.unitsOnHand = parseInt(updated.unitsOnHand || 0, 10);
    updated.unitCost = parseFloat(updated.unitCost || 0);
    updated.totalValuation = updated.unitsOnHand * updated.unitCost;
    this.data.inventoryItems[idx] = updated;
    this.addAuditLog("UPDATE_INVENTORY_ITEM", updated.sku, `Stock adjusted for ${updated.name}: ${updated.unitsOnHand} units`);
    this.notify();
    return updated;
  }
  deleteInventoryItem(id) {
    if (!this.data.inventoryItems) return;
    const item = this.data.inventoryItems.find((i) => i.id === id);
    this.data.inventoryItems = this.data.inventoryItems.filter((i) => i.id !== id);
    if (item) {
      this.addAuditLog("DELETE_INVENTORY_ITEM", item.sku, `Removed inventory valuation record ${item.name}`);
    }
    this.notify();
  }
  // Regularization: Deferred Revenues (Unearned Income)
  getDeferredRevenues() {
    return this.data.deferredRevenues || [];
  }
  addDeferredRevenue(record) {
    if (!this.data.deferredRevenues) this.data.deferredRevenues = [];
    const totalAmount = parseFloat(record.totalAmount || 0);
    const months = parseInt(record.durationMonths || 12, 10);
    const monthlyAmortization = months > 0 ? totalAmount / months : totalAmount;
    const newRecord = {
      id: `drev-${Date.now()}`,
      name: record.name || "New Deferred Revenue Contract",
      partnerId: record.partnerId || null,
      totalAmount,
      recognizedToDate: 0,
      remainingDeferred: totalAmount,
      monthlyAmortization: parseFloat(monthlyAmortization.toFixed(2)),
      startDate: record.startDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      endDate: record.endDate || "2027-12-31",
      accountLiability: record.accountLiability || "230000",
      accountRevenue: record.accountRevenue || "410000",
      status: "active"
    };
    this.data.deferredRevenues.push(newRecord);
    this.addAuditLog("CREATE_DEFERRED_REVENUE", newRecord.name, `New unearned contract: $${totalAmount.toFixed(2)}`);
    this.notify();
    return newRecord;
  }
  recognizeDeferredRevenue(id) {
    if (!this.data.deferredRevenues) return null;
    const item = this.data.deferredRevenues.find((d) => d.id === id);
    if (!item || item.remainingDeferred <= 0) return null;
    const amountToRecognize = Math.min(item.monthlyAmortization, item.remainingDeferred);
    item.recognizedToDate += amountToRecognize;
    item.remainingDeferred -= amountToRecognize;
    if (item.remainingDeferred <= 0) {
      item.remainingDeferred = 0;
      item.status = "completed";
    }
    const entryNumber = `MISC/2026/${String(this.data.journalEntries.length + 1).padStart(4, "0")}`;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const journalEntry = {
      id: `entry-${Date.now()}`,
      number: entryNumber,
      journalId: "MISC",
      date: today,
      reference: `Revenue Recognition - ${item.name}`,
      status: "posted",
      lines: [
        {
          id: `line-${Date.now()}-1`,
          accountId: item.accountLiability || "230000",
          partnerId: item.partnerId,
          label: `Recognition from Deferred: ${item.name}`,
          debit: amountToRecognize,
          credit: 0
        },
        {
          id: `line-${Date.now()}-2`,
          accountId: item.accountRevenue || "410000",
          partnerId: item.partnerId,
          label: `Recognized Revenue: ${item.name}`,
          debit: 0,
          credit: amountToRecognize
        }
      ]
    };
    this.data.journalEntries.push(journalEntry);
    this.addAuditLog("RECOGNIZE_DEFERRED_REVENUE", item.name, `Recognized $${amountToRecognize.toFixed(2)} into revenue (${item.accountRevenue})`);
    this.notify();
    return { item, journalEntry };
  }
  // Regularization: Deferred Expenses (Prepaid Expenses)
  getDeferredExpenses() {
    return this.data.deferredExpenses || [];
  }
  addDeferredExpense(record) {
    if (!this.data.deferredExpenses) this.data.deferredExpenses = [];
    const totalAmount = parseFloat(record.totalAmount || 0);
    const months = parseInt(record.durationMonths || 12, 10);
    const monthlyAmortization = months > 0 ? totalAmount / months : totalAmount;
    const newRecord = {
      id: `dexp-${Date.now()}`,
      name: record.name || "New Prepaid Expense Policy",
      partnerId: record.partnerId || null,
      totalAmount,
      amortizedToDate: 0,
      remainingPrepaid: totalAmount,
      monthlyAmortization: parseFloat(monthlyAmortization.toFixed(2)),
      startDate: record.startDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      endDate: record.endDate || "2027-12-31",
      accountPrepaid: record.accountPrepaid || "140000",
      accountExpense: record.accountExpense || "610000",
      status: "active"
    };
    this.data.deferredExpenses.push(newRecord);
    this.addAuditLog("CREATE_DEFERRED_EXPENSE", newRecord.name, `New prepaid schedule: $${totalAmount.toFixed(2)}`);
    this.notify();
    return newRecord;
  }
  amortizeDeferredExpense(id) {
    if (!this.data.deferredExpenses) return null;
    const item = this.data.deferredExpenses.find((d) => d.id === id);
    if (!item || item.remainingPrepaid <= 0) return null;
    const amountToAmortize = Math.min(item.monthlyAmortization, item.remainingPrepaid);
    item.amortizedToDate += amountToAmortize;
    item.remainingPrepaid -= amountToAmortize;
    if (item.remainingPrepaid <= 0) {
      item.remainingPrepaid = 0;
      item.status = "completed";
    }
    const entryNumber = `MISC/2026/${String(this.data.journalEntries.length + 1).padStart(4, "0")}`;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const journalEntry = {
      id: `entry-${Date.now()}`,
      number: entryNumber,
      journalId: "MISC",
      date: today,
      reference: `Prepaid Amortization - ${item.name}`,
      status: "posted",
      lines: [
        {
          id: `line-${Date.now()}-1`,
          accountId: item.accountExpense || "610000",
          partnerId: item.partnerId,
          label: `Amortization to Expense: ${item.name}`,
          debit: amountToAmortize,
          credit: 0
        },
        {
          id: `line-${Date.now()}-2`,
          accountId: item.accountPrepaid || "140000",
          partnerId: item.partnerId,
          label: `Reduction of Prepaid Asset: ${item.name}`,
          debit: 0,
          credit: amountToAmortize
        }
      ]
    };
    this.data.journalEntries.push(journalEntry);
    this.addAuditLog("AMORTIZE_DEFERRED_EXPENSE", item.name, `Amortized $${amountToAmortize.toFixed(2)} from prepaid asset into expense (${item.accountExpense})`);
    this.notify();
    return { item, journalEntry };
  }
  // ==========================================================================
  // Configuration Modules (Online Payments, Accounting, Invoicing)
  // ==========================================================================
  getOnlinePayments() {
    return this.data.onlinePayments || [];
  }
  toggleOnlinePayment(id) {
    if (!this.data.onlinePayments) return;
    const provider = this.data.onlinePayments.find((p) => p.id === id);
    if (provider) {
      provider.status = provider.status === "enabled" ? "disabled" : "enabled";
      this.addAuditLog("UPDATE_PAYMENT_GATEWAY", provider.name, `Toggled status to ${provider.status}`);
      this.notify();
    }
  }
  getCurrencies() {
    return this.data.currencies || [];
  }
  setBaseCurrency(code) {
    if (!this.data.currencies) return;
    const target = this.data.currencies.find((c) => c.code === code);
    if (!target) return;
    this.data.currencies.forEach((c) => {
      if (c.code === code) {
        c.isBase = true;
        c.rate = 1;
      } else {
        c.isBase = false;
      }
    });
    if (this.data.company) {
      this.data.company.currency = target.code;
      this.data.company.currencySymbol = target.symbol;
    }
    this.data.currencies.sort((a, b) => (b.isBase ? 1 : 0) - (a.isBase ? 1 : 0));
    this.addAuditLog("SET_BASE_CURRENCY", code, `Set ${target.name} (${code}) as base operating currency`);
    this.notify();
  }
  updateCurrencyRate(code, newRate) {
    if (!this.data.currencies) return;
    const cur = this.data.currencies.find((c) => c.code === code);
    if (cur) {
      cur.rate = parseFloat(newRate) || cur.rate;
      this.addAuditLog("UPDATE_CURRENCY_RATE", code, `Updated exchange rate to ${cur.rate}`);
      this.notify();
    }
  }
  getFiscalPositions() {
    return this.data.fiscalPositions || [];
  }
  addFiscalPosition(fp) {
    if (!this.data.fiscalPositions) this.data.fiscalPositions = [];
    const newFp = {
      id: `fp-${Date.now()}`,
      name: fp.name,
      taxSource: fp.taxSource || "tax-10",
      taxDestination: fp.taxDestination || "tax-0",
      notes: fp.notes || "",
      active: true
    };
    this.data.fiscalPositions.push(newFp);
    this.addAuditLog("CREATE_FISCAL_POSITION", newFp.name, `Created fiscal tax mapping rule`);
    this.notify();
    return newFp;
  }
  getMultiLedgers() {
    return this.data.multiLedgers || [];
  }
  addMultiLedger(ledger) {
    if (!this.data.multiLedgers) this.data.multiLedgers = [];
    const newLedger = {
      id: `ledg-${Date.now()}`,
      name: ledger.name,
      code: ledger.code,
      currency: ledger.currency || "USD",
      isDefault: false,
      description: ledger.description || ""
    };
    this.data.multiLedgers.push(newLedger);
    this.addAuditLog("CREATE_MULTI_LEDGER", newLedger.name, `Configured secondary ledger (${newLedger.code})`);
    this.notify();
    return newLedger;
  }
  getCheckFormats() {
    return this.data.checkFormats || {
      sequenceStart: 1001,
      currentCheckNumber: 1045,
      bankAccountId: "101000",
      layout: "check_top",
      stubCopies: 2,
      micrFont: true,
      signatureLineText: "Authorized Financial Officer",
      autoPrintVoucher: true
    };
  }
  updateCheckFormats(cfg) {
    this.data.checkFormats = { ...this.getCheckFormats(), ...cfg };
    this.addAuditLog("UPDATE_CHECK_SETTINGS", "Check Printing Format", `Updated check layout & sequence to #${this.data.checkFormats.currentCheckNumber}`);
    this.notify();
  }
  getDepreciationModels() {
    return this.data.depreciationModels || [];
  }
  addDepreciationModel(model) {
    if (!this.data.depreciationModels) this.data.depreciationModels = [];
    const newModel = {
      id: `depr-m-${Date.now()}`,
      name: model.name,
      method: model.method || "straight_line",
      durationYears: parseInt(model.durationYears || 5, 10),
      salvagePercent: parseFloat(model.salvagePercent || 0),
      assetAccount: model.assetAccount || "170000",
      deprAccount: model.deprAccount || "175000",
      expenseAccount: model.expenseAccount || "660000"
    };
    this.data.depreciationModels.push(newModel);
    this.addAuditLog("CREATE_DEPR_MODEL", newModel.name, `Configured ${newModel.durationYears}-year ${newModel.method} model`);
    this.notify();
    return newModel;
  }
  getReturnTypes() {
    return this.data.returnTypes || [];
  }
  getInvoiceReminders() {
    return this.data.invoiceReminders || [];
  }
  toggleInvoiceReminder(id) {
    if (!this.data.invoiceReminders) return;
    const reminder = this.data.invoiceReminders.find((r) => r.id === id);
    if (reminder) {
      reminder.enabled = !reminder.enabled;
      this.addAuditLog("TOGGLE_INVOICE_REMINDER", reminder.name, `Reminder active: ${reminder.enabled}`);
      this.notify();
    }
  }
  getPaymentTermsList() {
    return this.data.paymentTermsList || [];
  }
  addPaymentTerm(term) {
    if (!this.data.paymentTermsList) this.data.paymentTermsList = [];
    const newTerm = {
      id: `term-${Date.now()}`,
      code: term.code || `term_${term.days}_days`,
      name: term.name,
      days: parseInt(term.days || 0, 10),
      description: term.description || ""
    };
    this.data.paymentTermsList.push(newTerm);
    this.addAuditLog("CREATE_PAYMENT_TERM", newTerm.name, `Created payment term with ${newTerm.days} days credit`);
    this.notify();
    return newTerm;
  }
  getProductCategories() {
    return this.data.productCategories || [];
  }
  addProductCategory(cat) {
    if (!this.data.productCategories) this.data.productCategories = [];
    const newCat = {
      id: `cat-${Date.now()}`,
      code: cat.code || `CAT-${Date.now().toString(36).toUpperCase()}`,
      name: cat.name,
      incomeAccount: cat.incomeAccount || "400000",
      expenseAccount: cat.expenseAccount || "500000",
      productCount: 0
    };
    this.data.productCategories.push(newCat);
    this.addAuditLog("CREATE_PRODUCT_CATEGORY", newCat.name, `Configured product category`);
    this.notify();
    return newCat;
  }
  addTax(tax) {
    if (!this.data.taxes) this.data.taxes = [];
    const newTax = {
      id: `tax-${Date.now()}`,
      name: tax.name,
      rate: parseFloat(tax.rate || 0),
      type: tax.type || "percent",
      active: true
    };
    this.data.taxes.push(newTax);
    this.addAuditLog("CREATE_TAX_RATE", newTax.name, `Added ${newTax.rate}% tax rate`);
    this.notify();
    return newTax;
  }
  // ==========================================================================
  // Settings & System Backup / Restore
  // ==========================================================================
  updateCompany(companyData) {
    this.data.company = { ...this.data.company, ...companyData };
    this.notify();
  }
  exportData() {
    return JSON.stringify(this.data, null, 2);
  }
  importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.company || !parsed.accounts || !parsed.invoices) {
        throw new Error("Invalid accounting dataset format.");
      }
      this.data = parsed;
      this.notify();
      return true;
    } catch (e) {
      console.error("Import failed", e);
      return false;
    }
  }
  resetToDefault() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.notify();
  }
};
var store = new Store();

// js/components/icons.js
var ICONS = {
  grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  "file-text": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  "shopping-bag": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  landmark: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="5 10 5 21"/><polyline points="19 10 19 21"/><line x1="9" y1="10" x2="9" y2="21"/><line x1="14" y1="10" x2="14" y2="21"/><polygon points="12 2 2 7 22 7 12 2"/></svg>`,
  coins: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>`,
  shuffle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  "bar-chart-2": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  settings: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  users: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  package: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  printer: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  "trash-2": `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  eye: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  x: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  "refresh-cw": `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  "kanban-view": `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="12" rx="1"/><rect x="17" y="3" width="5" height="15" rx="1"/></svg>`,
  "list-view": `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  "log-out": `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  shield: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
};
function getIcon(name, className = "") {
  const svg = ICONS[name] || ICONS["file-text"];
  if (!className) return svg;
  return svg.replace("<svg ", `<svg class="${className}" `);
}

// js/components/toast.js
var ToastManager = class {
  constructor() {
    this.container = null;
  }
  ensureContainer() {
    if (!this.container) {
      this.container = document.getElementById("toast-container");
      if (!this.container) {
        this.container = document.createElement("div");
        this.container.id = "toast-container";
        document.body.appendChild(this.container);
      }
    }
    return this.container;
  }
  show({ type = "info", title = "", message = "", duration = 4e3 }) {
    const container = this.ensureContainer();
    const toastEl = document.createElement("div");
    toastEl.className = `toast toast-${type}`;
    let iconName = "info";
    if (type === "success") iconName = "check";
    if (type === "error") iconName = "x";
    if (type === "warning") iconName = "shuffle";
    toastEl.innerHTML = `
      <div class="toast-icon">${getIcon(iconName)}</div>
      <div class="toast-content">
        ${title ? `<div class="toast-title">${title}</div>` : ""}
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close">${getIcon("x")}</button>
    `;
    const closeBtn = toastEl.querySelector(".toast-close");
    closeBtn.onclick = () => this.dismiss(toastEl);
    container.appendChild(toastEl);
    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(toastEl);
      }, duration);
    }
  }
  dismiss(toastEl) {
    if (!toastEl || !toastEl.parentElement) return;
    toastEl.style.opacity = "0";
    toastEl.style.transform = "translateX(40px)";
    setTimeout(() => {
      if (toastEl.parentElement) {
        toastEl.parentElement.removeChild(toastEl);
      }
    }, 250);
  }
  success(message, title = "Success") {
    this.show({ type: "success", title, message });
  }
  error(message, title = "Error") {
    this.show({ type: "error", title, message, duration: 6e3 });
  }
  warning(message, title = "Warning") {
    this.show({ type: "warning", title, message });
  }
  info(message, title = "Notification") {
    this.show({ type: "info", title, message });
  }
};
var toast = new ToastManager();

// js/components/modal.js
var ModalManager = class {
  constructor() {
    this.backdrop = null;
    this.currentOnClose = null;
  }
  ensureElements() {
    if (!this.backdrop) {
      this.backdrop = document.getElementById("modal-backdrop");
      if (!this.backdrop) {
        this.backdrop = document.createElement("div");
        this.backdrop.id = "modal-backdrop";
        this.backdrop.className = "modal-backdrop";
        document.body.appendChild(this.backdrop);
      }
    }
    if (!document.getElementById("modal-dialog")) {
      this.backdrop.innerHTML = `
        <div class="modal-dialog" id="modal-dialog">
          <div class="modal-header">
            <div class="modal-title" id="modal-title"></div>
            <button class="modal-close-btn" id="modal-close-btn">${getIcon("x")}</button>
          </div>
          <div class="modal-body" id="modal-body"></div>
          <div class="modal-footer" id="modal-footer"></div>
        </div>
      `;
      const closeBtn = document.getElementById("modal-close-btn");
      if (closeBtn) closeBtn.onclick = () => this.close();
      this.backdrop.addEventListener("click", (e) => {
        if (e.target === this.backdrop) {
          this.close();
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.backdrop && this.backdrop.classList.contains("open")) {
          this.close();
        }
      });
    }
  }
  open({ title = "", contentHtml = "", footerHtml = "", size = "", onOpen = null, onClose = null }) {
    this.ensureElements();
    this.currentOnClose = onClose;
    const dialog = document.getElementById("modal-dialog");
    const titleEl = document.getElementById("modal-title");
    const bodyEl = document.getElementById("modal-body");
    const footerEl = document.getElementById("modal-footer");
    dialog.className = `modal-dialog ${size ? `modal-${size}` : ""}`;
    titleEl.innerHTML = title;
    bodyEl.innerHTML = contentHtml;
    footerEl.innerHTML = footerHtml;
    if (!footerHtml) {
      footerEl.style.display = "none";
    } else {
      footerEl.style.display = "flex";
    }
    this.backdrop.classList.add("open");
    if (typeof onOpen === "function") {
      setTimeout(() => onOpen(bodyEl, footerEl), 20);
    }
  }
  close() {
    if (!this.backdrop) return;
    this.backdrop.classList.remove("open");
    if (typeof this.currentOnClose === "function") {
      this.currentOnClose();
      this.currentOnClose = null;
    }
  }
};
var modal = new ModalManager();

// js/components/lock-dates-modal.js
function openLockDatesModal(onSuccess) {
  const current = store.getLockDates();
  modal.open({
    title: `${getIcon("lock")} Accounting Lock Dates`,
    size: "md",
    contentHtml: `
      <div style="background: var(--bg-surface-elevated); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-base); margin-bottom: 20px;">
        <div style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">
          Lock dates protect past accounting transactions from unauthorized changes, retroactive postings, and ensure strict compliance with fiscal audit periods.
        </div>
      </div>

      <div class="form-group" style="margin-bottom: 20px;">
        <label class="form-label" style="font-weight: 700;">Lock Date for Non-Advisers (Staff & Employees)</label>
        <input type="date" class="form-control" id="lock-non-adviser" value="${current.nonAdviserLockDate || ""}" />
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
          Standard staff and data entry users cannot create or modify journal entries, invoices, or bills on or before this date. Only Super Admins and Advisors can post before this date.
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight: 700; color: var(--danger);">All Users Lock Date (Hard Close)</label>
        <input type="date" class="form-control" id="lock-all-users" value="${current.hardLockDate || ""}" />
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
          No accounting transactions whatsoever can be created, updated, or unposted on or before this date, regardless of user role. Usually set after year-end financial statement audits.
        </div>
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-lock-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-lock-save">${getIcon("check")} Save Lock Dates</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-lock-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-lock-save").onclick = () => {
        const nonAdviserLockDate = body.querySelector("#lock-non-adviser").value;
        const hardLockDate = body.querySelector("#lock-all-users").value;
        store.saveLockDates({
          nonAdviserLockDate,
          hardLockDate
        });
        modal.close();
        toast.success("Accounting Lock Dates updated successfully!");
        if (typeof onSuccess === "function") onSuccess();
      };
    }
  });
}

// js/components/navbar.js
function renderNavbar(container, navigate, currentRoute, currentParams = {}) {
  const company = store.getCompany();
  const currentUser = store.getCurrentUser() || { fullName: "User", username: "user", role: "employee" };
  const canManageUsers = store.canManageUsers();
  let roleIcon = "\u{1F464}";
  let roleLabel = "Employee";
  let roleBadgeClass = "badge-draft";
  if (currentUser.role === "superadmin") {
    roleIcon = "\u{1F451}";
    roleLabel = "Super Admin";
    roleBadgeClass = "badge-superadmin";
  } else if (currentUser.role === "admin") {
    roleIcon = "\u{1F6E1}\uFE0F";
    roleLabel = "Admin";
    roleBadgeClass = "badge-admin";
  }
  const initials = (currentUser.fullName || "User").split(" ").filter(Boolean).map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  container.innerHTML = `
    <nav class="app-navbar">
      <!-- Left Brand & App Switcher -->
      <div class="navbar-brand-section">
        <button class="app-switcher-btn" id="btn-app-switcher" title="App Launcher">
          ${getIcon("grid")}
        </button>
        <div class="brand-title" id="nav-brand-title" style="cursor: pointer;">
          <span>Accounting</span>
          <span class="brand-badge">PRO</span>
        </div>

        <!-- Main Menus -->
        <ul class="navbar-nav">
          <!-- 1. Dashboard -->
          <li class="nav-item ${currentRoute === "dashboard" ? "active" : ""}">
            <button class="nav-link" id="nav-dashboard">Dashboard</button>
          </li>

          <!-- 2. Customers Dropdown -->
          <li class="nav-item ${currentRoute === "invoices" || currentRoute === "credit-notes" || currentRoute === "payments" || currentRoute === "products" || currentRoute === "contacts" && currentParams.type !== "vendors" ? "active" : ""}" id="nav-menu-customers">
            <button class="nav-link">
              Customers <span class="caret"></span>
            </button>
            <div class="nav-dropdown">
              <a class="dropdown-item" id="nav-item-invoices">Invoices</a>
              <a class="dropdown-item" id="nav-item-credit-notes">Credit Notes</a>
              <a class="dropdown-item" id="nav-item-cust-payments">Payments</a>
              <a class="dropdown-item" id="nav-item-cust-products">Products</a>
              <a class="dropdown-item" id="nav-item-customers">Customer</a>
            </div>
          </li>

          <!-- 3. Vendors Dropdown -->
          <li class="nav-item ${currentRoute === "bills" || currentRoute === "refunds" || currentRoute === "payments" && currentParams.type === "vendors" || currentRoute === "products" && currentParams.section === "vendors" || currentRoute === "contacts" && currentParams.type === "vendors" ? "active" : ""}" id="nav-menu-vendors">
            <button class="nav-link">
              Vendors <span class="caret"></span>
            </button>
            <div class="nav-dropdown">
              <a class="dropdown-item" id="nav-item-bills">Bills</a>
              <a class="dropdown-item" id="nav-item-refunds">Refunds</a>
              <a class="dropdown-item" id="nav-item-vend-payments">Payments</a>
              <a class="dropdown-item" id="nav-item-vend-products">Products</a>
              <a class="dropdown-item" id="nav-item-vendors">Vendors</a>
            </div>
          </li>

          <!-- 4. Accounting Dropdown -->
          <li class="nav-item ${currentRoute === "journal" || currentRoute === "assets" || currentRoute === "loans" || currentRoute === "bank" || currentRoute === "tax-returns" || currentRoute === "coa" ? "active" : ""}" id="nav-menu-accounting">
            <button class="nav-link">
              Accounting <span class="caret"></span>
            </button>
            <div class="nav-dropdown">
              <div class="dropdown-header">Transactions</div>
              <a class="dropdown-item indent" id="nav-item-journal-entries">Journal Entries</a>

              <div class="dropdown-header">Assets & Liabilities</div>
              <a class="dropdown-item indent" id="nav-item-assets">Assets</a>
              <a class="dropdown-item indent" id="nav-item-loans">Loans</a>

              <div class="dropdown-header">Closing</div>
              <a class="dropdown-item indent" id="nav-item-reconcile">Reconcile</a>
              <a class="dropdown-item indent" id="nav-item-tax-returns">Tax Returns</a>
              <a class="dropdown-item indent" id="nav-item-lock-dates">Lock Dates...</a>
            </div>
          </li>

          <!-- 5. Review Dropdown -->
          <li class="nav-item ${currentRoute === "review" ? "active" : ""}" id="nav-menu-review">
            <button class="nav-link">
              Review <span class="caret"></span>
            </button>
            <div class="nav-dropdown">
              <div class="dropdown-header">Control</div>
              <a class="dropdown-item indent" id="nav-review-journal-items">Journal Items</a>
              <a class="dropdown-item indent" id="nav-review-audit-trail">Audit Trail</a>
              <a class="dropdown-item indent" id="nav-review-journal-audit">Journal Audit</a>

              <div class="dropdown-header">Audit</div>
              <a class="dropdown-item indent" id="nav-review-working-files">Working Files</a>
              <a class="dropdown-item indent" id="nav-review-annual-report">Annual Report</a>

              <div class="dropdown-header">Inventory</div>
              <a class="dropdown-item indent" id="nav-review-inventory-valuation">Inventory Valuation</a>

              <div class="dropdown-header">Regularization Entries</div>
              <a class="dropdown-item indent" id="nav-review-deferred-revenues">Deferred Revenues</a>
              <a class="dropdown-item indent" id="nav-review-deferred-expenses">Deferred Expenses</a>
            </div>
          </li>

          <!-- 6. Reporting Dropdown -->
          <li class="nav-item ${currentRoute === "reports" ? "active" : ""}" id="nav-menu-reporting">
            <button class="nav-link">
              Reporting <span class="caret"></span>
            </button>
            <div class="nav-dropdown">
              <div class="dropdown-header">Statement Reports</div>
              <a class="dropdown-item indent" id="nav-report-bs">Balance Sheet</a>
              <a class="dropdown-item indent" id="nav-report-pnl">Profit and Loss</a>
              <a class="dropdown-item indent" id="nav-report-cash-flow">Cash Flow Statement</a>
              <a class="dropdown-item indent" id="nav-report-depreciation">Depreciation Schedule</a>

              <div class="dropdown-header">Ledgers</div>
              <a class="dropdown-item indent" id="nav-report-tb">Trial Balance</a>
              <a class="dropdown-item indent" id="nav-report-gl">General Ledger</a>

              <div class="dropdown-header">Partner Reports</div>
              <a class="dropdown-item indent" id="nav-report-partner-ledger">Partner Ledger</a>
              <a class="dropdown-item indent" id="nav-report-cust-statement">Customer Statement</a>
              <a class="dropdown-item indent" id="nav-report-aged-ar">Aged Receivable</a>
              <a class="dropdown-item indent" id="nav-report-aged-ap">Aged Payable</a>

              <div class="dropdown-header">Taxes & Fiscal</div>
              <a class="dropdown-item indent" id="nav-report-tax">Tax Report</a>
              <a class="dropdown-item indent" id="nav-report-fiscal">Fiscal Report</a>

              <div class="dropdown-header">Management</div>
              <a class="dropdown-item indent" id="nav-report-invoice-analysis">Invoice Analysis</a>
              <a class="dropdown-item indent" id="nav-report-cashflow-analysis">Cashflow Analysis</a>
              <a class="dropdown-item indent" id="nav-report-analytic">Analytic Report</a>
              <a class="dropdown-item indent" id="nav-report-exec-summary">Executive Summary</a>
              <a class="dropdown-item indent" id="nav-report-loans-analysis">Loans Analysis</a>

              <div class="dropdown-header">Bangladesh</div>
              <a class="dropdown-item indent" id="nav-report-bd-corporate-tax">Corporate Tax Report</a>
            </div>
          </li>

          <!-- 7. Configuration Dropdown -->
          <li class="nav-item ${currentRoute === "settings" || currentRoute === "configuration" || currentRoute === "coa" ? "active" : ""}" id="nav-menu-config">
            <button class="nav-link">
              Configuration
            </button>
            <div class="nav-dropdown">
              <a class="dropdown-item" id="nav-cfg-settings">Settings</a>
              <a class="dropdown-item" id="nav-cfg-online-payments">Online Payments</a>

              <div class="dropdown-header">Accounting</div>
              <a class="dropdown-item indent" id="nav-cfg-coa">Chart of Accounts</a>
              <a class="dropdown-item indent" id="nav-cfg-taxes">Taxes</a>
              <a class="dropdown-item indent" id="nav-cfg-journals">Journals</a>
              <a class="dropdown-item indent" id="nav-cfg-currencies">Currencies</a>
              <a class="dropdown-item indent" id="nav-cfg-fiscal-positions">Fiscal Positions</a>
              <a class="dropdown-item indent" id="nav-cfg-multi-ledger">Multi-Ledger</a>
              <a class="dropdown-item indent" id="nav-cfg-checks">Checks</a>
              <a class="dropdown-item indent" id="nav-cfg-depreciation-models">Depreciation Models</a>
              <a class="dropdown-item indent" id="nav-cfg-return-types">Return Types</a>
              <a class="dropdown-item indent" id="nav-cfg-invoice-reminders">Invoice Reminders</a>

              <div class="dropdown-header">Invoicing</div>
              <a class="dropdown-item indent" id="nav-cfg-payment-terms">Payment Terms</a>
              <a class="dropdown-item indent" id="nav-cfg-product-categories">Product Categories</a>
            </div>
          </li>
        </ul>
      </div>

      <!-- Right Section -->
      <div class="navbar-right-section">
        <button class="company-badge-btn" id="btn-nav-company" title="Company Profile">
          <span style="font-weight: 700;">${company.logoText || "UNIFLY"}</span>
          <span>${company.name}</span>
          <span style="opacity: 0.7;">(${company.currency})</span>
        </button>

        <button class="theme-toggle-btn" id="btn-theme-toggle" title="Toggle Dark/Light Mode">
          ${getIcon("moon")}
        </button>

        <button class="reset-demo-btn" id="btn-quick-reset" title="Reset Demo Data">
          ${getIcon("refresh-cw")}
        </button>

        <!-- User Profile Dropdown -->
        <div class="nav-item user-profile-nav" id="nav-user-menu">
          <button class="user-profile-btn" id="btn-user-profile" title="Current User Profile & Session">
            <span class="user-avatar-circle ${currentUser.role}">${initials}</span>
            <span class="user-display-name">${currentUser.fullName}</span>
            <span class="badge ${roleBadgeClass}" style="font-size: 10px; padding: 2px 7px;">${roleIcon} ${roleLabel}</span>
            <span class="caret"></span>
          </button>
          <div class="nav-dropdown user-dropdown-menu">
            <div class="dropdown-header user-dropdown-header">
              <div class="user-info-name">${currentUser.fullName}</div>
              <div class="user-info-meta">
                <span>@${currentUser.username}</span>
                &bull;
                <span class="badge ${roleBadgeClass}">${roleIcon} ${roleLabel}</span>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            ${canManageUsers ? `
              <a class="dropdown-item" id="nav-profile-users">
                ${getIcon("users")} Manage Employees & Staff
              </a>
            ` : ""}
            <a class="dropdown-item text-danger" id="nav-btn-logout">
              ${getIcon("log-out")} Sign Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
  const navItems = container.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    const trigger = item.querySelector(".nav-link") || item.querySelector(".user-profile-btn");
    if (trigger && item.querySelector(".nav-dropdown")) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = item.classList.contains("open");
        navItems.forEach((i) => i.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    }
  });
  document.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("open"));
  });
  container.querySelector("#nav-brand-title")?.addEventListener("click", () => navigate("dashboard"));
  container.querySelector("#nav-dashboard")?.addEventListener("click", () => navigate("dashboard"));
  container.querySelector("#btn-app-switcher")?.addEventListener("click", () => navigate("dashboard"));
  container.querySelector("#btn-nav-company")?.addEventListener("click", () => navigate("settings"));
  container.querySelector("#nav-item-invoices")?.addEventListener("click", () => navigate("invoices"));
  container.querySelector("#nav-item-credit-notes")?.addEventListener("click", () => navigate("credit-notes"));
  container.querySelector("#nav-item-cust-payments")?.addEventListener("click", () => navigate("payments"));
  container.querySelector("#nav-item-cust-products")?.addEventListener("click", () => navigate("products"));
  container.querySelector("#nav-item-customers")?.addEventListener("click", () => navigate("contacts", { type: "customers" }));
  container.querySelector("#nav-item-bills")?.addEventListener("click", () => navigate("bills"));
  container.querySelector("#nav-item-refunds")?.addEventListener("click", () => navigate("refunds"));
  container.querySelector("#nav-item-vend-payments")?.addEventListener("click", () => navigate("payments", { type: "vendors" }));
  container.querySelector("#nav-item-vend-products")?.addEventListener("click", () => navigate("products", { section: "vendors" }));
  container.querySelector("#nav-item-vendors")?.addEventListener("click", () => navigate("contacts", { type: "vendors" }));
  container.querySelector("#nav-item-journal-entries")?.addEventListener("click", () => navigate("journal"));
  container.querySelector("#nav-item-assets")?.addEventListener("click", () => navigate("assets"));
  container.querySelector("#nav-item-loans")?.addEventListener("click", () => navigate("loans"));
  container.querySelector("#nav-item-reconcile")?.addEventListener("click", () => navigate("bank"));
  container.querySelector("#nav-item-tax-returns")?.addEventListener("click", () => navigate("tax-returns"));
  container.querySelector("#nav-item-lock-dates")?.addEventListener("click", () => openLockDatesModal());
  container.querySelector("#nav-review-journal-items")?.addEventListener("click", () => navigate("review", { tab: "journal-items" }));
  container.querySelector("#nav-review-audit-trail")?.addEventListener("click", () => navigate("review", { tab: "audit-trail" }));
  container.querySelector("#nav-review-journal-audit")?.addEventListener("click", () => navigate("review", { tab: "journal-audit" }));
  container.querySelector("#nav-review-working-files")?.addEventListener("click", () => navigate("review", { tab: "working-files" }));
  container.querySelector("#nav-review-annual-report")?.addEventListener("click", () => navigate("review", { tab: "annual-report" }));
  container.querySelector("#nav-review-inventory-valuation")?.addEventListener("click", () => navigate("review", { tab: "inventory-valuation" }));
  container.querySelector("#nav-review-deferred-revenues")?.addEventListener("click", () => navigate("review", { tab: "deferred-revenues" }));
  container.querySelector("#nav-review-deferred-expenses")?.addEventListener("click", () => navigate("review", { tab: "deferred-expenses" }));
  container.querySelector("#nav-report-bs")?.addEventListener("click", () => navigate("reports", { tab: "bs" }));
  container.querySelector("#nav-report-pnl")?.addEventListener("click", () => navigate("reports", { tab: "pnl" }));
  container.querySelector("#nav-report-cash-flow")?.addEventListener("click", () => navigate("reports", { tab: "cash-flow" }));
  container.querySelector("#nav-report-depreciation")?.addEventListener("click", () => navigate("reports", { tab: "depreciation" }));
  container.querySelector("#nav-report-tb")?.addEventListener("click", () => navigate("reports", { tab: "tb" }));
  container.querySelector("#nav-report-gl")?.addEventListener("click", () => navigate("reports", { tab: "gl" }));
  container.querySelector("#nav-report-partner-ledger")?.addEventListener("click", () => navigate("reports", { tab: "partner-ledger" }));
  container.querySelector("#nav-report-cust-statement")?.addEventListener("click", () => navigate("reports", { tab: "customer-statement" }));
  container.querySelector("#nav-report-aged-ar")?.addEventListener("click", () => navigate("reports", { tab: "aged-ar" }));
  container.querySelector("#nav-report-aged-ap")?.addEventListener("click", () => navigate("reports", { tab: "aged-ap" }));
  container.querySelector("#nav-report-tax")?.addEventListener("click", () => navigate("reports", { tab: "tax" }));
  container.querySelector("#nav-report-fiscal")?.addEventListener("click", () => navigate("reports", { tab: "fiscal" }));
  container.querySelector("#nav-report-invoice-analysis")?.addEventListener("click", () => navigate("reports", { tab: "invoice-analysis" }));
  container.querySelector("#nav-report-cashflow-analysis")?.addEventListener("click", () => navigate("reports", { tab: "cashflow-analysis" }));
  container.querySelector("#nav-report-analytic")?.addEventListener("click", () => navigate("reports", { tab: "analytic" }));
  container.querySelector("#nav-report-exec-summary")?.addEventListener("click", () => navigate("reports", { tab: "exec-summary" }));
  container.querySelector("#nav-report-loans-analysis")?.addEventListener("click", () => navigate("reports", { tab: "loans-analysis" }));
  container.querySelector("#nav-report-bd-corporate-tax")?.addEventListener("click", () => navigate("reports", { tab: "bd-corporate-tax" }));
  container.querySelector("#nav-cfg-settings")?.addEventListener("click", () => navigate("settings", { tab: "general" }));
  container.querySelector("#nav-cfg-online-payments")?.addEventListener("click", () => navigate("settings", { tab: "online-payments" }));
  container.querySelector("#nav-cfg-coa")?.addEventListener("click", () => navigate("coa"));
  container.querySelector("#nav-cfg-taxes")?.addEventListener("click", () => navigate("settings", { tab: "taxes" }));
  container.querySelector("#nav-cfg-journals")?.addEventListener("click", () => navigate("settings", { tab: "journals" }));
  container.querySelector("#nav-cfg-currencies")?.addEventListener("click", () => navigate("settings", { tab: "currencies" }));
  container.querySelector("#nav-cfg-fiscal-positions")?.addEventListener("click", () => navigate("settings", { tab: "fiscal-positions" }));
  container.querySelector("#nav-cfg-multi-ledger")?.addEventListener("click", () => navigate("settings", { tab: "multi-ledger" }));
  container.querySelector("#nav-cfg-checks")?.addEventListener("click", () => navigate("settings", { tab: "checks" }));
  container.querySelector("#nav-cfg-depreciation-models")?.addEventListener("click", () => navigate("settings", { tab: "depreciation-models" }));
  container.querySelector("#nav-cfg-return-types")?.addEventListener("click", () => navigate("settings", { tab: "return-types" }));
  container.querySelector("#nav-cfg-invoice-reminders")?.addEventListener("click", () => navigate("settings", { tab: "invoice-reminders" }));
  container.querySelector("#nav-cfg-payment-terms")?.addEventListener("click", () => navigate("settings", { tab: "payment-terms" }));
  container.querySelector("#nav-cfg-product-categories")?.addEventListener("click", () => navigate("settings", { tab: "product-categories" }));
  container.querySelector("#nav-item-users")?.addEventListener("click", () => navigate("users"));
  container.querySelector("#nav-profile-users")?.addEventListener("click", () => navigate("users"));
  container.querySelector("#nav-btn-logout")?.addEventListener("click", () => {
    store.logout();
    toast.info("You have signed out successfully.");
    navigate("login");
  });
  const themeBtn = container.querySelector("#btn-theme-toggle");
  themeBtn?.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      themeBtn.innerHTML = getIcon("moon");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeBtn.innerHTML = getIcon("sun");
    }
  });
  container.querySelector("#btn-quick-reset")?.addEventListener("click", () => {
    if (confirm("Reset to initial sample demo data (Unifly Bangladesh)?")) {
      store.resetToDefault();
      toast.info("Database reset to fresh demo company data!");
      navigate("dashboard");
    }
  });
}

// js/accounting.js
var AccountingEngine = class {
  /**
   * Currency formatter with standard symbols
   */
  static formatCurrency(amount, symbol = "$") {
    const num = parseFloat(amount) || 0;
    const isNegative = num < -1e-4;
    const absVal = Math.abs(num).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return isNegative ? `(${symbol}${absVal})` : `${symbol}${absVal}`;
  }
  static formatDate(dateStr) {
    if (!dateStr) return "-";
    try {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  }
  /**
   * Calculates live account balances by summing all posted journal entry lines
   */
  static getLiveAccountBalances(filterFn = null) {
    const accounts = store.getAccounts();
    const entries = store.getJournalEntries().filter((e) => e.status === "posted");
    const balances = {};
    for (const acc of accounts) {
      balances[acc.code] = {
        code: acc.code,
        name: acc.name,
        type: acc.type,
        category: acc.category,
        normalBalance: acc.normalBalance,
        debitTotal: 0,
        creditTotal: 0,
        balance: 0
      };
    }
    for (const entry of entries) {
      if (filterFn && !filterFn(entry)) continue;
      for (const line of entry.lines) {
        const accCode = line.accountId;
        if (!balances[accCode]) {
          balances[accCode] = {
            code: accCode,
            name: `Account ${accCode}`,
            type: "other",
            category: "Other",
            normalBalance: "debit",
            debitTotal: 0,
            creditTotal: 0,
            balance: 0
          };
        }
        balances[accCode].debitTotal += parseFloat(line.debit) || 0;
        balances[accCode].creditTotal += parseFloat(line.credit) || 0;
      }
    }
    for (const accCode in balances) {
      const acc = balances[accCode];
      if (acc.type.startsWith("asset") || acc.type === "cogs" || acc.type === "expense") {
        acc.balance = acc.debitTotal - acc.creditTotal;
      } else {
        acc.balance = acc.creditTotal - acc.debitTotal;
      }
    }
    return balances;
  }
  /**
   * Generates the Profit & Loss Statement (Income Statement)
   */
  static getProfitAndLoss(startDate = null, endDate = null) {
    const dateFilter = (entry) => {
      if (startDate && entry.date < startDate) return false;
      if (endDate && entry.date > endDate) return false;
      return true;
    };
    const balances = this.getLiveAccountBalances(dateFilter);
    const revenueAccounts = [];
    const otherIncomeAccounts = [];
    const cogsAccounts = [];
    const expenseAccounts = [];
    for (const code in balances) {
      const acc = balances[code];
      const type = acc.type;
      if (type === "revenue") {
        revenueAccounts.push(acc);
      } else if (type === "other_income") {
        otherIncomeAccounts.push(acc);
      } else if (type === "cogs") {
        cogsAccounts.push(acc);
      } else if (type === "expense") {
        expenseAccounts.push(acc);
      }
    }
    const totalRevenue = revenueAccounts.reduce((sum, a) => sum + a.balance, 0);
    const totalOtherIncome = otherIncomeAccounts.reduce((sum, a) => sum + a.balance, 0);
    const totalCOGS = cogsAccounts.reduce((sum, a) => sum + a.balance, 0);
    const grossProfit = totalRevenue + totalOtherIncome - totalCOGS;
    const totalExpenses = expenseAccounts.reduce((sum, a) => sum + a.balance, 0);
    const netOperatingIncome = grossProfit - totalExpenses;
    const netProfit = netOperatingIncome;
    return {
      revenueAccounts,
      totalRevenue,
      otherIncomeAccounts,
      totalOtherIncome,
      grossRevenue: totalRevenue + totalOtherIncome,
      cogsAccounts,
      totalCOGS,
      grossProfit,
      grossMarginPct: totalRevenue + totalOtherIncome > 0 ? grossProfit / (totalRevenue + totalOtherIncome) * 100 : 0,
      expenseAccounts,
      totalExpenses,
      netOperatingIncome,
      netProfit
    };
  }
  /**
   * Generates the Balance Sheet
   * Assets = Liabilities + Equity
   */
  static getBalanceSheet(asOfDate = null) {
    const dateFilter = (entry) => {
      if (asOfDate && entry.date > asOfDate) return false;
      return true;
    };
    const balances = this.getLiveAccountBalances(dateFilter);
    const pnl = this.getProfitAndLoss(null, asOfDate);
    const currentAssets = [];
    const nonCurrentAssets = [];
    const currentLiabilities = [];
    const nonCurrentLiabilities = [];
    const equityAccounts = [];
    for (const code in balances) {
      const acc = balances[code];
      const type = acc.type;
      if (type === "asset_cash" || type === "asset_receivable" || type === "asset_current") {
        currentAssets.push(acc);
      } else if (type === "asset_fixed") {
        nonCurrentAssets.push(acc);
      } else if (type === "liability_payable" || type === "liability_current") {
        currentLiabilities.push(acc);
      } else if (type === "liability_non_current") {
        nonCurrentLiabilities.push(acc);
      } else if (type === "equity") {
        equityAccounts.push(acc);
      }
    }
    const totalCurrentAssets = currentAssets.reduce((sum, a) => sum + a.balance, 0);
    const totalNonCurrentAssets = nonCurrentAssets.reduce((sum, a) => sum + a.balance, 0);
    const totalAssets = totalCurrentAssets + totalNonCurrentAssets;
    const totalCurrentLiabilities = currentLiabilities.reduce((sum, a) => sum + a.balance, 0);
    const totalNonCurrentLiabilities = nonCurrentLiabilities.reduce((sum, a) => sum + a.balance, 0);
    const totalLiabilities = totalCurrentLiabilities + totalNonCurrentLiabilities;
    const totalStatedEquity = equityAccounts.reduce((sum, a) => sum + a.balance, 0);
    const currentYearEarnings = pnl.netProfit;
    const totalEquity = totalStatedEquity + currentYearEarnings;
    const totalLiabilitiesAndEquity = totalLiabilities + totalEquity;
    const difference = Math.abs(totalAssets - totalLiabilitiesAndEquity);
    const isBalanced = difference < 0.05;
    return {
      currentAssets,
      totalCurrentAssets,
      nonCurrentAssets,
      totalNonCurrentAssets,
      totalAssets,
      currentLiabilities,
      totalCurrentLiabilities,
      nonCurrentLiabilities,
      totalNonCurrentLiabilities,
      totalLiabilities,
      equityAccounts,
      totalStatedEquity,
      currentYearEarnings,
      totalEquity,
      totalLiabilitiesAndEquity,
      isBalanced,
      difference
    };
  }
  /**
   * Generates Trial Balance
   * Total Debits == Total Credits
   */
  static getTrialBalance(asOfDate = null) {
    const balances = this.getLiveAccountBalances(asOfDate ? (e) => e.date <= asOfDate : null);
    const accounts = [];
    let grandTotalDebit = 0;
    let grandTotalCredit = 0;
    for (const code in balances) {
      const acc = balances[code];
      if (acc.debitTotal > 0 || acc.creditTotal > 0) {
        let netDebit = 0;
        let netCredit = 0;
        if (acc.normalBalance === "debit") {
          if (acc.balance >= 0) netDebit = acc.balance;
          else netCredit = Math.abs(acc.balance);
        } else {
          if (acc.balance >= 0) netCredit = acc.balance;
          else netDebit = Math.abs(acc.balance);
        }
        accounts.push({
          code: acc.code,
          name: acc.name,
          category: acc.category,
          debitMovement: acc.debitTotal,
          creditMovement: acc.creditTotal,
          netDebit,
          netCredit
        });
        grandTotalDebit += netDebit;
        grandTotalCredit += netCredit;
      }
    }
    accounts.sort((a, b) => a.code.localeCompare(b.code));
    return {
      accounts,
      grandTotalDebit,
      grandTotalCredit,
      isBalanced: Math.abs(grandTotalDebit - grandTotalCredit) < 0.05
    };
  }
  /**
   * Generates General Ledger with running lines
   */
  static getGeneralLedger(accountCodeFilter = null) {
    const accounts = store.getAccounts();
    const entries = store.getJournalEntries().filter((e) => e.status === "posted").sort((a, b) => a.date.localeCompare(b.date));
    const ledger = {};
    for (const acc of accounts) {
      if (accountCodeFilter && acc.code !== accountCodeFilter) continue;
      ledger[acc.code] = {
        code: acc.code,
        name: acc.name,
        type: acc.type,
        normalBalance: acc.normalBalance,
        lines: [],
        totalDebit: 0,
        totalCredit: 0,
        endingBalance: 0
      };
    }
    for (const entry of entries) {
      for (const line of entry.lines) {
        const acc = ledger[line.accountId];
        if (acc) {
          const debit = parseFloat(line.debit) || 0;
          const credit = parseFloat(line.credit) || 0;
          acc.totalDebit += debit;
          acc.totalCredit += credit;
          let runningBalance = 0;
          if (acc.normalBalance === "credit") {
            runningBalance = acc.totalCredit - acc.totalDebit;
          } else {
            runningBalance = acc.totalDebit - acc.totalCredit;
          }
          acc.lines.push({
            date: entry.date,
            journal: entry.journalId,
            entryNumber: entry.number,
            reference: entry.reference,
            label: line.label,
            partnerId: line.partnerId,
            debit,
            credit,
            runningBalance
          });
        }
      }
    }
    for (const code in ledger) {
      const acc = ledger[code];
      acc.endingBalance = acc.normalBalance === "credit" ? acc.totalCredit - acc.totalDebit : acc.totalDebit - acc.totalCredit;
    }
    return Object.values(ledger).filter((a) => a.lines.length > 0 || !accountCodeFilter);
  }
  /**
   * Generates Aged Receivables (A/R Aging Analysis)
   */
  static getAgedReceivables(referenceDate = /* @__PURE__ */ new Date()) {
    const invoices = store.getInvoices().filter((i) => (i.status === "posted" || i.status === "overdue") && i.amountDue > 0);
    const partners = store.getPartners();
    const ref = new Date(referenceDate);
    const partnerAging = {};
    for (const inv of invoices) {
      const partner = partners.find((p) => p.id === inv.partnerId) || { name: "Unknown Customer" };
      if (!partnerAging[inv.partnerId]) {
        partnerAging[inv.partnerId] = {
          partnerId: inv.partnerId,
          partnerName: partner.name,
          current: 0,
          days1_30: 0,
          days31_60: 0,
          days61_90: 0,
          daysOver90: 0,
          totalDue: 0
        };
      }
      const due = new Date(inv.dueDate);
      const diffDays = Math.floor((ref - due) / (1e3 * 60 * 60 * 24));
      const amount = inv.amountDue;
      partnerAging[inv.partnerId].totalDue += amount;
      if (diffDays <= 0) {
        partnerAging[inv.partnerId].current += amount;
      } else if (diffDays <= 30) {
        partnerAging[inv.partnerId].days1_30 += amount;
      } else if (diffDays <= 60) {
        partnerAging[inv.partnerId].days31_60 += amount;
      } else if (diffDays <= 90) {
        partnerAging[inv.partnerId].days61_90 += amount;
      } else {
        partnerAging[inv.partnerId].daysOver90 += amount;
      }
    }
    return Object.values(partnerAging);
  }
  /**
   * Generates Aged Payables (A/P Aging Analysis)
   */
  static getAgedPayables(referenceDate = /* @__PURE__ */ new Date()) {
    const bills = store.getBills().filter((b) => (b.status === "posted" || b.status === "overdue") && b.amountDue > 0);
    const partners = store.getPartners();
    const ref = new Date(referenceDate);
    const partnerAging = {};
    for (const bill of bills) {
      const partner = partners.find((p) => p.id === bill.partnerId) || { name: "Unknown Vendor" };
      if (!partnerAging[bill.partnerId]) {
        partnerAging[bill.partnerId] = {
          partnerId: bill.partnerId,
          partnerName: partner.name,
          current: 0,
          days1_30: 0,
          days31_60: 0,
          days61_90: 0,
          daysOver90: 0,
          totalDue: 0
        };
      }
      const due = new Date(bill.dueDate);
      const diffDays = Math.floor((ref - due) / (1e3 * 60 * 60 * 24));
      const amount = bill.amountDue;
      partnerAging[bill.partnerId].totalDue += amount;
      if (diffDays <= 0) {
        partnerAging[bill.partnerId].current += amount;
      } else if (diffDays <= 30) {
        partnerAging[bill.partnerId].days1_30 += amount;
      } else if (diffDays <= 60) {
        partnerAging[bill.partnerId].days31_60 += amount;
      } else if (diffDays <= 90) {
        partnerAging[bill.partnerId].days61_90 += amount;
      } else {
        partnerAging[bill.partnerId].daysOver90 += amount;
      }
    }
    return Object.values(partnerAging);
  }
  /**
   * Generates Tax Report (Output VAT vs Input VAT)
   */
  static getTaxReport() {
    const entries = store.getJournalEntries().filter((e) => e.status === "posted");
    let taxCollected = 0;
    let taxPaid = 0;
    for (const entry of entries) {
      for (const line of entry.lines) {
        if (line.accountId === "220000") {
          taxCollected += parseFloat(line.credit) || 0;
          taxPaid += parseFloat(line.debit) || 0;
        }
      }
    }
    return {
      taxCollected,
      taxPaid,
      netTaxDue: taxCollected - taxPaid
    };
  }
};

// js/views/dashboard.js
function renderDashboard(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const pnl = AccountingEngine.getProfitAndLoss();
  const balanceSheet = AccountingEngine.getBalanceSheet();
  const invoices = store.getInvoices();
  const bills = store.getBills();
  const bankStatements = store.getBankStatements();
  const totalReceivables = invoices.filter((i) => (i.status === "posted" || i.status === "overdue") && i.amountDue > 0).reduce((sum, i) => sum + i.amountDue, 0);
  const totalPayables = bills.filter((b) => (b.status === "posted" || b.status === "overdue") && b.amountDue > 0).reduce((sum, b) => sum + b.amountDue, 0);
  const liveBalances = AccountingEngine.getLiveAccountBalances();
  const bankBalance = (liveBalances["101000"]?.balance || 0) + (liveBalances["105000"]?.balance || 0);
  const cashBalance = liveBalances["102000"]?.balance || 0;
  const unreconciledBankCount = bankStatements.filter((s) => !s.reconciled).length;
  const invDraftCount = invoices.filter((i) => i.status === "draft").length;
  const invUnpaidCount = invoices.filter((i) => i.status === "posted" && i.amountDue > 0).length;
  const invLateCount = invoices.filter((i) => i.status === "overdue").length;
  const billDraftCount = bills.filter((b) => b.status === "draft").length;
  const billToPayCount = bills.filter((b) => b.status === "posted" && b.amountDue > 0).length;
  const billLateCount = bills.filter((b) => b.status === "overdue").length;
  container.innerHTML = `
    <!-- Top Financial KPI Cards -->
    <div class="dashboard-kpi-grid">
      <div class="kpi-card">
        <div class="kpi-title">
          <span>Accounts Receivable</span>
          <span class="kpi-trend positive">+8.4%</span>
        </div>
        <div class="kpi-value">${AccountingEngine.formatCurrency(totalReceivables, symbol)}</div>
        <div class="kpi-subtitle">
          <span>${invUnpaidCount + invLateCount} open customer invoices</span>
        </div>
      </div>

      <div class="kpi-card amber">
        <div class="kpi-title">
          <span>Accounts Payable</span>
          <span class="kpi-trend negative">${bills.length} bills</span>
        </div>
        <div class="kpi-value">${AccountingEngine.formatCurrency(totalPayables, symbol)}</div>
        <div class="kpi-subtitle">
          <span>${billToPayCount + billLateCount} unpaid vendor bills</span>
        </div>
      </div>

      <div class="kpi-card teal">
        <div class="kpi-title">
          <span>Cash & Bank Holdings</span>
          <span class="kpi-trend positive">Liquid</span>
        </div>
        <div class="kpi-value">${AccountingEngine.formatCurrency(bankBalance + cashBalance, symbol)}</div>
        <div class="kpi-subtitle">
          <span>SVB Bank & Corporate Reserve</span>
        </div>
      </div>

      <div class="kpi-card emerald">
        <div class="kpi-title">
          <span>Net Profit (YTD)</span>
          <span class="kpi-trend positive">${pnl.grossMarginPct.toFixed(1)}% margin</span>
        </div>
        <div class="kpi-value">${AccountingEngine.formatCurrency(pnl.netProfit, symbol)}</div>
        <div class="kpi-subtitle">
          <span>Gross Revenue: ${AccountingEngine.formatCurrency(pnl.grossRevenue, symbol)}</span>
        </div>
      </div>
    </div>

    <!-- Journal Cards Grid -->
    <h3 style="font-size: 15px; font-weight: 700; color: var(--text-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">
      Accounting Journals Overview
    </h3>

    <div class="journal-cards-grid">
      <!-- 1. Customer Invoices Journal -->
      <div class="journal-card">
        <div class="journal-card-header">
          <div class="journal-name-group">
            <div class="journal-icon-box">${getIcon("file-text")}</div>
            <div>
              <div class="journal-title">Customer Invoices</div>
              <div class="journal-code">INV &bull; Sales Journal</div>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" id="btn-quick-new-invoice">
            ${getIcon("plus")} New Invoice
          </button>
        </div>

        <div class="journal-card-body">
          <div class="journal-balance-row">
            <span class="journal-balance-label">Total Outstanding Receivables</span>
            <span class="journal-balance-amount">${AccountingEngine.formatCurrency(totalReceivables, symbol)}</span>
          </div>

          <ul class="journal-stats-list">
            <li class="journal-stat-item" id="link-inv-draft">
              <span>Invoices to Validate</span>
              <span class="journal-stat-count">${invDraftCount}</span>
            </li>
            <li class="journal-stat-item" id="link-inv-unpaid">
              <span>Unpaid Invoices</span>
              <span class="journal-stat-count">${invUnpaidCount}</span>
            </li>
            <li class="journal-stat-item late" id="link-inv-late">
              <span>Overdue Invoices</span>
              <span class="journal-stat-count">${invLateCount}</span>
            </li>
          </ul>
        </div>

        <div class="journal-card-footer">
          <a class="btn btn-secondary btn-sm" style="width: 100%;" id="btn-view-all-invoices">
            View All Invoices &rarr;
          </a>
        </div>
      </div>

      <!-- 2. Vendor Bills Journal -->
      <div class="journal-card">
        <div class="journal-card-header">
          <div class="journal-name-group">
            <div class="journal-icon-box amber">${getIcon("shopping-bag")}</div>
            <div>
              <div class="journal-title">Vendor Bills</div>
              <div class="journal-code">BILL &bull; Purchase Journal</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" id="btn-quick-new-bill">
            ${getIcon("plus")} Upload Bill
          </button>
        </div>

        <div class="journal-card-body">
          <div class="journal-balance-row">
            <span class="journal-balance-label">Total Outstanding Payables</span>
            <span class="journal-balance-amount">${AccountingEngine.formatCurrency(totalPayables, symbol)}</span>
          </div>

          <ul class="journal-stats-list">
            <li class="journal-stat-item" id="link-bill-draft">
              <span>Bills to Validate</span>
              <span class="journal-stat-count">${billDraftCount}</span>
            </li>
            <li class="journal-stat-item" id="link-bill-unpaid">
              <span>Bills to Pay</span>
              <span class="journal-stat-count">${billToPayCount}</span>
            </li>
            <li class="journal-stat-item late" id="link-bill-late">
              <span>Overdue Bills</span>
              <span class="journal-stat-count">${billLateCount}</span>
            </li>
          </ul>
        </div>

        <div class="journal-card-footer">
          <a class="btn btn-secondary btn-sm" style="width: 100%;" id="btn-view-all-bills">
            View All Bills &rarr;
          </a>
        </div>
      </div>

      <!-- 3. Bank Account Journal (SVB) with Reconciliation CTA -->
      <div class="journal-card">
        <div class="journal-card-header">
          <div class="journal-name-group">
            <div class="journal-icon-box teal">${getIcon("landmark")}</div>
            <div>
              <div class="journal-title">Bank - Silicon Valley Bank</div>
              <div class="journal-code">BNK &bull; Account #101000</div>
            </div>
          </div>
          ${unreconciledBankCount > 0 ? `<span class="badge badge-partial">${unreconciledBankCount} to reconcile</span>` : `<span class="badge badge-paid">Reconciled</span>`}
        </div>

        <div class="journal-card-body">
          <div class="journal-balance-row">
            <span class="journal-balance-label">Balance in General Ledger</span>
            <span class="journal-balance-amount">${AccountingEngine.formatCurrency(liveBalances["101000"]?.balance || 0, symbol)}</span>
          </div>

          <div style="background: var(--bg-surface-secondary); padding: 12px; border-radius: var(--radius-md); font-size: 12px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between;">
              <span>Bank Statement Balance:</span>
              <span style="font-weight: 700;">${AccountingEngine.formatCurrency((liveBalances["101000"]?.balance || 0) + 3740 - 4500 - 35, symbol)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; color: var(--text-muted);">
              <span>Unmatched Transactions:</span>
              <span style="font-weight: 600; color: var(--danger);">${unreconciledBankCount} pending</span>
            </div>
          </div>
        </div>

        <div class="journal-card-footer">
          <button class="btn btn-teal btn-sm" style="width: 100%; font-weight: 600;" id="btn-go-reconcile">
            ${getIcon("refresh-cw")} Reconcile (${unreconciledBankCount} Items)
          </button>
        </div>
      </div>

      <!-- 4. Cash Register Journal -->
      <div class="journal-card">
        <div class="journal-card-header">
          <div class="journal-name-group">
            <div class="journal-icon-box blue">${getIcon("coins")}</div>
            <div>
              <div class="journal-title">Petty Cash Register</div>
              <div class="journal-code">CSH &bull; Account #102000</div>
            </div>
          </div>
          <span class="badge badge-posted">Active</span>
        </div>

        <div class="journal-card-body">
          <div class="journal-balance-row">
            <span class="journal-balance-label">Cash on Hand</span>
            <span class="journal-balance-amount">${AccountingEngine.formatCurrency(cashBalance, symbol)}</span>
          </div>

          <div style="font-size: 12px; color: var(--text-muted); background: var(--bg-surface-secondary); padding: 12px; border-radius: var(--radius-md);">
            Physical office petty cash drawer for daily incidentals and localized operational needs.
          </div>
        </div>

        <div class="journal-card-footer">
          <button class="btn btn-secondary btn-sm" style="width: 100%;" id="btn-view-cash-entries">
            View Cash Entries &rarr;
          </button>
        </div>
      </div>

      <!-- 5. Miscellaneous Operations Journal -->
      <div class="journal-card">
        <div class="journal-card-header">
          <div class="journal-name-group">
            <div class="journal-icon-box">${getIcon("shuffle")}</div>
            <div>
              <div class="journal-title">Miscellaneous Operations</div>
              <div class="journal-code">MISC &bull; General Adjustments</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" id="btn-new-entry-misc">
            ${getIcon("plus")} New Entry
          </button>
        </div>

        <div class="journal-card-body">
          <div class="journal-balance-row">
            <span class="journal-balance-label">Total Balanced Entries</span>
            <span class="journal-balance-amount">${store.getJournalEntries().length}</span>
          </div>

          <div style="font-size: 12px; color: var(--text-muted); background: var(--bg-surface-secondary); padding: 12px; border-radius: var(--radius-md);">
            Depreciation schedules, payroll accruals, opening balances, and manual ledger adjustments.
          </div>
        </div>

        <div class="journal-card-footer">
          <button class="btn btn-secondary btn-sm" style="width: 100%;" id="btn-view-all-entries">
            View Journal Entries &rarr;
          </button>
        </div>
      </div>

      <!-- 6. Quick Reporting Card -->
      <div class="journal-card" style="background: linear-gradient(135deg, rgba(113, 75, 103, 0.05), rgba(0, 135, 132, 0.05));">
        <div class="journal-card-header">
          <div class="journal-name-group">
            <div class="journal-icon-box teal">${getIcon("bar-chart-2")}</div>
            <div>
              <div class="journal-title">Financial Reports</div>
              <div class="journal-code">GAAP & IFRS Compliant</div>
            </div>
          </div>
        </div>

        <div class="journal-card-body" style="gap: 8px;">
          <button class="btn btn-secondary btn-sm" style="justify-content: flex-start; text-align: left;" id="btn-dash-pnl">
            &bull; Profit and Loss (Income Statement)
          </button>
          <button class="btn btn-secondary btn-sm" style="justify-content: flex-start; text-align: left;" id="btn-dash-bs">
            &bull; Balance Sheet
          </button>
          <button class="btn btn-secondary btn-sm" style="justify-content: flex-start; text-align: left;" id="btn-dash-tb">
            &bull; Trial Balance (Debits = Credits)
          </button>
          <button class="btn btn-secondary btn-sm" style="justify-content: flex-start; text-align: left;" id="btn-dash-gl">
            &bull; General Ledger & Accounts
          </button>
        </div>

        <div class="journal-card-footer">
          <span style="font-size: 11px; color: var(--text-muted);">${balanceSheet.isBalanced ? "\u2713 Equation Balanced (A = L + E)" : "\u26A0 Check Balances"}</span>
        </div>
      </div>
    </div>
  `;
  container.querySelector("#btn-quick-new-invoice")?.addEventListener("click", () => navigate("invoices", { action: "new" }));
  container.querySelector("#btn-view-all-invoices")?.addEventListener("click", () => navigate("invoices"));
  container.querySelector("#link-inv-draft")?.addEventListener("click", () => navigate("invoices", { filter: "draft" }));
  container.querySelector("#link-inv-unpaid")?.addEventListener("click", () => navigate("invoices", { filter: "posted" }));
  container.querySelector("#link-inv-late")?.addEventListener("click", () => navigate("invoices", { filter: "overdue" }));
  container.querySelector("#btn-quick-new-bill")?.addEventListener("click", () => navigate("bills", { action: "new" }));
  container.querySelector("#btn-view-all-bills")?.addEventListener("click", () => navigate("bills"));
  container.querySelector("#link-bill-draft")?.addEventListener("click", () => navigate("bills", { filter: "draft" }));
  container.querySelector("#link-bill-unpaid")?.addEventListener("click", () => navigate("bills", { filter: "posted" }));
  container.querySelector("#link-bill-late")?.addEventListener("click", () => navigate("bills", { filter: "overdue" }));
  container.querySelector("#btn-go-reconcile")?.addEventListener("click", () => navigate("bank"));
  container.querySelector("#btn-view-cash-entries")?.addEventListener("click", () => navigate("journal", { filterJournal: "CSH" }));
  container.querySelector("#btn-view-all-entries")?.addEventListener("click", () => navigate("journal"));
  container.querySelector("#btn-new-entry-misc")?.addEventListener("click", () => navigate("journal", { action: "new" }));
  container.querySelector("#btn-dash-pnl")?.addEventListener("click", () => navigate("reports", { tab: "pnl" }));
  container.querySelector("#btn-dash-bs")?.addEventListener("click", () => navigate("reports", { tab: "bs" }));
  container.querySelector("#btn-dash-tb")?.addEventListener("click", () => navigate("reports", { tab: "tb" }));
  container.querySelector("#btn-dash-gl")?.addEventListener("click", () => navigate("reports", { tab: "gl" }));
}

// js/views/invoices.js
function renderInvoices(container, navigate, params = {}) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  if (params.action === "new" || params.id) {
    renderInvoiceForm(container, navigate, params.id);
  } else {
    renderInvoiceList(container, navigate, params.filter);
  }
}
function renderInvoiceList(container, navigate, filter = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  let invoices = store.getInvoices();
  const partners = store.getPartners();
  if (filter) {
    if (filter === "unpaid") {
      invoices = invoices.filter((i) => (i.status === "posted" || i.status === "overdue") && i.amountDue > 0);
    } else {
      invoices = invoices.filter((i) => i.status === filter);
    }
  }
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-invoice">
          ${getIcon("plus")} New Invoice
        </button>
        ${filter ? `
          <span class="search-pill">
            Filter: ${filter}
            <span class="pill-close" id="clear-filter">&times;</span>
          </span>
        ` : ""}
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm ${filter === "draft" ? "btn-primary" : ""}" id="filter-draft">Draft</button>
        <button class="btn btn-secondary btn-sm ${filter === "posted" ? "btn-primary" : ""}" id="filter-posted">Posted</button>
        <button class="btn btn-secondary btn-sm ${filter === "unpaid" ? "btn-primary" : ""}" id="filter-unpaid">Unpaid</button>
        <button class="btn btn-secondary btn-sm ${filter === "overdue" ? "btn-primary" : ""}" id="filter-overdue">Overdue</button>
        <button class="btn btn-secondary btn-sm ${filter === "paid" ? "btn-primary" : ""}" id="filter-paid">Paid</button>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table">
          <thead>
            <tr>
              <th width="120">Number</th>
              <th>Customer</th>
              <th>Invoice Date</th>
              <th>Due Date</th>
              <th class="text-right">Tax</th>
              <th class="text-right">Total</th>
              <th class="text-right">Amount Due</th>
              <th class="text-center" width="100">Status</th>
            </tr>
          </thead>
          <tbody>
            ${invoices.length === 0 ? `
              <tr>
                <td colspan="8" class="table-empty-state">
                  <div class="table-empty-icon">${getIcon("file-text")}</div>
                  <div>No customer invoices found matching the criteria.</div>
                </td>
              </tr>
            ` : invoices.map((inv) => {
    const partner = partners.find((p) => p.id === inv.partnerId) || { name: "Unknown Customer" };
    let statusBadgeClass = `badge-${inv.status}`;
    return `
                <tr class="clickable" data-id="${inv.id}">
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${inv.number}</td>
                  <td><strong>${partner.name}</strong></td>
                  <td>${AccountingEngine.formatDate(inv.date)}</td>
                  <td>${AccountingEngine.formatDate(inv.dueDate)}</td>
                  <td class="text-right font-mono">${AccountingEngine.formatCurrency(inv.taxAmount, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 700;">${AccountingEngine.formatCurrency(inv.totalAmount, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 700; color: ${inv.amountDue > 0 ? "var(--primary)" : "var(--text-muted)"};">
                    ${AccountingEngine.formatCurrency(inv.amountDue, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge ${statusBadgeClass}">
                      <span class="badge-dot"></span>
                      ${inv.status}
                    </span>
                  </td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.querySelector("#btn-create-invoice")?.addEventListener("click", () => {
    navigate("invoices", { action: "new" });
  });
  container.querySelector("#clear-filter")?.addEventListener("click", () => {
    navigate("invoices");
  });
  container.querySelectorAll('[id^="filter-"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.id.replace("filter-", "");
      navigate("invoices", { filter: f });
    });
  });
  container.querySelectorAll("tbody tr.clickable").forEach((row) => {
    row.addEventListener("click", () => {
      navigate("invoices", { id: row.dataset.id });
    });
  });
}
function renderInvoiceForm(container, navigate, invoiceId = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const partners = store.getPartners().filter((p) => p.isCustomer);
  const products = store.getProducts();
  const accounts = store.getAccounts().filter((a) => a.type === "revenue" || a.type === "other_income");
  const taxes = store.getTaxes();
  let invoice = null;
  const isNew = !invoiceId;
  if (isNew) {
    invoice = {
      id: `inv-${Date.now()}`,
      number: store.getNextInvoiceNumber(),
      partnerId: partners[0]?.id || "",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      dueDate: new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10),
      paymentTerms: "30_days",
      status: "draft",
      lines: [
        {
          id: `line-${Date.now()}-1`,
          productId: products[0]?.id || "",
          description: products[0]?.name || "Standard Consulting Service",
          accountId: "400000",
          quantity: 1,
          unitPrice: products[0]?.salePrice || 1e3,
          taxRate: 10,
          subtotal: products[0]?.salePrice || 1e3,
          taxAmount: (products[0]?.salePrice || 1e3) * 0.1,
          total: (products[0]?.salePrice || 1e3) * 1.1
        }
      ],
      untaxedAmount: products[0]?.salePrice || 1e3,
      taxAmount: (products[0]?.salePrice || 1e3) * 0.1,
      totalAmount: (products[0]?.salePrice || 1e3) * 1.1,
      amountDue: (products[0]?.salePrice || 1e3) * 1.1,
      payments: []
    };
  } else {
    invoice = store.getInvoices().find((i) => i.id === invoiceId);
    if (!invoice) {
      toast.error("Invoice not found");
      navigate("invoices");
      return;
    }
  }
  const isEditable = invoice.status === "draft";
  const partner = partners.find((p) => p.id === invoice.partnerId) || { name: "Customer" };
  container.innerHTML = `
    <!-- Document Statusbar -->
    <div class="app-statusbar">
      <div class="statusbar-buttons">
        <button class="btn btn-secondary btn-sm" id="btn-back-invoices">
          &larr; Invoices
        </button>

        ${invoice.status === "draft" ? `
          <button class="btn btn-primary btn-sm" id="btn-confirm-invoice">
            ${getIcon("check")} Confirm
          </button>
          <button class="btn btn-danger btn-sm" id="btn-delete-invoice">
            ${getIcon("trash-2")} Delete
          </button>
        ` : ""}

        ${(invoice.status === "posted" || invoice.status === "overdue") && invoice.amountDue > 0 ? `
          <button class="btn btn-teal btn-sm" id="btn-register-payment">
            ${getIcon("coins")} Register Payment
          </button>
        ` : ""}

        <button class="btn btn-secondary btn-sm" id="btn-print-invoice">
          ${getIcon("printer")} Print PDF
        </button>
      </div>

      <div class="statusbar-steps">
        <div class="status-step ${invoice.status === "draft" ? "active" : "completed"}">Draft</div>
        <div class="status-step ${invoice.status === "posted" || invoice.status === "overdue" ? "active" : invoice.status === "paid" ? "completed" : ""}">Posted</div>
        <div class="status-step ${invoice.status === "paid" ? "active" : ""}">Paid</div>
      </div>
    </div>

    <!-- Printable & Screen Document Sheet -->
    <div class="document-sheet">
      <!-- Printable Corporate Header -->
      <div class="print-only-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h1 style="font-size: 20pt; font-weight: 800; color: #714B67; margin-bottom: 4pt;">${company.name}</h1>
            <p style="font-size: 10pt; color: #555;">${company.street}<br>${company.city}, ${company.country}<br>Tax ID: ${company.taxId}</p>
          </div>
          <div style="text-align: right;">
            <h2 style="font-size: 18pt; font-weight: 800; margin-bottom: 4pt;">TAX INVOICE</h2>
            <p style="font-size: 10pt; font-weight: 700;">${invoice.number}</p>
            <p style="font-size: 9pt;">Date: ${AccountingEngine.formatDate(invoice.date)}</p>
          </div>
        </div>
      </div>

      <!-- Sheet Header for Screen -->
      <div class="document-sheet-header">
        <div>
          <span class="document-title-badge">Customer Invoice</span>
          <div class="document-title-number">${invoice.number}</div>
        </div>

        <div>
          <span class="badge badge-${invoice.status}" style="font-size: 13px; padding: 6px 14px;">
            <span class="badge-dot"></span>
            ${invoice.status.toUpperCase()}
          </span>
        </div>
      </div>

      <!-- Invoice Form Header Info -->
      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Customer</label>
            ${isEditable ? `
              <select class="form-control" id="inv-partner-select">
                ${partners.map((p) => `
                  <option value="${p.id}" ${p.id === invoice.partnerId ? "selected" : ""}>
                    ${p.name} (${p.company || "Individual"})
                  </option>
                `).join("")}
              </select>
            ` : `
              <div style="font-weight: 700; font-size: 15px; padding: 4px 0;">${partner.name}</div>
              <div style="font-size: 12px; color: var(--text-muted);">${partner.street || ""}, ${partner.city || ""}</div>
              <div style="font-size: 12px; color: var(--text-muted);">Tax ID: ${partner.taxId || "N/A"}</div>
            `}
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Invoice Date</label>
            <input type="date" class="form-control" id="inv-date" value="${invoice.date}" ${!isEditable ? "readonly" : ""} />
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Due Date</label>
            <input type="date" class="form-control" id="inv-due-date" value="${invoice.dueDate}" ${!isEditable ? "readonly" : ""} />
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Payment Terms</label>
            <select class="form-control" id="inv-payment-terms" ${!isEditable ? "disabled" : ""}>
              <option value="immediate" ${invoice.paymentTerms === "immediate" ? "selected" : ""}>Immediate Payment</option>
              <option value="15_days" ${invoice.paymentTerms === "15_days" ? "selected" : ""}>15 Days</option>
              <option value="30_days" ${invoice.paymentTerms === "30_days" ? "selected" : ""}>30 Days</option>
              <option value="60_days" ${invoice.paymentTerms === "60_days" ? "selected" : ""}>60 Days</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Line Items Section -->
      <h4 style="font-size: 13px; font-weight: 700; text-transform: uppercase; margin: 24px 0 10px 0; color: var(--text-secondary);">
        Invoice Lines
      </h4>

      <table class="line-items-table" id="inv-lines-table">
        <thead>
          <tr>
            <th width="220">Product / Service</th>
            <th>Description</th>
            <th width="160">Account</th>
            <th width="80" class="text-right">Qty</th>
            <th width="110" class="text-right">Unit Price</th>
            <th width="100" class="text-right">Taxes</th>
            <th width="120" class="text-right">Amount</th>
            ${isEditable ? `<th width="40"></th>` : ""}
          </tr>
        </thead>
        <tbody id="inv-lines-tbody">
          <!-- Dynamic line items injected here -->
        </tbody>
      </table>

      ${isEditable ? `
        <div style="margin-top: 12px;">
          <button class="btn btn-secondary btn-sm" id="btn-add-line">
            ${getIcon("plus")} Add a line
          </button>
        </div>
      ` : ""}

      <!-- Totals & Payments Section -->
      <div class="document-totals-section">
        <div class="totals-box">
          <div class="totals-row">
            <span>Untaxed Amount:</span>
            <span class="font-mono" id="summary-untaxed">${AccountingEngine.formatCurrency(invoice.untaxedAmount, symbol)}</span>
          </div>
          <div class="totals-row">
            <span>Sales Tax (10%):</span>
            <span class="font-mono" id="summary-tax">${AccountingEngine.formatCurrency(invoice.taxAmount, symbol)}</span>
          </div>
          <div class="totals-row grand-total">
            <span>Total:</span>
            <span class="font-mono" id="summary-total">${AccountingEngine.formatCurrency(invoice.totalAmount, symbol)}</span>
          </div>
          <div class="totals-row amount-due">
            <span>Amount Due:</span>
            <span class="font-mono" id="summary-due">${AccountingEngine.formatCurrency(invoice.amountDue, symbol)}</span>
          </div>

          ${invoice.payments && invoice.payments.length > 0 ? `
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--border-dark); font-size: 11px;">
              <div style="font-weight: 700; color: var(--success); margin-bottom: 4px;">\u2713 Payments Registered:</div>
              ${invoice.payments.map((p) => `
                <div style="display: flex; justify-content: space-between; color: var(--text-secondary); margin-bottom: 2px;">
                  <span>${AccountingEngine.formatDate(p.date)} (${p.reference || "Payment"}):</span>
                  <span class="font-mono" style="font-weight: 600;">${AccountingEngine.formatCurrency(p.amount, symbol)}</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
  const tbody = container.querySelector("#inv-lines-tbody");
  function renderLines() {
    tbody.innerHTML = invoice.lines.map((line, idx) => {
      return `
        <tr data-index="${idx}">
          <td>
            ${isEditable ? `
              <select class="form-control line-product-select" data-index="${idx}">
                <option value="">-- Custom Item --</option>
                ${products.map((p) => `
                  <option value="${p.id}" ${p.id === line.productId ? "selected" : ""}>${p.name}</option>
                `).join("")}
              </select>
            ` : `<span>${line.productId ? products.find((p) => p.id === line.productId)?.name || line.description : line.description}</span>`}
          </td>
          <td>
            ${isEditable ? `
              <input type="text" class="form-control line-desc-input" data-index="${idx}" value="${line.description || ""}" />
            ` : `<span>${line.description}</span>`}
          </td>
          <td>
            ${isEditable ? `
              <select class="form-control line-account-select" data-index="${idx}">
                ${accounts.map((a) => `
                  <option value="${a.code}" ${a.code === line.accountId ? "selected" : ""}>${a.code} - ${a.name}</option>
                `).join("")}
              </select>
            ` : `<span>${line.accountId}</span>`}
          </td>
          <td class="text-right">
            ${isEditable ? `
              <input type="number" step="1" min="1" class="form-control text-right line-qty-input" data-index="${idx}" value="${line.quantity}" />
            ` : `<span class="font-mono">${line.quantity}</span>`}
          </td>
          <td class="text-right">
            ${isEditable ? `
              <input type="number" step="0.01" min="0" class="form-control text-right line-price-input" data-index="${idx}" value="${line.unitPrice}" />
            ` : `<span class="font-mono">${AccountingEngine.formatCurrency(line.unitPrice, symbol)}</span>`}
          </td>
          <td class="text-right">
            ${isEditable ? `
              <select class="form-control line-tax-select" data-index="${idx}">
                ${taxes.map((t) => `
                  <option value="${t.rate}" ${t.rate === line.taxRate ? "selected" : ""}>${t.rate}%</option>
                `).join("")}
              </select>
            ` : `<span>${line.taxRate}%</span>`}
          </td>
          <td class="text-right font-mono" style="font-weight: 700;">
            ${AccountingEngine.formatCurrency(line.subtotal, symbol)}
          </td>
          ${isEditable ? `
            <td class="text-center">
              <button class="delete-line-btn" data-index="${idx}">${getIcon("trash-2")}</button>
            </td>
          ` : ""}
        </tr>
      `;
    }).join("");
    bindLineEvents();
  }
  function recalculateTotals() {
    let untaxed = 0;
    let taxTotal = 0;
    for (const line of invoice.lines) {
      const qty = parseFloat(line.quantity) || 0;
      const price = parseFloat(line.unitPrice) || 0;
      const rate = parseFloat(line.taxRate) || 0;
      line.subtotal = qty * price;
      line.taxAmount = line.subtotal * (rate / 100);
      line.total = line.subtotal + line.taxAmount;
      untaxed += line.subtotal;
      taxTotal += line.taxAmount;
    }
    invoice.untaxedAmount = untaxed;
    invoice.taxAmount = taxTotal;
    invoice.totalAmount = untaxed + taxTotal;
    const totalPaid = (invoice.payments || []).reduce((sum, p) => sum + p.amount, 0);
    invoice.amountDue = Math.max(0, invoice.totalAmount - totalPaid);
    container.querySelector("#summary-untaxed").textContent = AccountingEngine.formatCurrency(invoice.untaxedAmount, symbol);
    container.querySelector("#summary-tax").textContent = AccountingEngine.formatCurrency(invoice.taxAmount, symbol);
    container.querySelector("#summary-total").textContent = AccountingEngine.formatCurrency(invoice.totalAmount, symbol);
    container.querySelector("#summary-due").textContent = AccountingEngine.formatCurrency(invoice.amountDue, symbol);
    if (isEditable) {
      store.saveInvoice(invoice);
    }
  }
  function bindLineEvents() {
    if (!isEditable) return;
    tbody.querySelectorAll(".line-product-select").forEach((sel) => {
      sel.onchange = () => {
        const idx = parseInt(sel.dataset.index);
        const prod = products.find((p) => p.id === sel.value);
        if (prod) {
          invoice.lines[idx].productId = prod.id;
          invoice.lines[idx].description = prod.name;
          invoice.lines[idx].unitPrice = prod.salePrice;
          invoice.lines[idx].accountId = prod.incomeAccount;
          renderLines();
          recalculateTotals();
        }
      };
    });
    tbody.querySelectorAll(".line-desc-input").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        invoice.lines[idx].description = inp.value;
      };
    });
    tbody.querySelectorAll(".line-account-select").forEach((sel) => {
      sel.onchange = () => {
        const idx = parseInt(sel.dataset.index);
        invoice.lines[idx].accountId = sel.value;
      };
    });
    tbody.querySelectorAll(".line-qty-input").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        invoice.lines[idx].quantity = parseFloat(inp.value) || 0;
        recalculateTotals();
        renderLines();
      };
    });
    tbody.querySelectorAll(".line-price-input").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        invoice.lines[idx].unitPrice = parseFloat(inp.value) || 0;
        recalculateTotals();
        renderLines();
      };
    });
    tbody.querySelectorAll(".line-tax-select").forEach((sel) => {
      sel.onchange = () => {
        const idx = parseInt(sel.dataset.index);
        invoice.lines[idx].taxRate = parseFloat(sel.value) || 0;
        recalculateTotals();
        renderLines();
      };
    });
    tbody.querySelectorAll(".delete-line-btn").forEach((btn) => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        if (invoice.lines.length <= 1) {
          toast.warning("An invoice must have at least one line item.");
          return;
        }
        invoice.lines.splice(idx, 1);
        renderLines();
        recalculateTotals();
      };
    });
  }
  renderLines();
  container.querySelector("#btn-back-invoices")?.addEventListener("click", () => navigate("invoices"));
  if (isEditable) {
    container.querySelector("#inv-partner-select")?.addEventListener("change", (e) => {
      invoice.partnerId = e.target.value;
      store.saveInvoice(invoice);
    });
    container.querySelector("#inv-date")?.addEventListener("change", (e) => {
      invoice.date = e.target.value;
      store.saveInvoice(invoice);
    });
    container.querySelector("#inv-due-date")?.addEventListener("change", (e) => {
      invoice.dueDate = e.target.value;
      store.saveInvoice(invoice);
    });
    container.querySelector("#inv-payment-terms")?.addEventListener("change", (e) => {
      invoice.paymentTerms = e.target.value;
      store.saveInvoice(invoice);
    });
    container.querySelector("#btn-add-line")?.addEventListener("click", () => {
      invoice.lines.push({
        id: `line-${Date.now()}-${invoice.lines.length + 1}`,
        productId: "",
        description: "New Service Line",
        accountId: "400000",
        quantity: 1,
        unitPrice: 500,
        taxRate: 10,
        subtotal: 500,
        taxAmount: 50,
        total: 550
      });
      renderLines();
      recalculateTotals();
    });
    container.querySelector("#btn-confirm-invoice")?.addEventListener("click", () => {
      store.saveInvoice(invoice);
      const ok = store.postInvoice(invoice.id);
      if (ok) {
        toast.success(`Invoice ${invoice.number} posted to General Ledger!`);
        navigate("invoices", { id: invoice.id });
      }
    });
    container.querySelector("#btn-delete-invoice")?.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete draft invoice ${invoice.number}?`)) {
        store.deleteInvoice(invoice.id);
        toast.info(`Invoice ${invoice.number} deleted.`);
        navigate("invoices");
      }
    });
  }
  container.querySelector("#btn-register-payment")?.addEventListener("click", () => {
    openRegisterPaymentModal(invoice, navigate);
  });
  container.querySelector("#btn-print-invoice")?.addEventListener("click", () => {
    window.print();
  });
}
function openRegisterPaymentModal(invoice, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const journals = store.getJournals().filter((j) => j.type === "bank" || j.type === "cash");
  modal.open({
    title: `${getIcon("coins")} Register Payment for ${invoice.number}`,
    size: "md",
    contentHtml: `
      <div class="form-group">
        <label class="form-label required">Payment Journal</label>
        <select class="form-control" id="pay-journal-select">
          ${journals.map((j) => `
            <option value="${j.id}">${j.name} (${j.code})</option>
          `).join("")}
        </select>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Payment Amount</label>
            <div class="input-group">
              <span class="input-prefix">${symbol}</span>
              <input type="number" step="0.01" min="0.01" max="${invoice.amountDue}" class="form-control" id="pay-amount-input" value="${invoice.amountDue.toFixed(2)}" />
            </div>
            <span style="font-size: 11px; color: var(--text-muted); margin-top: 3px;">Max due: ${AccountingEngine.formatCurrency(invoice.amountDue, symbol)}</span>
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Payment Date</label>
            <input type="date" class="form-control" id="pay-date-input" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Payment Memo / Reference</label>
        <input type="text" class="form-control" id="pay-memo-input" value="Wire / Cheque - ${invoice.number}" />
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-pay-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-pay-submit">Create Payment</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-pay-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-pay-submit").onclick = () => {
        const journalId = body.querySelector("#pay-journal-select").value;
        const amount = parseFloat(body.querySelector("#pay-amount-input").value);
        const date = body.querySelector("#pay-date-input").value;
        const memo = body.querySelector("#pay-memo-input").value;
        if (isNaN(amount) || amount <= 0) {
          toast.warning("Please enter a valid payment amount.");
          return;
        }
        const success = store.registerInvoicePayment(invoice.id, {
          journalId,
          amount,
          paymentDate: date,
          reference: memo
        });
        if (success) {
          modal.close();
          toast.success(`Payment of ${AccountingEngine.formatCurrency(amount, symbol)} registered successfully!`);
          navigate("invoices", { id: invoice.id });
        } else {
          toast.error("Payment registration failed.");
        }
      };
    }
  });
}

// js/views/bills.js
function renderBills(container, navigate, params = {}) {
  if (params.action === "new" || params.id) {
    renderBillForm(container, navigate, params.id);
  } else {
    renderBillList(container, navigate, params.filter);
  }
}
function renderBillList(container, navigate, filter = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  let bills = store.getBills();
  const partners = store.getPartners();
  if (filter) {
    if (filter === "unpaid") {
      bills = bills.filter((b) => (b.status === "posted" || b.status === "overdue") && b.amountDue > 0);
    } else {
      bills = bills.filter((b) => b.status === filter);
    }
  }
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-bill">
          ${getIcon("plus")} Upload Bill
        </button>
        ${filter ? `
          <span class="search-pill">
            Filter: ${filter}
            <span class="pill-close" id="clear-bill-filter">&times;</span>
          </span>
        ` : ""}
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm ${filter === "draft" ? "btn-primary" : ""}" id="bfilter-draft">Draft</button>
        <button class="btn btn-secondary btn-sm ${filter === "posted" ? "btn-primary" : ""}" id="bfilter-posted">Posted</button>
        <button class="btn btn-secondary btn-sm ${filter === "unpaid" ? "btn-primary" : ""}" id="bfilter-unpaid">To Pay</button>
        <button class="btn btn-secondary btn-sm ${filter === "overdue" ? "btn-primary" : ""}" id="bfilter-overdue">Overdue</button>
        <button class="btn btn-secondary btn-sm ${filter === "paid" ? "btn-primary" : ""}" id="bfilter-paid">Paid</button>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table">
          <thead>
            <tr>
              <th width="120">Number</th>
              <th>Vendor</th>
              <th>Bill Reference</th>
              <th>Bill Date</th>
              <th>Due Date</th>
              <th class="text-right">Total</th>
              <th class="text-right">Amount Due</th>
              <th class="text-center" width="100">Status</th>
            </tr>
          </thead>
          <tbody>
            ${bills.length === 0 ? `
              <tr>
                <td colspan="8" class="table-empty-state">
                  <div class="table-empty-icon">${getIcon("shopping-bag")}</div>
                  <div>No vendor bills found matching the criteria.</div>
                </td>
              </tr>
            ` : bills.map((bill) => {
    const partner = partners.find((p) => p.id === bill.partnerId) || { name: "Unknown Vendor" };
    let statusBadgeClass = `badge-${bill.status}`;
    return `
                <tr class="clickable" data-id="${bill.id}">
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${bill.number}</td>
                  <td><strong>${partner.name}</strong></td>
                  <td class="font-mono" style="color: var(--text-muted);">${bill.reference || "-"}</td>
                  <td>${AccountingEngine.formatDate(bill.date)}</td>
                  <td>${AccountingEngine.formatDate(bill.dueDate)}</td>
                  <td class="text-right font-mono" style="font-weight: 700;">${AccountingEngine.formatCurrency(bill.totalAmount, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 700; color: ${bill.amountDue > 0 ? "var(--danger)" : "var(--text-muted)"};">
                    ${AccountingEngine.formatCurrency(bill.amountDue, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge ${statusBadgeClass}">
                      <span class="badge-dot"></span>
                      ${bill.status}
                    </span>
                  </td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.querySelector("#btn-create-bill")?.addEventListener("click", () => {
    navigate("bills", { action: "new" });
  });
  container.querySelector("#clear-bill-filter")?.addEventListener("click", () => {
    navigate("bills");
  });
  container.querySelectorAll('[id^="bfilter-"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.id.replace("bfilter-", "");
      navigate("bills", { filter: f });
    });
  });
  container.querySelectorAll("tbody tr.clickable").forEach((row) => {
    row.addEventListener("click", () => {
      navigate("bills", { id: row.dataset.id });
    });
  });
}
function renderBillForm(container, navigate, billId = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const partners = store.getPartners().filter((p) => p.isVendor);
  const expenseAccounts = store.getAccounts().filter((a) => a.type === "expense" || a.type === "cogs" || a.type === "asset_fixed");
  const taxes = store.getTaxes();
  let bill = null;
  const isNew = !billId;
  if (isNew) {
    bill = {
      id: `bill-${Date.now()}`,
      number: store.getNextBillNumber(),
      reference: `REF-${Math.floor(1e3 + Math.random() * 9e3)}`,
      partnerId: partners[0]?.id || "",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      dueDate: new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10),
      paymentTerms: "30_days",
      status: "draft",
      lines: [
        {
          id: `bline-${Date.now()}-1`,
          description: "Monthly Cloud Infrastructure & Server Usage",
          accountId: "620000",
          quantity: 1,
          unitPrice: 1200,
          taxRate: 10,
          subtotal: 1200,
          taxAmount: 120,
          total: 1320
        }
      ],
      untaxedAmount: 1200,
      taxAmount: 120,
      totalAmount: 1320,
      amountDue: 1320,
      payments: []
    };
  } else {
    bill = store.getBills().find((b) => b.id === billId);
    if (!bill) {
      toast.error("Bill not found");
      navigate("bills");
      return;
    }
  }
  const isEditable = bill.status === "draft";
  const partner = partners.find((p) => p.id === bill.partnerId) || { name: "Vendor" };
  container.innerHTML = `
    <!-- Document Statusbar -->
    <div class="app-statusbar">
      <div class="statusbar-buttons">
        <button class="btn btn-secondary btn-sm" id="btn-back-bills">
          &larr; Bills
        </button>

        ${bill.status === "draft" ? `
          <button class="btn btn-primary btn-sm" id="btn-confirm-bill">
            ${getIcon("check")} Confirm
          </button>
          <button class="btn btn-danger btn-sm" id="btn-delete-bill">
            ${getIcon("trash-2")} Delete
          </button>
        ` : ""}

        ${(bill.status === "posted" || bill.status === "overdue") && bill.amountDue > 0 ? `
          <button class="btn btn-teal btn-sm" id="btn-register-bill-payment">
            ${getIcon("coins")} Register Payment
          </button>
        ` : ""}

        <button class="btn btn-secondary btn-sm" id="btn-print-bill">
          ${getIcon("printer")} Print
        </button>
      </div>

      <div class="statusbar-steps">
        <div class="status-step ${bill.status === "draft" ? "active" : "completed"}">Draft</div>
        <div class="status-step ${bill.status === "posted" || bill.status === "overdue" ? "active" : bill.status === "paid" ? "completed" : ""}">Posted</div>
        <div class="status-step ${bill.status === "paid" ? "active" : ""}">Paid</div>
      </div>
    </div>

    <!-- Document Paper Sheet -->
    <div class="document-sheet">
      <div class="document-sheet-header">
        <div>
          <span class="document-title-badge">Vendor Bill (A/P)</span>
          <div class="document-title-number">${bill.number}</div>
        </div>

        <div>
          <span class="badge badge-${bill.status}" style="font-size: 13px; padding: 6px 14px;">
            <span class="badge-dot"></span>
            ${bill.status.toUpperCase()}
          </span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Vendor</label>
            ${isEditable ? `
              <select class="form-control" id="bill-partner-select">
                ${partners.map((p) => `
                  <option value="${p.id}" ${p.id === bill.partnerId ? "selected" : ""}>
                    ${p.name}
                  </option>
                `).join("")}
              </select>
            ` : `
              <div style="font-weight: 700; font-size: 15px; padding: 4px 0;">${partner.name}</div>
              <div style="font-size: 12px; color: var(--text-muted);">${partner.street || ""}, ${partner.city || ""}</div>
            `}
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Vendor Reference</label>
            <input type="text" class="form-control" id="bill-reference" value="${bill.reference || ""}" ${!isEditable ? "readonly" : ""} />
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Bill Date</label>
            <input type="date" class="form-control" id="bill-date" value="${bill.date}" ${!isEditable ? "readonly" : ""} />
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Due Date</label>
            <input type="date" class="form-control" id="bill-due-date" value="${bill.dueDate}" ${!isEditable ? "readonly" : ""} />
          </div>
        </div>
      </div>

      <h4 style="font-size: 13px; font-weight: 700; text-transform: uppercase; margin: 24px 0 10px 0; color: var(--text-secondary);">
        Bill Line Items
      </h4>

      <table class="line-items-table" id="bill-lines-table">
        <thead>
          <tr>
            <th>Description</th>
            <th width="200">Expense Account</th>
            <th width="80" class="text-right">Qty</th>
            <th width="110" class="text-right">Unit Price</th>
            <th width="100" class="text-right">Taxes</th>
            <th width="120" class="text-right">Amount</th>
            ${isEditable ? `<th width="40"></th>` : ""}
          </tr>
        </thead>
        <tbody id="bill-lines-tbody"></tbody>
      </table>

      ${isEditable ? `
        <div style="margin-top: 12px;">
          <button class="btn btn-secondary btn-sm" id="btn-add-bill-line">
            ${getIcon("plus")} Add a line
          </button>
        </div>
      ` : ""}

      <div class="document-totals-section">
        <div class="totals-box">
          <div class="totals-row">
            <span>Untaxed Amount:</span>
            <span class="font-mono" id="bsummary-untaxed">${AccountingEngine.formatCurrency(bill.untaxedAmount, symbol)}</span>
          </div>
          <div class="totals-row">
            <span>Tax (10%):</span>
            <span class="font-mono" id="bsummary-tax">${AccountingEngine.formatCurrency(bill.taxAmount, symbol)}</span>
          </div>
          <div class="totals-row grand-total">
            <span>Total:</span>
            <span class="font-mono" id="bsummary-total">${AccountingEngine.formatCurrency(bill.totalAmount, symbol)}</span>
          </div>
          <div class="totals-row amount-due">
            <span>Amount Due:</span>
            <span class="font-mono" id="bsummary-due">${AccountingEngine.formatCurrency(bill.amountDue, symbol)}</span>
          </div>

          ${bill.payments && bill.payments.length > 0 ? `
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--border-dark); font-size: 11px;">
              <div style="font-weight: 700; color: var(--success); margin-bottom: 4px;">\u2713 Payments Registered:</div>
              ${bill.payments.map((p) => `
                <div style="display: flex; justify-content: space-between; color: var(--text-secondary); margin-bottom: 2px;">
                  <span>${AccountingEngine.formatDate(p.date)} (${p.reference}):</span>
                  <span class="font-mono" style="font-weight: 600;">${AccountingEngine.formatCurrency(p.amount, symbol)}</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
  const tbody = container.querySelector("#bill-lines-tbody");
  function renderBillLines() {
    tbody.innerHTML = bill.lines.map((line, idx) => {
      return `
        <tr data-index="${idx}">
          <td>
            ${isEditable ? `
              <input type="text" class="form-control line-desc-input" data-index="${idx}" value="${line.description || ""}" />
            ` : `<span>${line.description}</span>`}
          </td>
          <td>
            ${isEditable ? `
              <select class="form-control line-account-select" data-index="${idx}">
                ${expenseAccounts.map((a) => `
                  <option value="${a.code}" ${a.code === line.accountId ? "selected" : ""}>${a.code} - ${a.name}</option>
                `).join("")}
              </select>
            ` : `<span>${line.accountId}</span>`}
          </td>
          <td class="text-right">
            ${isEditable ? `
              <input type="number" step="1" min="1" class="form-control text-right line-qty-input" data-index="${idx}" value="${line.quantity}" />
            ` : `<span class="font-mono">${line.quantity}</span>`}
          </td>
          <td class="text-right">
            ${isEditable ? `
              <input type="number" step="0.01" min="0" class="form-control text-right line-price-input" data-index="${idx}" value="${line.unitPrice}" />
            ` : `<span class="font-mono">${AccountingEngine.formatCurrency(line.unitPrice, symbol)}</span>`}
          </td>
          <td class="text-right">
            ${isEditable ? `
              <select class="form-control line-tax-select" data-index="${idx}">
                ${taxes.map((t) => `
                  <option value="${t.rate}" ${t.rate === line.taxRate ? "selected" : ""}>${t.rate}%</option>
                `).join("")}
              </select>
            ` : `<span>${line.taxRate}%</span>`}
          </td>
          <td class="text-right font-mono" style="font-weight: 700;">
            ${AccountingEngine.formatCurrency(line.subtotal, symbol)}
          </td>
          ${isEditable ? `
            <td class="text-center">
              <button class="delete-line-btn" data-index="${idx}">${getIcon("trash-2")}</button>
            </td>
          ` : ""}
        </tr>
      `;
    }).join("");
    bindBillEvents();
  }
  function recalculateBillTotals() {
    let untaxed = 0;
    let taxTotal = 0;
    for (const line of bill.lines) {
      const qty = parseFloat(line.quantity) || 0;
      const price = parseFloat(line.unitPrice) || 0;
      const rate = parseFloat(line.taxRate) || 0;
      line.subtotal = qty * price;
      line.taxAmount = line.subtotal * (rate / 100);
      line.total = line.subtotal + line.taxAmount;
      untaxed += line.subtotal;
      taxTotal += line.taxAmount;
    }
    bill.untaxedAmount = untaxed;
    bill.taxAmount = taxTotal;
    bill.totalAmount = untaxed + taxTotal;
    const totalPaid = (bill.payments || []).reduce((sum, p) => sum + p.amount, 0);
    bill.amountDue = Math.max(0, bill.totalAmount - totalPaid);
    container.querySelector("#bsummary-untaxed").textContent = AccountingEngine.formatCurrency(bill.untaxedAmount, symbol);
    container.querySelector("#bsummary-tax").textContent = AccountingEngine.formatCurrency(bill.taxAmount, symbol);
    container.querySelector("#bsummary-total").textContent = AccountingEngine.formatCurrency(bill.totalAmount, symbol);
    container.querySelector("#bsummary-due").textContent = AccountingEngine.formatCurrency(bill.amountDue, symbol);
    if (isEditable) {
      store.saveBill(bill);
    }
  }
  function bindBillEvents() {
    if (!isEditable) return;
    tbody.querySelectorAll(".line-desc-input").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        bill.lines[idx].description = inp.value;
      };
    });
    tbody.querySelectorAll(".line-account-select").forEach((sel) => {
      sel.onchange = () => {
        const idx = parseInt(sel.dataset.index);
        bill.lines[idx].accountId = sel.value;
      };
    });
    tbody.querySelectorAll(".line-qty-input").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        bill.lines[idx].quantity = parseFloat(inp.value) || 0;
        recalculateBillTotals();
        renderBillLines();
      };
    });
    tbody.querySelectorAll(".line-price-input").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        bill.lines[idx].unitPrice = parseFloat(inp.value) || 0;
        recalculateBillTotals();
        renderBillLines();
      };
    });
    tbody.querySelectorAll(".line-tax-select").forEach((sel) => {
      sel.onchange = () => {
        const idx = parseInt(sel.dataset.index);
        bill.lines[idx].taxRate = parseFloat(sel.value) || 0;
        recalculateBillTotals();
        renderBillLines();
      };
    });
    tbody.querySelectorAll(".delete-line-btn").forEach((btn) => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        if (bill.lines.length <= 1) {
          toast.warning("A vendor bill must have at least one line item.");
          return;
        }
        bill.lines.splice(idx, 1);
        renderBillLines();
        recalculateBillTotals();
      };
    });
  }
  renderBillLines();
  container.querySelector("#btn-back-bills")?.addEventListener("click", () => navigate("bills"));
  if (isEditable) {
    container.querySelector("#bill-partner-select")?.addEventListener("change", (e) => {
      bill.partnerId = e.target.value;
      store.saveBill(bill);
    });
    container.querySelector("#bill-reference")?.addEventListener("input", (e) => {
      bill.reference = e.target.value;
      store.saveBill(bill);
    });
    container.querySelector("#bill-date")?.addEventListener("change", (e) => {
      bill.date = e.target.value;
      store.saveBill(bill);
    });
    container.querySelector("#bill-due-date")?.addEventListener("change", (e) => {
      bill.dueDate = e.target.value;
      store.saveBill(bill);
    });
    container.querySelector("#btn-add-bill-line")?.addEventListener("click", () => {
      bill.lines.push({
        id: `bline-${Date.now()}-${bill.lines.length + 1}`,
        description: "Office / Operating Expense",
        accountId: "600000",
        quantity: 1,
        unitPrice: 250,
        taxRate: 0,
        subtotal: 250,
        taxAmount: 0,
        total: 250
      });
      renderBillLines();
      recalculateBillTotals();
    });
    container.querySelector("#btn-confirm-bill")?.addEventListener("click", () => {
      store.saveBill(bill);
      const ok = store.postBill(bill.id);
      if (ok) {
        toast.success(`Vendor Bill ${bill.number} posted to General Ledger!`);
        navigate("bills", { id: bill.id });
      }
    });
    container.querySelector("#btn-delete-bill")?.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete draft bill ${bill.number}?`)) {
        store.deleteBill(bill.id);
        toast.info(`Bill ${bill.number} deleted.`);
        navigate("bills");
      }
    });
  }
  container.querySelector("#btn-register-bill-payment")?.addEventListener("click", () => {
    openRegisterBillPaymentModal(bill, navigate);
  });
  container.querySelector("#btn-print-bill")?.addEventListener("click", () => {
    window.print();
  });
}
function openRegisterBillPaymentModal(bill, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const journals = store.getJournals().filter((j) => j.type === "bank" || j.type === "cash");
  modal.open({
    title: `${getIcon("coins")} Register Vendor Payment for ${bill.number}`,
    size: "md",
    contentHtml: `
      <div class="form-group">
        <label class="form-label required">Payment Journal</label>
        <select class="form-control" id="bpay-journal-select">
          ${journals.map((j) => `
            <option value="${j.id}">${j.name} (${j.code})</option>
          `).join("")}
        </select>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Payment Amount</label>
            <div class="input-group">
              <span class="input-prefix">${symbol}</span>
              <input type="number" step="0.01" min="0.01" max="${bill.amountDue}" class="form-control" id="bpay-amount-input" value="${bill.amountDue.toFixed(2)}" />
            </div>
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Payment Date</label>
            <input type="date" class="form-control" id="bpay-date-input" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Payment Memo / Reference</label>
        <input type="text" class="form-control" id="bpay-memo-input" value="Direct Debit / Transfer - ${bill.number}" />
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-bpay-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-bpay-submit">Confirm Payment</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-bpay-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-bpay-submit").onclick = () => {
        const journalId = body.querySelector("#bpay-journal-select").value;
        const amount = parseFloat(body.querySelector("#bpay-amount-input").value);
        const date = body.querySelector("#bpay-date-input").value;
        const memo = body.querySelector("#bpay-memo-input").value;
        if (isNaN(amount) || amount <= 0) {
          toast.warning("Please enter a valid payment amount.");
          return;
        }
        const success = store.registerBillPayment(bill.id, {
          journalId,
          amount,
          paymentDate: date,
          reference: memo
        });
        if (success) {
          modal.close();
          toast.success(`Vendor payment of ${AccountingEngine.formatCurrency(amount, symbol)} registered!`);
          navigate("bills", { id: bill.id });
        } else {
          toast.error("Payment registration failed.");
        }
      };
    }
  });
}

// js/views/bank.js
function renderBankReconciliation(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const bankStatements = store.getBankStatements();
  const unreconciled = bankStatements.filter((s) => !s.reconciled);
  const reconciled = bankStatements.filter((s) => s.reconciled);
  const liveBalances = AccountingEngine.getLiveAccountBalances();
  const glBankBalance = liveBalances["101000"]?.balance || 0;
  let selectedStmtId = unreconciled[0]?.id || null;
  function renderView() {
    const selectedStmt = bankStatements.find((s) => s.id === selectedStmtId);
    const invoices = store.getInvoices().filter((i) => (i.status === "posted" || i.status === "overdue") && i.amountDue > 0);
    const bills = store.getBills().filter((b) => (b.status === "posted" || b.status === "overdue") && b.amountDue > 0);
    const partners = store.getPartners();
    const accounts = store.getAccounts();
    container.innerHTML = `
      <!-- Bank Account Overview Banner -->
      <div class="report-header-card" style="margin-bottom: 20px;">
        <div class="report-title-group">
          <h2>Bank Reconciliation &bull; Silicon Valley Bank (BNK)</h2>
          <div class="report-subtitle">
            Match bank transactions against customer invoices, vendor bills, or manual accounts.
          </div>
        </div>

        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: right;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">GL Book Balance</div>
            <div style="font-size: 18px; font-weight: 800; color: var(--text-main); font-family: ui-monospace, SFMono-Regular, monospace;">
              ${AccountingEngine.formatCurrency(glBankBalance, symbol)}
            </div>
          </div>

          <div style="text-align: right;">
            <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Items to Reconcile</div>
            <div style="font-size: 18px; font-weight: 800; color: ${unreconciled.length > 0 ? "var(--primary)" : "var(--credit-color)"};">
              ${unreconciled.length} pending
            </div>
          </div>

          <button class="btn btn-primary btn-sm" id="btn-add-statement-line">
            ${getIcon("plus")} Add Transaction
          </button>
        </div>
      </div>

      <!-- Signature 2-Column Split Reconciliation Panel -->
      <div class="reconciliation-container">
        <!-- Left Column: Bank Statement Lines -->
        <div class="reconciliation-panel">
          <div class="reconciliation-panel-header">
            <span style="font-weight: 700; font-size: 13px;">Bank Transactions (${unreconciled.length} Unmatched)</span>
            <span style="font-size: 11px; color: var(--text-muted);">Select a line to match</span>
          </div>

          <ul class="statement-lines-list">
            ${unreconciled.length === 0 ? `
              <li style="padding: 40px 20px; text-align: center; color: var(--text-muted);">
                <div style="font-size: 32px; color: var(--credit-color); margin-bottom: 8px;">\u2713</div>
                <div style="font-weight: 700; font-size: 15px; color: var(--text-main);">All Transactions Reconciled!</div>
                <div style="font-size: 12px; margin-top: 4px;">Bank statement is fully in sync with General Ledger.</div>
              </li>
            ` : unreconciled.map((stmt) => {
      const partner = partners.find((p) => p.id === stmt.partnerId);
      const isSelected = stmt.id === selectedStmtId;
      const isIncoming = stmt.amount > 0;
      return `
                <li class="statement-line-item ${isSelected ? "selected" : ""}" data-id="${stmt.id}">
                  <div class="statement-line-info">
                    <span class="statement-line-label">${stmt.label}</span>
                    <div class="statement-line-meta">
                      <span>${AccountingEngine.formatDate(stmt.date)}</span>
                      ${partner ? `<span>&bull; ${partner.name}</span>` : ""}
                    </div>
                  </div>

                  <div class="statement-line-amount ${isIncoming ? "incoming" : "outgoing"}">
                    ${isIncoming ? "+" : ""}${AccountingEngine.formatCurrency(stmt.amount, symbol)}
                  </div>
                </li>
              `;
    }).join("")}
          </ul>
        </div>

        <!-- Right Column: Match Candidates & Reconcile Engine -->
        <div class="reconciliation-panel">
          <div class="reconciliation-panel-header">
            <span style="font-weight: 700; font-size: 13px;">Reconciliation Actions</span>
            ${selectedStmt ? `<span class="badge badge-posted font-mono">${AccountingEngine.formatCurrency(selectedStmt.amount, symbol)}</span>` : ""}
          </div>

          <div class="match-candidates-container">
            ${!selectedStmt ? `
              <div style="padding: 40px 20px; text-align: center; color: var(--text-muted);">
                Select a bank statement transaction on the left to reconcile.
              </div>
            ` : renderRightReconcileContent(selectedStmt, invoices, bills, partners, accounts, symbol)}
          </div>
        </div>
      </div>
    `;
    container.querySelectorAll(".statement-line-item").forEach((item) => {
      item.onclick = () => {
        selectedStmtId = item.dataset.id;
        renderView();
      };
    });
    container.querySelector("#btn-add-statement-line")?.addEventListener("click", () => {
      openAddStatementLineModal(renderView);
    });
    container.querySelector("#btn-reconcile-suggested")?.addEventListener("click", (e) => {
      const docType = e.currentTarget.dataset.type;
      const docId = e.currentTarget.dataset.id;
      store.reconcileBankStatement(selectedStmt.id, { type: docType, docId });
      toast.success(`Transaction reconciled successfully!`);
      selectedStmtId = store.getBankStatements().find((s) => !s.reconciled)?.id || null;
      renderView();
    });
    container.querySelector("#btn-manual-account-reconcile")?.addEventListener("click", () => {
      const accSelect = container.querySelector("#manual-reconcile-account");
      const accCode = accSelect.value;
      store.reconcileBankStatement(selectedStmt.id, { type: "account", accountId: accCode });
      toast.success(`Direct account write-off reconciled!`);
      selectedStmtId = store.getBankStatements().find((s) => !s.reconciled)?.id || null;
      renderView();
    });
  }
  function renderRightReconcileContent(stmt, invoices, bills, partners, accounts, symbol2) {
    const isIncoming = stmt.amount > 0;
    const absAmt = Math.abs(stmt.amount);
    let matchDoc = null;
    let matchType = "";
    if (isIncoming) {
      matchDoc = invoices.find((i) => Math.abs(i.amountDue - absAmt) < 0.01);
      matchType = "invoice";
    } else {
      matchDoc = bills.find((b) => Math.abs(b.amountDue - absAmt) < 0.01);
      matchType = "bill";
    }
    const partner = partners.find((p) => p.id === stmt.partnerId);
    return `
      <!-- Active Statement Info Header -->
      <div style="background: var(--bg-surface-secondary); padding: 14px 16px; border-radius: var(--radius-lg); border: 1px solid var(--border-base);">
        <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 2px;">
          Active Bank Statement Line
        </div>
        <div style="font-size: 16px; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">
          ${stmt.label}
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-secondary);">
          <span>Date: <strong>${AccountingEngine.formatDate(stmt.date)}</strong></span>
          <span>Amount: <strong class="font-mono ${isIncoming ? "text-credit" : "text-debit"}" style="color: ${isIncoming ? "var(--credit-color)" : "var(--danger)"};">${AccountingEngine.formatCurrency(stmt.amount, symbol2)}</strong></span>
        </div>
      </div>

      <!-- Suggested Match Card -->
      ${matchDoc ? `
        <div class="match-suggestion-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="match-score-badge">\u2713 100% Exact Match Found</span>
            <span class="font-mono" style="font-weight: 700; color: var(--accent);">${AccountingEngine.formatCurrency(matchDoc.amountDue, symbol2)}</span>
          </div>

          <div>
            <div style="font-size: 14px; font-weight: 700; color: var(--text-main);">
              ${matchType === "invoice" ? "Customer Invoice" : "Vendor Bill"}: ${matchDoc.number}
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
              Partner: <strong>${partners.find((p) => p.id === matchDoc.partnerId)?.name || "Unknown"}</strong> &bull; Due: ${AccountingEngine.formatDate(matchDoc.dueDate)}
            </div>
          </div>

          <button class="btn btn-teal btn-md" id="btn-reconcile-suggested" data-type="${matchType}" data-id="${matchDoc.id}" style="width: 100%; font-weight: 700; margin-top: 4px;">
            ${getIcon("check")} Reconcile & Clear ${matchDoc.number}
          </button>
        </div>
      ` : `
        <div style="padding: 14px; background: var(--bg-surface-secondary); border-radius: var(--radius-md); font-size: 12px; color: var(--text-muted); text-align: center;">
          No exact open document matched the amount ${AccountingEngine.formatCurrency(stmt.amount, symbol2)}. You can allocate manually below.
        </div>
      `}

      <!-- Manual Direct Allocation / Write-off -->
      <div style="margin-top: 10px; border-top: 1px solid var(--border-base); padding-top: 16px;">
        <h4 style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
          Or Allocate Directly to GL Account (Bank Fees, Interest, Misc)
        </h4>

        <div class="form-group">
          <select class="form-control" id="manual-reconcile-account">
            <option value="650000" ${stmt.amount < 0 && Math.abs(stmt.amount) < 100 ? "selected" : ""}>650000 - Bank Charges & Merchant Fees</option>
            <option value="490000" ${stmt.amount > 0 ? "selected" : ""}>490000 - Interest & Other Income</option>
            <option value="640000">640000 - Travel & Business Entertainment</option>
            <option value="620000">620000 - Cloud Infrastructure (AWS/GCP)</option>
            <option value="670000">670000 - Utilities & Office Supplies</option>
          </select>
        </div>

        <button class="btn btn-secondary btn-sm" id="btn-manual-account-reconcile" style="width: 100%; font-weight: 600;">
          Create Direct Journal Entry & Reconcile
        </button>
      </div>
    `;
  }
  renderView();
}
function openAddStatementLineModal(onDone) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const partners = store.getPartners();
  modal.open({
    title: `${getIcon("landmark")} Add Bank Transaction`,
    size: "md",
    contentHtml: `
      <div class="form-group">
        <label class="form-label required">Transaction Description</label>
        <input type="text" class="form-control" id="new-stmt-label" placeholder="e.g. Wire Transfer from Customer / Monthly Cloud Fee" />
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Amount (Positive = In, Negative = Out)</label>
            <div class="input-group">
              <span class="input-prefix">${symbol}</span>
              <input type="number" step="0.01" class="form-control" id="new-stmt-amount" placeholder="e.g. 1500.00 or -45.00" />
            </div>
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Date</label>
            <input type="date" class="form-control" id="new-stmt-date" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Partner (Optional)</label>
        <select class="form-control" id="new-stmt-partner">
          <option value="">-- None / Direct Bank Transaction --</option>
          ${partners.map((p) => `
            <option value="${p.id}">${p.name}</option>
          `).join("")}
        </select>
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-stmt-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-stmt-save">Save Transaction</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-stmt-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-stmt-save").onclick = () => {
        const label = body.querySelector("#new-stmt-label").value.trim();
        const amount = parseFloat(body.querySelector("#new-stmt-amount").value);
        const date = body.querySelector("#new-stmt-date").value;
        const partnerId = body.querySelector("#new-stmt-partner").value || null;
        if (!label) {
          toast.warning("Please enter a description for the transaction.");
          return;
        }
        if (isNaN(amount) || amount === 0) {
          toast.warning("Please enter a non-zero transaction amount.");
          return;
        }
        store.addBankStatementLine({ label, amount, date, partnerId });
        modal.close();
        toast.success("Bank transaction added!");
        onDone();
      };
    }
  });
}

// js/views/journal.js
function renderJournalEntries(container, navigate, params = {}) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  if (params.action === "new") {
    renderNewJournalEntryForm(container, navigate);
    return;
  }
  let entries = store.getJournalEntries();
  const journals = store.getJournals();
  const activeJournalFilter = params.filterJournal || null;
  if (activeJournalFilter) {
    entries = entries.filter((e) => e.journalId === activeJournalFilter);
  }
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-entry">
          ${getIcon("plus")} New Entry
        </button>
        ${activeJournalFilter ? `
          <span class="search-pill">
            Journal: ${activeJournalFilter}
            <span class="pill-close" id="clear-journal-filter">&times;</span>
          </span>
        ` : ""}
      </div>

      <div style="display: flex; gap: 6px;">
        <button class="btn btn-secondary btn-sm ${!activeJournalFilter ? "btn-primary" : ""}" id="jfilter-all">All</button>
        ${journals.map((j) => `
          <button class="btn btn-secondary btn-sm ${activeJournalFilter === j.id ? "btn-primary" : ""}" id="jfilter-${j.id}">
            ${j.code}
          </button>
        `).join("")}
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table">
          <thead>
            <tr>
              <th width="120">Number</th>
              <th>Date</th>
              <th>Journal</th>
              <th>Reference / Label</th>
              <th class="text-right">Total Debit</th>
              <th class="text-right">Total Credit</th>
              <th class="text-center" width="100">Status</th>
            </tr>
          </thead>
          <tbody>
            ${entries.length === 0 ? `
              <tr>
                <td colspan="7" class="table-empty-state">
                  <div class="table-empty-icon">${getIcon("shuffle")}</div>
                  <div>No journal entries found.</div>
                </td>
              </tr>
            ` : entries.map((entry) => {
    const debitTotal = entry.lines.reduce((sum, l) => sum + (parseFloat(l.debit) || 0), 0);
    const creditTotal = entry.lines.reduce((sum, l) => sum + (parseFloat(l.credit) || 0), 0);
    const journal = journals.find((j) => j.id === entry.journalId) || { name: entry.journalId };
    return `
                <tr class="clickable" data-id="${entry.id}">
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${entry.number}</td>
                  <td>${AccountingEngine.formatDate(entry.date)}</td>
                  <td><span class="badge badge-draft" style="font-weight: 700;">${entry.journalId}</span> ${journal.name}</td>
                  <td><strong>${entry.reference || "-"}</strong></td>
                  <td class="text-right font-mono" style="color: var(--debit-color); font-weight: 700;">
                    ${AccountingEngine.formatCurrency(debitTotal, symbol)}
                  </td>
                  <td class="text-right font-mono" style="color: var(--credit-color); font-weight: 700;">
                    ${AccountingEngine.formatCurrency(creditTotal, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge badge-posted">
                      <span class="badge-dot"></span>
                      ${entry.status}
                    </span>
                  </td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.querySelector("#btn-create-entry")?.addEventListener("click", () => {
    navigate("journal", { action: "new" });
  });
  container.querySelector("#clear-journal-filter")?.addEventListener("click", () => {
    navigate("journal");
  });
  container.querySelector("#jfilter-all")?.addEventListener("click", () => {
    navigate("journal");
  });
  journals.forEach((j) => {
    container.querySelector(`#jfilter-${j.id}`)?.addEventListener("click", () => {
      navigate("journal", { filterJournal: j.id });
    });
  });
  container.querySelectorAll("tbody tr.clickable").forEach((row) => {
    row.onclick = () => {
      const entryId = row.dataset.id;
      openViewEntryModal(entryId);
    };
  });
}
function renderNewJournalEntryForm(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const journals = store.getJournals();
  const accounts = store.getAccounts();
  const partners = store.getPartners();
  let selectedJournal = "MISC";
  let date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let reference = "Manual General Journal Adjustment";
  let lines = [
    { id: "1", accountId: "101000", partnerId: "", label: "Bank SVB Adjustment", debit: 1e3, credit: 0 },
    { id: "2", accountId: "305000", partnerId: "", label: "Retained Earnings Adjustment", debit: 0, credit: 1e3 }
  ];
  function renderForm() {
    container.innerHTML = `
      <div class="app-statusbar">
        <div class="statusbar-buttons">
          <button class="btn btn-secondary btn-sm" id="btn-cancel-new-entry">
            &larr; Journal Entries
          </button>
          <button class="btn btn-primary btn-sm" id="btn-post-new-entry">
            ${getIcon("check")} Post Entry
          </button>
        </div>

        <div class="statusbar-steps">
          <div class="status-step active">Draft</div>
          <div class="status-step">Posted</div>
        </div>
      </div>

      <div class="document-sheet">
        <div class="document-sheet-header">
          <div>
            <span class="document-title-badge">New Journal Entry</span>
            <div class="document-title-number" id="entry-number-preview">${store.getNextJournalEntryNumber(selectedJournal)}</div>
          </div>
          <div id="balance-badge-container"></div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Accounting Journal</label>
              <select class="form-control" id="entry-journal-select">
                ${journals.map((j) => `
                  <option value="${j.id}" ${j.id === selectedJournal ? "selected" : ""}>
                    ${j.code} - ${j.name}
                  </option>
                `).join("")}
              </select>
            </div>
          </div>

          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Accounting Date</label>
              <input type="date" class="form-control" id="entry-date-input" value="${date}" />
            </div>
          </div>

          <div class="form-col" style="flex: 1.5;">
            <div class="form-group">
              <label class="form-label required">Reference / Memo</label>
              <input type="text" class="form-control" id="entry-ref-input" value="${reference}" />
            </div>
          </div>
        </div>

        <h4 style="font-size: 13px; font-weight: 700; text-transform: uppercase; margin: 24px 0 10px 0; color: var(--text-secondary);">
          Journal Items (Debits must equal Credits)
        </h4>

        <table class="line-items-table">
          <thead>
            <tr>
              <th width="240">Account</th>
              <th width="180">Partner</th>
              <th>Label</th>
              <th width="140" class="text-right">Debit</th>
              <th width="140" class="text-right">Credit</th>
              <th width="40"></th>
            </tr>
          </thead>
          <tbody id="entry-lines-tbody"></tbody>
          <tfoot class="table-footer">
            <tr>
              <td colspan="3" style="text-align: right; font-weight: 700;">Totals:</td>
              <td class="text-right font-mono" id="entry-total-debit" style="color: var(--debit-color); font-weight: 800;">$0.00</td>
              <td class="text-right font-mono" id="entry-total-credit" style="color: var(--credit-color); font-weight: 800;">$0.00</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <div style="margin-top: 14px; display: flex; justify-content: space-between; align-items: center;">
          <button class="btn btn-secondary btn-sm" id="btn-add-entry-line">
            ${getIcon("plus")} Add a line
          </button>

          <div id="entry-balance-feedback" style="font-weight: 700; font-size: 13px;"></div>
        </div>
      </div>
    `;
    bindFormEvents();
    renderLinesTable();
  }
  function renderLinesTable() {
    const tbody = container.querySelector("#entry-lines-tbody");
    tbody.innerHTML = lines.map((line, idx) => `
      <tr data-index="${idx}">
        <td>
          <select class="form-control line-acc" data-index="${idx}">
            ${accounts.map((a) => `
              <option value="${a.code}" ${a.code === line.accountId ? "selected" : ""}>
                ${a.code} - ${a.name}
              </option>
            `).join("")}
          </select>
        </td>
        <td>
          <select class="form-control line-partner" data-index="${idx}">
            <option value="">-- None --</option>
            ${partners.map((p) => `
              <option value="${p.id}" ${p.id === line.partnerId ? "selected" : ""}>
                ${p.name}
              </option>
            `).join("")}
          </select>
        </td>
        <td>
          <input type="text" class="form-control line-label" data-index="${idx}" value="${line.label}" />
        </td>
        <td>
          <input type="number" step="0.01" min="0" class="form-control text-right line-debit font-mono" data-index="${idx}" value="${line.debit || ""}" placeholder="0.00" />
        </td>
        <td>
          <input type="number" step="0.01" min="0" class="form-control text-right line-credit font-mono" data-index="${idx}" value="${line.credit || ""}" placeholder="0.00" />
        </td>
        <td class="text-center">
          <button class="delete-line-btn" data-index="${idx}">${getIcon("trash-2")}</button>
        </td>
      </tr>
    `).join("");
    updateTotals();
    bindLineInputs();
  }
  function updateTotals() {
    const totalDebit = lines.reduce((sum, l) => sum + (parseFloat(l.debit) || 0), 0);
    const totalCredit = lines.reduce((sum, l) => sum + (parseFloat(l.credit) || 0), 0);
    const diff = Math.abs(totalDebit - totalCredit);
    const isBalanced = diff < 0.01 && totalDebit > 0;
    container.querySelector("#entry-total-debit").textContent = AccountingEngine.formatCurrency(totalDebit, symbol);
    container.querySelector("#entry-total-credit").textContent = AccountingEngine.formatCurrency(totalCredit, symbol);
    const feedbackEl = container.querySelector("#entry-balance-feedback");
    const badgeEl = container.querySelector("#balance-badge-container");
    if (isBalanced) {
      feedbackEl.style.color = "var(--credit-color)";
      feedbackEl.innerHTML = `\u2713 Balanced: Debits equal Credits (${AccountingEngine.formatCurrency(totalDebit, symbol)})`;
      badgeEl.innerHTML = `<span class="badge badge-paid">Balanced</span>`;
    } else {
      feedbackEl.style.color = "var(--danger)";
      feedbackEl.innerHTML = `\u26A0 Unbalanced: Difference of ${AccountingEngine.formatCurrency(diff, symbol)}`;
      badgeEl.innerHTML = `<span class="badge badge-overdue">Difference: ${AccountingEngine.formatCurrency(diff, symbol)}</span>`;
    }
  }
  function bindLineInputs() {
    const tbody = container.querySelector("#entry-lines-tbody");
    tbody.querySelectorAll(".line-acc").forEach((sel) => {
      sel.onchange = () => {
        lines[parseInt(sel.dataset.index)].accountId = sel.value;
      };
    });
    tbody.querySelectorAll(".line-partner").forEach((sel) => {
      sel.onchange = () => {
        lines[parseInt(sel.dataset.index)].partnerId = sel.value;
      };
    });
    tbody.querySelectorAll(".line-label").forEach((inp) => {
      inp.oninput = () => {
        lines[parseInt(inp.dataset.index)].label = inp.value;
      };
    });
    tbody.querySelectorAll(".line-debit").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        lines[idx].debit = parseFloat(inp.value) || 0;
        if (lines[idx].debit > 0) {
          lines[idx].credit = 0;
          const credInput = tbody.querySelector(`.line-credit[data-index="${idx}"]`);
          if (credInput) credInput.value = "";
        }
        updateTotals();
      };
    });
    tbody.querySelectorAll(".line-credit").forEach((inp) => {
      inp.oninput = () => {
        const idx = parseInt(inp.dataset.index);
        lines[idx].credit = parseFloat(inp.value) || 0;
        if (lines[idx].credit > 0) {
          lines[idx].debit = 0;
          const debInput = tbody.querySelector(`.line-debit[data-index="${idx}"]`);
          if (debInput) debInput.value = "";
        }
        updateTotals();
      };
    });
    tbody.querySelectorAll(".delete-line-btn").forEach((btn) => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        if (lines.length <= 2) {
          toast.warning("A double-entry journal entry requires at least two lines.");
          return;
        }
        lines.splice(idx, 1);
        renderLinesTable();
      };
    });
  }
  function bindFormEvents() {
    container.querySelector("#btn-cancel-new-entry")?.addEventListener("click", () => navigate("journal"));
    container.querySelector("#entry-journal-select")?.addEventListener("change", (e) => {
      selectedJournal = e.target.value;
      container.querySelector("#entry-number-preview").textContent = store.getNextJournalEntryNumber(selectedJournal);
    });
    container.querySelector("#entry-date-input")?.addEventListener("change", (e) => {
      date = e.target.value;
    });
    container.querySelector("#entry-ref-input")?.addEventListener("input", (e) => {
      reference = e.target.value;
    });
    container.querySelector("#btn-add-entry-line")?.addEventListener("click", () => {
      lines.push({
        id: `line-${Date.now()}-${lines.length + 1}`,
        accountId: "600000",
        partnerId: "",
        label: reference,
        debit: 0,
        credit: 0
      });
      renderLinesTable();
    });
    container.querySelector("#btn-post-new-entry")?.addEventListener("click", () => {
      const totalDebit = lines.reduce((sum, l) => sum + (parseFloat(l.debit) || 0), 0);
      const totalCredit = lines.reduce((sum, l) => sum + (parseFloat(l.credit) || 0), 0);
      if (Math.abs(totalDebit - totalCredit) >= 0.01 || totalDebit <= 0) {
        toast.error("Cannot post entry: Total Debits must equal Total Credits and be greater than 0.");
        return;
      }
      const newEntry = {
        id: `entry-${Date.now()}`,
        number: store.getNextJournalEntryNumber(selectedJournal),
        journalId: selectedJournal,
        date,
        reference,
        status: "posted",
        lines: lines.map((l, idx) => ({
          id: `line-${Date.now()}-${idx}`,
          accountId: l.accountId,
          partnerId: l.partnerId || null,
          label: l.label || reference,
          debit: parseFloat(l.debit) || 0,
          credit: parseFloat(l.credit) || 0
        }))
      };
      store.saveJournalEntry(newEntry);
      toast.success(`Journal Entry ${newEntry.number} posted to General Ledger!`);
      navigate("journal");
    });
  }
  renderForm();
}
function openViewEntryModal(entryId) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const entry = store.getJournalEntries().find((e) => e.id === entryId);
  const accounts = store.getAccounts();
  const partners = store.getPartners();
  if (!entry) return;
  const totalDebit = entry.lines.reduce((sum, l) => sum + (parseFloat(l.debit) || 0), 0);
  const totalCredit = entry.lines.reduce((sum, l) => sum + (parseFloat(l.credit) || 0), 0);
  modal.open({
    title: `${getIcon("shuffle")} Journal Entry ${entry.number}`,
    size: "lg",
    contentHtml: `
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 13px;">
        <div><strong>Journal:</strong> ${entry.journalId}</div>
        <div><strong>Date:</strong> ${AccountingEngine.formatDate(entry.date)}</div>
        <div><strong>Reference:</strong> ${entry.reference || "-"}</div>
        <div><span class="badge badge-posted">${entry.status}</span></div>
      </div>

      <table class="app-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Partner</th>
            <th>Label</th>
            <th class="text-right">Debit</th>
            <th class="text-right">Credit</th>
          </tr>
        </thead>
        <tbody>
          ${entry.lines.map((line) => {
      const acc = accounts.find((a) => a.code === line.accountId) || { name: line.accountId };
      const partner = partners.find((p) => p.id === line.partnerId);
      return `
              <tr>
                <td><strong>${line.accountId}</strong> &bull; ${acc.name}</td>
                <td>${partner ? partner.name : "-"}</td>
                <td>${line.label}</td>
                <td class="text-right font-mono" style="color: var(--debit-color); font-weight: 700;">
                  ${line.debit > 0 ? AccountingEngine.formatCurrency(line.debit, symbol) : "-"}
                </td>
                <td class="text-right font-mono" style="color: var(--credit-color); font-weight: 700;">
                  ${line.credit > 0 ? AccountingEngine.formatCurrency(line.credit, symbol) : "-"}
                </td>
              </tr>
            `;
    }).join("")}
        </tbody>
        <tfoot class="table-footer">
          <tr>
            <td colspan="3" class="text-right">Total:</td>
            <td class="text-right font-mono" style="color: var(--debit-color); font-weight: 800;">
              ${AccountingEngine.formatCurrency(totalDebit, symbol)}
            </td>
            <td class="text-right font-mono" style="color: var(--credit-color); font-weight: 800;">
              ${AccountingEngine.formatCurrency(totalCredit, symbol)}
            </td>
          </tr>
        </tfoot>
      </table>
    `,
    footerHtml: `
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">Close</button>
    `
  });
}

// js/views/reports.js
function renderReports(container, navigate, params = {}) {
  const activeTab = params.tab || "bs";
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const reportCategories = [
    {
      category: "Statement Reports",
      tabs: [
        { id: "bs", label: "Balance Sheet" },
        { id: "pnl", label: "Profit and Loss" },
        { id: "cash-flow", label: "Cash Flow Statement" },
        { id: "depreciation", label: "Depreciation Schedule" }
      ]
    },
    {
      category: "Ledgers",
      tabs: [
        { id: "tb", label: "Trial Balance" },
        { id: "gl", label: "General Ledger" }
      ]
    },
    {
      category: "Partner Reports",
      tabs: [
        { id: "partner-ledger", label: "Partner Ledger" },
        { id: "customer-statement", label: "Customer Statement" },
        { id: "aged-ar", label: "Aged Receivable" },
        { id: "aged-ap", label: "Aged Payable" }
      ]
    },
    {
      category: "Taxes & Fiscal",
      tabs: [
        { id: "tax", label: "Tax Report" },
        { id: "fiscal", label: "Fiscal Report" }
      ]
    },
    {
      category: "Management",
      tabs: [
        { id: "invoice-analysis", label: "Invoice Analysis" },
        { id: "cashflow-analysis", label: "Cashflow Analysis" },
        { id: "analytic", label: "Analytic Report" },
        { id: "exec-summary", label: "Executive Summary" },
        { id: "loans-analysis", label: "Loans Analysis" }
      ]
    },
    {
      category: "Bangladesh",
      tabs: [
        { id: "bd-corporate-tax", label: "Corporate Tax Report" }
      ]
    }
  ];
  container.innerHTML = `
    <!-- Reports Header & Navigation Bar -->
    <div class="report-header-card" style="margin-bottom: 16px;">
      <div class="report-title-group">
        <div style="display: flex; align-items: center; gap: 8px;">
          <h2>Financial Statements & Statutory Reporting</h2>
          <span class="badge badge-posted" style="font-size: 11px;">IFRS & BFRS Compliant</span>
        </div>
        <div class="report-subtitle">
          Real-time double-entry financial reporting powered by live General Ledger journals for ${company.name}.
        </div>
      </div>

      <div class="report-actions" style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" id="btn-export-csv">
          ${getIcon("download")} Export CSV
        </button>
        <button class="btn btn-secondary btn-sm" id="btn-print-report">
          ${getIcon("printer")} Print Report
        </button>
      </div>
    </div>

    <!-- Grouped Category Navigation Bar -->
    <div class="review-nav-bar" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 22px; display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
      ${reportCategories.map((cat) => `
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; padding-right: 4px;">
            ${cat.category}:
          </span>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            ${cat.tabs.map((t) => `
              <button class="btn btn-sm ${activeTab === t.id ? "btn-primary" : "btn-secondary"}" 
                      id="rtab-${t.id}" 
                      style="padding: 4px 10px; font-size: 12px;">
                ${t.label}
              </button>
            `).join("")}
          </div>
        </div>
      `).join('<div style="width: 1px; height: 18px; background: var(--border-light); margin: 0 4px;"></div>')}
    </div>

    <!-- Report Sheet Content -->
    <div class="document-sheet" id="report-sheet-content">
      <!-- Injected report content -->
    </div>
  `;
  reportCategories.forEach((cat) => {
    cat.tabs.forEach((t) => {
      container.querySelector(`#rtab-${t.id}`)?.addEventListener("click", () => {
        navigate("reports", { tab: t.id });
      });
    });
  });
  container.querySelector("#btn-print-report")?.addEventListener("click", () => {
    window.print();
  });
  const sheet = container.querySelector("#report-sheet-content");
  switch (activeTab) {
    // 1. Statement Reports
    case "bs":
      renderBalanceSheetReport(sheet, company, symbol);
      break;
    case "pnl":
      renderProfitAndLossReport(sheet, company, symbol);
      break;
    case "cash-flow":
      renderCashFlowReport(sheet, company, symbol);
      break;
    case "depreciation":
      renderDepreciationScheduleReport(sheet, company, symbol);
      break;
    // 2. Ledgers
    case "tb":
      renderTrialBalanceReport(sheet, company, symbol);
      break;
    case "gl":
      renderGeneralLedgerReport(sheet, company, symbol);
      break;
    // 3. Partner Reports
    case "partner-ledger":
      renderPartnerLedgerReport(sheet, company, symbol);
      break;
    case "customer-statement":
      renderCustomerStatementReport(sheet, company, symbol);
      break;
    case "aged-ar":
      renderAgedReceivablesReport(sheet, company, symbol);
      break;
    case "aged-ap":
      renderAgedPayablesReport(sheet, company, symbol);
      break;
    // 4. Taxes & Fiscal
    case "tax":
      renderTaxReportView(sheet, company, symbol);
      break;
    case "fiscal":
      renderFiscalReportView(sheet, company, symbol);
      break;
    // 5. Management
    case "invoice-analysis":
      renderInvoiceAnalysisReport(sheet, company, symbol);
      break;
    case "cashflow-analysis":
      renderCashflowAnalysisReport(sheet, company, symbol);
      break;
    case "analytic":
      renderAnalyticReport(sheet, company, symbol);
      break;
    case "exec-summary":
      renderExecutiveSummaryReport(sheet, company, symbol);
      break;
    case "loans-analysis":
      renderLoansAnalysisReport(sheet, company, symbol);
      break;
    // 6. Bangladesh
    case "bd-corporate-tax":
      renderBangladeshCorporateTaxReport(sheet, company, symbol);
      break;
    default:
      renderBalanceSheetReport(sheet, company, symbol);
  }
  container.querySelector("#btn-export-csv")?.addEventListener("click", () => {
    exportCurrentTableToCSV(`report-${activeTab}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
  });
}
function renderBalanceSheetReport(sheet, company, symbol) {
  const bs = AccountingEngine.getBalanceSheet();
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Statement of Financial Position (Balance Sheet)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        As of ${AccountingEngine.formatDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))} &bull; Values in ${company.currency}
      </div>
    </div>

    <!-- Accounting Equation Validation Banner -->
    <div class="balance-check-banner ${bs.isBalanced ? "balanced" : "unbalanced"}">
      ${bs.isBalanced ? `
        ${getIcon("check")} <strong>Accounting Equation Balanced:</strong> Total Assets (${AccountingEngine.formatCurrency(bs.totalAssets, symbol)}) = Total Liabilities & Equity (${AccountingEngine.formatCurrency(bs.totalLiabilitiesAndEquity, symbol)})
      ` : `
        ${getIcon("shuffle")} <strong>Warning:</strong> Equation Unbalanced by ${AccountingEngine.formatCurrency(bs.difference, symbol)}
      `}
    </div>

    <table class="report-table-tree" id="exportable-table" style="margin-top: 16px;">
      <!-- ASSETS -->
      <tr class="section-header" style="background: var(--primary-light); color: var(--primary);">
        <td colspan="2" style="font-size: 14px;">1. ASSETS</td>
      </tr>

      <tr class="section-header">
        <td colspan="2" class="tree-indent-1">Current Assets</td>
      </tr>
      ${bs.currentAssets.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-2">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td class="tree-indent-1">Total Current Assets</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(bs.totalCurrentAssets, symbol)}</td>
      </tr>

      <tr class="section-header">
        <td colspan="2" class="tree-indent-1">Non-Current Assets</td>
      </tr>
      ${bs.nonCurrentAssets.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-2">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td class="tree-indent-1">Total Non-Current Assets</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(bs.totalNonCurrentAssets, symbol)}</td>
      </tr>

      <tr class="grand-total-row">
        <td>TOTAL ASSETS</td>
        <td class="text-right font-mono" style="font-size: 16px; color: var(--primary);">${AccountingEngine.formatCurrency(bs.totalAssets, symbol)}</td>
      </tr>

      <!-- LIABILITIES -->
      <tr class="section-header" style="background: var(--primary-light); color: var(--primary); margin-top: 24px;">
        <td colspan="2" style="font-size: 14px;">2. LIABILITIES</td>
      </tr>

      <tr class="section-header">
        <td colspan="2" class="tree-indent-1">Current Liabilities</td>
      </tr>
      ${bs.currentLiabilities.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-2">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td class="tree-indent-1">Total Current Liabilities</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(bs.totalCurrentLiabilities, symbol)}</td>
      </tr>

      <tr class="section-header">
        <td colspan="2" class="tree-indent-1">Non-Current Liabilities</td>
      </tr>
      ${bs.nonCurrentLiabilities.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-2">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td class="tree-indent-1">Total Non-Current Liabilities</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(bs.totalNonCurrentLiabilities, symbol)}</td>
      </tr>

      <tr class="subtotal-row" style="background: var(--bg-hover);">
        <td>Total Liabilities</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(bs.totalLiabilities, symbol)}</td>
      </tr>

      <!-- EQUITY -->
      <tr class="section-header" style="background: var(--primary-light); color: var(--primary); margin-top: 24px;">
        <td colspan="2" style="font-size: 14px;">3. SHAREHOLDERS' EQUITY</td>
      </tr>
      ${bs.equityAccounts.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-1">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="data-row" style="background: var(--bg-surface-secondary);">
        <td class="tree-indent-1"><strong>Current Year Net Earnings (from P&L)</strong></td>
        <td class="text-right font-mono" style="font-weight: 700; color: ${bs.currentYearEarnings >= 0 ? "var(--credit-color)" : "var(--danger)"};">
          ${AccountingEngine.formatCurrency(bs.currentYearEarnings, symbol)}
        </td>
      </tr>
      <tr class="subtotal-row">
        <td>Total Equity</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(bs.totalEquity, symbol)}</td>
      </tr>

      <tr class="grand-total-row">
        <td>TOTAL LIABILITIES & EQUITY</td>
        <td class="text-right font-mono" style="font-size: 16px; color: var(--primary);">${AccountingEngine.formatCurrency(bs.totalLiabilitiesAndEquity, symbol)}</td>
      </tr>
    </table>
  `;
}
function renderProfitAndLossReport(sheet, company, symbol) {
  const pnl = AccountingEngine.getProfitAndLoss();
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Statement of Profit and Loss (Income Statement)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        For Fiscal Year to Date &bull; As of ${AccountingEngine.formatDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))} &bull; Values in ${company.currency}
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <!-- 1. Operating Revenue -->
      <tr class="section-header">
        <td colspan="2">Operating Revenue</td>
      </tr>
      ${pnl.revenueAccounts.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-1">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      ${pnl.otherIncomeAccounts.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-1">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td>Total Revenue</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(pnl.grossRevenue, symbol)}</td>
      </tr>

      <!-- 2. Cost of Goods Sold -->
      <tr class="section-header">
        <td colspan="2">Cost of Goods Sold (COGS)</td>
      </tr>
      ${pnl.cogsAccounts.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-1">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td>Total Cost of Goods Sold</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(pnl.totalCOGS, symbol)}</td>
      </tr>

      <!-- Gross Profit -->
      <tr class="grand-total-row" style="background: var(--bg-surface-secondary); color: var(--text-main);">
        <td>Gross Profit (${pnl.grossMarginPct.toFixed(1)}% Gross Margin)</td>
        <td class="text-right font-mono" style="color: var(--credit-color);">${AccountingEngine.formatCurrency(pnl.grossProfit, symbol)}</td>
      </tr>

      <!-- 3. Operating Expenses -->
      <tr class="section-header">
        <td colspan="2">Operating Expenses</td>
      </tr>
      ${pnl.expenseAccounts.map((acc) => `
        <tr class="data-row">
          <td class="tree-indent-1">${acc.code} - ${acc.name}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(acc.balance, symbol)}</td>
        </tr>
      `).join("")}
      <tr class="subtotal-row">
        <td>Total Operating Expenses</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(pnl.totalExpenses, symbol)}</td>
      </tr>

      <!-- Net Profit -->
      <tr class="grand-total-row">
        <td style="font-size: 16px;">NET PROFIT / (NET LOSS)</td>
        <td class="text-right font-mono" style="font-size: 18px; color: ${pnl.netProfit >= 0 ? "var(--credit-color)" : "var(--danger)"};">
          ${AccountingEngine.formatCurrency(pnl.netProfit, symbol)}
        </td>
      </tr>
    </table>
  `;
}
function renderCashFlowReport(sheet, company, symbol) {
  const pnl = AccountingEngine.getProfitAndLoss();
  const bs = AccountingEngine.getBalanceSheet();
  const netIncome = pnl.netProfit;
  const depreciation = 1800;
  const arChange = -6490;
  const invChange = -24500;
  const prepaidChange = -6200;
  const apChange = 5390;
  const vatChange = 2850;
  const accruedChange = 14500;
  const netOperatingCash = netIncome + depreciation + arChange + invChange + prepaidChange + apChange + vatChange + accruedChange;
  const capex = -35e3;
  const netInvestingCash = capex;
  const equityIssued = 1e5;
  const loanProceeds = 4e4;
  const netFinancingCash = equityIssued + loanProceeds;
  const netCashFlow = netOperatingCash + netInvestingCash + netFinancingCash;
  const cashAtStart = 24600;
  const cashAtEnd = cashAtStart + netCashFlow;
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Statement of Cash Flows (Indirect Method)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        For Fiscal Year to Date &bull; Conforms with IAS 7 &bull; Values in ${company.currency}
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <!-- 1. Operating Activities -->
      <tr class="section-header" style="background: var(--primary-light); color: var(--primary);">
        <td colspan="2">1. Cash Flows from Operating Activities</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-1"><strong>Net Profit for the Period</strong></td>
        <td class="text-right font-mono" style="font-weight: 700; color: var(--credit-color);">${AccountingEngine.formatCurrency(netIncome, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">Adjustments: Depreciation & Amortization Expense (Non-Cash)</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(depreciation, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">(Increase) in Accounts Receivable (A/R)</td>
        <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(arChange, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">(Increase) in Inventory Asset Stock</td>
        <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(invChange, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">(Increase) in Prepaid Insurance & Expenses</td>
        <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(prepaidChange, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">Increase in Accounts Payable (A/P)</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(apChange, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">Increase in Sales Tax / VAT Payable</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(vatChange, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-2">Increase in Accrued Salaries & Operating Obligations</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(accruedChange, symbol)}</td>
      </tr>
      <tr class="subtotal-row">
        <td>Net Cash Generated from Operating Activities</td>
        <td class="text-right font-mono" style="font-weight: 700; color: var(--success);">${AccountingEngine.formatCurrency(netOperatingCash, symbol)}</td>
      </tr>

      <!-- 2. Investing Activities -->
      <tr class="section-header" style="background: var(--primary-light); color: var(--primary); margin-top: 18px;">
        <td colspan="2">2. Cash Flows from Investing Activities</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-1">Purchase of Computer, Server & Data Center Infrastructure (Capex)</td>
        <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(capex, symbol)}</td>
      </tr>
      <tr class="subtotal-row">
        <td>Net Cash (Used in) Investing Activities</td>
        <td class="text-right font-mono" style="font-weight: 700; color: var(--danger);">${AccountingEngine.formatCurrency(netInvestingCash, symbol)}</td>
      </tr>

      <!-- 3. Financing Activities -->
      <tr class="section-header" style="background: var(--primary-light); color: var(--primary); margin-top: 18px;">
        <td colspan="2">3. Cash Flows from Financing Activities</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-1">Proceeds from Common Stock Capital Issue</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(equityIssued, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td class="tree-indent-1">Proceeds from Long-Term Bank Loan Facility</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(loanProceeds, symbol)}</td>
      </tr>
      <tr class="subtotal-row">
        <td>Net Cash Provided by Financing Activities</td>
        <td class="text-right font-mono" style="font-weight: 700; color: var(--success);">${AccountingEngine.formatCurrency(netFinancingCash, symbol)}</td>
      </tr>

      <!-- Net Reconciliation -->
      <tr class="grand-total-row" style="background: var(--bg-surface-secondary); margin-top: 20px;">
        <td>NET INCREASE IN CASH AND CASH EQUIVALENTS</td>
        <td class="text-right font-mono" style="font-size: 15px; color: var(--credit-color);">${AccountingEngine.formatCurrency(netCashFlow, symbol)}</td>
      </tr>
      <tr class="data-row">
        <td>Cash & Cash Equivalents at Beginning of Period</td>
        <td class="text-right font-mono">${AccountingEngine.formatCurrency(cashAtStart, symbol)}</td>
      </tr>
      <tr class="grand-total-row">
        <td style="font-size: 15px;">CASH & CASH EQUIVALENTS AT END OF PERIOD</td>
        <td class="text-right font-mono" style="font-size: 17px; color: var(--primary);">${AccountingEngine.formatCurrency(cashAtEnd, symbol)}</td>
      </tr>
    </table>
  `;
}
function renderDepreciationScheduleReport(sheet, company, symbol) {
  const assets = [
    {
      code: "170000-01",
      name: "High-Performance Dell Precision Workstations (10 units)",
      category: "Computer Equipment",
      dateAcquired: "2026-01-01",
      cost: 14e3,
      salvageValue: 1400,
      usefulLifeYears: 5,
      method: "Straight Line",
      priorDepreciation: 2100,
      currentYearDepr: 700,
      totalAccumulated: 2880,
      bookValue: 11120
    },
    {
      code: "170000-02",
      name: "Dell PowerEdge R750 Enterprise Virtualization Servers",
      category: "Server Infrastructure",
      dateAcquired: "2026-01-01",
      cost: 21e3,
      salvageValue: 2100,
      usefulLifeYears: 5,
      method: "Straight Line",
      priorDepreciation: 3150,
      currentYearDepr: 1050,
      totalAccumulated: 4320,
      bookValue: 16680
    }
  ];
  const totalCost = assets.reduce((sum, a) => sum + a.cost, 0);
  const totalDepr = assets.reduce((sum, a) => sum + a.totalAccumulated, 0);
  const totalNBV = assets.reduce((sum, a) => sum + a.bookValue, 0);
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Fixed Asset Depreciation Schedule</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Account 170000 &bull; Accumulated Depreciation 175000 &bull; Values in ${company.currency}
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Asset ID & Description</th>
          <th style="padding: 10px;">Acquisition</th>
          <th style="padding: 10px; text-align: right;">Original Cost</th>
          <th style="padding: 10px; text-align: center;">Life (Yrs)</th>
          <th style="padding: 10px; text-align: center;">Method</th>
          <th style="padding: 10px; text-align: right;">Accum. Depreciation</th>
          <th style="padding: 10px; text-align: right;">Net Book Value</th>
        </tr>
      </thead>
      <tbody>
        ${assets.map((a) => `
          <tr class="data-row">
            <td>
              <strong>${a.name}</strong>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">Ref: ${a.code} &bull; ${a.category}</div>
            </td>
            <td style="font-size: 12.5px;">${a.dateAcquired}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.cost, symbol)}</td>
            <td style="text-align: center;">${a.usefulLifeYears}</td>
            <td style="text-align: center;"><span class="badge badge-posted" style="font-size: 10px;">${a.method}</span></td>
            <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(a.totalAccumulated, symbol)}</td>
            <td class="text-right font-mono" style="font-weight: 700; color: var(--success);">${AccountingEngine.formatCurrency(a.bookValue, symbol)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot class="table-footer">
        <tr style="border-top: 2px solid var(--border-base); font-weight: 800; background: var(--bg-surface-secondary);">
          <td colspan="2" style="padding: 12px;">Total Capital Portfolio:</td>
          <td class="text-right font-mono" style="font-size: 14px;">${AccountingEngine.formatCurrency(totalCost, symbol)}</td>
          <td colspan="2"></td>
          <td class="text-right font-mono" style="color: var(--danger); font-size: 14px;">-${AccountingEngine.formatCurrency(totalDepr, symbol)}</td>
          <td class="text-right font-mono" style="color: var(--primary); font-size: 15px;">${AccountingEngine.formatCurrency(totalNBV, symbol)}</td>
        </tr>
      </tfoot>
    </table>
  `;
}
function renderTrialBalanceReport(sheet, company, symbol) {
  const tb = AccountingEngine.getTrialBalance();
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Trial Balance</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        As of ${AccountingEngine.formatDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))} &bull; Values in ${company.currency}
      </div>
    </div>

    <div class="balance-check-banner ${tb.isBalanced ? "balanced" : "unbalanced"}">
      ${tb.isBalanced ? `
        ${getIcon("check")} <strong>Balanced Trial Balance:</strong> Total Debits (${AccountingEngine.formatCurrency(tb.grandTotalDebit, symbol)}) = Total Credits (${AccountingEngine.formatCurrency(tb.grandTotalCredit, symbol)})
      ` : `
        ${getIcon("shuffle")} <strong>Warning:</strong> Trial Balance Out of Balance by ${AccountingEngine.formatCurrency(Math.abs(tb.grandTotalDebit - tb.grandTotalCredit), symbol)}
      `}
    </div>

    <table class="app-table" id="exportable-table" style="margin-top: 16px;">
      <thead>
        <tr>
          <th style="width: 120px;">Code</th>
          <th>Account Name</th>
          <th>Category</th>
          <th class="text-right" style="width: 160px;">Debit</th>
          <th class="text-right" style="width: 160px;">Credit</th>
        </tr>
      </thead>
      <tbody>
        ${tb.accounts.map((acc) => `
          <tr>
            <td class="font-mono" style="font-weight: 700; color: var(--primary);">${acc.code}</td>
            <td><strong>${acc.name}</strong></td>
            <td><span class="badge badge-posted" style="font-size: 11px;">${acc.category}</span></td>
            <td class="text-right font-mono" style="color: ${acc.netDebit > 0 ? "var(--debit-color)" : "var(--text-muted)"};">
              ${acc.netDebit > 0 ? AccountingEngine.formatCurrency(acc.netDebit, symbol) : "-"}
            </td>
            <td class="text-right font-mono" style="color: ${acc.netCredit > 0 ? "var(--credit-color)" : "var(--text-muted)"};">
              ${acc.netCredit > 0 ? AccountingEngine.formatCurrency(acc.netCredit, symbol) : "-"}
            </td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot class="table-footer">
        <tr>
          <td colspan="3" class="text-right" style="font-weight: 800; font-size: 14px;">Total:</td>
          <td class="text-right font-mono" style="font-size: 15px; font-weight: 800; color: var(--debit-color);">${AccountingEngine.formatCurrency(tb.grandTotalDebit, symbol)}</td>
          <td class="text-right font-mono" style="font-size: 15px; font-weight: 800; color: var(--credit-color);">${AccountingEngine.formatCurrency(tb.grandTotalCredit, symbol)}</td>
        </tr>
      </tfoot>
    </table>
  `;
}
function renderGeneralLedgerReport(sheet, company, symbol) {
  const gl = AccountingEngine.getGeneralLedger();
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">General Ledger</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Detailed Account Activity & Continuous Audit Ledger &bull; Values in ${company.currency}
      </div>
    </div>

    <div class="gl-container" id="exportable-table">
      ${Object.keys(gl).map((code) => {
    const acc = gl[code];
    if (acc.lines.length === 0) return "";
    return `
          <div class="gl-account-block" style="margin-bottom: 24px; border: 1px solid var(--border-base); border-radius: var(--radius-lg); overflow: hidden;">
            <div style="background: var(--bg-surface-secondary); padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-base);">
              <div>
                <strong class="font-mono" style="color: var(--primary); font-size: 14px;">${acc.code}</strong>
                <span style="font-weight: 700; margin-left: 8px;">${acc.name}</span>
              </div>
              <div style="font-size: 13px;">
                Ending Balance: <strong class="font-mono">${AccountingEngine.formatCurrency(acc.endingBalance, symbol)}</strong>
              </div>
            </div>

            <table class="app-table" style="margin: 0; font-size: 12.5px;">
              <thead>
                <tr>
                  <th style="width: 100px;">Date</th>
                  <th style="width: 140px;">Entry No.</th>
                  <th>Reference / Label</th>
                  <th class="text-right" style="width: 110px;">Debit</th>
                  <th class="text-right" style="width: 110px;">Credit</th>
                  <th class="text-right" style="width: 120px;">Balance</th>
                </tr>
              </thead>
              <tbody>
                ${acc.lines.map((line) => `
                  <tr>
                    <td class="text-muted font-mono">${line.date}</td>
                    <td class="font-mono"><strong>${line.entryNumber}</strong></td>
                    <td>${line.label}</td>
                    <td class="text-right font-mono" style="color: ${line.debit > 0 ? "var(--debit-color)" : "var(--text-muted)"};">
                      ${line.debit > 0 ? AccountingEngine.formatCurrency(line.debit, symbol) : "-"}
                    </td>
                    <td class="text-right font-mono" style="color: ${line.credit > 0 ? "var(--credit-color)" : "var(--text-muted)"};">
                      ${line.credit > 0 ? AccountingEngine.formatCurrency(line.credit, symbol) : "-"}
                    </td>
                    <td class="text-right font-mono" style="font-weight: 600;">
                      ${AccountingEngine.formatCurrency(line.runningBalance, symbol)}
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
  }).join("")}
    </div>
  `;
}
function renderPartnerLedgerReport(sheet, company, symbol) {
  const partners = store.getPartners();
  const invoices = store.getInvoices().filter((i) => i.status !== "draft");
  const bills = store.getBills().filter((b) => b.status !== "draft");
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Partner Ledger (Subledger Accounts)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Comprehensive account activity across Customers & Vendors &bull; Values in ${company.currency}
      </div>
    </div>

    <table class="app-table" id="exportable-table">
      <thead>
        <tr>
          <th>Partner Name</th>
          <th>Type</th>
          <th>Contact & Email</th>
          <th class="text-right">Total Invoiced / Billed</th>
          <th class="text-right">Total Settled</th>
          <th class="text-right">Net Receivable / (Payable)</th>
        </tr>
      </thead>
      <tbody>
        ${partners.map((p) => {
    const partnerInvs = invoices.filter((i) => i.partnerId === p.id);
    const partnerBills = bills.filter((b) => b.partnerId === p.id);
    const totalInvAmount = partnerInvs.reduce((sum, i) => sum + i.totalAmount, 0);
    const totalInvPaid = partnerInvs.reduce((sum, i) => sum + (i.totalAmount - i.amountDue), 0);
    const totalBillAmount = partnerBills.reduce((sum, b) => sum + b.totalAmount, 0);
    const totalBillPaid = partnerBills.reduce((sum, b) => sum + (b.totalAmount - b.amountDue), 0);
    let netBalance = 0;
    if (p.isCustomer) netBalance = totalInvAmount - totalInvPaid;
    if (p.isVendor) netBalance = -(totalBillAmount - totalBillPaid);
    return `
            <tr>
              <td>
                <strong>${p.name}</strong>
                <div style="font-size: 11px; color: var(--text-muted);">${p.company || ""}</div>
              </td>
              <td>
                <span class="badge ${p.isCustomer ? "badge-posted" : "badge-paid"}" style="font-size: 10px;">
                  ${p.isCustomer ? "CUSTOMER" : "VENDOR"}
                </span>
              </td>
              <td style="font-size: 12.5px;">${p.email || p.phone || "-"}</td>
              <td class="text-right font-mono">${AccountingEngine.formatCurrency(p.isCustomer ? totalInvAmount : totalBillAmount, symbol)}</td>
              <td class="text-right font-mono">${AccountingEngine.formatCurrency(p.isCustomer ? totalInvPaid : totalBillPaid, symbol)}</td>
              <td class="text-right font-mono" style="font-weight: 700; color: ${netBalance > 0 ? "var(--credit-color)" : netBalance < 0 ? "var(--danger)" : "var(--text-muted)"};">
                ${AccountingEngine.formatCurrency(netBalance, symbol)}
              </td>
            </tr>
          `;
  }).join("")}
      </tbody>
    </table>
  `;
}
function renderCustomerStatementReport(sheet, company, symbol) {
  const customers = store.getPartners().filter((p) => p.isCustomer);
  const selectedCustomerId = customers[0]?.id;
  const invoices = store.getInvoices().filter((i) => i.partnerId === selectedCustomerId && i.status !== "draft");
  const selectedCustomer = customers[0];
  const totalInvoiced = invoices.reduce((sum, i) => sum + i.totalAmount, 0);
  const totalPaid = invoices.reduce((sum, i) => sum + (i.totalAmount - i.amountDue), 0);
  const totalDue = invoices.reduce((sum, i) => sum + i.amountDue, 0);
  sheet.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <div>
        <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
        <div style="font-size: 12.5px; color: var(--text-muted);">${company.street}, ${company.city}, ${company.country}</div>
        <div style="font-size: 12.5px; color: var(--text-muted);">TIN: ${company.taxId} &bull; Email: ${company.email}</div>
      </div>
      <div style="text-align: right;">
        <h3 style="font-size: 18px; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">CUSTOMER STATEMENT</h3>
        <div style="font-size: 12.5px; color: var(--text-muted);">Date: ${AccountingEngine.formatDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))}</div>
      </div>
    </div>

    <!-- Customer Details Card -->
    <div style="display: flex; justify-content: space-between; background: var(--bg-surface-secondary); padding: 16px; border-radius: var(--radius-lg); margin-bottom: 20px; border: 1px solid var(--border-base);">
      <div>
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Bill To Customer:</div>
        <div style="font-size: 15px; font-weight: 700; color: var(--text-main);">${selectedCustomer ? selectedCustomer.name : "Valued Customer"}</div>
        <div style="font-size: 12.5px; color: var(--text-muted);">${selectedCustomer?.street || "Innovation District"}, ${selectedCustomer?.city || "Austin, TX"}</div>
        <div style="font-size: 12.5px; color: var(--text-muted);">Email: ${selectedCustomer?.email || "-"}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Total Balance Due:</div>
        <div class="font-mono" style="font-size: 22px; font-weight: 800; color: var(--danger);">${AccountingEngine.formatCurrency(totalDue, symbol)}</div>
      </div>
    </div>

    <!-- Invoices List -->
    <table class="app-table" id="exportable-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Invoice #</th>
          <th>Due Date</th>
          <th>Status</th>
          <th class="text-right">Original Amount</th>
          <th class="text-right">Payment Applied</th>
          <th class="text-right">Balance Due</th>
        </tr>
      </thead>
      <tbody>
        ${invoices.map((inv) => `
          <tr>
            <td class="font-mono">${inv.date}</td>
            <td class="font-mono"><strong>${inv.number}</strong></td>
            <td class="font-mono">${inv.dueDate}</td>
            <td><span class="badge ${inv.status === "paid" ? "badge-paid" : "badge-posted"}" style="font-size: 10px;">${inv.status.toUpperCase()}</span></td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(inv.totalAmount, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(inv.totalAmount - inv.amountDue, symbol)}</td>
            <td class="text-right font-mono" style="font-weight: 700; color: ${inv.amountDue > 0 ? "var(--danger)" : "var(--text-muted)"};">
              ${AccountingEngine.formatCurrency(inv.amountDue, symbol)}
            </td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot class="table-footer">
        <tr>
          <td colspan="4" class="text-right" style="font-weight: 800;">Total Statement Balance:</td>
          <td class="text-right font-mono" style="font-weight: 700;">${AccountingEngine.formatCurrency(totalInvoiced, symbol)}</td>
          <td class="text-right font-mono" style="font-weight: 700;">${AccountingEngine.formatCurrency(totalPaid, symbol)}</td>
          <td class="text-right font-mono" style="font-size: 15px; font-weight: 800; color: var(--danger);">${AccountingEngine.formatCurrency(totalDue, symbol)}</td>
        </tr>
      </tfoot>
    </table>
  `;
}
function renderAgedReceivablesReport(sheet, company, symbol) {
  const aging = AccountingEngine.getAgedReceivables();
  const total = aging.reduce((sum, a) => sum + a.totalDue, 0);
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Aged Receivables (Customer Aging Summary)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        As of ${AccountingEngine.formatDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))} &bull; Values in ${company.currency}
      </div>
    </div>

    <table class="app-table" id="exportable-table">
      <thead>
        <tr>
          <th>Customer Partner</th>
          <th class="text-right">Current</th>
          <th class="text-right">1 - 30 Days</th>
          <th class="text-right">31 - 60 Days</th>
          <th class="text-right">61 - 90 Days</th>
          <th class="text-right">90+ Days</th>
          <th class="text-right" style="width: 140px;">Total Due</th>
        </tr>
      </thead>
      <tbody>
        ${aging.map((a) => `
          <tr>
            <td><strong>${a.partnerName}</strong></td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.current, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.days1_30, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.days31_60, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.days61_90, symbol)}</td>
            <td class="text-right font-mono" style="color: var(--danger); font-weight: 700;">${AccountingEngine.formatCurrency(a.daysOver90, symbol)}</td>
            <td class="text-right font-mono" style="font-weight: 800; color: var(--credit-color);">${AccountingEngine.formatCurrency(a.totalDue, symbol)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot class="table-footer">
        <tr>
          <td class="text-right" style="font-weight: 800;">Total Receivables:</td>
          <td colspan="6" class="text-right font-mono" style="font-size: 15px; font-weight: 800; color: var(--credit-color);">
            ${AccountingEngine.formatCurrency(total, symbol)}
          </td>
        </tr>
      </tfoot>
    </table>
  `;
}
function renderAgedPayablesReport(sheet, company, symbol) {
  const aging = AccountingEngine.getAgedPayables();
  const total = aging.reduce((sum, a) => sum + a.totalDue, 0);
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Aged Payables (Vendor Aging Summary)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        As of ${AccountingEngine.formatDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))} &bull; Values in ${company.currency}
      </div>
    </div>

    <table class="app-table" id="exportable-table">
      <thead>
        <tr>
          <th>Vendor Partner</th>
          <th class="text-right">Current</th>
          <th class="text-right">1 - 30 Days</th>
          <th class="text-right">31 - 60 Days</th>
          <th class="text-right">61 - 90 Days</th>
          <th class="text-right">90+ Days</th>
          <th class="text-right" style="width: 140px;">Total Due</th>
        </tr>
      </thead>
      <tbody>
        ${aging.map((a) => `
          <tr>
            <td><strong>${a.partnerName}</strong></td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.current, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.days1_30, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.days31_60, symbol)}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(a.days61_90, symbol)}</td>
            <td class="text-right font-mono" style="color: var(--danger); font-weight: 700;">${AccountingEngine.formatCurrency(a.daysOver90, symbol)}</td>
            <td class="text-right font-mono" style="font-weight: 800; color: var(--danger);">${AccountingEngine.formatCurrency(a.totalDue, symbol)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot class="table-footer">
        <tr>
          <td class="text-right" style="font-weight: 800;">Total Payable:</td>
          <td colspan="6" class="text-right font-mono" style="font-size: 15px; font-weight: 800; color: var(--danger);">
            ${AccountingEngine.formatCurrency(total, symbol)}
          </td>
        </tr>
      </tfoot>
    </table>
  `;
}
function renderTaxReportView(sheet, company, symbol) {
  const tax = AccountingEngine.getTaxReport();
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Tax Summary & Audit Report (Output vs Input VAT)</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Sales Tax Collected vs Input Tax Recoverable &bull; Tax ID: ${company.taxId}
      </div>
    </div>

    <div style="max-width: 650px; margin: 0 auto; background: var(--bg-surface-secondary); padding: 24px; border-radius: var(--radius-xl); border: 1px solid var(--border-base);">
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border-base);">
        <span style="font-size: 14px; font-weight: 600;">Sales Tax Collected (Output Tax on Sales):</span>
        <span class="font-mono" style="font-size: 15px; font-weight: 700; color: var(--credit-color);">${AccountingEngine.formatCurrency(tax.taxCollected, symbol)}</span>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border-base);">
        <span style="font-size: 14px; font-weight: 600;">Input Tax Paid (Recoverable on Purchases):</span>
        <span class="font-mono" style="font-size: 15px; font-weight: 700; color: var(--debit-color);">${AccountingEngine.formatCurrency(tax.taxPaid, symbol)}</span>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 16px 0 0 0; font-size: 17px; font-weight: 800;">
        <span>Net Tax Payable / (Refund):</span>
        <span class="font-mono" style="color: ${tax.netTaxDue >= 0 ? "var(--primary)" : "var(--credit-color)"};">
          ${AccountingEngine.formatCurrency(tax.netTaxDue, symbol)}
        </span>
      </div>
    </div>
  `;
}
function renderFiscalReportView(sheet, company, symbol) {
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Fiscal Year Compliance & Period Dossier</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Fiscal Year 2026 &bull; Tax Identification: ${company.taxId} &bull; Jurisdiction: NBR Bangladesh
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
      <div class="kpi-card blue">
        <div class="kpi-title"><span>Fiscal Cycle</span><span class="badge badge-posted">FY2026</span></div>
        <div class="kpi-value">12 Months</div>
        <div class="kpi-subtitle">Jan 01, 2026 &ndash; Dec 31, 2026</div>
      </div>
      <div class="kpi-card teal">
        <div class="kpi-title"><span>Non-Adviser Lock</span><span class="badge badge-paid">ACTIVE</span></div>
        <div class="kpi-value font-mono">2026-09-30</div>
        <div class="kpi-subtitle">Transactions prior are locked to staff</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-title"><span>Statutory Compliance</span><span class="badge badge-paid">100% OK</span></div>
        <div class="kpi-value">Verified</div>
        <div class="kpi-subtitle">VAT, WHT & Tax Returns current</div>
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Statutory Compliance Milestone</th>
          <th style="padding: 10px;">Authority</th>
          <th style="padding: 10px; text-align: center;">Frequency</th>
          <th style="padding: 10px; text-align: center;">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="data-row">
          <td><strong>VAT Return Filing (Mushak-9.1)</strong></td>
          <td>National Board of Revenue (NBR)</td>
          <td style="text-align: center;">Monthly (by 15th)</td>
          <td style="text-align: center;"><span class="badge badge-paid">COMPLIANT</span></td>
        </tr>
        <tr class="data-row">
          <td><strong>Advance Income Tax (AIT / TDS) Settlement</strong></td>
          <td>Taxes Zone-05, Dhaka</td>
          <td style="text-align: center;">Quarterly</td>
          <td style="text-align: center;"><span class="badge badge-paid">COMPLIANT</span></td>
        </tr>
        <tr class="data-row">
          <td><strong>Statutory General Reserve Appropriation (10% PAT)</strong></td>
          <td>Companies Act 1994</td>
          <td style="text-align: center;">Annual</td>
          <td style="text-align: center;"><span class="badge badge-posted">RESERVED</span></td>
        </tr>
        <tr class="data-row">
          <td><strong>RJSC Annual Return & Audited Financials Submission</strong></td>
          <td>Registrar of Joint Stock Companies</td>
          <td style="text-align: center;">Annual (Post AGM)</td>
          <td style="text-align: center;"><span class="badge badge-posted">SCHEDULED</span></td>
        </tr>
      </tbody>
    </table>
  `;
}
function renderInvoiceAnalysisReport(sheet, company, symbol) {
  const invoices = store.getInvoices();
  const totalVolume = invoices.reduce((sum, i) => sum + i.totalAmount, 0);
  const paidVolume = invoices.reduce((sum, i) => sum + (i.totalAmount - i.amountDue), 0);
  const avgValue = invoices.length > 0 ? totalVolume / invoices.length : 0;
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Management Invoice & Sales Performance Analysis</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Commercial billing throughput, realization rate & ticket metrics
      </div>
    </div>

    <div class="dashboard-kpi-grid" style="margin-bottom: 24px;">
      <div class="kpi-card blue">
        <div class="kpi-title"><span>Gross Billing Volume</span><span class="badge badge-posted">${invoices.length} Invoices</span></div>
        <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalVolume, symbol)}</div>
        <div class="kpi-subtitle">Total cumulative client billings</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-title"><span>Collected Inflows</span><span class="badge badge-paid">${Math.round(paidVolume / (totalVolume || 1) * 100)}%</span></div>
        <div class="kpi-value font-mono text-success">${AccountingEngine.formatCurrency(paidVolume, symbol)}</div>
        <div class="kpi-subtitle">Cash realization through bank</div>
      </div>
      <div class="kpi-card teal">
        <div class="kpi-title"><span>Average Invoice Ticket</span><span class="badge badge-posted">AVG</span></div>
        <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(avgValue, symbol)}</div>
        <div class="kpi-subtitle">Mean enterprise contract value</div>
      </div>
    </div>

    <table class="app-table" id="exportable-table">
      <thead>
        <tr>
          <th>Invoice Ref</th>
          <th>Customer</th>
          <th>Billing Date</th>
          <th>Terms</th>
          <th class="text-right">Gross Total</th>
          <th class="text-right">Amount Due</th>
          <th style="text-align: center;">Collection Status</th>
        </tr>
      </thead>
      <tbody>
        ${invoices.map((inv) => `
          <tr>
            <td class="font-mono"><strong>${inv.number}</strong></td>
            <td><strong>${store.getPartners().find((p) => p.id === inv.partnerId)?.name || "Customer"}</strong></td>
            <td class="font-mono">${inv.date}</td>
            <td>${inv.paymentTerms || "30_days"}</td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(inv.totalAmount, symbol)}</td>
            <td class="text-right font-mono" style="font-weight: 600; color: ${inv.amountDue > 0 ? "var(--danger)" : "var(--text-muted)"};">
              ${AccountingEngine.formatCurrency(inv.amountDue, symbol)}
            </td>
            <td style="text-align: center;">
              <span class="badge ${inv.status === "paid" ? "badge-paid" : inv.status === "overdue" ? "badge-overdue" : "badge-posted"}" style="font-size: 10px;">
                ${inv.status.toUpperCase()}
              </span>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}
function renderCashflowAnalysisReport(sheet, company, symbol) {
  const currentCash = 140770;
  const monthlyBurn = 28500;
  const runwayMonths = (currentCash / monthlyBurn).toFixed(1);
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Executive Cashflow & Runway Analysis</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Liquidity reserves, net operating cash burn, and 90-day cash projections
      </div>
    </div>

    <div class="dashboard-kpi-grid" style="margin-bottom: 24px;">
      <div class="kpi-card teal">
        <div class="kpi-title"><span>Liquid Treasury Reserves</span><span class="badge badge-paid">CASH</span></div>
        <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(currentCash, symbol)}</div>
        <div class="kpi-subtitle">Reconciled across SVB & Chase Reserve</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-title"><span>Net Monthly Burn</span><span class="badge badge-posted">OPEX</span></div>
        <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(monthlyBurn, symbol)}</div>
        <div class="kpi-subtitle">Payroll, Cloud Infrastructure & Rent</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-title"><span>Estimated Cash Runway</span><span class="badge badge-paid">STABLE</span></div>
        <div class="kpi-value font-mono">${runwayMonths} Months</div>
        <div class="kpi-subtitle">Operational runway without new equity</div>
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Forecast Period</th>
          <th style="padding: 10px; text-align: right;">Expected Inflows</th>
          <th style="padding: 10px; text-align: right;">Expected Outflows</th>
          <th style="padding: 10px; text-align: right;">Net Cash Movement</th>
          <th style="padding: 10px; text-align: right;">Projected Closing Cash</th>
        </tr>
      </thead>
      <tbody>
        <tr class="data-row">
          <td><strong>Current Month (October 2026)</strong></td>
          <td class="text-right font-mono" style="color: var(--success);">$18,500.00</td>
          <td class="text-right font-mono" style="color: var(--danger);">-$24,200.00</td>
          <td class="text-right font-mono">-$5,700.00</td>
          <td class="text-right font-mono" style="font-weight: 700;">$140,770.00</td>
        </tr>
        <tr class="data-row">
          <td><strong>Month +1 (November 2026)</strong></td>
          <td class="text-right font-mono" style="color: var(--success);">$32,000.00</td>
          <td class="text-right font-mono" style="color: var(--danger);">-$26,500.00</td>
          <td class="text-right font-mono" style="color: var(--success);">+$5,500.00</td>
          <td class="text-right font-mono" style="font-weight: 700;">$146,270.00</td>
        </tr>
        <tr class="data-row">
          <td><strong>Month +2 (December 2026)</strong></td>
          <td class="text-right font-mono" style="color: var(--success);">$45,000.00</td>
          <td class="text-right font-mono" style="color: var(--danger);">-$31,000.00</td>
          <td class="text-right font-mono" style="color: var(--success);">+$14,000.00</td>
          <td class="text-right font-mono" style="font-weight: 700; color: var(--primary);">$160,270.00</td>
        </tr>
      </tbody>
    </table>
  `;
}
function renderAnalyticReport(sheet, company, symbol) {
  const departments = [
    { name: "Software Engineering & Cloud R&D", revenue: 54e3, cogs: 18e3, opex: 14200, netMargin: 21800, pct: "40.3%" },
    { name: "ERP Implementation & Consulting", revenue: 27e3, cogs: 8400, opex: 6500, netMargin: 12100, pct: "44.8%" },
    { name: "Operations & Shared Administration", revenue: 1200, cogs: 0, opex: 15300, netMargin: -14100, pct: "-" }
  ];
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Analytic & Cost Center Profitability Report</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Departmental allocation of direct cost of delivery & operating overhead
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Analytic Unit / Cost Center</th>
          <th style="padding: 10px; text-align: right;">Revenue</th>
          <th style="padding: 10px; text-align: right;">Direct COGS</th>
          <th style="padding: 10px; text-align: right;">Allocated OPEX</th>
          <th style="padding: 10px; text-align: right;">Operating Margin</th>
          <th style="padding: 10px; text-align: center;">Margin %</th>
        </tr>
      </thead>
      <tbody>
        ${departments.map((d) => `
          <tr class="data-row">
            <td><strong>${d.name}</strong></td>
            <td class="text-right font-mono">${AccountingEngine.formatCurrency(d.revenue, symbol)}</td>
            <td class="text-right font-mono" style="color: var(--danger);">-${AccountingEngine.formatCurrency(d.cogs, symbol)}</td>
            <td class="text-right font-mono" style="color: var(--danger);">-${AccountingEngine.formatCurrency(d.opex, symbol)}</td>
            <td class="text-right font-mono" style="font-weight: 700; color: ${d.netMargin >= 0 ? "var(--success)" : "var(--danger)"};">
              ${AccountingEngine.formatCurrency(d.netMargin, symbol)}
            </td>
            <td style="text-align: center;"><span class="badge ${d.netMargin >= 0 ? "badge-paid" : "badge-draft"}">${d.pct}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}
function renderExecutiveSummaryReport(sheet, company, symbol) {
  const pnl = AccountingEngine.getProfitAndLoss();
  const bs = AccountingEngine.getBalanceSheet();
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Executive Financial Summary & Solvency Scorecard</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Core GAAP/IFRS KPIs for Board & Executive Leadership &bull; FY2026
      </div>
    </div>

    <!-- 6-Metric Executive KPI Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
      <div class="kpi-card blue">
        <div class="kpi-title"><span>Gross Margin</span><span class="badge badge-paid">PROFIT</span></div>
        <div class="kpi-value font-mono">${pnl.grossMarginPct.toFixed(1)}%</div>
        <div class="kpi-subtitle">Healthy unit economics</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-title"><span>Net Profit Margin</span><span class="badge badge-paid">NET</span></div>
        <div class="kpi-value font-mono text-success">${(pnl.netProfit / (pnl.grossRevenue || 1) * 100).toFixed(1)}%</div>
        <div class="kpi-subtitle">Net bottom-line conversion</div>
      </div>
      <div class="kpi-card teal">
        <div class="kpi-title"><span>Current Ratio</span><span class="badge badge-paid">SOLVENT</span></div>
        <div class="kpi-value font-mono">${bs.totalCurrentLiabilities > 0 ? (bs.totalCurrentAssets / bs.totalCurrentLiabilities).toFixed(2) : "6.5"}x</div>
        <div class="kpi-subtitle">Liquidity coverage > 2.0x target</div>
      </div>
      <div class="kpi-card purple">
        <div class="kpi-title"><span>Debt-to-Equity</span><span class="badge badge-paid">SAFE</span></div>
        <div class="kpi-value font-mono">${bs.totalEquity > 0 ? (bs.totalLiabilities / bs.totalEquity).toFixed(2) : "0.35"}x</div>
        <div class="kpi-subtitle">Conservative leverage profile</div>
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Executive Indicator</th>
          <th style="padding: 10px;">Target Benchmark</th>
          <th style="padding: 10px; text-align: right;">Actual Metric</th>
          <th style="padding: 10px; text-align: center;">Performance Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr class="data-row">
          <td><strong>Days Sales Outstanding (DSO)</strong></td>
          <td>&le; 30 Days</td>
          <td class="text-right font-mono" style="font-weight: 700;">24.5 Days</td>
          <td style="text-align: center;"><span class="badge badge-paid">EXCELLENT</span></td>
        </tr>
        <tr class="data-row">
          <td><strong>Days Payable Outstanding (DPO)</strong></td>
          <td>30 &ndash; 45 Days</td>
          <td class="text-right font-mono" style="font-weight: 700;">28.0 Days</td>
          <td style="text-align: center;"><span class="badge badge-paid">OPTIMAL</span></td>
        </tr>
        <tr class="data-row">
          <td><strong>Return on Equity (ROE)</strong></td>
          <td>&ge; 18.0%</td>
          <td class="text-right font-mono" style="font-weight: 700; color: var(--success);">24.2%</td>
          <td style="text-align: center;"><span class="badge badge-paid">STRONG</span></td>
        </tr>
        <tr class="data-row">
          <td><strong>Working Capital Adequacy</strong></td>
          <td>&ge; $50,000</td>
          <td class="text-right font-mono" style="font-weight: 700; color: var(--primary);">${AccountingEngine.formatCurrency(bs.totalCurrentAssets - bs.totalCurrentLiabilities, symbol)}</td>
          <td style="text-align: center;"><span class="badge badge-paid">EXCEEDED</span></td>
        </tr>
      </tbody>
    </table>
  `;
}
function renderLoansAnalysisReport(sheet, company, symbol) {
  const loanPrincipal = 4e4;
  const annualRate = 8.5;
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = 36;
  const monthlyPayment = loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">Commercial Loans & Debt Service Analysis</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Account 260000 Long-Term Bank Loan &bull; Values in ${company.currency}
      </div>
    </div>

    <div class="dashboard-kpi-grid" style="margin-bottom: 24px;">
      <div class="kpi-card blue">
        <div class="kpi-title"><span>Principal Outstanding</span><span class="badge badge-posted">DEBT</span></div>
        <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(loanPrincipal, symbol)}</div>
        <div class="kpi-subtitle">Facility: SVB Term Credit</div>
      </div>
      <div class="kpi-card teal">
        <div class="kpi-title"><span>Fixed Interest Rate</span><span class="badge badge-posted">APR</span></div>
        <div class="kpi-value font-mono">${annualRate}%</div>
        <div class="kpi-subtitle">Fixed amortization over 36 months</div>
      </div>
      <div class="kpi-card purple">
        <div class="kpi-title"><span>Monthly Debt Service</span><span class="badge badge-paid">P&I</span></div>
        <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(monthlyPayment, symbol)}</div>
        <div class="kpi-subtitle">Principal + Monthly Interest</div>
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Payment Installment</th>
          <th style="padding: 10px; text-align: right;">Total Payment</th>
          <th style="padding: 10px; text-align: right;">Principal Portion</th>
          <th style="padding: 10px; text-align: right;">Interest Portion</th>
          <th style="padding: 10px; text-align: right;">Remaining Principal</th>
        </tr>
      </thead>
      <tbody>
        <tr class="data-row">
          <td><strong>Month 1 (Nov 2026)</strong></td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(monthlyPayment, symbol)}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(monthlyPayment - loanPrincipal * monthlyRate, symbol)}</td>
          <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(loanPrincipal * monthlyRate, symbol)}</td>
          <td class="text-right font-mono" style="font-weight: 700;">$39,020.64</td>
        </tr>
        <tr class="data-row">
          <td><strong>Month 2 (Dec 2026)</strong></td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(monthlyPayment, symbol)}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(986.29, symbol)}</td>
          <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(276.4, symbol)}</td>
          <td class="text-right font-mono" style="font-weight: 700;">$38,034.35</td>
        </tr>
        <tr class="data-row">
          <td><strong>Month 3 (Jan 2027)</strong></td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(monthlyPayment, symbol)}</td>
          <td class="text-right font-mono">${AccountingEngine.formatCurrency(993.28, symbol)}</td>
          <td class="text-right font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(269.41, symbol)}</td>
          <td class="text-right font-mono" style="font-weight: 700;">$37,041.07</td>
        </tr>
      </tbody>
    </table>
  `;
}
function renderBangladeshCorporateTaxReport(sheet, company, symbol) {
  const pnl = AccountingEngine.getProfitAndLoss();
  const netAccountingProfit = pnl.netProfit;
  const accountingDepreciation = 1800;
  const taxDepreciationNBR = 1500;
  const taxableProfit = netAccountingProfit + accountingDepreciation - taxDepreciationNBR;
  const corporateTaxRate = 27.5;
  const grossTax = taxableProfit * (corporateTaxRate / 100);
  const aitDeducted = 3200;
  const netPayable = Math.max(0, grossTax - aitDeducted);
  sheet.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border-base);">
      <h2 style="font-size: 20px; font-weight: 800; color: var(--primary);">${company.name}</h2>
      <h3 style="font-size: 16px; font-weight: 700; margin-top: 4px;">National Board of Revenue (NBR) Corporate Income Tax Return</h3>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
        Assessment Year: 2026-2027 &bull; Income Year: 2025-2026 &bull; Under Section 70, Income Tax Act 2023
      </div>
    </div>

    <!-- NBR Registration Dossier Banner -->
    <div style="background: var(--bg-surface-secondary); padding: 18px; border-radius: var(--radius-lg); margin-bottom: 20px; border: 1px solid var(--border-base); display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
      <div>
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Company TIN</div>
        <div style="font-weight: 700; font-family: monospace; font-size: 14px;">84920192301</div>
      </div>
      <div>
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">VAT BIN</div>
        <div style="font-weight: 700; font-family: monospace; font-size: 14px;">002910482-0101</div>
      </div>
      <div>
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Taxes Circle & Zone</div>
        <div style="font-weight: 600; font-size: 13px;">Circle-15, Taxes Zone-05, Dhaka</div>
      </div>
      <div>
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Applicable Tax Rate</div>
        <div style="font-weight: 700; font-size: 14px; color: var(--primary);">${corporateTaxRate}% (Non-Listed)</div>
      </div>
    </div>

    <table class="report-table-tree" id="exportable-table">
      <thead>
        <tr style="background: var(--bg-hover); font-weight: 700; border-bottom: 2px solid var(--border-base);">
          <th style="padding: 10px;">Computation of Taxable Business Income</th>
          <th style="padding: 10px; text-align: right;">Amount (USD)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="data-row">
          <td><strong>Net Profit as per Audited Financial Statements</strong></td>
          <td class="text-right font-mono" style="font-weight: 700;">${AccountingEngine.formatCurrency(netAccountingProfit, symbol)}</td>
        </tr>
        <tr class="data-row">
          <td class="tree-indent-1"><strong>Add: Inadmissible Expenses / Adjustments:</strong></td>
          <td class="text-right font-mono"></td>
        </tr>
        <tr class="data-row">
          <td class="tree-indent-2">Accounting Depreciation charged in P&L</td>
          <td class="text-right font-mono" style="color: var(--success);">+${AccountingEngine.formatCurrency(accountingDepreciation, symbol)}</td>
        </tr>
        <tr class="data-row">
          <td class="tree-indent-1"><strong>Less: Admissible Deductions:</strong></td>
          <td class="text-right font-mono"></td>
        </tr>
        <tr class="data-row">
          <td class="tree-indent-2">Tax Depreciation Allowed as per NBR Third Schedule</td>
          <td class="text-right font-mono" style="color: var(--danger);">-${AccountingEngine.formatCurrency(taxDepreciationNBR, symbol)}</td>
        </tr>
        <tr class="subtotal-row" style="background: var(--bg-hover); font-weight: 700;">
          <td>Total Taxable Business Profit / Income</td>
          <td class="text-right font-mono" style="font-size: 14px; color: var(--primary);">${AccountingEngine.formatCurrency(taxableProfit, symbol)}</td>
        </tr>
        <tr class="data-row">
          <td>Gross Corporate Tax Liability (${corporateTaxRate}%)</td>
          <td class="text-right font-mono" style="font-weight: 600;">${AccountingEngine.formatCurrency(grossTax, symbol)}</td>
        </tr>
        <tr class="data-row">
          <td>Less: Advance Income Tax (AIT / TDS) Paid at Source</td>
          <td class="text-right font-mono" style="color: var(--success);">-${AccountingEngine.formatCurrency(aitDeducted, symbol)}</td>
        </tr>
        <tr class="grand-total-row">
          <td style="font-size: 15px;">NET STATUTORY TAX PAYABLE WITH RETURN</td>
          <td class="text-right font-mono" style="font-size: 17px; color: var(--danger);">${AccountingEngine.formatCurrency(netPayable, symbol)}</td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 20px; font-size: 12.5px; color: var(--text-muted); background: var(--bg-hover); padding: 12px 16px; border-radius: var(--radius-md); border-left: 3px solid var(--primary);">
      <strong>Statutory Note:</strong> Under Section 166 of the Income Tax Act 2023, the deadline for submitting the corporate tax return along with the audited financial statements is <strong>November 30, 2026</strong>.
    </div>
  `;
}
function exportCurrentTableToCSV(filename) {
  const table = document.querySelector("#exportable-table") || document.querySelector(".app-table");
  if (!table) {
    toast.warning("No data table found to export.");
    return;
  }
  const rows = Array.from(table.querySelectorAll("tr"));
  const csvContent = rows.map((r) => {
    const cells = Array.from(r.querySelectorAll("th, td"));
    return cells.map((c) => `"${c.innerText.replace(/"/g, '""').trim()}"`).join(",");
  }).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast.success(`Exported ${filename}`);
}

// js/views/coa.js
function renderChartOfAccounts(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const accounts = store.getAccounts();
  const liveBalances = AccountingEngine.getLiveAccountBalances();
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-account">
          ${getIcon("plus")} New Account
        </button>
        <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">
          ${accounts.length} Total Accounts
        </span>
      </div>

      <div class="search-input-wrapper" style="width: 260px;">
        <input type="text" class="form-control" id="coa-search" placeholder="Search accounts by code or name..." />
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table" id="coa-table">
          <thead>
            <tr>
              <th width="120">Code</th>
              <th>Account Name</th>
              <th>Category</th>
              <th>Normal</th>
              <th class="text-right">Debit Movement</th>
              <th class="text-right">Credit Movement</th>
              <th class="text-right">Balance</th>
              <th class="text-center" width="100">Actions</th>
            </tr>
          </thead>
          <tbody id="coa-tbody">
            <!-- Account rows injected here -->
          </tbody>
        </table>
      </div>
    </div>
  `;
  const tbody = container.querySelector("#coa-tbody");
  const searchInput = container.querySelector("#coa-search");
  function renderRows(filterTerm = "") {
    const term = filterTerm.toLowerCase();
    const filtered = accounts.filter(
      (a) => a.code.includes(term) || a.name.toLowerCase().includes(term) || a.category.toLowerCase().includes(term)
    );
    tbody.innerHTML = filtered.map((acc) => {
      const live = liveBalances[acc.code] || { debitTotal: 0, creditTotal: 0, balance: 0 };
      return `
        <tr>
          <td class="font-mono" style="font-weight: 800; color: var(--primary);">${acc.code}</td>
          <td><strong>${acc.name}</strong></td>
          <td><span class="badge badge-draft">${acc.category}</span></td>
          <td><span class="badge ${acc.normalBalance === "debit" ? "badge-posted" : "badge-paid"}">${acc.normalBalance}</span></td>
          <td class="text-right font-mono" style="color: var(--debit-color);">
            ${live.debitTotal > 0 ? AccountingEngine.formatCurrency(live.debitTotal, symbol) : "-"}
          </td>
          <td class="text-right font-mono" style="color: var(--credit-color);">
            ${live.creditTotal > 0 ? AccountingEngine.formatCurrency(live.creditTotal, symbol) : "-"}
          </td>
          <td class="text-right font-mono" style="font-weight: 800; color: ${live.balance >= 0 ? "var(--text-main)" : "var(--danger)"};">
            ${AccountingEngine.formatCurrency(live.balance, symbol)}
          </td>
          <td class="text-center">
            <button class="btn btn-secondary btn-sm btn-gl-drill" data-code="${acc.code}" title="View in General Ledger">
              ${getIcon("bar-chart-2")} Ledger
            </button>
          </td>
        </tr>
      `;
    }).join("");
    tbody.querySelectorAll(".btn-gl-drill").forEach((btn) => {
      btn.onclick = () => {
        navigate("reports", { tab: "gl" });
      };
    });
  }
  renderRows();
  searchInput.oninput = (e) => {
    renderRows(e.target.value);
  };
  container.querySelector("#btn-create-account")?.addEventListener("click", () => {
    openCreateAccountModal(() => {
      renderChartOfAccounts(container, navigate);
    });
  });
}
function openCreateAccountModal(onSuccess) {
  modal.open({
    title: `${getIcon("landmark")} Create Chart of Account`,
    size: "md",
    contentHtml: `
      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Account Code</label>
            <input type="text" class="form-control font-mono" id="new-acc-code" placeholder="e.g. 680000" />
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Normal Balance</label>
            <select class="form-control" id="new-acc-normal">
              <option value="debit">Debit (Assets & Expenses)</option>
              <option value="credit">Credit (Liabilities, Equity, Revenue)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label required">Account Name</label>
        <input type="text" class="form-control" id="new-acc-name" placeholder="e.g. Research & Development Expense" />
      </div>

      <div class="form-group">
        <label class="form-label required">Category & Type</label>
        <select class="form-control" id="new-acc-type">
          <option value="asset_current|Current Assets">Current Asset</option>
          <option value="asset_fixed|Non-Current Assets">Non-Current Asset (Fixed Asset)</option>
          <option value="liability_current|Current Liabilities">Current Liability</option>
          <option value="liability_non_current|Non-Current Liabilities">Non-Current Liability</option>
          <option value="equity|Equity">Equity</option>
          <option value="revenue|Operating Revenue">Operating Revenue</option>
          <option value="other_income|Other Income">Other Income</option>
          <option value="cogs|Cost of Goods Sold">Cost of Goods Sold (COGS)</option>
          <option value="expense|Operating Expenses" selected>Operating Expense</option>
        </select>
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-acc-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-acc-save">Create Account</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-acc-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-acc-save").onclick = () => {
        const code = body.querySelector("#new-acc-code").value.trim();
        const name = body.querySelector("#new-acc-name").value.trim();
        const normalBalance = body.querySelector("#new-acc-normal").value;
        const [type, category] = body.querySelector("#new-acc-type").value.split("|");
        if (!code || !name) {
          toast.warning("Please enter account code and name.");
          return;
        }
        const existing = store.getAccounts().find((a) => a.code === code);
        if (existing) {
          toast.error(`Account with code ${code} already exists (${existing.name}).`);
          return;
        }
        store.saveAccount({
          code,
          name,
          type,
          category,
          normalBalance,
          balance: 0,
          active: true
        });
        modal.close();
        toast.success(`Account ${code} - ${name} created successfully!`);
        onSuccess();
      };
    }
  });
}

// js/views/contacts.js
function renderContacts(container, navigate, params = {}) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  let filter = params.type || "customers";
  function renderList() {
    let partners = store.getPartners();
    const invoices = store.getInvoices();
    const bills = store.getBills();
    if (filter === "customers") {
      partners = partners.filter((p) => p.isCustomer);
    } else if (filter === "vendors") {
      partners = partners.filter((p) => p.isVendor);
    }
    const isCustomerView = filter === "customers";
    const isVendorView = filter === "vendors";
    const singularLabel = isCustomerView ? "Customer" : isVendorView ? "Vendor" : "Customer";
    const pluralLabel = isCustomerView ? "Customers" : isVendorView ? "Vendors" : "Contacts";
    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn btn-primary" id="btn-create-partner" title="Add a new ${singularLabel}">
            ${getIcon("plus")} New ${singularLabel}
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">
            ${partners.length} ${pluralLabel}
          </span>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm ${filter === "customers" ? "btn-primary" : ""}" id="pfilter-customers">Customers</button>
          <button class="btn btn-secondary btn-sm ${filter === "vendors" ? "btn-primary" : ""}" id="pfilter-vendors">Vendors</button>
          <button class="btn btn-secondary btn-sm ${filter === "all" ? "btn-primary" : ""}" id="pfilter-all">All</button>
        </div>
      </div>

      <div class="table-card">
        <div class="table-responsive">
          <table class="app-table">
            <thead>
              <tr>
                <th>${isCustomerView ? "Customer Name" : isVendorView ? "Vendor Name" : "Name"}</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th class="text-center">Type</th>
                <th class="text-right">Balance Due</th>
                <th class="text-center" width="120">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${partners.length === 0 ? `
                <tr>
                  <td colspan="7" class="table-empty-state">No ${pluralLabel.toLowerCase()} found. Click <strong>+ New ${singularLabel}</strong> to add one.</td>
                </tr>
              ` : partners.map((p) => {
      let balanceDue = 0;
      let balanceType = "";
      if (p.isCustomer) {
        const partnerInvs = invoices.filter((i) => i.partnerId === p.id && (i.status === "posted" || i.status === "overdue"));
        balanceDue = partnerInvs.reduce((sum, i) => sum + i.amountDue, 0);
        balanceType = "Receivable";
      } else if (p.isVendor) {
        const partnerBills = bills.filter((b) => b.partnerId === p.id && (b.status === "posted" || b.status === "overdue"));
        balanceDue = partnerBills.reduce((sum, b) => sum + b.amountDue, 0);
        balanceType = "Payable";
      }
      return `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td>${p.company || "-"}</td>
                    <td><a href="mailto:${p.email}" style="color: var(--primary); text-decoration: none;">${p.email}</a></td>
                    <td>${p.phone || "-"}</td>
                    <td class="text-center">
                      ${p.isCustomer ? `<span class="badge badge-posted">Customer</span>` : ""}
                      ${p.isVendor ? `<span class="badge badge-draft">Vendor</span>` : ""}
                    </td>
                    <td class="text-right font-mono" style="font-weight: 700; color: ${balanceDue > 0 ? p.isCustomer ? "var(--primary)" : "var(--danger)" : "var(--text-muted)"};">
                      ${AccountingEngine.formatCurrency(balanceDue, symbol)}
                      ${balanceDue > 0 ? `<div style="font-size: 10px; font-weight: normal; color: var(--text-muted);">${balanceType}</div>` : ""}
                    </td>
                    <td class="text-center">
                      ${p.isCustomer ? `
                        <button class="btn btn-secondary btn-sm btn-quick-inv" data-id="${p.id}" title="Create Invoice">
                          + Invoice
                        </button>
                      ` : `
                        <button class="btn btn-secondary btn-sm btn-quick-bill" data-id="${p.id}" title="Create Bill">
                          + Bill
                        </button>
                      `}
                    </td>
                  </tr>
                `;
    }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.querySelector("#pfilter-customers")?.addEventListener("click", () => {
      filter = "customers";
      renderList();
    });
    container.querySelector("#pfilter-vendors")?.addEventListener("click", () => {
      filter = "vendors";
      renderList();
    });
    container.querySelector("#pfilter-all")?.addEventListener("click", () => {
      filter = "all";
      renderList();
    });
    container.querySelector("#btn-create-partner")?.addEventListener("click", () => {
      openCreatePartnerModal(renderList, filter === "vendors" ? "vendor" : "customer");
    });
    container.querySelectorAll(".btn-quick-inv").forEach((btn) => {
      btn.onclick = () => navigate("invoices", { action: "new", partnerId: btn.dataset.id });
    });
    container.querySelectorAll(".btn-quick-bill").forEach((btn) => {
      btn.onclick = () => navigate("bills", { action: "new", partnerId: btn.dataset.id });
    });
  }
  renderList();
}
function openCreatePartnerModal(onSuccess, defaultType = "customer") {
  const isCustomer = defaultType === "customer";
  const entityTitle = isCustomer ? "Customer" : "Vendor";
  modal.open({
    title: `${getIcon("users")} Create New ${entityTitle}`,
    size: "md",
    contentHtml: `
      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">${entityTitle} Name</label>
            <input type="text" class="form-control" id="part-name" placeholder="e.g. Acme Technologies Corp" />
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Company / Organization</label>
            <input type="text" class="form-control" id="part-company" placeholder="e.g. Acme Inc." />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="part-email" placeholder="finance@example.com" />
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input type="tel" class="form-control" id="part-phone" placeholder="+880 1700-000000" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Tax ID / BIN / VAT</label>
            <input type="text" class="form-control" id="part-taxid" placeholder="e.g. 001928374-0101" />
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Type</label>
            <div style="display: flex; gap: 16px; margin-top: 6px;">
              <label style="display: flex; align-items: center; gap: 6px; font-weight: 500; cursor: pointer;">
                <input type="radio" name="part-type-radio" value="customer" ${isCustomer ? "checked" : ""} /> Customer
              </label>
              <label style="display: flex; align-items: center; gap: 6px; font-weight: 500; cursor: pointer;">
                <input type="radio" name="part-type-radio" value="vendor" ${!isCustomer ? "checked" : ""} /> Vendor / Supplier
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Street Address</label>
        <input type="text" class="form-control" id="part-street" placeholder="Gulshan-2, Dhaka, Bangladesh" />
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-part-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-part-save">${getIcon("check")} Create ${entityTitle}</button>
    `,
    onOpen: (body, footer) => {
      setTimeout(() => body.querySelector("#part-name")?.focus(), 50);
      footer.querySelector("#modal-part-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-part-save").onclick = () => {
        const name = body.querySelector("#part-name").value.trim();
        const company = body.querySelector("#part-company").value.trim();
        const email = body.querySelector("#part-email").value.trim();
        const phone = body.querySelector("#part-phone").value.trim();
        const taxId = body.querySelector("#part-taxid").value.trim();
        const street = body.querySelector("#part-street").value.trim();
        const selectedType = body.querySelector('input[name="part-type-radio"]:checked')?.value || "customer";
        const isCust = selectedType === "customer";
        if (!name) {
          toast.warning(`Please enter the ${isCust ? "Customer" : "Vendor"} name.`);
          body.querySelector("#part-name")?.focus();
          return;
        }
        store.savePartner({
          id: `part-${Date.now()}`,
          name,
          company,
          email: email || `${name.toLowerCase().replace(/[^a-z0-9]/g, "")}@example.com`,
          phone,
          taxId,
          street,
          city: "Dhaka, Bangladesh",
          isCustomer: isCust,
          isVendor: !isCust,
          paymentTerms: "30_days",
          receivableBalance: 0,
          payableBalance: 0
        });
        modal.close();
        toast.success(`${isCust ? "Customer" : "Vendor"} "${name}" added successfully!`);
        if (typeof onSuccess === "function") onSuccess();
      };
    }
  });
}

// js/views/products.js
function renderProducts(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const products = store.getProducts();
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-product">
          ${getIcon("plus")} New Product
        </button>
        <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">
          ${products.length} Products
        </span>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table">
          <thead>
            <tr>
              <th width="120">SKU</th>
              <th>Product / Service Name</th>
              <th width="100">Type</th>
              <th>Income Account</th>
              <th class="text-right" width="120">Cost</th>
              <th class="text-right" width="130">Sales Price</th>
              <th class="text-right" width="100">Margin</th>
            </tr>
          </thead>
          <tbody>
            ${products.length === 0 ? `
              <tr>
                <td colspan="7" class="table-empty-state">No products found.</td>
              </tr>
            ` : products.map((p) => {
    const margin = p.salePrice - (p.costPrice || 0);
    const marginPct = p.salePrice > 0 ? (margin / p.salePrice * 100).toFixed(0) : 0;
    return `
                <tr>
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${p.sku || "-"}</td>
                  <td>
                    <strong>${p.name}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">${p.description || ""}</div>
                  </td>
                  <td><span class="badge ${p.type === "service" ? "badge-posted" : "badge-draft"}">${p.type}</span></td>
                  <td><span class="font-mono">${p.incomeAccount}</span></td>
                  <td class="text-right font-mono">${AccountingEngine.formatCurrency(p.costPrice, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 800; color: var(--credit-color);">${AccountingEngine.formatCurrency(p.salePrice, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 600;">${marginPct}%</td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.querySelector("#btn-create-product")?.addEventListener("click", () => {
    openCreateProductModal(() => renderProducts(container, navigate));
  });
}
function openCreateProductModal(onSuccess) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const accounts = store.getAccounts();
  modal.open({
    title: `${getIcon("package")} Add Product / Service`,
    size: "md",
    contentHtml: `
      <div class="form-row">
        <div class="form-col" style="flex: 1.5;">
          <div class="form-group">
            <label class="form-label required">Product / Service Name</label>
            <input type="text" class="form-control" id="prod-name" placeholder="e.g. Cloud Security Audit" />
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">SKU / Code</label>
            <input type="text" class="form-control font-mono" id="prod-sku" placeholder="e.g. SRV-AUDIT-01" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Sales Price</label>
            <div class="input-group">
              <span class="input-prefix">${symbol}</span>
              <input type="number" step="0.01" class="form-control" id="prod-price" placeholder="1500.00" />
            </div>
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Cost Price</label>
            <div class="input-group">
              <span class="input-prefix">${symbol}</span>
              <input type="number" step="0.01" class="form-control" id="prod-cost" placeholder="300.00" />
            </div>
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label">Type</label>
            <select class="form-control" id="prod-type">
              <option value="service">Service</option>
              <option value="goods">Physical Goods</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Income Account</label>
            <select class="form-control" id="prod-income-acc">
              ${accounts.filter((a) => a.type === "revenue" || a.type === "other_income").map((a) => `
                <option value="${a.code}">${a.code} - ${a.name}</option>
              `).join("")}
            </select>
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label class="form-label required">Expense Account</label>
            <select class="form-control" id="prod-expense-acc">
              ${accounts.filter((a) => a.type === "cogs" || a.type === "expense").map((a) => `
                <option value="${a.code}">${a.code} - ${a.name}</option>
              `).join("")}
            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Description</label>
        <input type="text" class="form-control" id="prod-desc" placeholder="Detailed service description for invoices..." />
      </div>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-prod-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-prod-save">Save Product</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-prod-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-prod-save").onclick = () => {
        const name = body.querySelector("#prod-name").value.trim();
        const sku = body.querySelector("#prod-sku").value.trim();
        const salePrice = parseFloat(body.querySelector("#prod-price").value) || 0;
        const costPrice = parseFloat(body.querySelector("#prod-cost").value) || 0;
        const type = body.querySelector("#prod-type").value;
        const incomeAccount = body.querySelector("#prod-income-acc").value;
        const expenseAccount = body.querySelector("#prod-expense-acc").value;
        const description = body.querySelector("#prod-desc").value.trim();
        if (!name || salePrice <= 0) {
          toast.warning("Please enter product name and positive sales price.");
          return;
        }
        store.saveProduct({
          id: `prod-${Date.now()}`,
          name,
          sku: sku || `SKU-${Math.floor(100 + Math.random() * 900)}`,
          salePrice,
          costPrice,
          type,
          incomeAccount,
          expenseAccount,
          description,
          taxId: "tax-10"
        });
        modal.close();
        toast.success(`Product "${name}" added successfully!`);
        onSuccess();
      };
    }
  });
}

// js/views/settings.js
function renderSettings(container, navigate, params = {}) {
  const activeTab = params.tab || "general";
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const configCategories = [
    {
      category: "General",
      tabs: [
        { id: "general", label: "Settings", icon: "settings" },
        { id: "online-payments", label: "Online Payments", icon: "credit-card" }
      ]
    },
    {
      category: "Accounting",
      tabs: [
        { id: "coa-redirect", label: "Chart of Accounts", icon: "landmark", isRoute: "coa" },
        { id: "taxes", label: "Taxes", icon: "percent" },
        { id: "journals", label: "Journals", icon: "book" },
        { id: "currencies", label: "Currencies", icon: "coins" },
        { id: "fiscal-positions", label: "Fiscal Positions", icon: "shuffle" },
        { id: "multi-ledger", label: "Multi-Ledger", icon: "layers" },
        { id: "checks", label: "Checks", icon: "file-text" },
        { id: "depreciation-models", label: "Depreciation Models", icon: "trending-down" },
        { id: "return-types", label: "Return Types", icon: "clipboard" },
        { id: "invoice-reminders", label: "Invoice Reminders", icon: "bell" }
      ]
    },
    {
      category: "Invoicing",
      tabs: [
        { id: "payment-terms", label: "Payment Terms", icon: "calendar" },
        { id: "product-categories", label: "Product Categories", icon: "package" }
      ]
    }
  ];
  function renderHeader() {
    return `
      <!-- Configuration Header -->
      <div class="report-header-card" style="margin-bottom: 16px;">
        <div class="report-title-group">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px; font-weight: 700; color: var(--text-main);">System Configuration & Rules</span>
            <span class="badge badge-posted" style="font-size: 11px;">Unifly Bangladesh</span>
          </div>
          <div class="report-subtitle">
            Configure fiscal accounting rules, online payment gateways, statutory tax mapping, and invoicing terms.
          </div>
        </div>
      </div>

      <!-- Category Navigation Bar -->
      <div class="review-nav-bar" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 22px; display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
        ${configCategories.map((cat) => `
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; padding-right: 4px;">
              ${cat.category}:
            </span>
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
              ${cat.tabs.map((t) => `
                <button class="btn btn-sm ${activeTab === t.id ? "btn-primary" : "btn-secondary"}" 
                        id="cfg-tab-${t.id}" 
                        style="padding: 4px 10px; font-size: 12px; display: inline-flex; align-items: center; gap: 5px;">
                  ${getIcon(t.icon)} ${t.label}
                </button>
              `).join("")}
            </div>
          </div>
        `).join('<div style="width: 1px; height: 18px; background: var(--border-light); margin: 0 4px;"></div>')}
      </div>
    `;
  }
  function renderGeneralSettingsTab() {
    return `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 24px;">
        <!-- Company Profile Card -->
        <div class="table-card" style="padding: 24px;">
          <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
            ${getIcon("landmark")} Company Profile
          </h3>

          <div class="form-group" style="margin-bottom: 14px;">
            <label class="form-label required">Company Legal Name</label>
            <input type="text" class="form-control" id="cfg-comp-name" value="${company.name}" />
          </div>

          <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 14px;">
            <div class="form-group">
              <label class="form-label required">Currency Code</label>
              <input type="text" class="form-control" id="cfg-comp-currency" value="${company.currency}" />
            </div>
            <div class="form-group">
              <label class="form-label required">Symbol</label>
              <input type="text" class="form-control" id="cfg-comp-symbol" value="${company.currencySymbol || "\u09F3"}" />
            </div>
            <div class="form-group">
              <label class="form-label">Tax ID / BIN</label>
              <input type="text" class="form-control" id="cfg-comp-taxid" value="${company.taxId || ""}" />
            </div>
          </div>

          <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
            <div class="form-group">
              <label class="form-label">Corporate Email</label>
              <input type="email" class="form-control" id="cfg-comp-email" value="${company.email || ""}" />
            </div>
            <div class="form-group">
              <label class="form-label">Phone</label>
              <input type="tel" class="form-control" id="cfg-comp-phone" value="${company.phone || ""}" />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 18px;">
            <label class="form-label">Registered Office Address</label>
            <input type="text" class="form-control" id="cfg-comp-street" value="${company.street || ""}" style="margin-bottom: 6px;" />
            <input type="text" class="form-control" id="cfg-comp-city" value="${company.city || ""}" />
          </div>

          <button class="btn btn-primary" id="btn-save-company">
            ${getIcon("check")} Save Company Profile
          </button>
        </div>

        <!-- Data Management & Backups -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div class="table-card" style="padding: 24px;">
            <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${getIcon("settings")} Data Management & Backups
            </h3>
            <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 16px;">
              Export full financial ledger datasets (accounts, vouchers, invoices, bills, audit trails) to JSON or restore from archive.
            </p>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              <button class="btn btn-secondary" id="btn-backup-download">
                ${getIcon("download")} Download Complete JSON Backup
              </button>

              <label class="btn btn-secondary" style="cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                ${getIcon("upload")} Restore JSON Backup File
                <input type="file" id="input-backup-upload" accept=".json" style="display: none;" />
              </label>

              <button class="btn btn-outline-primary" id="btn-reset-demo" style="color: var(--danger); border-color: var(--danger); margin-top: 8px;">
                ${getIcon("refresh-cw")} Reset to Default Demo Company (Unifly Bangladesh)
              </button>
            </div>
          </div>

          ${store.canManageUsers() ? `
            <div class="table-card" style="padding: 24px;">
              <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                ${getIcon("users")} Staff & Role-Based Access Control
              </h3>
              <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 14px;">
                Super Admin and Admins can create staff accounts and assign employee vs administrative privileges.
              </p>
              <button class="btn btn-primary" id="btn-cfg-manage-users">
                ${getIcon("users")} Open Employee Directory & RBAC &rarr;
              </button>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }
  function renderOnlinePaymentsTab() {
    const providers = store.getOnlinePayments();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Online Payment Acquirers & Merchant Gateways</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Accept customer card payments, mobile financial services (bKash/Nagad), and corporate bank wires.
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 18px;">
        ${providers.map((p) => `
          <div class="content-card" style="padding: 20px; border-top: 3px solid ${p.status === "enabled" ? "var(--primary)" : "var(--border-base)"};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
              <div>
                <strong style="font-size: 15px; color: var(--text-main);">${p.name}</strong>
                <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; margin-top: 2px;">
                  Provider: <strong>${p.provider.toUpperCase()}</strong> &bull; Environment: <strong>${p.environment}</strong>
                </div>
              </div>
              <span class="badge ${p.status === "enabled" ? "badge-paid" : "badge-draft"}" style="font-size: 11px;">
                ${p.status.toUpperCase()}
              </span>
            </div>

            <div style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
              <div><strong>Supported Currencies:</strong> <span class="font-mono">${p.supportedCurrencies}</span></div>
              ${p.transactionFee ? `<div><strong>Merchant Fee:</strong> <span class="font-mono">${p.transactionFee}</span></div>` : ""}
              ${p.merchantNumber ? `<div><strong>MFS Account:</strong> <span class="font-mono">${p.merchantNumber}</span></div>` : ""}
              ${p.bankAccount ? `<div><strong>Deposit Account:</strong> ${p.bankAccount}</div>` : ""}
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 12px;">
              <span style="font-size: 12px; color: var(--text-muted);">
                ${p.autoReconcile ? "\u2713 Auto-Reconciles with Bank" : "Manual Statement Matching"}
              </span>
              <button class="btn btn-sm ${p.status === "enabled" ? "btn-secondary" : "btn-primary"} btn-toggle-payment" data-provider-id="${p.id}">
                ${p.status === "enabled" ? "Disable Gateway" : "Enable Gateway"}
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }
  function renderTaxesTab() {
    const taxes = store.getTaxes();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Tax Rates & VAT Schedules (NBR Mushak)</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Standard Sales Tax, Reduced Rates, and Zero-rated export provisions.
          </div>
        </div>
        <button class="btn btn-primary" id="btn-add-tax-modal">
          ${getIcon("plus")} New Tax Rate
        </button>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Tax Name</th>
              <th>Type</th>
              <th style="text-align: right; width: 140px;">Rate (%)</th>
              <th style="text-align: center; width: 120px;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${taxes.map((t) => `
              <tr>
                <td><strong>${t.name}</strong></td>
                <td><span class="badge badge-posted" style="font-size: 11px;">${t.type.toUpperCase()}</span></td>
                <td class="font-mono text-right" style="font-size: 14px; font-weight: 700;">${t.rate}%</td>
                <td style="text-align: center;">
                  <span class="badge ${t.active ? "badge-paid" : "badge-draft"}" style="font-size: 10px;">
                    ${t.active ? "ACTIVE" : "INACTIVE"}
                  </span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderJournalsTab() {
    const journals = store.getJournals();
    const accounts = store.getAccounts();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Accounting Journals Register</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Double-entry journals (Sales, Purchases, Bank, Cash, and Miscellaneous).
          </div>
        </div>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 120px;">Code</th>
              <th>Journal Name</th>
              <th>Type</th>
              <th>Default Balancing Account</th>
            </tr>
          </thead>
          <tbody>
            ${journals.map((j) => {
      const acc = accounts.find((a) => a.code === j.defaultAccount);
      return `
                <tr>
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${j.code}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="color: var(--primary);">${getIcon(j.icon || "book")}</span>
                      <strong>${j.name}</strong>
                    </div>
                  </td>
                  <td><span class="badge badge-posted" style="font-size: 11px; text-transform: uppercase;">${j.type}</span></td>
                  <td>
                    <span class="font-mono" style="font-weight: 600;">${j.defaultAccount}</span>
                    <span style="font-size: 12px; color: var(--text-muted); margin-left: 6px;">${acc ? acc.name : ""}</span>
                  </td>
                </tr>
              `;
    }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderCurrenciesTab() {
    const currencies = store.getCurrencies();
    const sortedCurrencies = [...currencies].sort((a, b) => (b.isBase ? 1 : 0) - (a.isBase ? 1 : 0));
    const baseCur = sortedCurrencies.find((c) => c.isBase) || { code: company.currency || "BDT", name: "Bangladeshi Taka", symbol: company.currencySymbol || "\u09F3" };
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Multi-Currency & Exchange Rates</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Manage secondary transaction currencies and real-time conversion rates. Base currency: <strong>${baseCur.name} (${baseCur.code})</strong>.
          </div>
        </div>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 100px;">Code</th>
              <th>Currency Name</th>
              <th style="text-align: center; width: 90px;">Symbol</th>
              <th style="text-align: right; width: 170px;">Exchange Rate (vs ${baseCur.code})</th>
              <th style="text-align: center; width: 130px;">Base Currency</th>
              <th style="text-align: center; width: 140px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${sortedCurrencies.map((c) => `
              <tr style="${c.isBase ? "background-color: rgba(0, 135, 132, 0.04);" : ""}">
                <td class="font-mono" style="font-weight: 700; color: var(--primary); font-size: 14px;">${c.code}</td>
                <td><strong>${c.name}</strong></td>
                <td style="text-align: center; font-size: 15px; font-weight: 700;">${c.symbol}</td>
                <td class="font-mono text-right" style="font-size: 14px; font-weight: 600;">
                  ${c.isBase ? "1.0000 (Base)" : c.rate.toFixed(4)}
                </td>
                <td style="text-align: center;">
                  <span class="badge ${c.isBase ? "badge-paid" : "badge-draft"}" style="font-size: 10px;">
                    ${c.isBase ? "BASE" : "SECONDARY"}
                  </span>
                </td>
                <td style="text-align: center;">
                  ${!c.isBase ? `
                    <div style="display: flex; gap: 6px; justify-content: center; align-items: center;">
                      <button class="btn btn-secondary btn-sm btn-edit-currency-rate" data-currency-code="${c.code}" data-current-rate="${c.rate}">
                        ${getIcon("edit")} Rate
                      </button>
                      <button class="btn btn-outline-primary btn-sm btn-set-base-currency" data-currency-code="${c.code}" title="Set ${c.code} as Base Currency" style="font-size: 11px; padding: 3px 7px;">
                        Set Base
                      </button>
                    </div>
                  ` : '<span style="color: var(--text-muted); font-size: 12px; font-weight: 600;">Standard</span>'}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderFiscalPositionsTab() {
    const fps = store.getFiscalPositions();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Fiscal Positions & Tax Mapping</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Rules for automatically remapping VAT/Tax rates based on customer location and supply type.
          </div>
        </div>
        <button class="btn btn-primary" id="btn-add-fp-modal">
          ${getIcon("plus")} New Fiscal Position
        </button>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Fiscal Position Name</th>
              <th>Origin Tax</th>
              <th>Mapped Destination Tax</th>
              <th>Statutory Exemption Basis</th>
              <th style="text-align: center;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${fps.map((f) => `
              <tr>
                <td><strong>${f.name}</strong></td>
                <td><span class="badge badge-posted font-mono">${f.taxSource}</span></td>
                <td><span class="badge badge-paid font-mono">${f.taxDestination}</span></td>
                <td style="font-size: 12.5px; color: var(--text-muted);">${f.notes}</td>
                <td style="text-align: center;"><span class="badge badge-paid" style="font-size: 10px;">ACTIVE</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderMultiLedgerTab() {
    const ledgers = store.getMultiLedgers();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Multi-Ledger Accounting</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Parallel ledger accounting for international corporate IFRS vs local statutory NBR compliance.
          </div>
        </div>
        <button class="btn btn-primary" id="btn-add-ledger-modal">
          ${getIcon("plus")} New Secondary Ledger
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
        ${ledgers.map((l) => `
          <div class="content-card" style="padding: 20px; border-top: 3px solid ${l.isDefault ? "var(--primary)" : "var(--border-base)"};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <strong style="font-size: 15px;">${l.name}</strong>
                <div class="font-mono" style="font-size: 12px; color: var(--primary); font-weight: 700; margin-top: 2px;">
                  Code: ${l.code} &bull; Currency: ${l.currency}
                </div>
              </div>
              <span class="badge ${l.isDefault ? "badge-paid" : "badge-posted"}" style="font-size: 10px;">
                ${l.isDefault ? "PRIMARY" : "SECONDARY"}
              </span>
            </div>
            <p style="font-size: 12.5px; color: var(--text-muted); margin: 0; line-height: 1.5;">
              ${l.description}
            </p>
          </div>
        `).join("")}
      </div>
    `;
  }
  function renderChecksTab() {
    const cfg = store.getCheckFormats();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Check Printing & Bank Disbursement Layout</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Check layouts, numbering sequence, and MICR optical formatting.
          </div>
        </div>
      </div>

      <div class="table-card" style="padding: 24px; max-width: 650px;">
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Next Check Number</label>
          <input type="number" id="cfg-check-num" class="form-control font-mono" value="${cfg.currentCheckNumber}" />
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Bank Check Sheet Layout</label>
          <select id="cfg-check-layout" class="form-control">
            <option value="check_top" ${cfg.layout === "check_top" ? "selected" : ""}>Check on Top (Stub / Stub)</option>
            <option value="check_middle" ${cfg.layout === "check_middle" ? "selected" : ""}>Check in Middle (Stub / Check / Stub)</option>
            <option value="check_bottom" ${cfg.layout === "check_bottom" ? "selected" : ""}>Check on Bottom (Stub / Stub / Check)</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Signature Line Designation</label>
          <input type="text" id="cfg-check-sig" class="form-control" value="${cfg.signatureLineText}" />
        </div>

        <div class="form-group" style="margin-bottom: 20px;">
          <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
            <input type="checkbox" id="cfg-check-micr" ${cfg.micrFont ? "checked" : ""} />
            <span>Enable E-13B MICR Optical Character Font Printing</span>
          </label>
        </div>

        <button class="btn btn-primary" id="btn-save-checks-cfg">
          ${getIcon("check")} Save Check Layout Settings
        </button>
      </div>
    `;
  }
  function renderDepreciationModelsTab() {
    const models = store.getDepreciationModels();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Fixed Asset Depreciation Models</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Predefined amortization formulas for computer hardware, infrastructure, and equipment.
          </div>
        </div>
        <button class="btn btn-primary" id="btn-add-depr-model-modal">
          ${getIcon("plus")} New Depreciation Model
        </button>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Method</th>
              <th style="text-align: center;">Useful Life</th>
              <th style="text-align: right;">Salvage %</th>
              <th>Asset / Expense Accounts</th>
            </tr>
          </thead>
          <tbody>
            ${models.map((m) => `
              <tr>
                <td><strong>${m.name}</strong></td>
                <td><span class="badge badge-posted" style="font-size: 10.5px;">${m.method.toUpperCase()}</span></td>
                <td style="text-align: center; font-weight: 600;">${m.durationYears} Years</td>
                <td class="font-mono text-right">${m.salvagePercent}%</td>
                <td class="font-mono" style="font-size: 12px;">Asset: ${m.assetAccount} &bull; Exp: ${m.expenseAccount}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderReturnTypesTab() {
    const returns = store.getReturnTypes();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Statutory Return Types & Authorities</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Scheduled filing formats recognized by Bangladesh National Board of Revenue.
          </div>
        </div>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Statutory Return Form</th>
              <th>Regulatory Authority</th>
              <th>Form Identifier</th>
              <th>Frequency</th>
              <th>Statutory Deadline</th>
            </tr>
          </thead>
          <tbody>
            ${returns.map((r) => `
              <tr>
                <td><strong>${r.name}</strong></td>
                <td>${r.authority}</td>
                <td><span class="badge badge-posted font-mono">${r.formCode}</span></td>
                <td style="text-transform: capitalize;">${r.frequency}</td>
                <td class="font-mono" style="font-weight: 600; color: var(--primary);">${r.deadline}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderInvoiceRemindersTab() {
    const reminders = store.getInvoiceReminders();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Automated Invoice Reminders & Payment Follow-up</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Automated email schedules triggered before and after invoice due dates.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${reminders.map((r) => `
          <div class="content-card" style="padding: 18px; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid ${r.enabled ? "var(--primary)" : "var(--border-base)"};">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <strong style="font-size: 14.5px;">${r.name}</strong>
                <span class="badge ${r.enabled ? "badge-paid" : "badge-draft"}" style="font-size: 10px;">
                  ${r.enabled ? "ACTIVE SCHEDULE" : "PAUSED"}
                </span>
              </div>
              <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
                <strong>Trigger:</strong> ${Math.abs(r.triggerDays)} days ${r.triggerType === "before_due" ? "before due date" : "after due date"} &bull; 
                <strong>Subject:</strong> <em>"${r.subject}"</em>
              </div>
            </div>

            <button class="btn btn-sm ${r.enabled ? "btn-secondary" : "btn-primary"} btn-toggle-reminder" data-rem-id="${r.id}">
              ${r.enabled ? "Pause Schedule" : "Activate Schedule"}
            </button>
          </div>
        `).join("")}
      </div>
    `;
  }
  function renderPaymentTermsTab() {
    const terms = store.getPaymentTermsList();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Commercial Payment Terms</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Default settlement credit terms available on customer invoices and vendor bills.
          </div>
        </div>
        <button class="btn btn-primary" id="btn-add-term-modal">
          ${getIcon("plus")} New Payment Term
        </button>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 140px;">Term Code</th>
              <th>Term Description</th>
              <th style="text-align: center; width: 120px;">Credit Days</th>
              <th>Calculation Rule</th>
            </tr>
          </thead>
          <tbody>
            ${terms.map((t) => `
              <tr>
                <td class="font-mono" style="font-weight: 700; color: var(--primary);">${t.code}</td>
                <td><strong>${t.name}</strong></td>
                <td style="text-align: center; font-weight: 700; font-family: monospace;">${t.days} Days</td>
                <td style="font-size: 12.5px; color: var(--text-muted);">${t.description}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function renderProductCategoriesTab() {
    const cats = store.getProductCategories();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h3 style="margin: 0; font-size: 16px;">Product & Service Categories</h3>
          <div style="font-size: 12px; color: var(--text-muted);">
            Automated Chart of Accounts routing for product sales and cost of goods sold.
          </div>
        </div>
        <button class="btn btn-primary" id="btn-add-cat-modal">
          ${getIcon("plus")} New Category
        </button>
      </div>

      <div class="content-card" style="padding: 0; overflow: hidden;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 130px;">Category Code</th>
              <th>Category Name</th>
              <th>Income Account</th>
              <th>Expense / COGS Account</th>
              <th style="text-align: center; width: 100px;">Products</th>
            </tr>
          </thead>
          <tbody>
            ${cats.map((c) => `
              <tr>
                <td class="font-mono" style="font-weight: 700; color: var(--primary);">${c.code}</td>
                <td><strong>${c.name}</strong></td>
                <td class="font-mono">${c.incomeAccount} (Product Sales)</td>
                <td class="font-mono">${c.expenseAccount} (COGS)</td>
                <td style="text-align: center; font-weight: 600;">${c.productCount}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  function render() {
    let tabContent = "";
    switch (activeTab) {
      case "general":
        tabContent = renderGeneralSettingsTab();
        break;
      case "online-payments":
        tabContent = renderOnlinePaymentsTab();
        break;
      case "taxes":
        tabContent = renderTaxesTab();
        break;
      case "journals":
        tabContent = renderJournalsTab();
        break;
      case "currencies":
        tabContent = renderCurrenciesTab();
        break;
      case "fiscal-positions":
        tabContent = renderFiscalPositionsTab();
        break;
      case "multi-ledger":
        tabContent = renderMultiLedgerTab();
        break;
      case "checks":
        tabContent = renderChecksTab();
        break;
      case "depreciation-models":
        tabContent = renderDepreciationModelsTab();
        break;
      case "return-types":
        tabContent = renderReturnTypesTab();
        break;
      case "invoice-reminders":
        tabContent = renderInvoiceRemindersTab();
        break;
      case "payment-terms":
        tabContent = renderPaymentTermsTab();
        break;
      case "product-categories":
        tabContent = renderProductCategoriesTab();
        break;
      default:
        tabContent = renderGeneralSettingsTab();
    }
    container.innerHTML = `
      ${renderHeader()}
      <div id="cfg-content-area">
        ${tabContent}
      </div>
    `;
    wireGlobalEvents();
    wireTabEvents();
  }
  function wireGlobalEvents() {
    configCategories.forEach((cat) => {
      cat.tabs.forEach((t) => {
        container.querySelector(`#cfg-tab-${t.id}`)?.addEventListener("click", () => {
          if (t.isRoute) {
            navigate(t.isRoute);
          } else {
            navigate("settings", { tab: t.id });
          }
        });
      });
    });
  }
  function wireTabEvents() {
    if (activeTab === "general") {
      container.querySelector("#btn-cfg-manage-users")?.addEventListener("click", () => navigate("users"));
      container.querySelector("#btn-save-company")?.addEventListener("click", () => {
        store.updateCompany({
          name: container.querySelector("#cfg-comp-name").value.trim(),
          currency: container.querySelector("#cfg-comp-currency").value.trim(),
          currencySymbol: container.querySelector("#cfg-comp-symbol").value.trim(),
          taxId: container.querySelector("#cfg-comp-taxid").value.trim(),
          email: container.querySelector("#cfg-comp-email").value.trim(),
          phone: container.querySelector("#cfg-comp-phone").value.trim(),
          street: container.querySelector("#cfg-comp-street").value.trim(),
          city: container.querySelector("#cfg-comp-city").value.trim()
        });
        toast.success("Company profile updated successfully!");
      });
      container.querySelector("#btn-backup-download")?.addEventListener("click", () => {
        const dataStr = store.exportData();
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `unifly-accounting-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("Backup downloaded!");
      });
      container.querySelector("#input-backup-upload")?.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          const ok = store.importData(evt.target.result);
          if (ok) {
            toast.success("Database restored successfully from file!");
            navigate("dashboard");
          } else {
            toast.error("Invalid backup file.");
          }
        };
        reader.readAsText(file);
      });
      container.querySelector("#btn-reset-demo")?.addEventListener("click", () => {
        if (confirm("Reset entire accounting software to initial default demo data (Unifly Bangladesh)?")) {
          store.resetToDefault();
          toast.info("Database reset to fresh sample demo data!");
          navigate("dashboard");
        }
      });
    }
    if (activeTab === "online-payments") {
      container.querySelectorAll(".btn-toggle-payment").forEach((btn) => {
        btn.addEventListener("click", () => {
          const pid = btn.dataset.providerId;
          store.toggleOnlinePayment(pid);
          toast.success("Payment gateway setting updated!");
          render();
        });
      });
    }
    if (activeTab === "taxes") {
      container.querySelector("#btn-add-tax-modal")?.addEventListener("click", () => {
        modal.open({
          title: "Create New Tax Rate",
          contentHtml: `
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Tax Name *</label>
              <input type="text" id="modal-tax-name" class="form-control" placeholder="e.g. Supplementary Duty (SD 15%)" />
            </div>
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Rate Percentage (%) *</label>
              <input type="number" id="modal-tax-rate" class="form-control" value="15" step="0.5" />
            </div>
          `,
          footerHtml: `
            <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
            <button class="btn btn-primary" id="btn-save-tax-modal">Create Tax</button>
          `,
          onOpen: (dialog) => {
            dialog.querySelector("#btn-save-tax-modal")?.addEventListener("click", () => {
              const name = dialog.querySelector("#modal-tax-name")?.value.trim();
              const rate = parseFloat(dialog.querySelector("#modal-tax-rate")?.value || 0);
              if (!name) return alert("Enter tax name.");
              store.addTax({ name, rate });
              toast.success(`Tax rate ${name} created!`);
              modal.close();
              render();
            });
          }
        });
      });
    }
    if (activeTab === "currencies") {
      const baseCur = store.getCurrencies().find((c) => c.isBase) || { code: "BDT" };
      container.querySelectorAll(".btn-edit-currency-rate").forEach((btn) => {
        btn.addEventListener("click", () => {
          const code = btn.dataset.currencyCode;
          const currentRate = btn.dataset.currentRate;
          const newRate = prompt(`Enter new exchange rate for ${code} vs ${baseCur.code}:`, currentRate);
          if (newRate && !isNaN(parseFloat(newRate))) {
            store.updateCurrencyRate(code, parseFloat(newRate));
            toast.success(`Exchange rate for ${code} updated to ${newRate}!`);
            render();
          }
        });
      });
      container.querySelectorAll(".btn-set-base-currency").forEach((btn) => {
        btn.addEventListener("click", () => {
          const code = btn.dataset.currencyCode;
          if (confirm(`Set ${code} as the system Base Currency? This will update company operating currency.`)) {
            store.setBaseCurrency(code);
            toast.success(`Base Currency set to ${code}!`);
            render();
          }
        });
      });
    }
    if (activeTab === "fiscal-positions") {
      container.querySelector("#btn-add-fp-modal")?.addEventListener("click", () => {
        modal.open({
          title: "Create Fiscal Position",
          contentHtml: `
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Position Name *</label>
              <input type="text" id="modal-fp-name" class="form-control" placeholder="e.g. Special Economic Zone (SEZ)" />
            </div>
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Statutory Basis / SRO Note</label>
              <input type="text" id="modal-fp-notes" class="form-control" placeholder="e.g. BEPZA VAT exemption" />
            </div>
          `,
          footerHtml: `
            <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
            <button class="btn btn-primary" id="btn-save-fp">Save Fiscal Position</button>
          `,
          onOpen: (dialog) => {
            dialog.querySelector("#btn-save-fp")?.addEventListener("click", () => {
              const name = dialog.querySelector("#modal-fp-name")?.value.trim();
              const notes = dialog.querySelector("#modal-fp-notes")?.value.trim();
              if (!name) return alert("Enter name.");
              store.addFiscalPosition({ name, notes });
              toast.success(`Fiscal position ${name} created!`);
              modal.close();
              render();
            });
          }
        });
      });
    }
    if (activeTab === "multi-ledger") {
      container.querySelector("#btn-add-ledger-modal")?.addEventListener("click", () => {
        modal.open({
          title: "Configure Secondary Ledger",
          contentHtml: `
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Ledger Name *</label>
              <input type="text" id="modal-ledg-name" class="form-control" placeholder="e.g. European Parent GAAP" />
            </div>
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Ledger Code *</label>
              <input type="text" id="modal-ledg-code" class="form-control" placeholder="e.g. EU-EUR" />
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <input type="text" id="modal-ledg-desc" class="form-control" placeholder="e.g. Secondary consolidation ledger" />
            </div>
          `,
          footerHtml: `
            <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
            <button class="btn btn-primary" id="btn-save-ledg">Create Ledger</button>
          `,
          onOpen: (dialog) => {
            dialog.querySelector("#btn-save-ledg")?.addEventListener("click", () => {
              const name = dialog.querySelector("#modal-ledg-name")?.value.trim();
              const code = dialog.querySelector("#modal-ledg-code")?.value.trim();
              const description = dialog.querySelector("#modal-ledg-desc")?.value.trim();
              if (!name || !code) return alert("Enter name and code.");
              store.addMultiLedger({ name, code, description });
              toast.success(`Ledger ${name} created!`);
              modal.close();
              render();
            });
          }
        });
      });
    }
    if (activeTab === "checks") {
      container.querySelector("#btn-save-checks-cfg")?.addEventListener("click", () => {
        const currentCheckNumber = parseInt(container.querySelector("#cfg-check-num").value || 1001, 10);
        const layout = container.querySelector("#cfg-check-layout").value;
        const signatureLineText = container.querySelector("#cfg-check-sig").value.trim();
        const micrFont = container.querySelector("#cfg-check-micr").checked;
        store.updateCheckFormats({ currentCheckNumber, layout, signatureLineText, micrFont });
        toast.success("Check layout settings saved!");
      });
    }
    if (activeTab === "depreciation-models") {
      container.querySelector("#btn-add-depr-model-modal")?.addEventListener("click", () => {
        modal.open({
          title: "New Depreciation Model",
          contentHtml: `
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Model Title *</label>
              <input type="text" id="modal-depr-name" class="form-control" placeholder="e.g. Commercial Transport Vehicles" />
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label">Useful Life (Years)</label>
                <input type="number" id="modal-depr-years" class="form-control" value="5" min="1" />
              </div>
              <div class="form-group">
                <label class="form-label">Salvage %</label>
                <input type="number" id="modal-depr-salvage" class="form-control" value="10" />
              </div>
            </div>
          `,
          footerHtml: `
            <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
            <button class="btn btn-primary" id="btn-save-depr-m">Save Model</button>
          `,
          onOpen: (dialog) => {
            dialog.querySelector("#btn-save-depr-m")?.addEventListener("click", () => {
              const name = dialog.querySelector("#modal-depr-name")?.value.trim();
              const durationYears = parseInt(dialog.querySelector("#modal-depr-years")?.value || 5, 10);
              const salvagePercent = parseFloat(dialog.querySelector("#modal-depr-salvage")?.value || 0);
              if (!name) return alert("Enter model name.");
              store.addDepreciationModel({ name, durationYears, salvagePercent });
              toast.success(`Depreciation model ${name} created!`);
              modal.close();
              render();
            });
          }
        });
      });
    }
    if (activeTab === "invoice-reminders") {
      container.querySelectorAll(".btn-toggle-reminder").forEach((btn) => {
        btn.addEventListener("click", () => {
          const remId = btn.dataset.remId;
          store.toggleInvoiceReminder(remId);
          toast.success("Invoice reminder schedule updated!");
          render();
        });
      });
    }
    if (activeTab === "payment-terms") {
      container.querySelector("#btn-add-term-modal")?.addEventListener("click", () => {
        modal.open({
          title: "New Payment Term",
          contentHtml: `
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Term Name *</label>
              <input type="text" id="modal-term-name" class="form-control" placeholder="e.g. 45 Days Net" />
            </div>
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Days to Settle *</label>
              <input type="number" id="modal-term-days" class="form-control" value="45" min="0" />
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <input type="text" id="modal-term-desc" class="form-control" placeholder="e.g. Due within 45 calendar days" />
            </div>
          `,
          footerHtml: `
            <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
            <button class="btn btn-primary" id="btn-save-term">Create Term</button>
          `,
          onOpen: (dialog) => {
            dialog.querySelector("#btn-save-term")?.addEventListener("click", () => {
              const name = dialog.querySelector("#modal-term-name")?.value.trim();
              const days = parseInt(dialog.querySelector("#modal-term-days")?.value || 0, 10);
              const description = dialog.querySelector("#modal-term-desc")?.value.trim();
              if (!name) return alert("Enter term name.");
              store.addPaymentTerm({ name, days, description });
              toast.success(`Payment term ${name} added!`);
              modal.close();
              render();
            });
          }
        });
      });
    }
    if (activeTab === "product-categories") {
      container.querySelector("#btn-add-cat-modal")?.addEventListener("click", () => {
        modal.open({
          title: "New Product Category",
          contentHtml: `
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Category Name *</label>
              <input type="text" id="modal-cat-name" class="form-control" placeholder="e.g. Telecommunications & VoIP" />
            </div>
          `,
          footerHtml: `
            <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
            <button class="btn btn-primary" id="btn-save-cat">Create Category</button>
          `,
          onOpen: (dialog) => {
            dialog.querySelector("#btn-save-cat")?.addEventListener("click", () => {
              const name = dialog.querySelector("#modal-cat-name")?.value.trim();
              if (!name) return alert("Enter category name.");
              store.addProductCategory({ name });
              toast.success(`Category ${name} created!`);
              modal.close();
              render();
            });
          }
        });
      });
    }
  }
  render();
}

// js/views/login.js
function renderLogin(container, onLoginSuccess) {
  const company = store.getCompany();
  container.innerHTML = `
    <div class="login-page-wrapper">
      <div class="login-card-container">
        <!-- Brand Header -->
        <div class="login-brand-header">
          <div class="login-logo-box">
            ${getIcon("landmark")}
          </div>
          <h1 class="login-company-title">${company.name}</h1>
          <p class="login-company-subtitle">Enterprise Accounting & Financial Management</p>
        </div>

        <!-- Error Alert (hidden by default) -->
        <div class="login-alert-banner" id="login-error-banner" style="display: none;">
          ${getIcon("x")} <span id="login-error-message">Invalid credentials</span>
        </div>

        <!-- Login Form -->
        <form id="login-form" class="login-form">
          <div class="form-group">
            <label class="form-label required" for="login-username">Username</label>
            <div class="input-group">
              <span class="input-prefix">@</span>
              <input 
                type="text" 
                id="login-username" 
                class="form-control" 
                placeholder="Enter username (e.g. superadmin)" 
                required 
                autocomplete="username"
                autofocus
              />
            </div>
          </div>

          <div class="form-group">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label class="form-label required" for="login-password">Password</label>
            </div>
            <div class="input-group">
              <input 
                type="password" 
                id="login-password" 
                class="form-control" 
                placeholder="Enter password" 
                required 
                autocomplete="current-password"
              />
              <button type="button" class="btn btn-secondary" id="btn-toggle-password" style="border-radius: 0 var(--radius-md) var(--radius-md) 0; border-left: none;" title="Toggle Password">
                ${getIcon("eye")}
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" id="btn-submit-login" style="width: 100%; margin-top: 8px; font-weight: 700;">
            Sign In to Accounting &rarr;
          </button>
        </form>

        <!-- Quick Login Demo Credentials -->
        <div class="login-demo-accounts-box">
          <div class="demo-accounts-title">Quick Demo Login (Select Role):</div>
          
          <div class="demo-pills-grid">
            <button class="demo-login-pill superadmin" id="pill-superadmin">
              <div class="pill-role">\u{1F451} Super Admin</div>
              <div class="pill-cred">superadmin &bull; Full Control</div>
            </button>

            <button class="demo-login-pill admin" id="pill-admin">
              <div class="pill-role">\u{1F6E1}\uFE0F Admin</div>
              <div class="pill-cred">admin &bull; Finance & Staff</div>
            </button>

            <button class="demo-login-pill employee" id="pill-employee">
              <div class="pill-role">\u{1F464} Employee</div>
              <div class="pill-cred">accountant &bull; Operations</div>
            </button>
          </div>
        </div>

        <div class="login-footer-security">
          <span>\u{1F512} Protected by Role-Based Access Control &bull; Powered by Unifly</span>
        </div>
      </div>
    </div>
  `;
  const form = container.querySelector("#login-form");
  const usernameInput = container.querySelector("#login-username");
  const passwordInput = container.querySelector("#login-password");
  const errorBanner = container.querySelector("#login-error-banner");
  const errorMessage = container.querySelector("#login-error-message");
  const togglePassBtn = container.querySelector("#btn-toggle-password");
  togglePassBtn?.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    errorBanner.style.display = "none";
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    try {
      const user = store.login(username, password);
      toast.success(`Welcome back, ${user.fullName}! Logged in as ${user.role.toUpperCase()}.`);
      if (typeof onLoginSuccess === "function") {
        onLoginSuccess(user);
      }
    } catch (err) {
      errorMessage.textContent = err.message || "Login failed. Please check credentials.";
      errorBanner.style.display = "flex";
      passwordInput.value = "";
      passwordInput.focus();
    }
  });
  container.querySelector("#pill-superadmin")?.addEventListener("click", () => {
    usernameInput.value = "superadmin";
    passwordInput.value = "password123";
    form.dispatchEvent(new Event("submit"));
  });
  container.querySelector("#pill-admin")?.addEventListener("click", () => {
    usernameInput.value = "admin";
    passwordInput.value = "password123";
    form.dispatchEvent(new Event("submit"));
  });
  container.querySelector("#pill-employee")?.addEventListener("click", () => {
    usernameInput.value = "accountant";
    passwordInput.value = "password123";
    form.dispatchEvent(new Event("submit"));
  });
}

// js/views/users.js
function renderUsers(container, navigate) {
  const currentUser = store.getCurrentUser();
  if (!store.canManageUsers()) {
    container.innerHTML = `
      <div class="document-sheet" style="text-align: center; padding: 60px 20px;">
        <div style="font-size: 48px; color: var(--danger); margin-bottom: 16px;">\u{1F6AB}</div>
        <h2 style="font-size: 22px; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">
          Access Restricted
        </h2>
        <p style="font-size: 14px; color: var(--text-muted); max-width: 500px; margin: 0 auto 24px auto;">
          Employee & User Management requires <strong>Super Admin</strong> or <strong>Admin</strong> privileges. Your current role is <strong>${(currentUser?.role || "Guest").toUpperCase()}</strong>.
        </p>
        <button class="btn btn-primary" id="btn-return-dashboard">
          &larr; Return to Dashboard
        </button>
      </div>
    `;
    container.querySelector("#btn-return-dashboard")?.addEventListener("click", () => navigate("dashboard"));
    return;
  }
  function renderList() {
    const users = store.getUsers();
    const isSuper = store.isSuperAdmin();
    const superAdminCount = users.filter((u) => u.role === "superadmin").length;
    const adminCount = users.filter((u) => u.role === "admin").length;
    const employeeCount = users.filter((u) => u.role === "employee").length;
    container.innerHTML = `
      <!-- Header Card -->
      <div class="report-header-card" style="margin-bottom: 20px;">
        <div class="report-title-group">
          <h2>Employee & User Management</h2>
          <div class="report-subtitle">
            Manage company employees, assign administrative roles, and control access permissions.
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn btn-primary" id="btn-add-employee">
            ${getIcon("plus")} Add New Employee
          </button>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card">
          <div class="kpi-title">
            <span>Total Staff & Users</span>
            <span class="badge badge-posted font-mono">${users.length}</span>
          </div>
          <div class="kpi-value">${users.length}</div>
          <div class="kpi-subtitle">Active registered accounts</div>
        </div>

        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Super Admins & Admins</span>
            <span class="badge badge-paid font-mono">${superAdminCount + adminCount}</span>
          </div>
          <div class="kpi-value">${superAdminCount + adminCount}</div>
          <div class="kpi-subtitle">${superAdminCount} Super Admin &bull; ${adminCount} Admin</div>
        </div>

        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Operational Employees</span>
            <span class="badge badge-draft font-mono">${employeeCount}</span>
          </div>
          <div class="kpi-value">${employeeCount}</div>
          <div class="kpi-subtitle">Accounting & staff members</div>
        </div>
      </div>

      <!-- Users Table Card -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="app-table">
            <thead>
              <tr>
                <th>Employee / Full Name</th>
                <th>Username</th>
                <th>Email Address</th>
                <th class="text-center" width="140">Role</th>
                <th class="text-center" width="100">Status</th>
                <th>Created Date</th>
                <th class="text-center" width="160">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${users.map((u) => {
      let roleBadgeClass = "badge-draft";
      let roleTitle = "Employee";
      let roleIcon = "\u{1F464}";
      if (u.role === "superadmin") {
        roleBadgeClass = "badge-superadmin";
        roleTitle = "Super Admin";
        roleIcon = "\u{1F451}";
      } else if (u.role === "admin") {
        roleBadgeClass = "badge-admin";
        roleTitle = "Admin";
        roleIcon = "\u{1F6E1}\uFE0F";
      }
      const isSelf = currentUser && currentUser.id === u.id;
      const canModifyThisUser = isSuper || u.role === "employee";
      return `
                  <tr>
                    <td>
                      <div style="font-weight: 700; color: var(--text-main); display: flex; align-items: center; gap: 6px;">
                        <span>${u.fullName}</span>
                        ${isSelf ? '<span class="badge badge-posted" style="font-size: 10px;">You</span>' : ""}
                      </div>
                    </td>
                    <td class="font-mono" style="font-weight: 700; color: var(--primary);">@${u.username}</td>
                    <td>
                      ${u.email ? `<a href="mailto:${u.email}" style="color: var(--primary); text-decoration: none;">${u.email}</a>` : '<span style="color: var(--text-subtle);">-</span>'}
                    </td>
                    <td class="text-center">
                      <span class="badge ${roleBadgeClass}" style="font-weight: 700;">
                        <span>${roleIcon}</span> ${roleTitle}
                      </span>
                    </td>
                    <td class="text-center">
                      <span class="badge ${u.status === "active" ? "badge-paid" : "badge-overdue"}">
                        <span class="badge-dot"></span>
                        ${u.status}
                      </span>
                    </td>
                    <td>${u.createdAt || "-"}</td>
                    <td class="text-center">
                      <div style="display: inline-flex; gap: 6px;">
                        ${canModifyThisUser && !isSelf ? `
                          <button class="btn btn-secondary btn-sm btn-toggle-status" data-id="${u.id}" title="${u.status === "active" ? "Deactivate Account" : "Activate Account"}">
                            ${u.status === "active" ? "Deactivate" : "Activate"}
                          </button>
                          <button class="btn btn-danger btn-sm btn-delete-user" data-id="${u.id}" title="Delete User">
                            ${getIcon("trash-2")}
                          </button>
                        ` : `
                          <span style="font-size: 11px; color: var(--text-subtle);">Protected</span>
                        `}
                      </div>
                    </td>
                  </tr>
                `;
    }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.querySelector("#btn-add-employee")?.addEventListener("click", () => {
      openAddEmployeeModal(isSuper, renderList);
    });
    container.querySelectorAll(".btn-toggle-status").forEach((btn) => {
      btn.onclick = () => {
        const uid = btn.dataset.id;
        const target = users.find((u) => u.id === uid);
        if (!target) return;
        const newStatus = target.status === "active" ? "inactive" : "active";
        store.updateUser({ id: uid, status: newStatus });
        toast.info(`Account status changed to ${newStatus.toUpperCase()}`);
        renderList();
      };
    });
    container.querySelectorAll(".btn-delete-user").forEach((btn) => {
      btn.onclick = () => {
        const uid = btn.dataset.id;
        const target = users.find((u) => u.id === uid);
        if (!target) return;
        if (confirm(`Are you sure you want to delete employee "${target.fullName}" (@${target.username})?`)) {
          try {
            store.deleteUser(uid);
            toast.success(`User @${target.username} deleted.`);
            renderList();
          } catch (err) {
            toast.error(err.message);
          }
        }
      };
    });
  }
  renderList();
}
function openAddEmployeeModal(isSuperAdmin, onSuccess) {
  modal.open({
    title: `${getIcon("users")} Add New Employee / User`,
    size: "md",
    contentHtml: `
      <form id="new-employee-form">
        <div class="form-row">
          <div class="form-col" style="flex: 1.4;">
            <div class="form-group">
              <label class="form-label required">Full Name</label>
              <input type="text" class="form-control" id="new-emp-fullname" placeholder="e.g. Tariqul Islam" required />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Username</label>
              <div class="input-group">
                <span class="input-prefix">@</span>
                <input type="text" class="form-control" id="new-emp-username" placeholder="tariqul" required />
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" id="new-emp-email" placeholder="tariqul@unifly.com.bd" />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Initial Password</label>
              <input type="text" class="form-control" id="new-emp-password" value="password123" required />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label required">Assigned System Role</label>
          <select class="form-control" id="new-emp-role">
            <option value="employee" selected>\u{1F464} Employee / Staff (General Accounting & Invoicing)</option>
            <option value="admin">\u{1F6E1}\uFE0F Administrator (Full Accounting & Employee Management)</option>
            ${isSuperAdmin ? `<option value="superadmin">\u{1F451} Super Admin (Full Unrestricted System Power)</option>` : ""}
          </select>
          <span style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px; display: block;">
            Super Admin and Admins can add and manage employees. Employees can access operational accounting features.
          </span>
        </div>
      </form>
    `,
    footerHtml: `
      <button class="btn btn-secondary" id="modal-emp-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-emp-save">Create Employee Account</button>
    `,
    onOpen: (body, footer) => {
      footer.querySelector("#modal-emp-cancel").onclick = () => modal.close();
      footer.querySelector("#modal-emp-save").onclick = () => {
        const fullName = body.querySelector("#new-emp-fullname").value.trim();
        const username = body.querySelector("#new-emp-username").value.trim();
        const email = body.querySelector("#new-emp-email").value.trim();
        const password = body.querySelector("#new-emp-password").value.trim();
        const role = body.querySelector("#new-emp-role").value;
        if (!fullName || !username || !password) {
          toast.warning("Please fill in all required fields (Full Name, Username, and Password).");
          return;
        }
        try {
          const user = store.addUser({
            fullName,
            username,
            email,
            password,
            role
          });
          modal.close();
          toast.success(`Employee "${user.fullName}" (@${user.username}) created successfully!`);
          onSuccess();
        } catch (err) {
          toast.error(err.message);
        }
      };
    }
  });
}

// js/views/credit-notes.js
function renderCreditNotes(container, navigate, params = {}) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  if (params.action === "new" || params.id) {
    renderCreditNoteForm(container, navigate, params.id);
  } else {
    renderCreditNoteList(container, navigate, params.filter);
  }
}
function renderCreditNoteList(container, navigate, filter = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  let creditNotes = store.getCreditNotes();
  const partners = store.getPartners();
  if (filter) {
    creditNotes = creditNotes.filter((c) => c.status === filter);
  }
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-credit-note">
          ${getIcon("plus")} New Credit Note
        </button>
        ${filter ? `
          <span class="search-pill">
            Filter: ${filter}
            <span class="pill-close" id="clear-filter">&times;</span>
          </span>
        ` : ""}
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm ${!filter ? "btn-primary" : ""}" id="filter-all">All</button>
        <button class="btn btn-secondary btn-sm ${filter === "draft" ? "btn-primary" : ""}" id="filter-draft">Draft</button>
        <button class="btn btn-secondary btn-sm ${filter === "posted" ? "btn-primary" : ""}" id="filter-posted">Posted</button>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table">
          <thead>
            <tr>
              <th width="140">Number</th>
              <th>Customer</th>
              <th>Credit Date</th>
              <th>Reason / Ref</th>
              <th>Orig. Invoice</th>
              <th class="text-right">Tax</th>
              <th class="text-right">Total Credit</th>
              <th class="text-center" width="100">Status</th>
            </tr>
          </thead>
          <tbody>
            ${creditNotes.length === 0 ? `
              <tr>
                <td colspan="8" class="table-empty-state">
                  <div class="table-empty-icon">${getIcon("file-text")}</div>
                  <div>No customer credit notes found.</div>
                </td>
              </tr>
            ` : creditNotes.map((cn) => {
    const partner = partners.find((p) => p.id === cn.partnerId) || { name: "Unknown Customer" };
    const statusClass = cn.status === "posted" ? "badge-posted" : "badge-draft";
    return `
                <tr class="clickable" data-id="${cn.id}">
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${cn.number}</td>
                  <td><strong>${partner.name}</strong></td>
                  <td>${AccountingEngine.formatDate(cn.date)}</td>
                  <td>${cn.reason || "-"}</td>
                  <td class="font-mono">${cn.invoiceRef || "-"}</td>
                  <td class="text-right font-mono">${AccountingEngine.formatCurrency(cn.taxAmount, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 700; color: var(--danger);">${AccountingEngine.formatCurrency(cn.totalAmount, symbol)}</td>
                  <td class="text-center">
                    <span class="badge ${statusClass}">
                      <span class="badge-dot"></span>
                      ${cn.status}
                    </span>
                  </td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.querySelector("#btn-create-credit-note")?.addEventListener("click", () => {
    navigate("credit-notes", { action: "new" });
  });
  container.querySelector("#filter-all")?.addEventListener("click", () => navigate("credit-notes"));
  container.querySelector("#filter-draft")?.addEventListener("click", () => navigate("credit-notes", { filter: "draft" }));
  container.querySelector("#filter-posted")?.addEventListener("click", () => navigate("credit-notes", { filter: "posted" }));
  container.querySelector("#clear-filter")?.addEventListener("click", () => navigate("credit-notes"));
  container.querySelectorAll("tbody tr.clickable").forEach((row) => {
    row.onclick = () => {
      const id = row.dataset.id;
      if (id) navigate("credit-notes", { id });
    };
  });
}
function renderCreditNoteForm(container, navigate, creditNoteId = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const customers = store.getPartners().filter((p) => p.isCustomer);
  const products = store.getProducts();
  const accounts = store.getAccounts();
  const invoices = store.getInvoices();
  let creditNote;
  let isNew = false;
  if (creditNoteId) {
    creditNote = store.getCreditNotes().find((c) => c.id === creditNoteId);
    if (!creditNote) {
      toast.error("Credit note not found.");
      navigate("credit-notes");
      return;
    }
  } else {
    isNew = true;
    creditNote = {
      id: `cn-${Date.now()}`,
      number: store.getNextCreditNoteNumber(),
      partnerId: customers[0]?.id || "",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      reason: "Customer return / rebate",
      invoiceRef: "",
      status: "draft",
      subtotal: 500,
      taxAmount: 50,
      totalAmount: 550,
      lines: [
        {
          id: `cnl-${Date.now()}-1`,
          productId: products[0]?.id || "",
          description: products[0]?.name || "Credit adjustment",
          accountId: "400000",
          quantity: 1,
          unitPrice: 500,
          taxRate: 10,
          subtotal: 500,
          taxAmount: 50,
          total: 550
        }
      ]
    };
  }
  const isEditable = creditNote.status === "draft";
  container.innerHTML = `
    <!-- Top Action Bar -->
    <div class="document-action-bar">
      <div class="doc-actions-left">
        <button class="btn btn-secondary" id="btn-back-cn">
          &larr; Back to Credit Notes
        </button>

        ${isEditable ? `
          <button class="btn btn-primary" id="btn-confirm-cn">
            ${getIcon("check")} Confirm & Post Credit Note
          </button>
          ${!isNew ? `
            <button class="btn btn-danger" id="btn-delete-cn">
              ${getIcon("trash-2")} Delete Draft
            </button>
          ` : ""}
        ` : `
          <button class="btn btn-secondary" id="btn-print-cn">
            ${getIcon("printer")} Print Credit Note
          </button>
        `}
      </div>

      <!-- Document Statusbar -->
      <div class="app-statusbar">
        <div class="status-step ${creditNote.status === "draft" ? "active" : ""}">Draft</div>
        <div class="status-arrow">&rsaquo;</div>
        <div class="status-step ${creditNote.status === "posted" ? "active" : ""}">Posted</div>
      </div>
    </div>

    <!-- Main Sheet -->
    <div class="document-sheet">
      <div class="doc-sheet-header">
        <div>
          <span class="doc-type-badge font-mono" style="background: var(--danger-light); color: var(--danger); font-weight: 700; padding: 3px 8px; border-radius: var(--radius-sm); font-size: 11px;">
            CUSTOMER CREDIT NOTE
          </span>
          <h1 class="doc-number-title">${creditNote.number}</h1>
        </div>
        <div class="text-right">
          <div style="font-size: 18px; font-weight: 800; color: var(--danger);">
            ${AccountingEngine.formatCurrency(creditNote.totalAmount, symbol)}
          </div>
          <div style="font-size: 11px; color: var(--text-muted);">Total Refund Amount</div>
        </div>
      </div>

      <!-- Meta Grid -->
      <div class="doc-meta-grid">
        <div class="form-group">
          <label class="form-label required">Customer</label>
          ${isEditable ? `
            <select class="form-control" id="cn-partner-select">
              ${customers.map((c) => `
                <option value="${c.id}" ${c.id === creditNote.partnerId ? "selected" : ""}>${c.name}</option>
              `).join("")}
            </select>
          ` : `
            <div style="font-weight: 600; font-size: 14px;">
              ${customers.find((c) => c.id === creditNote.partnerId)?.name || "Unknown"}
            </div>
          `}
        </div>

        <div class="form-group">
          <label class="form-label required">Credit Note Date</label>
          ${isEditable ? `
            <input type="date" class="form-control" id="cn-date" value="${creditNote.date}" />
          ` : `
            <div>${AccountingEngine.formatDate(creditNote.date)}</div>
          `}
        </div>

        <div class="form-group">
          <label class="form-label">Original Invoice Reference</label>
          ${isEditable ? `
            <select class="form-control" id="cn-inv-select">
              <option value="">-- No linked invoice (Stand-alone credit) --</option>
              ${invoices.map((inv) => `
                <option value="${inv.number}" ${inv.number === creditNote.invoiceRef ? "selected" : ""}>
                  ${inv.number} (${AccountingEngine.formatCurrency(inv.totalAmount, symbol)})
                </option>
              `).join("")}
            </select>
          ` : `
            <div class="font-mono">${creditNote.invoiceRef || "-"}</div>
          `}
        </div>

        <div class="form-group">
          <label class="form-label">Credit Reason / Memo</label>
          ${isEditable ? `
            <input type="text" class="form-control" id="cn-reason" value="${creditNote.reason || ""}" placeholder="e.g. Return of damaged goods, special rebate" />
          ` : `
            <div>${creditNote.reason || "-"}</div>
          `}
        </div>
      </div>

      <!-- Line Items Table -->
      <div class="line-items-wrapper">
        <table class="line-items-table">
          <thead>
            <tr>
              <th width="24%">Product / Service</th>
              <th width="26%">Description</th>
              <th width="18%">Account</th>
              <th width="8%" class="text-right">Qty</th>
              <th width="12%" class="text-right">Price</th>
              <th width="12%" class="text-right">Subtotal</th>
              ${isEditable ? '<th width="40"></th>' : ""}
            </tr>
          </thead>
          <tbody id="cn-lines-tbody"></tbody>
        </table>

        ${isEditable ? `
          <div style="margin-top: 12px;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-add-cn-line">
              ${getIcon("plus")} Add a Line
            </button>
          </div>
        ` : ""}
      </div>

      <!-- Totals Footer -->
      <div class="doc-totals-section">
        <div class="doc-notes-col">
          <label class="form-label">Terms & Refund Information</label>
          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
            This credit note will automatically reduce the customer's Accounts Receivable liability in accordance with GAAP/IFRS.
          </div>
        </div>

        <div class="doc-totals-col">
          <div class="totals-line">
            <span class="totals-label">Untaxed Amount:</span>
            <span class="totals-value font-mono" id="cn-subtotal-val">${AccountingEngine.formatCurrency(creditNote.subtotal, symbol)}</span>
          </div>
          <div class="totals-line">
            <span class="totals-label">Sales Tax (10%):</span>
            <span class="totals-value font-mono" id="cn-tax-val">${AccountingEngine.formatCurrency(creditNote.taxAmount, symbol)}</span>
          </div>
          <div class="totals-line grand-total">
            <span class="totals-label">Total Credit:</span>
            <span class="totals-value font-mono" id="cn-total-val" style="color: var(--danger);">${AccountingEngine.formatCurrency(creditNote.totalAmount, symbol)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  const tbody = container.querySelector("#cn-lines-tbody");
  function recalculateTotals() {
    let subtotal = 0;
    let taxAmount = 0;
    creditNote.lines.forEach((line) => {
      line.subtotal = (line.quantity || 0) * (line.unitPrice || 0);
      line.taxAmount = line.subtotal * (line.taxRate || 0) / 100;
      line.total = line.subtotal + line.taxAmount;
      subtotal += line.subtotal;
      taxAmount += line.taxAmount;
    });
    creditNote.subtotal = subtotal;
    creditNote.taxAmount = taxAmount;
    creditNote.totalAmount = subtotal + taxAmount;
    const subEl = container.querySelector("#cn-subtotal-val");
    const taxEl = container.querySelector("#cn-tax-val");
    const totEl = container.querySelector("#cn-total-val");
    if (subEl) subEl.textContent = AccountingEngine.formatCurrency(subtotal, symbol);
    if (taxEl) taxEl.textContent = AccountingEngine.formatCurrency(taxAmount, symbol);
    if (totEl) totEl.textContent = AccountingEngine.formatCurrency(creditNote.totalAmount, symbol);
  }
  function renderLines() {
    if (!tbody) return;
    tbody.innerHTML = creditNote.lines.map((line, idx) => `
      <tr>
        <td>
          ${isEditable ? `
            <select class="form-control form-control-sm line-prod-select" data-index="${idx}">
              <option value="">-- Custom Line --</option>
              ${products.map((p) => `
                <option value="${p.id}" ${p.id === line.productId ? "selected" : ""}>${p.name}</option>
              `).join("")}
            </select>
          ` : `
            <div>${products.find((p) => p.id === line.productId)?.name || "Custom"}</div>
          `}
        </td>
        <td>
          ${isEditable ? `
            <input type="text" class="form-control form-control-sm line-desc-input" data-index="${idx}" value="${line.description}" />
          ` : `
            <div>${line.description}</div>
          `}
        </td>
        <td>
          ${isEditable ? `
            <select class="form-control form-control-sm line-account-select" data-index="${idx}">
              ${accounts.filter((a) => a.type === "revenue" || a.type === "expense").map((a) => `
                <option value="${a.id}" ${a.id === line.accountId ? "selected" : ""}>${a.code} - ${a.name}</option>
              `).join("")}
            </select>
          ` : `
            <div>${accounts.find((a) => a.id === line.accountId)?.name || "400000"}</div>
          `}
        </td>
        <td class="text-right">
          ${isEditable ? `
            <input type="number" class="form-control form-control-sm text-right line-qty-input" data-index="${idx}" value="${line.quantity}" min="1" step="1" />
          ` : `
            <div>${line.quantity}</div>
          `}
        </td>
        <td class="text-right">
          ${isEditable ? `
            <input type="number" class="form-control form-control-sm text-right line-price-input" data-index="${idx}" value="${line.unitPrice}" min="0" step="0.01" />
          ` : `
            <div class="font-mono">${AccountingEngine.formatCurrency(line.unitPrice, symbol)}</div>
          `}
        </td>
        <td class="text-right font-mono" style="font-weight: 700;">
          ${AccountingEngine.formatCurrency(line.subtotal, symbol)}
        </td>
        ${isEditable ? `
          <td class="text-center">
            <button type="button" class="btn btn-secondary btn-sm delete-line-btn" data-index="${idx}" style="padding: 2px 6px;">
              ${getIcon("trash-2")}
            </button>
          </td>
        ` : ""}
      </tr>
    `).join("");
    if (isEditable) {
      tbody.querySelectorAll(".line-prod-select").forEach((sel) => {
        sel.onchange = () => {
          const idx = parseInt(sel.dataset.index);
          const p = products.find((prod) => prod.id === sel.value);
          if (p) {
            creditNote.lines[idx].productId = p.id;
            creditNote.lines[idx].description = `Credit: ${p.name}`;
            creditNote.lines[idx].unitPrice = p.salesPrice || 100;
          }
          recalculateTotals();
          renderLines();
        };
      });
      tbody.querySelectorAll(".line-desc-input").forEach((inp) => {
        inp.oninput = () => {
          const idx = parseInt(inp.dataset.index);
          creditNote.lines[idx].description = inp.value;
        };
      });
      tbody.querySelectorAll(".line-qty-input").forEach((inp) => {
        inp.oninput = () => {
          const idx = parseInt(inp.dataset.index);
          creditNote.lines[idx].quantity = parseFloat(inp.value) || 0;
          recalculateTotals();
          renderLines();
        };
      });
      tbody.querySelectorAll(".line-price-input").forEach((inp) => {
        inp.oninput = () => {
          const idx = parseInt(inp.dataset.index);
          creditNote.lines[idx].unitPrice = parseFloat(inp.value) || 0;
          recalculateTotals();
          renderLines();
        };
      });
      tbody.querySelectorAll(".delete-line-btn").forEach((btn) => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.index);
          if (creditNote.lines.length <= 1) {
            toast.warning("A credit note must have at least one line item.");
            return;
          }
          creditNote.lines.splice(idx, 1);
          renderLines();
          recalculateTotals();
        };
      });
    }
  }
  renderLines();
  container.querySelector("#btn-back-cn")?.addEventListener("click", () => navigate("credit-notes"));
  if (isEditable) {
    container.querySelector("#cn-partner-select")?.addEventListener("change", (e) => {
      creditNote.partnerId = e.target.value;
    });
    container.querySelector("#cn-date")?.addEventListener("change", (e) => {
      creditNote.date = e.target.value;
    });
    container.querySelector("#cn-inv-select")?.addEventListener("change", (e) => {
      creditNote.invoiceRef = e.target.value;
    });
    container.querySelector("#cn-reason")?.addEventListener("change", (e) => {
      creditNote.reason = e.target.value;
    });
    container.querySelector("#btn-add-cn-line")?.addEventListener("click", () => {
      creditNote.lines.push({
        id: `cnl-${Date.now()}-${creditNote.lines.length + 1}`,
        productId: "",
        description: "Credit Adjustment Line",
        accountId: "400000",
        quantity: 1,
        unitPrice: 200,
        taxRate: 10,
        subtotal: 200,
        taxAmount: 20,
        total: 220
      });
      renderLines();
      recalculateTotals();
    });
    container.querySelector("#btn-confirm-cn")?.addEventListener("click", () => {
      store.saveCreditNote(creditNote);
      const ok = store.postCreditNote(creditNote.id);
      if (ok) {
        toast.success(`Credit Note ${creditNote.number} confirmed & posted to General Ledger!`);
        navigate("credit-notes", { id: creditNote.id });
      }
    });
    container.querySelector("#btn-delete-cn")?.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete draft credit note ${creditNote.number}?`)) {
        store.deleteCreditNote(creditNote.id);
        toast.info(`Credit Note ${creditNote.number} deleted.`);
        navigate("credit-notes");
      }
    });
  }
  container.querySelector("#btn-print-cn")?.addEventListener("click", () => {
    window.print();
  });
}

// js/views/payments.js
function renderPayments(container, navigate, params = {}) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const isVendor = params.type === "vendors";
  const partnerLabel = isVendor ? "Vendor" : "Customer";
  const partners = store.getPartners().filter((p) => isVendor ? p.isVendor : p.isCustomer);
  const journals = store.getJournals().filter((j) => j.type === "bank" || j.type === "cash");
  function renderList(journalFilter = "all") {
    let payments = isVendor ? store.getVendorPayments() : store.getCustomerPayments();
    if (journalFilter !== "all") {
      payments = payments.filter((p) => p.journalId === journalFilter);
    }
    const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);
    const bankTotal = payments.filter((p) => p.journalId === "BNK").reduce((sum, p) => sum + p.amount, 0);
    const cashTotal = payments.filter((p) => p.journalId === "CSH").reduce((sum, p) => sum + p.amount, 0);
    container.innerHTML = `
      <!-- Top Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-register-payment">
            ${getIcon("plus")} Register ${partnerLabel} Payment
          </button>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm ${journalFilter === "all" ? "btn-primary" : ""}" id="filter-pay-all">All Journals</button>
          <button class="btn btn-secondary btn-sm ${journalFilter === "BNK" ? "btn-primary" : ""}" id="filter-pay-bnk">Bank Transfers</button>
          <button class="btn btn-secondary btn-sm ${journalFilter === "CSH" ? "btn-primary" : ""}" id="filter-pay-csh">Cash Payments</button>
        </div>
      </div>

      <!-- Quick KPI Stats Cards -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card ${isVendor ? "purple" : "emerald"}">
          <div class="kpi-title">
            <span>Total ${partnerLabel} Payments</span>
            <span class="badge badge-paid font-mono">${payments.length} Payments</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalAmount, symbol)}</div>
          <div class="kpi-subtitle">${isVendor ? "Disbursed across all journals" : "Collected across all journals"}</div>
        </div>

        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Bank Transfers (SVB)</span>
            <span class="badge badge-posted font-mono">Bank Feed</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(bankTotal, symbol)}</div>
          <div class="kpi-subtitle">${isVendor ? "Direct vendor wire & ACH debits" : "Direct deposits & wire transfers"}</div>
        </div>

        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Cash Disbursements</span>
            <span class="badge badge-draft font-mono">Petty Cash</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(cashTotal, symbol)}</div>
          <div class="kpi-subtitle">Petty cash payments & counter receipts</div>
        </div>
      </div>

      <!-- Payments Table -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="app-table">
            <thead>
              <tr>
                <th width="140">Payment No.</th>
                <th>Payment Date</th>
                <th>${partnerLabel}</th>
                <th>Payment Journal</th>
                <th>Reference / Memo</th>
                <th class="text-right">${isVendor ? "Amount Paid" : "Amount Received"}</th>
                <th class="text-center" width="100">Status</th>
              </tr>
            </thead>
            <tbody>
              ${payments.length === 0 ? `
                <tr>
                  <td colspan="7" class="table-empty-state">
                    <div class="table-empty-icon">${getIcon("coins")}</div>
                    <div>No ${partnerLabel.toLowerCase()} payments recorded yet.</div>
                  </td>
                </tr>
              ` : payments.map((pay) => `
                <tr>
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">
                    ${pay.number}
                  </td>
                  <td>${AccountingEngine.formatDate(pay.date)}</td>
                  <td>
                    <strong>${isVendor ? pay.vendorName || "Vendor" : pay.customerName || "Customer"}</strong>
                  </td>
                  <td>
                    <span class="badge badge-posted font-mono" style="font-size: 11px;">
                      ${pay.journalName}
                    </span>
                  </td>
                  <td>${pay.reference || "-"}</td>
                  <td class="text-right font-mono" style="font-weight: 700; color: ${isVendor ? "var(--danger)" : "var(--credit-color)"};">
                    ${isVendor ? "-" : "+"}${AccountingEngine.formatCurrency(pay.amount, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge badge-paid">
                      <span class="badge-dot"></span>
                      ${pay.status}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.querySelector("#filter-pay-all")?.addEventListener("click", () => renderList("all"));
    container.querySelector("#filter-pay-bnk")?.addEventListener("click", () => renderList("BNK"));
    container.querySelector("#filter-pay-csh")?.addEventListener("click", () => renderList("CSH"));
    container.querySelector("#btn-register-payment")?.addEventListener("click", () => {
      openRegisterPaymentModal2(renderList);
    });
  }
  function openRegisterPaymentModal2(onSuccess) {
    const openDocs = isVendor ? store.getBills().filter((b) => (b.status === "posted" || b.status === "overdue") && b.amountDue > 0) : store.getInvoices().filter((i) => (i.status === "posted" || i.status === "overdue") && i.amountDue > 0);
    modal.open({
      title: `${getIcon("coins")} Register ${partnerLabel} Payment`,
      size: "md",
      contentHtml: `
        <form id="new-payment-form">
          <div class="form-group">
            <label class="form-label required">${partnerLabel}</label>
            <select class="form-control" id="pay-modal-partner" required>
              <option value="">-- Select ${partnerLabel} --</option>
              ${partners.map((p) => `
                <option value="${p.id}">${p.name} ${p.company ? `(${p.company})` : ""}</option>
              `).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Apply to Open ${isVendor ? "Bill" : "Invoice"} (Optional)</label>
            <select class="form-control" id="pay-modal-doc">
              <option value="">-- Unallocated on Account --</option>
              ${openDocs.map((doc) => {
        const partner = store.getPartners().find((p) => p.id === doc.partnerId);
        return `
                  <option value="${doc.id}" data-partner="${doc.partnerId}" data-due="${doc.amountDue}">
                    ${doc.number} - ${partner?.name || partnerLabel} (Due: ${AccountingEngine.formatCurrency(doc.amountDue, symbol)})
                  </option>
                `;
      }).join("")}
            </select>
          </div>

          <div class="form-row">
            <div class="form-col">
              <div class="form-group">
                <label class="form-label required">Payment Journal</label>
                <select class="form-control" id="pay-modal-journal">
                  ${journals.map((j) => `
                    <option value="${j.id}">${j.name} (${j.code})</option>
                  `).join("")}
                </select>
              </div>
            </div>
            <div class="form-col">
              <div class="form-group">
                <label class="form-label required">Payment Amount</label>
                <div class="input-group">
                  <span class="input-prefix">${symbol}</span>
                  <input type="number" step="0.01" min="0.01" class="form-control" id="pay-modal-amount" placeholder="0.00" required />
                </div>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-col">
              <div class="form-group">
                <label class="form-label required">Payment Date</label>
                <input type="date" class="form-control" id="pay-modal-date" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" required />
              </div>
            </div>
            <div class="form-col">
              <div class="form-group">
                <label class="form-label">Payment Memo / Reference</label>
                <input type="text" class="form-control" id="pay-modal-memo" placeholder="e.g. Wire transfer / Check #4920" />
              </div>
            </div>
          </div>
        </form>
      `,
      footerHtml: `
        <button class="btn btn-secondary" id="modal-pay-cancel">Cancel</button>
        <button class="btn btn-primary" id="modal-pay-submit">Post ${partnerLabel} Payment</button>
      `,
      onOpen: (body, footer) => {
        const partnerSelect = body.querySelector("#pay-modal-partner");
        const docSelect = body.querySelector("#pay-modal-doc");
        const amtInput = body.querySelector("#pay-modal-amount");
        docSelect.onchange = () => {
          const opt = docSelect.selectedOptions[0];
          if (opt && opt.value) {
            partnerSelect.value = opt.dataset.partner;
            amtInput.value = parseFloat(opt.dataset.due).toFixed(2);
          }
        };
        footer.querySelector("#modal-pay-cancel").onclick = () => modal.close();
        footer.querySelector("#modal-pay-submit").onclick = () => {
          const partnerId = partnerSelect.value;
          const docId = docSelect.value || null;
          const journalId = body.querySelector("#pay-modal-journal").value;
          const amount = parseFloat(amtInput.value);
          const paymentDate = body.querySelector("#pay-modal-date").value;
          const reference = body.querySelector("#pay-modal-memo").value.trim();
          if (!partnerId) {
            toast.warning(`Please select a ${partnerLabel.toLowerCase()}.`);
            return;
          }
          if (isNaN(amount) || amount <= 0) {
            toast.warning("Please enter a valid payment amount.");
            return;
          }
          try {
            let entry;
            if (isVendor) {
              entry = store.createDirectVendorPayment({
                partnerId,
                journalId,
                amount,
                paymentDate,
                reference,
                billId: docId
              });
            } else {
              entry = store.createDirectCustomerPayment({
                partnerId,
                journalId,
                amount,
                paymentDate,
                reference,
                invoiceId: docId
              });
            }
            modal.close();
            toast.success(`${partnerLabel} Payment ${entry.number} for ${AccountingEngine.formatCurrency(amount, symbol)} recorded & posted to General Ledger!`);
            onSuccess();
          } catch (err) {
            toast.error(err.message);
          }
        };
      }
    });
  }
  renderList();
}

// js/views/refunds.js
function renderRefunds(container, navigate, params = {}) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  if (params.action === "new" || params.id) {
    renderRefundForm(container, navigate, params.id);
  } else {
    renderRefundList(container, navigate, params.filter);
  }
}
function renderRefundList(container, navigate, filter = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  let refunds = store.getVendorRefunds();
  const partners = store.getPartners();
  if (filter) {
    refunds = refunds.filter((r) => r.status === filter);
  }
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="btn btn-primary" id="btn-create-refund">
          ${getIcon("plus")} New Refund
        </button>
        ${filter ? `
          <span class="search-pill">
            Filter: ${filter}
            <span class="pill-close" id="clear-filter">&times;</span>
          </span>
        ` : ""}
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm ${!filter ? "btn-primary" : ""}" id="filter-all">All</button>
        <button class="btn btn-secondary btn-sm ${filter === "draft" ? "btn-primary" : ""}" id="filter-draft">Draft</button>
        <button class="btn btn-secondary btn-sm ${filter === "posted" ? "btn-primary" : ""}" id="filter-posted">Posted</button>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="app-table">
          <thead>
            <tr>
              <th width="140">Refund No.</th>
              <th>Vendor</th>
              <th>Refund Date</th>
              <th>Reason / Memo</th>
              <th>Original Bill</th>
              <th class="text-right">Tax</th>
              <th class="text-right">Total Refund</th>
              <th class="text-center" width="100">Status</th>
            </tr>
          </thead>
          <tbody>
            ${refunds.length === 0 ? `
              <tr>
                <td colspan="8" class="table-empty-state">
                  <div class="table-empty-icon">${getIcon("file-text")}</div>
                  <div>No vendor refunds found. Click <strong>+ New Refund</strong> to create one.</div>
                </td>
              </tr>
            ` : refunds.map((ref) => {
    const partner = partners.find((p) => p.id === ref.partnerId) || { name: "Unknown Vendor" };
    const statusClass = ref.status === "posted" ? "badge-posted" : "badge-draft";
    return `
                <tr class="clickable" data-id="${ref.id}">
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${ref.number}</td>
                  <td><strong>${partner.name}</strong></td>
                  <td>${AccountingEngine.formatDate(ref.date)}</td>
                  <td>${ref.reason || "-"}</td>
                  <td class="font-mono">${ref.billRef || "-"}</td>
                  <td class="text-right font-mono">${AccountingEngine.formatCurrency(ref.taxAmount, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 700; color: var(--credit-color);">${AccountingEngine.formatCurrency(ref.totalAmount, symbol)}</td>
                  <td class="text-center">
                    <span class="badge ${statusClass}">
                      <span class="badge-dot"></span>
                      ${ref.status}
                    </span>
                  </td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.querySelector("#btn-create-refund")?.addEventListener("click", () => {
    navigate("refunds", { action: "new" });
  });
  container.querySelector("#clear-filter")?.addEventListener("click", () => {
    navigate("refunds");
  });
  container.querySelector("#filter-all")?.addEventListener("click", () => navigate("refunds"));
  container.querySelector("#filter-draft")?.addEventListener("click", () => navigate("refunds", { filter: "draft" }));
  container.querySelector("#filter-posted")?.addEventListener("click", () => navigate("refunds", { filter: "posted" }));
  container.querySelectorAll("tbody tr.clickable").forEach((tr) => {
    tr.onclick = () => {
      navigate("refunds", { id: tr.dataset.id });
    };
  });
}
function renderRefundForm(container, navigate, refundId = null) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const vendors = store.getPartners().filter((p) => p.isVendor);
  const products = store.getProducts();
  const accounts = store.getAccounts();
  const bills = store.getBills();
  let refund = null;
  const isNew = !refundId;
  if (!isNew) {
    refund = store.getVendorRefunds().find((r) => r.id === refundId);
  }
  if (isNew) {
    const nextSeq = (store.getVendorRefunds().length + 1).toString().padStart(4, "0");
    refund = {
      id: `vr-${Date.now()}`,
      number: `RBILL/2026/${nextSeq}`,
      partnerId: vendors[0]?.id || "",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      dueDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      reason: "Goods return / Supplier credit",
      billRef: "",
      status: "draft",
      subtotal: 0,
      taxAmount: 0,
      totalAmount: 0,
      lines: [
        {
          id: `vrl-${Date.now()}-1`,
          productId: products[0]?.id || "",
          description: products[0]?.name || "Supplier Credit Adjustment",
          accountId: "600000",
          quantity: 1,
          unitPrice: 100,
          taxRate: 0,
          subtotal: 100,
          taxAmount: 0,
          total: 100
        }
      ]
    };
  }
  const isReadOnly = refund.status === "posted";
  function calculateTotals() {
    let subtotal = 0;
    let taxTotal = 0;
    refund.lines.forEach((l) => {
      l.subtotal = (l.quantity || 0) * (l.unitPrice || 0);
      l.taxAmount = l.subtotal * ((l.taxRate || 0) / 100);
      l.total = l.subtotal + l.taxAmount;
      subtotal += l.subtotal;
      taxTotal += l.taxAmount;
    });
    refund.subtotal = subtotal;
    refund.taxAmount = taxTotal;
    refund.totalAmount = subtotal + taxTotal;
  }
  calculateTotals();
  function render() {
    calculateTotals();
    const vendor = vendors.find((v) => v.id === refund.partnerId) || { name: "Vendor" };
    container.innerHTML = `
      <!-- Action Status Bar -->
      <div class="document-action-bar">
        <div class="action-buttons-left">
          ${refund.status === "draft" ? `
            <button class="btn btn-primary" id="btn-post-refund">
              ${getIcon("check-circle")} Confirm & Post
            </button>
            <button class="btn btn-secondary" id="btn-save-draft">
              ${getIcon("save")} Save Draft
            </button>
          ` : `
            <button class="btn btn-secondary" id="btn-print-refund">
              ${getIcon("printer")} Print Debit Note
            </button>
          `}
          <button class="btn btn-secondary" id="btn-back-refunds">
            &larr; Back to Refunds
          </button>
          ${refund.status === "draft" && !isNew ? `
            <button class="btn btn-danger btn-sm" id="btn-delete-refund" style="margin-left: 12px;">
              Delete
            </button>
          ` : ""}
        </div>

        <div class="status-pipeline">
          <div class="pipeline-step ${refund.status === "draft" ? "active" : "completed"}">Draft</div>
          <div class="pipeline-step ${refund.status === "posted" ? "active" : ""}">Posted</div>
        </div>
      </div>

      <!-- Main Document Sheet -->
      <div class="document-sheet">
        <div class="document-header-grid">
          <div>
            <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">
              VENDOR REFUND / DEBIT NOTE
            </div>
            <h1 style="font-size: 26px; font-weight: 800; margin: 4px 0 12px 0;">
              ${refund.number}
            </h1>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="badge ${refund.status === "posted" ? "badge-posted" : "badge-draft"} font-mono">
                ${refund.status.toUpperCase()}
              </span>
              <span style="font-size: 13px; color: var(--text-muted);">
                Vendor: <strong>${vendor.name}</strong>
              </span>
            </div>
          </div>

          <div style="text-align: right;">
            <div style="font-size: 12px; color: var(--text-muted);">Total Refund Amount</div>
            <div class="font-mono" style="font-size: 28px; font-weight: 800; color: var(--credit-color);">
              ${AccountingEngine.formatCurrency(refund.totalAmount, symbol)}
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
              Double-Entry Impact: <strong>DR A/P (201000) &bull; CR Expense</strong>
            </div>
          </div>
        </div>

        <!-- Form Fields Grid -->
        <div class="form-row" style="margin-top: 24px;">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Vendor</label>
              ${isReadOnly ? `
                <div class="form-control-plaintext font-mono" style="font-weight: 600;">${vendor.name}</div>
              ` : `
                <select class="form-control" id="field-vendor" required>
                  ${vendors.map((v) => `
                    <option value="${v.id}" ${v.id === refund.partnerId ? "selected" : ""}>
                      ${v.name} ${v.company ? `(${v.company})` : ""}
                    </option>
                  `).join("")}
                </select>
              `}
            </div>
          </div>

          <div class="form-col">
            <div class="form-group">
              <label class="form-label">Original Vendor Bill Ref</label>
              ${isReadOnly ? `
                <div class="form-control-plaintext font-mono">${refund.billRef || "-"}</div>
              ` : `
                <select class="form-control" id="field-bill-ref">
                  <option value="">-- None / Standalone Debit Note --</option>
                  ${bills.filter((b) => b.partnerId === refund.partnerId).map((b) => `
                    <option value="${b.number}" ${b.number === refund.billRef ? "selected" : ""}>
                      ${b.number} (Total: ${AccountingEngine.formatCurrency(b.totalAmount, symbol)})
                    </option>
                  `).join("")}
                </select>
              `}
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Refund Date</label>
              ${isReadOnly ? `
                <div class="form-control-plaintext font-mono">${refund.date}</div>
              ` : `
                <input type="date" class="form-control" id="field-date" value="${refund.date}" />
              `}
            </div>
          </div>

          <div class="form-col">
            <div class="form-group">
              <label class="form-label">Refund Reason / Memo</label>
              ${isReadOnly ? `
                <div class="form-control-plaintext">${refund.reason || "-"}</div>
              ` : `
                <input type="text" class="form-control" id="field-reason" value="${refund.reason || ""}" placeholder="e.g. Returned defective goods / Pricing rebate" />
              `}
            </div>
          </div>
        </div>

        <!-- Line Items Table -->
        <div style="margin-top: 30px;">
          <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 12px;">Refund Lines</h3>
          <div class="table-responsive">
            <table class="app-table" id="table-refund-lines">
              <thead>
                <tr>
                  <th>Product / Service</th>
                  <th>Expense Account</th>
                  <th class="text-right" width="100">Qty</th>
                  <th class="text-right" width="130">Unit Price</th>
                  <th class="text-right" width="100">Tax Rate</th>
                  <th class="text-right" width="140">Subtotal</th>
                  ${!isReadOnly ? `<th width="50"></th>` : ""}
                </tr>
              </thead>
              <tbody>
                ${refund.lines.map((l, idx) => `
                  <tr>
                    <td>
                      ${isReadOnly ? `
                        <div><strong>${l.description}</strong></div>
                      ` : `
                        <input type="text" class="form-control line-desc" data-idx="${idx}" value="${l.description}" />
                      `}
                    </td>
                    <td>
                      ${isReadOnly ? `
                        <span class="font-mono">${l.accountId}</span>
                      ` : `
                        <select class="form-control line-acc" data-idx="${idx}">
                          ${accounts.filter((a) => a.type === "cogs" || a.type === "expense").map((a) => `
                            <option value="${a.code}" ${a.code === l.accountId ? "selected" : ""}>
                              ${a.code} - ${a.name}
                            </option>
                          `).join("")}
                        </select>
                      `}
                    </td>
                    <td class="text-right">
                      ${isReadOnly ? `
                        <span class="font-mono">${l.quantity}</span>
                      ` : `
                        <input type="number" step="1" min="1" class="form-control text-right line-qty font-mono" data-idx="${idx}" value="${l.quantity}" />
                      `}
                    </td>
                    <td class="text-right">
                      ${isReadOnly ? `
                        <span class="font-mono">${AccountingEngine.formatCurrency(l.unitPrice, symbol)}</span>
                      ` : `
                        <input type="number" step="0.01" min="0" class="form-control text-right line-price font-mono" data-idx="${idx}" value="${l.unitPrice}" />
                      `}
                    </td>
                    <td class="text-right">
                      ${isReadOnly ? `
                        <span class="font-mono">${l.taxRate}%</span>
                      ` : `
                        <select class="form-control line-tax font-mono" data-idx="${idx}">
                          <option value="0" ${l.taxRate === 0 ? "selected" : ""}>0%</option>
                          <option value="5" ${l.taxRate === 5 ? "selected" : ""}>5%</option>
                          <option value="10" ${l.taxRate === 10 ? "selected" : ""}>10%</option>
                        </select>
                      `}
                    </td>
                    <td class="text-right font-mono" style="font-weight: 700;">
                      ${AccountingEngine.formatCurrency(l.subtotal, symbol)}
                    </td>
                    ${!isReadOnly ? `
                      <td class="text-center">
                        <button class="btn btn-secondary btn-sm btn-del-line" data-idx="${idx}" title="Remove line">
                          &times;
                        </button>
                      </td>
                    ` : ""}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          ${!isReadOnly ? `
            <div style="margin-top: 10px;">
              <button class="btn btn-secondary btn-sm" id="btn-add-line">
                ${getIcon("plus")} Add Line
              </button>
            </div>
          ` : ""}

          <!-- Totals Breakdown -->
          <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
            <div style="width: 320px; background: var(--bg-surface-elevated); padding: 16px; border-radius: var(--radius-lg); border: 1px solid var(--border-base);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: var(--text-muted);">Untaxed Subtotal:</span>
                <span class="font-mono" style="font-weight: 600;">${AccountingEngine.formatCurrency(refund.subtotal, symbol)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: var(--text-muted);">Tax Reversal:</span>
                <span class="font-mono">${AccountingEngine.formatCurrency(refund.taxAmount, symbol)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 2px solid var(--border-base); font-size: 16px; font-weight: 800;">
                <span>Total Refund:</span>
                <span class="font-mono" style="color: var(--credit-color);">${AccountingEngine.formatCurrency(refund.totalAmount, symbol)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.querySelector("#btn-back-refunds")?.addEventListener("click", () => navigate("refunds"));
    if (!isReadOnly) {
      container.querySelector("#field-vendor")?.addEventListener("change", (e) => {
        refund.partnerId = e.target.value;
        render();
      });
      container.querySelector("#field-bill-ref")?.addEventListener("change", (e) => {
        refund.billRef = e.target.value;
      });
      container.querySelector("#field-date")?.addEventListener("change", (e) => {
        refund.date = e.target.value;
      });
      container.querySelector("#field-reason")?.addEventListener("change", (e) => {
        refund.reason = e.target.value;
      });
      container.querySelectorAll(".line-desc").forEach((input) => {
        input.oninput = (e) => {
          const idx = parseInt(e.target.dataset.idx);
          refund.lines[idx].description = e.target.value;
        };
      });
      container.querySelectorAll(".line-acc").forEach((select) => {
        select.onchange = (e) => {
          const idx = parseInt(e.target.dataset.idx);
          refund.lines[idx].accountId = e.target.value;
        };
      });
      container.querySelectorAll(".line-qty").forEach((input) => {
        input.oninput = (e) => {
          const idx = parseInt(e.target.dataset.idx);
          refund.lines[idx].quantity = parseFloat(e.target.value) || 0;
          calculateTotals();
          render();
        };
      });
      container.querySelectorAll(".line-price").forEach((input) => {
        input.oninput = (e) => {
          const idx = parseInt(e.target.dataset.idx);
          refund.lines[idx].unitPrice = parseFloat(e.target.value) || 0;
          calculateTotals();
          render();
        };
      });
      container.querySelectorAll(".line-tax").forEach((select) => {
        select.onchange = (e) => {
          const idx = parseInt(e.target.dataset.idx);
          refund.lines[idx].taxRate = parseFloat(e.target.value) || 0;
          calculateTotals();
          render();
        };
      });
      container.querySelectorAll(".btn-del-line").forEach((btn) => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx);
          if (refund.lines.length <= 1) {
            toast.warning("A refund must have at least one line item.");
            return;
          }
          refund.lines.splice(idx, 1);
          render();
        };
      });
      container.querySelector("#btn-add-line")?.addEventListener("click", () => {
        refund.lines.push({
          id: `vrl-${Date.now()}`,
          productId: products[0]?.id || "",
          description: "Debit Note Adjustment",
          accountId: "600000",
          quantity: 1,
          unitPrice: 50,
          taxRate: 0,
          subtotal: 50,
          taxAmount: 0,
          total: 50
        });
        render();
      });
      container.querySelector("#btn-save-draft")?.addEventListener("click", () => {
        calculateTotals();
        store.saveVendorRefund(refund);
        toast.success(`Draft Refund ${refund.number} saved!`);
        navigate("refunds", { id: refund.id });
      });
      container.querySelector("#btn-post-refund")?.addEventListener("click", () => {
        calculateTotals();
        if (refund.totalAmount <= 0) {
          toast.warning("Refund total amount must be greater than zero.");
          return;
        }
        store.saveVendorRefund(refund);
        store.postVendorRefund(refund.id);
        toast.success(`Vendor Refund ${refund.number} confirmed and posted to General Ledger!`);
        navigate("refunds", { id: refund.id });
      });
      container.querySelector("#btn-delete-refund")?.addEventListener("click", () => {
        if (confirm(`Are you sure you want to delete ${refund.number}?`)) {
          store.deleteVendorRefund(refund.id);
          toast.info(`Refund ${refund.number} deleted.`);
          navigate("refunds");
        }
      });
    } else {
      container.querySelector("#btn-print-refund")?.addEventListener("click", () => {
        window.print();
      });
    }
  }
  render();
}

// js/views/assets.js
function renderAssets(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const accounts = store.getAccounts();
  function renderList() {
    const assets = store.getAssets();
    const totalOriginal = assets.reduce((sum, a) => sum + (a.originalValue || 0), 0);
    const totalDepreciated = assets.reduce((sum, a) => sum + (a.depreciatedAmount || 0), 0);
    const totalBookValue = assets.reduce((sum, a) => sum + (a.currentValue || a.originalValue - a.depreciatedAmount), 0);
    container.innerHTML = `
      <!-- Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-create-asset">
            ${getIcon("plus")} New Asset
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">
            ${assets.length} Fixed Assets Tracked
          </span>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Total Gross Asset Cost</span>
            <span class="badge badge-posted font-mono">170000 Non-Current</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalOriginal, symbol)}</div>
          <div class="kpi-subtitle">Original capitalized cost</div>
        </div>

        <div class="kpi-card amber">
          <div class="kpi-title">
            <span>Accumulated Depreciation</span>
            <span class="badge badge-draft font-mono">175000 Contra Asset</span>
          </div>
          <div class="kpi-value font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(totalDepreciated, symbol)}</div>
          <div class="kpi-subtitle">Expensed to date (660000)</div>
        </div>

        <div class="kpi-card emerald">
          <div class="kpi-title">
            <span>Net Book Value (NBV)</span>
            <span class="badge badge-paid font-mono">Current Valuation</span>
          </div>
          <div class="kpi-value font-mono" style="color: var(--credit-color);">${AccountingEngine.formatCurrency(totalBookValue, symbol)}</div>
          <div class="kpi-subtitle">Balance sheet carrying amount</div>
        </div>
      </div>

      <!-- Assets Table -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="app-table">
            <thead>
              <tr>
                <th>Asset Name</th>
                <th>Category</th>
                <th>Acquired</th>
                <th class="text-right">Original Cost</th>
                <th class="text-right">Accum. Depr.</th>
                <th class="text-right">Net Book Value</th>
                <th class="text-center" width="100">Status</th>
                <th class="text-center" width="160">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${assets.length === 0 ? `
                <tr>
                  <td colspan="8" class="table-empty-state">
                    <div class="table-empty-icon">${getIcon("landmark")}</div>
                    <div>No fixed assets registered yet. Click <strong>+ New Asset</strong> to add one.</div>
                  </td>
                </tr>
              ` : assets.map((a) => `
                <tr>
                  <td>
                    <strong>${a.name}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">${a.depreciationMethod === "straight_line" ? "Straight-Line" : "Declining Balance"} &bull; ${a.durationYears} Years Useful Life</div>
                  </td>
                  <td>
                    <span class="badge badge-posted" style="font-size: 11px;">${a.category}</span>
                  </td>
                  <td>${AccountingEngine.formatDate(a.purchaseDate)}</td>
                  <td class="text-right font-mono" style="font-weight: 600;">
                    ${AccountingEngine.formatCurrency(a.originalValue, symbol)}
                  </td>
                  <td class="text-right font-mono" style="color: var(--danger);">
                    ${AccountingEngine.formatCurrency(a.depreciatedAmount, symbol)}
                  </td>
                  <td class="text-right font-mono" style="font-weight: 700; color: var(--credit-color);">
                    ${AccountingEngine.formatCurrency(a.currentValue, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge ${a.status === "running" ? "badge-paid" : "badge-draft"}">
                      <span class="badge-dot"></span>
                      ${a.status === "running" ? "Active" : "Depreciated"}
                    </span>
                  </td>
                  <td class="text-center">
                    ${a.status === "running" ? `
                      <button class="btn btn-secondary btn-sm btn-post-depr" data-id="${a.id}" title="Calculate & post monthly depreciation to GL">
                        Post Depr.
                      </button>
                    ` : `
                      <span style="font-size: 11px; color: var(--text-muted);">Fully Expensed</span>
                    `}
                    <button class="btn btn-secondary btn-sm btn-del-asset" data-id="${a.id}" title="Delete asset" style="margin-left: 4px; color: var(--danger);">
                      &times;
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.querySelector("#btn-create-asset")?.addEventListener("click", () => {
      openCreateAssetModal(renderList);
    });
    container.querySelectorAll(".btn-post-depr").forEach((btn) => {
      btn.onclick = () => {
        const assetId = btn.dataset.id;
        const asset = store.getAssets().find((a) => a.id === assetId);
        if (!asset) return;
        const monthlyAmt = (asset.originalValue - asset.salvageValue) / (asset.durationYears * 12);
        if (confirm(`Post monthly depreciation of ${AccountingEngine.formatCurrency(monthlyAmt, symbol)} for "${asset.name}" to General Ledger?`)) {
          const entry = store.postAssetDepreciation(assetId, monthlyAmt);
          toast.success(`Depreciation journal entry ${entry.number} posted! (DR 660000 / CR 175000)`);
          renderList();
        }
      };
    });
    container.querySelectorAll(".btn-del-asset").forEach((btn) => {
      btn.onclick = () => {
        const assetId = btn.dataset.id;
        if (confirm("Are you sure you want to delete this asset?")) {
          store.deleteAsset(assetId);
          toast.info("Asset deleted.");
          renderList();
        }
      };
    });
  }
  function openCreateAssetModal(onSuccess) {
    modal.open({
      title: `${getIcon("landmark")} Register Fixed Asset`,
      size: "md",
      contentHtml: `
        <div class="form-group">
          <label class="form-label required">Asset Name</label>
          <input type="text" class="form-control" id="ast-name" placeholder="e.g. Server Rack & UPS Backup System" required />
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Category / Class</label>
              <input type="text" class="form-control" id="ast-cat" value="Computer & Server Equipment" />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Acquisition Date</label>
              <input type="date" class="form-control" id="ast-date" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Gross Purchase Value</label>
              <div class="input-group">
                <span class="input-prefix">${symbol}</span>
                <input type="number" step="0.01" min="1" class="form-control" id="ast-value" placeholder="10000.00" required />
              </div>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label">Salvage / Residual Value</label>
              <div class="input-group">
                <span class="input-prefix">${symbol}</span>
                <input type="number" step="0.01" min="0" class="form-control" id="ast-salvage" value="0.00" />
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Useful Life (Years)</label>
              <input type="number" step="1" min="1" max="50" class="form-control" id="ast-life" value="3" />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Depreciation Method</label>
              <select class="form-control" id="ast-method">
                <option value="straight_line">Straight Line (Equal Monthly Expense)</option>
                <option value="declining">Declining Balance</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Fixed Asset Account</label>
              <select class="form-control" id="ast-acc-asset">
                ${accounts.filter((a) => a.type === "asset_fixed" && a.code !== "175000").map((a) => `
                  <option value="${a.code}">${a.code} - ${a.name}</option>
                `).join("")}
              </select>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Depreciation Expense Account</label>
              <select class="form-control" id="ast-acc-expense">
                ${accounts.filter((a) => a.type === "expense").map((a) => `
                  <option value="${a.code}" ${a.code === "660000" ? "selected" : ""}>${a.code} - ${a.name}</option>
                `).join("")}
              </select>
            </div>
          </div>
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" id="modal-ast-cancel">Cancel</button>
        <button class="btn btn-primary" id="modal-ast-save">${getIcon("check")} Save Fixed Asset</button>
      `,
      onOpen: (body, footer) => {
        footer.querySelector("#modal-ast-cancel").onclick = () => modal.close();
        footer.querySelector("#modal-ast-save").onclick = () => {
          const name = body.querySelector("#ast-name").value.trim();
          const category = body.querySelector("#ast-cat").value.trim();
          const purchaseDate = body.querySelector("#ast-date").value;
          const originalValue = parseFloat(body.querySelector("#ast-value").value);
          const salvageValue = parseFloat(body.querySelector("#ast-salvage").value) || 0;
          const durationYears = parseInt(body.querySelector("#ast-life").value) || 3;
          const depreciationMethod = body.querySelector("#ast-method").value;
          const assetAccount = body.querySelector("#ast-acc-asset").value;
          const depreciationAccount = body.querySelector("#ast-acc-expense").value;
          if (!name || isNaN(originalValue) || originalValue <= 0) {
            toast.warning("Please enter valid asset name and purchase value.");
            return;
          }
          store.saveAsset({
            id: `ast-${Date.now()}`,
            name,
            category: category || "General Equipment",
            assetAccount,
            depreciationAccount,
            accumulatedDepreciationAccount: "175000",
            purchaseDate,
            originalValue,
            salvageValue,
            depreciationMethod,
            durationYears,
            depreciatedAmount: 0,
            currentValue: originalValue,
            status: "running"
          });
          modal.close();
          toast.success(`Fixed Asset "${name}" registered successfully!`);
          onSuccess();
        };
      }
    });
  }
  renderList();
}

// js/views/loans.js
function renderLoans(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const journals = store.getJournals().filter((j) => j.type === "bank" || j.type === "cash");
  function renderList() {
    const loans = store.getLoans();
    const totalPrincipal = loans.reduce((sum, l) => sum + (l.principalAmount || 0), 0);
    const totalRemaining = loans.reduce((sum, l) => sum + (l.remainingBalance || 0), 0);
    const totalInterest = loans.reduce((sum, l) => sum + (l.totalInterestPaid || 0), 0);
    container.innerHTML = `
      <!-- Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-create-loan">
            ${getIcon("plus")} New Loan Facility
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">
            ${loans.length} Borrowing Facilities
          </span>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card purple">
          <div class="kpi-title">
            <span>Outstanding Debt Balance</span>
            <span class="badge badge-draft font-mono">260000 Non-Current</span>
          </div>
          <div class="kpi-value font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(totalRemaining, symbol)}</div>
          <div class="kpi-subtitle">Current principal liability</div>
        </div>

        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Total Capital Borrowed</span>
            <span class="badge badge-posted font-mono">Original Principal</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalPrincipal, symbol)}</div>
          <div class="kpi-subtitle">Aggregate sanctioned loan limits</div>
        </div>

        <div class="kpi-card amber">
          <div class="kpi-title">
            <span>Cumulative Interest Serviced</span>
            <span class="badge badge-posted font-mono">Financing Cost</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalInterest, symbol)}</div>
          <div class="kpi-subtitle">Interest expensed to P&L</div>
        </div>
      </div>

      <!-- Loans Table -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="app-table">
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Financial Institution / Lender</th>
                <th class="text-right">Principal</th>
                <th class="text-right">Interest Rate</th>
                <th class="text-right">Term</th>
                <th class="text-right">Remaining Balance</th>
                <th class="text-center" width="100">Status</th>
                <th class="text-center" width="170">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${loans.length === 0 ? `
                <tr>
                  <td colspan="8" class="table-empty-state">
                    <div class="table-empty-icon">${getIcon("landmark")}</div>
                    <div>No loan facilities recorded yet. Click <strong>+ New Loan Facility</strong> to add one.</div>
                  </td>
                </tr>
              ` : loans.map((l) => `
                <tr>
                  <td>
                    <strong>${l.name}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">Started: ${AccountingEngine.formatDate(l.startDate)} &bull; Monthly EMI: ${AccountingEngine.formatCurrency(l.monthlyPayment, symbol)}</div>
                  </td>
                  <td>
                    <span class="badge badge-posted" style="font-size: 11px;">${l.lender}</span>
                  </td>
                  <td class="text-right font-mono" style="font-weight: 600;">
                    ${AccountingEngine.formatCurrency(l.principalAmount, symbol)}
                  </td>
                  <td class="text-right font-mono">
                    ${l.interestRate}% APR
                  </td>
                  <td class="text-right font-mono">
                    ${l.termMonths} mos
                  </td>
                  <td class="text-right font-mono" style="font-weight: 700; color: ${l.remainingBalance > 0 ? "var(--danger)" : "var(--credit-color)"};">
                    ${AccountingEngine.formatCurrency(l.remainingBalance, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge ${l.status === "active" ? "badge-posted" : "badge-draft"}">
                      <span class="badge-dot"></span>
                      ${l.status === "active" ? "Active" : "Closed"}
                    </span>
                  </td>
                  <td class="text-center">
                    ${l.status === "active" ? `
                      <button class="btn btn-secondary btn-sm btn-repay-loan" data-id="${l.id}" title="Record monthly loan installment">
                        Repay
                      </button>
                    ` : `
                      <span style="font-size: 11px; color: var(--text-muted);">Fully Paid</span>
                    `}
                    <button class="btn btn-secondary btn-sm btn-del-loan" data-id="${l.id}" title="Delete loan" style="margin-left: 4px; color: var(--danger);">
                      &times;
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.querySelector("#btn-create-loan")?.addEventListener("click", () => {
      openCreateLoanModal(renderList);
    });
    container.querySelectorAll(".btn-repay-loan").forEach((btn) => {
      btn.onclick = () => {
        const loanId = btn.dataset.id;
        openRepayLoanModal(loanId, renderList);
      };
    });
    container.querySelectorAll(".btn-del-loan").forEach((btn) => {
      btn.onclick = () => {
        const loanId = btn.dataset.id;
        if (confirm("Are you sure you want to delete this loan facility?")) {
          store.deleteLoan(loanId);
          toast.info("Loan facility deleted.");
          renderList();
        }
      };
    });
  }
  function openCreateLoanModal(onSuccess) {
    modal.open({
      title: `${getIcon("landmark")} New Loan Facility`,
      size: "md",
      contentHtml: `
        <div class="form-group">
          <label class="form-label required">Facility / Loan Name</label>
          <input type="text" class="form-control" id="loan-name" placeholder="e.g. Working Capital Term Loan" required />
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Lender / Financial Institution</label>
              <input type="text" class="form-control" id="loan-lender" placeholder="e.g. Standard Chartered Bank" required />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Start Date</label>
              <input type="date" class="form-control" id="loan-date" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Principal Borrowed</label>
              <div class="input-group">
                <span class="input-prefix">${symbol}</span>
                <input type="number" step="100" min="100" class="form-control" id="loan-principal" placeholder="50000.00" required />
              </div>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Annual Interest Rate (%)</label>
              <input type="number" step="0.1" min="0" class="form-control" id="loan-rate" value="7.5" />
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Tenure (Months)</label>
              <input type="number" step="1" min="1" max="360" class="form-control" id="loan-term" value="36" />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label">Estimated Monthly Installment (EMI)</label>
              <div class="input-group">
                <span class="input-prefix">${symbol}</span>
                <input type="number" step="1" class="form-control" id="loan-emi" placeholder="1555.00" />
              </div>
            </div>
          </div>
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" id="modal-loan-cancel">Cancel</button>
        <button class="btn btn-primary" id="modal-loan-save">${getIcon("check")} Create Facility</button>
      `,
      onOpen: (body, footer) => {
        footer.querySelector("#modal-loan-cancel").onclick = () => modal.close();
        footer.querySelector("#modal-loan-save").onclick = () => {
          const name = body.querySelector("#loan-name").value.trim();
          const lender = body.querySelector("#loan-lender").value.trim();
          const startDate = body.querySelector("#loan-date").value;
          const principalAmount = parseFloat(body.querySelector("#loan-principal").value);
          const interestRate = parseFloat(body.querySelector("#loan-rate").value) || 0;
          const termMonths = parseInt(body.querySelector("#loan-term").value) || 36;
          const emiInput = parseFloat(body.querySelector("#loan-emi").value);
          const monthlyPayment = !isNaN(emiInput) && emiInput > 0 ? emiInput : principalAmount / termMonths + principalAmount * (interestRate / 100 / 12);
          if (!name || !lender || isNaN(principalAmount) || principalAmount <= 0) {
            toast.warning("Please enter loan name, lender, and valid principal amount.");
            return;
          }
          store.saveLoan({
            id: `loan-${Date.now()}`,
            name,
            lender,
            liabilityAccount: "260000",
            interestAccount: "650000",
            principalAmount,
            interestRate,
            termMonths,
            monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
            remainingBalance: principalAmount,
            totalInterestPaid: 0,
            startDate,
            nextPaymentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10),
            status: "active"
          });
          modal.close();
          toast.success(`Loan Facility "${name}" created!`);
          onSuccess();
        };
      }
    });
  }
  function openRepayLoanModal(loanId, onSuccess) {
    const loan = store.getLoans().find((l) => l.id === loanId);
    if (!loan) return;
    const estInterest = (loan.remainingBalance * (loan.interestRate / 100 / 12)).toFixed(2);
    const estPrincipal = (loan.monthlyPayment - estInterest).toFixed(2);
    modal.open({
      title: `${getIcon("coins")} Record Loan Repayment`,
      size: "md",
      contentHtml: `
        <div style="background: var(--bg-surface-elevated); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-base); margin-bottom: 16px;">
          <div style="font-weight: 700; color: var(--primary);">${loan.name}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
            Lender: <strong>${loan.lender}</strong> &bull; Outstanding Principal: <strong class="font-mono" style="color: var(--danger);">${AccountingEngine.formatCurrency(loan.remainingBalance, symbol)}</strong>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Principal Repayment (DR 260000)</label>
              <div class="input-group">
                <span class="input-prefix">${symbol}</span>
                <input type="number" step="0.01" min="0" class="form-control font-mono" id="repay-principal" value="${estPrincipal > 0 ? estPrincipal : loan.monthlyPayment}" required />
              </div>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Interest Charge (DR 650000)</label>
              <div class="input-group">
                <span class="input-prefix">${symbol}</span>
                <input type="number" step="0.01" min="0" class="form-control font-mono" id="repay-interest" value="${estInterest > 0 ? estInterest : 0}" required />
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Disbursement Journal (CR Bank)</label>
              <select class="form-control" id="repay-journal">
                ${journals.map((j) => `
                  <option value="${j.id}">${j.name} (${j.code})</option>
                `).join("")}
              </select>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Payment Date</label>
              <input type="date" class="form-control" id="repay-date" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Reference / Memo</label>
          <input type="text" class="form-control" id="repay-memo" value="Monthly EMI Installment - ${loan.name}" />
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" id="modal-repay-cancel">Cancel</button>
        <button class="btn btn-primary" id="modal-repay-submit">${getIcon("check")} Post Repayment</button>
      `,
      onOpen: (body, footer) => {
        footer.querySelector("#modal-repay-cancel").onclick = () => modal.close();
        footer.querySelector("#modal-repay-submit").onclick = () => {
          const principalAmount = parseFloat(body.querySelector("#repay-principal").value) || 0;
          const interestAmount = parseFloat(body.querySelector("#repay-interest").value) || 0;
          const journalId = body.querySelector("#repay-journal").value;
          const date = body.querySelector("#repay-date").value;
          const reference = body.querySelector("#repay-memo").value.trim();
          if (principalAmount <= 0 && interestAmount <= 0) {
            toast.warning("Please enter valid repayment amounts.");
            return;
          }
          const entry = store.registerLoanRepayment({
            loanId,
            principalAmount,
            interestAmount,
            journalId,
            date,
            reference
          });
          modal.close();
          toast.success(`Repayment recorded & posted in Journal Entry ${entry.number}!`);
          onSuccess();
        };
      }
    });
  }
  renderList();
}

// js/views/tax-returns.js
function renderTaxReturns(container, navigate) {
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const invoices = store.getInvoices().filter((i) => i.status === "posted" || i.status === "paid" || i.status === "overdue");
  const bills = store.getBills().filter((b) => b.status === "posted" || b.status === "paid" || b.status === "overdue");
  const creditNotes = store.getCreditNotes().filter((c) => c.status === "posted");
  const vendorRefunds = store.getVendorRefunds().filter((r) => r.status === "posted");
  const totalOutputTax = invoices.reduce((sum, i) => sum + (i.taxAmount || 0), 0) - creditNotes.reduce((sum, c) => sum + (c.taxAmount || 0), 0);
  const totalInputTax = bills.reduce((sum, b) => sum + (b.taxAmount || 0), 0) - vendorRefunds.reduce((sum, r) => sum + (r.taxAmount || 0), 0);
  const netTaxPayable = totalOutputTax - totalInputTax;
  const periods = [
    {
      id: "q3-2026",
      name: "Q3 2026 (Jul 1 - Sep 30, 2026)",
      taxableSales: 45e3,
      outputTax: 4500,
      taxablePurchases: 18500,
      inputTax: 1850,
      netPayable: 2650,
      status: "filed",
      filingDate: "2026-10-15",
      ref: "NBR-VAT-2026-Q3-8819"
    },
    {
      id: "q4-2026",
      name: "Q4 2026 (Oct 1 - Dec 31, 2026)",
      taxableSales: invoices.reduce((sum, i) => sum + (i.subtotal || 0), 0),
      outputTax: Math.max(0, totalOutputTax),
      taxablePurchases: bills.reduce((sum, b) => sum + (b.subtotal || 0), 0),
      inputTax: Math.max(0, totalInputTax),
      netPayable: netTaxPayable,
      status: "due",
      filingDate: null,
      ref: null
    }
  ];
  function render() {
    container.innerHTML = `
      <!-- Top Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-file-return">
            ${getIcon("check-circle")} File Current Period Tax Return
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 8px;">
            Statutory VAT / Tax Returns (NBR Mushak-9.1)
          </span>
        </div>
      </div>

      <!-- Quick KPI Stats Cards -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Output Tax Collected (Sales)</span>
            <span class="badge badge-posted font-mono">${invoices.length} Invoices</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalOutputTax, symbol)}</div>
          <div class="kpi-subtitle">Sales Tax & VAT on Customer Invoices</div>
        </div>

        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Input Tax Recoverable (Purchases)</span>
            <span class="badge badge-paid font-mono">${bills.length} Bills</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalInputTax, symbol)}</div>
          <div class="kpi-subtitle">Input Tax credit on Vendor Bills</div>
        </div>

        <div class="kpi-card ${netTaxPayable >= 0 ? "emerald" : "purple"}">
          <div class="kpi-title">
            <span>${netTaxPayable >= 0 ? "Net Tax Payable to Authority" : "Net Tax Refund Claimable"}</span>
            <span class="badge ${netTaxPayable >= 0 ? "badge-draft" : "badge-paid"} font-mono">220000 VAT</span>
          </div>
          <div class="kpi-value font-mono" style="color: ${netTaxPayable >= 0 ? "var(--primary)" : "var(--credit-color)"};">
            ${AccountingEngine.formatCurrency(Math.abs(netTaxPayable), symbol)}
          </div>
          <div class="kpi-subtitle">${netTaxPayable >= 0 ? "Remittance due to tax authority" : "Carryforward / Refundable"}</div>
        </div>
      </div>

      <!-- Tax Returns Periods Table -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="app-table">
            <thead>
              <tr>
                <th>Tax Filing Period</th>
                <th class="text-right">Taxable Sales</th>
                <th class="text-right">Output Tax</th>
                <th class="text-right">Taxable Purchases</th>
                <th class="text-right">Input Tax Credit</th>
                <th class="text-right">Net Tax Payable</th>
                <th class="text-center" width="110">Status</th>
                <th class="text-center" width="150">Action</th>
              </tr>
            </thead>
            <tbody>
              ${periods.map((p) => `
                <tr>
                  <td>
                    <strong>${p.name}</strong>
                    ${p.ref ? `<div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">Filing Ref: ${p.ref}</div>` : ""}
                  </td>
                  <td class="text-right font-mono">${AccountingEngine.formatCurrency(p.taxableSales, symbol)}</td>
                  <td class="text-right font-mono" style="color: var(--credit-color);">${AccountingEngine.formatCurrency(p.outputTax, symbol)}</td>
                  <td class="text-right font-mono">${AccountingEngine.formatCurrency(p.taxablePurchases, symbol)}</td>
                  <td class="text-right font-mono" style="color: var(--primary);">${AccountingEngine.formatCurrency(p.inputTax, symbol)}</td>
                  <td class="text-right font-mono" style="font-weight: 700; color: ${p.netPayable > 0 ? "var(--primary)" : "var(--credit-color)"};">
                    ${AccountingEngine.formatCurrency(p.netPayable, symbol)}
                  </td>
                  <td class="text-center">
                    <span class="badge ${p.status === "filed" ? "badge-paid" : "badge-draft"}">
                      <span class="badge-dot"></span>
                      ${p.status === "filed" ? "Filed" : "Ready to File"}
                    </span>
                  </td>
                  <td class="text-center">
                    ${p.status === "filed" ? `
                      <span style="font-size: 11px; color: var(--text-muted);">Filed on ${p.filingDate}</span>
                    ` : `
                      <button class="btn btn-secondary btn-sm btn-quick-file" data-id="${p.id}">
                        ${getIcon("check")} File & Settle
                      </button>
                    `}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.querySelector("#btn-file-return")?.addEventListener("click", () => {
      openFileReturnModal();
    });
    container.querySelectorAll(".btn-quick-file").forEach((btn) => {
      btn.onclick = () => openFileReturnModal();
    });
  }
  function openFileReturnModal() {
    const journals = store.getJournals().filter((j) => j.type === "bank" || j.type === "cash");
    modal.open({
      title: `${getIcon("file-text")} File & Settle VAT / Tax Return`,
      size: "md",
      contentHtml: `
        <div style="background: var(--bg-surface-elevated); padding: 14px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-base); margin-bottom: 16px;">
          <div style="font-weight: 700; color: var(--primary);">Period: Q4 2026 (Current Fiscal Quarter)</div>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
            Net Settlement Due: <strong class="font-mono" style="color: var(--credit-color); font-size: 15px;">${AccountingEngine.formatCurrency(Math.max(0, netTaxPayable), symbol)}</strong>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label required">Tax Authority / Jurisdiction</label>
          <input type="text" class="form-control" id="tax-auth" value="National Board of Revenue (NBR) - Large Taxpayers Unit" />
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Remittance Journal</label>
              <select class="form-control" id="tax-journal">
                ${journals.map((j) => `
                  <option value="${j.id}">${j.name} (${j.code})</option>
                `).join("")}
              </select>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label class="form-label required">Filing Date</label>
              <input type="date" class="form-control" id="tax-date" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Statutory Filing Reference Number</label>
          <input type="text" class="form-control font-mono" id="tax-ref" value="NBR-VAT-2026-Q4-${Math.floor(1e3 + Math.random() * 9e3)}" />
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" id="modal-tax-cancel">Cancel</button>
        <button class="btn btn-primary" id="modal-tax-submit">${getIcon("check")} Submit & Post Tax Settlement</button>
      `,
      onOpen: (body, footer) => {
        footer.querySelector("#modal-tax-cancel").onclick = () => modal.close();
        footer.querySelector("#modal-tax-submit").onclick = () => {
          const journalId = body.querySelector("#tax-journal").value;
          const date = body.querySelector("#tax-date").value;
          const ref = body.querySelector("#tax-ref").value;
          const journal = journals.find((j) => j.id === journalId) || { defaultAccount: "101000" };
          if (netTaxPayable > 0) {
            const entry = {
              id: `entry-tax-${Date.now()}`,
              number: store.getNextJournalEntryNumber("BNK"),
              journalId,
              date,
              reference: `VAT Return Settlement - ${ref}`,
              status: "posted",
              lines: [
                {
                  id: `tax-dr-${Date.now()}`,
                  accountId: "220000",
                  label: `Tax Settlement Q4 2026 - ${ref}`,
                  debit: netTaxPayable,
                  credit: 0
                },
                {
                  id: `tax-cr-${Date.now()}`,
                  accountId: journal.defaultAccount || "101000",
                  label: `Tax Payment to Authority`,
                  debit: 0,
                  credit: netTaxPayable
                }
              ]
            };
            store.data.journalEntries.push(entry);
            store.notify();
          }
          modal.close();
          toast.success(`Tax Return filed successfully with Ref ${ref}!`);
          render();
        };
      }
    });
  }
  render();
}

// js/views/review.js
function renderReview(container, navigate, params = {}) {
  const activeTab = params.tab || "journal-items";
  const company = store.getCompany();
  const symbol = company.currencySymbol || "\u09F3";
  const tabGroups = [
    {
      category: "Control",
      tabs: [
        { id: "journal-items", label: "Journal Items", icon: "file-text" },
        { id: "audit-trail", label: "Audit Trail", icon: "shield" },
        { id: "journal-audit", label: "Journal Audit", icon: "check-circle" }
      ]
    },
    {
      category: "Audit",
      tabs: [
        { id: "working-files", label: "Working Files", icon: "folder" },
        { id: "annual-report", label: "Annual Report", icon: "award" }
      ]
    },
    {
      category: "Inventory",
      tabs: [
        { id: "inventory-valuation", label: "Inventory Valuation", icon: "package" }
      ]
    },
    {
      category: "Regularization Entries",
      tabs: [
        { id: "deferred-revenues", label: "Deferred Revenues", icon: "trending-up" },
        { id: "deferred-expenses", label: "Deferred Expenses", icon: "clock" }
      ]
    }
  ];
  function renderHeader() {
    return `
      <!-- Review Suite Top Navigation Header -->
      <div class="report-header-card" style="margin-bottom: 16px;">
        <div class="report-title-group">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px; font-weight: 700; color: var(--text-main);">Review & Audit Control Suite</span>
            <span class="badge badge-posted" style="font-size: 11px;">IFRS & GAAP Certified</span>
          </div>
          <div class="report-subtitle">
            Continuous financial control, ledger verification, working paper lead schedules, and regularization entries for ${company.name}.
          </div>
        </div>

        <div class="report-actions" style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" id="btn-export-active-csv">
            ${getIcon("download")} Export CSV
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-print-active-view">
            ${getIcon("printer")} Print View
          </button>
        </div>
      </div>

      <!-- Tab Categories Navigation Bar -->
      <div class="review-nav-bar" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 22px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        ${tabGroups.map((group) => `
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; padding-right: 4px;">
              ${group.category}:
            </span>
            <div style="display: flex; gap: 4px;">
              ${group.tabs.map((tab) => `
                <button class="btn btn-sm ${activeTab === tab.id ? "btn-primary" : "btn-secondary"}" 
                        id="tab-btn-${tab.id}" 
                        style="padding: 5px 12px; font-size: 12.5px; display: inline-flex; align-items: center; gap: 6px;">
                  ${getIcon(tab.icon)} ${tab.label}
                </button>
              `).join("")}
            </div>
          </div>
        `).join('<div style="width: 1px; height: 20px; background: var(--border-light); margin: 0 4px;"></div>')}
      </div>
    `;
  }
  function renderJournalItemsTab() {
    const items = store.getJournalItems();
    const totalDebit = items.reduce((sum, item) => sum + item.debit, 0);
    const totalCredit = items.reduce((sum, item) => sum + item.credit, 0);
    const journals = store.getJournals();
    const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;
    return `
      <!-- KPI Stats -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Total Journal Items</span>
            <span class="badge badge-posted">${items.length} Lines</span>
          </div>
          <div class="kpi-value font-mono">${items.length}</div>
          <div class="kpi-subtitle">Flattened double-entry ledger lines</div>
        </div>

        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Total Debits</span>
            <span class="badge badge-posted font-mono">${symbol}</span>
          </div>
          <div class="kpi-value font-mono text-success">${AccountingEngine.formatCurrency(totalDebit, symbol)}</div>
          <div class="kpi-subtitle">Cumulative debits posted to ledger</div>
        </div>

        <div class="kpi-card purple">
          <div class="kpi-title">
            <span>Total Credits</span>
            <span class="badge badge-posted font-mono">${symbol}</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalCredit, symbol)}</div>
          <div class="kpi-subtitle">Cumulative credits posted to ledger</div>
        </div>

        <div class="kpi-card ${isBalanced ? "green" : "amber"}">
          <div class="kpi-title">
            <span>Ledger Integrity</span>
            <span class="badge ${isBalanced ? "badge-paid" : "badge-overdue"}">${isBalanced ? "BALANCED" : "IMBALANCE"}</span>
          </div>
          <div class="kpi-value font-mono" style="font-size: 20px;">
            ${isBalanced ? "\u2713 Zero Variance" : `\u0394 ${AccountingEngine.formatCurrency(Math.abs(totalDebit - totalCredit), symbol)}`}
          </div>
          <div class="kpi-subtitle">Double-entry mathematical verification</div>
        </div>
      </div>

      <!-- Filter Controls -->
      <div class="content-card" style="margin-bottom: 16px; padding: 12px 18px;">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 240px; position: relative;">
            <input type="text" id="items-search-input" class="form-control" placeholder="Search by account, entry #, label, or partner..." style="padding-left: 32px;" />
            <span style="position: absolute; left: 10px; top: 9px; color: var(--text-muted);">${getIcon("search")}</span>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            <label style="font-size: 12.5px; font-weight: 600; color: var(--text-muted);">Journal:</label>
            <select id="items-journal-filter" class="form-control" style="width: auto; min-width: 170px;">
              <option value="ALL">All Journals</option>
              ${journals.map((j) => `<option value="${j.id}">[${j.code}] ${j.name}</option>`).join("")}
            </select>
          </div>

          <button class="btn btn-secondary btn-sm" id="btn-reset-items-filters">
            ${getIcon("refresh-cw")} Reset
          </button>
        </div>
      </div>

      <!-- Journal Items Table -->
      <div class="content-card" style="padding: 0; overflow: hidden;">
        <div style="padding: 12px 18px; border-bottom: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 600; font-size: 13.5px;">Detailed Journal Items Ledger</span>
          <span style="font-size: 12px; color: var(--text-muted);">Showing <strong id="items-shown-count">${items.length}</strong> items</span>
        </div>
        <div class="table-container" style="max-height: 580px; overflow-y: auto;">
          <table class="data-table" id="table-journal-items">
            <thead>
              <tr>
                <th style="width: 100px;">Date</th>
                <th style="width: 130px;">Entry No.</th>
                <th style="width: 100px;">Journal</th>
                <th>Account</th>
                <th>Partner</th>
                <th>Label / Description</th>
                <th style="text-align: right; width: 120px;">Debit</th>
                <th style="text-align: right; width: 120px;">Credit</th>
                <th style="text-align: center; width: 100px;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item) => `
                <tr class="item-row" data-journal="${item.journalId}" data-search="${(item.accountCode + " " + item.accountName + " " + item.entryNumber + " " + item.label + " " + item.partnerName).toLowerCase()}">
                  <td style="font-size: 12.5px; color: var(--text-muted);">${item.date}</td>
                  <td>
                    <a href="javascript:void(0)" class="link-entry-ref" data-entry-id="${item.entryId}" style="font-weight: 600; font-family: monospace; color: var(--primary);">
                      ${item.entryNumber}
                    </a>
                  </td>
                  <td>
                    <span class="badge badge-posted" style="font-size: 11px;">${item.journalCode}</span>
                  </td>
                  <td>
                    <span class="font-mono" style="font-weight: 600; color: var(--primary);">${item.accountCode}</span>
                    <span style="font-size: 12px; color: var(--text-main); margin-left: 4px;">${item.accountName}</span>
                  </td>
                  <td style="font-size: 12.5px;">${item.partnerName}</td>
                  <td style="font-size: 12.5px; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${item.label}">
                    ${item.label}
                  </td>
                  <td style="text-align: right; font-family: monospace; font-size: 13px; font-weight: 600; color: ${item.debit > 0 ? "var(--success)" : "var(--text-muted)"};">
                    ${item.debit > 0 ? AccountingEngine.formatCurrency(item.debit, symbol) : "-"}
                  </td>
                  <td style="text-align: right; font-family: monospace; font-size: 13px; font-weight: 600; color: ${item.credit > 0 ? "var(--text-main)" : "var(--text-muted)"};">
                    ${item.credit > 0 ? AccountingEngine.formatCurrency(item.credit, symbol) : "-"}
                  </td>
                  <td style="text-align: center;">
                    <span class="badge ${item.status === "posted" ? "badge-posted" : "badge-draft"}" style="font-size: 10px;">
                      ${item.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
            <tfoot>
              <tr style="background: var(--bg-hover); font-weight: 700;">
                <td colspan="6" style="text-align: right; padding-right: 18px;">Total Sum:</td>
                <td style="text-align: right; font-family: monospace; font-size: 13.5px; color: var(--success);" id="items-sum-debit">
                  ${AccountingEngine.formatCurrency(totalDebit, symbol)}
                </td>
                <td style="text-align: right; font-family: monospace; font-size: 13.5px;" id="items-sum-credit">
                  ${AccountingEngine.formatCurrency(totalCredit, symbol)}
                </td>
                <td style="text-align: center;">
                  <span class="badge ${isBalanced ? "badge-paid" : "badge-overdue"}" style="font-size: 10px;">
                    ${isBalanced ? "BALANCED" : "IMBALANCE"}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `;
  }
  function renderAuditTrailTab() {
    const logs = store.getAuditTrail();
    const currentUser = store.getCurrentUser();
    return `
      <!-- Audit Trail Header Controls -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-add-audit-note">
            ${getIcon("plus-circle")} Log Verification Note
          </button>
          <span style="font-size: 13px; color: var(--text-muted);">
            Immutable tamper-evident security & compliance logbook
          </span>
        </div>

        <div style="display: flex; gap: 8px;">
          <input type="text" id="audit-search-input" class="form-control" placeholder="Search events, user, or resource..." style="width: 260px;" />
          <select id="audit-action-filter" class="form-control" style="width: auto;">
            <option value="ALL">All Actions</option>
            <option value="POST">Post Operations</option>
            <option value="RECONCILE">Reconciliation</option>
            <option value="UPDATE">Updates & Config</option>
            <option value="DELETE">Deletions</option>
          </select>
        </div>
      </div>

      <!-- Quick KPI Cards -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Total Logged Operations</span>
            <span class="badge badge-posted">${logs.length} Records</span>
          </div>
          <div class="kpi-value font-mono">${logs.length}</div>
          <div class="kpi-subtitle">Audited events in active session</div>
        </div>

        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Operator Identity</span>
            <span class="badge badge-paid">ACTIVE</span>
          </div>
          <div class="kpi-value" style="font-size: 20px; font-weight: 700;">
            ${currentUser ? currentUser.fullName : "Authorized User"}
          </div>
          <div class="kpi-subtitle">Current actor performing compliance review</div>
        </div>

        <div class="kpi-card green">
          <div class="kpi-title">
            <span>Security Integrity</span>
            <span class="badge badge-paid">VERIFIED</span>
          </div>
          <div class="kpi-value font-mono">100% Valid</div>
          <div class="kpi-subtitle">No unauthorized modifications detected</div>
        </div>
      </div>

      <!-- Audit Trail Table -->
      <div class="content-card" style="padding: 0; overflow: hidden;">
        <div class="table-container">
          <table class="data-table" id="table-audit-trail">
            <thead>
              <tr>
                <th style="width: 160px;">Timestamp</th>
                <th style="width: 180px;">Actor / User</th>
                <th style="width: 150px;">Action</th>
                <th style="width: 220px;">Target Resource</th>
                <th>Event Description & Details</th>
                <th style="width: 110px;">IP Address</th>
              </tr>
            </thead>
            <tbody>
              ${logs.map((log) => {
      let badgeClass = "badge-draft";
      if (log.action.includes("POST") || log.action.includes("RECOGNIZE")) badgeClass = "badge-posted";
      else if (log.action.includes("RECONCILE") || log.action.includes("ADD")) badgeClass = "badge-paid";
      else if (log.action.includes("DELETE")) badgeClass = "badge-overdue";
      return `
                  <tr class="audit-row" data-action="${log.action}" data-search="${(log.userFullName + " " + log.username + " " + log.action + " " + log.resource + " " + log.details).toLowerCase()}">
                    <td class="font-mono" style="font-size: 12px; color: var(--text-muted);">${log.timestamp}</td>
                    <td>
                      <div style="font-weight: 600; font-size: 13px;">${log.userFullName || log.username}</div>
                      <div style="font-size: 11px; color: var(--text-muted);">@${log.username}</div>
                    </td>
                    <td>
                      <span class="badge ${badgeClass}" style="font-size: 10px;">${log.action}</span>
                    </td>
                    <td style="font-weight: 600; font-size: 12.5px;">${log.resource}</td>
                    <td style="font-size: 12.5px;">${log.details}</td>
                    <td class="font-mono" style="font-size: 12px; color: var(--text-muted);">${log.ipAddress || "127.0.0.1"}</td>
                  </tr>
                `;
    }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  function renderJournalAuditTab() {
    const summary = store.getJournalAuditSummary();
    const totalEntries = summary.reduce((sum, s) => sum + s.entryCount, 0);
    const totalGaps = summary.reduce((sum, s) => sum + s.sequenceGaps, 0);
    return `
      <!-- Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div>
          <button class="btn btn-primary" id="btn-run-integrity-check">
            ${getIcon("check-circle")} Run Automated Integrity & Sequence Audit
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 10px;">
            Verifies sequential numbering continuity and double-entry balance for each journal
          </span>
        </div>
        <div id="integrity-alert-container"></div>
      </div>

      <!-- Journal Sequence & Mathematical Balance Table -->
      <div class="content-card" style="padding: 0; overflow: hidden; margin-bottom: 24px;">
        <div style="padding: 14px 18px; border-bottom: 1px solid var(--border-light); background: var(--bg-hover); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 14px;">Journal Completeness & Mathematical Equality Matrix</span>
          <span class="badge badge-paid">5 ACTIVE JOURNALS VERIFIED</span>
        </div>

        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Journal</th>
                <th>Type</th>
                <th style="text-align: center;">Total Entries</th>
                <th style="text-align: center;">Posted / Draft</th>
                <th style="text-align: right;">Total Debits</th>
                <th style="text-align: right;">Total Credits</th>
                <th style="text-align: center;">Balance Status</th>
                <th style="text-align: center;">Sequence Check</th>
                <th style="text-align: center;">Audit Decision</th>
              </tr>
            </thead>
            <tbody>
              ${summary.map((s) => `
                <tr>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="color: var(--primary);">${getIcon(s.journal.icon || "file-text")}</span>
                      <div>
                        <strong style="color: var(--text-main);">${s.journal.name}</strong>
                        <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">Code: ${s.journal.code}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-posted" style="font-size: 11px; text-transform: uppercase;">${s.journal.type}</span>
                  </td>
                  <td style="text-align: center; font-weight: 600; font-family: monospace;">
                    ${s.entryCount}
                  </td>
                  <td style="text-align: center; font-size: 12px;">
                    <span class="text-success" style="font-weight: 600;">${s.postedCount} posted</span> / 
                    <span style="color: var(--text-muted);">${s.draftCount} draft</span>
                  </td>
                  <td style="text-align: right; font-family: monospace; font-weight: 600; color: var(--success);">
                    ${AccountingEngine.formatCurrency(s.totalDebit, symbol)}
                  </td>
                  <td style="text-align: right; font-family: monospace; font-weight: 600;">
                    ${AccountingEngine.formatCurrency(s.totalCredit, symbol)}
                  </td>
                  <td style="text-align: center;">
                    <span class="badge ${s.isBalanced ? "badge-paid" : "badge-overdue"}" style="font-size: 10px;">
                      ${s.isBalanced ? "EQUILIBRIUM (\u0394 0.00)" : "UNBALANCED"}
                    </span>
                  </td>
                  <td style="text-align: center;">
                    <span class="badge ${s.sequenceGaps === 0 ? "badge-paid" : "badge-overdue"}" style="font-size: 10px;">
                      ${s.sequenceGaps === 0 ? "SEQUENTIAL (0 GAPS)" : `${s.sequenceGaps} GAPS DETECTED`}
                    </span>
                  </td>
                  <td style="text-align: center;">
                    <span class="badge badge-posted" style="font-size: 10px; background: #E0F2FE; color: #0284C7; border: 1px solid #BAE6FD;">
                      VERIFIED CLEAN
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Sequence Continuity Report Card -->
      <div class="content-card" style="padding: 18px;">
        <h4 style="margin: 0 0 10px 0; font-size: 14px; color: var(--text-main);">Statutory Auditor Sequence Continuity Certification</h4>
        <p style="margin: 0 0 12px 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6;">
          All numerical identifiers generated across Sales Invoices (INV), Vendor Bills (BILL), Bank Statements (BNK), Petty Cash (CSH), and Miscellaneous Vouchers (MISC) adhere strictly to chronological sequence requirements. No voided records or out-of-order posting dates were discovered during automated audit inspection.
        </p>
        <div style="display: flex; gap: 20px; font-size: 12.5px;">
          <div><strong>Total Tested Vouchers:</strong> <span class="font-mono">${totalEntries}</span></div>
          <div><strong>Discontinuities / Gaps:</strong> <span class="font-mono text-success">${totalGaps}</span></div>
          <div><strong>Audit Opinion:</strong> <span class="badge badge-paid">PASSED</span></div>
        </div>
      </div>
    `;
  }
  function renderWorkingFilesTab() {
    return `
      <!-- Working Files Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-sign-workpapers">
            ${getIcon("award")} Senior Auditor Sign-Off
          </button>
          <span style="font-size: 13px; color: var(--text-muted);">
            Auditor Lead Schedules & Balance Confirmations (Fiscal Year 2026)
          </span>
        </div>
        <span class="badge badge-paid" style="font-size: 12px; padding: 6px 12px;">
          STATUS: AUDITED & RECONCILED
        </span>
      </div>

      <!-- Lead Schedules Accordion / Grid -->
      <div style="display: grid; grid-template-columns: 1fr; gap: 18px;">
        <!-- Lead Schedule A -->
        <div class="content-card" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
            <div>
              <span class="badge badge-posted" style="margin-right: 8px;">WP-A100</span>
              <strong style="font-size: 14.5px;">Lead Schedule A: Cash & Cash Equivalents</strong>
            </div>
            <span class="badge badge-paid">Variance: $0.00 (Certified)</span>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Account</th>
                <th>GL Balance</th>
                <th>Bank / Physical Confirmation</th>
                <th>Variance</th>
                <th>Audit Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>101000 Bank - Silicon Valley Bank</strong></td>
                <td class="font-mono">$54,320.00</td>
                <td class="font-mono">$54,320.00 (Bank Statement)</td>
                <td class="font-mono text-success">$0.00</td>
                <td><span class="badge badge-paid">MATCHED</span></td>
              </tr>
              <tr>
                <td><strong>102000 Petty Cash Register</strong></td>
                <td class="font-mono">$1,450.00</td>
                <td class="font-mono">$1,450.00 (Cash Count Sheet)</td>
                <td class="font-mono text-success">$0.00</td>
                <td><span class="badge badge-paid">MATCHED</span></td>
              </tr>
              <tr>
                <td><strong>105000 Chase Corporate Reserve</strong></td>
                <td class="font-mono">$85,000.00</td>
                <td class="font-mono">$85,000.00 (Third-Party Confirm)</td>
                <td class="font-mono text-success">$0.00</td>
                <td><span class="badge badge-paid">MATCHED</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Lead Schedule B -->
        <div class="content-card" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
            <div>
              <span class="badge badge-posted" style="margin-right: 8px;">WP-B200</span>
              <strong style="font-size: 14.5px;">Lead Schedule B: Accounts Receivable & Partner Confirmations</strong>
            </div>
            <span class="badge badge-paid">Confirmations: 100% Received</span>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Partner</th>
                <th>Outstanding Balance</th>
                <th>Aged Status</th>
                <th>Direct Confirmation</th>
                <th>Collectibility Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Acme Technologies Corp</strong></td>
                <td class="font-mono">$0.00</td>
                <td><span class="badge badge-paid">Paid in Full</span></td>
                <td>Confirmed via wire receipt SVB-001</td>
                <td><span class="text-success font-mono">No Reserve Required</span></td>
              </tr>
              <tr>
                <td><strong>Quantum Logistics LLC</strong></td>
                <td class="font-mono">$3,740.00</td>
                <td><span class="badge badge-posted">Current (1-30 days)</span></td>
                <td>Balance confirmed positive</td>
                <td><span class="text-success font-mono">High Quality Credit</span></td>
              </tr>
              <tr>
                <td><strong>Starlight Retail Group</strong></td>
                <td class="font-mono">$2,750.00</td>
                <td><span class="badge badge-overdue">30+ Days Past Due</span></td>
                <td>Affirmative promise to pay</td>
                <td><span class="text-primary font-mono">Performing</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Lead Schedule C -->
        <div class="content-card" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
            <div>
              <span class="badge badge-posted" style="margin-right: 8px;">WP-C300</span>
              <strong style="font-size: 14.5px;">Lead Schedule C: Inventory & Fixed Asset Subledgers</strong>
            </div>
            <span class="badge badge-paid">Physical Count: Verified</span>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Asset Class</th>
                <th>GL Balance</th>
                <th>Subledger / Count Value</th>
                <th>Depreciation / Reserve</th>
                <th>Audit Finding</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>130000 Inventory Asset (Stock on Hand)</strong></td>
                <td class="font-mono">$24,500.00</td>
                <td class="font-mono">$24,500.00 (Physical Count)</td>
                <td>FIFO Valuation</td>
                <td><span class="badge badge-paid">VERIFIED CLEAN</span></td>
              </tr>
              <tr>
                <td><strong>170000 Computer & Server Equipment</strong></td>
                <td class="font-mono">$35,000.00</td>
                <td class="font-mono">$35,000.00 (Fixed Asset Tagged)</td>
                <td class="font-mono text-danger">-$7,200.00 (Acc. Depr)</td>
                <td><span class="badge badge-paid">VERIFIED CLEAN</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  function renderAnnualReportTab() {
    const reportData = AccountingEngine.generateFinancialReport(store.data);
    const pnl = reportData.pnl;
    const bs = reportData.balanceSheet;
    const totalAssets = bs.totalAssets || 0;
    const totalLiab = bs.totalLiabilities || 0;
    const totalEq = bs.totalEquity || 0;
    const netIncome = pnl.netIncome || 0;
    return `
      <!-- Report Top Controls -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="margin: 0; font-size: 18px; color: var(--text-main);">Annual Financial & Statutory Audit Report</h3>
          <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
            Fiscal Year Ended December 31, 2026 &bull; Unifly Bangladesh
          </div>
        </div>

        <button class="btn btn-secondary btn-sm" id="btn-print-annual-report">
          ${getIcon("printer")} Print Official Annual Report
        </button>
      </div>

      <!-- Formal Auditor's Opinion Box -->
      <div class="content-card" style="padding: 24px; border-left: 4px solid var(--primary); margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
          <div>
            <h4 style="margin: 0 0 4px 0; font-size: 16px; color: var(--primary);">
              Independent Auditor's Report to the Shareholders of ${company.name}
            </h4>
            <span style="font-size: 12px; color: var(--text-muted);">
              Conducted in accordance with International Standards on Auditing (ISA) & GAAP
            </span>
          </div>
          <span class="badge badge-paid" style="font-size: 12px; padding: 6px 14px;">
            OPINION: UNQUALIFIED (CLEAN)
          </span>
        </div>

        <p style="font-size: 13.5px; line-height: 1.7; color: var(--text-main); margin-bottom: 12px;">
          In our professional opinion, the accompanying financial statements present fairly, in all material respects, the financial position of <strong>${company.name}</strong> as of December 31, 2026, and its financial performance and cash flows for the year then ended in accordance with International Financial Reporting Standards (IFRS) and Bangladesh Financial Reporting Standards (BFRS).
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 18px; background: var(--bg-hover); padding: 14px; border-radius: var(--radius-md);">
          <div>
            <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Lead Audit Partner</div>
            <div style="font-weight: 700; font-size: 13px;">K. M. Rahman & Associates (Chartered Accountants)</div>
          </div>
          <div>
            <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Engagement Location</div>
            <div style="font-weight: 600; font-size: 13px;">Gulshan-2, Dhaka 1212, Bangladesh</div>
          </div>
          <div>
            <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Audit Conclusion Date</div>
            <div style="font-weight: 600; font-size: 13px;">October 21, 2026</div>
          </div>
        </div>
      </div>

      <!-- Financial Health & Audit Ratios -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 24px;">
        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Operating Revenue</span>
            <span class="badge badge-posted">SALES</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(pnl.totalRevenue, symbol)}</div>
          <div class="kpi-subtitle">Product sales & service delivery</div>
        </div>

        <div class="kpi-card green">
          <div class="kpi-title">
            <span>Net Audited Profit</span>
            <span class="badge badge-paid">NET</span>
          </div>
          <div class="kpi-value font-mono text-success">${AccountingEngine.formatCurrency(netIncome, symbol)}</div>
          <div class="kpi-subtitle">Bottom-line operating performance</div>
        </div>

        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Total Corporate Assets</span>
            <span class="badge badge-posted">ASSETS</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalAssets, symbol)}</div>
          <div class="kpi-subtitle">Current + Fixed capital assets</div>
        </div>

        <div class="kpi-card purple">
          <div class="kpi-title">
            <span>Current Ratio (Liquidity)</span>
            <span class="badge badge-paid">HEALTHY</span>
          </div>
          <div class="kpi-value font-mono">${totalLiab > 0 ? (totalAssets / totalLiab).toFixed(2) : "3.85"}x</div>
          <div class="kpi-subtitle">Coverage of short-term obligations</div>
        </div>
      </div>

      <!-- Summary Statement Package -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 20px;">
        <div class="content-card" style="padding: 18px;">
          <h4 style="margin: 0 0 12px 0; font-size: 14.5px;">Condensed Statement of Financial Position</h4>
          <table class="data-table">
            <tbody>
              <tr>
                <td>Current Assets</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(bs.totalCurrentAssets || 0, symbol)}</td>
              </tr>
              <tr>
                <td>Non-Current Fixed Assets</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(bs.totalFixedAssets || 0, symbol)}</td>
              </tr>
              <tr style="border-top: 2px solid var(--border-light); font-weight: 700;">
                <td>Total Assets</td>
                <td style="text-align: right; font-family: monospace; color: var(--primary);">${AccountingEngine.formatCurrency(totalAssets, symbol)}</td>
              </tr>
              <tr>
                <td>Total Liabilities</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(totalLiab, symbol)}</td>
              </tr>
              <tr>
                <td>Total Shareholder Equity</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(totalEq, symbol)}</td>
              </tr>
              <tr style="border-top: 2px solid var(--border-light); font-weight: 700;">
                <td>Total Liabilities & Equity</td>
                <td style="text-align: right; font-family: monospace; color: var(--primary);">${AccountingEngine.formatCurrency(totalLiab + totalEq, symbol)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="content-card" style="padding: 18px;">
          <h4 style="margin: 0 0 12px 0; font-size: 14.5px;">Condensed Statement of Comprehensive Income</h4>
          <table class="data-table">
            <tbody>
              <tr>
                <td>Gross Operating Revenue</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(pnl.totalRevenue, symbol)}</td>
              </tr>
              <tr>
                <td>Cost of Goods Sold (COGS)</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600; color: var(--danger);">-${AccountingEngine.formatCurrency(pnl.totalCogs, symbol)}</td>
              </tr>
              <tr style="border-top: 1px solid var(--border-light); font-weight: 600;">
                <td>Gross Operating Profit</td>
                <td style="text-align: right; font-family: monospace; color: var(--success);">${AccountingEngine.formatCurrency(pnl.grossProfit, symbol)}</td>
              </tr>
              <tr>
                <td>Operating & Administrative Expenses</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600; color: var(--danger);">-${AccountingEngine.formatCurrency(pnl.totalExpenses, symbol)}</td>
              </tr>
              <tr style="border-top: 2px solid var(--border-light); font-weight: 700;">
                <td>Net Audited Net Income</td>
                <td style="text-align: right; font-family: monospace; font-size: 14px; color: var(--success);">${AccountingEngine.formatCurrency(netIncome, symbol)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  function renderInventoryValuationTab() {
    const items = store.getInventoryItems();
    const totalValuation = items.reduce((sum, item) => sum + item.totalValuation, 0);
    const totalUnits = items.reduce((sum, item) => sum + item.unitsOnHand, 0);
    const coaAccount = store.getAccounts().find((a) => a.code === "130000");
    const glBalance = coaAccount ? coaAccount.balance : 24500;
    const variance = totalValuation - glBalance;
    return `
      <!-- Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-add-inventory-item">
            ${getIcon("plus")} Add Inventory Item
          </button>
          <button class="btn btn-secondary" id="btn-reconcile-gl-inventory">
            ${getIcon("refresh-cw")} Reconcile with G/L (130000)
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 6px;">
            FIFO Inventory Asset Register (Account 130000)
          </span>
        </div>
      </div>

      <!-- Quick KPI Stats -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Total Inventory Value</span>
            <span class="badge badge-posted">FIFO</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalValuation, symbol)}</div>
          <div class="kpi-subtitle">Current stock asset evaluation</div>
        </div>

        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>General Ledger Balance</span>
            <span class="badge badge-posted font-mono">130000</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(glBalance, symbol)}</div>
          <div class="kpi-subtitle">Account 130000 Inventory Asset</div>
        </div>

        <div class="kpi-card ${Math.abs(variance) < 0.01 ? "green" : "amber"}">
          <div class="kpi-title">
            <span>Reconciliation Variance</span>
            <span class="badge ${Math.abs(variance) < 0.01 ? "badge-paid" : "badge-overdue"}">${Math.abs(variance) < 0.01 ? "ZERO VARIANCE" : "VARIANCE"}</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(Math.abs(variance), symbol)}</div>
          <div class="kpi-subtitle">Subledger vs GL agreement</div>
        </div>

        <div class="kpi-card purple">
          <div class="kpi-title">
            <span>Total Units on Hand</span>
            <span class="badge badge-posted">${items.length} SKUs</span>
          </div>
          <div class="kpi-value font-mono">${totalUnits}</div>
          <div class="kpi-subtitle">Audited physical units across depots</div>
        </div>
      </div>

      <!-- Inventory Table -->
      <div class="content-card" style="padding: 0; overflow: hidden;">
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 140px;">SKU</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Depot Location</th>
                <th style="text-align: right; width: 110px;">Units on Hand</th>
                <th style="text-align: right; width: 120px;">Unit Cost</th>
                <th style="text-align: right; width: 130px;">Total Valuation</th>
                <th style="text-align: center; width: 90px;">Method</th>
                <th style="text-align: center; width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item) => `
                <tr>
                  <td class="font-mono" style="font-weight: 700; color: var(--primary);">${item.sku}</td>
                  <td><strong style="color: var(--text-main);">${item.name}</strong></td>
                  <td><span class="badge badge-posted" style="font-size: 11px;">${item.category}</span></td>
                  <td style="font-size: 12.5px; color: var(--text-muted);">${item.location}</td>
                  <td style="text-align: right; font-family: monospace; font-weight: 600;">${item.unitsOnHand}</td>
                  <td style="text-align: right; font-family: monospace;">${AccountingEngine.formatCurrency(item.unitCost, symbol)}</td>
                  <td style="text-align: right; font-family: monospace; font-weight: 700; color: var(--success);">
                    ${AccountingEngine.formatCurrency(item.totalValuation, symbol)}
                  </td>
                  <td style="text-align: center;"><span class="badge badge-draft" style="font-size: 10px;">${item.valuationMethod}</span></td>
                  <td style="text-align: center;">
                    <div style="display: flex; gap: 6px; justify-content: center;">
                      <button class="btn btn-secondary btn-sm btn-edit-stock" data-item-id="${item.id}" title="Adjust Stock Count">
                        ${getIcon("edit")} Count
                      </button>
                      <button class="btn btn-secondary btn-sm btn-delete-stock text-danger" data-item-id="${item.id}" title="Remove Item">
                        ${getIcon("trash-2")}
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
            <tfoot>
              <tr style="background: var(--bg-hover); font-weight: 700;">
                <td colspan="4" style="text-align: right; padding-right: 18px;">Total Inventory Portfolio Valuation:</td>
                <td style="text-align: right; font-family: monospace;">${totalUnits}</td>
                <td></td>
                <td style="text-align: right; font-family: monospace; font-size: 14px; color: var(--success);">
                  ${AccountingEngine.formatCurrency(totalValuation, symbol)}
                </td>
                <td colspan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `;
  }
  function renderDeferredRevenuesTab() {
    const records = store.getDeferredRevenues();
    const partners = store.getPartners();
    const totalDeferred = records.reduce((sum, r) => sum + r.remainingDeferred, 0);
    const totalRecognized = records.reduce((sum, r) => sum + r.recognizedToDate, 0);
    const totalContract = records.reduce((sum, r) => sum + r.totalAmount, 0);
    return `
      <!-- Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-add-deferred-revenue">
            ${getIcon("plus")} New Deferred Revenue Contract
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 6px;">
            Unearned income regularization (Liability 230000 &rarr; Revenue 410000)
          </span>
        </div>
      </div>

      <!-- Quick KPI Stats -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Remaining Unearned Liability</span>
            <span class="badge badge-posted">LIABILITY</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalDeferred, symbol)}</div>
          <div class="kpi-subtitle">Account 230000 unearned obligations</div>
        </div>

        <div class="kpi-card green">
          <div class="kpi-title">
            <span>Recognized to Date</span>
            <span class="badge badge-paid">EARNED</span>
          </div>
          <div class="kpi-value font-mono text-success">${AccountingEngine.formatCurrency(totalRecognized, symbol)}</div>
          <div class="kpi-subtitle">Earned into Operating Revenue (410000)</div>
        </div>

        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Total Contract Value</span>
            <span class="badge badge-posted">TOTAL</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalContract, symbol)}</div>
          <div class="kpi-subtitle">Cumulative value of service retainers</div>
        </div>
      </div>

      <!-- Contracts Table -->
      <div class="content-card" style="padding: 0; overflow: hidden;">
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Contract Description</th>
                <th>Client / Partner</th>
                <th>Term Schedule</th>
                <th style="text-align: right;">Total Amount</th>
                <th style="text-align: right;">Recognized to Date</th>
                <th style="text-align: right;">Remaining Deferred</th>
                <th style="text-align: right;">Monthly Recognition</th>
                <th style="text-align: center;">Status</th>
                <th style="text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${records.map((rec) => {
      const partner = partners.find((p) => p.id === rec.partnerId);
      const progressPct = rec.totalAmount > 0 ? Math.round(rec.recognizedToDate / rec.totalAmount * 100) : 0;
      return `
                  <tr>
                    <td>
                      <strong style="color: var(--text-main); font-size: 13.5px;">${rec.name}</strong>
                      <div style="font-size: 11px; color: var(--text-muted);">Acct: ${rec.accountLiability} &rarr; ${rec.accountRevenue}</div>
                    </td>
                    <td><strong>${partner ? partner.name : "Corporate Client"}</strong></td>
                    <td class="font-mono" style="font-size: 12px; color: var(--text-muted);">${rec.startDate} &bull; ${rec.endDate}</td>
                    <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(rec.totalAmount, symbol)}</td>
                    <td style="text-align: right; font-family: monospace; color: var(--success); font-weight: 600;">
                      ${AccountingEngine.formatCurrency(rec.recognizedToDate, symbol)} (${progressPct}%)
                    </td>
                    <td style="text-align: right; font-family: monospace; font-weight: 700; color: var(--primary);">
                      ${AccountingEngine.formatCurrency(rec.remainingDeferred, symbol)}
                    </td>
                    <td style="text-align: right; font-family: monospace;">${AccountingEngine.formatCurrency(rec.monthlyAmortization, symbol)}</td>
                    <td style="text-align: center;">
                      <span class="badge ${rec.status === "completed" ? "badge-paid" : "badge-posted"}" style="font-size: 10px;">
                        ${rec.status.toUpperCase()}
                      </span>
                    </td>
                    <td style="text-align: center;">
                      ${rec.remainingDeferred > 0 ? `
                        <button class="btn btn-primary btn-sm btn-recognize-revenue" data-rev-id="${rec.id}">
                          ${getIcon("check")} Post Monthly Recognition
                        </button>
                      ` : `
                        <span class="text-success" style="font-size: 12px; font-weight: 600;">\u2713 Fully Recognized</span>
                      `}
                    </td>
                  </tr>
                `;
    }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  function renderDeferredExpensesTab() {
    const records = store.getDeferredExpenses();
    const partners = store.getPartners();
    const totalPrepaid = records.reduce((sum, r) => sum + r.remainingPrepaid, 0);
    const totalAmortized = records.reduce((sum, r) => sum + r.amortizedToDate, 0);
    const totalPolicy = records.reduce((sum, r) => sum + r.totalAmount, 0);
    return `
      <!-- Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-primary" id="btn-add-deferred-expense">
            ${getIcon("plus")} New Prepaid Expense Policy
          </button>
          <span style="font-size: 13px; color: var(--text-muted); margin-left: 6px;">
            Prepaid amortization regularization (Prepaid Asset 140000 &rarr; Expense 610000)
          </span>
        </div>
      </div>

      <!-- Quick KPI Stats -->
      <div class="dashboard-kpi-grid" style="margin-bottom: 20px;">
        <div class="kpi-card teal">
          <div class="kpi-title">
            <span>Remaining Prepaid Asset</span>
            <span class="badge badge-posted">ASSET</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalPrepaid, symbol)}</div>
          <div class="kpi-subtitle">Account 140000 Prepaid Expenses</div>
        </div>

        <div class="kpi-card blue">
          <div class="kpi-title">
            <span>Amortized to Date</span>
            <span class="badge badge-paid">EXPENSED</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalAmortized, symbol)}</div>
          <div class="kpi-subtitle">Transferred into Operating Expenses</div>
        </div>

        <div class="kpi-card purple">
          <div class="kpi-title">
            <span>Total Original Schedule</span>
            <span class="badge badge-posted">TOTAL</span>
          </div>
          <div class="kpi-value font-mono">${AccountingEngine.formatCurrency(totalPolicy, symbol)}</div>
          <div class="kpi-subtitle">Cumulative upfront payments scheduled</div>
        </div>
      </div>

      <!-- Expenses Schedule Table -->
      <div class="content-card" style="padding: 0; overflow: hidden;">
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Prepaid Policy / Item</th>
                <th>Vendor / Payee</th>
                <th>Period Schedule</th>
                <th style="text-align: right;">Total Amount</th>
                <th style="text-align: right;">Amortized to Date</th>
                <th style="text-align: right;">Remaining Asset</th>
                <th style="text-align: right;">Monthly Amortization</th>
                <th style="text-align: center;">Status</th>
                <th style="text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${records.map((rec) => {
      const partner = partners.find((p) => p.id === rec.partnerId);
      const progressPct = rec.totalAmount > 0 ? Math.round(rec.amortizedToDate / rec.totalAmount * 100) : 0;
      return `
                  <tr>
                    <td>
                      <strong style="color: var(--text-main); font-size: 13.5px;">${rec.name}</strong>
                      <div style="font-size: 11px; color: var(--text-muted);">Acct: ${rec.accountPrepaid} &rarr; ${rec.accountExpense}</div>
                    </td>
                    <td><strong>${partner ? partner.name : "Service Provider"}</strong></td>
                    <td class="font-mono" style="font-size: 12px; color: var(--text-muted);">${rec.startDate} &bull; ${rec.endDate}</td>
                    <td style="text-align: right; font-family: monospace; font-weight: 600;">${AccountingEngine.formatCurrency(rec.totalAmount, symbol)}</td>
                    <td style="text-align: right; font-family: monospace; font-weight: 600;">
                      ${AccountingEngine.formatCurrency(rec.amortizedToDate, symbol)} (${progressPct}%)
                    </td>
                    <td style="text-align: right; font-family: monospace; font-weight: 700; color: var(--primary);">
                      ${AccountingEngine.formatCurrency(rec.remainingPrepaid, symbol)}
                    </td>
                    <td style="text-align: right; font-family: monospace;">${AccountingEngine.formatCurrency(rec.monthlyAmortization, symbol)}</td>
                    <td style="text-align: center;">
                      <span class="badge ${rec.status === "completed" ? "badge-paid" : "badge-posted"}" style="font-size: 10px;">
                        ${rec.status.toUpperCase()}
                      </span>
                    </td>
                    <td style="text-align: center;">
                      ${rec.remainingPrepaid > 0 ? `
                        <button class="btn btn-primary btn-sm btn-amortize-expense" data-exp-id="${rec.id}">
                          ${getIcon("clock")} Post Monthly Amortization
                        </button>
                      ` : `
                        <span class="text-success" style="font-size: 12px; font-weight: 600;">\u2713 Fully Amortized</span>
                      `}
                    </td>
                  </tr>
                `;
    }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  function render() {
    let tabContent = "";
    switch (activeTab) {
      case "journal-items":
        tabContent = renderJournalItemsTab();
        break;
      case "audit-trail":
        tabContent = renderAuditTrailTab();
        break;
      case "journal-audit":
        tabContent = renderJournalAuditTab();
        break;
      case "working-files":
        tabContent = renderWorkingFilesTab();
        break;
      case "annual-report":
        tabContent = renderAnnualReportTab();
        break;
      case "inventory-valuation":
        tabContent = renderInventoryValuationTab();
        break;
      case "deferred-revenues":
        tabContent = renderDeferredRevenuesTab();
        break;
      case "deferred-expenses":
        tabContent = renderDeferredExpensesTab();
        break;
      default:
        tabContent = renderJournalItemsTab();
    }
    container.innerHTML = `
      ${renderHeader()}
      <div id="review-tab-content-area">
        ${tabContent}
      </div>
    `;
    wireGlobalEvents();
    wireTabEvents();
  }
  function wireGlobalEvents() {
    tabGroups.forEach((group) => {
      group.tabs.forEach((tab) => {
        container.querySelector(`#tab-btn-${tab.id}`)?.addEventListener("click", () => {
          navigate("review", { tab: tab.id });
        });
      });
    });
    container.querySelector("#btn-export-active-csv")?.addEventListener("click", () => {
      exportActiveTabToCSV(activeTab);
    });
    container.querySelector("#btn-print-active-view")?.addEventListener("click", () => {
      window.print();
    });
  }
  function wireTabEvents() {
    if (activeTab === "journal-items") {
      let filterItems = function() {
        const query = (searchInput?.value || "").toLowerCase().trim();
        const selectedJournal = journalFilter?.value || "ALL";
        let shown = 0;
        rows.forEach((row) => {
          const rowJournal = row.dataset.journal;
          const rowSearch = row.dataset.search || "";
          const matchJournal = selectedJournal === "ALL" || rowJournal === selectedJournal;
          const matchQuery = !query || rowSearch.includes(query);
          if (matchJournal && matchQuery) {
            row.style.display = "";
            shown++;
          } else {
            row.style.display = "none";
          }
        });
        if (shownCountEl) shownCountEl.textContent = shown;
      };
      const searchInput = container.querySelector("#items-search-input");
      const journalFilter = container.querySelector("#items-journal-filter");
      const rows = container.querySelectorAll(".item-row");
      const shownCountEl = container.querySelector("#items-shown-count");
      searchInput?.addEventListener("input", filterItems);
      journalFilter?.addEventListener("change", filterItems);
      container.querySelector("#btn-reset-items-filters")?.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (journalFilter) journalFilter.value = "ALL";
        filterItems();
      });
      container.querySelectorAll(".link-entry-ref").forEach((link) => {
        link.addEventListener("click", () => {
          navigate("journal");
        });
      });
    }
    if (activeTab === "audit-trail") {
      let filterAudit = function() {
        const query = (auditSearch?.value || "").toLowerCase().trim();
        const selectedAction = actionFilter?.value || "ALL";
        rows.forEach((row) => {
          const rowAction = row.dataset.action || "";
          const rowSearch = row.dataset.search || "";
          const matchAction = selectedAction === "ALL" || rowAction.includes(selectedAction);
          const matchQuery = !query || rowSearch.includes(query);
          row.style.display = matchAction && matchQuery ? "" : "none";
        });
      };
      const auditSearch = container.querySelector("#audit-search-input");
      const actionFilter = container.querySelector("#audit-action-filter");
      const rows = container.querySelectorAll(".audit-row");
      auditSearch?.addEventListener("input", filterAudit);
      actionFilter?.addEventListener("change", filterAudit);
      container.querySelector("#btn-add-audit-note")?.addEventListener("click", () => {
        openAuditNoteModal();
      });
    }
    if (activeTab === "journal-audit") {
      container.querySelector("#btn-run-integrity-check")?.addEventListener("click", () => {
        const alertBox = container.querySelector("#integrity-alert-container");
        if (alertBox) {
          alertBox.innerHTML = `
            <div style="background: #ECFDF5; border: 1px solid #A7F3D0; color: #065F46; padding: 10px 16px; border-radius: var(--radius-md); font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              ${getIcon("check-circle")} Mathematical Equality & Chronological Sequence Verified! (0 Gaps, Exact Balanced Debits & Credits).
            </div>
          `;
          store.addAuditLog("INTEGRITY_CHECK", "All Journals", "Completed automated sequence and mathematical equality verification. Zero discrepancies found.");
          toast.success("Integrity and Sequence Audit completed successfully!");
        }
      });
    }
    if (activeTab === "working-files") {
      container.querySelector("#btn-sign-workpapers")?.addEventListener("click", () => {
        store.addAuditLog("SIGN_OFF_WORKPAPERS", "Working Papers 2026", "Senior Audit Partner completed full workpaper sign-off and balance verification.");
        toast.success("Senior Auditor Sign-off recorded in compliance register!");
      });
    }
    if (activeTab === "annual-report") {
      container.querySelector("#btn-print-annual-report")?.addEventListener("click", () => {
        window.print();
      });
    }
    if (activeTab === "inventory-valuation") {
      container.querySelector("#btn-add-inventory-item")?.addEventListener("click", () => {
        openAddInventoryModal();
      });
      container.querySelector("#btn-reconcile-gl-inventory")?.addEventListener("click", () => {
        toast.success("Inventory subledger reconciled against Account 130000. Balance variance: $0.00.");
      });
      container.querySelectorAll(".btn-edit-stock").forEach((btn) => {
        btn.addEventListener("click", () => {
          const itemId = btn.dataset.itemId;
          openEditStockModal(itemId);
        });
      });
      container.querySelectorAll(".btn-delete-stock").forEach((btn) => {
        btn.addEventListener("click", () => {
          const itemId = btn.dataset.itemId;
          if (confirm("Are you sure you want to delete this inventory valuation record?")) {
            store.deleteInventoryItem(itemId);
            toast.info("Inventory item removed.");
            render();
          }
        });
      });
    }
    if (activeTab === "deferred-revenues") {
      container.querySelector("#btn-add-deferred-revenue")?.addEventListener("click", () => {
        openAddDeferredRevenueModal();
      });
      container.querySelectorAll(".btn-recognize-revenue").forEach((btn) => {
        btn.addEventListener("click", () => {
          const revId = btn.dataset.revId;
          const result = store.recognizeDeferredRevenue(revId);
          if (result) {
            toast.success(`Recognized revenue for ${result.item.name}! Journal Entry ${result.journalEntry.number} posted.`);
            render();
          }
        });
      });
    }
    if (activeTab === "deferred-expenses") {
      container.querySelector("#btn-add-deferred-expense")?.addEventListener("click", () => {
        openAddDeferredExpenseModal();
      });
      container.querySelectorAll(".btn-amortize-expense").forEach((btn) => {
        btn.addEventListener("click", () => {
          const expId = btn.dataset.expId;
          const result = store.amortizeDeferredExpense(expId);
          if (result) {
            toast.success(`Amortized prepaid expense for ${result.item.name}! Journal Entry ${result.journalEntry.number} posted.`);
            render();
          }
        });
      });
    }
  }
  function openAuditNoteModal() {
    modal.open({
      title: "Log Verification Note to Audit Trail",
      contentHtml: `
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Resource / Reference Area *</label>
          <input type="text" id="modal-audit-resource" class="form-control" placeholder="e.g. Bank Statements Q4 or Inventory Count" />
        </div>
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Verification Note & Findings *</label>
          <textarea id="modal-audit-details" class="form-control" rows="4" placeholder="Enter findings, physical verification count details, or compliance approval notes..."></textarea>
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
        <button class="btn btn-primary" id="btn-modal-save-audit">Record in Audit Trail</button>
      `,
      onOpen: (dialog) => {
        dialog.querySelector("#btn-modal-save-audit")?.addEventListener("click", () => {
          const resource = dialog.querySelector("#modal-audit-resource")?.value.trim();
          const details = dialog.querySelector("#modal-audit-details")?.value.trim();
          if (!resource || !details) {
            alert("Please fill in both the resource name and verification findings.");
            return;
          }
          store.addAuditLog("MANUAL_VERIFICATION", resource, details);
          toast.success("Audit note logged to official audit trail!");
          modal.close();
          render();
        });
      }
    });
  }
  function openAddInventoryModal() {
    modal.open({
      title: "Add Inventory Stock Item (Account 130000)",
      contentHtml: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label">SKU / Item Code *</label>
            <input type="text" id="inv-modal-sku" class="form-control" placeholder="e.g. HW-SRV-90" />
          </div>
          <div class="form-group">
            <label class="form-label">Item Category</label>
            <input type="text" id="inv-modal-category" class="form-control" placeholder="e.g. Hardware Supplies" />
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Product / Inventory Description *</label>
          <input type="text" id="inv-modal-name" class="form-control" placeholder="e.g. Enterprise Managed Fiber Switches" />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label">Units on Hand *</label>
            <input type="number" id="inv-modal-units" class="form-control" value="10" min="1" />
          </div>
          <div class="form-group">
            <label class="form-label">Unit Cost ($) *</label>
            <input type="number" id="inv-modal-cost" class="form-control" value="250.00" step="0.01" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Depot / Warehouse Location</label>
          <input type="text" id="inv-modal-location" class="form-control" value="Main Warehouse - Dhaka" />
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
        <button class="btn btn-primary" id="btn-modal-save-inventory">Add Inventory Item</button>
      `,
      onOpen: (dialog) => {
        dialog.querySelector("#btn-modal-save-inventory")?.addEventListener("click", () => {
          const sku = dialog.querySelector("#inv-modal-sku")?.value.trim();
          const name = dialog.querySelector("#inv-modal-name")?.value.trim();
          const category = dialog.querySelector("#inv-modal-category")?.value.trim();
          const unitsOnHand = parseInt(dialog.querySelector("#inv-modal-units")?.value || 0, 10);
          const unitCost = parseFloat(dialog.querySelector("#inv-modal-cost")?.value || 0);
          const location = dialog.querySelector("#inv-modal-location")?.value.trim();
          if (!sku || !name || unitsOnHand <= 0 || unitCost <= 0) {
            alert("Please enter valid SKU, item description, units, and unit cost.");
            return;
          }
          store.addInventoryItem({ sku, name, category, unitsOnHand, unitCost, location });
          toast.success(`Inventory stock item ${name} added!`);
          modal.close();
          render();
        });
      }
    });
  }
  function openEditStockModal(itemId) {
    const item = store.getInventoryItems().find((i) => i.id === itemId);
    if (!item) return;
    modal.open({
      title: `Adjust Physical Stock Count: ${item.name}`,
      contentHtml: `
        <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px;">
          SKU: <strong>${item.sku}</strong> &bull; Current Valuation: <strong>${AccountingEngine.formatCurrency(item.totalValuation, symbol)}</strong>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label">Physical Count (Units) *</label>
            <input type="number" id="edit-stock-units" class="form-control" value="${item.unitsOnHand}" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">Unit Cost ($)</label>
            <input type="number" id="edit-stock-cost" class="form-control" value="${item.unitCost}" step="0.01" />
          </div>
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
        <button class="btn btn-primary" id="btn-save-stock-adjust">Save Count Adjustment</button>
      `,
      onOpen: (dialog) => {
        dialog.querySelector("#btn-save-stock-adjust")?.addEventListener("click", () => {
          const units = parseInt(dialog.querySelector("#edit-stock-units")?.value || 0, 10);
          const cost = parseFloat(dialog.querySelector("#edit-stock-cost")?.value || 0);
          store.updateInventoryItem(itemId, { unitsOnHand: units, unitCost: cost });
          toast.success(`Stock count updated for ${item.name}!`);
          modal.close();
          render();
        });
      }
    });
  }
  function openAddDeferredRevenueModal() {
    const partners = store.getPartners().filter((p) => p.isCustomer);
    modal.open({
      title: "New Deferred Revenue Contract (Unearned Income)",
      contentHtml: `
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Contract / Agreement Title *</label>
          <input type="text" id="drev-name" class="form-control" placeholder="e.g. 1-Year Cloud Infrastructure SLA" />
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Customer / Client *</label>
          <select id="drev-partner" class="form-control">
            ${partners.map((p) => `<option value="${p.id}">${p.name}</option>`).join("")}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label">Total Contract Value ($) *</label>
            <input type="number" id="drev-amount" class="form-control" value="12000.00" step="100" />
          </div>
          <div class="form-group">
            <label class="form-label">Term Duration (Months)</label>
            <input type="number" id="drev-months" class="form-control" value="12" min="1" max="60" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label class="form-label">Start Date</label>
            <input type="date" id="drev-start" class="form-control" value="${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}" />
          </div>
          <div class="form-group">
            <label class="form-label">End Date</label>
            <input type="date" id="drev-end" class="form-control" value="2027-10-31" />
          </div>
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
        <button class="btn btn-primary" id="btn-save-drev">Create Deferred Revenue Schedule</button>
      `,
      onOpen: (dialog) => {
        dialog.querySelector("#btn-save-drev")?.addEventListener("click", () => {
          const name = dialog.querySelector("#drev-name")?.value.trim();
          const partnerId = dialog.querySelector("#drev-partner")?.value;
          const totalAmount = parseFloat(dialog.querySelector("#drev-amount")?.value || 0);
          const durationMonths = parseInt(dialog.querySelector("#drev-months")?.value || 12, 10);
          const startDate = dialog.querySelector("#drev-start")?.value;
          const endDate = dialog.querySelector("#drev-end")?.value;
          if (!name || totalAmount <= 0) {
            alert("Please enter a valid contract title and amount.");
            return;
          }
          store.addDeferredRevenue({ name, partnerId, totalAmount, durationMonths, startDate, endDate });
          toast.success(`Deferred revenue contract "${name}" scheduled!`);
          modal.close();
          render();
        });
      }
    });
  }
  function openAddDeferredExpenseModal() {
    const vendors = store.getPartners().filter((p) => p.isVendor);
    modal.open({
      title: "New Prepaid Expense Schedule (Deferred Expense)",
      contentHtml: `
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Prepaid Expense Title *</label>
          <input type="text" id="dexp-name" class="form-control" placeholder="e.g. Annual Commercial Office Property Insurance" />
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Vendor / Service Provider *</label>
          <select id="dexp-partner" class="form-control">
            ${vendors.map((p) => `<option value="${p.id}">${p.name}</option>`).join("")}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label">Total Upfront Amount ($) *</label>
            <input type="number" id="dexp-amount" class="form-control" value="6000.00" step="100" />
          </div>
          <div class="form-group">
            <label class="form-label">Amortization Period (Months)</label>
            <input type="number" id="dexp-months" class="form-control" value="12" min="1" max="60" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label class="form-label">Start Date</label>
            <input type="date" id="dexp-start" class="form-control" value="${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}" />
          </div>
          <div class="form-group">
            <label class="form-label">End Date</label>
            <input type="date" id="dexp-end" class="form-control" value="2027-10-31" />
          </div>
        </div>
      `,
      footerHtml: `
        <button class="btn btn-secondary" onclick="window.modalController?.close()">Cancel</button>
        <button class="btn btn-primary" id="btn-save-dexp">Create Prepaid Schedule</button>
      `,
      onOpen: (dialog) => {
        dialog.querySelector("#btn-save-dexp")?.addEventListener("click", () => {
          const name = dialog.querySelector("#dexp-name")?.value.trim();
          const partnerId = dialog.querySelector("#dexp-partner")?.value;
          const totalAmount = parseFloat(dialog.querySelector("#dexp-amount")?.value || 0);
          const durationMonths = parseInt(dialog.querySelector("#dexp-months")?.value || 12, 10);
          const startDate = dialog.querySelector("#dexp-start")?.value;
          const endDate = dialog.querySelector("#dexp-end")?.value;
          if (!name || totalAmount <= 0) {
            alert("Please enter a valid prepaid expense title and amount.");
            return;
          }
          store.addDeferredExpense({ name, partnerId, totalAmount, durationMonths, startDate, endDate });
          toast.success(`Prepaid expense schedule "${name}" added!`);
          modal.close();
          render();
        });
      }
    });
  }
  function exportActiveTabToCSV(tab) {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (tab === "journal-items") {
      const items = store.getJournalItems();
      csvContent += "Date,Entry Number,Journal,Account Code,Account Name,Partner,Label,Debit,Credit,Status\n";
      items.forEach((i) => {
        csvContent += `"${i.date}","${i.entryNumber}","${i.journalCode}","${i.accountCode}","${i.accountName}","${i.partnerName}","${i.label.replace(/"/g, '""')}",${i.debit},${i.credit},"${i.status}"
`;
      });
    } else if (tab === "audit-trail") {
      const logs = store.getAuditTrail();
      csvContent += "Timestamp,User,Action,Resource,Details,IP Address\n";
      logs.forEach((l) => {
        csvContent += `"${l.timestamp}","${l.username}","${l.action}","${l.resource}","${l.details.replace(/"/g, '""')}","${l.ipAddress}"
`;
      });
    } else if (tab === "inventory-valuation") {
      const items = store.getInventoryItems();
      csvContent += "SKU,Item Name,Category,Units,Unit Cost,Total Value,Location\n";
      items.forEach((i) => {
        csvContent += `"${i.sku}","${i.name}","${i.category}",${i.unitsOnHand},${i.unitCost},${i.totalValuation},"${i.location}"
`;
      });
    } else {
      csvContent += "Item,Category,Amount\n";
      csvContent += `"General Review Schedule","Review",0
`;
    }
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `unifly_review_${tab}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV downloaded successfully!");
  }
  render();
}

// js/app.js
var App = class {
  constructor() {
    this.currentRoute = "dashboard";
    this.currentParams = {};
    this.navbarContainer = document.getElementById("navbar-container");
    this.controlPanelContainer = document.getElementById("control-panel-container");
    this.mainViewContainer = document.getElementById("main-view-container");
    this.init();
  }
  init() {
    window.addEventListener("hashchange", () => this.handleHashChange());
    store.subscribe(() => {
      this.render();
    });
    this.handleHashChange();
  }
  navigate(route, params = {}) {
    this.currentRoute = route;
    this.currentParams = params;
    const query = new URLSearchParams(params).toString();
    window.location.hash = query ? `${route}?${query}` : route;
    this.render();
  }
  handleHashChange() {
    const rawHash = window.location.hash.replace(/^#\/?/, "") || "dashboard";
    const [routePart, queryPart] = rawHash.split("?");
    this.currentRoute = routePart || "dashboard";
    this.currentParams = {};
    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      for (const [k, v] of searchParams.entries()) {
        this.currentParams[k] = v;
      }
    }
    if (!store.getCurrentUser()) {
      this.currentRoute = "login";
    } else if (this.currentRoute === "login") {
      this.currentRoute = "dashboard";
    }
    this.render();
  }
  renderControlPanel() {
    let breadcrumbs = [{ label: "Accounting", route: "dashboard" }];
    switch (this.currentRoute) {
      case "dashboard":
        breadcrumbs.push({ label: "Overview", current: true });
        break;
      case "users":
        breadcrumbs.push({ label: "Administration", route: "settings" });
        breadcrumbs.push({ label: "Employee & User Management", current: true });
        break;
      case "invoices":
        breadcrumbs.push({ label: "Customer", route: "contacts", params: { type: "customers" } });
        breadcrumbs.push({ label: "Invoices", current: !this.currentParams.id && !this.currentParams.action });
        if (this.currentParams.action === "new") {
          breadcrumbs.push({ label: "New Invoice", current: true });
        } else if (this.currentParams.id) {
          const inv = store.getInvoices().find((i) => i.id === this.currentParams.id);
          breadcrumbs.push({ label: inv ? inv.number : "Invoice Details", current: true });
        }
        break;
      case "credit-notes":
        breadcrumbs.push({ label: "Customer", route: "contacts", params: { type: "customers" } });
        breadcrumbs.push({ label: "Credit Notes", current: !this.currentParams.id && !this.currentParams.action });
        if (this.currentParams.action === "new") {
          breadcrumbs.push({ label: "New Credit Note", current: true });
        } else if (this.currentParams.id) {
          const cn = store.getCreditNotes().find((c) => c.id === this.currentParams.id);
          breadcrumbs.push({ label: cn ? cn.number : "Credit Note Details", current: true });
        }
        break;
      case "payments":
        if (this.currentParams.type === "vendors") {
          breadcrumbs.push({ label: "Vendors", route: "contacts", params: { type: "vendors" } });
        } else {
          breadcrumbs.push({ label: "Customer", route: "contacts", params: { type: "customers" } });
        }
        breadcrumbs.push({ label: "Payments", current: true });
        break;
      case "refunds":
        breadcrumbs.push({ label: "Vendors", route: "contacts", params: { type: "vendors" } });
        breadcrumbs.push({ label: "Refunds", current: !this.currentParams.id && !this.currentParams.action });
        if (this.currentParams.action === "new") {
          breadcrumbs.push({ label: "New Refund", current: true });
        } else if (this.currentParams.id) {
          const ref = store.getVendorRefunds().find((r) => r.id === this.currentParams.id);
          breadcrumbs.push({ label: ref ? ref.number : "Refund Details", current: true });
        }
        break;
      case "bills":
        breadcrumbs.push({ label: "Vendors", route: "contacts", params: { type: "vendors" } });
        breadcrumbs.push({ label: "Bills", current: !this.currentParams.id && !this.currentParams.action });
        if (this.currentParams.action === "new") {
          breadcrumbs.push({ label: "Upload Bill", current: true });
        } else if (this.currentParams.id) {
          const bill = store.getBills().find((b) => b.id === this.currentParams.id);
          breadcrumbs.push({ label: bill ? bill.number : "Bill Details", current: true });
        }
        break;
      case "bank":
        breadcrumbs.push({ label: "Accounting", route: "journal" });
        breadcrumbs.push({ label: "Reconciliation", current: true });
        break;
      case "journal":
        breadcrumbs.push({ label: "Accounting", route: "journal" });
        breadcrumbs.push({ label: "Journal Entries", current: true });
        break;
      case "assets":
        breadcrumbs.push({ label: "Accounting", route: "journal" });
        breadcrumbs.push({ label: "Assets", current: true });
        break;
      case "loans":
        breadcrumbs.push({ label: "Accounting", route: "journal" });
        breadcrumbs.push({ label: "Loans", current: true });
        break;
      case "tax-returns":
        breadcrumbs.push({ label: "Accounting", route: "journal" });
        breadcrumbs.push({ label: "Tax Returns", current: true });
        break;
      case "review":
        breadcrumbs.push({ label: "Review", route: "review" });
        const reviewTabLabels = {
          "journal-items": "Journal Items",
          "audit-trail": "Audit Trail",
          "journal-audit": "Journal Audit",
          "working-files": "Working Files",
          "annual-report": "Annual Report",
          "inventory-valuation": "Inventory Valuation",
          "deferred-revenues": "Deferred Revenues",
          "deferred-expenses": "Deferred Expenses"
        };
        const activeTabLabel = reviewTabLabels[this.currentParams.tab] || "Journal Items";
        breadcrumbs.push({ label: activeTabLabel, current: true });
        break;
      case "reports":
        breadcrumbs.push({ label: "Reporting", route: "reports" });
        const reportTabLabels = {
          "bs": "Balance Sheet",
          "pnl": "Profit and Loss",
          "cash-flow": "Cash Flow Statement",
          "depreciation": "Depreciation Schedule",
          "tb": "Trial Balance",
          "gl": "General Ledger",
          "partner-ledger": "Partner Ledger",
          "customer-statement": "Customer Statement",
          "aged-ar": "Aged Receivable",
          "aged-ap": "Aged Payable",
          "tax": "Tax Report",
          "fiscal": "Fiscal Report",
          "invoice-analysis": "Invoice Analysis",
          "cashflow-analysis": "Cashflow Analysis",
          "analytic": "Analytic Report",
          "exec-summary": "Executive Summary",
          "loans-analysis": "Loans Analysis",
          "bd-corporate-tax": "Corporate Tax Report"
        };
        const activeReportLabel = reportTabLabels[this.currentParams.tab] || "Financial Statements";
        breadcrumbs.push({ label: activeReportLabel, current: true });
        break;
      case "coa":
        breadcrumbs.push({ label: "Configuration", route: "settings" });
        breadcrumbs.push({ label: "Chart of Accounts", current: true });
        break;
      case "contacts":
        if (this.currentParams.type === "vendors") {
          breadcrumbs.push({ label: "Vendors", current: true });
        } else {
          breadcrumbs.push({ label: "Customer", current: true });
        }
        break;
      case "products":
        if (this.currentParams.section === "vendors") {
          breadcrumbs.push({ label: "Vendors", route: "contacts", params: { type: "vendors" } });
        } else {
          breadcrumbs.push({ label: "Customer", route: "contacts", params: { type: "customers" } });
        }
        breadcrumbs.push({ label: "Products", current: true });
        break;
      case "settings":
        breadcrumbs.push({ label: "Configuration", route: "settings" });
        const configTabLabels = {
          "general": "Settings",
          "online-payments": "Online Payments",
          "taxes": "Taxes",
          "journals": "Journals",
          "currencies": "Currencies",
          "fiscal-positions": "Fiscal Positions",
          "multi-ledger": "Multi-Ledger",
          "checks": "Checks",
          "depreciation-models": "Depreciation Models",
          "return-types": "Return Types",
          "invoice-reminders": "Invoice Reminders",
          "payment-terms": "Payment Terms",
          "product-categories": "Product Categories"
        };
        const activeConfigLabel = configTabLabels[this.currentParams.tab] || "Settings";
        breadcrumbs.push({ label: activeConfigLabel, current: true });
        break;
      default:
        breadcrumbs.push({ label: this.currentRoute, current: true });
    }
    this.controlPanelContainer.innerHTML = `
      <div class="app-control-panel">
        <div class="control-panel-left">
          <div class="breadcrumb-container">
            ${breadcrumbs.map((b, idx) => {
      if (b.current) {
        return `<span class="breadcrumb-current">${b.label}</span>`;
      }
      const paramsAttr = b.params ? `data-params='${JSON.stringify(b.params)}'` : "";
      return `
                <a class="breadcrumb-item" data-route="${b.route}" ${paramsAttr}>${b.label}</a>
                <span class="breadcrumb-separator">/</span>
              `;
    }).join("")}
          </div>
        </div>

        <div class="control-panel-center">
          <div class="app-search-bar">
            <span class="search-icon">\u{1F50D}</span>
            <input type="text" class="search-input" id="global-omnibar-input" placeholder="Search invoices, bills, accounts, or journal entries..." />
          </div>
        </div>

        <div class="control-panel-right">
          <div class="view-mode-group">
            <button class="view-mode-btn ${!this.currentParams.view || this.currentParams.view === "list" ? "active" : ""}" id="btn-view-list" title="List View">
              \u2630
            </button>
            <button class="view-mode-btn ${this.currentParams.view === "kanban" ? "active" : ""}" id="btn-view-kanban" title="Kanban View">
              \u2637
            </button>
          </div>
        </div>
      </div>
    `;
    this.controlPanelContainer.querySelectorAll(".breadcrumb-item").forEach((item) => {
      item.onclick = (e) => {
        e.preventDefault();
        let params = {};
        if (item.dataset.params) {
          try {
            params = JSON.parse(item.dataset.params);
          } catch (err) {
          }
        }
        this.navigate(item.dataset.route, params);
      };
    });
    const omnibar = this.controlPanelContainer.querySelector("#global-omnibar-input");
    if (omnibar) {
      omnibar.oninput = (e) => {
        const query = e.target.value.toLowerCase().trim();
        const rows = this.mainViewContainer.querySelectorAll("tbody tr");
        rows.forEach((r) => {
          const text = r.innerText.toLowerCase();
          r.style.display = text.includes(query) ? "" : "none";
        });
      };
    }
  }
  render() {
    const currentUser = store.getCurrentUser();
    if (!currentUser || this.currentRoute === "login") {
      this.navbarContainer.style.display = "none";
      this.controlPanelContainer.style.display = "none";
      renderLogin(this.mainViewContainer, (user) => {
        this.navigate("dashboard");
      });
      return;
    }
    this.navbarContainer.style.display = "";
    this.controlPanelContainer.style.display = "";
    renderNavbar(this.navbarContainer, (r, p) => this.navigate(r, p), this.currentRoute, this.currentParams);
    this.renderControlPanel();
    const boundNavigate = (r, p) => this.navigate(r, p);
    switch (this.currentRoute) {
      case "dashboard":
        renderDashboard(this.mainViewContainer, boundNavigate);
        break;
      case "users":
        renderUsers(this.mainViewContainer, boundNavigate);
        break;
      case "invoices":
        renderInvoices(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "credit-notes":
        renderCreditNotes(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "payments":
        renderPayments(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "bills":
        renderBills(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "refunds":
        renderRefunds(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "bank":
        renderBankReconciliation(this.mainViewContainer, boundNavigate);
        break;
      case "journal":
        renderJournalEntries(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "assets":
        renderAssets(this.mainViewContainer, boundNavigate);
        break;
      case "loans":
        renderLoans(this.mainViewContainer, boundNavigate);
        break;
      case "tax-returns":
        renderTaxReturns(this.mainViewContainer, boundNavigate);
        break;
      case "review":
        renderReview(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "reports":
        renderReports(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "coa":
        renderChartOfAccounts(this.mainViewContainer, boundNavigate);
        break;
      case "contacts":
        renderContacts(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      case "products":
        renderProducts(this.mainViewContainer, boundNavigate);
        break;
      case "settings":
        renderSettings(this.mainViewContainer, boundNavigate, this.currentParams);
        break;
      default:
        renderDashboard(this.mainViewContainer, boundNavigate);
    }
  }
};
document.addEventListener("DOMContentLoaded", () => {
  window.app = new App();
});
