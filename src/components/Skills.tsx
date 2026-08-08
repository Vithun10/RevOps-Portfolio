import { motion } from 'framer-motion';
import { BarChart3, Target, Users } from 'lucide-react';

import { skillCategories } from '../data/portfolio';
import {
  fadeInUp,
  viewportConfig,
  staggerContainer,
} from '../utils/animations';

import SectionHeader from './SectionHeader';

const iconMap: Record<string, typeof Target> = {
  target: Target,
  users: Users,
  chart: BarChart3,
};

const styleMap: Record<string, { iconBg: string; text: string; tagBorder: string; tagBg: string }> = {
  'Revenue Operations': { iconBg: 'bg-accent/15', text: 'text-accent', tagBorder: 'border-accent/15', tagBg: 'bg-accent/10' },
  'Systems & Execution': { iconBg: 'bg-accent-2/15', text: 'text-accent-2', tagBorder: 'border-accent-2/15', tagBg: 'bg-accent-2/10' },
  'Revenue Analytics': { iconBg: 'bg-accent-3/15', text: 'text-accent-3', tagBorder: 'border-accent-3/15', tagBg: 'bg-accent-3/10' },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
      aria-label="Revenue capabilities"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionHeader
            tag="CAPABILITIES"
            title={
              <>
                Revenue{' '}
                <span className="text-gradient">
                  Capabilities
                </span>
              </>
            }
            description="The capabilities demonstrated across the revenue operations projects, covering CRM systems, pipeline operations, forecasting, analytics, and operational execution in B2B SaaS environments."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {skillCategories.map((category, catIdx) => {
              const Icon = iconMap[category.icon] ?? Target;

              const styles = styleMap[category.title] ?? styleMap['Revenue Operations'];

              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  custom={catIdx}
                  className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:glow-accent md:p-8"
                >
                  {/* Capability Icon */}
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200 ${styles.iconBg}`}>
                    <Icon
                      size={22}
                      className={styles.text}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Capability */}
                  <h3 className="mb-1 text-lg font-bold text-text-primary">
                    {category.title}
                  </h3>

                  <p className="mb-6 text-xs text-text-tertiary">
                    {category.subtitle}
                  </p>

                  {/* Supporting Competencies */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`cursor-default rounded-lg border px-3 py-1.5 text-xs transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] inline-block ${styles.text} ${styles.tagBorder} ${styles.tagBg}`}
                      >
                        {skill}
                      </span>
                    ))}
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