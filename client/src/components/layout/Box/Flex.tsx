import styled from 'styled-components'
import { flexbox, layout } from 'styled-system'

import Box from './Box'
import { FlexProps } from './types'
import { Link } from 'react-router-dom'

const Flex = styled(Box)<FlexProps & { gap?: number | string; as?: typeof Link }>`
  display: flex;
  gap: ${({ gap }) => (typeof gap === 'string' ? gap : gap + 'px')};
  ${flexbox};
  ${layout}
`

export default Flex
