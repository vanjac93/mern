import i18n from '@client/services/i18n/i18n'
import { NavItem } from './types'
import Product from './ui/Product'
import Solutions from './ui/Solutions'
import Resources from './ui/Resources'

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'product',
    text: i18n.t('Product'),
    content: <Product />
  },
  {
    id: 'solutions',
    text: i18n.t('Solutions'),
    content: <Solutions />
  },
  {
    id: 'pricing',
    text: i18n.t('Pricing'),
    to: '/pricing'
  },
  {
    id: 'resources',
    text: i18n.t('Resources'),
    content: <Resources />
  }
]
