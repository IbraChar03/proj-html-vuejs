import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope, faGrip, faHatWizard, faLocationDot, faPercent, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard, faClock, faPhone, faEnvelope, faFacebookF, faLinkedinIn, faTwitter, faGrip, faPercent, faLocationDot)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
