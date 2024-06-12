import i18n from '@client/services/i18n/i18n'

export interface NavLink {
  to: string
  text: string
}

export const PRIMARY_LINKS: NavLink[] = [
  {
    text: i18n.t('Home'),
    to: '/'
  },
  {
    text: i18n.t('About'),
    to: '/about'
  },
  {
    text: i18n.t('Tailwind'),
    to: '/tailwind'
  }
]

export const SECONDARY_LINKS: NavLink[] = [
  {
    text: i18n.t('Github'),
    to: '/code'
  },
  {
    text: i18n.t('Better'),
    to: '/better'
  }
]
