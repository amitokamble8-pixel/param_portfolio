/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Param",
  last: "Naik",
  fullName: "Param Naik",
  tagline: "Aspiring Computer Science Engineer • National Best Speaker • Published Author",
  location: "Mumbai, India",
  email: "",
  phone: "",
  bio: [
    "I'm a CBSE Grade 12 student at Narayana E-Techno School, Kalyan, graduating in 2027, with Computer Science as my intended field of study. I scored 98.60% in Grade 10 and 1510/1600 on the SAT.",
    "My interest in Computer Science became practical during my Software Engineering internship at ITCG Solutions, where I designed and built a web-based Travel Expense Management Tool. Working with Python, Java and React-based tools, setting up database structure and backend logic, and chasing down bugs in date formatting and input validation showed me what it takes to turn an idea into software people can actually rely on.",
    "Outside of technology, I've spent much of my school life debating, chairing Model UN committees, acting and writing — from being named National Best Speaker at the Frank Anthony Memorial All India Debate to publishing a historical allegory. I've also volunteered with TINSA Ecological Foundation and Manav Kalyan Trust, and served as House Captain at Bombay Scottish School, Powai.",
  ],
  // TODO: not in resume — placeholder quote, replace with Param's own words.
  quote:
    "Whether I'm writing code, building an argument, or leading a team, I enjoy breaking a problem down, reasoning through it carefully, and making something that works.",
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
  cv: "",
  photo: "/placeholder.png",
  aboutPhoto: "/photo.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) — Internships ---- */

export const EXPERIENCE = [
  {
    slug: "itcg-solutions-software-engineering-intern",
    role: "Software Engineering Intern",
    org: "ITCG Solutions",
    logo: "/logos/itcg.png", // TODO: add logo file or replace
    location: "", // TODO: not specified in resume
    dates: "2026",
    meta: "2026 ·",
    badge: "Internship",
    desc: "Designed and built a web-based Travel Expense Management Tool that lets users log business trips, categorise expenses, and track approval statuses in one dashboard — working across the front end, database and backend logic.",
    bullets: [
      "Designed and built a Travel Expense Management Tool with a single dashboard for trips, expense categories and approval statuses",
      "Worked with Python, Java and React-based web tools, helping set up the database structure and backend logic to calculate totals accurately",
      "Fixed practical bugs around date formatting and input validation so users submitted clean, error-free records",
      "Tested the application through multiple iterations to catch edge-case calculation errors and improve database query responsiveness",
    ],
    tags: ["Python", "Java", "React", "SQL", "Full-Stack", "Testing & Debugging"],
    featured: true,
  },
];

/* ---- Projects (Research & Projects) ---- */

export const PROJECTS = [
  {
    name: "Travel Expense Management Tool",
    org: "ITCG Solutions · Software Engineering Internship",
    meta: "2026",
    desc: "A web-based tool for logging business trips, categorising expenses and tracking approval statuses in one dashboard. Contributed to the database structure, backend logic for accurate totals, input validation, and iterative testing to fix edge-case errors and improve query responsiveness.",
    tags: ["Web App", "Python", "Java", "React", "SQL (MySQL)"],
    featured: true,
  },
  {
    name: "The Echoes of Sufferance",
    org: "Published Author · BriBooks NYAF Programme",
    meta: "2023 · Published",
    desc: "A historical allegory examining conflict, authoritarianism, resistance and political power through the story of an animal society.",
    tags: ["Creative Writing", "Allegory", "Political History"],
    featured: true,
  },
  {
    name: "Bird Biodiversity Survey",
    org: "Volunteer · TINSA Ecological Foundation",
    meta: "2025",
    desc: "Took part in an ecological survey at TINSA — early-morning birdwatching and species identification in a team of 5–6, alongside a professional photographer and zoologist, with photographic documentation and data collection to estimate bird species diversity and identify potentially endangered species.",
    tags: ["Conservation", "Field Survey", "Data Collection", "Biodiversity"],
    featured: true,
  },
  {
    name: "Inter-House Dramatics — The Mousetrap",
    org: "Lead Actor · Scripting & Direction Support",
    meta: "2024 · Best Male Leading Performer",
    desc: "Played Sergeant Trotter/Georgie in Agatha Christie's play while supporting scripting and direction; won Best Male Leading Performer and helped the house finish first overall.",
    tags: ["Drama", "Acting", "Direction"],
    featured: false,
  },
  {
    name: "Hussain in Me — Strokes Art Exhibition",
    org: "Individual Project",
    meta: "2021 · State-level qualifier",
    desc: "A painting reinterpreting M. F. Husain's motifs of rural Indian life, which qualified for state-level participation.",
    tags: ["Art", "Painting"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎤",
    title: "National Best Speaker — Frank Anthony Memorial All India Debate",
    meta: "National, India · 2024",
    detail: "Named Best Speaker at the national level after advancing through school, zonal and national rounds; the school team finished runner-up. Went on to mentor junior school debaters.",
    link: "",
    featured: true,
  },
  {
    icon: "📝",
    title: "SAT — 1510/1600",
    meta: "College Board · 2026",
    detail: "Scored 1510 out of 1600 on the SAT.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Grade 10 — 98.60%",
    meta: "Board Examinations · 986/1000",
    detail: "Scored 986 out of 1000 (98.60%) in the Grade 10 board examinations.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "BSS LAD Award",
    meta: "Bombay Scottish School, Powai · 2025",
    detail: "School graduation title awarded for impromptu performance and presentation.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "Devil's Advocate Debate — First Place",
    meta: "Debate · 2024",
    detail: "Won first place for argumentation and live rebuttal.",
    link: "",
    featured: true,
  },
  {
    icon: "🎭",
    title: "Inter-House Dramatics — Best Male Leading Performer",
    meta: "School · 2024",
    detail: "Recognised for the lead role in The Mousetrap; the house finished first overall.",
    link: "",
    featured: true,
  },
  {
    icon: "🎙️",
    title: "Videria Revelation Roundtable — Best Impersonator",
    meta: "Roundtable · 2024",
    detail: "Portrayed Donald Trump under sustained panel questioning; the impersonator–journalist team placed second overall.",
    link: "",
    featured: false,
  },
  {
    icon: "🗣️",
    title: "Inter-House Debate — Best Speaker",
    meta: "School · 2024",
    detail: "Named Best Speaker for a debate on India's 1991 economic reforms.",
    link: "",
    featured: false,
  },
  {
    icon: "🥉",
    title: "Hindi Oratory Competition — Third Place",
    meta: "School · 2024",
    detail: "Placed third for a poetry performance on women's empowerment.",
    link: "",
    featured: false,
  },
  {
    icon: "📊",
    title: "SOF Olympiads — School Rank 7 in IMO & IEO",
    meta: "Science Olympiad Foundation · 2023–24",
    detail: "School rank 7 in the International Mathematics Olympiad and International English Olympiad, and school rank 14 in the National Science Olympiad.",
    link: "",
    featured: false,
  },
  {
    icon: "🌐",
    title: "Scottish Model United Nations — Outstanding Delegate",
    meta: "MUN · 2023",
    detail: "Earned Outstanding Delegate / High Commendation recognition.",
    link: "",
    featured: false,
  },
  {
    icon: "🌍",
    title: "SOLMUN — Verbal Mention",
    meta: "MUN · 2023",
    detail: "Received a Verbal Mention in the UNHCR-supported MUN Refugee Challenge.",
    link: "",
    featured: false,
  },
  {
    icon: "🔢",
    title: "SOF Olympiads — School Rank 7 in NSO",
    meta: "Science Olympiad Foundation · 2022–23",
    detail: "School rank 7 in the National Science Olympiad, 9 in the International English Olympiad and 12 in the International Mathematics Olympiad.",
    link: "",
    featured: false,
  },
  {
    icon: "🥉",
    title: "SOF International English Olympiad — Bronze Medal",
    meta: "School-level · 2019–20",
    detail: "Awarded a school-level Bronze Medal.",
    link: "",
    featured: false,
  },
  {
    icon: "🏅",
    title: "Nalanda — Child of the Year",
    meta: "School · 2019–20",
    detail: "Recognised for academic and extracurricular performance.",
    link: "",
    featured: false,
  },
  {
    icon: "🔬",
    title: "Inter-School Scipotec Exhibition — Second Position",
    meta: "Science Exhibition · 2018–19",
    detail: "Secured second position at the inter-school science exhibition.",
    link: "",
    featured: false,
  },
  {
    icon: "⭐",
    title: "Kushagra — Best Child in Class",
    meta: "School · 2015–16",
    detail: "Awarded Best Child in Class for overall performance during the academic year.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */

export const ARTICLES = [
  {
    title: "Computer Science & Software Development",
    outlet: "Building web applications — database design, backend logic, data validation, testing and optimisation",
    link: "",
  },
  {
    title: "Debate & Public Speaking",
    outlet: "Argumentation, live rebuttal and moderating debates on technology, privacy, national security and economics",
    link: "",
  },
  {
    title: "Model UN & Public Policy",
    outlet: "Chairing simulations on healthcare and history, international conflict, and youth parliamentary debate",
    link: "",
  },
  {
    title: "Writing & Creative Expression",
    outlet: "Exploring political themes through allegorical fiction, drama and visual art",
    link: "",
  },
  {
    title: "Conservation & Community",
    outlet: "Biodiversity surveys, wildlife conservation, and inclusive engagement with children with disabilities",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "500+", label: "Children Reached · Manav Kalyan Trust" },
    { value: "15+", label: "Competitions & Honours" },
    { value: "2", label: "Years in House Leadership" },
  ],
  orgs: [
    {
      name: "Manav Kalyan Trust",
      role: "Volunteer · Community Outreach", // TODO: year not specified in resume
      desc: "Manav Kalyan Trust is an educational institution serving 500+ children with disabilities. Through regular visits during school vacations, I led interactive, creative and recreational activities — drawing, painting, and games using visual cues and hand signals — and helped distribute food packets and essential supplies, contributing to an inclusive and supportive environment.",
    },
    {
      name: "TINSA Ecological Foundation",
      role: "Volunteer · Conservation Awareness · 2025",
      desc: "Took part in an ecological survey contributing to biodiversity assessment and bird conservation awareness. Working in a team of 5–6 with a professional photographer and zoologist, I helped with species identification, photographic documentation and data collection, and explored conservation and ecological restoration strategies.",
    },
    {
      name: "House Captain & Vice Captain — Bombay Scottish School, Powai",
      role: "Student Leadership · 2023 – 2024",
      desc: "As Vice Captain (2023), assisted with house coordination, discipline and inter-house event preparation. As House Captain (2024), coordinated house discipline, march-past preparations and inter-house participation, leading teamwork and student engagement. Received a Certificate of Appreciation in both roles.",
    },
    {
      name: "Scottish National Youth Parliament",
      role: "Speaker of the Lok Sabha · 2024",
      desc: "Presided over a parliamentary debate on caste-based reservation and affirmative action, managing proceedings and evaluating participant performances.",
    },
    {
      name: "Scottish Spiel & Inter-House Debate",
      role: "Moderator · 2024",
      desc: "Moderated debates at BSS Powai on technology use, privacy and national security, managing rebuttals and guiding speakers. Received Certificates of Appreciation.",
    },
    {
      name: "Scottish Model United Nations",
      role: "Chair & Delegate · 2023",
      desc: "Chaired US Senate and Duma simulations on healthcare and the Russian Revolution, and participated in an Arab League committee on Israel–Palestine, earning Outstanding Delegate / High Commendation.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */
/* Resume lists no sports — this page carries debate, drama, writing and art. */

export const SPORTS = [
  {
    icon: "🎤",
    name: "Competitive Debating",
    desc: "In 2024 alone I represented my school at the Frank Anthony Memorial All India Debate (National Best Speaker; team runner-up), the AISM Zonal and Regional Debate involving 85 ICSE schools, and the Maharashtra Anglo-Indian CISCE Schools Debate. After nationals, I mentored junior school debaters.",
  },
  {
    icon: "🎭",
    name: "Drama & Performance",
    desc: "From a year-long Helen O'Grady International Speech and Drama programme in 2014 to playing Sergeant Trotter/Georgie in The Mousetrap and winning Best Impersonator at the Videria Revelation Roundtable, performance has been a constant thread through my school life.",
  },
  {
    icon: "📖",
    name: "Writing",
    desc: "Through the BriBooks NYAF Programme I published The Echoes of Sufferance, a historical allegory about conflict, authoritarianism, resistance and political power told through an animal society.",
  },
  {
    icon: "🎨",
    name: "Art",
    desc: "My painting for the Hussain in Me — Strokes Art Exhibition, reinterpreting M. F. Husain's motifs of rural Indian life, qualified for state-level participation in 2021.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming & Development",
    items: ["Python", "Java", "SQL (MySQL)", "React-based Web Tools", "Database Design", "Backend Logic"],
  },
  {
    group: "Software Engineering Practice",
    items: ["Web App Development", "Data Validation", "Bug Fixing", "Testing & Optimisation"],
  },
  {
    group: "Communication & Creative",
    items: ["Debate", "Public Speaking", "Model UN", "Moderation", "Creative Writing", "Drama", "Painting"],
  },
  {
    group: "Core Strengths",
    items: ["Leadership", "Teamwork", "Mentoring", "Argumentation", "Composure Under Pressure"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Narayana E-Techno School, Kalyan",
    location: "Kalyan, Mumbai, India",
    level: "CBSE · Grade 12",
    dates: "Graduating 2027",
    gpa: "",
    // TODO: subjects not listed in resume — confirm before publishing
    coursework: [],
  },
  {
    // TODO: resume lists Grade 10 under Narayana, but leadership roles and a 2025
    // graduation award are at Bombay Scottish School. Confirm school and board.
    school: "Bombay Scottish School, Powai",
    location: "Powai, Mumbai, India",
    level: "Grade 10",
    dates: "Completed 2025",
    gpa: "98.60%",
    coursework: [],
  },
];

export const TEST_SCORES = [
  {
    exam: "SAT",
    date: "2026",
    breakdown: [
      // TODO: section scores not in resume
      { label: "Total", value: "1510/1600" },
    ],
  },
  {
    exam: "Grade 10 Board Results",
    date: "2025", // TODO: year inferred, confirm
    breakdown: [
      { label: "Percentage", value: "98.60%" },
      { label: "Total", value: "986/1000" },
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
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
