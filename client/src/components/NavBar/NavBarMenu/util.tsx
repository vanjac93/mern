import i18n from '@client/services/i18n/i18n'
import { NavItem } from './types'
import { RiComputerLine } from 'react-icons/ri'
import { RiPencilLine, RiLayout2Line, RiTestTubeLine, RiPuzzle2Line } from 'react-icons/ri'
import { GrOptimize, GrTemplate } from 'react-icons/gr'
import { HiOutlineCog8Tooth } from 'react-icons/hi2'
import { CiCircleQuestion, CiMicrophoneOn } from 'react-icons/ci'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import marketingImg from '@client/assets/marketing.jpg'
import employeeManImg from '@client/assets/employee-man.jpg'
import employeeImg from '@client/assets/employee.jpeg'
import { GrCart } from 'react-icons/gr'
import { RiBuilding4Line, RiBriefcase2Line } from 'react-icons/ri'
import { TbCloudCog } from 'react-icons/tb'
import { LuMousePointer } from 'react-icons/lu'
import Product from './Desktop/ui/Product'
import Solutions from './Desktop/ui/Solutions'
import Resources from './Desktop/ui/Resources'
import { MenuCardType } from './components/Card'

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'product',
    text: i18n.t('Product'),
    content: <Product />
  },
  {
    id: 'solutions',
    text: i18n.t('Solutions'),
    content: <Solutions />
  },
  {
    id: 'pricing',
    text: i18n.t('Pricing'),
    to: '/pricing'
  },
  {
    id: 'resources',
    text: i18n.t('Resources'),
    content: <Resources />
  }
]

export const PRODUCT_MENU: MenuCardType[] = [
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

export const PRODUCT_MENU_SIDEBAR = {
  title: i18n.t('Scale even faster with professional services'),
  link: {
    to: '/professional-services-add-ons'
  },
  description: i18n.t(
    'Our add-on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns.'
  ),
  imageUrl: employeeImg
}

export const RESOURCES_MENU: MenuCardType[] = [
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

export const RESOURCES_MENU_SIDEBAR = {
  description: i18n.t(
    'Learn to build high-converting marketing campaigns with our resource library.'
  ),
  title: i18n.t('Marketing resources'),
  imageUrl: marketingImg,
  link: {
    text: i18n.t('Visit our marketing'),
    to: '/resources'
  }
}

interface SolutionType {
  title: string
  cards: MenuCardType[]
}

export const SOLUTIONS_MENU: SolutionType[] = [
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

export const SOLUTIONS_MENU_SIDEBAR = {
  title: i18n.t('Flexible limits and extra support'),
  description: i18n.t(
    'Our Concierge plans scale to any amount of traffic and conversions—and with hands-on training and support, you have everything you need to keep your business growing.'
  ),
  imageUrl: employeeManImg,
  link: {
    text: i18n.t('See concierge'),
    to: '/concierge'
  }
}
