import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue';
import PaginaDashboard from './components/PaginaDashboard.vue';

import RegistrarCliente from './components/RegistrarCliente.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faUserPlus, faPlusCircle, faShoppingCart, faPercent, faClipboardList, faChartLine, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'



const routes = [
    {
        name: 'LogIn',
        path: '/',
        component: LogIn
      },
      {
        name: 'PaginaDashboard',
        path: '/PaginaDashboard',
        component: PaginaDashboard
      },
      {
        name: 'RegistrarCliente',
        path: '/RegistrarCliente',
        component: RegistrarCliente
      } ]
library.add(faTachometerAlt, faUserPlus, faPlusCircle, faShoppingCart, faPercent, faClipboardList, faChartLine, faTruckLoading)
const router = createRouter({
  history: createWebHistory(),
  routes
})


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
