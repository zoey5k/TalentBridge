// TalentBridge FAQ Knowledge Base
// 80+ FAQs with categories, follow-ups, and keyword matching

export const faqCategories = [
  { id: "overview", label: "Company Overview", icon: "Building2" },
  { id: "recruitment", label: "Recruitment", icon: "Users" },
  { id: "features", label: "Platform Features", icon: "LayoutGrid" },
  { id: "candidates", label: "Candidate Management", icon: "UserCheck" },
  { id: "automation", label: "Workflow Automation", icon: "Workflow" },
  { id: "analytics", label: "Analytics", icon: "BarChart3" },
  { id: "microsoft", label: "Microsoft Integrations", icon: "Grid3x3" },
  { id: "security", label: "Security", icon: "ShieldCheck" },
  { id: "technology", label: "Technology", icon: "Cpu" },
  { id: "careers", label: "Careers", icon: "Briefcase" },
  { id: "roadmap", label: "Future Roadmap", icon: "Rocket" },
];

export const faqData = [
  // =========================
  // COMPANY OVERVIEW
  // =========================
  {
    id: "what-is-talentbridge",
    category: "overview",
    question: "What is TalentBridge?",
    keywords: ["what is", "talentbridge", "about", "platform", "overview"],
    answer:
      "TalentBridge is a modern Talent Acquisition CRM and Recruitment Management Platform built as part of a Microsoft-powered recruitment ecosystem. It digitizes and automates the entire recruitment lifecycle — from job requests and approvals to candidate management, interview scheduling, and analytics — while providing a seamless experience for recruiters, hiring managers, administrators, and candidates.",
    followUps: [
      "why-was-talentbridge-created",
      "what-challenges-does-it-solve",
      "who-is-it-designed-for",
    ],
  },
  {
    id: "why-was-talentbridge-created",
    category: "overview",
    question: "Why was TalentBridge created?",
    keywords: ["why", "created", "built", "purpose", "reason", "problem"],
    answer:
      "TalentBridge was created to transform recruitment through automation and Microsoft-powered solutions. Traditional recruitment processes are often manual, fragmented, and slow — involving scattered emails, spreadsheets, and disconnected tools. TalentBridge centralizes everything into one intelligent platform, reducing hiring time, improving candidate experience, and giving organizations full visibility into their recruitment pipeline.",
    followUps: [
      "what-is-talentbridge",
      "what-challenges-does-it-solve",
      "what-is-the-mission",
    ],
  },
  {
    id: "what-challenges-does-it-solve",
    category: "overview",
    question: "What challenges does TalentBridge solve?",
    keywords: ["challenges", "problems", "solve", "issues", "pain points"],
    answer:
      "TalentBridge solves several key recruitment challenges: 1) Manual and repetitive hiring workflows that slow down recruitment. 2) Lack of visibility into the recruitment pipeline. 3) Poor collaboration between recruiters and hiring managers. 4) Disconnected tools that fragment the hiring process. 5) Limited analytics for data-driven hiring decisions. 6) Inconsistent candidate experiences. By centralizing and automating these processes, TalentBridge makes recruitment faster, smarter, and more transparent.",
    followUps: [
      "what-is-talentbridge",
      "who-is-it-designed-for",
      "what-is-the-mission",
    ],
  },
  {
    id: "who-is-it-designed-for",
    category: "overview",
    question: "Who is TalentBridge designed for?",
    keywords: ["who", "designed for", "target", "users", "audience", "recruiters"],
    answer:
      "TalentBridge is designed for four key user groups: 1) Recruiters who manage candidates and pipelines. 2) Hiring Managers who submit job requests and collaborate on hiring decisions. 3) Administrators who oversee the platform, roles, and security. 4) Candidates who apply for positions and track their applications. It serves startups, growing companies, enterprises, and government organizations across Egypt and the region.",
    followUps: [
      "what-is-talentbridge",
      "what-are-the-pricing-plans",
      "what-is-the-vision",
    ],
  },
  {
    id: "what-is-the-mission",
    category: "overview",
    question: "What is TalentBridge's mission?",
    keywords: ["mission", "goal", "objective", "purpose"],
    answer:
      "TalentBridge's mission is to transform recruitment through automation and Microsoft-powered solutions. We aim to simplify and optimize the hiring journey by enabling organizations to manage recruitment pipelines efficiently, make data-driven decisions, and deliver exceptional candidate experiences.",
    followUps: ["what-is-the-vision", "what-is-talentbridge", "why-was-talentbridge-created"],
  },
  {
    id: "what-is-the-vision",
    category: "overview",
    question: "What is TalentBridge's vision?",
    keywords: ["vision", "future", "direction", "ambition"],
    answer:
      "TalentBridge's vision is to become the leading recruitment technology platform in Egypt and the region. We envision a future where every organization — regardless of size — has access to enterprise-grade recruitment tools powered by AI, automation, and the Microsoft ecosystem.",
    followUps: ["what-is-the-mission", "what-is-the-roadmap", "what-is-talentbridge"],
  },
  {
    id: "where-is-talentbridge-built",
    category: "overview",
    question: "Where is TalentBridge built?",
    keywords: ["where", "built", "egypt", "country", "location"],
    answer:
      "TalentBridge is proudly built in Egypt 🇪🇬. It is designed to serve organizations across Egypt and the broader Middle East region, with a focus on local hiring needs, compliance, and cultural context.",
    followUps: ["what-is-talentbridge", "what-is-the-vision", "who-is-it-designed-for"],
  },
  {
    id: "is-talentbridge-a-saas",
    category: "overview",
    question: "Is TalentBridge a SaaS product?",
    keywords: ["saas", "software", "cloud", "subscription", "product type"],
    answer:
      "Yes, TalentBridge is designed as a modern SaaS (Software as a Service) platform. It offers flexible subscription plans — Starter, Professional, and Enterprise — that scale with your organization's needs. The platform is cloud-ready and built on Microsoft technologies for reliability and security.",
    followUps: ["what-are-the-pricing-plans", "what-is-talentbridge", "what-tech-stack"],
  },

  // =========================
  // RECRUITMENT
  // =========================
  {
    id: "what-is-recruitment-flow",
    category: "recruitment",
    question: "How does the recruitment process work in TalentBridge?",
    keywords: ["recruitment", "process", "flow", "how", "work", "journey", "lifecycle"],
    answer:
      "TalentBridge follows a 7-step recruitment journey: 1) Job Request — hiring managers submit a recruitment request. 2) Approval — department approval through workflow automation. 3) Publishing — the position is automatically posted to the careers portal. 4) Applications — candidates apply directly through TalentBridge. 5) Screening — automated filtering and HR shortlisting. 6) Interviews — scheduling through Microsoft Teams. 7) Hiring — final offer and onboarding workflow.",
    followUps: [
      "how-do-job-requests-work",
      "how-does-screening-work",
      "how-are-interviews-scheduled",
    ],
  },
  {
    id: "how-do-job-requests-work",
    category: "recruitment",
    question: "How do job requests work?",
    keywords: ["job request", "request", "create job", "new position", "hiring request"],
    answer:
      "Hiring managers submit recruitment requests through Power Apps interfaces. Each request includes job details, department, required skills, and headcount. The request then enters an automated approval workflow powered by Power Automate, where department heads can review and approve. Once approved, the position is automatically published to the TalentBridge careers portal.",
    followUps: ["what-is-recruitment-flow", "how-do-approvals-work", "how-does-publishing-work"],
  },
  {
    id: "how-do-approvals-work",
    category: "recruitment",
    question: "How do approval workflows work?",
    keywords: ["approval", "workflow", "approve", "reject", "department"],
    answer:
      "Approval workflows are powered by Microsoft Power Automate. When a hiring manager submits a job request, it automatically routes to the appropriate department head for review. Approvers receive notifications via Outlook and Teams, can approve or reject with comments, and the system automatically updates the request status. This eliminates manual follow-ups and accelerates the hiring start date.",
    followUps: ["how-do-job-requests-work", "does-it-use-power-automate", "what-is-recruitment-flow"],
  },
  {
    id: "how-does-publishing-work",
    category: "recruitment",
    question: "How does job publishing work?",
    keywords: ["publish", "posting", "careers portal", "job board", "listing"],
    answer:
      "Once a job request is approved, TalentBridge automatically publishes the position to the careers portal. The job listing includes the title, description, department, location, and job level. Candidates can then view and apply for the position directly through the public careers page. All listings are dynamically loaded from SharePoint, ensuring real-time accuracy.",
    followUps: ["how-do-candidates-apply", "what-is-recruitment-flow", "how-does-sharepoint-work"],
  },
  {
    id: "how-does-screening-work",
    category: "recruitment",
    question: "How does candidate screening work?",
    keywords: ["screening", "filter", "shortlist", "review", "qualify"],
    answer:
      "TalentBridge provides automated filtering and HR shortlisting capabilities. Recruiters can filter candidates by skills, experience, education, and other criteria. The platform highlights top matches and allows recruiters to shortlist, reject, or move candidates through pipeline stages. In the Enterprise plan, AI-powered candidate screening further automates this process by ranking candidates based on job requirements.",
    followUps: ["what-is-recruitment-flow", "what-ai-features-exist", "how-does-candidate-matching-work"],
  },
  {
    id: "how-long-does-recruitment-take",
    category: "recruitment",
    question: "How long does the recruitment process take?",
    keywords: ["how long", "time", "duration", "fast", "speed", "timeline"],
    answer:
      "TalentBridge significantly reduces hiring time compared to traditional methods. With automated approvals, instant job publishing, and streamlined screening, most positions can move from request to hire in 2-4 weeks — compared to 6-8 weeks with manual processes. The exact timeline depends on the role, number of applicants, and interview availability, but the platform's automation removes bottlenecks at every stage.",
    followUps: ["what-is-recruitment-flow", "how-does-screening-work", "how-are-interviews-scheduled"],
  },
  {
    id: "can-recruiters-collaborate",
    category: "recruitment",
    question: "Can recruiters collaborate with hiring managers?",
    keywords: ["collaborate", "collaboration", "hiring manager", "team", "work together"],
    answer:
      "Yes, TalentBridge is built for collaboration. Recruiters and hiring managers can share candidate profiles, leave feedback and ratings, communicate through Microsoft Teams integration, and jointly make hiring decisions. Hiring managers have visibility into the pipeline for their roles and receive automated updates at every stage. This ensures alignment and speeds up decision-making.",
    followUps: ["does-it-integrate-with-teams", "what-is-recruitment-flow", "how-do-approvals-work"],
  },

  // =========================
  // PLATFORM FEATURES
  // =========================
  {
    id: "what-are-the-main-features",
    category: "features",
    question: "What are the main features of TalentBridge?",
    keywords: ["features", "capabilities", "what can", "functionality", "tools"],
    answer:
      "TalentBridge offers four core feature pillars: 1) Smart Automation — automate recruitment workflows using Power Automate. 2) Faster Hiring — accelerate approvals and hiring processes. 3) Recruitment Analytics — gain hiring insights with Power BI dashboards. 4) Microsoft Ecosystem — integrated with Teams, SharePoint, Outlook, and Power BI. Additional features include recruitment requests, candidate management, interview scheduling, hiring workflows, and role-based access control.",
    followUps: ["what-is-smart-automation", "what-analytics-are-available", "what-microsoft-integrations"],
  },
  {
    id: "what-is-smart-automation",
    category: "features",
    question: "What is Smart Automation?",
    keywords: ["smart automation", "automation", "automate", "power automate", "workflow"],
    answer:
      "Smart Automation is TalentBridge's workflow engine powered by Microsoft Power Automate. It automates repetitive recruitment tasks such as approval routing, job publishing, candidate notifications, interview reminders, and status updates. This eliminates manual work, reduces errors, and ensures every step of the recruitment process happens consistently and on time.",
    followUps: ["does-it-use-power-automate", "what-are-the-main-features", "what-automation-examples"],
  },
  {
    id: "what-automation-examples",
    category: "features",
    question: "What are examples of automated workflows?",
    keywords: ["examples", "automation", "use cases", "workflows", "automated"],
    answer:
      "TalentBridge automates workflows such as: 1) Job request approval routing to department heads. 2) Automatic job posting to the careers portal upon approval. 3) Candidate application confirmation emails via Outlook. 4) Interview scheduling and Teams meeting creation. 5) Automated reminders to candidates and interviewers. 6) Status update notifications to hiring managers. 7) Rejection and offer emails. All of these run automatically through Power Automate.",
    followUps: ["what-is-smart-automation", "does-it-use-power-automate", "does-it-integrate-with-outlook"],
  },
  {
    id: "can-dashboards-be-customized",
    category: "features",
    question: "Can dashboards be customized?",
    keywords: ["dashboard", "customize", "custom", "personalize", "power bi"],
    answer:
      "Yes, TalentBridge dashboards are built on Power BI and are fully customizable. Organizations can create custom KPIs, charts, and reports tailored to their recruitment goals. The Enterprise plan includes custom dashboard design, while the Professional plan includes pre-built recruitment dashboards. Recruiters can filter data by department, role, timeframe, and more.",
    followUps: ["what-analytics-are-available", "what-are-the-main-features", "what-are-the-pricing-plans"],
  },
  {
    id: "what-are-platform-highlights",
    category: "features",
    question: "What are the platform highlights?",
    keywords: ["highlights", "key features", "platform", "capabilities", "modules"],
    answer:
      "TalentBridge's platform highlights include: Recruitment Requests, Candidate Management, Interview Scheduling, Analytics, Automation, and Hiring Workflows. Each module is designed to work independently or as part of the integrated recruitment lifecycle, giving organizations flexibility in how they adopt the platform.",
    followUps: ["what-are-the-main-features", "what-is-recruitment-flow", "how-does-candidate-management-work"],
  },

  // =========================
  // CANDIDATE MANAGEMENT
  // =========================
  {
    id: "how-does-candidate-management-work",
    category: "candidates",
    question: "How does candidate management work?",
    keywords: ["candidate management", "manage candidates", "candidate", "pipeline", "tracking"],
    answer:
      "TalentBridge provides a centralized candidate management system. All candidate data — including applications, resumes, contact info, skills, and interview history — is stored securely in SharePoint. Recruiters can view candidate profiles, move candidates through pipeline stages (Applied → Screened → Interviewed → Offered → Hired), leave notes and ratings, and track progress in real-time. The system ensures no candidate falls through the cracks.",
    followUps: ["how-do-candidates-apply", "can-i-track-my-application", "how-does-screening-work"],
  },
  {
    id: "how-do-candidates-apply",
    category: "candidates",
    question: "How do candidates apply for jobs?",
    keywords: ["apply", "application", "how to apply", "candidate", "submit"],
    answer:
      "Candidates apply directly through the TalentBridge careers portal. They browse open positions, click 'Apply Now,' and fill out an application form with their personal information, education, experience, skills, and CV upload. The application is submitted through a secure Power Automate flow that stores the data in SharePoint. Candidates receive an automatic confirmation email upon submission.",
    followUps: ["can-i-track-my-application", "how-does-candidate-management-work", "how-does-publishing-work"],
  },
  {
    id: "can-i-track-my-application",
    category: "candidates",
    question: "Can candidates track their application status?",
    keywords: ["track", "status", "application", "my application", "follow up"],
    answer:
      "Yes, TalentBridge provides application tracking. Candidates receive automated email updates at each stage of the recruitment process — from application received, to screening, interview scheduling, and final decision. This keeps candidates informed and engaged throughout the journey, improving the overall candidate experience.",
    followUps: ["how-do-candidates-apply", "how-does-candidate-management-work", "how-long-does-recruitment-take"],
  },
  {
    id: "is-candidate-data-secure",
    category: "candidates",
    question: "Is candidate information secure?",
    keywords: ["secure", "security", "candidate data", "privacy", "protection"],
    answer:
      "Absolutely. Candidate data is stored securely in Microsoft SharePoint with enterprise-grade encryption. Access is controlled through role-based permissions — only authorized recruiters and hiring managers can view candidate information. The platform follows Microsoft's security and compliance standards, ensuring data privacy and protection at every level.",
    followUps: ["how-is-access-controlled", "how-does-sharepoint-work", "what-security-measures"],
  },
  {
    id: "what-candidate-pipeline-stages",
    category: "candidates",
    question: "What are the candidate pipeline stages?",
    keywords: ["pipeline", "stages", "status", "steps", "candidate journey"],
    answer:
      "TalentBridge uses a structured candidate pipeline: Applied → Screened → Shortlisted → Interviewed → Offered → Hired (or Rejected at any stage). Recruiters can move candidates between stages, add notes, and trigger automated notifications. This gives full visibility into where each candidate is in the process and helps identify bottlenecks.",
    followUps: ["how-does-candidate-management-work", "how-does-screening-work", "what-is-recruitment-flow"],
  },

  // =========================
  // WORKFLOW AUTOMATION
  // =========================
  {
    id: "does-it-use-power-automate",
    category: "automation",
    question: "Does TalentBridge use Power Automate?",
    keywords: ["power automate", "automate", "flow", "workflow", "automation"],
    answer:
      "Yes, Microsoft Power Automate is a core component of TalentBridge. It powers all workflow automation — from job request approvals and job publishing to candidate notifications, interview scheduling, and status updates. Power Automate connects TalentBridge's various components and ensures the recruitment process flows seamlessly without manual intervention.",
    followUps: ["what-is-smart-automation", "what-automation-examples", "what-microsoft-integrations"],
  },
  {
    id: "what-can-be-automated",
    category: "automation",
    question: "What recruitment tasks can be automated?",
    keywords: ["automate", "tasks", "automated", "what can", "automation"],
    answer:
      "TalentBridge can automate: job request approvals, job posting and publishing, application confirmation emails, candidate screening notifications, interview scheduling with Teams, reminder emails to candidates and interviewers, hiring manager status updates, offer letters, rejection notifications, and onboarding workflows. The Enterprise plan supports custom workflow design for organization-specific processes.",
    followUps: ["does-it-use-power-automate", "what-automation-examples", "what-are-the-pricing-plans"],
  },
  {
    id: "can-workflows-be-customized",
    category: "automation",
    question: "Can workflows be customized?",
    keywords: ["custom workflow", "customize", "custom", "workflow design", "tailor"],
    answer:
      "Yes. The Enterprise plan includes custom workflow design, allowing organizations to tailor approval chains, notification rules, and pipeline stages to their specific processes. Workflows are built on Power Automate, which provides a visual designer for creating and modifying flows without extensive coding.",
    followUps: ["does-it-use-power-automate", "what-are-the-pricing-plans", "what-can-be-automated"],
  },
  {
    id: "how-do-automated-notifications-work",
    category: "automation",
    question: "How do automated notifications work?",
    keywords: ["notifications", "alerts", "email", "remind", "notify"],
    answer:
      "TalentBridge sends automated notifications through Outlook and Microsoft Teams at key recruitment milestones. Candidates receive application confirmations, interview invitations, and status updates. Hiring managers receive approval requests and pipeline updates. Recruiters receive new application alerts. All notifications are triggered automatically by Power Automate workflows — no manual sending required.",
    followUps: ["does-it-integrate-with-outlook", "does-it-integrate-with-teams", "what-automation-examples"],
  },

  // =========================
  // ANALYTICS
  // =========================
  {
    id: "what-analytics-are-available",
    category: "analytics",
    question: "What analytics and insights does TalentBridge provide?",
    keywords: ["analytics", "insights", "reports", "data", "metrics", "kpi"],
    answer:
      "TalentBridge provides comprehensive recruitment analytics powered by Power BI. Key metrics include: time-to-hire, cost-per-hire, application volume, candidate pipeline conversion rates, source effectiveness, department-wise hiring, diversity metrics, and recruiter performance. Dashboards are interactive, filterable, and can be customized to track organization-specific KPIs.",
    followUps: ["can-dashboards-be-customized", "what-are-the-main-features", "what-is-power-bi"],
  },
  {
    id: "what-is-power-bi",
    category: "analytics",
    question: "How does Power BI integration work?",
    keywords: ["power bi", "bi", "business intelligence", "dashboards", "reports"],
    answer:
      "Power BI is TalentBridge's analytics engine. It connects to recruitment data stored in SharePoint and transforms it into interactive dashboards and reports. Recruiters and managers can visualize hiring trends, track KPIs in real-time, drill down into specific metrics, and export reports. Power BI dashboards are embedded within the TalentBridge platform for seamless access.",
    followUps: ["what-analytics-are-available", "can-dashboards-be-customized", "what-microsoft-integrations"],
  },
  {
    id: "can-i-export-reports",
    category: "analytics",
    question: "Can I export analytics reports?",
    keywords: ["export", "reports", "download", "pdf", "excel", "share"],
    answer:
      "Yes, Power BI integration allows you to export reports in multiple formats including PDF, Excel, and PowerPoint. You can also schedule automated report delivery via email and share dashboards with stakeholders who don't have direct platform access. This makes it easy to present recruitment insights to leadership and stakeholders.",
    followUps: ["what-analytics-are-available", "what-is-power-bi", "can-dashboards-be-customized"],
  },
  {
    id: "what-kpis-are-tracked",
    category: "analytics",
    question: "What KPIs does TalentBridge track?",
    keywords: ["kpi", "metrics", "track", "measure", "indicators"],
    answer:
      "TalentBridge tracks key recruitment KPIs including: Time-to-Hire, Cost-per-Hire, Application Volume, Pipeline Conversion Rates, Offer Acceptance Rate, Source of Hire, Candidate Drop-off Rate, Diversity Metrics, Department Hiring Velocity, and Recruiter Performance. These KPIs help organizations measure and optimize their recruitment effectiveness.",
    followUps: ["what-analytics-are-available", "what-is-power-bi", "can-dashboards-be-customized"],
  },

  // =========================
  // MICROSOFT INTEGRATIONS
  // =========================
  {
    id: "what-microsoft-integrations",
    category: "microsoft",
    question: "What Microsoft integrations does TalentBridge have?",
    keywords: ["microsoft", "integrations", "ecosystem", "power apps", "sharepoint", "teams", "outlook", "power bi"],
    answer:
      "TalentBridge is built entirely on the Microsoft ecosystem and integrates with: 1) Power Apps — for creating and managing recruitment requests. 2) SharePoint — for centralized HR and candidate data storage. 3) Power Automate — for automating approvals and workflows. 4) Microsoft Teams — for interview scheduling and collaboration. 5) Power BI — for recruitment analytics and KPIs. 6) Outlook — for automated interview and hiring emails. 7) Microsoft 365 — for identity, security, and productivity.",
    followUps: ["does-it-integrate-with-teams", "does-it-integrate-with-outlook", "how-does-sharepoint-work"],
  },
  {
    id: "does-it-integrate-with-teams",
    category: "microsoft",
    question: "Does TalentBridge integrate with Microsoft Teams?",
    keywords: ["teams", "integrate", "microsoft teams", "chat", "collaboration", "interview"],
    answer:
      "Yes, Microsoft Teams integration is a core feature. Teams is used for interview scheduling and collaboration. When an interview is scheduled, a Teams meeting is automatically created with a video link. Recruiters and hiring managers can also collaborate on candidates through Teams channels, share feedback, and make hiring decisions together — all without leaving the Teams environment.",
    followUps: ["how-are-interviews-scheduled", "can-recruiters-collaborate", "what-microsoft-integrations"],
  },
  {
    id: "does-it-integrate-with-outlook",
    category: "microsoft",
    question: "Does TalentBridge integrate with Outlook?",
    keywords: ["outlook", "email", "integrate", "microsoft outlook", "mail"],
    answer:
      "Yes, Outlook integration powers all automated email communications. TalentBridge sends application confirmations, interview invitations, status updates, offer letters, and rejection notifications through Outlook. This ensures candidates and stakeholders receive timely, professional communications, and all correspondence is tracked within the Microsoft 365 ecosystem.",
    followUps: ["how-do-automated-notifications-work", "what-microsoft-integrations", "does-it-use-power-automate"],
  },
  {
    id: "does-it-use-power-apps",
    category: "microsoft",
    question: "Does TalentBridge use Power Apps?",
    keywords: ["power apps", "powerapps", "apps", "interface", "forms"],
    answer:
      "Yes, Power Apps is used to create and manage recruitment request interfaces. Hiring managers use Power Apps forms to submit job requests with all required details. Power Apps provides a user-friendly, mobile-responsive interface that connects directly to SharePoint and Power Automate, enabling seamless data flow across the recruitment lifecycle.",
    followUps: ["how-do-job-requests-work", "what-microsoft-integrations", "how-does-sharepoint-work"],
  },
  {
    id: "how-does-sharepoint-work",
    category: "microsoft",
    question: "How does SharePoint integration work?",
    keywords: ["sharepoint", "storage", "data", "documents", "lists"],
    answer:
      "SharePoint serves as TalentBridge's centralized data backbone. All recruitment data — job listings, candidate applications, resumes, approval records, and pipeline statuses — is stored in SharePoint lists and document libraries. This provides enterprise-grade security, version history, access control, and seamless integration with other Microsoft 365 services. SharePoint ensures data is always available, organized, and compliant.",
    followUps: ["is-candidate-data-secure", "what-microsoft-integrations", "how-does-publishing-work"],
  },
  {
    id: "does-it-integrate-with-m365",
    category: "microsoft",
    question: "Does TalentBridge integrate with Microsoft 365?",
    keywords: ["microsoft 365", "m365", "office 365", "o365", "suite"],
    answer:
      "Yes, TalentBridge is fully integrated with Microsoft 365. This includes single sign-on (SSO) through Microsoft Entra ID (Azure AD), email through Outlook, collaboration through Teams, file storage through SharePoint and OneDrive, analytics through Power BI, and automation through Power Automate. The deep M365 integration means organizations can adopt TalentBridge using their existing Microsoft infrastructure.",
    followUps: ["what-microsoft-integrations", "how-is-access-controlled", "what-tech-stack"],
  },
  {
    id: "is-it-built-on-microsoft",
    category: "microsoft",
    question: "Is TalentBridge built entirely on Microsoft technologies?",
    keywords: ["built on", "microsoft", "technologies", "stack", "powered"],
    answer:
      "Yes, TalentBridge is built entirely using Microsoft technologies. The backend relies on SharePoint, Power Automate, and Power Apps. Analytics are powered by Power BI. Communication uses Outlook and Teams. Identity and security leverage Microsoft 365 and Entra ID. The frontend is built with React, but all data, workflows, and integrations are Microsoft-powered.",
    followUps: ["what-microsoft-integrations", "what-tech-stack", "what-is-talentbridge"],
  },

  // =========================
  // SECURITY
  // =========================
  {
    id: "what-security-measures",
    category: "security",
    question: "What security measures does TalentBridge have?",
    keywords: ["security", "measures", "protection", "safe", "secure"],
    answer:
      "TalentBridge leverages Microsoft's enterprise-grade security infrastructure. This includes: data encryption at rest and in transit, role-based access control (RBAC), multi-factor authentication through Microsoft Entra ID, audit logs for all actions, data loss prevention policies, and compliance with Microsoft 365 security standards. Candidate data is stored securely in SharePoint with granular permissions.",
    followUps: ["how-is-access-controlled", "is-candidate-data-secure", "does-it-integrate-with-m365"],
  },
  {
    id: "how-is-access-controlled",
    category: "security",
    question: "How is access controlled?",
    keywords: ["access", "control", "permissions", "roles", "rbac", "authorization"],
    answer:
      "TalentBridge uses role-based access control (RBAC). Different user roles — Recruiters, Hiring Managers, Administrators, and Candidates — have different permission levels. Administrators can configure who sees what data, which actions each role can perform, and which pipeline stages they can access. Access is managed through Microsoft Entra ID (Azure AD) and SharePoint permissions, ensuring enterprise-grade security.",
    followUps: ["what-security-measures", "who-is-it-designed-for", "does-it-integrate-with-m365"],
  },
  {
    id: "is-data-encrypted",
    category: "security",
    question: "Is data encrypted?",
    keywords: ["encryption", "encrypted", "encrypt", "data protection"],
    answer:
      "Yes, all data in TalentBridge is encrypted both at rest and in transit. SharePoint provides encryption at rest by default, and all data transfers use HTTPS/TLS encryption. This is part of Microsoft 365's built-in security infrastructure, which meets industry standards for data protection and compliance.",
    followUps: ["what-security-measures", "is-candidate-data-secure", "how-is-access-controlled"],
  },
  {
    id: "does-it-support-mfa",
    category: "security",
    question: "Does TalentBridge support multi-factor authentication?",
    keywords: ["mfa", "multi-factor", "authentication", "2fa", "two-factor", "login"],
    answer:
      "Yes, TalentBridge supports multi-factor authentication through Microsoft Entra ID (formerly Azure AD). Organizations can enforce MFA for all users, adding an extra layer of security beyond passwords. This is especially important for protecting sensitive candidate data and ensuring only authorized personnel access the recruitment platform.",
    followUps: ["how-is-access-controlled", "what-security-measures", "does-it-integrate-with-m365"],
  },
  {
    id: "are-there-audit-logs",
    category: "security",
    question: "Does TalentBridge keep audit logs?",
    keywords: ["audit", "logs", "tracking", "history", "compliance"],
    answer:
      "Yes, TalentBridge maintains comprehensive audit logs through SharePoint and Microsoft 365. All actions — including who viewed, edited, or deleted candidate data, who approved requests, and who changed pipeline statuses — are logged with timestamps. This supports compliance requirements and provides full traceability of recruitment activities.",
    followUps: ["what-security-measures", "how-is-access-controlled", "is-data-encrypted"],
  },

  // =========================
  // TECHNOLOGY
  // =========================
  {
    id: "what-tech-stack",
    category: "technology",
    question: "What technology stack does TalentBridge use?",
    keywords: ["tech stack", "technology", "stack", "framework", "tools", "built with"],
    answer:
      "TalentBridge's frontend is built with React, Vite, React Router, and CSS. The backend and integrations rely entirely on Microsoft technologies: SharePoint for data storage, Power Automate for workflow automation, Power Apps for request interfaces, Power BI for analytics, Microsoft Teams for collaboration, and Outlook for communications. The platform also uses Microsoft Entra ID for identity and security.",
    followUps: ["is-it-built-on-microsoft", "what-microsoft-integrations", "is-talentbridge-a-saas"],
  },
  {
    id: "what-frontend-framework",
    category: "technology",
    question: "What frontend framework is used?",
    keywords: ["frontend", "react", "framework", "ui", "vite"],
    answer:
      "TalentBridge's frontend is built with React (using Vite as the build tool) and React Router for navigation. The UI is styled with custom CSS following a premium SaaS design language. The frontend communicates with Microsoft Power Automate endpoints for data retrieval and submission, ensuring a smooth user experience while leveraging the Microsoft backend.",
    followUps: ["what-tech-stack", "is-it-built-on-microsoft", "what-is-talentbridge"],
  },
  {
    id: "how-does-data-flow",
    category: "technology",
    question: "How does data flow through the platform?",
    keywords: ["data flow", "architecture", "how data", "flow", "backend"],
    answer:
      "Data flows through TalentBridge as follows: Hiring managers submit requests via Power Apps → data stored in SharePoint → Power Automate triggers approval workflows → approved jobs published to the React frontend → candidates apply through the careers portal → applications submitted via Power Automate to SharePoint → recruiters manage candidates → analytics pulled from SharePoint into Power BI dashboards. All components are connected through the Microsoft ecosystem.",
    followUps: ["how-does-sharepoint-work", "does-it-use-power-automate", "what-tech-stack"],
  },
  {
    id: "is-it-cloud-based",
    category: "technology",
    question: "Is TalentBridge cloud-based?",
    keywords: ["cloud", "cloud-based", "hosting", "deployment", "online"],
    answer:
      "Yes, TalentBridge is cloud-based. The Microsoft backend (SharePoint, Power Automate, Power BI) runs on Microsoft Cloud. The React frontend can be deployed to any cloud hosting provider. This cloud-native architecture ensures scalability, accessibility from anywhere, automatic updates, and reduced IT infrastructure costs.",
    followUps: ["what-tech-stack", "is-talentbridge-a-saas", "what-microsoft-integrations"],
  },
  {
    id: "does-it-support-mobile",
    category: "technology",
    question: "Is TalentBridge mobile-responsive?",
    keywords: ["mobile", "responsive", "phone", "tablet", "device"],
    answer:
      "Yes, TalentBridge is fully responsive and works seamlessly across mobile phones, tablets, laptops, desktops, and ultra-wide displays. The careers portal and application forms are optimized for mobile use, ensuring candidates can apply from any device. Power Apps interfaces are also mobile-responsive by design.",
    followUps: ["what-tech-stack", "what-frontend-framework", "what-is-talentbridge"],
  },

  // =========================
  // CAREERS
  // =========================
  {
    id: "how-do-i-apply",
    category: "careers",
    question: "How do I apply for a job?",
    keywords: ["how do i apply", "apply", "application", "submit", "job"],
    answer:
      "To apply for a job on TalentBridge: 1) Visit the Careers page. 2) Browse open positions. 3) Click 'Apply Now' on the role you're interested in. 4) Fill out the application form with your personal info, education, experience, and skills. 5) Upload your CV (PDF, DOC, or DOCX). 6) Submit. You'll receive a confirmation email, and our team will review your application.",
    followUps: ["can-i-track-my-application", "how-long-does-recruitment-take", "what-format-cv"],
  },
  {
    id: "what-format-cv",
    category: "careers",
    question: "What file formats are accepted for CV upload?",
    keywords: ["cv", "resume", "file", "format", "upload", "pdf", "doc"],
    answer:
      "TalentBridge accepts CV uploads in PDF, DOC, and DOCX formats. We recommend uploading a PDF for the best compatibility. Your CV is securely stored in SharePoint and is only accessible to authorized recruitment personnel.",
    followUps: ["how-do-i-apply", "is-candidate-data-secure", "can-i-track-my-application"],
  },
  {
    id: "what-if-no-jobs",
    category: "careers",
    question: "What if there are no open positions?",
    keywords: ["no jobs", "no positions", "no openings", "empty", "nothing"],
    answer:
      "If there are no active positions at the moment, please check back again soon. TalentBridge's careers page is dynamically updated in real-time from SharePoint, so new positions appear as soon as they're approved. You can also follow TalentBridge for updates on new opportunities.",
    followUps: ["how-do-i-apply", "how-does-publishing-work", "what-is-talentbridge"],
  },
  {
    id: "can-i-apply-multiple",
    category: "careers",
    question: "Can I apply for multiple positions?",
    keywords: ["multiple", "more than one", "several", "different jobs"],
    answer:
      "Yes, you can apply for multiple positions on TalentBridge. Each application is submitted separately for the specific role you're interested in. Our recruitment team will review each application independently and match you to the most suitable opportunity based on your qualifications.",
    followUps: ["how-do-i-apply", "can-i-track-my-application", "how-long-does-recruitment-take"],
  },
  {
    id: "do-i-need-account",
    category: "careers",
    question: "Do I need an account to apply?",
    keywords: ["account", "register", "sign up", "login", "create account"],
    answer:
      "No, you don't need an account to apply for jobs on TalentBridge. The careers portal is open and accessible to everyone. Simply browse open positions and click 'Apply Now' to submit your application directly. This removes friction and makes it as easy as possible for candidates to apply.",
    followUps: ["how-do-i-apply", "can-i-track-my-application", "what-format-cv"],
  },

  // =========================
  // FUTURE ROADMAP
  // =========================
  {
    id: "what-is-the-roadmap",
    category: "roadmap",
    question: "What is TalentBridge's future roadmap?",
    keywords: ["roadmap", "future", "plans", "upcoming", "next"],
    answer:
      "TalentBridge's roadmap focuses on AI-powered recruitment intelligence. Key upcoming features include: AI Resume Parsing, AI Candidate Matching, AI Screening, and Predictive Analytics. We're also expanding Microsoft ecosystem integrations, enhancing the candidate experience, and scaling the platform to serve more organizations across Egypt and the region.",
    followUps: ["what-ai-features-exist", "what-is-the-vision", "what-ai-resume-parsing"],
  },
  {
    id: "what-ai-features-exist",
    category: "roadmap",
    question: "What AI features are planned?",
    keywords: ["ai", "artificial intelligence", "features", "planned", "future ai"],
    answer:
      "TalentBridge is developing several AI features: 1) AI Resume Parsing — automatically extract skills, experience, and education from resumes. 2) AI Candidate Matching — rank candidates against job requirements using ML algorithms. 3) AI Screening — automated candidate qualification and shortlisting. 4) Predictive Analytics — forecast hiring outcomes and identify the best candidates. These features will make recruitment even faster and more intelligent.",
    followUps: ["what-ai-resume-parsing", "how-does-candidate-matching-work", "what-ai-screening"],
  },
  {
    id: "what-ai-resume-parsing",
    category: "roadmap",
    question: "What is AI Resume Parsing?",
    keywords: ["resume parsing", "parsing", "extract", "ai resume", "cv parsing"],
    answer:
      "AI Resume Parsing is an upcoming feature that uses natural language processing (NLP) to automatically extract structured data from candidate resumes. It identifies skills, work experience, education, certifications, and contact information — eliminating manual data entry and enabling faster, more accurate candidate screening. This will significantly speed up the screening process.",
    followUps: ["what-ai-features-exist", "how-does-screening-work", "what-ai-screening"],
  },
  {
    id: "how-does-candidate-matching-work",
    category: "roadmap",
    question: "How will AI Candidate Matching work?",
    keywords: ["candidate matching", "matching", "ai match", "fit", "score"],
    answer:
      "AI Candidate Matching will use machine learning to compare candidate profiles against job requirements and generate a match score. The system analyzes skills, experience, education, and other factors to rank candidates by suitability. This helps recruiters focus on the most promising candidates first, reducing time-to-hire and improving quality of hire.",
    followUps: ["what-ai-features-exist", "how-does-screening-work", "what-ai-screening"],
  },
  {
    id: "what-ai-screening",
    category: "roadmap",
    question: "What is AI Screening?",
    keywords: ["ai screening", "screening", "automated screening", "ai filter"],
    answer:
      "AI Screening is an upcoming feature that automates the initial candidate qualification process. Using AI, the platform will analyze applications against job criteria, automatically filter out unqualified candidates, and shortlist the most promising ones. This reduces manual screening effort by up to 70% and ensures no qualified candidate is overlooked.",
    followUps: ["what-ai-features-exist", "how-does-screening-work", "how-does-candidate-matching-work"],
  },
  {
    id: "what-predictive-analytics",
    category: "roadmap",
    question: "What are Predictive Analytics in recruitment?",
    keywords: ["predictive", "analytics", "forecast", "predict", "ai analytics"],
    answer:
      "Predictive Analytics will use historical recruitment data and machine learning to forecast hiring outcomes. This includes predicting time-to-fill for specific roles, identifying which candidates are most likely to accept offers, forecasting hiring needs based on trends, and predicting employee retention. These insights help organizations plan their recruitment strategy proactively.",
    followUps: ["what-ai-features-exist", "what-analytics-are-available", "what-is-the-roadmap"],
  },
  {
    id: "when-ai-features-release",
    category: "roadmap",
    question: "When will AI features be released?",
    keywords: ["when", "release", "launch", "available", "timeline", "ai"],
    answer:
      "AI features are part of TalentBridge's ongoing development roadmap. AI Resume Parsing and Candidate Matching are prioritized for upcoming releases, followed by AI Screening and Predictive Analytics. As a graduation project evolving into a SaaS platform, we're iteratively building these features with a focus on accuracy, fairness, and practical value for recruiters.",
    followUps: ["what-ai-features-exist", "what-is-the-roadmap", "what-is-the-vision"],
  },

  // =========================
  // PRICING
  // =========================
  {
    id: "what-are-the-pricing-plans",
    category: "overview",
    question: "What are the pricing plans?",
    keywords: ["pricing", "plans", "cost", "price", "subscription", "how much"],
    answer:
      "TalentBridge offers three pricing plans: 1) Starter (EGP 3,999) — for startups and small businesses, includes job posting management, candidate tracking, dashboard, email notifications, and basic analytics. 2) Professional (EGP 9,999) — for growing HR teams, adds Power BI dashboards, Power Automate workflows, interview scheduling, approval flows, and Teams integration. 3) Enterprise (Custom) — for large organizations, adds AI screening, SharePoint integration, custom workflows, role-based access, dedicated support, and SLA compliance.",
    followUps: ["who-is-it-designed-for", "is-talentbridge-a-saas", "what-are-the-main-features"],
  },
  {
    id: "is-there-a-free-trial",
    category: "overview",
    question: "Is there a free trial available?",
    keywords: ["free", "trial", "demo", "try", "test"],
    answer:
      "TalentBridge offers demos for organizations interested in evaluating the platform. The Enterprise plan includes a 'Book Demo' option where our team will walk you through the platform's capabilities and customize it to your needs. Contact us to schedule a personalized demo and discuss how TalentBridge can transform your recruitment process.",
    followUps: ["what-are-the-pricing-plans", "who-is-it-designed-for", "what-is-talentbridge"],
  },

  // =========================
  // ADDITIONAL FAQs
  // =========================
  {
    id: "how-are-interviews-scheduled",
    category: "features",
    question: "How are interviews scheduled?",
    keywords: ["interview", "schedule", "scheduling", "booking", "calendar"],
    answer:
      "Interview scheduling in TalentBridge is fully automated. When a candidate is shortlisted, the recruiter selects interview slots and the system automatically creates a Microsoft Teams meeting, sends calendar invitations to the candidate and interviewers via Outlook, and sends reminder emails before the interview. This eliminates the back-and-forth of manual scheduling.",
    followUps: ["does-it-integrate-with-teams", "does-it-integrate-with-outlook", "what-is-recruitment-flow"],
  },
  {
    id: "what-is-onboarding",
    category: "features",
    question: "Does TalentBridge support onboarding?",
    keywords: ["onboarding", "hire", "offer", "new hire", "welcome"],
    answer:
      "Yes, TalentBridge includes onboarding as the final step of the recruitment workflow. Once a candidate accepts an offer, the platform triggers onboarding workflows — including welcome emails, document collection, IT setup requests, and orientation scheduling. This ensures a smooth transition from candidate to employee.",
    followUps: ["what-is-recruitment-flow", "what-automation-examples", "what-are-the-main-features"],
  },
  {
    id: "can-it-handle-bulk-hiring",
    category: "features",
    question: "Can TalentBridge handle bulk hiring?",
    keywords: ["bulk", "mass", "large scale", "volume", "many positions"],
    answer:
      "Yes, TalentBridge is designed to scale. The Enterprise plan supports high-volume recruitment with features like bulk job posting, batch candidate screening, custom workflows for mass hiring campaigns, and advanced analytics to track large-scale recruitment performance. The platform's Microsoft Cloud infrastructure ensures reliability even under heavy load.",
    followUps: ["what-are-the-pricing-plans", "what-are-the-main-features", "what-analytics-are-available"],
  },
  {
    id: "does-it-support-rtl",
    category: "technology",
    question: "Does TalentBridge support Arabic language?",
    keywords: ["arabic", "language", "rtl", "multilingual", "translation"],
    answer:
      "Yes, TalentBridge supports both English and Arabic languages with full RTL (right-to-left) layout support. Users can toggle between languages using the globe icon in the navigation. The platform's bilingual support makes it ideal for organizations in Egypt and the Middle East region.",
    followUps: ["what-tech-stack", "where-is-talentbridge-built", "what-is-talentbridge"],
  },
  {
    id: "what-makes-it-different",
    category: "overview",
    question: "What makes TalentBridge different from other recruitment platforms?",
    keywords: ["different", "unique", "vs", "compared", "advantage", "why choose"],
    answer:
      "TalentBridge stands out in three key ways: 1) Deep Microsoft integration — it's built entirely on the Microsoft ecosystem, meaning organizations can leverage their existing M365 investment. 2) End-to-end automation — from job request to onboarding, every step is automated through Power Automate. 3) Built for the region — designed in Egypt with local hiring needs, Arabic language support, and regional compliance in mind. Plus, upcoming AI features will further differentiate the platform.",
    followUps: ["what-is-talentbridge", "what-microsoft-integrations", "what-ai-features-exist"],
  },
  {
    id: "is-it-a-graduation-project",
    category: "overview",
    question: "Is TalentBridge a graduation project?",
    keywords: ["graduation", "project", "academic", "university", "student"],
    answer:
      "TalentBridge began as a 2026 graduation project and is evolving into a production-ready SaaS platform. It was designed to solve real-world recruitment challenges using Microsoft technologies. The platform is built to investor-ready standards and demonstrates how academic projects can transform into viable business solutions that serve real organizational needs.",
    followUps: ["what-is-talentbridge", "what-is-the-vision", "what-makes-it-different"],
  },
  {
    id: "how-to-get-started",
    category: "overview",
    question: "How do I get started with TalentBridge?",
    keywords: ["get started", "begin", "start", "how to", "onboard"],
    answer:
      "Getting started with TalentBridge is easy: 1) Explore our platform on the home page. 2) Check out the Features and Microsoft Ecosystem sections. 3) Review our Pricing plans. 4) Book a demo or contact us. 5) Our team will set up your organization, configure workflows, and train your team. You can also explore open positions on our Careers page to see the platform in action.",
    followUps: ["what-are-the-pricing-plans", "what-are-the-main-features", "what-is-talentbridge"],
  },
  {
    id: "does-it-support-custom-roles",
    category: "security",
    question: "Does TalentBridge support custom user roles?",
    keywords: ["custom roles", "roles", "custom", "user types", "permissions"],
    answer:
      "Yes, the Enterprise plan includes role-based access control with custom role configuration. Administrators can define custom roles with specific permissions — controlling who can view, edit, approve, or delete recruitment data. This ensures the platform adapts to your organization's hierarchy and security requirements.",
    followUps: ["how-is-access-controlled", "what-security-measures", "what-are-the-pricing-plans"],
  },
  {
    id: "can-it-integrate-other-systems",
    category: "technology",
    question: "Can TalentBridge integrate with non-Microsoft systems?",
    keywords: ["integrate", "non-microsoft", "third party", "external", "api"],
    answer:
      "TalentBridge is primarily built on the Microsoft ecosystem, but Power Automate supports hundreds of connectors to third-party systems including LinkedIn, HRIS platforms, job boards, and more. For custom integrations, Power Automate's HTTP connectors and API capabilities allow connectivity with virtually any system that has an API.",
    followUps: ["what-microsoft-integrations", "does-it-use-power-automate", "what-tech-stack"],
  },
  {
    id: "what-support-is-available",
    category: "overview",
    question: "What support is available?",
    keywords: ["support", "help", "assistance", "customer service", "contact"],
    answer:
      "TalentBridge offers tiered support based on your plan: Starter includes email support, Professional includes priority email and chat support, and Enterprise includes dedicated support with SLA guarantees. You can also contact us through the Contact page for any questions about features, pricing, or getting started.",
    followUps: ["what-are-the-pricing-plans", "how-to-get-started", "what-is-talentbridge"],
  },
  {
    id: "is-there-documentation",
    category: "overview",
    question: "Is there documentation available?",
    keywords: ["documentation", "docs", "guide", "manual", "help"],
    answer:
      "TalentBridge provides user guides and documentation for recruiters, hiring managers, and administrators. The AI Assistant on this website can also answer most questions about the platform's features, integrations, and capabilities. For detailed technical documentation, please contact our team.",
    followUps: ["what-are-the-main-features", "how-to-get-started", "what-support-is-available"],
  },
  {
    id: "how-often-updated",
    category: "technology",
    question: "How often is TalentBridge updated?",
    keywords: ["update", "updates", "version", "release", "maintenance"],
    answer:
      "TalentBridge follows an agile development cycle with regular updates. As a cloud-based SaaS platform built on Microsoft technologies, updates are deployed seamlessly without downtime. New features, improvements, and security patches are released iteratively. Enterprise customers receive release notes and can request feature prioritization.",
    followUps: ["what-is-the-roadmap", "what-ai-features-exist", "is-it-cloud-based"],
  },
  {
    id: "what-about-data-backup",
    category: "security",
    question: "How is data backed up?",
    keywords: ["backup", "data backup", "recovery", "disaster", "restore"],
    answer:
      "Data in TalentBridge is backed up through SharePoint and Microsoft 365's built-in backup and recovery capabilities. Microsoft provides geo-redundant storage, version history for documents, and point-in-time restore for lists. Enterprise customers can configure additional backup policies and retention periods to meet their compliance requirements.",
    followUps: ["what-security-measures", "how-does-sharepoint-work", "is-data-encrypted"],
  },
  {
    id: "can-candidates-contact-recruiters",
    category: "candidates",
    question: "Can candidates contact recruiters directly?",
    keywords: ["contact", "recruiter", "reach out", "communicate", "candidate"],
    answer:
      "Candidates receive automated updates throughout the recruitment process, keeping them informed at every stage. For specific inquiries, candidates can use the contact information provided in job listings or the Contact page. TalentBridge ensures professional and timely communication between candidates and recruitment teams.",
    followUps: ["can-i-track-my-application", "how-do-automated-notifications-work", "how-do-i-apply"],
  },
  {
    id: "what-about-diversity",
    category: "analytics",
    question: "Does TalentBridge track diversity metrics?",
    keywords: ["diversity", "inclusion", "metrics", "gender", "equal"],
    answer:
      "Yes, TalentBridge can track diversity metrics as part of its analytics capabilities. Organizations can monitor gender distribution, background diversity, and other inclusion indicators in their candidate pipelines. This data helps organizations ensure fair and equitable hiring practices. All diversity tracking is done in compliance with privacy regulations.",
    followUps: ["what-analytics-are-available", "what-kpis-are-tracked", "is-candidate-data-secure"],
  },
  {
    id: "what-about-compliance",
    category: "security",
    question: "Does TalentBridge meet compliance requirements?",
    keywords: ["compliance", "regulation", "gdpr", "legal", "standards"],
    answer:
      "TalentBridge leverages Microsoft 365's compliance infrastructure, which meets international standards including ISO 27001, SOC, and GDPR. Data is stored in Microsoft's regulated cloud environments with configurable retention and deletion policies. For organizations with specific compliance needs, the Enterprise plan includes custom compliance configuration.",
    followUps: ["what-security-measures", "is-data-encrypted", "are-there-audit-logs"],
  },
  {
    id: "can-it-scale",
    category: "technology",
    question: "Can TalentBridge scale with my organization?",
    keywords: ["scale", "scalability", "grow", "growth", "expand"],
    answer:
      "Absolutely. TalentBridge is built on Microsoft Cloud infrastructure, which provides virtually unlimited scalability. Whether you're hiring 10 people a year or 10,000, the platform handles the load. SharePoint scales with your data, Power Automate handles high-volume workflows, and Power BI processes large datasets efficiently. The Enterprise plan is specifically designed for large-scale operations.",
    followUps: ["can-it-handle-bulk-hiring", "is-it-cloud-based", "what-are-the-pricing-plans"],
  },
  {
    id: "what-about-candidate-experience",
    category: "candidates",
    question: "How does TalentBridge improve candidate experience?",
    keywords: ["candidate experience", "experience", "ux", "candidate journey", "satisfaction"],
    answer:
      "TalentBridge improves candidate experience by: 1) Providing a clean, mobile-friendly application portal. 2) Sending automated updates at every stage so candidates always know their status. 3) Enabling easy interview scheduling with Teams. 4) Reducing time-to-hire so candidates aren't left waiting. 5) Ensuring professional communication through Outlook. A positive candidate experience strengthens your employer brand.",
    followUps: ["can-i-track-my-application", "how-do-candidates-apply", "how-are-interviews-scheduled"],
  },
  {
    id: "what-about-employer-branding",
    category: "features",
    question: "Does TalentBridge support employer branding?",
    keywords: ["branding", "employer brand", "brand", "custom", "white label"],
    answer:
      "TalentBridge's careers portal is designed to showcase your organization's employer brand. The Enterprise plan includes customization options for branding, colors, and messaging. The clean, modern design of the careers page reflects positively on your organization and helps attract top talent.",
    followUps: ["what-are-the-main-features", "what-are-the-pricing-plans", "what-about-candidate-experience"],
  },
];

// Smart search function - keyword matching with scoring
export function searchFAQs(query, data = faqData) {
  if (!query || query.trim().length === 0) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/).filter((w) => w.length > 1);

  const scored = data.map((faq) => {
    let score = 0;
    const questionLower = faq.question.toLowerCase();
    const answerLower = faq.answer.toLowerCase();
    const keywordsLower = faq.keywords.map((k) => k.toLowerCase());

    // Exact question match
    if (questionLower === normalizedQuery) score += 100;

    // Question contains query
    if (questionLower.includes(normalizedQuery)) score += 50;

    // Query contains question
    if (normalizedQuery.includes(questionLower)) score += 40;

    // Keyword matches
    keywordsLower.forEach((keyword) => {
      if (normalizedQuery.includes(keyword)) score += 20;
      if (keyword.includes(normalizedQuery)) score += 15;
      queryWords.forEach((word) => {
        if (keyword.includes(word)) score += 8;
        if (word.includes(keyword) && keyword.length > 2) score += 6;
      });
    });

    // Answer contains query words
    queryWords.forEach((word) => {
      if (answerLower.includes(word)) score += 3;
      if (questionLower.includes(word)) score += 5;
    });

    return { ...faq, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

// Get FAQs by category
export function getFAQsByCategory(categoryId, data = faqData) {
  if (categoryId === "all") return data;
  return data.filter((faq) => faq.category === categoryId);
}

// Get a FAQ by ID
export function getFAQById(id, data = faqData) {
  return data.find((faq) => faq.id === id);
}

// Get follow-up FAQs
export function getFollowUps(faq, data = faqData) {
  if (!faq || !faq.followUps) return [];
  return faq.followUps
    .map((id) => data.find((f) => f.id === id))
    .filter(Boolean);
}

// Get suggested questions for welcome
export function getWelcomeSuggestions(data = faqData) {
  const welcomeIds = [
    "what-is-talentbridge",
    "what-are-the-main-features",
    "what-microsoft-integrations",
    "how-do-i-apply",
  ];
  return welcomeIds
    .map((id) => data.find((f) => f.id === id))
    .filter(Boolean);
}
</task_progress>
</write_to_file>