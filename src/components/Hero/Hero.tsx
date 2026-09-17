import React from 'react';
import { NeoButton } from '../ui/NeoButton';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import shubhamPhoto from '../../assets/shubham.jpg';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left 60%: Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Identity Line */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface-card)] border-[2px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)]">
            <span className="w-2 h-2 bg-[#FFD83D] border-[1px] border-[var(--border-color)]"></span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[var(--text-color)]">
              COMPUTER SCIENCE · SOFTWARE · SYSTEMS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.05] text-[var(--text-color)]">
            I BUILD SOFTWARE <br className="hidden sm:inline" />
            <span className="relative inline-block">
              THAT MATTERS.
              <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FFD83D] -z-10 opacity-70"></span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-xl text-[var(--text-color)] opacity-90 max-w-2xl leading-relaxed">
            From interfaces to APIs, databases to algorithms — I enjoy turning complex problems into software that works.
          </p>

          {/* Availability Status */}
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-wider text-[var(--text-color)] pt-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#B7F34A] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 bg-[#B7F34A] border border-[var(--border-color)]"></span>
            </span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <NeoButton
              variant="yellow"
              size="lg"
              onClick={() => handleScrollTo('work')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              SEE WHAT I BUILT
            </NeoButton>
            <NeoButton
              variant="secondary"
              size="lg"
              onClick={() => handleScrollTo('contact')}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              LET'S TALK
            </NeoButton>
          </div>
        </div>

        {/* Right 40%: Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] transform lg:rotate-2 hover:rotate-0 transition-transform duration-200">
            {/* Corner Decorative Coordinate */}
            <div className="absolute -top-3 -left-3 z-20 font-mono text-[10px] font-bold px-2 py-0.5 bg-[#FF6B9D] text-[#111111] border-2 border-[var(--border-color)]">
              FIG 01 // PORTRAIT
            </div>

            {/* Frame Box */}
            <div className="neo-box p-3 bg-[var(--surface-card)]">
              {/* Header Info */}
              <div className="flex justify-between items-center pb-2 px-1 font-mono text-xs font-bold text-[var(--text-color)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#FFD83D] border border-[var(--border-color)] inline-block"></span>
                  SHUBHAM.P
                </span>
                <span className="text-[10px] opacity-70">2026 // SP</span>
              </div>

              {/* Photo Image Frame */}
              <div className="relative aspect-4/5 w-full bg-[#FFF8E7] dark:bg-[#1A1A1A] border-2 border-[var(--border-color)] overflow-hidden group/img">
                <img
                  src={shubhamPhoto}
                  alt="Shubham Pattewar - Software Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                  loading="eager"
                />

                {/* Subtitle Badge Overlay */}
                <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 bg-[var(--surface-card)]/90 backdrop-blur-xs border border-[var(--border-color)] font-mono text-[10px] font-bold text-[var(--text-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                  SHUBHAM PATTEWAR
                </div>
                <div className="absolute top-2 right-2 z-10 px-1.5 py-0.5 bg-[#B7F34A] text-[#111111] border border-[#111111] font-mono text-[9px] font-bold tracking-wider">
                  VERIFIED
                </div>
              </div>

              {/* Bottom Frame Badge */}
              <div className="border-t-2 border-[var(--border-color)] mt-2 pt-2 flex justify-between items-center font-mono text-[10px] opacity-75">
                <span>DYPCET KOLHAPUR</span>
                <span>B.Tech CSE</span>
              </div>
            </div>

            {/* Corner Decorative Square */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#A855F7] border-2 border-[var(--border-color)]"></div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="pt-8 flex justify-center items-center">
        <button
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to About section"
          className="group flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span>SCROLL</span>
          <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
        </button>
      </div>
    </section>
  );
};
