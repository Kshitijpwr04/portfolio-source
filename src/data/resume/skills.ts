export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

const skills: Skill[] = [
  // Identity & Access Management
  { title: 'Microsoft Entra ID (Azure AD)', competency: 5, category: ['IAM'] },
  {
    title: 'Privileged Identity Management (PIM)',
    competency: 5,
    category: ['IAM'],
  },
  { title: 'RBAC', competency: 5, category: ['IAM'] },
  { title: 'Conditional Access', competency: 5, category: ['IAM'] },
  { title: 'Identity Lifecycle Management', competency: 4, category: ['IAM'] },
  { title: 'SSO', competency: 5, category: ['IAM'] },
  {
    title: 'Federation (SAML 2.0, OAuth 2.0, OIDC)',
    competency: 5,
    category: ['IAM'],
  },
  { title: 'MFA', competency: 5, category: ['IAM'] },
  { title: 'Zero Trust Architecture', competency: 5, category: ['IAM'] },
  { title: 'AWS IAM', competency: 4, category: ['IAM'] },
  { title: 'IAM Identity Center (ABAC/JIT)', competency: 4, category: ['IAM'] },
  { title: 'IAM Access Analyzer', competency: 4, category: ['IAM'] },
  { title: 'Azure Key Vault', competency: 4, category: ['IAM'] },

  // Cloud Security & Engineering
  {
    title: 'Azure Defender for Cloud',
    competency: 5,
    category: ['Cloud Security'],
  },
  { title: 'Defender XDR', competency: 4, category: ['Cloud Security'] },
  { title: 'Security Lake', competency: 3, category: ['Cloud Security'] },
  { title: 'Terraform', competency: 5, category: ['Cloud Security'] },
  { title: 'AWS Organizations', competency: 4, category: ['Cloud Security'] },
  {
    title: 'Cloud Security Posture Management (CSPM)',
    competency: 5,
    category: ['Cloud Security'],
  },

  // Security Operations & Detection
  {
    title: 'SIEM (Microsoft Sentinel, Splunk, Wazuh, AlienVault)',
    competency: 5,
    category: ['Security Operations'],
  },
  {
    title: 'Incident Response',
    competency: 5,
    category: ['Security Operations'],
  },
  {
    title: 'Threat Detection & Triage',
    competency: 5,
    category: ['Security Operations'],
  },
  { title: 'Log Management', competency: 4, category: ['Security Operations'] },
  {
    title: 'Vulnerability Management',
    competency: 4,
    category: ['Security Operations'],
  },
  { title: 'MITRE ATT&CK', competency: 4, category: ['Security Operations'] },

  // Programming & Automation
  { title: 'Python', competency: 5, category: ['Programming'] },
  { title: 'PowerShell', competency: 5, category: ['Programming'] },
  { title: 'Bash', competency: 4, category: ['Programming'] },
  { title: 'SQL', competency: 4, category: ['Programming'] },
  { title: 'C/C++', competency: 3, category: ['Programming'] },
  { title: 'Azure CLI', competency: 4, category: ['Programming'] },
  { title: 'Linux', competency: 5, category: ['Programming'] },

  // Governance, Risk & Frameworks
  {
    title: 'Third-Party / Vendor Risk Management',
    competency: 5,
    category: ['GRC'],
  },
  { title: 'NIST RMF', competency: 5, category: ['GRC'] },
  { title: 'NIST 800-53r5', competency: 5, category: ['GRC'] },
  { title: 'HIPAA', competency: 5, category: ['GRC'] },
  { title: 'SOC 2', competency: 5, category: ['GRC'] },
  { title: 'SOX', competency: 4, category: ['GRC'] },
  { title: 'ISO 27001', competency: 4, category: ['GRC'] },
  { title: 'CIS Controls', competency: 4, category: ['GRC'] },
  { title: 'PCI DSS', competency: 4, category: ['GRC'] },
  { title: 'Control Gap Analysis', competency: 5, category: ['GRC'] },
  { title: 'Risk Treatment Planning', competency: 5, category: ['GRC'] },
  { title: 'POA&M / Remediation Tracking', competency: 4, category: ['GRC'] },
  { title: 'KRI/KPI Development', competency: 4, category: ['GRC'] },
  {
    title: 'Audit Readiness (SOC 2, HITRUST, ISO 27001)',
    competency: 5,
    category: ['GRC'],
  },
  { title: 'OneTrust (GRC tooling)', competency: 3, category: ['GRC'] },
  {
    title: 'Cross-functional Risk Coordination (Legal, Procurement, Business)',
    competency: 4,
    category: ['GRC'],
  },
];

const categories = Array.from(
  new Set(skills.flatMap((skill) => skill.category)),
).map((name) => ({
  name,
}));

export { skills, categories };
export default skills;
