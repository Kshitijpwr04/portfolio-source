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
    <div className="page-container">
      <main
        className={['page-main', mainClassName].filter(Boolean).join(' ')}
        style={{
          width: fullWidth ? '100%' : '80%',
          maxWidth: fullWidth ? 'none' : '1200px',
          margin: '0 auto',
        }}
      >
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
