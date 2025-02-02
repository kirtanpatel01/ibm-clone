import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Products, Industries, Offering, Services, BlogPage, Contact }from './pages';
import { UnderMaintenance } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'industries',
        element: <Industries />,
      },
      {
        path: 'offering',
        element: <Offering />,
      },
      {
        path: 'under-maintenance',
        element: <UnderMaintenance />,
      },
      {
        path: 'blogs',
        element: <BlogPage />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
