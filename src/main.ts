import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp, faCogs } from '@fortawesome/free-solid-svg-icons'

import i18n from './i18n'
import ScrollTopButton from './components/ScrollTopButton.vue'

library.add(faChevronUp, faCogs)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(i18n)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ScrollTopButton', ScrollTopButton)

app.mount('#app')
