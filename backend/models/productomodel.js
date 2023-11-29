import db from "../config/database.js";

// Get All Products
export const getProductos = (result) => {
    db.query("SELECT * FROM producto", (err, results) => {             
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
    db.query("SELECT * FROM producto WHERE id_producto = ?", [id], (err, results) => {             
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
    db.query("INSERT INTO producto (nombre, precio, descripcion, unidades,costo, categoria_id_categoria ,proveedor_id_proveedor) VALUES (?, ?, ?, ?, ?, ?, ?)", [data.nombre, data.precio, data.descripcion, data.Unidades, data.costo, data.categoria_id_categoria,data.proveedor_id_proveedor], (err, results) => {
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
    db.query("UPDATE producto SET nombre = ?, precio = ?, descripcion = ?, unidades = ?,costo = ?, categoria_id_categoria = ?,proveedor_id_proveedor = ? WHERE id_producto = ?", [data.nombre, data.precio, data.descripcion, data.unidades,data.costo, data.categoria_id_categoria,data.proveedor_id_proveedor, id], (err, results) => {             
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
    db.query("DELETE FROM producto WHERE id_producto = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
