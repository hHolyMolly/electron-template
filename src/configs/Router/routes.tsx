import { type TypeRouter } from './router.types';

import paths from './paths';

import { Home, NotFound } from '@pages';

const routes: TypeRouter[] = [
  {
    path: paths.Home,
    element: <Home />,
    title: 'Home',
  },

  {
    path: '*',
    element: <NotFound />,
    title: 'NotFound',
  },
];

export default routes;
