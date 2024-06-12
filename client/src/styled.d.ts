import 'styled-components'
import { ThemeType } from './theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
