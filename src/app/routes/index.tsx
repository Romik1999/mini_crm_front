import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from '../../shared/ui/layout';
import HomePage from '../../pages/home';

const Router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

export default Router;
