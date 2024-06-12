import { GlobalBaseStyle } from '@client/theme/styles/base.styled'
import { NormalizeStyle } from '@client/theme/styles/normalize.styled'
import theme from '@client/theme/theme'
import { PropsWithChildren } from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <StyleSheetManager>
      <ThemeProvider theme={theme}>
        <GlobalBaseStyle />
        <NormalizeStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  )
}
