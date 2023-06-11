import express from "express";

import { showClientes, showClienteById, createCliente, updateCliente, deleteCliente } from "../controllers/cliente.js";
import { showVendedor } from "../controllers/vendedor.js";

import { showProductos, showProductoById, createProducto, updateProducto, deleteProducto } from "../controllers/producto.js";

import {showProveedores, showProveedorById, createProveedor, updateProveedor, deleteProveedor} from "../controllers/proveedor.js"

import {showDescuentos,showDescuentoById,createDescuento,updateDescuento,deleteDescuento} from "../controllers/descuentos.js"

import {showVentas,showVentaById,createVenta,updateVenta,deleteVenta} from "../controllers/venta.js"

import {showVentaProductos,createVentaProducto} from "../controllers/venta_producto.js"

import {showFacturas,showFacturaById,createFactura,updateFactura,deleteFactura} from "../controllers/factura.js"

const router = express.Router();


//rutas clientes
router.get('/clientes', showClientes);
router.get('/clientes/:id', showClienteById);
router.post('/clientes', createCliente);
router.put('/clientes/:id', updateCliente);
router.delete('/clientes/:id', deleteCliente);

//rutas vendedores
router.get('/vendedores', showVendedor);

//rutas productos
router.get('/productos', showProductos);
router.get('/productos/:id', showProductoById);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);

//rutas proveedor
router.get('/proveedores', showProveedores);
router.get('/proveedores/:id', showProveedorById);
router.post('/proveedores', createProveedor);
router.put('/proveedores/:id', updateProveedor);
router.delete('/proveedores/:id', deleteProveedor);

//rutas descuentos
router.get('/descuentos', showDescuentos);
router.get('/descuentos/:id', showDescuentoById);
router.post('/descuentos', createDescuento);
router.put('/descuentos/:id', updateDescuento);
router.delete('/descuentos/:id', deleteDescuento);

//rutas ventas
router.get('/ventas', showVentas);
router.get('/ventas/:id', showVentaById);
router.post('/ventas', createVenta);
router.put('/ventas/:id', updateVenta);
router.delete('/ventas/:id', deleteVenta);

//rutas ventaproducto
router.get('/venta_producto', showVentaProductos);
router.post('/venta_producto', createVentaProducto);

//rutas factura
router.get('/facturas', showFacturas);
router.get('/facturas/:id', showFacturaById);
router.post('/facturas', createFactura);
router.put('/facturas/:id', updateFactura);
router.delete('/facturas/:id', deleteFactura);

export default router;