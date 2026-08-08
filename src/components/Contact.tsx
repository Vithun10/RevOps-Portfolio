import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowUpRight,
  Globe,
  Code2,
  Phone,
  FileText,
} from 'lucide-react';

import {
  fadeInUp,
  viewportConfig,
  staggerContainer,
} from '../utils/animations';

import { identity } from '../data/portfolio';

const contactLinks = [
  {
    label: 'Email',
    icon: Mail,
    href: `mailto:${identity.contact.email}`,
    display: identity.contact.email,
    color: '#6C8CFF',
  },
  {
    label: 'LinkedIn',
    icon: Globe,
    href: identity.contact.linkedin,
    display: 'linkedin.com/in/vithun-r-revops',
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    icon: Code2,
    href: identity.contact.github,
    display: 'github.com/Vithun10/RevOps-Projects',
    color: '#A78BFA',
  },
  {
    label: 'Phone',
    icon: Phone,
    href: `tel:${identity.contact.phone.replace(/\s+/g, '')}`,
    display: identity.contact.phone,
    color: '#34D399',
  },
];

const resumeCtaButtonClassName =
  'btn-secondary w-full max-w-[220px] sm:max-w-[248px] py-2.5';

const copyEmailButtonClassName =
  'btn-secondary text-xs px-3';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.contact.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      aria-label="Contact"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Label */}
          <motion.span
            variants={fadeInUp}
            className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block font-mono"
          >
            Contact
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Let's Talk{' '}
            <span className="text-gradient">
              Revenue Operations
            </span>
          </motion.h2>

          {/* Positioning */}
          <motion.p
            variants={fadeInUp}
            className="text-text-secondary text-base md:text-lg leading-relaxed mb-12"
          >
            I’m currently exploring Revenue Operations Analyst opportunities in B2B SaaS organizations. If you’re building revenue operations functions where CRM systems, forecasting, customer retention, pipeline analytics, and cross-functional execution drive predictable growth, let’s connect.
          </motion.p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactLinks.map((link, i) => (
              <div
                key={link.label}
                className="flex flex-col items-center gap-2"
              >
                <motion.a
                  href={link.href}
                  target={
                    link.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  variants={fadeInUp}
                  custom={i}
                  className="glass-card rounded-xl p-5 text-center group cursor-pointer transition-all duration-200 w-full hover:-translate-y-0.5"
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: `${link.color}15`,
                    }}
                  >
                    <link.icon
                      size={18}
                      style={{ color: link.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {link.label}
                  </h4>

                  <p className="text-xs text-text-tertiary group-hover:text-text-secondary transition-colors duration-200 flex items-center justify-center gap-1">
                    {link.display}

                    <ArrowUpRight
                      size={10}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                  </p>
                </motion.a>

                {/* Copy Email */}
                {link.label === 'Email' && (
                  <motion.button
                    type="button"
                    aria-label={
                      copied
                        ? 'Email copied'
                        : 'Copy email address'
                    }
                    onClick={handleCopyEmail}
                    variants={fadeInUp}
                    custom={i}
                    className={`${copyEmailButtonClassName} hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] transition-all`}
                  >
                    {copied ? '✓ Copied' : 'Copy Email'}
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          {/* Resume CTA */}
          <motion.div
            variants={fadeInUp}
            id="resume"
            className="flex justify-center mt-8 scroll-mt-24"
          >
            <a
              href={identity.contact.resume}
              download
              aria-label="Download Revenue Operations Analyst resume"
              className={resumeCtaButtonClassName}
            >
              <FileText
                size={16}
                aria-hidden="true"
              />

              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}