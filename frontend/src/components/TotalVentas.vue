<template>
    <div class="card text-center">
      <div class="card-body">
        <i class="fas fa-shopping-cart fa-2x mb-3"></i>
        <h5 class="card-title">Total de Ventas</h5>
        <p class="card-text display-4">{{ totalVentas }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TotalVentas",
    data() {
      return {
        totalVentas: 0,
      };
    },
    mounted() {
      this.getTotalVentas();
    },
    methods: {
      async getTotalVentas() {
        const response = await axios.get("http://localhost:3000/ventas");
        this.totalVentas = response.data.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    color: #fff;
    background-color: #17a2b8;
  }
  </style>
  