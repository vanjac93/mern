import { ReactNode } from 'react'

export interface NavItem {
  text: string
  content?: ReactNode
  to?: string
  id: string
}
