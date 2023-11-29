<template>
  <div style="height: 100vh; overflow-y: auto;"> 
  <NavBar/>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center my-4">
        <h1>Registro de Ventas</h1>
        <button class="btn btn-secondary" @click="goToVentas">Ver lista de ventas</button>
      </div>

    <form @submit.prevent="submitVenta" class="bg-light p-4 rounded shadow">
        <!-- Fecha de venta -->
        <div class="mb-3">
        <label for="fecha" class="form-label">Fecha de venta:</label>
        <input type="date" class="form-control" id="fecha" v-model="newVenta.fecha" required>
      </div>
      <!-- Seleccionar cliente -->
      <div class="mb-3">
  <label for="cliente" class="form-label">Cliente:</label>
  <select class="form-select" id="cliente" v-model="newVenta.Cliente_id_cliente">
    <option value="">-- Por favor seleccione --</option>
    <option v-for="cliente in clientes" :key="cliente.id_cliente" :value="cliente.id_cliente">
      {{ cliente.nombre }} {{ cliente.apellido }}
    </option>
  </select>
</div>  

      <!-- Seleccionar vendedor -->
      <div class="mb-3">
  <label for="vendedor" class="form-label">Vendedor:</label>
  <select class="form-select" id="vendedor" v-model="newVenta.vendedor_id_vendedor">
    <option value="">-- Por favor seleccione --</option>
    <option v-for="vendedor in vendedores" :key="vendedor.id_vendedor" :value="vendedor.id_vendedor">
      {{ vendedor.usuario }}
    </option>
  </select>
</div>

<div class="mb-3">
<label for="descuento" class="form-label">Descuento:</label>
<select class="form-select" id="descuento" v-model="newVenta.descuentos_id_descuento">
  <option value="">-- Por favor seleccione --</option>
  <option v-for="descuento in descuentos" :key="descuento.id_descuento" :value="descuento.id_descuento">
    {{ getProductName(descuento.productos_id_producto) }} - {{ descuento.nombre }} - {{ descuento.porcentaje }}%
  </option>
</select>
</div>

      <!-- Método de pago -->
      <div class="mb-3">
  <label for="metodoPago" class="form-label">Método de pago:</label>
  <select class="form-select" id="metodoPago" v-model="newVenta.MetodoPago" required>
    <option value="">-- Por favor seleccione --</option>
    <option value="Tarjeta de crédito">Tarjeta de crédito</option>
    <option value="Débito">Débito</option>
    <option value="Efectivo">Efectivo</option>
  </select>
</div>


      <!-- Tabla de productos a vender -->
      <h2 class="mt-4 text-center">Productos a vender</h2>
      <table class="table table-bordered table-hover">
  <thead class="table-light">
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Precio (Después de Descuento)</th>
      <th>Descuento</th>
      <th>Cantidad</th>
      <th>Subtotal</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in itemsVenta" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.nombre }}</td>
      <td>{{ item.precio }}</td>
      <td>{{ item.descuento }}%</td>
      <td>{{ item.cantidad }}</td>
      <td>{{ item.subtotal }}</td>
      <td>
        <button class="btn btn-danger" @click="removeItemVenta(index)">Eliminar</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="5">Total:</td>
      <td>{{ totalVenta }}</td>
    </tr>
  </tfoot>
</table>

      <!-- Agregar producto a la venta -->
<div class="mb-3">
  <label for="producto" class="form-label">Producto:</label>
  <select class="form-select" id="producto" v-model="productoSeleccionado">
    <option value="">-- Por favor seleccione --</option>
    <option v-for="producto in productos" :key="producto.id_producto" :value="producto.id_producto">
      {{ producto.nombre }}
    </option>
  </select>
</div>
      <div class="mb-3">
        <label for="cantidadProducto" class="form-label">Cantidad:</label>
        <input type="number" class="form-control" id="cantidadProducto" v-model="cantidadProducto" min="1">
      </div>
      <button class="btn btn-primary mb-4" @click.prevent="addItemVenta">Agregar producto</button>

      <div class="mb-3"></div>

      <button type="submit" class="btn btn-success">Realizar venta</button>
    </form>
  </div>
  </div>
</template>

  
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  export default {
    name: 'VentaRegistro',
    data() {
      return {
        newVenta: {
          fecha: '',
          total: 0,
          MetodoPago: '',
          productos_id_producto: '',
          Cliente_id_cliente: '',  // valor inicial vacío
        vendedor_id_vendedor: '',  // valor inicial vacío
        descuentos_id_descuento: '',  // valor inicial vacío
       
        },
        productos: [],
        clientes: [],
        vendedores: [],
        descuentos: [],
        itemsVenta: [],
        productoSeleccionado: null,
        cantidadProducto: 1,
      };
    },
    methods: {
  async loadProductos() {
    try {
      const response = await axios.get('http://localhost:3000/productos');
      console.log(response.data);
      this.productos = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getProductName(productoId) {
    const producto = this.productos.find(p => p.id_producto === productoId);
    return producto ? producto.nombre : 'Producto no encontrado';
  },
  async loadClientes() {
    try {
      const response = await axios.get('http://localhost:3000/clientes');
      this.clientes = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async loadVendedores() {
    try {
      const response = await axios.get('http://localhost:3000/vendedores');
      this.vendedores = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  goToVentas() {
      this.$router.push('/tablas');  // Asume que el path a tu vista de lista de ventas es '/ventas'
    },
  async loadDescuentos() {
    try {
      const response = await axios.get('http://localhost:3000/descuentos');
      this.descuentos = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  addItemVenta() {
  const producto = this.productos.find(p => p.id_producto === this.productoSeleccionado);
  
  // Busca el descuento para el producto seleccionado
  const descuento = this.descuentos.find(d => d.productos_id_producto === producto.id_producto);

  if (!producto) {
    console.error(`No se encontró el producto con ID ${this.productoSeleccionado}`);
    return;
  }

  // Aplicar descuento al producto si existe
  let precio = producto.precio;
  if (descuento) {
    precio = precio * (1 - descuento.porcentaje / 100);
  }

  // Agrega el producto a la lista de items a vender
  this.itemsVenta.push({
    id: producto.id_producto,
    nombre: producto.nombre,
    precio,
    cantidad: this.cantidadProducto,
    subtotal: this.cantidadProducto * precio,
    descuento: descuento ? descuento.porcentaje : 0,
  });

  // Resetea los valores seleccionados
  this.productoSeleccionado = '';
  this.cantidadProducto = 1;
  window.scrollTo(0,document.body.scrollHeight);
},

  removeItemVenta(index) {
    this.itemsVenta.splice(index, 1);
  },
  async submitVenta() {
  try {
    // Calcula la cantidad total y el precio total de la venta
    const cantidadTotal = this.itemsVenta.reduce((total, item) => total + item.cantidad, 0);
    const total = this.itemsVenta.reduce((total, item) => total + item.subtotal, 0);

    const newVenta = {
      ...this.newVenta,
      cantidad: cantidadTotal,
      total,
    };

    
    // Realizar la venta a través de la API
    const response = await axios.post('http://localhost:3000/ventas', newVenta);

    // Obtén la id de la nueva venta
    const ventaId = response.data.insertId;
  // Asigna el valor correcto a 'Cliente_id_cliente'
  const Cliente_id_cliente = this.newVenta.Cliente_id_cliente;
    // Para cada producto en la venta, crea un nuevo registro en la tabla venta_producto
    for (const item of this.itemsVenta) {
      const ventaProducto = {
        venta_id: ventaId, // corregido
        producto_id: item.id, // corregido
        cantidad: item.cantidad,
        descuento: item.descuento,
        subtotal: item.subtotal,

      };
      await this.updateInventory(item.id, item.cantidad);
      await axios.post('http://localhost:3000/venta_producto', ventaProducto);
    }

    // Limpia los datos de la venta
    this.newVenta = {
      MetodoPago: '',
      Cliente_id_cliente: '',
      vendedor_id_vendedor: '',
    };
    this.itemsVenta = [];

    this.$swal('Venta realizada!', 'la venta se realizo con exito!', 'success');
    this.$router.push({
      path: '/Facturas',
      query: {
        fecha: newVenta.fecha,
        monto: total,  // Utiliza la variable 'total' calculada anteriormente
        codigo_control: this.newVenta.codigo_control,
        total: total,  // Utiliza la variable 'total' calculada anteriormente
        ci: this.newVenta.ci,
        razon_social: this.newVenta.razon_social,
        Cliente_id_cliente: Cliente_id_cliente,  // Utiliza el valor asignado anteriormente
        Ventas_id_venta: ventaId,  // Utiliza la id de la nueva venta
      },
    });
  } catch (error) {
    console.error(error);
  }
},

async updateInventory(productId, soldQuantity) {
    try {
      // Recuperar la información actual del producto
      const response = await axios.get(`http://localhost:3000/productos/${productId}`);
      const product = response.data;

      // Comprobar si la cantidad vendida excede la cantidad en inventario
      if (soldQuantity > product.cantidad) {
        throw new Error(`La cantidad vendida (${soldQuantity}) excede la cantidad en inventario (${product.cantidad}) para el producto con id ${productId}`);
      }

      // Calcular la nueva cantidad en stock
      const newQuantity = product.Unidades - soldQuantity;

      // Actualizar la cantidad en stock
      await axios.put(`http://localhost:3000/productos/${productId}`, {
        ...product,
        Unidades: newQuantity
      });
    } catch (error) {
      console.error(error);
    }
  },

},
created() {
  this.loadProductos();
  this.loadClientes();
  this.loadVendedores();
  this.loadDescuentos();
},
    components: {
    NavBar
  },
  computed:{
    totalVenta() {
    return this.itemsVenta.reduce((total, item) => total + item.subtotal, 0);
  },
  }
  };
  </script>
