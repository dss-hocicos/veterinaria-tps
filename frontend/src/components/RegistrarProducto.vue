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
          <label for="precio">Costo</label>
          <input type="number" class="form-control" id="costo" v-model="producto.costo">
        </div>
        <div class="form-group">
        <label for="id_categoria">Categoria</label>
        <select class="form-control" id="categoria_id_categoria" v-model="producto.categoria_id_categoria">
          <option v-for="categoria in categorias" :key="categoria.id_categoria" :value="categoria.id_categoria">{{ categoria.nombre }}</option>
        </select>
       </div>
       <div class="form-group">
        <label for="id_proveedor">Proveedor</label>
        <select class="form-control" id="proveedores_id_proveedor" v-model="producto.proveedor_id_proveedor">
          <option v-for="proveedor in proveedores" :key="proveedor.id_proveedor" :value="proveedor.id_proveedor">{{ proveedor.nombre }}</option>
        </select>
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
        proveedores: [],
        producto: {
          nombre: '',
          precio: '',
          descripcion: '',
          Unidades: '',
          costo:'',
          categoria_id_categoria:'',
          proveedor_id_proveedor: '',
        },
      };
    },
    methods: {
      async fetchProveedores() {
      try {
        const response = await axios.get('http://localhost:3000/proveedores');
        this.proveedores = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCategorias() {
      try {
        const response = await axios.get('http://localhost:3000/categorias');
        this.categorias = response.data;
      } catch (error) {
        console.log("nada");
      }
    },
        async submitForm() {
        try {
          const response = await axios.post('http://localhost:3000/productos', this.producto);
          console.log(response.data);
        this.$swal('Producto registrado!', 'El producto ha sido registrado con éxito!', 'success');
        } catch (error) {
          console.error(error);
        }
      }},
  mounted() {
    this.fetchProveedores();
    this.fetchCategorias();
  },
    components: {
      NavBar,
    },
  };
  </script>
  
