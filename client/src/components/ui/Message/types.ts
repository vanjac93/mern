export interface MessageProps {
  title: string
  message: string | string[]
  type: MessageType
  withIcon?: boolean
}

export type MessageType = 'success' | 'info' | 'error'
