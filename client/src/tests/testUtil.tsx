import Providers from '@client/components/Providers'
import { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'

export default function TestWrapper({ children }: PropsWithChildren) {
  return (
    <Providers>
      <MemoryRouter>{children}</MemoryRouter>
    </Providers>
  )
}
