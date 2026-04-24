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
          <p className="resume-summary" style={{ maxWidth: '100%', width: '100%', fontSize: '20px', lineHeight: '1.6' }}>
            Security Engineer with 3 years of experience in cloud security, IAM, and security program 
            development across Azure, AWS, and GCP environments. Expertise in identity governance, 
            Zero Trust architecture, CSPM, DevSecOps, and threat detection using Microsoft Sentinel and 
            Google Chronicle, with a strong compliance foundation across HIPAA, NIST, and SOX frameworks. 
            Proven ability to design and automate scalable security solutions in hybrid cloud environments serving 
            regulated industries including healthcare and financial services. Microsoft Certified SC-100, SC-300, SC-200, AZ-500.
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
