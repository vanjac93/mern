import { FC } from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'

import { PopoverProps } from './types'
import { StyledPopoverArrow, StyledPopoverContent } from '@client/components/ui/Popover/styles'

const Popover: FC<PopoverProps> = (props) => {
  const { children, content, contentProps, variant, container, ...other } = props
  return (
    <PopoverPrimitive.Root modal={false} {...other}>
      <PopoverPrimitive.Trigger asChild>{props.children}</PopoverPrimitive.Trigger>
      {/* <PopoverPrimitive.Anchor /> */}
      <PopoverPrimitive.Portal container={container}>
        <StyledPopoverContent
          collisionPadding={10}
          sideOffset={10}
          {...contentProps}
          variant={variant}
        >
          {props.content}
          {/* <StyledPopoverClose asChild>
            <Icon className="mi-v2-x-mark" />
          </StyledPopoverClose>  */}
          {variant === 'admin' && <StyledPopoverArrow />}
        </StyledPopoverContent>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export default Popover
