import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ── Lazy-loaded pages ──────────────────────────────────────────── */


// RevOps case studies
const PipelineDiagnosticRevenueForecasting = lazy(
  () => import('./pages/PipelineDiagnosticRevenueForecasting')
);

const RenewalRiskExpansionAnalysis = lazy(
  () => import('./pages/RenewalRiskExpansionAnalysis')
);

/* ── Loading fallback ───────────────────────────────────────────── */

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />

        <span className="text-sm text-text-secondary">
          Loading…
        </span>
      </div>
    </div>
  );
}

/* ── Home Layout ────────────────────────────────────────────────── */

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

/* ── Application ────────────────────────────────────────────────── */

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        const id = location.hash.replace('#', '').toLowerCase();
        // Use requestAnimationFrame to ensure DOM rendering has finished
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      } else {
        // Safe scroll to top on back navigation to root page without hash
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen noise-overlay">
      <Navbar />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={<HomePage />}
            />


            {/* ── RevOps Case Studies ───────────────────────────── */}

            <Route
              path="/projects/pipeline-diagnostic-revenue-forecasting"
              element={<PipelineDiagnosticRevenueForecasting />}
            />

            <Route
              path="/projects/renewal-risk-expansion-analysis"
              element={<RenewalRiskExpansionAnalysis />}
            />

            {/* Fallback */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}