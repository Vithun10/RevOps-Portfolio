import { ArrowUp, Mail } from 'lucide-react';

import { identity } from '../data/portfolio';

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7C5.73.7.65 5.78.65 12.05c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.17c-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.44.11-3 0 0 .95-.31 3.12 1.16a10.83 10.83 0 0 1 5.68 0c2.17-1.47 3.12-1.16 3.12-1.16.62 1.56.23 2.71.11 3 .73.8 1.17 1.81 1.17 3.05 0 4.36-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.1v3.18c0 .3.21.66.78.55a11.36 11.36 0 0 0 7.77-10.78C23.35 5.78 18.27.7 12 .7z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const linkClassName =
    'flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2/40 text-text-tertiary transition-all duration-200 hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

  return (
    <footer
      className="relative border-t border-border py-10"
      aria-label="Footer"
    >
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-accent to-accent-2 text-[10px] font-bold text-white"
              aria-hidden="true"
            >
              VT
            </div>

            <div>
              <p className="text-sm font-medium text-text-primary">
                {identity.name}
              </p>

              <p className="text-xs text-text-tertiary">
                {identity.title} · {identity.location}
              </p>
            </div>
          </div>

          {/* Copyright & Description */}
          <div className="text-center text-xs text-text-tertiary max-w-md mx-auto order-last md:order-none mt-4 md:mt-0">
            <p className="mb-2 hidden lg:block">
              Revenue Operations portfolio focused on B2B SaaS pipeline operations, forecasting, retention analytics, CRM systems, and operational execution.
            </p>
            <p>
              © {currentYear} {identity.name}. All rights reserved.
            </p>
          </div>

          {/* Contact + Utility Links */}
          <div
            className="flex items-center gap-2"
            aria-label="Footer links"
          >
            <a
              href={`mailto:${identity.contact.email}`}
              aria-label={`Email ${identity.name}`}
              title="Email"
              className={linkClassName}
            >
              <Mail size={15} aria-hidden="true" />
            </a>

            <a
              href={identity.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${identity.name} on LinkedIn`}
              title="LinkedIn"
              className={linkClassName}
            >
              <LinkedInIcon />
            </a>

            <a
              href={identity.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${identity.name} on GitHub`}
              title="GitHub"
              className={linkClassName}
            >
              <GitHubIcon />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className={`${linkClassName} cursor-pointer`}
            >
              <ArrowUp size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}