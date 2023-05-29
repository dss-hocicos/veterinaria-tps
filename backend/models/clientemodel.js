import db from "../config/database.js";

// Get All Clients
export const getClientes = (result) => {
    db.query("SELECT * FROM cliente", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Client
export const getClienteById = (id, result) => {
    db.query("SELECT * FROM cliente WHERE id_cliente = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Client to Database
export const insertCliente = (data, result) => {
    db.query("INSERT INTO cliente (nombre, apellido, direccion, telefono, email, ci, razon_social) VALUES (?, ?, ?, ?, ?, ?, ?)", [data.nombre, data.apellido, data.direccion, data.telefono, data.email, data.ci, data.razon_social], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

  
// Update Client in Database
export const updateClienteById = (data, id, result) => {
    db.query("UPDATE cliente SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, email = ?, ci = ?, razon_social = ? WHERE id_cliente = ?", [data.nombre, data.apellido, data.direccion, data.telefono, data.email, data.ci, data.razon_social, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Client from Database
export const deleteClienteById = (id, result) => {
    db.query("DELETE FROM cliente WHERE id_cliente = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
