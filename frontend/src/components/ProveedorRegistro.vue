<template>
    <NavBar />
    <div class="container">
        <h1 class="my-4">Registro de Proveedores</h1>

        <button class="btn btn-primary mb-4" @click="showAddModal">Agregar Proveedor</button>

        <table class="table bg-light p-4 rounded shadow">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="proveedor in proveedores" :key="proveedor.id_proveedor">
                    <td>{{ proveedor.id_proveedor }}</td>
                    <td>{{ proveedor.nombre }}</td>
                    <td>{{ proveedor.direccion }}</td>
                    <td>{{ proveedor.telefono }}</td>
                    <td>{{ proveedor.email }}</td>
                    <td>
                        <button class="btn btn-danger" @click="deleteProvider(proveedor)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add Provider Modal -->
        <div class="modal fade" id="addProviderModal" tabindex="-1" aria-labelledby="addProviderModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addProviderModalLabel">Agregar Proveedor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addProvider">
                            <div class="mb-3">
                                <label for="providerName" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="providerName" v-model="newProvider.nombre" required>
                            </div>
                            <div class="mb-3">
                                <label for="providerAddress" class="form-label">Dirección</label>
                                <input type="text" class="form-control" id="providerAddress" v-model="newProvider.direccion" required>
                            </div>
                            <div class="mb-3">
                                <label for="providerPhone" class="form-label">Teléfono</label>
                                <input type="text" class="form-control" id="providerPhone" v-model="newProvider.telefono" required>
                            </div>
                            <div class="mb-3">
                                <label for="providerEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="providerEmail" v-model="newProvider.email" required>
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
    name: 'ProveedorRegistro',
    data() {
        return {
            proveedores: [],
            newProvider: {
                nombre: '',
                direccion: '',
                telefono: '',
                email: '',
            },
        };
    },
    methods: {
        async getProviders() {
            try {
                const response = await axios.get('http://localhost:3000/proveedores');
                this.proveedores = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        showAddModal() {
            var myModal = new Modal(document.getElementById('addProviderModal'), {focus: true})
            myModal.show();
        },
        async addProvider() {
            try {
                const response = await axios.post('http://localhost:3000/proveedores', this.newProvider);
                this.proveedores.push(response.data);
                Swal.fire({
                    title: '¡Agregado!',
                    text: 'El proveedor ha sido agregado con éxito.',
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
        async deleteProvider(proveedor) {
            try {
                await axios.delete(`http://localhost:3000/proveedores/${proveedor.id_proveedor}`);
                this.proveedores = this.proveedores.filter(p => p.id_proveedor !== proveedor.id_proveedor);
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El proveedor ha sido eliminado con éxito.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.getProviders();
    },
    components: {
      NavBar
    }
};
</script>

<style scoped>
/* Agrega aquí tus estilos */
</style>
