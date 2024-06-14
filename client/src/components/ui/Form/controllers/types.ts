import { HTMLAttributes, ReactElement } from 'react'

import { FieldValues, UseControllerProps } from 'react-hook-form'

type ControllerProps<T extends FieldValues> = UseControllerProps<T>

export type FormControllerProps<T extends FieldValues, G> = ControllerProps<T> &
  HTMLAttributes<G> & {
    label?: string
    disabled?: boolean
    type?: string
    helpText?: string
    placeholder?: string
    icon?: ReactElement
  }
