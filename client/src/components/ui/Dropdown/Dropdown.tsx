import { FC } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { StyledTriggerWrap } from './styles'
import { DropdownProps } from './types'

const Dropdown: FC<DropdownProps> = (props) => {
  const { children, trigger, disabled, ...other } = props
  return (
    <DropdownMenuPrimitive.Root modal={false} {...other}>
      <StyledTriggerWrap asChild disabled={disabled}>
        {trigger}
      </StyledTriggerWrap>
      {children}
    </DropdownMenuPrimitive.Root>
  )
}

export default Dropdown
