import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue';
import PaginaDashboard from './components/PaginaDashboard.vue';
import RegistrarProducto from './components/RegistrarProducto.vue';
import Inventario from './components/Inventario.vue';
import RegistrarCliente from './components/RegistrarCliente.vue';
import ProveedorRegistro from './components/ProveedorRegistro.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faUserPlus, faPlusCircle, faShoppingCart, faPercent, faClipboardList, faChartLine, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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
      },
      {
        name: 'RegistrarProducto',
        path: '/RegistrarProducto',
        component: RegistrarProducto},
      {
        name: 'Inventario',
        path: '/Inventario',
        component: Inventario
      },
      {
        name: 'Proveedores',
        path: '/Proveedores',
        component: ProveedorRegistro
      }
      ]
library.add(faTachometerAlt, faUserPlus, faPlusCircle, faShoppingCart, faPercent, faClipboardList, faChartLine, faTruckLoading)
const router = createRouter({
  history: createWebHistory(),
  routes
})


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(VueSweetalert2).mount('#app')
 