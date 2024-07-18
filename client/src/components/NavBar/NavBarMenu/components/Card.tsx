import { Typography } from '~/components/layout/Typography'
import { ReactNode } from 'react'
import { IconContext } from 'react-icons'
import styled, { css } from 'styled-components'

export interface MenuCardType {
  title: string
  description?: string
  icon: ReactNode
  link: string
}

export default function MenuCard({ card }: { card: MenuCardType }) {
  const { title, description, icon, link } = card
  const hasDescription = Boolean(description)
  return (
    <Container hasDescription={hasDescription}>
      <IconContext.Provider value={{ size: description ? '2rem' : '1.5rem' }}>
        {icon}
      </IconContext.Provider>
      <Typography fontWeight={description ? 500 : 400} className="title">
        {title}
      </Typography>
      {hasDescription && <StyledDescription color="textSecondary">{description}</StyledDescription>}
    </Container>
  )
}

const Container = styled.div<{ hasDescription?: boolean }>`
  cursor: pointer;
  ${({ hasDescription }) =>
    hasDescription
      ? css`
          display: grid;
          grid-template-columns: auto auto;
          grid-template-rows: auto;
          column-gap: 1rem;
          row-gap: 0.5rem;
        `
      : css`
          display: flex;
          gap: 1rem;
        `}

  align-items: center;
  padding: 12px;
  border-radius: 1rem;
  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.bgAlt};
      color: ${theme.colors.primary};
    `}
  }
`

const StyledDescription = styled(Typography)`
  grid-column: 2;
  grid-row: 2;
`
