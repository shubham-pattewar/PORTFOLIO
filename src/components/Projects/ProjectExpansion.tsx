import React, { useState, useEffect } from 'react';
import type { Project } from '../../types';
import { NeoButton } from '../ui/NeoButton';
import { NeoTag } from '../ui/NeoTag';
import { ExternalLink, X, Maximize2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface ProjectExpansionProps {
  project: Project;
  onClose: () => void;
}

export const ProjectExpansion: React.FC<ProjectExpansionProps> = ({
  project,
  onClose,
}) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    label: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          {/* Tech Stack Tags & Action Links At Top of Description */}
          <div className="space-y-5 pb-6 border-b-2 border-[var(--border-color)]/20">
            <div>
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

            <div className="flex flex-wrap items-center gap-4 pt-1">
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
        </div>

        {/* Right Column: Editorial Screenshot Showcase (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">
            // ARTIFACTS & ARCHITECTURE
          </div>

          {/* Dominant Screenshot Container */}
          {dominantShot && (
            <div className="neo-box p-3 bg-[var(--surface-card)] border-2 border-[var(--border-color)] overflow-hidden">
              {dominantShot.image ? (
                <div
                  onClick={() =>
                    setSelectedImage({
                      src: dominantShot.image!,
                      label: dominantShot.label,
                      caption: dominantShot.caption,
                    })
                  }
                  className="group cursor-pointer block relative"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-color)] pb-2 px-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accent }} />
                      {dominantShot.label}
                    </span>
                    <span className="opacity-70 group-hover:opacity-100 flex items-center gap-1 text-[9px] uppercase tracking-wider">
                      <Maximize2 className="w-3 h-3" /> CLICK TO EXPAND
                    </span>
                  </div>
                  <div className="relative border border-[var(--border-color)] overflow-hidden bg-[#0e0b1c]">
                    <img
                      src={dominantShot.image}
                      alt={dominantShot.label}
                      className="w-full h-48 sm:h-56 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  </div>
                  <p className="font-mono text-[10px] opacity-75 pt-2 px-1 leading-normal">
                    {dominantShot.caption}
                  </p>
                </div>
              ) : (
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
              )}
            </div>
          )}

          {/* Supporting Asymmetric Collages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingShots.map((shot, idx) => (
              <div
                key={shot.id}
                className="neo-box-sm p-3 bg-[var(--surface-card-muted)] border-2 border-[var(--border-color)] transform hover:rotate-0 transition-transform duration-200"
                style={{
                  transform: idx % 2 === 0 ? 'rotate(-0.8deg)' : 'rotate(0.8deg)',
                }}
              >
                <div className="font-mono text-[10px] font-bold text-[var(--text-color)] opacity-80 uppercase mb-1.5 truncate">
                  {shot.label}
                </div>

                {shot.image ? (
                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: shot.image!,
                        label: shot.label,
                        caption: shot.caption,
                      })
                    }
                    className="group cursor-pointer block relative border border-[var(--border-color)] overflow-hidden bg-[#0e0b1c] mb-2"
                  >
                    <img
                      src={shot.image}
                      alt={shot.label}
                      className="w-full h-24 object-cover object-top transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                      <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-16 bg-[var(--surface-card)] border border-[var(--border-color)] flex items-center justify-center p-2 mb-2">
                    <span className="font-mono text-[9px] text-center opacity-80">
                      [ARCHITECTURE SCHEMA]
                    </span>
                  </div>
                )}

                <p className="font-sans text-[11px] text-[var(--text-color)] opacity-85 leading-tight line-clamp-3">
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

      {/* Full-Screen Screenshot Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="neo-box max-w-5xl w-full bg-[var(--surface-card)] border-4 border-[var(--border-color)] overflow-hidden shadow-[8px_8px_0px_#000] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-[var(--surface-card-muted)] border-b-2 border-[var(--border-color)]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-color)]">
                  {selectedImage.label}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
                className="neo-btn px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                <span>ESC</span>
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-2 sm:p-4 bg-[#0a0712] flex items-center justify-center max-h-[72vh] overflow-auto">
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="max-h-[68vh] w-auto max-w-full object-contain border border-[var(--border-color)]/40 shadow-lg"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-3 sm:p-4 bg-[var(--surface-card)] border-t-2 border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="font-mono text-xs text-[var(--text-color)] opacity-90">
                {selectedImage.caption}
              </p>
              <span className="font-mono text-[10px] opacity-60 uppercase shrink-0">
                [ESC OR CLICK OUTSIDE TO CLOSE]
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
