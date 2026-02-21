import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/Route.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import Loader from './component/Loading/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
    <ToastContainer
      position="top-right"
      style={{ top: "80px" }}
    />
  </StrictMode>,
)
