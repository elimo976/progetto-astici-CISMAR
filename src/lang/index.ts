import ActivitiesPage from './ActivitiesPage'
import AppCookie from './AppCookie'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import BehaviorPage from './BehaviorPage'
import ConservationPage from './ConservationPage'
import DivulgasticiPage from './DivulgasticiPage'
import GeneticsPage from './GeneticsPage'
import HeroBanner from './HeroBanner'
import HomePage from './HomePage'
import LobsterStages from './LobsterStages'
import MediaPage from './MediaPage'
import MetaTags from './MetaTags'
import NavigationMenu from './NavigationMenu'
import ProjectsPage from './ProjectsPage'
import ResearchPage from './ResearchPage'
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
    ...ResearchPage.en,
    ...BehaviorPage.en,
    ...GeneticsPage.en,
    ...ProjectsPage.en,
    ...ActivitiesPage.en,
    ...DivulgasticiPage.en,
    ...MetaTags.en,
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
    ...ResearchPage.it,
    ...BehaviorPage.it,
    ...GeneticsPage.it,
    ...ProjectsPage.it,
    ...ActivitiesPage.it,
    ...DivulgasticiPage.it,
    ...MetaTags.it,
  },
}

export default messages
