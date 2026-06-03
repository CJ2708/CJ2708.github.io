// Central content for the site. Edit here to update copy across the site.

export const site = {
  name: "Chahat Jain",
  role: "Software Engineer — Backend, Full-Stack & AI Agents",
  tagline:
    "I've shipped backend services, full-stack products, and production AI agents — turning ambiguous requirements into reliable, observable systems.",
  location: "India",
  email: "chahatjain2027@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/chahat-jain-633299228/",
    github: "https://github.com/CJ2708",
  },
  // Full URL (e.g. Google Drive) or a filename dropped into /public (e.g. "resume.pdf"). Shows a Resume button when set.
  resume: "https://drive.google.com/file/d/1LE0zthJ8X1m2JAsAWadL-W_ugd_QLuB2/view?usp=sharing",
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a software engineer with 1+ year of production experience spanning backend services, full-stack products, and AI agents — architecting agentic LLM/AI pipelines, designing ETL infrastructure, and standing up enterprise Data Quality & Governance frameworks. I like the messy middle of engineering — taking vague requirements and turning them into scalable, auditable systems that teams actually trust.",
    "At ZS Associates I build multi-agent pipelines on AWS with human-in-the-loop checkpoints, and I led a Data Quality framework adopted as the official reference standard for a Fortune 500 pharma client. I'm a CS graduate from IIT Dhanbad (AIR 2419 in JEE Mains, top 0.16% of 1.5M candidates).",
    "Lately I've been working on LLM evaluation, agent tooling, and data-quality for model training — areas where rigorous data work directly shapes model behavior.",
  ],
  highlights: [
    { value: "1+ yr", label: "Production experience" },
    { value: "~70%", label: "Cycle time reduction (agentic pipeline)" },
    { value: "12+", label: "Data-quality dimensions standardized" },
    { value: "AIR 2419", label: "JEE Mains · 1.5M candidates" },
  ],
};

export const experience = [
  {
    company: "ZS Associates",
    role: "Data Engineer — Agentic AI & Data Platforms",
    location: "India",
    period: "Jun 2025 — Present",
    points: [
      "Design, build, and continually evolve production AI agents — multi-agent orchestration on AWS AgentCore with tool use, state management, human-in-the-loop checkpoints, and evaluation loops — that autonomously turn raw meeting transcripts into structured artifacts (DDL/DML, Data Quality scripts, end-to-end ETL) on a versioned Amazon S3 layer, cutting cycle time ~70% and eliminating 60%+ manual effort.",
      "Built natural-language data exploration and analytics on Databricks (including Genie Space), letting stakeholders query enterprise data conversationally and accelerating reporting.",
      "Cut end-to-end pipeline latency from ~7 min to under 3 min (~57%) via ThreadPoolExecutor-based parallel retrieval, MySQL connection pooling, and vectorized I/O; debugged production issues across module-load ordering, IAM policies, and SigV4-authenticated service calls.",
      "Designed an enterprise Data Quality & Governance framework for a Fortune 500 pharma client spanning 12+ DQ dimensions across 5+ data domains; the architecture was adopted as the official client reference standard, reducing onboarding ambiguity ~45%.",
      "Built Python transformation engines over 100K+ row enterprise datasets using openpyxl and SHA-256 surrogate keys with NULL-collision-safe concatenation; validated LLM-generated JSON artifacts against source data to catch type-inference and template-expansion bugs.",
    ],
    stack: ["Python", "Agentic AI", "AWS AgentCore", "Claude AI", "Databricks (Genie Space)", "Amazon S3", "SQL", "ETL"],
  },
  {
    company: "Barclays UK",
    role: "Technology Developer Intern — Platform Services",
    location: "Northampton, United Kingdom",
    period: "Jun 2024 — Aug 2024",
    points: [
      "Built a full-stack expense tracker backend using Spring Boot, REST APIs, and MVC architecture with OOP principles; reduced backend latency ~30% via query optimization and improved retrieval ~25% across 6+ relational database schemas.",
      "Engineered Apache Kafka producer-consumer patterns for async, high-throughput transaction pipelines; implemented HELM CI/CD across 3 environments, cutting deployment overhead 40% while coordinating across cross-functional platform teams.",
    ],
    stack: ["Java", "Spring Boot", "REST API", "Apache Kafka", "HELM CI/CD", "SQL"],
  },
];

export const aiWork = {
  heading: "AI Training & Agent Tooling",
  intro:
    "Beyond shipping pipelines, I work directly on the data and tooling that shapes AI model behavior.",
  items: [
    {
      title: "Data annotation engineering (contract)",
      body: "Worked as a contract software engineer on data annotation tasks — building and refining the tooling, workflows, and quality checks that turn raw data into high-quality labeled datasets for LLM training and evaluation.",
    },
    {
      title: "Agent skill packages & workflows",
      body: "Author reusable skill packages and multi-step agent workflows that encapsulate tools and procedures for autonomous task execution, making agents more capable and repeatable.",
    },
    {
      title: "Research interests",
      body: "LLM evaluation, scalable oversight, and reinforcement-learning data quality — where careful data work has outsized impact on how models reason and behave.",
    },
  ],
};

export const projects = [
  {
    name: "Multi-Agent Orchestrator (Supervisor)",
    context: "ZS Associates · 2025–present",
    description:
      "Building the agentic backbone of a production system that autonomously turns raw meeting transcripts into structured artifacts — BRDs, DDL/DML, and ETL — already cutting cycle time ~70% and eliminating 60%+ manual effort. Designing and prototyping a supervisor orchestrator that decomposes goals, routes subtasks to specialized agents, and enforces human-in-the-loop checkpoints — paired with a growing library of reusable skill packages (tools + procedures agents load on demand) for a modular, extensible architecture.",
    stack: ["Claude AI", "AWS AgentCore", "LangGraph", "Python", "DynamoDB", "Amazon S3"],
    link: "https://www.linkedin.com/in/chahat-jain-633299228/",
  },
  {
    name: "WikiSearch — Hybrid Retrieval + RAG Engine",
    context: "Personal project · LLM / Search",
    description:
      "A question-answering search engine over Wikipedia that returns grounded, citation-backed answers. Pairs lexical BM25 with semantic embeddings — fused via Reciprocal Rank Fusion — alongside multi-query expansion for high-recall retrieval, then generates cited answers through a pluggable LLM backend (local Ollama in development, hosted Groq 70B in production). Built on a FastAPI service with a lightweight web UI, deployed live on Hugging Face Spaces, and hardened with retry/backoff for resilience against upstream API rate limits.",
    stack: ["Python", "FastAPI", "RAG", "BM25", "Embeddings", "Groq", "Hugging Face"],
    link: "https://github.com/CJ2708/wikisearch",
  },
  {
    name: "ApplyEngine — AI Job-Application Engine",
    context: "Personal project · Full-stack + AI",
    description:
      "A full-stack job-application accelerator: aggregates roles from real job-board APIs (Greenhouse, Lever, Ashby, Adzuna, Arbeitnow), then uses Claude to rank fit, tailor resumes and cover letters, and draft personalized outreach. Discovers hiring contacts from compliant sources, runs concurrent Playwright-assisted form-filling (review-first, with a learning autofill that remembers unknown fields), and parses visa-sponsorship signals to surface sponsoring roles first — all from a local dashboard.",
    stack: ["Node.js", "Express", "Claude API", "Playwright", "SQLite", "React", "Tailwind"],
    link: "https://github.com/CJ2708/JobApplyAutomation",
  },
  {
    name: "Expense Tracker — Full-Stack Backend",
    context: "Barclays UK · Internship",
    description:
      "Full-stack expense tracker built during a platform-services internship at Barclays. Engineered the Spring Boot + REST backend with MVC architecture, cutting backend latency ~30% via query optimization and improving retrieval ~25% across 6+ relational schemas. Added Apache Kafka producer-consumer pipelines for async transactions and shipped HELM CI/CD across 3 environments, cutting deployment overhead 40%.",
    stack: ["Java", "Spring Boot", "REST API", "Apache Kafka", "HELM CI/CD", "SQL"],
    link: "https://www.linkedin.com/in/chahat-jain-633299228/",
  },
  {
    name: "Vessel Vision — Object Detection",
    context: "Personal project · Computer Vision",
    description:
      "End-to-end computer-vision segmentation pipeline over 1,000+ images across 4+ architectures; reached 49.4% Average Precision and cut relative error rate by 16% via ensemble inference and rigorous evaluation.",
    stack: ["Python", "PyTorch", "MMDet", "OpenCV", "Deep Learning"],
    link: "https://github.com/CJ2708",
  },
  {
    name: "Placementor — Analytics Platform",
    context: "Top 5 · IIT(ISM) Coding Contest",
    description:
      "Full-stack placement-analytics platform for 500+ students with a RESTful API backend; built interactive dashboards across 50+ companies and reduced page load ~35% via caching and modular service architecture. Top 5 — IIT(ISM) Coding Contest.",
    stack: ["React.js", "Node.js", "REST API", "Sanity", "JavaScript"],
    link: "https://github.com/CJ2708",
  },
];

export const skills = [
  {
    group: "Data & Cloud",
    items: [
      "ETL Pipeline Design",
      "Databricks (Genie Space)",
      "DDL / DML",
      "Data Quality (DQ)",
      "Data Governance",
      "Data Lineage",
      "Apache Kafka",
      "Amazon S3",
      "AWS AgentCore",
      "DynamoDB",
      "Docker",
      "CI/CD",
    ],
  },
  {
    group: "AI & ML",
    items: [
      "Generative AI",
      "LLM Agents",
      "Agentic AI",
      "Claude API",
      "LLM Evaluation",
      "Deep Learning",
      "NLP",
      "BERT",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
    ],
  },
  {
    group: "Backend & Software",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST API Design",
      "MongoDB",
      "MVC Architecture",
      "Query Optimization",
      "Playwright",
      "React.js",
      "Git",
      "Postman",
    ],
  },
  {
    group: "Languages & Core CS",
    items: [
      "Python",
      "SQL",
      "Java",
      "C / C++",
      "JavaScript",
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "System Design",
    ],
  },
];

export const education = {
  school: "Indian Institute of Technology (IIT) Dhanbad",
  degree: "B.Tech in Computer Science & Engineering",
  location: "Dhanbad, Jharkhand",
  period: "May 2025",
  gpa: "GPA 7.15 / 10.00",
  achievements: [
    "AIR 2419 — JEE Mains (1.5M candidates, top 0.16%)",
    "AIR 3890 — JEE Advanced (200K candidates)",
    "Top 5 — IIT(ISM) Intra-College Coding Contest",
    "1st Runner-Up — Winter of Code, IIT(ISM)",
  ],
};
