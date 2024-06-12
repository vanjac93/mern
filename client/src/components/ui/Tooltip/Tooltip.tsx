import { forwardRef } from 'react'

import * as TooltipRadix from '@radix-ui/react-tooltip'

import { StyledTooltip } from './styles'
import { TooltipProps } from './types'

const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>((props, ref) => {
  return (
    <TooltipRadix.Provider
      delayDuration={props.delayDuration ?? 300}
      disableHoverableContent={props.disableHoverableContent}
      skipDelayDuration={props.skipDelayDuration}
    >
      <TooltipRadix.Root
        open={props.open}
        onOpenChange={props.onOpenChange}
        defaultOpen={props.defaultOpen}
      >
        <TooltipRadix.Trigger asChild ref={ref}>
          {props.children}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <StyledTooltip
            side={props.side}
            align={props.align}
            sideOffset={props.sideOffset ?? 10}
            collisionPadding={100}
            variant={props.variant}
          >
            {props.content}
          </StyledTooltip>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
})

export default Tooltip
