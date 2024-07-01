import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import styled, { css } from 'styled-components'
import { color, ColorProps } from 'styled-system'

import { DropdownMenuItemProps } from './types'
import { hexToRGB } from '~/utils/style'

export const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content)<
  ColorProps & { $rounded?: boolean }
>`
  background-color: ${({ theme }) => theme.colors.bg};
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  min-width: 30px;
  width: 100%;
  box-shadow: 0 0px 6px 4px rgba(0, 0, 0, 0.1);
  z-index: 9998;
  min-width: var(--radix-popper-anchor-width);
  ${color}

  /* pointer-events: auto;
  position: fixed;
  width: calc(100% - 40px);
  left: 20px;
  bottom: 20px; */

  &[data-align='end'] {
    text-align: end;
    a,
    button {
      text-align: end;
      justify-content: flex-end;
    }
  }

  &[data-side='top'] {
    animation-name: slideDownAndFade;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  &[data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-side='bottom'] {
    animation-name: slideUpAndFade;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &[data-side='left'] {
    animation-name: slideRightAndFade;
  }

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 5px;
    `}
`

export const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.DropdownMenuItem)<
  Pick<DropdownMenuItemProps, 'selected'>
>`
  padding: 10px 12px;
  line-height: 1.1;
  font-size: 12px;
  color: ${({ theme, selected }) => (selected ? theme.colors.secondary : theme.colors.primary)};
  display: block;
  cursor: pointer;
  &[data-highlighted] {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => hexToRGB(theme.colors.bg, 0.2)};
  }
  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.borderSecondary};
  }

  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'initial')};
`

export const StyledTriggerWrap = styled(DropdownMenuPrimitive.Trigger)`
  z-index: 102;
  position: relative;
  cursor: pointer;

  &[data-state='open'] {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &[data-state='open'] {
    z-index: 102;
  }
`
