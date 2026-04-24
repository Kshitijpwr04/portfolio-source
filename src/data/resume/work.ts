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
    name: 'Source Sphere LLC',
    position: 'Security Engineer',
    url: '',
    startDate: '2025-12',
    endDate: 'Present',
    summary: '',
    highlights: [
      'Built a multi-cloud CSPM program using Defender for Cloud, AWS Security Hub, and GCP SCC; remediated critical misconfigurations enforcing encryption, network segmentation, and audit logging aligned with HIPAA and HITECH.',
      'Embedded security guardrails into Azure DevOps and GitHub Actions CI/CD pipelines using Azure Policy, OPA, and Terraform; enforced secrets scanning, IaC checks, and least-privilege service principal controls across cloud deployments.',
      'Centralized threat detection across Azure, AWS, and on-prem by ingesting logs into Google Chronicle and Microsoft Sentinel; built detection rules targeting PHI exfiltration and anomalous access patterns, reducing MTTD by 35%.',
      'Led HIPAA and SOC 2 compliance engineering by configuring BAA-eligible services, enforcing TLS 1.2+ encryption, and automating audit evidence collection; delivered gap assessments and remediation roadmaps supporting external audit readiness.'
    ]
  },
  {
    name: 'Baanyan Software Services Inc.',
    position: 'Security Analyst',
    url: '',
    startDate: '2024-11',
    endDate: '2025-09',
    summary: '',
    highlights: [
      'Configured Microsoft Entra ID and on-prem AD with SSO, MFA, Conditional Access, and PIM (JIT), enforcing Zero Trust and meeting compliance requirements including NIST, CIS, HIPAA, GLBA, and SOX across hybrid cloud (Azure/AWS).',
      'Integrated 15+ SaaS/LOB apps using SAML 2.0, OAuth 2.0, and LDAP; onboarded Google as an OIDC IdP in Azure Entra ID; automated access reviews and role assignments via SailPoint IdentityIQ and Entra workflows.',
      'Automated least-privilege IAM in AWS using Terraform, CloudFormation, and IAM Identity Center (JIT + ABAC); enforced CI/CD DevSecOps-based access management and eliminated standing admin access across accounts.',
      'Hardened GCP IAM with custom roles, Org Policies, and SCC; configured workload identity federation and forwarded threat logs to Chronicle SIEM for centralized detection.'
    ]
  },
  {
    name: 'Collaborative Solutions LLC',
    position: 'Cybersecurity Risk Analyst Extern',
    url: '',
    startDate: '2023-01',
    endDate: '2023-05',
    summary: '',
    highlights: [
      'Conducted RMF-based risk assessments on legacy rail systems and TSA-regulated infrastructure, identifying misconfigurations and control gaps that reduced vulnerability exposure by 35% through targeted POA&M remediation.',
      'Developed risk treatment plans by analyzing compliance drift and continuous monitoring data; translated technical findings into executive-level reports and proposed mitigations aligned with organizational risk posture.',
      'Performed asset discovery and threat identification across PTC and signaling networks, mapping insecure protocols and unauthorized access risks to NIST CSF categories and reporting high-risk findings.',
      'Delivered audit-ready documentation aligned with TSA SD 1580/82-2022 and NIST 800-82; supported continuous monitoring and enhanced stakeholder awareness of residual risk across OT infrastructure.'
    ]
  },
  {
    name: 'NJ Cybersecurity & Communications Integration Cell',
    position: 'Security Automation Extern',
    url: '',
    startDate: '2022-09',
    endDate: '2023-01',
    summary: '',
    highlights: [
      'Architected and containerized a SpiderFoot–based Attack Surface Management (ASM) platform on AWS EC2, providing 24×7 discovery of external-facing assets and cutting exposure window by ≈35%.',
      'Integrated 20+ OSINT and threat-intel feeds (Shodan, HIBP, VirusTotal, etc.) to automate passive/active reconnaissance and vulnerability enumeration across hybrid cloud.',
      'Hardened AWS stack—VPC design, Security Groups, IAM least privilege, Linux hardening, Docker isolation—meeting CIS benchmarks and ensuring scalable, secure ops.',
      'Prioritized high-risk findings (misconfigured services, leaked creds) and briefed NJCCIC leadership; the project streamlined threat-intel workflows and boosted situational awareness for statewide stakeholders.'
    ]
  },
  {
    name: 'National Technical & R D Committee',
    position: 'Digital Forensics Analyst Intern',
    url: '',
    startDate: '2021-03',
    endDate: '2021-05',
    summary: '',
    highlights: [
      'Executed forensic investigations using Autopsy, FTK Imager, Wireshark, and Volatility, preserving evidence integrity per ISO/IEC 27037.',
      'Built a Python-Scapy ARP spoofing detector with real-time alerting, reducing incident response time by 40%.',
      'Extracted IOCs from memory dumps and PCAPs to support rapid threat attribution and IR containment.'
    ]
  }
];

export default work;
