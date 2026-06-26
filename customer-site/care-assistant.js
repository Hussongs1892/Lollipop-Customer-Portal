/* ============================================================
   Lollipop Care Assistant — manager support chatbot
   ============================================================ */

/* ---- Tool registry (the website resource tools) ---- */
const TOOLS = {
  "conversation-starters": {
    label: "Conversation Starters",
    desc: "Ready-to-use prompts to open the conversation",
    icon: "lucide:message-circle",
    color: "var(--blue-500)",
    url: "https://www.trylollipop.com/conversation-starters-hidden"
  },
  "small-authentic-gestures": {
    label: "Small Authentic Gestures",
    desc: "Simple acts of care that help people feel seen",
    icon: "lucide:gift",
    color: "var(--coral-500)",
    url: "https://www.trylollipop.com/small-authentic-gestures-hidden"
  },
  "quick-insights": {
    label: "Quick Insights",
    desc: "Five-second, research-backed manager micro-habits",
    icon: "lucide:lightbulb",
    color: "var(--warning)",
    url: "https://www.trylollipop.com/resources/quick-insights"
  },
  "connection-exercises": {
    label: "Connection Exercises",
    desc: "Quick activities to build trust as a team",
    icon: "lucide:users",
    color: "var(--positive)",
    url: "https://www.trylollipop.com/connection-exercises-hidden"
  },
  "meeting-icebreakers": {
    label: "Meeting Icebreakers",
    desc: "Short, safe questions to warm up the room",
    icon: "lucide:snowflake",
    color: "#7c5cff",
    url: "https://www.trylollipop.com/meeting-icebreakers-hidden"
  },
  "support": {
    label: "Contact Lollipop Support",
    desc: "Technical help — support@trylollipop.com · within 1 business day",
    icon: "lucide:life-buoy",
    color: "var(--ink-500)",
    url: "mailto:support@trylollipop.com"
  }
};

/* ---- System prompt: the knowledge base + behaviour ---- */
const SYSTEM = `You are the **Lollipop Care Assistant**, a warm, practical guide for everyone who runs Lollipop — **admins and champions** (getting set up, the admin dashboard, rosters, reports) and **managers and supervisors** (responding to alerts, caring conversations, supporting people). Lollipop is a workplace well-being check-in platform. You speak like a kind, emotionally-intelligent colleague: warm, direct, plain language, second person ("you"), encouraging and never clinical. Keep replies focused and skimmable — short paragraphs and bullet lists. Aim for 4–9 sentences unless asked for more. When a question is about setup, the dashboard, rosters, billing, or reports, answer it as a clear how-to with concrete steps.

# HOW LOLLIPOP WORKS
Employees get a quick check-in (SMS, email, Slack, or WhatsApp): a 1–5 mood, optional emotions, and an optional comment. A low score or a comment sends the manager an instant, non-anonymous alert. The loop is: check-in → alert → connect. There is no app or login for employees; launch is typically 24–48 hours after the company sends its roster and schedule.

# A MANAGER'S ROLE (4 habits)
1) Encourage your team to check in — explain the company uses Lollipop because it cares. 2) Respond to alerts promptly and reach out with genuine care. 3) Talk about Lollipop regularly in meetings and 1-on-1s. 4) Lead by example and check in yourself. Encourage participation but never require it.

# RESPONDING TO AN ALERT: CONNECT, DON'T FIX
Your goal is to connect, listen, and understand — not to diagnose or solve. Be a bridge to the right help, not the help itself.
- Approach: get into a caring mindset; invite them somewhere private; say you wanted to check in and ask if they'd like to talk.
- Listen (80/20 rule — listen 80%, talk 20%): give full attention, don't interrupt, ask clarifying questions, restate what you heard, use open body language.
- Engage: show genuine concern; if it's work-related and appropriate, offer a next step; if personal, ask how you can help.
- What NOT to do: don't minimize ("that's not so bad"), judge ("why didn't you tell me sooner?"), diagnose, counsel, give personal/medical advice, or make it about you. Sometimes the best thing to say is "thanks for trusting me with this."

# EXAMPLES OF SUPPORT (match support to the situation)
Family emergency/loss → remind of leave policy, send flowers, a leadership call. Transportation/childcare → temporary ride-share, schedule change, or work-from-home. Health → sick-leave/disability options, point to the EAP. Overwhelmed/anxious → extra breaks or an afternoon off. A win/milestone → acknowledge in a meeting, a handwritten note, lunch. Some support has a cost — confirm you have the authority before offering it. Celebrate good moments, not just hard ones.

# THE RESOURCE TOOLS (always recommend the relevant one)
- Conversation Starters — prompts to open a conversation, filtered by emotion or situation.
- Small Authentic Gestures — low-effort ways to show you care, with a no-cost filter.
- Quick Insights — five-second manager micro-habits.
- Connection Exercises — quick 1-on-1 or team trust-building activities.
- Meeting Icebreakers — short safe questions for teams of 4–10.

# GETTING STARTED / ONBOARDING (for admins & champions)
Lollipop's Customer Success team does all the technical setup — creating the account, uploading and validating the roster, mapping supervisors to their teams for alert routing, configuring channels/thresholds/trigger words/schedule, and activating at go-live. The customer's job is light. From the customer, Lollipop needs **five inputs**: (1) an employee spreadsheet (name, mobile and/or email, supervisor, by team); (2) the check-in schedule (days, times, time zones — twice-weekly drives the highest participation, weekly is a fine start); (3) the administrators, including a primary champion AND a backup; (4) resources & links (EAP, crisis lines, internal well-being resources); (5) who receives the monthly engagement report. Launch is typically 24–48 hours after the roster + schedule arrive. Name a backup champion — participation collapses without one. Introduce Lollipop to employees with the sample intro letter (English & Spanish), covering Why / How / Confidential / Optional. Ask IT to whitelist the sending domains (noreply@lollipopco.co) so nothing lands in spam. International SMS needs the destination country code enabled before launch.

# WHERE THINGS LIVE (left sidebar map — give the exact click-path)
Top-level sidebar items: **Dashboard · Resources · Follow Ups · Employees · Teams · All Responses · Reports · Locations · Admins · Settings**. Some items are NESTED — click the parent to expand it. **Teams** expands to **Dashboard · Delivery Schedules · Responses · Imports**. The thing people most often can't find is **Delivery Schedules** — it lives INSIDE Teams, not on its own and not under Settings. Quick paths: when check-ins send → **Teams → Delivery Schedules → Add Delivery Schedule** (per team; set days + time, Save); add an employee → **Employees → Add Employee** (bulk → **Teams → Imports**); remove someone → **Employees → Inactive List**; responses → **All Responses** or **Teams → Responses**; alerts → **Follow Ups**; reports → **Reports**; add an admin/supervisor → **Admins**; connect Slack / channels / thresholds → **Settings → Integrations** and **Settings → Check Ins**. If the Teams sub-menu won't expand, the login is likely supervisor-only — admin rights are needed for the full Teams menu.

# USING THE ADMIN DASHBOARD
The dashboard is the admin's live read on how the organization is feeling. Walk admins through it plainly:
- **Engagement** — the share of employees checking in. Low engagement with a healthy mood means a participation nudge, not that something's wrong. Typical engagement is 30–60% (best-in-class ~80%).
- **Average Mood** — the 1–5 team average. Below 3.5 / 5 warrants a closer look.
- **Distribution & by Team** — the spread across Terrible → Great and teams side by side, so an average doesn't hide who needs support.
- **Trends & Responses** — mood over time, and individual check-ins with any follow-ups requested.
- Always **set the date filter to the current month** — otherwise the numbers reflect a different range.
- Other admin views: Employees, Teams, Follow Ups, Locations, Manager Resources, Reports, plus the Settings tabs. A monthly engagement report is emailed to the chosen recipients; compare engagement month-over-month and investigate any sustained drop.

# ROSTER MANAGEMENT (keeping it current)
- Add one person: Employees → **Add Employee** (assign a Team and the Team Role "employee"). For five or more, re-run the upload — it adds rows without deleting anyone.
- Remove someone: move them to the **Inactive List** (check-ins stop, history is kept, they can be reactivated).
- Or simply email Lollipop an updated spreadsheet of new + departed employees and they make the changes. Lollipop emails admins monthly to collect departures and new hires (with their supervisor) so routing stays accurate.

# BILLING
Billing runs through Stripe — per employee or per location, monthly or annual (annual invoiced up front). The first invoice issues at go-live. Customer Success sends the checkout link and applies any agreed promotion via coupon.

# CHANNELS
Check-ins can go by Slack, SMS, email, or WhatsApp. If an account's language is set to Spanish, the Slack bot messages in Spanish automatically.

# TECHNICAL ISSUES
For any technical problem or bug, direct them to in-platform help or email support@trylollipop.com (response within 1 business day). Recommend the "support" tool.

# CONFIDENTIALITY & ESCALATION (critical)
Keep responses and conversations private — shared only with HR as policy requires. Never used for discipline, evaluations, or promotions. Never ask about medical conditions, prescriptions, or therapy. Route medical details, pay, benefits, policy, harassment, discrimination, or injury concerns to HR — not Lollipop.
ESCALATE IMMEDIATELY to HR or the General Manager (per company protocol) if someone shows signs of harming themselves or others (ask them directly), reports harassment/discrimination/injury, or shares anything you're legally/ policy-required to disclose.

# DISCLAIMERS — STATE WHEN RELEVANT
You provide support, guidance, and resources. You are NOT a counselor, therapist, doctor, lawyer, or HR. You do not provide counseling, diagnosis, medical, legal, or mental-health treatment advice. For anything clinical or legal, point the manager to the EAP, HR, or a qualified professional. Encourage managers to be a caring bridge to the right help.

# SAFETY RULE (highest priority)
If the manager describes ANY risk of suicide, self-harm, or harm to others, your FIRST priority is safety: tell them to (1) stay with the person / not leave them alone if in immediate danger, (2) contact HR or the General Manager immediately per company protocol, and (3) call or text 988 (US Suicide & Crisis Lifeline) or local emergency services (911) if there is immediate danger. Do not attempt to counsel or talk the person down yourself. Be calm, clear, and brief.

# TOOL TAGS
When a resource tool would help, end your reply with a tag line on its own line listing the tool keys, e.g.:
[[TOOLS: conversation-starters, small-authentic-gestures]]
Valid keys: conversation-starters, small-authentic-gestures, quick-insights, connection-exercises, meeting-icebreakers, support. Only include genuinely relevant tools (0–3). Put nothing after the tag.`;

/* ---- Crisis keyword safeguard (client-side, model-independent) ---- */
const CRISIS_RE = /\b(suicid|kill (my|him|her|them)self|kill themsel|end (my|his|her|their) life|take (my|his|her|their) own life|want to die|wants to die|wanna die|don'?t want to (live|be here)|self.?harm|hurt (my|him|her|them)self|harm (my|him|her|them)self|harming (my|him|her|them)self|cutting (my|him|her)self|overdose|threaten(ed|ing)? to (hurt|harm|kill))/i;

const CRISIS_HTML = `<div class="crisis">
  <h4><iconify-icon icon="lucide:shield-alert"></iconify-icon>This needs immediate attention</h4>
  <p>If someone may be at risk of harming themselves or others, your role is to act fast and get them the right help — not to counsel them yourself.</p>
  <p><b>1.</b> If there is immediate danger, don't leave them alone. Call <b>911</b> (or local emergency services).<br>
  <b>2.</b> Call or text <b>988</b> — the US Suicide &amp; Crisis Lifeline (24/7).<br>
  <b>3.</b> Notify <b>HR or your General Manager immediately</b>, following your company's protocol.</p>
  <p>You can ask the person directly and calmly if they are thinking about harming themselves — it does not increase risk and helps them feel seen.</p>
</div>`;

/* ---- Client-side intent → tool inference (fallback + augment) ---- */
const INTENT = [
  { key:"conversation-starters", re:/\b(alert|what (do|should|can) i (say|do)|talk to|conversation|bring it up|open up|reach out|check.?in with|awkward|burn.?out|burned out|stressed|overwhelmed|anxious|worried|struggling|low.?mood|feeling down|sad|upset|crying|quiet|withdrawn|disengaged|venting|frustrat)/i },
  { key:"small-authentic-gestures", re:/\b(celebrat|gift|a win|milestone|congratulat|new baby|baby|wedding|birthday|anniversar|promotion|loss|grief|grieving|died|passed away|funeral|flowers|thank|recogni[sz]|appreciat|going through a hard|gesture|show (i|we) care)/i },
  { key:"quick-insights", re:/\b(better manager|improve as|be a good|habit|tip|advice on lead|leadership|motivat|build trust|one.?on.?one|1.?on.?1|engage (my|the) team|coaching)/i },
  { key:"connection-exercises", re:/\b(team.?build|team activit|team bonding|morale|build trust as a team|connection exercise|bonding|reconnect the team)/i },
  { key:"meeting-icebreakers", re:/\b(icebreaker|warm up|team meeting|kick.?off|start (a|the) meeting|open (a|the) meeting)/i },
  { key:"support", re:/\b(technical|not working|isn'?t working|doesn'?t work|bug|error|glitch|broken|can'?t (log|sign) in|log.?in|password|reset my|crash|stuck|won'?t load|something'?s wrong with the (app|platform|dashboard|account))/i }
];
function inferTools(text){
  const out = [];
  for(const i of INTENT){ if(i.re.test(text)) out.push(i.key); }
  return out;
}

/* ---- Starter suggestions ---- */const STARTERS = [
  "How do we get started with Lollipop?",
  "What do you need from us to launch?",
  "Walk me through the admin dashboard.",
  "How do I add or remove an employee?",
  "What does our monthly report tell me?",
  "I just got a low-mood alert — what do I say?",
  "Someone on my team seems burned out.",
  "A teammate just had a baby — ideas to celebrate?"
];

/* ---- State ---- */
const KEY = "lollipop_care_chat_v1";
let history = [];

const thread = document.getElementById('thread');
const threadWrap = document.getElementById('threadWrap');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send');

/* ---- Markdown (tiny, safe) ---- */
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function mdInline(s){
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\((https?:[^)]+|mailto:[^)]+)\)/g, '<a class="inline" href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/\b(support@trylollipop\.com)\b/g, '<a class="inline" href="mailto:$1">$1</a>');
  return s;
}
function mdToHtml(text){
  const lines = text.split('\n');
  let html = '', list = null;
  const closeList = () => { if(list){ html += list === 'ul' ? '</ul>' : '</ol>'; list = null; } };
  for(let raw of lines){
    const line = raw.trim();
    if(!line){ closeList(); continue; }
    let m;
    if((m = line.match(/^#{1,6}\s+(.*)/))){
      closeList();
      html += '<p class="mh">' + mdInline(m[1].replace(/[:：]\s*$/,'')) + '</p>';
    } else if((m = line.match(/^[-*•]\s+(.*)/))){
      if(list !== 'ul'){ closeList(); html += '<ul>'; list = 'ul'; }
      html += '<li>' + mdInline(m[1]) + '</li>';
    } else if((m = line.match(/^\d+[.)]\s+(.*)/))){
      if(list !== 'ol'){ closeList(); html += '<ol>'; list = 'ol'; }
      html += '<li>' + mdInline(m[1]) + '</li>';
    } else {
      closeList();
      html += '<p>' + mdInline(line) + '</p>';
    }
  }
  closeList();
  return html;
}

/* ---- Render helpers ---- */
function avatarBot(){ return `<div class="av"><img src="assets/moods/great.png" alt="Lollipop"></div>`; }
function avatarUser(){ return `<div class="av"><iconify-icon icon="lucide:user"></iconify-icon></div>`; }

function toolCards(keys){
  const valid = keys.filter(k => TOOLS[k]);
  if(!valid.length) return '';
  let h = '<div class="tools">';
  for(const k of valid){
    const t = TOOLS[k];
    h += `<a class="toolcard" href="${t.url}" target="_blank" rel="noopener">
      <span class="tic" style="background:${t.color}"><iconify-icon icon="${t.icon}"></iconify-icon></span>
      <span class="tb"><b>${t.label}</b><span>${t.desc}</span></span>
      <span class="go"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon></span>
    </a>`;
  }
  h += '</div>';
  return h;
}

function addUser(text){
  const el = document.createElement('div');
  el.className = 'msg user';
  el.innerHTML = avatarUser() + `<div class="bubble">${mdInline(text).replace(/\n/g,'<br>')}</div>`;
  thread.appendChild(el);
  scrollDown();
}

function addBot(text, opts={}){
  const { crisis=false, extraTools=[] } = opts;
  // split tool tag
  let toolsKeys = [];
  const tagMatch = text.match(/\[\[TOOLS:\s*([^\]]*)\]\]/i);
  if(tagMatch){
    toolsKeys = tagMatch[1].split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);
    text = text.replace(tagMatch[0], '').trim();
  }
  // merge model-tagged + client-inferred, dedup, valid only, cap 3
  const merged = [];
  for(const k of [...toolsKeys, ...extraTools]){
    if(TOOLS[k] && !merged.includes(k)) merged.push(k);
  }
  const finalTools = merged.slice(0, 3);
  const el = document.createElement('div');
  el.className = 'msg bot';
  el.innerHTML = avatarBot() + `<div class="bubble">${mdToHtml(text)}${crisis ? CRISIS_HTML : ''}${toolCards(finalTools)}</div>`;
  thread.appendChild(el);
  scrollDown();
}

function addTyping(){
  const el = document.createElement('div');
  el.className = 'msg bot';
  el.id = 'typing';
  el.innerHTML = avatarBot() + `<div class="bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  thread.appendChild(el);
  scrollDown();
}
function removeTyping(){ const t = document.getElementById('typing'); if(t) t.remove(); }

function scrollDown(){ requestAnimationFrame(()=>{ threadWrap.scrollTop = threadWrap.scrollHeight; }); }

/* ---- Suggested prompts (shown on empty thread) ---- */
function renderSuggestions(){
  const wrap = document.createElement('div');
  wrap.className = 'suggest';
  wrap.id = 'suggest';
  STARTERS.forEach(s => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = s;
    b.onclick = () => { input.value = s; autosize(); send(); };
    wrap.appendChild(b);
  });
  thread.appendChild(wrap);
}
function clearSuggestions(){ const s = document.getElementById('suggest'); if(s) s.remove(); }

/* ---- Greeting ---- */
function greeting(){
  addBot(
    "Hi — I'm your Lollipop **Care Assistant**. 👋 I can walk you through **getting set up and launching**, **using the admin dashboard and reports**, managing your roster — and the manager side too: responding to a check-in alert, preparing for a caring conversation, and supporting your people.\n\n" +
    "A quick note: I offer **guidance and resources, not counseling** — I'm not a therapist. If anyone may be at risk of harm, contact **HR immediately** and call or text **988**.\n\n" +
    "What can I help you with today?"
  );
  renderSuggestions();
}

/* ---- Send ---- */
async function send(){
  const text = input.value.trim();
  if(!text) return;
  clearSuggestions();
  addUser(text);
  history.push({ role:'user', content:text });
  input.value = ''; autosize(); updateSendState();
  save();

  const isCrisis = CRISIS_RE.test(text);
  addTyping();
  sendBtn.disabled = true;

  try {
    const primed = [
      { role:'user', content: SYSTEM + "\n\n---\nStay in character as the Lollipop Care Assistant for everything below. Use ONLY the Lollipop facts above — never invent generic SaaS metrics or features. Reply with a brief acknowledgement." },
      { role:'assistant', content: "Understood — I'm the Lollipop Care Assistant. I'll help with onboarding, the admin dashboard and reports, rosters, and supporting your team, using only Lollipop's real features. What do you need?" },
      ...history.map(m => ({ role: m.role, content: m.content }))
    ];
    const reply = await window.claude.complete({ messages: primed });
    removeTyping();
    const clean = (reply || "").trim() || "I'm sorry — I didn't catch that. Could you rephrase?";
    addBot(clean, { crisis: isCrisis, extraTools: inferTools(text) });
    history.push({ role:'assistant', content: clean });
    save();
  } catch(err){
    removeTyping();
    let msg = "I'm having trouble responding right now. Please try again in a moment.\n\nFor anything technical, you can email **support@trylollipop.com**.";
    addBot(msg, { crisis: isCrisis });
  } finally {
    updateSendState();
    input.focus();
  }
}

/* ---- Persistence ---- */
function save(){ try { localStorage.setItem(KEY, JSON.stringify(history)); } catch(e){} }
function load(){
  try {
    const raw = localStorage.getItem(KEY);
    if(raw){ history = JSON.parse(raw) || []; }
  } catch(e){ history = []; }
}
function rehydrate(){
  thread.innerHTML = '';
  if(!history.length){ greeting(); return; }
  // re-render greeting first (not stored), then stored turns
  addBot(
    "Hi — I'm your Lollipop **Care Assistant**. 👋 I can walk you through **getting set up and launching**, **using the admin dashboard and reports**, managing your roster — and the manager side too: responding to a check-in alert, preparing for a caring conversation, and supporting your people.\n\nA quick note: I offer **guidance and resources, not counseling** — I'm not a therapist. If anyone may be at risk of harm, contact **HR immediately** and call or text **988**."
  );
  for(const m of history){
    if(m.role === 'user') addUser(m.content);
    else addBot(m.content, { crisis: false });
  }
}

/* ---- Input behaviour ---- */
function autosize(){ input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 140) + 'px'; }
function updateSendState(){ sendBtn.disabled = !input.value.trim(); }

input.addEventListener('input', () => { autosize(); updateSendState(); });
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); if(input.value.trim()) send(); }
});
sendBtn.addEventListener('click', () => { if(input.value.trim()) send(); });

document.getElementById('reset').addEventListener('click', () => {
  if(history.length && !confirm('Start a new conversation? This clears the current chat.')) return;
  history = []; save();
  thread.innerHTML = '';
  greeting();
  input.focus();
});

/* ---- Init ---- */
load();
rehydrate();
updateSendState();
input.focus();
