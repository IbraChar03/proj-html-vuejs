import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faEnvelope, faHatWizard, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard, faClock, faPhone, faEnvelope)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
