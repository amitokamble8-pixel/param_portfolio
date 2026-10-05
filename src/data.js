/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Param",
  last: "Naik",
  fullName: "Param Naik",
  tagline: "COMPUTER SCIENCE • MATHEMATICS • PHYSICS • CLASS OF 2027",
  location: "Mumbai, India",
  email: "",
  phone: "",
  bio: [
    "I am a Class 12 student at Narayana E-Techno School, Kalyan, with a strong academic foundation in Computer Science, Mathematics, Physics, and Chemistry. My interests lie at the intersection of technology, computational thinking, and problem-solving, with Computer Science as my intended field of study.",
    "My interest in Computer Science comes from an inclination towards understanding how problems can be broken down, modelled, and solved systematically. Mathematics has strengthened my analytical thinking, Physics has encouraged me to understand systems through first principles, and Computer Science has introduced me to computational approaches to problem-solving.",
    "Beyond the classroom, I have sought opportunities to keep learning — including a four-week Scholastic's Internship Programme in Grade 10 and the Dr. Homi Bhabha Balvaidnyanik Competition, which I passed in 2023–24.",
  ],
  quote:
    "I think about technology not simply as a tool, but as a way of approaching complex problems through logic, modelling, computation, and structured reasoning.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder.jpg",
  photo: "/placeholder.png",
  aboutPhoto: "/placeholder.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
];

/* ---- Experience (renders as "Work Experience" cards) — Internships ---- */

export const EXPERIENCE = [
  {
    slug: "scholastic-internship-programme",
    role: "Scholastic Internship Programme",
    org: "Academic Intern",
    logo: "/logos/scholastic.png", // TODO: add logo file or replace
    location: "", // TODO: not specified in source
    dates: "Grade 10 · 4 weeks",
    meta: "Grade 10 · 4 weeks ·",
    badge: "Internship",
    desc: "A four-week academic internship undertaken during Grade 10 through the Scholastic's Internship Programme. The experience provided exposure to an environment beyond the conventional classroom and an opportunity to engage with structured learning and professional settings.",
    // TODO: source does not specify department, project, responsibilities, tools or outcomes —
    // replace these bullets with specifics before publishing.
    bullets: [
      "Engaged with structured learning in a professional setting beyond the classroom",
      "Applied classroom learning in a practical environment",
      "Strengthened interest in exploring academic and professional opportunities beyond school",
    ],
    tags: ["Internship", "Professional Exposure", "Applied Learning"],
    featured: true,
  },
];

/* ---- Projects (Research & Projects) ---- */

export const PROJECTS = [
  {
    name: "Dr. Homi Bhabha Balvaidnyanik Competition",
    org: "Participant · Science Competition",
    meta: "2023–24 · Passed",
    desc: "Successfully passed the Dr. Homi Bhabha Balvaidnyanik Competition, demonstrating engagement with scientific learning beyond the regular academic curriculum.",
    tags: ["Science", "Academic Competition", "Beyond the Curriculum"],
    featured: true,
  },
  {
    name: "Exploring Computer Science through a Quantitative Lens",
    org: "Independent Academic Exploration",
    meta: "Ongoing",
    desc: "My academic interests are centred on Computer Science, supported by a strong foundation in Mathematics and Physics. The combination of these subjects has encouraged me to approach complex problems through logic, modelling, computation, and structured reasoning.",
    tags: ["Computer Science", "Mathematics", "Physics", "Computational Thinking"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "📊",
    title: "Class 12 Academic Performance — 97.6%",
    meta: "CBSE · Narayana E-Techno School, Kalyan",
    detail: "Achieved a 97.6% aggregate in Class 12, including 99/100 in Mathematics, 98/100 in Physics, 98/100 in English, 97/100 in Chemistry, and 96/100 in Computer Science.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Class 10 Academic Performance — 98.6%",
    meta: "Class 10 · 986/1000",
    detail: "Scored 986/1000 in Class 10, including full marks in English Literature and History, and 99/100 in Physics, Chemistry, Biology, and Computer Science.",
    link: "",
    featured: true,
  },
  {
    icon: "🔬",
    title: "Dr. Homi Bhabha Balvaidnyanik Competition — Passed",
    meta: "Science Competition · 2023–24",
    detail: "Passed the Dr. Homi Bhabha Balvaidnyanik Competition, reflecting engagement with science beyond the regular curriculum.",
    link: "",
    featured: true,
  },
  {
    icon: "🏅",
    title: "Nalanda — Child of the Year",
    meta: "School · AY 2019–20",
    detail: "Received the Child of the Year recognition for overall achievement.",
    link: "",
    featured: false,
  },
  {
    icon: "⭐",
    title: "Kushagra — Best Child in the Class",
    meta: "School · AY 2015–16",
    detail: "Recognised for overall performance during the academic year.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */

export const ARTICLES = [
  {
    title: "Technology",
    outlet: "Exploring how technology can be used to build innovative solutions and solve real-world challenges.",
    link: "",
  },
  {
    title: "Computational Thinking",
    outlet: "Developing logical, structured approaches to break down complex problems and design efficient solutions.",
    link: "",
  },
  {
    title: "Problem-Solving",
    outlet: "Applying analytical thinking and quantitative reasoning to tackle challenges with effective, practical solutions.",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */
/* Source has no leadership/community activities; this section mirrors the
   portfolio's "Leadership & Activities" content (scholastic achievement). */

export const VOLUNTEER = {
  
  stats: [
    { value: "97.6%", label: "Class 12 Aggregate" },
    { value: "98.6%", label: "Class 10 Aggregate" },
    { value: "99/100", label: "Mathematics · Class 12" },
  ],
  orgs: [
    {
      name: "Scholastic Achievement",
      role: "Class 10 & Class 12",
      desc: "Consistent academic performance across both board years — 98.6% in Class 10 and a 97.6% aggregate in Class 12, with top scores in Mathematics, Physics, and English.",
    },
    {
      name: "Early Academic Recognition",
      role: "AY 2015–16 & AY 2019–20",
      desc: "Recognised as Best Child in the Class (Kushagra, 2015–16) and Child of the Year (Nalanda, 2019–20) for overall performance and achievement.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */
/* TODO: source contains no sports or extracurricular activities. Add entries
   here, or hide the "Beyond Academics" nav/footer links if left empty. */

export const SPORTS = [];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Academic Strengths",
    items: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
  },
  {
    group: "Thinking & Problem-Solving",
    items: ["Computational Thinking", "Analytical Reasoning", "First-Principles Reasoning", "Mathematical Modelling"],
  },
  {
    group: "Languages",
    items: ["English"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Narayana E-Techno School, Kalyan",
    location: "Kalyan, India",
    level: "CBSE · Class 12",
    dates: "Expected Graduation 2027",
    gpa: "97.6%",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
  },
];

export const TEST_SCORES = [
  {
    exam: "Class 12 Results: 97.6%",
    date: "AY 2026–27",
    breakdown: [
      { label: "Mathematics", value: "99/100" },
      { label: "Physics", value: "98/100" },
      { label: "English", value: "98/100" },
      { label: "Chemistry", value: "97/100" },
      { label: "Computer Science", value: "96/100" },
      { label: "Aggregate", value: "97.6%" },
    ],
  },
  {
    exam: "Class 10 Results: 98.6%",
    date: "",
    breakdown: [
      { label: "English Literature", value: "100/100" },
      { label: "History", value: "100/100" },
      { label: "Physics", value: "99/100" },
      { label: "Chemistry", value: "99/100" },
      { label: "Biology", value: "99/100" },
      { label: "Computer Science", value: "99/100" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
