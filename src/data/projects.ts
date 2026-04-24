export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Coming Soon',
    image: '/images/projects/placeholder.jpg',
    date: '2026-01-01',
    desc: 'Coming soon',
  },
  {
    title: 'Coming Soon',
    image: '/images/projects/placeholder.jpg',
    date: '2026-01-01',
    desc: 'Coming soon',
  },
  {
    title: 'Coming Soon',
    image: '/images/projects/placeholder.jpg',
    date: '2026-01-01',
    desc: 'Coming soon',
  },
];

export default data;
