import { createI18n } from 'vue-i18n'
import messages from './lang'

const i18n = createI18n({
  locale: 'it', // Lingua predefinita
  fallbackLocale: 'en',
  messages,
})

export default i18n
