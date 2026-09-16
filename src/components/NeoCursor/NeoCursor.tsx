import React, { useEffect, useState } from 'react';

interface NeoCursorProps {
  theme: 'light' | 'dark';
}

export const NeoCursor: React.FC<NeoCursorProps> = ({ theme }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(hasTouch);
    };
    checkTouch();

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, [data-interactive="true"], .neo-btn, .neo-box-interactive');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch]);

  if (isTouch || !isVisible) return null;

  const isDark = theme === 'dark';

  return (
    <div
      aria-hidden="true"
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.4)' : 'scale(1)'}`,
      }}
    >
      <div
        className={`w-4 h-4 border-2 transition-colors duration-150 ${
          isHovered
            ? 'bg-[#FFD83D] border-[#111111]'
            : isDark
            ? 'bg-[#FFF8E7] border-[#111111]'
            : 'bg-[#111111] border-[#FFF8E7]'
        }`}
        style={{
          boxShadow: isHovered ? '2px 2px 0px #111111' : 'none',
        }}
      />
    </div>
  );
};
