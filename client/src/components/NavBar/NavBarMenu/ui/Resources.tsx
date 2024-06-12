import { useTranslation } from 'react-i18next'
import MenuItemContent from '../components/MenuContent'
import marketingImg from '@client/assets/marketing.jpg'
import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import Card, { CardType } from '../components/Card'
import i18n from '@client/services/i18n/i18n'
import { CiCircleQuestion, CiMicrophoneOn } from 'react-icons/ci'
import { MdOutlineOndemandVideo } from 'react-icons/md'

export default function Resources() {
  const { t } = useTranslation()

  return (
    <MenuItemContent
      sidebar={{
        description: t(
          'Learn to build high-converting marketing campaigns with our resource library.'
        ),
        title: t('Marketing resources'),
        imageUrl: marketingImg,
        link: {
          text: t('Visit our marketing'),
          to: '/resources'
        }
      }}
    >
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
          {CARDS.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </Flex>
      </Flex>
    </MenuItemContent>
  )
}

const CARDS: CardType[] = [
  {
    title: i18n.t('Help centre'),
    link: '/hc',
    icon: <CiCircleQuestion />
  },
  {
    title: i18n.t('Podcast'),
    link: '/podcast',
    icon: <CiMicrophoneOn />
  },
  {
    title: i18n.t('Video library'),
    link: '/video-library',
    icon: <MdOutlineOndemandVideo />
  }
]
