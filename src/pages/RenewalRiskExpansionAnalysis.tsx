import { useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react';

import ImageViewer from '../components/ImageViewer';

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const GITHUB_REPO = 'https://github.com/Vithun10/RevOps-Projects';

/* -------------------------------------------------------------------------- */
/*                                   MOTION                                   */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 18,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.12,
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut' as const,
  },
};

/* -------------------------------------------------------------------------- */
/*                              SHARED COMPONENTS                             */
/* -------------------------------------------------------------------------- */

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t border-border py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

interface ChapterHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}

function ChapterHeading({ number, eyebrow, title, description }: ChapterHeadingProps) {
  return (
    <motion.div {...fadeUp} className="mb-12 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.18em] text-accent">
          {number}
        </span>

        <span className="h-px w-8 bg-accent/40" />

        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-text-tertiary">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass-card rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function SignalTag({ children }: { children: ReactNode }) {
  return <span className="badge badge-outline">{children}</span>;
}

interface MetricCardProps {
  value: string;
  label: string;
  detail?: string;
}

function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <Card className="p-5">
      <p className="text-2xl font-bold tracking-tight text-text-primary">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary">
        {label}
      </p>

      {detail && (
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          {detail}
        </p>
      )}
    </Card>
  );
}

function EvidenceImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <motion.figure {...fadeUp}>
      <ImageViewer src={src} alt={alt} className="bg-surface-1/60" />

      <figcaption className="mt-3 text-sm leading-6 text-text-tertiary">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */

function CaseStudyHero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(108,140,255,0.08),transparent_48%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Revenue Operations Case Study
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
            Renewal Risk & Expansion Analysis
          </h1>

          <p className="mt-4 text-sm font-medium text-text-tertiary">
            Independent B2B SaaS Revenue Operations Simulation
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
            Analyzed customer retention, churn risk, health scoring, renewal
            performance, and expansion revenue opportunities across a simulated
            B2B SaaS customer base using HubSpot, SQL, Power BI, Excel, and
            Python.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <SignalTag>Churn Risk Analysis</SignalTag>
            <SignalTag>Customer Health</SignalTag>
            <SignalTag>Renewal Outcomes</SignalTag>
            <SignalTag>Expansion Modeling</SignalTag>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <MetricCard
              value="60.4%"
              label="SMB Churn Rate"
              detail="Highest churn concentration by customer segment."
            />

            <MetricCard
              value="100%"
              label="At-Risk Churn Validation"
              detail="Complete churn observed in the At-Risk health cohort."
            />

            <MetricCard
              value="$12,542"
              label="Expansion Opportunity"
              detail="Incremental revenue potential from retained accounts."
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                           01 EXECUTIVE SUMMARY                             */
/* -------------------------------------------------------------------------- */

function ExecutiveSummary() {
  return (
    <Section id="executive-summary">
      <ChapterHeading
        number="01"
        eyebrow="Executive Summary"
        title="Elevated SMB churn, health-monitoring gaps, and unrealized expansion revenue across a B2B SaaS customer base"
        description="A concise overview of the retention diagnostic, key findings, and recommended actions."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <p className="text-base leading-7 text-text-secondary">
            A B2B SaaS organization experienced elevated churn concentrated
            within the SMB segment, where 60.4% of customers failed to renew.
            Customer-health monitoring lacked structured scoring, preventing
            early identification of renewal risk. The "At Risk" cohort
            exhibited 100% churn, validating usage decline and support
            intensity as leading retention indicators. Renewal management
            operated reactively rather than through proactive outreach
            cadences. Meanwhile, expansion revenue remained under-realized:
            analysis identified $12,542 in incremental opportunity from
            retained Mid-Market and Enterprise accounts. Recommendations
            included implementing usage-decline early-warning alerts,
            health-score review cadences for Customer Success, SMB retention
            playbooks, proactive 90-day renewal outreach, expansion
            propensity tracking, and retention forecasting governance.
          </p>
        </Card>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          02 BUSINESS CONTEXT                               */
/* -------------------------------------------------------------------------- */

function BusinessContext() {
  const contextItems = [
    { label: 'Company Type', value: 'B2B SaaS' },
    { label: 'Customer Segments', value: 'SMB, Mid-Market, Enterprise' },
    { label: 'Revenue Model', value: 'Recurring subscription (MRR / ARR)' },
    { label: 'Growth Motion', value: 'Renewals + expansion revenue' },
    { label: 'Operating Model', value: 'Customer-success-led retention' },
  ];

  return (
    <Section id="business-context" className="bg-surface-1/30">
      <ChapterHeading
        number="02"
        eyebrow="Business Context"
        title="A customer-success-led B2B SaaS organization with recurring revenue"
        description="The simulation modeled a SaaS company operating across SMB, Mid-Market, and Enterprise segments with a renewal and expansion growth motion."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contextItems.map((item) => (
          <motion.div key={item.label} {...fadeUp}>
            <Card className="h-full p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary">
                {item.label}
              </p>

              <p className="mt-3 text-base font-semibold text-text-primary">
                {item.value}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          03 REVENUE PROBLEM                                */
/* -------------------------------------------------------------------------- */

function RevenueProblem() {
  const problems = [
    {
      title: 'High SMB Churn',
      description:
        'The SMB segment experienced 60.4% churn, far exceeding Mid-Market and Enterprise benchmarks. This concentration of revenue leakage indicated a structural retention problem within the smallest customer cohort.',
    },
    {
      title: 'Limited Customer-Health Visibility',
      description:
        'No structured health-scoring framework existed to surface early-warning indicators. Usage decline, support escalation patterns, and engagement signals were not consolidated into a decision-ready retention view.',
    },
    {
      title: 'Reactive Renewal Management',
      description:
        'Renewal outreach occurred too late in the customer lifecycle. Without proactive engagement cadences, at-risk accounts reached contract expiry before retention interventions could be applied.',
    },
    {
      title: 'Under-Realized Expansion Revenue',
      description:
        'Cross-sell and upsell opportunities within retained Mid-Market and Enterprise accounts were not systematically identified. Expansion revenue remained an underdeveloped growth lever despite strong account-level signals.',
    },
  ];

  return (
    <Section id="revenue-problem">
      <ChapterHeading
        number="03"
        eyebrow="Revenue Problem"
        title="Four core issues limiting customer retention and expansion revenue"
        description="The diagnostic identified structural gaps in churn management, health monitoring, renewal cadence, and expansion identification that collectively increased recurring-revenue leakage and retention forecasting risk."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {problems.map((problem, index) => (
          <motion.div key={problem.title} {...fadeUp}>
            <Card className="h-full p-6">
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>

              <h3 className="mt-4 font-semibold text-text-primary">
                {problem.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {problem.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                           04 DATA SOURCES                                  */
/* -------------------------------------------------------------------------- */

function DataSources() {
  const sources = [
    'HubSpot CRM export',
    'Customer master data',
    'Subscription and renewal records',
    'Product usage activity',
    'Support ticket history',
    'Expansion event data',
    'SQL analytical database (SQLite)',
  ];

  return (
    <Section id="data-sources" className="bg-surface-1/30">
      <ChapterHeading
        number="04"
        eyebrow="Data Sources"
        title="Customer lifecycle data consolidated for retention and expansion analysis"
        description="Seven data sources were integrated into an analytical database to support churn segmentation, health scoring, renewal forecasting, and expansion modeling."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Database size={20} className="text-accent" aria-hidden="true" />

            <h3 className="text-lg font-semibold text-text-primary">
              Data Infrastructure
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sources.map((source) => (
              <div
                key={source}
                className="flex gap-3 text-sm leading-6 text-text-secondary"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {source}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                        05 ANALYTICAL APPROACH                              */
/* -------------------------------------------------------------------------- */

function AnalyticalApproach() {
  const tools = [
    {
      tool: 'SQL (SQLite)',
      detail: 'Retention and cohort analysis across customer segments, health scores, and renewal outcomes.',
    },
    {
      tool: 'Power BI',
      detail: 'Customer-health and renewal dashboards for segment-level retention visibility.',
    },
    {
      tool: 'Excel',
      detail: 'Renewal and expansion forecasting with scenario-based revenue modeling.',
    },
    {
      tool: 'Python (pandas, Faker)',
      detail: 'Dataset generation and data preparation for the simulated customer base.',
    },
  ];

  const analysisMethods = [
    'Cohort analysis',
    'Health-score modeling',
    'Churn segmentation',
    'Expansion propensity analysis',
  ];

  return (
    <Section id="analytical-approach">
      <ChapterHeading
        number="05"
        eyebrow="Analytical Approach"
        title="Multi-tool retention analysis across four customer lifecycle dimensions"
        description="The diagnostic combined SQL querying, dashboarding, forecasting, and data generation to analyze retention and expansion performance."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((item) => (
          <motion.div key={item.tool} {...fadeUp}>
            <Card className="h-full p-6">
              <h3 className="font-semibold text-text-primary">
                {item.tool}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {item.detail}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp} className="mt-6">
        <Card className="p-7">
          <div className="mb-5 flex items-center gap-3">
            <Search size={20} className="text-accent" aria-hidden="true" />

            <h3 className="text-lg font-semibold text-text-primary">
              Analysis Methods
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {analysisMethods.map((method, index) => (
              <div key={method} className="flex items-center gap-3">
                <SignalTag>{method}</SignalTag>

                {index < analysisMethods.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="text-text-tertiary"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                   06 REVENUE FUNNEL / CUSTOMER JOURNEY                     */
/* -------------------------------------------------------------------------- */

function CustomerJourney() {
  const stages = [
    { name: 'Onboarding', color: 'bg-accent/20 text-accent border-accent/20' },
    { name: 'Adoption', color: 'bg-accent/20 text-accent border-accent/20' },
    { name: 'Active Usage', color: 'bg-accent-3/20 text-accent-3 border-accent-3/20' },
    { name: 'Renewal Review', color: 'bg-red-500/20 text-red-400 border-red-500/20' },
    { name: 'Renewed', color: 'bg-accent-3/20 text-accent-3 border-accent-3/20' },
    { name: 'Expansion', color: 'bg-accent-2/20 text-accent-2 border-accent-2/20' },
  ];

  return (
    <Section id="customer-journey" className="bg-surface-1/30">
      <ChapterHeading
        number="06"
        eyebrow="Customer Journey"
        title="Six-stage customer lifecycle with a usage-decline renewal risk"
        description="The customer journey analysis revealed that usage decline preceding Renewal Review was the primary risk stage, with churned customers showing measurably lower engagement before contract expiry."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-text-primary">
            Customer Lifecycle Flow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {stages.map((stage, index) => (
              <div key={stage.name} className="flex items-center gap-3">
                <span
                  className={`rounded-lg border px-4 py-2 text-sm font-semibold ${stage.color}`}
                >
                  {stage.name}
                </span>

                {index < stages.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-text-tertiary"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <div className="flex items-center gap-3">
              <Gauge
                size={18}
                className="shrink-0 text-red-400"
                aria-hidden="true"
              />

              <p className="text-sm font-semibold text-red-400">
                Primary Risk Stage: Usage Decline → Renewal Review
              </p>
            </div>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Customers exhibiting declining product usage and increased support
              activity before the Renewal Review stage showed the highest churn
              probability. The "At Risk" health cohort experienced 100% churn,
              validating these signals as strong predictors of non-renewal.
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div {...fadeUp} className="mt-4">
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <TrendingUp
              size={18}
              className="shrink-0 text-text-tertiary"
              aria-hidden="true"
            />

            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Churned</span> exits
              were concentrated in the SMB segment (60.4%), with Enterprise retention
              remaining comparatively stable at 84.8%.
            </p>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          07 SQL FINDINGS                                   */
/* -------------------------------------------------------------------------- */

function SqlFindings() {
  const findings = [
    {
      category: 'Churn Segmentation',
      items: [
        { metric: 'SMB Churn', value: '60.4%' },
        { metric: 'Enterprise Churn', value: '15.2%' },
      ],
      insight: 'A 45-percentage-point churn spread between the most and least retained segments, indicating a structural SMB retention problem requiring segment-specific intervention.',
    },
    {
      category: 'Health Score Validation',
      items: [
        { metric: '"At Risk" Cohort Churn', value: '100%' },
        { metric: '"Healthy" Cohort Churn', value: '23.7%' },
      ],
      insight: 'Health scoring effectively differentiated retention outcomes, confirming usage decline and support intensity as reliable leading indicators of renewal risk.',
    },
    {
      category: 'Expansion Opportunity',
      items: [
        { metric: 'SMB Expansion Uplift', value: '$12,542' },
      ],
      insight: 'Incremental expansion revenue was identified within retained accounts, representing a growth opportunity that was not being systematically pursued.',
    },
    {
      category: 'Retention Signal',
      items: [
        { metric: 'Leading Indicators', value: 'Usage + Support' },
      ],
      insight: 'Declining usage and increased support activity were the strongest renewal-risk indicators, providing an actionable basis for early-warning alert design.',
    },
  ];

  return (
    <Section id="sql-findings">
      <ChapterHeading
        number="07"
        eyebrow="SQL Findings"
        title="Retention, health-score, and expansion insights surfaced through analytical queries"
        description="SQL analysis across the customer dataset revealed actionable patterns in churn segmentation, health-score validation, expansion opportunity, and retention signaling."
      />

      <div className="space-y-4">
        {findings.map((finding) => (
          <motion.div key={finding.category} {...fadeUp}>
            <Card className="p-6 md:p-7">
              <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {finding.category}
                  </p>

                  <div className="mt-4 space-y-3">
                    {finding.items.map((item) => (
                      <div key={item.metric} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-text-secondary">
                          {item.metric}
                        </span>

                        <span className="text-lg font-bold text-text-primary">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="text-sm leading-6 text-text-secondary">
                    {finding.insight}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                        08 DASHBOARD INSIGHTS                               */
/* -------------------------------------------------------------------------- */

function DashboardInsights() {
  return (
    <Section id="dashboard-insights" className="bg-surface-1/30">
      <ChapterHeading
        number="08"
        eyebrow="Dashboard Insights"
        title="Power BI dashboards surfacing customer health, renewal performance, and expansion visibility"
        description="Three analytical dashboards were built to consolidate retention risk, renewal outcomes, and expansion opportunity into decision-ready views."
      />

      {/* 8.1 Customer Health Dashboard */}
      <motion.div {...fadeUp} className="mb-8">
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Users size={20} className="text-accent" aria-hidden="true" />

            <h3 className="text-lg font-semibold text-text-primary">
              Customer Health Dashboard
            </h3>
          </div>

          <EvidenceImage
            src="/images/projects/renewal-expansion-analysis/customer-health-dashboard.png"
            alt="Customer Health Dashboard showing usage decline and support intensity as renewal risk indicators"
            caption="Customer health segmentation identified usage decline and support intensity as leading indicators of renewal risk."
          />
        </Card>
      </motion.div>

      {/* 8.2 Renewal Performance Dashboard */}
      <motion.div {...fadeUp} className="mb-8">
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <BarChart3 size={20} className="text-accent" aria-hidden="true" />

            <h3 className="text-lg font-semibold text-text-primary">
              Renewal Performance Dashboard
            </h3>
          </div>

          <EvidenceImage
            src="/images/projects/renewal-expansion-analysis/renewals-dashboard.png"
            alt="Renewal Performance Dashboard showing churn concentration by customer segment"
            caption="Renewal performance by customer segment revealed materially higher churn concentration within the SMB cohort."
          />
        </Card>
      </motion.div>

      {/* 8.3 Expansion Revenue Dashboard */}
      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp size={20} className="text-accent" aria-hidden="true" />

            <h3 className="text-lg font-semibold text-text-primary">
              Expansion Revenue Dashboard
            </h3>
          </div>

          <EvidenceImage
            src="/images/projects/renewal-expansion-analysis/expansion-dashboard.png"
            alt="Expansion Revenue Dashboard showing cross-sell and upsell opportunities"
            caption="Expansion analysis surfaced cross-sell and upsell opportunities concentrated within retained Mid-Market and Enterprise accounts."
          />
        </Card>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                    09 OPERATIONAL RECOMMENDATIONS                          */
/* -------------------------------------------------------------------------- */

function OperationalRecommendations() {
  const recommendations = [
    'Implement HubSpot usage-decline early-warning alerts.',
    'Introduce health-score review cadence for Customer Success.',
    'Create SMB retention playbooks for at-risk accounts.',
    'Launch proactive renewal outreach 90 days before contract expiry.',
    'Track expansion propensity as a standard customer-health KPI.',
    'Establish retention and expansion forecasting governance.',
  ];

  return (
    <Section id="recommendations">
      <ChapterHeading
        number="09"
        eyebrow="Operational Recommendations"
        title="Six RevOps actions to reduce churn, improve renewal cadence, and capture expansion revenue"
        description="Recommendations translated diagnostic findings into actionable retention and expansion improvements that a revenue operations team could implement immediately."
      />

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <motion.div key={rec} {...fadeUp}>
            <Card className="p-5">
              <div className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 font-mono text-xs font-bold text-accent">
                  {index + 1}
                </span>

                <p className="text-sm leading-6 text-text-secondary">
                  {rec}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          10 BUSINESS IMPACT                                */
/* -------------------------------------------------------------------------- */

function BusinessImpact() {
  const impacts = [
    { area: 'SMB Churn', outcome: '60.4% identified as the highest-risk segment' },
    { area: 'Enterprise Churn', outcome: '15.2% baseline retained-performance benchmark' },
    { area: 'Health Score Validation', outcome: '100% churn observed in the "At Risk" cohort' },
    { area: 'Healthy Cohort Benchmark', outcome: '23.7% churn observed in the "Healthy" cohort' },
    { area: 'Expansion Opportunity', outcome: '$12,542 incremental revenue potential identified' },
    { area: 'Retention Visibility', outcome: 'Customer-health monitoring framework established' },
  ];

  return (
    <Section id="business-impact" className="bg-surface-1/30">
      <ChapterHeading
        number="10"
        eyebrow="Business Impact"
        title="Quantified retention insights and expansion opportunities"
        description="The diagnostic produced measurable findings that directly inform churn intervention, health monitoring, renewal cadence, and expansion prioritization."
      />

      <motion.div {...fadeUp}>
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary">
                    Impact Area
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary">
                    Outcome
                  </th>
                </tr>
              </thead>

              <tbody>
                {impacts.map((impact, index) => (
                  <tr
                    key={impact.area}
                    className={index < impacts.length - 1 ? 'border-b border-border' : ''}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-text-primary">
                      {impact.area}
                    </td>

                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {impact.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                     11 ARTIFACTS & DELIVERABLES                            */
/* -------------------------------------------------------------------------- */

function ArtifactsAndDeliverables() {
  const artifacts = [
    'Customer health dashboard pack',
    'Renewal analysis workbook',
    'Expansion opportunity model',
    'SQL retention analysis',
    'Health-score methodology',
    'Retention playbook recommendations',
    'KPI dictionary',
  ];

  return (
    <Section id="artifacts">
      <ChapterHeading
        number="11"
        eyebrow="Artifacts & Deliverables"
        title="Revenue operations deliverables produced during the retention diagnostic"
        description="Seven deliverables were created to support the renewal and expansion analysis, covering dashboarding, health scoring, retention playbooks, and operational recommendations."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <FileText size={20} className="text-accent" aria-hidden="true" />

            <h3 className="text-lg font-semibold text-text-primary">
              Proof of Work
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {artifacts.map((artifact) => (
              <div
                key={artifact}
                className="flex gap-3 text-sm leading-6 text-text-secondary"
              >
                <CheckCircle2
                  size={16}
                  className="mt-1 shrink-0 text-accent-3"
                  aria-hidden="true"
                />
                {artifact}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        {...fadeUp}
        className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row"
      >
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
        >
          <ExternalLink size={17} aria-hidden="true" />

          View GitHub Repository

          <ArrowRight size={14} aria-hidden="true" />
        </a>

        <Link
          to="/#projects"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/50 px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />

          Back to Featured Work
        </Link>

        <Link
          to="/projects/pipeline-diagnostic-revenue-forecasting"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/50 px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />

          Previous Case Study
        </Link>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function RenewalRiskExpansionAnalysis() {
  useEffect(() => {
    document.title = 'Renewal Risk & Expansion Analysis | Vithun TR';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Revenue operations case study analyzing customer retention, churn risk, health scoring, renewal forecasting, and expansion revenue opportunities across a simulated B2B SaaS customer base.'
      );
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <main className="min-h-screen bg-surface-0 text-text-primary">
      <CaseStudyHero />

      <ExecutiveSummary />

      <BusinessContext />

      <RevenueProblem />

      <DataSources />

      <AnalyticalApproach />

      <CustomerJourney />

      <SqlFindings />

      <DashboardInsights />

      <OperationalRecommendations />

      <BusinessImpact />

      <ArtifactsAndDeliverables />
    </main>
  );
}
