import { HTMLAttributes } from 'react'

import {
  BackgroundProps,
  ColorProps,
  TypographyProps as TypoProps,
  SpaceProps,
  TextStyleProps
} from 'styled-system'

export interface TypographyProps
  extends BackgroundProps,
    TypoProps,
    SpaceProps,
    Omit<ColorProps, 'color'>,
    HTMLAttributes<HTMLElement> {}
