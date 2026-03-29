/* ════════════════════════════════════════════════
   MAIN.JS — Complete render engine
   Do NOT edit. All content changes go in config.js
   ════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  renderSite();
  setupNavScroll();
});

/* ── NAVBAR SCROLL ── */
function setupNavScroll() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ── HELPERS ── */
function set(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}
function setHref(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}
function highlightName(name) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return `<span class="red">${name}</span>`;
  const last = parts.pop();
  return parts.join(" ") + ` <span class="red">${last}</span>`;
}

/* ════════════════════════════════════════════════
   NETFLIX ROW BUILDER — used by all scroll sections
   ════════════════════════════════════════════════ */
function buildNetflixRow(containerId, cardsHTML) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  const leftBtn  = document.createElement("button");
  const rightBtn = document.createElement("button");
  leftBtn.className  = "scroll-arrow arrow-left";
  rightBtn.className = "scroll-arrow arrow-right";
  leftBtn.innerHTML  = "&#8249;";
  rightBtn.innerHTML = "&#8250;";

  const row = document.createElement("div");
  row.className = "netflix-row";
  row.innerHTML = cardsHTML;

  wrap.appendChild(leftBtn);
  wrap.appendChild(row);
  wrap.appendChild(rightBtn);

  const SCROLL_AMT = 650;
  rightBtn.addEventListener("click", () => row.scrollBy({ left: SCROLL_AMT, behavior: "smooth" }));
  leftBtn.addEventListener("click",  () => row.scrollBy({ left: -SCROLL_AMT, behavior: "smooth" }));

  // Drag to scroll
  let isDown = false, startX, scrollLeft;
  row.addEventListener("mousedown",  e => { isDown = true; startX = e.pageX - row.offsetLeft; scrollLeft = row.scrollLeft; });
  row.addEventListener("mouseleave", () => { isDown = false; });
  row.addEventListener("mouseup",    () => { isDown = false; });
  row.addEventListener("mousemove",  e => {
    if (!isDown) return;
    e.preventDefault();
    row.scrollLeft = scrollLeft - (e.pageX - row.offsetLeft - startX) * 1.5;
  });
}

/* ════════════════════════════════════════════════
   MASTER RENDER
   ════════════════════════════════════════════════ */
function renderSite() {
  const C = CONFIG;

  /* SITE META */
  document.getElementById("page-title").textContent = C.site.title;
  document.getElementById("nav-logo-text").textContent = C.site.navLogo;
  document.getElementById("footer-logo-text").textContent = C.site.footerLogo;
  set("footer-tagline",  C.site.footerTagline);
  set("footer-copy-text", C.site.footerCopy);

  /* RESUME BUTTONS */
  setHref("nav-resume-btn",  C.resumeLink);
  setHref("hero-resume-btn", C.hero.resumeLink || C.resumeLink);

  /* HERO */
  set("hero-tag",      C.hero.tag);
  document.getElementById("hero-name").innerHTML = highlightName(C.hero.name);
  set("hero-subtitle", C.hero.subtitle);
  set("hero-desc",     C.hero.description);
  renderStats(C.hero.stats);

  /* ABOUT */
  const photoEl = document.getElementById("about-photo");
  if (C.about.photo) photoEl.src = C.about.photo;
  set("about-location-tag", C.about.location);
  document.getElementById("about-heading").innerHTML =
    `${C.about.heading} <span class="red">${C.about.nameHighlight}</span>`;
  renderAboutBody(C.about.paragraphs);
  renderAboutLinks(C.about.links);

  /* SECTION LABELS */
  set("exp-section-label",      C.sectionLabels.experience);
  set("proj-section-label",     C.sectionLabels.projects);
  set("cert-section-label",     C.sectionLabels.certifications);
  set("edu-section-label",      C.sectionLabels.education);
  set("hobbies-section-label",  C.sectionLabels.hobbies);
  set("proj-heading",           C.sectionHeadings.projects);
  set("cert-heading",           C.sectionHeadings.certifications);
  set("edu-heading",            C.sectionHeadings.education);
  set("hobbies-heading",        C.sectionHeadings.hobbies);

  /* ALL SECTIONS */
  renderTimeline(C.experience);
  renderSkills(C.skills);
  renderProjects(C.projects);
  renderAchievements(C.achievements);
  renderPositions(C.positions);
  renderCerts(C.certifications);
  renderEducation(C.education);
  renderHobbies(C.hobbies);
  renderFooterLinks(C.footerLinks);
}

/* ── STATS ── */
function renderStats(stats) {
  const c = document.getElementById("hero-stats-container");
  if (!c || !stats) return;
  c.innerHTML = stats.filter(s => s.number).map(s => `
    <div class="stat-item">
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

/* ── ABOUT ── */
function renderAboutBody(paragraphs) {
  const c = document.getElementById("about-body");
  if (!c || !paragraphs) return;
  c.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join("");
}
function renderAboutLinks(links) {
  const c = document.getElementById("about-links-container");
  if (!c || !links) return;
  c.innerHTML = links.map(l => `
    <a class="link-chip" href="${l.url}" target="_blank">${l.label}</a>
  `).join("");
}

/* ── TIMELINE ── */
function renderTimeline(jobs) {
  const c = document.getElementById("timeline-container");
  if (!c || !jobs) return;
  c.innerHTML = jobs.map(job => {
    const period = job.startDate + (job.endDate ? ` — ${job.endDate}` : "");
    const certBtn = job.certLink
      ? `<a class="timeline-cert-btn" href="${job.certLink}" target="_blank">🏅 ${job.certLabel || "View Certificate"}</a>`
      : "";
    const tags = (job.skills || []).map(s => `<span class="tag">${s}</span>`).join("");
    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-meta">
          <span class="timeline-date">${period}</span>
          <span class="timeline-badge">${job.type || "Full-time"}</span>
        </div>
        <div class="timeline-company">${job.company}</div>
        <div class="timeline-role">${job.role}</div>
        <div class="timeline-body">
          <p class="timeline-desc">${job.description}</p>
          ${tags ? `<div class="timeline-tags">${tags}</div>` : ""}
          ${certBtn}
        </div>
      </div>
    `;
  }).join("");
}

/* ── SKILLS — Netflix row ── */
function renderSkills(groups) {
  if (!groups) return;
  const cards = groups.map(g => `
    <div class="skill-group-card">
      <div class="skill-group-title">${g.category}</div>
      <div class="skill-pill-list">
        ${g.skills.map(s => `<span class="skill-pill">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
  buildNetflixRow("skills-row", cards);
}

/* ── PROJECTS — Netflix row ── */
function renderProjects(projects) {
  if (!projects) return;
  const cards = projects.map(p => {
    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
         <span style="font-size:3rem;display:none;align-items:center;justify-content:center;width:100%;height:100%;">${p.icon || "🔨"}</span>`
      : `<span style="font-size:3rem">${p.icon || "🔨"}</span>`;
    const tags  = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
    const links = [
      p.githubLink ? `<a class="btn-sm btn-sm-red"   href="${p.githubLink}" target="_blank">⬡ GitHub</a>` : "",
      p.liveLink   ? `<a class="btn-sm btn-sm-ghost" href="${p.liveLink}"   target="_blank">↗ Live</a>`   : "",
      p.driveLink  ? `<a class="btn-sm btn-sm-ghost" href="${p.driveLink}"  target="_blank">${p.driveLinkLabel || "☁ Case Study"}</a>` : "",
    ].filter(Boolean).join("");
    return `
      <div class="project-card-h">
        <div class="project-thumb-h">${thumb}</div>
        <div class="project-body-h">
          <div class="project-title-h">${p.title}</div>
          <p class="project-desc-h">${p.description}</p>
          ${tags ? `<div class="project-tags">${tags}</div>` : ""}
          <div class="project-links">${links}</div>
        </div>
      </div>`;
  }).join("");
  buildNetflixRow("projects-row", cards);
}

/* ── ACHIEVEMENTS — Netflix row ── */
function renderAchievements(items) {
  if (!items) return;
  const cards = items.map(a => `
    <div class="ach-card">
      <span class="ach-icon">${a.icon}</span>
      <div class="ach-title">${a.title}</div>
      <div class="ach-desc">${a.desc}</div>
    </div>
  `).join("");
  buildNetflixRow("achievements-row", cards);
}

/* ── POSITIONS OF RESPONSIBILITY — Netflix row ── */
function renderPositions(items) {
  if (!items) return;
  const cards = items.map(p => `
    <div class="pos-card">
      <div class="pos-role">${p.role}</div>
      <div class="pos-org">${p.org}</div>
      <div class="pos-period">${p.period}</div>
      <div class="pos-desc">${p.description}</div>
    </div>
  `).join("");
  buildNetflixRow("positions-row", cards);
}

/* ── CERTIFICATIONS — Netflix row ── */
function renderCerts(certs) {
  if (!certs) return;
  const cards = certs.map(c => {
    const btn = c.driveLink
      ? `<a class="btn-cert" href="${c.driveLink}" target="_blank">🎓 View Certificate</a>`
      : "";
    return `
      <div class="cert-card-h">
        <div class="cert-icon-h">${c.icon || "📜"}</div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-date">${c.date}</div>
        ${btn}
      </div>`;
  }).join("");
  buildNetflixRow("cert-row", cards);
}

/* ── EDUCATION — Netflix row ── */
function renderEducation(degrees) {
  if (!degrees) return;
  const cards = degrees.map(d => {
    const btn = d.driveLink
      ? `<a class="btn-edu" href="${d.driveLink}" target="_blank">📄 ${d.driveLabel || "View Document"}</a>`
      : "";
    return `
      <div class="edu-card-h">
        <div class="edu-degree">${d.degree}</div>
        <div class="edu-school">${d.school}</div>
        <div class="edu-period">${d.period}${d.cgpa ? " · " + d.cgpa : ""}</div>
        <p class="edu-desc">${d.description || ""}</p>
        ${btn}
      </div>`;
  }).join("");
  buildNetflixRow("edu-row", cards);
}

/* ── HOBBIES — Netflix row ── */
function renderHobbies(hobbies) {
  if (!hobbies) return;
  const cards = hobbies.map(h => `
    <div class="hobby-card-h">
      <span class="hobby-emoji">${h.emoji}</span>
      <div class="hobby-name">${h.name}</div>
      <div class="hobby-note">${h.note || ""}</div>
    </div>
  `).join("");
  buildNetflixRow("hobbies-row", cards);
}

/* ── FOOTER LINKS ── */
function renderFooterLinks(links) {
  const c = document.getElementById("footer-links-container");
  if (!c || !links) return;
  c.innerHTML = links.map(l => `
    <a href="${l.url}" target="_blank">${l.label}</a>
  `).join("");
}
