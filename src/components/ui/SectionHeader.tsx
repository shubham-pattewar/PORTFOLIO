import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-baseline justify-between gap-4 pb-3 border-b-[3px] border-[var(--border-color)]">
        <div className="flex items-baseline gap-3 md:gap-4 flex-wrap">
          <span className="font-mono text-sm md:text-base font-bold tracking-widest text-[#FF6B9D] dark:text-[#FFD83D]">
            {number}
          </span>
          <span className="font-mono text-sm md:text-base font-bold opacity-40">/</span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-color)]">
            {title}
          </h2>
        </div>
        {subtitle && (
          <span className="hidden sm:inline-block font-mono text-xs md:text-sm tracking-wider opacity-60 uppercase">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
