import Home from '@client/pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
