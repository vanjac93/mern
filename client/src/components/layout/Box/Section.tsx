import styled from 'styled-components'
import { background, layout, position, flex, space, color, border } from 'styled-system'

import { BoxProps } from './types'

const Section = styled.section<BoxProps>`
  ${background}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${border}
  ${flex}
`

export default Section
