import styled from 'styled-components'
import { background, color, space, typography } from 'styled-system'

import { TypographyProps } from './types'

const Typography = styled.div<TypographyProps>`
  line-height: 1.5;
  font-size: 14px;
  ${background}
  ${space}
  ${color}
  ${typography}
`

export default Typography
