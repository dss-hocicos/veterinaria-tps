import db from "../config/database.js";

// Get All Sales
export const getVentas = (result) => {
    db.query("SELECT * FROM venta", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Sale
export const getVentaById = (id, result) => {
    db.query("SELECT * FROM venta WHERE id_venta = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Sale to Database
export const insertVenta = (data, result) => {
    db.query("INSERT INTO venta (fecha, cantidad, metodo_pago, total, factura_id_factura, vendedor_id_vendedor, producto_id_producto, descuento_producto_id_descuento_producto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
    [data.fecha, data.cantidad, data.metodo_pago, data.total, data.factura_id_factura, data.vendedor_id_vendedor, data.producto_id_producto, data.descuento_producto_id_descuento_producto], 
    (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Sale in Database
export const updateVentaById = (data, id, result) => {
    db.query("UPDATE venta SET fecha = ?, cantidad = ?, metodo_pago = ?, total = ?, factura_id_factura = ?, vendedor_id_vendedor = ?, producto_id_producto = ?, descuento_producto_id_descuento_producto = ? WHERE id_venta = ?", 
    [data.fecha, data.cantidad, data.metodo_pago,data.total, data.factura_id_factura, data.vendedor_id_vendedor, data.producto_id_producto, data.descuento_producto_id_descuento_producto, id], 
    (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Sale from Database
export const deleteVentaById = (id, result) => {
    db.query("DELETE FROM venta WHERE id_venta = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
