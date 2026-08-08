import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../utils/animations';

interface SectionHeaderProps {
  tag: string;
  title: ReactNode;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="mb-16"
    >
      <span className="text-xs font-semibold tracking-[0.16em] uppercase text-accent mb-3 block font-mono">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base md:text-lg max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
