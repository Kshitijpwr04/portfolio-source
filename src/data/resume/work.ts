/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Source Sphere LLC, New Jersey, USA',
    position: 'Security Engineer',
    url: '',
    startDate: '2025-12',
    endDate: 'Present',
    summary: '',
    highlights: [
      'Owned end-to-end HIPAA and SOC 2 compliance engineering — conducted control gap assessments, mapped findings to NIST 800-53 and SOC 2 Trust Services Criteria, developed remediation roadmaps, and delivered audit-ready documentation supporting external audit readiness.',
      'Conducted RFI-based vendor due diligence reviews, assessing security questionnaire responses, SOC 2 reports, and BAA documentation to identify control gaps and quantify risk exposure for risk owners and procurement stakeholders.',
      'Enforced least-privilege identity controls and service principal governance across Azure DevOps and GitHub Actions pipelines using Azure Policy and Terraform; managed secrets lifecycle and access scoping aligned to Zero Trust principles.',
      'Developed and negotiated risk treatment plans with vendor risk owners for identified control gaps, prioritizing genuine risk reduction over check-the-box remediation, and tracked findings to closure ahead of audit cycles.',
      'Supported business continuity and disaster recovery assessments for critical third-party vendors, evaluating RTO/RPO commitments and continuity documentation against organizational resilience requirements.',
    ],
  },
  {
    name: 'Baanyan Software Services Inc., New Jersey, USA',
    position: 'Security Analyst',
    url: '',
    startDate: '2024-11',
    endDate: '2025-09',
    summary: '',
    highlights: [
      "Led a full-scope security risk assessment for a healthcare client following a confirmed data breach, initiated in response to a cyber insurance carrier's post-incident compliance mandate covering HIPAA, NIST 800-53, CIS Controls, and PCI DSS.",
      'Supported post-incident vendor risk reviews by assessing existing business associate agreements and third-party access controls against updated HIPAA and PCI DSS requirements, recommending enhanced due diligence criteria for future vendor onboarding.',
      'Engineered a consolidated risk assessment questionnaire by cross-mapping control requirements across four regulatory frameworks, eliminating redundant assessment effort while preserving full compliance coverage.',
      'Authored an executive-level risk assessment report with quantified risk and compliance scoring, presented to leadership and submitted to the insurance carrier to support remediation planning and claims resolution.',
      "Conducted comprehensive asset discovery and inventory across on-prem networks, endpoints, cloud accounts (Azure/AWS), and IAM configurations to establish assessment scope and identify systems within the breach's blast radius.",
      'Delivered a consolidated risk assessment report with quantified risk scores and compliance percentages per framework, translating technical findings into executive-level reporting for insurance carrier submission and remediation planning.',
    ],
  },
  {
    name: 'Collaborative Solutions LLC, Remote, USA',
    position: 'Cybersecurity Risk Analyst Extern',
    url: '',
    startDate: '2023-01',
    endDate: '2023-05',
    summary: '',
    highlights: [
      'Led end-to-end RMF-based risk assessments on TSA-regulated infrastructure; scoped assessments by asset type, evaluated control effectiveness against NIST 800-53, identified gaps, and reduced vulnerability exposure by 35% through targeted POA&M remediation tracking.',
      'Developed risk treatment plans by analyzing compliance drift and continuous monitoring data; partnered with risk owners to prioritize genuine risk reduction, tracked findings to closure, and translated technical results into executive-level risk reports.',
      'Built and maintained audit-ready documentation aligned to NIST 800-53 and NIST 800-82; supported continuous monitoring activities and delivered KRI/KPI-style findings reports to senior stakeholders on residual risk posture.',
    ],
  },
  {
    name: 'NJ Cybersecurity & Communications Integration Cell, New Jersey, USA',
    position: 'Security Automation Extern',
    url: '',
    startDate: '2022-09',
    endDate: '2023-01',
    summary: '',
    highlights: [
      'Architected an AWS-based attack surface management platform integrating 20+ OSINT and threat-intel feeds; hardened AWS infrastructure to CIS benchmarks and briefed leadership on high-risk findings including misconfigured services and credential exposures.',
      'Integrated 20+ OSINT and threat-intel feeds (Shodan, HIBP, VirusTotal, etc.) to automate passive/active reconnaissance and vulnerability enumeration across hybrid cloud.',
    ],
  },
  {
    name: 'National Technical & R D Committee, India',
    position: 'Digital Forensics Analyst Intern',
    url: '',
    startDate: '2021-03',
    endDate: '2021-05',
    summary: '',
    highlights: [
      'Executed forensic investigations using Autopsy, FTK Imager, Wireshark, and Volatility, preserving evidence integrity per ISO/IEC 27037.',
      'Built a Python-Scapy ARP spoofing detector with real-time alerting, reducing incident response time by 40%.',
      'Extracted IOCs from memory dumps and PCAPs to support rapid threat attribution and IR containment.',
    ],
  },
];

export default work;
