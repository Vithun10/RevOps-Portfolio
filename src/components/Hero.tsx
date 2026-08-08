import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, GraduationCap, School } from 'lucide-react';
import { identity, hero } from '../data/portfolio';

const SPECIALIZATIONS = [
  'Revenue Analytics',
  'Pipeline Operations',
  'Revenue Forecasting',
] as const;

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const nextRole = useCallback(() => {
    setCurrentRole((prev) => (prev + 1) % SPECIALIZATIONS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextRole, 2800);
    return () => clearInterval(interval);
  }, [nextRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[60px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-accent-2/[0.04] blur-[50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-3/[0.02] blur-[80px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(108,140,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,140,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center py-32 md:py-0">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/60 border border-border mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent-3 animate-pulse" />
          <span className="text-xs font-medium text-text-secondary tracking-wide">
            {hero.status}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4"
        >
          {hero.name}
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary">
            Revenue Operations Analyst
          </span>
          <span className="hidden sm:inline-block text-xl sm:text-2xl md:text-3xl font-semibold text-text-tertiary">
            ·
          </span>
          <span
            key={currentRole}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient text-center"
          >
            {SPECIALIZATIONS[currentRole]}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {hero.valueProposition}
        </motion.p>

        {/* Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2/40 border border-border text-xs text-text-secondary">
            <MapPin size={13} className="text-accent" />
            {identity.location}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2/40 border border-border text-xs text-text-secondary">
            <GraduationCap size={13} className="text-accent-2" />
            {identity.education.degree}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2/40 border border-border text-xs text-text-secondary">
            <School size={13} className="text-accent-3" />
            {identity.education.university}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_30px_-5px_rgba(108,140,255,0.4)] cursor-pointer"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-secondary px-6 py-3"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
