<template>
  <NavBar />
  <div class="container">
      <h1 class="my-4">Registro de Descuentos</h1>

      <button class="btn btn-primary mb-4" @click="showAddModal">Agregar Descuento</button>

      <table class="table bg-light p-4 rounded shadow">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Porcentaje</th>
                  <th>Fecha de inicio</th>
                  <th>Fecha de fin</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="descuento in descuentos" :key="descuento.id_descuento">
                  <td>{{ descuento.id_descuento }}</td>
                  <td>{{ descuento.descripcion }} </td>
                  <td>{{ descuento.porcentaje }}</td>
                  <td>{{ formatFecha(descuento.fecha_inicio) }}</td>
                  <td>{{ formatFecha(descuento.fecha_fin) }}</td>
                  <td>
                      <button class="btn btn-danger" @click="deleteDescuento(descuento)">Eliminar</button>
                  </td>
              </tr>
          </tbody>
      </table>

      <!-- Add Discount Modal -->
      <div class="modal fade" id="addDiscountModal" tabindex="-1" aria-labelledby="addDiscountModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="addDiscountModalLabel">Agregar Descuento</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form @submit.prevent="addDiscount">
                        <div class="mb-3">
                <label for="discountName" class="form-label">Nombre del Descuento</label>
                <input type="text" class="form-control" id="discountName" v-model="newDiscount.descripcion" required>
              </div>
                          <div class="mb-3">
                              <label for="discountPercentage" class="form-label">Porcentaje</label>
                              <input type="float" class="form-control" id="discountPercentage" v-model="newDiscount.porcentaje" required>
                          </div>
                          <div class="mb-3">
                              <label for="discountStartDate" class="form-label">Fecha de inicio</label>
                              <input type="date" class="form-control" id="discountStartDate" v-model="newDiscount.fecha_inicio" required>
                          </div>
                          <div class="mb-3">
                              <label for="discountEndDate" class="form-label">Fecha de fin</label>
                              <input type="date" class="form-control" id="discountEndDate" v-model="newDiscount.fecha_fin" required>
                          </div>
                          <button type="submit" class="btn btn-primary">Guardar</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal } from 'bootstrap';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'DescuentoRegistro',
  data() {
      return {
          descuentos: [],
          productos:[],
          newDiscount: {
              descripcion:'',
              porcentaje: '',
              fecha_inicio: '',
              fecha_fin: ''
          },
      };
  },
  methods: {
      async getDiscounts() {
          try {
              const response = await axios.get('http://localhost:3000/descuentos');
              this.descuentos = response.data;
          } catch (error) {
              console.error(error);
          }
      },
      async getProducts() {
            try {
                const response = await axios.get('http://localhost:3000/productos');
                this.productos = response.data;
            } catch (error) {
                console.error(error);
            }
        },
      showAddModal() {
          var myModal = new Modal(document.getElementById('addDiscountModal'), {focus: true})
          myModal.show();
      },
      getProductName(id_producto) {
    const producto = this.productos.find(producto => producto.id_producto === id_producto);
    return producto ? producto.nombre : 'Producto no encontrado';
  },
      async addDiscount() {
          try {
              const response = await axios.post('http://localhost:3000/descuentos', this.newDiscount);
              this.descuentos.push(response.data);
              Swal.fire({
                  title: '¡Agregado!',
                  text: 'El descuento ha sido agregado con éxito.',
                  icon: 'success',
                  confirmButtonText: 'OK'
              }).then(() => {
          // Recarga la página después de que el usuario presione "OK" en el SweetAlert.
          location.reload();
      });
          } catch (error) {
              console.error(error);
          }
      },
      async deleteDescuento(descuento) {
          try {
              await axios.delete(`http://localhost:3000/descuentos/${descuento.id_descuento}`);
              this.descuentos = this.descuentos.filter(d => d.id_descuento !== descuento.id_descuento);
              Swal.fire({
                  title: '¡Eliminado!',
                  text: 'El descuento ha sido eliminado con éxito.',
                  icon: 'success',
                  confirmButtonText: 'OK'
              });
          } catch (error) {
              console.error(error);
          }
      },
      formatFecha(fecha) {
      const date = new Date(fecha);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return date.toLocaleDateString(undefined, options);
    },
  },
  created() {
      this.getDiscounts();
      this.getProducts();
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
/* Agrega aquí tus estilos */
</style>
