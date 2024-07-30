import { FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components'

export default function TabList({ items }: { items: string[] }) {
  return (
    <ul style={{ gridArea: 'list' }}>
      {items.map((item, i) => (
        <TabListItem key={i} text={item} />
      ))}
    </ul>
  )
}

function TabListItem({ text }: { text: string }) {
  return (
    <StyledListItem>
      <FaCheckCircle />
      {text}
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
`
