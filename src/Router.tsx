import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AboutPage } from './pages/About.page';
import { HomePage } from './pages/Home.page';
import { PrintPage } from './pages/Print.page';
import { ShopPage } from './pages/Shop.page';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/shop/:id', element: <PrintPage /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

