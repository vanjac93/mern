import * as AccordionPrimitive from '@radix-ui/react-accordion'
import styled from 'styled-components'

export const StyledAccordionRoot = styled(AccordionPrimitive.Root)`
  [data-state='open'] {
    > .mi-v2-arrow_down {
      transform: rotateZ(180deg);
    }
  }
  .pointer {
    user-select: none;
  }
`
