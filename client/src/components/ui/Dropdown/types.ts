import { PropsWithChildren, ReactNode, HTMLAttributes } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ColorProps } from 'styled-system'

export type DropdownProps = DropdownMenuPrimitive.DropdownMenuProps & {
  trigger: ReactNode
  disabled?: boolean
}
export type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuContentProps &
  ColorProps &
  HTMLAttributes<HTMLElement> &
  PropsWithChildren & {
    portalProps?: DropdownMenuPrimitive.DropdownMenuPortalProps
  }

export type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps &
  HTMLAttributes<HTMLElement> &
  PropsWithChildren & { selected?: boolean }

export type DropdownMenuLinkProps = DropdownMenuItemProps & { to: string }

export type DropdownMenuSubProps = DropdownMenuPrimitive.DropdownMenuSubProps &
  PropsWithChildren & { trigger: ReactNode } & {
    contentProps?: DropdownMenuPrimitive.DropdownMenuSubContentProps
  }
