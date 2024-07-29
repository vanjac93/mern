import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Box, Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import { ActiveItemType } from './types'
import StudioAnimation from './animations/StudioAnimation'
import ContentLakeAnimation from './animations/ContentLakeAnimation'
import ApisAnimation from './animations/ApisAnimation'
import { TabsPaneType } from '~/components/ui/Tabs/Tabs'

export default function ShowcaseAnimation() {
  const [activeItem, setActiveItem] = useState<ActiveItemType>('studio')

  function onClick(id: ActiveItemType) {
    setActiveItem(id)
  }

  function onMouseEnter(id: ActiveItemType) {
    setActiveItem(id)
  }

  function renderSideImages() {
    return (
      <>
        <img
          alt="showcase left"
          src="https://dummyimage.com/150x200/#f2f2f2/aaa&text=left"
          className="side-img left"
        />
        <img
          alt="showcase right"
          src="https://dummyimage.com/150x200/#f2f2f2/aaa&text=right"
          className="side-img right"
        />
      </>
    )
  }

  function renderAnimations() {
    return (
      <AnimationsContainer>
        <StudioAnimation />
        <ApisAnimation />
        <ContentLakeAnimation />
      </AnimationsContainer>
    )
  }

  function renderCards() {
    return (
      <>
        <ShowcaseCard
          column={3}
          row={1}
          id="studio"
          onMouseEnter={onMouseEnter}
          title="Studio"
          onClick={onClick}
          text="A fully customizable content workspace that mirrors your business and unleashes velocity and creativity."
        />
        <ShowcaseCard
          text="Powerful and intuitive interfaces that are the fabric of your composable content architecture."
          title="APIs"
          id="apis"
          column={1}
          row={2}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        />
        <ShowcaseCard
          onMouseEnter={onMouseEnter}
          title="Content Lake"
          id="content-lake"
          row={3}
          column={3}
          onClick={onClick}
          text="A no-ops storage and distribution layer that syncs content and data for use by teams across your organization."
        />
      </>
    )
  }

  return (
    <Flex alignItems="center" flexDirection="column" gap="4rem">
      <ShowcaseContainer>
        {/* {renderSideImages()} */}
        <StyledGrid>
          {renderAnimations()}
          {renderCards()}
        </StyledGrid>
      </ShowcaseContainer>
    </Flex>
  )
}

const AnimationsContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

interface ShowcaseCardProps {
  id: ActiveItemType
  onClick: (id: ActiveItemType) => void
  onMouseEnter: (id: ActiveItemType) => void
  title: string
  text: string
  row: number
  column: number
}

function ShowcaseCard({ text, row, column, title, onMouseEnter, onClick, id }: ShowcaseCardProps) {
  return (
    <CardContainer
      onMouseEnter={() => onMouseEnter(id)}
      row={row}
      column={column}
      onClick={() => onClick(id)}
    >
      <StyledBtn className="btn">{title}</StyledBtn>
      <Typography>{text}</Typography>
    </CardContainer>
  )
}

const CardContainer = styled(Flex)<{ row: number; column: number }>`
  gap: 1rem;
  flex-direction: column;
  align-items: ${({ column }) => (column > 2 ? 'start' : 'end')};
  ${({ row, column }) => css`
    grid-row: ${row};
    grid-column: ${column};
  `}
  cursor: pointer;
  &:hover {
    .btn {
      background-color: ${({ theme }) => theme.colors.bgAlt};
    }
  }

  ${({ theme }) => theme.mq.sm} {
    display: none;
  }
`

const StyledBtn = styled(Flex)`
  padding: 8px;
  border-radius: 100%;
  height: 40px;
  min-width: 60px;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
`

const StyledGrid = styled(Box)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, auto);
`

const ShowcaseContainer = styled(Box)`
  min-height: 600px;
  display: grid;
  width: 80vw;
  .side-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
`
