import { Link } from 'react-router-dom'
import { NavItem as NavItemType } from '../types'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled, { css } from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'
import { Flex } from '@client/components/layout/Box'

export default function NavItem({ item }: { item: NavItemType }) {
  function renderItem() {
    if (item.to) {
      return (
        <StyledLink asChild>
          <Link to={item.to}>{item.text}</Link>
        </StyledLink>
      )
    }

    return (
      <>
        <StyledTrigger asChild>
          <Flex gap={8} alignItems="center">
            <span>{item.text}</span>
            <FaArrowDown className="caret" size="10px" />
          </Flex>
        </StyledTrigger>
        <StyledContent>{item.content}</StyledContent>
      </>
    )
  }

  return <NavigationMenu.Item>{renderItem()}</NavigationMenu.Item>
}

const BaseTriggerCSS = css`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: var(--violet-11);
  cursor: pointer;
  border-radius: 0;
  border-bottom: 2px solid transparent;
  &[data-state='open'] {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }

  &[data-state='open'] > .caret {
    transform: rotate(180deg);
  }
`

const StyledTrigger = styled(NavigationMenu.Trigger)`
  ${BaseTriggerCSS}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  .caret {
    transition: transform 0.2s ease-in-out;
  }
`

const StyledLink = styled(NavigationMenu.Link)`
  ${BaseTriggerCSS}
  display: block;
  text-decoration: none;
  font-size: 15px;
  line-height: 1;
`

const StyledContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;
`
