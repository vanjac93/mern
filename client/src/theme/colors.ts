import tinycolor from 'tinycolor2'
import { ThemeType } from './types'

const colors: ThemeType['colors'] = {
  primary: '#0054e9',
  // text: '#1c2024',
  text: '#404558',
  // textSecondary: 'rgba(0,0,0,0.5)',
  textSecondary: '#596a95',
  // textSecondary: '#73787c',
  success: '#22BB33',
  textUi: '#ffffff',
  error: '#F44436',
  errorSecondary: tinycolor('#F44436').toHexString(),
  bg: '#fff',
  bgAlt: '#f2f2f2',
  secondary: '#0163aa',
  borderSecondary: tinycolor('#0054e9').lighten(40).toHexString(),
  uiBackground: '#B8D5B8',
  secondaryAlt: '#f2f2f2'
}

export default colors
