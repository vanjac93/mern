import i18n from '~/services/i18n/i18n'
import { CardType } from './types'

export const CARDS: CardType[] = [
  {
    link: '/shop',
    title: i18n.t('Convert with email automations'),
    text: i18n.t(
      'Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.'
    ),
    // src: 'https://dummyimage.com/200x400/be4141/aaa',
    src: '/src/assets/images/cards/img1.jpg',
    srcSet:
      // 'https://dummyimage.com/400x600/1d6eff/ccc 400w, https://dummyimage.com/600x800/1d6eff/bbb 600w'
      '/src/assets/images/cards/img1.jpg'
  },
  {
    link: '/test',
    title: i18n.t('Convert with email automations'),
    src: 'https://dummyimage.com/200x400/dd3e3e/1762e4',
    text: i18n.t(
      'Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.'
    ),
    srcSet:
      'https://dummyimage.com/400x600/1d6eff/ccc 400w, https://dummyimage.com/600x800/1d6eff/bbb 600w'
  },
  {
    link: '/best',
    title: i18n.t('Convert with email automations'),
    src: 'https://dummyimage.com/200x400/3c2121/26decf',
    text: i18n.t(
      'Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.'
    ),
    srcSet:
      'https://dummyimage.com/400x600/1d6eff/ccc 400w, https://dummyimage.com/600x800/1d6eff/bbb 600w'
  },
  {
    link: '/desc',
    title: i18n.t('Convert with email automations'),
    src: 'https://dummyimage.com/200x400/dd25a6/c11e1e',
    text: i18n.t(
      'Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.'
    ),
    srcSet:
      'https://dummyimage.com/400x600/1d6eff/ccc 400w, https://dummyimage.com/600x800/1d6eff/bbb 600w'
  }
]
