import styled from 'styled-components'
import { flexbox, layout } from 'styled-system'

import Box from './Box'
import { FlexProps } from './types'

const Flex = styled(Box)<FlexProps & { gap?: number | string }>`
  display: flex;
  gap: ${({ gap }) => (typeof gap === 'string' ? gap : gap + 'px')};
  ${flexbox};
  ${layout}
`

export default Flex
