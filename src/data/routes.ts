export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Kshitij',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Articles',
    path: '/writing',
  },
  {
    label: 'Publications',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
];

export default routes;
