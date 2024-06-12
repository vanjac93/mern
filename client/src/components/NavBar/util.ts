import i18n from '@client/services/i18n/i18n'

export interface NavLink {
  to?: string
  text: string
  id: string
}

export const PRIMARY_LINKS: NavLink[] = [
  {
    id: 'product',
    text: i18n.t('Product')
  },
  {
    id: 'solutions',
    text: i18n.t('Solutions')
  },
  {
    id: 'pricing',
    text: i18n.t('Pricing'),
    to: '/pricing'
  },
  {
    id: 'resources',
    text: i18n.t('Resources')
  },
  {
    id: 'contact',
    text: i18n.t('Contact'),
    to: '/contact'
  }
]

// export const SECONDARY_LINKS: NavLink[] = [
//   {
//     text: i18n.t('Github'),
//     to: '/code'
//   },
//   {
//     text: i18n.t('Better'),
//     to: '/better'
//   }
// ]
