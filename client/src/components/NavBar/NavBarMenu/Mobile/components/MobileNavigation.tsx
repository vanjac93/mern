import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
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
            <Flex
              as={Link}
              p="1rem"
              onClick={() => setActiveItem(item)}
              key={id}
              justifyContent="space-between"
            >
              <Typography fontSize={24}>{text}</Typography>
              <IoIosArrowForward className="arrow" size={24} />
            </Flex>
          )
        })}
      </Flex>
      <Flex flexDirection="column" className="active-menu">
        <Flex as={Link} p="1rem" onClick={() => setActiveItem(null)} alignItems="center" gap="1rem">
          <IoIosArrowBack size={24} />
          <Typography fontSize={24}>{activeItem?.text}</Typography>
        </Flex>
        {activeItem?.content}
      </Flex>
    </Container>
  )
}

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
