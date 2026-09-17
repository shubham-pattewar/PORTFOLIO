import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { achievements } from '../../data/achievements';
import type { Achievement } from '../../types';
import {
  Award,
  Trophy,
  Image as ImageIcon,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AchievementCardProps {
  item: Achievement;
  index: number;
  onOpenLightbox: (item: Achievement, photoIndex: number) => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  item,
  index,
  onOpenLightbox,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  // Normalize photos: support both new photos array and legacy image field
  const photos =
    item.photos && item.photos.length > 0
      ? item.photos
      : item.image
      ? [{ url: item.image, caption: item.imageCaption }]
      : [];

  const hasPhotos = photos.length > 0;
  const currentPhoto = hasPhotos ? photos[photoIndex % photos.length] : null;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="relative flex flex-col">
      {/* Achievement Card */}
      <div
        className="neo-box p-5 sm:p-6 bg-[var(--surface-card)] flex flex-col justify-between h-full border-t-8 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_var(--shadow-color)] group"
        style={{ borderTopColor: item.accent }}
      >
        <div>
          {/* Top Header: Step Counter & Year Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span
                className="w-7 h-7 border-2 border-[var(--border-color)] flex items-center justify-center font-mono text-xs font-black text-[#111111] shadow-[2px_2px_0px_var(--shadow-color)]"
                style={{ backgroundColor: item.accent }}
              >
                0{index + 1}
              </span>
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 border-2 border-[var(--border-color)] bg-[var(--surface-card-muted)] text-[var(--text-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                {item.year}
              </span>
            </div>

            <div
              className="w-7 h-7 border-2 border-[var(--border-color)] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_var(--shadow-color)]"
              style={{ backgroundColor: item.accent }}
            >
              <Trophy className="w-3.5 h-3.5 text-[#111111]" />
            </div>
          </div>

          {/* Photo / Proof Frame (Supports 1, 2, 3+ photos with carousel) */}
          {hasPhotos && currentPhoto ? (
            <div
              onClick={() => onOpenLightbox(item, photoIndex % photos.length)}
              className="relative w-full h-44 sm:h-48 border-2 border-[var(--border-color)] overflow-hidden bg-[#111111] cursor-pointer group/photo mb-4 shadow-[3px_3px_0px_var(--shadow-color)]"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption || item.title}
                className="w-full h-full object-cover object-center group-hover/photo:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/25 transition-colors flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover/photo:opacity-100 transition-opacity drop-shadow" />
              </div>

              {/* Photo Caption Badge */}
              <div className="absolute bottom-2 left-2 right-12 px-2 py-0.5 bg-[var(--surface-card)]/90 backdrop-blur-xs border border-[var(--border-color)] font-mono text-[9px] font-bold text-[var(--text-color)] shadow-[2px_2px_0px_var(--shadow-color)] flex items-center gap-1 truncate">
                <Sparkles className="w-2.5 h-2.5 text-[#FFD83D] shrink-0" />
                <span className="truncate">{currentPhoto.caption || 'VIEW PROOF'}</span>
              </div>

              {/* Multi-Photo Counter & Controls */}
              {photos.length > 1 && (
                <>
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#111111]/90 border border-[#FFF8E7]/30 text-[#FFF8E7] font-mono text-[9px] font-bold flex items-center gap-1">
                    <Layers className="w-2.5 h-2.5" />
                    <span>
                      {(photoIndex % photos.length) + 1}/{photos.length}
                    </span>
                  </div>

                  {/* Previous / Next Arrow Controls */}
                  <button
                    onClick={handlePrevPhoto}
                    aria-label="Previous photo"
                    className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#111111]/85 border border-white/30 text-white flex items-center justify-center hover:bg-[#FFD83D] hover:text-black transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    aria-label="Next photo"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#111111]/85 border border-white/30 text-white flex items-center justify-center hover:bg-[#FFD83D] hover:text-black transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          ) : (
            /* Neo-Brutalist Reserved Photo / Proof Frame */
            <div className="relative w-full h-40 sm:h-44 border-2 border-dashed border-[var(--border-color)]/70 bg-[var(--surface-card-muted)] flex flex-col items-center justify-center p-4 mb-4 overflow-hidden group-hover:border-[var(--border-color)] transition-colors">
              {/* Corner Crosshairs */}
              <span className="absolute top-1.5 left-2 font-mono text-[11px] opacity-35 font-bold select-none text-[var(--text-color)]">+</span>
              <span className="absolute top-1.5 right-2 font-mono text-[11px] opacity-35 font-bold select-none text-[var(--text-color)]">+</span>
              <span className="absolute bottom-1.5 left-2 font-mono text-[11px] opacity-35 font-bold select-none text-[var(--text-color)]">+</span>
              <span className="absolute bottom-1.5 right-2 font-mono text-[11px] opacity-35 font-bold select-none text-[var(--text-color)]">+</span>

              {/* Dot Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:10px_10px] opacity-10 pointer-events-none" />

              {/* Center Icon & Badges */}
              <div
                className="w-10 h-10 border-2 border-[var(--border-color)] flex items-center justify-center mb-2 shadow-[2px_2px_0px_var(--shadow-color)] group-hover:scale-105 transition-transform"
                style={{ backgroundColor: item.accent }}
              >
                <ImageIcon className="w-5 h-5 text-[#111111]" />
              </div>

              <span className="font-mono text-[11px] font-extrabold tracking-wider text-[var(--text-color)] uppercase text-center">
                PHOTO / PROOF SLOTS
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="font-mono text-[9px] opacity-65 uppercase tracking-widest font-bold">
                  [SPACE RESERVED]
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--text-color)] opacity-40" />
                <span className="font-mono text-[9px] text-[#FF6B9D] dark:text-[#FFD83D] font-bold">
                  MULTIPLE PHOTOS READY
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[var(--text-color)] mb-2 leading-snug group-hover:text-[#FF6B9D] dark:group-hover:text-[#FFD83D] transition-colors">
            {item.title}
          </h3>

          {/* Organization */}
          <div
            className="font-mono text-xs font-bold mb-3 uppercase tracking-wide px-2 py-1 border-l-3 inline-block"
            style={{
              borderColor: item.accent,
              backgroundColor: `${item.accent}15`,
              color: 'var(--text-color)',
            }}
          >
            {item.organization}
          </div>

          {/* Context Narrative */}
          <p className="font-sans text-xs sm:text-sm text-[var(--text-color)] opacity-85 leading-relaxed">
            {item.context}
          </p>
        </div>

        {/* Badge Visual Label */}
        <div className="mt-5 pt-3 border-t-2 border-[var(--border-color)]/20 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 opacity-75 shrink-0" style={{ color: item.accent }} />
            <span className="font-mono text-[10px] font-bold tracking-wider uppercase opacity-90">
              {item.badge}
            </span>
          </div>
          <span
            className="w-2.5 h-2.5 border border-[var(--border-color)] shrink-0"
            style={{ backgroundColor: item.accent }}
          />
        </div>
      </div>
    </div>
  );
};

export const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxState, setLightboxState] = useState<{
    achievement: Achievement;
    photoIndex: number;
  } | null>(null);

  // Extract unique categories for filter tabs
  const categories = [
    'ALL',
    ...Array.from(
      new Set(achievements.map((a) => a.category).filter(Boolean))
    ) as string[],
  ];

  const filteredAchievements =
    selectedCategory === 'ALL'
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;

      if (e.key === 'Escape') {
        setLightboxState(null);
      } else if (e.key === 'ArrowLeft') {
        const photos = lightboxState.achievement.photos || [];
        if (photos.length > 1) {
          setLightboxState((prev) =>
            prev
              ? {
                  ...prev,
                  photoIndex:
                    prev.photoIndex === 0
                      ? photos.length - 1
                      : prev.photoIndex - 1,
                }
              : null
          );
        }
      } else if (e.key === 'ArrowRight') {
        const photos = lightboxState.achievement.photos || [];
        if (photos.length > 1) {
          setLightboxState((prev) =>
            prev
              ? {
                  ...prev,
                  photoIndex: (prev.photoIndex + 1) % photos.length,
                }
              : null
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  const activePhotos =
    lightboxState?.achievement.photos && lightboxState.achievement.photos.length > 0
      ? lightboxState.achievement.photos
      : lightboxState?.achievement.image
      ? [{ url: lightboxState.achievement.image, caption: lightboxState.achievement.imageCaption }]
      : [];

  const activePhoto =
    lightboxState && activePhotos.length > 0
      ? activePhotos[lightboxState.photoIndex % activePhotos.length]
      : null;

  return (
    <section id="achievements" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 04 / ACHIEVEMENTS Separator */}
      <SectionHeader
        number="04"
        title="ACHIEVEMENTS"
        subtitle="COMPETITIVE HONORS & ACADEMIC MERIT"
      />

      {/* Intro & Category Filtering Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-xl">
          <p className="font-sans text-base sm:text-lg text-[var(--text-color)] opacity-85 leading-relaxed">
            Demonstrated technical competitive capability, national-level innovation hackathons, and top academic honors.
          </p>
        </div>

        {/* Dynamic Category Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase opacity-60 mr-1 hidden sm:inline">
              FILTER:
            </span>
            {categories.map((cat) => {
              const count =
                cat === 'ALL'
                  ? achievements.length
                  : achievements.filter((a) => a.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold border-2 border-[var(--border-color)] transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FFD83D] text-[#111111] shadow-[3px_3px_0px_var(--border-color)]'
                      : 'bg-[var(--surface-card)] text-[var(--text-color)] hover:bg-[var(--surface-card-muted)]'
                  }`}
                >
                  {cat} [{count}]
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Scalable Multi-Row Grid (Fluid for >4 items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAchievements.map((item, index) => (
          <AchievementCard
            key={item.id}
            item={item}
            index={index}
            onOpenLightbox={(achievement, pIdx) =>
              setLightboxState({ achievement, photoIndex: pIdx })
            }
          />
        ))}
      </div>

      {/* Fullscreen Photo Lightbox Modal with Gallery Navigation */}
      {lightboxState && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxState(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="neo-box max-w-4xl w-full bg-[var(--surface-card)] border-4 border-[var(--border-color)] overflow-hidden shadow-[8px_8px_0px_#000] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-[var(--surface-card-muted)] border-b-2 border-[var(--border-color)]">
              <div className="flex items-center gap-2 overflow-hidden pr-2">
                <span
                  className="w-3 h-3 border border-[var(--border-color)] shrink-0"
                  style={{ backgroundColor: lightboxState.achievement.accent }}
                />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-color)] truncate">
                  {lightboxState.achievement.title}
                </span>
                {activePhotos.length > 1 && (
                  <span className="font-mono text-xs opacity-60 ml-2 shrink-0">
                    [PHOTO {lightboxState.photoIndex + 1} OF {activePhotos.length}]
                  </span>
                )}
              </div>
              <button
                onClick={() => setLightboxState(null)}
                aria-label="Close Preview"
                className="neo-btn px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1 shrink-0"
              >
                <X className="w-4 h-4" />
                <span>ESC</span>
              </button>
            </div>

            {/* Modal Image Viewport with Gallery Arrows */}
            <div className="relative p-3 sm:p-6 bg-[#0a0712] flex items-center justify-center min-h-[300px] max-h-[70vh] overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption || lightboxState.achievement.title}
                className="max-h-[65vh] w-auto max-w-full object-contain border border-[var(--border-color)]/40 shadow-lg"
              />

              {/* Next / Previous Gallery Navigation in Modal */}
              {activePhotos.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev
                          ? {
                              ...prev,
                              photoIndex:
                                prev.photoIndex === 0
                                  ? activePhotos.length - 1
                                  : prev.photoIndex - 1,
                            }
                          : null
                      )
                    }
                    aria-label="Previous photo in modal"
                    className="absolute left-3 top-1/2 -translate-y-1/2 neo-btn p-2 bg-[#111111] text-white hover:bg-[#FFD83D] hover:text-black"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev
                          ? {
                              ...prev,
                              photoIndex:
                                (prev.photoIndex + 1) % activePhotos.length,
                            }
                          : null
                      )
                    }
                    aria-label="Next photo in modal"
                    className="absolute right-3 top-1/2 -translate-y-1/2 neo-btn p-2 bg-[#111111] text-white hover:bg-[#FFD83D] hover:text-black"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Caption */}
            <div className="p-3 sm:p-4 bg-[var(--surface-card)] border-t-2 border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="font-mono text-xs text-[var(--text-color)] opacity-90">
                {activePhoto.caption || lightboxState.achievement.organization}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono opacity-60 uppercase shrink-0">
                {activePhotos.length > 1 && <span>[USE ← → ARROW KEYS]</span>}
                <span>[ESC TO CLOSE]</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
