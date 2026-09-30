export interface TimelineItem {
  id: string;
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export const profile = {
  name: 'Dhrubajyoti Paul',
  tagline: 'Financial Analytics · Public Policy · Civic Governance',
  degree: 'B.Com (Hons.) Financial Analytics (NSE Integrated)',
  institution: 'Birla Institute of Technology, Mesra — Noida Campus',
  contacts: [
    { label: 'Phone', value: '+91 9864270454', href: 'tel:+919864270454' },
    { label: 'Email', value: 'pauldhrubajyoti12@gmail.com', href: 'mailto:pauldhrubajyoti12@gmail.com' },
    { label: 'College', value: 'bcom45004.25@bitmesra.ac.in', href: 'mailto:bcom45004.25@bitmesra.ac.in' },
  ],
};

export const education = [
  {
    id: 'bit',
    institution: 'Birla Institute of Technology (BIT), Mesra',
    degree: 'Bachelor of Commerce (Hons.) — Financial Analytics',
    detail: 'Noida Campus',
  },
  {
    id: 'school',
    institution: 'Maharishi Vidya Mandir (CBSE)',
    degree: 'Senior Secondary (Class XII): 61.0% | Secondary (Class X): 60.0%',
    detail: 'Pre-university education',
  },
];

export const skills = {
  'Analytical Tools & Tech': ['MS Excel', 'Power BI', 'MySQL', 'Financial Analysis', 'Budgeting', 'Statutory Compliance'],
  'Certifications & Training': ['SEBI-Investor Certification', 'Certified Cyber Cadet (MeitY)', 'HRM (Unithena)', 'Digital Marketing (Google)', 'Gen AI', 'Metvy Finance Cohort — Certificate of Excellence'],
  'Operations & Governance': ['UDISE+ Portal Administration', 'School ERP Implementation', 'Public Policy Auditing', 'Carbon Finance'],
};

export const experience: TimelineItem[] = [
  {
    id: 'ideal',
    role: 'Administration & Operations Coordinator',
    org: 'Ideal English School',
    location: 'Cachar, Assam, India',
    period: '2023 – Present',
    current: true,
    points: [
      'Coordinate institutional administration, documentation pipelines, and regulatory liaison with state education directorates.',
      'Direct UDISE+ portal data management, enrolment records, and compliance scrutiny for government student-aid welfare programs.',
      'Spearhead the technical evaluation and deployment of School ERP and digital payroll systems; authored institutional BRD frameworks.',
    ],
  },
  {
    id: 'rkss',
    role: 'NGO Administration & Project Development Officer',
    org: 'Ramkrishna Sewa Samity',
    location: 'Cachar, Assam, India',
    period: 'Jan 2025 – Present',
    current: true,
    points: [
      'Oversee institutional governance, board resolutions, and statutory filings under Section 332 of the Income-tax Act.',
      'Formulated corporate CSR fundraising proposals and expenditure budgets, including a proposed INR 50 Lakh rural development initiative.',
      'Instituted administrative structures for the Youth Division (Yuva Vibhag) and migrated official records to digital banking workflows.',
    ],
  },
  {
    id: 'vijayash',
    role: 'Marketing & Research Intern',
    org: 'Vijayash Foundation — Noida Management Association (NMA)',
    location: 'Noida, India',
    period: 'Oct 2025 – Jan 2026',
    points: [
      'Synthesized operational data across community outreach projects, preparing analytical briefs for executive leadership.',
      'Coordinated high-level sustainability forums and stakeholder roundtables organized in collaboration with NMA.',
    ],
  },
];

export const leadership = [
  {
    id: 'venturex',
    title: 'Lead Coordinator, VentureX 2026 & Member, EDC (BIT Mesra Noida)',
    description: 'Heading the organizing committee for a national-level startup pitch competition; driving panel onboarding, corporate sponsorship, outreach, and nationwide student participation.',
  },
  {
    id: 'mgmt-club',
    title: 'Student Coordinator, Management Club (BIT Mesra Noida)',
    description: 'Contributed to financial allocations and budgeting for TEDxBIT Noida (2025) and served as Campus Ambassador for Techfest, IIT Bombay.',
  },
  {
    id: 'iciem',
    title: 'Conference Presenter | ICIEM 2026',
    description: 'Authored "From Credit Gaps to Carbon Credits", proposing AI credit evaluation models integrated with voluntary carbon credit schemes for tribal agri-tech ventures.',
  },
  {
    id: 'civic',
    title: 'Civic Governance Impact',
    description: 'Filed and resolved 100+ RTI petitions across 70+ Circle Offices; secured delayed wage disbursements under Jal Jeevan Mission and prompted operational infrastructure overhauls across district welfare offices.',
  },
  {
    id: 'class-rep',
    title: 'Class Representative',
    description: 'Served as elected class representative, facilitating communication between students and faculty, and coordinating academic and co-curricular initiatives.',
  },
  {
    id: 'social-media',
    title: 'Member, Social Media Team — College',
    description: 'Part of the college social media team, contributing to content planning, outreach, and digital engagement strategies across campus events.',
  },
];

export const awards = [
  {
    id: 'pm',
    title: 'Prime Minister of India — Letters of Appreciation (2023 & 2024)',
    description: 'Conferred official letters of appreciation signed by the Hon\u2019ble Prime Minister of India for insightful contributions, analytical confidence, and policy vision during the national Pariksha Pe Charcha youth dialogue program. Consecutive recipient.',
  },
  {
    id: 'vbyld',
    title: 'State-Level Finalist | Viksit Bharat Youth Leadership Dialogue (VBYLD 2026)',
    description: 'Selected as a State Finalist (Assam) by the Ministry of Youth Affairs & Sports and MyBharat; cleared 3 rigorous tiers including the Stage-III PPT Challenge on policy innovation for "Viksit Bharat 2047".',
  },
  {
    id: 'budget-quest',
    title: 'State Finalist | MyBharat Budget Quest (2026)',
    description: 'Ranked among top state candidates (Assam) by the Ministry of Youth Affairs & Sports for national budgetary analysis and strategic recommendations addressing Ease of Doing Business.',
  },
];

export const workshops = [
  {
    id: 'game-dev',
    title: 'Game Development Workshop',
    org: 'IIT Guwahati — Wisdomware Technologies Inc.',
    year: '2019',
    description: 'Participated in a two-day hands-on workshop where I built live game projects using Unity software as part of IIT Guwahati\u2019s annual techfest.',
  },
  {
    id: 'icai',
    title: 'ICAI Commerce Olympiad',
    org: 'Institute of Chartered Accountants of India',
    year: '2023',
    description: 'Demonstrated strong analytical and reasoning skills through participation in this prestigious national-level examination.',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Workshop',
    org: 'IIT Delhi — Techgyan Technologies',
    year: '2025',
    description: 'Completed a one-day intensive workshop working on live business data projects, applying tools and techniques for real-time data analysis and decision-making.',
  },
  {
    id: 'ai-summit',
    title: 'AI Summit',
    org: 'Attended',
    year: '',
    description: 'Participated in AI Summit, engaging with emerging trends in artificial intelligence and its applications in finance and governance.',
  },
  {
    id: 'comet',
    title: 'COMET Fest',
    org: 'IIT Roorkee',
    year: '',
    description: 'Attended IIT Roorkee\u2019s COMET Fest, engaging with technology and innovation showcases at one of India\u2019s premier engineering institutions.',
  },
];

export const volunteering = [
  {
    id: 'tedx',
    title: 'Volunteer — TEDxBIT Noida',
    period: '2025',
    description: 'Selected in the Finance & Budgeting division, actively contributing to financial planning and sponsorship management for the event. Supported budgeting while gaining hands-on experience in event coordination, teamwork, and communication. Collaborated with fellow volunteers to ensure smooth planning and execution of the TEDx event.',
  },
  {
    id: 'cry',
    title: 'CRY Foundation — Every Child, Every Chance Campaign',
    period: '',
    description: 'Contributed to CRY Foundation\u2019s Every Child, Every Chance campaign through motivational letters supporting child welfare and education outreach.',
  },
];
