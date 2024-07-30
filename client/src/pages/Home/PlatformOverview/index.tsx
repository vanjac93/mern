import { useTranslation } from 'react-i18next'
import { Typography } from '~/components/layout/Typography'
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import { ActiveItemType } from './types'
import {
  AnimationsContainer,
  OverviewContainer,
  ShowcaseContainer,
  StyledGrid
} from './index.styled'
import StudioAnimation from './animations/StudioAnimation'
import ApisAnimation from './animations/ApisAnimation'
import ContentLakeAnimation from './animations/ContentLakeAnimation'
import ShowcaseCard from './ShowcaseCard'
import { Box, Flex } from '~/components/layout/Box'
import { TabListItem, TabsList } from '~/components/ui/Tabs'
import * as Tabs from '@radix-ui/react-tabs'
import styled from 'styled-components'
import TabContent from './OverviewTabs/components/TabContent'
import { FaCheckCircle } from 'react-icons/fa'
import Button from '~/components/ui/Button'
import OverviewTabs, { TABS_CONTAINER_ID } from './OverviewTabs'

export default function PlatformOverview() {
  const { t } = useTranslation()
  const [activeItem, setActiveItem] = useState<ActiveItemType>('studio')
  const [hoveringItem, setHoveringItem] = useState<ActiveItemType | null>(null)

  function onClick(id: ActiveItemType) {
    setActiveItem(id)
    const el = document.getElementById(TABS_CONTAINER_ID)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  function onMouseEnter(id: ActiveItemType) {
    setHoveringItem(id)
  }

  function renderSvgs() {
    return (
      <AnimationsContainer>
        <StudioAnimation isHovering={hoveringItem === 'studio'} />
        <ApisAnimation isHovering={hoveringItem === 'apis'} />
        <ContentLakeAnimation isHovering={hoveringItem === 'content-lake'} />
      </AnimationsContainer>
    )
  }

  return (
    <OverviewContainer
      p={{
        _: '5rem 4rem'
      }}
    >
      <Typography color="primary" fontSize={22}>
        {t('Platform overview')}
      </Typography>
      <Typography
        fontSize={{
          md: '2rem',
          _: '3rem'
        }}
        mb="3rem"
      >
        {t('Sanity Composable Content Cloud')}
      </Typography>

      <Flex alignItems="center" flexDirection="column" gap="4rem">
        <ShowcaseContainer>
          {/* {renderSideImages()} */}
          <StyledGrid>
            {renderSvgs()}
            <ShowcaseCard
              gridArea="studio"
              column={3}
              row={1}
              id="studio"
              onMouseEnter={onMouseEnter}
              title="Studio"
              onClick={onClick}
              text="A fully customizable content workspace that mirrors your business and unleashes velocity and creativity."
            />
            <ShowcaseCard
              gridArea="apis"
              text="Powerful and intuitive interfaces that are the fabric of your composable content architecture."
              title="APIs"
              id="apis"
              column={1}
              row={2}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
            />
            <ShowcaseCard
              gridArea="content-lake"
              onMouseEnter={onMouseEnter}
              title="Content Lake"
              id="content-lake"
              row={3}
              column={3}
              onClick={onClick}
              text="A no-ops storage and distribution layer that syncs content and data for use by teams across your organization."
            />
          </StyledGrid>
        </ShowcaseContainer>
      </Flex>
      <Flex mt="4rem" flexDirection="column">
        <OverviewTabs onChange={setActiveItem} activeItem={activeItem} />
      </Flex>
    </OverviewContainer>
  )
}
