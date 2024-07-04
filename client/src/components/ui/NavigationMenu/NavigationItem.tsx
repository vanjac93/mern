import { FC, PropsWithChildren, ReactNode } from 'react'

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import { StyledNavMenuContent } from '~/components/ui/NavigationMenu/styles'
import { NavigationItemProps } from '~/components/ui/NavigationMenu/types'

const NavigationItem: FC<PropsWithChildren<NavigationItemProps>> = ({
  render,
  children,
  ...props
}) => {
  return (
    <NavigationMenuPrimitive.Item {...props}>
      {render ? (
        <NavigationMenuPrimitive.Trigger asChild>{children}</NavigationMenuPrimitive.Trigger>
      ) : (
        children
      )}

      {render && <StyledNavMenuContent asChild>{render}</StyledNavMenuContent>}
    </NavigationMenuPrimitive.Item>
  )
}

export default NavigationItem
