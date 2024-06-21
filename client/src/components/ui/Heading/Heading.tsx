import styled from 'styled-components'
import { TypographyProps, space, typography } from 'styled-system'

import { tags, HeadingProps } from './types'

const Heading = styled.div<HeadingProps>`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  ${typography}
  ${space}
`

Heading.defaultProps = {
  as: 'h2'
}

export default Heading
