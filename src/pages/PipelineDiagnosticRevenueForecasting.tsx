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
  Target,
  TrendingUp,
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

function Section({
  id,
  children,
  className = '',
}: SectionProps) {
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

function ChapterHeading({
  number,
  eyebrow,
  title,
  description,
}: ChapterHeadingProps) {
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

function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-card rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function SignalTag({ children }: { children: ReactNode }) {
  return (
    <span className="badge badge-outline">
      {children}
    </span>
  );
}

interface MetricCardProps {
  value: string;
  label: string;
  detail?: string;
}

function MetricCard({
  value,
  label,
  detail,
}: MetricCardProps) {
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

function EvidenceImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <motion.figure {...fadeUp}>
      <ImageViewer
        src={src}
        alt={alt}
        className="bg-surface-1/60"
      />

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
            Pipeline Diagnostic & Revenue Forecasting
          </h1>

          <p className="mt-4 text-sm font-medium text-text-tertiary">
            Independent B2B SaaS Revenue Operations Simulation
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
            Analyzed pipeline visibility, CRM data quality, lead-source
            performance, sales execution, and forecasting accuracy across a
            simulated mid-market B2B SaaS organization using HubSpot, SQL,
            Power BI, Excel, and Python.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <SignalTag>Pipeline Visibility</SignalTag>
            <SignalTag>Forecasting Accuracy</SignalTag>
            <SignalTag>Data Quality</SignalTag>
            <SignalTag>Lead-Source Analysis</SignalTag>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <MetricCard
              value="$70,900"
              label="Pipeline Opportunity"
              detail="Identified from Demo-stage improvement analysis."
            />

            <MetricCard
              value="23.1% vs 9.1%"
              label="Win-Rate Gap"
              detail="Referral vs Outbound source performance spread."
            />

            <MetricCard
              value="0.25x vs 3x"
              label="Coverage Gap"
              detail="Actual vs benchmark pipeline coverage ratio."
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
        title="Pipeline slowdown, source-quality variance, and forecasting gaps across a B2B SaaS sales organization"
        description="A concise overview of the revenue operations diagnostic, key findings, and recommended actions."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <p className="text-base leading-7 text-text-secondary">
            A mid-market B2B SaaS organization experienced declining pipeline
            velocity, inconsistent CRM data quality, and unreliable revenue
            forecasting. Diagnostic analysis revealed a Demo-stage bottleneck
            averaging 15 days — the longest stage in the funnel — suppressing
            conversion rates and creating pipeline stagnation. Lead-source
            analysis uncovered a significant quality variance: Referral leads
            converted at 23.1% compared to 9.1% for Outbound, yet investment
            allocation did not reflect this gap. Pipeline coverage measured
            0.25x against a 3x benchmark, exposing a structural shortfall
            between active pipeline and quota targets. Weighted forecasting
            models revealed a large gap between raw pipeline value and
            forecastable revenue. RevOps recommendations included stage-exit
            criteria, stale-deal workflows, source reallocation, weekly
            forecast cadence, and SLA adherence monitoring.
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
    { label: 'Customer Base', value: 'Multi-industry (SaaS/Tech, Healthcare, Finance, Retail, Manufacturing)' },
    { label: 'Scale', value: 'Simulated mid-market organization' },
    { label: 'Sales Team', value: '15 reps' },
    { label: 'Revenue Model', value: 'Subscription / contract-based recurring revenue' },
  ];

  return (
    <Section id="business-context" className="bg-surface-1/30">
      <ChapterHeading
        number="02"
        eyebrow="Business Context"
        title="A subscription-based B2B SaaS organization with a 15-rep sales team"
        description="The simulation modeled a mid-market SaaS company operating across multiple verticals with a recurring revenue model and structured sales pipeline."
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
      title: 'Limited Pipeline Visibility',
      description:
        'Sales leadership lacked a consolidated view of pipeline health, stage aging, and conversion rates, making it difficult to identify bottlenecks or prioritize coaching interventions.',
    },
    {
      title: 'CRM Data-Quality Inconsistency',
      description:
        'Incomplete deal records, inconsistent stage definitions, and missing close-date fields degraded the reliability of pipeline reporting and forecasting models.',
    },
    {
      title: 'Weak Lead-Source Performance',
      description:
        'Significant variance existed between lead sources (Referral at 23.1% vs Outbound at 9.1%), but investment allocation did not reflect source-quality differences, resulting in revenue leakage.',
    },
    {
      title: 'Forecasting Reliability Concerns',
      description:
        'Raw pipeline value created an inflated sense of revenue confidence. Without stage-weighted probability models, forecast accuracy was unreliable and decision-making risk was elevated.',
    },
  ];

  return (
    <Section id="revenue-problem">
      <ChapterHeading
        number="03"
        eyebrow="Revenue Problem"
        title="Four core issues limiting pipeline performance and revenue predictability"
        description="The diagnostic identified structural gaps in pipeline visibility, data quality, source optimization, and forecasting discipline that collectively increased revenue leakage and decision-making risk."
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
    'Opportunities pipeline data',
    'Lead-source attribution data',
    'Sales-rep activity data',
    'Quota attainment data',
    'Forecast and stage-probability model',
    'SQLite analytical database',
  ];

  return (
    <Section id="data-sources" className="bg-surface-1/30">
      <ChapterHeading
        number="04"
        eyebrow="Data Sources"
        title="Structured revenue data extracted and modeled for diagnostic analysis"
        description="Seven data sources were consolidated into an analytical database to support pipeline, funnel, rep-performance, and forecasting analysis."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Database
              size={20}
              className="text-accent"
              aria-hidden="true"
            />

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
      detail: '25 analytical queries across pipeline, funnel, rep, and forecast dimensions.',
    },
    {
      tool: 'Power BI',
      detail: 'Executive dashboarding for pipeline health, rep performance, and forecast outlook.',
    },
    {
      tool: 'Excel',
      detail: 'Forecast modeling with stage-weighted probability scenarios.',
    },
    {
      tool: 'Python (pandas, Faker)',
      detail: 'Dataset generation and data preparation for the simulated CRM environment.',
    },
  ];

  const analysisMethods = [
    'Funnel analysis',
    'Stage-conversion analysis',
    'Rep-performance analysis',
    'Forecast-scenario modeling',
  ];

  return (
    <Section id="analytical-approach">
      <ChapterHeading
        number="05"
        eyebrow="Analytical Approach"
        title="Multi-tool revenue operations analysis across four diagnostic dimensions"
        description="The diagnostic combined SQL querying, dashboarding, forecast modeling, and data generation to analyze pipeline health from multiple angles."
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
            <Search
              size={20}
              className="text-accent"
              aria-hidden="true"
            />

            <h3 className="text-lg font-semibold text-text-primary">
              Analysis Methods
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {analysisMethods.map((method, index) => (
              <div
                key={method}
                className="flex items-center gap-3"
              >
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

function RevenueFunnel() {
  const stages = [
    { name: 'Lead', color: 'bg-accent/20 text-accent border-accent/20' },
    { name: 'MQL', color: 'bg-accent/20 text-accent border-accent/20' },
    { name: 'Demo', color: 'bg-red-500/20 text-red-400 border-red-500/20' },
    { name: 'Proposal', color: 'bg-accent-2/20 text-accent-2 border-accent-2/20' },
    { name: 'Negotiation', color: 'bg-accent-2/20 text-accent-2 border-accent-2/20' },
    { name: 'Closed Won', color: 'bg-accent-3/20 text-accent-3 border-accent-3/20' },
  ];

  return (
    <Section id="revenue-funnel" className="bg-surface-1/30">
      <ChapterHeading
        number="06"
        eyebrow="Revenue Funnel"
        title="Six-stage pipeline operating model with a Demo-stage bottleneck"
        description="The revenue funnel analysis revealed the Demo stage as the primary conversion bottleneck, averaging 15 days — the longest stage in the pipeline."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-text-primary">
            Pipeline Flow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {stages.map((stage, index) => (
              <div
                key={stage.name}
                className="flex items-center gap-3"
              >
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
                Primary Bottleneck: Demo → Proposal
              </p>
            </div>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
              The Demo stage averaged 15 days, the longest stage in the funnel.
              Deals stalling at Demo suppressed downstream conversion rates
              and inflated pipeline aging, reducing overall forecast reliability.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Closed Lost branch */}
      <motion.div {...fadeUp} className="mt-4">
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <TrendingUp
              size={18}
              className="shrink-0 text-text-tertiary"
              aria-hidden="true"
            />

            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Closed Lost</span> exits
              occurred at every stage post-MQL, with the highest concentration at Demo
              and Proposal stages.
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
      category: 'Lead Source Performance',
      items: [
        { metric: 'Referral Win Rate', value: '23.1%' },
        { metric: 'Outbound Win Rate', value: '9.1%' },
      ],
      insight: 'A 14-percentage-point spread between the highest and lowest converting lead sources, indicating significant source-quality variance.',
    },
    {
      category: 'Pipeline Bottleneck',
      items: [
        { metric: 'Demo Stage Duration', value: '15 days avg' },
      ],
      insight: 'The Demo stage was the longest-duration stage in the pipeline, creating deal stagnation and reducing downstream conversion velocity.',
    },
    {
      category: 'Coverage Finding',
      items: [
        { metric: 'Actual Coverage', value: '0.25x' },
        { metric: 'Benchmark', value: '3x' },
      ],
      insight: 'Pipeline coverage fell far below the standard 3x benchmark, exposing a structural gap between active pipeline and quota targets.',
    },
    {
      category: 'Rep Execution',
      items: [
        { metric: 'SLA-Miss Impact', value: 'Lower win rates' },
      ],
      insight: 'Reps who missed follow-up SLAs showed materially lower win rates and quota attainment, identifying a coaching cohort.',
    },
  ];

  return (
    <Section id="sql-findings">
      <ChapterHeading
        number="07"
        eyebrow="SQL Findings"
        title="25 analytical queries surfacing pipeline, source, coverage, and execution insights"
        description="SQL analysis across the CRM dataset revealed actionable patterns in lead-source performance, stage duration, coverage ratios, and rep-level execution."
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
        title="Power BI executive dashboards surfacing pipeline, rep, and forecast visibility"
        description="Three analytical dashboards were built to consolidate pipeline health, sales-rep performance, and revenue forecast visibility into decision-ready views."
      />

      {/* 8.1 Pipeline Health Dashboard */}
      <motion.div {...fadeUp} className="mb-8">
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <BarChart3
              size={20}
              className="text-accent"
              aria-hidden="true"
            />

            <h3 className="text-lg font-semibold text-text-primary">
              Pipeline Health Dashboard
            </h3>
          </div>

          <EvidenceImage
            src="/images/projects/pipeline-diagnostic/pipeline-health-dashboard.png"
            alt="Pipeline Health Dashboard showing conversion rates, stage aging, and lead-source performance"
            caption="Pipeline conversion, stage aging, and lead-source performance revealed a Demo-stage bottleneck and significant source-quality variance."
          />
        </Card>
      </motion.div>

      {/* 8.2 Sales Rep Performance Dashboard */}
      <motion.div {...fadeUp} className="mb-8">
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Target
              size={20}
              className="text-accent"
              aria-hidden="true"
            />

            <h3 className="text-lg font-semibold text-text-primary">
              Sales Rep Performance Dashboard
            </h3>
          </div>

          <EvidenceImage
            src="/images/projects/pipeline-diagnostic/sales-rep-performance-dashboard.png"
            alt="Sales Rep Performance Dashboard showing conversion and quota analysis"
            caption="Rep-level conversion and quota analysis highlighted coaching opportunities and execution variance across the sales team."
          />
        </Card>
      </motion.div>

      {/* 8.3 Revenue Forecast & Pipeline Outlook */}
      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp
              size={20}
              className="text-accent"
              aria-hidden="true"
            />

            <h3 className="text-lg font-semibold text-text-primary">
              Revenue Forecast & Pipeline Outlook
            </h3>
          </div>

          <EvidenceImage
            src="/images/projects/pipeline-diagnostic/revenue-forecast-pipeline-outlook.png"
            alt="Revenue Forecast and Pipeline Outlook Dashboard"
            caption="Weighted pipeline analysis showed a large gap between raw pipeline value and forecastable revenue."
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
    'Implement stale-deal workflow alerts in HubSpot.',
    'Introduce stage-exit criteria for Demo and Proposal stages.',
    'Reallocate outbound investment toward higher-converting channels.',
    'Create weekly forecast review cadence with stage-weighted forecasting.',
    'Launch SLA adherence monitoring for sales-rep follow-up.',
    'Establish CRM hygiene governance for pipeline ownership and stage accuracy.',
  ];

  return (
    <Section id="recommendations">
      <ChapterHeading
        number="09"
        eyebrow="Operational Recommendations"
        title="Six RevOps actions to improve pipeline velocity, forecast accuracy, and sales execution"
        description="Recommendations translated diagnostic findings into actionable operational improvements that a revenue operations team could implement immediately."
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
    {
      area: 'Pipeline Opportunity',
      outcome: '$70,900 identified from Demo-stage improvement',
    },
    {
      area: 'Lead Source Gap',
      outcome: '23.1% vs 9.1% win-rate spread quantified',
    },
    {
      area: 'Coverage Gap',
      outcome: '0.25x vs 3x benchmark shortfall identified',
    },
    {
      area: 'Forecast Visibility',
      outcome: 'Weighted pipeline model established for revenue planning',
    },
    {
      area: 'Sales Execution',
      outcome: 'SLA-miss coaching cohort identified',
    },
  ];

  return (
    <Section id="business-impact" className="bg-surface-1/30">
      <ChapterHeading
        number="10"
        eyebrow="Business Impact"
        title="Quantified revenue insights and operational improvements"
        description="The diagnostic produced measurable findings that directly inform pipeline management, source allocation, forecast cadence, and coaching prioritization."
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
    'Power BI dashboard pack',
    'SQL analysis workbook',
    'Forecast model (Excel)',
    'CRM audit findings',
    'Workflow design recommendations',
    'KPI dictionary',
    'Decision log',
  ];

  return (
    <Section id="artifacts">
      <ChapterHeading
        number="11"
        eyebrow="Artifacts & Deliverables"
        title="Revenue operations deliverables produced during the diagnostic"
        description="Seven deliverables were created to support the pipeline diagnostic, covering dashboarding, SQL analysis, forecasting, CRM governance, and operational recommendations."
      />

      <motion.div {...fadeUp}>
        <Card className="p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <FileText
              size={20}
              className="text-accent"
              aria-hidden="true"
            />

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
          <ExternalLink
            size={17}
            aria-hidden="true"
          />

          View GitHub Repository

          <ArrowRight
            size={14}
            aria-hidden="true"
          />
        </a>

        <Link
          to="/#projects"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/50 px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
          />

          Back to Featured Work
        </Link>

        <Link
          to="/projects/renewal-risk-expansion-analysis"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/50 px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Next Case Study

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function PipelineDiagnosticRevenueForecasting() {
  useEffect(() => {
    document.title = 'Pipeline Diagnostic & Revenue Forecasting | Vithun TR';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Revenue operations case study analyzing pipeline visibility, CRM data quality, lead-source performance, and revenue forecasting across a simulated B2B SaaS sales organization.'
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

      <RevenueFunnel />

      <SqlFindings />

      <DashboardInsights />

      <OperationalRecommendations />

      <BusinessImpact />

      <ArtifactsAndDeliverables />
    </main>
  );
}
