import tinycolor from 'tinycolor2'
import { ThemeType } from './types'

const colors: ThemeType['colors'] = {
  primary: '#0054e9',
  text: '#404558',
  textSecondary: '#596a95',
  success: '#22BB33',
  textUi: '#ffffff',
  error: '#F44436',
  errorSecondary: tinycolor('#F44436').lighten().toHexString(),
  bg: '#fff',
  bgAlt: '#e6eefd',
  secondary: '#0163aa',
  borderSecondary: '#e6eefd',
  uiBackground: '#B8D5B8',
  secondaryAlt: '#f2f2f2'
}

export default colors
