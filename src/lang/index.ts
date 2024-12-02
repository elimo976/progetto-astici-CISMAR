import AppCookie from './AppCookie'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import HeroBanner from './HeroBanner'
import HomePage from './HomePage'
import NavigationMenu from './NavigationMenu'
import ThirdMission from './ThirdMission'

export interface Messages {
  [key: string]: {
    [key: string]: string | { [subKey: string]: string } // Modifica per supportare oggetti
  }
}

const messages: Messages = {
  en: {
    ...AppHeader.en,
    ...AppFooter.en,
    ...NavigationMenu.en,
    ...HomePage.en,
    ...AppCookie.en,
    ...ThirdMission.en,
    ...HeroBanner.en,
  },
  it: {
    ...AppHeader.it,
    ...AppFooter.it,
    ...NavigationMenu.it,
    ...HomePage.it,
    ...AppCookie.it,
    ...ThirdMission.it,
    ...HeroBanner.it,
  },
}

export default messages
