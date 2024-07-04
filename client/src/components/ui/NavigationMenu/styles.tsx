import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

export const StyledNavMenuRoot = styled(NavigationMenuPrimitive.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    li {
      list-style: none;
      padding: 0;
      display: block;
      height: 100%;
    }
  }

  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-30deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
    to {
      opacity: 0;
      transform: rotateX(-10deg) scale(0.95);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

export const StyledNavMenuContent = styled(NavigationMenuPrimitive.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  min-width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;
  padding: 3px 0;

  background-color: ${({ theme }) => theme.colors.uiBackground};
  &[data-motion='from-start'] {
    animation-name: enterFromLeft;
  }
  &[data-motion='from-end'] {
    animation-name: enterFromRight;
  }
  &[data-motion='to-start'] {
    animation-name: exitToLeft;
  }
  &[data-motion='to-end'] {
    animation-name: exitToRight;
  }

  ${({ theme }) => theme.mq.sm} {
    width: 100%;
  }
`

export const StyledViewportPosition = styled.div<{
  alignRight?: boolean
  minWidth?: string
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 100%;
  text-align: ${({ alignRight, theme }) =>
    alignRight ? (theme.isRtl ? 'left' : 'right') : 'inherit'};
  perspective: 2000px;
`

export const StyledNavMenuViewport = styled(NavigationMenuPrimitive.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 10px 20px 40px 0px rgba(48, 48, 48, 0.25);
  transition: width, height, 300ms ease;
  height: var(--radix-navigation-menu-viewport-height);
  width: var(--radix-navigation-menu-viewport-width);
  min-width: 100%;
  ${({ theme }) => theme.mq.sm} {
    width: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: 'width, height, 300ms ease';
    &[data-state='open'] {
      animation: scaleIn 200ms ease;
    }
    &[data-state='closed'] {
      animation: scaleOut 200ms ease;
    }
  }

  & > * {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderSecondary};
    }
  }
`

export const StyledNavigationMenuList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  height: 100%;
  font-size: 12px;
`

export const StyledArrow = styled.div`
  position: relative;
  top: 70%;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 0px;
`
