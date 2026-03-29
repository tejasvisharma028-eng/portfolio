/* ════════════════════════════════════════════════
   MAIN.JS — Renders portfolio from config.js
   Do NOT edit unless you're a developer.
   All content edits go in config.js
   ════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  renderSite();
  setupNavScroll();
  setupScrollAnimations();
});

/* ── NAVBAR SCROLL ── */
function setupNavScroll() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ── SCROLL FADE-IN ANIMATION ── */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll(
    ".timeline-item, .project-card, .cert-card, .edu-card, .hobby-card"
  ).forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

/* ════════════════════════════════════════════════
   MASTER RENDER FUNCTION
   ════════════════════════════════════════════════ */
function renderSite() {
  const C = CONFIG;

  // ── SITE META
  document.getElementById("page-title").textContent = C.site.title;
  document.getElementById("nav-logo-text").textContent = C.site.navLogo;
  document.getElementById("footer-logo-text").textContent = C.site.footerLogo;
  set("footer-tagline", C.site.footerTagline);
  set("footer-copy-text", C.site.footerCopy);

  // ── RESUME BUTTONS
  setHref("nav-resume-btn", C.resumeLink);
  setHref("hero-resume-btn", C.hero.resumeLink || C.resumeLink);

  // ── HERO
  set("hero-tag", C.hero.tag);
  document.getElementById("hero-name").innerHTML = highlightName(C.hero.name);
  set("hero-subtitle", C.hero.subtitle);
  set("hero-desc", C.hero.description);
  renderStats(C.hero.stats);

  // ── ABOUT
  const photoEl = document.getElementById("about-photo");
  if (C.about.photo) photoEl.src = C.about.photo;
  set("about-location-tag", C.about.location);
  document.getElementById("about-heading").innerHTML =
    `${C.about.heading} <span class="red">${C.about.nameHighlight}</span>`;
  renderAboutBody(C.about.paragraphs);
  renderAboutLinks(C.about.links);

  // ── SECTION LABELS & HEADINGS
  set("exp-section-label",    C.sectionLabels.experience);
  set("proj-section-label",   C.sectionLabels.projects);
  set("cert-section-label",   C.sectionLabels.certifications);
  set("edu-section-label",    C.sectionLabels.education);
  set("hobbies-section-label",C.sectionLabels.hobbies);
  set("proj-heading",   C.sectionHeadings.projects);
  set("cert-heading",   C.sectionHeadings.certifications);
  set("edu-heading",    C.sectionHeadings.education);
  set("hobbies-heading",C.sectionHeadings.hobbies);

  // ── EXPERIENCE
  renderTimeline(C.experience);

  // ── PROJECTS
  renderProjects(C.projects);

  // ── CERTIFICATIONS
  renderCerts(C.certifications);

  // ── EDUCATION
  renderEducation(C.education);

  // ── HOBBIES
  renderHobbies(C.hobbies);

  // ── FOOTER LINKS
  renderFooterLinks(C.footerLinks);

  // Re-run scroll animations after render
  setTimeout(setupScrollAnimations, 100);
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
  // Makes the last word red
  const parts = name.trim().split(" ");
  if (parts.length === 1) return `<span class="red">${name}</span>`;
  const last = parts.pop();
  return parts.join(" ") + ` <span class="red">${last}</span>`;
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

/* ── PROJECTS ── */
function renderProjects(projects) {
  const c = document.getElementById("projects-grid");
  if (!c || !projects) return;
  c.innerHTML = projects.map(p => {
    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><span class="project-thumb-icon" style="display:none">${p.icon || "🔨"}</span>`
      : `<span class="project-thumb-icon">${p.icon || "🔨"}</span>`;

    const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");

    const links = [
      p.githubLink ? `<a class="btn-sm btn-sm-red" href="${p.githubLink}" target="_blank">⬡ GitHub</a>` : "",
      p.liveLink   ? `<a class="btn-sm btn-sm-ghost" href="${p.liveLink}" target="_blank">↗ Live</a>` : "",
      p.driveLink  ? `<a class="btn-sm btn-sm-ghost" href="${p.driveLink}" target="_blank">☁ Case Study</a>` : "",
    ].filter(Boolean).join("");

    return `
      <div class="project-card">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <div class="project-title">${p.title}</div>
          <p class="project-desc">${p.description}</p>
          ${tags ? `<div class="project-tags">${tags}</div>` : ""}
          <div class="project-links">${links}</div>
        </div>
      </div>
    `;
  }).join("");
}

/* ── CERTIFICATIONS ── */
function renderCerts(certs) {
  const c = document.getElementById("cert-grid");
  if (!c || !certs) return;
  c.innerHTML = certs.map(cert => {
    const btn = cert.driveLink
      ? `<a class="btn-cert" href="${cert.driveLink}" target="_blank">🎓 View Certificate</a>`
      : "";
    return `
      <div class="cert-card">
        <div class="cert-icon">${cert.icon || "📜"}</div>
        <div class="cert-info">
          <div class="cert-name">${cert.name}</div>
          <div class="cert-issuer">${cert.issuer}</div>
          <div class="cert-date">${cert.date}</div>
          ${btn}
        </div>
      </div>
    `;
  }).join("");
}

/* ── EDUCATION ── */
function renderEducation(degrees) {
  const c = document.getElementById("edu-grid");
  if (!c || !degrees) return;
  c.innerHTML = degrees.map(d => {
    const btn = d.driveLink
      ? `<a class="btn-edu" href="${d.driveLink}" target="_blank">📄 ${d.driveLabel || "View Document"}</a>`
      : "";
    return `
      <div class="edu-card">
        <div class="edu-degree">${d.degree}</div>
        <div class="edu-school">${d.school}</div>
        <div class="edu-period">${d.period}${d.cgpa ? " · " + d.cgpa : ""}</div>
        <p class="edu-desc">${d.description || ""}</p>
        ${btn}
      </div>
    `;
  }).join("");
}

/* ── HOBBIES ── */
function renderHobbies(hobbies) {
  const c = document.getElementById("hobbies-grid");
  if (!c || !hobbies) return;
  c.innerHTML = hobbies.map(h => `
    <div class="hobby-card">
      <span class="hobby-emoji">${h.emoji}</span>
      <div class="hobby-name">${h.name}</div>
      <div class="hobby-note">${h.note || ""}</div>
    </div>
  `).join("");
}

/* ── FOOTER ── */
function renderFooterLinks(links) {
  const c = document.getElementById("footer-links-container");
  if (!c || !links) return;
  c.innerHTML = links.map(l => `
    <a href="${l.url}" target="_blank">${l.label}</a>
  `).join("");
}
