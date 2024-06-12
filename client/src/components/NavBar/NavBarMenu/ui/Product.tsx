import MenuItemContent from '../components/MenuContent'
import MenuCard, { CardType } from '../components/Card'
import i18n from '@client/services/i18n/i18n'
import { RiComputerLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import employeeImg from '@client/assets/employee.jpeg'
import styled from 'styled-components'
import { RiPencilLine, RiLayout2Line, RiTestTubeLine, RiPuzzle2Line } from 'react-icons/ri'
import { GrOptimize, GrTemplate } from 'react-icons/gr'
import { HiOutlineCog8Tooth } from 'react-icons/hi2'

export default function Product() {
  const { t } = useTranslation()

  return (
    <MenuItemContent
      sidebar={{
        title: t('Scale even faster with professional services'),
        link: {
          to: '/professional-services-add-ons'
        },
        description: t(
          'Our add-on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns.'
        ),
        imageUrl: employeeImg
      }}
    >
      <Grid>
        {CARDS.map((card, i) => (
          <MenuCard key={i} card={card} />
        ))}
      </Grid>
    </MenuItemContent>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-template-rows: auto;
  gap: 3rem;
`

const CARDS: CardType[] = [
  {
    title: i18n.t('Landing pages'),
    icon: <RiComputerLine />,
    description: i18n.t('Build pages with smart features that get more sales and signups.'),
    link: '/product/landing-pages'
  },
  {
    title: i18n.t('AI Copywriting'),
    icon: <RiPencilLine />,
    description: i18n.t('Instantly generate copy for your pages, ads, emails, and more.'),
    link: '/product/ai-copywriting'
  },
  {
    title: i18n.t('A/B Testing'),
    icon: <RiTestTubeLine />,
    description: i18n.t(
      'A/B test your landing pages without a designer, developer, or deep pockets.'
    ),
    link: '/product/ab-testing'
  },
  {
    title: i18n.t('Integrations'),
    icon: <RiPuzzle2Line />,
    description: i18n.t('Connect favorite marketing tools to improve functionality.'),
    link: '/product/integrations'
  },
  {
    title: i18n.t('AI Optimizations'),
    icon: <GrOptimize />,
    description: i18n.t('Automatically send visitors to their best-match landing page.'),
    link: '/product/ai-optimizations'
  },
  {
    title: i18n.t('Templates'),
    icon: <GrTemplate />,
    description: i18n.t('Get started fast with hundreds of industry-optimized templates.'),
    link: '/product/templates'
  },
  {
    title: i18n.t('Popups and sticky bars'),
    icon: <RiLayout2Line />,
    description: i18n.t("Create popups and sticky bars that grab your visitors' attention."),
    link: '/product/popups-and-sticky-bars'
  },
  {
    title: i18n.t('Features'),
    icon: <HiOutlineCog8Tooth />,
    description: i18n.t('Discover everything you can do behind-the-scenes.'),
    link: '/product/features'
  }
]
