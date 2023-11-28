import db from "../config/database.js";

// Get All Providers
export const getProveedores = (result) => {
    db.query("SELECT * FROM proveedor", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Provider
export const getProveedorById = (id, result) => {
    db.query("SELECT * FROM proveedor WHERE id_proveedor = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Provider to Database
export const insertProveedor = (data, result) => {
    db.query("INSERT INTO proveedor (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)", [data.nombre, data.direccion, data.telefono, data.email], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Update Provider in Database
export const updateProveedorById = (data, id, result) => {
    db.query("UPDATE proveedor SET nombre = ?, direccion = ?, telefono = ?, email = ? WHERE id_proveedor = ?", [data.nombre, data.direccion, data.telefono, data.email, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Provider from Database
export const deleteProveedorById = (id, result) => {
    db.query("DELETE FROM proveedor WHERE id_proveedor = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
