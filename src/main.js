import './assets/styles/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from "@/locales/i18n";

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-green/theme.css';
import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Rating from 'primevue/rating';
import Calendar from 'primevue/calendar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import FileUpload from 'primevue/fileupload';

const app = createApp(App);

app
  .use(router)
  .use(i18n)
  .use(PrimeVue)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-card', Card)
    .component('pv-checkbox', Checkbox)
    .component('pv-rating', Rating)
    .component('pv-calendar', Calendar)
    .component('pv-tab-view', TabView)
    .component('pv-tab-panel', TabPanel)
    .component('pv-file-upload', FileUpload)
  .mount('#app');
