import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    const targetId = id.toLowerCase();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };

  const handleNavigation = (link: string) => {
    setMobileOpen(false);

    if (location.pathname === '/') {
      scrollToSection(link);
      return;
    }

    navigate('/', { replace: false });
    window.setTimeout(() => {
      scrollToSection(link);
    }, 120);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/', { replace: false });
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 120);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(6,8,15,0.85)] backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 rounded-lg"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-sm font-bold text-white">
              VT
            </div>
            <span className="text-text-primary font-semibold text-sm tracking-tight hidden sm:block group-hover:text-accent transition-colors duration-200">
              Vithun TR
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavigation(link)}
                className="px-3.5 py-2 text-[13px] text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-2/50 transition-all duration-200 cursor-pointer font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('contact')}
              className="ml-3 btn-secondary"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-surface-0/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => handleNavigation(link)}
                  className="text-lg font-medium text-text-secondary hover:text-text-primary py-3 px-8 rounded-xl hover:bg-surface-2/50 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  {link}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                onClick={() => handleNavigation('contact')}
                className="mt-4 btn-secondary px-8 py-3 text-base"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
