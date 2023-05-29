// Import function from Product Model
import { getProductos, getProductoById, insertProducto, updateProductoById, deleteProductoById } from "../models/productomodel.js";

// Get All Products
export const showProductos = (req, res) => {
    getProductos((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Product 
export const showProductoById = (req, res) => {
    getProductoById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Product
export const createProducto = (req, res) => {
    const data = req.body;
    insertProducto(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Update Product
export const updateProducto = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductoById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Product
export const deleteProducto = (req, res) => {
    const id = req.params.id;
    deleteProductoById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
