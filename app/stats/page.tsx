import type { Metadata } from 'next';

import Personal from '@/components/Stats/Personal';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Publications',
  description: 'Publications and projects',
  path: '/stats/',
});

export default function StatsPage() {
  return (
    <PageWrapper fullWidth>
      <Personal />
    </PageWrapper>
  );
}
