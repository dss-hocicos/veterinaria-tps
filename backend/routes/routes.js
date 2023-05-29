import express from "express";

import { showClientes, showClienteById, createCliente, updateCliente, deleteCliente } from "../controllers/cliente.js";
import { showVendedor } from "../controllers/vendedor.js";

import { showProductos, showProductoById, createProducto, updateProducto, deleteProducto } from "../controllers/producto.js";

import {showProveedores, showProveedorById, createProveedor, updateProveedor, deleteProveedor} from "../controllers/proveedor.js"
 
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
router.put('proveedores/:id', updateProveedor);
router.delete('proveedores/:id', deleteProveedor);

export default router;