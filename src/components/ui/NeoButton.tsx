import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'yellow' | 'green' | 'purple' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  href,
  external = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs tracking-wider',
    md: 'px-5 py-2.5 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base tracking-wide',
  }[size];

  const variantStyles = {
    primary: 'bg-[#FFD83D] text-[#111111] hover:bg-[#ffe26b]',
    secondary: 'bg-[var(--surface-card)] text-[var(--text-color)] hover:bg-[var(--surface-card-muted)]',
    yellow: 'bg-[#FFD83D] text-[#111111] hover:bg-[#ffe26b]',
    green: 'bg-[#B7F34A] text-[#111111] hover:bg-[#c7f56b]',
    purple: 'bg-[#A855F7] text-white hover:bg-[#b86df8]',
    pink: 'bg-[#FF6B9D] text-[#111111] hover:bg-[#ff8cb3]',
  }[variant];

  const baseClasses = `neo-btn inline-flex items-center justify-center gap-2 font-display font-bold uppercase transition-all duration-100 select-none cursor-pointer ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {children}
        {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
      {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
