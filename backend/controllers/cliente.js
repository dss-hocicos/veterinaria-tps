// Import function from Client Model
import { getClientes, getClienteById, insertCliente, updateClienteById, deleteClienteById } from "../models/clientemodel.js";
  
// Get All Clients
export const showClientes = (req, res) => {
    getClientes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Client 
export const showClienteById = (req, res) => {
    getClienteById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Client
export const createCliente = (req, res) => {
    const data = req.body;
    insertCliente(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Client
export const updateCliente = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateClienteById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Client
export const deleteCliente = (req, res) => {
    const id = req.params.id;
    deleteClienteById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
