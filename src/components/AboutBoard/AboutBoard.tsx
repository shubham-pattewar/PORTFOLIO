import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { conceptCards, aboutStatement } from '../../data/aboutCards';

export const AboutBoard: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 01 / ABOUT ME Separator */}
      <SectionHeader number="01" title="ABOUT ME" subtitle="BUILDING WITH PURPOSE" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left 50%: Editorial Statement */}
        <div className="lg:col-span-6 flex flex-col space-y-10">
          <div>
            <div className="inline-block font-mono text-xs font-bold tracking-widest text-[#FF6B9D] dark:text-[#FFD83D] uppercase mb-4">
              // CORE PHILOSOPHY
            </div>
            <h3 className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold uppercase leading-[1.15] text-[var(--text-color)] tracking-tight">
              {aboutStatement}
            </h3>
          </div>

          <div className="border-l-[3px] border-[var(--border-color)] pl-6 py-2 space-y-4">
            <p className="font-sans text-base sm:text-lg text-[var(--text-color)] opacity-85 leading-relaxed">
              I view software development as a rigorous craft. Whether designing multi-modal deep learning models or engineering deterministic web architectures, my focus remains constant: engineering systems that are stable, fast, and purpose-driven.
            </p>
            <div className="font-mono text-xs font-semibold tracking-wider text-[var(--text-color)] opacity-60">
              LOCATION: KOLHAPUR, MAHARASHTRA · AFFILIATION: DYPCET CSE
            </div>
          </div>
        </div>

        {/* Right 50%: Interactive Masonry Board */}
        <div className="lg:col-span-6">
          <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 mb-4 flex items-center justify-between">
            <span>// GUIDING PRINCIPLES</span>
            <span>HOVER / FOCUS TO REVEAL</span>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {conceptCards.map((card) => {
              const isHovered = activeCard === card.id;

              return (
                <div
                  key={card.id}
                  className={`${card.colSpan} transition-all duration-200`}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onFocus={() => setActiveCard(card.id)}
                  onBlur={() => setActiveCard(null)}
                  tabIndex={0}
                  role="region"
                  aria-label={card.title}
                >
                  <div
                    className={`neo-box p-5 cursor-pointer relative transition-all duration-200 ${
                      isHovered ? 'scale-[1.02] shadow-[12px_12px_0px_var(--shadow-color)]' : ''
                    }`}
                    style={{
                      transform: isHovered ? 'translate(-2px, -2px) rotate(0deg)' : `rotate(${card.rotation})`,
                      borderTop: `4px solid ${card.accent}`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[var(--text-color)] opacity-60">
                        {card.number}
                      </span>
                      <span
                        className="w-2.5 h-2.5 border border-[var(--border-color)]"
                        style={{ backgroundColor: card.accent }}
                      />
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-[var(--text-color)] tracking-tight">
                      {card.title}
                    </h4>

                    {/* Detailed Explanation */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isHovered ? 'max-h-40 opacity-100 mt-3 pt-3 border-t-2 border-[var(--border-color)]/20' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-90 leading-relaxed">
                        {card.explanation}
                      </p>
                    </div>

                    {/* Hint indicator if not hovered */}
                    {!isHovered && (
                      <div className="mt-2 text-right">
                        <span className="font-mono text-[10px] tracking-wider opacity-40 uppercase">
                          + DETAILS
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
