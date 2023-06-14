<template>
  <div>
    <button class="btn btn-primary menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <font-awesome-icon icon="bars" /> Menú
    </button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Querubines Vet</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><router-link to="/PaginaDashboard" class="menu-button"><font-awesome-icon icon="tachometer-alt" /> Dashboard</router-link></li>
          <li class="list-group-item"><router-link to="/RegistrarCliente" class="menu-button"><font-awesome-icon icon="user-plus" /> Registrar Cliente</router-link></li>
          <li class="list-group-item"><router-link to="/RegistrarProducto" class="menu-button"><font-awesome-icon icon="plus-circle" /> Registrar Productos</router-link></li>
          <li class="list-group-item"><router-link to="/Ventas" class="menu-button"><font-awesome-icon icon="shopping-cart" /> Nueva Venta</router-link></li>
          <li class="list-group-item"><router-link to="/Descuentos" class="menu-button"><font-awesome-icon icon="percent" /> Administrar Descuentos</router-link></li>
          <li class="list-group-item"><router-link to="/inventario" class="menu-button"><font-awesome-icon icon="clipboard-list" /> Inventario</router-link></li>
          <li class="list-group-item"><router-link to="/Analisis" class="menu-button"><font-awesome-icon icon="chart-line" /> Análisis de Ventas</router-link></li>
          <li class="list-group-item"><router-link to="/proveedores" class="menu-button"><font-awesome-icon icon="truck-loading" /> Proveedores</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.offcanvas {
  width: 250px;
}
.menu-button {
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>

