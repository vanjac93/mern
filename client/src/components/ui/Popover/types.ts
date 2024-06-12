import { PropsWithChildren, ReactNode } from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'

export type PopoverProps = PropsWithChildren<{ content: ReactNode }> &
  PopoverPrimitive.PopoverProps & {
    contentProps?: PopoverContentProps
    variant?: 'admin' | "light"
    container?: PopoverPrimitive.PopoverPortalProps['container']
  }

export type PopoverContentProps = Pick<
  PopoverPrimitive.PopoverContentProps,
  'side' | 'sideOffset' | 'collisionPadding' | 'align' | 'alignOffset' | 'style'
>
