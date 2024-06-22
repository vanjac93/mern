import Providers from '@client/components/Providers'
import i18n from '@client/services/i18n/i18n'
import { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

export default function TestWrapper({ children }: PropsWithChildren) {
  return (
    <I18nextProvider i18n={i18n}>
      <Providers>
        <MemoryRouter>{children}</MemoryRouter>
      </Providers>
    </I18nextProvider>
  )
}
