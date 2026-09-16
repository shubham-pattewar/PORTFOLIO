import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { technologies } from '../../data/technologies';

export const TechWall: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section id="tech" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 03 / TECH WALL Separator */}
      <SectionHeader
        number="03"
        title="TECH WALL"
        subtitle="VERIFIED APPLIED STACK"
      />

      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <p className="font-sans text-base sm:text-lg text-[var(--text-color)] opacity-85 max-w-xl">
          Technologies actively used across production architectures, machine learning pipelines, and distributed web services.
        </p>
        <div className="font-mono text-xs font-semibold tracking-wider text-[var(--text-color)] opacity-60">
          HOVER / FOCUS FOR PROJECT CONTEXT
        </div>
      </div>

      {/* Unified Asymmetric Wall of Chunky Blocks */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
        {technologies.map((tech) => {
          const isFocused = activeTech === tech.name;

          return (
            <div
              key={tech.name}
              role="region"
              tabIndex={0}
              onMouseEnter={() => setActiveTech(tech.name)}
              onMouseLeave={() => setActiveTech(null)}
              onFocus={() => setActiveTech(tech.name)}
              onBlur={() => setActiveTech(null)}
              aria-label={`${tech.name} technology details`}
              className="neo-box p-4 sm:p-5 cursor-pointer bg-[var(--surface-card)] transition-all duration-150 relative select-none flex flex-col justify-between min-h-[120px]"
              style={{
                transform: isFocused
                  ? 'translate(-4px, -4px) scale(1.02)'
                  : tech.rotation
                  ? `rotate(${tech.rotation})`
                  : undefined,
                boxShadow: isFocused ? '10px 10px 0px var(--shadow-color)' : '5px 5px 0px var(--shadow-color)',
                borderTop: `4px solid ${tech.accent}`,
              }}
            >
              {/* Top info */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[var(--text-color)] opacity-50 uppercase">
                  STACK
                </span>
                <span
                  className="w-2 h-2 border border-[var(--border-color)]"
                  style={{ backgroundColor: tech.accent }}
                />
              </div>

              {/* Technology Name */}
              <div className="my-2">
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-[var(--text-color)] tracking-tight">
                  {tech.name}
                </h3>
              </div>

              {/* Dynamic Reveal: "USED IN → ..." */}
              <div className="border-t border-[var(--border-color)]/20 pt-2 min-h-[36px] flex flex-col justify-end">
                {isFocused ? (
                  <div className="transition-opacity duration-150">
                    <span className="font-mono text-[9px] font-bold text-[#FF6B9D] dark:text-[#FFD83D] block">
                      USED IN →
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[var(--text-color)] opacity-90 line-clamp-1">
                      {tech.usedIn.join(' · ')}
                    </span>
                  </div>
                ) : (
                  <span className="font-mono text-[10px] opacity-40">
                    {tech.usedIn.length} verified project{tech.usedIn.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
