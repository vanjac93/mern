import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface Props {
  items: ItemType[]
}

interface ItemType {
  id: string
  text: string
  content?: ReactNode
}

export default function MobileNavigation(props: Props) {
  const { items } = props
  const [activeItem, setActiveItem] = useState<ItemType | null>()

  return (
    <Container $activeItem={Boolean(activeItem)}>
      <Flex className="main-menu" flexDirection="column">
        {items.map((item) => {
          const { id, text } = item
          return (
            <NavigationMenuItem onClick={() => setActiveItem(item)} key={id}>
              <Typography fontSize={24}>{text}</Typography>
              <IoIosArrowForward className="arrow" size={24} />
            </NavigationMenuItem>
          )
        })}
      </Flex>
      <Flex flexDirection="column" className="active-menu">
        <NavigationBack onClick={() => setActiveItem(null)}>
          <IoIosArrowBack size={24} />
          <Typography fontSize={24}>{activeItem?.text}</Typography>
        </NavigationBack>
        {activeItem?.content}
      </Flex>
    </Container>
  )
}

const NavigationBack = styled(Flex)`
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgAlt};
  }
`

const NavigationMenuItem = styled(Flex)`
  padding: 1rem;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgAlt};
  }
`

const Container = styled(Flex)<{ $activeItem: boolean }>`
  position: relative;
  overflow-x: hidden;
  width: 200%;
  .main-menu {
    flex: 1;
    transition: transform 0.3s ease-in-out;
    ${({ $activeItem }) =>
      $activeItem &&
      css`
        transform: translateX(-100%);
      `}
  }

  .active-menu {
    flex: 1;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    ${({ $activeItem }) =>
      $activeItem &&
      css`
        transform: translateX(-100%);
      `}
  }
`
