import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import MenuItemContent from '../../components/MenuItemContent'
import { SOLUTIONS_MENU, SOLUTIONS_MENU_SIDEBAR } from '../../util'
import MenuCard from '../../components/Card'

export default function Solutions() {
  return (
    <MenuItemContent secondary={SOLUTIONS_MENU_SIDEBAR}>
      <Flex width="100%" justifyContent="space-around" gap="1rem">
        {SOLUTIONS_MENU.map(({ title, cards }, i) => {
          return (
            <Flex key={i} flexDirection="column">
              <Typography fontSize={24} mb="3rem">
                {title}
              </Typography>
              <Flex gap="2rem" flexDirection="column">
                {cards.map((card, i) => {
                  return <MenuCard key={i} card={card} />
                })}
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </MenuItemContent>
  )
}
