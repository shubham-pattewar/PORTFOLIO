import React, { useMemo } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useGithub } from '../../hooks/useGithub';
import { generateSimulatedContributions, GITHUB_CONFIG } from '../../data/github';
import { Star, ArrowUpRight, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { NeoButton } from '../ui/NeoButton';

export const GithubActivity: React.FC = () => {
  const { repos, totalStars, totalRepos, error } = useGithub();

  // 52 weeks x 7 days simulated contribution grid
  const contributionGrid = useMemo(() => generateSimulatedContributions(), []);

  // Intensity color map for cells
  const getCellBg = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#B7F34A]/30 dark:bg-[#B7F34A]/25';
      case 2:
        return 'bg-[#B7F34A]/60 dark:bg-[#B7F34A]/55';
      case 3:
        return 'bg-[#B7F34A]/85 dark:bg-[#B7F34A]/80';
      case 4:
        return 'bg-[#B7F34A] dark:bg-[#B7F34A]';
      default:
        return 'bg-[var(--surface-card-muted)]';
    }
  };

  return (
    <section id="github" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 07 / GITHUB ACTIVITY Separator */}
      <SectionHeader
        number="07"
        title="GITHUB ACTIVITY"
        subtitle="CODE COMMITS & REPOSITORIES"
      />

      {/* Overview Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="neo-box p-5 bg-[var(--surface-card)]">
          <span className="font-mono text-xs font-bold uppercase opacity-60 block mb-1">
            PUBLIC REPOSITORIES
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl sm:text-4xl font-black text-[var(--text-color)]">
              {totalRepos}
            </span>
            <span className="font-mono text-xs opacity-60">ACTIVE</span>
          </div>
        </div>

        <div className="neo-box p-5 bg-[var(--surface-card)]">
          <span className="font-mono text-xs font-bold uppercase opacity-60 block mb-1">
            ANNUAL CONTRIBUTIONS
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#FFD83D]">
              400+
            </span>
            <span className="font-mono text-xs opacity-60">COMMITS & REVIEWS</span>
          </div>
        </div>

        <div className="neo-box p-5 bg-[var(--surface-card)]">
          <span className="font-mono text-xs font-bold uppercase opacity-60 block mb-1">
            REPOSITORY STARS
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#B7F34A]">
              {totalStars}
            </span>
            <span className="font-mono text-xs opacity-60">EARNED</span>
          </div>
        </div>
      </div>

      {/* Custom NeoBrutalist Contribution Grid */}
      <div className="neo-box p-6 bg-[var(--surface-card)] mb-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[var(--border-color)]/30">
          <div className="flex items-center gap-2">
            <GithubIcon className="w-4 h-4 text-[var(--text-color)]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-color)]">
              CONTRIBUTION RADAR // PAST 52 WEEKS
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] opacity-70">
            <span>LESS</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((lvl) => (
                <div
                  key={lvl}
                  className={`w-3 h-3 border border-[var(--border-color)] ${getCellBg(lvl)}`}
                />
              ))}
            </div>
            <span>MORE</span>
          </div>
        </div>

        {/* The Grid Canvas */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-grid grid-flow-col grid-rows-7 gap-1 min-w-[720px]">
            {contributionGrid.map((week, wIdx) =>
              week.map((level, dIdx) => (
                <div
                  key={`${wIdx}-${dIdx}`}
                  className={`w-3 h-3 border border-[var(--border-color)]/40 transition-colors hover:border-[var(--border-color)] hover:scale-125 ${getCellBg(
                    level
                  )}`}
                  title={`Activity intensity: Level ${level}`}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Error State Banner if API failed */}
      {error && (
        <div className="mb-8 p-4 border-2 border-[#FF6B9D] bg-[#FF6B9D]/10 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-[#FF6B9D] shrink-0" />
          <span className="font-mono text-xs text-[var(--text-color)]">
            GitHub live activity is temporarily operating on local cache. All repository links remain directly accessible.
          </span>
        </div>
      )}

      {/* Selected Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.slice(0, 4).map((repo) => (
          <div
            key={repo.name}
            className="neo-box-sm p-5 bg-[var(--surface-card)] flex flex-col justify-between hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg font-bold text-[var(--text-color)] hover:text-[#FF6B9D] dark:hover:text-[#FFD83D] flex items-center gap-1.5 uppercase tracking-tight"
                >
                  <span>{repo.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <div className="flex items-center gap-1 font-mono text-xs opacity-70">
                  <Star className="w-3.5 h-3.5 fill-current text-[#FFD83D]" />
                  <span>{repo.stars}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-[var(--text-color)] opacity-85 line-clamp-2 mb-4 leading-relaxed">
                {repo.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)]/20 flex items-center justify-between font-mono text-[11px]">
              <span className="inline-flex items-center gap-1 font-bold text-[#FF6B9D] dark:text-[#FFD83D]">
                <span className="w-2 h-2 border border-[var(--border-color)] bg-[#B7F34A]"></span>
                {repo.language}
              </span>
              <span className="opacity-60">{repo.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Profile CTA */}
      <div className="mt-10 flex justify-center">
        <NeoButton
          variant="secondary"
          size="md"
          href={GITHUB_CONFIG.profileUrl}
          external
          icon={<GithubIcon className="w-4 h-4" />}
        >
          EXPLORE GITHUB PROFILE ↗
        </NeoButton>
      </div>
    </section>
  );
};
