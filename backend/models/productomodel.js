import db from "../config/database.js";

// Get All Products
export const getProductos = (result) => {
    db.query("SELECT * FROM productos", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Product
export const getProductoById = (id, result) => {
    db.query("SELECT * FROM productos WHERE id_producto = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Database
export const insertProducto = (data, result) => {
    db.query("INSERT INTO productos (nombre, precio, descripcion, Unidades, proveedores_id_proveedor) VALUES (?, ?, ?, ?, ?)", [data.nombre, data.precio, data.descripcion, data.Unidades, data.proveedores_id_proveedor], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Update Product in Database
export const updateProductoById = (data, id, result) => {
    db.query("UPDATE productos SET nombre = ?, precio = ?, descripcion = ?, Unidades = ?, proveedores_id_proveedor = ? WHERE id_producto = ?", [data.nombre, data.precio, data.descripcion, data.Unidades, data.proveedores_id_proveedor, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Product from Database
export const deleteProductoById = (id, result) => {
    db.query("DELETE FROM productos WHERE id_producto = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
