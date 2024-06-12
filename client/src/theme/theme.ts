import { breakpoints, mediaQueries } from './breakpoints'
import colors from './colors'
import { ThemeType } from './types'

const theme: ThemeType = {
  mq: mediaQueries,
  breakpoints,
  isRtl: true,
  colors,
  font: {
    ltr: 'Roboto, sans-serif',
    rtl: 'Fira Mono, sans-serif'
  }
}

export default theme
