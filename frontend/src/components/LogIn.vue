<template>
  <section class="vh-100 d-flex align-items-center justify-content-center" :style="{ backgroundImage: 'url(' + require('@/assets/login.png') + ')' }">
      <div class="container bg-light p-4 rounded" style="max-width: 400px;"> <!-- He modificado la clase .container para reducir el tamaño del cuadro de inicio de sesión -->
          <div class="row">
              <div class="col-md-12"> <!-- Cambiado a 12 para que ocupe todo el ancho disponible -->
                  <h2 class="text-center text-primary mb-4">Iniciar sesión</h2>
                  <div class="card">
                      <div class="card-body">
                          <form class="login-form" @submit.prevent="submitForm">
                              <div class="mb-3">
                                  <label for="username" class="form-label">Usuario:</label> <!-- Ahora es Usuario en lugar de Correo electrónico -->
                                  <input type="text" id="username" name="username" v-model="usuario" required class="form-control"> <!-- Ahora es de tipo "text" en lugar de "email" -->
                              </div>
                              <div class="mb-3">
                                  <label for="password" class="form-label">Contraseña:</label>
                                  <input type="password" id="password" name="password" v-model="password" required class="form-control">
                              </div>
                              <div class="d-grid gap-2">
                                  <button type="submit" class="btn btn-primary">Ingresar</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
      return {
          usuario: '',  // Ahora es username en lugar de email
          password: ''
      }
  },
  methods: {
    async submitForm() {
    try {
      const response = await axios.get('http://localhost:3000/vendedores');
      const vendedores = response.data;

      const usuario = this.usuario;
      const usuarioEncontrado = vendedores.find(vendedor => vendedor.usuario === usuario);
        console.log(usuarioEncontrado);
      if (usuarioEncontrado && usuarioEncontrado.password === this.password) {
        // Las credenciales son correctas
        sessionStorage.setItem('name', this.usuario)

        this.$router.push('/PaginaDashboard')
      } else {
        alert('Credenciales incorrectas')
      }
    } catch (error) {
      console.error('Error al obtener los vendedores:', error);
    }
  }
  }
}
</script>

<style scoped>
section {
  background-size: cover;
  background-position: center;
}
.container {
  background: rgba(255, 255, 255, 0.8);
}
</style>
