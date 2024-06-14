export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

type BreakpointAliasesType = {
  [Breakpoint in BreakpointType]: number
}

export const breakpointsAliases: BreakpointAliasesType = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1366,
  xxl: 1920
}

export const mediaQueries = {
  xs: `@media screen and (max-width: ${breakpointsAliases.xs - 1}px)`,
  sm: `@media screen and (max-width: ${breakpointsAliases.sm - 1}px)`,
  md: `@media screen and (max-width: ${breakpointsAliases.md - 1}px)`,
  lg: `@media screen and (max-width: ${breakpointsAliases.lg - 1}px)`,
  xl: `@media screen and (max-width: ${breakpointsAliases.xl - 1}px)`,
  xxl: `@media screen and (max-width: ${breakpointsAliases.xxl - 1}px)`
}

type BreakpointsType = Array<string> & {
  xs?: string
  sm?: string
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
breakpoints.sm = breakpoints[2]
breakpoints.md = breakpoints[3]
breakpoints.lg = breakpoints[4]
breakpoints.xl = breakpoints[5]
breakpoints.xxl = breakpoints[6]
