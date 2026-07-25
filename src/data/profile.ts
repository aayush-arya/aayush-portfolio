import { withBase } from '@/lib/utils'

export const profile = {
  name: 'Aayush Arya',
  firstName: 'Aayush',
  role: 'Software Engineer',
  taglineRoles: [
    'Software Engineer',
    'Cloud Engineer',
    'AI/ML Developer',
    'AWS Enthusiast',
    'Problem Solver',
  ],
  location: 'Gurugram, India',
  email: 'aayusharyaggm@gmail.com',
  phone: '+91-8287511292',
  summary:
    "Computer Science undergraduate (B.Tech, AI and ML specialization) currently working as a Software Engineering Intern at Mycom, building production backend services in Spring Boot / Java for a reactive microservices platform. I combine hands-on backend development, cloud infrastructure (AWS), and strong CS fundamentals to deliver reliable, well-tested software.",
  longSummary: [
    "I'm a Computer Science (AI and ML specialization) undergraduate at Dronacharya College of Engineering who ended up loving backend systems as much as machine learning — the kind of engineering where a clean data pipeline and a well-placed cache matter just as much as a good model.",
    "That shows up in my day job: at Mycom, I own the backend for PrOptima's Content Manager service — a Spring Boot 3 / WebFlux reactive microservice — where I've shipped a full feature end-to-end, from a 4-layer data pipeline down to SSRF protection, caching, and 20+ passing tests, without adding tech debt to the existing codebase.",
    "Outside of work, I build things I'd actually want to use: InterviewPilot, an AI interview-prep SaaS powered by the Claude API with a real code-execution sandbox, and NextRec, a hybrid recommendation engine combining content, collaborative, and semantic signals. Before all that, an AWS Cloud Engineering internship at Maruti Suzuki taught me IAM and infrastructure the hard way — by doing it in production.",
  ],
  resumeUrl: withBase('/resume/Aayush_Arya_Resume.pdf'),
  socials: {
    github: 'https://github.com/aayush-arya',
    linkedin: 'https://linkedin.com/in/aayush-arya-111750289',
    email: 'mailto:aayusharyaggm@gmail.com',
    phone: 'tel:+918287511292',
  },
  stats: [
    { label: 'Projects Shipped', value: 6, suffix: '+' },
    { label: 'Technologies', value: 25, suffix: '+' },
    { label: 'Certifications', value: 6, suffix: '' },
    { label: 'Internships', value: 2, suffix: '' },
  ],
}

export type EducationItem = {
  id: string
  title: string
  place: string
  period: string
  detail: string
}

export const education: EducationItem[] = [
  {
    id: 'btech',
    title: 'B.Tech, Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
    place: 'Dronacharya College of Engineering, Gurugram',
    period: 'Aug 2023 — May 2027',
    detail:
      'CGPA: 7.1 / 10 (through Semester IV). Coursework: Design & Analysis of Algorithms, Data Structures, Operating Systems, Computer Networks, Computer Architecture, Relational Databases, AI, Machine Learning & Pattern Recognition, Graph Theory, Probability & Statistics.',
  },
  {
    id: 'senior-secondary',
    title: 'Senior Secondary & Secondary (CBSE)',
    place: 'CBSE Board',
    period: '2021 — 2023',
    detail: '12th: 72.33% · 10th: 86.8%',
  },
]

export type TimelineItem = {
  id: string
  year: string
  title: string
  place: string
  description: string
  icon: 'code' | 'cloud' | 'brain' | 'graduation' | 'briefcase'
}

export const journey: TimelineItem[] = [
  {
    id: 'start',
    year: 'Aug 2023',
    title: 'Started B.Tech in CSE (AI & ML)',
    place: 'Dronacharya College of Engineering',
    description: 'Began formal computer science education, with an early pull toward backend systems and machine learning.',
    icon: 'graduation',
  },
  {
    id: 'maruti',
    year: 'Jun 2025 — Jul 2025',
    title: 'AWS Cloud Engineering Internship',
    place: 'Maruti Suzuki India Limited',
    description: 'First hands-on exposure to production cloud infrastructure — IAM policies, EC2/S3/EKS/Lambda provisioning, and CloudWatch monitoring.',
    icon: 'cloud',
  },
  {
    id: 'projects',
    year: '2025',
    title: 'Built InterviewPilot & NextRec',
    place: 'Personal Projects',
    description: 'Shipped an AI interview-prep SaaS on the Claude API and a hybrid recommendation engine combining content, collaborative, and semantic search.',
    icon: 'brain',
  },
  {
    id: 'mycom',
    year: 'Jun 2026 — Present',
    title: 'Software Engineering Intern',
    place: 'Mycom',
    description: "Owning backend delivery for PrOptima V6.0's Content Manager service — a reactive Spring Boot / WebFlux microservice — from design through production rollout.",
    icon: 'briefcase',
  },
]

export type SkillCategory = {
  id: string
  label: string
  icon: string
  skills: { name: string; level: number }[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'code-2',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 82 },
      { name: 'C', level: 75 },
      { name: 'R', level: 65 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: 'server',
    skills: [
      { name: 'Spring Boot 3', level: 88 },
      { name: 'Spring WebFlux / Project Reactor', level: 82 },
      { name: 'REST APIs (JAX-RS)', level: 85 },
      { name: 'Spring Security / OAuth2 / OIDC', level: 78 },
      { name: 'MongoDB (Reactive) / MySQL', level: 80 },
      { name: 'Caffeine Cache', level: 75 },
    ],
  },
  {
    id: 'testing',
    label: 'Testing & Quality',
    icon: 'flask-conical',
    skills: [
      { name: 'JUnit 5 / Mockito', level: 85 },
      { name: 'Cucumber BDD', level: 80 },
      { name: 'Maven Surefire', level: 75 },
      { name: 'Code Review', level: 82 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'AWS (EC2, S3, Lambda, EKS, IAM, CloudWatch)', level: 82 },
      { name: 'GitLab CI', level: 76 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Maven / Jira', level: 80 },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML & Data',
    icon: 'brain-circuit',
    skills: [
      { name: 'Scikit-learn / Pandas / NumPy', level: 82 },
      { name: 'TensorFlow / Keras', level: 70 },
      { name: 'PyTorch', level: 60 },
      { name: 'OpenCV / Matplotlib', level: 68 },
    ],
  },
  {
    id: 'core-cs',
    label: 'Core CS Fundamentals',
    icon: 'binary',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Object-Oriented Programming', level: 88 },
      { name: 'Operating Systems', level: 78 },
      { name: 'Computer Networks', level: 76 },
      { name: 'DBMS', level: 80 },
      { name: 'Graph Theory & Complexity', level: 75 },
    ],
  },
]

export type Project = {
  id: string
  title: string
  tagline: string
  category: string
  description: string
  features: string[]
  tech: string[]
  gradient: string
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'interviewpilot',
    title: 'InterviewPilot',
    tagline: 'AI Interview Copilot',
    category: 'SaaS Platform',
    description:
      'A production-grade SaaS platform for technical interview preparation — AI mock interviews, resume analysis, and a Monaco-editor coding round with real code execution and AI-driven review, powered by the Claude API across 20+ tracks.',
    features: [
      'AI mock interviews and resume analysis powered by the Claude API across 20+ interview tracks',
      'Monaco-editor coding round with real code execution and AI-driven review',
      'FastAPI backend built on clean architecture with SQLAlchemy ORM',
      'JWT authentication with Google/GitHub OAuth',
      'Full stack (React, PostgreSQL, Redis, Nginx) containerized via Docker Compose with GitHub Actions CI/CD',
    ],
    tech: ['FastAPI', 'TypeScript', 'React', 'PostgreSQL', 'Redis', 'Claude API', 'Docker', 'GitHub Actions'],
    gradient: 'from-indigo-500 via-violet-500 to-purple-600',
    github: 'https://github.com/aayush-arya/interviewpilot',
    featured: true,
  },
  {
    id: 'nextrec',
    title: 'NextRec',
    tagline: 'AI-Powered Personalized Recommendation System',
    category: 'Machine Learning',
    description:
      'A full-stack recommendation platform combining content-based filtering (TF-IDF/cosine similarity), collaborative filtering (SVD matrix factorization), and semantic search (sentence-transformers/FAISS) across 6 content domains.',
    features: [
      'Hybrid recommendation engine fusing content, collaborative, trending, and popularity signals via weighted scoring',
      'Content-based filtering with TF-IDF and cosine similarity',
      'Collaborative filtering via SVD matrix factorization',
      'Semantic search using sentence-transformers and FAISS',
      'Cold-start solver for new users; deployed via Docker Compose and GitHub Actions CI/CD to Render',
    ],
    tech: ['FastAPI', 'Python', 'React', 'Scikit-learn', 'SciPy', 'Docker', 'GitHub Actions'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    github: 'https://github.com/aayush-arya/nextrec',
    featured: true,
  },
]

export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  location: string
  current: boolean
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'mycom',
    role: 'Software Engineering Intern',
    company: 'Mycom — PrOptima V6.0, Content Manager Service',
    period: 'Jun 2026 — Aug 2026',
    location: 'Onsite',
    current: true,
    points: [
      "Own end-to-end backend implementation of the Embedded View feature for PrOptima's Content Manager service (eaa-proptima-web-reports) — a Spring Boot 3 / WebFlux (Java 21) reactive microservice enabling operators to embed external URLs, text, and images directly into product dashboards",
      'Designed and implemented a 4-layer data pipeline (DTO → App Model → Entity → PTO → MongoDB), introducing ReportType.EMBEDDED as a first-class view type across 5 new classes and 15+ modified files, mirroring the existing Gauge/Scorecard pattern with zero added tech debt',
      'Engineered production-grade validation and security controls — SSRF protection, image MIME/size restrictions, and single-mode validation rules — backed by a Caffeine cache (30-minute TTL) with mutation-based eviction',
      'Delivered 10+ JUnit/Mockito unit tests and 10 passing Cucumber BDD scenarios plus OpenAPI 3 documentation, resolving all code-review findings across 2 completed sprints and unblocking the downstream frontend integration team',
      "Completed the project's final two sprints — wiring the Embedded View panel to persist and reload configurations end-to-end, and delivering render-time dynamic URL token resolution with security hardening (URL allow-listing, sandboxed iframe/CSP, image validation) for production rollout",
    ],
  },
  {
    id: 'maruti',
    role: 'AWS Cloud Engineering Intern',
    company: 'Maruti Suzuki India Limited',
    period: 'Jun 2025 — Jul 2025',
    location: 'Onsite, India',
    current: false,
    points: [
      "Implemented IAM policies and access-control levels for users and groups, enforcing least-privilege security standards across the organization's AWS environment",
      'Automated infrastructure provisioning and management using AWS services including EC2, S3, EKS, and Lambda, streamlining deployment of cloud-based workloads',
      'Configured CloudWatch Logs, Metrics, and Alarms to monitor resource utilization and system health across multiple cloud deployments',
    ],
  },
]

export type Certification = {
  id: string
  title: string
  issuer: string
  year: string
  category: string
  summary: string
}

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2025',
    category: 'AWS',
    summary: 'Foundational certification covering AWS core services, billing, security, and the Well-Architected Framework.',
  },
  {
    id: 'oci-foundations',
    title: 'OCI 2025 Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    category: 'Cloud',
    summary: 'Core Oracle Cloud Infrastructure services — compute, storage, networking, and security fundamentals.',
  },
  {
    id: 'nptel-java',
    title: 'Java',
    issuer: 'NPTEL',
    year: '2025',
    category: 'Java',
    summary: 'A rigorous course covering core and advanced Java programming concepts.',
  },
  {
    id: 'infosys-python-ai',
    title: 'Python & AI',
    issuer: 'Infosys Springboard',
    year: '2025',
    category: 'Python & AI',
    summary: 'Applied Python programming with an introduction to AI concepts and workflows.',
  },
  {
    id: 'ibm-genai',
    title: 'Generative AI for Software Development',
    issuer: 'IBM',
    year: '2025',
    category: 'Generative AI',
    summary: 'Applying generative AI tools and techniques across the software development lifecycle.',
  },
  {
    id: 'iit-bombay-c',
    title: 'C Programming',
    issuer: 'IIT Bombay',
    year: '2023',
    category: 'Programming',
    summary: 'Foundational C programming — syntax, memory management, and core algorithmic thinking.',
  },
]

export type Achievement = {
  id: string
  year: string
  title: string
  description: string
  category: 'Award' | 'Hackathon' | 'Leadership' | 'Competition'
}

export const achievements: Achievement[] = [
  {
    id: 'unstop-atomquest',
    year: '2025',
    title: 'Semifinalist — Unstop AtomQuest',
    description: 'Advanced to the semifinal round of Unstop AtomQuest, competing among 18,000+ registrants with a cleaning-robot solution.',
    category: 'Competition',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
