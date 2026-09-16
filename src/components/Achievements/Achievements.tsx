import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { achievements } from '../../data/achievements';
import { Award, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 04 / ACHIEVEMENTS Separator */}
      <SectionHeader
        number="04"
        title="ACHIEVEMENTS"
        subtitle="COMPETITIVE HONORS & ACADEMIC MERIT"
      />

      <div className="mb-10 max-w-xl">
        <p className="font-sans text-base sm:text-lg text-[var(--text-color)] opacity-85">
          Demonstrated technical competitive capability, national-level problem solving, and top-tier academic ranking.
        </p>
      </div>

      {/* Desktop Horizontal Timeline / Mobile Vertical Timeline Container */}
      <div className="relative">
        {/* Horizontal Connector Line for Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--border-color)] -translate-y-1/2 z-0" />

        {/* Vertical Connector Line for Mobile */}
        <div className="lg:hidden absolute top-0 bottom-0 left-6 w-1 bg-[var(--border-color)] z-0" />

        {/* Cards Grid / Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {achievements.map((item, index) => (
            <div key={item.id} className="relative flex flex-col pl-14 lg:pl-0">
              {/* Mobile Timeline Node Dot */}
              <div
                className="lg:hidden absolute left-4 top-5 w-5 h-5 -translate-x-1/2 border-2 border-[var(--border-color)] flex items-center justify-center z-20"
                style={{ backgroundColor: item.accent }}
              >
                <div className="w-1.5 h-1.5 bg-[#111111]" />
              </div>

              {/* Desktop Timeline Step Marker */}
              <div className="hidden lg:flex items-center justify-center mb-6">
                <div
                  className="w-8 h-8 border-[3px] border-[var(--border-color)] flex items-center justify-center font-mono text-xs font-bold text-[#111111] shadow-[3px_3px_0px_var(--shadow-color)]"
                  style={{ backgroundColor: item.accent }}
                >
                  0{index + 1}
                </div>
              </div>

              {/* Achievement Card */}
              <div
                className="neo-box p-5 sm:p-6 bg-[var(--surface-card)] flex flex-col justify-between h-full border-t-4 transition-transform hover:-translate-y-1"
                style={{ borderTopColor: item.accent }}
              >
                {/* Year & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 border border-[var(--border-color)] bg-[var(--surface-card-muted)] text-[var(--text-color)]">
                      {item.year}
                    </span>
                    <Trophy className="w-4 h-4" style={{ color: item.accent }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[var(--text-color)] mb-2">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="font-mono text-xs font-semibold text-[#FF6B9D] dark:text-[#FFD83D] mb-3 uppercase">
                    {item.organization}
                  </div>

                  {/* Context */}
                  <p className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-85 leading-relaxed">
                    {item.context}
                  </p>
                </div>

                {/* Badge Visual Label */}
                <div className="mt-5 pt-3 border-t-2 border-[var(--border-color)]/20 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 opacity-70" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase opacity-80">
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
