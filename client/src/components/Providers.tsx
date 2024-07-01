import { AuthAPI } from '~/services/api'
import { useAppStore } from '~/store'
import { GlobalBaseStyle } from '~/theme/styles/base.styled'
import { NormalizeStyle } from '~/theme/styles/normalize.styled'
import theme from '~/theme/theme'
import isPropValid from '@emotion/is-prop-valid'
import { PropsWithChildren, useEffect, useState } from 'react'
import { WebTarget } from 'styled-components'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { LoadingScreen } from './ui/Loading'
import { UserType } from '~/services/api/auth/types'

export default function Providers({ children }: PropsWithChildren) {
  const [fetching, setFetching] = useState(true)
  const store = useAppStore()

  useEffect(() => {
    async function fetchUser() {
      const [user, errors] = await AuthAPI.getUser()
      if (!errors.length) {
        store.setUser(user as UserType)
      }

      setFetching(false)
    }

    fetchUser()
  }, [])

  return (
    <StyleSheetManager>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={theme}>
          <GlobalBaseStyle />
          <NormalizeStyle />
          {fetching ? <LoadingScreen /> : children}
        </ThemeProvider>
      </StyleSheetManager>
    </StyleSheetManager>
  )
}

function shouldForwardProp(propName: string, elementToBeRendered: WebTarget) {
  return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true
}
