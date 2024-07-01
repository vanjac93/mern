import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Shop from '~/pages/Shop'
import Signup from '~/pages/Signup'
import { ROUTES } from '~/utils/constants'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

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
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
