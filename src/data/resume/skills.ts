export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

const skills: Skill[] = [
  // Identity & Access Management
  { title: 'Microsoft Entra ID (Azure AD)', competency: 5, category: ['IAM'] },
  { title: 'Okta', competency: 4, category: ['IAM'] },
  { title: 'SailPoint IdentityIQ', competency: 4, category: ['IAM'] },
  { title: 'Azure Key Vault', competency: 4, category: ['IAM'] },
  { title: 'Privileged Identity Management (PIM)', competency: 5, category: ['IAM'] },
  { title: 'RBAC', competency: 5, category: ['IAM'] },
  { title: 'Conditional Access', competency: 5, category: ['IAM'] },
  { title: 'IAM Governance', competency: 4, category: ['IAM'] },
  { title: 'Identity Lifecycle Management', competency: 4, category: ['IAM'] },
  { title: 'SSO', competency: 5, category: ['IAM'] },
  { title: 'Federation (SAML, OAuth2, OIDC)', competency: 5, category: ['IAM'] },
  { title: 'MFA', competency: 5, category: ['IAM'] },

  // Cloud Security
  { title: 'Defender for Cloud', competency: 5, category: ['Cloud Security'] },
  { title: 'Defender XDR', competency: 4, category: ['Cloud Security'] },
  { title: 'AWS GuardDuty', competency: 4, category: ['Cloud Security'] },
  { title: 'Security Hub', competency: 4, category: ['Cloud Security'] },
  { title: 'Security Lake', competency: 3, category: ['Cloud Security'] },
  { title: 'CloudTrail', competency: 4, category: ['Cloud Security'] },
  { title: 'GCP SCC', competency: 4, category: ['Cloud Security'] },
  { title: 'Terraform', competency: 5, category: ['Cloud Security'] },
  { title: 'Azure Lighthouse', competency: 3, category: ['Cloud Security'] },
  { title: 'AWS Organizations', competency: 4, category: ['Cloud Security'] },
  { title: 'CSPM', competency: 5, category: ['Cloud Security'] },
  { title: 'Zero Trust Architecture', competency: 5, category: ['Cloud Security'] },

  // Security Operations
  { title: 'Microsoft Sentinel', competency: 5, category: ['Security Operations'] },
  { title: 'Splunk', competency: 4, category: ['Security Operations'] },
  { title: 'Wazuh', competency: 3, category: ['Security Operations'] },
  { title: 'AlienVault', competency: 3, category: ['Security Operations'] },
  { title: 'Incident Response', competency: 5, category: ['Security Operations'] },
  { title: 'Threat Detection & Triage', competency: 5, category: ['Security Operations'] },
  { title: 'Log Management', competency: 4, category: ['Security Operations'] },
  { title: 'Vulnerability Management', competency: 4, category: ['Security Operations'] },
  { title: 'DLP', competency: 3, category: ['Security Operations'] },
  { title: 'MITRE ATT&CK', competency: 4, category: ['Security Operations'] },

  // Programming
  { title: 'Python', competency: 5, category: ['Programming'] },
  { title: 'PowerShell', competency: 5, category: ['Programming'] },
  { title: 'Bash', competency: 4, category: ['Programming'] },
  { title: 'SQL', competency: 4, category: ['Programming'] },
  { title: 'C/C++', competency: 3, category: ['Programming'] },
  { title: 'Azure CLI', competency: 4, category: ['Programming'] },
  { title: 'Linux', competency: 5, category: ['Programming'] },

  // Governance & Risk
  { title: 'Risk Assessments', competency: 5, category: ['GRC'] },
  { title: 'Data Inventory & Flow Mapping', competency: 4, category: ['GRC'] },
  { title: 'Control Mapping & Gap Analysis', competency: 5, category: ['GRC'] },
  { title: 'NIST SP 800-53', competency: 5, category: ['GRC'] },
  { title: 'ISO 27001', competency: 4, category: ['GRC'] },
  { title: 'HIPAA', competency: 5, category: ['GRC'] },
  { title: 'SOX', competency: 4, category: ['GRC'] },
  { title: 'CIS Controls', competency: 4, category: ['GRC'] },
  { title: 'GRC', competency: 5, category: ['GRC'] },
  { title: 'POA&M', competency: 4, category: ['GRC'] },
  { title: 'Audit Readiness', competency: 5, category: ['GRC'] },
];

const categories = Array.from(
  new Set(skills.flatMap((skill) => skill.category)),
).map((name) => ({ name }));

export { skills, categories };
export default skills;
