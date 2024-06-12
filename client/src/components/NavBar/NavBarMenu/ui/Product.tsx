import { Flex } from '@client/components/layout/Box'
import MenuItemContent from '../components/MenuContent'
import MenuCard, { MenuCardType } from '../components/Card'
import i18n from '@client/services/i18n/i18n'
import { RiComputerLine } from 'react-icons/ri'
import { Typography } from '@client/components/layout/Typography'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import employeeImg from '@client/assets/employee.jpg'

const CARDS: MenuCardType[] = [
  {
    title: i18n.t('Landing pages'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t('Build pages with smart features that get more sales and signups.')
  },
  {
    title: i18n.t('AI Copywriting'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t('Instantly generate copy for your pages, ads, emails, and more.')
  },
  {
    title: i18n.t('A/B Testing'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t(
      'A/B test your landing pages without a designer, developer, or deep pockets.'
    )
  },

  {
    title: i18n.t('Integrations'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t('Connect favorite marketing tools to improve functionality.')
  },
  {
    title: i18n.t('AI Optimizations'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t('Automatically send visitors to their best-match landing page.')
  },
  {
    title: i18n.t('Templates'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t('Get started fast with hundreds of industry-optimized templates.')
  },
  {
    title: i18n.t('Popups and sticky bars'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t("Create popups and sticky bars that grab your visitors' attention.")
  },
  {
    title: i18n.t('Features'),
    icon: <RiComputerLine size="20px" />,
    description: i18n.t('Discover everything you can do behind-the-scenes.')
  }
]

export default function Product() {
  const { t } = useTranslation()

  function renderSidebar() {
    return (
      <Flex flexDirection="column" gap={16}>
        <Typography fontSize={20}>{t('Scale even faster with professional services')}</Typography>
        <Typography>
          {t(
            'Our add-on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns.'
          )}
        </Typography>
        <Link to="/scaling">{t('Learn more')}</Link>
        <img style={{ width: '100%', height: 'auto' }} src={employeeImg} alt="Happy employee" />
      </Flex>
    )
  }

  return (
    <MenuItemContent sidebar={renderSidebar()}>
      <Flex flexWrap="wrap" gap={16}>
        {CARDS.map((card, i) => (
          <MenuCard key={i} card={card} />
        ))}
      </Flex>
    </MenuItemContent>
  )
}
