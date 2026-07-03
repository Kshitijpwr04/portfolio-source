'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import routes from '@/data/routes';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import ContactIcons from '@/components/Contact/ContactIcons';

export default function Navigation() {
  const pathname = usePathname();

  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1200);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header
      className="site-header"
      style={{
        position: 'fixed',
        top: isMobile ? '50%' : '20px',
        left: isMobile ? '20px' : 'calc(50% + 145px)',
        right: 'auto',
        transform: isMobile ? 'translateY(-50%)' : 'translateX(-50%)',
        height: isMobile ? '60vh' : 'auto',
        justifyContent: isMobile ? 'space-between' : 'center',
        display: 'inline-flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: isMobile ? '48px' : 'fit-content',
        maxWidth: '90vw',
        alignItems: 'center',
        gap: isMobile ? '16px' : '10px',
        padding: isMobile ? '20px 4px' : '4px 10px',
        borderRadius: '8px',
        background: isDark ? '#000' : '#fff',
        border: '1px solid #c9a96a',
        color: isDark ? '#fff' : '#000',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        zIndex: 1000,
        lineHeight: isMobile ? 'normal' : '1.2',
      }}
    >
      <Link href="/" className="site-logo" style={{ color: isDark ? '#fff' : '#000' }}>
        <span className="logo-text" style={{ fontSize: isMobile ? 'inherit' : '14px' }}>KP</span>
      </Link>

      <nav
        className="nav-links"
        style={{
          display: isMobile ? 'none' : 'inline-flex',
          gap: '12px',
          width: 'auto',
        }}
      >
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <Link
              key={l.label}
              href={l.path}
              className={`nav-link ${isActive(l.path) ? 'active' : ''}`}
              aria-current={isActive(l.path) ? 'page' : undefined}
              style={{
                color: isDark ? '#fff' : '#000',
                fontSize: isMobile ? '12px' : 'inherit',
                writingMode: 'horizontal-tb',
                transform: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
      </nav>

      <ThemeToggle />
      <Hamburger />

      {/* Social Icons (mobile only) */}
      {isMobile && (
        <>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.22 8.09h4.52V24H.22zM7.98 8.09h4.33v2.17h.06c.6-1.13 2.06-2.33 4.24-2.33 4.54 0 5.38 2.99 5.38 6.88V24h-4.52v-7.94c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.19V24H7.98z"/>
            </svg>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.69.83.57C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a href="https://scholar.google.com" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 10.5 12 6l8.26 4.5L12 16zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/>
            </svg>
          </a>
        </>
      )}
    </header>
  );
}
