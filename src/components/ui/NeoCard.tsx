import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  rotation?: string;
  interactive?: boolean;
  onClick?: () => void;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  role?: string;
  'aria-expanded'?: boolean;
}

export const NeoCard: React.FC<NeoCardProps> = ({
  children,
  className = '',
  accent,
  rotation,
  interactive = false,
  onClick,
  tabIndex,
  onKeyDown,
  role,
  'aria-expanded': ariaExpanded,
}) => {
  return (
    <div
      role={role}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-expanded={ariaExpanded}
      style={{
        transform: rotation ? `rotate(${rotation})` : undefined,
      }}
      className={`neo-box relative ${interactive ? 'neo-box-interactive cursor-pointer' : ''} ${className}`}
    >
      {accent && (
        <div
          className="h-1.5 w-full border-b-[2px] border-[var(--border-color)]"
          style={{ backgroundColor: accent }}
        />
      )}
      {children}
    </div>
  );
};
