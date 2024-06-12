import { ExecutionContext } from 'styled-components'

/**
 * camelCaseToDash('userId') => "user-id"
 * camelCaseToDash('waitAMoment') => "wait-a-moment"
 * camelCaseToDash('TurboPascal') => "turbo-pascal"
 */
export function camelCaseToDash(str: string): string {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

/**
 * Include theme file from appropriate (currently active) theme folder,
 * with a fallback to base, if file doesn't exists.
 */
export function assetFile(filename: string): string {
  return new URL(`../assets/${filename}`, import.meta.url).href
}

/**
 * This is a theme helper. Will accept rgba color as an array [0, 0, 0, 1],
 * and produce string in format rgba(0, 0, 0, 1). Optional opacity modifier.
 */
function rgba(rgba: number[], opacity = -1): string {
  if (opacity > -1) {
    rgba[3] = opacity
  }
  return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`
}

/**
 * @description change hex color to rgb (rgba is alpha is provided)
 */
export function hexToRGB(hex: string, alpha?: number) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}

//rtl
export const rtl = (left: string, right: string) => (props: ExecutionContext) =>
  props.theme.isRtl ? right : left
