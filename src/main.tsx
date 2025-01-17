import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home_page'
import NotFoundPage from './pages/error_page'
import "./index.css";
import AboutPage from './pages/about_page';
import FeaturesPage from './pages/features_page';
import ThankPage from './pages/thank_you_page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/showcase',
    element: <FeaturesPage />
  },
  {
    path: '/download',
    element: <ThankPage />
  }
])



createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
