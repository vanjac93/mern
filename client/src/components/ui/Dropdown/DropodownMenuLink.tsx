import { forwardRef } from 'react'

import { Link } from 'react-router-dom'

import { StyledDropdownMenuItem } from './styles'
import { DropdownMenuLinkProps } from '~/components/ui/Dropdown/types'

const DropdownMenuLink = forwardRef<HTMLAnchorElement, DropdownMenuLinkProps>((props, ref) => {
  return (
    <StyledDropdownMenuItem as={Link} to={props.to}>
      {props.children}
    </StyledDropdownMenuItem>
  )
})

export default DropdownMenuLink
