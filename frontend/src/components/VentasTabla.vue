<template>
    <div class="container">
      <h1 class="my-4 text-center">Ventas Realizadas</h1>
      <button class="btn btn-secondary mb-3" @click="goBack">Volver</button>
      <div class="table-responsive bg-light p-3 rounded">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID Venta</th>
              <th scope="col">Fecha</th>
              <th scope="col">Monto</th>
              <th scope="col">Cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="venta in ventas" :key="venta.id_venta">
              <td>{{ venta.id_venta }}</td>
              <td>{{ venta.fecha }}</td>
              <td>{{ venta.total }}</td>
              <td>{{ getClienteName(venta.Cliente_id_cliente) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VentasTabla',
  data() {
    return {
      ventas: [],
      clientes: [],
    };
  },
  methods: {
    async loadVentas() {
      try {
        const response = await axios.get('http://localhost:3000/ventas');
        this.ventas = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async loadClientes() {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        this.clientes = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getClienteName(clienteId) {
      const cliente = this.clientes.find(c => c.id_cliente === clienteId);
      return cliente ? `${cliente.nombre} ${cliente.apellido}` : 'Cliente no encontrado';
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.loadVentas();
    this.loadClientes();
  },
};
</script>
