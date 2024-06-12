import { forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { StyledDropdownMenuContent } from './styles'
import { DropdownMenuProps } from './types'

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>((props, ref) => {
  const { children, portalProps, ...other } = props
  return (
    <DropdownMenuPrimitive.Portal {...portalProps}>
      <StyledDropdownMenuContent
        ref={ref}
        collisionPadding={0}
        sideOffset={0}
        {...other}
        $rounded={other.sideOffset ? other.sideOffset > 0 : false}
      >
        {children}
      </StyledDropdownMenuContent>
    </DropdownMenuPrimitive.Portal>
  )
})

export default DropdownMenu
