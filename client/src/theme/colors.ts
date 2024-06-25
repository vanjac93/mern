import tinycolor from 'tinycolor2'
import { ThemeType } from './types'

const colors: ThemeType['colors'] = {
  primary: '#0054e9',
  text: '#000000',
  textSecondary: 'rgba(0,0,0,0.5)',
  success: '#22BB33',
  textUi: '#fff',
  error: '#F44436',
  errorSecondary: tinycolor('#F44436').toHexString(),
  bg: 'white',
  bgAlt: '#f2f2f2',
  secondary: '#0163aa',
  borderSecondary: 'yellow',
  uiBackground: '#B8D5B8',
  secondaryAlt: '#f2f2f2'
}

export default colors
