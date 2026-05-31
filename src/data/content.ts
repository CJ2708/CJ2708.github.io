// Central content for the site. Edit here to update copy across the site.

export const site = {
  name: "Chahat Jain",
  role: "Data & ML Engineer",
  tagline:
    "I build agentic LLM pipelines, ETL infrastructure, and enterprise data-quality systems — turning ambiguous requirements into reliable, observable data products.",
  location: "India",
  email: "chahatjain2027@gmail.com",
  phone: "+91 78692 03072",
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
    "I'm a Data & ML Engineer with 1+ year of production experience architecting agentic LLM systems, designing ETL pipelines, and standing up enterprise Data Quality & Governance frameworks. I like the messy middle of engineering — taking vague requirements and turning them into scalable, auditable systems that teams actually trust.",
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
    role: "Data Engineer",
    location: "India",
    period: "Jun 2025 — Present",
    points: [
      "Architected a scalable multi-agent Claude AI pipeline on AWS AgentCore that processes meeting transcripts through human-in-the-loop checkpoints into structured artifacts — auto-generating DDL/DML, Data Quality scripts, and end-to-end ETL workflows on a versioned Amazon S3 layer, eliminating 60%+ manual effort and cutting cycle time ~70%.",
      "Cut end-to-end pipeline latency from ~7 min to under 3 min (~57%) via ThreadPoolExecutor-based parallel retrieval, MySQL connection pooling, and vectorized I/O; debugged production issues across module-load ordering, IAM policies, and SigV4-authenticated service calls.",
      "Designed an enterprise Data Quality & Governance framework for a Fortune 500 pharma client spanning 12+ DQ dimensions across 5+ data domains; the architecture was adopted as the official client reference standard, reducing onboarding ambiguity ~45%.",
      "Built Python transformation engines over 100K+ row enterprise datasets using openpyxl and SHA-256 surrogate keys with NULL-collision-safe concatenation; validated LLM-generated JSON artifacts against source data to catch type-inference and template-expansion bugs.",
    ],
    stack: ["Python", "AWS AgentCore", "Amazon S3", "Claude AI", "Databricks", "SQL", "ETL"],
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
    name: "EmotionLens — Sentiment Analysis",
    description:
      "NLP text classifier trained on 10,000+ tweets using BERT across 5+ model configurations; achieved 77.67% accuracy, outperforming a Naive Bayes baseline by ~12% through feature engineering and Information Retrieval techniques.",
    stack: ["Python", "BERT", "NLP", "Scikit-learn", "TF-IDF", "Pandas"],
    link: "https://github.com/CJ2708",
  },
  {
    name: "Vessel Vision — Object Detection",
    description:
      "End-to-end computer-vision segmentation pipeline over 1,000+ images across 4+ architectures; reached 49.4% Average Precision and cut relative error rate by 16% via ensemble inference and rigorous evaluation.",
    stack: ["Python", "PyTorch", "MMDet", "OpenCV", "Deep Learning"],
    link: "https://github.com/CJ2708",
  },
  {
    name: "Placementor — Analytics Platform",
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
