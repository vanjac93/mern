import styled from 'styled-components'
import { background, layout, position, flex, space, color, border } from 'styled-system'

import { BoxProps } from './types'

const Box = styled.div<BoxProps>`
  ${background}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${border}
  ${flex}
`

export default Box
