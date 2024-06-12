import styled from 'styled-components'
import { flexbox, layout } from 'styled-system'

import Box from './Box'
import { FlexProps } from './types'

const Flex = styled(Box)<FlexProps & { gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};
  ${flexbox};
  ${layout}
`

export default Flex
