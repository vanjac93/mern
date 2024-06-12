import { forwardRef } from 'react'

import { StyledDropdownMenuItem } from './styles'
import { DropdownMenuItemProps } from './types'
import { Box } from '@client/components/layout/Box'

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>((props, ref) => {
  return (
    <StyledDropdownMenuItem {...props} ref={ref}>
      <Box>{props.children}</Box>
    </StyledDropdownMenuItem>
  )
})

export default DropdownMenuItem
