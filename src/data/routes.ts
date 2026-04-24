export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "Michael D'Angelo",
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
    label: 'Projects',
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
    label: 'Articles',
    path: '/projects',
  },
];

export default routes;
