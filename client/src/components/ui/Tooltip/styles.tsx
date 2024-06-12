import * as TooltipRadix from '@radix-ui/react-tooltip'
import styled, { css } from 'styled-components'

export type Variant = 'default' | 'admin' | 'primary'

export const StyledTooltip = styled(TooltipRadix.Content)<{ variant?: Variant }>`
  z-index: 9999;
  padding: 8px 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px 9px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  max-width: calc(100vw - 30px);
  ${({ variant }) =>
    variant === 'admin' &&
    css`
      padding: 4px 8px;
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.bg};
    `};

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      padding: 4px 8px;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.primary};
    `};
`

StyledTooltip.defaultProps = {
  variant: 'default'
}
