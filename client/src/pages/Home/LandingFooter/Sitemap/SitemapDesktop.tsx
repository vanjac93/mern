import { Flex } from '~/components/layout/Box'
import { SitemapGroupProps } from './types'
import { SITEMAP_LINKS } from './util'
import { Typography } from '~/components/layout/Typography'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function SitemapDesktop() {
  return (
    <StyledNav>
      {SITEMAP_LINKS.map(({ title, links }, i) => (
        <SitemapGroup key={i} title={title} links={links} />
      ))}
    </StyledNav>
  )
}

function SitemapGroup({ title, links }: SitemapGroupProps) {
  return (
    <Flex flexDirection="column">
      <Typography fontSize={18} mb="1.5rem" fontWeight={600} as="p">
        {title}
      </Typography>
      <LinkList>
        {links.map((link) => (
          <StyledLi key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </StyledLi>
        ))}
      </LinkList>
    </Flex>
  )
}

const StyledNav = styled.nav`
  display: grid;
  flex: 5;
  gap: 2rem;
  grid-template-columns: repeat(4, auto);

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(2, auto);
  }

  ${({ theme }) => theme.mq.sm} {
    display: none;
  }
`

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const StyledLi = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
