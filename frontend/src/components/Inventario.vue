<template>
    <NavBar />
    <div class="container">
      <h1 class="my-4">Gestión de Inventario</h1>
      
      <input type="search" class="form-control mb-4" v-model="searchQuery" placeholder="Buscar producto...">
  
      <table class="table bg-light p-4 rounded shadow">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Código</th>
      <th>Descripción</th>
      <th>Precio</th>
      <th>Unidades Disponibles</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="producto in filteredProducts" :key="producto.id">
      <td>{{ producto.nombre }}</td>
      <td>{{ producto.id_producto }}</td>
      <td>{{ producto.descripcion }}</td>
      <td>{{ producto.precio }}</td>
      <td>{{ producto.Unidades }}</td>
      <td>
        <button class="btn btn-primary mr-2" @click="showEditModal(producto)">Actualizar</button>
        <button class="btn btn-danger" @click="deleteProduct(producto)">Eliminar</button>
      </td>
    </tr>
  </tbody>
</table>

    </div>
    <!-- Modal -->
    <!-- Modal -->
<div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProductModalLabel">Editar Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="productName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="productName" v-model="productoSeleccionado.nombre">
          </div>
          <div>
            <label for="productPrice" class="form-label">Precio</label>
            <input type="number" class="form-control" id="productPrice" v-model="productoSeleccionado.precio">
          </div>
          <div>
            <label for="productDescription" class="form-label">Descripción</label>
            <textarea class="form-control" id="productDescription" rows="3" v-model="productoSeleccionado.descripcion"></textarea>
          </div>
          <div>
            <label for="productUnits" class="form-label">Unidades</label>
            <input type="number" class="form-control" id="productUnits" v-model="productoSeleccionado.Unidades">
          </div>
          <div>
            <label for="productProvider" class="form-label">Proveedor</label>
            <select class="form-select" id="productProvider" v-model="productoSeleccionado.proveedores_id_proveedor">
              <option v-for="proveedor in proveedores" :key="proveedor.id_proveedor" :value="proveedor.id_proveedor">{{ proveedor.nombre }}</option>
            </select>
          </div>
          <!-- Agrega aquí los demás campos -->
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" @click="updateProduct(productoSeleccionado)">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  import Swal from 'sweetalert2';
  import { Modal } from 'bootstrap';
  export default {
    name: 'PaginaInventario',
    data() {
      return {
        productos: [],
        proveedores: [],
        searchQuery: '',
        productoEditado: {
        nombre: '',
        precio: '',
        descripcion: '',
        Unidades: '',
        proveedores_id_proveedor: '',
      },
      productoSeleccionado: {},
      };
    },
    computed: {
      filteredProducts() {
  return this.productos.filter(producto =>
    producto.nombre && producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
},

    },
    methods: {
        async deleteProduct(producto) {
    try {
      await axios.delete(`http://localhost:3000/productos/${producto.id_producto}`);
      this.productos = this.productos.filter(p => p.id_producto !== producto.id_producto);
      Swal.fire({
        title: '¡Eliminado!',
        text: 'El producto ha sido eliminado con éxito.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error(error);
    }
  },
  showEditModal(producto) {
    if (producto) {
      this.productoSeleccionado = { ...producto };
      var myModal = new Modal(document.getElementById('editProductModal'), {focus: true})
      myModal.show();
    }
  },
  async updateProduct(producto) {
    try {
        const response = await axios.put(`http://localhost:3000/productos/${producto.id_producto}`, producto);

        // Actualizamos la lista de productos con los datos actualizados
        const index = this.productos.findIndex(p => p.id_producto === producto.id_producto);
        this.productos.splice(index, 1, response.data);

        Swal.fire({
            title: '¡Actualizado!',
            text: 'El producto ha sido actualizado con éxito.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Recarga la página después de que el usuario presione "OK" en el SweetAlert.
            location.reload();
        });
    } catch (error) {
        console.error(error);

        Swal.fire({
            title: 'Error!',
            text: 'Hubo un error al actualizar el producto.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
},
fetchProveedores() {
    axios.get('http://localhost:3000/proveedores')
      .then(response => {
        this.proveedores = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
    },
    components: {
      NavBar,
    },
    mounted() {
  this.fetchProveedores();
},
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/productos');
        this.productos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Aquí puedes añadir tus estilos */
  </style>
  