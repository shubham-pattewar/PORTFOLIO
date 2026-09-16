import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { educationData } from '../../data/education';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 06 / EDUCATION Separator */}
      <SectionHeader
        number="06"
        title="EDUCATION"
        subtitle="ACADEMIC RIGOUR & FOUNDATIONS"
      />

      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="neo-box p-6 sm:p-8 bg-[var(--surface-card)] border-l-8 border-l-[#FFD83D] transition-all hover:shadow-[12px_12px_0px_var(--shadow-color)]"
          >
            {/* Header / Institution */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b-2 border-[var(--border-color)]">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF6B9D] dark:text-[#FFD83D] font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>FORMAL ENGINEERING EDUCATION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[var(--text-color)] tracking-tight">
                  {edu.degree}
                </h3>
                <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-[var(--text-color)] opacity-90 mt-1">
                  {edu.institution}
                </h4>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[var(--border-color)] bg-[var(--surface-card-muted)] text-[var(--text-color)]">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1 opacity-70 text-[11px]">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-70 block mb-4">
                // HIGHLIGHTS & COMPETENCIES
              </span>
              <ul className="space-y-3">
                {edu.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B7F34A] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-90 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
