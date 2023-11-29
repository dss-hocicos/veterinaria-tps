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
            <th scope="col">Vendedor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="venta in ventas" :key="venta.id_venta">
            <td>{{ venta.id_venta }}</td>
            <td>{{ formatFecha(venta.fecha) }}</td>
            <td>{{ venta.total }}</td>
            <td>{{ getVendedorName(venta.vendedor_id_vendedor) }}</td>
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
      vendedores: [],
    };
  },
  methods: {
    async loadVentas() {
      try {
        const response = await axios.get('http://localhost:3000/ventas');
        this.ventas = response.data;
        this.loadVendedores();
      } catch (error) {
        console.error(error);
      }
    },
    async loadVendedores() {
      try {
        const response = await axios.get('http://localhost:3000/vendedores');
        this.vendedores = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getVendedorName(vendedorId) {
      const vendedor = this.vendedores.find(v => v.id_vendedor === vendedorId);
      return vendedor ? `${vendedor.usuario}` : 'Vendedor no encontrado';
    },
    goBack() {
      this.$router.go(-1);
    },
    formatFecha(fecha) {
      const date = new Date(fecha);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return date.toLocaleDateString(undefined, options);
    },
  },
  created() {
    this.loadVentas();
    this.loadVendedores();
  },
};
</script>

<style>
  .container {
    overflow: hidden;
  }
</style>
