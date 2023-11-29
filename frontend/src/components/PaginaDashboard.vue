<template>
  <div>
    <NavBar />
    <div class="dashboard">
     
      <div class="info-boxes">
        <TotalClientes />
        <TotalVentas />
        <ProductosEnStock />
      
      </div>
      <h2 style="margin-left:190px">Clientes</h2>
      <div class="table-container mt-3 custom-margin">
      <div class="table-responsive">
        <table class="table bg-light p-4 rounded shadow">
          <thead class="thead-dark">
  <tr>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">CI</th>
    <th scope="col">Correo</th>
    <th>Acciones</th>
  </tr>
</thead>
<tbody>
  <tr v-for="cliente in clientes" :key="cliente.id_cliente">
    <td>{{ cliente.nombre }}</td>
    <td>{{ cliente.apellido }}</td>
    <td>{{ cliente.ci }}</td>
    <td>{{ cliente.email }}</td>
    <td>
        <button class="btn btn-primary mr-2" @click="showEditModal(cliente)">Actualizar</button>
        <button class="btn btn-danger" @click="deleteCliente(cliente)">Eliminar</button>
    </td>
  </tr>
</tbody>

      </table>
    </div>  
    </div>
    </div>
  </div>

  <div class="modal fade" id="editClienteModal" tabindex="-1" aria-labelledby="editClienteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editClienteModalLabel">Editar Cliente</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="clienteNombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="clienteNombre" v-model="clienteSeleccionado.nombre" required>
            </div>
            <div class="mb-3">
              <label for="clienteApellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="clienteApellido" v-model="clienteSeleccionado.apellido" required>
            </div>
            <div class="mb-3">
              <label for="clienteDireccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="clienteDireccion" v-model="clienteSeleccionado.direccion" required>
            </div>
            <div class="mb-3">
              <label for="clienteTelefono" class="form-label">Teléfono</label>
              <input type="text" class="form-control" id="clienteTelefono" v-model="clienteSeleccionado.telefono" required>
            </div>
            <div class="mb-3">
              <label for="clienteEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="clienteEmail" v-model="clienteSeleccionado.email" required>
            </div>
            <div class="mb-3">
              <label for="clienteCi" class="form-label">CI</label>
              <input type="text" class="form-control" id="clienteCi" v-model="clienteSeleccionado.ci" required>
            </div>
            <div class="mb-3">
              <label for="clienteRazonSocial" class="form-label">Razón Social</label>
              <input type="text" class="form-control" id="clienteRazonSocial" v-model="clienteSeleccionado.razon_social" required>
            </div>
            <!-- Agrega aquí otros campos del cliente si es necesario -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" @click="updateCliente(clienteSeleccionado)">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  import TotalClientes from '@/components/TotalClientes.vue';
  import TotalVentas from '@/components/TotalVentas.vue';
  import ProductosEnStock from '@/components/ProductosEnStock.vue';
  import Swal from 'sweetalert2';
import { Modal } from 'bootstrap';
  export default {
    name: 'PaginaDashboard',
    data() {
      return {
        clientes: [], // etc.
        clienteSeleccionado: {},
      }
    },
    methods:{
      async deleteCliente(cliente) {
        try {
          await axios.delete(`http://localhost:3000/clientes/${cliente.id_cliente}`);
          this.clientes = this.clientes.filter(p => p.id_cliente !== cliente.id_cliente);
          Swal.fire({
            title: '¡Eliminado!',
            text: 'El cliente ha sido eliminado con éxito.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } catch (error) {
          console.error(error);
        }
      },
      showEditModal(cliente) {
      if (cliente) {
        this.clienteSeleccionado = { ...cliente };
        var myModal = new Modal(document.getElementById('editClienteModal'), { focus: true });
        myModal.show();
      }
    },
    async updateCliente(cliente) {
      try {
        // Asegúrate de manejar correctamente los valores nulos y de enviar al backend solo lo necesario
        const response = await axios.put(`http://localhost:3000/clientes/${cliente.id_cliente}`, cliente);

        // Actualizamos la lista
        const index = this.clientes.findIndex(p => p.id_cliente === cliente.id_cliente);
        this.clientes.splice(index, 1, response.data);

        Swal.fire({
          title: '¡Actualizado!',
          text: 'La información del cliente ha sido actualizada con éxito.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Recarga la página después de que el usuario presione "OK" en el SweetAlert.
          location.reload();
        });
      } catch (error) {
        console.error(error);

        Swal.fire({
          title: 'Error!',
          text: 'Hubo un error al actualizar la información del cliente.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    },
      
    },
    components: {
      NavBar,
      TotalClientes,
      TotalVentas,
      ProductosEnStock
      // etc.
    },
    created() {
  axios.all([
    axios.get('http://localhost:3000/clientes'),
    axios.get('http://localhost:3000/ventas')
  ])
  .then(axios.spread((clientesRes, ventasRes) => {
    this.clientes = clientesRes.data;

    let ventasPorCliente = ventasRes.data.reduce((count, venta) => {
      count[venta.Cliente_id_cliente] = (count[venta.Cliente_id_cliente] || 0) + 1;
      return count;
    }, {});

    this.clientes.forEach(cliente => {
      cliente.ventas = ventasPorCliente[cliente.id_cliente] || 0;
    });
  }))
  .catch(error => {
    console.log(error);
  });
}

  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }
  
  .info-boxes {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 80%;  /* Esto limitará el ancho de los info-boxes a un 80% del contenedor */
  margin: 0 auto;  /* Esto centrará el contenedor de info-boxes */
}
.custom-margin {
  margin-left: 300px;
}
.table-container{
  max-width:80%;
  margin:0 auto;
}
  </style>
  
