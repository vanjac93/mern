import * as Tabs from '@radix-ui/react-tabs'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { Box, Flex } from '~/components/layout/Box'
import { Heading } from '~/components/ui/Heading'
import TabList from './TabList'

type CustomTabContentProps = Tabs.TabsContentProps & {
  heading: string
  text: ReactNode
  listItems: string[]
  cta: ReactNode
  img: ReactElement<HTMLImageElement>
}

export default function TabContent({
  heading,
  text,
  cta,
  img,
  listItems,
  value
}: PropsWithChildren<CustomTabContentProps>) {
  return (
    <Tabs.Content value={value}>
      <Flex flexDirection="column" gap="2rem">
        <Heading
          mt="2rem"
          fontSize={{
            _: '3rem'
          }}
          as="h3"
          textAlign="center"
        >
          {heading}
        </Heading>
        <Container>
          <Box gridArea="text">{text}</Box>
          <Box gridArea="image">{img}</Box>
          <Box gridArea="list">
            <TabList items={listItems} />
          </Box>
          <Box gridArea="cta">{cta}</Box>
        </Container>
      </Flex>
    </Tabs.Content>
  )
}

const Container = styled.div`
  font-size: 20px;
  text-align: left;
  display: grid;
  gap: 1.5rem;
  grid-template-areas: 'text image' 'list image' 'cta image';
`
