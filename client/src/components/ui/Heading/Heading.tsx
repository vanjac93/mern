import styled from 'styled-components'
import { color, space, textStyle, typography } from 'styled-system'

import { HeadingProps } from './types'

const Heading = styled.div<HeadingProps>`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  ${typography}
  ${color}
  ${space}
  ${textStyle}
`

Heading.defaultProps = {
  as: 'h2'
}

export default Heading
