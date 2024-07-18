import { useTranslation } from 'react-i18next'
import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import MenuItemContent from '../../components/MenuItemContent'
import { RESOURCES_MENU, RESOURCES_MENU_SIDEBAR } from '../../util'
import MenuCard from '../../components/Card'
import styled from 'styled-components'

export default function Resources() {
  const { t } = useTranslation()

  return (
    <MenuItemContent secondary={RESOURCES_MENU_SIDEBAR}>
      <Grid>
        <Flex flex={1} flexDirection="column">
          <Typography fontWeight={900} fontSize="24px" mb="1rem">
            {t('The essentials')}
          </Typography>
          <Typography fontWeight={600} fontSize="16px" mb="0.5rem">
            {t('What is a landing page?')}
          </Typography>
          <Typography mb="2rem">
            {t('Start converting more of your traffic with our complete guide to landing pages.')}
          </Typography>
          <Typography fontWeight={600} fontSize="16px" mb="0.5rem">
            {t('Landing page examples')}
          </Typography>
          <Typography>
            {t('Use this collection of Unbounce-built examples to inspire your next campaign.')}
          </Typography>
        </Flex>
        <Flex flex={1} flexDirection="column">
          <Typography fontWeight={900} fontSize="24px" mb="1rem">
            {t('Learn with me')}
          </Typography>
          <Flex flexDirection="column" gap="0.5rem">
            {RESOURCES_MENU.map((card, i) => (
              <MenuCard key={i} card={card} />
            ))}
          </Flex>
        </Flex>
      </Grid>
    </MenuItemContent>
  )
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(2, auto); */
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
