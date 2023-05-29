<template>

    <NavBar />
    <div class="container mt-5">
      <h1>Registrar Producto</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="producto.nombre">
        </div>
  
        <div class="form-group">
          <label for="precio">Precio</label>
          <input type="number" class="form-control" id="precio" v-model="producto.precio">
        </div>
  
        <div class="form-group">
          <label for="descripcion">Descripcion</label>
          <textarea class="form-control" id="descripcion" rows="3" v-model="producto.descripcion"></textarea>
        </div>
  
        <div class="form-group">
          <label for="unidades">Unidades</label>
          <input type="number" class="form-control" id="Unidades" v-model="producto.Unidades">
        </div>
  
        <div class="form-group">
          <label for="id_proveedor">Proveedor</label>
          <input type="number" class="form-control" id="proveedores_id_proveedor" v-model="producto.proveedores_id_proveedor">
        </div>
  
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  export default {
    name: 'RegistrarProducto',
    data() {
      return {
        producto: {
          nombre: '',
          precio: '',
          descripcion: '',
          Unidades: '',
          proveedores_id_proveedor: '',
        },
      };
    },
    methods: {
        async submitForm() {
        try {
          const response = await axios.post('http://localhost:3000/productos', this.producto);
          console.log(response.data);
        this.$swal('Producto registrado!', 'El producto ha sido registrado con éxito!', 'success');
        } catch (error) {
          console.error(error);
        }
      }},
    components: {
      NavBar,
    },
  };
  </script>
  