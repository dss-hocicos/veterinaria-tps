<template>
    <div class="card text-center">
      <div class="card-body">
        <i class="fas fa-warehouse fa-2x mb-3"></i>
        <h5 class="card-title">Productos en Stock</h5>
        <p class="card-text display-4">{{ productosEnStock }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "ProductosEnStock",
    data() {
      return {
        productosEnStock: 0,
      };
    },
    mounted() {
      this.getProductosEnStock();
    },
    methods: {
      async getProductosEnStock() {
        const response = await axios.get("http://localhost:5000/api/productos");
        this.productosEnStock = response.data.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    color: #fff;
    background-color: #28a745;
  }
  </style>
  