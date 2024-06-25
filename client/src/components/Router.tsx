import Home from '@client/pages/Home'
import Login from '@client/pages/Login'
import Signup from '@client/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup'
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
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
