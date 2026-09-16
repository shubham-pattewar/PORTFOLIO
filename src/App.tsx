import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { AboutBoard } from './components/AboutBoard/AboutBoard';
import { Projects } from './components/Projects/Projects';
import { TechWall } from './components/TechWall/TechWall';
import { Achievements } from './components/Achievements/Achievements';
import { Explorations } from './components/Explorations/Explorations';
import { Education } from './components/Education/Education';
import { GithubActivity } from './components/GithubActivity/GithubActivity';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const sectionIds = [
    'hero',
    'about',
    'work',
    'tech',
    'achievements',
    'explorations',
    'education',
    'github',
    'contact',
  ];

  const { activeSection, isScrolled } = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] selection:bg-[#FFD83D] selection:text-[#111111] relative">
      {/* Sticky Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />

      {/* Main Sections Flow in Exact Specified Order */}
      <main id="main-content">
        {/* Unnumbered: HERO */}
        <Hero />

        {/* 01 / ABOUT ME */}
        <AboutBoard />

        {/* 02 / FEATURED WORK */}
        <Projects />

        {/* 03 / TECH WALL */}
        <TechWall />

        {/* 04 / ACHIEVEMENTS */}
        <Achievements />

        {/* 05 / BEYOND THE CODE */}
        <Explorations />

        {/* 06 / EDUCATION */}
        <Education />

        {/* 07 / GITHUB ACTIVITY */}
        <GithubActivity />

        {/* 08 / CONTACT */}
        <Contact />
      </main>

      {/* Unnumbered: FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
