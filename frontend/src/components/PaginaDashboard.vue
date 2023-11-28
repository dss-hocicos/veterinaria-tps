<template>
  <div>
    <NavBar />
    <div class="dashboard">
     
      <div class="info-boxes">
        <TotalClientes />
        <TotalVentas />
        <ProductosEnStock />
      
      </div>
      <h2 style="margin-left:190px">Clientes</h2>
      <div class="table-container mt-3 custom-margin">
      <div class="table-responsive">
        <table class="table bg-light p-4 rounded shadow">
          <thead class="thead-dark">
  <tr>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">CI</th>
    <th scope="col">Compras realizadas</th>
  </tr>
</thead>
<tbody>
  <tr v-for="cliente in clientes" :key="cliente.id_cliente">
    <td>{{ cliente.nombre }}</td>
    <td>{{ cliente.apellido }}</td>
    <td>{{ cliente.ci }}</td>
    <td>{{ cliente.ventas }}</td>
  </tr>
</tbody>

      </table>
    </div>  
    </div>
    </div>
  </div>
</template>
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  import TotalClientes from '@/components/TotalClientes.vue';
  import TotalVentas from '@/components/TotalVentas.vue';
  import ProductosEnStock from '@/components/ProductosEnStock.vue';
  export default {
    name: 'PaginaDashboard',
    data() {
      return {
        clientes: [] // etc.
      }
    },
    components: {
      NavBar,
      TotalClientes,
      TotalVentas,
      ProductosEnStock
      // etc.
    },
    created() {
  axios.all([
    axios.get('http://localhost:3000/clientes'),
    axios.get('http://localhost:3000/ventas')
  ])
  .then(axios.spread((clientesRes, ventasRes) => {
    this.clientes = clientesRes.data;

    let ventasPorCliente = ventasRes.data.reduce((count, venta) => {
      count[venta.Cliente_id_cliente] = (count[venta.Cliente_id_cliente] || 0) + 1;
      return count;
    }, {});

    this.clientes.forEach(cliente => {
      cliente.ventas = ventasPorCliente[cliente.id_cliente] || 0;
    });
  }))
  .catch(error => {
    console.log(error);
  });
}

  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }
  
  .info-boxes {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 80%;  /* Esto limitará el ancho de los info-boxes a un 80% del contenedor */
  margin: 0 auto;  /* Esto centrará el contenedor de info-boxes */
}
.custom-margin {
  margin-left: 300px;
}
.table-container{
  max-width:80%;
  margin:0 auto;
}
  </style>
  
