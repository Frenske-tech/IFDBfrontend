import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import List from './components/pages/List';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import Show from './components/pages/Show';
  
axios.defaults.baseURL = "http://localhost:8080/";
// axios.interceptors.request.use(function (config) {
// //   config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
// //   return config;
// });
  
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: List },
    { path: '/create', component: Create },
    { path: '/edit/:id', component: Edit },
    { path: '/show/:id', component: Show },
  ],
});
  
createApp(App).use(router).mount('#app');
