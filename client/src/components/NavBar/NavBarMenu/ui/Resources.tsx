import { useTranslation } from 'react-i18next'
import MenuItemContent from '../components/MenuContent'
import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import Card from '../components/Card'

import { RESOURCES_MENU, RESOURCES_MENU_SIDEBAR } from '../util'

export default function Resources() {
  const { t } = useTranslation()

  return (
    <MenuItemContent secondary={RESOURCES_MENU_SIDEBAR}>
      <Flex width="100%" gap="3rem">
        <Flex flex={1} flexDirection="column">
          <Typography fontWeight={800} fontSize="20px" mb="1rem">
            {t('The essentials')}
          </Typography>
          <Typography fontWeight={600} fontSize="16px" mb="0.5rem">
            {t('What is a landing page?')}
          </Typography>
          <Typography mb="1rem">
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
          <Typography fontWeight={800} fontSize="20px" mb="1rem">
            {t('Learn with me')}
          </Typography>
          <Flex flexDirection="column" gap="1rem">
            {RESOURCES_MENU.map((card, i) => (
              <Card key={i} card={card} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </MenuItemContent>
  )
}
