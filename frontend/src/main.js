import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue';
import PaginaDashboard from './components/PaginaDashboard.vue';
import RegistrarProducto from './components/RegistrarProducto.vue';
import Inventario from './components/Inventario.vue';
import RegistrarCliente from './components/RegistrarCliente.vue';
import ProveedorRegistro from './components/ProveedorRegistro.vue';
import Descuentospagina from './components/Descuentospagina.vue';
import Ventaspagina from './components/Ventaspagina.vue';
import Facturaspagina from './components/Facturaspagina.vue'
import Analisispagina from './components/Analisispagina.vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
//import { faTachometerAlt, faUserPlus, faPlusCircle, faShoppingCart, faPercent, faClipboardList, faChartLine, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
      },
      {
        name: 'descuentos',
        path: '/Descuentos',
        component: Descuentospagina
      },
      {
        name:'ventas',
        path: '/Ventas',
        component: Ventaspagina
      },
      {
        name:'facturas',
        path:'/Facturas',
        component: Facturaspagina
      },
      {
        name:'analisis',
        path:'/Analisis',
        component: Analisispagina
      }
      ]
library.add(fas);
dom.watch();

const router = createRouter({
  history: createWebHistory(),
  routes
})


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(VueSweetalert2).mount('#app')
 