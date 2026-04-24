export interface ProjectItem {
  title: string;
  url: string;
  image: string;
  description: string;
}

const data: ProjectItem[] = [
  {
    title: '    Automated identity provisioning, RBAC enforcement, and access governance across Azure, AWS, and GCP using infrastructure-as-code.',
    url: 'https://github.com/yourusername/project1',
    image: '/images/project1.png',
    description: 'Terraform-based IAM automation across Azure, AWS, and GCP with RBAC and policy enforcement.',
  },
  {
    title: '    Centralized platform integrating IAM, threat detection, and risk analytics to enable identity-driven security operations and response.',
    url: 'https://github.com/yourusername/project2',
    image: '/images/project2.png',
    description: 'SIEM + SOAR lab using Sentinel and Chronicle with real-time detection rules.',
  },
  {
    title: 'Zero Trust Architecture Simulator',
    url: 'https://github.com/yourusername/project3',
    image: '/images/project3.png',
    description: 'Implements Zero Trust using Entra ID, Conditional Access, and micro-segmentation.',
  },
  {
    title: 'Attack Surface Management Tool',
    url: 'https://github.com/yourusername/project4',
    image: '/images/project4.png',
    description: 'SpiderFoot-based ASM platform integrated with OSINT feeds and automation.',
  },
];

export default data;
