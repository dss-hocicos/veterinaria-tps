<template>
    <NavBar />
    <div class="container mt-5">
      <h2>Registrar Cliente</h2>
      <form @submit="submitForm">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="cliente.nombre" required>
        </div>
        <div class="mb-3">
          <label for="apellido" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="apellido" v-model="cliente.apellido" required>
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="direccion" v-model="cliente.direccion" required>
        </div>
        <div class="mb-3">
          <label for="telefono" class="form-label">Teléfono</label>
          <input type="number" class="form-control" id="telefono" v-model="cliente.telefono" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="cliente.email" required>
        </div>
        <div class="mb-3">
          <label for="ci" class="form-label">CI</label>
          <input type="text" class="form-control" id="ci" v-model="cliente.ci" required>
        </div>
        <div class="mb-3">
          <label for="razon_social" class="form-label">Razón Social</label>
          <input type="text" class="form-control" id="razon_social" v-model="cliente.razon_social" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  export default {
    data() {
      return {
        cliente: {
          id_cliente: '',
          nombre: '',
          apellido: '',
          direccion: '',
          telefono: '',
          email: '',
          ci: '',
          razon_social: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://localhost:3000/clientes', this.cliente);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    },
    components: {
      NavBar
    }
  };
    
  </script>
  