import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition | string;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/kshitijpawar04/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/Kshitijpwr04',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://scholar.google.com/citations?user=HvHqir4AAAAJ&hl=en&authuser=1',
    label: 'Google Scholar',
    icon: '/icons/googlescholar.svg',
  },
 
];

export default data;
