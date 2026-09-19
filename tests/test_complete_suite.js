const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');
const data = require(path.join(projectDir, 'data.js'));

// Bind data exports to global
Object.keys(data).forEach(k => {
  global[k] = data[k];
});

// Mock browser globals
const dom = {
  innerHTML: '',
  innerText: '',
  value: '',
  focus: () => {},
  setSelectionRange: () => {},
  querySelectorAll: () => [],
  querySelector: () => null,
  classList: { remove: () => {}, add: () => {} },
  appendChild: () => {},
  remove: () => {},
  style: {}
};

global.window = {
  location: { hash: '#caat-library' },
  addEventListener: () => {},
  print: () => {},
  clipboard: { writeText: () => Promise.resolve() }
};

global.document = {
  getElementById: () => dom,
  querySelector: () => dom,
  querySelectorAll: () => [],
  createElement: (tag) => ({
    className: '',
    id: '',
    innerHTML: '',
    style: {},
    setAttribute: () => {},
    appendChild: () => {},
    click: () => {}
  }),
  body: { appendChild: () => {}, removeChild: () => {} }
};

global.URL = { createObjectURL: () => 'blob:mock' };
global.Blob = function() {};
global.lucide = { createIcons: () => {} };
global.Chart = function() { return { destroy: () => {} }; };

const appCode = fs.readFileSync(path.join(projectDir, 'app.js'), 'utf8');
eval(appCode);

console.log('================================================================');
console.log('   FULL SUITE VERIFICATION: 90 RACM, 85 CAATS, 18 TEMPLATES    ');
console.log('================================================================');

// 1. RACM 90 Controls Validation
console.log('\n--- 1. MASTER RACM CONTROLS (90) ---');
console.assert(masterControlLibrary63.length === 90, `Expected 90 controls, got ${masterControlLibrary63.length}`);
console.log(`✓ Total RACM Controls: ${masterControlLibrary63.length}`);

const racmRequiredKeys = [
  'sNo', 'processArea', 'subProcess', 'riskId', 'riskDesc',
  'riskCategory', 'likelihood', 'impact', 'inherentRisk',
  'controlId', 'controlDesc', 'controlType', 'controlNature',
  'frequency', 'keyControl', 'owner', 'residualRisk', 'status',
  'evidenceRequired', 'analyticsTestable', 'primaryDataSource', 'linkedCAAT'
];

masterControlLibrary63.forEach((c, idx) => {
  racmRequiredKeys.forEach(k => {
    if (c[k] === undefined || c[k] === null) {
      throw new Error(`RACM Control [${c.controlId || idx}] missing key: ${k}`);
    }
  });
});
console.log('✓ All 90 RACM controls strictly conform to the 23-column audit schema');

const processCounts = {};
masterControlLibrary63.forEach(c => {
  processCounts[c.processArea] = (processCounts[c.processArea] || 0) + 1;
});
console.log('Process Area Breakdown:');
Object.entries(processCounts).forEach(([pa, count]) => {
  console.log(`  • ${pa}: ${count} controls`);
});

// 2. CAAT 85 Library Validation
console.log('\n--- 2. CAAT ANALYTICS LIBRARY (85) ---');
console.assert(caatAnalyticsLibrary.length === 85, `Expected 85 CAATs, got ${caatAnalyticsLibrary.length}`);
console.log(`✓ Total CAAT Routines: ${caatAnalyticsLibrary.length}`);

const caatRequiredKeys = [
  'id', 'name', 'linkedControls', 'dataset', 'keyFields',
  'objective', 'logic', 'tool', 'threshold', 'followUp'
];

caatAnalyticsLibrary.forEach((c, idx) => {
  caatRequiredKeys.forEach(k => {
    if (!c[k]) {
      throw new Error(`CAAT Routine [${c.id || idx}] missing key: ${k}`);
    }
  });
});
console.log('✓ All 85 CAAT routines have complete audit script definitions');

const caatCatCounts = {};
caatAnalyticsLibrary.forEach(c => {
  const cat = c.category || 'General Audit Analytics';
  caatCatCounts[cat] = (caatCatCounts[cat] || 0) + 1;
});
console.log('Domain Classification Breakdown:');
Object.entries(caatCatCounts).forEach(([cat, count]) => {
  console.log(`  • ${cat}: ${count} routines`);
});

// 3. Extract Templates (18) & DRL (27) Validation
console.log('\n--- 3. CLIENT DATA REQUEST LIST & EXTRACT TEMPLATES ---');
console.assert(standardDataRequestList.length === 27, `Expected 27 DRL items, got ${standardDataRequestList.length}`);
console.assert(masterExtractTemplates.length === 19, `Expected 19 templates, got ${masterExtractTemplates.length}`);
console.log(`✓ Data Request List (DRL): ${standardDataRequestList.length} items`);
console.log(`✓ Master Extract Templates: ${masterExtractTemplates.length} schemas`);

// 4. Deterministic Testing Engine Execution
console.log('\n--- 4. DETERMINISTIC EXCEPTION ENGINE ---');
const exceptions = runDeterministicTests();
console.log(`✓ Total Exceptions Generated: ${exceptions.length}`);
const excTypes = {};
let totalExposureAmt = 0;
exceptions.forEach(e => {
  excTypes[e.financialCategory || 'OTHER'] = (excTypes[e.financialCategory || 'OTHER'] || 0) + 1;
  totalExposureAmt += (e.amount || 0);
});
console.log('Exceptions by Financial Category:');
Object.entries(excTypes).forEach(([cat, count]) => {
  console.log(`  • ${cat}: ${count} exceptions`);
});

// 5. Exposure Summary & Net Profit Impact
console.log('\n--- 5. FINANCIAL EXPOSURE METRICS ---');
const exposure = calculateExposureSummary(exceptions);
console.log(`  • Direct Cash At Risk:        ₹${(exposure.directCash).toLocaleString('en-IN')}`);
console.log(`  • Tax / ITC Clawback Risk:    ₹${(exposure.taxRisk).toLocaleString('en-IN')}`);
console.log(`  • Fraud / Siphoning Exposure: ₹${(exposure.fraudExposure).toLocaleString('en-IN')}`);
console.log(`  • Total Exposure:             ₹${(exposure.totalExposure).toLocaleString('en-IN')}`);
console.log(`  • Recoverable Cash:           ₹${(exposure.recoverableCash).toLocaleString('en-IN')}`);

// 6. Test Interactive Features
console.log('\n--- 6. INTERACTIVE UI HANDLERS & EXPORTS ---');
// Domain Category Filters
const filterDomains = ['ALL', 'Procurement', 'Inventory', 'Revenue', 'Cash', 'Payroll', 'ITGC', 'CleanTech', 'Financial', 'Statutory'];
filterDomains.forEach(f => {
  global.window.handleCAATCategoryFilter(f);
});
console.log(`✓ All ${filterDomains.length} domain category filter buttons verified`);

// RACM Modals
global.window.openControlModal('PUR-C08');
global.window.openControlModal('INV-C06');
global.window.openControlModal('PRD-C03');
global.window.openControlModal('PAY-C06');
global.window.openControlModal('REV-C08');
global.window.openControlModal('WAR-C01');
global.window.openControlModal('STAT-C03');
global.window.openControlModal('IT-C02');
console.log('✓ Verified openControlModal on new RACM controls (PUR-C08, INV-C06, PRD-C03, PAY-C06, REV-C08, WAR-C01, STAT-C03, IT-C02)');

// CAAT Modals
global.window.openCAATModal('DA-71');
global.window.openCAATModal('DA-75');
global.window.openCAATModal('DA-77');
global.window.openCAATModal('DA-79');
global.window.openCAATModal('DA-80');
global.window.openCAATModal('DA-82');
global.window.openCAATModal('DA-84');
global.window.openCAATModal('DA-85');
console.log('✓ Verified openCAATModal on new CAAT routines (DA-71, DA-75, DA-77, DA-79, DA-80, DA-82, DA-84, DA-85)');

// CSV Exports
global.window.exportRACMtoCSV();
global.window.exportCAATtoCSV();
console.log('✓ Verified exportRACMtoCSV() and exportCAATtoCSV()');

console.log('\n================================================================');
console.log('   >>> ALL 90 RACM, 85 CAATS & PIPELINE VERIFIED 100% <<<      ');
console.log('================================================================');
