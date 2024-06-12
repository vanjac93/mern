import { Flex } from '@client/components/layout/Box'
import { PropsWithChildren, ReactNode } from 'react'

interface MenuItemContentProps {
  sidebar?: ReactNode
}

export default function MenuItemContent(props: PropsWithChildren<MenuItemContentProps>) {
  const { children, sidebar } = props
  return (
    <Flex width="75vw">
      <Flex flex={1} p="2rem">
        {children}
      </Flex>
      {sidebar && (
        <Flex backgroundColor="bg" flex={2} p="2rem">
          {sidebar}
        </Flex>
      )}
    </Flex>
  )
}
