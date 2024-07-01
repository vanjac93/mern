import { Box, Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface MenuItemContentProps {
  isMobile?: boolean
  secondary?: {
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
  const { children, secondary, isMobile } = props

  if (isMobile) {
    return (
      <Flex gap="1rem" flexDirection="column">
        <Box>{children}</Box>
        {secondary && (
          <Flex flexDirection="column" backgroundColor={'bg'} gap="1rem" p="1rem">
            <Typography fontSize={18}>{secondary.title}</Typography>
            <Box>
              <Typography>{secondary.description}</Typography>
              <Link to={secondary.link?.to}>{secondary.link?.text || 'Learn more'}</Link>
            </Box>
            <img
              style={{ width: '100%', height: 'auto' }}
              src={secondary.imageUrl}
              alt="Happy employee"
            />
          </Flex>
        )}
      </Flex>
    )
  }

  return (
    <Flex>
      <Flex flex={2} p="2rem">
        {children}
      </Flex>
      {secondary && (
        <Flex backgroundColor="bg" flex={1} p="2rem">
          <Flex flexDirection="column" gap="1rem">
            <Typography fontSize={20}>{secondary.title}</Typography>
            <Typography>{secondary.description}</Typography>
            <Link to={secondary.link?.to}>{secondary.link?.text || 'Learn more'}</Link>
            <img
              style={{ width: '100%', height: 'auto' }}
              src={secondary.imageUrl}
              alt="Happy employee"
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
