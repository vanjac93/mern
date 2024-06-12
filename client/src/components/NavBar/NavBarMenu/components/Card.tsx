import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import { ReactNode } from 'react'

export interface MenuCardType {
  title: string
  description?: string
  icon: ReactNode
}

export default function MenuCard({ card }: { card: MenuCardType }) {
  const { title, description, icon } = card

  if (!description) {
    return (
      <Flex gap={8}>
        {icon}
        <Typography>{title}</Typography>
      </Flex>
    )
  }

  return (
    <Flex gap={8}>
      {icon}
      <Flex flexDirection="column" gap={8}>
        <Typography>{title}</Typography>
        <Typography color="green">{description}</Typography>
      </Flex>
    </Flex>
  )
}
