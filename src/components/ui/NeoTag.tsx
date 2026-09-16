import React from 'react';

interface NeoTagProps {
  children: React.ReactNode;
  accent?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const NeoTag: React.FC<NeoTagProps> = ({
  children,
  accent,
  className = '',
  size = 'sm',
}) => {
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs';

  return (
    <span
      style={{
        backgroundColor: accent || undefined,
        color: accent ? '#111111' : undefined,
      }}
      className={`neo-tag ${sizeClass} ${className}`}
    >
      {children}
    </span>
  );
};
