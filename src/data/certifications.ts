export interface Certification {
  title: string;
  issuer: string;
  code: string;
  image: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    issuer: 'Microsoft Certified',
    title: 'Cybersecurity Architect Expert',
    code: 'SC-100',
    image: '/images/certifications/sc-100.png',
  },
  {
    issuer: 'Microsoft Certified',
    title: 'Identity and Access Administrator',
    code: 'SC-300',
    image: '/images/certifications/sc-300.png',
  },
  {
    issuer: 'Microsoft Certified',
    title: 'Security Operations Analyst Associate',
    code: 'SC-200',
    image: '/images/certifications/sc-200.png',
  },
  {
    issuer: 'Microsoft Certified',
    title: 'Azure Security Engineer Associate',
    code: 'AZ-500',
    image: '/images/certifications/az-500.png',
  },
];

export default certifications;
