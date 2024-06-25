import { ReactNode } from 'react'
import { UseFormReturn } from 'react-hook-form'

export interface MultistepFormProps {
  steps: StepType[]
  methods: UseFormReturn
  onSubmit: (data: UseFormReturn) => void
}

export interface StepType {
  id: string
  label: string
  content: ReactNode
}
