/* ════════════════════════════════════════════════════════════════════
   ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗     ██╗███████╗
  ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝     ██║██╔════╝
  ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗    ██║███████╗
  ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║    ██║╚════██║
  ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝    ██║███████║
   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝     ╚═╝╚══════╝

  HOW TO EDIT THIS PORTFOLIO
  ━━━━━━━━━━━━━━━━━━━━━━━━━━
  This is the ONLY file you need to edit daily.
  All website content is pulled from this config object.

  GOOGLE DRIVE LINKS:
  1. Upload your file to Google Drive
  2. Right-click → Share → "Anyone with the link can view"
  3. Copy link and paste below (replace the placeholder URLs)

  IMAGES:
  - Place images inside the /assets/ folder in this project
  - Reference them as "assets/filename.jpg"

  ADDING A NEW ITEM:
  - Copy any existing { ... } block in an array
  - Add a comma after the previous item
  - Fill in the new data

  ═══════════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ──────────────────────────────────────────
     SITE META
  ────────────────────────────────────────── */
  site: {
    title: "Tejasvi Sharma — Portfolio",         // Browser tab title
    navLogo: "Tejasvi Sharma",                   // Top-left navbar logo text
    footerLogo: "Tejasvi Sharma",
    footerTagline: "Let's get to know me better",
    footerCopy: "© 2026 Tejasvi Sharma. All rights reserved.",
  },

  /* ──────────────────────────────────────────
     NAVIGATION RESUME BUTTON
  ────────────────────────────────────────── */
  resumeLink: "https://drive.google.com/file/d/1GU_OpbKkWioJO8I-2hQDcACKg4C21J12/view?usp=sharing",
  // ↑ Replace YOUR_RESUME_FILE_ID with your actual Google Drive file ID

  /* ──────────────────────────────────────────
     HERO SECTION
  ────────────────────────────────────────── */
  hero: {
    tag: "OPEN TO WORK",                   // Blinking red badge (e.g. "OPEN TO WORK" / "AVAILABLE FOR FREELANCE")
    name: "Tejasvi Sharma",                      // Your full name in giant text
    subtitle: "Analyst · AI Adopter · Problem Solver  · Execution Oriented",
    description: "Analytical. Versatile. — I turn complex data into decisions that move the needle.",
    resumeLink: "https://drive.google.com/file/d/1GU_OpbKkWioJO8I-2hQDcACKg4C21J12/view?usp=sharing",

    // Stats shown below the CTA buttons (set to "" to hide a stat)
    stats: [
      { number: "1+", label: "Years Experience" },
      { number: "2+", label: "Projects Shipped" },
      { number: "5+", label: "Certifications" },
      { number: "2", label: "Degrees" },
    ],
  },

  /* ──────────────────────────────────────────
     ABOUT ME
  ────────────────────────────────────────── */
  about: {
    photo: "assets/photo.jpg",             // Put your photo in /assets/photo.jpg
    location: "📍 Shahdara, Delhi, India",
    heading: "Hey, I'm",
    nameHighlight: "Tejasvi Sharma",             // Shown in red after "Hey, I'm"
    paragraphs: [
      "I don't just work with data — I make it tell stories that change how organizations think and act. With an IIM MBA, a Lean Six Sigma Green Belt, and hands-on experience managing a ₹1,500 Cr portfolio at ICICI Bank, I bring rigorous analytical thinking to every problem I touch.",
      "My toolkit includes Python, SQL, Power BI, Tableau, Alteryx, and Advanced Excel — but my real edge is knowing when to use which tool and why.",
      "I've led teams, co-founded a venture, presided over a consulting club, and published academic work — because I believe leadership and analysis are two sides of the same coin. My mission is to build a career at the frontier of strategy and technology — where the best decisions are always data-informed, human-centered, and built to last.",
    ],
    links: [
      { label: "💼 LinkedIn", url: "https://www.linkedin.com/in/tejasvi-sharma028/" },
      { label: "🐙 GitHub", url: "https://github.com/projects" },
      { label: "✉️ Email", url: "tejasvisharma028@gmail.com" },
    ],
  },

  /* ──────────────────────────────────────────
     SECTION LABELS (rename any section)
  ────────────────────────────────────────── */
  sectionLabels: {
    experience: "02 — Work Experience",
    projects: "03 — Projects",
    certifications: "04 — Certifications",
    education: "05 — Education",
    hobbies: "06 — Beyond Work",
  },

  sectionHeadings: {
    experience: "",    // Leave empty to hide sub-heading
    projects: "Things I've Built",
    certifications: "Credentials & Licenses",
    education: "Academic Background",
    hobbies: "What I Do When I'm Not Coding",
  },

  /* ──────────────────────────────────────────
     WORK EXPERIENCE TIMELINE
     Add as many jobs as you want.
     certLink: link to proof of experience / certificate (Google Drive)
  ────────────────────────────────────────── */
  experience: [
    {
      company: "ICICI Bank Limited",
      role: "Manager (Credit Analyst)",
      startDate: "Jun 2025",
      endDate: "Present",
      type: "Full-time",             // e.g. Full-time / Internship / Contract
      description: `●  Managed a ₹1,500 Cr MSME/SME portfolio of 150+ borrowers, driving financial assessments across ₹3–70 Cr exposure.
      ●  Conducted credit and industry risk assessment across 15+ sectors, evaluating business models, credit, and sectoral risks.
      ●  Integrated multi-source datasets and automated validation workflows via Excel & SQL, improving accuracy by 26%.
      ●  Partnered with cross-functional teams (RMs, data engineering, credit ops) to close information gaps and improve traceability.
      ●  Performed ratio analysis, regression forecasting, and NWC diagnostic to enhance early warning detection speed by 35%.
      ●  Delivered strategic credit recommendations (continue/enhance/exit) backed by Power BI & Tableau dashboards.
      ●  Reduced analysis turnaround time by 25%, while ensuring full compliance with RBI and ICICI credit risk frameworks.`,

      skills: ["Python", "Advance Excel", "MS Team", "MS Office", "SQL", "Data Analysis"],
      certLink: "",                      // Leave empty to hide the button
      certLabel: "View Offer Letter",
    },
    {
      company: "Reliance Retail",
      role: "Strategic Analyst",
      startDate: "Jun 2024",
      endDate: "Jul 2024",
      type: "Internship- Live Project",
      description: `●  Performed in-depth market analysis on 100+ oral care SKUs, evaluating market dynamics, consumer trends & opportunities.
      ● Built a financial model (DCF & sensitivity analysis) and conducted cost–benefit & margin analysis, enhancing ROI by 8.5%.
      ● Developed a strategic expansion plan through primary research and Ansoff Matrix, forecasting a 5–10% market share gain.`,
      skills: ["Advance Excel", "SPSS", "Google Surveys", "Power Point", "Ansoff Matrix"],
      certLink: "https://drive.google.com/file/d/1Ngp6ZoUAT1A7K1xqvmHlDfCSdUb0l6Z-/view?usp=sharing",
      certLabel: "View Certificate",
    },
    {
      company: "ICICI Bank Limited",
      role: "Research Analyst",
      startDate: "Apr 2024",
      endDate: "Jun 2024",
      type: "Freelance",
      description: `● Analyzed 500+ renewable energy companies, leveraging predictive analytics to build datasets for investment opportunities.
● Built a custom Excel-based forecasting model integrating DCF, NPV, and VaR on DSCR to evaluate risk-adjusted returns.
● Designed a multi-factor screening model to shortlist 200 companies by credit ratings, leverage, and profitability ratios.
● Developed a risk-adjusted credit scorecard (AAA–B) with policy overrides to guide investment decisions at 95% confidence.`,
      skills: ["Market Research", "Financial Modelling", "Power Point", "SQL"," SaveRisk"],
      certLink: "",
      certLabel: "",
    },
  ],

  /* ──────────────────────────────────────────
     PROJECTS
     link:  GitHub or Live URL
     driveLink: Google Drive demo / case study link
  ────────────────────────────────────────── */
  projects: [
    {
      title: "CampusSync- IIM Bodh Gaya Student Life Optimizer ",
      description: "Built a full-cycle MBA student productivity app for IIM Bodh Gaya using Agile methodology — integrating calendar management, alumni networking, attendance tracking, and course access into one unified platform.",
      image: "",                     // Put path like "assets/proj1.jpg" or leave empty for icon
      icon: "📊",                   // Shown when no image
      tags: ["GTM", "Product Lifecycle", "Agile", "User Journey", "Kanban", "User Persona", "RICE Framework"],
      driveLink: "https://drive.google.com/file/d/1l8f-FfMYSJzsJn6xhT77_ND8JuJycZIq/view?usp=sharing",     
      driveLinkLabel: " CampusSync Project File",                // Google Drive link for demo video / case study
    
    },
    {
      title: "ShopSmart AI",
      description: "E-commerce recommendation engine using collaborative filtering. Increased click-through rate by 23% in A/B tests.",
      image: "",
      icon: "🛒",
      tags: ["Python", "Flask", "Scikit-learn", "PostgreSQL"],
      githubLink: "https://github.com/your-username/shopsmart",
      driveLink: "https://drive.google.com/file/d/YOUR_CASE_STUDY_ID/view?usp=sharing",
      liveLink: "",
    },
    {
      title: "DevOps Pipeline Kit",
      description: "Reusable CI/CD pipeline templates for GitHub Actions. Used by 50+ developers on open source projects.",
      image: "",
      icon: "⚙️",
      tags: ["GitHub Actions", "Docker", "YAML", "Bash"],
      githubLink: "https://github.com/your-username/pipeline-kit",
      driveLink: "",
      liveLink: "",
    },
    {
      title: "Portfolio Website",
      description: "This very website — a Netflix-inspired dark portfolio with zero dependencies, pure HTML/CSS/JS.",
      image: "",
      icon: "🎬",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/your-username/portfolio",
      driveLink: "",
      liveLink: "",
    },
  ],

  /* ──────────────────────────────────────────
     CERTIFICATIONS
     driveLink: Google Drive link to your certificate PDF/image
  ────────────────────────────────────────── */
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Mar 2024",
      icon: "☁️",
      driveLink: "https://drive.google.com/file/d/YOUR_AWS_CERT_ID/view?usp=sharing",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "Nov 2023",
      icon: "📈",
      driveLink: "https://drive.google.com/file/d/YOUR_GOOGLE_CERT_ID/view?usp=sharing",
    },
    {
      name: "Meta Front-End Developer Certificate",
      issuer: "Meta / Coursera",
      date: "Jun 2023",
      icon: "⚛️",
      driveLink: "https://drive.google.com/file/d/YOUR_META_CERT_ID/view?usp=sharing",
    },
    {
      name: "Python for Data Science",
      issuer: "IBM / edX",
      date: "Jan 2023",
      icon: "🐍",
      driveLink: "https://drive.google.com/file/d/YOUR_IBM_CERT_ID/view?usp=sharing",
    },
    {
      name: "Docker & Kubernetes Fundamentals",
      issuer: "Udemy",
      date: "Sep 2022",
      icon: "🐳",
      driveLink: "https://drive.google.com/file/d/YOUR_DOCKER_CERT_ID/view?usp=sharing",
    },
  ],

  /* ──────────────────────────────────────────
     EDUCATION / DEGREE
     driveLink: Google Drive link to your degree certificate / transcript
  ────────────────────────────────────────── */
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "JNTU Hyderabad",
      period: "Aug 2018 — May 2022",
      cgpa: "CGPA: 8.4 / 10",
      description: "Specialized in Data Structures, Algorithms, and Database Systems. Capstone project: 'Predictive Analytics Platform for Supply Chain Optimization' — awarded Best Project of Batch.",
      driveLink: "https://drive.google.com/file/d/YOUR_DEGREE_ID/view?usp=sharing",
      driveLabel: "View Degree Certificate",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      school: "Narayana Junior College, Hyderabad",
      period: "Jun 2016 — Apr 2018",
      cgpa: "Percentage: 96.2%",
      description: "Mathematics, Physics, Chemistry stream. State rank holder in Intermediate Examinations.",
      driveLink: "https://drive.google.com/file/d/YOUR_HSC_ID/view?usp=sharing",
      driveLabel: "View Marksheet",
    },
  ],

  /* ──────────────────────────────────────────
     HOBBIES
  ────────────────────────────────────────── */
  hobbies: [
    { emoji: "📸", name: "Photography", note: "Street & landscape photography on weekends" },
    { emoji: "♟️", name: "Chess", note: "Rated 1450+ on Chess.com, love studying openings" },
    { emoji: "🎸", name: "Guitar", note: "Self-taught, mostly rock & blues covers" },
    { emoji: "📚", name: "Reading", note: "Tech blogs, biographies, and sci-fi novels" },
    { emoji: "🏋️", name: "Fitness", note: "Daily gym routine, powerlifting enthusiast" },
    { emoji: "✈️", name: "Travel", note: "Explored 8 states across India so far" },
    { emoji: "🎮", name: "Gaming", note: "Strategy games — Civilization, Chess, Valorant" },
    { emoji: "🍳", name: "Cooking", note: "Experimenting with regional Indian cuisines" },
  ],

  /* ──────────────────────────────────────────
     FOOTER LINKS
  ────────────────────────────────────────── */
  footerLinks: [
    { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "Email", url: "mailto:your@email.com" },
    { label: "Resume", url: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view?usp=sharing" },
  ],

};
/* ═══════════════════════════════════════════════════
   END OF CONFIG — DO NOT EDIT BELOW THIS LINE
   ═══════════════════════════════════════════════════ */
