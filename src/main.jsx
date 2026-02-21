import { StrictMode, Suspense, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Route.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import Loader from './component/Loading/Loader.jsx'

const AppBootstrap = () => {
  const [isEntryLoading, setIsEntryLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntryLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isEntryLoading) {
    return (
      <div className="min-h-screen bg-[#e6e6e6] flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppBootstrap />
    </AuthProvider>
    <ToastContainer
      position="top-right"
      style={{ top: "80px" }}
    />
  </StrictMode>,
)
