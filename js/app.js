import {
  initFirebase, onSyncStatus, onAuthReady, loginWithGoogle, logout,
  subscribeToLogs, createLog, updateLog, deleteLog,
} from './firebase.js';
import { PROTOCOLS, ARTICLES, QUOTES, EMOTIONS, TOPIC_LABELS } from './seed-content.js';

// ===== State =====
let logs = [];
let trendsRange = '7';
let libraryFilter = 'all';
let readOnly = false;

// ===== DOM helpers =====
const $ = (id) => document.getElementById(id);

const loginScreen = $('login-screen');
const appEl = $('app');
const googleBtn = $('google-login-btn');
const loginError = $('login-error');
const syncStatus = $('sync-status');
const toast = $('toast');

// ===== Init =====
function init() {
  initFirebase();

  onSyncStatus((status) => {
    syncStatus.className = 'sync-status ' + status;
    syncStatus.title = status;
  });

  onAuthReady((user) => {
    if (user) {
      readOnly = false;
      document.body.classList.remove('read-only');
      const banner = $('readonly-banner');
      if (banner) banner.classList.add('hidden');
      loginScreen.classList.add('hidden');
      appEl.classList.remove('hidden');
      startApp();
      return;
    }
    if (!readOnly) {
      loginScreen.classList.remove('hidden');
      appEl.classList.add('hidden');
    }
  });

  googleBtn.addEventListener('click', async () => {
    loginError.textContent = '';
    const r = await loginWithGoogle();
    if (r.error === 'unauthorized') loginError.textContent = 'Unauthorized account.';
    else if (r.error) loginError.textContent = r.error;
  });

  const readonlyBtn = $('readonly-btn');
  if (readonlyBtn) {
    readonlyBtn.addEventListener('click', () => {
      readOnly = true;
      document.body.classList.add('read-only');
      const banner = $('readonly-banner');
      if (banner) banner.classList.remove('hidden');
      loginScreen.classList.add('hidden');
      appEl.classList.remove('hidden');
      startApp();
    });
  }
  const bannerSignin = $('readonly-banner-signin');
  if (bannerSignin) {
    bannerSignin.addEventListener('click', (e) => { e.preventDefault(); window.location.reload(); });
  }
  const logoutBtn = $('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      logoutBtn.disabled = true;
      logoutBtn.textContent = 'Signing out…';
      try { await logout(); } catch (err) { console.error('signOut failed:', err); }
      window.location.reload();
    });
  }
}

let appStarted = false;
function startApp() {
  if (appStarted) return;
  appStarted = true;

  setupTabs();
  setupLogModal();
  setupTrendsRange();
  setupLibraryFilters();
  setupModals();
  setupKeyboard();

  $('open-log-btn').addEventListener('click', () => openLogModal());

  subscribeToLogs((items) => {
    logs = items;
    renderToday();
    renderTrends();
  });

  renderProtocols();
  renderLibrary();
  renderDailyQuote();
}

// ===== Tabs =====
function setupTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
      ['today', 'trends', 'protocols', 'library'].forEach(v => {
        const el = $('view-' + v);
        const active = v === name;
        el.classList.toggle('hidden', !active);
        el.classList.toggle('view-active', active);
      });
    });
  });
}

// ===== Date helpers =====
const pad = (n) => String(n).padStart(2, '0');
const fmtDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => fmtDate(new Date());

function prettyDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function shortDay(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: 'short' });
}

// ===== Today =====
function renderToday() {
  const dateEl = $('today-date');
  const todayStr = today();
  dateEl.textContent = prettyDate(todayStr);

  const todaysLog = logs.find(l => l.date === todayStr);
  const cardEl = $('today-log-card');
  const openBtn = $('open-log-btn');

  if (todaysLog) {
    cardEl.classList.remove('hidden');
    cardEl.innerHTML = buildEntryCardInner(todaysLog);
    cardEl.onclick = () => openLogModal(todaysLog);
    openBtn.textContent = 'Edit today';
    $('today-greet').textContent = 'Today\'s reflection is in.';
  } else {
    cardEl.classList.add('hidden');
    openBtn.textContent = '+ New entry';
    $('today-greet').textContent = 'How was your day?';
  }

  renderWeekStrip();
}

function buildEntryCardInner(log) {
  const dateLabel = prettyDate(log.date);
  const scales = EMOTIONS.map(e => {
    const v = (log.emotions && log.emotions[e.key]) || 0;
    const dots = Array.from({ length: 10 }, (_, i) =>
      `<span class="entry-scale-dot${i < v ? ' on' : ''}"></span>`
    ).join('');
    return `
      <div class="entry-scale${e.warm ? ' warm' : ''}">
        <span class="entry-scale-name">${e.label}</span>
        <span class="entry-scale-dots">${dots}</span>
        <span class="entry-scale-val">${v}<span class="entry-scale-val-max">/10</span></span>
      </div>
    `;
  }).join('');

  const grats = (log.gratitudes || []).filter(Boolean);
  const gratsHtml = grats.length
    ? `<div class="entry-gratitudes">Gratitudes<ul class="entry-gratitudes-list">${grats.map(g => `<li>${escapeHtml(g)}</li>`).join('')}</ul></div>`
    : '';

  const notesHtml = log.notes ? `<div class="entry-notes">${escapeHtml(log.notes)}</div>` : '';

  const sleepText = (log.sleep && log.sleep.hours)
    ? `${log.sleep.hours}h${log.sleep.quality ? ' · ' + '★'.repeat(log.sleep.quality) : ''}`
    : '';

  return `
    <div class="entry-card-head">
      <span class="entry-card-date">${dateLabel}</span>
      <span class="entry-card-time">${sleepText}</span>
    </div>
    <div class="entry-scales">${scales}</div>
    ${gratsHtml}
    ${notesHtml}
  `;
}

function renderWeekStrip() {
  const strip = $('week-strip');
  strip.innerHTML = '';
  const now = new Date();
  // last 7 days, oldest left → newest right
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const dateStr = fmtDate(d);
    const log = logs.find(l => l.date === dateStr);
    const isToday = dateStr === today();
    const cell = document.createElement('div');
    cell.className = 'week-cell' + (log ? '' : ' empty') + (isToday ? ' today' : '');
    cell.innerHTML = `
      <div class="week-cell-day">${d.toLocaleDateString(undefined, { weekday: 'short' })}</div>
      <div class="week-cell-num">${d.getDate()}</div>
      <div class="week-cell-bar" style="background:${log ? dominantColor(log) : 'var(--border)'}"></div>
    `;
    if (log) cell.addEventListener('click', () => openLogModal(log));
    else cell.style.cursor = 'default';
    strip.appendChild(cell);
  }
}

function dominantColor(log) {
  const em = log.emotions || {};
  let max = -1, key = null;
  EMOTIONS.forEach(e => {
    const v = em[e.key] || 0;
    if (v > max) { max = v; key = e.key; }
  });
  if (!key || max === 0) return 'var(--ink-mute)';
  const e = EMOTIONS.find(x => x.key === key);
  return e.color;
}

function renderDailyQuote() {
  // Deterministic by day so it doesn't flicker
  const seed = parseInt(today().replace(/-/g, ''), 10);
  const q = QUOTES[seed % QUOTES.length];
  $('daily-quote').innerHTML = `“${escapeHtml(q.text)}” <span class="quote-attr">${escapeHtml(q.author)}</span>`;
}

// ===== Log modal =====
function setupLogModal() {
  // Range sliders update value display
  document.querySelectorAll('#log-form .scale-row input[type="range"]').forEach(slider => {
    const val = slider.parentElement.querySelector('.scale-val');
    slider.addEventListener('input', () => { val.textContent = slider.value; });
  });

  // Stars
  $('log-sleep-quality').addEventListener('click', (e) => {
    if (!e.target.classList.contains('star')) return;
    const v = parseInt(e.target.dataset.val);
    const cur = parseInt($('log-sleep-quality').dataset.val || '0');
    const newVal = cur === v ? 0 : v;
    $('log-sleep-quality').dataset.val = newVal;
    refreshStars();
  });

  $('log-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = $('log-id').value;
    const emotions = {};
    document.querySelectorAll('#log-form .scale-row').forEach(row => {
      emotions[row.dataset.key] = parseInt(row.querySelector('input[type="range"]').value);
    });
    const sleep = {
      hours: parseFloat($('log-sleep-hours').value) || null,
      quality: parseInt($('log-sleep-quality').dataset.val || '0') || null,
    };
    const gratitudes = [
      $('log-grat-1').value.trim(),
      $('log-grat-2').value.trim(),
      $('log-grat-3').value.trim(),
    ];
    const notes = $('log-notes').value.trim();
    const data = {
      date: today(),
      emotions,
      sleep,
      gratitudes,
      notes,
    };
    if (id) {
      // Preserve the original date when editing
      const existing = logs.find(l => l.id === id);
      if (existing) data.date = existing.date;
      await updateLog(id, data);
      showToast('Entry updated');
    } else {
      // If a log for today already exists, edit it instead of creating a duplicate
      const existing = logs.find(l => l.date === data.date);
      if (existing) {
        await updateLog(existing.id, data);
        showToast('Today\'s entry updated');
      } else {
        await createLog(data);
        showToast('Entry saved');
      }
    }
    closeModal('log-modal');
  });

  $('log-delete-btn').addEventListener('click', async () => {
    const id = $('log-id').value;
    if (!id) return;
    if (!confirm('Delete this entry?')) return;
    await deleteLog(id);
    closeModal('log-modal');
    showToast('Entry deleted');
  });
}

function openLogModal(log) {
  if (readOnly) return;
  $('log-modal-title').textContent = log ? 'Edit entry' : 'Evening reflection';
  $('log-id').value = log ? log.id : '';

  // Scales
  document.querySelectorAll('#log-form .scale-row').forEach(row => {
    const key = row.dataset.key;
    const v = log && log.emotions ? (log.emotions[key] || 0) : 0;
    const input = row.querySelector('input[type="range"]');
    input.value = v;
    row.querySelector('.scale-val').textContent = v;
  });

  // Sleep
  $('log-sleep-hours').value = log && log.sleep ? (log.sleep.hours || '') : '';
  $('log-sleep-quality').dataset.val = log && log.sleep ? (log.sleep.quality || 0) : 0;
  refreshStars();

  // Gratitudes
  const grats = (log && log.gratitudes) || ['', '', ''];
  $('log-grat-1').value = grats[0] || '';
  $('log-grat-2').value = grats[1] || '';
  $('log-grat-3').value = grats[2] || '';

  // Notes
  $('log-notes').value = (log && log.notes) || '';

  // Delete button only if editing
  $('log-delete-btn').classList.toggle('hidden', !log);

  openModal('log-modal');
}

function refreshStars() {
  const v = parseInt($('log-sleep-quality').dataset.val || '0');
  document.querySelectorAll('#log-sleep-quality .star').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= v);
  });
}

// ===== Trends =====
function setupTrendsRange() {
  document.querySelectorAll('#trends-range button').forEach(btn => {
    btn.addEventListener('click', () => {
      trendsRange = btn.dataset.range;
      document.querySelectorAll('#trends-range button').forEach(b => b.classList.toggle('active', b === btn));
      renderTrends();
    });
  });
}

function logsInRange() {
  if (trendsRange === 'all') return [...logs].sort((a, b) => a.date.localeCompare(b.date));
  const n = parseInt(trendsRange);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - n + 1);
  const cutoffStr = fmtDate(cutoff);
  return logs.filter(l => l.date >= cutoffStr).sort((a, b) => a.date.localeCompare(b.date));
}

function renderTrends() {
  const data = logsInRange();
  const empty = $('trends-empty');
  const content = $('trends-content');

  if (data.length === 0) {
    empty.classList.remove('hidden');
    content.classList.add('hidden');
    return;
  }
  empty.classList.add('hidden');
  content.classList.remove('hidden');

  // Charts per emotion
  const chartsEl = $('trends-charts');
  chartsEl.innerHTML = '';
  EMOTIONS.forEach(e => {
    const values = data.map(l => (l.emotions && l.emotions[e.key]) || 0);
    const avg = values.length ? (values.reduce((s, v) => s + v, 0) / values.length) : 0;
    const row = document.createElement('div');
    row.className = 'trend-row';
    row.innerHTML = `
      <div class="trend-row-head">
        <span class="trend-row-name">${e.label}</span>
        <span class="trend-row-avg">avg ${avg.toFixed(1)} / 10</span>
      </div>
      ${buildSparkline(values, e.color)}
    `;
    chartsEl.appendChild(row);
  });

  // Sleep
  renderSleep(data);

  // Insights
  renderInsights(data);
}

function buildSparkline(values, color) {
  if (values.length === 0) return '';
  const w = 100, h = 50, pad = 4;
  const max = 10;
  const step = values.length > 1 ? (w - pad * 2) / (values.length - 1) : 0;
  const pts = values.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const line = pts.join(' ');
  const area = `${pad},${h - pad} ${line} ${(pad + step * (values.length - 1)).toFixed(2)},${h - pad}`;
  const dots = values.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - (v / max) * (h - pad * 2);
    return `<circle class="trend-chart-dot" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.6" fill="${color}"/>`;
  }).join('');
  return `
    <svg class="trend-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <polygon class="trend-chart-area" points="${area}" fill="${color}"/>
      <polyline class="trend-chart-line" points="${line}" stroke="${color}"/>
      ${dots}
    </svg>
  `;
}

function renderSleep(data) {
  const sleepData = data.map(l => ({
    date: l.date,
    hours: (l.sleep && l.sleep.hours) || 0,
    quality: (l.sleep && l.sleep.quality) || 0,
  }));
  const maxH = Math.max(9, ...sleepData.map(s => s.hours));
  const bars = sleepData.map(s => {
    if (!s.hours) {
      return `<div class="sleep-bar empty" title="${s.date}: no sleep recorded" style="height:6%"></div>`;
    }
    const heightPct = (s.hours / maxH) * 100;
    const cls = s.hours < 6 ? 'poor' : '';
    return `<div class="sleep-bar ${cls}" title="${s.date}: ${s.hours}h${s.quality ? ' · ★'.repeat(s.quality) : ''}" style="height:${heightPct}%"></div>`;
  }).join('');

  const withHours = sleepData.filter(s => s.hours > 0);
  const avg = withHours.length ? (withHours.reduce((s, x) => s + x.hours, 0) / withHours.length) : 0;
  const poor = withHours.filter(s => s.hours < 6).length;

  $('trends-sleep').innerHTML = `
    <div class="sleep-bars">${bars}</div>
    <div class="sleep-summary">
      <span>avg <strong>${avg.toFixed(1)}h</strong> · ${withHours.length} nights recorded</span>
      <span>${poor} night${poor === 1 ? '' : 's'} under 6h</span>
    </div>
  `;
}

function renderInsights(data) {
  const el = $('trends-insights');
  const insights = [];

  if (data.length >= 4) {
    // Sleep ↔ anxiety
    const paired = data.filter(l => l.sleep && l.sleep.hours && l.emotions);
    if (paired.length >= 4) {
      const low = paired.filter(l => l.sleep.hours < 7);
      const high = paired.filter(l => l.sleep.hours >= 7);
      if (low.length >= 2 && high.length >= 2) {
        const lowAvg = avg(low.map(l => l.emotions.anxiety || 0));
        const highAvg = avg(high.map(l => l.emotions.anxiety || 0));
        if (lowAvg > highAvg + 0.5) {
          const delta = (lowAvg - highAvg).toFixed(1);
          insights.push(`<strong>Sleep under 7h</strong> shows anxiety <strong>+${delta}</strong> on average vs. rested nights (${low.length} vs. ${high.length} entries).`);
        }
      }
    }

    // Gratitudes ↔ serenity
    const withGrats = data.filter(l => (l.gratitudes || []).filter(Boolean).length >= 3);
    const withoutGrats = data.filter(l => (l.gratitudes || []).filter(Boolean).length === 0);
    if (withGrats.length >= 2 && withoutGrats.length >= 2) {
      const ag = avg(withGrats.map(l => (l.emotions && l.emotions.serenity) || 0));
      const ng = avg(withoutGrats.map(l => (l.emotions && l.emotions.serenity) || 0));
      if (ag > ng + 0.5) {
        insights.push(`On days you finished <strong>three gratitudes</strong>, serenity averaged <strong>+${(ag - ng).toFixed(1)}</strong>.`);
      }
    }

    // Dominant emotion overall
    const totals = {};
    EMOTIONS.forEach(e => { totals[e.key] = 0; });
    data.forEach(l => {
      EMOTIONS.forEach(e => { totals[e.key] += (l.emotions && l.emotions[e.key]) || 0; });
    });
    const maxKey = Object.keys(totals).reduce((a, b) => totals[a] >= totals[b] ? a : b);
    const e = EMOTIONS.find(x => x.key === maxKey);
    if (e && totals[maxKey] > 0) {
      insights.push(`Most prominent feeling across this range: <strong>${e.label.toLowerCase()}</strong>.`);
    }
  }

  if (insights.length === 0) {
    el.innerHTML = `<div class="insight empty">Log a few more days and patterns will appear here.</div>`;
    return;
  }
  el.innerHTML = insights.map(t => `<div class="insight">${t}</div>`).join('');
}

function avg(arr) {
  return arr.length === 0 ? 0 : arr.reduce((s, v) => s + v, 0) / arr.length;
}

// ===== Protocols =====
function renderProtocols() {
  const groupOrder = ['anger', 'anxiety', 'sadness', 'hypochondria', 'love', 'general'];
  const groupLabels = {
    anger: 'For anger', anxiety: 'For anxiety', sadness: 'For sadness',
    hypochondria: 'For hypochondria', love: 'Cultivating love', general: 'General practice',
  };

  const grouped = {};
  PROTOCOLS.forEach(p => {
    (grouped[p.targetEmotion] = grouped[p.targetEmotion] || []).push(p);
  });

  const list = $('protocols-list');
  list.innerHTML = '';

  groupOrder.forEach(key => {
    const items = grouped[key];
    if (!items || items.length === 0) return;
    const group = document.createElement('div');
    group.className = 'protocol-group';
    group.innerHTML = `
      <h3 class="protocol-group-title">${groupLabels[key] || key}</h3>
      <div class="protocol-group-items">
        ${items.map(p => `
          <div class="protocol-card" data-id="${p.id}">
            <div class="protocol-card-head">
              <span class="protocol-card-icon">${p.icon}</span>
              <span class="protocol-card-name">${escapeHtml(p.name)}</span>
            </div>
            <p class="protocol-card-desc">${escapeHtml(p.description)}</p>
            <div class="protocol-card-meta">${p.minutes} min · ${p.steps.length} steps · ${p.sources.length} source${p.sources.length === 1 ? '' : 's'}</div>
          </div>
        `).join('')}
      </div>
    `;
    group.querySelectorAll('.protocol-card').forEach(card => {
      card.addEventListener('click', () => openProtocol(card.dataset.id));
    });
    list.appendChild(group);
  });
}

function openProtocol(id) {
  const p = PROTOCOLS.find(x => x.id === id);
  if (!p) return;
  $('pv-icon').textContent = p.icon;
  $('pv-name').textContent = p.name;
  $('pv-meta').textContent = `${p.minutes} min · ${p.steps.length} steps`;
  $('pv-description').textContent = p.description;
  $('pv-steps').innerHTML = p.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('');
  $('pv-sources').innerHTML = p.sources.map(s =>
    s.url
      ? `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.name)}</a></li>`
      : `<li>${escapeHtml(s.name)}</li>`
  ).join('');
  openModal('protocol-modal');
}

// ===== Library =====
function setupLibraryFilters() {
  const topics = ['all', ...new Set(ARTICLES.map(a => a.topic))];
  const el = $('library-filters');
  el.innerHTML = topics.map(t => {
    const label = t === 'all' ? 'All' : (TOPIC_LABELS[t] || t);
    return `<button class="library-filter ${libraryFilter === t ? 'active' : ''}" data-topic="${t}">${label}</button>`;
  }).join('');
  el.querySelectorAll('.library-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      libraryFilter = btn.dataset.topic;
      setupLibraryFilters();
      renderLibrary();
    });
  });
}

function renderLibrary() {
  const list = $('library-list');
  const items = libraryFilter === 'all' ? ARTICLES : ARTICLES.filter(a => a.topic === libraryFilter);
  const sorted = [...items].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
  list.innerHTML = sorted.map(a => `
    <div class="library-card" data-id="${a.id}">
      <div class="library-card-topic">${TOPIC_LABELS[a.topic] || a.topic}</div>
      <h3 class="library-card-title">${escapeHtml(a.title)}</h3>
      <p class="library-card-excerpt">${escapeHtml(a.excerpt)}</p>
      <div class="library-card-meta">${a.readingMinutes} min read · ${prettyShortDate(a.publishedAt)}</div>
    </div>
  `).join('');
  list.querySelectorAll('.library-card').forEach(card => {
    card.addEventListener('click', () => openArticle(card.dataset.id));
  });
}

function prettyShortDate(s) {
  if (!s) return '';
  const [y, m, d] = s.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;
  $('av-topic').textContent = TOPIC_LABELS[a.topic] || a.topic;
  $('av-title').textContent = a.title;
  $('av-meta').textContent = `${a.readingMinutes} min read · ${prettyShortDate(a.publishedAt)}`;
  $('av-body').innerHTML = sanitizeRichHtml(a.body);
  $('av-sources').innerHTML = a.sources.map(s =>
    s.url
      ? `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.name)}</a></li>`
      : `<li>${escapeHtml(s.name)}</li>`
  ).join('');
  openModal('article-modal');
  // Scroll the modal content to the top
  document.querySelector('#article-modal .modal-content').scrollTop = 0;
}

// ===== Modal helpers =====
function setupModals() {
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.classList.remove('open');
    });
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  });
}

function openModal(id) { $(id).classList.add('open'); }
function closeModal(id) { $(id).classList.remove('open'); }

// ===== Keyboard =====
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
    }
  });
}

// ===== Utilities =====
function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s == null ? '' : String(s);
  return div.innerHTML;
}

const ALLOWED_TAGS = new Set(['P', 'BLOCKQUOTE', 'H3', 'STRONG', 'B', 'EM', 'I', 'BR', 'A']);
function sanitizeRichHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  tmp.querySelectorAll('script, style, iframe').forEach(el => el.remove());
  tmp.querySelectorAll('*').forEach(el => {
    if (!ALLOWED_TAGS.has(el.tagName)) {
      el.replaceWith(...el.childNodes);
      return;
    }
    [...el.attributes].forEach(a => {
      // Keep href + target + rel on <a>; drop everything else.
      if (el.tagName === 'A' && (a.name === 'href' || a.name === 'target' || a.name === 'rel')) return;
      el.removeAttribute(a.name);
    });
  });
  return tmp.innerHTML;
}

let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

document.addEventListener('DOMContentLoaded', init);
