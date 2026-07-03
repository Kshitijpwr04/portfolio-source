import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  mainClassName?: string;
  fullWidth?: boolean;
}

/**
 * Server component wrapper for page layout.
 * Provides consistent page structure with optional footer.
 * Relies on Next.js built-in scroll restoration for navigation.
 */
export default function PageWrapper({
  children,
  hideFooter = false,
  mainClassName,
  fullWidth = false,
}: PageWrapperProps) {
  return (
    <div
      className="page-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <main
        className={['page-main', mainClassName].filter(Boolean).join(' ')}
        style={{
          width: '100%',
          maxWidth: fullWidth ? 'none' : 'min(1200px, 100%)',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: fullWidth ? '0' : '0 16px',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
