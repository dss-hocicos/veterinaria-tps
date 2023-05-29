<template>
  <div class="sidebar">
    <div class="sidebar-title">Querubines Vet</div> <!-- Agregado título -->
    <ul>
      <li><router-link to="/PaginaDashboard"><font-awesome-icon icon="tachometer-alt" /> Dashboard</router-link></li>
      <li><router-link to="/RegistrarCliente"><font-awesome-icon icon="user-plus" /> Registrar Cliente</router-link></li>
      <li><router-link to="/registrar-productos"><font-awesome-icon icon="plus-circle" /> Registrar Productos</router-link></li>
      <li><router-link to="/nueva-venta"><font-awesome-icon icon="shopping-cart" /> Nueva Venta</router-link></li>
      <li><router-link to="/administrar-descuentos"><font-awesome-icon icon="percent" /> Administrar Descuentos</router-link></li>
      <li><router-link to="/inventario"><font-awesome-icon icon="clipboard-list" /> Inventario</router-link></li>
      <li><router-link to="/analisis-de-ventas"><font-awesome-icon icon="chart-line" /> Análisis de Ventas</router-link></li>
      <li><router-link to="/proveedores"><font-awesome-icon icon="truck-loading" /> Proveedores</router-link></li>
    </ul>
  </div>
</template>
<style scoped>
.sidebar {
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #008000;
  color: #fff;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Nuevo estilo para el título */
.sidebar-title {
  font-size: 2em; 
  text-align: center; 
  margin-bottom: 20px; 
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.sidebar ul li {
  margin-bottom: 70px; /* Reducido a 5px */
  width: 100%;
  text-align: center;
}

.sidebar ul li a {
  display: inline-block;
  width: 80%;
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  background-color: #006400;
}

.sidebar ul li a:hover {
  background-color: #00b300;
}
</style>