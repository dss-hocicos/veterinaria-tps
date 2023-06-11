import { getVentas, getVentaById, insertVenta, updateVentaById, deleteVentaById } from "../models/ventamodel.js";

// Get All Sales
export const showVentas = (req, res) => {
    getVentas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Sale
export const showVentaById = (req, res) => {
    getVentaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Sale
export const createVenta = (req, res) => {
    const data = req.body;
    insertVenta(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Sale
export const updateVenta = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateVentaById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Sale
export const deleteVenta = (req, res) => {
    const id = req.params.id;
    deleteVentaById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
