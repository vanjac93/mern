import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/layout/Box'

export default function Field(props: PropsWithChildren<BoxProps>) {
  return (
    <Box
      mb="16px"
      width="100%"
      position="relative"
      {...props}
      className={'field ' + (props.className || '')}
    />
  )
}
