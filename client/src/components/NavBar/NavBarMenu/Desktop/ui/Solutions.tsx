import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import MenuItemContent from '../../components/MenuItemContent'
import { SOLUTIONS_MENU, SOLUTIONS_MENU_SIDEBAR } from '../../util'
import MenuCard from '../../components/Card'
import styled from 'styled-components'

export default function Solutions() {
  return (
    <MenuItemContent secondary={SOLUTIONS_MENU_SIDEBAR}>
      <Container>
        {SOLUTIONS_MENU.map(({ title, cards }, i) => {
          return (
            <Flex key={i} flexDirection="column">
              <Typography fontSize={24} mb="1.5rem">
                {title}
              </Typography>
              <Flex gap="1rem" flexDirection="column">
                {cards.map((card, i) => {
                  return <MenuCard key={i} card={card} />
                })}
              </Flex>
            </Flex>
          )
        })}
      </Container>
    </MenuItemContent>
  )
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 2rem;
`
