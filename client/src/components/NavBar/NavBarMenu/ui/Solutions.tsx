import i18n from '@client/services/i18n/i18n'
import MenuCard, { CardType } from '../components/Card'
import MenuItemContent from '../components/MenuContent'
import { GrCart } from 'react-icons/gr'
import { RiBuilding4Line, RiBriefcase2Line } from 'react-icons/ri'
import { TbCloudCog } from 'react-icons/tb'
import { LuMousePointer } from 'react-icons/lu'
import { Flex } from '@client/components/layout/Box'
import { useTranslation } from 'react-i18next'
import employeeImg from '@client/assets/employee-man.jpg'
import { Typography } from '@client/components/layout/Typography'

interface SolutionType {
  title: string
  cards: CardType[]
}

export default function Solutions() {
  const { t } = useTranslation()

  return (
    <MenuItemContent
      sidebar={{
        title: t('Flexible limits and extra support'),
        description: t(
          'Our Concierge plans scale to any amount of traffic and conversions—and with hands-on training and support, you have everything you need to keep your business growing.'
        ),
        imageUrl: employeeImg,
        link: {
          text: t('See concierge'),
          to: '/concierge'
        }
      }}
    >
      <Flex width="100%" justifyContent="space-around" gap="1rem">
        {SOLUTIONS.map(({ title, cards }, i) => {
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

const SOLUTIONS: SolutionType[] = [
  {
    title: i18n.t('By industry'),
    cards: [
      {
        title: i18n.t('Agencies'),
        icon: <RiBuilding4Line />,
        link: '/industy/agencies'
      },
      {
        title: i18n.t('E-commerce'),
        icon: <GrCart />,
        link: '/industry/e-commerce'
      },
      {
        title: i18n.t('SaaS'),
        icon: <TbCloudCog />,
        link: '/industry/saas'
      },
      {
        title: i18n.t('Service specialist'),
        icon: <RiBriefcase2Line />,
        link: '/industry/service-specialist'
      }
    ]
  },
  {
    title: i18n.t('By use case'),
    cards: [
      {
        title: i18n.t('PPC'),
        icon: <LuMousePointer />,
        link: '/usecase/ppc'
      },
      {
        title: i18n.t('Social ads'),
        icon: <LuMousePointer />,
        link: '/use-case/social-ads'
      },
      {
        title: i18n.t('Email marketing'),
        icon: <LuMousePointer />,
        link: '/use-case/marketing'
      },
      {
        title: i18n.t('Lead generation'),
        icon: <LuMousePointer />,
        link: '/use-case/lead-generation'
      }
    ]
  },
  {
    title: i18n.t('Other'),
    cards: [
      {
        title: i18n.t('Card 1'),
        icon: <LuMousePointer />,
        link: '/other/card-1'
      },
      {
        title: i18n.t('Card 2'),
        icon: <LuMousePointer />,
        link: '/other/card-2'
      }
    ]
  }
]
