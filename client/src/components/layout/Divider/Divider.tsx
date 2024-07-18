import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { background, space } from 'styled-system'

const StyledDivider = styled(Box)<{ $vertical?: boolean; $color?: string }>`
  background-color: ${({ theme, $color }) => $color || theme.colors.primary};
  line-height: 1.5;
  user-select: none;
  ${({ $vertical }) =>
    $vertical
      ? css`
          height: 100%;
          width: 1px;
          margin: 0 12px;
        `
      : css`
          width: 100%;
          height: 1px;
          margin: 12px 0;
        `}

  ${background}
  ${space}
`

export default StyledDivider
