import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import List from './components/pages/List';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import Show from './components/pages/Show';
import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

  
axios.defaults.baseURL = "http://localhost:8080/";
const firebaseConfig = {
  apiKey: "AIzaSyDkSaX72CYVnn9nxOk3b-PxNBFG4mxz91E",

  authDomain: "ifdb-59765.firebaseapp.com",

  projectId: "ifdb-59765",

  storageBucket: "ifdb-59765.appspot.com",

  messagingSenderId: "521229900403",

  appId: "1:521229900403:web:3577735dfaa5bf773e2806",

  measurementId: "G-KSMM7J2DNF"

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
  
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
