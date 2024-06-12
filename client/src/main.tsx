import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import '@fontsource/fira-mono'
import '@fontsource/roboto'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
