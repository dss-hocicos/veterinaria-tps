// Import function from Factura Model
import { getFacturas, getFacturaById, insertFactura, updateFacturaById, deleteFacturaById } from "../models/facturamodel.js";

// Get All Facturas
export const showFacturas = (req, res) => {
    getFacturas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Factura 
export const showFacturaById = (req, res) => {
    getFacturaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Factura
export const createFactura = (req, res) => {
    const data = req.body;
    insertFactura(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Update Factura
export const updateFactura = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateFacturaById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Factura
export const deleteFactura = (req, res) => {
    const id = req.params.id;
    deleteFacturaById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
