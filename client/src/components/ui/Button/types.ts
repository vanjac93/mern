import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type BaseButtonProps = {
  variant?: 'default' | 'outlined' | 'text' | 'alert'
  text?: ReactNode
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
  icon?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'small' | 'default' | 'large'
} & HTMLAttributes<HTMLButtonElement>

export type ButtonProps =
  | (BaseButtonProps & { as?: undefined })
  | (BaseButtonProps & { as: 'button' })
  | (BaseButtonProps & { as: typeof Link } & LinkProps)
  | (BaseButtonProps & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>)
