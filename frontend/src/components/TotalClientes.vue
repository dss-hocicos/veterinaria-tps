<template>
    <div class="card text-center">
      <div class="card-body">
        <i class="fas fa-users fa-2x mb-3"></i>
        <h5 class="card-title">Total de Clientes</h5>
        <p class="card-text display-4">{{ totalClientes }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TotalClientes",
    data() {
      return {
        totalClientes: 0,
      };
    },
    mounted() {
      this.getTotalClientes();
    },
    methods: {
      async getTotalClientes() {
        const response = await axios.get("http://localhost:3000/clientes");
        this.totalClientes = response.data.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    color: #fff;
    background-color: #6c757d;
  }
  </style>
  