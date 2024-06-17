import styled from 'styled-components'
import MenuItemContent from '../../components/MenuItemContent'
import { PRODUCT_MENU, PRODUCT_MENU_SIDEBAR } from '../../util'
import MenuCard from '../../components/Card'

export default function Product() {
  return (
    <MenuItemContent secondary={PRODUCT_MENU_SIDEBAR}>
      <Grid>
        {PRODUCT_MENU.map((card, i) => (
          <MenuCard key={i} card={card} />
        ))}
      </Grid>
    </MenuItemContent>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-template-rows: auto;
  gap: 3rem;
`
