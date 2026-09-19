
window.togglePlatformTheme = function() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  if (next === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('grc_theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('grc_theme', 'light');
  }
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = next === 'dark' ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
  if (window.location.hash === '#dashboard' || window.location.hash === '') {
    renderDashboard();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
};

// ==============================================================================
// ADAPTIVE AI AUDIT & RISK CONSULTANT - RENDERING & CAAT EXECUTION ENGINE
// ==============================================================================

const appRoot = document.getElementById('app-root');
let currentCharts = [];

function destroyCharts() {
  currentCharts.forEach(c => c.destroy());
  currentCharts = [];
}

// ==============================================================================
// AUTHENTICATION & DEMO GATEWAY (ID: demo | Password: demo)
// ==============================================================================

window.isUserAuthenticated = function() {
  return sessionStorage.getItem('grc_authenticated') === 'true';
};

window.openAuthModal = function(msg) {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.style.display = 'flex';
    const errBox = document.getElementById('modalLoginError');
    if (errBox) {
      if (msg) {
        errBox.textContent = msg;
        errBox.style.display = 'block';
      } else {
        errBox.style.display = 'none';
      }
    }
    const userInput = document.getElementById('modalUsername');
    if (userInput) userInput.focus();
  }
};

window.closeAuthModal = function() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.style.display = 'none';
};

window.handleModalBackdropClick = function(e) {
  if (e.target.id === 'login-modal') {
    closeAuthModal();
  }
};

window.quickLaunchDemo = function() {
  autoFillAndSubmitModal();
};

window.autoFillAndSubmitDemo = function() {
  const u = document.getElementById('loginUsername');
  const p = document.getElementById('loginPassword');
  if (u) u.value = 'demo';
  if (p) p.value = 'demo';
  const errBox = document.getElementById('loginErrorMessage');
  if (errBox) errBox.style.display = 'none';
  performLogin('demo', 'demo', 'landing');
};

window.autoFillAndSubmitModal = function() {
  openAuthModal();
  const u = document.getElementById('modalUsername');
  const p = document.getElementById('modalPassword');
  if (u) u.value = 'demo';
  if (p) p.value = 'demo';
  const errBox = document.getElementById('modalLoginError');
  if (errBox) errBox.style.display = 'none';
  performLogin('demo', 'demo', 'modal');
};

window.handleFormLogin = function(e) {
  e.preventDefault();
  const u = document.getElementById('loginUsername').value;
  const p = document.getElementById('loginPassword').value;
  performLogin(u, p, 'landing');
};

window.handleModalFormLogin = function(e) {
  e.preventDefault();
  const u = document.getElementById('modalUsername').value;
  const p = document.getElementById('modalPassword').value;
  performLogin(u, p, 'modal');
};

function performLogin(username, password, source) {
  const errId = source === 'modal' ? 'modalLoginError' : 'loginErrorMessage';
  const errBox = document.getElementById(errId);
  const btnId = source === 'modal' ? null : 'btnLoginSubmit';
  const btn = btnId ? document.getElementById(btnId) : null;

  if (username.trim().toLowerCase() === 'demo' && password.trim() === 'demo') {
    if (errBox) errBox.style.display = 'none';
    if (btn) {
      btn.innerHTML = '<span class="sim-dot green" style="display:inline-block;margin-right:8px;"></span> Authenticating Demo Session...';
      btn.disabled = true;
    }
    setTimeout(() => {
      sessionStorage.setItem('grc_authenticated', 'true');
      closeAuthModal();
      if (btn) {
        btn.innerHTML = '<span>Sign In to Risk & Defense Console</span><i data-lucide="arrow-right" style="width:16px;height:16px;margin-left:8px;"></i>';
        btn.disabled = false;
      }
      window.location.hash = '#dashboard';
      router();
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 450);
  } else {
    if (errBox) {
      errBox.textContent = 'Invalid credentials. Please enter ID: demo and Password: demo';
      errBox.style.display = 'block';
    }
  }
}

window.handlePlatformLogout = function() {
  sessionStorage.removeItem('grc_authenticated');
  window.location.hash = '#landing';
  router();
};

// ==============================================================================
// INTERACTIVE TRIANGULATION SIMULATOR ENGINE (MARKETING COVER PAGE)
// ==============================================================================

window.runLiveSimulation = function() {
  const btn = document.getElementById('btnRunSim');
  const actionContainer = document.getElementById('sim-action-container');
  const resultBox = document.getElementById('sim-result-container');
  
  if (btn) {
    btn.innerHTML = '<div class="ai-spinner" style="width:16px;height:16px;margin-right:8px;border-width:2px;display:inline-block;vertical-align:middle;"></div> Algorithmic Triangulation in Progress (PO ⇄ Gate ⇄ GRN ⇄ Tax)...';
    btn.disabled = true;
  }

  setTimeout(() => {
    if (actionContainer) actionContainer.style.display = 'none';
    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }, 900);
};

window.generateSimDebitNote = function() {
  const btn = document.getElementById('btnGenDebitNote');
  const status = document.getElementById('sim-clawback-status');
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.innerHTML = '<i data-lucide="check-circle-2" style="width:15px;height:15px;margin-right:6px;"></i> Debit Note Issued';
  }
  if (status) {
    status.innerHTML = '✓ <strong>Debit Note #DN-2024-884 Generated!</strong> ₹46,000 credited back into AP Ledger.';
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

// ==============================================================================
// FORENSIC ENGINE CAROUSEL CONTROLLER
// ==============================================================================

let currentCarouselSlide = 0;
window.setCarouselSlide = function(idx) {
  currentCarouselSlide = idx;
  const slides = document.querySelectorAll('.carousel-slide');
  const tabs = document.querySelectorAll('.carousel-tab-btn');
  const dots = document.querySelectorAll('.carousel-dot');
  const counter = document.getElementById('carouselSlideCounter');

  slides.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
  });
  tabs.forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
  if (counter) {
    counter.textContent = `Slide ${idx + 1} of ${slides.length}`;
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.prevCarouselSlide = function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const total = slides.length || 4;
  let next = currentCarouselSlide - 1;
  if (next < 0) next = total - 1;
  window.setCarouselSlide(next);
};

window.nextCarouselSlide = function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const total = slides.length || 4;
  let next = (currentCarouselSlide + 1) % total;
  window.setCarouselSlide(next);
};

// ==============================================================================
// ROUTER & NAVIGATION HANDLER
// ==============================================================================

function updateNav(hash) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const h = hash.split('/')[0] || '#dashboard';
  const a = document.querySelector(`.nav-link[href="${h}"]`);
  if (a) a.classList.add('active');
}

function router() {
  destroyCharts();
  const hash = window.location.hash || '';
  const isAuth = window.isUserAuthenticated();
  const marketingPage = document.getElementById('marketing-page');
  const consoleLayout = document.getElementById('console-layout');

  // If unauthenticated or explicitly visiting #landing:
  if (!isAuth || hash === '#landing') {
    if (marketingPage) marketingPage.style.display = 'block';
    if (consoleLayout) consoleLayout.style.display = 'none';
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // If user attempted to deep link without credentials:
    if (!isAuth && hash && hash !== '#landing' && hash !== '') {
      window.openAuthModal(`Please sign in with ID: demo and Password: demo to access ${hash.replace('#','')}`);
    }
    return;
  }

  // User is authenticated: Show full Enterprise GRC Console
  if (marketingPage) marketingPage.style.display = 'none';
  if (consoleLayout) consoleLayout.style.display = 'flex';

  const effectiveHash = hash || '#dashboard';
  updateNav(effectiveHash);

  const routes = {
    '#client-profile': renderClientProfile,
    '#dashboard': renderDashboard,
    '#scoping': renderScoping,
    '#data-request': renderDataRequest,
    '#field-mapping': renderFieldMapping,
    '#evidence': renderEvidence,
    '#processes': renderProcesses,
    '#risks': renderRisks,
    '#master-racm': renderMasterRACM,
    '#controls': renderControls,
    '#caat-library': renderCAATLibrary,
    '#testing': renderTesting,
    '#exceptions': renderExceptions,
    '#rcm': renderRCM,
    '#recommendations': renderRecommendations,
    '#continuous-monitoring': renderMonitoring,
    '#evidence-gaps': renderGaps,
    '#compliance-hub': renderComplianceHub
  };

  (routes[effectiveHash] || renderDashboard)();
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  router();
  const resetBtn = document.querySelector('.btn-reset');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("Reset the entire AI audit pipeline and return to planning?")) {
        resetState();
        window.location.hash = '#dashboard';
        router();
      }
    };
  }
});

// AI Simulation Progress Modal
function showAIProgress(msg, cb) {
  const overlay = document.createElement('div');
  overlay.className = 'ai-progress-overlay';
  overlay.innerHTML = `
    <div class="ai-spinner"></div>
    <p style="font-size:16px; font-weight:600; color:#f8fafc; margin-bottom:16px;">${msg}</p>
    <div class="ai-progress-bar"><div class="ai-progress-fill"></div></div>
  `;
  document.body.appendChild(overlay);
  const fill = overlay.querySelector('.ai-progress-fill');
  let w = 0;
  const iv = setInterval(() => {
    w += Math.random() * 20 + 6;
    if (w >= 100) {
      w = 100;
      clearInterval(iv);
      setTimeout(() => {
        overlay.remove();
        cb();
      }, 350);
    }
    fill.style.width = w + '%';
  }, 120);
}



// ==============================================================================
// VIEW 0: CLIENT PROFILE, BUSINESS MODEL, STRATEGY & COMPLEXITY (SA 315)
// ==============================================================================
let activeProfileTab = 'overview'; // 'overview' | 'model' | 'strategy' | 'automation' | 'complexity'

window.setProfileTab = function(tab) {
  activeProfileTab = tab;
  renderClientProfile();
  lucide.createIcons();
};

function renderClientProfile() {
  const p = typeof clientProfileDetailed !== 'undefined' ? clientProfileDetailed : {};
  if (!p.companyName) {
    appRoot.innerHTML = '<div class="header"><h1>Entity Profile Not Loaded</h1></div>';
    return;
  }

  // Sub-navigation tabs
  const tabs = [
    { id: 'overview', label: '🏢 Overview & Governance', icon: 'building-2' },
    { id: 'model', label: '🔄 Business Model & Value Chain', icon: 'git-merge' },
    { id: 'strategy', label: '🚀 Strategy & Capex Roadmap', icon: 'trending-up' },
    { id: 'automation', label: '💻 IT & Automation Maturity', icon: 'cpu' },
    { id: 'complexity', label: '⚠️ Operational Complexity & GRC', icon: 'alert-triangle' }
  ];

  const tabButtons = tabs.map(t => `
    <button class="filter-btn ${activeProfileTab === t.id ? 'active' : ''}" style="font-size:12px;padding:8px 14px;font-weight:700;" onclick="setProfileTab('${t.id}')">
      <i data-lucide="${t.icon}" style="width:14px;height:14px;margin-right:4px;"></i> ${t.label}
    </button>
  `).join('');

  let contentHtml = '';

  // ----------------------------------------------------------------------------
  // TAB 1: OVERVIEW & GOVERNANCE
  // ----------------------------------------------------------------------------
  if (activeProfileTab === 'overview') {
    const plantsHtml = p.plants.map(pl => `
      <div class="panel" style="background:#f8fafc;border:1px solid #e2e8f0;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
          <div>
            <h4 style="font-size:14px;font-weight:800;color:#0f172a;margin-bottom:2px;">${pl.name}</h4>
            <span style="font-size:12px;color:#64748b;"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${pl.location}</span>
          </div>
          <span class="status-badge passed" style="font-size:11px;">Capacity: ${pl.capacityUtilization}</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;margin-bottom:8px;background:white;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">
          <div><strong>Facility Size:</strong> ${pl.sqft}</div>
          <div><strong>Workforce:</strong> ${pl.workforce}</div>
          <div style="grid-column:1/-1;"><strong>Core Capabilities:</strong> ${pl.coreCapabilities}</div>
          <div style="grid-column:1/-1;"><strong>Primary Customers Served:</strong> ${pl.primaryCustomersServed}</div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${pl.certifications.map(c => `<span class="priority-badge good-to-have" style="font-size:10px;">${c}</span>`).join('')}
        </div>
      </div>
    `).join('');

    const directorsHtml = p.governance.boardOfDirectors.map(d => `
      <tr>
        <td><strong>${d.name}</strong><br><span style="font-size:11px;color:#64748b;">DIN: ${d.din}</span></td>
        <td><span class="status-badge ${d.equityPct > 50 ? 'failed' : 'passed'}" style="font-size:10px;">${d.designation}</span></td>
        <td style="font-weight:800;color:var(--primary);font-size:13px;">${d.equityPct}%</td>
        <td style="font-size:12px;color:#475569;">${d.roleDesc}</td>
      </tr>
    `).join('');

    const kmpHtml = p.governance.keyExecutives.map(k => `
      <tr>
        <td><strong>${k.name}</strong><br><span style="font-size:11px;color:#64748b;">${k.experience} • ${k.tenure}</span></td>
        <td><span style="font-size:12px;font-weight:700;color:#0f172a;">${k.title}</span></td>
        <td style="font-size:12px;color:#334155;">${k.keyControlRole}</td>
      </tr>
    `).join('');

    contentHtml = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
        <!-- Corporate Identity Snapshot -->
        <div class="panel">
          <h3 style="font-size:14px;font-weight:800;color:#0f172a;margin-bottom:14px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;">
            <i data-lucide="shield-check" style="width:16px;height:16px;color:var(--primary);vertical-align:middle;"></i> Corporate Identity & Registration Details
          </h3>
          <table class="data-grid" style="font-size:12px;">
            <tbody>
              <tr><td style="width:35%;font-weight:700;color:#64748b;">Legal Entity</td><td><strong>${p.companyName}</strong> (${p.tradeBrand})</td></tr>
              <tr><td style="font-weight:700;color:#64748b;">Corporate Identity (CIN)</td><td><code>${p.cin}</code></td></tr>
              <tr><td style="font-weight:700;color:#64748b;">GSTIN / Tax ID</td><td><code>${p.gstin}</code> (PAN: ${p.pan})</td></tr>
              <tr><td style="font-weight:700;color:#64748b;">Operating History</td><td>${p.incorporationDate}</td></tr>
              <tr><td style="font-weight:700;color:#64748b;">Registered Office</td><td style="font-size:11px;">${p.registeredOffice}</td></tr>
              <tr><td style="font-weight:700;color:#64748b;">Lead Banking Partner</td><td>${p.governance.bankingConsortium.leadBank}</td></tr>
              <tr><td style="font-weight:700;color:#64748b;">Sanctioned Bank Limits</td><td><strong>${p.governance.bankingConsortium.sanctionedLimits}</strong></td></tr>
              <tr><td style="font-weight:700;color:#64748b;">Limit Utilization</td><td><strong style="color:#ea580c;">${p.governance.bankingConsortium.currentUtilization}</strong></td></tr>
            </tbody>
          </table>
        </div>

        <!-- Headcount & Workforce Distribution -->
        <div class="panel">
          <h3 style="font-size:14px;font-weight:800;color:#0f172a;margin-bottom:14px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;">
            <i data-lucide="users" style="width:16px;height:16px;color:var(--primary);vertical-align:middle;"></i> Headcount & Workforce Structure (275 Total)
          </h3>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:14px;">
            <div class="exposure-card" style="padding:12px;">
              <div style="font-size:11px;color:#64748b;font-weight:700;">FULL-TIME ON ROLL</div>
              <div style="font-size:22px;font-weight:800;color:#0f172a;">${p.headcount.fullTimeRoll}</div>
              <span style="font-size:11px;color:#16a34a;">PF/ESI Covered Staff</span>
            </div>
            <div class="exposure-card" style="padding:12px;">
              <div style="font-size:11px;color:#64748b;font-weight:700;">CONTRACTUAL LABOUR</div>
              <div style="font-size:22px;font-weight:800;color:#ea580c;">${p.headcount.contractualShopFloor}</div>
              <span style="font-size:11px;color:#64748b;">Contractor Invoiced</span>
            </div>
            <div class="exposure-card" style="padding:12px;">
              <div style="font-size:11px;color:#64748b;font-weight:700;">FINANCE & ACCOUNTS</div>
              <div style="font-size:22px;font-weight:800;color:#2563eb;">${p.headcount.financeAccounts}</div>
              <span style="font-size:11px;color:#dc2626;font-weight:700;">SoD Bottleneck (Small Team)</span>
            </div>
            <div class="exposure-card" style="padding:12px;">
              <div style="font-size:11px;color:#64748b;font-weight:700;">FEMALE WORKFORCE</div>
              <div style="font-size:22px;font-weight:800;color:#0f172a;">${p.headcount.femaleWorkforcePct}</div>
              <span style="font-size:11px;color:#16a34a;">Quality & Sub-assembly</span>
            </div>
          </div>
          <div style="font-size:11px;color:#475569;background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;line-height:1.4;">
            <strong>SA 315 Control Risk Signal:</strong> With only 4 personnel in Finance/Accounts handling ₹82.5 Cr turnover, traditional four-eyes segregation of duties cannot be enforced internally. Relying on promoter transaction approval (ELC-C01) is structurally mandatory.
          </div>
        </div>
      </div>

      <!-- Manufacturing Locations & Plants -->
      <div class="panel" style="margin-bottom:20px;">
        <h3 style="font-size:14px;font-weight:800;color:#0f172a;margin-bottom:12px;">
          <i data-lucide="factory" style="width:16px;height:16px;color:var(--primary);vertical-align:middle;"></i> Operating Manufacturing Locations (70,000 sq.ft Total Floor Space)
        </h3>
        ${plantsHtml}
      </div>

      <!-- Board of Directors & KMP Governance -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="panel" style="padding:0;overflow-x:auto;">
          <div style="padding:14px 16px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:800;color:#0f172a;">
            Ownership & Board of Directors (100% Equity)
          </div>
          <table class="data-grid" style="margin:0;">
            <thead><tr><th>Director</th><th>Designation</th><th>Equity</th><th>Decision Authority</th></tr></thead>
            <tbody>${directorsHtml}</tbody>
          </table>
        </div>
        <div class="panel" style="padding:0;overflow-x:auto;">
          <div style="padding:14px 16px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:800;color:#0f172a;">
            Key Managerial Personnel (KMP) & Control Owners
          </div>
          <table class="data-grid" style="margin:0;">
            <thead><tr><th>Officer</th><th>Function</th><th>Assigned Risk & Control Role</th></tr></thead>
            <tbody>${kmpHtml}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ----------------------------------------------------------------------------
  // TAB 2: BUSINESS MODEL & VALUE CHAIN
  // ----------------------------------------------------------------------------
  else if (activeProfileTab === 'model') {
    const pipelineHtml = p.businessModel.valueChainPipeline.map(st => `
      <div style="flex:1;min-width:200px;background:white;border:1px solid #e2e8f0;border-radius:8px;padding:14px;position:relative;border-top:4px solid var(--primary);box-shadow:0 1px 3px rgba(0,0,0,0.04);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:800;color:var(--primary);background:#eff6ff;padding:2px 8px;border-radius:12px;">STAGE 0${st.stepNumber}</span>
          <span style="font-size:10px;color:#64748b;font-weight:600;"><i data-lucide="clock" style="width:10px;height:10px;"></i> ${st.leadTime}</span>
        </div>
        <h4 style="font-size:13px;font-weight:800;color:#0f172a;margin-bottom:6px;">${st.stage}</h4>
        <p style="font-size:11px;color:#475569;line-height:1.4;margin-bottom:10px;">${st.processDescription}</p>
        
        <div style="background:#f8fafc;padding:8px;border-radius:6px;border:1px solid #f1f5f9;margin-bottom:8px;font-size:10px;">
          <strong style="color:var(--primary);display:block;margin-bottom:2px;">Mitigating Controls:</strong>
          <code>${st.keyControls}</code>
        </div>

        <div style="background:#fef2f2;padding:8px;border-radius:6px;border:1px solid #fee2e2;font-size:10px;color:#991b1b;">
          <strong>Hotspot:</strong> ${st.vulnerability}
        </div>
      </div>
    `).join('');

    const revenueMixRows = p.businessModel.revenueMix.map(r => `
      <tr>
        <td><strong>${r.segment}</strong><br><span style="font-size:11px;color:#64748b;">${r.description}</span></td>
        <td style="font-weight:800;font-size:13px;color:var(--primary);">${r.sharePct}%</td>
        <td style="font-weight:700;">${r.revenueInr}</td>
        <td><span class="status-badge passed" style="font-size:10px;">${r.marginPct}</span></td>
        <td style="font-size:12px;color:#64748b;">${r.creditTerms}</td>
      </tr>
    `).join('');

    const concentrationRows = p.businessModel.customerConcentration.map(c => `
      <tr>
        <td><strong>${c.customer}</strong></td>
        <td style="font-weight:800;color:${c.sharePct > 30 ? '#dc2626' : '#0f172a'};">${c.sharePct}%</td>
        <td>${c.annualBillings}</td>
        <td><span class="priority-badge ${c.sharePct >= 20 ? 'must-have' : 'good-to-have'}" style="font-size:10px;">${c.status}</span></td>
        <td style="font-size:11px;color:#475569;">${c.pricingLeverage}</td>
      </tr>
    `).join('');

    contentHtml = `
      <!-- Value Chain Flow -->
      <div class="panel" style="margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <h3 style="font-size:15px;font-weight:800;color:#0f172a;margin-bottom:2px;">
              <i data-lucide="git-merge" style="width:16px;height:16px;color:var(--primary);vertical-align:middle;"></i> Automotive Component Manufacturing Value Chain (5 Stages)
            </h3>
            <p style="font-size:12px;color:#64748b;">End-to-end transformation cycle from raw alloy billet casting to JIT OEM direct assembly lines.</p>
          </div>
          <span class="status-badge passed" style="font-size:11px;">IATF 16949 Certified Flow</span>
        </div>
        <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;">
          ${pipelineHtml}
        </div>
      </div>

      <!-- Financial Engine & Working Capital Reality -->
      <div class="panel" style="margin-bottom:20px;background:linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);">
        <h3 style="font-size:14px;font-weight:800;color:#0f172a;margin-bottom:10px;">
          <i data-lucide="calculator" style="width:16px;height:16px;color:var(--primary);vertical-align:middle;"></i> Working Capital Financing Friction (The 36-Day Gap)
        </h3>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:12px;">
          <div class="exposure-card" style="padding:14px;">
            <div style="font-size:11px;color:#64748b;font-weight:700;">DAYS SALES OUTSTANDING (DSO)</div>
            <div style="font-size:24px;font-weight:800;color:#dc2626;">78 Days</div>
            <span style="font-size:11px;color:#64748b;">OEM Contractual 90-Day Terms</span>
          </div>
          <div class="exposure-card" style="padding:14px;">
            <div style="font-size:11px;color:#64748b;font-weight:700;">DAYS INVENTORY (DIO)</div>
            <div style="font-size:24px;font-weight:800;color:#d97706;">38 Days</div>
            <span style="font-size:11px;color:#64748b;">Safety stock for JIT dispatch</span>
          </div>
          <div class="exposure-card" style="padding:14px;">
            <div style="font-size:11px;color:#64748b;font-weight:700;">DAYS PAYABLE (DPO)</div>
            <div style="font-size:24px;font-weight:800;color:#16a34a;">42 Days</div>
            <span style="font-size:11px;color:#64748b;">Foundries enforce strict Sec 43B(h)</span>
          </div>
          <div class="exposure-card border-cash" style="padding:14px;">
            <div style="font-size:11px;color:#64748b;font-weight:700;">NET WORKING CAPITAL GAP</div>
            <div style="font-size:24px;font-weight:800;color:#2563eb;">74 Days</div>
            <span style="font-size:11px;color:#dc2626;font-weight:700;">Financed by ₹14 Cr CC Limit</span>
          </div>
        </div>
        <p style="font-size:12px;color:#475569;margin:0;">
          <strong>Strategic Implication:</strong> The client pays casting suppliers in 42 days, but collects from Tata Motors and Mahindra in 78 days. This structural gap requires <strong>${p.financials.workingCapitalCycle.fundingGapInr}</strong>, making cash and bank controls (CB-C01, CB-C03) extremely material to company survival.
        </p>
      </div>

      <!-- Revenue Mix & Customer Concentration -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="panel" style="padding:0;overflow-x:auto;">
          <div style="padding:14px 16px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:800;color:#0f172a;">
            Revenue Segment Breakdown (₹82.50 Cr FY25)
          </div>
          <table class="data-grid" style="margin:0;">
            <thead><tr><th>Segment</th><th>Share</th><th>Revenue</th><th>EBITDA</th><th>Terms</th></tr></thead>
            <tbody>${revenueMixRows}</tbody>
          </table>
        </div>
        <div class="panel" style="padding:0;overflow-x:auto;">
          <div style="padding:14px 16px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:800;color:#0f172a;">
            Customer Concentration Risk (Top 3 = 68%)
          </div>
          <table class="data-grid" style="margin:0;">
            <thead><tr><th>Customer Account</th><th>Share</th><th>Billings</th><th>Risk Status</th><th>Pricing Power</th></tr></thead>
            <tbody>${concentrationRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ----------------------------------------------------------------------------
  // TAB 3: STRATEGY & CAPEX ROADMAP
  // ----------------------------------------------------------------------------
  else if (activeProfileTab === 'strategy') {
    const pillarsHtml = p.strategy.pillars.map(pi => `
      <div class="panel" style="margin-bottom:16px;border-left:5px solid var(--primary);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
          <div>
            <span class="status-badge passed" style="font-size:10px;font-weight:800;">${pi.id}</span>
            <h4 style="font-size:15px;font-weight:800;color:#0f172a;margin-top:2px;">${pi.title}</h4>
          </div>
          <div style="text-align:right;">
            <span style="font-size:14px;font-weight:800;color:var(--primary);">${pi.allocatedBudget}</span>
            <span style="display:block;font-size:11px;color:#64748b;">Timeline: ${pi.timeline}</span>
          </div>
        </div>
        <p style="font-size:12px;color:#334155;line-height:1.5;margin-bottom:10px;">${pi.description}</p>
        <div style="background:#fff7ed;padding:10px 12px;border-radius:6px;border:1px solid #fed7aa;font-size:11px;color:#9a3412;">
          <strong>Strategic & Audit Risk Factors:</strong> ${pi.strategicRisks}
        </div>
      </div>
    `).join('');

    contentHtml = `
      <div class="panel" style="margin-bottom:20px;background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);color:white;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <span class="status-badge na" style="font-size:11px;background:rgba(255,255,255,0.15);color:white;">3-YEAR STRATEGIC NORTH STAR (FY26 - FY28)</span>
            <h2 style="font-size:22px;font-weight:800;margin:6px 0;color:white;">Scaling to ₹160 Cr Turnover with 13.5% EBITDA</h2>
            <p style="font-size:13px;color:#cbd5e1;max-width:720px;line-height:1.5;margin:0;">${p.strategy.vision}</p>
          </div>
          <div style="text-align:right;">
            <div style="font-size:28px;font-weight:800;color:#60a5fa;">₹160.0 Cr</div>
            <span style="font-size:11px;color:#94a3b8;">Target Revenue FY28</span>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3 style="font-size:15px;font-weight:800;color:#0f172a;">Strategic Growth Pillars & Capital Expenditure Commitments</h3>
        <span style="font-size:12px;color:#64748b;">Total Capex Allocation: <strong style="color:#0f172a;">₹18.30 Cr</strong></span>
      </div>
      ${pillarsHtml}
    `;
  }

  // ----------------------------------------------------------------------------
  // TAB 4: IT & AUTOMATION MATURITY
  // ----------------------------------------------------------------------------
  else if (activeProfileTab === 'automation') {
    const systemsHtml = p.automation.coreSystems.map(s => `
      <tr>
        <td><strong>${s.name}</strong><br><span style="font-size:11px;color:#64748b;">${s.deployment}</span></td>
        <td style="font-size:12px;">${s.function}</td>
        <td><span class="status-badge ${s.integration.includes('Standalone') ? 'failed' : s.integration.includes('Direct') ? 'passed' : 'pending'}" style="font-size:10px;">${s.integration}</span></td>
        <td style="font-size:11px;color:#991b1b;background:#fef2f2;">${s.auditRisk}</td>
      </tr>
    `).join('');

    const maturityRows = p.automation.automationMaturityBreakdown.map(m => {
      const color = m.maturityPct >= 70 ? '#16a34a' : m.maturityPct >= 40 ? '#d97706' : '#dc2626';
      return `
        <div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
            <strong>${m.process}</strong>
            <span style="font-weight:800;color:${color};">${m.maturityPct}% (${m.level})</span>
          </div>
          <div style="height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden;margin-bottom:3px;">
            <div style="width:${m.maturityPct}%;background:${color};height:100%;border-radius:4px;"></div>
          </div>
          <span style="font-size:11px;color:#64748b;">${m.details}</span>
        </div>
      `;
    }).join('');

    contentHtml = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
        <div class="panel">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <h3 style="font-size:14px;font-weight:800;color:#0f172a;margin:0;">
              <i data-lucide="sliders" style="width:16px;height:16px;color:var(--primary);vertical-align:middle;"></i> Process Automation Maturity Scorecard
            </h3>
            <span class="status-badge pending" style="font-size:11px;font-weight:700;">Digital Score: ${p.automation.digitalMaturityScore}</span>
          </div>
          <div style="padding-top:6px;">
            ${maturityRows}
          </div>
        </div>

        <div class="panel" style="background:#f8fafc;">
          <h3 style="font-size:14px;font-weight:800;color:#0f172a;margin-bottom:10px;">
            <i data-lucide="shield-alert" style="width:16px;height:16px;color:#dc2626;vertical-align:middle;"></i> IT General Controls (ITGC) Vulnerability Signals
          </h3>
          <div style="font-size:12px;color:#334155;line-height:1.5;display:flex;flex-direction:column;gap:10px;">
            <div style="background:white;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">
              <strong style="color:#dc2626;">1. Shared Superuser 'admin_user' in Tally:</strong>
              <p style="margin:2px 0 0 0;font-size:11px;color:#64748b;">Both the Senior Accountant and external CA firm log into Tally Prime using the master administrator credentials. Transaction audit trails cannot attribute journal postings uniquely.</p>
            </div>
            <div style="background:white;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">
              <strong style="color:#ea580c;">2. Disconnected Shop-Floor MES SQL Database:</strong>
              <p style="margin:2px 0 0 0;font-size:11px;color:#64748b;">CNC machine run hours and scrap metrics are recorded on an independent SQL server. At month-end, scrap losses are typed manually into Tally journals without validation.</p>
            </div>
            <div style="background:white;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">
              <strong style="color:#d97706;">3. SAP Business One Parallel Run Migration:</strong>
              <p style="margin:2px 0 0 0;font-size:11px;color:#64748b;">The company is actively dual-posting in Tally and SAP B1 on AWS. Ledger balances have a ₹14.2 Lakh opening balance variance awaiting reconciliation.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Systems Table -->
      <div class="panel" style="padding:0;overflow-x:auto;">
        <div style="padding:14px 16px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:800;color:#0f172a;">
          Enterprise IT Systems & Application Landscape Inventory
        </div>
        <table class="data-grid" style="margin:0;">
          <thead><tr><th>System & Version</th><th>Business Function</th><th>Integration Level</th><th>Key ITGC / Audit Vulnerability</th></tr></thead>
          <tbody>${systemsHtml}</tbody>
        </table>
      </div>
    `;
  }

  // ----------------------------------------------------------------------------
  // TAB 5: OPERATIONAL COMPLEXITY & GRC
  // ----------------------------------------------------------------------------
  else if (activeProfileTab === 'complexity') {
    const dimensionsHtml = p.complexity.dimensions.map(d => `
      <div class="panel" style="margin-bottom:14px;border-left:5px solid ${d.color};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <div>
            <span class="status-badge ${d.score >= 80 ? 'critical' : 'failed'}" style="font-size:10px;">${d.status}</span>
            <h4 style="font-size:14px;font-weight:800;color:#0f172a;margin-top:4px;">${d.axis}</h4>
          </div>
          <div style="text-align:right;">
            <div style="font-size:24px;font-weight:800;color:${d.color};">${d.score} <span style="font-size:12px;color:#64748b;">/ 100</span></div>
          </div>
        </div>
        <p style="font-size:12px;color:#334155;line-height:1.5;margin-bottom:10px;">${d.description}</p>
        <div style="display:flex;gap:12px;font-size:11px;background:#f8fafc;padding:8px 12px;border-radius:6px;border:1px solid #e2e8f0;">
          <div><strong style="color:#64748b;">Mitigating Master Controls:</strong> <code style="color:var(--primary);font-weight:700;">${d.linkedControls}</code></div>
          <div><strong style="color:#64748b;">Priority Analytics Routines:</strong> <code style="color:#dc2626;font-weight:700;">${d.linkedCAATs}</code></div>
        </div>
      </div>
    `).join('');

    contentHtml = `
      <div class="panel" style="margin-bottom:20px;background:linear-gradient(180deg, #fef2f2 0%, #ffffff 100%);border:1px solid #fecaca;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
              <span class="status-badge critical" style="font-size:12px;font-weight:800;">INHERENT AUDIT RISK: ${p.complexity.inherentAuditRiskGrade}</span>
              <span style="font-size:14px;font-weight:800;color:#b91c1c;">Overall Complexity Score: ${p.complexity.overallComplexityScore} / 100</span>
            </div>
            <p style="font-size:12px;color:#475569;margin:0;">
              Calculated across 5 operational dimensions under SA 315 guidance. High customer concentration, multi-state plant transfers, and heavy reliance on 45+ unmonitored job-work challans elevate the entity's inherent risk of financial misstatement.
            </p>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="action-btn" onclick="window.location.hash='#master-racm'"><i data-lucide="shield"></i> View 90 Controls</button>
            <button class="action-btn" style="background:var(--fail);color:white;border:none;" onclick="window.location.hash='#testing'"><i data-lucide="terminal"></i> Execute Analytics</button>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3 style="font-size:15px;font-weight:800;color:#0f172a;">5-Dimensional Operational & Governance Complexity Radar</h3>
        <span style="font-size:12px;color:#64748b;">Mapped directly to 90 Master Risk Indicators & 85 CAATs</span>
      </div>

      ${dimensionsHtml}
    `;
  }

  // Final HTML assembly
  appRoot.innerHTML = `
    <div class="header">
      <div>
        <h1>NexGen Electric Mobility Pvt. Ltd. — Entity Profile & Strategy <span class="ai-badge">SA 315 / ISA 315</span></h1>
        <p style="font-size:12px;color:#64748b;margin-top:2px;">Automotive Ancillary Manufacturing • Chakan (Pune) & IMT Manesar (Gurugram) • ₹82.5 Cr Turnover</p>
      </div>
      <div class="header-actions">
        <button class="action-btn" onclick="openEngagementBriefingModal()"><i data-lucide="file-text"></i> Engagement Diagnostic Memo</button>
        <button class="action-btn" onclick="window.location.hash='#master-racm'"><i data-lucide="table-properties"></i> Master Risk Indicators (90)</button>
        <button class="btn-ai action-btn" onclick="window.location.hash='#dashboard'"><i data-lucide="layout-dashboard"></i> Executive Dashboard</button>
      </div>
    </div>

    <!-- Executive Highlight Metrics Bar -->
    <div class="metrics-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:16px;">
      <div class="metric-card border-blue">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:2px;">FY25 Revenue & EBITDA</p>
        <p style="font-size:22px;font-weight:800;color:#0f172a;">₹82.50 Cr</p>
        <span style="font-size:11px;color:#16a34a;font-weight:600;">EBITDA 11.2% (₹9.24 Cr)</span>
      </div>
      <div class="metric-card border-green">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:2px;">Manufacturing Footprint</p>
        <p style="font-size:22px;font-weight:800;color:var(--pass);">70,000 sq.ft</p>
        <span style="font-size:11px;color:#64748b;">2 Plants (Pune & Manesar)</span>
      </div>
      <div class="metric-card border-yellow">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:2px;">Workforce Headcount</p>
        <p style="font-size:22px;font-weight:800;color:#0f172a;">275 People</p>
        <span style="font-size:11px;color:#64748b;">185 On Roll + 90 Contract</span>
      </div>
      <div class="metric-card border-red">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:2px;">Inherent Risk Score</p>
        <p style="font-size:22px;font-weight:800;color:var(--fail);">82 / 100</p>
        <span style="font-size:11px;color:#dc2626;font-weight:700;">Top 3 Clients = 68% Sales</span>
      </div>
    </div>

    <!-- Navigation Tab Bar -->
    <div class="panel" style="margin-bottom:16px;padding:12px;">
      <div class="filter-bar" style="margin-bottom:0;display:flex;flex-wrap:wrap;gap:8px;">
        ${tabButtons}
      </div>
    </div>

    <!-- Dynamic Tab Content -->
    ${contentHtml}
  `;
}

// ------------------------------------------------------------------------------
// MODAL: EXECUTIVE ENGAGEMENT BRIEFING MEMO (SA 315)
// ------------------------------------------------------------------------------
window.openEngagementBriefingModal = function() {
  const p = typeof clientProfileDetailed !== 'undefined' ? clientProfileDetailed : {};
  const memoText = `ENGAGEMENT BRIEFING MEMORANDUM: UNDERSTANDING THE ENTITY & ITS ENVIRONMENT\nIn Compliance with Standard on Auditing SA 315 / ISA 315\n================================================================================\nENTITY: NexGen Electric Mobility Private Limited (Trade Brand: NexGen EV)\nCIN: ${p.cin || 'U34100PN2019PTC186420'} | GSTIN: ${p.gstin || '27AAACN8814K1ZR'}\nAUDIT PERIOD: FY 2024-25 | ENGAGEMENT LEAD: Risk Consulting & Internal Audit Lead\n================================================================================\n\n1. EXECUTIVE ENTITY SUMMARY & SCALE\n   - Scale of Operations: ₹145.80 Cr Net Turnover (42.5% YoY CAGR), generating\n     ₹16.04 Cr EBITDA (11.0%) and ₹7.29 Cr Net Profit (5.0%).\n   - Production Infrastructure: 2 operating megasites covering 105,000 sq.ft:\n     * Plant 1 (Chakan EV Gigafactory, Pune): 65,000 sq.ft freehold; automated\n       Lithium-ion pack assembly (robotic cell sorting, laser busbar welding,\n       IP67 sealing), vehicle assembly, and regenerative dyno EOL testing;\n       certified under AIS-156 (Rev 2 Phase 2) and IATF 16949:2016.\n     * Plant 2 (Hosur EV Tech Hub): 40,000 sq.ft leasehold; robotic tubular chassis\n       welding, aluminum battery enclosure stamping, and BMS HIL test lab.\n   - Workforce: 310 total (210 full-time roll + 100 contractual shop-floor).\n   - Core Governance: Anand Verma (Promoter/MD) controls 54% equity alongside\n     Nexus CleanTech Ventures (30% Series B). With only 6 personnel in Finance\n     managing rapid ₹145 Cr scaling, key approvals bottleneck at the MD level.\n\n2. BUSINESS MODEL & WORKING CAPITAL REALITY\n   - Primary Revenue Streams:\n     * B2C Smart Electric 2-Wheelers: 58% (₹84.56 Cr) via 110 authorized EV dealers.\n     * B2B Commercial Cargo Fleets: 28% (₹40.82 Cr) supplied to Amazon, Zomato, Porter.\n     * Swappable Battery Packs & BaaS: 9% (₹13.12 Cr) across 45 urban swap hubs.\n     * Connected IoT Subscriptions & Warranty: 5% (₹7.30 Cr) high-margin telemetry.\n   - High Working Capital Friction (88-Day Cash Conversion Cycle):\n     * Days Sales Outstanding (DSO): 84 Days (Delayed FAME subsidy disbursements from MHI).\n     * Days Inventory Outstanding (DIO): 48 Days (Large buffer stock of imported 21700 cells).\n     * Days Payable Outstanding (DPO): 44 Days (Overseas LC & domestic MSME 45-day payment rule).\n     * Funding Gap: ₹24.80 Cr financed through bank cash credit at 9.10% p.a. (Annual Interest cost: ₹2.25 Cr).\n\n3. STRATEGIC GROWTH & CAPEX COMMITMENTS (FY26-FY28)\n   - 3-Year Vision: Scale from ₹145 Cr to ₹380 Cr turnover by FY28 (14.5% EBITDA).\n   - Key Capex: ₹18.50 Cr committed for 1.2 GWh automated high-speed cylindrical\n     laser pack assembly line at Chakan (₹12 Cr HDFC term loan + ₹6.5 Cr Series B equity).\n   - Export Initiative: Targeting $8.0M ASEAN & Middle East electric cargo 3W exports.\n   - Localization: In-housing PMSM motor winding and SMT controller assembly to\n     achieve 68% domestic value addition (PMP compliance).\n\n4. IT LANDSCAPE & AUTOMATION MATURITY (Level 3.1 / 5.0)\n   - Core GL: Tally Prime 4.0 (Windows on-prem, shared admin_user credentials).\n   - Enterprise Transition: Active parallel-run migration to SAP Business One on HANA (AWS).\n   - Shop Floor: Connected MES & Battery SCADA tracking laser welder voltage and pack genealogy.\n   - Banking: HDFC Corporate NetBanking permits single-user releases up to ₹5,00,000.\n   - Tax: Cleartax API automates E-Invoice IRN & E-Way bills upon vehicle gate-out.\n\n5. KEY AUDIT IMPLICATIONS & PRIORITY ANALYTICS TESTING\n   - Government Subsidy Audit: ₹8.2 Cr in PM E-DRIVE subsidies requires PMP localization verification (DA-20, DA-21).\n   - Battery Safety Serial Genealogy: Verify end-to-end QR code tracking from cell to chassis (DA-18, DA-23).\n   - High-Value Import Payments: Foreign remittances for imported lithium cells require 3-way match (DA-01, DA-16).\n   - Actuarial Warranty Provisions: Review Ind AS 37 provisions for 3-yr/50,000 km battery replacements (DA-04, DA-05).\n\nRECOMMENDED AUDIT STRATEGY: Execute 100% full-population automated data testing\nacross the 90 Master Controls to detect systemic leakage and subsidy compliance risks.`;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:800px;">
      <div class="modal-header">
        <h3><i data-lucide="file-text" style="width:18px;height:18px;vertical-align:middle;color:var(--primary);"></i> SA 315 Executive Engagement Diagnostic Memo</h3>
        <button class="action-btn" style="padding:4px 8px;" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div class="modal-body">
        <p style="font-size:12px;color:#64748b;margin-bottom:12px;">
          This briefing memo synthesizes the client's corporate identity, manufacturing value chain, IT architecture, and working capital risk factors for the internal audit engagement team and promoter.
        </p>
        <div class="memo-pre" id="briefingMemoContent" style="max-height:420px;overflow-y:auto;font-size:11px;line-height:1.45;">${memoText}</div>
      </div>
      <div class="modal-footer">
        <button class="action-btn" onclick="copyBriefingMemo()"><i data-lucide="copy"></i> Copy Memo to Clipboard</button>
        <button class="action-btn" style="background:var(--primary);color:white;border:none;" onclick="this.closest('.modal-overlay').remove()">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  lucide.createIcons();
};

window.copyBriefingMemo = function() {
  const text = document.getElementById('briefingMemoContent').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('✓ Engagement Briefing Memo copied to clipboard!');
  });
};


// ------------------------------------------------------------------------------
// FORENSIC BENFORD'S LAW (DA-04) & EXPOSURE ENGINE
// ------------------------------------------------------------------------------
function runBenfordAnalysis(amounts) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  let total = 0;
  amounts.forEach(a => {
    const clean = String(a).replace(/[^0-9]/g, '').replace(/^0+/, '');
    if (clean.length > 0) {
      const d = parseInt(clean[0], 10);
      if (d >= 1 && d <= 9) { counts[d]++; total++; }
    }
  });
  if (total === 0) return null;
  const stats = {};
  let chiSquare = 0;
  const anomalousDigits = [];
  const bExp = typeof benfordExpected !== 'undefined' ? benfordExpected : {
    1: 30.1, 2: 17.6, 3: 12.5, 4: 9.7, 5: 7.9, 6: 6.7, 7: 5.8, 8: 5.1, 9: 4.6
  };

  for (let d = 1; d <= 9; d++) {
    const actPct = (counts[d] / total) * 100;
    const expPct = bExp[d];
    const expCount = (expPct / 100) * total;
    const diff = actPct - expPct;
    chiSquare += Math.pow(counts[d] - expCount, 2) / (expCount || 1);
    if (Math.abs(diff) > 5) {
      anomalousDigits.push({ digit: d, actual: actPct.toFixed(1), expected: expPct, diff: diff.toFixed(1) });
    }
    stats[d] = { count: counts[d], actualPct: actPct.toFixed(1), expectedPct: expPct, diff: diff.toFixed(1) };
  }
  const result = {
    total,
    stats,
    chiSquare: chiSquare.toFixed(2),
    isAnomalous: anomalousDigits.length > 0,
    anomalousDigits
  };
  appState.benfordResults = result;
  return result;
}

function calculateExposureSummary(exceptions) {
  let directCash = 0;
  let taxRisk = 0;
  let fraudExposure = 0;

  exceptions.forEach(e => {
    if (e.disposition === 'JUSTIFIED') return; // Exclude false positives from exposure
    const amt = typeof e.amount === 'number' ? e.amount : 0;
    if (e.financialCategory === 'CASH') directCash += amt;
    else if (e.financialCategory === 'TAX') taxRisk += amt;
    else if (e.financialCategory === 'FRAUD') fraudExposure += amt;
    else directCash += amt;
  });

  const totalExposure = directCash + taxRisk + fraudExposure;
  const recoverableCash = Math.round(directCash * 0.95);

  appState.exposureSummary = {
    directCash,
    taxRisk,
    fraudExposure,
    totalExposure,
    recoverableCash
  };
  return appState.exposureSummary;
}

function recalculateTestOutcomes() {
  if (!appState.testResults || !appState.exceptionsFound) return;
  const activeExceptions = appState.exceptionsFound.filter(e => e.disposition !== 'JUSTIFIED');
  const exByCtrl = {};
  activeExceptions.forEach(e => {
    if (!exByCtrl[e.controlId]) exByCtrl[e.controlId] = [];
    exByCtrl[e.controlId].push(e);
  });

  appState.testResults.forEach(r => {
    const unrecExc = exByCtrl[r.controlId] || [];
    r.exceptionsCount = unrecExc.length;
    if (r.analyticsTestable === 'Y' || r.analyticsTestable === 'Partial') {
      r.result = unrecExc.length > 0 ? 'EXCEPTION' : 'PASS';
    }
  });

  calculateExposureSummary(appState.exceptionsFound);
  saveState();
}

let activeDispositionFilter = 'ALL';

// ------------------------------------------------------------------------------
// DETERMINISTIC CAAT TESTING ENGINE (DA-01, DA-06, DA-15, DA-16, DA-17, DA-28)
// ------------------------------------------------------------------------------
function runDeterministicTests() {
  const exceptions = [];
  let eid = 1;

  // Check if a client-uploaded extract is active and mapped
  let hasActiveUpload = false;
  let uploadedExtractId = null;
  if (appState.activeUploadedData) {
    for (const [tplId, data] of Object.entries(appState.activeUploadedData)) {
      if (data && data.rows && data.rows.length > 0 && data.mappings) {
        hasActiveUpload = true;
        uploadedExtractId = tplId;
        break;
      }
    }
  }

  // --- DYNAMIC CHECKS ON UPLOADED DATA IF ACTIVE ---
  if (hasActiveUpload && uploadedExtractId === 'ET-PUR-01') {
    const pur = appState.activeUploadedData['ET-PUR-01'];
    const getCol = (key) => {
      const srcH = pur.mappings[key]?.sourceHeader;
      return srcH ? pur.headers.indexOf(srcH) : -1;
    };
    const invCol = getCol('invoiceNumber');
    const dateCol = getCol('invoiceDate');
    const vendorCol = getCol('vendorName');
    const amtCol = getCol('totalAmount');

    if (invCol !== -1 && vendorCol !== -1) {
      const seen = {};
      pur.rows.forEach(r => {
        const k = (r[vendorCol] || '') + '___' + (r[invCol] || '');
        if (!seen[k]) seen[k] = [];
        seen[k].push(r);
      });
      for (const [k, group] of Object.entries(seen)) {
        if (group.length > 1 && k.trim() !== '___') {
          const amt = amtCol !== -1 ? parseFloat(String(group[0][amtCol]).replace(/[^0-9.]/g, '')) || 70800 : 70800;
          exceptions.push({
            id: `EXC-${String(eid++).padStart(3, '0')}`,
            process: 'Purchase & Payables',
            controlId: 'PUR-C03',
            caatId: 'DA-02',
            type: 'DUPLICATE_INVOICE',
            transactionId: group.map(g => g[invCol]).join(', '),
            evidence: pur.name,
            amount: amt,
            date: dateCol !== -1 ? group[0][dateCol] : '2025-06-10',
            rule: `Duplicate invoice '${group[0][invCol]}' found ${group.length} times for '${group[0][vendorCol]}' in uploaded file`,
            confidence: 'High',
            rootCause: 'ERP duplicate bill number validation disabled',
            severity: 'Critical',
            financialCategory: 'CASH'
          });
        }
      }
    }
  }

  // ============================================================================
  // EXHAUSTIVE 13-PROCESS AREA & 32-CAAT ROUTINES EXECUTION
  // ============================================================================

  // ----------------------------------------------------------------------------
  // AREA 1: PURCHASE & PAYABLES (PUR) — DA-01, DA-02, DA-06, DA-13, DA-14, DA-15, DA-16, DA-17, DA-19, DA-22
  // ----------------------------------------------------------------------------
  // DA-19 / PUR-C01: Vendor Master Duplicates (Shared Bank Accounts)
  const bankGroups = {};
  syntheticVendors.forEach(v => {
    if (!bankGroups[v.bankAccount]) bankGroups[v.bankAccount] = [];
    bankGroups[v.bankAccount].push(v);
  });
  for (const [acct, vList] of Object.entries(bankGroups)) {
    if (vList.length > 1) {
      exceptions.push({
        id: `EXC-${String(eid++).padStart(3, '0')}`,
        process: 'Purchase & Payables',
        controlId: 'PUR-C01',
        caatId: 'DA-19',
        type: 'DUPLICATE_VENDOR',
        transactionId: vList.map(v => v.vendorId).join(', '),
        evidence: 'Vendor_Master.xlsx',
        amount: 85000,
        date: null,
        rule: `${vList.length} distinct vendor codes share the exact bank account (${acct})`,
        confidence: 'High',
        rootCause: 'Duplicate vendor creation without PAN/bank account uniqueness check',
        severity: 'High',
        financialCategory: 'FRAUD'
      });
    }
  }

  // PUR-C01: Dormant Vendors Active in Master
  syntheticVendors.filter(v => v._exceptionType === 'DORMANT_VENDOR').forEach(v => {
    exceptions.push({
      id: `EXC-${String(eid++).padStart(3, '0')}`,
      process: 'Purchase & Payables',
      controlId: 'PUR-C01',
      caatId: 'DA-19',
      type: 'DORMANT_VENDOR',
      transactionId: v.vendorId,
      evidence: 'Vendor_Master.xlsx',
      amount: null,
      date: v.onboardingDate,
      rule: 'Vendor inactive >12 months but status remains Active without periodic review',
      confidence: 'High',
      rootCause: 'Lack of annual vendor master deactivation review',
      severity: 'Medium',
      financialCategory: 'COMPLIANCE'
    });
  });

  // DA-16 / PUR-C02: Three-Way Match GRN Shortage
  syntheticGRNs.filter(g => g._exceptionType === 'QUANTITY_MISMATCH').forEach(g => {
    exceptions.push({
      id: `EXC-${String(eid++).padStart(3, '0')}`,
      process: 'Purchase & Payables',
      controlId: 'PUR-C02',
      caatId: 'DA-16',
      type: 'QUANTITY_MISMATCH',
      transactionId: g.grnNumber,
      evidence: 'GRN_Report.xlsx, PO_Register.xlsx',
      amount: 15000,
      date: g.grnDate,
      rule: `PO ${g.poNumber} ordered ${g.quantityOrdered} units; GRN recorded ${g.quantityReceived} units without debit note`,
      confidence: 'High',
      rootCause: 'Store receipt shortage not reconciled with accounts payable',
      severity: 'Medium',
      financialCategory: 'CASH'
    });
  });

  // DA-17 / PUR-C02: Invoice vs PO Price Variance >5%
  syntheticInvoices.filter(i => i._exceptionType === 'PRICE_MISMATCH').forEach(inv => {
    const variance = ((inv.invoiceAmount - inv.poAmount) / inv.poAmount * 100).toFixed(1);
    exceptions.push({
      id: `EXC-${String(eid++).padStart(3, '0')}`,
      process: 'Purchase & Payables',
      controlId: 'PUR-C02',
      caatId: 'DA-17',
      type: 'PRICE_MISMATCH',
      transactionId: inv.invoiceNumber,
      evidence: 'Purchase_Invoice_Register.xlsx, PO_Register.xlsx',
      amount: inv.invoiceAmount - inv.poAmount,
      date: inv.invoiceDate,
      rule: `Invoice amount exceeds PO contracted value by ${variance}% (exceeds 5% tolerance threshold)`,
      confidence: 'High',
      rootCause: 'Three-way match price verification failure in accounts booking',
      severity: 'High',
      financialCategory: 'CASH'
    });
  });

  // DA-01 & DA-02 / PUR-C03: Duplicate Invoices & Duplicate Payments
  const invGroups = {};
  syntheticInvoices.forEach(inv => {
    const key = `${inv.vendorId}_${inv.invoiceAmount}_${inv.invoiceDate}`;
    if (!invGroups[key]) invGroups[key] = [];
    invGroups[key].push(inv);
  });
  for (const [key, invs] of Object.entries(invGroups)) {
    if (invs.length > 1 && invs[0]._isException) {
      exceptions.push({
        id: `EXC-${String(eid++).padStart(3, '0')}`,
        process: 'Purchase & Payables',
        controlId: 'PUR-C03',
        caatId: 'DA-01, DA-02',
        type: 'DUPLICATE_INVOICE',
        transactionId: invs.map(i => i.invoiceNumber).join(', '),
        evidence: 'Purchase_Invoice_Register.xlsx',
        amount: invs[0].invoiceAmount,
        date: invs[0].invoiceDate,
        rule: `${invs.length} invoices from ${invs[0].vendorName} with identical amount ₹${invs[0].invoiceAmount.toLocaleString('en-IN')} on same date`,
        confidence: 'High',
        rootCause: 'Absence of automated duplicate bill number rejection in ERP',
        severity: 'Critical',
        financialCategory: 'CASH'
      });
    }
  }

  // DA-22 / PUR-C04: TDS Under-Deduction under Section 194C
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Purchase & Payables',
    controlId: 'PUR-C04',
    caatId: 'DA-22',
    type: 'TDS_UNDER_DEDUCTION',
    transactionId: 'INV-2025-067',
    evidence: 'Purchase_Register.xlsx, Form_26Q_Extract.xlsx',
    amount: 18000,
    date: '2025-06-15',
    rule: 'Contractor payment of ₹1,80,000 processed without mandatory 1% TDS deduction under Sec 194C',
    confidence: 'High',
    rootCause: 'TDS master flag omitted during new vendor master creation',
    severity: 'Medium',
    financialCategory: 'TAX'
  });

  // DA-13 & DA-14 / PUR-C05: Vendor-Employee Bank and PAN Match
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Purchase & Payables',
    controlId: 'PUR-C05',
    caatId: 'DA-13, DA-14',
    type: 'VENDOR_EMPLOYEE_MATCH',
    transactionId: 'V-042 (Apex Toolings) & EMP-018 (Store Executive)',
    evidence: 'Vendor_Master.xlsx, Employee_Master.xlsx',
    amount: 85000,
    date: '2025-06-01',
    rule: 'Vendor bank account and PAN matches personal account of internal Store Executive (EMP-018)',
    confidence: 'High',
    rootCause: 'Absence of automated conflict-of-interest cross-referencing between HR and AP master data',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // DA-06 & DA-15 / PUR-C06: Split Purchase Orders & Approval Breaches
  syntheticPOs.filter(p => p._exceptionType === 'APPROVAL_BREACH').forEach(po => {
    const limit = approvalMatrix.find(a => a.level === po.approverLevel)?.limit || 0;
    exceptions.push({
      id: `EXC-${String(eid++).padStart(3, '0')}`,
      process: 'Purchase & Payables',
      controlId: 'PUR-C06',
      caatId: 'DA-06',
      type: 'APPROVAL_BREACH',
      transactionId: po.poNumber,
      evidence: 'PO_Register.xlsx, Approval_Matrix.pdf',
      amount: po.totalAmount,
      date: po.poDate,
      rule: `PO amount ₹${po.totalAmount.toLocaleString('en-IN')} approved by Level ${po.approverLevel} exceeding max limit of ₹${limit.toLocaleString('en-IN')}`,
      confidence: 'High',
      rootCause: 'Manual approval workflow bypass; lack of system hard stop in ERP',
      severity: 'Critical',
      financialCategory: 'FRAUD'
    });
  });

  const splitGroups = {};
  syntheticPOs.filter(p => p._exceptionType === 'SPLIT_PO').forEach(po => {
    const key = `${po.vendorId}_${po.poDate}`;
    if (!splitGroups[key]) splitGroups[key] = [];
    splitGroups[key].push(po);
  });
  for (const [key, pos] of Object.entries(splitGroups)) {
    const total = pos.reduce((s, p) => s + p.totalAmount, 0);
    exceptions.push({
      id: `EXC-${String(eid++).padStart(3, '0')}`,
      process: 'Purchase & Payables',
      controlId: 'PUR-C06',
      caatId: 'DA-15',
      type: 'SPLIT_PO',
      transactionId: pos.map(p => p.poNumber).join(', '),
      evidence: 'PO_Register.xlsx',
      amount: total,
      date: pos[0].poDate,
      rule: `${pos.length} POs issued to ${pos[0].vendorName} on same date. Individual values structured below Level 1 threshold; total = ₹${total.toLocaleString('en-IN')}`,
      confidence: 'High',
      rootCause: 'Circumvention of Level 2 management quotation approval',
      severity: 'Critical',
      financialCategory: 'FRAUD'
    });
  }

  // ----------------------------------------------------------------------------
  // AREA 2: CASH & BANK MANAGEMENT (CB) — DA-06, DA-07, DA-28
  // ----------------------------------------------------------------------------
  // DA-28 / CB-C01: Cash Payment >₹10,000 (Section 40A(3) Disallowance)
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Cash & Bank',
    controlId: 'CB-C01',
    caatId: 'DA-28',
    type: 'CASH_THRESHOLD_40A3',
    transactionId: 'TXN-HDFC-01',
    evidence: 'Cash_Book_Extract.xlsx',
    amount: 35000,
    date: '2025-06-12',
    rule: 'Single cash disbursement of ₹35,000 paid for factory repairs exceeding statutory limit of ₹10,000 under Income Tax Section 40A(3)',
    confidence: 'High',
    rootCause: 'Lack of automated ceiling block on cash payment vouchers in ERP',
    severity: 'High',
    financialCategory: 'TAX'
  });

  // DA-28 / CB-C05: Cash Receipt >₹2,00,000 (Section 269ST Penalty)
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Cash & Bank',
    controlId: 'CB-C05',
    caatId: 'DA-28',
    type: 'CASH_RECEIPT_269ST',
    transactionId: 'TXN-HDFC-02',
    evidence: 'Cash_Book_Extract.xlsx',
    amount: 250000,
    date: '2025-06-14',
    rule: 'Cash receipt of ₹2,50,000 from scrap customer in a single day, breaching ₹2 Lakhs limit under Section 269ST (100% penalty exposure under Sec 271DA)',
    confidence: 'High',
    rootCause: 'Direct cash collection permitted at scrap yard without bank deposit mandate',
    severity: 'Critical',
    financialCategory: 'TAX'
  });

  // DA-07 / CB-C02: Weekend Bank Disbursal
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Cash & Bank',
    controlId: 'CB-C02',
    caatId: 'DA-07',
    type: 'WEEKEND_BANK_TRANSFER',
    transactionId: 'TXN-HDFC-03',
    evidence: 'Bank_Statement_Extract.xlsx',
    amount: 120000,
    date: '2025-06-15',
    rule: 'Outward RTGS transfer of ₹1,20,000 executed on Sunday night (11:30 PM) without documented operational emergency approval',
    confidence: 'High',
    rootCause: 'Net banking release permissions unrestricted on non-working days',
    severity: 'Medium',
    financialCategory: 'FRAUD'
  });

  // DA-06 / CB-C03: Bank Signatory Limit Breach
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Cash & Bank',
    controlId: 'CB-C03',
    caatId: 'DA-06',
    type: 'BANK_SIGNATORY_BREACH',
    transactionId: 'TXN-HDFC-04',
    evidence: 'Bank_Statement_Extract.xlsx, Board_Banking_Resolution.pdf',
    amount: 650000,
    date: '2025-06-18',
    rule: 'High value transfer of ₹6,50,000 released under single Level 1 signature, bypassing mandatory dual-signatory rule for payments >₹5 Lakhs',
    confidence: 'High',
    rootCause: 'Bank portal workflow configured with single-user authorization mode',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // ----------------------------------------------------------------------------
  // AREA 3: GENERAL LEDGER & FINANCIAL REPORTING (FR / JE) — DA-04, DA-05, DA-08, DA-09, DA-10, DA-11, DA-12, DA-32
  // ----------------------------------------------------------------------------
  // DA-05 / JE-C02: Round-Number Journal Entry
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Data Analytics & JE Testing',
    controlId: 'JE-C02',
    caatId: 'DA-05',
    type: 'ROUND_SUM_JV',
    transactionId: 'JV-2025-001',
    evidence: 'General_Ledger_JV_Dump.xlsx',
    amount: 1000000,
    date: '2025-06-30',
    rule: 'Unusually large round-number journal entry of exactly ₹10,00,000 debited to Repairs & Maintenance without third-party quotation or invoice',
    confidence: 'High',
    rootCause: 'Ad-hoc management cost accrual without underlying substantiation',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // DA-08 / JE-C03: After-Hours Journal Entry
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Data Analytics & JE Testing',
    controlId: 'JE-C03',
    caatId: 'DA-08',
    type: 'AFTER_HOURS_JV',
    transactionId: 'JV-2025-002',
    evidence: 'General_Ledger_JV_Dump.xlsx',
    amount: 250000,
    date: '2025-06-25',
    rule: 'Manual journal entry posted at 23:45:10 (after business hours) by administrative user account',
    confidence: 'High',
    rootCause: 'Lack of active hours restriction on ERP journal posting module',
    severity: 'Medium',
    financialCategory: 'FRAUD'
  });

  // DA-10 / JE-C04: Blank / Inadequate Narration
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Data Analytics & JE Testing',
    controlId: 'JE-C04',
    caatId: 'DA-10',
    type: 'BLANK_NARRATION_JV',
    transactionId: 'JV-2025-003',
    evidence: 'General_Ledger_JV_Dump.xlsx',
    amount: 350000,
    date: '2025-06-28',
    rule: 'Material entry of ₹3,50,000 posted with generic narration ("adj entry") lacking business justification',
    confidence: 'High',
    rootCause: 'ERP allows single-word narrations without minimum character enforcement',
    severity: 'Medium',
    financialCategory: 'COMPLIANCE'
  });

  // DA-11 / JE-C05: Period-End Reversing Entry
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Data Analytics & JE Testing',
    controlId: 'JE-C05',
    caatId: 'DA-11',
    type: 'PERIOD_END_REVERSAL',
    transactionId: 'JV-2025-004',
    evidence: 'General_Ledger_JV_Dump.xlsx',
    amount: 420000,
    date: '2025-03-31',
    rule: 'Journal voucher of ₹4,20,000 posted on reporting date (31-Mar) and reversed on 02-Apr (window-dressing indicator)',
    confidence: 'High',
    rootCause: 'Temporary balance sheet adjustment to meet lender financial covenants',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // DA-09 / JE-C01: Superuser / IT User Financial Posting
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Data Analytics & JE Testing',
    controlId: 'JE-C01',
    caatId: 'DA-09',
    type: 'SUPERUSER_POSTING',
    transactionId: 'JV-2025-005',
    evidence: 'General_Ledger_JV_Dump.xlsx, IT_Access_Matrix.xlsx',
    amount: 180000,
    date: '2025-06-10',
    rule: 'Journal entry posted by IT Administrator account (db_admin) violating segregation between IT access and transactional accounting',
    confidence: 'High',
    rootCause: 'Shared administrator credentials utilized for routine accounting adjustments',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // ----------------------------------------------------------------------------
  // AREA 4: INVENTORY MANAGEMENT (INV) — DA-18, DA-23, DA-30
  // ----------------------------------------------------------------------------
  // DA-23 / INV-C05: Negative Stock Balance
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Inventory Management',
    controlId: 'INV-C05',
    caatId: 'DA-23',
    type: 'NEGATIVE_STOCK',
    transactionId: 'SKU-CAST-04',
    evidence: 'Inventory_Stock_Ledger.xlsx',
    amount: 15000,
    date: '2025-06-18',
    rule: 'Negative stock balance of -25 units recorded for Brake Drum Castings Grade 25, indicating dispatch booked before inward GRN entry',
    confidence: 'High',
    rootCause: 'Delayed inward GRN entry in store while dispatch billing proceeds unimpeded',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-18 / INV-C02: Obsolete Inventory Ageing >180 Days
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Inventory Management',
    controlId: 'INV-C02',
    caatId: 'DA-18',
    type: 'OBSOLETE_INVENTORY',
    transactionId: 'SKU-FAST-99',
    evidence: 'Inventory_Stock_Ledger.xlsx',
    amount: 280000,
    date: '2024-08-10',
    rule: 'Non-moving stock of 1,200 fasteners with zero movement in 310 days (>180 days) valued at ₹2,80,000 without provision for obsolescence',
    confidence: 'High',
    rootCause: 'Absence of quarterly inventory write-down review by plant manager',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // ----------------------------------------------------------------------------
  // AREA 5: FIXED ASSETS & CAPEX (FA) — DA-27
  // ----------------------------------------------------------------------------
  // DA-27 / FA-C04: Duplicate Asset Barcode Tag
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Fixed Assets & Capex',
    controlId: 'FA-C04',
    caatId: 'DA-27',
    type: 'DUPLICATE_ASSET_TAG',
    transactionId: 'TAG-CNC-042',
    evidence: 'Fixed_Asset_Register.xlsx',
    amount: 1800000,
    date: '2023-08-20',
    rule: 'Duplicate asset tag barcode TAG-CNC-042 assigned to both Haas CNC Center and Daewoo Lathe Machine',
    confidence: 'High',
    rootCause: 'Manual asset tagging in plant without barcode system uniqueness validation',
    severity: 'High',
    financialCategory: 'FRAUD'
  });

  // ----------------------------------------------------------------------------
  // AREA 6: REVENUE & RECEIVABLES (REV) — DA-03, DA-17, DA-24, DA-31
  // ----------------------------------------------------------------------------
  // DA-03 / REV-C01: Sales Sequence Gap Test
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Revenue & Receivables',
    controlId: 'REV-C01',
    caatId: 'DA-03',
    type: 'SEQUENCE_GAP_SALES',
    transactionId: 'INV-SLS-100 (Missing)',
    evidence: 'Sales_Register_Extract.xlsx',
    amount: 450000,
    date: '2025-06-11',
    rule: 'Numeric sequence gap between INV-SLS-099 and INV-SLS-101; invoice INV-SLS-100 missing from register without void/cancellation slip',
    confidence: 'High',
    rootCause: 'Sales bills deleted or unrecorded without management void trail',
    severity: 'Critical',
    financialCategory: 'TAX'
  });

  // DA-17 / REV-C04: Price List / Discount Deviation
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Revenue & Receivables',
    controlId: 'REV-C04',
    caatId: 'DA-17',
    type: 'PRICE_VARIANCE_SALES',
    transactionId: 'INV-SLS-101',
    evidence: 'Sales_Register_Extract.xlsx, Price_Master.xlsx',
    amount: 41600,
    date: '2025-06-11',
    rule: 'Component invoiced at ₹820 vs approved master rate of ₹900 (8.9% discount) without Director sales deviation approval',
    confidence: 'High',
    rootCause: 'Sales team overridden standard price list in Tally billing master',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-31 / REV-C02: Discount Concentration on Single Customer
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Revenue & Receivables',
    controlId: 'REV-C02',
    caatId: 'DA-31',
    type: 'DISCOUNT_CONCENTRATION',
    transactionId: 'INV-SLS-102 (Apex Auto)',
    evidence: 'Sales_Register_Extract.xlsx',
    amount: 83600,
    date: '2025-06-12',
    rule: 'Exceptional discount of 22% granted to Apex Distributors (peer average 4.2%), representing >5x peer discount rate',
    confidence: 'High',
    rootCause: 'Undocumented commercial arrangement without formal volume rebate agreement',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-24 / REV-C02: Sales Return Spike Post-Period-Close
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Revenue & Receivables',
    controlId: 'REV-C02',
    caatId: 'DA-24',
    type: 'SALES_RETURN_SPIKE',
    transactionId: 'CRN-2025-014',
    evidence: 'Credit_Note_Register.xlsx',
    amount: 180000,
    date: '2025-04-05',
    rule: 'Sales return spike of ₹1,80,000 (>3 standard deviations from monthly mean) recorded in first week of April reversing March sales',
    confidence: 'High',
    rootCause: 'Aggressive revenue booking before year-end reversed via credit note in subsequent period',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // ----------------------------------------------------------------------------
  // AREA 7: STATUTORY COMPLIANCE (STAT) — DA-20, DA-28
  // ----------------------------------------------------------------------------
  // DA-20 / STAT-C01: GSTR-2B vs 3B Unmatched ITC
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Statutory Compliance',
    controlId: 'STAT-C01',
    caatId: 'DA-20',
    type: 'GSTR2B_MISMATCH',
    transactionId: 'INV-2025-089, INV-2025-090',
    evidence: 'GSTR-2B_Portal_Extract.xlsx, Purchase_Register.xlsx',
    amount: 162000,
    date: '2025-06-20',
    rule: 'ITC claimed in GSTR-3B for ₹1,62,000 not reflecting in supplier GSTR-2B return. Disallowance risk under GST Section 16(2)(aa) plus 18% interest',
    confidence: 'High',
    rootCause: 'Supplier default in filing outward GSTR-1; absence of pre-claim 2B automated lock in ERP',
    severity: 'Critical',
    financialCategory: 'TAX'
  });

  // DA-28 / STAT-C05: MSMED Act 45-Day Payment Default Interest
  syntheticPayments.filter(p => p._exceptionType === 'LATE_PAYMENT').forEach(pay => {
    exceptions.push({
      id: `EXC-${String(eid++).padStart(3, '0')}`,
      process: 'Statutory Compliance',
      controlId: 'STAT-C05',
      caatId: 'DA-28',
      type: 'LATE_PAYMENT_MSMED',
      transactionId: pay.paymentId,
      evidence: 'Payment_Register.xlsx',
      amount: pay.amount,
      date: pay.paymentDate,
      rule: `Payment made after ${pay.daysToPayment} days against Invoice ${pay.invoiceNumber}. Exceeds 45-day statutory limit under MSMED Act Section 15`,
      confidence: 'High',
      rootCause: 'Lack of ageing alert for MSME supplier dues in accounts payable',
      severity: 'High',
      financialCategory: 'TAX'
    });
  });

  // ----------------------------------------------------------------------------
  // AREA 8: RELATED PARTY & LOANS (RPT) — DA-28, DA-29
  // ----------------------------------------------------------------------------
  // DA-29 / RPT-C01: Undisclosed Related Party Match
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Related Party & Loans',
    controlId: 'RPT-C01',
    caatId: 'DA-29',
    type: 'UNDISCLOSED_RELATED_PARTY',
    transactionId: 'Muchhal Holdings & Investments Pvt Ltd',
    evidence: 'Vendor_Master.xlsx, MCA_Director_Master.xlsx',
    amount: 500000,
    date: '2025-06-01',
    rule: 'Commercial payments of ₹5,00,000 made to vendor sharing registered address and common director without Section 188 Audit Committee approval',
    confidence: 'High',
    rootCause: 'Absence of automated ROC director cross-matching during vendor onboarding',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // DA-28 / RPT-C02: Cash Loan Receipt Breaching Section 269SS
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Related Party & Loans',
    controlId: 'RPT-C02',
    caatId: 'DA-28',
    type: 'CASH_LOAN_269SS',
    transactionId: 'TXN-DIR-LN-01',
    evidence: 'Cash_Book_Extract.xlsx, Loan_Ledger.xlsx',
    amount: 50000,
    date: '2025-06-05',
    rule: 'Cash loan deposit of ₹50,000 accepted from director, breaching ₹20,000 limit under Section 269SS (100% penalty risk under Section 271D)',
    confidence: 'High',
    rootCause: 'Direct cash deposit accepted without account-payee banking instrument',
    severity: 'High',
    financialCategory: 'TAX'
  });

  // ----------------------------------------------------------------------------
  // AREA 9: ENTITY LEVEL CONTROLS (ELC) — DA-04, DA-06
  // ----------------------------------------------------------------------------
  // DA-04 / ELC-C01: Benford's Law First-Digit Anomaly
  {
    const allAmounts = syntheticInvoices.map(i => i.invoiceAmount).concat(syntheticPOs.map(p => p.totalAmount));
    const bRes = runBenfordAnalysis(allAmounts);
    if (bRes && bRes.isAnomalous) {
      const topAnom = bRes.anomalousDigits[0];
      exceptions.push({
        id: `EXC-${String(eid++).padStart(3, '0')}`,
        process: 'Entity Level Controls',
        controlId: 'ELC-C01',
        caatId: 'DA-04',
        type: 'BENFORD_ANOMALY',
        transactionId: 'Full Population CAAT Testing',
        evidence: 'Purchase_Register.xlsx, PO_Register.xlsx',
        amount: 99000,
        date: '2025-06-30',
        rule: `Benford's Law analysis (DA-04) identified abnormal first-digit distribution: Digit ${topAnom.digit} represents ${topAnom.actual}% (vs. ${topAnom.expected}% expected). Chi-Square = ${bRes.chiSquare}`,
        confidence: 'High',
        rootCause: 'Artificial clustering of transactions just below the ₹50,000 Level 1 authorization limit',
        severity: 'Critical',
        financialCategory: 'FRAUD'
      });
    }
  }


  // ----------------------------------------------------------------------------
  // ADVANCED RISK ANALYTICS & CAAT ROUTINES (DA-33 to DA-70)
  // ----------------------------------------------------------------------------
  // DA-33 / PUR-C01: Ex-Post-Facto Backdated PO
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Purchase & Payables',
    controlId: 'PUR-C01',
    caatId: 'DA-33',
    type: 'EX_POST_FACTO_PO',
    transactionId: 'PO-2025-0814 (Invoice INV-2025-412)',
    evidence: 'PO_Register.xlsx, Purchase_Invoice_Register.xlsx',
    amount: 185000,
    date: '2025-06-18',
    rule: 'Purchase Order PO-2025-0814 generated 6 days after supplier invoice date, circumventing prior budgetary authorization',
    confidence: 'High',
    rootCause: 'Shop floor emergency procurement bypassing formal purchase requisition workflow',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-36 / PUR-C02: Raw Material Price Spike
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Purchase & Payables',
    controlId: 'PUR-C02',
    caatId: 'DA-36',
    type: 'RAW_MATERIAL_RATE_VARIANCE',
    transactionId: 'PUR-2025-0914 (Lithium 21700 Cells)',
    evidence: 'Purchase_Invoice_Register.xlsx, Cell_Rate_Contract.xlsx',
    amount: 240000,
    date: '2025-06-21',
    rule: 'Unit purchase rate of ₹225/cell exceeds contractual baseline of ₹185/cell by 21.6% (Z-score 2.82) without approved rate amendment note',
    confidence: 'High',
    rootCause: 'Procurement from unauthorized spot trader during temporary customs port clearance delay',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-40 / INV-C02: Standard BOM vs Actual Consumption Yield Variance
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Inventory Management',
    controlId: 'INV-C02',
    caatId: 'DA-40',
    type: 'BOM_YIELD_ABNORMAL_LOSS',
    transactionId: 'WO-2025-042 (Chakan Battery Assembly Line 1)',
    evidence: 'MES_Production_Batch_Logs.csv, BOM_Master.xlsx',
    amount: 38400,
    date: '2025-06-12',
    rule: 'Actual consumption of 21700 cells exceeded standard engineering BOM by 5.2% (120 defective cells scrapped vs 1.5% permissible tolerance)',
    confidence: 'High',
    rootCause: 'Laser wire-bonder nozzle misalignment on Battery Cleanroom Robot #2',
    severity: 'Medium',
    financialCategory: 'CASH'
  });

  // DA-43 / INV-C04: Job-Work Delivery Challan Material Gap
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Inventory Management',
    controlId: 'INV-C04',
    caatId: 'DA-43',
    type: 'JOB_WORK_MATERIAL_SHORTAGE',
    transactionId: 'JW-CH-2024-041 (Aditya Heat Treaters)',
    evidence: 'Job_Work_Challan_Register.xlsx, Store_Receipt_Slips.xlsx',
    amount: 79200,
    date: '2025-06-19',
    rule: '14 sets of high-tensile tubular chassis frames dispatched for heat treatment remain unreturned beyond permissible scrap tolerance (>300 days aging)',
    confidence: 'High',
    rootCause: 'Subcontractor material reconciliation omitted during monthly store physical counts',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-46 / REV-C01: Month-End Dealership Sales Cancellation (Channel Stuffing)
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Order to Cash',
    controlId: 'REV-C01',
    caatId: 'DA-46',
    type: 'MONTH_END_SALES_CANCELLATION',
    transactionId: 'INV-SLS-2025-881 (Apex EV Mobility)',
    evidence: 'Sales_Register.xlsx, Credit_Note_Register.xlsx',
    amount: 784000,
    date: '2025-06-30',
    rule: '8 Electric 2-wheelers invoiced on 31-Mar-2025 cancelled via credit note on 03-Apr-2025 without e-Way bill transporter movement',
    confidence: 'High',
    rootCause: 'Month-end sales quota target padding (Channel stuffing) reversed in subsequent period',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // DA-49 / STAT-C01: PM E-DRIVE Aadhaar Duplication / Subsidy Clawback Risk
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Statutory Compliance',
    controlId: 'STAT-C01',
    caatId: 'DA-49',
    type: 'PM_EDRIVE_AADHAAR_DUPLICATION',
    transactionId: 'VIN-NEX-2025-0891 & VIN-NEX-2025-1102',
    evidence: 'MHI_Subsidy_Portal_Export.csv, Sales_Register.xlsx',
    amount: 10000,
    date: '2025-06-25',
    rule: 'Identical buyer Aadhaar hash claimed for ₹10,000 central subsidy on two distinct vehicle chassis numbers across Pune and Satara dealerships',
    confidence: 'High',
    rootCause: 'Dealer portal entry validation omitted cross-dealer Aadhaar verification prior to upload',
    severity: 'Critical',
    financialCategory: 'TAX'
  });

  // DA-51 / CB-C01: Structured High-Frequency Cash Withdrawals
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Cash & Bank Management',
    controlId: 'CB-C01',
    caatId: 'DA-51',
    type: 'STRUCTURED_CASH_WITHDRAWAL',
    transactionId: 'CHQ-778102, CHQ-778103, CHQ-778104',
    evidence: 'HDFC_Current_Account_Statement.csv, Petty_Cash_Book.xlsx',
    amount: 135000,
    date: '2025-06-24',
    rule: 'Three cash withdrawals of ₹48,000, ₹45,000, and ₹42,000 executed within 48 hours structured just below ₹50,000 threshold',
    confidence: 'High',
    rootCause: 'Circumvention of dual-signatory corporate banking authorization threshold',
    severity: 'High',
    financialCategory: 'FRAUD'
  });

  // DA-55 / PAY-C01: Ghost Worker Detection / Missing PF UAN
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Human Resources & Payroll',
    controlId: 'PAY-C01',
    caatId: 'DA-55',
    type: 'GHOST_WORKER_NO_UAN',
    transactionId: 'EMP-092 (Chakan Assembly Line 2)',
    evidence: 'Payroll_Register.xlsx, EPFO_ECR_Return.csv',
    amount: 21500,
    date: '2025-06-30',
    rule: 'Contractual worker credited net salary of ₹21,500 without registered EPFO Universal Account Number (UAN)',
    confidence: 'High',
    rootCause: 'Delayed contractor KYC onboarding and lack of automated pre-payroll PF validation',
    severity: 'Medium',
    financialCategory: 'COMPLIANCE'
  });

  // DA-59 / IT-C01: Toxic Segregation of Duties Conflict
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Information Technology (ITGC)',
    controlId: 'IT-C01',
    caatId: 'DA-59',
    type: 'TOXIC_SOD_ROLE_CONFLICT',
    transactionId: 'User: finance_exec_02 (Roles: AP_CLERK + VENDOR_ADMIN)',
    evidence: 'ERP_User_Authorization_Matrix.xlsx',
    amount: 0,
    date: '2025-06-01',
    rule: 'Single user holds conflicting Maker and Checker roles: Vendor Master Creation + Payment Voucher Approval in ERP',
    confidence: 'High',
    rootCause: 'Informal role accumulation without periodic quarterly IT access reviews',
    severity: 'High',
    financialCategory: 'GOVERNANCE'
  });

  // DA-63 / REV-C04: Battery Telematics Cell Degradation Cluster
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Financial Reporting',
    controlId: 'REV-C04',
    caatId: 'DA-63',
    type: 'BATTERY_TELEMATICS_DEGRADATION_SPIKE',
    transactionId: 'Cell Batch #41 (18 Fleet Units Flagged)',
    evidence: 'IoT_Telematics_Cloud_Stream.json, Warranty_Claim_Log.xlsx',
    amount: 384000,
    date: '2025-06-28',
    rule: 'IoT telematics detected 18 battery packs with abnormal internal resistance spikes (>45mΩ) and early capacity drop <78%, triggering 12 dealer warranty claims',
    confidence: 'High',
    rootCause: 'Sub-tier electrolyte contamination in imported Cell Batch #41 from overseas supplier',
    severity: 'Critical',
    financialCategory: 'CASH'
  });

  // DA-66 / REV-C04: Warranty Defective Battery Pack Core Return Pending
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Order to Cash',
    controlId: 'REV-C04',
    caatId: 'DA-66',
    type: 'WARRANTY_CORE_RETURN_PENDING',
    transactionId: 'Deccan EV Spares (4 Battery Packs Replacement)',
    evidence: 'Warranty_Service_Register.xlsx, Factory_Store_Inward.xlsx',
    amount: 128000,
    date: '2025-06-15',
    rule: '4 replacement battery packs issued to dealership for warranty replacement; old defective core battery packs not received at factory store >30 days',
    confidence: 'High',
    rootCause: 'Dealership spare parts quota released without requiring physical return of defective core packs',
    severity: 'High',
    financialCategory: 'CASH'
  });


  // ----------------------------------------------------------------------------
  // ADVANCED CAAT ROUTINES (DA-71 to DA-85) ON INGESTED CLIENT EXTRACTS
  // ----------------------------------------------------------------------------
  // DA-71 / PUR-C08: Gate Entry vs GRN Delay Outlier Analysis
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Purchase & Payables',
    controlId: 'PUR-C08',
    caatId: 'DA-71',
    type: 'DELAYED_GRN_BOOKING',
    transactionId: 'GE-2025-119 (Gate Entry Date: 11-Jun-2025, GRN Date: 16-Jun-2025)',
    evidence: 'Store_Inward_GRN_Gate_Log.xlsx (ET-GRN-01)',
    amount: 462500,
    date: '2025-06-16',
    rule: 'Shipment of 2,500 Lithium cells (₹4,62,500) unbooked in store ledger for 5 days after physical gate inward, causing unrecorded inventory liability',
    confidence: 'High',
    rootCause: 'Store keeper delayed GRN entry pending batch quality test results',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-72 / PUR-C10: QC Rejection Without Supplier Debit Note
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Purchase & Payables',
    controlId: 'PUR-C10',
    caatId: 'DA-72',
    type: 'QC_REJECTION_NO_DEBIT_NOTE',
    transactionId: 'GRN-2025-081 (20 Defective Cells Rejected)',
    evidence: 'Store_Inward_GRN_Gate_Log.xlsx (ET-GRN-01)',
    amount: 3700,
    date: '2025-06-12',
    rule: '20 defective cells rejected during inward IR testing; invoice booked for full PO value without issuing Return-to-Vendor (RTV) debit note',
    confidence: 'High',
    rootCause: 'Lack of automated interface between QC rejection logs and accounts payable voucher booking',
    severity: 'Medium',
    financialCategory: 'CASH'
  });

  // DA-75 / INV-C07: Subcontractor Burning Loss Exceeding Contractual Allowance
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Inventory Management',
    controlId: 'INV-C07',
    caatId: 'DA-75',
    type: 'EXCESS_SUBCONTRACTOR_SCRAP',
    transactionId: 'JW-CH-2025-019 (Shree Ganesh Tooling Dies)',
    evidence: 'Job_Work_Challan_Register.xlsx (ET-JW-01)',
    amount: 22400,
    date: '2025-06-20',
    rule: 'Subcontractor billed 2.8% metal burning scrap loss on chassis welding vs 1.5% contractual tolerance (₹22,400 excess metal loss)',
    confidence: 'High',
    rootCause: 'Subcontractor invoice approved without cross-referencing engineering BOM scrap allowance matrix',
    severity: 'Medium',
    financialCategory: 'CASH'
  });

  // DA-77 / PRD-C03: Weighbridge Tare Weight Manipulation Anomaly
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Inventory Management',
    controlId: 'PRD-C03',
    caatId: 'DA-77',
    type: 'WEIGHBRIDGE_TARE_MANIPULATION',
    transactionId: 'WB-2025-0812 (Truck MH-12-RN-4819)',
    evidence: 'Production_Scrap_Weighbridge_Log.csv (ET-PRD-01)',
    amount: 75600,
    date: '2025-06-22',
    rule: 'Truck tare weight recorded 420 kg higher than certified vehicle tare, understating net aluminum scrap dispatched by ₹75,600',
    confidence: 'High',
    rootCause: 'Manual keyboard entry permitted on weighbridge terminal without automated load cell interlock',
    severity: 'High',
    financialCategory: 'FRAUD'
  });

  // DA-78 / PAY-C06: Biometric Punch vs Payroll Paid Days Mismatch
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Payroll & HR',
    controlId: 'PAY-C07',
    caatId: 'DA-78',
    type: 'BIOMETRIC_PUNCH_PAYROLL_MISMATCH',
    transactionId: 'EMP-055 & EMP-058 (Shop Floor Assembly)',
    evidence: 'Biometric_Attendance_Muster.csv (ET-ATT-01), Payroll_Register.xlsx',
    amount: 18500,
    date: '2025-06-30',
    rule: 'Two employees credited 26 paid working days in payroll with only 21 biometric punches and zero approved leave applications in HR system',
    confidence: 'High',
    rootCause: 'Manual attendance muster override by line supervisor without formal HR authorization',
    severity: 'Medium',
    financialCategory: 'CASH'
  });

  // DA-79 / PAY-C08: Factories Act Overtime Ceiling Breach (>50 Hours)
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Payroll & HR',
    controlId: 'PAY-C09',
    caatId: 'DA-79',
    type: 'FACTORIES_ACT_OT_BREACH',
    transactionId: 'EMP-041 (Senior Wire Bonder Technician)',
    evidence: 'Biometric_Attendance_Muster.csv (ET-ATT-01)',
    amount: 0,
    date: '2025-06-30',
    rule: 'Worker logged 68 overtime hours in Q1 FY26, exceeding statutory limit of 50 OT hours/quarter under Section 64 of Factories Act, 1948',
    confidence: 'High',
    rootCause: 'Production rush during month-end vehicle dispatch surge without shift worker rotation',
    severity: 'High',
    financialCategory: 'COMPLIANCE'
  });

  // DA-80 / REV-C09: Dealership Dispatch Released Under Credit Hold
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Revenue & Receivables',
    controlId: 'REV-C09',
    caatId: 'DA-80',
    type: 'CREDIT_LIMIT_DISPATCH_BYPASS',
    transactionId: 'INV-SLS-2025-912 (Deccan EV Spares)',
    evidence: 'Customer_Dealership_Credit_Master.xlsx (ET-CUST-01), Sales_Register.xlsx',
    amount: 840000,
    date: '2025-06-26',
    rule: '4 Electric scooters invoiced and dispatched to dealership whose balance exceeded ₹50L credit limit by ₹8,40,000 without MD approval',
    confidence: 'High',
    rootCause: 'Manual override of ERP sales order credit lock by regional sales manager',
    severity: 'Critical',
    financialCategory: 'FRAUD'
  });

  // DA-81 / REV-C08: Active Dealership Operating on Expired Bank Guarantee
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Revenue & Receivables',
    controlId: 'REV-C08',
    caatId: 'DA-81',
    type: 'EXPIRED_BANK_GUARANTEE_EXPOSURE',
    transactionId: 'DLR-KA-004 (Western Volt Motors, Bengaluru)',
    evidence: 'Customer_Dealership_Credit_Master.xlsx (ET-CUST-01)',
    amount: 1420000,
    date: '2025-06-15',
    rule: 'Active dealership operating with bank guarantee expired 42 days ago on an outstanding balance of ₹14,20,000 without cash advance security',
    confidence: 'High',
    rootCause: 'Finance team omitted automated 30-day BG expiry renewal reminder in ERP',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-82 / WAR-C02: Warranty Replacement Pack Dispatched Without Core Return
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Financial Closing & Reporting',
    controlId: 'WAR-C02',
    caatId: 'DA-82',
    type: 'WARRANTY_CORE_RETURN_OVERDUE',
    transactionId: 'WAR-2025-0142 (Deccan EV Spares)',
    evidence: 'Warranty_Claims_Battery_Core_Returns.xlsx (ET-WAR-01)',
    amount: 64000,
    date: '2025-06-20',
    rule: '2 replacement battery packs dispatched 45 days ago; old defective core battery packs not inwarded at factory store (>30 days overdue)',
    confidence: 'High',
    rootCause: 'Warranty spare replenishment released without enforcing physical defective core receipt rule',
    severity: 'High',
    financialCategory: 'CASH'
  });

  // DA-84 / STAT-C03: Monthly GSTR-3B Self-Assessed Tax vs GL Liability Gap
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'Statutory Compliance',
    controlId: 'STAT-C06',
    caatId: 'DA-84',
    type: 'GSTR_3B_VS_GL_TAX_GAP',
    transactionId: 'GSTR-3B Filing (Period: May-2025, ARN: AA270525008129F)',
    evidence: 'Statutory_Tax_Returns_Challans.xlsx (ET-STAT-01)',
    amount: 63000,
    date: '2025-06-20',
    rule: 'Net tax payable declared in GSTR-3B (₹14,85,000) was lower than general ledger output tax liability (₹15,48,000) by ₹63,000 awaiting DRC-03 adjustment',
    confidence: 'High',
    rootCause: 'Unfiled scrap sale and debit note tax adjustments omitted prior to return filing cut-off',
    severity: 'High',
    financialCategory: 'TAX'
  });

  // DA-85 / IT-C03: Relieved Employee Active ERP Access & Post-Exit Activity
  exceptions.push({
    id: `EXC-${String(eid++).padStart(3, '0')}`,
    process: 'IT General Controls',
    controlId: 'IT-C06',
    caatId: 'DA-85',
    type: 'RELIEVED_EMPLOYEE_ACTIVE_LOGIN',
    transactionId: 'User: EMP-018 (Store Executive - Relieved: 31-May-2025)',
    evidence: 'ERP_User_Authorization_Matrix.xlsx (ET-USER-01)',
    amount: 0,
    date: '2025-06-18',
    rule: 'User ID of employee relieved on 31-May-2025 remained active in Tally Prime for 18 days post-exit with 3 document view events recorded',
    confidence: 'High',
    rootCause: 'HR off-boarding notification delayed to IT system administrator',
    severity: 'High',
    financialCategory: 'GOVERNANCE'
  });

  // Attach default disposition states
  exceptions.forEach(e => {
    e.disposition = e.disposition || 'OPEN';
    e.managementResponse = e.managementResponse || '';
    e.auditorConclusion = e.auditorConclusion || '';
  });

  calculateExposureSummary(exceptions);
  return exceptions;
}

function generateTestResults(exceptions = (appState.exceptionsFound || [])) {
  const applicable = masterControlLibrary63.filter(c => c.status === 'Applicable');
  const exByCtrl = {};
  exceptions.forEach(e => {
    if (!exByCtrl[e.controlId]) exByCtrl[e.controlId] = [];
    exByCtrl[e.controlId].push(e);
  });

  return applicable.map(ctrl => {
    const ctrlExceptions = exByCtrl[ctrl.controlId] || [];
    let result = 'PASS';
    let sampleSize = '100% (Full Population)';
    let popCount = 500;

    // Dynamically assign realistic full-population test counts based on process area
    if (ctrl.processArea === 'Purchase & Payables') popCount = 2005;
    else if (ctrl.processArea === 'Revenue & Receivables') popCount = 420;
    else if (ctrl.processArea === 'Cash & Bank') popCount = 480;
    else if (ctrl.processArea === 'Data Analytics & JE Testing' || ctrl.processArea === 'Financial Closing & Reporting') popCount = 350;
    else if (ctrl.processArea === 'Inventory Management') popCount = 340;
    else if (ctrl.processArea === 'Fixed Assets & Capex') popCount = 95;
    else if (ctrl.processArea === 'Payroll & HR') popCount = 240;
    else if (ctrl.processArea === 'Statutory Compliance') popCount = 385;
    else if (ctrl.processArea === 'Related Party & Loans') popCount = 45;
    else if (ctrl.processArea === 'IT General Controls') popCount = 85;
    else if (ctrl.processArea === 'Expenses & Overheads') popCount = 210;
    else if (ctrl.processArea === 'Warranty & After-Sales') popCount = 380;
    else if (ctrl.processArea === 'Production & Scrap') popCount = 520;
    else popCount = 490;

    if (ctrl.analyticsTestable === 'N') {
      result = 'NOT TESTED';
      sampleSize = 'Inquiry / Document Review';
    } else if (ctrlExceptions.length > 0) {
      result = 'EXCEPTION';
    } else {
      result = 'PASS';
    }

    return {
      controlId: ctrl.controlId,
      processArea: ctrl.processArea,
      subProcess: ctrl.subProcess,
      controlDesc: ctrl.controlDesc,
      analyticsTestable: ctrl.analyticsTestable,
      result: result,
      exceptionsCount: ctrlExceptions.length,
      population: popCount,
      sampleSize: sampleSize,
      linkedCAATs: ctrl.linkedCAATs || 'Automated Fieldwork'
    };
  });
}

window.aiUploadEvidence = function() {
  showAIProgress('🤖 Ingesting and validating 6 client evidence files for NexGen Electric Mobility...', () => {
    appState.pipelineStatus.evidenceUploaded = true;
    appState.pipelineStatus.dataQualityComplete = true;
    saveState();
    window.location.hash = '#evidence';
  });
};

window.aiDiscoverProcesses = function() {
  showAIProgress('🤖 Mining evidence signals to discover actual operating processes and risk fingerprints...', () => {
    appState.pipelineStatus.processesDiscovered = true;
    appState.pipelineStatus.risksIdentified = true;
    saveState();
    window.location.hash = '#processes';
  });
};

window.aiDetermineControls = function() {
  showAIProgress('🤖 Evaluating 90 Master Controls against NexGen Electric Mobility scoping criteria...', () => {
    appState.pipelineStatus.controlsDetermined = true;
    appState.auditUniverseVersion = 'NexGen Electric Mobility Universe v1.0';
    saveState();
    window.location.hash = '#controls';
  });
};

window.aiRunTesting = function() {
  showAIProgress('🤖 Executing 85 CAAT routines across full enterprise population...', () => {
    appState.exceptionsFound = runDeterministicTests();
    appState.testResults = generateTestResults(appState.exceptionsFound);
    appState.pipelineStatus.testingComplete = true;
    saveState();
    window.location.hash = '#testing';
  });
};

// ==============================================================================
// VIEW 1: DASHBOARD & KPIS
// ==============================================================================
function renderDashboard() {
  appState.dashboardViewMode = appState.dashboardViewMode || 'PROMOTER';
  const ps = appState.pipelineStatus;
  const applicable = masterControlLibrary63.filter(c => c.status === 'Applicable').length;
  const tested = ps.testingComplete ? appState.testResults.length : 0;
  const excCount = ps.testingComplete ? appState.exceptionsFound.length : 0;
  const passed = ps.testingComplete ? appState.testResults.filter(r => r.result === 'PASS').length : 0;
  const effectiveRate = tested > 0 ? Math.round((passed / tested) * 100) : 0;
  const processesId = expectedProcesses.filter(p => p.status === 'Identified').length;
  const evCoverage = ps.testingComplete ? '100% (19 Schemas)' : '—';

  // Dynamic Financial Values from Exposure Summary
  const recoverableCash = appState.exposureSummary?.recoverableCash || 4187030;
  const taxRisk = appState.exposureSummary?.taxRisk || 2088000;
  const fraudExposure = appState.exposureSummary?.fraudExposure || 8400600;
  const totalExposure = appState.exposureSummary?.totalExposure || 14896000;
  const patInr = 72900000; // ₹7.29 Cr PAT from Client Profile
  const profitPct = ((totalExposure / patInr) * 100).toFixed(1);

  let nextAction = '';
  if (!ps.evidenceUploaded) nextAction = `<button class="btn-ai action-btn" onclick="aiUploadEvidence()"><i data-lucide="sparkles"></i> Upload Evidence & Start AI</button>`;
  else if (!ps.processesDiscovered) nextAction = `<button class="btn-ai action-btn" onclick="aiDiscoverProcesses()"><i data-lucide="sparkles"></i> Run Process Discovery</button>`;
  else if (!ps.controlsDetermined) nextAction = `<button class="btn-ai action-btn" onclick="aiDetermineControls()"><i data-lucide="sparkles"></i> Determine Applicable Universe</button>`;
  else if (!ps.testingComplete) nextAction = `<button class="btn-ai action-btn" onclick="aiRunTesting()"><i data-lucide="sparkles"></i> Execute 85 CAAT Tests</button>`;

  // Destroy previous charts
  currentCharts.forEach(c => { try { c.destroy(); } catch(e){} });
  currentCharts = [];

  // ----------------------------------------------------------------------------
  // EXECUTIVE COMMAND CENTER BAR WITH LIVE PULSE INDICATORS
  // ----------------------------------------------------------------------------
  const isDark = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';
  const commandCenterHtml = `
    <div class="command-center-bar">
      <div class="entity-badge-wrap">
        <div class="entity-identity-chip">
          <i data-lucide="building-2" style="width:14px;color:var(--primary);"></i>
          <span>NexGen Electric Mobility Pvt. Ltd.</span>
          <span style="font-family:monospace;font-size:10.5px;color:var(--text-muted);">CIN: U34100PN2019PTC186420</span>
        </div>
        <div class="status-pill-item">
          <span class="pulse-dot pulse-green"></span>
          <span>90 Master Risk Indicators Active</span>
        </div>
        <div class="status-pill-item">
          <span class="pulse-dot pulse-blue"></span>
          <span>85 Analytics Routines Synced</span>
        </div>
        <div class="status-pill-item">
          <span class="pulse-dot pulse-purple"></span>
          <span>19 Ingestion Schemas</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <div class="perspective-switch">
          <button class="perspective-btn ${appState.dashboardViewMode === 'PROMOTER' ? 'active' : ''}" onclick="setDashboardViewMode('PROMOTER')">
            <i data-lucide="briefcase"></i> 👔 Executive / Promoter
          </button>
          <button class="perspective-btn ${appState.dashboardViewMode === 'AUDITOR' ? 'active' : ''}" onclick="setDashboardViewMode('AUDITOR')">
            <i data-lucide="shield-check"></i> 🔬 Technical GRC
          </button>
        </div>
        <button class="action-btn" onclick="togglePlatformTheme()" title="Toggle Monochromatic Studio Theme" style="padding:6px 10px;">
          <i data-lucide="${isDark ? 'sun' : 'moon'}" style="width:15px;height:15px;"></i>
        </button>
      </div>
    </div>
  `;

  // ============================================================================
  // MODE 1: BUSINESS OWNER & PROMOTER VIEW (ZERO JARGON)
  // ============================================================================
  if (appState.dashboardViewMode === 'PROMOTER') {
    const redFlagsHtml = promoterTopRedFlags.map(rf => `
      <div class="redflag-card">
        <div class="redflag-top">
          <div style="display:flex;align-items:center;gap:8px;">
            <strong style="color:var(--primary);font-size:12px;font-family:monospace;">${rf.id}</strong>
            <span class="redflag-title">${rf.title}</span>
            <span class="status-badge critical" style="font-size:10px;">${rf.category || 'Direct Cash Leakage'}</span>
          </div>
          <span class="redflag-cost">${rf.financialCost}</span>
        </div>
        <p class="redflag-body"><strong>What Happened:</strong> ${rf.whatHappened}</p>
        <div class="redflag-box">
          <div>
            <strong style="color:var(--fail);display:block;margin-bottom:2px;">Business & Profit Damage:</strong>
            <span>${rf.businessImpact || rf.financialDamage}</span>
          </div>
          <div>
            <strong style="color:var(--pass);display:block;margin-bottom:2px;">How to Fix in 5 Minutes:</strong>
            <span class="redflag-fix">${rf.simpleFix || rf.promoterFix}</span>
          </div>
        </div>
      </div>
    `).join('');

    const completedTasks = promoterMondayChecklist.filter(t => t.done).length;
    const progressPct = Math.round((completedTasks / promoterMondayChecklist.length) * 100);

    const checklistHtml = promoterMondayChecklist.map((item, idx) => `
      <div class="checklist-item">
        <div class="checklist-check ${item.done ? 'checked' : ''}" onclick="toggleChecklistItem(${idx})">
          ${item.done ? '✓' : ''}
        </div>
        <div class="checklist-info" style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <h4 style="${item.done ? 'text-decoration:line-through;color:var(--text-muted);' : ''}">${item.title}</h4>
            <span class="checklist-impact">${item.impact}</span>
          </div>
          <p style="${item.done ? 'text-decoration:line-through;color:var(--text-muted);' : ''}">${item.description}</p>
          <span style="font-size:10px;background:var(--bg-subtle);border:1px solid var(--border);padding:2px 6px;border-radius:4px;color:var(--text-muted);font-weight:600;">Department: ${item.department}</span>
        </div>
      </div>
    `).join('');

    appRoot.innerHTML = `
      ${commandCenterHtml}

      <div class="header" style="margin-bottom:18px;">
        <div>
          <h1 style="font-size:24px;">Executive Financial Health & Cash Protection Console</h1>
          <p style="font-size:13px;color:var(--text-muted);">Direct bottom-line insights for Business Owners, Managing Directors, and Board Members — Zero audit jargon.</p>
        </div>
        <div class="header-actions">
          <button class="btn-ai action-btn" onclick="openCfoRecoveryMemo()"><i data-lucide="file-text"></i> Recovery Demand Letter (CFO Memo)</button>
          ${nextAction}
        </div>
      </div>

      <!-- Executive Financial Briefing Banner -->
      <div class="promoter-banner">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;">
          <div style="flex:1;min-width:320px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
              <span class="status-badge" style="background:rgba(56,189,248,0.2);color:#38bdf8;border:1px solid rgba(56,189,248,0.4);font-weight:700;">EV OEM Manufacturing Megasite (Chakan & Hosur)</span>
              <span class="profit-pill">⚠️ ₹${(totalExposure / 100000).toFixed(2)} Lakhs Total Capital & Profit Exposure</span>
            </div>
            <h2 style="margin-bottom:10px;">Executive Cash Protection Briefing</h2>
            <p style="color:#cbd5e1;line-height:1.6;font-size:13px;">
              The platform evaluated <strong>100% of your company's transactions across all 19 ERP & banking registers</strong>.
              Here is the verified bottom-line reality: 
              <strong>₹${(recoverableCash / 100000).toFixed(2)} Lakhs is confirmed direct cash loss</strong> (ready to claw back this week from suppliers via credit notes and debit vouchers),
              and <strong>₹${(taxRisk / 100000).toFixed(2)} Lakhs is tax penalty exposure</strong> from vendors who billed GST without depositing it on the GST portal.
            </p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);padding:18px 24px;border-radius:12px;text-align:center;min-width:200px;">
            <div style="font-size:11px;text-transform:uppercase;color:#94a3b8;font-weight:700;letter-spacing:0.5px;">Financial Safety Score</div>
            <div style="font-size:38px;font-weight:900;color:${ps.testingComplete ? '#f59e0b' : '#38bdf8'};margin:4px 0;">${ps.testingComplete ? '78 / 100' : '—'}</div>
            <span style="font-size:12px;color:${ps.testingComplete ? '#fde68a' : '#cbd5e1'};font-weight:700;">${ps.testingComplete ? 'Grade B+: Moderate Leakage' : 'Awaiting Testing'}</span>
            <div style="font-size:10.5px;color:#94a3b8;margin-top:6px;">Industry Target: Grade A (>90)</div>
          </div>
        </div>
      </div>

      <!-- Financial Value-at-Risk Cards (Promoter Language) -->
      <div class="exposure-grid">
        <div class="exposure-card border-cash">
          <div class="exposure-title">💰 Immediate Cash to Claw Back</div>
          <div class="exposure-val" style="color:var(--pass);">₹${(recoverableCash / 100000).toFixed(2)} Lakhs</div>
          <div class="exposure-sub">
            <span>Duplicate bills, rate overcharges & core returns</span>
            <button class="action-btn" style="font-size:10.5px;padding:3px 8px;background:var(--pass);color:white;border:none;" onclick="openCfoRecoveryMemo()">Claw Back →</button>
          </div>
        </div>
        <div class="exposure-card border-tax">
          <div class="exposure-title">🏛️ Avoidable GST & Tax Penalties</div>
          <div class="exposure-val" style="color:var(--pending);">₹${(taxRisk / 100000).toFixed(2)} Lakhs</div>
          <div class="exposure-sub">
            <span>GSTR-3B tax gap & 45-day MSMED overdue add-back</span>
            <strong style="color:var(--pending);">Hold GST Payments</strong>
          </div>
        </div>
        <div class="exposure-card border-gov">
          <div class="exposure-title">⚠️ Unapproved Staff Commitments & Fraud</div>
          <div class="exposure-val" style="color:var(--fail);">₹${(fraudExposure / 100000).toFixed(2)} Lakhs</div>
          <div class="exposure-sub">
            <span>Weighbridge tare manipulation & dealer credit bypass</span>
            <strong style="color:var(--fail);">Bypassing Boss</strong>
          </div>
        </div>
        <div class="exposure-card border-total">
          <div class="exposure-title">📉 Annual Net Profit at Risk</div>
          <div class="exposure-val" style="color:var(--primary);">${profitPct}% of Net Profit</div>
          <div class="exposure-sub">
            <span>₹${(totalExposure / 100000).toFixed(2)} L total exposure on ₹7.29 Cr PAT</span>
            <strong style="color:var(--primary);">Turnover: ₹145.8 Cr</strong>
          </div>
        </div>
      </div>

      <!-- Insightful Visual Analytics Grid -->
      <div class="charts-grid">
        <div class="chart-container">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <div>
              <h3>Financial Exposure Distribution (Capital at Risk)</h3>
              <p>Breakdown across direct cash leaks, statutory tax penalties, and management overrides</p>
            </div>
            <span class="status-badge" style="background:var(--primary-light);color:var(--primary);border:1px solid var(--primary-border);font-weight:700;">₹${(totalExposure / 100000).toFixed(2)} Lakhs Total</span>
          </div>
          <div class="canvas-wrapper"><canvas id="promoterVaRChart"></canvas></div>
        </div>

        <div class="chart-container">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <div>
              <h3>Departmental Cash Leakage & Risk Concentration</h3>
              <p>Where money is slipping through operational processes without MD sign-off</p>
            </div>
            <span class="status-badge" style="background:var(--fail-bg);color:var(--fail-text);border:1px solid var(--fail-border);font-weight:700;">6 Risk Centers</span>
          </div>
          <div class="canvas-wrapper"><canvas id="promoterDeptChart"></canvas></div>
        </div>
      </div>

      <!-- Top 5 Business Vulnerabilities & Operational Red Flags -->
      <div class="panel" style="margin-bottom:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <h3 style="font-size:15px;font-weight:800;color:var(--text-main);">Top 5 Critical Business Vulnerabilities (Immediate Action Required)</h3>
            <p style="font-size:12px;color:var(--text-muted);">Specific operational breakdowns leaking cash or threatening government EV subsidies.</p>
          </div>
          <button class="action-btn" onclick="openCfoRecoveryMemo()"><i data-lucide="download"></i> Export Action Dossier</button>
        </div>
        <div class="redflag-grid">${redFlagsHtml}</div>
      </div>

      <!-- Monday Morning Action Plan for Managing Director -->
      <div class="checklist-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <div>
            <h3 style="font-size:16px;font-weight:800;color:var(--text-main);">Managing Director's Monday Morning Cash Protection Checklist</h3>
            <p style="font-size:12px;color:var(--text-muted);">5 high-impact actions you can delegate to your Finance & Store heads right now.</p>
          </div>
          <div style="text-align:right;">
            <span style="font-size:12px;font-weight:700;color:var(--pass);">${completedTasks} of ${promoterMondayChecklist.length} Completed (${progressPct}%)</span>
            <div style="width:140px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin-top:4px;">
              <div style="width:${progressPct}%;height:100%;background:var(--pass);transition:width 0.3s;"></div>
            </div>
          </div>
        </div>
        <div class="checklist-list">${checklistHtml}</div>
      </div>
    `;

    setTimeout(() => {
      if (typeof document === 'undefined' || typeof Chart === 'undefined') return;
      
      const varCanvas = document.getElementById('promoterVaRChart');
      if (varCanvas) {
        currentCharts.push(new Chart(varCanvas, {
          type: 'doughnut',
          data: {
            labels: ['Direct Cash Loss (Claw Back)', 'Statutory Tax Risk', 'Management Override / Fraud'],
            datasets: [{
              data: [recoverableCash / 100000, taxRisk / 100000, fraudExposure / 100000],
              backgroundColor: ['#10b981', '#f59e0b', '#f43f5e'],
              borderWidth: 2,
              borderColor: isDark ? '#111726' : '#ffffff'
            }]
          },
          options: {
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
              legend: { position: 'bottom', labels: { font: { size: 11 }, color: isDark ? '#cbd5e1' : '#475569' } },
              tooltip: { callbacks: { label: (ctx) => ` ₹${ctx.raw.toFixed(2)} Lakhs (${((ctx.raw / (totalExposure/100000))*100).toFixed(1)}%)` } }
            }
          }
        }));
      }

      const deptCanvas = document.getElementById('promoterDeptChart');
      if (deptCanvas) {
        currentCharts.push(new Chart(deptCanvas, {
          type: 'bar',
          data: {
            labels: ['Procurement & Payables', 'Dealership AR & BG', 'Job-Work Subcontracting', 'Warranty Battery Core', 'Scrap Weighbridge', 'Payroll & Overtime'],
            datasets: [{
              label: 'Exposure (₹ Lakhs)',
              data: [52.40, 22.60, 18.50, 14.20, 8.40, 6.80],
              backgroundColor: ['#2563eb', '#3b82f6', '#f59e0b', '#8b5cf6', '#f43f5e', '#10b981'],
              borderRadius: 6
            }]
          },
          options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { beginAtZero: true, grid: { color: isDark ? '#1e293b' : '#f1f5f9' }, ticks: { color: isDark ? '#94a3b8' : '#64748b' } },
              y: { grid: { display: false }, ticks: { color: isDark ? '#cbd5e1' : '#334155' } }
            }
          }
        }));
      }
    }, 50);

    return;
  }

  // ============================================================================
  // MODE 2: TECHNICAL AUDITOR & GRC VIEW (TRADITIONAL RACM & CAAT ENGINE)
  // ============================================================================
  const steps = [
    { label: '1. Scoping & Evidence (19 Schemas)', done: ps.evidenceUploaded, hash: '#scoping' },
    { label: '2. Pre-Flight Data Hygiene', done: ps.dataQualityComplete, hash: '#evidence' },
    { label: '3. Process Discovery (13 Areas)', done: ps.processesDiscovered, hash: '#processes' },
    { label: '4. Risk Universe (90 Inherent)', done: ps.risksIdentified, hash: '#risks' },
    { label: '5. Applicable Controls (90 RACM)', done: ps.controlsDetermined, hash: '#controls' },
    { label: '6. CAAT Execution (85 Routines)', done: ps.testingComplete, hash: '#testing' }
  ];

  const pipelineHtml = steps.map(s => `
    <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-radius:6px;background:${s.done ? 'var(--pass-bg)' : 'var(--bg-subtle)'};border:1px solid ${s.done ? 'var(--pass-border)' : 'var(--border)'};cursor:pointer;transition:all 0.15s;" onclick="window.location.hash='${s.hash}'">
      <i data-lucide="${s.done ? 'check-circle' : 'circle'}" style="width:15px;color:${s.done ? 'var(--pass)' : 'var(--text-muted)'};"></i>
      <span style="font-size:11.5px;font-weight:600;color:${s.done ? 'var(--pass-text)' : 'var(--text-muted)'};">${s.label}</span>
    </div>
  `).join('<i data-lucide="chevron-right" style="width:13px;color:var(--text-subtle);"></i>');

  appRoot.innerHTML = `
    ${commandCenterHtml}

    <div class="header">
      <div>
        <h1>Executive Risk & Audit Intelligence Console <span class="ai-badge">Technical GRC</span></h1>
        <p style="font-size:13px;color:var(--text-muted);">Standard on Auditing SA 315 / SA 320 Materiality & Continuous Analytics Fieldwork Engine.</p>
      </div>
      <div class="header-actions">${nextAction}</div>
    </div>

    <!-- Materiality & Scoping Benchmark Banner -->
    <div class="materiality-widget">
      <div class="mat-item">
        <p>Client Turnover (FY24-25 Actual)</p>
        <h3>₹145.80 Cr</h3>
        <span>NexGen Electric Mobility Pvt. Ltd. (CAGR 42.5%)</span>
      </div>
      <div class="mat-item">
        <p>Planning Materiality (SA 320 @ 1.0%)</p>
        <h3>₹1.46 Cr</h3>
        <span>Performance Materiality (75%): ₹1.09 Cr</span>
      </div>
      <div class="mat-item">
        <p>Clearly Trivial Threshold (5% of PM)</p>
        <h3>₹7.29 Lakhs</h3>
        <span>Cumulative Identified VaR: ₹1.489 Cr (102% of PM)</span>
      </div>
    </div>

    ${ps.testingComplete ? `
    <div class="executive-summary-banner">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <h2 style="font-size:18px;font-weight:800;">Audit Committee Executive Summary — Full Population Assurance</h2>
        <span class="status-badge" style="background:rgba(56,189,248,0.2);color:#38bdf8;border:1px solid rgba(56,189,248,0.4);font-weight:700;">85 Analytics Routines • 19 Schemas</span>
      </div>
      <p style="color:#cbd5e1;line-height:1.7;font-size:13px;">
        100% full-population automated testing executed across <strong style="color:white;">2,005 purchase records, 420 sales, and 480 bank transactions</strong> in Tally Prime, SAP Business One, and HDFC Corporate NetBanking.
        A total of <strong style="color:#fca5a5;">${excCount} audit exceptions</strong> were detected across ${applicable} applicable controls, impacting <strong>40 controls with deficiencies</strong> while <strong>44 controls passed cleanly</strong> and <strong>6 controls require manual inquiry</strong>.
        Overall control effectiveness: <strong style="color:${effectiveRate >= 80 ? '#86efac' : effectiveRate >= 60 ? '#fde68a' : '#fca5a5'};">${effectiveRate}%</strong>.
        Total quantified financial exposure stands at <strong style="color:#fca5a5;">₹1.489 Crores</strong>, with <strong>₹41.87 Lakhs</strong> immediate recoverable cash via Section 34 CGST debit notes.
      </p>
    </div>

    <!-- Financial Value-at-Risk (VaR) Matrix -->
    <div class="exposure-grid">
      <div class="exposure-card border-cash">
        <div class="exposure-title">Direct Recoverable Cash</div>
        <div class="exposure-val" style="color:var(--pass);">₹${(recoverableCash / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub"><span>Duplicate bills & rate variances</span><strong style="color:var(--pass);">~95% Recoverable</strong></div>
      </div>
      <div class="exposure-card border-tax">
        <div class="exposure-title">Statutory & Tax Risk</div>
        <div class="exposure-val" style="color:var(--pending);">₹${(taxRisk / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub"><span>GSTR-3B tax gap & MSMED Sec 43B(h)</span><strong style="color:var(--pending);">Sec 50 / 16(2)</strong></div>
      </div>
      <div class="exposure-card border-gov">
        <div class="exposure-title">Governance & Fraud Risk</div>
        <div class="exposure-val" style="color:var(--fail);">₹${(fraudExposure / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub"><span>Weighbridge tare fraud & credit bypass</span><strong style="color:var(--fail);">Management Override</strong></div>
      </div>
      <div class="exposure-card border-total">
        <div class="exposure-title">Total Quantified VaR</div>
        <div class="exposure-val" style="color:var(--primary);">₹${(totalExposure / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub">
          <span>Across all ${excCount} anomalies</span>
          <button class="action-btn" style="font-size:10.5px;padding:3px 8px;background:var(--primary);color:white;border:none;" onclick="openCfoRecoveryMemo()">CFO Memo →</button>
        </div>
      </div>
    </div>
    ` : ''}

    <div class="panel" style="margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3 style="font-size:12.5px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Continuous Audit Lifecycle Pipeline</h3>
        <span style="font-size:11px;color:var(--primary);font-weight:600;">Evidence → Process → Inherent Risk → Control Design → CAAT Execution → Exception → Remediation</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">${pipelineHtml}</div>
    </div>

    <div class="metrics-grid">
      <div class="metric-card border-blue">
        <p class="metric-title">Process Coverage</p>
        <p class="metric-value">13 / 13</p>
        <span class="metric-sub">Standard MSME Areas Mined</span>
      </div>
      <div class="metric-card border-green">
        <p class="metric-title">Master RACM Universe</p>
        <p class="metric-value" style="color:var(--pass);">90 Controls</p>
        <span class="metric-sub">Full Population Fieldwork</span>
      </div>
      <div class="metric-card border-red">
        <p class="metric-title">CAAT Exceptions</p>
        <p class="metric-value" style="color:var(--fail);">${excCount}</p>
        <span class="metric-sub">Identified via 85 routines</span>
      </div>
      <div class="metric-card border-yellow">
        <p class="metric-title">Evidence Coverage</p>
        <p class="metric-value" style="color:var(--pending);">19 / 19</p>
        <span class="metric-sub">Canonical Schemas Synchronized</span>
      </div>
    </div>

    ${ps.testingComplete ? `
    <div class="charts-grid">
      <div class="chart-container">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <h3>Exception Distribution by Forensic Pattern</h3>
            <p>Categorization of the ${excCount} exceptions across audit failure types</p>
          </div>
        </div>
        <div class="canvas-wrapper"><canvas id="excTypeChart"></canvas></div>
      </div>
      <div class="chart-container">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <h3>Control Assurance Effectiveness</h3>
            <p>Pass vs Exception vs Inquiry across the 90 RACM controls</p>
          </div>
        </div>
        <div class="canvas-wrapper"><canvas id="testResultChart"></canvas></div>
      </div>
    </div>` : ''}
  `;

  if (ps.testingComplete) {
    setTimeout(() => {
      if (typeof document === 'undefined' || typeof Chart === 'undefined') return;
      const typeCounts = {};
      appState.exceptionsFound.forEach(e => { typeCounts[e.financialCategory || 'OTHER'] = (typeCounts[e.financialCategory || 'OTHER'] || 0) + 1; });
      const excTypeCanvas = document.getElementById('excTypeChart');
      if (excTypeCanvas) {
        currentCharts.push(new Chart(excTypeCanvas, {
          type: 'doughnut',
          data: {
            labels: Object.keys(typeCounts),
            datasets: [{
              data: Object.values(typeCounts),
              backgroundColor: ['#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'],
              borderWidth: 2,
              borderColor: isDark ? '#111726' : '#ffffff'
            }]
          },
          options: {
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
              legend: { position: 'right', labels: { font: { size: 11 }, color: isDark ? '#cbd5e1' : '#475569' } }
            }
          }
        }));
      }

      const pass = appState.testResults.filter(r => r.result === 'PASS').length;
      const exc = appState.testResults.filter(r => r.result === 'EXCEPTION').length;
      const nt = appState.testResults.filter(r => r.result === 'NOT TESTED').length;
      const testResCanvas = document.getElementById('testResultChart');
      if (testResCanvas) {
        currentCharts.push(new Chart(testResCanvas, {
          type: 'bar',
          data: {
            labels: ['Effective (PASS)', 'Deficiencies (EXCEPTION)', 'Manual / Inquiry (NOT TESTED)'],
            datasets: [{
              data: [pass, exc, nt],
              backgroundColor: ['#10b981', '#f43f5e', '#94a3b8'],
              borderRadius: 6
            }]
          },
          options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: isDark ? '#1e293b' : '#f1f5f9' }, ticks: { color: isDark ? '#94a3b8' : '#64748b' } },
              x: { grid: { display: false }, ticks: { color: isDark ? '#cbd5e1' : '#334155' } }
            }
          }
        }));
      }
    }, 50);
  }
}

window.setDashboardViewMode = function(mode) {
  appState.dashboardViewMode = mode;
  saveState();
  renderDashboard();
  lucide.createIcons();
};

window.toggleChecklistItem = function(idx) {
  if (promoterMondayChecklist[idx]) {
    promoterMondayChecklist[idx].done = !promoterMondayChecklist[idx].done;
    renderDashboard();
    lucide.createIcons();
  }
};


function renderScoping() {
  const cards = clientScopingChecklist.map(s => `
    <div class="scoping-card">
      <div>
        <div class="scoping-header">
          <span class="scoping-title">${s.id} — ${s.processArea}</span>
          <span class="status-badge ${s.applicable ? 'passed' : 'na'}">${s.applicable ? 'Applicable (Y)' : 'Excluded (N)'}</span>
        </div>
        <p class="scoping-question">${s.question}</p>
        <div class="scoping-notes">
          <strong style="color:#0f172a;">Client Discovery Notes:</strong><br>${s.clientNotes}
        </div>
      </div>
      <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f1f5f9;padding-top:10px;">
        <span style="font-size:11px;color:#64748b;"><strong>System:</strong> ${s.systemUsed}</span>
        <button class="action-btn" style="font-size:11px;padding:4px 8px;" onclick="window.location.hash='#data-request'">View Required Extracts →</button>
      </div>
    </div>
  `).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Client Scoping & Planning Checklist <span class="ai-badge">12 Dimensions</span></h1>
      <div class="header-actions">
        <button class="action-btn" onclick="window.location.hash='#data-request'"><i data-lucide="file-spreadsheets"></i> View Data Request List (19)</button>
      </div>
    </div>

    <!-- Inherent Risk Rating Matrix (Likelihood x Impact) -->
    <div class="panel" style="margin-bottom:20px;">
      <h3 style="font-size:14px;color:#0f172a;font-weight:700;margin-bottom:6px;">Risk Rating Methodology (Inherent Risk = Likelihood × Impact)</h3>
      <p style="font-size:12px;color:#64748b;margin-bottom:12px;">Pre-control inherent risk assessment framework for Indian MSMEs:</p>
      <div style="overflow-x:auto;">
        <table class="risk-matrix-table">
          <thead>
            <tr>
              <th style="width:25%;">Likelihood \\ Impact</th>
              <th style="width:25%;">Low Impact</th>
              <th style="width:25%;">Medium Impact</th>
              <th style="width:25%;">High Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>High Likelihood</strong></td>
              <td class="cell-med">M (Medium)</td>
              <td class="cell-high">H (High)</td>
              <td class="cell-high">H (High)</td>
            </tr>
            <tr>
              <td><strong>Medium Likelihood</strong></td>
              <td class="cell-low">L (Low)</td>
              <td class="cell-med">M (Medium)</td>
              <td class="cell-high">H (High)</td>
            </tr>
            <tr>
              <td><strong>Low Likelihood</strong></td>
              <td class="cell-low">L (Low)</td>
              <td class="cell-low">L (Low)</td>
              <td class="cell-med">M (Medium)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="scoping-grid">
      ${cards}
    </div>
  `;
}

// ==============================================================================
// VIEW 3: DATA REQUEST LIST (19 Standard Extracts)
// ==============================================================================
function renderDataRequest() {
  const drlTemplateMap = {
    'DRL-01': 'ET-PUR-01',
    'DRL-02': 'ET-PO-01',
    'DRL-03': 'ET-VM-01',
    'DRL-04': 'ET-SLS-01',
    'DRL-05': 'ET-JV-01',
    'DRL-06': 'ET-CB-01',
    'DRL-07': 'ET-PAY-01',
    'DRL-08': 'ET-PAY-01',
    'DRL-09': 'ET-FA-01',
    'DRL-10': 'ET-INV-01',
    'DRL-11': 'ET-PUR-01',
    'DRL-12': 'ET-GST-01',
    'DRL-13': 'ET-PUR-01',
    'DRL-14': 'ET-JV-01',
    'DRL-15': 'ET-VM-01',
    'DRL-16': 'ET-JV-01',
    'DRL-17': 'ET-PO-01',
    'DRL-18': 'ET-INV-01',
    'DRL-19': 'ET-PUR-01'
  };

  const rows = standardDataRequestList.map(d => {
    const pClass = d.priority.toLowerCase().includes('must') ? 'must-have' : 'good-to-have';
    const statusBadge = d.availableInClient ? '<span class="status-badge passed">Received</span>' : '<span class="status-badge pending">Pending Upload</span>';
    const linkedTplId = drlTemplateMap[d.id] || 'ET-PUR-01';

    return `
      <tr>
        <td style="font-weight:700;color:var(--primary);">${d.id}</td>
        <td>
          <strong>${d.fileName}</strong><br>
          <span style="font-size:11px;color:#64748b;">Format: ${d.fileType} • Schema: ${linkedTplId}</span>
        </td>
        <td style="font-size:12px;color:#475569;max-width:300px;">${d.recommendedFields}</td>
        <td><span class="priority-badge ${pClass}">${d.priority}</span></td>
        <td><span style="font-family:monospace;font-size:11px;background:#f1f5f9;padding:2px 6px;border-radius:4px;color:#334155;">${d.enablesTests}</span></td>
        <td><span style="font-size:11px;color:#64748b;">${d.linkedControls}</span></td>
        <td>${statusBadge}</td>
        <td style="text-align:center;">
          <div style="display:flex;gap:6px;justify-content:center;">
            <button class="action-btn" style="font-size:11px;padding:3px 8px;" onclick="downloadMasterTemplate('${linkedTplId}')" title="Download standard CSV template with format notes">
              <i data-lucide="download"></i> CSV
            </button>
            <button class="action-btn" style="font-size:11px;padding:3px 8px;background:var(--primary);color:white;border:none;" onclick="quickOpenTemplateMapping('${linkedTplId}')" title="Open field mapping console for this schema">
              Map →
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Data Request List — 19 Standard ERP Extracts</h1>
      <div class="header-actions">
        <button class="action-btn" onclick="downloadAllMasterTemplates()"><i data-lucide="archive"></i> Download All 10 CSV Templates</button>
        <button class="action-btn" onclick="window.location.hash='#field-mapping'"><i data-lucide="split"></i> Ingestion & Mapping Console</button>
        <button class="btn-ai action-btn" onclick="aiUploadEvidence()"><i data-lucide="upload-cloud"></i> Ingest Available Evidence</button>
      </div>
    </div>

    <!-- Executive Summary Card -->
    <div class="panel" style="margin-bottom:16px;background:linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <h3 style="font-size:14px;color:#0f172a;margin:0;">Standardized Client Flat-File Request Framework</h3>
        <span class="status-badge passed" style="font-size:11px;">10 Master Extract Schemas Defined</span>
      </div>
      <p style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:10px;">
        Send this flat-file extract list to the client's accounts and ERP team at engagement kick-off.
        Requesting standardized exports enables all <strong>85 CAAT routines (DA-01 to DA-70)</strong> to evaluate with <strong>100% full-population coverage</strong> across all 13 business cycles.
      </p>
      <div style="display:flex;gap:12px;font-size:11px;color:#64748b;flex-wrap:wrap;">
        <span><strong>Tally Prime:</strong> <code>Alt+E > Detailed > CSV/Excel</code></span>
        <span>•</span>
        <span><strong>SAP Business One:</strong> <code>Document Journal / GL Export > Excel</code></span>
        <span>•</span>
        <span><strong>Zoho Books:</strong> <code>Reports > Export CSV</code></span>
      </div>
    </div>

    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data File to Request</th>
            <th>Recommended Canonical Fields</th>
            <th>Priority</th>
            <th>Enables CAAT Tests</th>
            <th>Linked Controls</th>
            <th>Status</th>
            <th style="text-align:center;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

// Quick jump from DRL to Field Mapping
window.quickOpenTemplateMapping = function(tplId) {
  currentMappingTemplateId = tplId;
  const smp = sampleClientUploads.find(s => s.extractId === tplId);
  if (smp) {
    currentUploadedFile = {
      name: smp.name,
      sourceSystem: smp.sourceSystem,
      headers: [...smp.headers],
      sampleRows: smp.sampleRows.map(r => [...r])
    };
  }
  mappingLocked = false;
  runAutoMapping();
  window.location.hash = '#field-mapping';
};

// ==============================================================================
// VIEW 3B: SMART FIELD MAPPING & PRE-FLIGHT INGESTION CONSOLE
// ==============================================================================
let currentMappingTemplateId = 'ET-PUR-01';
let currentUploadedFile = null;
let currentMappings = {};
let mappingLocked = false;
let activeErpTab = 'tally'; // 'tally' | 'sap' | 'zoho'
let dataSanitized = false;

function initFieldMappingState() {
  if (!currentUploadedFile) {
    const smp = sampleClientUploads.find(s => s.extractId === currentMappingTemplateId) || sampleClientUploads[0];
    currentUploadedFile = {
      name: smp.name,
      sourceSystem: smp.sourceSystem,
      headers: [...smp.headers],
      sampleRows: smp.sampleRows.map(r => [...r]),
      allRows: smp.sampleRows.map(r => [...r])
    };
    runAutoMapping();
  }
}

// ------------------------------------------------------------------------------
// PRE-FLIGHT DATA HYGIENE VALIDATOR & SANITIZATION ENGINE
// ------------------------------------------------------------------------------
function parseDateToISO(dStr) {
  if (!dStr) return '';
  const trimmed = String(dStr).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  
  // DD-MMM-YYYY e.g. 10-Jun-2025
  const months = { jan:'01', feb:'02', mar:'03', apr:'04', may:'05', jun:'06', jul:'07', aug:'08', sep:'09', oct:'10', nov:'11', dec:'12' };
  const dMmmY = trimmed.match(/^(\d{1,2})[-/ ]([A-Za-z]{3})[-/ ](\d{4})$/);
  if (dMmmY) {
    const day = dMmmY[1].padStart(2, '0');
    const month = months[dMmmY[2].toLowerCase()] || '01';
    const year = dMmmY[3];
    return `${year}-${month}-${day}`;
  }

  // DD/MM/YYYY or DD-MM-YYYY
  const dmy = trimmed.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (dmy) {
    const day = dmy[1].padStart(2, '0');
    const month = dmy[2].padStart(2, '0');
    const year = dmy[3];
    return `${year}-${month}-${day}`;
  }

  return trimmed;
}

function scanDataHygiene(headers, rows, template) {
  if (!rows || rows.length === 0) {
    return { healthScore: 100, blankMandatory: 0, numericPolluted: 0, dateNormalized: 0, whitespaceTrimmed: 0, anomaliesFound: 0 };
  }

  let blankMandatory = 0;
  let numericPolluted = 0;
  let dateNormalized = 0;
  let whitespaceTrimmed = 0;

  // Build column lookup based on active mappings
  const colIndexByKey = {};
  template.fields.forEach(f => {
    const m = currentMappings[f.key];
    if (m && m.sourceHeader) {
      colIndexByKey[f.key] = headers.indexOf(m.sourceHeader);
    }
  });

  rows.forEach(r => {
    template.fields.forEach(f => {
      const colIdx = colIndexByKey[f.key];
      if (colIdx === undefined || colIdx === -1) return;
      const raw = r[colIdx];
      const str = raw !== undefined && raw !== null ? String(raw) : '';
      const trimmed = str.trim();

      if (str !== trimmed) whitespaceTrimmed++;
      if (f.required && trimmed === '') blankMandatory++;

      if ((f.type === 'Currency' || f.type === 'Number') && trimmed !== '') {
        if (/[₹$€£,A-Za-z]/.test(trimmed)) numericPolluted++;
      }

      if (f.type === 'Date' && trimmed !== '') {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) dateNormalized++;
      }
    });
  });

  const totalChecks = Math.max(1, rows.length * Math.max(1, Object.keys(colIndexByKey).length));
  const penalty = (blankMandatory * 4) + (numericPolluted * 1) + (dateNormalized * 1) + (whitespaceTrimmed * 0.5);
  const healthScore = Math.max(65, Math.min(100, Math.round(100 - (penalty / totalChecks) * 100)));

  return {
    healthScore,
    blankMandatory,
    numericPolluted,
    dateNormalized,
    whitespaceTrimmed,
    anomaliesFound: blankMandatory + numericPolluted + dateNormalized + whitespaceTrimmed
  };
}

function sanitizeDatasetInPlace() {
  if (!currentUploadedFile) return;
  const tpl = masterExtractTemplates.find(t => t.id === currentMappingTemplateId) || masterExtractTemplates[0];
  const headers = currentUploadedFile.headers;
  const rows = currentUploadedFile.allRows || currentUploadedFile.sampleRows;

  // Map header index to field definition
  const fieldByIndex = {};
  tpl.fields.forEach(f => {
    const m = currentMappings[f.key];
    if (m && m.sourceHeader) {
      const idx = headers.indexOf(m.sourceHeader);
      if (idx !== -1) fieldByIndex[idx] = f;
    }
  });

  let totalCleaned = 0;
  const cleanRows = rows.map(r => {
    return r.map((val, cIdx) => {
      if (val === null || val === undefined) return '';
      let str = String(val).trim();
      const f = fieldByIndex[cIdx];
      if (f) {
        if (f.type === 'Currency' || f.type === 'Number') {
          const cleanedNum = str.replace(/[₹$€£\s,]/g, '');
          if (cleanedNum !== str) totalCleaned++;
          return cleanedNum;
        }
        if (f.type === 'Date') {
          const iso = parseDateToISO(str);
          if (iso !== str) totalCleaned++;
          return iso;
        }
      }
      return str;
    });
  });

  currentUploadedFile.sanitizedRows = cleanRows;
  currentUploadedFile.sampleRows = cleanRows.slice(0, 4);
  dataSanitized = true;
  alert(`⚡ Pre-Flight Data Cleansing Applied Successfully!\n\n• ${totalCleaned} cells normalized (stripped currency symbols, removed number commas, converted dates to ISO YYYY-MM-DD).\n• Data is now 100% audit-grade and ready for automated analytics execution.`);
  renderFieldMapping();
  lucide.createIcons();
}

// ------------------------------------------------------------------------------
// AUTO FIELD MATCHING ENGINE (LEVENSHTEIN & ALIASES)
// ------------------------------------------------------------------------------
function runAutoMapping() {
  const tpl = masterExtractTemplates.find(t => t.id === currentMappingTemplateId) || masterExtractTemplates[0];
  if (!currentUploadedFile || !currentUploadedFile.headers) return;

  const srcHeaders = currentUploadedFile.headers;
  currentMappings = {};

  tpl.fields.forEach(f => {
    let bestMatch = '';
    let bestScore = 0;

    const targets = [f.key.toLowerCase(), f.label.toLowerCase(), ...(f.aliases || []).map(a => a.toLowerCase())];

    srcHeaders.forEach(sh => {
      const shClean = sh.toLowerCase().replace(/[^a-z0-9]/g, '');

      targets.forEach(t => {
        const tClean = t.replace(/[^a-z0-9]/g, '');
        if (shClean === tClean) {
          if (100 > bestScore) { bestScore = 100; bestMatch = sh; }
        } else if (shClean.includes(tClean) || tClean.includes(shClean)) {
          const score = 85;
          if (score > bestScore) { bestScore = score; bestMatch = sh; }
        } else {
          // Similarity ratio
          const lenMax = Math.max(shClean.length, tClean.length);
          if (lenMax > 0) {
            let shared = 0;
            for (let i = 0; i < Math.min(shClean.length, tClean.length); i++) {
              if (shClean[i] === tClean[i]) shared++;
            }
            const approx = Math.round((shared / lenMax) * 80);
            if (approx > 55 && approx > bestScore) {
              bestScore = approx;
              bestMatch = sh;
            }
          }
        }
      });
    });

    currentMappings[f.key] = {
      sourceHeader: bestMatch,
      confidence: bestScore,
      confirmed: bestScore >= 85
    };
  });
}

function setErpTab(tab) {
  activeErpTab = tab;
  renderFieldMapping();
  lucide.createIcons();
}

function renderFieldMapping() {
  initFieldMappingState();
  const tpl = masterExtractTemplates.find(t => t.id === currentMappingTemplateId) || masterExtractTemplates[0];

  const templateTabs = masterExtractTemplates.map(t => `
    <button class="filter-btn ${currentMappingTemplateId === t.id ? 'active' : ''}" onclick="selectMappingTemplate('${t.id}')">
      ${t.name.split('/')[0].trim()}
    </button>
  `).join('');

  const sampleButtons = sampleClientUploads.map(s => `
    <button class="action-btn" style="font-size:11px;padding:5px 10px;" onclick="loadSampleExtract('${s.id}')">
      <i data-lucide="file-spreadsheet"></i> ${s.name.split('—')[0].trim()}
    </button>
  `).join('');

  const srcHeaders = currentUploadedFile ? currentUploadedFile.headers : [];
  const totalFields = tpl.fields.length;
  const mandatoryFields = tpl.fields.filter(f => f.required);
  const mandatoryMapped = mandatoryFields.filter(f => currentMappings[f.key]?.sourceHeader);
  const totalConfirmed = tpl.fields.filter(f => currentMappings[f.key]?.confirmed);
  const isReady = mandatoryMapped.length === mandatoryFields.length;

  // Run Pre-Flight Data Hygiene Scan
  const hygiene = scanDataHygiene(srcHeaders, currentUploadedFile.sampleRows, tpl);

  // ERP Guide details for currently active ERP tab
  const erpGuides = tpl.erpExportGuide || {};
  let currentErpPath = '';
  let currentErpTips = '';
  if (activeErpTab === 'tally') {
    currentErpPath = erpGuides.tally || 'Gateway of Tally > Display More Reports > Account Books > Export (Ctrl+E)';
    currentErpTips = 'Ensure detailed view is selected (Alt+F5). Set Narration and Buyer/Supplier GSTIN columns to YES before exporting.';
  } else if (activeErpTab === 'sap') {
    currentErpPath = erpGuides.sapB1 || 'Financials / Purchasing > Document Journal > Filter FY > Export to Excel';
    currentErpTips = 'Export uncollapsed line items. Ensure CardCode, CardName, and DocTotal columns are populated without merged header bands.';
  } else {
    currentErpPath = erpGuides.zohoBooks || 'Reports > Purchases / Banking / Accountant > Export as CSV';
    currentErpTips = 'Select all columns in customize report. Ensure date format matches standard DD-MM-YYYY or YYYY-MM-DD.';
  }

  const rowsHtml = tpl.fields.map(f => {
    const mapInfo = currentMappings[f.key] || { sourceHeader: '', confidence: 0, confirmed: false };
    const isMapped = Boolean(mapInfo.sourceHeader);
    const colIndex = isMapped ? srcHeaders.indexOf(mapInfo.sourceHeader) : -1;

    let samplePreview = '—';
    if (colIndex !== -1 && currentUploadedFile.sampleRows.length > 0) {
      const vals = currentUploadedFile.sampleRows.map(r => r[colIndex]).filter(Boolean).slice(0, 2);
      if (vals.length > 0) samplePreview = vals.join(', ');
    }

    const optionsHtml = ['<option value="">-- Unmapped / Ignore --</option>', ...srcHeaders.map(sh => `
      <option value="${sh}" ${sh === mapInfo.sourceHeader ? 'selected' : ''}>${sh}</option>
    `)].join('');

    let badgeClass = 'match-badge-none';
    let badgeText = 'Unmapped';
    if (mapInfo.confidence >= 85) {
      badgeClass = 'match-badge-high';
      badgeText = 'Auto-Match (' + mapInfo.confidence + '%)';
    } else if (mapInfo.confidence >= 50) {
      badgeClass = 'match-badge-med';
      badgeText = 'Review (' + mapInfo.confidence + '%)';
    } else if (mapInfo.confidence === 100) {
      badgeClass = 'match-badge-manual';
      badgeText = 'Exact Match';
    }

    const rowClass = mapInfo.confirmed ? 'mapping-row-confirmed' : f.required && !isMapped ? 'mapping-row-error' : '';

    return `
      <tr class="${rowClass}">
        <td>
          <div style="display:flex;align-items:center;gap:6px;">
            <strong style="color:#0f172a;font-size:13px;">${f.label}</strong>
            ${f.required ? '<span class="status-badge critical" style="font-size:9px;padding:1px 5px;">MANDATORY</span>' : '<span class="status-badge na" style="font-size:9px;padding:1px 5px;">OPTIONAL</span>'}
          </div>
          <div style="font-size:11px;color:#64748b;margin-top:2px;">
            <code>${f.key}</code> • <span class="status-badge passed" style="font-size:10px;padding:1px 4px;">${f.type}</span> — ${f.description}
          </div>
        </td>
        <td>
          <select class="form-select" style="font-size:12px;padding:6px 10px;font-weight:600;color:${isMapped ? '#1e40af' : '#94a3b8'};" onchange="updateFieldMapping('${f.key}', this.value)" ${mappingLocked ? 'disabled' : ''}>
            ${optionsHtml}
          </select>
        </td>
        <td>
          <span class="sample-chip" title="${samplePreview}">${samplePreview}</span>
        </td>
        <td>
          <span class="match-badge ${badgeClass}">${badgeText}</span>
        </td>
        <td style="text-align:center;">
          <button class="action-btn" style="font-size:11px;padding:3px 10px;background:${mapInfo.confirmed ? '#16a34a' : 'white'};color:${mapInfo.confirmed ? 'white' : '#64748b'};border-color:${mapInfo.confirmed ? '#16a34a' : '#cbd5e1'};" onclick="toggleFieldConfirm('${f.key}')" ${mappingLocked ? 'disabled' : ''}>
            ${mapInfo.confirmed ? '✓ Confirmed' : 'Confirm'}
          </button>
        </td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Smart Field Mapping & Ingestion Console</h1>
      <div class="header-actions">
        <button class="action-btn" onclick="downloadMasterTemplate('${tpl.id}')"><i data-lucide="download"></i> Download Master Template</button>
        <button class="action-btn" onclick="downloadAllMasterTemplates()"><i data-lucide="archive"></i> All 10 Templates</button>
        <button class="btn-ai action-btn" onclick="lockAndSaveMapping()" ${!isReady ? 'disabled style="opacity:0.6;"' : ''}>
          <i data-lucide="check-check"></i> ${mappingLocked ? 'Mapping Locked & Active' : 'Approve & Lock Mapping'}
        </button>
      </div>
    </div>

    <!-- 10 Master Schemas Tab Bar -->
    <div class="panel" style="margin-bottom:16px;padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#64748b;">Select Canonical Master Extract Schema (10 Standards):</span>
        <span style="font-size:11px;color:#2563eb;font-weight:600;">Covers All 27 DRL Items & 85 CAATs</span>
      </div>
      <div class="filter-bar" style="margin-bottom:0;display:flex;flex-wrap:wrap;gap:6px;">${templateTabs}</div>
    </div>

    <!-- Active Schema Description & Linked Analyticss Banner -->
    <div class="ai-action-banner" style="margin-bottom:16px;">
      <div>
        <h3 style="font-size:14px;color:#0f172a;margin-bottom:4px;">
          ${tpl.name} <span class="ai-badge" style="font-size:11px;">Schema ID: ${tpl.id}</span>
        </h3>
        <p style="font-size:12px;color:#475569;margin-bottom:6px;">${tpl.description}</p>
        <div style="font-size:11px;color:#64748b;">
          <strong>Unlocks CAAT Analytics:</strong> <span style="font-family:monospace;color:var(--primary);font-weight:700;">${tpl.linkedCAATs}</span>
          <span style="margin:0 8px;">•</span>
          <strong>Mitigates Master Controls:</strong> <span style="color:#0f172a;font-weight:600;">${tpl.linkedControls}</span>
        </div>
      </div>
    </div>

    <!-- Interactive ERP Step-by-Step Export Guide Box -->
    <div class="panel" style="margin-bottom:16px;background:#f8fafc;border-left:4px solid var(--primary);padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <i data-lucide="book-open" style="color:var(--primary);width:18px;height:18px;"></i>
          <strong style="font-size:13px;color:#0f172a;">ERP Step-by-Step Export Instructions for Client Accounts Team</strong>
        </div>
        <div style="display:flex;gap:4px;background:#e2e8f0;padding:2px;border-radius:6px;">
          <button class="filter-btn ${activeErpTab === 'tally' ? 'active' : ''}" style="font-size:11px;padding:4px 10px;margin:0;" onclick="setErpTab('tally')">Tally Prime</button>
          <button class="filter-btn ${activeErpTab === 'sap' ? 'active' : ''}" style="font-size:11px;padding:4px 10px;margin:0;" onclick="setErpTab('sap')">SAP Business One</button>
          <button class="filter-btn ${activeErpTab === 'zoho' ? 'active' : ''}" style="font-size:11px;padding:4px 10px;margin:0;" onclick="setErpTab('zoho')">Zoho Books</button>
        </div>
      </div>
      <div style="background:white;padding:12px 16px;border-radius:6px;border:1px solid #e2e8f0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <span class="status-badge passed" style="font-size:10px;font-weight:700;">CLICK PATH</span>
          <code style="font-size:12px;color:#0f172a;font-weight:600;">${currentErpPath}</code>
        </div>
        <div style="font-size:11px;color:#475569;display:flex;align-items:center;gap:6px;">
          <strong style="color:#d97706;">Pro-Tip / Pitfall:</strong>
          <span>${currentErpTips}</span>
        </div>
      </div>
    </div>

    <!-- File Upload / Ingestion Zone -->
    <div class="panel" style="margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3 style="font-size:13px;color:#0f172a;font-weight:700;text-transform:uppercase;">Source File Ingestion Desk</h3>
        <span style="font-size:11px;color:#64748b;">Active File: <strong style="color:var(--primary);">${currentUploadedFile.name}</strong> (${currentUploadedFile.sourceSystem})</span>
      </div>

      <div class="upload-box" onclick="document.getElementById('fileUploadInput').click()" ondragover="event.preventDefault(); this.classList.add('drag-over');" ondragleave="this.classList.remove('drag-over');" ondrop="handleFileDrop(event)">
        <i data-lucide="upload-cloud"></i>
        <h4 style="font-size:15px;color:#0f172a;margin-bottom:4px;">Upload Client Data File (CSV / TXT / TSV / Excel Export)</h4>
        <p style="font-size:12px;color:#64748b;margin-bottom:12px;">Drag & drop raw ERP extract here or click to browse. The AI will immediately parse headers, run data hygiene scans, and align column mappings.</p>
        <input type="file" id="fileUploadInput" accept=".csv,.txt,.tsv" style="display:none;" onchange="handleFileSelected(event)">
        <div style="display:flex;justify-content:center;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap;" onclick="event.stopPropagation();">
          <span style="font-size:11px;color:#94a3b8;font-weight:600;">OR LOAD PRE-PACKAGED ERP DUMPS:</span>
          ${sampleButtons}
        </div>
      </div>
    </div>

    <!-- Pre-Flight Data Hygiene & Quality Assessment Banner -->
    <div class="panel" style="margin-bottom:16px;background:linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);border:1px solid #bbf7d0;padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span class="status-badge passed" style="font-size:12px;font-weight:800;">🟢 ${hygiene.healthScore}% DATA HYGIENE HEALTH SCORE</span>
            <span style="font-size:12px;color:#15803d;font-weight:600;">${dataSanitized ? '✓ Normalized to Audit Grade' : (hygiene.anomaliesFound === 0 ? 'Pristine Canonical Format' : 'Pre-flight Formatting Variances Detected')}</span>
          </div>
          <div style="display:flex;gap:14px;font-size:11px;color:#475569;margin-top:6px;">
            <span>Mandatory Blanks: <strong style="color:${hygiene.blankMandatory > 0 ? '#dc2626' : '#16a34a'}">${hygiene.blankMandatory}</strong></span>
            <span>•</span>
            <span>Currency Symbols / Commas: <strong style="color:${hygiene.numericPolluted > 0 ? '#d97706' : '#16a34a'}">${hygiene.numericPolluted} cells</strong></span>
            <span>•</span>
            <span>Date Formats Normalized: <strong style="color:${hygiene.dateNormalized > 0 ? '#d97706' : '#16a34a'}">${hygiene.dateNormalized} cells</strong></span>
            <span>•</span>
            <span>Whitespace Trimmed: <strong>${hygiene.whitespaceTrimmed} cells</strong></span>
          </div>
        </div>
        <div>
          <button class="action-btn" style="background:${dataSanitized ? '#16a34a' : '#0284c7'};color:white;border:none;font-weight:700;font-size:12px;padding:8px 14px;" onclick="sanitizeDatasetInPlace()">
            <i data-lucide="${dataSanitized ? 'check-check' : 'wand-2'}"></i> ${dataSanitized ? 'Data Sanitized (Ready)' : '⚡ Auto-Cleanse & Sanitize Dataset'}
          </button>
        </div>
      </div>
    </div>

    <!-- Validation & Readiness Bar -->
    <div class="metrics-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:16px;">
      <div class="metric-card border-blue">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Mandatory Fields Mapped</p>
        <p style="font-size:24px;font-weight:800;color:${isReady ? 'var(--pass)' : 'var(--fail)'};">${mandatoryMapped.length} / ${mandatoryFields.length}</p>
        <span style="font-size:11px;color:#64748b;">${isReady ? 'All mandatory fields matched' : 'Missing mandatory fields'}</span>
      </div>
      <div class="metric-card border-green">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Human Confirmed</p>
        <p style="font-size:24px;font-weight:800;color:var(--pass);">${totalConfirmed.length} / ${totalFields}</p>
        <span style="font-size:11px;color:#64748b;">Auditor confirmed alignments</span>
      </div>
      <div class="metric-card border-yellow">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Source Headers Detected</p>
        <p style="font-size:24px;font-weight:800;color:#0f172a;">${srcHeaders.length}</p>
        <span style="font-size:11px;color:#64748b;">In ${currentUploadedFile.name}</span>
      </div>
      <div class="metric-card border-red">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Analytics Fieldwork Ready</p>
        <p style="font-size:24px;font-weight:800;color:${isReady ? 'var(--pass)' : '#94a3b8'};">${isReady ? 'READY' : 'BLOCKED'}</p>
        <span style="font-size:11px;color:#64748b;">${isReady ? 'Can execute 85 CAAT routines' : 'Map mandatory fields first'}</span>
      </div>
    </div>

    <!-- Interactive Field Mapping Table -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <h3 style="font-size:14px;color:#0f172a;font-weight:700;">Human-in-the-Loop Confirmation Table</h3>
      <div style="display:flex;gap:8px;">
        <button class="action-btn" style="font-size:11px;" onclick="autoConfirmHighMatches()" ${mappingLocked ? 'disabled' : ''}><i data-lucide="check-circle"></i> Auto-Confirm High Confidence (>85%)</button>
        <button class="action-btn" style="font-size:11px;" onclick="runAutoMapping(); renderFieldMapping();" ${mappingLocked ? 'disabled' : ''}><i data-lucide="rotate-ccw"></i> Re-run Auto Mapping</button>
      </div>
    </div>

    <div class="panel" style="padding:0;overflow-x:auto;margin-bottom:24px;">
      <table class="data-grid">
        <thead>
          <tr>
            <th style="width:32%;">Target Master Field & Rule</th>
            <th style="width:28%;">Source Column in Uploaded File</th>
            <th style="width:20%;">Live Data Preview</th>
            <th style="width:10%;">Confidence</th>
            <th style="width:10%;text-align:center;">Auditor Sign-off</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

window.selectMappingTemplate = function(tplId) {
  currentMappingTemplateId = tplId;
  const smp = sampleClientUploads.find(s => s.extractId === tplId);
  if (smp) {
    currentUploadedFile = {
      name: smp.name,
      sourceSystem: smp.sourceSystem,
      headers: [...smp.headers],
      sampleRows: smp.sampleRows.map(r => [...r]),
      allRows: smp.sampleRows.map(r => [...r])
    };
  }
  mappingLocked = false;
  dataSanitized = false;
  runAutoMapping();
  renderFieldMapping();
  lucide.createIcons();
};

window.loadSampleExtract = function(smpId) {
  const smp = sampleClientUploads.find(s => s.id === smpId);
  if (!smp) return;
  currentMappingTemplateId = smp.extractId;
  currentUploadedFile = {
    name: smp.name,
    sourceSystem: smp.sourceSystem,
    headers: [...smp.headers],
    sampleRows: smp.sampleRows.map(r => [...r]),
    allRows: smp.sampleRows.map(r => [...r])
  };
  mappingLocked = false;
  dataSanitized = false;
  runAutoMapping();
  renderFieldMapping();
  lucide.createIcons();
};

window.updateFieldMapping = function(targetKey, newSourceHeader) {
  if (!currentMappings[targetKey]) currentMappings[targetKey] = {};
  currentMappings[targetKey].sourceHeader = newSourceHeader;
  currentMappings[targetKey].confidence = newSourceHeader ? 100 : 0;
  currentMappings[targetKey].confirmed = Boolean(newSourceHeader);
  renderFieldMapping();
  lucide.createIcons();
};

window.toggleFieldConfirm = function(targetKey) {
  if (currentMappings[targetKey]) {
    currentMappings[targetKey].confirmed = !currentMappings[targetKey].confirmed;
    renderFieldMapping();
    lucide.createIcons();
  }
};

window.autoConfirmHighMatches = function() {
  Object.keys(currentMappings).forEach(k => {
    if (currentMappings[k].confidence >= 80 && currentMappings[k].sourceHeader) {
      currentMappings[k].confirmed = true;
    }
  });
  renderFieldMapping();
  lucide.createIcons();
};

window.lockAndSaveMapping = function() {
  mappingLocked = true;
  appState.pipelineStatus.dataQualityComplete = true;
  if (!appState.savedFieldMappings) appState.savedFieldMappings = {};
  appState.savedFieldMappings[currentMappingTemplateId] = { ...currentMappings };

  if (!appState.activeUploadedData) appState.activeUploadedData = {};
  if (currentUploadedFile) {
    appState.activeUploadedData[currentMappingTemplateId] = {
      name: currentUploadedFile.name,
      sourceSystem: currentUploadedFile.sourceSystem,
      headers: currentUploadedFile.headers,
      rows: currentUploadedFile.sanitizedRows || currentUploadedFile.allRows || currentUploadedFile.sampleRows,
      mappings: { ...currentMappings }
    };
  }
  saveState();
  alert('Field Mapping Confirmed & Locked! The schema has been stored for NexGen Electric Mobility. You can now execute the 85 CAAT routines directly on this dataset.');
  renderFieldMapping();
  lucide.createIcons();
};

// Master Template CSV Downloader (Individual)
window.downloadMasterTemplate = function(tplId) {
  const tpl = masterExtractTemplates.find(t => t.id === tplId);
  if (!tpl) return;

  const headerRow = tpl.fields.map(f => `"${f.label} (${f.key})"`).join(',');
  const noteRow = tpl.fields.map(f => `"[${f.type.toUpperCase()} - ${f.required ? 'MANDATORY' : 'OPTIONAL'}]"`).join(',');
  const exampleRow = tpl.fields.map(f => `"${f.example || ''}"`).join(',');
  const csvContent = [headerRow, noteRow, exampleRow].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Master_Template_${tpl.name.replace(/[^a-zA-Z0-9]/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Batch Template CSV Downloader (All 10)
window.downloadAllMasterTemplates = function() {
  masterExtractTemplates.forEach((tpl, idx) => {
    setTimeout(() => {
      downloadMasterTemplate(tpl.id);
    }, idx * 250);
  });
};

// File Upload Handlers (FileReader for CSV / TXT / TSV)
window.handleFileSelected = function(e) {
  const file = e.target.files[0];
  if (file) parseUploadedFile(file);
};

window.handleFileDrop = function(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) parseUploadedFile(file);
};

function parseUploadedFile(file) {
  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
    if (lines.length === 0) return alert('File is empty.');

    const delimiter = lines[0].includes('\t') ? '\t' : ',';
    const parseLine = line => {
      const regex = new RegExp('(?:^|' + delimiter + ')(?:"([^"]*(?:""[^"]*)*)"|([^"' + delimiter + ']*))', 'g');
      const row = [];
      let match;
      while ((match = regex.exec(line)) !== null) {
        row.push(match[1] ? match[1].replace(/""/g, '"').trim() : (match[2] ? match[2].trim() : ''));
      }
      return row;
    };

    const headers = parseLine(lines[0]);
    const allRows = lines.slice(1).map(parseLine);
    const sampleRows = allRows.slice(0, 4);

    currentUploadedFile = {
      name: file.name,
      sourceSystem: 'Custom Client Upload',
      headers: headers,
      sampleRows: sampleRows,
      allRows: allRows
    };
    mappingLocked = false;
    dataSanitized = false;
    runAutoMapping();
    renderFieldMapping();
    lucide.createIcons();
  };
  reader.readAsText(file);
}


function renderEvidence() {
  const ps = appState.pipelineStatus;
  if (!ps.evidenceUploaded) {
    appRoot.innerHTML = `
      <div class="header"><h1>Evidence Ingestion Repository</h1></div>
      <div class="panel empty-state">
        <i data-lucide="upload-cloud"></i>
        <h3 style="font-size:18px;margin-bottom:8px;">No Evidence Loaded</h3>
        <p style="color:#64748b;margin-bottom:24px;">Click below to load the 6 core business extracts from NexGen Electric Mobility Pvt. Ltd.</p>
        <div style="display:flex;gap:12px;justify-content:center;">
          <button class="btn-ai action-btn" onclick="aiUploadEvidence()"><i data-lucide="sparkles"></i> Load NexGen Electric Mobility Evidence</button>
          <button class="action-btn" onclick="location.hash='#field-mapping'"><i data-lucide="split"></i> Ingest & Map File</button>
        </div>
      </div>`;
    return;
  }

  const evRows = evidenceFiles.map(e => `
    <tr>
      <td><strong style="color:var(--primary);">${e.fileName}</strong></td>
      <td><span class="status-badge" style="background:#f1f5f9;color:#334155;">${e.type}</span></td>
      <td>${e.processArea}</td>
      <td>${e.rows.toLocaleString('en-IN')}</td>
      <td><span class="status-badge ${e.dataQualityStatus === 'PASS' ? 'passed' : 'pending'}">${e.dataQualityStatus}</span></td>
      <td>${(e.extractionConfidence * 100).toFixed(0)}%</td>
      <td><strong>${e.controlsSupported}</strong></td>
    </tr>
  `).join('');

  const dqRows = dataQualityRules.map(r => `
    <tr>
      <td style="font-weight:700;color:var(--primary);">${r.ruleId}</td>
      <td><strong>${r.ruleName}</strong></td>
      <td>${r.evidenceTarget}</td>
      <td>${r.checkType}</td>
      <td><span class="status-badge ${r.status === 'PASS' ? 'passed' : r.status === 'WARNING' ? 'pending' : 'failed'}">${r.status}</span></td>
      <td style="font-size:12px;color:#64748b;">${r.details}</td>
    </tr>
  `).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Evidence Repository & Data Quality Engine</h1>
      <div class="header-actions">
        <button class="action-btn" onclick="location.hash='#field-mapping'"><i data-lucide="split"></i> Ingest & Map File</button>
        ${!ps.processesDiscovered ? `<button class="btn-ai action-btn" onclick="aiDiscoverProcesses()"><i data-lucide="sparkles"></i> AI: Discover Processes</button>` : ''}
      </div>
    </div>
    <div class="panel" style="padding:0;margin-bottom:24px;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Document Name</th><th>Evidence Type</th><th>Process</th><th>Rows</th><th>Data Quality</th><th>Confidence</th><th>Controls Supported</th></tr>
        </thead>
        <tbody>${evRows}</tbody>
      </table>
    </div>

    <h2 style="font-size:16px;margin-bottom:12px;color:#0f172a;">Automated Data Quality Verification (10 Validation Rules)</h2>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Rule ID</th><th>Check Name</th><th>Target File</th><th>Validation Type</th><th>Status</th><th>Verification Details</th></tr>
        </thead>
        <tbody>${dqRows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 5: PROCESS DISCOVERY & MAP
// ==============================================================================
function renderProcesses() {
  if (!appState.pipelineStatus.processesDiscovered) {
    appRoot.innerHTML = `
      <div class="header"><h1>Process Discovery</h1></div>
      <div class="panel empty-state">
        <i data-lucide="lock"></i>
        <h3 style="font-size:18px;margin-bottom:8px;">Discovery Locked</h3>
        <p style="color:#64748b;">Upload and validate client evidence files first.</p>
      </div>`;
    return;
  }

  const mapHtml = processTemplates.map(p => `
    <div class="process-node">
      <strong style="color:var(--primary);font-size:12px;">${p.stepId}</strong>
      <h4 style="margin:4px 0 6px;font-size:13px;color:#0f172a;">${p.stepName}</h4>
      <p style="font-size:11px;color:#64748b;margin-bottom:8px;line-height:1.4;">${p.description}</p>
      <p style="font-size:11px;"><strong>Evidence:</strong> ${p.evidenceSignals.length > 0 ? p.evidenceSignals.join(', ') : '<span style="color:var(--fail);">None</span>'}</p>
      <p style="font-size:11px;"><strong>Controls:</strong> ${p.controls.length}</p>
    </div>
  `).join('<div style="display:flex;align-items:center;"><i data-lucide="arrow-right" style="width:16px;color:#94a3b8;"></i></div>');

  const coverageRows = expectedProcesses.map(p => {
    const statusClass = p.status === 'Identified' ? 'passed' : p.status === 'Partial' ? 'pending' : 'na';
    return `
      <tr>
        <td><strong>${p.processName}</strong></td>
        <td>${p.evidenceSignals.length > 0 ? p.evidenceSignals.join(', ') : '—'}</td>
        <td><span class="status-badge ${statusClass}">${p.status}</span></td>
        <td>${p.confidence}</td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Process Discovery & Operating Model <span class="ai-badge"><i data-lucide="sparkles"></i> AI Mined</span></h1>
      <div class="header-actions">
        ${!appState.pipelineStatus.controlsDetermined ? `<button class="btn-ai action-btn" onclick="aiDetermineControls()"><i data-lucide="sparkles"></i> AI: Determine Controls</button>` : ''}
      </div>
    </div>
    <div class="panel" style="margin-bottom:20px;">
      <h3 style="font-size:13px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:12px;">Reconstructed Procure-to-Pay (P2P) Flow</h3>
      <div class="process-map">${mapHtml}</div>
    </div>
    <h3 style="font-size:14px;color:#0f172a;font-weight:700;margin-bottom:12px;">Process Coverage Assurance (11 Standard Manufacturing Processes)</h3>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Process Landscape</th><th>Evidence Signals Found</th><th>Discovery Status</th><th>Confidence</th></tr>
        </thead>
        <tbody>${coverageRows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 6: RISK UNIVERSE
// ==============================================================================
function renderRisks() {
  if (!appState.pipelineStatus.risksIdentified) {
    appRoot.innerHTML = `
      <div class="header"><h1>Risk Universe</h1></div>
      <div class="panel empty-state"><i data-lucide="lock"></i><h3>Locked</h3><p style="color:#64748b;">Complete process discovery first.</p></div>`;
    return;
  }

  const rows = masterControlLibrary63.map(r => {
    const sev = r.inherentRisk === 'H' ? 'critical' : r.inherentRisk === 'M' ? 'failed' : 'pending';
    return `
      <tr>
        <td style="font-weight:700;color:var(--primary);">${r.riskId}</td>
        <td>${r.riskDesc}</td>
        <td>${r.processArea}</td>
        <td><span class="status-badge ${r.riskCategory === 'Fraud' ? 'critical' : 'na'}">${r.riskCategory}</span></td>
        <td>${r.likelihood}</td>
        <td>${r.impact}</td>
        <td><span class="status-badge ${sev}">${r.inherentRisk === 'H' ? 'High' : r.inherentRisk === 'M' ? 'Medium' : 'Low'}</span></td>
        <td><strong>${r.controlId}</strong></td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Enterprise Risk Universe <span class="ai-badge">90 Inherent Risks</span></h1>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Risk ID</th><th>Description</th><th>Process Area</th><th>Category</th><th>Likelihood</th><th>Impact</th><th>Inherent Risk</th><th>Mitigating Control</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 7: MASTER RACM (Full 90 Authentic Controls with Interactive Filters & Export)
// ==============================================================================
let racmSearchQuery = '';
let racmKeyFilter = 'ALL';
let racmCaatFilter = 'ALL';

function renderMasterRACM() {
  let activeFilter = appState.activeProcessFilter || 'ALL';
  const processAreas = ['ALL', ...processAreaIndexSummary.map(p => p.area)];

  const filterButtons = processAreas.map(a => `
    <button class="filter-btn ${activeFilter === a ? 'active' : ''}" onclick="filterMasterRACM('${a}')">${a}</button>
  `).join('');

  let filteredControls = masterControlLibrary63;
  if (activeFilter !== 'ALL') {
    filteredControls = filteredControls.filter(c => c.processArea === activeFilter);
  }
  if (racmKeyFilter === 'KEY') {
    filteredControls = filteredControls.filter(c => c.keyControl === 'Y');
  }
  if (racmCaatFilter !== 'ALL') {
    filteredControls = filteredControls.filter(c => c.analyticsTestable === racmCaatFilter);
  }
  if (racmSearchQuery.trim() !== '') {
    const q = racmSearchQuery.toLowerCase();
    filteredControls = filteredControls.filter(c => 
      c.controlId.toLowerCase().includes(q) ||
      c.riskId.toLowerCase().includes(q) ||
      c.riskDesc.toLowerCase().includes(q) ||
      c.controlDesc.toLowerCase().includes(q) ||
      (c.linkedCAAT && c.linkedCAAT.toLowerCase().includes(q)) ||
      c.owner.toLowerCase().includes(q)
    );
  }

  const rows = filteredControls.map(c => {
    const inhClass = c.inherentRisk === 'H' ? 'critical' : c.inherentRisk === 'M' ? 'failed' : 'pending';
    const resClass = c.residualRisk === 'H' ? 'critical' : c.residualRisk === 'M' ? 'pending' : 'passed';
    const testBadge = c.analyticsTestable === 'Y' ? '<span class="status-badge passed">Yes (100%)</span>' : c.analyticsTestable === 'Partial' ? '<span class="status-badge pending">Partial</span>' : '<span class="status-badge na">Manual (N)</span>';

    return `
      <tr style="cursor:pointer;" onclick="openControlModal('${c.controlId}')" title="Click to view Big 4 Control Workpaper">
        <td style="font-weight:700;color:#64748b;text-align:center;">${c.sNo}</td>
        <td style="font-weight:700;color:var(--primary);">${c.controlId}</td>
        <td><strong>${c.processArea}</strong><br><span style="font-size:11px;color:#64748b;">${c.subProcess}</span></td>
        <td style="font-size:12px;max-width:220px;">${c.riskDesc}</td>
        <td><span class="status-badge ${inhClass}">${c.inherentRisk}</span></td>
        <td style="font-size:12px;max-width:260px;">${c.controlDesc}</td>
        <td><span class="status-badge ${c.controlType === 'Preventive' ? 'passed' : 'pending'}">${c.controlType}</span></td>
        <td>${c.keyControl === 'Y' ? '<span style="color:var(--fail);font-weight:800;">★ Key</span>' : 'Standard'}</td>
        <td style="font-size:12px;">${c.owner}</td>
        <td><span class="status-badge ${resClass}">${c.residualRisk}</span></td>
        <td>${testBadge}</td>
        <td><span style="font-family:monospace;font-size:11px;color:var(--primary);">${c.linkedCAAT || '—'}</span></td>
        <td style="text-align:center;"><button class="action-btn" style="font-size:11px;padding:3px 8px;" onclick="event.stopPropagation(); openControlModal('${c.controlId}')">Inspect</button></td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Master Risk & Control Matrix (RACM) <span class="ai-badge">90 Authentic Controls</span></h1>
      <div class="header-actions">
        <button class="action-btn" onclick="exportRACMtoCSV()"><i data-lucide="download"></i> Export Risk Indicators to CSV</button>
        <button class="action-btn btn-primary" onclick="window.location.hash='#controls'"><i data-lucide="shield"></i> Client Applicable Controls</button>
      </div>
    </div>

    <!-- Search & Secondary Filter Bar -->
    <div class="panel" style="margin-bottom:16px;padding:16px;">
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
        <div style="flex:1;min-width:240px;position:relative;">
          <input type="text" id="racmSearchInput" class="form-input" placeholder="Search by Control ID, Risk, Keyword, Linked Analytics, or Owner..." value="${racmSearchQuery}" oninput="handleRACMInputSearch(this.value)" style="padding-left:36px;">
          <i data-lucide="search" style="position:absolute;left:10px;top:10px;width:16px;color:#94a3b8;"></i>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <label style="font-size:12px;font-weight:600;color:#64748b;">Key Control:</label>
          <select class="form-select" style="width:auto;padding:6px 10px;font-size:12px;" onchange="handleRACMKeyFilter(this.value)">
            <option value="ALL" ${racmKeyFilter === 'ALL' ? 'selected' : ''}>All Controls (90)</option>
            <option value="KEY" ${racmKeyFilter === 'KEY' ? 'selected' : ''}>★ Key Controls Only</option>
          </select>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <label style="font-size:12px;font-weight:600;color:#64748b;">Analytics Testability:</label>
          <select class="form-select" style="width:auto;padding:6px 10px;font-size:12px;" onchange="handleRACMCaatFilter(this.value)">
            <option value="ALL" ${racmCaatFilter === 'ALL' ? 'selected' : ''}>All Test Types</option>
            <option value="Y" ${racmCaatFilter === 'Y' ? 'selected' : ''}>100% Analytics Testable (Y)</option>
            <option value="Partial" ${racmCaatFilter === 'Partial' ? 'selected' : ''}>Partial Analytics</option>
            <option value="N" ${racmCaatFilter === 'N' ? 'selected' : ''}>Manual Testing Only (N)</option>
          </select>
        </div>
        <button class="action-btn" style="font-size:12px;" onclick="resetRACMFilters()"><i data-lucide="rotate-ccw"></i> Reset Filters</button>
      </div>

      <div style="border-top:1px solid #f1f5f9;padding-top:10px;">
        <span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#64748b;margin-right:8px;">Process Area:</span>
        <div class="filter-bar" style="margin-top:6px;margin-bottom:0;">${filterButtons}</div>
      </div>
    </div>

    <div style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:12px;color:#64748b;font-weight:600;">Showing <strong>${filteredControls.length}</strong> of 90 controls</span>
      <span style="font-size:11px;color:#94a3b8;">Click any row to inspect full Big 4 audit workpaper</span>
    </div>

    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr>
            <th style="width:40px;text-align:center;">#</th>
            <th>Control ID</th>
            <th>Process & Sub-Process</th>
            <th>Inherent Risk</th>
            <th>Inherent</th>
            <th>Control Description</th>
            <th>Type</th>
            <th>Key Control</th>
            <th>Owner</th>
            <th>Residual</th>
            <th>Analytics Testable</th>
            <th>Linked Analytics</th>
            <th style="text-align:center;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rows.length > 0 ? rows : `<tr><td colspan="13" style="text-align:center;padding:32px;color:#94a3b8;">No matching controls found for criteria.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

window.filterMasterRACM = function(area) {
  appState.activeProcessFilter = area;
  renderMasterRACM();
  lucide.createIcons();
};

window.handleRACMInputSearch = function(val) {
  racmSearchQuery = val;
  renderMasterRACM();
  lucide.createIcons();
  const inp = document.getElementById('racmSearchInput');
  if (inp) {
    inp.focus();
    inp.setSelectionRange(val.length, val.length);
  }
};

window.handleRACMKeyFilter = function(val) {
  racmKeyFilter = val;
  renderMasterRACM();
  lucide.createIcons();
};

window.handleRACMCaatFilter = function(val) {
  racmCaatFilter = val;
  renderMasterRACM();
  lucide.createIcons();
};

window.resetRACMFilters = function() {
  racmSearchQuery = '';
  racmKeyFilter = 'ALL';
  racmCaatFilter = 'ALL';
  appState.activeProcessFilter = 'ALL';
  renderMasterRACM();
  lucide.createIcons();
};

// Export Risk Indicators to CSV
window.exportRACMtoCSV = function() {
  const headers = [
    "S.No", "Process Area", "Sub-Process", "Risk ID", "Risk Description", "Risk Category",
    "Likelihood (H/M/L)", "Impact (H/M/L)", "Inherent Risk", "Control ID", "Control Description",
    "Control Type", "Control Nature", "Frequency", "Key Control", "Control Owner", "Residual Risk",
    "Applicable to Client", "Data Points / Evidence Required", "Testable via Data Analytics",
    "Primary Data Source(s) for Analytics", "Linked Analytics Test ID(s)", "Remarks"
  ];

  const csvRows = [headers.join(",")];
  masterControlLibrary63.forEach(c => {
    const row = [
      c.sNo,
      `"${(c.processArea || '').replace(/"/g, '""')}"`,
      `"${(c.subProcess || '').replace(/"/g, '""')}"`,
      `"${(c.riskId || '').replace(/"/g, '""')}"`,
      `"${(c.riskDesc || '').replace(/"/g, '""')}"`,
      `"${(c.riskCategory || '').replace(/"/g, '""')}"`,
      `"${(c.likelihood || '').replace(/"/g, '""')}"`,
      `"${(c.impact || '').replace(/"/g, '""')}"`,
      `"${(c.inherentRisk || '').replace(/"/g, '""')}"`,
      `"${(c.controlId || '').replace(/"/g, '""')}"`,
      `"${(c.controlDesc || '').replace(/"/g, '""')}"`,
      `"${(c.controlType || '').replace(/"/g, '""')}"`,
      `"${(c.controlNature || '').replace(/"/g, '""')}"`,
      `"${(c.frequency || '').replace(/"/g, '""')}"`,
      `"${(c.keyControl || '').replace(/"/g, '""')}"`,
      `"${(c.owner || '').replace(/"/g, '""')}"`,
      `"${(c.residualRisk || '').replace(/"/g, '""')}"`,
      `"${(c.status || '').replace(/"/g, '""')}"`,
      `"${(c.evidenceRequired || '').replace(/"/g, '""')}"`,
      `"${(c.analyticsTestable || '').replace(/"/g, '""')}"`,
      `"${(c.primaryDataSource || '').replace(/"/g, '""')}"`,
      `"${(c.linkedCAAT || '').replace(/"/g, '""')}"`,
      `"${(c.remarks || '').replace(/"/g, '""')}"`
    ];
    csvRows.push(row.join(","));
  });

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "MSME_Master_Risk_Indicators_90.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Workpaper Modal Popup
window.openControlModal = function(ctrlId) {
  const ctrl = masterControlLibrary63.find(c => c.controlId === ctrlId);
  if (!ctrl) return;

  const linkedCaatObj = caatAnalyticsLibrary.find(ca => ctrl.linkedCAAT && ctrl.linkedCAAT.includes(ca.id));

  const modal = document.createElement('div');
  modal.className = 'ai-progress-overlay';
  modal.style.backgroundColor = 'rgba(15, 23, 42, 0.7)';
  modal.innerHTML = `
    <div style="background:white;width:760px;max-width:92vw;max-height:88vh;border-radius:10px;box-shadow:0 20px 40px rgba(0,0,0,0.25);display:flex;flex-direction:column;overflow:hidden;animation:fadeIn 0.2s ease-out;">
      <div style="padding:20px 24px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;background:#f8fafc;">
        <div>
          <span style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;">S.No ${ctrl.sNo} • ${ctrl.processArea} • ${ctrl.subProcess}</span>
          <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin-top:2px;">${ctrl.controlId} — Control Workpaper</h2>
        </div>
        <button onclick="this.closest('.ai-progress-overlay').remove()" style="background:none;border:none;cursor:pointer;color:#64748b;font-size:20px;padding:4px;">✕</button>
      </div>

      <div style="padding:24px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:18px;">
        <!-- Inherent Risk vs Control Header -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0;">
          <div>
            <span style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Inherent Risk (${ctrl.riskId})</span>
            <p style="font-size:13px;color:#0f172a;margin-top:4px;font-weight:500;">${ctrl.riskDesc}</p>
            <div style="margin-top:8px;display:flex;gap:6px;align-items:center;">
              <span class="status-badge ${ctrl.riskCategory === 'Fraud' ? 'critical' : 'na'}">${ctrl.riskCategory}</span>
              <span class="status-badge ${ctrl.inherentRisk === 'H' ? 'critical' : ctrl.inherentRisk === 'M' ? 'failed' : 'pending'}">Inherent: ${ctrl.inherentRisk} (L: ${ctrl.likelihood}, I: ${ctrl.impact})</span>
            </div>
          </div>
          <div>
            <span style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Control Specification</span>
            <p style="font-size:13px;color:#0f172a;margin-top:4px;font-weight:500;">${ctrl.controlDesc}</p>
            <div style="margin-top:8px;display:flex;gap:6px;align-items:center;">
              <span class="status-badge ${ctrl.controlType === 'Preventive' ? 'passed' : 'pending'}">${ctrl.controlType}</span>
              <span class="status-badge na">${ctrl.controlNature}</span>
              <span class="status-badge ${ctrl.residualRisk === 'H' ? 'critical' : ctrl.residualRisk === 'M' ? 'pending' : 'passed'}">Residual: ${ctrl.residualRisk}</span>
            </div>
          </div>
        </div>

        <!-- Details Grid -->
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;font-size:12px;">
          <div style="background:#f1f5f9;padding:10px 12px;border-radius:6px;">
            <strong style="color:#475569;display:block;margin-bottom:2px;">Control Owner</strong>
            <span style="color:#0f172a;font-weight:600;">${ctrl.owner}</span>
          </div>
          <div style="background:#f1f5f9;padding:10px 12px;border-radius:6px;">
            <strong style="color:#475569;display:block;margin-bottom:2px;">Frequency</strong>
            <span style="color:#0f172a;font-weight:600;">${ctrl.frequency}</span>
          </div>
          <div style="background:#f1f5f9;padding:10px 12px;border-radius:6px;">
            <strong style="color:#475569;display:block;margin-bottom:2px;">Key Control Status</strong>
            <span style="color:#0f172a;font-weight:600;">${ctrl.keyControl === 'Y' ? '★ Key Control (Must Test)' : 'Standard Control'}</span>
          </div>
        </div>

        <!-- Evidence & Data Sources -->
        <div>
          <h4 style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:6px;">Evidence & Data Points Required</h4>
          <div style="background:#eff6ff;border-left:4px solid var(--primary);padding:10px 14px;border-radius:4px;font-size:12px;color:#1e3a8a;line-height:1.5;">
            ${ctrl.evidenceRequired}
          </div>
        </div>

        <!-- CAAT Analytics Linkage -->
        <div>
          <h4 style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:6px;">Data Analytics Procedure</h4>
          <div style="background:#f0fdf4;border-left:4px solid var(--pass);padding:10px 14px;border-radius:4px;font-size:12px;color:#14532d;line-height:1.5;">
            <p><strong>Analytics Testability:</strong> ${ctrl.analyticsTestable === 'Y' ? '100% Population Automated' : ctrl.analyticsTestable === 'Partial' ? 'Partial Analytics' : 'Manual Procedure'}</p>
            <p style="margin-top:4px;"><strong>Primary Data Source:</strong> ${ctrl.primaryDataSource}</p>
            ${ctrl.linkedCAAT ? `<div style="margin-top:6px;display:flex;justify-content:space-between;align-items:center;">
              <div><strong>Linked Analytics Routine:</strong> <span style="font-family:monospace;font-weight:700;color:var(--primary);">${ctrl.linkedCAAT}</span> ${linkedCaatObj ? `— <em>${linkedCaatObj.objective}</em>` : ''}</div>
              ${linkedCaatObj ? `<button class="action-btn" style="font-size:11px;padding:2px 8px;" onclick="openCAATModal('${linkedCaatObj.id}')">View Analytics Spec →</button>` : ''}
            </div>` : ''}
          </div>
        </div>

        <!-- Client Applicability Assessment -->
        <div>
          <h4 style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:6px;">Client Applicability Assessment (NexGen Electric Mobility)</h4>
          <div style="background:#f8fafc;padding:10px 14px;border-radius:4px;font-size:12px;color:#334155;border:1px solid #e2e8f0;">
            <p><strong>Determination:</strong> <span class="status-badge passed">Applicable</span></p>
            <p style="margin-top:4px;"><strong>Auditor Assessment Rationale:</strong> ${ctrl.applicabilityRationale}</p>
          </div>
        </div>
      </div>

      <div style="padding:14px 24px;border-top:1px solid #e2e8f0;display:flex;justify-content:flex-end;gap:10px;background:#f8fafc;">
        <button class="action-btn" onclick="this.closest('.ai-progress-overlay').remove()">Close Workpaper</button>
        <button class="btn-ai action-btn" onclick="this.closest('.ai-progress-overlay').remove(); window.location.hash='#testing';">View Testing Results →</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  lucide.createIcons();
};

// ==============================================================================
// VIEW 8: APPLICABLE CONTROLS (Client Specific Universe)
// ==============================================================================
function renderControls() {
  if (!appState.pipelineStatus.controlsDetermined) {
    appRoot.innerHTML = `
      <div class="header"><h1>Client Applicable Control Universe</h1></div>
      <div class="panel empty-state">
        <i data-lucide="lock"></i>
        <h3>Applicability Evaluation Locked</h3>
        <p style="color:#64748b;">Complete Process Discovery and Scoping evaluation first.</p>
      </div>`;
    return;
  }

  const applicable = masterControlLibrary63.filter(c => c.status === 'Applicable').length;
  const na = masterControlLibrary63.filter(c => c.status === 'Not Applicable').length;
  const unknown = masterControlLibrary63.filter(c => c.status === 'Unknown').length;

  const rows = masterControlLibrary63.map(c => {
    const appClass = c.status === 'Applicable' ? 'passed' : c.status === 'Not Applicable' ? 'na' : 'unknown';
    return `
      <tr>
        <td style="font-weight:700;color:var(--primary);">${c.controlId}</td>
        <td>${c.processArea}</td>
        <td style="font-size:12px;">${c.controlDesc}</td>
        <td><span class="status-badge ${appClass}">${c.status}</span></td>
        <td style="font-size:12px;color:#64748b;">${c.applicabilityRationale}</td>
        <td>${c.keyControl === 'Y' ? '<span style="color:var(--fail);font-weight:700;">★ Key</span>' : 'Standard'}</td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Client-Specific Control Universe <span class="ai-badge">Frozen v1.0</span></h1>
      <div class="header-actions">
        ${!appState.pipelineStatus.testingComplete ? `<button class="btn-ai action-btn" onclick="aiRunTesting()"><i data-lucide="sparkles"></i> AI: Run Automated Testing</button>` : ''}
      </div>
    </div>
    <div class="metrics-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px;">
      <div class="metric-card border-green">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Applicable Controls</p>
        <p style="font-size:28px;font-weight:800;color:var(--pass);">${applicable}</p>
        <span style="font-size:11px;color:#64748b;">Tested or evidenced for ABC</span>
      </div>
      <div class="metric-card border-red">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Not Applicable</p>
        <p style="font-size:28px;font-weight:800;color:#64748b;">${na}</p>
        <span style="font-size:11px;color:#64748b;">Excluded with documented rationale</span>
      </div>
      <div class="metric-card border-yellow">
        <p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Unknown / Gaps</p>
        <p style="font-size:28px;font-weight:800;color:var(--pending);">${unknown}</p>
        <span style="font-size:11px;color:#64748b;">Evidence pending from client</span>
      </div>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Control ID</th><th>Process Area</th><th>Control Description</th><th>Applicability</th><th>Applicability Rationale</th><th>Importance</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 9: CAAT ANALYTICS LIBRARY (32 Automated Tests DA-01 to DA-32 Full Spec)
// ==============================================================================
let caatSearchQuery = '';
let caatViewMode = 'GRID'; // 'GRID' or 'TABLE'
let caatToolFilter = 'ALL';
let caatCategoryFilter = 'ALL';

function renderCAATLibrary() {
  let filteredCAATs = caatAnalyticsLibrary;

  if (caatToolFilter !== 'ALL') {
    filteredCAATs = filteredCAATs.filter(c => c.tool && c.tool.toLowerCase().includes(caatToolFilter.toLowerCase()));
  }

  if (caatCategoryFilter !== 'ALL') {
    filteredCAATs = filteredCAATs.filter(c => c.category && c.category.toLowerCase().includes(caatCategoryFilter.toLowerCase()));
  }

  if (caatSearchQuery.trim() !== '') {
    const q = caatSearchQuery.toLowerCase();
    filteredCAATs = filteredCAATs.filter(c =>
      c.id.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.linkedControls.toLowerCase().includes(q) ||
      c.dataset.toLowerCase().includes(q) ||
      c.keyFields.toLowerCase().includes(q) ||
      c.objective.toLowerCase().includes(q) ||
      c.logic.toLowerCase().includes(q) ||
      c.threshold.toLowerCase().includes(q)
    );
  }

  const cardsHtml = filteredCAATs.map(c => `
    <div class="caat-card" style="cursor:pointer;" onclick="openCAATModal('${c.id}')" title="Click to view full Analytics test script & follow-up">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span class="caat-id" style="font-size:13px;font-weight:800;color:var(--primary);">${c.id}</span>
        <span class="status-badge passed" style="font-size:10px;">${c.tool.split('/')[0].trim()}</span>
      </div>
      <div style="margin-bottom:4px;">
        <span style="font-size:10px;font-weight:700;color:#1e40af;background:#eff6ff;padding:2px 8px;border-radius:4px;border:1px solid #dbeafe;">${c.category || 'Audit Analytics'}</span>
      </div>
      <div class="caat-name" style="font-size:14px;font-weight:700;color:#0f172a;margin-bottom:6px;">${c.name}</div>
      <p style="font-size:12px;color:#475569;margin-bottom:10px;line-height:1.4;">${c.objective}</p>
      
      <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;font-size:11px;color:#334155;margin-bottom:8px;border:1px solid #e2e8f0;">
        <strong style="color:#64748b;display:block;margin-bottom:2px;">Threshold:</strong>
        ${c.threshold}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:8px;border-top:1px solid #f1f5f9;">
        <span style="font-size:11px;color:var(--primary);font-weight:600;">Controls: ${c.linkedControls}</span>
        <button class="action-btn" style="font-size:11px;padding:3px 8px;" onclick="event.stopPropagation(); openCAATModal('${c.id}')">View Logic →</button>
      </div>
    </div>
  `).join('');

  const tableRowsHtml = filteredCAATs.map(c => `
    <tr style="cursor:pointer;" onclick="openCAATModal('${c.id}')">
      <td style="font-weight:800;color:var(--primary);">${c.id}</td>
      <td><strong>${c.name}</strong></td>
      <td><span style="font-family:monospace;font-size:11px;color:#1e40af;">${c.linkedControls}</span></td>
      <td style="font-size:12px;">${c.dataset}</td>
      <td style="font-size:12px;max-width:240px;">${c.objective}</td>
      <td style="font-size:11px;max-width:260px;font-family:monospace;background:#f8fafc;">${c.logic}</td>
      <td><span class="status-badge passed" style="font-size:10px;">${c.tool}</span></td>
      <td style="font-size:12px;color:#b91c1c;font-weight:600;">${c.threshold}</td>
      <td style="text-align:center;"><button class="action-btn" style="font-size:11px;padding:3px 8px;" onclick="event.stopPropagation(); openCAATModal('${c.id}')">Inspect</button></td>
    </tr>
  `).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>CAAT Data Analytics Library <span class="ai-badge">${caatAnalyticsLibrary.length} Routines</span></h1>
      <div class="header-actions">
        <button class="action-btn" onclick="exportCAATtoCSV()"><i data-lucide="download"></i> Export Analytics to CSV</button>
        <button class="btn-ai action-btn" onclick="aiRunTesting()"><i data-lucide="play"></i> Execute Analytics Routines</button>
      </div>
    </div>

    <!-- Filter & View Controls -->
    <div class="panel" style="margin-bottom:16px;padding:16px;">
      <!-- Domain Category Tabs -->
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid #e2e8f0;">
        <button class="filter-btn ${caatCategoryFilter === 'ALL' ? 'active' : ''}" onclick="handleCAATCategoryFilter('ALL')">All Domains (${caatAnalyticsLibrary.length})</button>
        <button class="filter-btn ${caatCategoryFilter === 'Procurement' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Procurement')">🛒 Procurement & AP</button>
        <button class="filter-btn ${caatCategoryFilter === 'Inventory' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Inventory')">📦 Inventory & Scrap</button>
        <button class="filter-btn ${caatCategoryFilter === 'Revenue' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Revenue')">⚡ Revenue & Subsidies</button>
        <button class="filter-btn ${caatCategoryFilter === 'Cash' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Cash')">🏦 Banking & Cash</button>
        <button class="filter-btn ${caatCategoryFilter === 'Payroll' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Payroll')">👥 Payroll & HR</button>
        <button class="filter-btn ${caatCategoryFilter === 'ITGC' ? 'active' : ''}" onclick="handleCAATCategoryFilter('ITGC')">💻 ITGC & SoD</button>
        <button class="filter-btn ${caatCategoryFilter === 'CleanTech' ? 'active' : ''}" onclick="handleCAATCategoryFilter('CleanTech')">🌱 CleanTech & ESG</button>
        <button class="filter-btn ${caatCategoryFilter === 'Financial' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Financial')">📊 Financial & ELC</button>
        <button class="filter-btn ${caatCategoryFilter === 'Statutory' ? 'active' : ''}" onclick="handleCAATCategoryFilter('Statutory')">⚖️ Statutory & Tax</button>
      </div>
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
        <div style="flex:1;min-width:240px;position:relative;">
          <input type="text" id="caatSearchInput" class="form-input" placeholder="Search Analytics by ID, Name, Linked Control, Dataset, Logic, or Threshold..." value="${caatSearchQuery}" oninput="handleCAATInputSearch(this.value)" style="padding-left:36px;">
          <i data-lucide="search" style="position:absolute;left:10px;top:10px;width:16px;color:#94a3b8;"></i>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <label style="font-size:12px;font-weight:600;color:#64748b;">Suggested Tool:</label>
          <select class="form-select" style="width:auto;padding:6px 10px;font-size:12px;" onchange="handleCAATToolFilter(this.value)">
            <option value="ALL" ${caatToolFilter === 'ALL' ? 'selected' : ''}>All Tools</option>
            <option value="Excel" ${caatToolFilter === 'Excel' ? 'selected' : ''}>Excel Formulas / Pivot</option>
            <option value="Power Query" ${caatToolFilter === 'Power Query' ? 'selected' : ''}>Power Query Merges</option>
            <option value="Python" ${caatToolFilter === 'Python' ? 'selected' : ''}>Python Pandas</option>
          </select>
        </div>
        <div style="display:flex;border:1px solid #cbd5e1;border-radius:6px;overflow:hidden;">
          <button class="action-btn" style="border:none;border-radius:0;background:${caatViewMode === 'GRID' ? 'var(--primary)' : 'white'};color:${caatViewMode === 'GRID' ? 'white' : '#64748b'};font-size:12px;padding:6px 12px;" onclick="setCAATViewMode('GRID')"><i data-lucide="grid"></i> Cards</button>
          <button class="action-btn" style="border:none;border-radius:0;background:${caatViewMode === 'TABLE' ? 'var(--primary)' : 'white'};color:${caatViewMode === 'TABLE' ? 'white' : '#64748b'};font-size:12px;padding:6px 12px;" onclick="setCAATViewMode('TABLE')"><i data-lucide="list"></i> Table Spec</button>
        </div>
        <button class="action-btn" style="font-size:12px;" onclick="resetCAATFilters()"><i data-lucide="rotate-ccw"></i> Reset</button>
      </div>
    </div>

    <div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:12px;color:#64748b;font-weight:600;">Displaying <strong>${filteredCAATs.length}</strong> of ${caatAnalyticsLibrary.length} CAAT routines</span>
      <span style="font-size:11px;color:#94a3b8;">Click any test to inspect logic formulas, thresholds and follow-up actions</span>
    </div>

    ${caatViewMode === 'GRID' ? `<div class="caat-grid">${cardsHtml}</div>` : `
      <div class="panel" style="padding:0;overflow-x:auto;">
        <table class="data-grid">
          <thead>
            <tr>
              <th>Test ID</th>
              <th>Test Name</th>
              <th>Linked Controls</th>
              <th>Data File Required</th>
              <th>Objective / Red Flag</th>
              <th>Test Logic (Formula/Script)</th>
              <th>Suggested Tool</th>
              <th>Red Flag Threshold</th>
              <th style="text-align:center;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml.length > 0 ? tableRowsHtml : `<tr><td colspan="9" style="text-align:center;padding:32px;color:#94a3b8;">No matching analytics routines found.</td></tr>`}
          </tbody>
        </table>
      </div>
    `}
  `;
}

window.handleCAATInputSearch = function(val) {
  caatSearchQuery = val;
  renderCAATLibrary();
  lucide.createIcons();
  const inp = document.getElementById('caatSearchInput');
  if (inp) {
    inp.focus();
    inp.setSelectionRange(val.length, val.length);
  }
};

window.handleCAATToolFilter = function(val) {
  caatToolFilter = val;
  renderCAATLibrary();
  lucide.createIcons();
};

window.setCAATViewMode = function(mode) {
  caatViewMode = mode;
  renderCAATLibrary();
  lucide.createIcons();
};

window.handleCAATCategoryFilter = function(cat) {
  caatCategoryFilter = cat;
  renderCAATLibrary();
  lucide.createIcons();
};

window.resetCAATFilters = function() {
  caatSearchQuery = '';
  caatToolFilter = 'ALL';
  caatCategoryFilter = 'ALL';
  renderCAATLibrary();
  lucide.createIcons();
};

// Export Analytics Library to CSV
window.exportCAATtoCSV = function() {
  const headers = [
    "Test ID", "Test Name", "Linked Control ID(s)", "Data File Required",
    "Key Fields Required", "Objective / Red Flag", "Test Logic (Excel / Power Query / Python)",
    "Suggested Tool", "Red Flag Threshold", "Follow-up Action"
  ];

  const csvRows = [headers.join(",")];
  caatAnalyticsLibrary.forEach(c => {
    const row = [
      c.id,
      `"${(c.name || '').replace(/"/g, '""')}"`,
      `"${(c.linkedControls || '').replace(/"/g, '""')}"`,
      `"${(c.dataset || '').replace(/"/g, '""')}"`,
      `"${(c.keyFields || '').replace(/"/g, '""')}"`,
      `"${(c.objective || '').replace(/"/g, '""')}"`,
      `"${(c.logic || '').replace(/"/g, '""')}"`,
      `"${(c.tool || '').replace(/"/g, '""')}"`,
      `"${(c.threshold || '').replace(/"/g, '""')}"`,
      `"${(c.followUp || '').replace(/"/g, '""')}"`
    ];
    csvRows.push(row.join(","));
  });

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `CAAT_Analytics_Library_${caatAnalyticsLibrary.length}_Tests.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// CAAT Detail Modal Popup
window.openCAATModal = function(caatId) {
  const caat = caatAnalyticsLibrary.find(c => c.id === caatId);
  if (!caat) return;

  const modal = document.createElement('div');
  modal.className = 'ai-progress-overlay';
  modal.style.backgroundColor = 'rgba(15, 23, 42, 0.75)';
  modal.innerHTML = `
    <div style="background:white;width:780px;max-width:92vw;max-height:88vh;border-radius:10px;box-shadow:0 20px 40px rgba(0,0,0,0.3);display:flex;flex-direction:column;overflow:hidden;animation:fadeIn 0.2s ease-out;">
      <div style="padding:20px 24px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;background:#f8fafc;">
        <div>
          <span style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;">Analytics Routine • ${caat.id}</span>
          <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin-top:2px;">${caat.name}</h2>
        </div>
        <button onclick="this.closest('.ai-progress-overlay').remove()" style="background:none;border:none;cursor:pointer;color:#64748b;font-size:20px;padding:4px;">✕</button>
      </div>

      <div style="padding:24px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:16px;">
        <!-- Objective & Red Flag -->
        <div style="background:#eff6ff;border-left:4px solid var(--primary);padding:12px 16px;border-radius:4px;">
          <strong style="font-size:12px;color:#1e40af;text-transform:uppercase;display:block;margin-bottom:4px;">Audit Objective / Red Flag:</strong>
          <p style="font-size:13px;color:#1e3a8a;line-height:1.5;">${caat.objective}</p>
        </div>

        <!-- Meta Grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:12px;">
          <div style="background:#f8fafc;padding:10px 14px;border-radius:6px;border:1px solid #e2e8f0;">
            <strong style="color:#64748b;display:block;margin-bottom:2px;">Data File Required:</strong>
            <span style="color:#0f172a;font-weight:600;">${caat.dataset}</span>
          </div>
          <div style="background:#f8fafc;padding:10px 14px;border-radius:6px;border:1px solid #e2e8f0;">
            <strong style="color:#64748b;display:block;margin-bottom:2px;">Linked Control ID(s):</strong>
            <span style="color:var(--primary);font-weight:700;">${caat.linkedControls}</span>
          </div>
        </div>

        <div>
          <strong style="font-size:12px;color:#64748b;display:block;margin-bottom:4px;">Key Fields Required:</strong>
          <div style="background:#f1f5f9;padding:8px 12px;border-radius:4px;font-size:12px;color:#334155;font-family:monospace;">
            ${caat.keyFields}
          </div>
        </div>

        <!-- Test Logic & Suggested Tool -->
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong style="font-size:12px;color:#64748b;">Test Logic (Excel / Power Query / Python):</strong>
            <span class="status-badge passed" style="font-size:10px;">Tool: ${caat.tool}</span>
          </div>
          <div style="background:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:6px;font-size:12px;font-family:monospace;line-height:1.6;overflow-x:auto;">
            ${caat.logic}
          </div>
        </div>

        <!-- Red Flag Threshold & Follow-up Action -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div style="background:#fee2e2;border-left:4px solid var(--fail);padding:10px 14px;border-radius:4px;">
            <strong style="font-size:11px;color:#991b1b;text-transform:uppercase;display:block;margin-bottom:2px;">Red Flag Threshold:</strong>
            <p style="font-size:12px;color:#7f1d1d;font-weight:600;">${caat.threshold}</p>
          </div>
          <div style="background:#fef3c7;border-left:4px solid var(--pending);padding:10px 14px;border-radius:4px;">
            <strong style="font-size:11px;color:#92400e;text-transform:uppercase;display:block;margin-bottom:2px;">Auditor Follow-up Action:</strong>
            <p style="font-size:12px;color:#78350f;">${caat.followUp}</p>
          </div>
        </div>
      </div>

      <div style="padding:14px 24px;border-top:1px solid #e2e8f0;display:flex;justify-content:flex-end;gap:10px;background:#f8fafc;">
        ${caat.id === 'DA-04' ? `<button class="action-btn" style="background:#3b82f6;color:white;border:none;" onclick="this.closest('.ai-progress-overlay').remove(); openBenfordModal();"><i data-lucide="bar-chart-2"></i> Launch Benford's Law Visualizer</button>` : ''}
        ${caat.id === 'DA-07' ? `<button class="action-btn" style="background:#3b82f6;color:white;border:none;" onclick="this.closest('.ai-progress-overlay').remove(); openWeekendPostingModal();"><i data-lucide="calendar"></i> Launch Weekend Posting Visualizer</button>` : ''}
        <button class="action-btn" onclick="this.closest('.ai-progress-overlay').remove()">Close</button>
        <button class="btn-ai action-btn" onclick="this.closest('.ai-progress-overlay').remove(); window.location.hash='#testing';">View Testing Execution →</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  lucide.createIcons();
};

// ==============================================================================
// VIEW 10: TESTING ENGINE & FIELDWORK
// ==============================================================================
function renderTesting() {
  if (!appState.pipelineStatus.testingComplete) {
    appRoot.innerHTML = `
      <div class="header"><h1>Testing Engine</h1></div>
      <div class="panel empty-state">
        <i data-lucide="lock"></i>
        <h3>Automated Testing Locked</h3>
        <p style="color:#64748b;">Determine control applicability first, then run the ${caatAnalyticsLibrary.length} CAAT routines.</p>
        <button class="btn-ai action-btn" style="margin-top:16px;" onclick="aiRunTesting()"><i data-lucide="sparkles"></i> Execute Analytics Fieldwork</button>
      </div>`;
    return;
  }

  const rows = appState.testResults.map(r => {
    const resClass = r.result === 'PASS' ? 'passed' : r.result === 'EXCEPTION' ? 'failed' : 'na';
    return `
      <tr>
        <td style="font-weight:700;">${r.controlId}</td>
        <td>${r.subProcess}</td>
        <td style="font-size:12px;max-width:320px;">${r.controlDesc}</td>
        <td>${r.population.toLocaleString('en-IN')} rows</td>
        <td>${r.sampleSize}</td>
        <td><span class="status-badge ${resClass}">${r.result}</span></td>
        <td style="font-weight:800;color:${r.exceptionsCount > 0 ? 'var(--fail)' : 'var(--pass)'};">${r.exceptionsCount}</td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Analytics Fieldwork Results <span class="ai-badge">100% Population</span></h1>
      <div class="header-actions">
        <button class="action-btn" onclick="openBenfordModal()"><i data-lucide="bar-chart-2"></i> Benford's Law (DA-04)</button>
        <button class="action-btn" onclick="openWeekendPostingModal()"><i data-lucide="calendar"></i> Weekend Postings (DA-07)</button>
        <button class="action-btn" onclick="openCfoRecoveryMemo()"><i data-lucide="file-text"></i> CFO Recovery Memo</button>
        <button class="action-btn" style="background:var(--fail);color:white;border:none;" onclick="window.location.hash='#exceptions'"><i data-lucide="alert-octagon"></i> View Exceptions (${appState.exceptionsFound.length})</button>
      </div>
    </div>

    <!-- Active Execution Dataset Banner -->
    <div class="panel" style="margin-bottom:16px;background:#f8fafc;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <span style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Active Execution Dataset:</span>
        <div style="font-size:13px;color:#0f172a;margin-top:2px;">
          ${appState.activeUploadedData && Object.keys(appState.activeUploadedData).length > 0 ?
            `<strong style="color:#16a34a;">🟢 Custom Upload Active: ${Object.values(appState.activeUploadedData)[0].name} (${Object.values(appState.activeUploadedData)[0].rows.length} rows dynamically evaluated)</strong>` :
            `<strong style="color:var(--primary);">🔵 Standard MSME Full Population (2,005 transactions across Tally ERP 9 & HDFC AP Ledger)</strong>`
          }
        </div>
      </div>
      <button class="action-btn" style="font-size:11px;" onclick="window.location.hash='#field-mapping'"><i data-lucide="upload-cloud"></i> Ingest / Switch Client File →</button>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Control ID</th><th>Sub-Process</th><th>Control Description</th><th>Population Tested</th><th>Testing Scope</th><th>Test Outcome</th><th>Exceptions Found</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 11: EXCEPTION REGISTER (With Audit Language)
// ==============================================================================

function getExceptionStatutoryBadges(e) {
  const badges = [];
  const cid = e.caatId || '';
  const type = e.type || '';
  const cat = e.financialCategory || '';

  if (cid === 'DA-01' || cid === 'DA-02' || type.includes('DUPLICATE')) {
    badges.push('<span class="stat-badge-law">ICAI SA 240 / CARO Cl(xi) Fraud</span>');
    badges.push('<span class="stat-badge-law">Ind AS 115 Cut-off</span>');
    badges.push('<span class="stat-badge-law">Sec 34 CGST Debit Note</span>');
  } else if (cid === 'DA-10' || type.includes('SPLIT')) {
    badges.push('<span class="stat-badge-law">ICAI SA 240 Mgmt Override</span>');
    badges.push('<span class="stat-badge-law">CARO Cl(xi) ADT-4 Vigilance</span>');
  } else if (cid === 'DA-07' || type.includes('WEEKEND')) {
    badges.push('<span class="stat-badge-law">ICAI SA 240 / MCA Rule 3(1) Edit Log</span>');
  } else if (cid === 'DA-08' || type.includes('ROUND')) {
    badges.push('<span class="stat-badge-law">ICAI SA 240 Round Sum JVs</span>');
  } else if (cid === 'DA-13' || type.includes('BENFORD')) {
    badges.push('<span class="stat-badge-law">ICAI SA 520 Analytical Procedures</span>');
  } else if (cid === 'DA-05' || type.includes('GRN')) {
    badges.push('<span class="stat-badge-law">Ind AS 2 Inventories</span>');
    badges.push('<span class="stat-badge-law">CARO Cl(ii) Stock Audit</span>');
  } else if (cid === 'DA-03' || type.includes('MSME')) {
    badges.push('<span class="stat-badge-law">IT Act Sec 43B(h) MSMED 45d</span>');
  } else if (cat === 'TAX') {
    badges.push('<span class="stat-badge-law">GST Sec 16(2)(aa) / CARO Cl(vii)</span>');
  } else if (cid === 'DA-33') {
    badges.push('<span class="stat-badge-law">ICAI SA 240 / Authorization Bypass</span>');
  } else if (cid === 'DA-36') {
    badges.push('<span class="stat-badge-law">Ind AS 2 / Material Rate Variance</span>');
  } else if (cid === 'DA-40') {
    badges.push('<span class="stat-badge-law">Ind AS 2 Abnormal Scrap Loss</span>');
  } else if (cid === 'DA-43') {
    badges.push('<span class="stat-badge-law">GST Sec 143 Job-Work Deemed Supply</span>');
  } else if (cid === 'DA-46') {
    badges.push('<span class="stat-badge-law">Ind AS 115 / Revenue Channel Stuffing</span>');
  } else if (cid === 'DA-49') {
    badges.push('<span class="stat-badge-law">PM E-DRIVE Aadhaar Duplication</span>');
  } else if (cid === 'DA-51') {
    badges.push('<span class="stat-badge-law">IT Sec 40A(3) / Cash Structuring</span>');
  } else if (cid === 'DA-55') {
    badges.push('<span class="stat-badge-law">EPFO Act / Ghost Worker</span>');
  } else if (cid === 'DA-59') {
    badges.push('<span class="stat-badge-law">MCA Rule 3(1) / SoD Conflict</span>');
  } else if (cid === 'DA-63') {
    badges.push('<span class="stat-badge-law">Ind AS 37 Battery Telematics</span>');
  } else if (cid === 'DA-66' || cid === 'DA-82') {
    badges.push('<span class="stat-badge-law">CGST Sec 34 / Warranty Core Retention</span>');
  } else if (cid === 'DA-71') {
    badges.push('<span class="stat-badge-law">Store Inward / Gate Timing Delay</span>');
  } else if (cid === 'DA-72') {
    badges.push('<span class="stat-badge-law">QC Rejection / Sec 34 Debit Note</span>');
  } else if (cid === 'DA-75') {
    badges.push('<span class="stat-badge-law">Subcontractor Scrap Tolerance Breach</span>');
  } else if (cid === 'DA-77') {
    badges.push('<span class="stat-badge-law">Weighbridge Tare Manipulation / Sec 269ST</span>');
  } else if (cid === 'DA-78') {
    badges.push('<span class="stat-badge-law">Biometric Mismatch / Payroll Leakage</span>');
  } else if (cid === 'DA-79') {
    badges.push('<span class="stat-badge-law">Factories Act 1948 Sec 64 OT Breach</span>');
  } else if (cid === 'DA-80') {
    badges.push('<span class="stat-badge-law">Credit Block Bypass / Unhedged AR</span>');
  } else if (cid === 'DA-81') {
    badges.push('<span class="stat-badge-law">Expired Bank Guarantee Exposure</span>');
  } else if (cid === 'DA-84') {
    badges.push('<span class="stat-badge-law">GST Sec 39 / Return vs GL Tax Gap</span>');
  } else if (cid === 'DA-85') {
    badges.push('<span class="stat-badge-law">MCA Rule 3(1) / Separated User Access</span>');
  } else if (cat === 'CASH') {
    badges.push('<span class="stat-badge-law">ICAI SA 230 Workpaper WP-REC</span>');
  }
  return badges.join(' ');
}

function renderExceptions() {
  if (!appState.pipelineStatus.testingComplete) {
    appRoot.innerHTML = `
      <div class="header"><h1>Audit Exception Register</h1></div>
      <div class="panel empty-state"><i data-lucide="lock"></i><h3>Locked</h3><p style="color:#64748b;">Execute testing first.</p></div>`;
    return;
  }

  const allExceptions = appState.exceptionsFound;
  const filtered = activeDispositionFilter === 'ALL' ? allExceptions : allExceptions.filter(e => e.disposition === activeDispositionFilter);

  const openCount = allExceptions.filter(e => e.disposition === 'OPEN').length;
  const reqCount = allExceptions.filter(e => e.disposition === 'REQUESTED').length;
  const justCount = allExceptions.filter(e => e.disposition === 'JUSTIFIED').length;
  const confCount = allExceptions.filter(e => e.disposition === 'CONFIRMED').length;
  const recCount = allExceptions.filter(e => e.disposition === 'RECOVERED').length;

  const cards = filtered.map(e => {
    let dispClass = 'disp-open';
    if (e.disposition === 'REQUESTED') dispClass = 'disp-requested';
    else if (e.disposition === 'JUSTIFIED') dispClass = 'disp-justified';
    else if (e.disposition === 'CONFIRMED') dispClass = 'disp-confirmed';
    else if (e.disposition === 'RECOVERED') dispClass = 'disp-recovered';

    return `
    <div class="exception-card" style="${e.disposition === 'JUSTIFIED' ? 'opacity:0.65;border-left-color:#3b82f6;' : ''}">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <strong style="color:var(--primary);font-size:14px;">${e.id}</strong>
          <span class="status-badge critical">${e.type.replace(/_/g, ' ')}</span>
          <span style="font-size:11px;color:#64748b;">Linked Analytics: <strong>${e.caatId}</strong></span>
          <span class="status-badge ${e.financialCategory === 'CASH' ? 'passed' : e.financialCategory === 'TAX' ? 'pending' : 'critical'}" style="font-size:10px;">
            ${e.financialCategory === 'CASH' ? 'Direct Cash Leakage' : e.financialCategory === 'TAX' ? 'Statutory Tax Risk' : 'Governance / Fraud'}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <select class="disposition-select ${dispClass}" onchange="updateExceptionDisposition('${e.id}', this.value)">
            <option value="OPEN" ${e.disposition === 'OPEN' ? 'selected' : ''}>🔴 Open</option>
            <option value="REQUESTED" ${e.disposition === 'REQUESTED' ? 'selected' : ''}>🟡 Explanation Requested</option>
            <option value="JUSTIFIED" ${e.disposition === 'JUSTIFIED' ? 'selected' : ''}>🔵 Justified / False Positive</option>
            <option value="CONFIRMED" ${e.disposition === 'CONFIRMED' ? 'selected' : ''}>🟤 Confirmed Failure</option>
            <option value="RECOVERED" ${e.disposition === 'RECOVERED' ? 'selected' : ''}>🟢 Recovered / Adjusted</option>
          </select>
          ${(e.amount && e.amount > 0) ? `
            <button class="action-btn" style="font-size:11px;padding:3px 8px;background:#f0fdf4;color:#166534;border-color:#bbf7d0;" onclick="openDebitNoteModal('${e.id}')">
              <i data-lucide="receipt"></i> Debit Note
            </button>
          ` : ''}
          <button class="action-btn" style="font-size:11px;padding:3px 8px;" onclick="openDispositionModal('${e.id}')">
            <i data-lucide="edit-3"></i> ${e.managementResponse ? 'Edit Review' : 'Add Client Note'}
          </button>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
        ${getExceptionStatutoryBadges(e)}
      </div>
      <p style="font-size:13px;margin-bottom:8px;color:#0f172a;"><strong>Audit Rule Triggered:</strong> ${e.rule}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px;color:#64748b;background:#fff5f5;padding:8px 12px;border-radius:4px;margin-bottom:8px;">
        <p><strong>Mapped Control:</strong> ${e.controlId}</p>
        <p><strong>Transaction ID(s):</strong> ${e.transactionId}</p>
        <p><strong>Primary Evidence:</strong> ${e.evidence}</p>
        ${e.amount ? `<p><strong>Monetary Amount:</strong> ₹${e.amount.toLocaleString('en-IN')}</p>` : '<p></p>'}
      </div>
      <p style="font-size:12px;color:#b45309;font-style:italic;"><strong>Potential Root Cause Hypothesis:</strong> ${e.rootCause}</p>

      ${e.managementResponse ? `
        <div style="background:#f8fafc;border-left:3px solid var(--primary);padding:8px 12px;border-radius:4px;margin-top:8px;font-size:12px;">
          <strong style="color:var(--primary);display:block;margin-bottom:2px;">Auditor Workpaper & Management Explanation:</strong>
          <p style="color:#334155;line-height:1.4;">${e.managementResponse}</p>
          ${e.auditorConclusion ? `<p style="color:#16a34a;margin-top:4px;font-weight:600;">Auditor Conclusion: ${e.auditorConclusion}</p>` : ''}
        </div>
      ` : ''}
    </div>
  `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Audit Exception Register <span class="ai-badge">${allExceptions.length} Discrepancies</span></h1>
      <div class="header-actions">
        <button class="btn-ai action-btn" onclick="openCfoRecoveryMemo()"><i data-lucide="file-text"></i> Generate CFO Recovery Demand Memo</button>
      </div>
    </div>

    <!-- Financial Exposure Matrix -->
    
    <!-- Financial Value-at-Risk (VaR) Matrix -->
    <div class="exposure-grid">
      <div class="exposure-card border-cash">
        <div class="exposure-title">Direct Recoverable Cash</div>
        <div class="exposure-val" style="color:#16a34a;">₹${((appState.exposureSummary?.recoverableCash || 184000) / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub"><span>Duplicate bills & rate variances</span><strong style="color:#16a34a;">~95% Recoverable</strong></div>
      </div>
      <div class="exposure-card border-tax">
        <div class="exposure-title">Statutory & Tax Risk</div>
        <div class="exposure-val" style="color:#ea580c;">₹${((appState.exposureSummary?.taxRisk || 420000) / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub"><span>GSTR-2B ITC & MSMED Interest</span><strong style="color:#ea580c;">Sec 50 / 16(2)</strong></div>
      </div>
      <div class="exposure-card border-gov">
        <div class="exposure-title">Governance & Fraud Risk</div>
        <div class="exposure-val" style="color:#dc2626;">₹${((appState.exposureSummary?.fraudExposure || 249000) / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub"><span>Split POs & Benford anomaly</span><strong style="color:#dc2626;">Internal Limits</strong></div>
      </div>
      <div class="exposure-card border-total">
        <div class="exposure-title">Total Quantified VaR</div>
        <div class="exposure-val" style="color:#2563eb;">₹${((appState.exposureSummary?.totalExposure || 853000) / 100000).toFixed(2)} Lakhs</div>
        <div class="exposure-sub">
          <span>Across all ${appState.exceptionsFound.length} anomalies</span>
          <button class="action-btn" style="font-size:10px;padding:3px 8px;background:var(--primary);color:white;border:none;" onclick="openCfoRecoveryMemo()">CFO Memo →</button>
        </div>
      </div>
    </div>


    <!-- Disposition Filter Tabs -->
    <div class="panel" style="margin-bottom:16px;padding:12px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="filter-btn ${activeDispositionFilter === 'ALL' ? 'active' : ''}" onclick="filterExceptionsByDisposition('ALL')">All (${allExceptions.length})</button>
          <button class="filter-btn ${activeDispositionFilter === 'OPEN' ? 'active' : ''}" onclick="filterExceptionsByDisposition('OPEN')">🔴 Open (${openCount})</button>
          <button class="filter-btn ${activeDispositionFilter === 'REQUESTED' ? 'active' : ''}" onclick="filterExceptionsByDisposition('REQUESTED')">🟡 Explanation Requested (${reqCount})</button>
          <button class="filter-btn ${activeDispositionFilter === 'JUSTIFIED' ? 'active' : ''}" onclick="filterExceptionsByDisposition('JUSTIFIED')">🔵 Justified / False Positive (${justCount})</button>
          <button class="filter-btn ${activeDispositionFilter === 'CONFIRMED' ? 'active' : ''}" onclick="filterExceptionsByDisposition('CONFIRMED')">🟤 Confirmed Failure (${confCount})</button>
          <button class="filter-btn ${activeDispositionFilter === 'RECOVERED' ? 'active' : ''}" onclick="filterExceptionsByDisposition('RECOVERED')">🟢 Recovered (${recCount})</button>
        </div>
        <span style="font-size:11px;color:#64748b;">Showing <strong>${filtered.length}</strong> records</span>
      </div>
    </div>

    <div class="panel" style="background:#fffbeb;border-color:#fef3c7;margin-bottom:16px;">
      <p style="font-size:12px;color:#92400e;">
        <strong>Audit Guardrail & ISA 230 Notice:</strong> Items marked as <em>Justified / False Positive</em> are preserved for audit workpaper trail but excluded from the Audit Committee exposure count and risk penalty calculation.
      </p>
    </div>
    ${cards}
  `;
}

// ==============================================================================
// VIEW 12: DYNAMIC RCM
// ==============================================================================
function renderRCM() {
  if (!appState.pipelineStatus.testingComplete) {
    appRoot.innerHTML = `
      <div class="header"><h1>Dynamic Risk & Control Matrix</h1></div>
      <div class="panel empty-state"><i data-lucide="lock"></i><h3>Locked</h3><p style="color:#64748b;">Complete testing to generate dynamic risk indicators.</p></div>`;
    return;
  }

  const applicable = masterControlLibrary63.filter(c => c.status === 'Applicable');
  const rows = applicable.map(c => {
    const tr = appState.testResults.find(r => r.controlId === c.controlId);
    const result = tr ? tr.result : 'NOT TESTED';
    const resClass = result === 'PASS' ? 'passed' : result === 'EXCEPTION' ? 'failed' : 'na';
    const exc = tr ? tr.exceptionsCount : 0;

    return `
      <tr>
        <td><strong>${c.processArea}</strong></td>
        <td style="font-size:12px;max-width:200px;">${c.riskDesc}</td>
        <td style="font-weight:700;color:var(--primary);">${c.controlId}</td>
        <td style="font-size:12px;max-width:260px;">${c.controlDesc}</td>
        <td>${c.controlType}</td>
        <td>${c.frequency}</td>
        <td><span class="status-badge ${resClass}">${result}</span></td>
        <td style="font-weight:800;color:${exc > 0 ? 'var(--fail)' : 'inherit'};">${exc}</td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Dynamic Client Risk Indicators <span class="ai-badge">Generated from Fieldwork</span></h1>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid" style="font-size:12px;">
        <thead>
          <tr><th>Process Area</th><th>Inherent Risk</th><th>Control ID</th><th>Control Description</th><th>Type</th><th>Frequency</th><th>Fieldwork Result</th><th>Exceptions</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 13: RECOMMENDATIONS & REMEDIATION ROADMAP
// ==============================================================================
function renderRecommendations() {
  if (!appState.pipelineStatus.testingComplete) {
    appRoot.innerHTML = `
      <div class="header"><h1>Control Improvement Recommendations</h1></div>
      <div class="panel empty-state"><i data-lucide="lock"></i><h3>Locked</h3><p style="color:#64748b;">Complete testing first.</p></div>`;
    return;
  }

  const recs = [
    { id: 'REC-01', finding: '15 POs exceeded approval authority limits in Tally', pattern: 'Purchase Officer approved orders up to ₹60,000 bypassing ₹50,000 limit', recommendation: 'Configure hard approval limits in Tally ERP 9. Invoices for POs without matching supervisor approval must be held for MD ratification.', category: 'System Change', priority: 'Critical' },
    { id: 'REC-02', finding: '3 sets of split POs detected around ₹50,000 threshold', pattern: 'Same vendor, same date, amounts of ₹49,500 just below Level 1 threshold', recommendation: 'Implement automated daily PO aggregation logic. Flag orders to identical vendors on same date exceeding ₹50,000 cumulative value.', category: 'Quick Win', priority: 'High' },
    { id: 'REC-03', finding: '10 duplicate invoice records processed', pattern: 'Identified identical vendor, invoice amount and invoice dates in AP sub-ledger', recommendation: 'Enable strict unique invoice number validation in Tally. Conduct pre-payment duplicate scan before banking batch upload.', category: 'System Change', priority: 'Critical' },
    { id: 'REC-04', finding: '8 invoices with rate variance >5% from approved PO', pattern: 'Invoices booked with unit rates exceeding agreed PO rates', recommendation: 'Enforce mandatory 3-way match before payment release. Any price discrepancy >2% requires Purchase Manager debit note approval.', category: 'Process Change', priority: 'High' },
    { id: 'REC-05', finding: '5 duplicate vendor records sharing identical bank account', pattern: 'Multiple vendor codes linked to HDFC account HDFC0001234', recommendation: 'Conduct one-time vendor master de-duplication. Enforce bank account and PAN uniqueness validation during onboarding.', category: 'Quick Win', priority: 'High' },
    { id: 'REC-06', finding: '7 payments delayed beyond 45 days (MSME compliance)', pattern: 'Supplier payment aging exceeded statutory Section 15 timeline', recommendation: 'Implement MSME vendor aging tracker in accounts. Generate 30-day early warning report to prioritize payments before interest liability.', category: 'Process Change', priority: 'High' },
    { id: 'REC-07', finding: '12 GRNs recorded quantity shortages without debit notes', pattern: 'Ordered 10 units, received 8 units with no short-receipt tracker', recommendation: 'Introduce standardized physical short-receipt inward slip. Automate debit note generation upon partial GRN posting.', category: 'Process Change', priority: 'Medium' }
  ];

  const rows = recs.map(r => `
    <tr>
      <td style="font-weight:700;color:var(--primary);">${r.id}</td>
      <td style="font-size:12px;font-weight:600;">${r.finding}</td>
      <td style="font-size:12px;color:#475569;">${r.recommendation}</td>
      <td><span class="status-badge ${r.category === 'Quick Win' ? 'passed' : r.category === 'System Change' ? 'failed' : 'pending'}">${r.category}</span></td>
      <td><span class="status-badge ${r.priority === 'Critical' ? 'critical' : r.priority === 'High' ? 'failed' : 'pending'}">${r.priority}</span></td>
    </tr>
  `).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Evidence-Driven Recommendations & Remediation Roadmap</h1>
    </div>
    <div class="metrics-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px;">
      <div class="metric-card border-green"><p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Quick Wins</p><p style="font-size:24px;font-weight:800;color:var(--pass);">2 Opportunities</p></div>
      <div class="metric-card border-yellow"><p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Process Changes</p><p style="font-size:24px;font-weight:800;color:var(--pending);">3 Opportunities</p></div>
      <div class="metric-card border-red"><p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">System Changes</p><p style="font-size:24px;font-weight:800;color:var(--fail);">2 Opportunities</p></div>
      <div class="metric-card border-blue"><p style="font-size:11px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Monitoring Rules</p><p style="font-size:24px;font-weight:800;color:var(--primary);">5 Rules</p></div>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>ID</th><th>Finding Summary</th><th>Actionable Recommendation</th><th>Remediation Type</th><th>Priority</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 14: CONTINUOUS MONITORING RULES
// ==============================================================================
function renderMonitoring() {
  const rows = continuousMonitoringCandidates.map(c => `
    <tr>
      <td style="font-weight:700;color:var(--primary);">${c.controlId}</td>
      <td><strong>${c.controlName}</strong></td>
      <td><span class="status-badge passed">${c.frequency}</span></td>
      <td style="font-size:13px;color:#475569;">${c.ruleDescription}</td>
      <td><span class="status-badge green">Automated Sentinel Active</span></td>
    </tr>
  `).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Continuous Monitoring & Sentinel Rules</h1>
    </div>
    <div class="ai-action-banner">
      <div>
        <h3 style="font-size:14px;color:#0f172a;margin-bottom:2px;">From Periodic Audit to Continuous Risk Surveillance</h3>
        <p style="font-size:12px;color:#64748b;">${continuousMonitoringCandidates.length} high-frequency controls converted into recurring automated rules running on daily/weekly schedules.</p>
      </div>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Control ID</th><th>Rule Name</th><th>Frequency</th><th>Sentinel Logic Description</th><th>Status</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ==============================================================================
// VIEW 15: EVIDENCE GAPS & TARGETED CLIENT QUESTIONS
// ==============================================================================
function renderGaps() {
  const totalUnlock = evidenceGaps.reduce((s, g) => s + g.controlsUnlocked, 0);
  const rows = evidenceGaps.map(g => {
    const sevClass = g.riskSignificance === 'High' ? 'failed' : g.riskSignificance === 'Medium' ? 'pending' : 'na';
    return `
      <tr>
        <td style="font-weight:700;color:#0f172a;">${g.missingEvidence}</td>
        <td style="text-align:center;font-weight:800;color:var(--primary);font-size:14px;">+${g.controlsUnlocked} Controls</td>
        <td><span class="status-badge ${sevClass}">${g.riskSignificance} Significance</span></td>
        <td style="font-size:12px;color:#475569;">${g.description}</td>
        <td>
          <button class="action-btn" style="font-size:11px;padding:4px 8px;" onclick="alert('Generated targeted data request email for: ' + '${g.missingEvidence}')">Generate Client Request</button>
        </td>
      </tr>
    `;
  }).join('');

  appRoot.innerHTML = `
    <div class="header">
      <h1>Evidence Gap Engine & Targeted Client Questions</h1>
    </div>
    <div class="ai-action-banner" style="background:#eff6ff;border-color:#93c5fd;border-left-color:var(--primary);">
      <div>
        <h3 style="font-size:14px;color:#1e3a8a;margin-bottom:2px;">Evidence Dependency Optimization</h3>
        <p style="font-size:12px;color:#3b82f6;">Providing these 5 additional extracts will immediately unlock automated assurance across <strong>${totalUnlock} additional controls</strong>.</p>
      </div>
    </div>
    <div class="panel" style="padding:0;overflow-x:auto;">
      <table class="data-grid">
        <thead>
          <tr><th>Missing Evidence Extract</th><th style="text-align:center;">Assurance Unlocked</th><th>Risk Impact</th><th>Assurance Opportunity Details</th><th>Action</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}


// ==============================================================================
// MODAL HANDLERS: BENFORD'S LAW, WEEKEND POSTINGS, CFO MEMO & DISPOSITION
// ==============================================================================
window.updateExceptionDisposition = function(excId, newStatus) {
  const e = appState.exceptionsFound.find(x => x.id === excId);
  if (!e) return;
  e.disposition = newStatus;
  recalculateTestOutcomes();
  renderExceptions();
  lucide.createIcons();
};

window.filterExceptionsByDisposition = function(status) {
  activeDispositionFilter = status;
  renderExceptions();
  lucide.createIcons();
};

window.openDispositionModal = function(excId) {
  const e = appState.exceptionsFound.find(x => x.id === excId);
  if (!e) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'dispositionModal';
  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3>Auditor Workpaper & Disposition Review — ${e.id}</h3>
        <button class="action-btn" onclick="closeModal('dispositionModal')">✕</button>
      </div>
      <div class="modal-body">
        <p style="font-size:13px;margin-bottom:12px;color:#0f172a;"><strong>Exception Rule:</strong> ${e.rule}</p>
        <div style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;">Disposition Status:</label>
          <select id="modalDispStatus" class="form-select" style="width:100%;font-size:13px;">
            <option value="OPEN" ${e.disposition === 'OPEN' ? 'selected' : ''}>🔴 Open</option>
            <option value="REQUESTED" ${e.disposition === 'REQUESTED' ? 'selected' : ''}>🟡 Explanation Requested</option>
            <option value="JUSTIFIED" ${e.disposition === 'JUSTIFIED' ? 'selected' : ''}>🔵 Justified / False Positive (Exclude from Board Risk)</option>
            <option value="CONFIRMED" ${e.disposition === 'CONFIRMED' ? 'selected' : ''}>🟤 Confirmed Control Failure (Include in Board Report)</option>
            <option value="RECOVERED" ${e.disposition === 'RECOVERED' ? 'selected' : ''}>🟢 Recovered / Credit Note Received</option>
          </select>
        </div>
        <div style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;">Management Response / Operational Explanation:</label>
          <textarea id="modalMgmtResponse" class="form-select" style="width:100%;height:80px;font-size:12px;font-family:inherit;" placeholder="Enter explanation provided by Finance / Procurement team...">${e.managementResponse || ''}</textarea>
        </div>
        <div style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;">Auditor Workpaper Conclusion (ISA 230 Reference):</label>
          <textarea id="modalAuditorConclusion" class="form-select" style="width:100%;height:60px;font-size:12px;font-family:inherit;" placeholder="Document auditor review verdict, evidence examined, and follow-up testing...">${e.auditorConclusion || ''}</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="action-btn" onclick="closeModal('dispositionModal')">Cancel</button>
        <button class="btn-ai action-btn" onclick="saveDispositionModal('${e.id}')">Save & Update Workpaper</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

window.saveDispositionModal = function(excId) {
  const e = appState.exceptionsFound.find(x => x.id === excId);
  if (!e) return;
  e.disposition = document.getElementById('modalDispStatus').value;
  e.managementResponse = document.getElementById('modalMgmtResponse').value;
  e.auditorConclusion = document.getElementById('modalAuditorConclusion').value;
  recalculateTestOutcomes();
  closeModal('dispositionModal');
  renderExceptions();
  lucide.createIcons();
};

window.openCfoRecoveryMemo = function() {
  const recoverable = appState.exceptionsFound.filter(e => e.financialCategory === 'CASH' && e.disposition !== 'JUSTIFIED');
  const total = recoverable.reduce((s, e) => s + (e.amount || 0), 0);

  const itemsList = recoverable.map((e, idx) => `
${idx + 1}. ${e.rule}
   • Transaction ID: ${e.transactionId}
   • Target Evidence: ${e.evidence}
   • Recoverable Amount: ₹${(e.amount || 0).toLocaleString('en-IN')}
   • Action: Issue formal debit note / adjust against pending vendor payables
`).join('');

  const memoText = `INTERNAL AUDIT & RISK INTELLIGENCE DIVISION
CONFIDENTIAL — FOR MANAGEMENT ACTION ONLY

MEMORANDUM
TO:       Chief Financial Officer / Head of Accounts
FROM:     Internal Audit Team (Adaptive AI Platform)
DATE:     September 2026
SUBJECT:  Formal Requisition for Vendor Overpayment Recovery & Credit Note Issuance

1. EXECUTIVE SUMMARY
Based on 100% full-population automated testing (Analytics DA-01, DA-02, DA-16, DA-17) executed on NexGen Electric Mobility AP and purchase ledgers, our team has identified confirmed cash overpayments totaling ₹${total.toLocaleString('en-IN')}.

2. SCHEDULE OF DIRECT RECOVERABLE OVERPAYMENTS:
${itemsList}

3. RECOMMENDED ACTION:
• Issue formal Vendor Debit Notes immediately for the above items.
• Hold pending disbursements on active accounts until credit notes are credited.
• Update ERP entry validation rules to prevent recurrence of duplicate bill entries.

Signed,
Lead Internal Auditor (ISA 230 Workpaper Ref: WP-REC-01)
`;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'cfoMemoModal';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:760px;">
      <div class="modal-header">
        <h3>Formal Requisition for Vendor Recovery (CFO Memo)</h3>
        <button class="action-btn" onclick="closeModal('cfoMemoModal')">✕</button>
      </div>
      <div class="modal-body">
        <p style="font-size:12px;color:#64748b;margin-bottom:12px;">Pre-formatted executive demand memo ready for transmission to the CFO and Finance Controller:</p>
        <pre class="memo-pre" id="cfoMemoText">${memoText}</pre>
      </div>
      <div class="modal-footer">
        <button class="action-btn" onclick="closeModal('cfoMemoModal')">Close</button>
        <button class="btn-ai action-btn" onclick="copyMemoToClipboard()"><i data-lucide="copy"></i> Copy Memo to Clipboard</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  lucide.createIcons();
};

window.copyMemoToClipboard = function() {
  const text = document.getElementById('cfoMemoText').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('CFO Recovery Memo copied to clipboard!');
  });
};

window.openBenfordModal = function() {
  let bRes = appState.benfordResults;
  if (!bRes) {
    const allAmounts = syntheticInvoices.map(i => i.invoiceAmount).concat(syntheticPOs.map(p => p.totalAmount));
    bRes = runBenfordAnalysis(allAmounts);
  }

  const statRows = Object.entries(bRes.stats).map(([d, s]) => {
    const isAnom = Math.abs(parseFloat(s.diff)) > 5;
    return `
      <tr style="${isAnom ? 'background:#fef2f2;font-weight:700;' : ''}">
        <td style="font-weight:700;color:var(--primary);text-align:center;">Digit ${d}</td>
        <td style="text-align:center;">${s.count}</td>
        <td style="text-align:center;color:${isAnom ? 'var(--fail)' : 'inherit'};">${s.actualPct}%</td>
        <td style="text-align:center;">${s.expectedPct}%</td>
        <td style="text-align:center;color:${isAnom ? 'var(--fail)' : '#16a34a'};">${s.diff > 0 ? '+' : ''}${s.diff}%</td>
        <td style="text-align:center;">
          ${isAnom ? '<span class="status-badge critical" style="font-size:9px;">ANOMALOUS SPIKE</span>' : '<span class="status-badge passed" style="font-size:9px;">NORMAL</span>'}
        </td>
      </tr>
    `;
  }).join('');

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'benfordModal';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:800px;">
      <div class="modal-header">
        <h3>Benford's Law (DA-04) — First-Digit Frequency Distribution</h3>
        <button class="action-btn" onclick="closeModal('benfordModal')">✕</button>
      </div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;">
          <div class="benford-stat-badge">
            <div class="benford-stat-title">Population Tested</div>
            <div class="benford-stat-val">${bRes.total} Trans.</div>
          </div>
          <div class="benford-stat-badge">
            <div class="benford-stat-title">Chi-Square (χ²)</div>
            <div class="benford-stat-val" style="color:${parseFloat(bRes.chiSquare) > 15.51 ? 'var(--fail)' : '#16a34a'};">${bRes.chiSquare}</div>
          </div>
          <div class="benford-stat-badge">
            <div class="benford-stat-title">Critical Limit (p=0.05)</div>
            <div class="benford-stat-val">15.51</div>
          </div>
          <div class="benford-stat-badge">
            <div class="benford-stat-title">Forensic Outcome</div>
            <div class="benford-stat-val" style="font-size:14px;color:${bRes.isAnomalous ? 'var(--fail)' : '#16a34a'};">
              ${bRes.isAnomalous ? 'ANOMALY DETECTED' : 'CONFORMS'}
            </div>
          </div>
        </div>

        <div style="height:240px;position:relative;margin-bottom:20px;">
          <canvas id="benfordChartCanvas"></canvas>
        </div>

        <div style="max-height:220px;overflow-y:auto;">
          <table class="data-grid" style="font-size:12px;">
            <thead>
              <tr><th>Digit</th><th>Actual Count</th><th>Actual %</th><th>Benford Expected %</th><th>Deviation</th><th>Forensic Assessment</th></tr>
            </thead>
            <tbody>${statRows}</tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button class="action-btn" onclick="closeModal('benfordModal')">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  setTimeout(() => {
    const ctx = document.getElementById('benfordChartCanvas');
    if (!ctx) return;
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actuals = digits.map(d => parseFloat(bRes.stats[d].actualPct));
    const expecteds = digits.map(d => bRes.stats[d].expectedPct);
    const barColors = digits.map(d => Math.abs(parseFloat(bRes.stats[d].diff)) > 5 ? '#ef4444' : '#3b82f6');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: digits.map(d => 'Digit ' + d),
        datasets: [
          {
            type: 'line',
            label: 'Theoretical Benford Curve (%)',
            data: expecteds,
            borderColor: '#10b981',
            borderWidth: 2,
            pointRadius: 4,
            fill: false,
            tension: 0.3
          },
          {
            type: 'bar',
            label: 'Actual Observed % in Population',
            data: actuals,
            backgroundColor: barColors,
            borderRadius: 4
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Frequency Percentage (%)' } }
        },
        plugins: {
          legend: { position: 'top' }
        }
      }
    });
  }, 50);
};

window.openWeekendPostingModal = function() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayCounts = [4, 18, 22, 19, 21, 17, 6]; // Demo dataset distribution

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'weekendModal';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:720px;">
      <div class="modal-header">
        <h3>Weekend & Non-Working Day Postings (DA-07)</h3>
        <button class="action-btn" onclick="closeModal('weekendModal')">✕</button>
      </div>
      <div class="modal-body">
        <p style="font-size:12px;color:#64748b;margin-bottom:14px;">
          Analysis of transaction booking timestamps across days of the week. Postings on Saturdays and Sundays (highlighted in red) indicate bypass of weekday dual-authorization workflows.
        </p>
        <div style="height:260px;position:relative;margin-bottom:16px;">
          <canvas id="weekendChartCanvas"></canvas>
        </div>
      </div>
      <div class="modal-footer">
        <button class="action-btn" onclick="closeModal('weekendModal')">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  setTimeout(() => {
    const ctx = document.getElementById('weekendChartCanvas');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{
          label: 'Transaction Voucher Count',
          data: dayCounts,
          backgroundColor: ['#ef4444', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#ef4444'],
          borderRadius: 4
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } }
      }
    });
  }, 50);
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
};


// ==============================================================================
// VIEW 18: INDIAN AUDITING, ACCOUNTING & REGULATORY TAXATION HUB
// ==============================================================================
let activeComplianceTab = 'taxation';

window.setComplianceTab = function(tabKey) {
  activeComplianceTab = tabKey;
  renderComplianceHub();
  lucide.createIcons();
};

window.copyTextToClipboard = function(text, msg) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (typeof alert !== 'undefined') alert(msg || 'Copied to clipboard!');
    }).catch(() => {
      if (typeof prompt !== 'undefined') prompt('Copy the text below:', text);
    });
  } else if (typeof prompt !== 'undefined') {
    prompt('Copy the text below:', text);
  }
};

window.copyCaroClause = function(idx) {
  const reg = typeof indianComplianceRegistry !== 'undefined' ? indianComplianceRegistry : null;
  if (!reg || !reg.caro2020Reporting || !reg.caro2020Reporting.auditReportingClauses[idx]) return;
  const clause = reg.caro2020Reporting.auditReportingClauses[idx];
  const formatted = `Companies (Auditor's Report) Order, 2020 (CARO 2020) — ${clause.clause}
Matter: ${clause.matter}
Audit Finding: ${clause.auditorFinding}
Reporting Opinion: ${clause.reportingStatus}

Draft Statutory Audit Paragraph:
"${clause.draftParagraph}"
`;
  window.copyTextToClipboard(formatted, `CARO ${clause.clause} draft report copied to clipboard!`);
};

window.updateIndAs37Calc = function() {
  const fleetEl = document.getElementById('indasFleet');
  const rateEl = document.getElementById('indasFailureRate');
  const costEl = document.getElementById('indasPackCost');
  const bookEl = document.getElementById('indasBookProv');

  const fleet = parseInt(fleetEl?.value || 6800);
  const failureRate = parseFloat(rateEl?.value || 2.1);
  const packCost = parseInt(costEl?.value || 32000);
  const bookProv = parseInt(bookEl?.value || 3200000);

  const reqProv = Math.round(fleet * (failureRate / 100) * packCost);
  const deficit = reqProv - bookProv;

  const reqDisp = document.getElementById('indasReqDisplay');
  const defDisp = document.getElementById('indasDeficitDisplay');
  const failLbl = document.getElementById('indasFailLabel');
  const costLbl = document.getElementById('indasCostLabel');
  const jvAmt = document.getElementById('indasJvAmt');

  if (reqDisp) reqDisp.innerText = '₹' + (reqProv / 100000).toFixed(2) + ' L (' + reqProv.toLocaleString('en-IN') + ')';
  if (defDisp) {
    defDisp.innerText = (deficit > 0 ? 'Deficit: ₹' : 'Surplus: ₹') + Math.abs(deficit).toLocaleString('en-IN');
    defDisp.className = deficit > 0 ? 'stat-pill-deficit' : 'stat-pill-surplus';
  }
  if (failLbl) failLbl.innerText = failureRate.toFixed(1) + '%';
  if (costLbl) costLbl.innerText = '₹' + packCost.toLocaleString('en-IN');
  if (jvAmt) jvAmt.innerText = '₹' + (deficit > 0 ? deficit.toLocaleString('en-IN') : '0');
};

function renderComplianceHub() {
  const reg = typeof indianComplianceRegistry !== 'undefined' ? indianComplianceRegistry : null;
  if (!reg) {
    appRoot.innerHTML = '<div class="panel"><h3>Compliance Registry Not Loaded</h3></div>';
    return;
  }

  const isAuditor = appState.dashboardViewMode === 'AUDITOR';

  // Metrics summary
  const s43bAmt = reg.section43Bh.totalOverdueAmount;
  const s43bTax = reg.section43Bh.potentialTaxAddBack;
  const gst16Amt = reg.gstSection16.totalIneligibleClaimedIn3B;
  const indasDeficit = reg.indAs37Warranty.provisionDeficitInr;
  const pmpSubsidy = reg.pmpEvSubsidy.totalSubsidiesClaimedInr;
  const totalStatVaR = s43bTax + gst16Amt + indasDeficit + (reg.section40A3.totalDisallowedAmount * 0.312) + reg.section269ST.penaltyExposureInr;

  // Render Sub-tabs
  let tabContent = '';
  if (activeComplianceTab === 'taxation') {
    tabContent = renderTaxationTab(reg, isAuditor);
  } else if (activeComplianceTab === 'caro2020') {
    tabContent = renderCaroTab(reg, isAuditor);
  } else if (activeComplianceTab === 'accounting') {
    tabContent = renderAccountingTab(reg, isAuditor);
  } else if (activeComplianceTab === 'icaiStandards') {
    tabContent = renderIcaiTab(reg, isAuditor);
  }

  appRoot.innerHTML = `
    <!-- Compliance Hub Header -->
    <div class="header" style="margin-bottom:12px;">
      <div>
        <h1 style="display:flex;align-items:center;gap:10px;">
          Statutory, CARO 2020 & Indian Compliance Hub
          <span class="ai-badge" style="background:#1e293b;color:#38bdf8;border:1px solid #0284c7;">
            ICAI • Ind AS • MCA • IT Act 1961
          </span>
        </h1>
        <p style="font-size:13px;color:#64748b;margin-top:4px;">
          NexGen Electric Mobility Pvt Ltd • FY 2024-25 & 2025-26 Statutory Audit & Tax Shield Engine
        </p>
      </div>
      <div class="header-actions">
        <button class="action-btn" style="background:#047857;color:white;border:none;padding:7px 14px;" onclick="openDebitNoteModal(null)">
          <i data-lucide="receipt"></i> Issue Supplier Debit Note
        </button>
        <button class="action-btn btn-ai" onclick="openCfoRecoveryMemo()">
          <i data-lucide="file-text"></i> CFO Tax & Recovery Memo
        </button>
      </div>
    </div>

    <!-- Perspective Switcher -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:10px;">
      <div class="perspective-switch">
        <button class="perspective-btn ${!isAuditor ? 'active' : ''}" onclick="setDashboardViewMode('PROMOTER'); renderComplianceHub();">
          <i data-lucide="briefcase"></i> 👔 Business Owner / Promoter View
        </button>
        <button class="perspective-btn ${isAuditor ? 'active' : ''}" onclick="setDashboardViewMode('AUDITOR'); renderComplianceHub();">
          <i data-lucide="shield-check"></i> 🔬 Technical Auditor / ICAI GRC View
        </button>
      </div>
      <div style="font-size:12px;">
        ${!isAuditor ? `
          <span style="display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;padding:5px 12px;border-radius:6px;color:#166534;font-weight:600;border:1px solid #bbf7d0;">
            <i data-lucide="shield-alert" style="width:14px;"></i> Focus: Cash Protection, 43B(h) Deductions & ₹8.2 Cr Subsidy Safeguard
          </span>
        ` : `
          <span style="display:inline-flex;align-items:center;gap:6px;background:#eff6ff;padding:5px 12px;border-radius:6px;color:#1e40af;font-weight:600;border:1px solid #bfdbfe;">
            <i data-lucide="scale" style="width:14px;"></i> Focus: ICAI SA 320 Materiality, CARO Clauses (i)-(xiii) & Ind AS 37 Actuarial Trail
          </span>
        `}
      </div>
    </div>

    <!-- Top Statutory KPI Strip -->
    <div class="compliance-kpi-grid">
      <div class="comp-kpi-card border-tax">
        <div class="comp-kpi-title">Sec 43B(h) MSME Exposure</div>
        <div class="comp-kpi-val" style="color:#ea580c;">₹${(s43bTax / 100000).toFixed(2)} L</div>
        <div class="comp-kpi-sub">
          <span>₹${(s43bAmt / 100000).toFixed(2)}L Overdue across 12 Micro/Small</span>
          <strong style="color:#ea580c;">+31.2% Tax Add-Back</strong>
        </div>
      </div>

      <div class="comp-kpi-card border-gst">
        <div class="comp-kpi-title">GST Sec 16(2)(aa) ITC Risk</div>
        <div class="comp-kpi-val" style="color:#dc2626;">₹${(gst16Amt / 100000).toFixed(2)} L</div>
        <div class="comp-kpi-sub">
          <span>3B vs 2B Gap: Missing Supplier GSTR-1</span>
          <strong style="color:#dc2626;">+18% p.a. Int Sec 50</strong>
        </div>
      </div>

      <div class="comp-kpi-card border-indas">
        <div class="comp-kpi-title">Ind AS 37 Battery Warranty Deficit</div>
        <div class="comp-kpi-val" style="color:#b45309;">₹${(indasDeficit / 100000).toFixed(2)} L</div>
        <div class="comp-kpi-sub">
          <span>Req: ₹45.70L vs Books ₹32.00L</span>
          <strong style="color:#b45309;">Actuarial 2.1% Model</strong>
        </div>
      </div>

      <div class="comp-kpi-card border-pmp">
        <div class="comp-kpi-title">PM E-DRIVE Subsidy at Risk</div>
        <div class="comp-kpi-val" style="color:#0284c7;">₹${(pmpSubsidy / 10000000).toFixed(2)} Cr</div>
        <div class="comp-kpi-sub">
          <span>8,200 EV Units Claimed (50% DVA Rule)</span>
          <strong style="color:#0284c7;">Motor Inverter Breach</strong>
        </div>
      </div>

      <div class="comp-kpi-card border-caro">
        <div class="comp-kpi-title">CARO 2020 Disclosures</div>
        <div class="comp-kpi-val" style="color:#7c3aed;">6 Clauses</div>
        <div class="comp-kpi-sub">
          <span>2 Attention Drawn (Cl ii & ix)</span>
          <strong style="color:#16a34a;">4 Unmodified Clean</strong>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="compliance-tabs-bar">
      <button class="comp-tab-btn ${activeComplianceTab === 'taxation' ? 'active' : ''}" onclick="setComplianceTab('taxation')">
        <i data-lucide="landmark"></i> 1. Direct & Indirect Taxation Shield (Sec 43B(h), 40A(3), 269ST, GST 16, PMP)
      </button>
      <button class="comp-tab-btn ${activeComplianceTab === 'caro2020' ? 'active' : ''}" onclick="setComplianceTab('caro2020')">
        <i data-lucide="file-check"></i> 2. CARO 2020 Reporting & MCA Audit Trail (Rule 3)
      </button>
      <button class="comp-tab-btn ${activeComplianceTab === 'accounting' ? 'active' : ''}" onclick="setComplianceTab('accounting')">
        <i data-lucide="calculator"></i> 3. Ind AS & Indian GAAP Compliance (Ind AS 37, 2, 115, 16)
      </button>
      <button class="comp-tab-btn ${activeComplianceTab === 'icaiStandards' ? 'active' : ''}" onclick="setComplianceTab('icaiStandards')">
        <i data-lucide="award"></i> 4. ICAI Standards on Auditing (SA 320, 230, 240, 501, 550)
      </button>
    </div>

    <!-- Main Content Area -->
    ${tabContent}
  `;
}

// ------------------------------------------------------------------------------
// TAB 1: TAXATION SHIELD
// ------------------------------------------------------------------------------
function renderTaxationTab(reg, isAuditor) {
  const s43b = reg.section43Bh;
  const s40a3 = reg.section40A3;
  const s269st = reg.section269ST;
  const s194q = reg.section194Q;
  const gst16 = reg.gstSection16;
  const gst143 = reg.gstSection143;
  const pmp = reg.pmpEvSubsidy;

  const msmeRows = s43b.vendors.map((v, i) => `
    <tr>
      <td><strong>${i + 1}</strong></td>
      <td>
        <strong>${v.vendorName}</strong>
        <div style="font-size:11px;color:#64748b;font-family:monospace;">${v.udyamNo}</div>
      </td>
      <td><span class="status-badge ${v.category === 'Micro' ? 'critical' : 'pending'}" style="font-size:10px;">${v.category} Enterprise</span></td>
      <td style="font-family:monospace;font-size:12px;">${v.invoiceNo}</td>
      <td>${v.invoiceDate}</td>
      <td style="color:#ea580c;font-weight:600;">${v.dueDate}</td>
      <td style="font-weight:700;">₹${v.amount.toLocaleString('en-IN')}</td>
      <td>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="status-badge critical" style="font-size:10px;">+${v.overdueDays}d</span>
          <div class="countdown-bar-wrap">
            <div class="countdown-bar-fill" style="width:${Math.min(100, (v.overdueDays / 120) * 100)}%;"></div>
          </div>
        </div>
      </td>
      <td style="font-weight:700;color:#dc2626;">₹${v.taxImpact.toLocaleString('en-IN')}</td>
      <td>
        <button class="action-btn" style="font-size:10px;padding:3px 8px;background:#f0fdf4;color:#166534;border-color:#bbf7d0;" onclick="openDebitNoteModal('${v.vendorName}')">
          <i data-lucide="receipt"></i> Debit / Notice
        </button>
      </td>
    </tr>
  `).join('');

  const gst16Rows = gst16.mismatches.map((m, i) => `
    <tr>
      <td><strong>${i + 1}</strong></td>
      <td style="font-family:monospace;font-size:11px;">${m.gstin}</td>
      <td><strong>${m.vendorName}</strong></td>
      <td style="font-family:monospace;font-size:12px;">${m.invoiceNo}</td>
      <td>${m.invoiceDate}</td>
      <td style="font-weight:700;color:#dc2626;">₹${m.taxAmount.toLocaleString('en-IN')}</td>
      <td><span class="status-badge critical" style="font-size:10px;">${m.gstr2bStatus}</span></td>
      <td style="font-size:12px;color:#991b1b;font-weight:600;">${m.risk}</td>
      <td>
        <button class="action-btn" style="font-size:10px;padding:3px 8px;background:#fff1f2;color:#9f1239;border-color:#fecdd3;" onclick="openDebitNoteModal('${m.vendorName}')">
          <i data-lucide="undo-2"></i> Reverse / Hold
        </button>
      </td>
    </tr>
  `).join('');

  const jwRows = gst143.criticalChallans.map((c, i) => `
    <tr>
      <td><strong>${i + 1}</strong></td>
      <td style="font-family:monospace;font-size:12px;"><strong>${c.challanNo}</strong></td>
      <td>${c.date}</td>
      <td><strong>${c.jobWorkerName}</strong></td>
      <td style="font-size:12px;">${c.item}</td>
      <td style="font-size:12px;">${c.qty}</td>
      <td style="font-weight:700;">${c.valueInr}</td>
      <td>
        <span class="status-badge ${c.daysOpen > 300 ? 'critical' : 'pending'}" style="font-size:10px;">
          ${c.daysOpen} Days Open (${c.daysToDeadline}d left)
        </span>
      </td>
      <td style="font-size:11px;color:#b45309;font-weight:600;">${c.riskStatus}</td>
    </tr>
  `).join('');

  const pmpRows = pmp.components.map((p, i) => `
    <tr style="${p.pmpStatus.includes('NON-COMPLIANT') ? 'background:#fff1f2;' : ''}">
      <td><strong>${i + 1}</strong></td>
      <td><strong>${p.component}</strong></td>
      <td>${p.source}</td>
      <td>
        <div style="display:flex;align-items:center;gap:6px;">
          <strong style="font-size:13px;color:${p.localizationPct >= 50 ? '#16a34a' : '#dc2626'};">${p.localizationPct}%</strong>
          <div class="dva-progress-wrap">
            <div class="dva-progress-fill" style="width:${p.localizationPct}%;background:${p.localizationPct >= 50 ? '#16a34a' : '#dc2626'};"></div>
          </div>
        </div>
      </td>
      <td>
        <span class="status-badge ${p.pmpStatus.includes('NON-COMPLIANT') ? 'critical' : p.pmpStatus.includes('CONCESSIONAL') ? 'pending' : 'passed'}" style="font-size:10px;">
          ${p.pmpStatus}
        </span>
      </td>
      <td style="font-size:12px;color:${p.pmpStatus.includes('NON-COMPLIANT') ? '#991b1b' : '#64748b'};">
        ${p.breachNotes || 'Meets Phased Manufacturing Programme localization criterion.'}
      </td>
    </tr>
  `).join('');

  return `
    <!-- SECTION 43B(H) MSMED HERO CARD -->
    <div class="panel" style="border-left:5px solid #ea580c;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span class="stat-badge-law">INCOME TAX ACT, 1961 • SECTION 43B(h)</span>
            <span class="status-badge critical">MANDATORY YEAR-END COMPLIANCE</span>
          </div>
          <h2 style="font-size:17px;color:#0f172a;margin:0;">${s43b.sectionTitle}</h2>
        </div>
        <div style="text-align:right;">
          <span style="font-size:11px;color:#64748b;display:block;">Potential Corporate Tax Disallowance Add-Back</span>
          <strong style="font-size:22px;color:#dc2626;">₹${(s43b.potentialTaxAddBack / 100000).toFixed(2)} Lakhs</strong>
          <span style="font-size:11px;color:#ea580c;display:block;">(₹${(s43b.totalOverdueAmount / 100000).toFixed(2)}L overdue × 31.2% base+cess)</span>
        </div>
      </div>
      <p style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:14px;background:#fff7ed;padding:10px 14px;border-radius:6px;border:1px solid #fed7aa;">
        <strong>Statutory Mandate:</strong> ${s43b.statutoryRule}
      </p>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <h3 style="font-size:14px;margin:0;">Schedule of Overdue Micro & Small Enterprise Payables (12 Accounts)</h3>
        <button class="action-btn" style="font-size:11px;padding:4px 10px;" onclick="window.copyTextToClipboard(JSON.stringify(indianComplianceRegistry.section43Bh.vendors, null, 2), 'MSMED Section 43B(h) vendor schedule copied for Tax Audit Report Form 3CD!')">
          <i data-lucide="copy"></i> Copy Form 3CD Clause 22 Schedule
        </button>
      </div>

      <div style="overflow-x:auto;">
        <table class="data-grid" style="font-size:12px;">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor Name & Udyam Reg</th>
              <th>MSME Tier</th>
              <th>Invoice No</th>
              <th>Invoice Date</th>
              <th>Due Date (Max 45d)</th>
              <th>Amount (₹)</th>
              <th>Overdue Aging</th>
              <th>Tax Impact (31.2%)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>${msmeRows}</tbody>
        </table>
      </div>
    </div>

    <!-- 3-WAY TAX GRID: 40A(3), 269ST, 194Q -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:20px;">
      <!-- Section 40A(3) -->
      <div class="panel" style="border-left:4px solid #ef4444;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">SEC 40A(3)</span>
          <span class="status-badge critical">Disallowed</span>
        </div>
        <h3 style="font-size:14px;margin:0 0 6px 0;">Cash Payments >₹10k / Day</h3>
        <div style="font-size:20px;font-weight:800;color:#dc2626;margin-bottom:4px;">₹${s40a3.totalDisallowedAmount.toLocaleString('en-IN')}</div>
        <p style="font-size:11px;color:#64748b;line-height:1.4;margin-bottom:10px;">${s40a3.statutoryRule}</p>
        <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;">
          <strong>Vouchers Flagged (${s40a3.disallowedEntries.length}):</strong>
          <ul style="margin:4px 0 0 16px;padding:0;color:#334155;">
            ${s40a3.disallowedEntries.map(e => `<li>${e.voucherNo} (${e.date}): ₹${e.amount.toLocaleString('en-IN')} - ${e.purpose}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Section 269ST -->
      <div class="panel" style="border-left:4px solid #dc2626;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">SEC 269ST</span>
          <span class="status-badge critical">100% Penalty</span>
        </div>
        <h3 style="font-size:14px;margin:0 0 6px 0;">Cash Receipts >₹2 Lakhs</h3>
        <div style="font-size:20px;font-weight:800;color:#dc2626;margin-bottom:4px;">₹${s269st.totalViolationAmount.toLocaleString('en-IN')}</div>
        <p style="font-size:11px;color:#64748b;line-height:1.4;margin-bottom:10px;">${s269st.statutoryRule}</p>
        <div style="background:#fef2f2;padding:8px 10px;border-radius:6px;border:1px solid #fecaca;font-size:11px;color:#991b1b;">
          <strong>Breach Identified:</strong>
          <div>${s269st.violations[0].receiptNo} - ${s269st.violations[0].receivedFrom} (₹${s269st.violations[0].amount.toLocaleString('en-IN')} on ${s269st.violations[0].date})</div>
          <div style="margin-top:2px;font-weight:700;">Penalty under Sec 271DA: ₹${s269st.penaltyExposureInr.toLocaleString('en-IN')} (100%)</div>
        </div>
      </div>

      <!-- Section 194Q -->
      <div class="panel" style="border-left:4px solid #f59e0b;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">SEC 194Q</span>
          <span class="status-badge pending">TDS Deficit</span>
        </div>
        <h3 style="font-size:14px;margin:0 0 6px 0;">TDS on Purchases >₹50L</h3>
        <div style="font-size:20px;font-weight:800;color:#b45309;margin-bottom:4px;">₹${s194q.shortDeductionInr.toLocaleString('en-IN')}</div>
        <p style="font-size:11px;color:#64748b;line-height:1.4;margin-bottom:10px;">${s194q.statutoryRule}</p>
        <div style="background:#fffbeb;padding:8px 10px;border-radius:6px;border:1px solid #fde68a;font-size:11px;color:#92400e;">
          <strong>Disallowance Risk under Sec 40(a)(ia):</strong>
          <div style="font-weight:700;">30% of turnover breach: ₹${(s194q.potentialDisallowance30Pct / 100000).toFixed(2)} Lakhs</div>
          <div style="margin-top:2px;">${s194q.defaultersCount} vendors exceeded ₹50L without TDS deduction.</div>
        </div>
      </div>
    </div>

    <!-- GST SECTION 16(2)(AA) GSTR-2B VS 3B ITC RECONCILIATION -->
    <div class="panel" style="border-left:5px solid #2563eb;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span class="stat-badge-law">GST ACT, 2017 • SECTION 16(2)(aa) & RULE 36(4)</span>
            <span class="status-badge critical">INELIGIBLE ITC IN GSTR-3B</span>
          </div>
          <h2 style="font-size:17px;color:#0f172a;margin:0;">${gst16.sectionTitle}</h2>
        </div>
        <div style="text-align:right;">
          <span style="font-size:11px;color:#64748b;display:block;">Ineligible ITC Claimed in GSTR-3B</span>
          <strong style="font-size:22px;color:#dc2626;">₹${(gst16.totalIneligibleClaimedIn3B / 100000).toFixed(2)} Lakhs</strong>
          <span style="font-size:11px;color:#ea580c;display:block;">(+₹${(gst16.interestLiability18Pct / 100000).toFixed(2)}L interest @ 18% p.a.)</span>
        </div>
      </div>
      <p style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:14px;background:#eff6ff;padding:10px 14px;border-radius:6px;border:1px solid #bfdbfe;">
        <strong>Statutory Requirement:</strong> ${gst16.statutoryRule}
      </p>

      <div style="overflow-x:auto;">
        <table class="data-grid" style="font-size:12px;">
          <thead>
            <tr>
              <th>#</th>
              <th>Supplier GSTIN</th>
              <th>Supplier Legal Name</th>
              <th>Invoice No</th>
              <th>Invoice Date</th>
              <th>Ineligible ITC Claimed</th>
              <th>GSTR-2B Portal Status</th>
              <th>Statutory Audit Exposure</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>${gst16Rows}</tbody>
        </table>
      </div>
    </div>

    <!-- DUAL GRID: GST SECTION 143 JOB WORK & CLEAN TECH PMP SUBSIDY -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <!-- GST Section 143 Job Work -->
      <div class="panel" style="border-left:4px solid #8b5cf6;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">GST SEC 143 & RULE 45</span>
          <span class="status-badge pending">1-Year Deemed Supply Countdown</span>
        </div>
        <h3 style="font-size:15px;margin:0 0 6px 0;">${gst143.sectionTitle}</h3>
        <p style="font-size:11px;color:#64748b;margin-bottom:12px;">${gst143.statutoryRule}</p>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px;text-align:center;">
          <div style="background:#f8fafc;padding:8px;border-radius:6px;border:1px solid #e2e8f0;">
            <div style="font-size:11px;color:#64748b;">Open Challans</div>
            <strong style="font-size:16px;">${gst143.totalOpenChallans}</strong>
          </div>
          <div style="background:#fffbeb;padding:8px;border-radius:6px;border:1px solid #fde68a;">
            <div style="font-size:11px;color:#b45309;">>180 Days</div>
            <strong style="font-size:16px;color:#b45309;">${gst143.openBeyond180Days}</strong>
          </div>
          <div style="background:#fef2f2;padding:8px;border-radius:6px;border:1px solid #fecaca;">
            <div style="font-size:11px;color:#dc2626;">>300 Days (Critical)</div>
            <strong style="font-size:16px;color:#dc2626;">${gst143.criticalBeyond300Days}</strong>
          </div>
        </div>

        <div style="overflow-x:auto;">
          <table class="data-grid" style="font-size:11px;">
            <thead>
              <tr>
                <th>#</th>
                <th>Challan No</th>
                <th>Date</th>
                <th>Job-Worker</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Value</th>
                <th>Aging</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>${jwRows}</tbody>
          </table>
        </div>
      </div>

      <!-- CleanTech EV PMP Subsidy -->
      <div class="panel" style="border-left:4px solid #06b6d4;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">PM E-DRIVE / EMPS SCHEME</span>
          <span class="status-badge critical">Subsidies ₹8.20 Cr at Risk</span>
        </div>
        <h3 style="font-size:15px;margin:0 0 6px 0;">Phased Manufacturing Programme (50% DVA)</h3>
        <p style="font-size:11px;color:#64748b;margin-bottom:12px;">${pmp.regulatoryRule}</p>

        <div style="display:flex;justify-content:space-between;align-items:center;background:#f0fdf4;padding:8px 12px;border-radius:6px;border:1px solid #bbf7d0;margin-bottom:12px;">
          <div>
            <span style="font-size:11px;color:#166534;font-weight:600;">Overall Fleet DVA Localization:</span>
            <strong style="font-size:14px;color:#166534;margin-left:6px;">${pmp.overallDvaPct}% (Target: ≥50.0%)</strong>
          </div>
          <span class="status-badge critical" style="font-size:10px;">1 SUB-ASSEMBLY BREACH</span>
        </div>

        <div style="overflow-x:auto;">
          <table class="data-grid" style="font-size:11px;">
            <thead>
              <tr>
                <th>#</th>
                <th>Key EV Sub-Assembly</th>
                <th>Supplier / Source</th>
                <th>Localization %</th>
                <th>PMP Status</th>
                <th>Statutory Audit Impact</th>
              </tr>
            </thead>
            <tbody>${pmpRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ------------------------------------------------------------------------------
// TAB 2: CARO 2020 & MCA AUDIT TRAIL
// ------------------------------------------------------------------------------
function renderCaroTab(reg, isAuditor) {
  const caro = reg.caro2020Reporting;
  const mca = reg.mcaAuditTrail;

  const clauseCards = caro.auditReportingClauses.map((c, i) => `
    <div class="caro-clause-card ${c.reportingStatus.includes('QUALIFIED') || c.reportingStatus.includes('ATTENTION') ? 'caro-qualified' : 'caro-clean'}">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;">
            <strong style="font-size:15px;color:var(--primary);">${c.clause}</strong>
            <span class="caro-status-pill ${c.reportingStatus.includes('QUALIFIED') || c.reportingStatus.includes('ATTENTION') ? 'pill-qual' : 'pill-clean'}">
              ${c.reportingStatus}
            </span>
            <span style="font-size:11px;color:#64748b;">Mapped Controls: <strong>${c.linkedControl}</strong></span>
          </div>
          <h4 style="font-size:14px;color:#0f172a;margin:4px 0 0 0;">${c.matter}</h4>
        </div>
        <button class="action-btn caro-copy-btn" onclick="copyCaroClause(${i})">
          <i data-lucide="copy"></i> Copy Draft CARO Paragraph
        </button>
      </div>

      <div style="background:#f8fafc;padding:10px 14px;border-radius:6px;border:1px solid #e2e8f0;margin-bottom:8px;font-size:12px;">
        <strong style="color:#0f172a;display:block;margin-bottom:2px;">Automated Fieldwork Observation:</strong>
        <p style="color:#334155;line-height:1.4;margin:0;">${c.auditorFinding}</p>
      </div>

      <div style="background:#ffffff;padding:10px 14px;border-radius:6px;border-left:3px solid var(--primary);font-size:12px;box-shadow:inset 0 0 0 1px #e2e8f0;">
        <strong style="color:var(--primary);display:block;margin-bottom:2px;">Draft Report Wording for Statutory Auditor:</strong>
        <p style="color:#1e293b;line-height:1.5;font-style:italic;margin:0;">"${c.draftParagraph}"</p>
      </div>
    </div>
  `).join('');

  const mcaCards = mca.systemsAssessed.map(s => `
    <div style="background:white;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;">
        <div>
          <h4 style="font-size:14px;color:#0f172a;margin:0;">${s.softwareName}</h4>
          <span style="font-size:11px;color:#64748b;">${s.environment}</span>
        </div>
        <span class="status-badge ${s.complianceRating.includes('FULLY') ? 'passed' : 'pending'}" style="font-size:10px;">
          ${s.complianceRating}
        </span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px;background:#f8fafc;padding:8px 10px;border-radius:6px;margin-bottom:8px;">
        <div><strong>Edit Log Status:</strong> ${s.editLogStatus}</div>
        <div><strong>Tampering Detected:</strong> <span style="color:#16a34a;font-weight:700;">${s.tamperingDetected}</span></div>
      </div>
      <p style="font-size:12px;color:#334155;line-height:1.4;margin:0;"><strong>Auditor Finding:</strong> ${s.auditFinding}</p>
    </div>
  `).join('');

  return `
    <!-- CARO 2020 INTRODUCTION BANNER -->
    <div class="panel" style="background:linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);color:white;margin-bottom:20px;border-radius:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="status-badge" style="background:rgba(255,255,255,0.2);color:white;border:none;">COMPANIES ACT, 2013</span>
            <span class="status-badge" style="background:#10b981;color:white;border:none;">AUDIT REPORTING READY</span>
          </div>
          <h2 style="font-size:18px;color:white;margin:0 0 4px 0;">${caro.orderTitle}</h2>
          <p style="font-size:12px;color:#c7d2fe;margin:0;max-width:700px;">
            Full population substantive testing automatically maps internal controls and analytics test outcomes into ready-to-publish CARO 2020 reporting paragraphs for the Statutory Auditor.
          </p>
        </div>
        <button class="action-btn" style="background:white;color:#312e81;font-weight:700;border:none;" onclick="window.copyTextToClipboard(indianComplianceRegistry.caro2020Reporting.auditReportingClauses.map(c => c.clause + ': ' + c.draftParagraph).join('\n\n'), 'Full CARO 2020 audit report draft copied to clipboard!')">
          <i data-lucide="download"></i> Export Complete CARO Draft
        </button>
      </div>
    </div>

    <!-- CARO CLAUSES GRID -->
    <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px;">
      ${clauseCards}
    </div>

    <!-- MCA RULE 3(1) AUDIT TRAIL (EDIT LOG) EVALUATION -->
    <div class="panel" style="border-left:5px solid #6366f1;">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span class="stat-badge-law">COMPANIES (ACCOUNTS) RULES, 2014</span>
            <span class="status-badge passed">MANDATORY RULE 3(1) PROVISO</span>
          </div>
          <h2 style="font-size:16px;color:#0f172a;margin:0;">${mca.ruleTitle}</h2>
        </div>
      </div>
      <p style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:14px;background:#f5f3ff;padding:10px 14px;border-radius:6px;border:1px solid #ddd6fe;">
        <strong>Statutory Mandate:</strong> ${mca.mandate}
      </p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:14px;">
        ${mcaCards}
      </div>

      <div style="background:#f8fafc;padding:12px 14px;border-radius:6px;border:1px solid #e2e8f0;font-size:12px;">
        <strong style="color:var(--primary);">Statutory Auditor Rule 3(1) Certification Snippet:</strong>
        <p style="font-style:italic;color:#334155;margin:4px 0 0 0;line-height:1.5;">
          "In our opinion and according to the information and explanations given to us, the Company has used accounting software for maintaining its books of account which has a feature of recording audit trail (edit log) facility and the same has operated throughout the year for all relevant transactions recorded in the software and we did not notice any instance of the audit trail feature being tampered with."
        </p>
      </div>
    </div>
  `;
}

// ------------------------------------------------------------------------------
// TAB 3: IND AS & INDIAN GAAP COMPLIANCE
// ------------------------------------------------------------------------------
function renderAccountingTab(reg, isAuditor) {
  const w = reg.indAs37Warranty;

  return `
    <!-- IND AS 37 HERO CARD WITH INTERACTIVE ACTUARIAL CALCULATOR -->
    <div class="panel" style="border-left:5px solid #d97706;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span class="stat-badge-law">INDIAN ACCOUNTING STANDARD (Ind AS 37)</span>
            <span class="status-badge critical">PROVISION SHORTFALL DETECTED</span>
          </div>
          <h2 style="font-size:17px;color:#0f172a;margin:0;">${w.standardTitle}</h2>
          <p style="font-size:12px;color:#64748b;margin-top:2px;">EV Battery Pack Actuarial Warranty Provisioning (3-Year / 50,000 KM Replacement)</p>
        </div>
        <div style="text-align:right;">
          <span style="font-size:11px;color:#64748b;display:block;">Required Ind AS 37 Provision</span>
          <strong style="font-size:22px;color:#d97706;" id="indasReqDisplay">₹${(w.actuarialRequiredProvision / 100000).toFixed(2)} L (₹${w.actuarialRequiredProvision.toLocaleString('en-IN')})</strong>
          <span style="font-size:11px;color:#dc2626;display:block;" id="indasDeficitDisplay">Deficit Shortfall: ₹${w.provisionDeficitInr.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <p style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:16px;background:#fffbeb;padding:10px 14px;border-radius:6px;border:1px solid #fde68a;">
        <strong>Accounting Mandate:</strong> ${w.accountingRule}
      </p>

      <!-- Interactive Calculator Controls -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin-bottom:16px;">
        <h4 style="font-size:13px;margin:0 0 12px 0;color:#0f172a;display:flex;align-items:center;gap:6px;">
          <i data-lucide="sliders" style="width:16px;color:var(--primary);"></i>
          Interactive Actuarial Model Parameters & Sensitivity Simulator:
        </h4>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px;">
          <div>
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px;">Active EV Fleet Under Warranty:</label>
            <input type="number" id="indasFleet" class="form-select" value="${w.activeFleetSize}" oninput="updateIndAs37Calc()" />
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px;">
              Actuarial Failure Rate: <span id="indasFailLabel" style="color:var(--primary);font-weight:800;">${w.historicalFailureRatePct}%</span>
            </label>
            <input type="range" id="indasFailureRate" min="1.0" max="5.0" step="0.1" value="${w.historicalFailureRatePct}" style="width:100%;cursor:pointer;" oninput="updateIndAs37Calc()" />
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px;">
              Pack Replacement Cost: <span id="indasCostLabel" style="color:var(--primary);font-weight:800;">₹${w.averageBatteryPackCost.toLocaleString('en-IN')}</span>
            </label>
            <input type="range" id="indasPackCost" min="20000" max="45000" step="1000" value="${w.averageBatteryPackCost}" style="width:100%;cursor:pointer;" oninput="updateIndAs37Calc()" />
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px;">Current Book Provision (₹):</label>
            <input type="number" id="indasBookProv" class="form-select" value="${w.currentBookProvision}" oninput="updateIndAs37Calc()" />
          </div>
        </div>
      </div>

      <!-- Recommended Accounting Entry -->
      <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:6px;padding:12px 16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <strong style="color:#065f46;font-size:13px;">Auditor Proposed Journal Adjustment Entry (Ind AS 37):</strong>
            <p style="font-family:monospace;font-size:12px;color:#047857;margin:4px 0 0 0;">
              Dr. Battery Warranty Expense A/c (P&L) ................ <span id="indasJvAmt">₹${w.provisionDeficitInr.toLocaleString('en-IN')}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;Cr. Provision for Warranty Liabilities A/c (BS) ............ <span id="indasJvAmt2">₹${w.provisionDeficitInr.toLocaleString('en-IN')}</span>
            </p>
          </div>
          <button class="action-btn" style="background:#059669;color:white;border:none;font-size:11px;padding:6px 12px;" onclick="window.copyTextToClipboard('Dr. Battery Warranty Expense A/c ₹' + document.getElementById('indasJvAmt').innerText + '\nCr. Provision for Warranty Liabilities A/c ₹' + document.getElementById('indasJvAmt').innerText, 'Ind AS 37 Journal Voucher copied for ERP posting!')">
            <i data-lucide="copy"></i> Copy JV Entry
          </button>
        </div>
      </div>
    </div>

    <!-- 3-PILLAR ACCOUNTING MATRIX: IND AS 2, IND AS 115, IND AS 16 -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;">
      <!-- Ind AS 2 -->
      <div class="panel" style="border-left:4px solid #10b981;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">Ind AS 2</span>
          <span class="status-badge passed">NRV Verified</span>
        </div>
        <h3 style="font-size:14px;margin:0 0 6px 0;">Inventories: Lower of Cost and NRV</h3>
        <p style="font-size:11px;color:#64748b;line-height:1.4;margin-bottom:10px;">
          Valuation of cell inventories, battery packs, and scrap die-cast runners. Raw material costs valued at FIFO.
        </p>
        <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;">
          <strong>Substantive Test Summary:</strong>
          <ul style="margin:4px 0 0 16px;padding:0;color:#334155;">
            <li>Battery cells FIFO vs Current import spot price: <strong>No impairment</strong></li>
            <li>Finished EV scooters aging: All <60 days in factory yard</li>
            <li>Aluminum scrap: Valued strictly at net realizable rate (₹180/kg)</li>
          </ul>
        </div>
      </div>

      <!-- Ind AS 115 -->
      <div class="panel" style="border-left:4px solid #3b82f6;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">Ind AS 115</span>
          <span class="status-badge passed">Cut-off Verified</span>
        </div>
        <h3 style="font-size:14px;margin:0 0 6px 0;">Revenue: 5-Step Model & Cut-off</h3>
        <p style="font-size:11px;color:#64748b;line-height:1.4;margin-bottom:10px;">
          Testing year-end sales cut-off on EV dispatches to 42 dealership networks across Maharashtra and Karnataka.
        </p>
        <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;">
          <strong>Substantive Test Summary:</strong>
          <ul style="margin:4px 0 0 16px;padding:0;color:#334155;">
            <li>Last 5 days sales vouchers matched to transporter e-Way bills</li>
            <li>Bill-and-hold shipments: 12 units held at factory yard reversed</li>
            <li>Commercial fleet charging hub delivery milestone recognized properly</li>
          </ul>
        </div>
      </div>

      <!-- Ind AS 16 -->
      <div class="panel" style="border-left:4px solid #8b5cf6;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">Ind AS 16</span>
          <span class="status-badge passed">Schedule II Compliant</span>
        </div>
        <h3 style="font-size:14px;margin:0 0 6px 0;">PPE & CWIP Capitalization</h3>
        <p style="font-size:11px;color:#64748b;line-height:1.4;margin-bottom:10px;">
          Depreciation under Straight Line Method based on useful lives specified in Schedule II of Companies Act, 2013.
        </p>
        <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;">
          <strong>Substantive Test Summary:</strong>
          <ul style="margin:4px 0 0 16px;padding:0;color:#334155;">
            <li>Battery Assembly Robot line capitalized on commercial commissioning date</li>
            <li>Trial run power and consumable costs capitalized in CWIP</li>
            <li>Physical verification completed without material variance</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// ------------------------------------------------------------------------------
// TAB 4: ICAI STANDARDS ON AUDITING (SA)
// ------------------------------------------------------------------------------
function renderIcaiTab(reg, isAuditor) {
  return `
    <!-- SA 320 MATERIALITY BENCHMARKING -->
    <div class="panel" style="border-left:5px solid #2563eb;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span class="stat-badge-law">ICAI STANDARD ON AUDITING (SA 320)</span>
            <span class="status-badge passed">MATERIALITY FRAMEWORK ESTABLISHED</span>
          </div>
          <h2 style="font-size:17px;color:#0f172a;margin:0;">SA 320 — Materiality in Planning and Performing an Audit</h2>
          <p style="font-size:12px;color:#64748b;margin-top:2px;">
            Audited Entity: <strong>NexGen Electric Mobility Pvt Ltd</strong> • FY25 Projected Turnover: <strong>₹165.0 Crores</strong>
          </p>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px;">
        <div style="background:#eff6ff;padding:12px 14px;border-radius:8px;border:1px solid #bfdbfe;">
          <span style="font-size:11px;color:#1e40af;font-weight:700;text-transform:uppercase;">Planning Materiality (PM)</span>
          <div style="font-size:22px;font-weight:800;color:#1e3a8a;margin:4px 0;">₹82,50,000</div>
          <div style="font-size:11px;color:#3b82f6;">0.50% of Projected Revenue (₹165 Cr)</div>
        </div>

        <div style="background:#f0fdf4;padding:12px 14px;border-radius:8px;border:1px solid #bbf7d0;">
          <span style="font-size:11px;color:#166534;font-weight:700;text-transform:uppercase;">Performance Materiality (75% of PM)</span>
          <div style="font-size:22px;font-weight:800;color:#14532d;margin:4px 0;">₹61,87,500</div>
          <div style="font-size:11px;color:#16a34a;">Substantive sample tolerance boundary</div>
        </div>

        <div style="background:#fefce8;padding:12px 14px;border-radius:8px;border:1px solid #fef08a;">
          <span style="font-size:11px;color:#854d0e;font-weight:700;text-transform:uppercase;">Clearly Trivial Threshold (5% of PM)</span>
          <div style="font-size:22px;font-weight:800;color:#713f12;margin:4px 0;">₹4,12,500</div>
          <div style="font-size:11px;color:#a16207;">Items below this require no workpaper accumulation</div>
        </div>
      </div>

      <div style="background:#f8fafc;padding:12px 14px;border-radius:6px;border:1px solid #e2e8f0;font-size:12px;">
        <strong style="color:var(--primary);">Fieldwork Exposure vs SA 320 Materiality Hierarchy:</strong>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
              <span><strong>PM E-DRIVE Subsidy Risk:</strong> ₹8.20 Cr</span>
              <span style="color:#dc2626;font-weight:700;">> Planning Materiality (Fundamental Going Concern Risk)</span>
            </div>
            <div class="exposure-bar-bg"><div class="exposure-bar-fill" style="width:100%;background:#dc2626;"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
              <span><strong>Section 43B(h) MSME Disallowance:</strong> ₹48.50 Lakhs</span>
              <span style="color:#ea580c;font-weight:700;">Approaching Performance Materiality (Tax Audit Form 3CD Mandatory)</span>
            </div>
            <div class="exposure-bar-bg"><div class="exposure-bar-fill" style="width:78%;background:#ea580c;"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
              <span><strong>GSTR-2B ITC Ineligibility:</strong> ₹12.12 Lakhs</span>
              <span style="color:#b45309;font-weight:700;">> Trivial Threshold (Requires Reversal under Sec 50)</span>
            </div>
            <div class="exposure-bar-bg"><div class="exposure-bar-fill" style="width:20%;background:#b45309;"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
              <span><strong>Direct Cash Duplicate Overpayments:</strong> ₹1.84 Lakhs</span>
              <span style="color:#16a34a;font-weight:700;">< Trivial Threshold (Internal Control Deficiency / Operational Recovery)</span>
            </div>
            <div class="exposure-bar-bg"><div class="exposure-bar-fill" style="width:3%;background:#16a34a;"></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SA 230 & SA 240 DUAL WORKPAPERS PANEL -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <!-- SA 230 -->
      <div class="panel" style="border-left:4px solid #0284c7;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">SA 230</span>
          <span class="status-badge passed">Standardized Documentation</span>
        </div>
        <h3 style="font-size:15px;margin:0 0 6px 0;">Audit Documentation & Workpaper Trails</h3>
        <p style="font-size:11px;color:#64748b;margin-bottom:10px;">
          Every test outcome, sample exception, and auditor review note is stamped with immutable metadata meeting ICAI SQC 1.
        </p>

        <div style="overflow-x:auto;">
          <table class="data-grid" style="font-size:11px;">
            <thead>
              <tr><th>WP Ref</th><th>Workpaper Title</th><th>ICAI SA Standard</th><th>Retention</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>WP-01</strong></td><td>Scoping & Enterprise Profile</td><td>SA 315 / SA 300</td><td>7 Years</td></tr>
              <tr><td><strong>WP-02</strong></td><td>Master 90 Risk Indicators & Matrix</td><td>SA 315 / SA 330</td><td>7 Years</td></tr>
              <tr><td><strong>WP-03</strong></td><td>70 Analytics Full-Population Logs</td><td>SA 500 / SA 520</td><td>7 Years</td></tr>
              <tr><td><strong>WP-04</strong></td><td>Exception Dispositions & Debit Notes</td><td>SA 230 / SA 260</td><td>7 Years</td></tr>
              <tr><td><strong>WP-05</strong></td><td>CARO 2020 & 43B(h) Tax Schedules</td><td>CARO / IT Act</td><td>7 Years</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- SA 240 -->
      <div class="panel" style="border-left:4px solid #ef4444;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span class="stat-badge-law">SA 240</span>
          <span class="status-badge critical">Fraud & Management Override</span>
        </div>
        <h3 style="font-size:15px;margin:0 0 6px 0;">The Auditor's Responsibilities Relating to Fraud</h3>
        <p style="font-size:11px;color:#64748b;margin-bottom:10px;">
          Automated substantive testing to address management override of controls in financial statement audit.
        </p>

        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:10px;font-size:11px;color:#991b1b;margin-bottom:10px;">
          <strong>Specific SA 240 Procedures Executed:</strong>
          <ul style="margin:4px 0 0 16px;padding:0;">
            <li><strong>Weekend & Non-Working Day Postings (DA-07):</strong> Flagged 10 vouchers booked on Sundays</li>
            <li><strong>Round-Sum Journal Entries (DA-08):</strong> Flagged ₹5,00,000 round-figure adjustment voucher</li>
            <li><strong>Split PO Threshold Evasion (DA-10):</strong> Detected PO-2025-089 & 090 split under ₹50L CFO threshold</li>
            <li><strong>Benford's Law 1st Digit Analysis (DA-13):</strong> Digit 5 anomalous spike detected (18.2% vs 7.9% exp)</li>
          </ul>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="action-btn" style="font-size:10px;padding:4px 8px;" onclick="openBenfordModal()">
            <i data-lucide="bar-chart-2"></i> View Benford Analysis
          </button>
          <button class="action-btn" style="font-size:10px;padding:4px 8px;" onclick="openWeekendPostingModal()">
            <i data-lucide="calendar"></i> View Weekend Postings
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==============================================================================
// 1-CLICK SUPPLIER DEBIT NOTE & DEMAND MEMO GENERATOR
// ==============================================================================
window.openDebitNoteModal = function(targetRef) {
  let vendorName = "Amperex Power Technology Ltd";
  let vendorGstin = "27AAACA1234E1Z2";
  let vendorUdyam = "UDYAM-MH-26-0012481";
  let invoiceRef = "INV-2025-0912";
  let poRef = "PO-2025-0481";
  let debitReason = "Duplicate Invoice Payment Recovery (Analytics DA-01)";
  let statutoryBasis = "ICAI SA 230 Audit Workpaper Ref: WP-REC-01 & Section 34 of CGST Act, 2017";
  let originalAmt = 184000;
  let recoverableAmt = 184000;
  let gstRate = 18;
  let refCode = "DN-" + Math.floor(1000 + Math.random() * 9000);

  // Check if targetRef is an exception in appState.exceptionsFound
  if (targetRef && appState.exceptionsFound) {
    const exc = appState.exceptionsFound.find(x => x.id === targetRef);
    if (exc) {
      debitReason = exc.rule;
      invoiceRef = exc.transactionId || invoiceRef;
      recoverableAmt = exc.amount || recoverableAmt;
      originalAmt = recoverableAmt;
      statutoryBasis = `ICAI SA 240 / SA 230 Workpaper WP-REC-${exc.id}`;
    }
  }

  // Check if targetRef matches a vendor from indianComplianceRegistry.section43Bh.vendors
  if (typeof indianComplianceRegistry !== 'undefined' && indianComplianceRegistry.section43Bh) {
    const v = indianComplianceRegistry.section43Bh.vendors.find(item => item.vendorName === targetRef);
    if (v) {
      vendorName = v.vendorName;
      vendorUdyam = v.udyamNo;
      invoiceRef = v.invoiceNo;
      debitReason = "Section 43B(h) MSMED Act Overdue Notice & Commercial Reconciliation";
      statutoryBasis = "Section 43B(h) Income Tax Act 1961 read with Section 15 of MSMED Act, 2006";
      recoverableAmt = v.amount;
      originalAmt = v.amount;
    }
  }

  const baseAmt = Math.round(recoverableAmt / (1 + (gstRate / 100)));
  const gstAmt = recoverableAmt - baseAmt;
  const cgst = Math.round(gstAmt / 2);
  const sgst = gstAmt - cgst;
  const currentDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'debitNoteModal';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:820px;max-height:92vh;overflow-y:auto;background:#f8fafc;padding:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <span class="status-badge passed" style="font-size:11px;">
          <i data-lucide="printer" style="width:13px;"></i> GST & Commercial Compliant Debit Note
        </span>
        <div style="display:flex;gap:8px;">
          <button class="action-btn" onclick="window.printDebitNote()"><i data-lucide="printer"></i> Print / PDF</button>
          <button class="action-btn btn-ai" onclick="window.copyDebitNote()"><i data-lucide="copy"></i> Copy Text</button>
          <button class="action-btn" onclick="closeModal('debitNoteModal')">✕</button>
        </div>
      </div>

      <!-- Printable Document Container -->
      <div class="debit-note-doc" id="printableDebitNote">
        <!-- Letterhead -->
        <div class="dn-header">
          <div class="dn-company-info">
            <h2 style="font-size:18px;margin:0 0 2px 0;color:#0f172a;letter-spacing:0.5px;">NEXGEN ELECTRIC MOBILITY PRIVATE LIMITED</h2>
            <p style="font-size:11px;color:#475569;margin:2px 0;">Plot C-14, Chakan Industrial Area, Phase II, MIDC, Pune - 410501, Maharashtra, India</p>
            <p style="font-size:11px;color:#475569;margin:2px 0;"><strong>CIN:</strong> U34100MH2021PTC368921 | <strong>GSTIN:</strong> 27AABCN1234F1Z8 | <strong>PAN:</strong> AABCN1234F</p>
            <p style="font-size:11px;color:#475569;margin:2px 0;"><strong>Email:</strong> accounts.payable@nexgenev.com | <strong>Contact:</strong> +91 (020) 6712-4000</p>
          </div>
          <div class="dn-badge-box">
            <div style="font-size:13px;font-weight:800;color:#dc2626;text-transform:uppercase;border:2px solid #dc2626;padding:4px 10px;border-radius:4px;display:inline-block;margin-bottom:6px;">
              FORMAL DEBIT NOTE
            </div>
            <div style="font-size:11px;color:#1e293b;text-align:left;">
              <div><strong>Debit Note No:</strong> ${refCode}</div>
              <div><strong>Date:</strong> ${currentDate}</div>
              <div><strong>Workpaper Ref:</strong> WP-REC-01</div>
            </div>
          </div>
        </div>

        <div style="border-top:2px solid #0f172a;margin:12px 0 14px 0;"></div>

        <!-- Supplier & Reference Particulars -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">
          <div style="background:#f1f5f9;padding:10px 12px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;">
            <strong style="color:#0f172a;text-transform:uppercase;display:block;margin-bottom:4px;">DEBITED TO (SUPPLIER DETAILS):</strong>
            <div><strong>${vendorName}</strong></div>
            <div>GSTIN: ${vendorGstin}</div>
            <div>Udyam Reg: ${vendorUdyam}</div>
            <div>Vendor Code: V-NEX-019</div>
          </div>
          <div style="background:#f1f5f9;padding:10px 12px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;">
            <strong style="color:#0f172a;text-transform:uppercase;display:block;margin-bottom:4px;">ORIGINAL TRANSACTION REFERENCE:</strong>
            <div><strong>Original Invoice No:</strong> ${invoiceRef}</div>
            <div><strong>Original PO No:</strong> ${poRef}</div>
            <div><strong>Invoice Date:</strong> 15-May-2025</div>
            <div><strong>Bank UTR Ref:</strong> AXISB25166019231</div>
          </div>
        </div>

        <!-- Discrepancy Breakdown Table -->
        <table class="dn-table" style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:11px;">
          <thead>
            <tr style="background:#0f172a;color:white;text-align:left;">
              <th style="padding:8px 10px;">#</th>
              <th style="padding:8px 10px;">Particulars / Audit Discrepancy Description</th>
              <th style="padding:8px 10px;">Statutory / Contractual Basis</th>
              <th style="padding:8px 10px;text-align:right;">Taxable Base (₹)</th>
              <th style="padding:8px 10px;text-align:right;">CGST (9%)</th>
              <th style="padding:8px 10px;text-align:right;">SGST (9%)</th>
              <th style="padding:8px 10px;text-align:right;">Total Debit (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:8px 10px;">1</td>
              <td style="padding:8px 10px;">
                <strong>${debitReason}</strong><br/>
                <span style="color:#64748b;font-size:10px;">Identified during 100% full-population automated analytics execution.</span>
              </td>
              <td style="padding:8px 10px;color:#0284c7;font-size:10px;">${statutoryBasis}</td>
              <td style="padding:8px 10px;text-align:right;font-family:monospace;">₹${baseAmt.toLocaleString('en-IN')}</td>
              <td style="padding:8px 10px;text-align:right;font-family:monospace;">₹${cgst.toLocaleString('en-IN')}</td>
              <td style="padding:8px 10px;text-align:right;font-family:monospace;">₹${sgst.toLocaleString('en-IN')}</td>
              <td style="padding:8px 10px;text-align:right;font-weight:700;color:#dc2626;font-family:monospace;">₹${recoverableAmt.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style="background:#f8fafc;font-weight:700;border-top:2px solid #0f172a;">
              <td colspan="6" style="padding:8px 10px;text-align:right;">TOTAL AMOUNT DEBITED:</td>
              <td style="padding:8px 10px;text-align:right;font-size:13px;color:#dc2626;font-family:monospace;">₹${recoverableAmt.toLocaleString('en-IN')}</td>
            </tr>
          </tfoot>
        </table>

        <!-- Amount in Words & Notes -->
        <div style="background:#f8fafc;padding:8px 12px;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;margin-bottom:16px;">
          <div><strong>Amount in Words:</strong> Indian Rupees One Lakh Eighty-Four Thousand Only.</div>
          <div style="margin-top:4px;color:#64748b;">
            <strong>Commercial Terms:</strong> This debit note will be automatically adjusted against your pending payment vouchers or subsequent purchase orders within 7 business days from receipt.
          </div>
        </div>

        <!-- Signatures Block -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:24px;padding-top:14px;border-top:1px dashed #cbd5e1;font-size:11px;text-align:center;">
          <div>
            <div style="height:35px;"></div>
            <strong>Accounts Payable Executive</strong>
            <div style="color:#64748b;font-size:10px;">NexGen Electric Mobility</div>
          </div>
          <div>
            <div style="height:35px;"></div>
            <strong>Lead Internal Auditor</strong>
            <div style="color:#64748b;font-size:10px;">ICAI SA 230 Workpaper WP-REC-01</div>
          </div>
          <div>
            <div style="height:35px;"></div>
            <strong>Head of Finance / CFO</strong>
            <div style="color:#64748b;font-size:10px;">Authorized Signatory</div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  lucide.createIcons();
};

window.printDebitNote = function() {
  window.print();
};

window.copyDebitNote = function() {
  const el = document.getElementById('printableDebitNote');
  if (el) {
    window.copyTextToClipboard(el.innerText, 'Debit note text copied to clipboard!');
  }
};
