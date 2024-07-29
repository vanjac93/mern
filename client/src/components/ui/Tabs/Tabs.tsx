import { ReactNode } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import { Box } from '~/components/layout/Box'
import { Divider } from '~/components/layout/Divider'
import { StyledAdminTabTrigger, StyledTabTrigger } from '~/components/ui/Tabs/styles'

export interface TabsPaneType {
  menuItem: ReactNode
  key: string
  render: ReactNode
}

type Props = {
  panes: TabsPaneType[]
  admin?: true
  basic?: true
} & TabsPrimitive.TabsProps

const Tabs = ({ panes, defaultValue, admin, basic, ...other }: Props) => {
  return (
    <TabsPrimitive.Root {...other} defaultValue={defaultValue || panes[0]?.key}>
      <TabsPrimitive.List className="tabs-list">
        {panes.map((x) => (
          <TabsPrimitive.Trigger asChild value={x.key} key={x.key}>
            <Box basic={basic} as={admin ? StyledAdminTabTrigger : StyledTabTrigger}>
              {x.menuItem}
            </Box>
          </TabsPrimitive.Trigger>
        ))}
        {basic && <Divider mt={0} backgroundColor={admin ? 'admin.border' : 'uiBackground'} />}
      </TabsPrimitive.List>
      {panes.map((x, i) => (
        <TabsPrimitive.Content value={x.key} key={x.key} className="tabs-content">
          {x.render}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
}

export default Tabs
