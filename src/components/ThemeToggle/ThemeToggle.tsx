import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  compact = false,
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`neo-btn px-3 py-1.5 text-xs font-mono font-bold tracking-wider flex items-center gap-2 ${
        isDark ? 'bg-[#111111] text-[#FFF8E7] border-[#FFF8E7]' : 'bg-[#FFF8E7] text-[#111111] border-[#111111]'
      }`}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-[#FFD83D]" />
          {!compact && <span>[LIGHT]</span>}
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-[#A855F7]" />
          {!compact && <span>[DARK]</span>}
        </>
      )}
    </button>
  );
};
