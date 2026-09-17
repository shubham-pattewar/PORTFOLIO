import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeSection: string;
  isScrolled: boolean;
}

const navItems = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'STACK', href: '#tech', id: 'tech' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  isScrolled,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'py-3 bg-[var(--bg-color)]/95 backdrop-blur-sm border-b-[3px] border-[var(--border-color)] shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2"
        >
          <span className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-[var(--text-color)] group-hover:text-[#FF6B9D] dark:group-hover:text-[#FFD83D] transition-colors">
            SHUBHAM PATTEWAR
          </span>
          <span className="inline-block w-2.5 h-2.5 bg-[#FFD83D] border-[2px] border-[var(--border-color)]"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-mono text-xs font-bold tracking-widest uppercase transition-colors relative py-1 text-[var(--text-color)] hover:text-[#FF6B9D] dark:hover:text-[#FFD83D] ${
                      isActive ? 'text-[var(--text-color)]' : 'opacity-80'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B9D] dark:bg-[#FFD83D]"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Social Quick Links */}
          <div className="flex items-center gap-1.5 pl-4 border-l-2 border-[var(--border-color)]/30">
            <a
              href="https://github.com/shubham-pattewar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 border border-[var(--border-color)] bg-[var(--surface-card)] hover:bg-[#FFD83D] hover:text-[#111111] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-pattewar-39a1942b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 border border-[var(--border-color)] bg-[var(--surface-card)] hover:bg-[#0077B5] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://leetcode.com/u/Shubham_Pattewar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-1.5 border border-[var(--border-color)] bg-[var(--surface-card)] hover:bg-[#FFA116] hover:text-[#111111] transition-colors"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:sspattewar2004@gmail.com"
              aria-label="Send Email"
              className="p-1.5 border border-[var(--border-color)] bg-[var(--surface-card)] hover:bg-[#EA4335] hover:text-white transition-colors"
              title="Email: sspattewar2004@gmail.com"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pl-3 border-l-2 border-[var(--border-color)]/30">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} compact />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="neo-btn p-2 text-[var(--text-color)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-[var(--bg-color)] p-6 flex flex-col justify-between border-t-[3px] border-[var(--border-color)] md:hidden">
          <div className="pt-6">
            <span className="font-mono text-xs text-opacity-50 tracking-widest uppercase mb-4 block">
              // NAVIGATION
            </span>
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display font-extrabold text-3xl tracking-tight uppercase text-[var(--text-color)] hover:text-[#FFD83D] flex items-center justify-between py-2 border-b-2 border-[var(--border-color)]/20"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-sm opacity-50">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <div className="pt-6">
              <span className="font-mono text-xs text-opacity-50 tracking-widest uppercase mb-3 block">
                // PROFILES &amp; CONTACT
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/shubham-pattewar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-pattewar-39a1942b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://leetcode.com/u/Shubham_Pattewar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <LeetcodeIcon className="w-3.5 h-3.5" />
                  <span>LEETCODE</span>
                </a>
                <a
                  href="mailto:sspattewar2004@gmail.com"
                  className="neo-btn px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-[3px] border-[var(--border-color)] pt-6 pb-8 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                APPEARANCE
              </span>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
            <div className="font-mono text-xs opacity-60">
              KOLHAPUR, MH, INDIA · 2026
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
