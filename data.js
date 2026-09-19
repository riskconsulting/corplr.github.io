// ==============================================================================
// ADAPTIVE AI AUDIT & RISK CONSULTANT - MASTER DATA & KNOWLEDGE BASE
// Client: NexGen Electric Mobility Pvt. Ltd. (NexGen EV) | Benchmark: Indian EV Automotive & MSME Audit Standards
// ==============================================================================

// ------------------------------------------------------------------------------
// 1. CLIENT SCOPING CHECKLIST (12 Core Planning Dimensions for MSMEs)
// ------------------------------------------------------------------------------
const clientScopingChecklist = [
  {
    id: "SCP-01",
    processArea: "Entity Level Controls",
    question: "How many people are involved in finance/accounts? Is there any segregation of duties at all? Who is the ultimate decision-maker?",
    applicable: true,
    clientNotes: "Accounts team of 4 (Accountant, Accounts Executive, Stores Billing, CFO). Managing Director is ultimate signatory for payments > ₹10L. Moderate SoD constraints exist.",
    systemUsed: "Tally ERP 9, Manual Vouchers"
  },
  {
    id: "SCP-02",
    processArea: "Revenue & Receivables",
    question: "Does the client sell goods, services, or both? On credit, cash, or online/marketplace? Is GST e-invoicing applicable (turnover threshold)?",
    applicable: true,
    clientNotes: "100% manufactured automotive components sold to 12 OEM/Tier-1 clients on 45-60 days credit. Turnover ~₹80 Cr, therefore GST e-invoicing (IRN) and E-way bill mandatory.",
    systemUsed: "Tally, NIC E-invoice Portal, E-way Bill Portal"
  },
  {
    id: "SCP-03",
    processArea: "Purchase & Payables",
    question: "Are purchases domestic only, or also import? Is there a formal PO system or informal ordering (phone/WhatsApp)?",
    applicable: true,
    clientNotes: "Domestic steel, forgings, fasteners and consumables (~85 vendors). Formal PO system with 4-tier approval matrix; occasional informal emergency orders via WhatsApp ratified later.",
    systemUsed: "Tally, Excel Purchase Register"
  },
  {
    id: "SCP-04",
    processArea: "Inventory Management",
    question: "Does the client hold physical inventory (trading/manufacturing) or is it a pure services business with no inventory?",
    applicable: true,
    clientNotes: "Heavy raw material (steel rounds/billets), work-in-progress on machine shop floor, and finished auto components. Stores maintains physical stock cards and gate pass registers.",
    systemUsed: "Tally Stock Ledger, Manual Gate Passes"
  },
  {
    id: "SCP-05",
    processArea: "Payroll & HR",
    question: "Headcount and whether PF/ESI thresholds are crossed; use of a payroll software/outsourced payroll processor; contract labour used?",
    applicable: true,
    clientNotes: "~220 staff total (70 permanent staff + ~150 factory contract workmen via 2 labour contractors). PF, ESI, Factory Act & Labour Welfare Fund fully applicable.",
    systemUsed: "Excel Payroll Computation, Bank Bulk NEFT"
  },
  {
    id: "SCP-06",
    processArea: "Fixed Assets & Capex",
    question: "Nature and scale of fixed assets (owned premises, plant & machinery, vehicles); any assets under lease/hire purchase?",
    applicable: true,
    clientNotes: "Owned factory building in Pune industrial belt, 14 CNC/VMC machining centres, heat treatment line, testing lab. High capex intensity (~₹22 Cr net block).",
    systemUsed: "Tally Fixed Asset Ledger, Excel FAR"
  },
  {
    id: "SCP-07",
    processArea: "Cash & Bank",
    question: "Proportion of cash transactions vs banking channel; number of bank accounts and authorised signatories; use of digital payment apps (UPI/POS)?",
    applicable: true,
    clientNotes: "99% digital banking (RTGS/NEFT/Cheque) via HDFC & SBI operative accounts. Petty cash limit ₹50,000 for factory incidental expenses. Dual signatories above ₹2L.",
    systemUsed: "Corporate Internet Banking, Petty Cash Register"
  },
  {
    id: "SCP-08",
    processArea: "Statutory Compliance",
    question: "Legal form (proprietorship/partnership/LLP/Pvt Ltd); GST registration type (regular/composition); applicable labour law registrations; Udyam/MSME registration status.",
    applicable: true,
    clientNotes: "Private Limited Company incorporated under Companies Act 2013. Regular GST registration, registered as Medium Enterprise under Udyam (UDYAM-MH-12-0034567).",
    systemUsed: "GSTN, Traces TDS, MCA21"
  },
  {
    id: "SCP-09",
    processArea: "IT General Controls",
    question: "What accounting software/ERP is used (Tally, Zoho, SAP B1, Busy, etc.)? Cloud or on-premise? Any dedicated IT resource?",
    applicable: true,
    clientNotes: "Tally ERP 9 running on a local Windows Server with weekly external hard-drive backups. 1 external IT vendor for AMC; no dedicated internal IT security staff.",
    systemUsed: "On-premise Windows Server, Tally ERP 9"
  },
  {
    id: "SCP-10",
    processArea: "Related Party & Loans",
    question: "Are there group/associate entities or common directors/promoters with other businesses? Any promoter loans in/out?",
    applicable: true,
    clientNotes: "Promoter family holds 1 sister partnership firm supplying packaging boxes and 1 machining job-work associate. Unsecured director loan ₹1.2 Cr standing in books.",
    systemUsed: "General Ledger, Loan Register"
  },
  {
    id: "SCP-11",
    processArea: "Financial Closing & Reporting",
    question: "Is there a monthly close process or only a year-end close at the time of audit/tax filing? Who reviews financials before finalisation?",
    applicable: true,
    clientNotes: "Quarterly management MIS prepared for bank working capital limits; formal comprehensive financial closing done annually for statutory audit and tax audit.",
    systemUsed: "Excel MIS, Tally Trial Balance"
  },
  {
    id: "SCP-12",
    processArea: "Other / Industry-Specific",
    question: "Any industry-specific processes not covered above (e.g. exports, e-commerce, manufacturing shop-floor, EPC/contracts, NBFC lending)?",
    applicable: true,
    clientNotes: "Automotive OEM PPAP (Production Part Approval Process), customer rejection/scrap reconciliation, tool & die amortisation.",
    systemUsed: "Quality Inspection Reports, Scrap Vouchers"
  }
];

// ------------------------------------------------------------------------------
// 2. DATA REQUEST LIST (19 Standard Extracts with Priority & Linked CAAT Tests)
// ------------------------------------------------------------------------------
const standardDataRequestList = [
  {
    id: "DRL-01",
    fileName: "Sales Register / Invoice Listing",
    fileType: "Excel / CSV",
    recommendedFields: "Invoice No, Invoice Date, Customer Name/ID, Customer GSTIN, Item, Qty, Rate, Taxable Value, GST Amount, Total Amount, Sales Person, Delivery Date, Payment Terms",
    enablesTests: "DA-03, DA-04, DA-05, DA-17, DA-18, DA-21, DA-24, DA-30, DA-31, DA-32",
    linkedControls: "REV-C01 to REV-C07",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-02",
    fileName: "Purchase Register / AP Sub-ledger",
    fileType: "Excel / CSV",
    recommendedFields: "Invoice No, Invoice Date, Vendor Name/ID, Vendor GSTIN, PO No, GRN No, Item, Qty, Rate, Taxable Value, GST, TDS, Total Amount",
    enablesTests: "DA-01, DA-02, DA-04, DA-16, DA-17, DA-20, DA-22",
    linkedControls: "PUR-C01 to PUR-C07",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-03",
    fileName: "Purchase Order (PO) Register",
    fileType: "Excel / CSV",
    recommendedFields: "PO No, PO Date, Vendor, Item, Qty, Amount, Approver, Approval Date",
    enablesTests: "DA-06, DA-15, DA-16",
    linkedControls: "PUR-C02, PUR-C06, PUR-C07",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-04",
    fileName: "Goods Receipt Note (GRN) / Service Completion Register",
    fileType: "Excel / CSV",
    recommendedFields: "GRN No, PO No, Date, Item, Quantity Received, Received By",
    enablesTests: "DA-16",
    linkedControls: "PUR-C02, PUR-C07",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-05",
    fileName: "General Ledger / Journal Entry Listing",
    fileType: "Excel / CSV",
    recommendedFields: "JE No, Posting Date, Posting Timestamp, User ID/Preparer, Approver, Account Code, Account Name, Debit, Credit, Narration",
    enablesTests: "DA-05, DA-07, DA-08, DA-09, DA-10, DA-11, DA-12, DA-32",
    linkedControls: "all JE-C01 to JE-C06, FR-C01, ELC-C01",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-06",
    fileName: "Trial Balance (multi-period: monthly or YoY)",
    fileType: "Excel / CSV",
    recommendedFields: "Account Code, Account Name, Period, Opening Balance, Debit, Credit, Closing Balance",
    enablesTests: "DA-32",
    linkedControls: "ELC-C04, FR-C02, FR-C04, EXP-C02",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-07",
    fileName: "Bank Statement(s) - all operative accounts",
    fileType: "PDF / Excel",
    recommendedFields: "Date, Description/Narration, Debit, Credit, Balance, Reference/Cheque No, Value Date",
    enablesTests: "DA-01, DA-06, DA-07, DA-28",
    linkedControls: "CB-C02, CB-C03, CB-C05",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-08",
    fileName: "Cash Book / Petty Cash Register",
    fileType: "Excel / CSV",
    recommendedFields: "Date, Voucher No, Party, Amount, Mode, Purpose, Approved By",
    enablesTests: "DA-28",
    linkedControls: "CB-C01, CB-C05, RPT-C02",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-09",
    fileName: "Vendor Master",
    fileType: "Excel / CSV",
    recommendedFields: "Vendor ID, Name, PAN, GSTIN, Bank Account No, IFSC, Address, Phone, Email, Date Created, Last Modified",
    enablesTests: "DA-13, DA-14, DA-19, DA-29",
    linkedControls: "PUR-C01, PUR-C05, RPT-C01, RPT-C03",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-10",
    fileName: "Customer Master",
    fileType: "Excel / CSV",
    recommendedFields: "Customer ID, Name, PAN, GSTIN, Credit Limit, Bank Details (for refunds), Address, Date Created, Last Modified",
    enablesTests: "DA-19, DA-29",
    linkedControls: "REV-C06, REV-C07, RPT-C01, RPT-C03",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-11",
    fileName: "Employee Master + Payroll Register (multi-month)",
    fileType: "Excel / CSV",
    recommendedFields: "Employee ID, Name, Bank Account No, IFSC, PAN, Department, Designation, Date of Joining/Leaving, Monthly Gross Pay, Deductions",
    enablesTests: "DA-25, DA-26",
    linkedControls: "PAY-C01, PAY-C02, PAY-C05",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-12",
    fileName: "Fixed Asset Register (FAR)",
    fileType: "Excel / CSV",
    recommendedFields: "Asset ID/Tag, Description, Location, Custodian, Cost, Date of Purchase, Depreciation Rate, Accumulated Depreciation, WDV",
    enablesTests: "DA-27",
    linkedControls: "FA-C02, FA-C04",
    priority: "Good-to-have",
    availableInClient: true
  },
  {
    id: "DRL-13",
    fileName: "Stock / Inventory Ledger",
    fileType: "Excel / CSV",
    recommendedFields: "Item Code, Description, Opening Qty, Inward Qty, Outward Qty, Closing Qty, Rate, Value, As-of Date",
    enablesTests: "DA-18, DA-23",
    linkedControls: "INV-C01, INV-C02, INV-C05",
    priority: "Must-have (Mfg/Trading)",
    availableInClient: true
  },
  {
    id: "DRL-14",
    fileName: "AR / AP Sub-ledger (party-wise outstanding)",
    fileType: "Excel / CSV",
    recommendedFields: "Party Name/ID, Invoice No, Invoice Date, Amount, Due Date, Balance Outstanding, Last Payment Date",
    enablesTests: "DA-18",
    linkedControls: "REV-C03, FR-C03",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-15",
    fileName: "GST Returns Data (GSTR-1, GSTR-2B, GSTR-3B exports)",
    fileType: "JSON / Excel",
    recommendedFields: "Period, GSTIN, Invoice-level details as filed, ITC availed/eligible/ineligible break-up",
    enablesTests: "DA-20, DA-21",
    linkedControls: "STAT-C01, REV-C05",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-16",
    fileName: "TDS Data (Form 26AS/TRACES export, TDS returns filed)",
    fileType: "Text / Excel",
    recommendedFields: "Deductee PAN, Section, Amount Paid/Credited, TDS Deducted, Challan/BSR details, Date of Deposit",
    enablesTests: "DA-22",
    linkedControls: "PUR-C04, STAT-C02",
    priority: "Must-have",
    availableInClient: true
  },
  {
    id: "DRL-17",
    fileName: "System User Access / Role Export",
    fileType: "Excel / CSV",
    recommendedFields: "User ID, Name, Role, Modules/Rights Assigned, Account Status (Active/Inactive), Last Login Date",
    enablesTests: "DA-09, DA-14",
    linkedControls: "IT-C01, IT-C04, JE-C01",
    priority: "Good-to-have",
    availableInClient: false
  },
  {
    id: "DRL-18",
    fileName: "Related Party Register / Director-Promoter Master",
    fileType: "Excel / PDF",
    recommendedFields: "Name, PAN, Relationship to Entity, Associated Entities, Nature of Transactions",
    enablesTests: "DA-29",
    linkedControls: "RPT-C01, RPT-C03",
    priority: "Good-to-have",
    availableInClient: true
  },
  {
    id: "DRL-19",
    fileName: "E-invoice (IRN) Log / E-way Bill Register",
    fileType: "Excel / CSV",
    recommendedFields: "Invoice No, IRN, E-way Bill No, Date Generated, Value",
    enablesTests: "STAT-C05",
    linkedControls: "STAT-C05",
    priority: "Must-have (Turnover > ₹5 Cr)",
    availableInClient: true
  },
  {
    "id": "DRL-20",
    "fileName": "Goods Receipt Note (GRN) & Store Inward Gate Register",
    "fileType": "Excel / CSV",
    "recommendedFields": "GRN No, GRN Date, Gate Entry No, Gate Entry Date, PO No, Vendor ID, Vendor Name, Item Code, Ordered Qty, Received Qty, Accepted Qty, Rejected Qty, Weighbridge Weight, Store Keeper ID, QC Inspector ID",
    "enablesTests": "DA-16, DA-71, DA-72, DA-73",
    "linkedControls": "PUR-C02, PUR-C08, PUR-C09, PUR-C10, PUR-C11",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-21",
    "fileName": "Job-Work / Subcontracting Challan Register (Form ITC-04 / Annexure IV)",
    "fileType": "Excel / CSV",
    "recommendedFields": "Challan No, Challan Date, Subcontractor ID, Subcontractor Name, Subcontractor GSTIN, Material Sent, Sent Qty, Finished Assembly Expected, Finished Assembly Received, Return Date, Scrap Allowance %, Actual Scrap Returned, Days Open, GST Section 143 Deemed Supply Flag",
    "enablesTests": "DA-43, DA-70, DA-74, DA-75",
    "linkedControls": "INV-C04, INV-C06, INV-C07, INV-C08, INV-C09, STAT-C01",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-22",
    "fileName": "Shop Floor Daily Production, Work Order & Scrap Weighbridge Log",
    "fileType": "Excel / CSV / MES Export",
    "recommendedFields": "Work Order No, Date, Line/Plant, Model, Standard BOM Units, Actual Raw Material Consumed, Finished Units Passed, Units Scrapped, Scrap Category, Scrap Weight (kg), Weighbridge Slip No, Gate Pass No",
    "enablesTests": "DA-40, DA-44, DA-76, DA-77",
    "linkedControls": "INV-C02, PRD-C01, PRD-C02, PRD-C03, PRD-C04",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-23",
    "fileName": "Biometric Attendance Muster & Shop Floor Overtime Punch Dump",
    "fileType": "CSV / Text (Biometric Machine Dump)",
    "recommendedFields": "Employee ID, Employee Name, Department, Shift Date, In-Time, Out-Time, Total Hours Logged, Normal Hours, Overtime Hours, Line Supervisor Approver ID, Overtime Pay Rate (2x)",
    "enablesTests": "DA-25, DA-26, DA-55, DA-57, DA-78, DA-79",
    "linkedControls": "PAY-C01, PAY-C02, PAY-C07, PAY-C08, PAY-C09, PAY-C10",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-24",
    "fileName": "Customer Master, Dealership Credit Limits & Bank Guarantee Register",
    "fileType": "Excel / CSV",
    "recommendedFields": "Dealer ID, Dealer Name, GSTIN, State/Region, Sanctioned Credit Limit (₹), Sanctioned Credit Days, Bank Guarantee / Deposit Held (₹), BG Expiry Date, Credit Rating, Authorized Discount Tier %, Account Status",
    "enablesTests": "DA-18, DA-47, DA-48, DA-80, DA-81",
    "linkedControls": "REV-C03, REV-C08, REV-C09, REV-C10",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-25",
    "fileName": "Warranty Claims, Service Center Job-Cards & Battery Core Returns",
    "fileType": "Excel / CSV",
    "recommendedFields": "Claim ID, Claim Date, Dealer ID, Dealer Name, Vehicle VIN, Battery Pack Serial, Failure KM, Customer Issue Description, Defect Category, Replacement Pack Serial, Defective Core Received Date, Core Return Status, Claim Cost (₹)",
    "enablesTests": "DA-63, DA-66, DA-82, DA-83",
    "linkedControls": "REV-C04, WAR-C01, WAR-C02, WAR-C03, WAR-C04",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-26",
    "fileName": "Statutory Tax Filings & Challans Register (GSTR-3B, Form 26Q, EPFO ECR)",
    "fileType": "PDF / JSON / Excel",
    "recommendedFields": "Return Form (GSTR-3B/26Q/ECR), Filing Period, ARN / Ack No, Filing Date, Due Date, Tax Liability Self-Assessed, Tax Paid via Cash/Challan, ITC Claimed, BSR/CIN, Payment Date, Interest/Late Fee Paid",
    "enablesTests": "DA-20, DA-21, DA-22, DA-84",
    "linkedControls": "STAT-C01, STAT-C02, STAT-C06, STAT-C07",
    "priority": "Must-have",
    "availableInClient": true
  },
  {
    "id": "DRL-27",
    "fileName": "ERP User Authorization Matrix & Audit Trail Log (MCA Rule 3)",
    "fileType": "Excel / CSV / DB Log",
    "recommendedFields": "User ID, Employee Name, Department, System Role, Transaction Authorizations (Create Vendor, Approve PO, Post Invoice, Release Payment, Post JV), Role Assignment Date, Last Login Timestamp, MFA Enabled (Y/N), Account Status",
    "enablesTests": "DA-09, DA-12, DA-59, DA-60, DA-61, DA-62, DA-85",
    "linkedControls": "IT-C01, IT-C04, IT-C05, IT-C06, ELC-C01, JE-C01",
    "priority": "Must-have",
    "availableInClient": true
  }
];

// ------------------------------------------------------------------------------
// 2B. MASTER EXTRACT TEMPLATES & CANONICAL SCHEMAS
// ------------------------------------------------------------------------------
const masterExtractTemplates = [
  {
    "id": "ET-PUR-01",
    "name": "Purchase Register / AP Sub-ledger",
    "extractId": "DRL-02",
    "description": "Line-item purchase invoices with vendor details, taxes, and PO/GRN links. Powers 3-way match, duplicate payment tests, and GSTR-2B reconciliation.",
    "linkedControls": "PUR-C01, PUR-C02, PUR-C03, PUR-C04, PUR-C07, STAT-C01",
    "linkedCAATs": "DA-01, DA-02, DA-04, DA-16, DA-17, DA-20, DA-22",
    "fields": [
      {
        "key": "invoiceNumber",
        "label": "Invoice / Bill Number",
        "type": "Text",
        "required": true,
        "description": "Unique vendor invoice identifier",
        "aliases": [
          "invoice no",
          "inv no",
          "vch no",
          "vch no.",
          "bill no",
          "bill no.",
          "voucher no",
          "doc no",
          "invoice number",
          "bill_num"
        ],
        "example": "INV-2025-041"
      },
      {
        "key": "invoiceDate",
        "label": "Invoice Date",
        "type": "Date",
        "required": true,
        "description": "Date of vendor billing",
        "aliases": [
          "date",
          "inv date",
          "bill date",
          "vch date",
          "posting date",
          "invoice date",
          "doc date",
          "bill_dt"
        ],
        "example": "2025-06-10"
      },
      {
        "key": "vendorName",
        "label": "Vendor / Supplier Name",
        "type": "Text",
        "required": true,
        "description": "Trade name of supplier",
        "aliases": [
          "particulars",
          "party name",
          "vendor name",
          "supplier name",
          "party",
          "account name",
          "supplier",
          "vendor"
        ],
        "example": "Precision Tools & Dies Pvt Ltd 1"
      },
      {
        "key": "vendorGstin",
        "label": "Vendor GSTIN",
        "type": "Text",
        "required": true,
        "description": "15-digit GSTIN of supplier",
        "aliases": [
          "party's gstin",
          "gstin",
          "vendor gstin",
          "party gstin",
          "gst no",
          "gstin/uin",
          "supplier gstin"
        ],
        "example": "27AADCD1234E1Z1"
      },
      {
        "key": "poNumber",
        "label": "Purchase Order No (PO)",
        "type": "Text",
        "required": true,
        "description": "Linked purchase order reference",
        "aliases": [
          "order no",
          "order no.",
          "po no",
          "po number",
          "purchase order",
          "po ref",
          "po_number",
          "docnum"
        ],
        "example": "PO-2025-01"
      },
      {
        "key": "grnNumber",
        "label": "Goods Receipt Note (GRN)",
        "type": "Text",
        "required": false,
        "description": "Linked inward GRN receipt number",
        "aliases": [
          "grn no",
          "grn number",
          "receipt no",
          "mrr no",
          "gate entry no",
          "inward no"
        ],
        "example": "GRN-2025-88"
      },
      {
        "key": "itemDescription",
        "label": "Item / Service Description",
        "type": "Text",
        "required": false,
        "description": "Material or service billed",
        "aliases": [
          "item",
          "item description",
          "item name",
          "product",
          "description",
          "material",
          "dscription"
        ],
        "example": "Brake Drum Castings Grade 25"
      },
      {
        "key": "quantity",
        "label": "Quantity",
        "type": "Number",
        "required": false,
        "description": "Invoiced item units",
        "aliases": [
          "qty",
          "quantity",
          "billed qty",
          "invoiced qty"
        ],
        "example": "100"
      },
      {
        "key": "unitRate",
        "label": "Unit Rate / Price",
        "type": "Number",
        "required": false,
        "description": "Price per unit contracted",
        "aliases": [
          "rate",
          "unit rate",
          "price",
          "unit price",
          "item rate"
        ],
        "example": "600.00"
      },
      {
        "key": "taxableValue",
        "label": "Taxable Value (Basic)",
        "type": "Currency",
        "required": true,
        "description": "Net amount before GST",
        "aliases": [
          "taxable amt",
          "taxable value",
          "assessable value",
          "taxable amount",
          "basic amount",
          "net value"
        ],
        "example": "60,000.00"
      },
      {
        "key": "gstAmount",
        "label": "GST Tax Amount",
        "type": "Currency",
        "required": true,
        "description": "Total IGST/CGST/SGST charged",
        "aliases": [
          "igst/cgst",
          "gst amount",
          "tax amount",
          "total gst",
          "igst+cgst+sgst",
          "total tax",
          "gst"
        ],
        "example": "10,800.00"
      },
      {
        "key": "tdsAmount",
        "label": "TDS Deducted",
        "type": "Currency",
        "required": false,
        "description": "Income tax withholding under 194C/J/Q",
        "aliases": [
          "tds",
          "tds amount",
          "tds deducted",
          "it tds",
          "tax deducted"
        ],
        "example": "600.00"
      },
      {
        "key": "totalAmount",
        "label": "Invoice Gross Total",
        "type": "Currency",
        "required": true,
        "description": "Final payable bill amount",
        "aliases": [
          "gross total",
          "total amount",
          "invoice total",
          "bill amount",
          "grand total",
          "net payable",
          "doctotal"
        ],
        "example": "70,800.00"
      }
    ],
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Account Books > Purchase Register > Alt+F2 (Period) > Ctrl+E (Export) > Columnar Configuration: Set Buyer GSTIN, PO No, and Tax Breakdown to YES.",
      "sapB1": "Purchasing - A/P > A/P Invoice > Drag & Relate or Document Journal > Export to Excel.",
      "zohoBooks": "Reports > Purchases by Vendor or Bills Report > Export as CSV."
    }
  },
  {
    "id": "ET-PO-01",
    "name": "Purchase Order (PO) Register",
    "extractId": "DRL-03",
    "description": "Approved purchase commitments with quantities, pricing, and authorization signatories. Tests split POs and approval limits.",
    "linkedControls": "PUR-C02, PUR-C06, PUR-C07, ELC-C01",
    "linkedCAATs": "DA-06, DA-15, DA-16, DA-17",
    "fields": [
      {
        "key": "poNumber",
        "label": "Purchase Order No",
        "type": "Text",
        "required": true,
        "description": "Unique purchase order number",
        "aliases": [
          "po no",
          "po number",
          "order no",
          "po ref",
          "docnum"
        ],
        "example": "PO-NRM-101"
      },
      {
        "key": "poDate",
        "label": "PO Date",
        "type": "Date",
        "required": true,
        "description": "Date of order issuance",
        "aliases": [
          "date",
          "po date",
          "order date",
          "docdate"
        ],
        "example": "2025-05-15"
      },
      {
        "key": "vendorName",
        "label": "Vendor Name",
        "type": "Text",
        "required": true,
        "description": "Selected supplier",
        "aliases": [
          "vendor",
          "vendor name",
          "supplier",
          "party name",
          "cardname"
        ],
        "example": "Precision Tools & Dies Pvt Ltd"
      },
      {
        "key": "vendorId",
        "label": "Vendor ID / Code",
        "type": "Text",
        "required": false,
        "description": "Vendor master account code",
        "aliases": [
          "vendor id",
          "party code",
          "cardcode"
        ],
        "example": "V-NRM-1"
      },
      {
        "key": "itemDescription",
        "label": "Item Description",
        "type": "Text",
        "required": true,
        "description": "Ordered item description",
        "aliases": [
          "item",
          "item description",
          "dscription"
        ],
        "example": "Forged Crankshaft Alloy 4140"
      },
      {
        "key": "quantity",
        "label": "Quantity Ordered",
        "type": "Number",
        "required": true,
        "description": "PO quantity",
        "aliases": [
          "qty",
          "quantity",
          "order qty"
        ],
        "example": "50"
      },
      {
        "key": "unitPrice",
        "label": "Unit Rate",
        "type": "Number",
        "required": true,
        "description": "Contracted rate per unit",
        "aliases": [
          "rate",
          "unit price",
          "price"
        ],
        "example": "1,500.00"
      },
      {
        "key": "totalAmount",
        "label": "Total PO Value",
        "type": "Currency",
        "required": true,
        "description": "Total contracted amount",
        "aliases": [
          "amount",
          "total amount",
          "po amount",
          "total",
          "doctotal"
        ],
        "example": "75,000.00"
      },
      {
        "key": "approverName",
        "label": "Approver Name",
        "type": "Text",
        "required": true,
        "description": "Authorizing officer",
        "aliases": [
          "approver",
          "approved by",
          "owner",
          "authorizer"
        ],
        "example": "Suresh Menon (Purchase Manager)"
      },
      {
        "key": "approverLevel",
        "label": "Approver Level",
        "type": "Text",
        "required": false,
        "description": "Approval matrix tier (Level 1-4)",
        "aliases": [
          "approver level",
          "level",
          "u_apprvlevel"
        ],
        "example": "Level 2"
      }
    ],
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Inventory Books > Purchase Orders Summary > Ctrl+E (Export).",
      "sapB1": "Purchasing - A/P > Purchase Order > Open Documents Report > Export to Excel.",
      "zohoBooks": "Purchases > Purchase Orders > Filter: All Orders > Export as CSV."
    }
  },
  {
    "id": "ET-VM-01",
    "name": "Vendor Master",
    "extractId": "DRL-09",
    "description": "Vendor onboarding master records including bank accounts, tax IDs and contact info. Tests duplicate vendors and shell entities.",
    "linkedControls": "PUR-C01, PUR-C05, RPT-C01, RPT-C03",
    "linkedCAATs": "DA-13, DA-14, DA-19, DA-29",
    "fields": [
      {
        "key": "vendorId",
        "label": "Vendor ID",
        "type": "Text",
        "required": true,
        "description": "Primary key in ERP",
        "aliases": [
          "vendor id",
          "vendor code",
          "party id",
          "code"
        ],
        "example": "V-001"
      },
      {
        "key": "vendorName",
        "label": "Vendor Legal Name",
        "type": "Text",
        "required": true,
        "description": "Registered business name",
        "aliases": [
          "vendor name",
          "name",
          "party name",
          "company name"
        ],
        "example": "Precision Tools & Dies Pvt Ltd"
      },
      {
        "key": "pan",
        "label": "PAN (10-Digit)",
        "type": "Text",
        "required": true,
        "description": "Income tax PAN",
        "aliases": [
          "pan",
          "pan no",
          "tax id"
        ],
        "example": "AADCD1234E"
      },
      {
        "key": "gstin",
        "label": "GSTIN (15-Digit)",
        "type": "Text",
        "required": true,
        "description": "GST identification number",
        "aliases": [
          "gstin",
          "gst no",
          "gstin/uin"
        ],
        "example": "27AADCD1234E1Z1"
      },
      {
        "key": "bankAccount",
        "label": "Bank Account Number",
        "type": "Text",
        "required": true,
        "description": "Bank payout account number",
        "aliases": [
          "bank account",
          "a/c no",
          "account no",
          "bank acct",
          "bank account no"
        ],
        "example": "1234567890123"
      },
      {
        "key": "ifscCode",
        "label": "Bank IFSC Code",
        "type": "Text",
        "required": true,
        "description": "11-character RBI IFSC code",
        "aliases": [
          "ifsc",
          "ifsc code",
          "rtgs ifsc"
        ],
        "example": "HDFC0001234"
      },
      {
        "key": "city",
        "label": "City",
        "type": "Text",
        "required": false,
        "description": "Operating city",
        "aliases": [
          "city",
          "location"
        ],
        "example": "Pune"
      },
      {
        "key": "status",
        "label": "Active Status",
        "type": "Text",
        "required": true,
        "description": "Active or Inactive / Blacklisted",
        "aliases": [
          "status",
          "account status",
          "active"
        ],
        "example": "Active"
      }
    ],
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Statements of Accounts > Statistics > Sundry Creditors > Press Shift+Enter > Export (Ctrl+E).",
      "sapB1": "Business Partners > Business Partner Master Data > Filter Vendors > Export to Excel.",
      "zohoBooks": "Purchases > Vendors > Export Vendors as CSV."
    }
  },
  {
    "id": "ET-SLS-01",
    "name": "Sales Register / Invoice Listing",
    "extractId": "DRL-01",
    "description": "Customer sales invoices, dispatch records, and e-way bill references. Powers Benford's Law, cut-off, and GSTR-1 matching.",
    "linkedControls": "REV-C01, REV-C03, REV-C04, REV-C05, REV-C06, STAT-C01, STAT-C05",
    "linkedCAATs": "DA-03, DA-04, DA-05, DA-17, DA-18, DA-21, DA-24, DA-30",
    "fields": [
      {
        "key": "invoiceNumber",
        "label": "Sales Invoice No",
        "type": "Text",
        "required": true,
        "description": "Tax invoice serial number",
        "aliases": [
          "invoice no",
          "inv no",
          "bill no",
          "doc no",
          "invoice number"
        ],
        "example": "SLS-2025-001"
      },
      {
        "key": "invoiceDate",
        "label": "Invoice Date",
        "type": "Date",
        "required": true,
        "description": "Date of sales recognition",
        "aliases": [
          "date",
          "inv date",
          "invoice date",
          "doc date"
        ],
        "example": "2025-06-15"
      },
      {
        "key": "customerName",
        "label": "Customer Name",
        "type": "Text",
        "required": true,
        "description": "Tier-1 OEM or B2B buyer",
        "aliases": [
          "customer",
          "customer name",
          "party name",
          "buyer"
        ],
        "example": "Tata Motors Commercial Vehicles Ltd"
      },
      {
        "key": "customerGstin",
        "label": "Customer GSTIN",
        "type": "Text",
        "required": true,
        "description": "Customer tax ID",
        "aliases": [
          "customer gstin",
          "gstin",
          "buyer gstin",
          "party gstin"
        ],
        "example": "27AAACT2727Q1ZW"
      },
      {
        "key": "taxableValue",
        "label": "Taxable Value",
        "type": "Currency",
        "required": true,
        "description": "Net sales revenue",
        "aliases": [
          "taxable value",
          "taxable amt",
          "basic amount",
          "net revenue"
        ],
        "example": "4,50,000.00"
      },
      {
        "key": "gstAmount",
        "label": "GST Amount",
        "type": "Currency",
        "required": true,
        "description": "GST output liability",
        "aliases": [
          "gst amount",
          "tax amount",
          "total gst",
          "output gst"
        ],
        "example": "81,000.00"
      },
      {
        "key": "totalAmount",
        "label": "Total Invoice Amount",
        "type": "Currency",
        "required": true,
        "description": "Gross receivable",
        "aliases": [
          "total amount",
          "invoice total",
          "bill value",
          "gross total"
        ],
        "example": "5,31,000.00"
      },
      {
        "key": "eWayBillNo",
        "label": "E-way Bill No / IRN",
        "type": "Text",
        "required": false,
        "description": "Mandatory for consignments >₹50k",
        "aliases": [
          "e-way bill",
          "eway bill no",
          "irn",
          "e-way bill no"
        ],
        "example": "241890123456"
      }
    ],
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Account Books > Sales Register > Alt+F2 > Ctrl+E (Export) > Columnar Config: Set E-Invoice IRN and GST to YES.",
      "sapB1": "Sales - A/R > A/R Invoice > Document Journal > Export to Excel.",
      "zohoBooks": "Sales > Invoices > Export All Invoices as CSV."
    }
  },
  {
    "id": "ET-PAY-01",
    "name": "Employee Master + Payroll Register",
    "extractId": "DRL-11",
    "description": "Monthly staff compensation, bank payout accounts, and statutory deductions (PF/ESI). Tests ghost employees.",
    "linkedControls": "PAY-C01, PAY-C02, PAY-C05",
    "linkedCAATs": "DA-25, DA-26",
    "fields": [
      {
        "key": "employeeId",
        "label": "Employee ID",
        "type": "Text",
        "required": true,
        "description": "Staff payroll number",
        "aliases": [
          "emp id",
          "employee id",
          "staff code",
          "emp no"
        ],
        "example": "EMP-041"
      },
      {
        "key": "employeeName",
        "label": "Employee Name",
        "type": "Text",
        "required": true,
        "description": "Full legal employee name",
        "aliases": [
          "name",
          "employee name",
          "staff name"
        ],
        "example": "Rajesh Shinde"
      },
      {
        "key": "department",
        "label": "Department",
        "type": "Text",
        "required": false,
        "description": "Factory or Admin section",
        "aliases": [
          "department",
          "dept",
          "cost center"
        ],
        "example": "Machine Shop Line 1"
      },
      {
        "key": "bankAccount",
        "label": "Salary Bank Account",
        "type": "Text",
        "required": true,
        "description": "NEFT salary credit account",
        "aliases": [
          "bank account",
          "a/c no",
          "salary acct",
          "account no"
        ],
        "example": "9876543210121"
      },
      {
        "key": "ifscCode",
        "label": "Bank IFSC",
        "type": "Text",
        "required": true,
        "description": "Bank branch identifier",
        "aliases": [
          "ifsc",
          "ifsc code"
        ],
        "example": "SBIN0005678"
      },
      {
        "key": "grossPay",
        "label": "Gross Salary",
        "type": "Currency",
        "required": true,
        "description": "Total CTC earnings before deductions",
        "aliases": [
          "gross pay",
          "gross salary",
          "total earnings"
        ],
        "example": "35,000.00"
      },
      {
        "key": "pfDeduction",
        "label": "Provident Fund (PF)",
        "type": "Currency",
        "required": false,
        "description": "EPF 12% deduction",
        "aliases": [
          "pf",
          "provident fund",
          "epf"
        ],
        "example": "1,800.00"
      },
      {
        "key": "netSalary",
        "label": "Net Disbursed",
        "type": "Currency",
        "required": true,
        "description": "Take-home pay transferred via bank",
        "aliases": [
          "net pay",
          "net salary",
          "take home"
        ],
        "example": "32,800.00"
      }
    ],
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Payroll Reports > Pay Sheet / Employee Master > Export (Ctrl+E).",
      "sapB1": "Human Resources > Employee Master Data Report > Export to Excel.",
      "zohoBooks": "Zoho Payroll > Reports > Salary Register / Master Pay Sheet > Export as CSV."
    }
  },
  {
    "id": "ET-CB-01",
    "name": "Cash & Bank Book / Bank Statement Extract",
    "extractId": "DRL-06",
    "description": "Daily transaction log of all bank and cash disbursements and receipts. Powers tests for Section 40A(3) cash limits, weekend transfers, and single-signatory breaches.",
    "linkedControls": "CB-C01, CB-C02, CB-C03, CB-C05, ELC-C01",
    "linkedCAATs": "DA-06, DA-07, DA-08, DA-28",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Account Books > Cash/Bank Book(s) > Select Bank Account > Press Alt+F2 (Period) > Press Ctrl+E (Export) > Format: Excel/CSV.",
      "sapB1": "Financials > Financial Reports > Accounting > General Ledger > Filter by Bank Accounts > Export to Excel.",
      "zohoBooks": "Banking > Select Primary Account > Click Settings Gear > Export Transactions > Include cleared and pending > Format: CSV."
    },
    "fields": [
      {
        "key": "transactionId",
        "label": "Ref / Chq / UTR No.",
        "type": "Text",
        "required": true,
        "description": "Unique bank transaction or cheque number",
        "aliases": [
          "chq no",
          "ref no",
          "utr",
          "cheque no",
          "transaction id",
          "instrument no",
          "doc no"
        ],
        "example": "UTR-HDFC-99102",
        "validationRegex": "^[A-Za-z0-9\\-_/]{3,30}$"
      },
      {
        "key": "transactionDate",
        "label": "Transaction Date",
        "type": "Date",
        "required": true,
        "description": "Date of bank/cash entry",
        "aliases": [
          "date",
          "txn date",
          "value date",
          "booking date"
        ],
        "example": "2025-06-15",
        "validationRegex": "^\\d{4}-\\d{2}-\\d{2}$"
      },
      {
        "key": "accountNumber",
        "label": "Bank Account Number",
        "type": "Text",
        "required": true,
        "description": "Company bank account number",
        "aliases": [
          "bank a/c",
          "account no",
          "a/c no",
          "bank account"
        ],
        "example": "50200012345678",
        "validationRegex": "^[0-9]{9,18}$"
      },
      {
        "key": "narration",
        "label": "Transaction Narration",
        "type": "Text",
        "required": true,
        "description": "Particulars / payee description",
        "aliases": [
          "particulars",
          "narration",
          "description",
          "details"
        ],
        "example": "RTGS to Precision Tools against Inv 041"
      },
      {
        "key": "beneficiaryName",
        "label": "Payee / Counterparty Name",
        "type": "Text",
        "required": true,
        "description": "Recipient or depositing entity name",
        "aliases": [
          "party name",
          "beneficiary",
          "payee",
          "party"
        ],
        "example": "Precision Tools & Dies Pvt Ltd"
      },
      {
        "key": "transactionType",
        "label": "Type (Payment / Receipt)",
        "type": "Text",
        "required": true,
        "description": "Direction of funds flow",
        "aliases": [
          "dr/cr",
          "type",
          "txn type",
          "entry type"
        ],
        "example": "Payment"
      },
      {
        "key": "amount",
        "label": "Transaction Amount (INR)",
        "type": "Currency",
        "required": true,
        "description": "Transaction value in INR",
        "aliases": [
          "amount",
          "dr amount",
          "cr amount",
          "debit",
          "credit",
          "txn amount"
        ],
        "example": "70800.00"
      },
      {
        "key": "approverUser",
        "label": "Authorizer / Approver",
        "type": "Text",
        "required": false,
        "description": "Signatory who released the payment",
        "aliases": [
          "approver",
          "authorized by",
          "user id",
          "released by"
        ],
        "example": "Ramesh Sharma (Director)"
      }
    ]
  },
  {
    "id": "ET-JV-01",
    "name": "General Ledger Journal Voucher (JV) Dump",
    "extractId": "DRL-05",
    "description": "Complete journal entry register including adjusting, closing, and reclassification entries. Powers Benford analysis, after-hours postings, and reversing entry tests.",
    "linkedControls": "FR-C01, FR-C02, FR-C03, FR-C05, ELC-C01, ITGC-C01",
    "linkedCAATs": "DA-04, DA-05, DA-08, DA-09, DA-10, DA-11, DA-12, DA-32",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Account Books > Journal Register > Press Alt+F2 (Full FY) > Press Ctrl+E (Export) > Select Detailed View > Format: Excel/CSV.",
      "sapB1": "Financials > Journal Entry > Search All Records > File > Export > Excel.",
      "zohoBooks": "Accountant > Manual Journals > Filter: All Journals > Export as CSV."
    },
    "fields": [
      {
        "key": "voucherNumber",
        "label": "Voucher / JV Number",
        "type": "Text",
        "required": true,
        "description": "Unique journal voucher reference",
        "aliases": [
          "jv no",
          "voucher no",
          "vch no",
          "journal no",
          "doc no"
        ],
        "example": "JV-2025-081",
        "validationRegex": "^[A-Za-z0-9\\-_/]{2,25}$"
      },
      {
        "key": "voucherDate",
        "label": "Voucher Posting Date",
        "type": "Date",
        "required": true,
        "description": "Posting date of journal entry",
        "aliases": [
          "date",
          "posting date",
          "doc date",
          "vch date"
        ],
        "example": "2025-06-30",
        "validationRegex": "^\\d{4}-\\d{2}-\\d{2}$"
      },
      {
        "key": "debitAccount",
        "label": "Debit Account Head",
        "type": "Text",
        "required": true,
        "description": "GL head debited",
        "aliases": [
          "debit account",
          "particulars",
          "dr ledger",
          "debit ledger"
        ],
        "example": "Repairs & Maintenance"
      },
      {
        "key": "creditAccount",
        "label": "Credit Account Head",
        "type": "Text",
        "required": true,
        "description": "GL head credited",
        "aliases": [
          "credit account",
          "cr ledger",
          "credit ledger"
        ],
        "example": "Precision Tools (Vendor)"
      },
      {
        "key": "amount",
        "label": "Journal Amount (INR)",
        "type": "Currency",
        "required": true,
        "description": "Voucher debit/credit amount",
        "aliases": [
          "amount",
          "debit amount",
          "credit amount",
          "vch amount"
        ],
        "example": "500000.00"
      },
      {
        "key": "narration",
        "label": "Narration / Explanation",
        "type": "Text",
        "required": true,
        "description": "Business justification for journal entry",
        "aliases": [
          "narration",
          "remarks",
          "description",
          "text"
        ],
        "example": "Being year-end machine overhaul cost provision"
      },
      {
        "key": "enteredBy",
        "label": "Prepared By (User)",
        "type": "Text",
        "required": true,
        "description": "ERP user ID who created the JV",
        "aliases": [
          "user",
          "entered by",
          "created by",
          "author"
        ],
        "example": "admin_user"
      },
      {
        "key": "approvedBy",
        "label": "Approved By (Supervising)",
        "type": "Text",
        "required": false,
        "description": "Finance controller or director signatory",
        "aliases": [
          "approved by",
          "authorizer",
          "checked by"
        ],
        "example": "Suresh Menon (FC)"
      },
      {
        "key": "entryTime",
        "label": "Entry Timestamp",
        "type": "Text",
        "required": false,
        "description": "Time of ERP entry (24-hr)",
        "aliases": [
          "time",
          "created time",
          "entry time",
          "timestamp"
        ],
        "example": "23:45:10"
      }
    ]
  },
  {
    "id": "ET-INV-01",
    "name": "Inventory Stock Ledger & Movement Register",
    "extractId": "DRL-10",
    "description": "Item-level perpetual inventory balances, closing stock valuation, and movement history. Powers negative stock detection and non-moving inventory ageing.",
    "linkedControls": "INV-C01, INV-C02, INV-C03, INV-C05",
    "linkedCAATs": "DA-18, DA-23, DA-30",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Inventory Books > Stock Item > Select All Items > Detailed View > Export (Ctrl+E) > Format: Excel/CSV.",
      "sapB1": "Inventory > Inventory Reports > Inventory Valuation Report > Export to Excel.",
      "zohoBooks": "Items > Inventory Summary Report > Export as CSV."
    },
    "fields": [
      {
        "key": "itemCode",
        "label": "Item / SKU Code",
        "type": "Text",
        "required": true,
        "description": "Unique item master code",
        "aliases": [
          "item code",
          "sku",
          "item id",
          "part no",
          "product code"
        ],
        "example": "SKU-CAST-01",
        "validationRegex": "^[A-Za-z0-9\\-_]{2,20}$"
      },
      {
        "key": "itemName",
        "label": "Item Description",
        "type": "Text",
        "required": true,
        "description": "Trade name of material or component",
        "aliases": [
          "item description",
          "item name",
          "description",
          "material name"
        ],
        "example": "Brake Drum Castings Grade 25"
      },
      {
        "key": "category",
        "label": "Category (RM / WIP / FG / Scrap)",
        "type": "Text",
        "required": true,
        "description": "Inventory classification",
        "aliases": [
          "category",
          "group",
          "item group",
          "stock category"
        ],
        "example": "Raw Material"
      },
      {
        "key": "closingQuantity",
        "label": "Closing Stock Quantity",
        "type": "Number",
        "required": true,
        "description": "Physical / book units on hand",
        "aliases": [
          "qty",
          "closing qty",
          "balance qty",
          "quantity",
          "stock on hand"
        ],
        "example": "150"
      },
      {
        "key": "unitRate",
        "label": "Valuation Unit Rate",
        "type": "Number",
        "required": true,
        "description": "Cost per unit under FIFO/weighted average",
        "aliases": [
          "rate",
          "unit rate",
          "valuation rate",
          "cost price"
        ],
        "example": "600.00"
      },
      {
        "key": "totalValue",
        "label": "Total Book Valuation (INR)",
        "type": "Currency",
        "required": true,
        "description": "Closing quantity multiplied by unit rate",
        "aliases": [
          "total value",
          "value",
          "valuation",
          "closing value"
        ],
        "example": "90000.00"
      },
      {
        "key": "lastMovementDate",
        "label": "Last Inward / Outward Date",
        "type": "Date",
        "required": true,
        "description": "Date of last consumption or receipt",
        "aliases": [
          "last movement",
          "last txn date",
          "last inward date",
          "movement date"
        ],
        "example": "2024-11-10",
        "validationRegex": "^\\d{4}-\\d{2}-\\d{2}$"
      },
      {
        "key": "storageLocation",
        "label": "Warehouse / Bin Location",
        "type": "Text",
        "required": false,
        "description": "Shop floor godown or rack identifier",
        "aliases": [
          "godown",
          "warehouse",
          "location",
          "bin"
        ],
        "example": "Godown-A (Shop Floor)"
      }
    ]
  },
  {
    "id": "ET-FA-01",
    "name": "Fixed Asset Register (FAR)",
    "extractId": "DRL-13",
    "description": "Register of all capitalized property, plant, and machinery with asset tags, purchase costs, and physical locations. Powers duplicate asset barcode testing.",
    "linkedControls": "FA-C01, FA-C02, FA-C03, FA-C04",
    "linkedCAATs": "DA-27",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Account Books > Ledger > Fixed Assets Group > Export (Ctrl+E) OR Export Accounts Fixed Asset Depreciation Schedule.",
      "sapB1": "Financials > Fixed Assets > Fixed Asset Master Data > Asset History Sheet > Export to Excel.",
      "zohoBooks": "Accountant > Fixed Asset Schedule Report > Export as CSV."
    },
    "fields": [
      {
        "key": "assetTag",
        "label": "Asset Tag / Barcode No.",
        "type": "Text",
        "required": true,
        "description": "Unique asset identification barcode/serial number",
        "aliases": [
          "asset tag",
          "tag no",
          "barcode",
          "asset id",
          "tag #"
        ],
        "example": "TAG-CNC-042",
        "validationRegex": "^[A-Za-z0-9\\-_/]{3,20}$"
      },
      {
        "key": "assetDescription",
        "label": "Asset Description / Make",
        "type": "Text",
        "required": true,
        "description": "Machine or equipment description",
        "aliases": [
          "description",
          "asset name",
          "machine name",
          "particulars"
        ],
        "example": "CNC 5-Axis Milling Center Haas VF-2"
      },
      {
        "key": "assetCategory",
        "label": "Asset Category",
        "type": "Text",
        "required": true,
        "description": "Block of assets under Companies Act",
        "aliases": [
          "category",
          "asset class",
          "asset block"
        ],
        "example": "Plant & Machinery"
      },
      {
        "key": "capitalizationDate",
        "label": "Date Put to Use",
        "type": "Date",
        "required": true,
        "description": "Capitalization date in books",
        "aliases": [
          "date",
          "put to use date",
          "purchase date",
          "cap date"
        ],
        "example": "2023-04-15",
        "validationRegex": "^\\d{4}-\\d{2}-\\d{2}$"
      },
      {
        "key": "grossBlock",
        "label": "Gross Purchase Cost (INR)",
        "type": "Currency",
        "required": true,
        "description": "Original capitalized asset cost",
        "aliases": [
          "gross block",
          "purchase cost",
          "original cost",
          "cost"
        ],
        "example": "3500000.00"
      },
      {
        "key": "accumulatedDepreciation",
        "label": "Accumulated Depreciation",
        "type": "Currency",
        "required": true,
        "description": "Total depreciation provided till date",
        "aliases": [
          "acc dep",
          "accumulated dep",
          "depreciation"
        ],
        "example": "700000.00"
      },
      {
        "key": "netBlock",
        "label": "Net Written Down Value (WDV)",
        "type": "Currency",
        "required": true,
        "description": "Gross block minus accumulated depreciation",
        "aliases": [
          "net block",
          "wdv",
          "carrying amount",
          "book value"
        ],
        "example": "2800000.00"
      },
      {
        "key": "location",
        "label": "Physical Plant / Shop Floor Location",
        "type": "Text",
        "required": true,
        "description": "Actual location on site",
        "aliases": [
          "location",
          "plant",
          "site",
          "shop floor",
          "department"
        ],
        "example": "Bhayala Plant - Bay 3"
      }
    ]
  },
  {
    "id": "ET-GST-01",
    "name": "GSTR-2B vs 3B Reconciliation Extract",
    "extractId": "DRL-11",
    "description": "Comparison of inward invoices booked in accounting ledgers against auto-drafted government portal GSTR-2B statements. Powers ITC disallowance testing.",
    "linkedControls": "STAT-C01, STAT-C02",
    "linkedCAATs": "DA-20, DA-21, DA-22",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Statutory Reports > GST Reports > GSTR-2B Reconciliation > Export (Ctrl+E).",
      "sapB1": "Reports > Tax Reports > GST Inward Register vs GSTR-2B Merge.",
      "zohoBooks": "GST Filing > GSTR-2B Reconciliation > View Matched & Mismatched Bills > Export as CSV.",
      "gstPortal": "Login to gst.gov.in > Return Dashboard > Select FY & Month > GSTR-2B Auto-Drafted ITC Statement > Download JSON/Excel."
    },
    "fields": [
      {
        "key": "supplierGstin",
        "label": "Supplier GSTIN (15-Digit)",
        "type": "Text",
        "required": true,
        "description": "GST identification number of supplier",
        "aliases": [
          "gstin",
          "supplier gstin",
          "party gstin"
        ],
        "example": "27AADCD1234E1Z1",
        "validationRegex": "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
      },
      {
        "key": "supplierName",
        "label": "Supplier Trade Name",
        "type": "Text",
        "required": true,
        "description": "Registered trade name of supplier",
        "aliases": [
          "supplier name",
          "party name",
          "trade name"
        ],
        "example": "Precision Tools & Dies Pvt Ltd"
      },
      {
        "key": "invoiceNumber",
        "label": "Invoice / Bill Number",
        "type": "Text",
        "required": true,
        "description": "Vendor invoice reference number",
        "aliases": [
          "invoice no",
          "bill no",
          "doc no"
        ],
        "example": "INV-2025-041"
      },
      {
        "key": "invoiceDate",
        "label": "Invoice Date",
        "type": "Date",
        "required": true,
        "description": "Date of vendor billing",
        "aliases": [
          "date",
          "inv date",
          "invoice date"
        ],
        "example": "2025-06-10",
        "validationRegex": "^\\d{4}-\\d{2}-\\d{2}$"
      },
      {
        "key": "taxableValue",
        "label": "Taxable Value (Basic INR)",
        "type": "Currency",
        "required": true,
        "description": "Net amount before GST",
        "aliases": [
          "taxable value",
          "taxable amt",
          "assessable value"
        ],
        "example": "60000.00"
      },
      {
        "key": "totalTax",
        "label": "Total GST Amount (IGST+CGST+SGST)",
        "type": "Currency",
        "required": true,
        "description": "Total input tax credit claimed",
        "aliases": [
          "tax amount",
          "gst amount",
          "total gst",
          "itc claimed"
        ],
        "example": "10800.00"
      },
      {
        "key": "gstr2bRefStatus",
        "label": "Reflected in GSTR-2B (Y/N)",
        "type": "Text",
        "required": true,
        "description": "Whether supplier filed GSTR-1 and invoice appears in 2B",
        "aliases": [
          "status",
          "in 2b",
          "gstr2b status",
          "matched"
        ],
        "example": "Y"
      },
      {
        "key": "filingPeriod",
        "label": "Return Tax Period",
        "type": "Text",
        "required": true,
        "description": "Month of filing e.g. Jun-2025",
        "aliases": [
          "period",
          "month",
          "tax period"
        ],
        "example": "Jun-2025"
      }
    ]
  },
  {
    "id": "ET-GRN-01",
    "name": "Store Inward GRN & Gate Entry Log",
    "extractId": "DRL-20",
    "description": "Inward goods receipt register matching physical gate arrival, weighbridge slips, store binning, and quality inspection results against open PO quantities.",
    "linkedControls": "PUR-C02, PUR-C08, PUR-C09, PUR-C10, PUR-C11",
    "linkedCAATs": "DA-16, DA-71, DA-72, DA-73",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Inventory Books > Movement Analysis > Stock Item Inwards > Export as CSV.",
      "sapB1": "Purchasing - A/P > Goods Receipt PO > Filter Date Range > Export to Excel with Line Items.",
      "zohoBooks": "Purchases > Purchase Orders > Received Shipments Summary > Export as CSV."
    },
    "fields": [
      {
        "key": "grnNumber",
        "label": "GRN Number",
        "type": "Text",
        "required": true,
        "description": "Unique Goods Receipt Note reference",
        "aliases": [
          "grn no",
          "grn",
          "mrr no",
          "receipt no",
          "goods receipt no"
        ],
        "example": "GRN-2025-081"
      },
      {
        "key": "grnDate",
        "label": "GRN Date",
        "type": "Date",
        "required": true,
        "description": "Date material was accepted in store ledger",
        "aliases": [
          "grn date",
          "receipt date",
          "inward date"
        ],
        "example": "2025-06-12"
      },
      {
        "key": "gateEntryNo",
        "label": "Security Gate Entry No",
        "type": "Text",
        "required": true,
        "description": "Factory security gate inward pass number",
        "aliases": [
          "gate entry",
          "gate pass",
          "inward gate no"
        ],
        "example": "GE-2025-119"
      },
      {
        "key": "gateEntryDate",
        "label": "Gate Inward Date",
        "type": "Date",
        "required": true,
        "description": "Date physical shipment crossed factory gates",
        "aliases": [
          "gate date",
          "entry date"
        ],
        "example": "2025-06-11"
      },
      {
        "key": "poNumber",
        "label": "Purchase Order Reference",
        "type": "Text",
        "required": true,
        "description": "Underlying purchase order reference",
        "aliases": [
          "po no",
          "po number",
          "order no"
        ],
        "example": "PO-2025-041"
      },
      {
        "key": "vendorName",
        "label": "Supplier Trade Name",
        "type": "Text",
        "required": true,
        "description": "Name of delivering vendor",
        "aliases": [
          "vendor",
          "supplier",
          "party name"
        ],
        "example": "Amperex Power Technology Ltd"
      },
      {
        "key": "itemDescription",
        "label": "Item / Component Description",
        "type": "Text",
        "required": true,
        "description": "Description of component received",
        "aliases": [
          "item",
          "product",
          "material"
        ],
        "example": "LFP Lithium Battery Cells 21700 3.2V"
      },
      {
        "key": "orderedQty",
        "label": "PO Ordered Quantity",
        "type": "Number",
        "required": true,
        "description": "Contracted quantity per PO",
        "aliases": [
          "po qty",
          "ordered qty"
        ],
        "example": "2500"
      },
      {
        "key": "receivedQty",
        "label": "Physical Received Qty",
        "type": "Number",
        "required": true,
        "description": "Quantity physically delivered by transporter",
        "aliases": [
          "received qty",
          "inward qty"
        ],
        "example": "2500"
      },
      {
        "key": "acceptedQty",
        "label": "QC Accepted Quantity",
        "type": "Number",
        "required": true,
        "description": "Quantity cleared by Quality Control",
        "aliases": [
          "accepted qty",
          "passed qty",
          "ok qty"
        ],
        "example": "2480"
      },
      {
        "key": "rejectedQty",
        "label": "QC Rejected Quantity",
        "type": "Number",
        "required": false,
        "description": "Quantity rejected due to defects",
        "aliases": [
          "rejected qty",
          "defect qty",
          "rej qty"
        ],
        "example": "20"
      },
      {
        "key": "storeLocation",
        "label": "Plant Warehouse Bin",
        "type": "Text",
        "required": true,
        "description": "Storage bin e.g. Chakan Cleanroom Store Bin C-14",
        "aliases": [
          "warehouse",
          "bin location",
          "plant store"
        ],
        "example": "Chakan Plant Store Bin C-14"
      },
      {
        "key": "qcInspectorId",
        "label": "QC Inspector ID",
        "type": "Text",
        "required": true,
        "description": "Employee ID of quality clearance inspector",
        "aliases": [
          "qc inspector",
          "qa engineer",
          "inspected by"
        ],
        "example": "EMP-041"
      }
    ]
  },
  {
    "id": "ET-JW-01",
    "name": "Job-Work Outward Delivery Challans (Form ITC-04)",
    "extractId": "DRL-21",
    "description": "Subcontracting outward delivery challan register tracking raw materials sent to external job-workers for powder coating, heat treatment, and CNC turning, monitoring GST Sec 143 1-year deadlines.",
    "linkedControls": "INV-C04, INV-C06, INV-C07, INV-C08, INV-C09, STAT-C01",
    "linkedCAATs": "DA-43, DA-70, DA-74, DA-75",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Job Work Reports > Delivery Challan Register > Export (Ctrl+E).",
      "sapB1": "Inventory > Inventory Transfers > Transfer to Subcontractor > Export to Excel.",
      "zohoBooks": "Items > Delivery Challans > Filter 'Subcontracting / Job-Work' > Export as CSV."
    },
    "fields": [
      {
        "key": "challanNo",
        "label": "Delivery Challan Number",
        "type": "Text",
        "required": true,
        "description": "Unique job-work delivery challan number under Rule 45",
        "aliases": [
          "challan no",
          "dc no",
          "delivery challan"
        ],
        "example": "JW-CH-2024-041"
      },
      {
        "key": "challanDate",
        "label": "Dispatch Date",
        "type": "Date",
        "required": true,
        "description": "Date goods sent out from principal factory",
        "aliases": [
          "challan date",
          "issue date",
          "dispatch date"
        ],
        "example": "2024-08-15"
      },
      {
        "key": "subcontractorName",
        "label": "Job-Worker Legal Name",
        "type": "Text",
        "required": true,
        "description": "Subcontracting processor name",
        "aliases": [
          "subcontractor",
          "job worker",
          "party name"
        ],
        "example": "Aditya Heat Treaters"
      },
      {
        "key": "subcontractorGstin",
        "label": "Job-Worker GSTIN",
        "type": "Text",
        "required": true,
        "description": "15-digit GSTIN of job-worker",
        "aliases": [
          "gstin",
          "job worker gstin"
        ],
        "example": "27AAACA1234E1Z1"
      },
      {
        "key": "materialDescription",
        "label": "Input Material Description",
        "type": "Text",
        "required": true,
        "description": "Raw material or semi-finished goods sent",
        "aliases": [
          "material",
          "item description",
          "input item"
        ],
        "example": "Tubular Steel Chassis Frames"
      },
      {
        "key": "sentQty",
        "label": "Dispatched Quantity",
        "type": "Number",
        "required": true,
        "description": "Quantity sent on challan",
        "aliases": [
          "sent qty",
          "issue qty",
          "dispatched qty"
        ],
        "example": "120"
      },
      {
        "key": "unit",
        "label": "Unit of Measurement",
        "type": "Text",
        "required": true,
        "description": "Measurement unit (Sets/Nos/Kg)",
        "aliases": [
          "uom",
          "unit"
        ],
        "example": "Sets"
      },
      {
        "key": "natureOfProcessing",
        "label": "Processing / Job Operation",
        "type": "Text",
        "required": true,
        "description": "Subcontracted operation e.g. Anodizing / Heat Treatment",
        "aliases": [
          "operation",
          "process",
          "nature of processing"
        ],
        "example": "Stress Relieving & Heat Treatment"
      },
      {
        "key": "receivedQty",
        "label": "Returned Assembly Qty",
        "type": "Number",
        "required": false,
        "description": "Finished units received back",
        "aliases": [
          "received qty",
          "return qty"
        ],
        "example": "106"
      },
      {
        "key": "actualReturnDate",
        "label": "Date Received Back",
        "type": "Date",
        "required": false,
        "description": "Date returned to factory",
        "aliases": [
          "return date",
          "inward date"
        ],
        "example": "2025-06-18"
      },
      {
        "key": "challanStatus",
        "label": "Challan Aging Status",
        "type": "Text",
        "required": true,
        "description": "Open / Fully Received / Deemed Supply",
        "aliases": [
          "status",
          "challan status"
        ],
        "example": "OPEN (>300 Days)"
      },
      {
        "key": "deemedTaxRisk",
        "label": "GST Deemed Supply Risk (₹)",
        "type": "Currency",
        "required": true,
        "description": "Potential 18% GST + interest liability under Sec 143",
        "aliases": [
          "tax risk",
          "deemed gst",
          "tax liability"
        ],
        "example": "122400.00"
      }
    ]
  },
  {
    "id": "ET-PRD-01",
    "name": "Shop Floor Production, Work Orders & Scrap Weighbridge Log",
    "extractId": "DRL-22",
    "description": "Daily production work order logs tracking standard vs actual raw material consumption yield, battery cell scrap rates, and automated factory weighbridge dispatches.",
    "linkedControls": "INV-C02, PRD-C01, PRD-C02, PRD-C03, PRD-C04",
    "linkedCAATs": "DA-40, DA-44, DA-76, DA-77",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Inventory Books > Stock Journal Register > Manufacturing Journals > Export as CSV.",
      "sapB1": "Production > Production Order > Summary Report > Export with Bill of Materials and Scrap variance.",
      "mesSystem": "Shop Floor MES Terminal > Reports > Batch Genealogy & Yield Summary > Export CSV."
    },
    "fields": [
      {
        "key": "workOrderNo",
        "label": "Work Order Number",
        "type": "Text",
        "required": true,
        "description": "Shop floor manufacturing production order",
        "aliases": [
          "wo no",
          "work order",
          "batch no",
          "prod order"
        ],
        "example": "WO-2025-042"
      },
      {
        "key": "productionDate",
        "label": "Production Date",
        "type": "Date",
        "required": true,
        "description": "Date assembly batch was run",
        "aliases": [
          "date",
          "prod date",
          "run date"
        ],
        "example": "2025-06-12"
      },
      {
        "key": "assemblyLine",
        "label": "Assembly Line / Megasite",
        "type": "Text",
        "required": true,
        "description": "Plant location e.g. Chakan Battery Line 1",
        "aliases": [
          "line",
          "plant",
          "station"
        ],
        "example": "Chakan Battery Cleanroom Line 1"
      },
      {
        "key": "finishedModel",
        "label": "Finished Product Model",
        "type": "Text",
        "required": true,
        "description": "Electric 2W / Battery Pack model",
        "aliases": [
          "model",
          "product",
          "fg item"
        ],
        "example": "VoltDrive Pro 3.2kWh LFP Battery Pack"
      },
      {
        "key": "standardBomQty",
        "label": "Standard BOM Input Qty",
        "type": "Number",
        "required": true,
        "description": "Standard cell engineering requirement",
        "aliases": [
          "bom qty",
          "standard qty"
        ],
        "example": "2400"
      },
      {
        "key": "actualConsumedQty",
        "label": "Actual Consumed Input Qty",
        "type": "Number",
        "required": true,
        "description": "Actual cells consumed from inventory",
        "aliases": [
          "actual qty",
          "issued qty"
        ],
        "example": "2520"
      },
      {
        "key": "yieldLossPct",
        "label": "Assembly Yield Scrap Loss %",
        "type": "Number",
        "required": true,
        "description": "Scrap percentage (Normal tolerance <= 1.5%)",
        "aliases": [
          "yield loss",
          "scrap pct",
          "variance pct"
        ],
        "example": "5.0"
      },
      {
        "key": "scrapCategory",
        "label": "Scrap Type / Grade",
        "type": "Text",
        "required": true,
        "description": "Damaged Cells / Aluminum Die-Cast Runners / Copper",
        "aliases": [
          "scrap type",
          "scrap grade"
        ],
        "example": "Punctured / Low IR 21700 Cells"
      },
      {
        "key": "weighbridgeSlipNo",
        "label": "Weighbridge Outward Ticket",
        "type": "Text",
        "required": false,
        "description": "Automated weighbridge gross/tare slip number",
        "aliases": [
          "weighbridge no",
          "tare slip",
          "ticket no"
        ],
        "example": "WB-2025-0812"
      },
      {
        "key": "billedScrapWeightKg",
        "label": "Billed Scrap Weight (Kg)",
        "type": "Number",
        "required": false,
        "description": "Weight of scrap sold to recyclers",
        "aliases": [
          "scrap kg",
          "billed weight",
          "net weight"
        ],
        "example": "450.0"
      }
    ]
  },
  {
    "id": "ET-ATT-01",
    "name": "Biometric Attendance Muster & Overtime (OT) Punch Dump",
    "extractId": "DRL-23",
    "description": "Raw biometric fingerprint/facial scanner punch dump compared against monthly payroll attendance records to detect ghost employees and Factories Act 50-hour overtime limit breaches.",
    "linkedControls": "PAY-C01, PAY-C02, PAY-C06, PAY-C07, PAY-C08, PAY-C09",
    "linkedCAATs": "DA-25, DA-26, DA-55, DA-57, DA-78, DA-79",
    "erpExportGuide": {
      "biometricSystem": "Biometric Time & Attendance Software (e.g. eSSL / BioTrack) > Daily In/Out Logs > Export CSV.",
      "spineHR": "Payroll > Attendance Processing > Swipe In/Out Reconciliation > Export to Excel.",
      "zohoPayroll": "Zoho People > Attendance > Attendance Logs > Export as CSV."
    },
    "fields": [
      {
        "key": "employeeId",
        "label": "Employee ID",
        "type": "Text",
        "required": true,
        "description": "Unique employee identification code",
        "aliases": [
          "emp id",
          "employee code",
          "badge no"
        ],
        "example": "EMP-041"
      },
      {
        "key": "employeeName",
        "label": "Employee Full Name",
        "type": "Text",
        "required": true,
        "description": "Full name of factory/office staff",
        "aliases": [
          "name",
          "employee name",
          "staff name"
        ],
        "example": "Sunil M. Shinde"
      },
      {
        "key": "department",
        "label": "Department / Cost Center",
        "type": "Text",
        "required": true,
        "description": "Department e.g. Battery Cleanroom Assembly",
        "aliases": [
          "dept",
          "department",
          "cost center"
        ],
        "example": "Battery Assembly Line 1"
      },
      {
        "key": "shiftDate",
        "label": "Shift Date",
        "type": "Date",
        "required": true,
        "description": "Date of recorded work shift",
        "aliases": [
          "date",
          "shift date",
          "punch date"
        ],
        "example": "2025-06-15"
      },
      {
        "key": "inTime",
        "label": "Biometric In-Time Punch",
        "type": "Text",
        "required": true,
        "description": "First morning punch timestamp",
        "aliases": [
          "in time",
          "swipe in",
          "first punch"
        ],
        "example": "08:28:12"
      },
      {
        "key": "outTime",
        "label": "Biometric Out-Time Punch",
        "type": "Text",
        "required": true,
        "description": "Final evening punch timestamp",
        "aliases": [
          "out time",
          "swipe out",
          "last punch"
        ],
        "example": "20:34:45"
      },
      {
        "key": "totalHoursLogged",
        "label": "Total Logged Hours",
        "type": "Number",
        "required": true,
        "description": "Total shift duration in hours",
        "aliases": [
          "total hours",
          "hours worked"
        ],
        "example": "12.1"
      },
      {
        "key": "overtimeHours",
        "label": "Calculated Overtime (OT) Hours",
        "type": "Number",
        "required": true,
        "description": "Hours beyond standard 8-hour shift",
        "aliases": [
          "ot hours",
          "overtime",
          "ot"
        ],
        "example": "4.1"
      },
      {
        "key": "supervisorApproverId",
        "label": "Line Supervisor Approver",
        "type": "Text",
        "required": true,
        "description": "Employee ID of shift supervisor approving OT",
        "aliases": [
          "supervisor",
          "approved by",
          "mgr id"
        ],
        "example": "EMP-014"
      }
    ]
  },
  {
    "id": "ET-CUST-01",
    "name": "Customer & Dealership Credit Master / Bank Guarantee Register",
    "extractId": "DRL-24",
    "description": "Dealership master master containing sanctioned credit limits, credit days, bank guarantee/deposit cover, and authorized discount tiers to prevent over-limit vehicle dispatches.",
    "linkedControls": "REV-C03, REV-C08, REV-C09, REV-C10",
    "linkedCAATs": "DA-18, DA-47, DA-48, DA-80, DA-81",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Account Books > Ledger > Sundry Debtors > Alt+C (Credit Limits Configuration) > Export.",
      "sapB1": "Business Partners > Business Partner Master Data > Payment Terms & Credit Limit Tab > Export.",
      "zohoBooks": "Sales > Customers > Customer Master Report > Export as CSV."
    },
    "fields": [
      {
        "key": "dealerId",
        "label": "Dealership Code",
        "type": "Text",
        "required": true,
        "description": "Unique dealer identifier code",
        "aliases": [
          "dealer id",
          "customer code",
          "cust id"
        ],
        "example": "DLR-MH-019"
      },
      {
        "key": "dealerName",
        "label": "Dealership Legal Name",
        "type": "Text",
        "required": true,
        "description": "Registered trade name of authorized dealer",
        "aliases": [
          "dealer name",
          "customer name",
          "party name"
        ],
        "example": "Apex EV Mobility Pvt Ltd"
      },
      {
        "key": "gstin",
        "label": "Dealer GSTIN",
        "type": "Text",
        "required": true,
        "description": "15-digit GSTIN of dealership",
        "aliases": [
          "gstin",
          "dealer gstin"
        ],
        "example": "27AAACA9012E1Z4"
      },
      {
        "key": "stateRegion",
        "label": "Territory / State",
        "type": "Text",
        "required": true,
        "description": "Operating dealership geography",
        "aliases": [
          "state",
          "region",
          "territory"
        ],
        "example": "Maharashtra (Pune Urban)"
      },
      {
        "key": "creditLimitInr",
        "label": "Sanctioned Credit Limit (₹)",
        "type": "Currency",
        "required": true,
        "description": "Maximum approved credit facility",
        "aliases": [
          "credit limit",
          "sanctioned limit"
        ],
        "example": "5000000.00"
      },
      {
        "key": "creditDays",
        "label": "Sanctioned Credit Days",
        "type": "Number",
        "required": true,
        "description": "Authorized payment terms (e.g. 15 or 30 days)",
        "aliases": [
          "credit days",
          "payment terms",
          "terms"
        ],
        "example": "15"
      },
      {
        "key": "bankGuaranteeHeldInr",
        "label": "Bank Guarantee / Security Deposit (₹)",
        "type": "Currency",
        "required": true,
        "description": "Active bank guarantee or fixed deposit held",
        "aliases": [
          "bg amount",
          "security deposit",
          "bank guarantee"
        ],
        "example": "2500000.00"
      },
      {
        "key": "bgExpiryDate",
        "label": "Bank Guarantee Expiry Date",
        "type": "Date",
        "required": false,
        "description": "Date bank guarantee expires",
        "aliases": [
          "bg expiry",
          "expiry date",
          "valid till"
        ],
        "example": "2025-09-30"
      },
      {
        "key": "discountTierPct",
        "label": "Authorized Rebate / Discount Tier %",
        "type": "Number",
        "required": true,
        "description": "Contractual dealer margin %",
        "aliases": [
          "discount tier",
          "margin pct",
          "dealer discount"
        ],
        "example": "8.5"
      },
      {
        "key": "accountStatus",
        "label": "ERP Dispatch Hold Status",
        "type": "Text",
        "required": true,
        "description": "Active / Credit Block / Hard Stop",
        "aliases": [
          "status",
          "account status",
          "credit hold"
        ],
        "example": "Active"
      }
    ]
  },
  {
    "id": "ET-WAR-01",
    "name": "Warranty Claims, Service Job-Cards & Battery Core Returns",
    "extractId": "DRL-25",
    "description": "Warranty service records and battery pack replacement requests submitted by 110 authorized service centers, tracking defective core battery return receipts within 30 days.",
    "linkedControls": "REV-C04, WAR-C01, WAR-C02, WAR-C03, WAR-C04",
    "linkedCAATs": "DA-63, DA-66, DA-82, DA-83",
    "erpExportGuide": {
      "servicePortal": "Service CRM / Dealer Portal > Warranty Management > Claim History > Export as CSV.",
      "sapB1": "Service > Service Calls > Filter 'Battery Warranty Replacement' > Export to Excel.",
      "customErp": "Customer Support App > Battery Pack Replacement Job-Cards > Export CSV."
    },
    "fields": [
      {
        "key": "claimId",
        "label": "Warranty Claim ID",
        "type": "Text",
        "required": true,
        "description": "Unique warranty service authorization number",
        "aliases": [
          "claim id",
          "claim no",
          "service job card"
        ],
        "example": "WAR-2025-0142"
      },
      {
        "key": "claimDate",
        "label": "Claim Filing Date",
        "type": "Date",
        "required": true,
        "description": "Date warranty claim logged by service technician",
        "aliases": [
          "claim date",
          "date",
          "lodged date"
        ],
        "example": "2025-06-14"
      },
      {
        "key": "dealerId",
        "label": "Service Center / Dealer ID",
        "type": "Text",
        "required": true,
        "description": "Dealer requesting battery replacement",
        "aliases": [
          "dealer id",
          "service center",
          "dealer code"
        ],
        "example": "DLR-MH-019"
      },
      {
        "key": "vehicleVin",
        "label": "Vehicle Chassis VIN",
        "type": "Text",
        "required": true,
        "description": "17-character VIN of electric vehicle",
        "aliases": [
          "vin",
          "chassis no",
          "chassis vin"
        ],
        "example": "VIN-NEX-2025-0812"
      },
      {
        "key": "oldBatterySerial",
        "label": "Defective Battery Serial",
        "type": "Text",
        "required": true,
        "description": "Serial number of failed battery pack",
        "aliases": [
          "defective pack",
          "old battery serial",
          "failed serial"
        ],
        "example": "BAT-LFP-2024-4112"
      },
      {
        "key": "odometerReadingKm",
        "label": "Odometer Reading (Km)",
        "type": "Number",
        "required": true,
        "description": "Kilometers driven at failure (Warranty limit: 50,000 km)",
        "aliases": [
          "odometer",
          "km",
          "mileage"
        ],
        "example": "14250"
      },
      {
        "key": "defectCategory",
        "label": "Root Defect Category",
        "type": "Text",
        "required": true,
        "description": "Cell Internal Resistance Spike / BMS Comm Error / Pouch Swelling",
        "aliases": [
          "defect",
          "root cause",
          "failure mode"
        ],
        "example": "Cell Batch 41 High IR Spike (>45mΩ)"
      },
      {
        "key": "replacementPackSerial",
        "label": "New Battery Serial Dispatched",
        "type": "Text",
        "required": true,
        "description": "Replacement battery pack issued to customer",
        "aliases": [
          "new serial",
          "replacement serial"
        ],
        "example": "BAT-LFP-2025-9921"
      },
      {
        "key": "coreReturnReceivedDate",
        "label": "Defective Core Inward Date",
        "type": "Date",
        "required": false,
        "description": "Date failed battery arrived at factory for root-cause testing",
        "aliases": [
          "core return date",
          "inward date"
        ],
        "example": "2025-07-02"
      },
      {
        "key": "coreReturnStatus",
        "label": "Defective Battery Return Status",
        "type": "Text",
        "required": true,
        "description": "Received / Overdue (>30 Days)",
        "aliases": [
          "core status",
          "return status"
        ],
        "example": "OVERDUE (>30 Days)"
      },
      {
        "key": "claimAmountInr",
        "label": "Warranty Replacement Cost (₹)",
        "type": "Currency",
        "required": true,
        "description": "Total replacement pack cost booked in P&L",
        "aliases": [
          "claim amount",
          "cost",
          "pack cost"
        ],
        "example": "32000.00"
      }
    ]
  },
  {
    "id": "ET-STAT-01",
    "name": "Statutory Tax Returns & Challans Register (GSTR-3B, Form 26Q, EPFO)",
    "extractId": "DRL-26",
    "description": "Self-assessed tax return filings and electronic bank challans (GSTR-3B, Form 26Q TDS, EPFO ECR) reconciled against general ledger liability accounts to identify tax arrears and late filing interest under CARO Clause (vii).",
    "linkedControls": "STAT-C01, STAT-C02, STAT-C03, STAT-C04",
    "linkedCAATs": "DA-20, DA-21, DA-22, DA-84",
    "erpExportGuide": {
      "gstPortal": "gst.gov.in > Returns Dashboard > GSTR-3B Summary > Download PDF / JSON.",
      "tracesPortal": "tdscpc.gov.in > Form 26Q Provisional Receipts & Challan Status.",
      "epfoPortal": "epfindia.gov.in > ECR Monthly Summary & Electronic Payment Challan Receipt."
    },
    "fields": [
      {
        "key": "returnForm",
        "label": "Statutory Return Form",
        "type": "Text",
        "required": true,
        "description": "GSTR-3B / Form 26Q / EPFO ECR",
        "aliases": [
          "form",
          "return type",
          "statutory return"
        ],
        "example": "GSTR-3B"
      },
      {
        "key": "taxPeriod",
        "label": "Tax Period (Month/Quarter)",
        "type": "Text",
        "required": true,
        "description": "Applicable filing month e.g. May-2025",
        "aliases": [
          "period",
          "tax period",
          "month"
        ],
        "example": "May-2025"
      },
      {
        "key": "arnNo",
        "label": "Filing Acknowledgement / ARN",
        "type": "Text",
        "required": true,
        "description": "Government portal filing reference number",
        "aliases": [
          "arn",
          "ack no",
          "provisional receipt"
        ],
        "example": "AA270525008129F"
      },
      {
        "key": "filingDate",
        "label": "Date of Filing",
        "type": "Date",
        "required": true,
        "description": "Date return was submitted on portal",
        "aliases": [
          "filing date",
          "date filed"
        ],
        "example": "2025-06-20"
      },
      {
        "key": "statutoryDueDate",
        "label": "Statutory Due Date",
        "type": "Date",
        "required": true,
        "description": "Official deadline under statute",
        "aliases": [
          "due date",
          "deadline"
        ],
        "example": "2025-06-20"
      },
      {
        "key": "taxPayableInr",
        "label": "Self-Assessed Tax Liability (₹)",
        "type": "Currency",
        "required": true,
        "description": "Net tax liability declared in return",
        "aliases": [
          "tax payable",
          "liability",
          "tax amount"
        ],
        "example": "1485000.00"
      },
      {
        "key": "taxPaidCashInr",
        "label": "Tax Settled via Bank Challan (₹)",
        "type": "Currency",
        "required": true,
        "description": "Tax deposited through banking channel",
        "aliases": [
          "tax paid",
          "challan payment",
          "cash payment"
        ],
        "example": "1485000.00"
      },
      {
        "key": "challanCin",
        "label": "Challan CIN / BSR Code",
        "type": "Text",
        "required": true,
        "description": "Bank Challan Identification Number",
        "aliases": [
          "cin",
          "bsr code",
          "challan ref"
        ],
        "example": "HDFC2506200019241"
      },
      {
        "key": "interestPaidInr",
        "label": "Interest / Late Fee Paid (₹)",
        "type": "Currency",
        "required": false,
        "description": "Interest deposited under Section 50 / 201(1A)",
        "aliases": [
          "interest",
          "late fee"
        ],
        "example": "0.00"
      }
    ]
  },
  {
    "id": "ET-USER-01",
    "name": "ERP User Authorization Matrix & Audit Trail Log (MCA Rule 3)",
    "extractId": "DRL-27",
    "description": "User security roles, screen permissions, and transactional edit-logs exported from Tally Prime 4.0 and SAP Business One to evaluate Segregation of Duties (SoD) and generic login compliance under MCA Rule 3(1).",
    "linkedControls": "IT-C01, IT-C02, IT-C03, ELC-C01, JE-C01",
    "linkedCAATs": "DA-09, DA-12, DA-59, DA-60, DA-61, DA-62, DA-85",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Alt+K (Company) > User Roles & Security Controls > Export User List.",
      "sapB1": "Administration > Setup > General > Users & Authorizations > Export Authorization Matrix to Excel.",
      "cloudErp": "System Administration > Security & Roles > User Permission Audit Log > Export CSV."
    },
    "fields": [
      {
        "key": "userId",
        "label": "System User ID",
        "type": "Text",
        "required": true,
        "description": "ERP login username",
        "aliases": [
          "user id",
          "login id",
          "username"
        ],
        "example": "finance_exec_02"
      },
      {
        "key": "employeeName",
        "label": "Assigned Employee Name",
        "type": "Text",
        "required": true,
        "description": "Full name of user",
        "aliases": [
          "name",
          "employee name"
        ],
        "example": "Rohan K. Patil"
      },
      {
        "key": "department",
        "label": "Department",
        "type": "Text",
        "required": true,
        "description": "User department e.g. Accounts Payable",
        "aliases": [
          "dept",
          "department"
        ],
        "example": "Accounts Payable"
      },
      {
        "key": "assignedRoles",
        "label": "Assigned Security Role(s)",
        "type": "Text",
        "required": true,
        "description": "Role profiles e.g. AP_CLERK, VENDOR_ADMIN",
        "aliases": [
          "role",
          "roles",
          "user role"
        ],
        "example": "AP_CLERK + VENDOR_ADMIN"
      },
      {
        "key": "canCreateVendor",
        "label": "Can Create/Edit Vendor Master (Y/N)",
        "type": "Text",
        "required": true,
        "description": "Permission to alter supplier master",
        "aliases": [
          "vendor edit",
          "create vendor"
        ],
        "example": "Y"
      },
      {
        "key": "canApprovePayment",
        "label": "Can Release Bank Payments (Y/N)",
        "type": "Text",
        "required": true,
        "description": "Permission to approve banking disbursements",
        "aliases": [
          "approve payment",
          "release payment"
        ],
        "example": "Y"
      },
      {
        "key": "isGenericId",
        "label": "Is Shared / Generic User ID (Y/N)",
        "type": "Text",
        "required": true,
        "description": "Whether account is generic e.g. admin/cashier",
        "aliases": [
          "generic",
          "shared id"
        ],
        "example": "N"
      },
      {
        "key": "accountStatus",
        "label": "Account Status",
        "type": "Text",
        "required": true,
        "description": "Active / Suspended / Terminated",
        "aliases": [
          "status",
          "account status"
        ],
        "example": "Active"
      },
      {
        "key": "lastLoginTimestamp",
        "label": "Last Login Timestamp",
        "type": "Text",
        "required": true,
        "description": "Date and time of recent login",
        "aliases": [
          "last login",
          "login timestamp"
        ],
        "example": "2025-06-30 18:42:10"
      }
    ]
  },
  {
    "id": "ET-RPT-01",
    "name": "Related Party Register & Director Master (MCA Sec 188 / Ind AS 24)",
    "extractId": "DRL-18",
    "description": "Register of contracts or arrangements in which directors are interested (Form MBP-4), director DIN master, shareholding percentage, and listing of related entities, relatives, and associate concerns for MCA Section 188, Ind AS 24, and CARO Clause (xiii) verification.",
    "linkedControls": "RPT-C01, RPT-C02, RPT-C03, ELC-C03",
    "linkedCAATs": "DA-29, DA-68",
    "erpExportGuide": {
      "tally": "Gateway of Tally > Display More Reports > Statutory Reports > Related Party Transactions > Export to Excel.",
      "sapB1": "Business Partners > Business Partner Master Data > Filter 'Related Parties Group' > Export CSV.",
      "zohoBooks": "Accountant > Manual Journals / Contacts > Filter 'Related Parties' > Export Contact List."
    },
    "fields": [
      {
        "key": "directorDinOrPromoter",
        "label": "Director DIN / Promoter Name",
        "type": "Text",
        "required": true,
        "description": "Director identification number (DIN) or promoter/KMP name",
        "aliases": ["din", "director din", "promoter name", "kmp name"],
        "example": "03148920 - Anand Verma"
      },
      {
        "key": "relatedEntityName",
        "label": "Related Entity / Associate Name",
        "type": "Text",
        "required": true,
        "description": "Legal name of the related entity, partnership firm, or relative concern",
        "aliases": ["related entity", "party name", "associate concern", "related party name"],
        "example": "Verma Auto Dynamics LLP"
      },
      {
        "key": "pan",
        "label": "Entity Permanent Account Number (PAN)",
        "type": "PAN",
        "required": true,
        "description": "10-digit PAN of the related party",
        "aliases": ["pan", "party pan", "pan no"],
        "example": "AAACV9812P"
      },
      {
        "key": "gstin",
        "label": "Entity GSTIN",
        "type": "GSTIN",
        "required": false,
        "description": "15-digit GSTIN of the related entity",
        "aliases": ["gstin", "party gstin", "gst no"],
        "example": "27AAACV9812P1ZF"
      },
      {
        "key": "relationshipNature",
        "label": "Nature of Relationship",
        "type": "Text",
        "required": true,
        "description": "Director Interest / Associate / Holding / Subsidiary / Relative",
        "aliases": ["nature of relationship", "relationship", "relation type"],
        "example": "Director has 48% Partnership Interest"
      },
      {
        "key": "contractApprovalDate",
        "label": "Audit Committee / Board Approval Date",
        "type": "Date",
        "required": true,
        "description": "Date prior approval obtained under Section 188 of Companies Act",
        "aliases": ["approval date", "board approval date", "mbp4 date"],
        "example": "2024-04-10"
      },
      {
        "key": "transactionType",
        "label": "Permitted Transaction Category",
        "type": "Text",
        "required": true,
        "description": "Sale of Goods / Purchase of Raw Material / Leasing / Loan / Services",
        "aliases": ["transaction type", "nature of contract", "category"],
        "example": "Supply of Aluminum Stamping Dies"
      },
      {
        "key": "annualSanctionedCap",
        "label": "Sanctioned Annual Ceiling (₹)",
        "type": "Currency",
        "required": true,
        "description": "Maximum aggregate monetary limit approved by Board/Shareholders",
        "aliases": ["sanctioned limit", "cap amount", "board ceiling"],
        "example": "5000000.00"
      },
      {
        "key": "actualFyValue",
        "label": "Actual FY Billed Value (₹)",
        "type": "Currency",
        "required": true,
        "description": "Total cumulative value transacted in the fiscal year",
        "aliases": ["actual value", "cumulative billed", "total amount"],
        "example": "3845000.00"
      }
    ]
  }
];

const sampleClientUploads = [
  {
    "id": "SMP-TALLY-PUR",
    "name": "Tally Prime — EV Inward Purchase Register.csv",
    "extractId": "ET-PUR-01",
    "sourceSystem": "Tally Prime 4.0",
    "headers": [
      "Vch No.",
      "Date",
      "Particulars",
      "Party's GSTIN",
      "Order No.",
      "Item",
      "Quantity",
      "Rate",
      "Taxable Amt",
      "IGST/CGST",
      "Gross Total"
    ],
    "sampleRows": [
      [
        "PUR-EV-041",
        "10-Jun-2025",
        "Amperex Power Technology Ltd",
        "27AAACA1234E1Z1",
        "PO-EV-2025-01",
        "LFP Lithium Battery Cells 21700 3.2V",
        "2500",
        "185",
        "4,62,500.00",
        "83,250.00",
        "5,45,750.00"
      ],
      [
        "PUR-EV-042",
        "12-Jun-2025",
        "Silicon Mobility Circuits Pvt Ltd",
        "27BBBCB5678E1Z2",
        "PO-EV-2025-04",
        "Smart Master-Slave BMS Board 72V CAN",
        "120",
        "2850",
        "3,42,000.00",
        "61,560.00",
        "4,03,560.00"
      ],
      [
        "PUR-EV-043",
        "15-Jun-2025",
        "Apex Electric Powertrains Ltd",
        "27CCCAC9012E1Z3",
        "PO-EV-2025-09",
        "5kW Mid-Drive PMSM Traction Motor",
        "80",
        "11200",
        "8,96,000.00",
        "1,61,280.00",
        "10,57,280.00"
      ],
      [
        "PUR-EV-044",
        "18-Jun-2025",
        "Chakan Light Alloys & Castings",
        "27DDDCD3456E1Z4",
        "PO-EV-2025-14",
        "Die-Cast Aluminum Battery Pack Enclosure",
        "150",
        "2400",
        "3,60,000.00",
        "64,800.00",
        "4,24,800.00"
      ]
    ]
  },
  {
    "id": "SMP-SAP-PO",
    "name": "SAP Business One — EV Purchase Order Listing.xlsx",
    "extractId": "ET-PO-01",
    "sourceSystem": "SAP Business One on HANA",
    "headers": [
      "DocNum",
      "DocDate",
      "CardCode",
      "CardName",
      "Dscription",
      "Quantity",
      "Price",
      "DocTotal",
      "Owner",
      "U_ApprvLevel"
    ],
    "sampleRows": [
      [
        "PO-EV-10021",
        "2025-05-15",
        "V-EV-AMP",
        "Amperex Power Technology Ltd",
        "LFP Lithium Cells 21700 Grade A",
        "5000",
        "185.00",
        "925000.00",
        "Suresh Pillai",
        "Level 2"
      ],
      [
        "PO-EV-10022",
        "2025-05-18",
        "V-EV-APX",
        "Apex Electric Powertrains Ltd",
        "5kW PMSM Traction Motors 72V",
        "100",
        "11200.00",
        "1120000.00",
        "Suresh Pillai",
        "Level 2"
      ],
      [
        "PO-EV-10023",
        "2025-06-01",
        "V-EV-SIL",
        "Silicon Mobility Circuits Pvt Ltd",
        "Smart BMS Board Master 72V",
        "250",
        "2850.00",
        "712500.00",
        "Anand Verma",
        "Managing Director"
      ]
    ]
  },
  {
    "id": "SMP-EXCEL-VM",
    "name": "Excel Master — EV Component Vendor Master & KYC.csv",
    "extractId": "ET-VM-01",
    "sourceSystem": "Vendor Onboarding Portal",
    "headers": [
      "Vendor Code",
      "Vendor Legal Name",
      "PAN",
      "GSTIN",
      "Bank Account No",
      "Bank IFSC",
      "City",
      "PMP Localized (Y/N)"
    ],
    "sampleRows": [
      [
        "V-EV-AMP",
        "Amperex Power Technology Ltd",
        "AAACA1234E",
        "27AAACA1234E1Z1",
        "50200088991122",
        "HDFC0000123",
        "Pune",
        "Y"
      ],
      [
        "V-EV-SIL",
        "Silicon Mobility Circuits Pvt Ltd",
        "BBBCB5678E",
        "27BBBCB5678E1Z2",
        "50200077889933",
        "ICIC0000456",
        "Bengaluru",
        "Y"
      ],
      [
        "V-EV-APX",
        "Apex Electric Powertrains Ltd",
        "CCCAC9012E",
        "27CCCAC9012E1Z3",
        "50200066778844",
        "HDFC0000123",
        "Chennai",
        "Y"
      ],
      [
        "V-EV-SHL",
        "Fake Shell Electronics Ltd",
        "DDDCD3456E",
        "27DDDCD3456E1Z4",
        "3344556677881",
        "ICIC0000123",
        "Pune",
        "N"
      ]
    ]
  },
  {
    "id": "SMP-HDFC-CB",
    "name": "HDFC Bank — EV Operations Current A/c Statement.csv",
    "extractId": "ET-CB-01",
    "sourceSystem": "HDFC Corporate NetBanking",
    "headers": [
      "Txn Ref / Chq No",
      "Value Date",
      "Bank A/c No",
      "Particulars / Narration",
      "Counterparty Name",
      "Txn Type",
      "Amount (INR)",
      "Authorized By"
    ],
    "sampleRows": [
      [
        "RTGS-HDFC-10921",
        "10-Jun-2025",
        "50200099887766",
        "RTGS Import LC settlement Lithium cells",
        "Amperex Power Technology Ltd",
        "Payment",
        "5,45,750.00",
        "Anand Verma"
      ],
      [
        "NEFT-HDFC-44122",
        "14-Jun-2025",
        "50200099887766",
        "NEFT Vendor payment Smart BMS batch",
        "Silicon Mobility Circuits Pvt Ltd",
        "Payment",
        "4,03,560.00",
        "Kailash Narayanan"
      ],
      [
        "RTGS-GOV-99120",
        "18-Jun-2025",
        "50200099887766",
        "Govt subsidy reimbursement PM E-DRIVE Q1",
        "Ministry of Heavy Industries",
        "Receipt",
        "42,50,000.00",
        "Treasury Admin"
      ],
      [
        "CHQ-HDFC-88190",
        "22-Jun-2025",
        "50200099887766",
        "Self bearer cash withdrawal petty factory cash",
        "Self / Cashier",
        "Payment",
        "18,000.00",
        "Anand Verma"
      ]
    ]
  },
  {
    "id": "SMP-TALLY-JV",
    "name": "Tally Prime — EV Journal Voucher (JV) Dump.csv",
    "extractId": "ET-JV-01",
    "sourceSystem": "Tally Prime 4.0",
    "headers": [
      "Voucher No",
      "Posting Date",
      "Debit Ledger",
      "Credit Ledger",
      "Voucher Amount",
      "Narration",
      "Entered By",
      "Approved By",
      "System Time"
    ],
    "sampleRows": [
      [
        "JV-EV-2025-081",
        "30-Jun-2025",
        "Warranty Provision (Battery Packs)",
        "Provision for Battery Warranty (Ind AS 37)",
        "14,50,000.00",
        "Quarterly actuarial battery warranty provision for 3-yr/50k km pack replacement",
        "admin_user",
        "Kailash Narayanan",
        "23:45:10"
      ],
      [
        "JV-EV-2025-089",
        "30-Jun-2025",
        "R&D Powertrain Development",
        "Suspense Account",
        "10,00,000.00",
        "Round sum provision for solid-state BMS development expenses",
        "admin_user",
        "Pending",
        "23:58:00"
      ],
      [
        "JV-EV-2025-092",
        "30-Jun-2025",
        "Shop Floor Consumables",
        "Cash Account",
        "15,000.00",
        "",
        "accounts_clerk",
        "None",
        "14:15:00"
      ],
      [
        "JV-EV-2025-101",
        "01-Jul-2025",
        "Suspense Account",
        "R&D Powertrain Development",
        "10,00,000.00",
        "Reversal of JV-EV-2025-089",
        "admin_user",
        "Kailash Narayanan",
        "09:12:00"
      ]
    ]
  },
  {
    "id": "SMP-SAP-INV",
    "name": "SAP Business One — EV Battery & Powertrain Stock.csv",
    "extractId": "ET-INV-01",
    "sourceSystem": "SAP Business One on HANA",
    "headers": [
      "Item Code",
      "Item Description",
      "Stock Category",
      "Closing Qty",
      "Unit Valuation Rate",
      "Total Stock Value",
      "Last Movement Date",
      "Warehouse Godown"
    ],
    "sampleRows": [
      [
        "SKU-CELL-21700",
        "LFP Lithium Battery Cells 21700 3.2V",
        "Raw Material",
        "8,500",
        "185.00",
        "15,72,500.00",
        "2025-06-18",
        "Godown-A (Cell Cleanroom)"
      ],
      [
        "SKU-BMS-72V",
        "Smart Master BMS Board 72V CAN",
        "Electronics",
        "420",
        "2,850.00",
        "11,97,000.00",
        "2025-06-17",
        "Godown-B (SMT Stores)"
      ],
      [
        "SKU-MOT-PMSM5K",
        "5kW Mid-Drive PMSM Traction Motor",
        "Powertrain",
        "-25",
        "11,200.00",
        "-2,80,000.00",
        "2025-06-18",
        "Godown-A (Assembly Line)"
      ],
      [
        "SKU-PACK-72V",
        "Assembled IP67 Smart Battery Pack 2.5kWh",
        "Finished Goods",
        "140",
        "32,000.00",
        "44,80,000.00",
        "2025-06-19",
        "Godown-C (EOL Dyno Bay)"
      ]
    ]
  },
  {
    "id": "SMP-GST-2B",
    "name": "GST Portal — GSTR-2B vs EV Purchase Book Extract.csv",
    "extractId": "ET-GST-01",
    "sourceSystem": "GST Portal / Cleartax",
    "headers": [
      "Supplier GSTIN",
      "Supplier Legal Name",
      "Tax Invoice Number",
      "Invoice Date",
      "Taxable Value (Basic)",
      "Total GST Amount",
      "Reflected in GSTR-2B",
      "Tax Return Period"
    ],
    "sampleRows": [
      [
        "27AAACA1234E1Z1",
        "Amperex Power Technology Ltd",
        "INV-EV-2025-041",
        "10-Jun-2025",
        "4,62,500.00",
        "83,250.00",
        "Y",
        "Jun-2025"
      ],
      [
        "27BBBCB5678E1Z2",
        "Silicon Mobility Circuits Pvt Ltd",
        "INV-EV-8812",
        "12-Jun-2025",
        "3,42,000.00",
        "61,560.00",
        "Y",
        "Jun-2025"
      ],
      [
        "27CCCAC9012E1Z3",
        "Apex Electric Powertrains Ltd",
        "INV-EV-3091",
        "15-Jun-2025",
        "8,96,000.00",
        "1,61,280.00",
        "Y",
        "Jun-2025"
      ],
      [
        "27DDDCD3456E1Z4",
        "Fake Shell Suppliers",
        "INV-SH-001",
        "20-Jun-2025",
        "2,50,000.00",
        "45,000.00",
        "N",
        "Jun-2025"
      ]
    ]
  }
];

// ------------------------------------------------------------------------------
// 3. PROCESS AREA SUMMARY (13 Standard Process Areas)
// ------------------------------------------------------------------------------
const processAreaIndexSummary = [
  { area: "Entity Level Controls", risks: 4, controls: 4, notes: "Foundation layer - weak entity-level controls raise risk across every other process area; assess first." },
  { area: "Revenue & Receivables", risks: 7, controls: 7, notes: "Watch for informal/undocumented sales practices, credit terms and GST e-invoicing compliance." },
  { area: "Purchase & Payables", risks: 7, controls: 7, notes: "Related-party vendors, split POs, and 3-way matching are key MSME risk points." },
  { area: "Inventory Management", risks: 5, controls: 5, notes: "Physical verification, obsolete stock provisioning, and negative stock monitoring." },
  { area: "Payroll & HR", risks: 6, controls: 6, notes: "Ghost employees, duplicate bank accounts, and contractor labour PF/ESI compliance." },
  { area: "Fixed Assets & Capex", risks: 4, controls: 4, notes: "Capital expenditure justification, FAR maintenance, and tag uniqueness checks." },
  { area: "Cash & Bank", risks: 5, controls: 5, notes: "Bank reconciliations, signatory matrix adherence, and Section 40A(3)/269ST compliance." },
  { area: "Statutory Compliance", risks: 5, controls: 5, notes: "Highest-frequency finding area for MSMEs - GSTR-2B ITC matching, TDS 26AS, license renewals." },
  { area: "IT General Controls", risks: 4, controls: 4, notes: "Tally user rights, password policies, backup logs, and Segregation of Duties conflicts." },
  { area: "Related Party & Loans", risks: 3, controls: 3, notes: "Very common in family-owned MSMEs; Section 269SS/269T compliance and transfer pricing/arm's length." },
  { area: "Financial Closing & Reporting", risks: 4, controls: 4, notes: "Manual journal entry controls, monthly close checklists, balance sheet reconciliations." },
  { area: "Data Analytics & JE Testing", risks: 6, controls: 6, notes: "Cross-cutting 100% population tests on GL/JE listing: round-sum, weekend/off-hours, reversing entries." },
  { area: "Expenses & Overheads", risks: 3, controls: 3, notes: "Employee reimbursement duplicates, recurring overhead trend anomalies, and period-end cut-off." }
];

// ------------------------------------------------------------------------------
// 4. RISK RATING & MATERIALITY METHODOLOGY
// ------------------------------------------------------------------------------
const riskRatingMethodology = {
  matrix: {
    HighLikelihood: { LowImpact: "Medium", MediumImpact: "High", HighImpact: "High" },
    MediumLikelihood: { LowImpact: "Low", MediumImpact: "Medium", HighImpact: "High" },
    LowLikelihood: { LowImpact: "Low", MediumImpact: "Low", HighImpact: "Medium" }
  },
  clientRevenue: 800000000, // ₹80 Crore
  materiality: {
    overallRate: "1.0% - 2.0% of Revenue",
    overallLowerINR: 8000000,   // ₹80 Lakhs
    overallUpperINR: 16000000,  // ₹1.6 Crore
    performanceRate: "60% - 75% of Overall Materiality",
    performanceLowerINR: 4800000, // ₹48 Lakhs
    performanceUpperINR: 12000000, // ₹1.2 Crore
    trivialRate: "5% of Performance Materiality",
    trivialLowerINR: 240000,    // ₹2.4 Lakhs
    trivialUpperINR: 600000     // ₹6.0 Lakhs
  }
};

// ------------------------------------------------------------------------------
// 5. CAAT LIBRARY (DA-01 to DA-32 Linked Analytics Tests)
// ------------------------------------------------------------------------------
const caatAnalyticsLibrary = [
  {
    "id": "DA-01",
    "category": "Procurement & Payables (P2P)",
    "name": "Duplicate Payment Test",
    "linkedControls": "PUR-C03, EXP-C01",
    "dataset": "Payment Register / AP Ledger / Expense Claim Register",
    "keyFields": "Vendor/Payee ID, Invoice No, Invoice Date, Amount, Payment Date",
    "objective": "Detect vendors/payees paid twice for the same invoice/claim.",
    "logic": "Group by Payee+Amount+Invoice No (exact duplicate); also group by Payee+Amount+Date(+/-3 days) to catch re-keyed near-duplicates with a different reference number.",
    "tool": "Excel COUNTIFS / Power Query group-by / Python pandas.duplicated()",
    "threshold": "Any exact duplicate; near-duplicate within 3 days flagged for review",
    "followUp": "Trace to bank statement for double debit; confirm recovery or credit note raised"
  },
  {
    "id": "DA-02",
    "category": "Procurement & Payables (P2P)",
    "name": "Duplicate Invoice Number Test",
    "linkedControls": "PUR-C03",
    "dataset": "Purchase Register",
    "keyFields": "Vendor ID, Invoice No",
    "objective": "Same invoice number used more than once by the same vendor.",
    "logic": "COUNTIFS(Vendor, InvoiceNo) > 1",
    "tool": "Excel COUNTIFS / Power Query",
    "threshold": ">1 occurrence for the same vendor+invoice number",
    "followUp": "Verify against original invoice copies; check for double booking"
  },
  {
    "id": "DA-03",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "name": "Sequence / Gap Test",
    "linkedControls": "REV-C01, INV-C04",
    "dataset": "Sales Invoice Register / Delivery Challan or E-way Bill Register",
    "keyFields": "Document Number, Document Date",
    "objective": "Identify missing or out-of-sequence numbered documents, indicating unrecorded or suppressed transactions.",
    "logic": "Sort the numeric part of the document number ascending; compute the difference between consecutive numbers; flag gaps >1 and out-of-sequence dates.",
    "tool": "Excel sort + formula (=A2-A1) / Python set-difference against expected range",
    "threshold": "Any gap not matched to a cancelled/void document on record",
    "followUp": "Obtain explanation and copy of the missing/cancelled document"
  },
  {
    "id": "DA-04",
    "category": "Financial Reporting & ELC",
    "name": "Benford's Law Analysis",
    "linkedControls": "REV-C01, PUR-C02, FR-C01",
    "dataset": "Sales Register / Purchase Register / GL transaction listing",
    "keyFields": "Transaction Amount",
    "objective": "Test whether the first-digit distribution of amounts follows Benford's expected distribution; a significant deviation may indicate fabricated figures.",
    "logic": "Extract the first digit of each amount; compute actual % frequency for digits 1-9; compare to Benford's expected % (1: 30.1%, 2: 17.6% ... 9: 4.6%).",
    "tool": "Excel LEFT + COUNTIF / Python (benford-ish package or manual chi-square)",
    "threshold": "Deviation >5 percentage points on a digit, or a failed chi-square test at 5% significance",
    "followUp": "Investigate the population/transactions driving the deviation - use as a risk indicator, not standalone proof"
  },
  {
    "id": "DA-05",
    "category": "Financial Reporting & ELC",
    "name": "Round-Sum / Round-Number Test",
    "linkedControls": "REV-C02, JE-C02",
    "dataset": "Journal Entry Listing / Sales Register / Credit Note Register",
    "keyFields": "Amount",
    "objective": "Identify entries in exact round figures, statistically less common in genuine transactions.",
    "logic": "MOD(Amount,1000)=0 (adjust the rounding unit to entity materiality); count and value the round-sum population as a % of total.",
    "tool": "Excel MOD formula",
    "threshold": "Round entries exceeding 5-10% of population value, or any individually material round entry",
    "followUp": "Obtain rationale/support for each flagged material entry"
  },
  {
    "id": "DA-06",
    "category": "Cash, Banking & Treasury",
    "name": "Threshold / Structuring Test",
    "linkedControls": "ELC-C01, CB-C03, PUR-C06",
    "dataset": "Payment Register / Purchase Order Register / JE Listing",
    "keyFields": "Amount, Approver, Date, Vendor/Payee",
    "objective": "Identify transactions clustered just below an approval/authorization threshold, indicating deliberate structuring.",
    "logic": "COUNTIFS(Amount,\">=\"&Threshold*0.9,\"<\"&Threshold) - count and value of transactions in the 90-100% band below threshold; compare to the overall distribution shape.",
    "tool": "Excel COUNTIFS / histogram",
    "threshold": "Disproportionate clustering just below threshold vs a smooth distribution elsewhere",
    "followUp": "Identify the preparer/approver pattern involved; discuss with management"
  },
  {
    "id": "DA-07",
    "category": "Financial Reporting & ELC",
    "name": "Weekend / Holiday Posting Test",
    "linkedControls": "CB-C02, CB-C03, JE-C03",
    "dataset": "Journal Entry Listing / Bank Payment Register",
    "keyFields": "Posting Date, User ID",
    "objective": "Identify postings made on non-business days, which may indicate unauthorized activity.",
    "logic": "WEEKDAY(Date,2)>5 flags Saturday/Sunday; cross-reference a public-holiday list for holiday postings.",
    "tool": "Excel WEEKDAY function",
    "threshold": "Any weekend/holiday posting, particularly by users without a documented business reason",
    "followUp": "Obtain business justification and evidence of authorization"
  },
  {
    "id": "DA-08",
    "category": "Financial Reporting & ELC",
    "name": "After-Hours Posting Test",
    "linkedControls": "JE-C03",
    "dataset": "Journal Entry Listing (with timestamp)",
    "keyFields": "Posting Timestamp, User ID",
    "objective": "Identify entries posted outside normal business hours - a common fraud indicator.",
    "logic": "Extract the time portion of the timestamp; flag entries outside the entity's normal hours (e.g. before 9am / after 7pm).",
    "tool": "Excel TIME functions",
    "threshold": "Entries outside business hours, particularly by senior/admin users",
    "followUp": "Corroborate the business reason for after-hours access/posting"
  },
  {
    "id": "DA-09",
    "category": "ITGC, SoD & ERP Forensics",
    "name": "Non-Routine User / Unusual Combination Test",
    "linkedControls": "ELC-C01, JE-C01, JE-C06",
    "dataset": "Journal Entry Listing (with User ID/Preparer)",
    "keyFields": "User ID, User Role, Account Debited, Account Credited, Amount",
    "objective": "Identify JEs posted by users outside the routine accounts team, or postings to unusual account-pair combinations.",
    "logic": "Anti-join the posting User ID list against the authorized finance-user list; separately compare posted account pairs to a maintained 'unusual combination' rule list.",
    "tool": "Excel VLOOKUP / Power Query anti-join",
    "threshold": "Any posting by a non-finance user; any match to the unusual-combination list",
    "followUp": "Obtain explanation and verify approval evidence for each flagged entry"
  },
  {
    "id": "DA-10",
    "category": "Financial Reporting & ELC",
    "name": "Missing Narration Test",
    "linkedControls": "JE-C04",
    "dataset": "Journal Entry Listing",
    "keyFields": "Narration / Description field",
    "objective": "Identify JEs with blank or generic narration, reducing transparency and enabling concealment.",
    "logic": "ISBLANK(Narration) or LEN(Narration)<10, or narration matches a list of generic terms ('adjustment', 'misc', 'correction').",
    "tool": "Excel LEN / ISBLANK",
    "threshold": "Any material JE with no or generic narration",
    "followUp": "Request supporting rationale from the preparer"
  },
  {
    "id": "DA-11",
    "category": "Financial Reporting & ELC",
    "name": "Reversing Entry Test",
    "linkedControls": "JE-C05",
    "dataset": "Journal Entry Listing spanning period-end and the following period",
    "keyFields": "Account, Amount, Debit/Credit, Posting Date",
    "objective": "Identify entries posted near period-end that are exactly reversed shortly after, indicating possible earnings management.",
    "logic": "Self-join entries where Account+Amount appear as opposite Dr/Cr pairs within a defined window (e.g. 10 days) before/after period-end.",
    "tool": "Power Query self-join / Python pandas merge",
    "threshold": "Any material reversing pair spanning a reporting date",
    "followUp": "Assess business rationale and whether reported results at the cut-off date were affected"
  },
  {
    "id": "DA-12",
    "category": "ITGC, SoD & ERP Forensics",
    "name": "User Concentration Analysis",
    "linkedControls": "JE-C01",
    "dataset": "Journal Entry Listing",
    "keyFields": "User ID, Entry Count, Entry Value",
    "objective": "Identify unusual concentration of JE volume/value in a single user, especially outside their normal role.",
    "logic": "PivotTable of count and sum of JEs by User ID; rank and compare to the user's documented job role.",
    "tool": "Excel PivotTable",
    "threshold": "Disproportionate share of JE volume/value relative to the user's role",
    "followUp": "Corroborate with the role/responsibility matrix; investigate outliers"
  },
  {
    "id": "DA-13",
    "category": "Procurement & Payables (P2P)",
    "name": "Vendor-Employee Bank Account Match",
    "linkedControls": "PUR-C05",
    "dataset": "Vendor Master + Employee Master",
    "keyFields": "Bank Account Number, IFSC",
    "objective": "Identify vendor bank accounts matching an employee's personal bank account - a strong fictitious/shell-vendor indicator.",
    "logic": "Exact match of Bank Account Number (and IFSC) between the two master files.",
    "tool": "Excel VLOOKUP/MATCH / Power Query merge",
    "threshold": "Any exact match",
    "followUp": "High-priority investigation: verify vendor legitimacy, trace transaction/payment history"
  },
  {
    "id": "DA-14",
    "category": "Procurement & Payables (P2P)",
    "name": "Vendor-Employee PAN / Address Match",
    "linkedControls": "PUR-C05, IT-C01",
    "dataset": "Vendor Master + Employee Master",
    "keyFields": "PAN, Address, Phone, Email domain",
    "objective": "Identify vendors sharing PAN, address, phone or a personal email domain with an employee/director.",
    "logic": "Fuzzy/exact match on PAN and normalized address/phone across the two masters.",
    "tool": "Power Query merge / Python fuzzy matching (e.g. fuzzywuzzy/rapidfuzz)",
    "threshold": "Any match",
    "followUp": "Cross-check against the Related Party Register; assess disclosure requirement"
  },
  {
    "id": "DA-15",
    "category": "Procurement & Payables (P2P)",
    "name": "Split Purchase Order Test",
    "linkedControls": "PUR-C06",
    "dataset": "Purchase Order Register",
    "keyFields": "Vendor, PO Date, PO Amount",
    "objective": "Identify multiple POs to the same vendor around the same date whose combined value exceeds an approval threshold.",
    "logic": "Group by Vendor+Date(+/-2 days); sum PO Amount; flag groups where individual POs are below threshold but the sum is at/above it.",
    "tool": "Excel SUMIFS / PivotTable",
    "threshold": "Combined value crossing an approval threshold within a short window",
    "followUp": "Review approval trail and rationale for the split; identify the requester"
  },
  {
    "id": "DA-16",
    "category": "Procurement & Payables (P2P)",
    "name": "Three-Way Match Exception Report",
    "linkedControls": "PUR-C02, PUR-C07",
    "dataset": "PO Register + GRN Register + Purchase Invoice Register",
    "keyFields": "PO No, GRN No, Invoice No, Quantity, Price, Vendor",
    "objective": "Identify invoices booked/paid without a matching PO/GRN, or with quantity/price mismatches beyond tolerance.",
    "logic": "Join Invoice to PO and GRN on PO number; flag unmatched invoices and quantity/price variances beyond a defined tolerance (e.g. 2%).",
    "tool": "Power Query merge / Excel VLOOKUP",
    "threshold": "Any invoice without PO/GRN; variance beyond tolerance",
    "followUp": "Investigate unmatched/variant items with the purchase/stores team"
  },
  {
    "id": "DA-17",
    "category": "Procurement & Payables (P2P)",
    "name": "Price Variance Analysis",
    "linkedControls": "REV-C04, PUR-C02",
    "dataset": "Sales/Purchase Register + Approved Price Master",
    "keyFields": "Item, Invoiced Price, Approved Price",
    "objective": "Identify transactions invoiced at a price different from the approved master.",
    "logic": "VLOOKUP the invoiced price against the price master; compute % variance; flag beyond tolerance.",
    "tool": "Excel VLOOKUP",
    "threshold": "Variance beyond tolerance (e.g. 2-5%) without documented approval",
    "followUp": "Verify approval evidence for the deviation"
  },
  {
    "id": "DA-18",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "name": "Ageing & Outlier Analysis",
    "linkedControls": "REV-C03, INV-C02, FR-C03",
    "dataset": "AR/AP Sub-ledger or Inventory Stock Ledger",
    "keyFields": "Party/Item, Amount, Transaction Date, As-of Date",
    "objective": "Bucket balances by age and identify unusually old or large balances for follow-up/provisioning.",
    "logic": "Ageing = As-of Date minus Transaction Date; nested IF/IFS to bucket (0-30/31-60/61-90/90+); PivotTable to summarise.",
    "tool": "Excel IFS / PivotTable",
    "threshold": "Balances aged beyond agreed credit terms, or individually large old balances",
    "followUp": "Obtain subsequent recovery/movement evidence; assess provisioning adequacy"
  },
  {
    "id": "DA-19",
    "category": "Procurement & Payables (P2P)",
    "name": "Master Data Duplicate / Similarity Test",
    "linkedControls": "PUR-C01, PUR-C05, REV-C07",
    "dataset": "Vendor Master / Customer Master",
    "keyFields": "Name, PAN/GSTIN, Bank Account, Address",
    "objective": "Identify near-duplicate vendor/customer records under different names sharing the same identifiers.",
    "logic": "Group by PAN/GSTIN/Bank Account; flag groups containing more than one distinct Name.",
    "tool": "Excel COUNTIFS / Power Query group-by / fuzzy name matching",
    "threshold": "Any group with duplicate identifiers under different names",
    "followUp": "Investigate business rationale for multiple records; assess for structuring/related party concealment"
  },
  {
    "id": "DA-20",
    "category": "Statutory & Tax Shield",
    "name": "GSTR-2B vs Purchase Register Reconciliation",
    "linkedControls": "STAT-C01",
    "dataset": "GSTR-2B export + Purchase Register",
    "keyFields": "Vendor GSTIN, Invoice No, Invoice Date, Taxable Value, GST Amount",
    "objective": "Identify ITC claimed in books but not reflected in GSTR-2B, and vice versa.",
    "logic": "Join on GSTIN+Invoice No (or GSTIN+Amount+Date where invoice number formats differ); flag unmatched/variance items.",
    "tool": "Power Query merge / Python pandas merge",
    "threshold": "Any material unmatched ITC",
    "followUp": "Assess reversal requirement with interest; pursue vendor for correction/upload"
  },
  {
    "id": "DA-21",
    "category": "Statutory & Tax Shield",
    "name": "GSTR-1 vs Sales Register Reconciliation",
    "linkedControls": "REV-C05, STAT-C01",
    "dataset": "GSTR-1 filed data + Sales Register",
    "keyFields": "Customer GSTIN, Invoice No, Taxable Value, GST Amount",
    "objective": "Identify sales recorded in books but not reported in GSTR-1, or vice versa.",
    "logic": "Join/compare on Invoice No/Amount; flag differences.",
    "tool": "Power Query merge",
    "threshold": "Any material mismatch",
    "followUp": "Assess need for amendment in the next return / DRC-03 payment"
  },
  {
    "id": "DA-22",
    "category": "Statutory & Tax Shield",
    "name": "TDS Reconciliation (26AS/TRACES vs Books)",
    "linkedControls": "PUR-C04, STAT-C02",
    "dataset": "Form 26AS/TRACES export + TDS Ledger",
    "keyFields": "Deductee PAN, Section, Amount Deducted, Challan/BSR details",
    "objective": "Identify TDS deducted per books but not deposited/reflected in 26AS, or rate mismatches.",
    "logic": "Join on PAN+Section+Amount; flag unmatched or variance items.",
    "tool": "Excel VLOOKUP / Power Query",
    "threshold": "Any unmatched or short-deducted item",
    "followUp": "Compute interest exposure under Section 201; verify subsequent correction filed"
  },
  {
    "id": "DA-23",
    "category": "Inventory, Production & Scrap",
    "name": "Negative / Illogical Stock Test",
    "linkedControls": "INV-C01, INV-C05",
    "dataset": "Stock Ledger",
    "keyFields": "Item Code, Closing Quantity",
    "objective": "Identify items with negative or otherwise illogical closing stock quantities.",
    "logic": "Filter Closing Quantity < 0.",
    "tool": "Excel Filter / COUNTIF",
    "threshold": "Any negative balance",
    "followUp": "Investigate root cause - unrecorded purchase, data-entry error, or theft"
  },
  {
    "id": "DA-24",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "name": "Sales/Purchase Return Trend & Outlier Analysis",
    "linkedControls": "REV-C02",
    "dataset": "Credit Note / Return Register",
    "keyFields": "Customer, Amount, Date, Sales Person",
    "objective": "Identify unusual spikes in returns by customer, sales person or period, potentially indicating channel-stuffing.",
    "logic": "PivotTable of return value by month/customer/sales person; compute Z-score to identify outliers.",
    "tool": "Excel PivotTable + Z-score formula",
    "threshold": ">2 standard deviations from the mean, or concentration in a single customer/sales person",
    "followUp": "Investigate the outlier's drivers with the sales team"
  },
  {
    "id": "DA-25",
    "category": "Payroll & Human Resources",
    "name": "Duplicate Employee Bank Account Test",
    "linkedControls": "PAY-C01, PAY-C05",
    "dataset": "Employee Master / Payroll Bank Transfer File",
    "keyFields": "Employee ID, Bank Account Number, IFSC",
    "objective": "Identify two or more employee records sharing a bank account - a ghost-employee indicator.",
    "logic": "COUNTIFS grouped by Bank Account Number; flag groups with >1 distinct Employee ID.",
    "tool": "Excel COUNTIFS / PivotTable",
    "threshold": "Any duplicate account across distinct Employee IDs",
    "followUp": "Verify employee existence via HR/biometric attendance records"
  },
  {
    "id": "DA-26",
    "category": "Payroll & Human Resources",
    "name": "Payroll Variance / Outlier Test",
    "linkedControls": "PAY-C02",
    "dataset": "Payroll Register (multi-month)",
    "keyFields": "Employee ID, Month, Gross Pay",
    "objective": "Identify employees with unexplained month-on-month salary spikes/drops.",
    "logic": "Compute % change month-over-month per employee; flag beyond a defined tolerance (e.g. +/-20%) without a corresponding HR change event.",
    "tool": "Excel formula + PivotTable",
    "threshold": "Variance beyond tolerance without HR documentation",
    "followUp": "Trace to HR approval for increment/change"
  },
  {
    "id": "DA-27",
    "category": "Fixed Assets & Capex",
    "name": "Duplicate Asset Tag Test",
    "linkedControls": "FA-C02, FA-C04",
    "dataset": "Fixed Asset Register",
    "keyFields": "Asset Tag / Serial Number",
    "objective": "Identify duplicate asset tags indicating double-counting or data-entry errors.",
    "logic": "COUNTIF(AssetTag) > 1.",
    "tool": "Excel COUNTIF",
    "threshold": "Any duplicate",
    "followUp": "Physically verify and correct the fixed asset register"
  },
  {
    "id": "DA-28",
    "category": "Cash, Banking & Treasury",
    "name": "Cash Structuring / Threshold Test",
    "linkedControls": "CB-C01, CB-C05, RPT-C02",
    "dataset": "Cash Book / Payment & Receipt Register",
    "keyFields": "Amount, Party, Date, Mode of Payment",
    "objective": "Identify cash transactions at or just below statutory disallowance/reporting thresholds (e.g. Sec 40A(3) Rs 10,000; Sec 269ST Rs 2,00,000; Sec 269SS/269T loan limits Rs 20,000).",
    "logic": "Filter Mode=Cash and Amount within a defined band below each threshold; also check same-party same-day multiple cash transactions summing above the threshold.",
    "tool": "Excel Filter / SUMIFS",
    "threshold": "Any transaction/cluster within the structuring band",
    "followUp": "Assess disallowance/penalty exposure; discuss with management/tax consultant"
  },
  {
    "id": "DA-29",
    "category": "Related Party & Governance",
    "name": "Related Party Keyword & Cross-Reference Test",
    "linkedControls": "RPT-C01, RPT-C03, REV-C06",
    "dataset": "Vendor Master + Customer Master + Related Party Register + Employee/Director Master",
    "keyFields": "Name, PAN, Address, Bank Account",
    "objective": "Identify vendors/customers whose identifiers match or resemble a director/promoter/employee or a declared related party.",
    "logic": "Exact/fuzzy match of Name, PAN, Address, Bank Account across the master files; flag matches not already on the Related Party Register.",
    "tool": "Power Query merge / Python fuzzy matching",
    "threshold": "Any match not disclosed",
    "followUp": "Assess disclosure and arm's-length pricing requirements"
  },
  {
    "id": "DA-30",
    "category": "Financial Reporting & ELC",
    "name": "Sales / Expense Cut-Off Test",
    "linkedControls": "REV-C01, REV-C06, EXP-C03",
    "dataset": "Sales Register + Delivery/E-way Bill Register, or Purchase/Expense Register + GRN",
    "keyFields": "Invoice/Bill Date, Delivery/Receipt Date, Amount",
    "objective": "Identify transactions recorded in one period but delivered/received in another.",
    "logic": "For transactions within a defined window of period-end, compare the transaction date to the delivery/receipt date; flag where they fall in different accounting periods.",
    "tool": "Excel formula / Power Query",
    "threshold": "Any mismatch within the cut-off window, weighted by materiality",
    "followUp": "Assess the correct period; propose an adjustment if material"
  },
  {
    "id": "DA-31",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "name": "Discount / Credit Note Concentration Test",
    "linkedControls": "REV-C02, REV-C04",
    "dataset": "Credit Note Register / Sales Register",
    "keyFields": "Customer, Sales Person, Discount %, Amount",
    "objective": "Identify sales persons or customers with disproportionately high discounts/credit notes relative to peers.",
    "logic": "PivotTable of average discount %/credit note value by sales person and customer; rank and flag outliers.",
    "tool": "Excel PivotTable",
    "threshold": "Materially above peer average (e.g. >2x the average)",
    "followUp": "Investigate business rationale; review approval evidence"
  },
  {
    "id": "DA-32",
    "category": "Financial Reporting & ELC",
    "name": "Trend & Ratio Analytics (Analytical Review)",
    "linkedControls": "ELC-C04, FR-C02, FR-C04, EXP-C02",
    "dataset": "Trial Balance / GL - multiple periods",
    "keyFields": "Account, Period, Amount",
    "objective": "Identify account balances/ratios deviating significantly from historical trend or budget.",
    "logic": "Compute period-on-period % change and key ratios (GP margin, expense-to-revenue, debtor/creditor days); flag variances beyond a defined tolerance.",
    "tool": "Excel PivotTable + trend formulas / Python pandas",
    "threshold": "Variance beyond tolerance (e.g. >15-20%) without documented explanation",
    "followUp": "Obtain management explanation; corroborate with supporting evidence"
  },
  {
    "id": "DA-33",
    "name": "PO Created After Invoice Date (Ex-Post-Facto / Backdated POs)",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C01, PUR-C02, ELC-C01",
    "dataset": "Purchase Order Register & Inward Purchase Sub-ledger",
    "keyFields": "PO Number, PO Date, Vendor Invoice No, Invoice Date, GRN Date, PO Total Value, PO Creator ID",
    "objective": "Identify procurement transactions where purchase orders were generated after supplier invoice or delivery date to circumvent prior budgetary authorization controls.",
    "logic": "Filter: PO Date > Invoice Date OR PO Date > GRN Date. Calculate Days Variance = PO Date - Invoice Date. Flag any variance >0 days; rank by total expenditure.",
    "tool": "Power Query / SQL (DATEDIFF) / Python pandas (df['po_date'] > df['inv_date'])",
    "threshold": "Any PO raised post-facto >0 days; high priority if >₹1,00,000",
    "followUp": "Inquire with Procurement Head; verify whether emergency purchase policy was formally invoked or if authorization workflow was bypassed."
  },
  {
    "id": "DA-34",
    "name": "Ghost / Dormant Vendor Sudden Activation & High-Velocity Billing",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C01, PUR-C05, ELC-C01",
    "dataset": "Vendor Master & AP Inward Ledger (Historical 2 Years)",
    "keyFields": "Vendor ID, Vendor Name, Last Activity Date, Current Invoice Date, Invoice Amount, Bank Account, Onboarding Date",
    "objective": "Detect dormant vendors with zero billing in 180+ days that suddenly receive massive purchase orders and immediate payment release.",
    "logic": "Calculate Days Inactive = Current Invoice Date - Previous Invoice Date. Flag where Days Inactive > 180 and Current Invoice Amount > ₹2,00,000.",
    "tool": "SQL Window Functions (LAG) / Python pandas",
    "threshold": "Inactivity >180 days with sudden invoice >₹2,00,000",
    "followUp": "Perform physical vendor site verification and bank account ownership check; confirm independent KYC refresh."
  },
  {
    "id": "DA-35",
    "name": "Round-Trip Vendor Transactions & Mutual Credit Offsetting",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "RPT-C01, PUR-C03, REV-C01",
    "dataset": "Vendor Master, Customer Master, General Ledger (Contra Entries)",
    "keyFields": "Entity PAN, GSTIN, Vendor Name, Customer Name, JV Reference, Contra Amount, Settled Date",
    "objective": "Identify entities that operate simultaneously as Vendor and Customer, where mutual balances are offset via Journal Vouchers to inflate turnover or camouflage diverted cash.",
    "logic": "Inner join Vendor Master with Customer Master on PAN or GSTIN. Filter GL vouchers where both AP and AR accounts are adjusted in the same transaction without banking debit/credit.",
    "tool": "SQL Inner Join / Python pandas",
    "threshold": "Any circular party offset >₹5,00,000 per quarter",
    "followUp": "Inspect underlying commercial rationale, board approval under Section 188 of Companies Act, and GST outward/inward tax symmetry."
  },
  {
    "id": "DA-36",
    "name": "Price Spike / Rate Variance Outlier on Same Raw Material Across Vendors",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C02, PUR-C07",
    "dataset": "Purchase Order Line Items & Inward Material Receipts",
    "keyFields": "Item Code, Description, Vendor ID, Unit Price, Purchase Date, Quantity, Currency",
    "objective": "Detect procurement collusion or unauthorized price hikes by analyzing unit rate dispersion across multiple suppliers for identical raw materials.",
    "logic": "Group by Item Code. Calculate Mean Unit Price, Standard Deviation, and Z-Score for each line item. Flag transactions where Z-Score > 2.5 or Unit Price > 15% above median.",
    "tool": "Python scipy.stats / Power Query Z-Score / SQL Window Functions",
    "threshold": "Unit rate >15% above median or Z-score >2.5",
    "followUp": "Review rate contracts and cross-examine buyer negotiations for lithium cells, copper busbars, and aluminum extrusions."
  },
  {
    "id": "DA-37",
    "name": "Freight & Port Demurrage Charges Runaway Velocity",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "EXP-C01, PUR-C02",
    "dataset": "Transporter Invoices, Customs Import Bills of Entry, Port Clearance Invoices",
    "keyFields": "Transporter Name, Bill of Entry No, Container No, Freight Amount, Demurrage / Detention Amount, Port Clearance Date",
    "objective": "Identify excessive port demurrage penalties and unauthorized logistics price markups on imported lithium cell containers.",
    "logic": "Filter: Expense Head = 'Port Demurrage' OR 'Container Detention'. Calculate Freight-to-Material Value Ratio. Flag ratios >12% or demurrage charges >₹50,000.",
    "tool": "Excel Pivot / SQL Aggregate / Python pandas",
    "threshold": "Any demurrage charges >₹25,000 or freight variance >15% vs standard rate matrix",
    "followUp": "Audit clearing agent contracts and customs clearance delays at Nhava Sheva / Chennai port."
  },
  {
    "id": "DA-38",
    "name": "Single-Bidder / Sole-Source Contract Threshold Clustering",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C06, ELC-C01",
    "dataset": "Procurement RFQ Logs, Vendor Bid Evaluation Summaries, PO Register",
    "keyFields": "PO Number, Total Value, Bids Received Count, Approver ID, Procurement Category, PO Date",
    "objective": "Detect procurement awards granted on a single-quote basis clustered just below the mandatory 3-bid competitive tendering threshold (e.g. ₹24,50,000 vs ₹25,00,000 limit).",
    "logic": "Filter: Bids Received = 1 AND PO Amount BETWEEN (Threshold * 0.90) AND Threshold. Count frequency by buyer.",
    "tool": "SQL WHERE BETWEEN / Python pandas",
    "threshold": "More than 2 single-bid POs within 10% of approval threshold",
    "followUp": "Examine competitive bidding documentation and verify whether requirements were artificially fragmented."
  },
  {
    "id": "DA-39",
    "name": "Vendor Bank Account / IFSC Change Prior to High-Value Disbursement",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C05, CB-C02, IT-C01",
    "dataset": "Vendor Master Audit Log / Change Log & Bank Payment Register",
    "keyFields": "Vendor ID, Old Bank Account, New Bank Account, Change Date, Changed By User, Payment Date, Payment Amount, Payment UTR",
    "objective": "Prevent Business Email Compromise (BEC) and bank account diversion fraud where bank details are altered shortly before substantial payments are processed.",
    "logic": "Filter: Payment Date - Master Change Date <= 14 Days AND Payment Amount > ₹5,00,000. Flag where change lacked dual-authorized written confirmation.",
    "tool": "SQL DateDiff / Python pandas",
    "threshold": "Any bank account modification within 14 days of disbursement >₹5,00,000",
    "followUp": "Inspect independent bank verification letter and telephonic callback log with vendor CFO."
  },
  {
    "id": "DA-40",
    "name": "Standard BOM vs Actual Consumption Yield Variance (Abnormal Loss)",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C02, INV-C04",
    "dataset": "MES Production Batch Logs, Work Orders & Raw Material Issue Slips",
    "keyFields": "Work Order No, Finished Model (2W/3W), Input Item Code, Standard BOM Qty, Actual Issued Qty, Yield Loss %, Scrap Log Ref",
    "objective": "Detect unrecorded scrap diversion, theft of high-value battery cells, or uncalibrated laser welding waste on assembly lines.",
    "logic": "Calculate Consumption Variance = ((Actual Issued - Standard BOM) / Standard BOM) * 100. Flag batches where Variance > 3.5% (abnormal scrap threshold).",
    "tool": "Power BI / SQL Group By / Python pandas",
    "threshold": "Yield loss variance >3.5% on battery cells or >5.0% on copper wiring harnesses",
    "followUp": "Conduct physical verification of battery cleanroom scrap bins and inspect laser welding reject logs."
  },
  {
    "id": "DA-41",
    "name": "Slow-Moving & Dead Stock Cell Aging (>180 Days in Cleanroom)",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C01, INV-C05",
    "dataset": "Inventory Valuation Ledger, Cell Internal Resistance (IR) Test Logs",
    "keyFields": "Batch/Lot No, Cell Type (21700 LFP), Inward Date, Last Movement Date, Stock Qty, Book Value, Shelf Life Expiry",
    "objective": "Enforce Ind AS 2 lower of cost and net realizable value (NRV) write-down and prevent safety hazards from degraded lithium-ion cells.",
    "logic": "Calculate Aging Days = Current Date - Inward Date. Filter: Aging Days > 180 AND Stock Status = 'Unassembled'. Calculate required inventory provision.",
    "tool": "Excel DATEDIF / Python pandas",
    "threshold": "Raw material cells aging >180 days or finished battery packs aging >90 days",
    "followUp": "Perform cell capacity retention test and evaluate required Ind AS 2 obsolescence provision."
  },
  {
    "id": "DA-42",
    "name": "Phantom Inventory / Repetitive Manual Cycle-Count Adjustments",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C04, INV-C05, ELC-C01",
    "dataset": "ERP Material Document Journal / Stock Adjustment Logs",
    "keyFields": "Adjustment Doc No, Item Code, Plant, Movement Type (e.g. 701/702), Quantity, Value, Reason Code, User ID",
    "objective": "Identify inventory shrinkage or phantom stock being concealed through repetitive positive and negative manual journal adjustments.",
    "logic": "Filter: Movement Type IN ('Physical Count Gain', 'Physical Count Loss'). Group by Item Code and User ID. Flag items with >3 manual adjustments per quarter or net write-offs >₹1,00,000.",
    "tool": "SQL Group By / Python pandas",
    "threshold": "Net write-off >₹1,00,000 or >3 manual cycle count entries on the same SKU",
    "followUp": "Verify physical inventory tag sheets and confirm plant manager authorization."
  },
  {
    "id": "DA-43",
    "name": "Job-Work Delivery Challan (Rule 45) Material Reconciliation Gap",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "STAT-C01, INV-C04",
    "dataset": "GST Job-Work Register (Annexure IV / Form ITC-04) & Production Receipts",
    "keyFields": "Challan No, Challan Date, Subcontractor Name, Input Material (e.g. Chassis Tubes), Sent Qty, Finished Assembly Received Qty, Invisible Loss Allowance",
    "objective": "Detect unreturned raw materials at subcontractor premises exceeding permissible scrap loss, preventing both physical loss and GST Section 143 deemed supply taxation.",
    "logic": "Calculate Reconciliation Deficit = Sent Qty - (Received Qty * BOM Factor) - Permissible Scrap Qty. Flag where Deficit > 2% of sent weight.",
    "tool": "SQL Left Join / Python pandas",
    "threshold": "Material reconciliation variance >2.0% or challan open >180 days",
    "followUp": "Issue formal demand notice to job-worker for physical scrap reconciliation."
  },
  {
    "id": "DA-44",
    "name": "Scrap Sale Realization vs Production Volume Benchmark",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "REV-C01, REV-C04, CB-C05",
    "dataset": "Daily Vehicle Production Logs, Aluminum Die-Casting Weight Logs, Scrap Sales Invoices",
    "keyFields": "Month, Gross Raw Material Melted (kg), Net Casting Weight (kg), Theoretical Scrap (kg), Billed Scrap Weight (kg), Cash Sales Ref",
    "objective": "Uncover unrecorded factory scrap sales and off-the-books cash realizations from high-value aluminum runners, copper scrap, and battery casings.",
    "logic": "Calculate Scrap Realization Ratio = Billed Scrap Weight / (Gross Raw Material - Net Finished Output). Flag months where ratio falls below 90% of engineering benchmark.",
    "tool": "Excel Ratio Formula / Python pandas",
    "threshold": "Scrap realization <90% of theoretical generation or scrap cash receipts >₹10,000",
    "followUp": "Inspect factory weighbridge automation logs and gate pass registers."
  },
  {
    "id": "DA-45",
    "name": "Work-in-Progress (WIP) Aging on Assembly Lines (>45 Days)",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C02, FR-C03",
    "dataset": "Shop Floor MES Order Tracking & WIP Floor Inventory",
    "keyFields": "Chassis VIN, Battery Pack Serial, Work Order Date, Current Station, Stagnant Days, Accumulated Cost",
    "objective": "Detect abandoned or cannibalized vehicles and battery packs on factory assembly lines inflating WIP asset balances.",
    "logic": "Filter: Production Status = 'In Progress' AND Current Date - Station Entry Date > 45 Days. Sum accumulated material and labor cost.",
    "tool": "SQL WHERE / Python pandas",
    "threshold": "Any assembly unit stagnant >45 days without station advancement",
    "followUp": "Inspect physical vehicles on line; confirm if components were cannibalized for other orders."
  },
  {
    "id": "DA-46",
    "name": "Same-Day Billing & Cancellation / High Credit Note Velocity",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "REV-C01, REV-C02",
    "dataset": "Sales Invoice Register & Credit Note Register",
    "keyFields": "Invoice No, Invoice Date, Cancellation Date, Dealer ID, Total Value, Cancellation Reason, Transporter E-Way Bill No",
    "objective": "Detect channel stuffing and artificial revenue inflation where vehicles are invoiced at month-end to hit sales targets and cancelled immediately in the next period.",
    "logic": "Filter: Invoice Date in Last 3 Days of Month AND (Cancellation Date - Invoice Date <= 5 Days OR Credit Note Date in Next Month First 5 Days).",
    "tool": "SQL DATEDIFF / Python pandas",
    "threshold": "Cancelled sales invoices >2% of monthly turnover or single dealer cancellation >₹10,00,000",
    "followUp": "Examine vehicle dispatch e-Way bills to confirm if vehicles ever physically departed factory gates."
  },
  {
    "id": "DA-47",
    "name": "Post-Sale Rate Discount & Rebate Concentration Analysis",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "REV-C02, REV-C04",
    "dataset": "Credit Note Register, Dealer Discount Schemes, Master Price Approval Matrix",
    "keyFields": "Credit Note No, Date, Dealer ID, Dealer Name, Rebate Scheme Ref, Discount Amount, Authorized By User",
    "objective": "Identify preferential off-invoice discounts and kickbacks granted to select dealerships bypassing approved commercial pricing policies.",
    "logic": "Group by Dealer ID. Calculate Discount % = Total Credit Notes / Total Gross Billed. Rank dealerships by discount ratio. Flag where Discount % > 2x network average.",
    "tool": "SQL Group By / Python pandas",
    "threshold": "Dealer discount ratio >2x peer median or credit note issued without MD/CFO approval",
    "followUp": "Verify dealer agreement terms and validate authorized rebate circulars."
  },
  {
    "id": "DA-48",
    "name": "Dealership Credit Limit Breach / Over-Due Aging Velocity",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "REV-C03, FR-C03",
    "dataset": "Accounts Receivable Sub-ledger & Dealership Master Credit Limits",
    "keyFields": "Dealer ID, Dealer Name, Sanctioned Credit Limit, Outstanding Balance, Days Sales Outstanding (DSO), Overdue >60d Amount",
    "objective": "Prevent bad debt accumulation and default risk by identifying dealerships dispatched vehicles despite exceeding credit limits and aging thresholds.",
    "logic": "Filter: Outstanding Balance > Sanctioned Credit Limit OR Overdue Balance (>60 Days) > 0. Cross-reference with current month dispatches.",
    "tool": "SQL Join / Python pandas",
    "threshold": "Credit limit breached by >10% or dispatches continuing with >60-day overdue balance",
    "followUp": "Place ERP dispatch hold on defaulting dealer accounts and verify bank guarantees."
  },
  {
    "id": "DA-49",
    "name": "PM E-DRIVE Aadhaar Buyer Duplication / Fraudulent Subsidy Claims",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "STAT-C01, REV-C05, ELC-C01",
    "dataset": "CleanTech Central Portal Subsidy Upload Files & Vehicle Sales Register",
    "keyFields": "Chassis VIN, Motor No, Buyer Aadhaar Hash / PAN, Customer Name, Subsidy Amount Claimed (₹10,000), Dealer ID, Portal Status",
    "objective": "Detect fraudulent double-claiming of EV buyer subsidies on the same Aadhaar/PAN across multiple dealerships, preventing central government clawback and criminal penalties.",
    "logic": "Group by Buyer Identifier (Aadhaar Hash/PAN). Flag instances where Count(Chassis VIN) > 1 within the same financial year under individual buyer subsidy rules.",
    "tool": "SQL Group By HAVING Count > 1 / Python pandas",
    "threshold": "Any duplicate buyer ID claimed more than once across individual vehicle sales",
    "followUp": "Reverse ineligible subsidy claim on Ministry of Heavy Industries portal before statutory audit."
  },
  {
    "id": "DA-50",
    "name": "Delivery vs E-Way Bill Transporter Distance Mismatch (Ghost Movement)",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "STAT-C01, REV-C01",
    "dataset": "E-Way Bill Portal Logs, Transporter Freight BRS & GPS Toll Records",
    "keyFields": "E-Way Bill No, Dispatch PIN, Destination PIN, Portal Stated Distance (km), Actual Road Distance (Google API), Vehicle Registration No",
    "objective": "Detect circular trading and bogus invoicing where e-Way bills report fictitious vehicle movement with impossible transit times or unfeasible vehicle types.",
    "logic": "Calculate Distance Variance = |Stated Distance - Expected Distance|. Flag where Variance > 30% OR vehicle registration pattern matches two-wheelers/cars instead of commercial haulers.",
    "tool": "Python regex + Distance API / SQL",
    "threshold": "Distance mismatch >30% or non-commercial vehicle registration on heavy goods movement",
    "followUp": "Verify FASTag toll plaza transit timestamps on National Highway routes."
  },
  {
    "id": "DA-51",
    "name": "High-Frequency Same-Day Cash Withdrawals (Structuring / Smurfing)",
    "category": "Cash, Banking & Treasury",
    "linkedControls": "CB-C01, CB-C05",
    "dataset": "Bank Account Statements (Current Accounts) & Petty Cash Ledgers",
    "keyFields": "Bank Account No, Transaction Date, Withdrawal Amount, Cheque No, Bearer Name, Purpose Code",
    "objective": "Identify smurfing / structured cash withdrawals designed to evade bank cash transaction reporting (CTR) thresholds and Income Tax Section 40A(3) disallowances.",
    "logic": "Filter: Transaction Type = 'Debit' AND Mode = 'Cash Withdrawal'. Group by Date and Account. Flag dates where Daily Aggregate > ₹50,000 or multiple transactions each <₹10,000 occur within 48 hours.",
    "tool": "SQL Group By / Python pandas",
    "threshold": "Daily cash withdrawal >₹50,000 or >2 withdrawals of ₹9,500–₹9,999 in a single week",
    "followUp": "Examine petty cash expense vouchers and cross-check physical cash in factory vault."
  },
  {
    "id": "DA-52",
    "name": "Unreconciled Bank Transit Items (BRS Stale Debits >90 Days)",
    "category": "Cash, Banking & Treasury",
    "linkedControls": "CB-C03, FR-C01",
    "dataset": "Bank Reconciliation Statements (BRS) for All Active Accounts",
    "keyFields": "Bank Account, Cheque/Ref No, Booking Date, Presentation Date, Amount, Debit/Credit Indicator, Aging Days",
    "objective": "Identify unrecorded bank debits, fictitious deposits, or suppressed disbursements lingering in bank reconciliations.",
    "logic": "Filter: BRS Unreconciled Items WHERE Aging Days > 90. Segregate stale cheques issued (>90 days) and uncredited customer deposits.",
    "tool": "Excel Filter / SQL WHERE / Python pandas",
    "threshold": "Any debit or credit lingering unreconciled >90 days or individual item >₹1,00,000",
    "followUp": "Obtain bank ledger certificates; write back stale cheques or write off dishonored cheques."
  },
  {
    "id": "DA-53",
    "name": "Forex Hedging & Import Letter of Credit (LC) Utilization Mismatch",
    "category": "Cash, Banking & Treasury",
    "linkedControls": "CB-C01, FR-C02",
    "dataset": "Overseas Cell Import Contracts, Forward Hedging Contracts, Bank LC Registers",
    "keyFields": "LC Number, Beneficiary (Amperex/CATL), USD Amount, Maturity Date, Hedged Exchange Rate, Spot Rate, Forward Contract Ref",
    "objective": "Identify unhedged foreign currency exchange exposures on imported battery cell shipments risking major mark-to-market P&L losses under Ind AS 21.",
    "logic": "Left Join Import LCs with Forward Contracts on Currency and Maturity Date. Calculate Unhedged Amount = Total LC Exposure - Hedged Forward Value. Flag unhedged exposure when USD/INR volatility > 3%.",
    "tool": "Python / SQL Outer Join",
    "threshold": "Unhedged foreign currency exposure >USD 250,000",
    "followUp": "Present treasury risk report to CFO; execute forward cover per board policy."
  },
  {
    "id": "DA-54",
    "name": "Bank Loan Covenant Financial Ratio Monitoring",
    "category": "Cash, Banking & Treasury",
    "linkedControls": "CB-C01, FR-C04",
    "dataset": "Monthly Balance Sheet & Trial Balance Extracts",
    "keyFields": "Period, Current Assets, Current Liabilities, Total Debt, Tangible Net Worth, EBITDA, Interest Expense",
    "objective": "Monitor contractual banking covenants (HDFC & ICICI ₹32 Cr credit facilities) to prevent technical default, penal interest (2% p.a.), or credit freeze.",
    "logic": "Calculate Current Ratio (Target >= 1.33), Debt-to-Equity (Target <= 1.50), and Interest Service Coverage Ratio (ISCR >= 2.50). Flag periods breaching covenant thresholds.",
    "tool": "Python Financial Model / Excel Formula",
    "threshold": "Current Ratio <1.30, Debt-to-Equity >1.50, or ISCR <2.50",
    "followUp": "Prepare covenant compliance certificate for consortium banks with remedial equity infusion plan."
  },
  {
    "id": "DA-55",
    "name": "Ghost Employee Detection (Zero PF/ESI UAN with Active Salary Credit)",
    "category": "Payroll & Human Resources",
    "linkedControls": "PAY-C01, PAY-C02",
    "dataset": "Monthly Payroll Register & EPFO / ESIC Electronic Challan Returns (ECR)",
    "keyFields": "Employee ID, Name, Bank Account No, PAN, Salary Credit (₹), PF UAN No, ESIC No, Department",
    "objective": "Uncover fictitious 'ghost' workers on contractual assembly rolls whose salaries are siphoned off by floor supervisors.",
    "logic": "Left Join Payroll Register with EPFO ECR on UAN. Filter: Net Salary > ₹15,00,000 AND (PF UAN IS NULL OR PF UAN = '000000000000' OR EPFO Status = 'Inactive').",
    "tool": "SQL Left Join / Python pandas",
    "threshold": "Any employee paid salary without verifiable EPFO UAN or Aadhaar match",
    "followUp": "Conduct unannounced physical headcount audit on Chakan shop floor shifts."
  },
  {
    "id": "DA-56",
    "name": "Terminated Employee Continuing Salary / Post-Exit Disbursements",
    "category": "Payroll & Human Resources",
    "linkedControls": "PAY-C01, PAY-C05",
    "dataset": "HR Resignation/Exit Master & Monthly Bank Salary Disbursement Files",
    "keyFields": "Employee ID, Name, Official Date of Relieving, Salary Month, Payment Date, Net Disbursed Amount",
    "objective": "Prevent unauthorized salary payments continuing after employee exit due to delayed HR-to-Finance notification.",
    "logic": "Join Exit Master with Payroll Register on Employee ID. Filter: Payroll Processing Date > Date of Relieving + 30 Days (excluding final settlement adjustments).",
    "tool": "SQL Inner Join / Python pandas",
    "threshold": "Any standard salary disbursement processed >30 days after employee exit date",
    "followUp": "Initiate immediate bank recall/recovery and audit payroll clearance sign-offs."
  },
  {
    "id": "DA-57",
    "name": "Excessive Overtime (OT) Hours Beyond Factories Act Limits",
    "category": "Payroll & Human Resources",
    "linkedControls": "PAY-C02, ELC-C01",
    "dataset": "Biometric Punch Logs & Overtime Wage Calculation Register",
    "keyFields": "Employee ID, Department, Normal Hours, OT Hours Logged, OT Rate (2x Basic), Total OT Pay (₹), Shift Date",
    "objective": "Identify non-compliance with the Factories Act, 1948 (max 50 OT hours/quarter or 9 hours/day) and detect falsified overtime logs.",
    "logic": "Group by Employee ID and Quarter. Calculate Total OT Hours. Flag employees where OT Hours > 50 in a quarter OR daily work hours > 12.",
    "tool": "SQL Group By / Python pandas",
    "threshold": "OT hours >50 per quarter per worker or OT pay >50% of basic salary",
    "followUp": "Inspect factory inspectorate compliance log and line supervisor punch overrides."
  },
  {
    "id": "DA-58",
    "name": "Employee Direct Expense Claims Clustered Just Below Receipt Policy",
    "category": "Payroll & Human Resources",
    "linkedControls": "EXP-C01, EXP-C03",
    "dataset": "Employee Travel & Business Expense Reimbursement Register",
    "keyFields": "Claim ID, Employee ID, Expense Head, Claim Amount, Receipt Attached (Y/N), Approver ID",
    "objective": "Detect fraudulent expense claims structured just below receipt mandatory attachment limits (e.g. ₹950–₹999 or ₹4,900–₹4,999).",
    "logic": "Filter: Claim Amount BETWEEN (Threshold - 50) AND Threshold AND Receipt Attached = 'N'. Count claims per employee. Flag employees with >3 clustered claims.",
    "tool": "SQL WHERE BETWEEN / Python pandas",
    "threshold": ">3 unvouched claims within 5% of threshold by single employee",
    "followUp": "Sample claims for travel log substantiation and fuel bill verification."
  },
  {
    "id": "DA-59",
    "name": "High-Risk Segregation of Duties (SoD) Toxic Role Combinations",
    "category": "ITGC, SoD & ERP Forensics",
    "linkedControls": "IT-C01, ELC-C01",
    "dataset": "ERP User Role & Authorization Matrix (Tally / SAP B1)",
    "keyFields": "User ID, User Name, Assigned Roles, Module Permissions (Create Vendor, Approve PO, Post Invoice, Release Payment)",
    "objective": "Identify users possessing conflicting transactional powers capable of executing end-to-end fraud without independent oversight.",
    "logic": "Cross-reference user privilege matrix against Toxic Combinations Library (e.g. Vendor Master Edit + Payment Release; or PO Create + GRN Post). Flag active dual roles.",
    "tool": "Python NetworkX / Matrix Cross-Tab",
    "threshold": "Any single user holding conflicting Maker and Checker authorization in ERP",
    "followUp": "De-provision conflicting role and enforce dual-authorization workflow."
  },
  {
    "id": "DA-60",
    "name": "Shared & Generic User ID Activity on Financial Modules",
    "category": "ITGC, SoD & ERP Forensics",
    "linkedControls": "IT-C01, JE-C01",
    "dataset": "ERP Transaction Log / Audit Trail by User ID",
    "keyFields": "Transaction Doc No, Voucher Type, Amount, Posting Timestamp, User ID (admin, cashier, accts1), Terminal IP",
    "objective": "Ensure compliance with MCA Rule 3(1) audit trail edit-log requirements by identifying transactions booked under generic logins lacking individual accountability.",
    "logic": "Filter: User ID IN ('admin', 'admin_user', 'cashier', 'accounts', 'user1', 'guest', 'finance'). Group by Voucher Type and calculate total financial value.",
    "tool": "SQL WHERE IN / Python pandas",
    "threshold": "Any financial entry >₹10,000 booked under generic or non-named credentials",
    "followUp": "Deactivate generic accounts; mandate individual named employee accounts with MFA."
  },
  {
    "id": "DA-61",
    "name": "Superuser / Privileged Access Audit Log Tampering & Disabling",
    "category": "ITGC, SoD & ERP Forensics",
    "linkedControls": "IT-C01, FR-C05",
    "dataset": "Database Change Logs & Application Server Configuration Audit Trail",
    "keyFields": "Log Entry ID, Timestamp, Event Type, Configuration Parameter, Old Value, New Value, DB User ID",
    "objective": "Verify that the audit trail (edit log) feature was operated throughout the year without being tampered with or disabled, meeting statutory auditor CARO / Rule 3 mandates.",
    "logic": "Filter: Event Type IN ('Audit Trail Disabled', 'Log Table Truncated', 'Sequence Gap Detected', 'Configuration Changed'). Flag any non-zero event count.",
    "tool": "Python / SQL Log Parser",
    "threshold": "Zero tolerance (0 events); any audit trail deactivation is a statutory non-compliance",
    "followUp": "Escalate immediately to Audit Committee and include in Statutory Auditor CARO Clause (xi) notes."
  },
  {
    "id": "DA-62",
    "name": "Firefighter / Emergency ID Usage Without Post-Incident Review",
    "category": "ITGC, SoD & ERP Forensics",
    "linkedControls": "IT-C01, JE-C06",
    "dataset": "IT Emergency Access / Elevated Privilege Log & Support Tickets",
    "keyFields": "Emergency ID, Checked-Out Timestamp, Checked-In Timestamp, Request Ticket No, Production Tables Modified, Post-Review Status",
    "objective": "Prevent unauthorized backend direct database manipulations on live financial ledgers during month-end closes.",
    "logic": "Filter: Elevated Session Used = 'Y' AND (Post-Review Date IS NULL OR Ticket Status != 'Approved'). Count table updates executed.",
    "tool": "SQL Left Join / Python pandas",
    "threshold": "Any emergency firefighter session without documented post-facto review within 48 hours",
    "followUp": "Review database audit traces with Chief Technology Officer."
  },
  {
    "id": "DA-63",
    "name": "Battery Telematics Cell Degradation & Warranty Claim Cluster",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "REV-C04, FR-C03",
    "dataset": "EV Telematics IoT Cloud Stream & Dealership Battery Warranty Claims",
    "keyFields": "Vehicle VIN, Battery Pack Serial, Cell Batch No, Internal Resistance (mΩ), State of Health (SoH %), Dealer Claim Date, Pack Replacement Cost",
    "objective": "Correlate live IoT battery performance telematics with dealer warranty claims to detect supplier component defects early and calculate Ind AS 37 actuarial warranty provisions.",
    "logic": "Group warranty claims by Cell Batch Number. Flag batches where Claim Rate > 3.0% of total installed base. Cross-reference with IoT telemetry SoH degradation curves.",
    "tool": "Python Machine Learning / Power BI",
    "threshold": "Claim frequency >3.0% on any cell batch or warranty surge >25% MoM",
    "followUp": "Issue warranty debit note to cell supplier (Amperex/CATL) and update Ind AS 37 provision."
  },
  {
    "id": "DA-64",
    "name": "Hazardous Waste & Battery E-Waste EPR Compliance Tracking",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "STAT-C01, ELC-C01",
    "dataset": "Scrapped Lithium Cell Manifests & CPCB EPR Recycler Certificates",
    "keyFields": "Scrap Batch No, Number of Cells, Gross Weight (kg), Recycling Vendor Name, CPCB Registration No, Manifest Form 10 No, Date Dispatched",
    "objective": "Ensure compliance with Battery Waste Management Rules, 2022 and avoid environmental pollution penalties up to ₹5 Crores or factory closure notices.",
    "logic": "Calculate Scrapped Weight vs Authorized Recycler Certificate Weight. Flag uncertified quantities or shipments to non-CPCB registered recyclers.",
    "tool": "SQL Compare / Python pandas",
    "threshold": "Zero uncertified hazardous battery disposal",
    "followUp": "Obtain official Form 10 hazardous waste manifest and verify CPCB portal certificate."
  },
  {
    "id": "DA-65",
    "name": "Solar Rooftop & Green Power PPA Renewable Energy Offset Verification",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "STAT-C01, EXP-C01",
    "dataset": "Chakan Solar Inverter Generation Logs & State Utility (MSEDCL) Energy Bills",
    "keyFields": "Month, Solar Generation (kWh), Injected Units (kWh), Utility Billed Units, Wheeling Banking Credit, Tariff Rate (₹/kWh)",
    "objective": "Verify solar power billing credits on utility electricity bills and validate zero greenwashing / double counting of ESG carbon offsets.",
    "logic": "Calculate Net Energy Credit = Injected Units * Wheeling Tariff. Compare against energy invoice deduction. Flag tariff discrepancies >1.5%.",
    "tool": "Excel Variance / Python pandas",
    "threshold": "Credit variance >₹50,000 or uncredited renewable power generation >10,000 kWh",
    "followUp": "File reconciliation dispute with MSEDCL power discom."
  },
  {
    "id": "DA-66",
    "name": "Warranty Replacement Battery Serial Number Tracking (Ghost Claims)",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "REV-C04, INV-C04",
    "dataset": "Warranty Service Logs & Finished Goods Battery Despatch Register",
    "keyFields": "Claim ID, Dealer ID, Old Defective Battery Serial, New Replacement Serial, Customer VIN, Service Date",
    "objective": "Prevent dealerships from submitting false warranty claims to obtain free replacement battery packs for retail resale.",
    "logic": "Inner join warranty replacements with old serial number return receipts. Flag claims where old defective battery pack was not received at factory within 30 days.",
    "tool": "SQL Left Join / Python pandas",
    "threshold": "Defective pack return pending >30 days on any replacement claim",
    "followUp": "Block dealer spare parts quota and issue commercial debit note for replacement value (₹32,000/pack)."
  },
  {
    "id": "DA-67",
    "name": "Fixed Asset Physical Verification vs Geo-Tagged Barcode Gaps",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "FA-C01, FA-C02",
    "dataset": "Fixed Asset Register (FAR) & Barcode Scanner Physical Audit Dump",
    "keyFields": "Asset Tag ID, Asset Description, Plant Location, Cost Center, Geo-Coordinates, Scan Timestamp, Auditor ID",
    "objective": "Ensure compliance with CARO 2020 Clause (i) by identifying missing, unverified, or relocated plant equipment (e.g. laser welders, CNC tooling).",
    "logic": "Full outer join FAR with Barcode Scan logs. Identify: (1) Assets in FAR but not scanned (Missing/Ghost Assets), (2) Assets scanned in wrong plant (Misallocated).",
    "tool": "SQL Full Outer Join / Python pandas",
    "threshold": "Any asset >₹50,000 unverified or located outside registered plant geofence",
    "followUp": "Conduct physical search and prepare board memo for asset write-off or recovery."
  },
  {
    "id": "DA-68",
    "name": "Related Party Pricing Benchmark vs Arms-Length Market Rates",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "RPT-C01, RPT-C02",
    "dataset": "Related Party Sales/Purchases & Non-Related Third-Party Price Master",
    "keyFields": "Transaction Ref, Related Entity Name, Item Code, Price Charged, Median Market Price, Variance %",
    "objective": "Verify compliance with Transfer Pricing and Section 188 of Companies Act 2013, ensuring related party transactions occur at strict arm's-length prices.",
    "logic": "Calculate Pricing Variance = |Related Price - Market Median| / Market Median * 100. Flag transactions where Variance > 5.0% without TP study justification.",
    "tool": "SQL Join / Python pandas",
    "threshold": "Variance >5.0% vs arms-length market benchmark",
    "followUp": "Review transfer pricing documentation and verify Audit Committee prior omnibus approval."
  },
  {
    "id": "DA-69",
    "name": "Intangible Asset R&D Capitalization vs Research Expense Timing",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "FA-C03, FR-C03",
    "dataset": "R&D Project Time Sheets, Battery BMS Firmware Development Expenses & GL Vouchers",
    "keyFields": "Project Code, Milestone Stage (Research vs Development), Expense Head, Labor Cost, Capitalized Amount, Tech Feasibility Date",
    "objective": "Enforce Ind AS 38 intangible asset criteria, ensuring pure research costs are expensed immediately while only post-technical feasibility development capex is capitalized.",
    "logic": "Filter: Capitalized Development Costs WHERE Project Milestone Date < ARAI Homologation / Feasibility Sign-off Date. Flag premature capitalization.",
    "tool": "SQL DateDiff / Python pandas",
    "threshold": "Any R&D expenditure capitalized prior to formal prototype feasibility certification",
    "followUp": "Reclassify premature capitalization back to P&L expense and adjust taxable income."
  },
  {
    "id": "DA-70",
    "name": "Subcontractor Scrap Allowance Reconciliation vs Inward Melting Logs",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C02, PUR-C07",
    "dataset": "Chassis Subcontractor Delivery Logs & Inward Quality Melting Slag Reports",
    "keyFields": "Subcontractor ID, Contractual Scrap Tolerance %, Actual Scrap Billed %, Weight Difference (kg), Scrap Price (₹/kg)",
    "objective": "Detect subcontractors billing excessive scrap burning loss on chassis tubes and alloy rims exceeding contractual tolerance agreements.",
    "logic": "Filter: Actual Scrap % > Contractual Scrap Allowance %. Calculate Excess Scrap Value = (Actual Scrap - Allowed Scrap) * Weight * Current Scrap Price.",
    "tool": "Excel Formula / Python pandas",
    "threshold": "Excess scrap loss >1.5% of raw material weight",
    "followUp": "Issue automatic supplier debit note under Section 34 of CGST Act for excess scrap value."
  },
  {
    "id": "DA-71",
    "name": "Gate Entry vs GRN Delay Outlier Analysis (Unrecorded Inward Stock)",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C08, PUR-C11",
    "dataset": "Store Inward GRN & Gate Entry Log (ET-GRN-01)",
    "keyFields": "Gate Entry No, Gate Entry Date, GRN No, GRN Date, Vendor Name, Item Code, Inward Value (₹)",
    "objective": "Identify shipments physically delivered at factory gates that remained unbooked in store ledgers >24 hours, causing unrecorded liabilities or stockouts.",
    "logic": "Calculate Delay Days = GRN Date - Gate Entry Date. Filter: Delay Days > 2. Rank shipments by total invoice value.",
    "tool": "SQL DateDiff / Python pandas",
    "threshold": "Any gate entry unbooked >2 business days or value >₹1,00,000",
    "followUp": "Inspect physical store quarantine bays; review Store Keeper unbooked inward log."
  },
  {
    "id": "DA-72",
    "name": "Store Inward QC Rejection Without Debit Note Issuance",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C09, PUR-C10",
    "dataset": "Store Inward GRN (ET-GRN-01) & AP Debit Note Register",
    "keyFields": "GRN No, Item Description, Rejected Qty, Rejection Reason, Unit Rate, Supplier ID, Debit Note Ref",
    "objective": "Detect component batches rejected by Quality Control where accounts payable processed full payment without issuing a vendor debit note.",
    "logic": "Filter: Rejected Qty > 0. Left join with Debit Note Register on GRN No and Supplier ID. Flag where Debit Note Ref IS NULL.",
    "tool": "SQL Left Join / Python pandas",
    "threshold": "Any rejected batch without corresponding debit note within 48 hours",
    "followUp": "Generate immediate supplier debit note under Section 34 of CGST Act and put payment on hold."
  },
  {
    "id": "DA-73",
    "name": "GRN Inward vs Transporter Weighbridge Tolerance Gap",
    "category": "Procurement & Payables (P2P)",
    "linkedControls": "PUR-C08, PUR-C02",
    "dataset": "Store Inward GRN (ET-GRN-01) & Transporter Weighbridge Tickets",
    "keyFields": "GRN No, Weighbridge Slip No, Gross Weight (kg), Tare Weight (kg), Net Weight (kg), GRN Billed Weight (kg)",
    "objective": "Identify bulk raw material inward deliveries (tubular steel, aluminum ingots) where weighbridge weight is lower than vendor billed weight.",
    "logic": "Calculate Weight Gap = GRN Billed Weight - Weighbridge Net Weight. Flag where Weight Gap > 1.0% of shipment.",
    "tool": "Excel Variance / Python pandas",
    "threshold": "Net weight shortage >1.0% or value >₹15,000",
    "followUp": "Issue transit shortage debit note against transporter or supplier."
  },
  {
    "id": "DA-74",
    "name": "Job-Work Challan Return Aging Approaching 1-Year Deemed Supply",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C06, STAT-C01",
    "dataset": "Job-Work Outward Delivery Challans (ET-JW-01)",
    "keyFields": "Challan No, Dispatch Date, Subcontractor Name, Item Description, Sent Qty, Days Open, Deemed Tax Risk (₹)",
    "objective": "Detect job-work delivery challans open >300 days to prevent deemed outward taxable supply under GST Section 143.",
    "logic": "Filter: Status = 'OPEN' AND Current Date - Dispatch Date >= 300. Calculate deemed GST liability @ 18% + 18% interest under Sec 50.",
    "tool": "SQL WHERE / Python pandas",
    "threshold": "Open challan aging >= 300 days",
    "followUp": "Serve legal return requisition to subcontractor; prepare GST tax invoice if material consumed."
  },
  {
    "id": "DA-75",
    "name": "Subcontractor Burning Loss Exceeding Contractual Allowance",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "INV-C07, PUR-C02",
    "dataset": "Job-Work Delivery Challans (ET-JW-01) & Contract Master",
    "keyFields": "Subcontractor Name, Process Operation, Input Qty Sent, Output Qty Received, Actual Scrap %, Allowed Scrap %",
    "objective": "Uncover subcontractors claiming excessive metal burning loss on chassis tubes and alloy rims exceeding contractual tolerance.",
    "logic": "Calculate Burning Loss % = ((Sent Qty - Received Qty) / Sent Qty) * 100. Flag where Burning Loss % > Allowed Scrap % (e.g. >1.5%).",
    "tool": "SQL Compare / Python pandas",
    "threshold": "Excess loss >0.5% above contracted allowance",
    "followUp": "Issue commercial debit note for value of excess metal consumed."
  },
  {
    "id": "DA-76",
    "name": "Daily Production BOM Yield Drop Outlier Detection",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "PRD-C01, INV-C02",
    "dataset": "Shop Floor Production Log (ET-PRD-01)",
    "keyFields": "Work Order No, Production Date, Line/Plant, Finished Model, Standard BOM Qty, Actual Consumed Qty, Yield Loss %",
    "objective": "Identify daily production runs where cell or motor consumption spiked abnormally compared to standard engineering BOM.",
    "logic": "Calculate Yield Loss % = ((Actual - Standard) / Standard) * 100. Flag work orders where Yield Loss % > 3.5% (abnormal scrap threshold).",
    "tool": "Power BI / SQL Window Functions / Python",
    "threshold": "Yield loss >3.5% on lithium cells or >5.0% on wiring harnesses",
    "followUp": "Cross-examine robot laser welding parameter logs and scrap disposal vouchers."
  },
  {
    "id": "DA-77",
    "name": "Weighbridge Gross/Tare Weight Ratio Anomaly (Tare Weight Manipulation)",
    "category": "Inventory, Production & Scrap",
    "linkedControls": "PRD-C03, PRD-C04",
    "dataset": "Shop Floor Production & Scrap Weighbridge Log (ET-PRD-01)",
    "keyFields": "Weighbridge Slip No, Date, Truck Registration No, Gross Weight (kg), Tare Weight (kg), Historical Average Tare (kg)",
    "objective": "Detect weighbridge tampering where empty scrap vehicle tare weight is recorded heavier than normal to understate net scrap dispatched.",
    "logic": "Calculate Tare Variance = |Recorded Tare - Historical Average Tare for Truck|. Flag variances > 300 kg.",
    "tool": "SQL Join with Truck Master / Python pandas",
    "threshold": "Tare weight variance >300 kg without documented fuel tank explanation",
    "followUp": "Review weighbridge CCTV footage and recalibrate digital load cells."
  },
  {
    "id": "DA-78",
    "name": "Biometric Punch vs Payroll Attendance Mismatch (Phantom Work Days)",
    "category": "Payroll & Human Resources",
    "linkedControls": "PAY-C06, PAY-C01",
    "dataset": "Biometric Attendance Muster (ET-ATT-01) & Monthly Payroll Register (ET-PAY-01)",
    "keyFields": "Employee ID, Employee Name, Department, Biometric Days Present, Payroll Paid Days, Paid Days Variance",
    "objective": "Detect workers credited salary for more days than recorded on electronic biometric fingerprint/facial scanners.",
    "logic": "Calculate Paid Variance = Payroll Paid Days - Biometric Days Present (excluding approved leave). Flag where Variance > 0.",
    "tool": "SQL Inner Join / Python pandas",
    "threshold": "Any employee with >1 unverified paid work day without formal leave ticket",
    "followUp": "Recover unearned salary disbursement; audit supervisor attendance muster sign-offs."
  },
  {
    "id": "DA-79",
    "name": "Shop Floor Overtime Velocity Exceeding Factories Act 50-Hour Limit",
    "category": "Payroll & Human Resources",
    "linkedControls": "PAY-C08, ELC-C01",
    "dataset": "Biometric Attendance & Overtime Log (ET-ATT-01)",
    "keyFields": "Employee ID, Employee Name, Department, Quarter, Total Overtime Hours Logged, Overtime Pay (₹)",
    "objective": "Enforce Section 64 of Factories Act, 1948 by identifying workers exceeding the statutory limit of 50 OT hours in a quarter.",
    "logic": "Group by Employee ID and Quarter. Calculate Sum(Overtime Hours). Flag where Sum(OT Hours) > 50.",
    "tool": "SQL Group By HAVING / Python pandas",
    "threshold": "Quarterly OT hours >50 hours per worker",
    "followUp": "Rebalance shift rotations; report compliance status to Plant Head."
  },
  {
    "id": "DA-80",
    "name": "Dealership Dispatch Continuing Under Credit Block (Hard-Stop Override)",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "REV-C09, REV-C03",
    "dataset": "Customer & Dealership Credit Master (ET-CUST-01) & Sales Invoice Register",
    "keyFields": "Dealer ID, Dealer Name, Outstanding Balance (₹), Sanctioned Credit Limit (₹), Invoice No, Invoice Date, Approver ID",
    "objective": "Detect vehicle dispatches released to dealerships whose outstanding balances exceeded approved credit limits without MD sign-off.",
    "logic": "Filter: Outstanding Balance > Sanctioned Credit Limit AND Invoice Generated = 'Y'. Flag where Approver ID != 'MD_DIRECTOR'.",
    "tool": "SQL Inner Join / Python pandas",
    "threshold": "Any vehicle dispatched to account exceeding credit limit by >10%",
    "followUp": "Halt pending transit carrier dispatches; enforce cash advance payment terms."
  },
  {
    "id": "DA-81",
    "name": "Expired Bank Guarantee Active Dealership Exposure",
    "category": "Revenue, Sales & EV Subsidies (O2C)",
    "linkedControls": "REV-C08, REV-C09",
    "dataset": "Customer & Dealership Credit Master (ET-CUST-01) & AR Ledger",
    "keyFields": "Dealer ID, Dealer Name, BG Expiry Date, Bank Guarantee Amount (₹), Current Outstanding (₹), Days Expired",
    "objective": "Identify active dealerships operating on expired bank guarantees where vehicle shipments remain financially uncovered.",
    "logic": "Filter: Current Date > BG Expiry Date AND Current Outstanding > ₹5,00,000. Calculate Days Expired.",
    "tool": "SQL DateDiff / Python pandas",
    "threshold": "Any active dealer balance >₹5,00,000 with expired bank guarantee >15 days",
    "followUp": "Serve bank guarantee invocation notice or switch dealer to 100% advance RTGS terms."
  },
  {
    "id": "DA-82",
    "name": "Warranty Battery Replacement Dispatched Without Core Return Receipt (>30d)",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "WAR-C02, REV-C04",
    "dataset": "Warranty Claims & Battery Core Returns (ET-WAR-01)",
    "keyFields": "Claim ID, Dealer ID, Replacement Serial Dispatched, Dispatch Date, Core Inward Status, Days Pending, Core Pack Value (₹)",
    "objective": "Prevent service centers from keeping defective battery packs after receiving free replacements (grey market resale risk).",
    "logic": "Filter: Core Inward Status = 'PENDING' AND Current Date - Dispatch Date > 30. Calculate total unrecovered core value.",
    "tool": "SQL WHERE / Python pandas",
    "threshold": "Core return pending >30 days from replacement dispatch date",
    "followUp": "Issue commercial debit note of ₹32,000 per missing battery core and freeze dealer warranty quota."
  },
  {
    "id": "DA-83",
    "name": "Telematics Battery Failure Surge Clustered by Vehicle Production Date",
    "category": "CleanTech, ESG & Warranty",
    "linkedControls": "WAR-C03, WAR-C04",
    "dataset": "Warranty Claims (ET-WAR-01) & MES Production Batches (ET-PRD-01)",
    "keyFields": "Vehicle VIN, Production Date, Cell Batch No, Failure Date, Failure KM, Internal Resistance (mΩ), Defect Mode",
    "objective": "Correlate customer battery failures with specific factory assembly runs to isolate defective supplier cell batches and trigger back-to-back warranty recovery.",
    "logic": "Group warranty replacements by Cell Batch No and Production Week. Calculate Failure Rate % = Claims / Total Batch Size. Flag batches where Rate > 2.5%.",
    "tool": "Python pandas / Power BI Clustering",
    "threshold": "Batch failure rate >2.5% or claims surge >20% MoM",
    "followUp": "Submit formal warranty recovery debit claim to overseas cell manufacturer (Amperex/CATL)."
  },
  {
    "id": "DA-84",
    "name": "Monthly GSTR-3B Self-Assessed Tax vs GL Tax Payable Liability Gap",
    "category": "Statutory & Tax Shield",
    "linkedControls": "STAT-C03, STAT-C01",
    "dataset": "Statutory Returns Register (ET-STAT-01) & General Ledger Tax Payable",
    "keyFields": "Tax Period, GSTR-3B Net Tax Payable, GL Output Tax Ledger Balance, Variance (₹), ARN No",
    "objective": "Identify under-reporting of sales taxes in monthly GSTR-3B returns compared to actual general ledger revenue bookings.",
    "logic": "Calculate Tax Gap = GL Output Tax Balance - GSTR-3B Net Tax Declared. Flag where Tax Gap > ₹25,000.",
    "tool": "Excel Variance / SQL Compare",
    "threshold": "Variance >₹25,000 between GL tax accrual and portal return filing",
    "followUp": "Reconcile unfiled sales vouchers; file Form DRC-03 voluntary payment with interest under Sec 50."
  },
  {
    "id": "DA-85",
    "name": "Terminated Employee Active ERP Login & Transaction Activity Post-Exit",
    "category": "ITGC, SoD & ERP Forensics",
    "linkedControls": "IT-C03, JE-C01",
    "dataset": "ERP User Authorization Matrix (ET-USER-01) & HR Relieving Master",
    "keyFields": "User ID, Employee Name, Official Relieving Date, Last Login Timestamp, Last Transaction Booked Date, Days Active Post-Exit",
    "objective": "Ensure compliance with MCA Rule 3(1) and security standards by identifying system access retained by employees after departure.",
    "logic": "Filter: Last Login Timestamp > Relieving Date + 1 Day OR Account Status = 'Active' where Relieving Date < Current Date.",
    "tool": "SQL Join / Python pandas",
    "threshold": "Any ERP login activity recorded after official employee relieving date",
    "followUp": "Deactivate user ID immediately; review all transactions entered during post-relieving period."
  }
];

const caatAnalyticsLibrary85 = caatAnalyticsLibrary;

// ------------------------------------------------------------------------------
// 6. MASTER RISK & CONTROL MATRIX (63 Authentic MSME Controls)
// ------------------------------------------------------------------------------
const masterControlLibrary63 = [
  {
    "sNo": 1,
    "processArea": "Entity Level Controls",
    "subProcess": "Governance & Oversight",
    "riskId": "ELC-01",
    "riskDesc": "Lack of segregation of duties (SoD) in a small team allows one person to initiate, approve and record a transaction, increasing risk of error or fraud.",
    "riskCategory": "Fraud",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "ELC-C01",
    "controlDesc": "Owner/Director reviews and approves key transactions (sales above threshold, purchases above threshold, payments above threshold, journal entries) where full SoD is not practically possible.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Owner/Director",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Approval threshold matrix; sample approved transactions; org chart / role list",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Approval workflow log / ERP audit trail / JE listing",
    "linkedCAAT": "DA-06, DA-09",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 2,
    "processArea": "Entity Level Controls",
    "subProcess": "Governance & Oversight",
    "riskId": "ELC-02",
    "riskDesc": "Absence of documented policies (credit policy, expense policy, procurement policy, HR policy) leads to inconsistent or arbitrary practices across the business.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "ELC-C02",
    "controlDesc": "Key operating policies are documented, approved by owner/board and communicated to relevant staff; reviewed at least annually.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Annual",
    "keyControl": "N",
    "owner": "Owner/Director",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Policy documents with approval/sign-off; version history; staff acknowledgement",
    "analyticsTestable": "N",
    "primaryDataSource": "Policy documents (not transactional data)",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 3,
    "processArea": "Entity Level Controls",
    "subProcess": "Governance & Oversight",
    "riskId": "ELC-03",
    "riskDesc": "Management override of controls by promoter/owner-family without independent challenge, given concentrated ownership typical of MSMEs.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "ELC-C03",
    "controlDesc": "Independent review of financials/MIS by an external CA/consultant or audit committee (if applicable) at defined intervals; whistleblower / grievance channel exists.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "External CA / Owner",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "MIS review notes; minutes of review meetings; whistle-blower log if any",
    "analyticsTestable": "N",
    "primaryDataSource": "Review meeting minutes (not transactional data)",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 4,
    "processArea": "Entity Level Controls",
    "subProcess": "Budgeting & MIS",
    "riskId": "ELC-04",
    "riskDesc": "No budget or business plan exists, so deviations in revenue/cost are not identified timely.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "ELC-C04",
    "controlDesc": "Annual budget prepared and approved; actual vs budget variance reviewed monthly/quarterly by management.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Owner/Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Approved budget; variance analysis reports",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Budget vs Actual - Trial Balance",
    "linkedCAAT": "DA-32",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 5,
    "processArea": "Revenue & Receivables",
    "subProcess": "Order to Cash",
    "riskId": "REV-01",
    "riskDesc": "Sales invoices raised without a valid, approved sales order / customer PO, or without proof of delivery, risking fictitious or premature revenue recognition.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "REV-C01",
    "controlDesc": "Sales invoice is generated by the system/accountant only against an approved sales order and supported by delivery challan / e-way bill / dispatch proof.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Sales/Accounts Executive",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Sales order register; delivery challans; e-way bills; sample invoices with supporting documents",
    "analyticsTestable": "Y",
    "primaryDataSource": "Sales Register + Delivery Challan/E-way Bill Register",
    "linkedCAAT": "DA-03, DA-04, DA-30",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 6,
    "processArea": "Revenue & Receivables",
    "subProcess": "Order to Cash",
    "riskId": "REV-02",
    "riskDesc": "Sales returns and credit notes are passed without proper authorization or supporting evidence, resulting in unwarranted reduction of revenue/receivables.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "REV-C02",
    "controlDesc": "Credit notes/sales returns above a defined threshold require approval from Sales Head/Owner and are supported by return documentation (GRN of return, customer confirmation).",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Sales Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Credit note register with approvals; return GRNs; customer correspondence",
    "analyticsTestable": "Y",
    "primaryDataSource": "Credit Note Register",
    "linkedCAAT": "DA-05, DA-31",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 7,
    "processArea": "Revenue & Receivables",
    "subProcess": "Credit Control",
    "riskId": "REV-03",
    "riskDesc": "Overdue trade receivables are not monitored, increasing risk of bad debts and cash-flow strain typical to MSMEs with informal credit terms.",
    "riskCategory": "Financial",
    "likelihood": "H",
    "impact": "M",
    "inherentRisk": "H",
    "controlId": "REV-C03",
    "controlDesc": "Monthly customer-wise ageing analysis is prepared and reviewed; follow-up action documented for balances beyond agreed credit period; provisioning policy applied for doubtful debts.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Accounts/Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Ageing report; follow-up/collection emails or calls log; provision workings",
    "analyticsTestable": "Y",
    "primaryDataSource": "Customer-wise Ageing / AR Sub-ledger",
    "linkedCAAT": "DA-18",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 8,
    "processArea": "Revenue & Receivables",
    "subProcess": "Pricing & Discounts",
    "riskId": "REV-04",
    "riskDesc": "Sales are invoiced at prices/discounts outside the approved price list, resulting in revenue leakage or preferential treatment to select customers.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "REV-C04",
    "controlDesc": "Approved price list/discount matrix is maintained; invoices are reviewed against the price list before dispatch; deviations require approval.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Sales Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Approved price list; sample invoices vs price list comparison; deviation approvals",
    "analyticsTestable": "Y",
    "primaryDataSource": "Sales Register + Approved Price Master",
    "linkedCAAT": "DA-17",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 9,
    "processArea": "Revenue & Receivables",
    "subProcess": "Tax on Sales",
    "riskId": "REV-05",
    "riskDesc": "GST is charged at an incorrect rate or with an incorrect place-of-supply determination on sales invoices, leading to short/excess tax collection and compliance exposure.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "REV-C05",
    "controlDesc": "GST rate/HSN master is maintained and periodically reconciled with the latest notifications; invoices reviewed for correct GSTIN, place of supply and tax rate before filing.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Accountant/Tax Consultant",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "GST rate master; sample invoice review checklist; GSTR-1 vs sales register reconciliation",
    "analyticsTestable": "Y",
    "primaryDataSource": "Sales Register + GSTR-1 export",
    "linkedCAAT": "DA-21",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 10,
    "processArea": "Purchase & Payables",
    "subProcess": "Vendor Management",
    "riskId": "PUR-01",
    "riskDesc": "Purchases are made from unapproved or related vendors without competitive quotes, risking overpricing, favoritism or conflict of interest.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PUR-C01",
    "controlDesc": "Vendors are empanelled through a documented process (min. quotes/credentials for purchases above threshold); purchase orders raised only for empanelled vendors.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Purchase Manager/Owner",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Vendor empanelment file; comparative quotation sheets; approved vendor master",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Vendor Master + Purchase Register",
    "linkedCAAT": "DA-19, DA-29",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 11,
    "processArea": "Purchase & Payables",
    "subProcess": "Procure to Pay",
    "riskId": "PUR-02",
    "riskDesc": "Goods/services received are not matched against the purchase order and vendor invoice (no three-way match), leading to payment for short/incorrect supply or inflated quantities.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PUR-C02",
    "controlDesc": "Three-way match of Purchase Order, Goods Receipt Note (GRN) and vendor invoice is performed before booking/payment; discrepancies investigated and resolved.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Stores/Accounts",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "PO register; GRNs; vendor invoices; three-way match working/checklist",
    "analyticsTestable": "Y",
    "primaryDataSource": "PO Register + GRN Register + Purchase Invoice Register",
    "linkedCAAT": "DA-16, DA-17",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 12,
    "processArea": "Purchase & Payables",
    "subProcess": "Payments",
    "riskId": "PUR-03",
    "riskDesc": "Duplicate or double payments are made to vendors due to lack of a control marking invoices as 'paid'.",
    "riskCategory": "Financial",
    "likelihood": "L",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PUR-C03",
    "controlDesc": "Vendor invoices are stamped/marked 'PAID' with reference to payment voucher number upon payment; vendor ledger and statement of account reconciled periodically.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Accounts Executive",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Paid invoice stamps; vendor reconciliation statements",
    "analyticsTestable": "Y",
    "primaryDataSource": "AP Ledger / Payment Register",
    "linkedCAAT": "DA-01, DA-02",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 13,
    "processArea": "Purchase & Payables",
    "subProcess": "Statutory Compliance on Purchases",
    "riskId": "PUR-04",
    "riskDesc": "TDS is not deducted, or deducted at an incorrect rate, on vendor payments/contracts (e.g. professional fees, contractors, rent), leading to disallowance under Income Tax Act and penal interest.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PUR-C04",
    "controlDesc": "A TDS-applicability checklist (section/rate/threshold) is verified at the time of booking each vendor invoice; TDS deducted is reconciled with 26AS/TRACES monthly.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Accountant/Tax Consultant",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "TDS applicability checklist; TDS ledger; Form 26AS/TRACES reconciliation",
    "analyticsTestable": "Y",
    "primaryDataSource": "Purchase Register + TDS Ledger + Form 26AS export",
    "linkedCAAT": "DA-22",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 14,
    "processArea": "Purchase & Payables",
    "subProcess": "Vendor Master",
    "riskId": "PUR-05",
    "riskDesc": "Fictitious vendors are created, or genuine vendor master data (bank account/IFSC) is altered, enabling diversion of payments.",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "PUR-C05",
    "controlDesc": "Creation or change of vendor master data (especially bank details) requires dual approval and is independently verified (e.g. cancelled cheque/bank letter) before activation.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Vendor master change log; supporting KYC documents; approval trail",
    "analyticsTestable": "Y",
    "primaryDataSource": "Vendor Master change log + Employee Master",
    "linkedCAAT": "DA-13, DA-14, DA-19",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 15,
    "processArea": "Inventory Management",
    "subProcess": "Stock Control",
    "riskId": "INV-01",
    "riskDesc": "Physical stock does not match book stock due to pilferage, wastage, or recording errors, remaining undetected in the absence of periodic verification.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "INV-C01",
    "controlDesc": "Physical stock verification (full or cycle count) is performed periodically; variances are investigated, approved and adjusted in books with reasons documented.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "Store In-charge/Accountant",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Physical verification sheets; variance report with approvals; stock adjustment entries",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Stock Ledger + Physical Verification Sheet",
    "linkedCAAT": "DA-23",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "NexGen EV holds high-value Lithium-ion battery cells, BMS electronics, PMSM motors, WIP packs & finished electric scooters."
  },
  {
    "sNo": 16,
    "processArea": "Inventory Management",
    "subProcess": "Valuation",
    "riskId": "INV-02",
    "riskDesc": "Slow-moving, non-moving or obsolete inventory is not identified, resulting in overstated inventory value in financial statements.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "INV-C02",
    "controlDesc": "Inventory ageing analysis is prepared and reviewed periodically; provision for slow-moving/obsolete stock is made as per a documented policy.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Quarterly",
    "keyControl": "N",
    "owner": "Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Inventory ageing report; provisioning policy and workings",
    "analyticsTestable": "Y",
    "primaryDataSource": "Inventory Ageing / Stock Ledger",
    "linkedCAAT": "DA-18",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "NexGen EV holds high-value Lithium-ion battery cells, BMS electronics, PMSM motors, WIP packs & finished electric scooters."
  },
  {
    "sNo": 17,
    "processArea": "Inventory Management",
    "subProcess": "Valuation",
    "riskId": "INV-03",
    "riskDesc": "Inventory is not valued consistently (costing method - FIFO/weighted average - applied differently across periods or items), affecting comparability and accuracy of COGS.",
    "riskCategory": "Financial",
    "likelihood": "L",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "INV-C03",
    "controlDesc": "A documented inventory valuation policy is applied consistently across all items/periods and reviewed by the accountant/auditor.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Annual",
    "keyControl": "N",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Inventory valuation policy; sample costing workings",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Inventory Valuation Workings",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "NexGen EV holds high-value Lithium-ion battery cells, BMS electronics, PMSM motors, WIP packs & finished electric scooters."
  },
  {
    "sNo": 18,
    "processArea": "Inventory Management",
    "subProcess": "Movement Controls",
    "riskId": "INV-04",
    "riskDesc": "Goods move in/out of stores without proper documentation (gate pass, delivery challan), increasing risk of unrecorded sales/purchases or theft.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "INV-C04",
    "controlDesc": "All inward/outward stock movement is supported by a gate pass/challan, sequentially numbered and reconciled with the stock register.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Store In-charge",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Gate pass/challan register; reconciliation with stock ledger",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Gate Pass/Challan Register vs Stock Ledger",
    "linkedCAAT": "DA-03",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "NexGen EV holds high-value Lithium-ion battery cells, BMS electronics, PMSM motors, WIP packs & finished electric scooters."
  },
  {
    "sNo": 19,
    "processArea": "Payroll & HR",
    "subProcess": "Master Data",
    "riskId": "PAY-01",
    "riskDesc": "Ghost/fictitious employees exist on payroll, or unauthorized additions/changes are made, resulting in fraudulent payments.",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "PAY-C01",
    "controlDesc": "Payroll is processed only for employees present in the HR-approved employee master; new joiners/exits are updated only on receipt of approved HR documentation; headcount is reconciled monthly.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "HR Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Employee master; joining/exit forms; monthly headcount reconciliation",
    "analyticsTestable": "Y",
    "primaryDataSource": "Employee Master + Payroll Register + Bank Payment File",
    "linkedCAAT": "DA-25",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "220 staff total (70 permanent + 150 factory contract labour); PF, ESI and LWF applicable."
  },
  {
    "sNo": 20,
    "processArea": "Payroll & HR",
    "subProcess": "Statutory Deductions",
    "riskId": "PAY-02",
    "riskDesc": "Incorrect statutory deductions (PF, ESI, Professional Tax, TDS on salary) are made, leading to non-compliance, penalties or employee grievances.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PAY-C02",
    "controlDesc": "Payroll computation sheet (including statutory deductions) is reviewed and approved before disbursement each month; deduction rates reviewed on regulatory change.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "HR/Accounts",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Payroll register; statutory deduction working; approval sign-off",
    "analyticsTestable": "Y",
    "primaryDataSource": "Payroll Register",
    "linkedCAAT": "DA-26",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "220 staff total (70 permanent + 150 factory contract labour); PF, ESI and LWF applicable."
  },
  {
    "sNo": 21,
    "processArea": "Payroll & HR",
    "subProcess": "Payments & Approvals",
    "riskId": "PAY-03",
    "riskDesc": "Overtime, incentives or reimbursements are paid without authorization from the reporting manager, inflating payroll costs.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "L",
    "inherentRisk": "M",
    "controlId": "PAY-C03",
    "controlDesc": "Overtime/incentive/reimbursement claims are approved by the reporting manager (with supporting documents for reimbursements) prior to inclusion in payroll.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Reporting Manager/HR",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Approved OT/incentive sheets; reimbursement claim forms with bills",
    "analyticsTestable": "Partial",
    "primaryDataSource": "OT/Incentive Approval Register",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "220 staff total (70 permanent + 150 factory contract labour); PF, ESI and LWF applicable."
  },
  {
    "sNo": 22,
    "processArea": "Payroll & HR",
    "subProcess": "Compliance",
    "riskId": "PAY-04",
    "riskDesc": "PF/ESI/Labour Welfare Fund returns are filed late or with errors, exposing the MSME to interest, penalty and potential prosecution.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PAY-C04",
    "controlDesc": "A statutory compliance calendar tracks PF/ESI/LWF/PT due dates; returns are prepared, reviewed and filed within due dates by HR/consultant.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "HR Manager/Consultant",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Compliance calendar/tracker; filed challans and returns with acknowledgements",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Compliance Tracker + Challans",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "220 staff total (70 permanent + 150 factory contract labour); PF, ESI and LWF applicable."
  },
  {
    "sNo": 23,
    "processArea": "Fixed Assets & Capex",
    "subProcess": "Capital Expenditure",
    "riskId": "FA-01",
    "riskDesc": "Capital expenditure is incurred without budget approval or business justification, resulting in unplanned cash outflow or unproductive assets.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "FA-C01",
    "controlDesc": "All capex proposals are supported by justification/ROI and approved by owner/board against the approved capex budget before commitment of funds.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Owner/Director",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Capex approval notes; budget vs actual capex tracker",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Capex Register vs Budget",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 24,
    "processArea": "Fixed Assets & Capex",
    "subProcess": "Asset Register",
    "riskId": "FA-02",
    "riskDesc": "A fixed asset register (FAR) is not maintained or updated, leading to loss/misappropriation of assets going undetected and inaccurate depreciation.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "FA-C02",
    "controlDesc": "A fixed asset register with location, custodian and identification tag is maintained and physically verified periodically; discrepancies reconciled with books.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Annual",
    "keyControl": "Y",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Fixed asset register; physical verification report; tagging photographs",
    "analyticsTestable": "Y",
    "primaryDataSource": "Fixed Asset Register",
    "linkedCAAT": "DA-27",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 25,
    "processArea": "Fixed Assets & Capex",
    "subProcess": "Depreciation & Disposal",
    "riskId": "FA-03",
    "riskDesc": "Depreciation is not computed as per applicable rates/useful life (Companies Act / Income Tax), or asset disposals/write-offs are not authorized and recorded correctly.",
    "riskCategory": "Compliance",
    "likelihood": "L",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "FA-C03",
    "controlDesc": "Depreciation policy (rates/useful life) is documented and applied consistently; disposals/write-offs require owner approval and are removed from FAR with gain/loss recorded.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Annual",
    "keyControl": "N",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Depreciation policy and workings; disposal approval notes",
    "analyticsTestable": "Partial",
    "primaryDataSource": "FAR + Depreciation Schedule",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 26,
    "processArea": "Cash & Bank",
    "subProcess": "Cash Handling",
    "riskId": "CB-01",
    "riskDesc": "Weak controls over petty cash (no defined limit, no dual custody) increase risk of misappropriation.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "CB-C01",
    "controlDesc": "Cash payments are restricted to petty/incidental expenses within a defined limit, supported by vouchers, and cash is kept under dual custody/insured safe.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Daily",
    "keyControl": "Y",
    "owner": "Cashier/Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Petty cash policy; cash vouchers; cash count/surprise verification records",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Cash Book / Petty Cash Register",
    "linkedCAAT": "DA-28",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 27,
    "processArea": "Cash & Bank",
    "subProcess": "Bank Reconciliation",
    "riskId": "CB-02",
    "riskDesc": "Bank reconciliation statements (BRS) are not prepared/reviewed regularly, so errors, unauthorized transactions or fraud may go undetected.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "CB-C02",
    "controlDesc": "Bank reconciliation is prepared monthly for each bank account and independently reviewed by someone other than the preparer; long-outstanding items are investigated.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Accountant/Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Monthly BRS with preparer/reviewer sign-off; ageing of reconciling items",
    "analyticsTestable": "Y",
    "primaryDataSource": "Bank Statement + Cash Book",
    "linkedCAAT": "DA-07",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 28,
    "processArea": "Cash & Bank",
    "subProcess": "Payment Authorization",
    "riskId": "CB-03",
    "riskDesc": "Cheque/online payments are released without adherence to the defined signatory/authorization matrix, risking unauthorized or excess payments.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "CB-C03",
    "controlDesc": "A payment authorization matrix (single/dual signatory based on amount thresholds) is defined and enforced in the bank mandate and/or online banking user rights.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Owner/Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Bank mandate/board resolution; authorization matrix; online banking user rights list",
    "analyticsTestable": "Y",
    "primaryDataSource": "Payment Register / Bank Statement",
    "linkedCAAT": "DA-06, DA-07",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 29,
    "processArea": "Cash & Bank",
    "subProcess": "Fund Management",
    "riskId": "CB-04",
    "riskDesc": "Cash flow is not monitored/forecast, leading to liquidity shortfalls or idle funds not earning returns - a common MSME vulnerability.",
    "riskCategory": "Operational",
    "likelihood": "H",
    "impact": "M",
    "inherentRisk": "H",
    "controlId": "CB-C04",
    "controlDesc": "A rolling cash flow forecast (e.g. 4-13 weeks) is prepared and reviewed by management to plan fund requirements/surplus deployment.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Weekly",
    "keyControl": "N",
    "owner": "Finance Head/Owner",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Cash flow forecast working; management review notes",
    "analyticsTestable": "N",
    "primaryDataSource": "Cash flow forecast workings (not transactional data)",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 30,
    "processArea": "Statutory Compliance",
    "subProcess": "GST",
    "riskId": "STAT-01",
    "riskDesc": "GST returns (GSTR-1, GSTR-3B, annual return) are filed late, incorrectly, or input tax credit is claimed on ineligible/unmatched invoices, resulting in interest, penalty or credit reversal.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "STAT-C01",
    "controlDesc": "GST compliance calendar is maintained; GSTR-2B reconciliation with purchase register is performed before ITC claim; returns are reviewed before filing by accountant/consultant.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Accountant/Tax Consultant",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "GST compliance tracker; GSTR-2B reconciliation working; filed return acknowledgements",
    "analyticsTestable": "Y",
    "primaryDataSource": "Purchase Register + Sales Register + GSTR-1/2B/3B exports",
    "linkedCAAT": "DA-20, DA-21",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 31,
    "processArea": "Statutory Compliance",
    "subProcess": "Income Tax & TDS",
    "riskId": "STAT-02",
    "riskDesc": "Advance tax is not estimated/paid correctly, or TDS/TCS returns are filed late, leading to interest under the Income Tax Act.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "STAT-C02",
    "controlDesc": "Advance tax liability is estimated quarterly based on projected profits and paid within due dates; TDS/TCS return filing tracked on the compliance calendar.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "Tax Consultant/Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Advance tax working; challans; TDS/TCS return filing proof (Form 26Q/24Q/27EQ)",
    "analyticsTestable": "Y",
    "primaryDataSource": "Advance tax workings + TDS/TCS returns + Form 26AS",
    "linkedCAAT": "DA-22",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 32,
    "processArea": "Statutory Compliance",
    "subProcess": "Licenses & Registrations",
    "riskId": "STAT-03",
    "riskDesc": "Statutory licenses/registrations (Shop & Establishment, Factory License, Trade License, MSME/Udyam registration, Fire NOC, Pollution Control) are not renewed on time, risking penalties or closure.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "STAT-C03",
    "controlDesc": "A master license register (issuing authority, validity, renewal due date, responsible person) is maintained and reviewed monthly to track upcoming renewals.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Admin/Compliance In-charge",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "License register; renewed license copies; renewal application proofs",
    "analyticsTestable": "N",
    "primaryDataSource": "License Register (master data, not transactional)",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 33,
    "processArea": "Statutory Compliance",
    "subProcess": "Corporate/ROC (if company)",
    "riskId": "STAT-04",
    "riskDesc": "Annual filings (AOC-4, MGT-7, DPT-3) and event-based ROC filings are missed or delayed, attracting additional fees and director disqualification risk.",
    "riskCategory": "Compliance",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "STAT-C04",
    "controlDesc": "A ROC/secretarial compliance tracker is maintained by the Company Secretary/consultant; board approves financials before filing; filings tracked against statutory due dates.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Annual/Event-based",
    "keyControl": "N",
    "owner": "Company Secretary/Consultant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "ROC compliance tracker; filed forms with SRN/challans; board resolutions",
    "analyticsTestable": "N",
    "primaryDataSource": "ROC filing tracker (master data)",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 34,
    "processArea": "IT General Controls",
    "subProcess": "Access Management",
    "riskId": "IT-01",
    "riskDesc": "Unauthorized or excessive access to the accounting software/ERP allows data manipulation or unauthorized transactions.",
    "riskCategory": "IT/Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "IT-C01",
    "controlDesc": "User access to the accounting system is provisioned based on role (least privilege), with segregation between transaction entry and approval rights; access reviewed periodically.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "IT Admin/Owner",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "User access list with roles; access review sign-off; system access rights report",
    "analyticsTestable": "Y",
    "primaryDataSource": "System User Access Export + Employee Master",
    "linkedCAAT": "DA-14",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 35,
    "processArea": "IT General Controls",
    "subProcess": "Data Backup & Continuity",
    "riskId": "IT-02",
    "riskDesc": "Financial/business data is lost due to hardware failure, cyber-attack (ransomware) or human error in the absence of a backup process.",
    "riskCategory": "Operational",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "IT-C02",
    "controlDesc": "Data is backed up on a defined schedule (e.g. daily incremental, weekly full) to a secure on-site/cloud location; restoration is tested periodically.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Daily/Weekly",
    "keyControl": "Y",
    "owner": "IT Admin",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Backup logs; restoration test records; backup policy",
    "analyticsTestable": "N",
    "primaryDataSource": "Backup logs (not transactional data)",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 36,
    "processArea": "IT General Controls",
    "subProcess": "Access Management",
    "riskId": "IT-03",
    "riskDesc": "Shared logins/weak password practices prevent accountability for actions performed in the system.",
    "riskCategory": "IT",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "IT-C03",
    "controlDesc": "Individual, non-shared user IDs are enforced with a password policy (complexity, periodic change) and automatic session lock-out.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Ongoing",
    "keyControl": "N",
    "owner": "IT Admin",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "System password policy settings; user ID list vs headcount",
    "analyticsTestable": "Y",
    "primaryDataSource": "System User ID list vs Employee Headcount",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 37,
    "processArea": "Related Party & Loans",
    "subProcess": "Related Party Transactions",
    "riskId": "RPT-01",
    "riskDesc": "Related party transactions (sales/purchases/services with promoter-owned entities) are not identified, disclosed or benchmarked to arm's length, risking regulatory and tax challenge.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "RPT-C01",
    "controlDesc": "A related party register is maintained (identifying relationships); all RPTs are approved by owner/board with basis of pricing documented and disclosed in financial statements/tax audit.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Owner/Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Related party register; RPT approval notes; pricing/benchmarking basis",
    "analyticsTestable": "Y",
    "primaryDataSource": "Related Party Register + Vendor/Customer Master + GL",
    "linkedCAAT": "DA-29",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Promoter family holds sister packaging firm & machining associate; ₹1.2 Cr standing loan from MD."
  },
  {
    "sNo": 38,
    "processArea": "Related Party & Loans",
    "subProcess": "Unsecured Loans",
    "riskId": "RPT-02",
    "riskDesc": "Unsecured loans/deposits taken from or given to directors/related parties do not comply with Section 269SS/269T of the Income Tax Act or Companies Act provisions (deemed dividend, deposit rules), risking disallowance/penalty.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "RPT-C02",
    "controlDesc": "Loan agreements are documented for all related-party loans; mode of receipt/repayment (account payee cheque/bank transfer) and applicable Companies Act/Income Tax compliance is reviewed before the transaction.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Finance Head/Consultant",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Loan agreements; bank transfer proof; compliance checklist (269SS/269T, Sec 185/186)",
    "analyticsTestable": "Y",
    "primaryDataSource": "Loan Ledger + Bank Statement",
    "linkedCAAT": "DA-28",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Promoter family holds sister packaging firm & machining associate; ₹1.2 Cr standing loan from MD."
  },
  {
    "sNo": 39,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Journal Entries",
    "riskId": "FR-01",
    "riskDesc": "Manual journal entries are posted without approval or supporting rationale, creating opportunity for error or manipulation of financial results.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "FR-C01",
    "controlDesc": "All manual journal entries above a defined threshold require independent review and approval before posting, with narration and supporting documents attached.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "JV approval workflow/log; sample JVs with supporting documents",
    "analyticsTestable": "Y",
    "primaryDataSource": "General Ledger / Journal Entry Listing",
    "linkedCAAT": "DA-05, DA-07, DA-08, DA-09, DA-10, DA-11",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 40,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Period-End Close",
    "riskId": "FR-02",
    "riskDesc": "Financial statements are not reviewed before finalization, so errors, omissions or inconsistent accounting treatment go undetected.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "FR-C02",
    "controlDesc": "A month-end close checklist (accruals, provisions, reconciliations) is completed and management reviews the MIS/financials with variance analysis before sign-off.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Owner/Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Month-end close checklist; MIS pack; variance analysis and review notes",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Trial Balance / MIS",
    "linkedCAAT": "DA-32",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 41,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Reconciliations",
    "riskId": "FR-03",
    "riskDesc": "Key balance sheet accounts (bank, debtors, creditors, GST, TDS, loans) are not reconciled periodically, allowing errors to accumulate undetected.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "FR-C03",
    "controlDesc": "A schedule of key general ledger accounts requiring periodic reconciliation is maintained; reconciliations are prepared, reviewed and old outstanding items followed up.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Reconciliation schedule; account-wise reconciliation statements with sign-off",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL Reconciliation schedule + Sub-ledgers",
    "linkedCAAT": "DA-18",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 42,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Analytical Review",
    "riskId": "FR-04",
    "riskDesc": "Key financial ratios/trends (GP margin, expense-to-revenue, debtor days) move outside the expected historical range without explanation, indicating possible misstatement.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "FR-C04",
    "controlDesc": "Trend and ratio analysis is performed each period-end comparing current results to prior periods/budget; significant deviations are investigated and explained.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Period-end",
    "keyControl": "N",
    "owner": "Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Multi-period trial balance/financial statements; ratio/trend workbook; variance explanations",
    "analyticsTestable": "Y",
    "primaryDataSource": "Multi-period Trial Balance / Financial Statements",
    "linkedCAAT": "DA-32",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 43,
    "processArea": "Data Analytics & JE Testing",
    "subProcess": "Journal Entry Controls",
    "riskId": "JE-01",
    "riskDesc": "Fraudulent or erroneous journal entries are posted by unauthorized or non-routine users (e.g. IT admin, owner's assistant, non-finance staff) to manipulate financial results.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "JE-C01",
    "controlDesc": "JE posting rights in the accounting system are restricted to authorized finance users; a system audit-trail report of JEs by user is reviewed monthly for postings by non-routine users.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Finance Head/Internal Audit",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "GL/JE listing with User ID field; list of authorized finance users; user access rights report",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL/JE listing with User ID field",
    "linkedCAAT": "DA-09, DA-12",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 44,
    "processArea": "Data Analytics & JE Testing",
    "subProcess": "Journal Entry Controls",
    "riskId": "JE-02",
    "riskDesc": "Round-sum or suspiciously precise journal entries are posted, which are statistically less common in genuine transactions and may indicate manual manipulation or estimation errors.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "JE-C02",
    "controlDesc": "A round-number/round-sum JE exception report is generated and reviewed monthly; flagged entries are investigated for business rationale.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Internal Audit/Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "GL/JE listing; round-sum exception report and review notes",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL/JE listing",
    "linkedCAAT": "DA-05",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 45,
    "processArea": "Data Analytics & JE Testing",
    "subProcess": "Journal Entry Controls",
    "riskId": "JE-03",
    "riskDesc": "Journal entries are posted on weekends, holidays or outside normal business hours, potentially indicating unauthorized or manipulated postings.",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "JE-C03",
    "controlDesc": "A weekend/holiday/after-hours JE report is generated and reviewed monthly by the finance head/internal audit function.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Internal Audit",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "GL/JE listing with posting date and timestamp; public holiday calendar",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL/JE listing with date & timestamp",
    "linkedCAAT": "DA-07, DA-08",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 46,
    "processArea": "Data Analytics & JE Testing",
    "subProcess": "Journal Entry Controls",
    "riskId": "JE-04",
    "riskDesc": "Journal entries lack adequate narration/description, hindering understanding of business rationale and enabling concealment of inappropriate entries.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "JE-C04",
    "controlDesc": "The system mandates a narration field for all manual JEs; entries with blank or generic narration are flagged and reviewed before/after posting.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "GL/JE listing with narration field; missing-narration exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL/JE listing with narration field",
    "linkedCAAT": "DA-10",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 47,
    "processArea": "Data Analytics & JE Testing",
    "subProcess": "Journal Entry Controls",
    "riskId": "JE-05",
    "riskDesc": "Entries are posted just before period-end and reversed immediately in the following period (round-tripping), potentially to temporarily inflate revenue/assets/profit at a reporting date.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "JE-C05",
    "controlDesc": "A reversing-entry report (entries reversed within a short window of the next period) is generated and reviewed as part of the period-end close process.",
    "controlType": "Detective",
    "controlNature": "IT-dependent Manual",
    "frequency": "Period-end",
    "keyControl": "Y",
    "owner": "Finance Head/Internal Audit",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "GL/JE listing spanning period-end and the following period; reversing-entry exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL/JE listing spanning period-end",
    "linkedCAAT": "DA-11",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 48,
    "processArea": "Data Analytics & JE Testing",
    "subProcess": "Journal Entry Controls",
    "riskId": "JE-06",
    "riskDesc": "Journal entries reflect unusual account combinations (e.g. debit to revenue/credit to cash, or postings to dormant/suspense accounts) indicating errors or manipulation.",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "JE-C06",
    "controlDesc": "A predefined list of 'unusual' account-pair combinations is maintained; a JE exception report is run against this list monthly and investigated.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Internal Audit",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "GL/JE listing; unusual account-combination rule list; exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL/JE listing + Chart of Accounts",
    "linkedCAAT": "DA-09",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 49,
    "processArea": "Expenses & Overheads",
    "subProcess": "Employee Reimbursements",
    "riskId": "EXP-01",
    "riskDesc": "Expense claims/reimbursements are inflated or duplicated (the same bill claimed more than once, or personal expenses claimed as business expenses).",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "EXP-C01",
    "controlDesc": "Expense claims are supported by original bills, approved by the reporting manager, and checked for duplicate bill numbers/amounts before reimbursement.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "HR/Finance",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Expense claim register with approvals and bill images/scans",
    "analyticsTestable": "Y",
    "primaryDataSource": "Expense Claim Register",
    "linkedCAAT": "DA-01",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 50,
    "processArea": "Expenses & Overheads",
    "subProcess": "Recurring Overheads",
    "riskId": "EXP-02",
    "riskDesc": "Recurring overhead expenses (rent, utilities, AMC, subscriptions) vary significantly month-to-month without explanation, potentially masking unrecorded liabilities, double-booking or errors.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "EXP-C02",
    "controlDesc": "A month-on-month trend analysis of recurring overheads is performed and significant variances are investigated and documented.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "GL expense ledger by month; recurring-contract register (rent/AMC agreements) for cross-check",
    "analyticsTestable": "Y",
    "primaryDataSource": "GL Expense Ledger (multi-month)",
    "linkedCAAT": "DA-32",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 51,
    "processArea": "Expenses & Overheads",
    "subProcess": "Period-End Cut-off",
    "riskId": "EXP-03",
    "riskDesc": "Expenses are booked in the wrong accounting period (cut-off error), whether inadvertently or to manage reported profit.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "EXP-C03",
    "controlDesc": "Expense cut-off testing is performed at period-end: bills/invoices dated close to period-end are reviewed to confirm allocation to the correct accounting period.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Period-end",
    "keyControl": "Y",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Purchase/expense register around period-end; goods/service receipt dates; cut-off working paper",
    "analyticsTestable": "Y",
    "primaryDataSource": "Purchase/Expense Register around period-end",
    "linkedCAAT": "DA-30",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 52,
    "processArea": "Revenue & Receivables",
    "subProcess": "Related Party / Unusual Sales",
    "riskId": "REV-06",
    "riskDesc": "Fictitious or inflated sales are routed through related parties or unusual/new customers to artificially inflate revenue or turnover (e.g. to meet bank/NBFC loan covenants or MSME/Udyam turnover classification).",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "REV-C06",
    "controlDesc": "Top-customer concentration and related-party sales are analyzed each period; unusual spikes in sales to related or newly-added customers, particularly near period-end, are investigated.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Period-end",
    "keyControl": "Y",
    "owner": "Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Sales register; customer master with creation dates; related party register",
    "analyticsTestable": "Y",
    "primaryDataSource": "Sales Register + Customer Master + Related Party Register",
    "linkedCAAT": "DA-29, DA-30",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 53,
    "processArea": "Revenue & Receivables",
    "subProcess": "Customer Master",
    "riskId": "REV-07",
    "riskDesc": "Customer master data (credit limit, address, bank details for refunds) is altered without authorization, enabling fraudulent transactions or diversion of refunds.",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "REV-C07",
    "controlDesc": "Customer master changes require approval and are logged in the system; the customer master change log is reviewed periodically.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Sales/Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Customer master change log; approval evidence for credit limit changes",
    "analyticsTestable": "Y",
    "primaryDataSource": "Customer Master change log",
    "linkedCAAT": "DA-19",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 54,
    "processArea": "Purchase & Payables",
    "subProcess": "Procure to Pay",
    "riskId": "PUR-06",
    "riskDesc": "Purchase orders are deliberately split into smaller amounts to keep each PO below the approval/quotation threshold (structuring), circumventing the intended control.",
    "riskCategory": "Fraud",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PUR-C06",
    "controlDesc": "Multiple POs raised to the same vendor within a short window are reviewed for combined value against the approval threshold; splitting patterns are investigated.",
    "controlType": "Detective",
    "controlNature": "IT-dependent Manual",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Purchase Manager/Internal Audit",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Purchase order register; approval threshold policy; split-PO exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "Purchase Order Register",
    "linkedCAAT": "DA-15",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 55,
    "processArea": "Purchase & Payables",
    "subProcess": "Procure to Pay",
    "riskId": "PUR-07",
    "riskDesc": "Expenses/purchases are booked and paid without a corresponding Goods Receipt Note (GRN) or proof of service delivery, risking payment for goods/services never received.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PUR-C07",
    "controlDesc": "All purchase invoices booked are matched to a GRN or service-completion certificate before payment approval; an exception report of invoices without GRN is reviewed.",
    "controlType": "Preventive",
    "controlNature": "IT-dependent Manual",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Accounts/Purchase",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Purchase invoice register; GRN/service completion register; no-GRN exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "Purchase Invoice Register + GRN Register",
    "linkedCAAT": "DA-16",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 56,
    "processArea": "Inventory Management",
    "subProcess": "Stock Control",
    "riskId": "INV-05",
    "riskDesc": "Negative or illogical stock quantities appear in the system, indicating unrecorded sales/purchases, data entry errors, or theft going undetected between physical counts.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "INV-C05",
    "controlDesc": "A negative-stock exception report is generated and reviewed after each stock update/posting cycle; root causes are investigated and corrected.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Weekly",
    "keyControl": "N",
    "owner": "Store In-charge",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Stock ledger with running balances; negative-stock exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "Stock Ledger",
    "linkedCAAT": "DA-23",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "NexGen EV holds high-value Lithium-ion battery cells, BMS electronics, PMSM motors, WIP packs & finished electric scooters."
  },
  {
    "sNo": 57,
    "processArea": "Payroll & HR",
    "subProcess": "Master Data",
    "riskId": "PAY-05",
    "riskDesc": "Two or more employees share the same bank account number, a strong indicator of a ghost employee or diversion of salary payments.",
    "riskCategory": "Fraud",
    "likelihood": "L",
    "impact": "H",
    "inherentRisk": "M",
    "controlId": "PAY-C05",
    "controlDesc": "A duplicate-bank-account test is run on the employee master/payroll bank file before each pay run; exceptions are investigated and resolved before disbursement.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "HR/Finance",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Employee master; payroll bank transfer file; duplicate-account exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "Employee Master + Payroll Bank Transfer File",
    "linkedCAAT": "DA-25",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "220 staff total (70 permanent + 150 factory contract labour); PF, ESI and LWF applicable."
  },
  {
    "sNo": 58,
    "processArea": "Payroll & HR",
    "subProcess": "Contract Labour",
    "riskId": "PAY-06",
    "riskDesc": "Contract/casual labour payments are made without adequate documentation (attendance/muster roll), enabling inflated headcount billing by labour contractors.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PAY-C06",
    "controlDesc": "Contractor labour bills are verified against muster roll/attendance records and evidence of PF/ESI compliance for contract labour before payment.",
    "controlType": "Preventive",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "HR/Site Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Muster roll/attendance records; contractor invoices; contract labour PF/ESI proof",
    "analyticsTestable": "Partial",
    "primaryDataSource": "Muster Roll + Contractor Bills",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "220 staff total (70 permanent + 150 factory contract labour); PF, ESI and LWF applicable."
  },
  {
    "sNo": 59,
    "processArea": "Fixed Assets & Capex",
    "subProcess": "Asset Register",
    "riskId": "FA-04",
    "riskDesc": "Duplicate or missing asset tags/serial numbers result in the same physical asset being recorded twice (overstatement) or an asset going untracked in the register.",
    "riskCategory": "Financial",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "FA-C04",
    "controlDesc": "An asset-tag/serial-number uniqueness check is performed on the fixed asset register periodically as part of the FAR maintenance process.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Annual",
    "keyControl": "N",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Fixed asset register; duplicate-tag exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "Fixed Asset Register",
    "linkedCAAT": "DA-27",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 60,
    "processArea": "Cash & Bank",
    "subProcess": "Compliance",
    "riskId": "CB-05",
    "riskDesc": "Cash transactions are deliberately structured just below regulatory reporting/disallowance thresholds (e.g. Section 40A(3), Section 269ST, Section 269SS/269T) to circumvent tax compliance.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "CB-C05",
    "controlDesc": "A cash-transaction threshold and 'near-threshold' (structuring) exception report is generated and reviewed monthly by the finance head.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Cash book/payment register; structuring exception report; applicable threshold reference table",
    "analyticsTestable": "Y",
    "primaryDataSource": "Cash Book / Payment & Receipt Register",
    "linkedCAAT": "DA-28",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 61,
    "processArea": "Statutory Compliance",
    "subProcess": "GST - E-invoicing/E-way Bill",
    "riskId": "STAT-05",
    "riskDesc": "Where e-invoicing applies (based on turnover threshold) or e-way bill rules apply, invoices are raised without a valid IRN/e-way bill, risking penalty, ITC denial to customers and goods detention.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "STAT-C05",
    "controlDesc": "E-invoice/e-way bill applicability is reassessed each financial year against the turnover threshold; an exception report flags qualifying invoices without a corresponding IRN/e-way bill.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Sales register; e-invoice/IRN log; e-way bill register; turnover threshold assessment working",
    "analyticsTestable": "Y",
    "primaryDataSource": "Sales Register + E-invoice/IRN Log + E-way Bill Register",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Turnover ~₹80 Cr exceeds ₹5 Cr threshold for mandatory GST e-invoicing (IRN) and E-way bill."
  },
  {
    "sNo": 62,
    "processArea": "IT General Controls",
    "subProcess": "Segregation of Duties",
    "riskId": "IT-04",
    "riskDesc": "Segregation-of-duties conflicts exist within system user roles (e.g. the same user can create a vendor and also approve payment to that vendor), enabling fraud.",
    "riskCategory": "IT/Fraud",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "IT-C04",
    "controlDesc": "A segregation-of-duties conflict matrix is defined for the accounting system's roles/modules; a system user-role report is periodically analyzed against the matrix and conflicts remediated.",
    "controlType": "Detective",
    "controlNature": "Automated",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "IT Admin/Internal Audit",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "System user-role/rights export; SoD conflict matrix; conflict exception report",
    "analyticsTestable": "Y",
    "primaryDataSource": "System User-Role/Rights Export",
    "linkedCAAT": "",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Standard MSME automotive component manufacturing internal control."
  },
  {
    "sNo": 63,
    "processArea": "Related Party & Loans",
    "subProcess": "Related Party Identification",
    "riskId": "RPT-03",
    "riskDesc": "Vendors/customers are shared between the MSME and other promoter-owned entities without transparent disclosure, enabling undisclosed related-party dealings or profit-shifting.",
    "riskCategory": "Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "RPT-C03",
    "controlDesc": "The vendor/customer master is cross-checked against the related-party register and known promoter-entity details (PAN/address/bank account) for undisclosed relationships, at least annually.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Annual",
    "keyControl": "Y",
    "owner": "Finance Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Vendor/customer master; related party register; promoter/director/associate entity details",
    "analyticsTestable": "Y",
    "primaryDataSource": "Vendor/Customer Master + Related Party Register + Director Master",
    "linkedCAAT": "DA-29",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Promoter family holds sister packaging firm & machining associate; ₹1.2 Cr standing loan from MD."
  },
  {
    "sNo": 64,
    "processArea": "Purchase & Payables",
    "subProcess": "Goods Inward & Store Receipt",
    "riskId": "PUR-08",
    "riskDesc": "Goods received at factory gates are delayed in GRN booking in store ledgers, leading to unrecorded liabilities, inventory stock discrepancies, or lost vendor cash discounts.",
    "riskCategory": "Operational",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PUR-C08",
    "controlDesc": "Security gate entry records are matched against ERP GRN entries daily by the Store Officer; any inward shipment unbooked beyond 24 hours is escalated to Plant Finance.",
    "controlType": "Detective",
    "controlNature": "Automated / Workflow",
    "frequency": "Daily",
    "keyControl": "Y",
    "owner": "Store Manager / Accounts Payable",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Security gate register; ERP GRN dump; daily unbooked gate entry pending list",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-GRN-01 Store Inward GRN & Gate Entry Log",
    "linkedCAAT": "DA-71",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Dual megasites at Chakan and Hosur handle 120+ truck deliveries weekly."
  },
  {
    "sNo": 65,
    "processArea": "Purchase & Payables",
    "subProcess": "Quality Inspection & Quarantine Acceptance",
    "riskId": "PUR-09",
    "riskDesc": "Substandard or damaged component lots (e.g. cracked lithium cell casings or low internal resistance) are accepted into production stock without rigorous QA inspection, risking vehicle recall.",
    "riskCategory": "Operational / Compliance",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PUR-C09",
    "controlDesc": "Inward raw materials are placed under automated ERP quarantine hold upon gate receipt; GRN acceptance into active stock requires digital sign-off of the QA inspection parameter sheet.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Head of Quality Assurance",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "QC inspection parameter test certificates; ERP quarantine release logs; calibration records",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-GRN-01 Store Inward GRN & Gate Entry Log",
    "linkedCAAT": "DA-72",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "AIS-156 Phase 2 mandate requires strict batch-level cell testing before cleanroom assembly."
  },
  {
    "sNo": 66,
    "processArea": "Purchase & Payables",
    "subProcess": "Return to Vendor (RTV) & Rejection Recovery",
    "riskId": "PUR-10",
    "riskDesc": "Material rejected during inward inspection is returned to suppliers without formal debit notes or credit adjustments, resulting in payment of full invoice value for defective parts.",
    "riskCategory": "Financial / Cash Leakage",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PUR-C10",
    "controlDesc": "Upon logging a QC rejection in ERP, an automated Return to Vendor (RTV) delivery challan and provisional debit note are triggered within 48 hours, blocking invoice payment disbursement.",
    "controlType": "Preventive",
    "controlNature": "Automated / Workflow",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Accounts Payable Lead",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "QC rejection slips; RTV delivery challans; debit notes; AP invoice hold logs",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-GRN-01 Store Inward GRN & Gate Entry Log",
    "linkedCAAT": "DA-72",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Essential to prevent direct cash leakage on defective lithium cell and casting batches."
  },
  {
    "sNo": 67,
    "processArea": "Purchase & Payables",
    "subProcess": "GRN Unbilled Accruals Reconciliation (GR/IR)",
    "riskId": "PUR-11",
    "riskDesc": "Goods received for which vendor bills have not been received (GR/IR clearing account) remain unreconciled for long periods, leading to inaccurate financial closing accruals.",
    "riskCategory": "Financial Reporting",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PUR-C11",
    "controlDesc": "Finance Controller reviews the GR/IR unbilled goods receipt aging monthly; unbilled receipts older than 30 days are followed up with vendors and accrued under Ind AS 37.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Monthly",
    "keyControl": "N",
    "owner": "Finance Controller",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Monthly GR/IR aging register; vendor follow-up emails; accrual journal entries",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-GRN-01 Store Inward GRN & AP Ledger",
    "linkedCAAT": "DA-16, DA-71",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Parallel run between Tally and SAP B1 makes GR/IR reconciliation vital."
  },
  {
    "sNo": 68,
    "processArea": "Inventory Management",
    "subProcess": "Subcontracting & Job-Work Deemed Supply (GST Sec 143)",
    "riskId": "INV-06",
    "riskDesc": "Raw materials and semi-finished components sent to external job-workers are not received back within 1 year, triggering deemed outward taxable supply under GST Section 143 with 18% tax + interest.",
    "riskCategory": "Taxation / Compliance",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "INV-C06",
    "controlDesc": "Store and Taxation team runs an automated 300-day aging report on open Job-Work delivery challans (Annexure IV); challans approaching 300 days trigger mandatory return or tax invoicing notices.",
    "controlType": "Detective / Preventive",
    "controlNature": "Automated",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Taxation Manager / Store Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Job-work delivery challan register; Form ITC-04 returns; 300-day escalation notices",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-JW-01 Job-Work Outward Delivery Challans",
    "linkedCAAT": "DA-43, DA-74",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Protects ₹18.5L in deemed supply tax exposure across 45 active job-work challans."
  },
  {
    "sNo": 69,
    "processArea": "Inventory Management",
    "subProcess": "Job-Worker Scrap Allowance & Burning Loss Benchmark",
    "riskId": "INV-07",
    "riskDesc": "External subcontractors claim excessive manufacturing scrap or burning loss on tubular steel and aluminum castings beyond contractual tolerance, concealing stolen raw material.",
    "riskCategory": "Operational / Fraud",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "INV-C07",
    "controlDesc": "Inward subcontracting receipts are automatically reconciled against standard BOM yield factors; any scrap loss exceeding contractual tolerance (e.g. >1.5%) is debited to subcontractor account.",
    "controlType": "Preventive",
    "controlNature": "Automated / Workflow",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Plant Store Officer / Cost Accountant",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Subcontractor rate contract; scrap allowance matrix; debit notes for excess scrap",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-JW-01 Job-Work Outward Delivery Challans",
    "linkedCAAT": "DA-70, DA-75",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Subcontracting represents 28% of frame assembly and heat-treatment costs."
  },
  {
    "sNo": 70,
    "processArea": "Inventory Management",
    "subProcess": "Subcontractor Premise Stock Physical Verification",
    "riskId": "INV-08",
    "riskDesc": "Principal-owned inventory lying at third-party job-worker premises is misappropriated, damaged, or commingled with other clients' stock without detection.",
    "riskCategory": "Operational / Asset Protection",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "INV-C08",
    "controlDesc": "Internal audit team conducts half-yearly physical stock verification and obtains third-party balance confirmation letters from all job-workers holding inventory >₹5,00,000.",
    "controlType": "Detective",
    "controlNature": "Manual",
    "frequency": "Half-yearly",
    "keyControl": "Y",
    "owner": "Internal Auditor / Plant Head",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Physical count sheets; external job-worker balance confirmations; variance reconciliation",
    "analyticsTestable": "Partial",
    "primaryDataSource": "ET-JW-01 Job-Work Outward Delivery Challans",
    "linkedCAAT": "DA-43",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Statutory requirement under CARO 2020 Clause (ii) for inventory with third parties."
  },
  {
    "sNo": 71,
    "processArea": "Inventory Management",
    "subProcess": "Delivery Challan Sequence Integrity (Rule 45)",
    "riskId": "INV-09",
    "riskDesc": "Job-work delivery challans are issued out of manual unnumbered books or sequence gaps occur, violating Rule 45 of CGST Rules and triggering GST confiscation penalties.",
    "riskCategory": "Compliance / Legal",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "INV-C09",
    "controlDesc": "All job-work delivery challans are sequentially generated by ERP with automated numbering and time-stamping; manual delivery paper challans are strictly prohibited at factory gates.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Transaction-wise",
    "keyControl": "N",
    "owner": "Store Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "ERP sequence continuity logs; gate dispatch records; missing sequence audit trail",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-JW-01 Job-Work Outward Delivery Challans",
    "linkedCAAT": "DA-03, DA-43",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Maintains immutable audit trail for GST Form ITC-04 quarterly filings."
  },
  {
    "sNo": 72,
    "processArea": "Inventory Management",
    "subProcess": "Daily Work Order BOM Yield Reconciliation",
    "riskId": "PRD-01",
    "riskDesc": "Shop floor assembly lines consume excessive battery cells, wiring harnesses, or motors without engineering BOM change orders, disguising shop floor theft or calibration defects.",
    "riskCategory": "Operational",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PRD-C01",
    "controlDesc": "Daily Work Order closing requires comparison of standard BOM input vs actual consumed raw materials; any yield loss variance exceeding 3.5% requires written sign-off by Plant Head.",
    "controlType": "Detective / Preventive",
    "controlNature": "Automated / Workflow",
    "frequency": "Daily",
    "keyControl": "Y",
    "owner": "Plant Head / Industrial Engineer",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "MES Work Order completion logs; standard BOM master; engineering variance sign-offs",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-PRD-01 Shop Floor Production & Scrap Log",
    "linkedCAAT": "DA-40, DA-76",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Battery packs represent 46% of total vehicle bill of materials cost."
  },
  {
    "sNo": 73,
    "processArea": "Inventory Management",
    "subProcess": "Scrap Yard Segregation & Disposal Authorization",
    "riskId": "PRD-02",
    "riskDesc": "High-value scrap (aluminum die-cast runners, copper swarf, degraded lithium cells) is disposed of or sold off-the-books without proper dual authorization and weighing.",
    "riskCategory": "Fraud / Financial",
    "likelihood": "H",
    "impact": "M",
    "inherentRisk": "H",
    "controlId": "PRD-C02",
    "controlDesc": "Scrap movement from shop floor to factory scrap yard requires physical bin segregation, dual sign-off (Production Supervisor + Security), and daily entry into ERP scrap sub-ledger.",
    "controlType": "Preventive",
    "controlNature": "Manual / Dual Sign-off",
    "frequency": "Daily",
    "keyControl": "Y",
    "owner": "Plant Security & Store Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Internal scrap transfer notes; scrap yard bin logs; dual supervisor signatures",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-PRD-01 Shop Floor Production & Scrap Log",
    "linkedCAAT": "DA-44",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Prevents cash siphoning and ensures compliance with Section 269ST."
  },
  {
    "sNo": 74,
    "processArea": "Inventory Management",
    "subProcess": "Automated Weighbridge Ticket Gross/Tare Capture",
    "riskId": "PRD-03",
    "riskDesc": "Weighbridge operator manipulates vehicle tare weights manually on keyboards, allowing buyers to take out excess scrap materials without invoicing.",
    "riskCategory": "Fraud / Financial",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PRD-C03",
    "controlDesc": "The digital weighbridge is integrated directly into ERP with automatic sensor data capture; manual keyboard editing of gross and tare weights is disabled via system configuration.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "IT Head / Security Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Weighbridge configuration parameter log; sensor audit trail; automated ticket logs",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-PRD-01 Shop Floor Production & Scrap Log",
    "linkedCAAT": "DA-77",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Enforces zero manual override on bulk metal and battery scrap dispatches."
  },
  {
    "sNo": 75,
    "processArea": "Inventory Management",
    "subProcess": "Factory Gate Scrap Exit Verification",
    "riskId": "PRD-04",
    "riskDesc": "Scrap transport trucks exit factory premises without matching tax invoices and weighbridge slips, resulting in unbilled cash scrap diversion and tax evasion.",
    "riskCategory": "Fraud / Compliance",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PRD-C04",
    "controlDesc": "Security gate will not raise boom barrier for scrap vehicles without verifying electronic GST tax invoice, E-way bill, and weighbridge slip confirming weight within 1% tolerance.",
    "controlType": "Preventive",
    "controlNature": "Manual / Gate Control",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Chief Security Officer",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Security gate pass outward register; matched invoice copies; weighbridge tickets",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-PRD-01 Shop Floor Production & Scrap Log",
    "linkedCAAT": "DA-44, DA-77",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Direct gate-level deterrent against off-the-books cash transactions."
  },
  {
    "sNo": 76,
    "processArea": "Payroll & HR",
    "subProcess": "Biometric Punch vs Payroll Muster 3-Way Reconciliation",
    "riskId": "PAY-06",
    "riskDesc": "Payroll is processed based on manual attendance sheets without reconciling against electronic biometric punch machines, enabling ghost employees or proxy attendance.",
    "riskCategory": "Fraud / Payroll Leakage",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PAY-C07",
    "controlDesc": "Monthly payroll calculation is generated strictly from electronic biometric swipe logs; any manual attendance override requires approval by Plant Head and HR Manager.",
    "controlType": "Preventive",
    "controlNature": "Automated / Workflow",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "HR Manager / Finance Controller",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Biometric attendance dump; HR manual muster reconciliation; approval exceptions",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-ATT-01 Biometric Attendance Muster & OT Dump",
    "linkedCAAT": "DA-25, DA-55, DA-78",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Plant headcount comprises 210 on-roll and 100 contractual assembly line staff."
  },
  {
    "sNo": 77,
    "processArea": "Payroll & HR",
    "subProcess": "Shop Floor Overtime (OT) Pre-Approval Workflow",
    "riskId": "PAY-07",
    "riskDesc": "Unplanned or falsified overtime hours are logged by shop floor workers at double pay rates without legitimate production justification, inflating factory labor overheads.",
    "riskCategory": "Operational / Cost Control",
    "likelihood": "H",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "PAY-C08",    "controlDesc": "All overtime shifts require pre-authorization form signed by Shift Supervisor and Production Manager at least 2 hours prior to shift extension, specifying work order number.",
    "controlType": "Preventive",
    "controlNature": "Manual / Workflow",
    "frequency": "Shift-wise",
    "keyControl": "Y",
    "owner": "Production Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Approved OT requisition slips; production schedule targets; supervisor sign-offs",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-ATT-01 Biometric Attendance Muster & OT Dump",
    "linkedCAAT": "DA-26, DA-57",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Controls excessive overtime expenses during month-end dispatch surges."
  },
  {
    "sNo": 78,
    "processArea": "Payroll & HR",
    "subProcess": "Factories Act Overtime Ceiling Compliance (Max 50 Hours)",
    "riskId": "PAY-08",
    "riskDesc": "Factory workers exceed the statutory ceiling of 50 overtime hours per quarter under Section 64 of Factories Act, 1948, risking labor commissioner prosecution and factory license suspension.",
    "riskCategory": "Compliance / Legal",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PAY-C09",
    "controlDesc": "HR system tracks cumulative worker overtime hours weekly; an automated alert is triggered when a worker reaches 40 OT hours, blocking further overtime scheduling for the quarter.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Weekly",
    "keyControl": "Y",
    "owner": "HR Manager / Compliance Officer",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Cumulative OT quarterly tracker; automated HR threshold warnings; labor audit reports",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-ATT-01 Biometric Attendance Muster & OT Dump",
    "linkedCAAT": "DA-57, DA-79",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Mandatory compliance for Chakan MIDC and Hosur manufacturing facilities."
  },
  {
    "sNo": 79,
    "processArea": "Payroll & HR",
    "subProcess": "Contract Labor Muster & Statutory ECR Challan Audit",
    "riskId": "PAY-09",
    "riskDesc": "Contract manpower agencies fail to deposit Provident Fund and ESI contributions for assembly workers, triggering principal employer vicarious liability under CLRA Act.",
    "riskCategory": "Compliance / Legal",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "PAY-C10",    "controlDesc": "Contractor monthly service bills are released only after verifying previous month's EPFO Electronic Challan Receipt (ECR) showing individual worker UAN-wise remittance confirmation.",
    "controlType": "Preventive",
    "controlNature": "Manual / Document Review",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "HR Compliance Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Contractor invoices; EPFO ECR payment receipts; individual worker UAN wage statements",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-ATT-01 Biometric Attendance Muster & DRL-26",
    "linkedCAAT": "DA-55",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Safeguards company against joint-and-several liability for 100 contractual line workers."
  },
  {
    "sNo": 80,
    "processArea": "Revenue & Receivables",
    "subProcess": "Annual Dealership Credit Limit & Bank Guarantee Review",
    "riskId": "REV-08",
    "riskDesc": "Dealerships are granted unsecured credit lines without evaluating audited financial statements, or bank guarantees expire unnoticed, leaving EV dispatches completely unprotected.",
    "riskCategory": "Financial / Credit Risk",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "REV-C08",
    "controlDesc": "Finance Committee formally reviews dealership credit limits annually; bank guarantee expiries are tracked with automated 30-day renewal warnings in ERP.",
    "controlType": "Detective / Preventive",
    "controlNature": "Manual / Annual Review",
    "frequency": "Annual / Monthly monitoring",
    "keyControl": "Y",
    "owner": "Head of Dealer Finance / CFO",
    "residualRisk": "M",
    "applicableToClient": "Y",
    "evidenceRequired": "Dealership credit evaluation files; bank guarantee tracker; CFO review minutes",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-CUST-01 Customer & Dealership Credit Master",
    "linkedCAAT": "DA-48, DA-81",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Governs ₹84.56 Cr in B2C dealership sales across 110 authorized retail touchpoints."
  },
  {
    "sNo": 81,
    "processArea": "Revenue & Receivables",
    "subProcess": "Automated ERP Credit Block & Hard-Stop on Dispatches",
    "riskId": "REV-09",
    "riskDesc": "Sales executives bypass credit blocks manually in ERP to dispatch vehicles to defaulting dealerships to achieve monthly volume targets, causing massive bad debts.",
    "riskCategory": "Financial / Fraud",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "REV-C09",
    "controlDesc": "ERP enforces automated dispatch lock on any dealership whose account balance exceeds credit limit OR has invoices unpaid >30 days; override permitted strictly by MD.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Managing Director / Finance Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "ERP credit check parameter settings; dispatch hold logs; MD override memos",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-CUST-01 Customer Master & DRL-01 Sales Register",
    "linkedCAAT": "DA-48, DA-80",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Ensures DSO remains within 84-day working capital tolerance limits."
  },
  {
    "sNo": 82,
    "processArea": "Revenue & Receivables",
    "subProcess": "Off-Invoice Discount & Dealer Incentive Approval Matrix",
    "riskId": "REV-10",
    "riskDesc": "Disproportionate post-sales rebates and secret price concessions are issued to select dealerships via credit notes without commercial justification, siphoning company profits.",
    "riskCategory": "Fraud / Financial",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "REV-C10",
    "controlDesc": "All dealer incentive schemes and retroactive credit notes require pre-approval per Delegation of Authority: up to 3% by Sales Head, >3% requiring dual sign-off by CFO and MD.",
    "controlType": "Preventive",
    "controlNature": "Manual / Workflow",
    "frequency": "Quarterly / Scheme-wise",
    "keyControl": "Y",
    "owner": "CFO & Managing Director",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Board approved rebate circulars; credit note authorization forms; sales performance data",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-CUST-01 Customer Master & Credit Note Register",
    "linkedCAAT": "DA-31, DA-47",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Prevents profit leakage and aligns with Ind AS 115 variable consideration rules."
  },
  {
    "sNo": 83,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Battery Pack Warranty Claim Multi-Tier Authorization",
    "riskId": "WAR-01",
    "riskDesc": "Service centers file fictitious warranty claims for battery pack replacements (₹32,000 cost each) on customer vehicles that have exceeded warranty limits or suffered external damage.",
    "riskCategory": "Fraud / Financial",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "WAR-C01",
    "controlDesc": "Warranty replacement of battery packs requires technical telematics diagnostic log verification, photos of battery tamper seals, and dual approval by Regional Service Head and Quality Lead.",
    "controlType": "Preventive",
    "controlNature": "Workflow",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Head of Customer Service & Quality",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Service CRM diagnostic reports; battery seal photographs; service head approval",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-WAR-01 Warranty Claims & Battery Core Returns",
    "linkedCAAT": "DA-63, DA-66",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Protects against dealer fraud across 6,800 active fleet units under 3-year warranty."
  },
  {
    "sNo": 84,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Mandatory Core Battery Return Receipt Verification",
    "riskId": "WAR-02",
    "riskDesc": "Dealers retain defective core battery packs after receiving free warranty replacement packs, diverting failed batteries to grey market resale or local repair shops.",
    "riskCategory": "Fraud / Asset Protection",
    "likelihood": "H",
    "impact": "M",
    "inherentRisk": "H",
    "controlId": "WAR-C02",
    "controlDesc": "ERP automatically blocks warranty labor claim reimbursement and future warranty spare quotas to any dealer whose defective core battery is not inwarded at factory within 30 days.",
    "controlType": "Preventive",
    "controlNature": "Automated",
    "frequency": "Transaction-wise",
    "keyControl": "Y",
    "owner": "Central Warranty Store Head",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Store inward gate pass for failed cores; dealer quota block logs; warranty tracking report",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-WAR-01 Warranty Claims & Battery Core Returns",
    "linkedCAAT": "DA-66, DA-82",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Essential for EPR environmental compliance and root cause engineering failure analysis."
  },
  {
    "sNo": 85,
    "processArea": "Financial Closing & Reporting",
    "subProcess": "Ind AS 37 Actuarial Warranty Provision Review",
    "riskId": "WAR-03",
    "riskDesc": "Warranty liabilities are under-provisioned in financial statements based on ad-hoc historical numbers, leading to statutory audit qualification under Ind AS 37.",
    "riskCategory": "Financial Reporting / Compliance",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "WAR-C03",
    "controlDesc": "Finance Controller performs a quarterly actuarial reassessment of battery warranty provision based on active vehicle fleet size, average replacement pack cost, and IoT degradation curves.",
    "controlType": "Detective",
    "controlNature": "Manual / Actuarial Model",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "Finance Controller",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Quarterly actuarial warranty model; IoT battery degradation curves; JV adjustments",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-WAR-01 Warranty Claims & Fleet Telematics",
    "linkedCAAT": "DA-63, DA-83",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Bridges the ₹13.7L warranty provision deficit identified during fieldwork."
  },
  {
    "sNo": 86,
    "processArea": "Purchase & Payables",
    "subProcess": "Supplier Warranty Recovery Debit Note Issuance",
    "riskId": "WAR-04",
    "riskDesc": "Component manufacturing failures originating from battery cell or BMS supplier manufacturing defects are absorbed by NexGen EV instead of recovering from overseas vendor.",
    "riskCategory": "Financial / Cash Recovery",
    "likelihood": "M",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "WAR-C04",
    "controlDesc": "Quarterly failure analysis reports on defective cell lots are shared with suppliers; formal commercial debit notes are issued against pending payables under back-to-back warranty terms.",
    "controlType": "Detective / Recovery",
    "controlNature": "Workflow",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "Procurement Head & Quality Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Supplier root-cause 8D reports; commercial debit notes; vendor payables adjustment letters",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-WAR-01 Warranty Claims & Supplier Contracts",
    "linkedCAAT": "DA-63, DA-83",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Enforces back-to-back warranty recovery on high-failure cell batches."
  },
  {
    "sNo": 87,
    "processArea": "Statutory Compliance",
    "subProcess": "Monthly 3-Way GST Reconciliation (3B vs 2B vs Purchase Book)",
    "riskId": "STAT-03",
    "riskDesc": "Differences between GSTR-3B filed, auto-generated GSTR-2B, and general ledger purchase books remain unreconciled, resulting in departmental DRC-01C notices and 18% interest penalties.",
    "riskCategory": "Taxation / Compliance",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "STAT-C06",
    "controlDesc": "Taxation team prepares a monthly 3-way reconciliation of ITC availed in GSTR-3B vs GSTR-2B vs AP Ledger prior to return filing; ineligible ITC is flagged for reversal under Rule 37A.",
    "controlType": "Preventive",
    "controlNature": "Automated / Manual Reconciliation",
    "frequency": "Monthly",
    "keyControl": "Y",
    "owner": "Taxation Manager",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Monthly 3-way reconciliation statement; GSTR-2B JSON files; reversal journals",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-STAT-01 Statutory Returns & ET-GST-01",
    "linkedCAAT": "DA-20, DA-84",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Mitigates ₹12.12L in ineligible ITC exposure detected under GST Section 16(2)(aa)."
  },
  {
    "sNo": 88,
    "processArea": "Statutory Compliance",
    "subProcess": "Quarterly Form 26Q TDS Reconciliation vs Books",
    "riskId": "STAT-04",
    "riskDesc": "TDS deducted on contractor and professional fees is not matched with quarterly Form 26Q e-TDS returns, leading to demand notices under Section 201(1A) from Income Tax Department.",
    "riskCategory": "Taxation / Compliance",
    "likelihood": "M",
    "impact": "M",
    "inherentRisk": "M",
    "controlId": "STAT-C07",    "controlDesc": "Finance team reconciles general ledger TDS payable accounts with quarterly Form 26Q filing statements and TRACES Challan Status verification prior to quarterly closing.",
    "controlType": "Detective",
    "controlNature": "Manual / Reconciliation",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "Finance Controller",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Quarterly TDS reconciliation sheet; Form 26Q receipts; TRACES challan consumption logs",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-STAT-01 Statutory Returns & Form 26Q",
    "linkedCAAT": "DA-22",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Mandatory compliance under Income Tax Act 1961."
  },
  {
    "sNo": 89,
    "processArea": "IT General Controls",
    "subProcess": "Quarterly Segregation of Duties (SoD) Conflict Review",
    "riskId": "IT-02",
    "riskDesc": "ERP users accumulate conflicting toxic security privileges over time (e.g. Vendor Master Edit + Payment Release), enabling unauthorized transactions to be processed without oversight.",
    "riskCategory": "Governance / Fraud",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "IT-C05",    "controlDesc": "IT Security and Internal Audit execute an automated quarterly SoD conflict scan across all ERP user roles; identified toxic combinations must be resolved within 5 business days.",
    "controlType": "Detective",
    "controlNature": "Automated / Periodic Audit",
    "frequency": "Quarterly",
    "keyControl": "Y",
    "owner": "IT Head / Lead Internal Auditor",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "Quarterly SoD conflict matrix dump; role de-provisioning tickets; audit committee memo",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-USER-01 ERP User Authorization Matrix",
    "linkedCAAT": "DA-09, DA-59",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Eliminates single-point fraud risk across 15 active ERP accounting profiles."
  },
  {
    "sNo": 90,
    "processArea": "IT General Controls",
    "subProcess": "Prompt De-Provisioning of Separated Employee Access",
    "riskId": "IT-03",
    "riskDesc": "Resigned or terminated employees retain active system credentials in Tally / SAP after leaving the organization, exposing company data to unauthorized tampering or theft.",
    "riskCategory": "Security / Asset Protection",
    "likelihood": "H",
    "impact": "H",
    "inherentRisk": "H",
    "controlId": "IT-C06",    "controlDesc": "HR off-boarding notification is transmitted automatically to IT helpdesk; all ERP, banking, and cloud access accounts are deactivated within 24 hours of employee relieving.",
    "controlType": "Preventive",
    "controlNature": "Workflow",
    "frequency": "Event-driven",
    "keyControl": "Y",
    "owner": "IT Administrator / HR Lead",
    "residualRisk": "L",
    "applicableToClient": "Y",
    "evidenceRequired": "HR relieving orders; IT account deactivation timestamps; monthly active user reconciliations",
    "analyticsTestable": "Y",
    "primaryDataSource": "ET-USER-01 ERP User Authorization Matrix & Exit Master",
    "linkedCAAT": "DA-56, DA-85",
    "remarks": "",
    "status": "Applicable",
    "applicabilityRationale": "Mandatory compliance under MCA Rule 3(1) and ISO 27001 / IATF 16949."
  }
];

const masterControlLibrary90 = masterControlLibrary63;

// ------------------------------------------------------------------------------
// 7. INGESTED EVIDENCE DUMPS & SYNTHETIC DATA (FOR ACTIVE FIELDWORK)
// ------------------------------------------------------------------------------
const evidenceFiles = [
  { id: "EV-001", fileName: "Vendor_Master.xlsx", fileType: "xlsx", evidenceType: "Master Data", processAssociation: "Vendor Management", period: "FY25-26", sourceSystem: "Tally ERP 9", rows: 85, extractionConfidence: 0.99, dataQualityStatus: "PASS", controlsSupported: 5, size: "45KB", uploadDate: "2026-09-10", status: "Processed" },
  { id: "EV-002", fileName: "PO_Register.xlsx", fileType: "xlsx", evidenceType: "Transaction Data", processAssociation: "Purchase Orders", period: "FY25-26", sourceSystem: "Tally ERP 9", rows: 500, extractionConfidence: 0.98, dataQualityStatus: "WARNING", controlsSupported: 7, size: "120KB", uploadDate: "2026-09-11", status: "Processed" },
  { id: "EV-003", fileName: "GRN_Report.xlsx", fileType: "xlsx", evidenceType: "Transaction Data", processAssociation: "GRN", period: "FY25-26", sourceSystem: "Excel Inward", rows: 470, extractionConfidence: 0.95, dataQualityStatus: "WARNING", controlsSupported: 4, size: "110KB", uploadDate: "2026-09-12", status: "Processed" },
  { id: "EV-004", fileName: "Purchase_Invoice_Register.xlsx", fileType: "xlsx", evidenceType: "Transaction Data", processAssociation: "Invoice Processing", period: "FY25-26", sourceSystem: "Tally ERP 9", rows: 490, extractionConfidence: 0.97, dataQualityStatus: "WARNING", controlsSupported: 9, size: "135KB", uploadDate: "2026-09-12", status: "Processed" },
  { id: "EV-005", fileName: "Payment_Register.xlsx", fileType: "xlsx", evidenceType: "Transaction Data", processAssociation: "Payments", period: "FY25-26", sourceSystem: "HDFC Corporate Portal", rows: 460, extractionConfidence: 0.99, dataQualityStatus: "PASS", controlsSupported: 5, size: "90KB", uploadDate: "2026-09-13", status: "Processed" },
  { id: "EV-006", fileName: "Approval_Matrix.pdf", fileType: "pdf", evidenceType: "Policy Document", processAssociation: "Entity Level Controls", period: "FY25-26", sourceSystem: "Board Approved", rows: 4, extractionConfidence: 0.92, dataQualityStatus: "PASS", controlsSupported: 4, size: "200KB", uploadDate: "2026-09-10", status: "Processed" }
];

const approvalMatrix = [
  { level: 1, role: "Purchase Officer", limit: 50000 },
  { level: 2, role: "Purchase Manager", limit: 200000 },
  { level: 3, role: "VP Operations", limit: 1000000 },
  { level: 4, role: "Managing Director", limit: Infinity }
];

// --- Synthetic Vendors (85 records) ---
const syntheticVendors = [];
const baseBank = "HDFC0001234";
for (let i = 1; i <= 5; i++) {
  syntheticVendors.push({
    vendorId: `V-DUP-${i}`, vendorName: `Duplicate Auto Components ${i}`, gst: `27AADCD1234E1Z${i}`, pan: `AADCD1234${i}`, bankAccount: `1234567890123`, ifsc: baseBank, city: "Pune", state: "Maharashtra", status: "Active", onboardingDate: "2023-01-15", category: "Raw Material Steel",
    _isException: true, _exceptionType: 'DUPLICATE_VENDOR'
  });
}
for (let i = 1; i <= 3; i++) {
  syntheticVendors.push({
    vendorId: `V-DOR-${i}`, vendorName: `Dormant Fasteners India ${i}`, gst: `27BBBCD1234E1Z${i}`, pan: `BBBCD1234${i}`, bankAccount: `987654321012${i}`, ifsc: "SBIN0005678", city: "Mumbai", state: "Maharashtra", status: "Active", onboardingDate: "2021-05-10", category: "Consumables",
    _isException: true, _exceptionType: 'DORMANT_VENDOR'
  });
}
for (let i = 1; i <= 77; i++) {
  syntheticVendors.push({
    vendorId: `V-NRM-${i}`, vendorName: `Precision Tools & Dies Pvt Ltd ${i}`, gst: `27XXBCD${i}E1Z1`, pan: `XXBCD${i}Z`, bankAccount: `334455667788${i}`, ifsc: "ICIC0000123", city: "Pune", state: "Maharashtra", status: "Active", onboardingDate: "2024-02-01", category: "Machining"
  });
}

// --- Synthetic POs (60 representative records) ---
const syntheticPOs = [];
let poCounter = 1;
for (let i = 1; i <= 15; i++) {
  syntheticPOs.push({
    poNumber: `PO-BRC-${poCounter++}`, poDate: "2025-04-10", vendorId: "V-NRM-1", vendorName: "Precision Tools & Dies Pvt Ltd 1", itemDescription: "Brake Drum Castings Grade 25", quantity: 100, unitPrice: 600, totalAmount: 60000, approver: "Ravi Kumar (Purchase Officer)", approverLevel: 1, status: "Approved",
    _isException: true, _exceptionType: 'APPROVAL_BREACH'
  });
}
for (let i = 1; i <= 3; i++) {
  const vId = `V-NRM-${i+1}`;
  syntheticPOs.push({
    poNumber: `PO-SPLA-${poCounter++}`, poDate: "2025-05-15", vendorId: vId, vendorName: `Precision Tools & Dies Pvt Ltd ${i+1}`, itemDescription: "Piston Pin Batch A", quantity: 50, unitPrice: 990, totalAmount: 49500, approver: "Ravi Kumar (Purchase Officer)", approverLevel: 1, status: "Approved",
    _isException: true, _exceptionType: 'SPLIT_PO'
  });
  syntheticPOs.push({
    poNumber: `PO-SPLB-${poCounter++}`, poDate: "2025-05-15", vendorId: vId, vendorName: `Precision Tools & Dies Pvt Ltd ${i+1}`, itemDescription: "Piston Pin Batch B", quantity: 50, unitPrice: 990, totalAmount: 49500, approver: "Ravi Kumar (Purchase Officer)", approverLevel: 1, status: "Approved",
    _isException: true, _exceptionType: 'SPLIT_PO'
  });
}
while (syntheticPOs.length < 60) {
  syntheticPOs.push({
    poNumber: `PO-NRM-${poCounter++}`, poDate: "2025-06-01", vendorId: "V-NRM-5", vendorName: "Precision Tools & Dies Pvt Ltd 5", itemDescription: "Forged Crankshaft Alloy 4140", quantity: 10, unitPrice: 15000, totalAmount: 150000, approver: "Suresh Menon (Purchase Manager)", approverLevel: 2, status: "Approved"
  });
}

// --- Synthetic GRNs (55 representative records) ---
const syntheticGRNs = [];
let grnCounter = 1;
for (let i = 1; i <= 12; i++) {
  syntheticGRNs.push({
    grnNumber: `GRN-MIS-${grnCounter++}`, grnDate: "2025-06-05", poNumber: `PO-NRM-${i}`, vendorId: "V-NRM-5", itemDescription: "Forged Crankshaft Alloy 4140", quantityOrdered: 10, quantityReceived: 8, status: "Received",
    _isException: true, _exceptionType: 'QUANTITY_MISMATCH'
  });
}
while (syntheticGRNs.length < 55) {
  syntheticGRNs.push({
    grnNumber: `GRN-NRM-${grnCounter++}`, grnDate: "2025-06-05", poNumber: `PO-NRM-20`, vendorId: "V-NRM-5", itemDescription: "Forged Crankshaft Alloy 4140", quantityOrdered: 10, quantityReceived: 10, status: "Received"
  });
}

// --- Synthetic Invoices (60 representative records) ---
const syntheticInvoices = [];
let invCounter = 1;
for (let i = 1; i <= 10; i++) {
  syntheticInvoices.push({
    invoiceNumber: `INV-DUP-${invCounter++}`, invoiceDate: "2025-06-10", vendorId: "V-NRM-5", vendorName: "Precision Tools & Dies Pvt Ltd 5", poNumber: `PO-NRM-20`, grnNumber: `GRN-NRM-1`, invoiceAmount: 150000, poAmount: 150000, status: "Processed",
    _isException: true, _exceptionType: 'DUPLICATE_INVOICE'
  });
}
for (let i = 1; i <= 8; i++) {
  syntheticInvoices.push({
    invoiceNumber: `INV-PRC-${invCounter++}`, invoiceDate: "2025-06-12", vendorId: "V-NRM-5", vendorName: "Precision Tools & Dies Pvt Ltd 5", poNumber: `PO-NRM-${i+20}`, grnNumber: `GRN-NRM-2`, invoiceAmount: 160000, poAmount: 150000, status: "Processed",
    _isException: true, _exceptionType: 'PRICE_MISMATCH'
  });
}
while (syntheticInvoices.length < 60) {
  syntheticInvoices.push({
    invoiceNumber: `INV-NRM-${invCounter++}`, invoiceDate: "2025-06-15", vendorId: "V-NRM-5", vendorName: "Precision Tools & Dies Pvt Ltd 5", poNumber: `PO-NRM-30`, grnNumber: `GRN-NRM-5`, invoiceAmount: 150000, poAmount: 150000, status: "Processed"
  });
}

// --- Synthetic Payments (55 representative records) ---
const syntheticPayments = [];
let payCounter = 1;
for (let i = 1; i <= 7; i++) {
  syntheticPayments.push({
    paymentId: `PAY-LAT-${payCounter++}`, paymentDate: "2025-09-01", vendorId: "V-NRM-5", vendorName: "Precision Tools & Dies Pvt Ltd 5", invoiceNumber: `INV-NRM-${i}`, invoiceDate: "2025-06-15", amount: 150000, paymentMode: "NEFT", daysToPayment: 78,
    _isException: true, _exceptionType: 'LATE_PAYMENT'
  });
}
while (syntheticPayments.length < 55) {
  syntheticPayments.push({
    paymentId: `PAY-NRM-${payCounter++}`, paymentDate: "2025-07-01", vendorId: "V-NRM-5", vendorName: "Precision Tools & Dies Pvt Ltd 5", invoiceNumber: `INV-NRM-20`, invoiceDate: "2025-06-15", amount: 150000, paymentMode: "RTGS", daysToPayment: 16
  });
}


// ------------------------------------------------------------------------------
// 7B. ENRICHED EXHAUSTIVE DATASETS (ALL 13 PROCESS AREAS & 32 CAATS)
// ------------------------------------------------------------------------------

// 1. Bank & Cash Transactions (480 entries)
const syntheticBankTransactions = [
  { txnId: "TXN-HDFC-01", date: "2025-06-12", type: "Cash Payment", account: "HDFC-123456", party: "Apex Factory Repairs", amount: 35000, narration: "Factory floor repair cash disbursement", approver: "Ravi Kumar", _exceptionType: "CASH_40A3" },
  { txnId: "TXN-HDFC-02", date: "2025-06-14", type: "Cash Receipt", account: "Cash in Hand", party: "Scrap Buyer Sundry", amount: 250000, narration: "Cash sale of sheet metal scrap", approver: "Ravi Kumar", _exceptionType: "CASH_269ST" },
  { txnId: "TXN-HDFC-03", date: "2025-06-15", type: "Bank Transfer", account: "HDFC-123456", party: "Dormant Fasteners", amount: 120000, narration: "Urgent vendor payout Sunday", approver: "Suresh Menon", _exceptionType: "WEEKEND_BANK" },
  { txnId: "TXN-HDFC-04", date: "2025-06-18", type: "Bank Transfer", account: "HDFC-123456", party: "Steel Suppliers India", amount: 650000, narration: "High value raw material payment", approver: "Level 1 User", _exceptionType: "APPROVAL_BREACH_BANK" },
  { txnId: "TXN-HDFC-05", date: "2025-06-20", type: "Bank Transfer", account: "HDFC-123456", party: "Precision Tools", amount: 70800, narration: "Inv 041 payment", approver: "Director (Dual Signatory)", _exceptionType: null }
];
// Populate normal bank transactions to reach 480
for (let i = 6; i <= 480; i++) {
  syntheticBankTransactions.push({
    txnId: `TXN-HDFC-${String(i).padStart(4, '0')}`,
    date: `2025-06-${String((i % 28) + 1).padStart(2, '0')}`,
    type: i % 4 === 0 ? "Receipt" : "Payment",
    account: "HDFC-123456",
    party: `Vendor / Customer ${(i % 20) + 1}`,
    amount: Math.round(15000 + (i * 320) % 75000),
    narration: `Commercial payment batch ref ${i}`,
    approver: "Authorized Signatory",
    _exceptionType: null
  });
}

// 2. General Ledger Journal Entries (350 entries)
const syntheticJVs = [
  { jvNo: "JV-2025-001", date: "2025-06-30", drHead: "Repairs & Maintenance", crHead: "Outstanding Expenses", amount: 1000000, narration: "Being provision for major plant overhaul", user: "accounts_lead", time: "16:30:00", _exceptionType: "ROUND_SUM_JV" },
  { jvNo: "JV-2025-002", date: "2025-06-25", drHead: "Legal & Professional", crHead: "Accrued Charges", amount: 250000, narration: "Quarterly retainer adjustment", user: "admin_user", time: "23:45:10", _exceptionType: "AFTER_HOURS_JV" },
  { jvNo: "JV-2025-003", date: "2025-06-28", drHead: "Miscellaneous Expense", crHead: "Cash Ledger", amount: 350000, narration: "adj entry", user: "junior_acct", time: "14:15:00", _exceptionType: "BLANK_NARRATION_JV" },
  { jvNo: "JV-2025-004", date: "2025-03-31", drHead: "Prepaid Expenses", crHead: "Administrative Expenses", amount: 420000, narration: "Year-end prepayments adjustment", user: "finance_mgr", time: "18:00:00", _exceptionType: "REVERSING_JV" },
  { jvNo: "JV-2025-005", date: "2025-06-10", drHead: "Depreciation Reserve", crHead: "Plant & Machinery", amount: 180000, narration: "Asset carrying adjustment", user: "db_admin", time: "12:00:00", _exceptionType: "SUPERUSER_JV" }
];
for (let i = 6; i <= 350; i++) {
  syntheticJVs.push({
    jvNo: `JV-2025-${String(i).padStart(4, '0')}`,
    date: `2025-06-${String((i % 28) + 1).padStart(2, '0')}`,
    drHead: i % 2 === 0 ? "Inventory Consumption" : "Factory Overhead",
    crHead: i % 2 === 0 ? "Raw Material Stock" : "Payables Control",
    amount: Math.round(12340 + (i * 789) % 85000),
    narration: `Monthly routine accounting accrual ref ${i}`,
    user: "finance_team",
    time: "11:30:00",
    _exceptionType: null
  });
}

// 3. Inventory Stock Ledger (180 SKUs)
const syntheticInventory = [
  { itemCode: "SKU-CAST-04", name: "Brake Drum Grade 25 Castings", category: "Raw Material", closingQty: -25, unitRate: 600, totalValue: -15000, lastMovement: "2025-06-18", location: "Bay 1", _exceptionType: "NEGATIVE_STOCK" },
  { itemCode: "SKU-FAST-99", name: "Hex Flange Fasteners Batch Z", category: "Hardware", closingQty: 1200, unitRate: 233.33, totalValue: 280000, lastMovement: "2024-08-10", location: "Bin 42", _exceptionType: "OBSOLETE_STOCK" },
  { itemCode: "SKU-SHAFT-01", name: "Crankshaft Alloy 4140 Rough", category: "WIP", closingQty: 85, unitRate: 1500, totalValue: 127500, lastMovement: "2025-06-22", location: "Bay 3", _exceptionType: null }
];
for (let i = 4; i <= 180; i++) {
  syntheticInventory.push({
    itemCode: `SKU-AUTO-${String(i).padStart(3, '0')}`,
    name: `Machined Component Grade ${i}`,
    category: i % 3 === 0 ? "Raw Material" : i % 3 === 1 ? "WIP" : "Finished Goods",
    closingQty: Math.round(50 + (i * 17) % 400),
    unitRate: Math.round(120 + (i * 35) % 800),
    totalValue: Math.round((50 + (i * 17) % 400) * (120 + (i * 35) % 800)),
    lastMovement: "2025-06-10",
    location: `Warehouse ${(i % 4) + 1}`,
    _exceptionType: null
  });
}

// 4. Fixed Asset Register (95 assets)
const syntheticFixedAssets = [
  { assetTag: "TAG-CNC-042", description: "Haas 5-Axis CNC Milling Center VF-2", category: "Plant & Machinery", capDate: "2023-04-15", grossCost: 3500000, accDep: 700000, wdv: 2800000, location: "Bhayala Plant - Bay 3", _exceptionType: "DUPLICATE_ASSET_TAG" },
  { assetTag: "TAG-CNC-042", description: "Daewoo Lathe Machine Model B", category: "Plant & Machinery", capDate: "2023-08-20", grossCost: 1800000, accDep: 360000, wdv: 1440000, location: "Bhayala Plant - Bay 1", _exceptionType: "DUPLICATE_ASSET_TAG" },
  { assetTag: "TAG-OFF-101", description: "Office Air Conditioning System 5 Ton", category: "Office Equipment", capDate: "2024-01-10", grossCost: 220000, accDep: 44000, wdv: 176000, location: "Corporate Office", _exceptionType: null }
];
for (let i = 4; i <= 95; i++) {
  syntheticFixedAssets.push({
    assetTag: `TAG-AST-${String(i).padStart(4, '0')}`,
    description: `Plant Machinery Asset Component ${i}`,
    category: i % 4 === 0 ? "Computers" : i % 4 === 1 ? "Vehicles" : "Plant & Machinery",
    capDate: "2023-05-10",
    grossCost: Math.round(150000 + (i * 25000) % 2000000),
    accDep: Math.round((150000 + (i * 25000) % 2000000) * 0.2),
    wdv: Math.round((150000 + (i * 25000) % 2000000) * 0.8),
    location: `Bhayala Plant - Zone ${(i % 5) + 1}`,
    _exceptionType: null
  });
}

// 5. Sales Invoices & Customer Register (420 invoices)
const syntheticSalesInvoices = [
  { invoiceNo: "INV-SLS-099", date: "2025-06-10", customer: "Tata Motors Commercial", amount: 450000, discountPct: 3.5, approvedPrice: 900, invoicedPrice: 900, _exceptionType: null },
  // INV-SLS-100 is skipped to trigger DA-03 Sequence Gap Test!
  { invoiceNo: "INV-SLS-101", date: "2025-06-11", customer: "Mahindra Heavy Engines", amount: 520000, discountPct: 4.0, approvedPrice: 900, invoicedPrice: 820, _exceptionType: "PRICE_VARIANCE_SALES" },
  { invoiceNo: "INV-SLS-102", date: "2025-06-12", customer: "Apex Auto Distributors", amount: 380000, discountPct: 22.0, approvedPrice: 900, invoicedPrice: 900, _exceptionType: "HIGH_DISCOUNT" },
  { invoiceNo: "INV-SLS-103", date: "2025-04-05", customer: "Sundry Returns Customer", amount: 180000, discountPct: 2.0, approvedPrice: 900, invoicedPrice: 900, _exceptionType: "RETURN_SPIKE" }
];
for (let i = 5; i <= 420; i++) {
  syntheticSalesInvoices.push({
    invoiceNo: `INV-SLS-${String(i + 100).padStart(4, '0')}`,
    date: `2025-06-${String((i % 28) + 1).padStart(2, '0')}`,
    customer: `Commercial OEM Customer ${(i % 15) + 1}`,
    amount: Math.round(45000 + (i * 1230) % 650000),
    discountPct: 3.5,
    approvedPrice: 900,
    invoicedPrice: 900,
    _exceptionType: null
  });
}

// 6. Related Parties & Loans (3 contracts)
const syntheticRelatedParties = [
  { entityName: "Muchhal Holdings & Investments Pvt Ltd", relation: "Director Common Interest", pan: "AADCM9921E", address: "12/A Nariman Point, Mumbai", loanBalance: 500000, cashDeposit: 50000, _exceptionType: "CASH_LOAN_269SS" },
  { entityName: "Rohit Machining & Allied Works", relation: "Promoter Subsidiary", pan: "AADCR1029F", address: "Plot 42 MIDC Pune", loanBalance: 0, cashDeposit: 0, _exceptionType: null }
];

// ------------------------------------------------------------------------------
// 8. PROCESS TEMPLATES & DATA QUALITY RULES
// ------------------------------------------------------------------------------
const processTemplates = [
  { stepId: "P2P-01", stepName: "Vendor Empanelment", description: "Empanelling vendors with KYC & GST verification", evidenceSignals: ["EV-001"], risks: ["Fictitious vendors", "Related party bias"], controls: ["PUR-C01", "PUR-C05", "RPT-C03"] },
  { stepId: "P2P-02", stepName: "Purchase Requisition", description: "Departmental requisition for raw materials", evidenceSignals: [], risks: ["Unauthorized purchase requests"], controls: ["ELC-C01"] },
  { stepId: "P2P-03", stepName: "PO Creation", description: "Raising purchase order in Tally ERP", evidenceSignals: ["EV-002"], risks: ["Price outside agreement", "Duplicate POs"], controls: ["PUR-C01", "PUR-C06"] },
  { stepId: "P2P-04", stepName: "PO Approval Matrix", description: "Approval against defined delegation of authority", evidenceSignals: ["EV-002", "EV-006"], risks: ["Approval breach", "Split PO circumvention"], controls: ["PUR-C06", "ELC-C01"] },
  { stepId: "P2P-05", stepName: "Goods Receipt & Inspection", description: "Store inward, weight check & gate pass entry", evidenceSignals: ["EV-003"], risks: ["Short receipts", "Unrecorded movement"], controls: ["INV-C04", "PUR-C02", "PUR-C07"] },
  { stepId: "P2P-06", stepName: "Invoice Inward & TDS Booking", description: "Logging tax invoice and deducting TDS", evidenceSignals: ["EV-004"], risks: ["Incorrect TDS rates", "Missing e-way bill"], controls: ["PUR-C04", "STAT-C01"] },
  { stepId: "P2P-07", stepName: "Three-Way Match Verification", description: "Automated reconciliation of PO, GRN and Invoice", evidenceSignals: ["EV-002", "EV-003", "EV-004"], risks: ["Price inflation", "Quantity mismatch", "Duplicate invoices"], controls: ["PUR-C02", "PUR-C03"] },
  { stepId: "P2P-08", stepName: "Payment Authorization", description: "Dual approval on banking portal as per mandate", evidenceSignals: ["EV-005"], risks: ["Late MSME payments", "Unauthorized disbursements"], controls: ["CB-C03", "PUR-C03"] },
  { stepId: "P2P-09", stepName: "GL Posting & Reconciliations", description: "Sub-ledger to GL posting and monthly BRS", evidenceSignals: ["EV-005"], risks: ["Unreconciled bank items", "Cut-off errors"], controls: ["CB-C02", "FR-C03", "EXP-C03"] }
];

const dataQualityRules = [
  { ruleId: "DQ-001", ruleName: "Vendor Master Completeness", evidenceTarget: "Vendor_Master.xlsx", checkType: "Null Check", description: "Check for missing PAN/GSTIN in active vendors", status: "PASS", details: "All 85 active vendors have valid 10-digit PAN and 15-digit GSTIN" },
  { ruleId: "DQ-002", ruleName: "PO Date Sequence Validity", evidenceTarget: "PO_Register.xlsx", checkType: "Format Check", description: "Dates must fall within active financial year FY25-26", status: "PASS", details: "100% of PO dates fall within 01-Apr-2025 to 31-Mar-2026" },
  { ruleId: "DQ-003", ruleName: "GRN-to-PO Referential Linkage", evidenceTarget: "GRN_Report.xlsx", checkType: "Referential Integrity", description: "GRN must reference a valid open PO number", status: "WARNING", details: "3 GRNs reference legacy manual POs not tracked in Tally" },
  { ruleId: "DQ-004", ruleName: "Invoice Amount Positive Check", evidenceTarget: "Purchase_Invoice_Register.xlsx", checkType: "Value Range", description: "Taxable value and gross amount must be > 0", status: "PASS", details: "0 negative or zero value lines detected" },
  { ruleId: "DQ-005", ruleName: "Payment ID Uniqueness Check", evidenceTarget: "Payment_Register.xlsx", checkType: "Uniqueness", description: "UTR / NEFT reference IDs must be strictly unique", status: "PASS", details: "All 460 banking payment transactions are unique" },
  { ruleId: "DQ-006", ruleName: "Approval Matrix Extraction Confidence", evidenceTarget: "Approval_Matrix.pdf", checkType: "Extraction Confidence", description: "Tabular structure parsed from PDF document", status: "PASS", details: "Extracted 4 approval tiers with 100% field confidence" },
  { ruleId: "DQ-007", ruleName: "Vendor Bank IFSC Format Check", evidenceTarget: "Vendor_Master.xlsx", checkType: "Regex Match", description: "IFSC code format validation (4 letters, 0, 6 alphanumeric)", status: "PASS", details: "All 85 vendor bank records match standard RBI IFSC syntax" },
  { ruleId: "DQ-008", ruleName: "PO Amount vs Line Item Math Check", evidenceTarget: "PO_Register.xlsx", checkType: "Calculation", description: "Verify Total Amount = Qty * Unit Rate", status: "WARNING", details: "Minor rounding differences of <₹1 in 4 line items" },
  { ruleId: "DQ-009", ruleName: "Invoice-to-PO Linkage Verification", evidenceTarget: "Purchase_Invoice_Register.xlsx", checkType: "Referential Integrity", description: "Every invoice must link to a valid PO number", status: "WARNING", details: "5 non-PO utility bills booked directly without PO reference" },
  { ruleId: "DQ-010", ruleName: "Chronological Sequence Check", evidenceTarget: "Payment_Register.xlsx", checkType: "Logic Check", description: "Payment Date must be on or after Invoice Date", status: "PASS", details: "No pre-dated payments detected" }
];

const expectedProcesses = [
  { processName: "Purchase & Payables (P2P)", evidenceSignals: ["Vendor_Master.xlsx", "PO_Register.xlsx", "Purchase_Invoice_Register.xlsx", "Payment_Register.xlsx"], status: "Identified", confidence: "High" },
  { processName: "Inventory Management", evidenceSignals: ["GRN_Report.xlsx"], status: "Partial", confidence: "Medium" },
  { processName: "Cash & Bank", evidenceSignals: ["Payment_Register.xlsx"], status: "Identified", confidence: "High" },
  { processName: "Entity Level Controls", evidenceSignals: ["Approval_Matrix.pdf"], status: "Identified", confidence: "High" },
  { processName: "Revenue & Receivables (O2C)", evidenceSignals: [], status: "Not Identified", confidence: "Low" },
  { processName: "Payroll & HR", evidenceSignals: [], status: "Not Identified", confidence: "Low" },
  { processName: "Fixed Assets & Capex", evidenceSignals: [], status: "Not Identified", confidence: "Low" },
  { processName: "Statutory Compliance (GST/TDS)", evidenceSignals: [], status: "Partial", confidence: "Low" },
  { processName: "IT General Controls", evidenceSignals: [], status: "Not Identified", confidence: "Low" },
  { processName: "Related Party & Loans", evidenceSignals: [], status: "Not Identified", confidence: "Low" },
  { processName: "Financial Closing & Reporting", evidenceSignals: [], status: "Not Identified", confidence: "Low" }
];

const evidenceGaps = [
  { missingEvidence: "Sales Register & E-invoice Log", controlsUnlocked: 7, riskSignificance: "High", description: "Enables testing of Revenue & Receivables (REV-C01 to REV-C07) and CAAT tests DA-03, DA-21, DA-30." },
  { missingEvidence: "General Ledger & Journal Entry Listing", controlsUnlocked: 6, riskSignificance: "High", description: "Enables testing of cross-cutting JE controls (JE-C01 to JE-C06) and CAAT tests DA-05, DA-07, DA-09, DA-10." },
  { missingEvidence: "Employee Master & Payroll Register", controlsUnlocked: 6, riskSignificance: "Medium", description: "Enables ghost employee analysis, duplicate salary bank accounts (PAY-C01 to PAY-C06, DA-25)." },
  { missingEvidence: "Fixed Asset Register (FAR)", controlsUnlocked: 4, riskSignificance: "Medium", description: "Enables asset tag uniqueness checks and CARO 2020 physical verification (FA-C01 to FA-C04, DA-27)." },
  { missingEvidence: "GSTR-2B & GSTR-1 Exports", controlsUnlocked: 5, riskSignificance: "High", description: "Enables Input Tax Credit (ITC) reconciliation and GST compliance verification (STAT-C01, STAT-C05, DA-20)." }
];

const continuousMonitoringCandidates = [
  { controlId: "PUR-C03", controlName: "Duplicate Vendor Invoice Detection", frequency: "Daily", ruleDescription: "Pre-payment scan for identical vendor, invoice number and amount (DA-01)." },
  { controlId: "PUR-C06", controlName: "Split Purchase Order Threshold Alert", frequency: "Weekly", ruleDescription: "Aggregate POs by vendor and date to detect deliberate threshold circumvention (DA-15)." },
  { controlId: "PUR-C02", controlName: "PO vs Invoice Price Variance Watch", frequency: "Daily", ruleDescription: "Auto-flag invoices with unit price >5% above approved PO rate (DA-17)." },
  { controlId: "PAY-C05", controlName: "Payroll Duplicate Bank Account Scan", frequency: "Monthly", ruleDescription: "Pre-payroll scan to prevent ghost employee disbursements (DA-25)." },
  { controlId: "CB-C05", controlName: "Cash Transaction Tax Threshold Sentinel", frequency: "Daily", ruleDescription: "Immediate alert on cash payments >₹10,000 (Section 40A(3)) or receipts >₹2,00,000 (DA-28)." }
];

// ------------------------------------------------------------------------------
// 8B. FORENSIC BENFORD'S LAW DISTRIBUTION CONSTANTS (DA-04)
// ------------------------------------------------------------------------------
const benfordExpected = {
  1: 30.1, 2: 17.6, 3: 12.5, 4: 9.7, 5: 7.9, 6: 6.7, 7: 5.8, 8: 5.1, 9: 4.6
};

// ------------------------------------------------------------------------------
// 9. APP STATE & LOCAL STORAGE PERSISTENCE
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 8C. PROMOTER & BUSINESS OWNER FINANCIAL INTELLIGENCE FRAMEWORK
// ------------------------------------------------------------------------------
const promoterTopRedFlags = [
  {
    "id": "RF-01",
    "title": "Paying Twice for Imported Lithium Battery Cell Shipments",
    "financialCost": "₹1,85,000 Cash Drain",
    "costCategory": "Direct Cash Leakage",
    "whatHappened": "Due to manual booking of Customs Bills of Entry alongside overseas vendor commercial invoices, 10 cell shipments from Amperex Power Tech were paid twice through HDFC foreign remittances.",
    "financialDamage": "Direct cash drain straight out of the company's working capital cash credit limit.",
    "promoterFix": "Instruct Finance to mandate 3-way match in Tally/SAP: system must block any payment where Bill of Entry / Invoice Number matches an existing payment voucher.",
    "linkedControl": "PUR-C03 (3-Way Matching)",
    "actionLabel": "Claw Back Cash"
  },
  {
    "id": "RF-02",
    "title": "Phased Manufacturing (PMP) Non-Compliance Threatens ₹8.2 Cr EV Subsidies",
    "financialCost": "₹8,20,00,000 Subsidy Clawback Risk",
    "costCategory": "Government Subsidy Penalty",
    "whatHappened": "Purchasing mid-drive motor inverters from uncertified overseas suppliers without ARAI domestic value-addition certification breaches Ministry of Heavy Industries PMP localization norms.",
    "financialDamage": "Immediate freezing and retrospective clawback of all PM E-DRIVE subsidy disbursements with 18% p.a. penal interest.",
    "promoterFix": "Freeze all PO releases for imported electronic sub-assemblies until the supplier provides a valid ARAI Domestic Value Addition (DVA) certificate.",
    "linkedControl": "STAT-C01 (Statutory Compliance)",
    "actionLabel": "Hold Non-PMP Orders"
  },
  {
    "id": "RF-03",
    "title": "45+ Open Job-Work Delivery Challans for Chassis E-Coating Beyond 90 Days",
    "financialCost": "₹42,50,000 Material & GST Risk",
    "costCategory": "Scrap Loss & GST Penalty",
    "whatHappened": "Over 45 GST Section 143 job-work delivery challans for tubular chassis powder coating and motor winding remain open with third-party vendors without physical weight reconciliation.",
    "financialDamage": "Unreconciled scrap losses of high-tensile steel, plus GST deemed supply tax liability if goods are not returned within 1 year.",
    "promoterFix": "Issue an immediate halt on payments to job-work vendors until a 100% physical material reconciliation is completed and signed off.",
    "linkedControl": "PUR-C04 (Job-Worker Master & Reconciliation)",
    "actionLabel": "Reconcile Job-Work"
  },
  {
    "id": "RF-04",
    "title": "Single-Signatory Release on HDFC NetBanking for High-Value Cell Imports",
    "financialCost": "₹24,80,000 Single-User Exposure",
    "costCategory": "Uncontrolled Banking Authority",
    "whatHappened": "NetBanking setup permits single-user authorization for RTGS and NEFT transfers under ₹5,00,000. Over 18 split payments were released by a single accounts executive without second-director OTP.",
    "financialDamage": "Severe exposure to unauthorized fund diversion, payment errors, and single-point-of-failure fraud.",
    "promoterFix": "Mandate dual-signatory authorization (Director OTP required for all outward payments above ₹1,00,000) with HDFC Bank immediately.",
    "linkedControl": "CB-C01 (Dual Bank Signatory Limits)",
    "actionLabel": "Enforce Dual OTP"
  },
  {
    "id": "RF-05",
    "title": "Negative Inventory on 25 PMSM Traction Motor Controllers in SAP B1",
    "financialCost": "₹18,75,000 Unrecorded WIP",
    "costCategory": "Inventory Record Distortion",
    "whatHappened": "Assembly line technicians consumed 25 PMSM controllers before the store keeper entered the Goods Receipt Note (GRN), leading to negative stock of -25 units in the inventory ledger.",
    "financialDamage": "Distorted COGS, balance sheet misstatement, and assembly line stock-outs halting vehicle dispatch.",
    "promoterFix": "Implement barcode scan-to-issue at shop floor kitting stations; block line issue in SAP if physical stock is zero.",
    "linkedControl": "INV-C01 (Inventory Perpetual Reconciliation)",
    "actionLabel": "Fix Line Issue Scan"
  }
];

const promoterMondayChecklist = [
  {
    id: "ACT-01",
    title: "Claw Back ₹1.94 Lakhs in Direct Overpayments",
    description: "Approve 3 vendor debit notes (Precision Tools, Dormant Fasteners) before releasing this Friday's supplier payment RTGS batch.",
    department: "Accounts Payable",
    impact: "+₹1.94 L Cash Preserved",
    done: false
  },
  {
    id: "ACT-02",
    title: "Mandate Dual-OTP Approval on HDFC Net Banking",
    description: "Instruct HDFC bank branch to require Director's OTP for all outward RTGS/NEFT payments above ₹50,000 (disables single-user payment release).",
    department: "Banking & Treasury",
    impact: "Zero Unauthorized Transfers",
    done: false
  },
  {
    id: "ACT-03",
    title: "Freeze Payments to GST-Defaulting Suppliers",
    description: "Issue a strict circular to Accounts: No GST component to be paid to suppliers whose invoices do not show up in the monthly GSTR-2B government extract.",
    department: "Tax & Compliance",
    impact: "Protects ₹12.12 L Tax Liability",
    done: false
  }
];

const appState = {
  dashboardViewMode: "PROMOTER",
  pipelineStatus: {
    evidenceUploaded: false,
    dataQualityComplete: false,
    processesDiscovered: false,
    risksIdentified: false,
    controlsDetermined: false,
    testingComplete: false
  },
  auditUniverseVersion: null,
  exceptionsFound: [],
  testResults: [],
  activeProcessFilter: "ALL",
  savedFieldMappings: {},
  activeUploadedData: {},
  dispositionLog: {},
  exposureSummary: {
    directCash: 0,
    taxRisk: 0,
    fraudExposure: 0,
    totalExposure: 0,
    recoverableCash: 0
  },
  benfordResults: null
};

function saveState() {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('auditState', JSON.stringify(appState));
  }
}

function loadState() {
  if (typeof localStorage !== 'undefined') {
    const s = localStorage.getItem('auditState');
    if (s) {
      try { Object.assign(appState, JSON.parse(s)); } catch (e) { console.error(e); }
    }
  }
}

function resetState() {
  appState.pipelineStatus = {
    evidenceUploaded: false,
    dataQualityComplete: false,
    processesDiscovered: false,
    risksIdentified: false,
    controlsDetermined: false,
    testingComplete: false
  };
  appState.auditUniverseVersion = null;
  appState.exceptionsFound = [];
  appState.testResults = [];
  appState.activeProcessFilter = "ALL";
  appState.activeUploadedData = {};
  appState.dispositionLog = {};
  appState.exposureSummary = { directCash: 0, taxRisk: 0, fraudExposure: 0, totalExposure: 0, recoverableCash: 0 };
  appState.benfordResults = null;
  saveState();
}


// ==============================================================================
// 12. CLIENT PROFILE, BUSINESS MODEL, STRATEGY & COMPLEXITY (SA 315)
// ==============================================================================
const clientProfileDetailed = {
  companyName: "NexGen Electric Mobility Pvt. Ltd.",
  tradeBrand: "NexGen EV (VoltDrive)",
  cin: "U34100PN2019PTC186420",
  pan: "AAACN8814K",
  gstin: "27AAACN8814K1ZR",
  incorporationDate: "18-Oct-2019 (High-Growth EV Scale-Up)",
  industrySegment: "Electric Vehicle (EV) OEM — Electric 2W, Urban Cargo 3W & Advanced Battery Packs",
  registeredOffice: "Plot No. E-42, Chakan Industrial Area, Phase II, MIDC, Pune, Maharashtra 410501",
  headcount: {
    total: 310,
    fullTimeRoll: 210,
    contractualShopFloor: 100,
    financeAccounts: 6,
    procurementStores: 12,
    productionQuality: 260,
    itAdmin: 5,
    femaleWorkforcePct: "28% (Battery Module Assembly & Quality Inspection)"
  },
  plants: [
    {
      id: "PLANT-01",
      name: "Plant 1 — Chakan EV Gigafactory & Vehicle Assembly Megasite (Headquarters)",
      location: "Chakan MIDC Phase II, Pune, Maharashtra",
      sqft: "65,000 sq.ft (Owned Freehold Industrial Plot)",
      workforce: "215 Personnel (150 Full-time + 65 Contractual)",
      coreCapabilities: "Automated Lithium Battery Pack Assembly (Cell Sorting, Laser Wire-bonding, IP67 Sealing), 2-Wheeler Vehicle Assembly Line, Regenerative Dyno EOL Testing, Inverter Flash Lab",
      certifications: ["AIS-156 (Rev 2 Phase 2)", "IATF 16949:2016", "ISO 9001:2015", "ARAI Homologation Certified"],
      capacityUtilization: "78% (Two 10-hour shifts, 45,000 Electric 2-Wheelers / year)",
      primaryCustomersServed: "110+ Direct EV Dealerships across Western & Southern India, Amazon Last-Mile Fleets"
    },
    {
      id: "PLANT-02",
      name: "Plant 2 — Hosur EV Chassis Stamping & Battery Enclosure Hub",
      location: "Plot 18, SIPCOT Industrial Complex, Phase I, Hosur, Tamil Nadu 635126",
      sqft: "40,000 sq.ft (Industrial Lease valid till 2031)",
      workforce: "95 Personnel (60 Full-time + 35 Contractual)",
      coreCapabilities: "Lightweight High-Tensile Tubular Chassis Robotic Welding, Aluminum Die-Cast Battery Enclosure Stamping, BMS Hardware-in-the-Loop (HIL) Testing Lab",
      certifications: ["ISO 14001:2015", "AIS-038 Rev 2 Sub-Plant", "ISO 9001:2015"],
      capacityUtilization: "72% (Two 8-hour shifts, 35,000 chassis & enclosure sets / year)",
      primaryCustomersServed: "Chakan Plant Inter-Unit Transfer, Zomato & Porter Urban Cargo 3W Fleets"
    }
  ],

  governance: {
    boardOfDirectors: [
      { name: "Anand Verma", designation: "Promoter & Managing Director (CEO)", equityPct: 54, din: "03148920", roleDesc: "Ex-IIT Powertrain Engineer; final sign-off on Cell Supplier Master Agreements, Capex >₹5L, and banking authorizer." },
      { name: "Priya Verma", designation: "Whole-Time Director (Chief Strategy & HR)", equityPct: 16, din: "03148935", roleDesc: "Leads institutional EV venture partnerships, government subsidy liaisons (FAME/PM E-DRIVE), and ESG compliance." },
      { name: "Siddharth Mehta", designation: "Nominee Director (Nexus CleanTech Ventures)", equityPct: 30, din: "01948210", roleDesc: "CleanTech VC partner overseeing quarterly governance, audit committee, and Series B investor reporting." }
    ],
    keyExecutives: [
      { name: "Kailash Narayanan, FCA", title: "Chief Financial Officer (CFO)", experience: "18 Years (Ex-Tata Motors EV Div)", tenure: "3 Years", keyControlRole: "Monitors FAME subsidy receivable reconciliation, working capital CC drawdown, and leads SAP B1 cutover." },
      { name: "Dr. Arvind Swaminathan", title: "VP — Powertrain & Battery R&D", experience: "15 Years (Ph.D. Battery Electrochemistry)", tenure: "4 Years", keyControlRole: "Signs off Cell Lot PPAP validation, AIS-156 safety certification, and thermal runaway protocols." },
      { name: "Raghavendra Rao", title: "Head of Quality & ARAI Homologation", experience: "14 Years (Ex-Ather Energy)", tenure: "2.5 Years", keyControlRole: "Signs off Cell IR grading, Inward GRNs, and Customer Battery Warranty RMA investigations." },
      { name: "Suresh Pillai", title: "Head of Procurement & Supply Chain", experience: "12 Years", tenure: "3 Years", keyControlRole: "Negotiates lithium cell imports (CATL/EVE), domestic BMS sourcing, and monitors 45+ job-work challans." }
    ],
    bankingConsortium: {
      leadBank: "HDFC Bank Ltd. (Kothrud Branch, Pune)",
      consortiumMember: "ICICI Bank Ltd. (Hosur Industrial Branch)",
      sanctionedLimits: "₹32.00 Cr (₹22.0 Cr Working Capital CC + ₹10.0 Cr Automated Battery Pack Capex Term Loan)",
      currentUtilization: "₹24.80 Cr (88.6% of Sanctioned Limits utilized)"
    }
  },

  financials: {
    fyTurnover: "₹145.80 Cr (FY 2024-25 Actual)",
    turnover3YrCAGR: "42.5% p.a. (Fast-Growth CleanTech)",
    grossMargin: "28.6% (₹41.70 Cr)",
    ebitda: "₹16.04 Cr (11.00% margin)",
    pbt: "₹9.76 Cr (6.69%)",
    pat: "₹7.29 Cr (5.00% net profit)",
    materialCostRatio: "64.2% of Revenue (₹93.60 Cr Battery Cells, Motors, Inverters, & Metal Stampings)",
    workingCapitalCycle: {
      dso: 84, // Days Sales Outstanding (OEM fleet & FAME Government subsidy reimbursement delay)
      dio: 48, // Days Inventory Outstanding (High buffer stock of imported 21700 cells)
      dpo: 44, // Days Payable Outstanding (Overseas LC & domestic MSME 45-day payment rule)
      netWorkingCapitalDays: 88, // 84 + 48 - 44 = 88 days
      fundingGapInr: "₹24.80 Cr financed through bank cash credit at 9.10% p.a. (Annual Interest cost: ₹2.25 Cr)"
    }
  },

  businessModel: {
    summary: "Vertically integrated Electric Vehicle (EV) manufacturer designing, engineering, and assembling high-performance smart electric two-wheelers, urban cargo three-wheelers, and modular LFP battery packs with connected IoT telematics.",
    revenueMix: [
      { segment: "B2C Smart Electric 2-Wheelers (Commuter & Pro)", sharePct: 58, revenueInr: "₹84.56 Cr", marginPct: "10.4% EBITDA", creditTerms: "Advance / 15 Days (Dealer Network)", description: "High-speed electric scooters with 120km IDC range distributed via 110 franchised dealerships across India." },
      { segment: "B2B Commercial EV Fleet Delivery Vehicles", sharePct: 28, revenueInr: "₹40.82 Cr", marginPct: "12.8% EBITDA", creditTerms: "60 to 90 Days", description: "Heavy-duty electric cargo 3W and 2W fleet vehicles supplied to Amazon Logistics, Zomato, Porter, and BigBasket." },
      { segment: "Smart Swappable Battery Packs & BaaS Subscriptions", sharePct: 9, revenueInr: "₹13.12 Cr", marginPct: "16.5% EBITDA", creditTerms: "Monthly Auto-Debit", description: "Modular swappable 2.5kWh LFP battery packs with cloud IoT telemetry deployed across 45 urban swap hubs." },
      { segment: "Telematics Cloud IoT Subscriptions & Extended Warranty", sharePct: 5, revenueInr: "₹7.30 Cr", marginPct: "32.0% EBITDA", creditTerms: "Annual Advance", description: "Mobile app connectivity subscriptions, anti-theft GPS, OTA performance upgrades, and 5-year battery warranty packs." }
    ],
    customerConcentration: [
      { customer: "110+ Authorized EV Dealer Retail Network", sharePct: 52, annualBillings: "₹75.82 Cr", status: "Diversified National Network", pricingLeverage: "High (Company sets Ex-Showroom & Dealer Margins)" },
      { customer: "Amazon Logistics (India Last-Mile EV Program)", sharePct: 18, annualBillings: "₹26.24 Cr", status: "Key Enterprise Account", pricingLeverage: "High (Rigorous SLA delivery terms, quarterly price formula)" },
      { customer: "Zomato Delivery Fleet Partner Vehicles", sharePct: 12, annualBillings: "₹17.50 Cr", status: "Strategic Fleet Growth Account", pricingLeverage: "High (Bulk fleet purchase discounts)" },
      { customer: "Porter Urban Logistics (Cargo 3W Fleets)", sharePct: 8, annualBillings: "₹11.66 Cr", status: "High Growth Commercial 3W", pricingLeverage: "Moderate (Custom cargo container fabrication)" },
      { customer: "Independent Swappable Battery Users", sharePct: 10, annualBillings: "₹14.58 Cr", status: "BaaS Recurring Cash Flow", pricingLeverage: "Company Controlled" }
    ],
    valueChainPipeline: [
      {
        stepNumber: 1,
        stage: "Lithium Cell & Semiconductor Inbound",
        icon: "battery-charging",
        leadTime: "30 to 45 Days (Import Transit)",
        processDescription: "Importing Tier-1 LFP 21700 lithium cells (CATL/EVE), SiC MOSFET inverter chips, and mid-drive PMSM motors from verified international and domestic sources.",
        keyControls: "PUR-C01 (PO & LC Authorization), PUR-C03 (Spectro-grading & Internal Resistance Cell Testing)",
        vulnerability: "Global lithium cell commodity price spikes; customs clearance classification under CTH 8507."
      },
      {
        stepNumber: 2,
        stage: "Subcontracted Chassis & Stamping Work",
        icon: "git-commit",
        leadTime: "5 to 8 Days",
        processDescription: "Outsourcing tubular high-tensile frame powder coating, robotic chassis welding, and aluminum case anodization to 6 local specialized job-workers.",
        keyControls: "PUR-C04 (Approved Job-Worker Master), STAT-C01 (GST Section 143 Delivery Challans material tracking)",
        vulnerability: "Over 45 open job-work challans unverified; scrap yield losses not reconciled with vendor."
      },
      {
        stepNumber: 3,
        stage: "Automated Battery Pack Cleanroom Assembly",
        icon: "cpu",
        leadTime: "1 to 2 Days",
        processDescription: "Precision cell grading, automatic robotic ultrasonic wire-bonding, Master-Slave Smart BMS installation, potting, and IP67 nitrogen leak testing.",
        keyControls: "INV-C02 (Cell Serial Number Genealogy to Battery Pack QR Code), FA-C01 (Laser Welder Calibration Logs)",
        vulnerability: "Cell lot mismatch causing thermal imbalance; unmonitored BMS calibration drift."
      },
      {
        stepNumber: 4,
        stage: "Vehicle Marriage & AIS-156 EOL Testing",
        icon: "shield-check",
        leadTime: "Same Day",
        processDescription: "Final integration of chassis, battery pack, motor, controller, and 4G IoT telematics. Full dynamometer regenerative braking and AIS-156 thermal run-in.",
        keyControls: "INV-C03 (Cell Red-Tag Quarantine), STAT-C05 (ARAI / ICAT Homologation Certificate Compliance)",
        vulnerability: "FAME-II / PM E-DRIVE Phased Manufacturing Programme (PMP) localization audit penalties if non-local parts found."
      },
      {
        stepNumber: 5,
        stage: "Dealer Dispatch & Government Subsidy Upload",
        icon: "send",
        leadTime: "2 to 4 Hours",
        processDescription: "Dispatch in dedicated double-decker EV logistics carriers; real-time E-Invoice IRN generation; uploading Aadhaar-linked subsidy on Ministry of Heavy Industries portal.",
        keyControls: "REV-C01 (E-Invoice IRN Gate-out Match), REV-C05 (Aadhaar Subsidy Validation & Customer OTP Match)",
        vulnerability: "Government subsidy processing delays (>90 days) causing severe working capital drag."
      }
    ]
  },

  strategy: {
    vision: "Become India's leading smart electric commercial fleet and commuter mobility ecosystem, expanding annual production from 45,000 to 120,000 electric vehicles by FY28 while building in-house cell chemistry and solid-state BMS capabilities.",
    threeYearTargetRevenue: "₹380.0 Cr (FY 2027-28)",
    targetEbitda: "14.5% (from current 11.0%)",
    pillars: [
      {
        id: "STRAT-01",
        title: "Gigafactory High-Speed Battery Assembly Expansion (Capex ₹18.5 Cr)",
        timeline: "Q3 FY25 to Q2 FY26",
        allocatedBudget: "₹18.50 Cr (₹12 Cr Term Loan from HDFC Bank + ₹6.5 Cr Series B Accruals)",
        description: "Commissioning a 1.2 GWh automated cylindrical & prismatic laser welding line at Chakan to double daily battery pack output to 250 packs/day with zero human contact.",
        strategicRisks: "OEM adoption velocity delay, tech obsolescence, capex cost overruns beyond sanction."
      },
      {
        id: "STRAT-02",
        title: "ASEAN & Middle East EV Export Certification (Target $8.0M)",
        timeline: "FY26 to FY27",
        allocatedBudget: "₹4.50 Cr",
        description: "Securing EEC / GCC homologation for right-hand drive electric cargo 3-wheelers in Thailand, Indonesia, and UAE delivery markets.",
        strategicRisks: "FX volatility (USD/INR), extended 90-day maritime shipping transit working capital lockup."
      },
      {
        id: "STRAT-03",
        title: "PMP 100% Localization of Mid-Drive PMSM Motors & Inverters",
        timeline: "Ongoing FY25",
        allocatedBudget: "₹3.80 Cr",
        description: "In-housing motor stator winding and controller SMT pick-and-place lines to achieve 68% domestic value addition, securing 100% eligibility for PM E-DRIVE subsidies.",
        strategicRisks: "Semiconductor supply chain allocations; initial prototype dynamometer validation cycles."
      }
    ]
  },

  automation: {
    digitalMaturityScore: "Level 3.1 / 5.0 (Connected Smart EV Factory)",
    coreSystems: [
      { name: "Tally Prime 4.0 (GL Core)", function: "General Ledger, Vendor Payables, and Statutory Tax Returns", deployment: "On-Premises Windows Server (Pune Central Office)", integration: "Disconnected / Semi-manual", auditRisk: "Shared 'admin_user' login, manual JV postings for subsidy accruals, no field audit trail." },
      { name: "SAP Business One on HANA (Migration Pilot)", function: "Enterprise ERP: Battery BOM, Shop MRP, Production Lots", deployment: "Cloud Hosted (AWS Mumbai)", integration: "Active Parallel Run (Target full cutover 01-Oct-2025)", auditRisk: "Dual-system posting reconciliation discrepancies during active transition." },
      { name: "Connected MES & Battery Line SCADA", function: "Laser Welder Voltage, Cell IR Metrics & Pack Genealogy", deployment: "Shop Floor Industrial IoT Server", integration: "Automated API push to SAP B1", auditRisk: "Battery pack re-work loops bypassed manually during shift-end rush." },
      { name: "Spine HR & Zoho Payroll", function: "Biometric Attendance, Technical Engineer Payroll, Statutory PF/ESI", deployment: "SaaS Cloud", integration: "Semi-automated (CSV import into HDFC bank portal)", auditRisk: "Contractual assembly technician overtime logged via offline Excel." },
      { name: "Cleartax GST & E-Invoicing API", function: "Real-time E-Invoice IRN & E-Way Bill Auto Generation", deployment: "Cloud API Connector", integration: "Direct Tally & SAP Plugin", auditRisk: "GSTR-2B inward reconciliation run manually on 18th of every month." },
      { name: "HDFC Corporate NetBanking (CBX)", function: "Cell Import LC Settlements & Vendor RTGS Releases", deployment: "Web Portal", integration: "Manual Payment Batch Upload", auditRisk: "Single-signatory release permitted up to ₹5,00,000 without second OTP." }
    ],
    automationMaturityBreakdown: [
      { process: "Sales Invoicing, E-Way & Subsidy Upload", maturityPct: 88, level: "High Automation", details: "Real-time API generation of IRN, QR code and Ministry Aadhaar portal upload upon vehicle gate-out." },
      { process: "Battery Cell Sorting & Laser Welding", maturityPct: 75, level: "High Automation", details: "Robotic pick-and-place with internal resistance (IR) grading and automated busbar laser welding." },
      { process: "Shop Floor Vehicle Dyno Run-In", maturityPct: 65, level: "Semi-Automated", details: "Computerized dynamometer checks motor RPM, torque, and regenerative braking efficiency." },
      { process: "Bank Reconciliation (BRS)", maturityPct: 40, level: "Semi-Automated", details: "Weekly bank statement CSV upload; manual matching of subsidy credits and supplier RTGS." },
      { process: "GST ITC (2B vs Purchase Book)", maturityPct: 35, level: "Semi-Automated", details: "Cleartax monthly merge; accounts clerk manually rings defaulting EV component vendors." },
      { process: "Procure-to-Pay (3-Way Matching)", maturityPct: 28, level: "Mostly Manual", details: "Physical stamped GRNs; manual matching of PO rate vs imported invoice bill of entry." }
    ]
  },

  complexity: {
    overallComplexityScore: 86,
    inherentAuditRiskGrade: "HIGH",
    dimensions: [
      {
        axis: "Government EV Subsidy & PMP Localization Risk",
        score: 92,
        status: "EXTREME REGULATORY RISK",
        color: "#b91c1c",
        description: "Over ₹8.2 Cr in subsidy claims submitted under PM E-DRIVE / EMPS schemes. Strict Phased Manufacturing Programme (PMP) rules mandate 50%+ domestic value addition. Sourcing non-compliant imported components risks total subsidy clawback with 18% p.a. penal interest.",
        linkedControls: "STAT-C01, STAT-C03, REV-C05",
        linkedCAATs: "DA-20, DA-21, DA-28"
      },
      {
        axis: "Battery Safety & AIS-156 Recall Liabilities",
        score: 88,
        status: "VERY HIGH RISK",
        color: "#dc2626",
        description: "Compliance with mandatory AIS-156 (Rev 2) battery safety standards. Thermal runaway containment, cell-level fusing, and IP67 sealing require strict end-to-end QR code serial genealogy from individual lithium cell to finished vehicle chassis.",
        linkedControls: "INV-C02, INV-C03, FA-C01",
        linkedCAATs: "DA-18, DA-23, DA-30"
      },
      {
        axis: "Customer Concentration & Commercial Fleet Pricing",
        score: 82,
        status: "HIGH COMPLEXITY",
        color: "#ea580c",
        description: "Enterprise fleet buyers (Amazon, Zomato) constitute 30%+ of commercial deliveries. SLA contracts enforce liquidated damages of ₹500/day per offline vehicle and demand 60-90 day extended credit terms, straining working capital.",
        linkedControls: "REV-C03, REV-C04, CB-C03",
        linkedCAATs: "DA-24, DA-29"
      },
      {
        axis: "Import Customs Classification & Foreign Exchange",
        score: 84,
        status: "HIGH RISK",
        color: "#dc2626",
        description: "High volume of imported lithium-ion cells from China/Taiwan under Letters of Credit. Customs classification risks under CTH 8507 and FX exposure on USD-denominated cell import contracts.",
        linkedControls: "PUR-C01, PUR-C03, CB-C05",
        linkedCAATs: "DA-01, DA-16, DA-17"
      },
      {
        axis: "Fast-Growth MSME Governance & SoD Bottleneck",
        score: 84,
        status: "HIGH RISK",
        color: "#d97706",
        description: "Scaling rapidly from ₹80 Cr to ₹145 Cr. Managing Director Anand Verma holds supreme banking approval authority; shared accounting logins and WhatsApp purchase requests persist despite high transaction volume.",
        linkedControls: "ELC-C01, CB-C01, PUR-C02",
        linkedCAATs: "DA-06, DA-07, DA-15"
      }
    ]
  }
};



// ==============================================================================
// 13. INDIAN AUDITING, ACCOUNTING & REGULATORY TAXATION COMPLIANCE REGISTRY
// ==============================================================================
const indianComplianceRegistry = {
  // 1. Income Tax Act: Section 43B(h) MSMED 45-Day Overdue Schedule
  section43Bh: {
    sectionTitle: "Section 43B(h) — Inadmissibility of Overdue MSME Vendor Payments",
    statutoryRule: "Payments due to Micro and Small enterprises registered under MSMED Act, 2006 must be settled within 15 days (or max 45 days if agreed in writing). Outstanding amounts at FY end are added back to taxable income and taxed at corporate tax rate (30% + cess).",
    taxRatePct: 31.2, // 30% base + 4% health & education cess
    totalOverdueAmount: 4850000,
    potentialTaxAddBack: 1513200,
    overdueVendorsCount: 12,
    vendors: [
      { vendorName: "Chakan Precision Pressings", udyamNo: "UDYAM-MH-26-0012481", category: "Micro", invoiceNo: "INV-CPP-2025-081", invoiceDate: "15-Jan-2025", dueDate: "01-Mar-2025", amount: 680000, overdueDays: 108, status: "OVERDUE (>45 Days)", taxImpact: 212160 },
      { vendorName: "Shree Ganesh Tooling Dies", udyamNo: "UDYAM-MH-26-0034912", category: "Micro", invoiceNo: "INV-SGT-441", invoiceDate: "28-Jan-2025", dueDate: "14-Mar-2025", amount: 450000, overdueDays: 95, status: "OVERDUE (>45 Days)", taxImpact: 140400 },
      { vendorName: "Pinnacle Wire Harnesses", udyamNo: "UDYAM-MH-26-0098124", category: "Small", invoiceNo: "INV-PWH-9912", invoiceDate: "10-Feb-2025", dueDate: "27-Mar-2025", amount: 1250000, overdueDays: 82, status: "OVERDUE (>45 Days)", taxImpact: 390000 },
      { vendorName: "Aditya Heat Treaters", udyamNo: "UDYAM-MH-26-0044819", category: "Micro", invoiceNo: "INV-AHT-302", invoiceDate: "18-Feb-2025", dueDate: "04-Apr-2025", amount: 320000, overdueDays: 74, status: "OVERDUE (>45 Days)", taxImpact: 99840 },
      { vendorName: "Maruti Surface Finishers", udyamNo: "UDYAM-MH-26-0081290", category: "Small", invoiceNo: "INV-MSF-512", invoiceDate: "25-Feb-2025", dueDate: "11-Apr-2025", amount: 580000, overdueDays: 67, status: "OVERDUE (>45 Days)", taxImpact: 180960 },
      { vendorName: "Omkar CNC Components", udyamNo: "UDYAM-MH-26-0071923", category: "Micro", invoiceNo: "INV-OCC-118", invoiceDate: "05-Mar-2025", dueDate: "19-Apr-2025", amount: 420000, overdueDays: 59, status: "OVERDUE (>45 Days)", taxImpact: 131040 },
      { vendorName: "Venkatesh Fasteners", udyamNo: "UDYAM-MH-26-0062391", category: "Small", invoiceNo: "INV-VF-889", invoiceDate: "12-Mar-2025", dueDate: "26-Apr-2025", amount: 290000, overdueDays: 52, status: "OVERDUE (>45 Days)", taxImpact: 90480 },
      { vendorName: "Sai Polymer Mouldings", udyamNo: "UDYAM-MH-26-0051280", category: "Micro", invoiceNo: "INV-SPM-044", invoiceDate: "18-Mar-2025", dueDate: "02-May-2025", amount: 860000, overdueDays: 46, status: "OVERDUE (>45 Days)", taxImpact: 268320 }
    ]
  },

  // 2. Income Tax Act: Section 40A(3) Cash Payment Disallowances (>₹10,000/day)
  section40A3: {
    sectionTitle: "Section 40A(3) — Cash Payments Exceeding ₹10,000",
    statutoryRule: "Where the assessee incurs any expenditure in respect of which a payment or aggregate of payments made to a person in a day, otherwise than by an account payee cheque/draft or ECS, exceeds ₹10,000, no deduction shall be allowed.",
    totalDisallowedAmount: 72000,
    disallowedEntries: [
      { voucherNo: "PAY-CSH-041", date: "14-Jun-2025", paidTo: "Factory Cashier (Petty Cash)", amount: 15000, purpose: "Emergency shop-floor machine breakdown hydraulic oil", ruleBreached: "Payment >₹10,000 in cash", disallowanceInr: 15000 },
      { voucherNo: "PAY-CSH-089", date: "22-Jun-2025", paidTo: "Workshop Overhaul Contractor", amount: 25000, purpose: "Bearer cheque cash withdrawal for CNC bed scraping", ruleBreached: "Bearer cheque withdrawal >₹10,000", disallowanceInr: 25000 },
      { voucherNo: "PAY-CSH-112", date: "28-Jun-2025", paidTo: "Local Transport Tempo Driver", amount: 14000, purpose: "Chassis inter-plant shifting freight in cash", ruleBreached: "Payment >₹10,000 in cash (non-plying operator)", disallowanceInr: 14000 },
      { voucherNo: "PAY-CSH-145", date: "04-Jul-2025", paidTo: "Canteen & Welfare Contractor", amount: 18000, purpose: "Overtime night meal allowance cash reimbursement", ruleBreached: "Payment >₹10,000 in cash", disallowanceInr: 18000 }
    ]
  },

  // 3. Income Tax Act: Section 269ST Cash Receipt Penalty (>₹2,00,000)
  section269ST: {
    sectionTitle: "Section 269ST — Cash Receipts Exceeding ₹2,00,000",
    statutoryRule: "No person shall receive an amount of ₹2,00,000 or more in aggregate from a person in a day, in respect of a single transaction, otherwise than by an account payee cheque/bank draft or electronic clearing system. Penalty under Section 271DA is 100% of receipt.",
    totalViolationAmount: 285000,
    penaltyExposureInr: 285000,
    violations: [
      { receiptNo: "RCT-CSH-2025-019", date: "18-Jun-2025", receivedFrom: "Om Scrap Traders (Pune)", amount: 285000, transactionRef: "Aluminum die-cast runner & riser scrap sale", violationNotes: "Received ₹2,85,000 in currency notes in a single day for factory scrap disposal without banking channel.", penaltyRatePct: 100 }
    ]
  },

  // 4. Income Tax Act: Section 194Q / 206C(1H) TDS on Purchase of Goods (>₹50 Lakhs)
  section194Q: {
    sectionTitle: "Section 194Q — TDS on Purchase of Goods Exceeding ₹50 Lakhs",
    statutoryRule: "Buyer having turnover >₹10 Cr must deduct TDS @ 0.1% on purchase value exceeding ₹50 Lakhs in a financial year from a resident seller. Failure leads to 30% expenditure disallowance under Section 40(a)(ia).",
    defaultersCount: 3,
    shortDeductionInr: 48500,
    potentialDisallowance30Pct: 1455000,
    defaulters: [
      { vendorName: "Amperex Power Technology Ltd", pan: "AAACA1234E", cumulativePurchases: "₹4.82 Cr", thresholdExceeded: "₹4.32 Cr", tdsRate: "0.10%", tdsDeducted: "Nil (Omitted)", tdsShortfallInr: 43200, status: "DEFICIT" },
      { vendorName: "Silicon Mobility Circuits Pvt Ltd", pan: "BBBCB5678E", cumulativePurchases: "₹88.5 Lakhs", thresholdExceeded: "₹38.5 Lakhs", tdsRate: "0.10%", tdsDeducted: "Nil (Omitted)", tdsShortfallInr: 3850, status: "DEFICIT" },
      { vendorName: "Apex Electric Powertrains Ltd", pan: "CCCAC9012E", cumulativePurchases: "₹64.5 Lakhs", thresholdExceeded: "₹14.5 Lakhs", tdsRate: "0.10%", tdsDeducted: "Nil (Omitted)", tdsShortfallInr: 1450, status: "DEFICIT" }
    ]
  },

  // 5. GST Act: Section 16(2)(aa) & Rule 36(4) Ineligible ITC Reconciliation
  gstSection16: {
    sectionTitle: "GST Section 16(2)(aa) — Inward ITC Matched strictly with GSTR-2B",
    statutoryRule: "Input Tax Credit (ITC) can only be availed if invoice details have been furnished by the supplier in GSTR-1 and communicated in auto-generated GSTR-2B. Ineligible ITC availed in GSTR-3B must be reversed with 18% p.a. interest under Section 50.",
    totalIneligibleClaimedIn3B: 1212000,
    interestLiability18Pct: 218160,
    mismatches: [
      { gstin: "27BBBCD1234E1Z1", vendorName: "Dormant Fasteners India", invoiceNo: "INV-DF-881", invoiceDate: "12-Jun-2025", taxAmount: 40500, gstr2bStatus: "NOT FOUND (GSTR-1 not filed)", risk: "Departmental DRC-01C notice" },
      { gstin: "27DDDCD3456E1Z4", vendorName: "Fake Shell Suppliers", invoiceNo: "INV-SH-001", invoiceDate: "20-Jun-2025", taxAmount: 450000, gstr2bStatus: "NOT FOUND (Cancelled GSTIN)", risk: "Bogus ITC investigation" },
      { gstin: "27YYYCD9E1Z8", vendorName: "Western Electronics Trading", invoiceNo: "INV-WET-119", invoiceDate: "25-Jun-2025", taxAmount: 333000, gstr2bStatus: "NOT FOUND (Filing period mismatch)", risk: "Reversal with interest" },
      { gstin: "27ZZZCD1E1Z9", vendorName: "Pune Tooling Spares", invoiceNo: "INV-PTS-042", invoiceDate: "28-Jun-2025", taxAmount: 388500, gstr2bStatus: "NOT FOUND (Taxpayer inactive)", risk: "Blocked credit under Sec 17(5)" }
    ]
  },

  // 6. GST Act: Section 143 & Rule 45 (Job-Work 1-Year Deemed Supply Tracker)
  gstSection143: {
    sectionTitle: "GST Section 143 — Job-Work Inputs Return within 1 Year",
    statutoryRule: "Inputs sent for job-work must be brought back within 1 year from the date of sending out on delivery challan. If not received back within 1 year, it is deemed as a taxable supply by the principal on the date goods were sent out, with tax + 18% interest.",
    totalOpenChallans: 45,
    openBeyond180Days: 14,
    criticalBeyond300Days: 3,
    deemedTaxExposureInr: 1850000,
    criticalChallans: [
      { challanNo: "JW-CH-2024-041", date: "15-Aug-2024", jobWorkerName: "Aditya Heat Treaters", item: "Chassis Tubular Frames (Batch 41)", qty: "120 Sets", valueInr: "₹6,80,000", daysOpen: 308, daysToDeadline: 57, riskStatus: "URGENT (Approaching 1-Yr Deemed Supply)" },
      { challanNo: "JW-CH-2024-055", date: "28-Aug-2024", jobWorkerName: "Maruti Surface Finishers", item: "Battery Die-Cast Enclosure Anodizing", qty: "250 Sets", valueInr: "₹7,50,000", daysOpen: 295, daysToDeadline: 70, riskStatus: "WARNING (Approaching 1-Yr Deemed Supply)" },
      { challanNo: "JW-CH-2024-062", date: "10-Sep-2024", jobWorkerName: "Shree Ganesh Tooling Dies", item: "Motor Stator Coils", qty: "80 Sets", valueInr: "₹4,20,000", daysOpen: 282, daysToDeadline: 83, riskStatus: "WARNING (Material reconciliation pending)" }
    ]
  },

  // 7. CleanTech / EV Regulatory: PM E-DRIVE / EMPS Phased Manufacturing (PMP)
  pmpEvSubsidy: {
    schemeTitle: "PM E-DRIVE / EMPS Scheme — Phased Manufacturing Programme (PMP)",
    regulatoryRule: "Electric vehicle manufacturers claiming central government buyer subsidies (₹10,000 per 2-wheeler) must achieve minimum 50% Domestic Value Addition (DVA) and strictly source localized sub-assemblies (chassis, motor, battery pack, BMS). Sourcing non-localized assemblies triggers total subsidy clawback.",
    totalSubsidiesClaimedInr: 82000000, // ₹8.20 Cr
    vehiclesCovered: 8200,
    overallDvaPct: 62.4, // Meets 50% threshold on aggregate, but 1 component violates
    complianceStatus: "PARTIAL COMPLIANCE (1 Critical Sub-assembly Breach)",
    components: [
      { component: "Battery Pack Assembly & IP67 Enclosure", localizationPct: 84.5, pmpStatus: "COMPLIANT", source: "In-House Chakan Gigafactory" },
      { component: "Tubular Steel Chassis Frame", localizationPct: 98.0, pmpStatus: "COMPLIANT", source: "Hosur Plant & Domestic Job-Workers" },
      { component: "Wiring Harness & HV Connectors", localizationPct: 92.0, pmpStatus: "COMPLIANT", source: "Tata AutoComp Systems Ltd" },
      { component: "Lithium-Ion LFP 21700 Cells", localizationPct: 0.0, pmpStatus: "CONCESSIONAL IMPORT", source: "Amperex Power Technology (Customs CTH 8507)" },
      { component: "Smart Master-Slave BMS PCBA", localizationPct: 68.0, pmpStatus: "COMPLIANT", source: "Silicon Mobility Circuits (Bengaluru)" },
      { component: "5kW Mid-Drive PMSM Motor Inverter", localizationPct: 38.0, pmpStatus: "NON-COMPLIANT (<50% DVA)", source: "Apex Electric Powertrains (Imported PCB sub-tier)", breachNotes: "Supplier lacked ARAI DVA Certificate; risks ₹8.2 Cr subsidy audit freeze." }
    ]
  },

  // 8. Companies Act 2013: CARO 2020 Automated Reporting Matrix
  caro2020Reporting: {
    orderTitle: "Companies (Auditor's Report) Order, 2020 (CARO 2020)",
    auditReportingClauses: [
      {
        clause: "Clause (i)(a) & (b)",
        matter: "Property, Plant and Equipment (PPE) & Intangible Assets",
        auditorFinding: "The company maintains proper records showing full particulars of PPE. Physical verification was conducted during the year by management. No material discrepancies were noticed.",
        reportingStatus: "UNMODIFIED (CLEAN)",
        linkedControl: "FA-C01, FA-C02",
        draftParagraph: "According to the information and explanations given to us, the Company has maintained proper records showing full particulars, including quantitative details and situation of Property, Plant and Equipment. The Company has a regular programme of physical verification of its Property, Plant and Equipment by which all assets are verified in a phased manner over a period of three years, which in our opinion is reasonable."
      },
      {
        clause: "Clause (ii)(a) & (b)",
        matter: "Inventory Physical Verification & Quarterly Bank Stock Statements",
        auditorFinding: "Physical verification of inventory conducted at reasonable intervals. Discrepancies noticed were not exceeding 10% in aggregate. However, quarterly statements of current assets filed with HDFC Bank (CC limit ₹22 Cr) showed a ₹14.2 Lakh variance against books of account awaiting reconciliation.",
        reportingStatus: "QUALIFIED / ATTENTION DRAWN",
        linkedControl: "INV-C01, INV-C04, CB-C03",
        draftParagraph: "The Company has been sanctioned working capital limits in excess of five crore rupees (sanctioned ₹22.00 Cr) in aggregate from banks on the basis of security of current assets. The quarterly returns/statements filed by the Company with such banks are in agreement with the books of account of the Company, except for the quarter ended September 30, 2024, where book inventory differed by ₹14.20 Lakhs due to in-transit inter-unit transfers between Chakan and Hosur plants."
      },
      {
        clause: "Clause (vii)(a)",
        matter: "Undisputed and Disputed Statutory Dues (GST, PF, ESI, Income Tax)",
        auditorFinding: "Undisputed statutory dues including Goods and Services Tax, Provident Fund, and Employees' State Insurance have been regularly deposited with the appropriate authorities. Undisputed tax arrears exceeding 6 months as on 31-Mar-2025: NIL.",
        reportingStatus: "UNMODIFIED (CLEAN)",
        linkedControl: "STAT-C01, STAT-C02, PAY-C02",
        draftParagraph: "According to the records of the Company, undisputed statutory dues including Goods and Services Tax, Provident Fund, Employees' State Insurance, Income-tax, Duty of Customs, and other statutory dues have been regularly deposited with the appropriate authorities during the year."
      },
      {
        clause: "Clause (ix)(a) & (d)",
        matter: "Default in Repayment of Borrowings & Short-Term Funds Used for Long-Term",
        auditorFinding: "The company has not defaulted in repayment of loans or other borrowings. Short-term cash credit lines of ₹2.8 Cr were temporarily utilized towards EV battery assembly line capex advances during Q3 pending term loan disbursement.",
        reportingStatus: "ATTENTION DRAWN",
        linkedControl: "CB-C01, FR-C03",
        draftParagraph: "In our opinion and according to the information and explanations given to us, the Company has not defaulted in the repayment of loans or other borrowings or in the payment of interest thereon to any lender. On an overall examination of the financial statements of the Company, we report that funds raised on short-term basis aggregating to ₹2.80 Cr have been utilized for long-term capex commitments towards Plant 1 battery cleanroom lines."
      },
      {
        clause: "Clause (xi)(a) & (b)",
        matter: "Fraud Reported or Noticed & Form ADT-4 Reporting under Sec 143(12)",
        auditorFinding: "No fraud by the company or any fraud on the company has been noticed or reported during the year. No report under sub-section (12) of Section 143 of the Companies Act, 2013 has been filed in Form ADT-4 with the Central Government.",
        reportingStatus: "UNMODIFIED (CLEAN)",
        linkedControl: "ELC-C01, FR-C05",
        draftParagraph: "No fraud by the Company or any fraud on the Company by its officers or employees has been noticed or reported during the course of our audit. No report under sub-section (12) of section 143 of the Companies Act has been filed in Form ADT-4 with the Central Government."
      },
      {
        clause: "Clause (xiii)",
        matter: "Transactions with Related Parties under Section 177 & 188",
        auditorFinding: "All transactions with related parties are in compliance with Section 188 of the Companies Act, 2013 where applicable and details have been disclosed in the financial statements as required by Ind AS 24.",
        reportingStatus: "UNMODIFIED (CLEAN)",
        linkedControl: "RPT-C01, RPT-C02",
        draftParagraph: "According to the information and explanations given to us and based on our examination of the records of the Company, transactions with the related parties are in compliance with Section 188 of the Act, where applicable, and details of such transactions have been disclosed in the financial statements as required by the applicable accounting standards."
      }
    ]
  },

  // 9. Companies Act 2013: MCA Proviso to Rule 3(1) Audit Trail (Edit Log) Assessment
  mcaAuditTrail: {
    ruleTitle: "Proviso to Rule 3(1) of Companies (Accounts) Rules, 2014 — Audit Trail (Edit Log)",
    mandate: "Companies must use only such accounting software which has a feature of recording audit trail (edit log) facility for each and every transaction, creating an edit log of each change made in books of account along with the date and who made such change, without the feature being tampered with or disabled.",
    systemsAssessed: [
      {
        softwareName: "Tally Prime 4.0 (Edit Log Release)",
        environment: "Windows Server (On-Premises Pune Office)",
        editLogStatus: "ENABLED (Audit Trail Active)",
        tamperingDetected: "NO",
        auditFinding: "Audit trail feature was operated throughout the year without being disabled. However, shared 'admin_user' login limits auditor ability to establish individual accountability for journal voucher revisions.",
        complianceRating: "COMPLIANT WITH OBSERVATION"
      },
      {
        softwareName: "SAP Business One on HANA",
        environment: "Cloud Hosted (AWS Mumbai)",
        editLogStatus: "ENABLED (Native Change Log & Time Stamping)",
        tamperingDetected: "NO",
        auditFinding: "Database change-log captures user ID, workstation, and before-and-after transaction states for all PO, GRN, and Inventory transactions with zero gaps.",
        complianceRating: "FULLY COMPLIANT"
      }
    ]
  },

  // 10. Indian Accounting Standards: Ind AS 37 Actuarial Battery Warranty Provision
  indAs37Warranty: {
    standardTitle: "Ind AS 37 — Provisions, Contingent Liabilities & Contingent Assets",
    accountingRule: "An entity must recognize a provision when it has a present obligation (legal or constructive) as a result of a past event, it is probable that an outflow of resources will be required to settle the obligation, and a reliable estimate can be made. For EV battery packs sold with a 3-year / 50,000 km performance warranty, an actuarial provision is required based on historical cell degradation and replacement costs.",
    activeFleetSize: 6800, // Electric 2W in warranty
    averageBatteryPackCost: 32000,
    historicalFailureRatePct: 2.1,
    actuarialRequiredProvision: 4569600, // 6800 * 2.1% * 32,000 = ₹45,69,600
    currentBookProvision: 3200000, // ₹32.0 Lakhs in books
    provisionDeficitInr: 1369600, // Shortfall: ₹13.7 Lakhs
    recommendation: "Book additional quarterly warranty provision of ₹13,69,600 to satisfy Ind AS 37 and prevent statutory audit qualification on under-provisioned battery liabilities."
  }
};


loadState();

// Node.js module export support if executed in test scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    clientScopingChecklist, standardDataRequestList, masterExtractTemplates, sampleClientUploads, processAreaIndexSummary,
    riskRatingMethodology, caatAnalyticsLibrary, masterControlLibrary63,
    evidenceFiles, approvalMatrix, syntheticVendors, syntheticPOs, syntheticGRNs,
    syntheticInvoices, syntheticPayments, syntheticBankTransactions, syntheticJVs, syntheticInventory, syntheticFixedAssets, syntheticSalesInvoices, syntheticRelatedParties, processTemplates, dataQualityRules,
    expectedProcesses, evidenceGaps, continuousMonitoringCandidates, benfordExpected, promoterTopRedFlags, promoterMondayChecklist, clientProfileDetailed, indianComplianceRegistry,
    appState, saveState, loadState, resetState
  };
}
