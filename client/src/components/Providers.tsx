import { GlobalBaseStyle } from '@client/theme/styles/base.styled'
import { NormalizeStyle } from '@client/theme/styles/normalize.styled'
import theme from '@client/theme/theme'
import isPropValid from '@emotion/is-prop-valid'
import { PropsWithChildren } from 'react'
import { WebTarget } from 'styled-components'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <StyleSheetManager>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={theme}>
          <GlobalBaseStyle />
          <NormalizeStyle />
          {children}
        </ThemeProvider>
      </StyleSheetManager>
    </StyleSheetManager>
  )
}

function shouldForwardProp(propName: string, elementToBeRendered: WebTarget) {
  return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true
}
