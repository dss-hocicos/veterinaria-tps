// Import function from Discount Model
import { getDescuentos, getDescuentoById, insertDescuento, updateDescuentoById, deleteDescuentoById } from "../models/descuentosmodel.js";

// Get All Discounts
export const showDescuentos = (req, res) => {
    getDescuentos((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Discount
export const showDescuentoById = (req, res) => {
    getDescuentoById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Discount
export const createDescuento = (req, res) => {
    const data = req.body;
    insertDescuento(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Discount
export const updateDescuento = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateDescuentoById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Discount
export const deleteDescuento = (req, res) => {
    const id = req.params.id;
    deleteDescuentoById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
