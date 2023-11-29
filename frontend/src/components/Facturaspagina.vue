<template>
  <div class="container ">
    <h2 class="mb-4">Formulario de Facturación</h2>
    <form>
      <div class="mb-3">
        <label for="codigo_control" class="form-label">Código de Control</label>
        <input type="text" class="form-control" id="codigo_control" v-model="codigo_control">
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
import axios from 'axios';
import jsPDF from 'jspdf';

export default {
  name: 'FacturaRegistro',
  data() {
    return {
      fecha: '',
      monto: 0,
      codigo_control: '',
      total: 0,
      ci: '',
      razon_social: '',
      cliente_id_cliente: '',
      Ventas_id_venta: '',
    };
  },
  created() {
    const {
      fecha,
      monto,
      codigo_control,
      total,
      ci,
      razon_social,
      cliente_id_cliente,
      Ventas_id_venta,
    } = this.$route.query;

    // Utiliza los valores como necesites
    this.fecha = fecha;
    this.monto = monto;
    this.codigo_control = codigo_control;
    this.total = total;
    this.ci = ci;
    this.razon_social = razon_social;
    this.cliente_id_cliente = cliente_id_cliente;
    this.Ventas_id_venta = Ventas_id_venta;
  },
  methods: {
    generarFactura() {
      const nuevaFactura = {
        fecha: this.fecha,
        monto: this.monto,
        codigo_control: this.codigo_control,
        total: this.total,
        ci: this.ci,
        razon_social: this.razon_social,
        cliente_id_cliente: this.cliente_id_cliente,
        Ventas_id_venta: this.Ventas_id_venta,
      };

      axios
        .post('http://localhost:3000/facturas', nuevaFactura)
        .then(() => {
          // Generar el PDF
          const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text('Factura', doc.internal.pageSize.getWidth() / 2, 10, { align: 'center' });
      
      doc.setFontSize(12);
      doc.text('Veterinaria', doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });
      doc.text('-----------------------', doc.internal.pageSize.getWidth() / 2, 35, { align: 'center' });
      doc.text(`Fecha: ${nuevaFactura.fecha}`, 10, 50);
      doc.text(`Monto: ${nuevaFactura.monto}`, 10, 60);
      doc.text(`Código de Control: ${nuevaFactura.codigo_control}`, 10, 70);
      doc.text(`Total: ${nuevaFactura.total}`, 10, 80);
      doc.text(`CI: ${nuevaFactura.ci}`, 10, 90);
      doc.text(`Razón Social: ${nuevaFactura.razon_social}`, 10, 100);
      doc.text(`Venta: ${nuevaFactura.Ventas_id_venta}`, 10, 120);
      doc.save('factura.pdf');

      alert('Factura generada con éxito');
      this.$router.push({ path: '/Ventas' });
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>