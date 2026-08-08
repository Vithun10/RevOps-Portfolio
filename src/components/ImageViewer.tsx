import { useState, useEffect, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageViewer({ src, alt, className = '' }: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'Tab') {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when modal opens
      const focusTimeout = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(focusTimeout);
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      // Restore focus to trigger card when modal closes
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);

  const handlePreviewKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <>
      <div 
        ref={triggerRef}
        className={`group relative overflow-hidden rounded-xl border border-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 ${className}`}
        role="button"
        tabIndex={0}
        aria-label={`Open ${alt} in preview`}
        onClick={handleOpen}
        onKeyDown={handlePreviewKeyDown}
      >
        <img 
          src={src} 
          alt={alt} 
          loading="lazy"
          decoding="async"
          width={1200}
          height={800}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
        />
        <div className="absolute inset-0 bg-surface-0/0 group-hover:bg-surface-0/20 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 w-12 h-12 rounded-full bg-surface-1/90 backdrop-blur-md flex items-center justify-center border border-border/50 text-accent shadow-xl">
            <ZoomIn size={20} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-0/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={() => setIsOpen(false)}
          >
            <button
              ref={closeBtnRef}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-surface-1/80 text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={src} 
                alt={alt} 
                loading="eager"
                decoding="async"
                width={1600}
                height={1200}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-border" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
