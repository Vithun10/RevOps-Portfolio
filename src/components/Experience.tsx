import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  MapPin,
  Target,
} from 'lucide-react';

import { careerMilestones } from '../data/portfolio';
import {
  fadeInUp,
  viewportConfig,
  staggerContainer,
} from '../utils/animations';

import SectionHeader from './SectionHeader';

const badgeIconMap = {
  'Technical Foundation': GraduationCap,
  'Professional Experience': BriefcaseBusiness,
  'Revenue Operations Direction': Target,
};

const milestoneColorMap: Record<
  string,
  {
    badgeClass: string;
    dotBorder: string;
    dotBg: string;
    cardClass?: string;
  }
> = {
  'Technical Foundation': {
    badgeClass: 'badge badge-green',
    dotBorder: 'border-accent-3',
    dotBg: 'bg-accent-3',
  },
  'Professional Experience': {
    badgeClass: 'badge badge-accent',
    dotBorder: 'border-accent',
    dotBg: 'bg-accent',
  },
  'Revenue Operations Direction': {
    badgeClass: 'badge badge-purple',
    dotBorder: 'border-accent-2',
    dotBg: 'bg-accent-2',
    cardClass: 'border-dashed border-accent-2/30 bg-gradient-to-r from-surface-1 to-accent-2/[0.02]',
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32"
      aria-label="Career journey"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionHeader
            tag="EXPERIENCE"
            title={
              <>
                Career{' '}
                <span className="text-gradient">
                  Journey
                </span>
              </>
            }
            description="Business operations experience with exposure to reporting, forecasting, operational analytics, process coordination, and revenue operations workflows in a B2B business environment."
          />

          <div className="relative">
            {/* Timeline */}
            <div
              className="absolute bottom-0 left-5 top-0 w-px bg-border md:left-8"
              aria-hidden="true"
            />

            {careerMilestones.map((milestone, idx) => {
              const BadgeIcon =
                badgeIconMap[
                  milestone.badge as keyof typeof badgeIconMap
                ] ?? Target;

              const style = milestoneColorMap[milestone.badge] ?? {
                badgeClass: 'badge badge-accent',
                dotBorder: 'border-accent',
                dotBg: 'bg-accent',
              };

              return (
                <motion.div
                  key={`${milestone.title}-${milestone.period}`}
                  variants={fadeInUp}
                  custom={idx}
                  className="relative pb-12 pl-14 last:pb-0 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-3 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-surface-0 md:left-6 ${style.dotBorder}`}
                    aria-hidden="true"
                  >
                    <div className={`h-1.5 w-1.5 rounded-full ${style.dotBg}`} />
                  </div>

                  {/* Milestone Card */}
                  <div className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 ${style.cardClass ?? ''}`}>
                    {/* Metadata */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className={style.badgeClass}>
                        <BadgeIcon
                          size={12}
                          aria-hidden="true"
                        />
                        {milestone.badge}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
                        <Calendar
                          size={12}
                          aria-hidden="true"
                        />
                        {milestone.period}
                      </span>

                      {milestone.location && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
                          <MapPin
                            size={12}
                            aria-hidden="true"
                          />
                          {milestone.location}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-1 text-xl font-bold text-text-primary">
                      {milestone.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-sm text-accent">
                      {milestone.organization}
                    </p>

                    {/* Direction / Context */}
                    {milestone.subtitle && (
                      <p className="mt-1 text-xs font-medium text-text-tertiary">
                        {milestone.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="mb-5 mt-4 text-sm leading-relaxed text-text-secondary">
                      {milestone.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {milestone.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-xs text-text-secondary"
                        >
                          <span
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3"
                            aria-hidden="true"
                          />

                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}