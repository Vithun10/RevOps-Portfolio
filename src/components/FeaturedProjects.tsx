import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  Target,
  TrendingUp,
} from 'lucide-react';

import { featuredProjects, type Project } from '../data/portfolio';
import {
  fadeInUp,
  viewportConfig,
  staggerContainer,
} from '../utils/animations';
import SectionHeader from './SectionHeader';

/* ── Badge ─────────────────────────────────────────────────────── */

function Badge({
  children,
  color = 'accent',
}: {
  children: string;
  color?: 'accent' | 'green' | 'purple';
}) {
  const colorMap = {
    accent: 'badge-accent',
    green: 'badge-green',
    purple: 'badge-purple',
  };

  return (
    <span className={`badge ${colorMap[color]}`}>
      {children}
    </span>
  );
}

/* ── Project Metric ────────────────────────────────────────────── */

function ProjectMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/40 px-4 py-3">
      <div className="text-lg md:text-xl font-bold text-text-primary tracking-tight">
        {value}
      </div>

      <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-text-tertiary">
        {label}
      </div>
    </div>
  );
}

/* ── Project Card ──────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="glass-card rounded-2xl p-6 md:p-8 group hover:glow-accent transition-all duration-300 flex flex-col h-full"
    >
      {/* Context */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        {project.industry.split(' ').map((ind) => (
          <Badge key={`${project.slug}-${ind}`} color="green">
            {ind}
          </Badge>
        ))}
        <Badge color="accent">{project.category}</Badge>
      </div>

      {/* Project Identity */}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-5">
        {project.portfolioRole}
      </p>

      {/* Summary */}
      <p className="text-sm text-text-secondary leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Business Context */}
      <div className="rounded-xl border border-border bg-surface-2/30 p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Target size={15} className="text-accent" />

          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Business Context
          </h4>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          {project.productSignal.customerProblem}
        </p>

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
          <TrendingUp
            size={14}
            className="text-accent-3 shrink-0"
          />

          <span className="text-sm font-medium text-text-primary">
            {project.productSignal.businessExposure}
          </span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {project.metrics.map((metric) => (
          <ProjectMetric
            key={`${project.slug}-${metric.label}`}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </div>

      {/* Revenue Signals */}
      <div className="mb-8">
        <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
          Revenue Signals
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.capabilities.map((capability) => (
            <span
              key={`${project.slug}-${capability}`}
              className="px-2.5 py-1.5 text-xs rounded-md bg-surface-2/40 text-text-secondary border border-border"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-6 border-t border-border mt-auto">
        <Link
          to={project.links.caseStudy}
          aria-label={`View ${project.title} case study`}
          className="btn-secondary px-5 py-2.5"
        >
          <BookOpen size={14} />

          View Case Study

          <ArrowUpRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}

/* ── Featured Projects ─────────────────────────────────────────── */

export default function FeaturedProjects() {
  const projects = [...featuredProjects].sort(
    (a, b) => a.priority - b.priority,
  );

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32"
      aria-label="Featured Projects"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionHeader
            tag="Projects"
            title={
              <>
                Featured{' '}
                <span className="text-gradient">
                  Work
                </span>
              </>
            }
            description="Independent B2B SaaS revenue operations simulations focused on pipeline visibility, forecasting, retention analytics, and expansion revenue optimization."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}