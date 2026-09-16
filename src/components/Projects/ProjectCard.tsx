import React from 'react';
import type { Project } from '../../types';
import { ProjectCover } from './ProjectCover';
import { NeoTag } from '../ui/NeoTag';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isExpanded,
  onToggle,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      aria-expanded={isExpanded}
      className={`neo-box neo-box-interactive cursor-pointer flex flex-col justify-between overflow-hidden bg-[var(--surface-card)] transition-all duration-200 ${
        isExpanded ? 'border-[#FFD83D] dark:border-[#FFD83D]' : ''
      }`}
    >
      {/* Visual Cover Section (approx 60% visual) */}
      <div>
        <ProjectCover projectId={project.id} accent={project.accent} />

        {/* Closed Card Information Area (approx 40% info) */}
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <span
              className="font-mono text-xs font-bold px-2 py-0.5 border border-[var(--border-color)] text-[#111111]"
              style={{ backgroundColor: project.accent }}
            >
              {project.number} // {project.category}
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[var(--text-color)]">
            {project.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-85 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <NeoTag key={tech} size="sm">
                {tech}
              </NeoTag>
            ))}
            {project.technologies.length > 4 && (
              <NeoTag size="sm">+{project.technologies.length - 4}</NeoTag>
            )}
          </div>
        </div>
      </div>

      {/* Expand Affordance Bottom Bar */}
      <div className="px-6 py-3 border-t-2 border-[var(--border-color)] bg-[var(--surface-card-muted)] flex items-center justify-between">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-color)]">
          {isExpanded ? 'CLOSE CASE STUDY ▲' : 'VIEW CASE STUDY →'}
        </span>
        <ArrowUpRight className="w-4 h-4 text-[var(--text-color)]" />
      </div>
    </div>
  );
};
