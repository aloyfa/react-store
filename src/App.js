import Products, { loader as productsLoader } from './pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import Wishlist from './pages/Wishlist';
import Details, { loader as detailsLoader } from './pages/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'products',
          loader: productsLoader,
          element: <Products />,
        },
        {
          path: 'wishlist',
          element: <Wishlist />,
        },
        {
          path: 'products/:id',
          loader: detailsLoader,
          element: <Details />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
