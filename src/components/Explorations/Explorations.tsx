import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { explorationEvents } from '../../data/explorations';
import { MapPin, Calendar, Camera } from 'lucide-react';

export const Explorations: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>(explorationEvents[0].id);

  const activeEvent = explorationEvents.find((e) => e.id === selectedEventId) || explorationEvents[0];

  return (
    <section id="explorations" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 05 / BEYOND THE CODE Separator */}
      <SectionHeader
        number="05"
        title="BEYOND THE CODE"
        subtitle="FIELDWORK & COMMUNITY IMMERSIONS"
      />

      <div className="mb-10 max-w-2xl">
        <p className="font-sans text-xl sm:text-2xl font-bold text-[var(--text-color)] leading-snug">
          Not everything worth building happens behind a screen.
        </p>
        <p className="font-sans text-sm sm:text-base text-[var(--text-color)] opacity-80 mt-2">
          Technical hackathons, open-source summits, and cross-discipline conferences that shape real-world product perspectives.
        </p>
      </div>

      {/* Event Selector Tab Bar (NeoBrutalist physical tabs) */}
      <div className="flex flex-wrap gap-3 mb-10">
        {explorationEvents.map((ev) => {
          const isSelected = selectedEventId === ev.id;
          return (
            <button
              key={ev.id}
              onClick={() => setSelectedEventId(ev.id)}
              className={`neo-btn px-4 py-2 text-xs sm:text-sm font-mono tracking-wider transition-all ${
                isSelected
                  ? 'bg-[#FFD83D] text-[#111111] translate-x-1 translate-y-1 shadow-[2px_2px_0px_var(--shadow-color)]'
                  : 'bg-[var(--surface-card)] text-[var(--text-color)]'
              }`}
            >
              {ev.title}
            </button>
          );
        })}
      </div>

      {/* Active Event Digital Scrapbook Page */}
      <div className="neo-box p-6 sm:p-8 lg:p-10 bg-[var(--surface-card)] border-t-8 border-t-[var(--border-color)]">
        {/* Header Metadata */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--border-color)]">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#FF6B9D] dark:text-[#FFD83D] font-bold mb-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {activeEvent.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activeEvent.date}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-[var(--text-color)] tracking-tight">
              {activeEvent.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeEvent.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] font-bold px-2 py-1 border border-[var(--border-color)] bg-[var(--surface-card-muted)] text-[var(--text-color)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Personal Note Callout */}
        <div className="my-6 p-4 border-l-4 border-l-[#FFD83D] bg-[var(--surface-card-muted)]">
          <p className="font-sans text-sm sm:text-base italic text-[var(--text-color)] opacity-90">
            "{activeEvent.note}"
          </p>
        </div>

        {/* Asymmetric Scrapbook Collage Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* 1 Large Dominant Photograph Frame (7 cols) */}
          <div className="md:col-span-7">
            <div className="neo-box p-3 bg-[var(--surface-card)] border-2 border-[var(--border-color)] transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="relative aspect-4/3 w-full bg-[#1A1A1A] text-[#FFF8E7] border border-[var(--border-color)] flex flex-col justify-between p-4 overflow-hidden">
                {/* Photo Tag Header */}
                <div className="flex justify-between items-center z-10 font-mono text-[10px] text-[#FFD83D]">
                  <span className="flex items-center gap-1 font-bold">
                    <Camera className="w-3 h-3" />
                    {activeEvent.photos[0].tag}
                  </span>
                  <span>REF // 01</span>
                </div>

                {/* Central Graphic Composition */}
                <div className="my-auto text-center z-10">
                  <div className="w-20 h-20 mx-auto border-2 border-dashed border-[#FFD83D]/60 flex items-center justify-center mb-3">
                    <span className="font-mono text-2xl font-black text-[#FFD83D]">
                      IMG
                    </span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-[#FFF8E7]">
                    {activeEvent.title}
                  </h4>
                  <p className="font-mono text-xs opacity-75 mt-1">
                    {activeEvent.photos[0].caption}
                  </p>
                </div>

                {/* Footer Stamp */}
                <div className="z-10 border-t border-[#FFF8E7]/20 pt-2 flex justify-between items-center font-mono text-[9px] opacity-60">
                  <span>LOCATION: {activeEvent.location.toUpperCase()}</span>
                  <span>VERIFIED ATTENDANCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Asymmetric Photo Frames (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {activeEvent.photos.slice(1, 5).map((photo, i) => (
              <div
                key={photo.id}
                className="neo-box-sm p-2 bg-[var(--surface-card-muted)] border-2 border-[var(--border-color)] transition-transform duration-200 hover:-translate-y-1"
                style={{
                  transform: i % 2 === 0 ? 'rotate(1.5deg)' : 'rotate(-1deg)',
                }}
              >
                <div className="relative aspect-square w-full bg-[var(--surface-card)] border border-[var(--border-color)] flex flex-col justify-between p-2">
                  <span className="font-mono text-[9px] font-bold text-[#FF6B9D] dark:text-[#FFD83D] uppercase">
                    {photo.tag}
                  </span>
                  <div className="text-center font-mono text-[10px] opacity-40">
                    [PHOTO FRAME]
                  </div>
                  <span className="font-mono text-[8px] opacity-70 line-clamp-1 border-t border-[var(--border-color)]/20 pt-1">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-right font-mono text-xs opacity-50">
          * SCRAPBOOK ENTRIES VERIFIED THROUGH EVENT BADGES & DELEGATE CREDENTIALS
        </div>
      </div>
    </section>
  );
};
