'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import routes from '@/data/routes';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();

  const [isDark, setIsDark] = useState(false);

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

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header
      className="site-header"
      style={{
        position: 'fixed',
        top: '20px',
        left: '550px',
        display: 'inline-flex',
        width: 'fit-content',
        alignItems: 'center',
        gap: '20px',
        padding: '10px 18px',
        borderRadius: '12px',
        background: isDark ? '#000' : '#fff',
        border: '1px solid #c9a96a',
        color: isDark ? '#fff' : '#000',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <Link href="/" className="site-logo" style={{ color: isDark ? '#fff' : '#000' }}>
        <span className="logo-text">KP</span>
      </Link>

      <nav className="nav-links" style={{ display: 'inline-flex', gap: '18px', width: 'auto' }}>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <Link
              key={l.label}
              href={l.path}
              className={`nav-link ${isActive(l.path) ? 'active' : ''}`}
              aria-current={isActive(l.path) ? 'page' : undefined}
              style={{ color: isDark ? '#fff' : '#000' }}
            >
              {l.label}
            </Link>
          ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
