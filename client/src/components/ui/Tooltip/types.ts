import { ReactNode } from 'react'

import * as TooltipRadix from '@radix-ui/react-tooltip'

export type TooltipProps = TooltipRadix.TooltipProviderProps &
  TooltipRadix.TooltipProps & {
    content: ReactNode
    children?: ReactNode
    side?: 'top' | 'left' | 'right' | 'bottom'
    align?: 'start' | 'center' | 'end'
    variant?: 'default' | 'admin'
    sideOffset?: number
  }
