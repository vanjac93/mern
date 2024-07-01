import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Shop from '~/pages/Shop'
import Signup from '~/pages/Signup'
import { ROUTES } from '~/utils/constants'
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Profile from '~/pages/Profile'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.SIGNUP,
    element: <Signup />
  },
  {
    path: ROUTES.SHOP,
    element: (
      <ProtectedRoute>
        <Shop />
      </ProtectedRoute>
    )
  },
  {
    path: ROUTES.PROFILE,
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
