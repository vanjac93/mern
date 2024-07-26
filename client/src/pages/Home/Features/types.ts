import { ReactNode } from 'react'

export interface FeatureType {
  icon: ReactNode
  title: string
  text: string
  link: {
    text: string
    to: string
  }
}
