import type { Project } from '../../types';
import { NeoButton } from '../ui/NeoButton';
import { NeoTag } from '../ui/NeoTag';
import { ExternalLink, X } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface ProjectExpansionProps {
  project: Project;
  onClose: () => void;
}

export const ProjectExpansion: React.FC<ProjectExpansionProps> = ({
  project,
  onClose,
}) => {
  const dominantShot = project.screenshots.find((s) => s.isDominant) || project.screenshots[0];
  const supportingShots = project.screenshots.filter((s) => !s.isDominant);

  return (
    <div className="neo-box p-6 sm:p-8 lg:p-10 my-8 bg-[var(--surface-card)] border-t-8 border-t-[var(--border-color)] relative">
      {/* Header with Close Action */}
      <div className="flex items-start justify-between gap-4 pb-6 border-b-2 border-[var(--border-color)]">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span
              className="font-mono text-xs font-bold px-2 py-0.5 border border-[var(--border-color)] text-[#111111]"
              style={{ backgroundColor: project.accent }}
            >
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs tracking-wider opacity-70 uppercase">
              // {project.category}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-color)]">
            {project.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className="neo-btn px-3 py-2 text-xs font-mono font-bold flex items-center gap-1.5"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">CLOSE</span>
        </button>
      </div>

      {/* Main Case Study Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
        {/* Left Column: Deep Dive Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Problem & What I Built */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B9D] dark:text-[#FFD83D]">
              01 // THE PROBLEM & MOTIVATION
            </h4>
            <p className="font-sans text-sm sm:text-base text-[var(--text-color)] opacity-90 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B9D] dark:text-[#FFD83D]">
              02 // WHAT I BUILT
            </h4>
            <p className="font-sans text-sm sm:text-base text-[var(--text-color)] opacity-90 leading-relaxed">
              {project.built}
            </p>
          </div>

          {/* Approach & Key Technical Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--surface-card-muted)] p-5 border-2 border-[var(--border-color)]">
            <div className="space-y-2">
              <h5 className="font-mono text-xs font-bold uppercase text-[var(--text-color)]">
                HOW IT WORKS
              </h5>
              <p className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-85 leading-relaxed">
                {project.approach}
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-mono text-xs font-bold uppercase text-[#FF6B9D]">
                KEY CHALLENGE
              </h5>
              <p className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-85 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Engineering & Implementation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B9D] dark:text-[#FFD83D]">
              03 // SYSTEM ARCHITECTURE & ENGINEERING
            </h4>
            <p className="font-sans text-sm sm:text-base text-[var(--text-color)] opacity-90 leading-relaxed">
              {project.engineering}
            </p>
          </div>

          {/* Outcome */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B9D] dark:text-[#FFD83D]">
              04 // VERIFIED OUTCOME
            </h4>
            <p className="font-sans text-sm sm:text-base text-[var(--text-color)] opacity-90 leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-4 border-t-2 border-[var(--border-color)]/20">
            <span className="font-mono text-xs font-bold tracking-widest uppercase opacity-70 block mb-3">
              // VERIFIED TECHNOLOGIES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <NeoTag key={tech} size="md">
                  {tech}
                </NeoTag>
              ))}
            </div>
          </div>

          {/* Project Action Links (Only rendered when URLs exist) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.github && (
              <NeoButton
                variant="secondary"
                size="md"
                href={project.github}
                external
                icon={<GithubIcon className="w-4 h-4" />}
              >
                VIEW REPOSITORY
              </NeoButton>
            )}
            {project.liveDemo && (
              <NeoButton
                variant="primary"
                size="md"
                href={project.liveDemo}
                external
                icon={<ExternalLink className="w-4 h-4" />}
              >
                LIVE SYSTEM
              </NeoButton>
            )}
            {!project.liveDemo && (
              <span className="font-mono text-xs opacity-60 italic">
                [LIVE INSTANCE DEPLOYMENT UPON REQUEST]
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Editorial Screenshot Collage (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">
            // ARTIFACTS & ARCHITECTURE
          </div>

          {/* Dominant Screenshot Container */}
          {dominantShot && (
            <div className="neo-box p-3 bg-[var(--surface-card)] border-2 border-[var(--border-color)]">
              <div className="bg-[#111111] text-[#FFF8E7] p-4 border border-[var(--border-color)] flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#FFD83D]">
                  <span>{dominantShot.label}</span>
                  <span>PREVIEW_01</span>
                </div>
                <div className="my-6 text-center">
                  <span className="font-display font-black text-2xl uppercase tracking-wider text-[#FFD83D]">
                    {project.title.split('/')[0]}
                  </span>
                  <p className="font-mono text-xs opacity-75 mt-1">
                    PRIMARY PIPELINE TELEMETRY
                  </p>
                </div>
                <div className="font-mono text-[10px] opacity-70 border-t border-[#FFF8E7]/20 pt-2">
                  {dominantShot.caption}
                </div>
              </div>
            </div>
          )}

          {/* Supporting Asymmetric Collages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingShots.map((shot, idx) => (
              <div
                key={shot.id}
                className="neo-box-sm p-3 bg-[var(--surface-card-muted)] border-2 border-[var(--border-color)] transform hover:rotate-1 transition-transform"
                style={{
                  transform: idx % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1.5deg)',
                }}
              >
                <div className="font-mono text-[10px] font-bold text-[var(--text-color)] opacity-70 uppercase mb-1">
                  {shot.label}
                </div>
                <div className="w-full h-16 bg-[var(--surface-card)] border border-[var(--border-color)] flex items-center justify-center p-2 mb-2">
                  <span className="font-mono text-[9px] text-center opacity-80">
                    [ARCHITECTURE SCHEMA]
                  </span>
                </div>
                <p className="font-sans text-[11px] text-[var(--text-color)] opacity-85 leading-tight">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="font-mono text-[10px] opacity-50 text-right">
            [PROJECT CODE AUDITED & TESTED]
          </div>
        </div>
      </div>

      {/* Bottom Close Bar */}
      <div className="mt-8 pt-6 border-t-2 border-[var(--border-color)] flex flex-wrap justify-between items-center gap-4">
        <span className="font-mono text-xs opacity-60">END OF CASE STUDY // {project.title}</span>
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className="neo-btn px-4 py-2 text-xs font-mono font-bold flex items-center gap-1.5"
        >
          <X className="w-4 h-4" />
          <span>CLOSE CASE STUDY ▲</span>
        </button>
      </div>
    </div>
  );
};
