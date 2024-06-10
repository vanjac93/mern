import theme from '@client/theme/theme'
import { PropsWithChildren } from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <StyleSheetManager>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>
  )
}
