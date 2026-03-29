# 🎬 Netflix-Style Portfolio — Complete Guide

A cinematic, dark-themed personal portfolio inspired by Netflix's visual language. Fully editable via a single config file. Zero dependencies. Deploys to GitHub Pages in 2 minutes.

---

## 📁 Project Structure

```
portfolio/
├── index.html        ← Page structure (rarely need to touch)
├── style.css         ← All visual styles (edit for design changes)
├── config.js         ← ★ THE ONLY FILE YOU EDIT DAILY ★
├── main.js           ← Rendering engine (don't touch)
├── assets/
│   ├── photo.jpg     ← Your profile photo (replace this)
│   ├── proj1.jpg     ← Project thumbnails (optional)
│   └── ...
└── README.md         ← This guide
```

---

## ⚡ Quick Start

### 1. Download & Open Locally
Just open `index.html` in any browser — no server needed.

### 2. Deploy to GitHub Pages (Free Hosting)
```bash
# 1. Create a new GitHub repository (e.g. "portfolio" or "username.github.io")
# 2. Upload all files to the repo
# 3. Go to: Settings → Pages → Source → "Deploy from branch" → main → /root
# 4. Your site will be live at: https://username.github.io/repository-name
```

---

## ✏️ How to Edit Content

> **Rule #1:** You only ever need to edit `config.js`. Everything else updates automatically.

Open `config.js` in any text editor (VS Code, Notepad++, even Notepad).

---

### 🔗 Updating Google Drive Links

1. Upload your file to Google Drive
2. Right-click the file → **Share**
3. Set access to **"Anyone with the link can view"**
4. Click **Copy link**
5. Paste it into `config.js` in the relevant field

**Where to update links:**

| What | Where in config.js |
|------|---------------------|
| Resume download | `resumeLink` (top of file) |
| Resume in hero section | `hero.resumeLink` |
| Job certificate | `experience[n].certLink` |
| Certification PDF | `certifications[n].driveLink` |
| Degree certificate | `education[n].driveLink` |
| Project case study | `projects[n].driveLink` |

---

### 👤 Changing Your Name & Info

```javascript
// In config.js → hero section:
hero: {
  name: "YOUR FULL NAME",        // ← Change this
  subtitle: "Your Job Title · Your Specialty",
  description: "Your one-line bio here.",
```

---

### 🖼️ Changing Your Photo

1. Add your photo to the `/assets/` folder
2. Name it `photo.jpg` (or any name)
3. In `config.js`, update:
```javascript
about: {
  photo: "assets/photo.jpg",   // ← Change filename if different
```

---

### 💼 Adding / Editing Work Experience

Find the `experience` array in `config.js`:
```javascript
experience: [
  {
    company:    "Company Name",
    role:       "Your Job Title",
    startDate:  "Jan 2024",      // ← Format: Mon YYYY
    endDate:    "Present",       // ← Or "Dec 2024"
    type:       "Full-time",     // Full-time / Internship / Contract / Freelance
    description: "What you did, what you built, what you improved.",
    skills:     ["React", "Python", "AWS"],  // Tech stack tags
    certLink:   "YOUR_GOOGLE_DRIVE_LINK",    // Leave "" to hide button
    certLabel:  "View Offer Letter",
  },
  // ← Copy the block above to add another job
],
```

---

### 📁 Adding / Editing Projects

```javascript
projects: [
  {
    title:       "Project Name",
    description: "What it does and what impact it had.",
    image:       "assets/proj1.jpg",  // Leave "" for emoji icon
    icon:        "🚀",                // Shown when no image
    tags:        ["React", "AWS"],
    githubLink:  "https://github.com/you/project",
    liveLink:    "https://your-live-site.com",
    driveLink:   "https://drive.google.com/...",  // Case study PDF
  },
],
```

---

### 🏅 Adding / Editing Certifications

```javascript
certifications: [
  {
    name:      "AWS Solutions Architect",
    issuer:    "Amazon Web Services",
    date:      "Mar 2024",
    icon:      "☁️",
    driveLink: "https://drive.google.com/file/d/YOUR_ID/view",
  },
],
```

---

### 🎓 Changing Education / Degree

```javascript
education: [
  {
    degree:     "B.Tech in Computer Science",
    school:     "Your University Name",
    period:     "Aug 2018 — May 2022",
    cgpa:       "CGPA: 8.4 / 10",
    description: "Brief description, achievements, capstone project.",
    driveLink:  "https://drive.google.com/file/d/YOUR_DEGREE_ID/view",
    driveLabel: "View Degree Certificate",
  },
],
```

---

### 🎮 Adding / Editing Hobbies

```javascript
hobbies: [
  { emoji: "📸", name: "Photography", note: "Street & landscape on weekends" },
  { emoji: "♟️", name: "Chess",       note: "Rated 1450+ on Chess.com" },
  // ← Add more rows here
],
```

---

### 🏷️ Renaming Section Headers

```javascript
sectionLabels: {
  experience:     "02 — Work Experience",   // ← Change display label
  projects:       "03 — Projects",
  certifications: "04 — Certifications",
  education:      "05 — Education",
  hobbies:        "06 — Beyond Work",
},
```

---

## 🎨 Design Customization

### Changing the Accent Color (Red → Any color)

In `style.css`, find and edit:
```css
:root {
  --red:     #e50914;   /* ← Main accent color */
  --red-dim: #b00710;   /* ← Darker shade of accent (for hover) */
```

### Changing Fonts

Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans...">
```
Then in `style.css`:
```css
--font-display: 'Bebas Neue', sans-serif;  /* ← Big headings */
--font-body:    'DM Sans', sans-serif;     /* ← Body text */
```

---

## 🌟 Recruiter Tips (Built-in)

This portfolio is already optimized for recruiter engagement:

- ✅ **Resume download button** visible in navbar on every scroll position
- ✅ **Stats block** (Years exp, Projects, Certs) gives instant credibility
- ✅ **Timeline with months** shows career progression clearly
- ✅ **Google Drive links** let recruiters open docs without downloading anything
- ✅ **Tech tags** on every project & job help ATS keyword matching
- ✅ **GitHub links** on projects show you ship real code
- ✅ **Hobbies section** makes you memorable and human

**Extra tips:**
- Keep your hero description under 20 words — recruiters skim
- Add real numbers to experience descriptions ("40% faster", "2M events/day")
- Update the `OPEN TO WORK` tag to `AVAILABLE FOR FREELANCE` or remove it when employed
- Pin your best 3-4 projects only — quality > quantity

---

## 📤 Deploying

### GitHub Pages (Recommended — Free)
1. Push all files to a GitHub repo
2. `Settings → Pages → Branch: main → Folder: / (root)`
3. Visit `https://yourusername.github.io/repo-name`

### Netlify (Drag & Drop — Instant)
1. Go to [netlify.com](https://netlify.com) → Log in
2. Drag your entire portfolio folder onto the deploy zone
3. Done — you get a live URL instantly

### Custom Domain
1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. In GitHub Pages settings, add your custom domain
3. Configure DNS: add a CNAME pointing to `yourusername.github.io`

---

## ❓ FAQ

**Q: My photo isn't showing up.**
A: Make sure `photo.jpg` is inside the `/assets/` folder and the filename matches exactly (case-sensitive on GitHub).

**Q: Google Drive link opens a preview, not a download.**
A: That's correct behavior. Recruiters can preview and download from the Drive page. If you want direct download, replace `/view` with `/export?format=pdf` for PDFs.

**Q: How do I add a profile picture to the navbar?**
A: In `index.html`, inside `.nav-inner`, add: `<img src="assets/photo.jpg" style="width:32px;height:32px;border-radius:50%;object-fit:cover;">` before the `.nav-links` ul.

**Q: Can I add more sections?**
A: Yes! Copy a section block in `index.html`, add a label in `sectionLabels`, and add a render function in `main.js` following the same pattern.

---

*Built with ❤️ — Pure HTML, CSS, and JavaScript. No frameworks, no build tools, no BS.*
