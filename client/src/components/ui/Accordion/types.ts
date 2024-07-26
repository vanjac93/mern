import { ReactNode } from 'react'

export type AccordionProps = {
  // collapsible?: boolean
  onValueChange?: (value: string[]) => void
  defaultOpened?: string[]
  showDivider?: boolean
  dividerColor?: string
  value?: string[]
  options: {
    trigger: ReactNode
    content: ReactNode
    id: string
  }[]
}
