import { Outlet } from 'react-router-dom';

import TopBar from './TopBar';

function MainLayout() {
  return (
    <div className="wrapper">
      <TopBar />

      <main className="flex-auto overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
