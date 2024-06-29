import Home from '@client/pages/Home'
import Login from '@client/pages/Login'
import Shop from '@client/pages/Shop'
import Signup from '@client/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SHOP: '/shop'
}

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
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
    element: <Shop />
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
