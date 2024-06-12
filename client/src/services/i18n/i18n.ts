import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const missingTranslations: string[] = []

i18n
  .use(initReactI18next) // if not using I18nextProvider
  // TO-DO Uncomment when API ready
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react
    },

    keySeparator: false,
    nsSeparator: false,
    // pluralSeparator: false,
    // contextSeparator: false,

    // Handle missing keys
    saveMissing: true,
    missingKeyHandler: (lng, ns, key) => {
      if (!lng[0]) {
        return
      }
      if (missingTranslations.indexOf(key) < 0) {
        missingTranslations.push(key)
      }
    },

    // react i18next special options (optional)
    react: {
      // wait: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      // bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18n
