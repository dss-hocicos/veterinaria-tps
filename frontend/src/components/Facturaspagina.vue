<template>
    <div class="container mt-5">
      <h2 class="mb-4">Formulario de Facturación</h2>
      <form>
        <div class="mb-3">
          <label for="fecha" class="form-label">Fecha</label>
          <input type="date" class="form-control" id="fecha" v-model="fecha">
        </div>
        <div class="mb-3">
          <label for="monto" class="form-label">Monto</label>
          <input type="number" class="form-control" id="monto" v-model="monto">
        </div>
        <div class="mb-3">
          <label for="codigo_control" class="form-label">Código de Control</label>
          <input type="text" class="form-control" id="codigo_control" v-model="codigo_control">
        </div>
        <div class="mb-3">
          <label for="total" class="form-label">Total</label>
          <input type="number" class="form-control" id="total" v-model="total">
        </div>
        <div class="mb-3">
          <label for="ci" class="form-label">CI</label>
          <input type="text" class="form-control" id="ci" v-model="ci">
        </div>
        <div class="mb-3">
          <label for="razon_social" class="form-label">Razón Social</label>
          <input type="text" class="form-control" id="razon_social" v-model="razon_social">
        </div>
        <button type="button" class="btn btn-primary" @click="generarFactura">
          <i class="fas fa-file-pdf"></i> Generar Factura
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FacturaRegistro',
    data() {
      return {
        fecha: '',
        monto: 0,
        codigo_control: '',
        total: 0,
        ci: '',
        razon_social: ''
      }
    },
    methods: {
      generarFactura() {
        // Aquí iría la lógica para generar la factura
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  