import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectExpansion } from './ProjectExpansion';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleClose = () => {
    const previousId = expandedId;
    setExpandedId(null);

    // Smoothly scroll back up to the project card or #work section
    setTimeout(() => {
      const target = previousId ? document.getElementById(`project-card-${previousId}`) : document.getElementById('work');
      if (target) {
        const navbarOffset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  const handleToggle = (id: string) => {
    if (expandedId === id) {
      handleClose();
    } else {
      setExpandedId(id);
    }
  };

  useEffect(() => {
    if (expandedId) {
      // Delay slightly to ensure the expansion component has mounted in the DOM
      const timer = setTimeout(() => {
        const element = document.getElementById('case-study-expansion');
        if (element) {
          const navbarOffset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 60);

      return () => clearTimeout(timer);
    }
  }, [expandedId]);

  const expandedProject = projects.find((p) => p.id === expandedId);

  return (
    <section id="work" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 02 / FEATURED WORK Separator */}
      <SectionHeader
        number="02"
        title="FEATURED WORK"
        subtitle="ENGINEERING ARCHITECTURE & CODE"
      />

      {/* Intro Note */}
      <div className="mb-10 max-w-2xl">
        <p className="font-sans text-base sm:text-lg text-[var(--text-color)] opacity-85">
          Projects built with high technical rigour across computer vision, autonomous multi-agent coordination, full-stack systems, and 3D digital heritage.
        </p>
      </div>

      {/* 2 x 2 Asymmetric Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {projects.map((project) => (
          <div key={project.id} id={`project-card-${project.id}`} className="flex flex-col">
            <ProjectCard
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          </div>
        ))}
      </div>

      {/* Inline Large Case Study Expansion */}
      {expandedProject && (
        <div id="case-study-expansion" className="mt-8 transition-all duration-300">
          <ProjectExpansion
            project={expandedProject}
            onClose={handleClose}
          />
        </div>
      )}
    </section>
  );
};
