export interface ProjectItem {
  title: string;
  url: string;
  image: string;
  description: string;
  date?: string;
}

const data: ProjectItem[] = [
  {
    title: 'Automated identity provisioning, RBAC enforcement, and access governance across Azure, AWS, and GCP using infrastructure-as-code.',
    url: 'https://github.com/yourusername/project1',
    image: '/images/project1.png',
    description: 'Terraform-based IAM automation across Azure, AWS, and GCP with RBAC and policy enforcement.',
  },
  {
    title: 'Automated vendor security risk triage across NIST, HIPAA, PCI-DSS, and GDPR — auto-clears low-risk vendors, generates severity-ranked findings, and tracks remediation to closure. Includes an honestly evaluated detection layer: 100% recall on known test cases, 20% on a held-out validation set, documented as a real limitation rather than smoothed over.',
    url: 'https://kshitijpwr04.github.io/vendor-risk-triage-engine/dashboard/',
    image: '/images/project5.png',
    description: 'AI-assisted vendor risk triage engine',
  },
];

export default data;
