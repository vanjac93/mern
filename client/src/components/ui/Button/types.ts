import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type BaseButtonProps = {
  outlined?: boolean
  positive?: boolean
  negative?: boolean
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'small' | 'default' | 'large'
} & HTMLAttributes<HTMLButtonElement>

export type ButtonProps =
  | (BaseButtonProps & { as?: undefined })
  | (BaseButtonProps & { as: 'button' })
  | (BaseButtonProps & { as: typeof Link } & LinkProps)
  | (BaseButtonProps & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>)
