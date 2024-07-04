import { FC, PropsWithChildren } from 'react'

import NavigationList from '~/components/ui/NavigationMenu/NavigationList'
import {
  StyledNavMenuRoot,
  StyledNavMenuViewport,
  StyledViewportPosition
} from '~/components/ui/NavigationMenu/styles'
import { NavigationMenuProps } from '~/components/ui/NavigationMenu/types'

const NavigationMenu: FC<PropsWithChildren<NavigationMenuProps>> = ({
  alignRight,
  children,
  minWidth,
  ...other
}) => {
  return (
    <StyledNavMenuRoot delayDuration={0} {...other}>
      <NavigationList>{children}</NavigationList>
      <StyledViewportPosition alignRight={alignRight} minWidth={minWidth}>
        <StyledNavMenuViewport />
      </StyledViewportPosition>
    </StyledNavMenuRoot>
  )
}

export default NavigationMenu
