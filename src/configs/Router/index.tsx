import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { type TypeRouter } from './router.types';

import routes from './routes';

import MainLayout from '@components/layouts/MainLayout';

const Router: React.FC = () => {
  const pageRoutes = routes.map(({ path, title, element }: TypeRouter) => {
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {pageRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
