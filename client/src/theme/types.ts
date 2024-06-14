export interface ThemeType {
  breakpoints?: Breakpoints
  mq: MediaQueries
  zoomBackground?: string
  nomenu?: boolean
  isRtl: boolean
  colors: ThemeColorsType
  font: ThemeFontType
  menu: {
    height: string
  }
}

interface ThemeFontType {
  ltr: string
  rtl: string
}

interface ThemeColorsType {
  bg: string
  bgAlt: string
  text: string
  primary: string
  secondary: string
  borderSecondary: string
  uiBackground: string
  error: string
}

export type MediaQueries = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export type Breakpoints = Array<string> & {
  xs?: string
  mobileScreen?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}
