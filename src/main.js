import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarAlt,
  faCheck,
  faEdit,
  faPlus,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './style/global.scss';

library.add(faPlus, faEdit, faTrash, faCalendarAlt, faCheck, faTimes);

const app = createApp(App);

app.component('font-icon', FontAwesomeIcon);

app.mount('#app');
