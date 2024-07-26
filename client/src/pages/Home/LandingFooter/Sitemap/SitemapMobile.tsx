import styled from 'styled-components'
import { SITEMAP_LINKS } from './util'
import { SitemapLinkType } from './types'
import { Flex } from '~/components/layout/Box'
import { useState } from 'react'
import { Typography } from '~/components/layout/Typography'
import { Link } from 'react-router-dom'
import { FaPlus, FaMinus } from 'react-icons/fa6'

export default function SitemapMobile() {
  return (
    <StyledNav>
      {SITEMAP_LINKS.map(({ title, links }, i) => (
        <SitemapCard title={title} links={links} key={i} />
      ))}
    </StyledNav>
  )
}

interface SitemapCardProps {
  title: string
  links: SitemapLinkType[]
}

function SitemapCard({ title, links }: SitemapCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  function renderLinks() {
    return (
      <Flex flexDirection="column" gap="1rem">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            <Typography fontSize={16} as="span">
              {link.text}
            </Typography>
          </Link>
        ))}
      </Flex>
    )
  }
  return (
    <StyledCard onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen}>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography fontWeight={600} fontSize={18} as="h5">
          {title}
        </Typography>
        <IconContainer className="icon-container">
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </IconContainer>
      </Flex>
      {isOpen && renderLinks()}
    </StyledCard>
  )
}

const StyledCard = styled(Flex)<{ isOpen: boolean }>`
  flex-direction: column;
  cursor: pointer;
  gap: 1rem;
  &:hover {
    .icon-container {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textUi};
    }
  }
`

const StyledNav = styled.nav`
  display: none;

  ${({ theme }) => theme.mq.sm} {
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }
`

const IconContainer = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgAlt};
`
