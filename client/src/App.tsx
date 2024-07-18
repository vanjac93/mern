import i18n from '~/services/i18n/i18n'
import Providers from './components/Providers'
import { I18nextProvider } from 'react-i18next'
import AppRouter from './components/Router'
import { Flex } from './components/layout/Box'

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Providers>
        {/* <Flex flexWrap="wrap">
          <img
            // srcSet="
            // https://dummyimage.com/300x200/000/fff 1x,
            // https://dummyimage.com/1200x800/000/fff 2x,
            // https://dummyimage.com/2400x1600/000/fff 3x
            // "
            srcSet="
            https://dummyimage.com/300x200/000/fff 300w,
            https://dummyimage.com/600x400/000/fff 600w,
            https://dummyimage.com/1200x800/000/fff 1200w,
            https://dummyimage.com/1800x1200/000/fff 1800w,
            https://dummyimage.com/2400x1600/000/fff 2400w"
            // srcSet="/src/assets/images/orange-576.jpg 576w,
            // /src/assets/images/orange-768.jpg 768w,
            //  /src/assets/images/orange-1200.jpg 1200w,
            //  /src/assets/images/orange-1970.jpg 1970w,
            //  /src/assets/images/orange.jpg
            // "
            // onLoad={(e) => {
            //   console.log('loaded', e)
            // }}
            alt="Some testing Hero"
          />
          <Flex flex={1} bg="yellow">
            testing
          </Flex>
        </Flex> */}
        <AppRouter />
      </Providers>
    </I18nextProvider>
  )
}

export default App
