import { useTranslation } from 'react-i18next'
import { ActiveItemType } from '../types'
import * as Tabs from '@radix-ui/react-tabs'
import styled from 'styled-components'
import Button from '~/components/ui/Button'
import TabContent from './components/TabContent'
import { TabListItem, TabsList } from '~/components/ui/Tabs'

export const TABS_CONTAINER_ID = 'tabs-root-container'

interface ShowcaseTabsProps {
  activeItem: ActiveItemType
  onChange: (activeItem: ActiveItemType) => void
}

export default function OverviewTabs({ activeItem, onChange }: ShowcaseTabsProps) {
  const { t } = useTranslation()

  return (
    <Tabs.Root
      id={TABS_CONTAINER_ID}
      onValueChange={(activeItem) => onChange(activeItem as ActiveItemType)}
      value={activeItem}
    >
      <TabsList>
        <TabListItem value="studio">{t('Studio')}</TabListItem>
        <TabListItem value="apis">{t('APIs')}</TabListItem>
        <TabListItem value="content-lake">{t('Content Lake')}</TabListItem>
      </TabsList>
      <TabContent
        text={
          <span>
            Sanity Studio provides content creators with tailored editing interfaces that match the
            unique ways content drives your business. Built as open-source, the Studio acts as a
            central hub for content creation and operations for your composable business.
          </span>
        }
        listItems={[
          'Deeply customizable content workspaces',
          'Real-time collaboration and field-level history',
          'Intelligent image cropping and scaling'
        ]}
        cta={<Button variant="outlined" text={t('Explore Sanity Studio')} />}
        img={<StyledImg src="https://dummyimage.com/300x200/000/f2f2f2" alt="test" />}
        heading={t('The most flexible content workspace')}
        value="studio"
      />
      <TabContent
        text={
          <span>
            Sanity APIs are the fabric of your composable content architecture. Integrate with
            best-in-breed technologies as they emerge to unleash innovation. Sync content between
            Content Lake and any source for unprecedented access, reuse, and efficiency.
          </span>
        }
        listItems={[
          'Precise, formulaic content query language',
          'Customizable, serverless webhook payloads',
          'Interoperable across your entire architecture'
        ]}
        cta={<Button variant="outlined" text={t('Explore Sanity Studio')} />}
        img={<StyledImg src="https://dummyimage.com/300x200/000/ccc" alt="test" />}
        heading={t('An unparalleled developer experience')}
        value="apis"
      />
      <TabContent
        text={
          <span>
            Sanity Content Lake unites your enterprise around a single source of content truth.
            Content is synced, treated as data, and stored as JSON, making it readily available to
            power scalable multi-experience customer engagement.
          </span>
        }
        listItems={[
          'Cloud-hosted and fully-managed',
          'Intelligent caching and global CDN',
          'Robust mutation and patching interfaces'
        ]}
        cta={<Button variant="outlined" text={t('Explore Content Lake')} />}
        img={<StyledImg src="https://dummyimage.com/300x200/000/888" alt="test" />}
        heading={t('Real-time, no-ops content storage & distribution')}
        value="content-lake"
      />
    </Tabs.Root>
  )
}

const StyledImg = styled.img`
  grid-area: image;
`
