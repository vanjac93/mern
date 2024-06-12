const MobileScreenBreakpoint = 600

export const breakpointsAliases = {
  xs: 576,
  mobileScreen: MobileScreenBreakpoint, // this one is defined in mediainfo
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1366,
  xxl: 1920
}

export const mediaQueries = {
  xs: `@media screen and (max-width: ${breakpointsAliases.xs - 1}px)`,
  mobile: `@media screen and (max-width: ${breakpointsAliases.mobileScreen}px)`,
  sm: `@media screen and (max-width: ${breakpointsAliases.sm - 1}px)`,
  md: `@media screen and (max-width: ${breakpointsAliases.md - 1}px)`,
  lg: `@media screen and (max-width: ${breakpointsAliases.lg - 1}px)`,
  xl: `@media screen and (max-width: ${breakpointsAliases.xl - 1}px)`,
  xxl: `@media screen and (max-width: ${breakpointsAliases.xxl - 1}px)`
}

type BreakpointsType = Array<string> & {
  xs?: string
  sm?: string
  mobile?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

export const breakpoints: BreakpointsType = Object.keys(breakpointsAliases).map(
  // @ts-ignore
  (x) => breakpointsAliases[x] + 'px'
)

breakpoints.xs = breakpoints[0]
breakpoints.mobile = breakpoints[1]
breakpoints.sm = breakpoints[2]
breakpoints.md = breakpoints[3]
breakpoints.lg = breakpoints[4]
breakpoints.xl = breakpoints[5]
breakpoints.xxl = breakpoints[6]
