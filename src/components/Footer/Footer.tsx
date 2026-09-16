import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t-[3px] border-[var(--border-color)] bg-[var(--surface-card)] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Poster Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b-2 border-[var(--border-color)]">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold tracking-widest text-[#FF6B9D] dark:text-[#FFD83D] uppercase block">
              // END OF TRANSMISSION
            </span>
            <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-[var(--text-color)]">
              SHUBHAM PATTEWAR
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[var(--text-color)] opacity-75 max-w-xl pt-2">
              ENGINEERING SYSTEMS · DESIGNING INTERACTION · DEPLOYING WITH PURPOSE
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="neo-btn p-4 self-start lg:self-end"
          >
            <ArrowUp className="w-5 h-5 text-[var(--text-color)]" />
          </button>
        </div>

        {/* Bottom Bar: Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/shubham-pattewar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--text-color)] hover:text-[#FF6B9D] dark:hover:text-[#FFD83D] transition-colors"
            >
              GITHUB ↗
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/shubham-pattewar-39a1942b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--text-color)] hover:text-[#FF6B9D] dark:hover:text-[#FFD83D] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <span>·</span>
            <a
              href="mailto:sspattewar2004@gmail.com"
              className="font-bold text-[var(--text-color)] hover:text-[#FF6B9D] dark:hover:text-[#FFD83D] transition-colors"
            >
              EMAIL ↗
            </a>
          </div>

          <div className="flex items-center gap-3 opacity-70">
            <span>KOLHAPUR, INDIA</span>
            <span>·</span>
            <span>© 2026 SHUBHAM PATTEWAR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
