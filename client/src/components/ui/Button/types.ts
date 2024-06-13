import { HTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  outlined?: boolean
  positive?: boolean
  negative?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'small' | 'default' | 'large'
} & HTMLAttributes<HTMLButtonElement>
