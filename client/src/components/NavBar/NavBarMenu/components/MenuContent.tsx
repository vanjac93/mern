import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface MenuItemContentProps {
  sidebar?: {
    title: string
    description: string
    link: {
      text?: string
      to: string
    }
    imageUrl: string
  }
}

export default function MenuItemContent(props: PropsWithChildren<MenuItemContentProps>) {
  const { children, sidebar } = props
  return (
    <Flex>
      <Flex flex={2} p="2rem">
        {children}
      </Flex>
      {sidebar && (
        <Flex backgroundColor="bg" flex={1} p="2rem">
          <Flex flexDirection="column" gap={16}>
            <Typography fontSize={20}>{sidebar.title}</Typography>
            <Typography>{sidebar.description}</Typography>
            <Link to={sidebar.link?.to}>{sidebar.link?.text || 'Learn more'}</Link>
            <img
              style={{ width: '100%', height: 'auto' }}
              src={sidebar.imageUrl}
              alt="Happy employee"
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
