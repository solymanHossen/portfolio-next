
export const personalInfo = {
  name: "Solyman Hossen",
  title: "Software Developer",
  tagline: "Building scalable systems with engineering precision",
  email: "solyman.dev@gmail.com",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  experience: "3+",
  education: "Honors in Bangla",
  availability: "Open to opportunities",
  currentFocus: "System Architecture & DevOps",
  primaryStack: "MERN",
  github: "https://github.com/solymanhossen",
  linkedin: "https://linkedin.com/in/solymanhossen",
  twitter: "https://twitter.com/solymanhossen",
};

export const stats = {
  projectsShipped: 24,
  systemsDesigned: 12,
  linesOfCode: "500K+",
  coffeeConsumed: 2847,
  uptimeAchieved: "99.9%",
  teamsCollaborated: 8,
};

export const philosophyCards = [
  {
    title: "Scalability First",
    description: "Every system I build is designed to handle 10x the current load without architectural changes.",
    icon: "scale",
  },
  {
    title: "Maintainability",
    description: "Code should read like well-written prose. Future developers (including myself) will thank me.",
    icon: "code",
  },
  {
    title: "Security by Design",
    description: "Security isn't a feature—it's a foundation. Every endpoint, every query, every input is validated.",
    icon: "shield",
  },
  {
    title: "Performance Obsession",
    description: "Milliseconds matter. I optimize for speed at every layer—from database queries to bundle size.",
    icon: "zap",
  },
];

export const skills = {
  frontend: {
    title: "Frontend Systems",
    color: "#00FFD4",
    items: [
      { name: "React", level: 95, years: 3 },
      { name: "Next.js", level: 90, years: 2 },
      { name: "TypeScript", level: 88, years: 2.5 },
      { name: "Tailwind CSS", level: 92, years: 3 },
      { name: "Redux/Zustand", level: 85, years: 2 },
    ],
  },
  backend: {
    title: "Backend Systems",
    color: "#A855F7",
    items: [
      { name: "Node.js", level: 92, years: 3 },
      { name: "Express.js", level: 90, years: 3 },
      { name: "NestJS", level: 78, years: 1 },
      { name: "REST APIs", level: 95, years: 3 },
      { name: "GraphQL", level: 75, years: 1.5 },
    ],
  },
  database: {
    title: "Data Layer",
    color: "#F59E0B",
    items: [
      { name: "MongoDB", level: 90, years: 3 },
      { name: "PostgreSQL", level: 82, years: 2 },
      { name: "Redis", level: 78, years: 1.5 },
      { name: "Mongoose/Prisma", level: 88, years: 2.5 },
    ],
  },
  devops: {
    title: "DevOps & Infra",
    color: "#EF4444",
    items: [
      { name: "Docker", level: 85, years: 2 },
      { name: "GitHub Actions", level: 88, years: 2 },
      { name: "Linux/Nginx", level: 82, years: 2.5 },
      { name: "AWS Basics", level: 70, years: 1.5 },
      { name: "CI/CD Pipelines", level: 85, years: 2 },
    ],
  },
};

export const experiences = [
  {
    id: "exp-1",
    role: "Senior Software Developer",
    company: "TechFlow Solutions",
    period: "2023 - Present",
    type: "Full-time",
    problems: [
      "Legacy monolith causing 30s+ page loads",
      "No automated testing or deployment pipeline",
      "Database queries timing out under moderate load",
    ],
    decisions: [
      "Architected microservices migration strategy",
      "Implemented comprehensive CI/CD with GitHub Actions",
      "Redesigned database schema with proper indexing",
    ],
    outcomes: [
      "Reduced page load to under 2 seconds (93% improvement)",
      "Zero-downtime deployments achieved",
      "Database query time reduced by 85%",
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "Docker", "Redis"],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "Digital Ventures BD",
    period: "2021 - 2023",
    type: "Full-time",
    problems: [
      "Manual deployment process taking 4+ hours",
      "No standardized code review process",
      "Inconsistent API design across teams",
    ],
    decisions: [
      "Built automated deployment pipeline",
      "Established PR review guidelines and tooling",
      "Created shared API design standards and documentation",
    ],
    outcomes: [
      "Deployment time reduced to 15 minutes",
      "Code quality score improved by 40%",
      "API consistency across 5 microservices",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "AWS"],
  },
  {
    id: "exp-3",
    role: "Junior Developer",
    company: "StartupHub Dhaka",
    period: "2020 - 2021",
    type: "Full-time",
    problems: [
      "Learning curve from Bangla studies to tech",
      "No mentor available for guidance",
      "Fast-paced startup environment",
    ],
    decisions: [
      "Self-taught through documentation and courses",
      "Built side projects to accelerate learning",
      "Proactively took on challenging features",
    ],
    outcomes: [
      "Promoted to mid-level within 8 months",
      "Shipped 5 production features solo",
      "Mentored 2 interns by end of tenure",
    ],
    techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Scalable multi-vendor marketplace handling 10K+ daily orders",
    context: "Client needed to migrate from Shopify to a custom solution for better control and lower costs.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "Docker"],
    architecture: {
      frontend: "Next.js with ISR for product pages",
      backend: "Express microservices with message queues",
      database: "PostgreSQL with Redis caching layer",
      auth: "JWT with refresh token rotation",
    },
    metrics: {
      users: "50K+",
      orders: "10K/day",
      uptime: "99.95%",
      loadTime: "1.2s",
    },
    tradeoffs: [
      "Chose PostgreSQL over MongoDB for complex relational queries",
      "Implemented eventual consistency for inventory updates",
      "SSR for SEO-critical pages, CSR for dashboard",
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    id: "project-2",
    title: "Real-time Analytics Dashboard",
    description: "Live data visualization platform processing 1M+ events daily",
    context: "SaaS company needed real-time insights without expensive third-party tools.",
    techStack: ["React", "D3.js", "Node.js", "ClickHouse", "WebSocket", "Kubernetes"],
    architecture: {
      frontend: "React with D3 for custom visualizations",
      backend: "Node.js event ingestion service",
      database: "ClickHouse for time-series data",
      realtime: "WebSocket for live updates",
    },
    metrics: {
      eventsPerDay: "1M+",
      latency: "<100ms",
      dashboards: "25+",
      users: "500",
    },
    tradeoffs: [
      "ClickHouse for analytics over PostgreSQL for speed",
      "Pre-aggregated data for common queries",
      "Graceful degradation for offline mode",
    ],
    category: "Data Engineering",
    featured: true,
  },
  {
    id: "project-3",
    title: "DevOps Automation Suite",
    description: "Internal tooling for CI/CD, monitoring, and infrastructure management",
    context: "Team was spending 40% of time on manual DevOps tasks.",
    techStack: ["Node.js", "Docker", "GitHub Actions", "Terraform", "Prometheus"],
    architecture: {
      pipeline: "GitHub Actions with matrix builds",
      infrastructure: "Terraform for IaC",
      monitoring: "Prometheus + Grafana stack",
      deployment: "Blue-green with Docker Swarm",
    },
    metrics: {
      deployTime: "8 min",
      buildSuccess: "98%",
      incidents: "-60%",
      productivity: "+35%",
    },
    tradeoffs: [
      "Docker Swarm over K8s for team size and complexity",
      "Self-hosted runners for sensitive codebases",
      "Progressive rollouts to minimize blast radius",
    ],
    category: "DevOps",
    featured: true,
  },
];

export const devopsPipeline = {
  stages: [
    { id: "commit", name: "Code Commit", icon: "git-commit", description: "Push to feature branch" },
    { id: "build", name: "Build & Lint", icon: "hammer", description: "TypeScript compile, ESLint checks" },
    { id: "test", name: "Test Suite", icon: "test-tube", description: "Unit, integration, E2E tests" },
    { id: "security", name: "Security Scan", icon: "shield-check", description: "SAST, dependency audit" },
    { id: "build-image", name: "Docker Build", icon: "container", description: "Multi-stage build optimization" },
    { id: "staging", name: "Staging Deploy", icon: "server", description: "Preview environment" },
    { id: "approval", name: "Manual Review", icon: "user-check", description: "PM/QA approval gate" },
    { id: "production", name: "Production", icon: "rocket", description: "Blue-green deployment" },
  ],
  environments: [
    { name: "Development", color: "#22C55E", description: "Local + CI" },
    { name: "Staging", color: "#F59E0B", description: "Pre-production" },
    { name: "Production", color: "#EF4444", description: "Live environment" },
  ],
};

export const systemDesigns = [
  {
    id: "design-1",
    title: "Scalable E-Commerce System",
    description: "High-availability shopping platform design",
    components: [
      "Load Balancer (Nginx)",
      "API Gateway",
      "User Service",
      "Product Service",
      "Order Service",
      "Payment Service",
      "Notification Service",
      "Cache Layer (Redis)",
      "Primary DB (PostgreSQL)",
      "Search Engine (Elasticsearch)",
      "Message Queue (RabbitMQ)",
      "CDN for Assets",
    ],
    considerations: [
      "Database sharding for products table",
      "Read replicas for high-traffic queries",
      "Event-driven order processing",
      "Circuit breaker for payment service",
    ],
  },
  {
    id: "design-2",
    title: "News Aggregation Platform",
    description: "Real-time content aggregation and delivery",
    components: [
      "RSS/API Scrapers",
      "Content Ingestion Queue",
      "NLP Processing Service",
      "Content Store (MongoDB)",
      "Recommendation Engine",
      "User Preference Store",
      "Push Notification Service",
      "CDN-backed API",
    ],
    considerations: [
      "Rate limiting for external APIs",
      "Duplicate detection with content hashing",
      "Personalization with collaborative filtering",
      "Edge caching for trending content",
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Scaling MERN Applications: Lessons from Production",
    excerpt: "Practical strategies for handling 10x traffic growth without rewriting your stack.",
    readTime: "12 min",
    date: "2024-01-15",
    tags: ["MERN", "Scaling", "Performance"],
    version: "2.1",
  },
  {
    id: "post-2",
    title: "GitOps for Small Teams: A Practical Guide",
    excerpt: "How to implement GitOps principles without enterprise-level complexity.",
    readTime: "8 min",
    date: "2024-01-02",
    tags: ["DevOps", "GitOps", "CI/CD"],
    version: "1.0",
  },
  {
    id: "post-3",
    title: "Building Type-Safe APIs with TypeScript and Zod",
    excerpt: "End-to-end type safety from database to frontend with zero runtime overhead.",
    readTime: "10 min",
    date: "2023-12-20",
    tags: ["TypeScript", "API Design", "Zod"],
    version: "1.2",
  },
];

export const careerPreferences = {
  roles: [
    { title: "Full Stack Developer", fit: 95 },
    { title: "Frontend Engineer", fit: 85 },
    { title: "Backend Engineer", fit: 88 },
    { title: "DevOps Engineer", fit: 75 },
  ],
  salaryRange: {
    min: 40000,
    max: 80000,
    currency: "USD",
    period: "year",
  },
  workPreference: "Remote-first",
  availableFrom: "Immediately",
  noticePeriod: "2 weeks",
  workingHours: "Flexible, prefer async communication",
};

export const navigationItems = [
  { id: "home", label: "Home", path: "/", shortcut: "H" },
  { id: "about", label: "About", path: "/about", shortcut: "A" },
  { id: "skills", label: "Skills", path: "/skills", shortcut: "S" },
  { id: "experience", label: "Experience", path: "/experience", shortcut: "E" },
  { id: "projects", label: "Projects", path: "/projects", shortcut: "P" },
  { id: "devops", label: "DevOps", path: "/devops", shortcut: "D" },
  { id: "blog", label: "Blog", path: "/blog", shortcut: "B" },
  { id: "contact", label: "Contact", path: "/contact", shortcut: "C" },
];
