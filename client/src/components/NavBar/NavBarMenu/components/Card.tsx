import { Box, Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import { ReactNode } from 'react'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

export interface CardType {
  title: string
  description?: string
  icon: ReactNode
  link: string
}

export default function Card({ card }: { card: CardType }) {
  const { title, description, icon, link } = card

  return (
    <Flex flexDirection="column">
      <Link to={link}>
        <Flex gap="1rem">
          <Box>
            <IconContext.Provider value={{ size: '2rem' }}>{icon}</IconContext.Provider>
          </Box>
          <Typography className="title">{title}</Typography>
        </Flex>
      </Link>
      {description && (
        <Typography pl="3rem" color="green">
          {description}
        </Typography>
      )}
    </Flex>
  )
}
