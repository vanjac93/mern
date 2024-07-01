import { useAppStore } from '~/store'
import { ROUTES } from '~/utils/constants'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const user = useAppStore((state) => state.user)

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} />
  }

  return children
}
