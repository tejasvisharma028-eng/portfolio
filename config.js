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
  3. Copy link and paste below

  IMAGES:
  - Place images inside the /assets/ folder
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
    title: "Tejasvi Sharma — Portfolio",
    navLogo: "Tejasvi Sharma",
    footerLogo: "Tejasvi Sharma",
    footerTagline: "Let's get to know me better",
    footerCopy: "© 2026 Tejasvi Sharma. All rights reserved.",
  },

  /* ──────────────────────────────────────────
     RESUME LINK (used in navbar + hero)
  ────────────────────────────────────────── */
  resumeLink: "https://drive.google.com/file/d/1GU_OpbKkWioJO8I-2hQDcACKg4C21J12/view?usp=sharing",

  /* ──────────────────────────────────────────
     HERO SECTION
  ────────────────────────────────────────── */
  hero: {
    tag: "OPEN TO WORK",
    name: "Tejasvi Sharma",
    subtitle: "Analyst · AI Adopter · Problem Solver · Execution Oriented",
    description: "Analytical. Versatile. — I turn complex data into decisions that move the needle.",
    resumeLink: "https://drive.google.com/file/d/1GU_OpbKkWioJO8I-2hQDcACKg4C21J12/view?usp=sharing",
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
    photo: "assets/photo.jpg",
    location: "📍 Shahdara, Delhi, India",
    heading: "Hey, I'm",
    nameHighlight: "Tejasvi Sharma",
    paragraphs: [
      "I don't just work with data — I make it tell stories that change how organizations think and act. With an IIM MBA, a Lean Six Sigma Green Belt, and hands-on experience managing a ₹1,500 Cr portfolio at ICICI Bank, I bring rigorous analytical thinking to every problem I touch.",
      "My toolkit includes Python, SQL, Power BI, Tableau, Alteryx, and Advanced Excel — but my real edge is knowing when to use which tool and why.",
      "I've led teams, co-founded a venture, presided over a consulting club, and published academic work — because I believe leadership and analysis are two sides of the same coin. My mission is to build a career at the frontier of strategy and technology — where the best decisions are always data-informed, human-centered, and built to last.",
    ],
    links: [
      { label: "💼 LinkedIn", url: "https://www.linkedin.com/in/tejasvi-sharma028/" },
      { label: "🐙 GitHub", url: "https://github.com/projects" },
      { label: "✉️ Email", url: "mailto:tejasvisharma028@gmail.com" },
    ],
  },

  /* ──────────────────────────────────────────
     SECTION LABELS (rename any section)
  ────────────────────────────────────────── */
  sectionLabels: {
    experience: "02 — Work Experience",
    projects: "04 — Projects",
    certifications: "07 — Certifications",
    education: "08 — Education",
    hobbies: "09 — Beyond Work",
  },

  sectionHeadings: {
    experience: "",
    projects: "Things I've Built",
    certifications: "Credentials & Licenses",
    education: "Academic Background",
    hobbies: "What I Do When I'm Not Working",
  },

  /* ──────────────────────────────────────────
     WORK EXPERIENCE TIMELINE
  ────────────────────────────────────────── */
  experience: [
    {
      company: "ICICI Bank Limited",
      role: "Manager (Credit Analyst)",
      startDate: "Jun 2025",
      endDate: "Present",
      type: "Full-time",
      description: `● Managed a ₹1,500 Cr MSME/SME portfolio of 150+ borrowers, driving financial assessments across ₹3–70 Cr exposure.
● Conducted credit and industry risk assessment across 15+ sectors, evaluating business models, credit, and sectoral risks.
● Integrated multi-source datasets and automated validation workflows via Excel & SQL, improving accuracy by 26%.
● Partnered with cross-functional teams (RMs, data engineering, credit ops) to close information gaps and improve traceability.
● Performed ratio analysis, regression forecasting, and NWC diagnostic to enhance early warning detection speed by 35%.
● Delivered strategic credit recommendations (continue/enhance/exit) backed by Power BI & Tableau dashboards.
● Reduced analysis turnaround time by 25%, while ensuring full compliance with RBI and ICICI credit risk frameworks.`,
      skills: ["Python", "Advanced Excel", "MS Office", "SQL", "Power BI", "Tableau", "Data Analysis"],
      certLink: "",
      certLabel: "View Offer Letter",
    },
    {
      company: "Reliance Retail",
      role: "Strategic Analyst",
      startDate: "Jun 2024",
      endDate: "Jul 2024",
      type: "Internship — Live Project",
      description: `● Performed in-depth market analysis on 100+ oral care SKUs, evaluating market dynamics, consumer trends & opportunities.
● Built a financial model (DCF & sensitivity analysis) and conducted cost–benefit & margin analysis, enhancing ROI by 8.5%.
● Developed a strategic expansion plan through primary research and Ansoff Matrix, forecasting a 5–10% market share gain.`,
      skills: ["Advanced Excel", "SPSS", "Google Surveys", "PowerPoint", "Ansoff Matrix"],
      certLink: "https://drive.google.com/file/d/1Ngp6ZoUAT1A7K1xqvmHlDfCSdUb0l6Z-/view?usp=sharing",
      certLabel: "View Certificate",
    },
    {
      company: "ICICI Bank Limited",
      role: "Research Analyst",
      startDate: "Apr 2024",
      endDate: "Jun 2024",
      type: "Internship",
      description: `● Analyzed 500+ renewable energy companies, leveraging predictive analytics to build datasets for investment opportunities.
● Built a custom Excel-based forecasting model integrating DCF, NPV, and VaR on DSCR to evaluate risk-adjusted returns.
● Designed a multi-factor screening model to shortlist 200 companies by credit ratings, leverage, and profitability ratios.
● Developed a risk-adjusted credit scorecard (AAA–B) with policy overrides to guide investment decisions at 95% confidence.`,
      skills: ["Market Research", "Financial Modelling", "PowerPoint", "SQL", "Risk Analysis"],
      certLink: "",
      certLabel: "",
    },
    {
      company: "SkillVertex",
      role: "Digital Marketing & Analytics Intern",
      startDate: "Jul 2024",
      endDate: "Dec 2024",
      type: "Internship",
      description: `● Analyzed customer data to generate segmentation reports and performance metrics for business and operations decisions.
● Conducted A/B testing, forecasting, and gap analysis to identify engagement drivers and optimize end-user journey.`,
      skills: ["Market Research", "Digital Marketing", "PowerPoint", "Guirella Marketing", "Marketing Analytics"],
      certLink: "https://drive.google.com/file/d/1u3KUTs9-cjYxvVwmSy_FlpX36-Yv-eDj/view?usp=sharing",
      certLabel: "View Certificate",
    },

    {
      company: "Shiv Nadar University",
      role: "Admissions and Marketing Coordinator ",
      startDate: "Jan 2022",
      endDate: "May 2022",
      type: "Internship",
      description: `● Managed end-to-end admissions outreach including social media management and email correspondence for the Department of Admissions.
● Conducted in-person and phone counselling sessions for prospective students, guiding them through the admissions process.
● Coordinated campus tours and managed admission events, ensuring seamless experience for visiting students and families.
● Handled marketing-related activities to support student recruitment and institutional visibility.`,
      skills: ["Event Management", "Communication", "Mentoring", "Social Media Marketing", "Social Media Communications"],
      certLink: "https://drive.google.com/file/d/1xCLZuh7E-AxcVEfLEUv53vS3gO-YwI1M/view?usp=sharing",
      certLabel: "View Certificate",
    },

  ],

  /* ──────────────────────────────────────────
     PROJECTS
  ────────────────────────────────────────── */
  projects: [
    {
      title: "CampusSync — IIM Bodh Gaya Student Life Optimizer",
      description: "Built a full-cycle MBA student productivity app for IIM Bodh Gaya using Agile methodology — integrating calendar management, alumni networking, attendance tracking, and course access into one unified platform.",
      image: "assets/proj1.jpg",
      icon: "🎓",
      tags: ["GTM", "Product Lifecycle", "Agile", "User Journey", "Kanban", "User Persona", "RICE Framework"],
      githubLink: "",
      liveLink: "",
      driveLink: "https://drive.google.com/file/d/1l8f-FfMYSJzsJn6xhT77_ND8JuJycZIq/view?usp=sharing",
      driveLinkLabel: "Project File",
    },
    {
      title: "Finance Tracker — Agentic AI",
      description: "An AI-powered personal finance tracker built with Python and Claude AI — automatically categorises expenses, detects patterns, and generates actionable financial insights.",
      image: "",
      icon: "🤖",
      tags: ["Python", "Claude AI", "CSS", "HTML"],
      githubLink: "",
      liveLink: "",
      driveLink: "",
      driveLinkLabel: "📄 View Project",
    },
    {
      title: "NIFTY India Consumption High Alpha Low PE",
      description: `● Built an end-to-end equity portfolio on NIFTY India Consumption Index using Python for data collection across 192 stocks screened on P/E, Beta, EPS, and P/B criteria.
● Constructed optimised portfolios using Single Index Model (C-Score) and Markowitz Model — Markowitz outperformed with 2.367% vs -2.114% returns over the same holding period.
● Applied APT and Fama-French Four-Factor Model for return decomposition; achieved 7.33% annualised portfolio return via multifactor model.
● Hedged ₹1 Cr portfolio using NIFTY50 Protective Put options (25000 PE), reducing maximum downside loss from -6.17% to -5.44%,`,
      image: "📈",
      tags: ["Python", "Financial Modelling", "Markowitz Model", "Portfolio Optimisation", "Fama-French", "Options Hedging", "PCA", "APT"],
      githubLink: "",
      liveLink: "",
      driveLink: "https://drive.google.com/drive/folders/14oQi4Wmewh0ImoOWgitUH-znP8_FvbgJ?usp=sharing",
      driveLinkLabel: "Project File",
    },
  ],

  /* ──────────────────────────────────────────
     CERTIFICATIONS
  ────────────────────────────────────────── */
  certifications: [
    {
      name: "KPMG Lean Six Sigma Green Belt",
      issuer: "KPMG",
      date: "Nov 2023",
      icon: "🎯",
      driveLink: "https://drive.google.com/file/d/1xVRTwcqRrZGPj3HwJHLuV_tpnAr189fq/view?usp=sharing",
    },
    {
      name: "Advanced Google Analytics",
      issuer: "Google",
      date: "Mar 2024",
      icon: "📊",
      driveLink: "https://drive.google.com/file/d/1BsNA7ZOQFRlrsR1d7JUHRhgdm0GT83h3/view?usp=sharing",
    },
    {
      name: "Microsoft Excel — Beginner to Advanced",
      issuer: "Udemy / Microsoft",
      date: "Jan 2025",
      icon: "💹",
      driveLink: "https://drive.google.com/file/d/14K357hBpnuZ72QLteX0u9W02ygVl0iJV/view?usp=sharing",
    },
    {
      name: "Understanding Risk Management in Financial Sector",
      issuer: "TCS Ion",
      date: "Jan 2025",
      icon: "🏦",
      driveLink: "https://drive.google.com/file/d/1l0ePUKE-ds0gYtxtwVq5wcwbVHWN_Y8E/view?usp=sharing",
    },
    {
      name: "Python for Data Science",
      issuer: "IBM / edX",
      date: "Jan 2025",
      icon: "🐍",
      driveLink: "",
    },
    {
      name: "Fundamentals of digital marketing",
      issuer: "Google",
      date: "May 2020",
      icon: "🐍",
      driveLink: "https://drive.google.com/file/d/1fJmVAo2Ordo2-RUPag_CC6jy3GgrKnpp/view?usp=sharing",
    },
  ],

  /* ──────────────────────────────────────────
     EDUCATION
  ────────────────────────────────────────── */
  education: [
    {
      degree: "Master of Business Administration",
      school: "Indian Institute of Management, Bodh Gaya",
      period: "Jul 2023 — Apr 2025",
      cgpa: "8.09",
      description: `● Major: Marketing & Finance
      ● Top 7% of Batch
      ● Specialised in Marketing & Finance.
      ● President of Strategy & Consulting Club.`,
      driveLink: "",
      driveLabel: "View Degree Certificate",
    },
    {
      degree: "Bachelor of Engineering — Mechanical Engineering and Minor: Management",
      school: "Shiv Nadar University, Noida",
      period: "Aug 2019 — May 2023",
      cgpa: "8.7",
      description: "Awarded 90% scholarship for academic excellence. Dean's List 2021 & 2022 (GPA above 8.0).",
      driveLink: "",
      driveLabel: "View Degree Certificate",
    },
  ],

  /* ──────────────────────────────────────────
     HOBBIES
  ────────────────────────────────────────── */
  hobbies: [
    { emoji: "🏋️", name: "Fitness", note: "Daily gym routine, powerlifting enthusiast" },
    { emoji: "📸", name: "Photography", note: "Street & landscape photography on weekends" },




  ],

  /* ──────────────────────────────────────────
     FOOTER LINKS
  ────────────────────────────────────────── */
  footerLinks: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tejasvi-sharma028/" },
    { label: "GitHub", url: "https://github.com/projects" },
    { label: "Email", url: "mailto:tejasvisharma028@gmail.com" },
    { label: "Resume", url: "https://drive.google.com/file/d/1GU_OpbKkWioJO8I-2hQDcACKg4C21J12/view?usp=sharing" },
  ],

};
/* ═══════════════════════════════════════════════════
   END OF CONFIG OBJECT
   NEW SECTIONS BELOW — SKILLS, ACHIEVEMENTS, POSITIONS
   ═══════════════════════════════════════════════════ */

/* ──────────────────────────────────────────
   SKILLS
   Add/remove categories and skills freely.
────────────────────────────────────────── */
CONFIG.skills = [
  {
    category: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Alteryx", "KPI Tracking", "MI Reporting", "Google Analytics"],
  },
  {
    category: "Finance & Strategy",
    skills: ["Financial Modelling", "DCF", "NPV", "VaR", "Forecasting", "Regression Analysis", "NWC Diagnostics"],
  },
  {
    category: "Tools & Tech",
    skills: ["Advanced Excel (VBA)", "Python", "SQL", "JIRA", "Confluence", "SharePoint", "MS Office"],
  },
  {
    category: "Frameworks",
    skills: ["Lean Six Sigma", "Agile", "Kanban", "Ansoff Matrix", "RICE Framework", "Stakeholder Mapping"],
  },
  {
    category: "Soft Skills",
    skills: ["Stakeholder Management", "Requirement Gathering", "Strategic Thinking", "Leadership", "Process Automation"],
  },
];

/* ──────────────────────────────────────────
   ACHIEVEMENTS
   icon: emoji · title: short headline · desc: 1-2 lines
────────────────────────────────────────── */
CONFIG.achievements = [
  {
    icon: "🏆",
    title: "Top 7% of Batch — IIM Bodh Gaya",
    desc: "Ranked in the top 7% of the MBA batch across Marketing & Finance specialisations.",
  },
  {
    icon: "📚",
    title: "Published Book Chapter — IGI Global",
    desc: "Co-authored a 20-page chapter on 'Social-Media Marketing Framework' with IGI Global publishers.",
  },
  {
    icon: "🎯",
    title: "96.26 Percentile — CAT 2022",
    desc: "Secured 96.26 percentile in CAT'22, one of India's most competitive MBA entrance exams.",
  },
  {
    icon: "🏅",
    title: "90% Scholarship — Shiv Nadar University",
    desc: "Awarded 90% academic excellence scholarship. Dean's List 2021 & 2022 (GPA above 8.0).",
  },
  {
    icon: "🏅",
    title: "Overall Competition Winner- MEGA ATC Championship",
    desc: "We took part in the offline mode of MAC and built an electric ATV in less than 30 days in such unprecedented times. We devoted ourselves completely to achieving this quixotic challenge and eventually our hard work paid off. We competed against the electrical and combustible engines ATV and came out on top as the overall winner of such a prestigious competition.",
    certLink: "https://drive.google.com/file/d/1HGzNPTtjHBrw0gOdPy1OKLz3lsSclKMu/view?usp=sharing",
    certLabel: "View Certificate",

  },
  {
    icon: "📈",
    title: "ROI Improved by 8.5% — Reliance Retail",
    desc: "Financial models (DCF & sensitivity analysis) directly contributed to 8.5% ROI improvement.",
  },
  {
    icon: "⚡",
    title: "26% Accuracy Gain — ICICI Bank",
    desc: "Automated Excel & Python workflows improving data validation accuracy by 26% and cutting manual effort.",
  },
  {
    icon: "⏱️",
    title: "35% Faster Early Warning Detection — ICICI Bank",
    desc: "Ratio analysis and regression forecasting enhanced early warning detection speed by 35%.",
  },
];

/* ──────────────────────────────────────────
   POSITIONS OF RESPONSIBILITY
   role, org, period, description (use backticks for bullet points)
────────────────────────────────────────── */
CONFIG.positions = [
  {
    role: "President",
    org: "Strategy & Consulting Club — IIM Bodh Gaya",
    period: "Jun 2024 — Mar 2025",
    description: `● Headed a 35-member team driving case competitions, webinars, and industry interactions.
● Enhanced strategic thinking and financial expertise across the student body.`,
  },
  {
    role: "Coordinator",
    org: "Academic & Mentorship Committee — IIM Bodh Gaya",
    period: "Nov 2023 — Mar 2025",
    description: `● Coordinated 50+ mentorship sessions and performance assessments during placements involving 100+ companies.
● Guided batchmates on elective selection and acted as liaison between faculty and students.`,
  },
  {
    role: "Co-founder & Secretary",
    org: "Envision — Shiv Nadar University",
    period: "Aug 2020 — Mar 2021",
    description: `● Led a 20-member entrepreneurship venture mentoring 300+ students through workshops and competitions.
● Organised events focused on skill development, innovation, and entrepreneurial thinking.`,
    certLink: "https://drive.google.com/file/d/1Jdbr0kFS94kxgn0gKnz70IwUZ98vvq1y/view?usp=sharing",
    certLabel: "View Certificate",
  },
];
