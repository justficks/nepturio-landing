import mitt from 'mitt';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const emitter = mitt();
const pinia = createPinia();

library.add(fas);

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

loadFonts();

app
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(pinia)
  .mount('#app');
