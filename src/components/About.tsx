import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig, staggerContainer } from '../utils/animations';
import { Target, Database, Workflow, BarChart3 } from 'lucide-react';

const strengths = [
  {
    icon: Target,
    title: 'Revenue Operations & Pipeline Management',
    description:
      'Improving pipeline visibility, lead routing, CRM hygiene, stage governance, and revenue process consistency across B2B SaaS go-to-market teams.',
  },
  {
    icon: Database,
    title: 'CRM Systems & Data Operations',
    description:
      'Working with HubSpot, SQL, and structured revenue data to support reporting accuracy, data quality, workflow design, and operational decision-making.',
  },
  {
    icon: Workflow,
    title: 'Forecasting & Revenue Planning',
    description:
      'Building weighted pipeline forecasts, renewal scenarios, expansion models, and revenue planning views that support sales, customer success, and RevOps leadership.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics & Dashboarding',
    description:
      'Using Power BI, Excel, SQL, and customer revenue analytics to surface insights, monitor retention, identify revenue leakage, and support measurable business decisions.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" aria-label="About">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block font-mono">
              About
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              From Revenue Signals to{' '}
              <span className="text-gradient">Revenue Decisions</span>
            </h2>

            <p className="text-text-secondary text-base md:text-lg max-w-3xl leading-relaxed">
              I combine business operations experience, CRM workflow understanding, revenue analytics, forecasting, and process optimization to improve pipeline visibility, forecasting discipline, customer retention, and operational decision-making. I am building toward Revenue Operations roles in B2B SaaS organizations where sales, marketing, customer success, and analytics teams need scalable revenue processes and actionable insights.
            </p>
          </motion.div>

          {/* Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 md:p-8 group transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-200">
                  <s.icon size={20} className="text-accent" />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-text-primary">
                  {s.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}