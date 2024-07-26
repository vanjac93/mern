import Page from '~/components/Page'
import { Box } from '~/components/layout/Box'
import Hero from '~/components/layout/Hero'
import Button from '~/components/ui/Button'
import { useTranslation } from 'react-i18next'

import Cards from './Cards'
import { Typography } from '~/components/layout/Typography'
import { CardType } from './Cards/types'
import styled from 'styled-components'
import { ButtonProps } from '~/components/ui/Button/types'
import { IoIosArrowForward } from 'react-icons/io'
import Features from './Features'
import { FeatureType } from './Features/types'
import { FaCheck, FaLock, FaCode } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import Faq from './Faq'
import Story from './Story'
import LandingFooter from './LandingFooter'
import Logos from './Logos'
import HeroSecondary from './HeroSecondary'
import PlatformOverview from './PlatformOverview'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Page title={t('Welcome!')}>
      <Hero />
      <Logos />
      <HeroSecondary />
      <PlatformOverview />

      {/* <Cards cards={cards} />
      <Features features={features} />
      <Box bg="bgAlt">
        <Faq faq={faq} />
        <Story />
        <LandingFooter />
      </Box> */}
    </Page>
  )
}

const StyledButton = styled(Button)`
  border-radius: 40px;
  height: 40px;
  min-width: 140px;
  font-size: 22px;
  flex-direction: row-reverse;

  .arrow {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.3);

    .arrow {
      opacity: 1;
    }
  }
`

function CtaButton(props: ButtonProps) {
  return <StyledButton {...props} icon={<IoIosArrowForward className="arrow" size={24} />} />
}

const faq = [
  {
    question: 'Why?',
    answer: "Don't know"
  },
  {
    question: 'Why my dearr?',
    answer: "Don't know fuckface"
  },
  {
    question: 'Why bother?',
    answer: "Don't know that either"
  }
]
const features: FeatureType[] = [
  {
    title: 'Ad free, always free',
    icon: <FaCheck />,
    text: "Proton Mail is a free and secure email service that's powered by our community, not surveillance capitalism. Our free plan is supported by paid subscriptions that offer extra features and storage.",
    link: {
      text: 'See all plans',
      to: '/plans'
    }
  },
  {
    title: 'Highest privacy standards',
    text: "Proton is incorporated and headquartered in Switzerland, meaning your data is protected by some of the world's strictest privacy laws.",
    icon: <FaLock />,
    link: {
      text: 'Why Switzerland?',
      to: '/why-switzerland'
    }
  },
  {
    title: 'Switch to Proton Mail',
    icon: <FaTelegramPlane />,
    text: 'With Easy Switch, you can quickly migrate from any email provider to Proton Mail. Import your emails, labels, contacts, and calendars to Proton Mail and set up automatic forwarding.',
    link: {
      text: 'Swith to Proton Mail',
      to: '/switch'
    }
  },
  {
    title: 'Independently audited',
    icon: <FaCode />,
    text: 'All Proton services are open source and independently audited for security. We also maintain open-source encryption libraries used by millions of people around the world.',
    link: {
      text: 'More about open source',
      to: '/about'
    }
  }
]

const cards: CardType[] = [
  {
    text: (
      <>
        <p>
          Most popular email providers, such as Gmail, Outlook, and Yahoo, scan the content of your
          emails and use your email address to create a detailed profile on you and profit from your
          data.
        </p>
        <p style={{ marginTop: '16px' }}>
          Proton Mail's end-to-end encryption and zero-access encryption ensure only you can see
          your emails. Not even Proton can view the content of your emails and attachments.
        </p>
      </>
    ),
    imgSrc: 'https://dummyimage.com/600x300/#f2f2f2/aaa',
    action: <CtaButton size="large" text="Get your encrypted email" />,
    title: (
      <Typography fontWeight={100} fontSize="2.75rem" as="h2">
        Because what's in your email <span style={{ fontWeight: 600 }}>is your business</span>
      </Typography>
    )
  },
  {
    text: (
      <>
        <p>
          Email trackers tell senders and advertisers what you read and click on, and can follow you
          around the web.
        </p>
        <p style={{ marginTop: '16px' }}>
          Proton Mail protects you from these digital spies and prevents companies from monitoring
          you.
        </p>
      </>
    ),
    imgSrc: 'https://dummyimage.com/600x300/#f2f2f2/aaa',
    action: <CtaButton size="large" text="Block email trackers" />,
    title: (
      <Typography fontWeight={100} fontSize="2.75rem" as="h2">
        <span style={{ fontWeight: 600 }}>No more trackers</span> in your inbox
      </Typography>
    )
  }
]
