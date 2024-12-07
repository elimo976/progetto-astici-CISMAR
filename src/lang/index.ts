import AppCookie from './AppCookie'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import ConservationPage from './ConservationPage'
import HeroBanner from './HeroBanner'
import HomePage from './HomePage'
import LobsterStages from './LobsterStages'
import MediaPage from './MediaPage'
import NavigationMenu from './NavigationMenu'
import ThirdMission from './ThirdMission'
import UnderConstruction from './UnderConstruction'

interface Section {
  heading: string
  content: string
  imageAlt: string
  imageSrc: string
}

export interface Messages {
  [key: string]: {
    [key: string]: string | { [subKey: string]: string } | Section[] // Usa Section[] invece di any[]
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
    ...MediaPage.en,
    ...UnderConstruction.en,
    ...LobsterStages.en,
    ...ConservationPage.en,
  },
  it: {
    ...AppHeader.it,
    ...AppFooter.it,
    ...NavigationMenu.it,
    ...HomePage.it,
    ...AppCookie.it,
    ...ThirdMission.it,
    ...HeroBanner.it,
    ...MediaPage.it,
    ...UnderConstruction.it,
    ...LobsterStages.it,
    ...ConservationPage.it,
  },
}

export default messages
