import Home from '@client/pages/Home'
import Login from '@client/pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
