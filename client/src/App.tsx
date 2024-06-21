import i18n from '@client/services/i18n/i18n'
import Providers from './components/Providers'
import { I18nextProvider } from 'react-i18next'
import AppRouter from './components/Router'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    async function test() {
      fetch('http://localhost:8080')
        .then((data) => data.json())
        .then((data) => {
          console.log('got', data)
        })
    }

    test()
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <Providers>
        <AppRouter />
      </Providers>
    </I18nextProvider>
  )
}

export default App
