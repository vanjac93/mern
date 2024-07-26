import React, { FC } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type * as Radix from '@radix-ui/react-primitive'

import { Divider } from '~/components/layout/Divider'
import { StyledAccordionRoot } from '~/components/ui/Accordion/styles'
import { AccordionProps } from '~/components/ui/Accordion/types'

const Accordion: FC<AccordionProps> = (props) => {
  const { options, defaultOpened, showDivider, dividerColor, value } = props

  return (
    <StyledAccordionRoot
      defaultValue={props.onValueChange ? undefined : value ? value : defaultOpened}
      type="multiple"
      onValueChange={props?.onValueChange}
      value={value}
    >
      {options.map((x, i) => (
        <AccordionPrimitive.Item key={i} value={x.id}>
          <AccordionTrigger asChild className="pointer">
            {x.trigger}
          </AccordionTrigger>
          <AccordionContent>{x.content}</AccordionContent>
          {showDivider && i !== options.length - 1 && <Divider backgroundColor={dividerColor} />}
        </AccordionPrimitive.Item>
      ))}
    </StyledAccordionRoot>
  )
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  Radix.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, forwardedRef) => (
  <AccordionPrimitive.Trigger {...props} ref={forwardedRef}>
    {children}
  </AccordionPrimitive.Trigger>
))

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  Radix.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content {...props} ref={forwardedRef}>
    {children}
  </AccordionPrimitive.Content>
))

export default Accordion
