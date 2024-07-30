import styled from 'styled-components'
import { Box, Flex } from '~/components/layout/Box'
import Section from '~/components/layout/Box/Section'

export const AnimationsContainer = styled.div`
  grid-area: svg-container;
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const OverviewContainer = styled(Section)`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  text-align: center;
  text-wrap: balance;
  background-color: black;
  color: white;
`

export const CardContainer = styled(Flex)<{
  row: number
  column: number
  gridArea: string
}>`
  gap: 1rem;
  grid-area: ${({ gridArea }) => gridArea};
  flex-direction: column;
  align-items: ${({ column }) => (column > 2 ? 'start' : 'end')};
  text-align: ${({ row }) => (row % 2 === 0 ? 'right' : 'left')};
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

export const StyledBtn = styled(Flex)`
  padding: 8px;
  border-radius: 100%;
  height: 40px;
  min-width: 60px;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
`

export const StyledGrid = styled(Box)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, auto);

  grid-template-areas:
    '. svg-container studio' 'apis svg-container .'
    '. svg-container content-lake';

  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: 1fr;
    width: 50%;
    grid-template-areas: 'svg-container';
  }
`

export const ShowcaseContainer = styled(Flex)`
  min-height: 600px;
  width: 80vw;
  align-items: center;
  flex-direction: column;
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
