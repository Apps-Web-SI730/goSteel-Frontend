import './assets/styles/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from "@/locales/i18n";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-green/theme.css';
import PrimeVue from 'primevue/config';
import Button from "primevue/button";

const app = createApp(App);

app
  .use(router)
  .use(i18n)
  .use(PrimeVue)
    .component('pv-button', Button)
  .mount('#app');
