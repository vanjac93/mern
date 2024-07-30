export type ActiveItemType = 'apis' | 'studio' | 'content-lake'

export interface ShowcaseCardProps {
  id: ActiveItemType
  onClick: (id: ActiveItemType) => void
  onMouseEnter: (id: ActiveItemType) => void
  title: string
  text: string
  row: number
  column: number
  gridArea: string
}
