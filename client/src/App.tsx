import i18n from '@client/services/i18n'
import Providers from './components/Providers'
import { I18nextProvider } from 'react-i18next'
import AppRouter from './components/Router'

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Providers>
        <AppRouter />
      </Providers>
    </I18nextProvider>
  )
}

export default App
