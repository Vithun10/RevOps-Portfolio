/* ── Portfolio Data — Single Source of Truth ─────────────────────── */

/* ── Types ───────────────────────────────────────────────────────── */

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectSignal {
  customerProblem: string;
  businessExposure: string;
}

export interface Project {
  priority: number;

  name: string;
  slug: string;
  title: string;

  category: string;
  industry: string;
  disclosure: string;

  portfolioRole: string;
  duration: string;

  description: string;

  productSignal: ProjectSignal;

  metrics: ProjectMetric[];

  capabilities: string[];

  links: {
    caseStudy: string;
    github?: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: string[];
  color: string;
}

/* ── Identity ────────────────────────────────────────────────────── */

export const identity = {
  name: 'Vithun TR',

  title: 'Revenue Operations Analyst',

  targetRoles: [
    'Revenue Operations',
    'Revenue Analytics',
    'Systems & Execution',
  ],

  education: {
    degree: 'Master of Computer Applications',
    university: 'CHRIST (Deemed to be University)',
    batch: '2025–2027',
  },

  location: 'Bengaluru, India',

  contact: {
    email: 'vithun2701@gmail.com',
    phone: '+91 9994638282',
    linkedin: 'https://www.linkedin.com/in/vithun-r',
    github:
      'https://github.com/Vithun10/RevOps-Projects',
    resume:
      '/resume/Vithun_Tr_Resume_RevOps.pdf',
  },
};

/* ── Hero ────────────────────────────────────────────────────────── */

export const hero = {
  name: 'Vithun TR',

  status: 'Open to Opportunities',

  valueProposition:
    'Revenue Operations Analyst with 3+ years of business operations and analytical experience, specializing in revenue analytics, CRM operations, pipeline analysis, and forecasting. Hands-on experience with SQL, Power BI, Excel, and HubSpot CRM to diagnose pipeline bottlenecks, analyze customer retention and expansion, and support data-driven revenue decisions in B2B SaaS environments.',
};

/* ── Featured Projects ───────────────────────────────────────────── */

export const featuredProjects: Project[] = [
  {
    priority: 1,
    name: 'Pipeline Diagnostic',
    slug: 'pipeline-diagnostic-revenue-forecasting',
    title: 'Pipeline Diagnostic & Revenue Forecasting',
    category: 'Pipeline Management',
    industry: 'B2B SaaS',
    disclosure: 'Independent B2B SaaS Revenue Operations Simulation',
    portfolioRole: 'Revenue Operations Case Study',
    duration: '4 Weeks',
    description:
      'Analyzed pipeline visibility, CRM data quality, lead-source performance, and forecasting accuracy across a simulated mid-market B2B SaaS sales organization using HubSpot, SQL, Excel, Power BI, and Python.',
    productSignal: {
      customerProblem:
        'Poor pipeline visibility and data hygiene resulted in inaccurate forecasting and unpredictable revenue performance across the sales organization.',
      businessExposure: 'Mid-Market B2B SaaS Pipeline',
    },
    metrics: [
      {
        value: '$70,900',
        label: 'Pipeline Opportunity',
      },
      {
        value: '23.1% vs 9.1%',
        label: 'Win Rate Gap',
      },
      {
        value: '0.25x vs 3x',
        label: 'Coverage Gap',
      },
    ],
    capabilities: [
      'Pipeline Visibility',
      'Forecasting Accuracy',
      'Data Quality',
      'Lead-Source Analysis',
    ],
    links: {
      caseStudy: '/projects/pipeline-diagnostic-revenue-forecasting',
      github: 'https://github.com/Vithun10/RevOps-Projects',
    },
  },
  {
    priority: 2,
    name: 'Renewal Analysis',
    slug: 'renewal-risk-expansion-analysis',
    title: 'Renewal Risk & Expansion Analysis',
    category: 'Retention Analytics',
    industry: 'B2B SaaS',
    disclosure: 'Independent B2B SaaS Revenue Operations Simulation',
    portfolioRole: 'Revenue Operations Case Study',
    duration: '4 Weeks',
    description:
      'Analyzed churn risk, customer health, renewal outcomes, and expansion opportunities across SMB, Mid-Market, and Enterprise customer segments using HubSpot, SQL, Excel, Power BI, and Python.',
    productSignal: {
      customerProblem:
        'High churn rates and lack of visibility into customer health metrics hindered expansion efforts and increased renewal risks.',
      businessExposure: 'SMB, Mid-Market, & Enterprise',
    },
    metrics: [
      {
        value: '60.4%',
        label: 'SMB Churn',
      },
      {
        value: '100%',
        label: 'At-Risk Churn',
      },
      {
        value: '$12,542',
        label: 'Expansion Opportunity',
      },
    ],
    capabilities: [
      'Churn Risk Analysis',
      'Customer Health',
      'Renewal Outcomes',
      'Expansion Modeling',
    ],
    links: {
      caseStudy: '/projects/renewal-risk-expansion-analysis',
      github: 'https://github.com/Vithun10/RevOps-Projects',
    },
  },
];

/* ── Revenue Capabilities ────────────────────────────────────────── */
/*
 * RevOps competency model.
 *
 * Organized around the three capabilities that define the portfolio:
 * Revenue Operations → Revenue Analytics → Systems & Execution.
 *
 * Tools are positioned as supporting capabilities rather than
 * standalone technical identities.
 */

export const skillCategories: SkillCategory[] = [
  {
    title: 'Revenue Operations',
    subtitle: 'Pipeline, Forecasting & Governance',
    icon: 'target',
    skills: [
      'Pipeline Management',
      'Lead Routing',
      'CRM Data Governance',
      'Revenue Process Design',
      'Forecast Operations',
      'Customer Lifecycle Operations',
    ],
    color: '#6C8CFF',
  },
  {
    title: 'Revenue Analytics',
    subtitle: 'Insights, Metrics & Decision Support',
    icon: 'chart',
    skills: [
      'SQL Analysis',
      'Funnel Diagnostics',
      'Cohort Analysis',
      'Retention Analytics',
      'Forecast Modeling',
      'KPI Design',
      'Dashboarding',
    ],
    color: '#34D399',
  },
  {
    title: 'Systems & Execution',
    subtitle: 'CRM, Workflows & Reporting',
    icon: 'users',
    skills: [
      'HubSpot CRM',
      'Workflow Design',
      'Excel Modeling',
      'Power BI Reporting',
      'Python Data Preparation',
      'Stakeholder Deliverables',
    ],
    color: '#A78BFA',
  },
];

export interface CareerMilestone {
  period: string;
  title: string;
  organization: string;
  location?: string;
  subtitle?: string;
  badge: string;
  description: string;
  highlights: string[];
}

/* ── Career Journey ──────────────────────────────────────────────── */
/*
 * Career narrative:
 *
 * Technical Foundation → Business & Operational Foundation
 * → Revenue Operations Direction
 *
 * Professional employment is represented exactly as held.
 * Revenue operations is positioned as the next career direction,
 * not as prior employment.
 */

export const careerMilestones: CareerMilestone[] = [
  {
    period: '2025 – 2027',
    title: 'Master of Computer Applications',
    organization: 'CHRIST (Deemed to be University)',
    location: 'Bengaluru, India',
    badge: 'Technical Foundation',
    description:
      'Building technical and analytical fluency across software systems, data, and enterprise technology — strengthening the foundation for working effectively across product, engineering, and business teams.',
    highlights: [
      'Software & System Fundamentals',
      'SQL & Data Analysis',
      'Enterprise Applications',
      'Technical Problem Solving',
    ],
  },
  {
    period: 'May 2023 – Present',
    title: 'Business Operations Analyst',
    organization: 'RK Enterprises',
    location: 'Bengaluru, India',
    badge: 'Professional Experience',
    description:
      '2 years of business operations experience supporting reporting, forecasting activities, process coordination, operational analytics, and cross-functional execution, with exposure to revenue operations workflows and performance analysis.',
    highlights: [
      'Revenue Reporting Support',
      'Forecasting Exposure',
      'Operational Analytics',
      'Stakeholder Coordination',
      'Process Improvement',
    ],
  },
  {
    period: 'Next Step',
    title: 'Revenue Operations Analyst',
    organization: 'Career Direction',
    subtitle: 'B2B SaaS • Revenue Operations',
    badge: 'Revenue Operations Direction',
    description:
      'Building toward Revenue Operations roles where CRM systems, revenue analytics, forecasting, customer retention, and operational execution come together to improve predictable revenue growth and go-to-market performance.',
    highlights: [
      'CRM & Revenue Operations',
      'Revenue Analytics & Forecasting',
      'Customer Retention Insights',
      'Cross-Functional Revenue Execution',
    ],
  },
];
/* ── Navigation ──────────────────────────────────────────────────── */
/*
 * Preserve until the navigation/final architecture migration stage.
 */

export const navLinks = [
  'About',
  'Projects',
  'Skills',
  'Experience',
  'Resume',
];