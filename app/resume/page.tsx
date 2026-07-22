import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    "Kshitij Bhausaheb Pawar's Resume. Security Engineer, Rutgers University",
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <p
            className="resume-summary"
            style={{
              maxWidth: '100%',
              width: '100%',
              fontSize: '18px',
              lineHeight: '1.6',
            }}
          >
            Security and GRC professional with 3+ years of experience leading
            vendor and third-party risk assessments, compliance program
            execution, and control gap analysis across HIPAA, NIST RMF, NIST
            800-53, SOC 2, PCI DSS, and SOX frameworks in healthcare and
            regulated industries. Skilled in designing risk assessment
            methodology and questionnaires, quantifying risk through control
            maturity scoring, and partnering with risk owners, legal, and
            procurement to negotiate risk treatment plans through to closure.
            Working knowledge of GRC platforms including OneTrust, with strong
            foundations in Identity and Access Management (Microsoft Entra ID,
            Zero Trust architecture) supporting audit readiness and POA&M
            remediation tracking. Microsoft Certified SC-100, SC-300, SC-200,
            AZ-500.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
