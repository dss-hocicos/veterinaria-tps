// Import function from Proveedor Model
import { getProveedores, getProveedorById, insertProveedor, updateProveedorById, deleteProveedorById } from "../models/proveedormodel.js";

// Get All Providers
export const showProveedores = (req, res) => {
    getProveedores((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Provider 
export const showProveedorById = (req, res) => {
    getProveedorById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Provider
export const createProveedor = (req, res) => {
    const data = req.body;
    insertProveedor(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Update Provider
export const updateProveedor = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProveedorById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Provider
export const deleteProveedor = (req, res) => {
    const id = req.params.id;
    deleteProveedorById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
