import { ReactNode } from 'react'

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

export type NavigationMenuProps = NavigationMenuPrimitive.NavigationMenuProps & {
  alignRight?: boolean
  minWidth?: string
}

export type NavigationItemProps = NavigationMenuPrimitive.NavigationMenuItemProps & {
  render?: ReactNode
}
