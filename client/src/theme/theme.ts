import { breakpoints, mediaQueries } from './breakpoints'
import colors from './colors'
import { ThemeType } from './types'

const theme: ThemeType = {
  mq: mediaQueries,
  breakpoints,
  isRtl: true,
  menu: {
    height: '80px'
  },
  colors,
  font: {
    ltr: 'Roboto, sans-serif',
    rtl: 'Fira Mono, sans-serif'
  }
}

export default theme
