import * as PopoverPrimitive from '@radix-ui/react-popover'
import styled from 'styled-components'

export const StyledPopoverContent = styled(PopoverPrimitive.Content)<{
  variant?: 'admin' | 'light'
}>`
  border-radius: 5px;
  padding: 8px 10px;
  /* max-width: 260px; */
  font-size: 13px;
  background-color: ${({ theme, variant }) =>
    variant === 'admin'
      ? theme.colors.bg
      : variant === 'light'
      ? theme.colors.bg
      : theme.colors.bg};
  color: ${({ theme, variant }) => theme.colors.text};
  box-shadow: 0 0 10px 9px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  /* animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity; */
  z-index: 104;

  /* &[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  } */
`

export const StyledPopoverClose = styled(PopoverPrimitive.Close)`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 12px;
`
//only in admin
export const StyledPopoverArrow = styled(PopoverPrimitive.Arrow)`
  fill: ${({ theme }) => theme.colors.bg};
`
