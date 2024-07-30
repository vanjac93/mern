import { HTMLAttributes } from 'react'

import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  FlexProps as _FlexProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps as _GridProps,
  ColorProps,
  GridAreaProps
} from 'styled-system'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    _FlexProps,
    GridAreaProps,
    SpaceProps,
    Omit<ColorProps, 'color'>,
    HTMLAttributes<HTMLElement> {}

export interface FlexProps extends BoxProps, FlexboxProps {}
