import db from "../config/database.js";

// Get All Sales
export const getVentas = (result) => {
    db.query("SELECT * FROM ventas", (err, results) => {             
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
    db.query("SELECT * FROM ventas WHERE id_venta = ?", [id], (err, results) => {             
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
    db.query("INSERT INTO ventas (fecha, cantidad, total, MetodoPago, Cliente_id_cliente, vendedor_id_vendedor, descuentos_id_descuento) VALUES (?, ?, ?, ?, ?, ?, ?)", 
    [data.fecha, data.cantidad, data.total, data.MetodoPago, data.Cliente_id_cliente, data.vendedor_id_vendedor, data.descuentos_id_descuento], 
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
    db.query("UPDATE ventas SET fecha = ?, cantidad = ?, total = ?, MetodoPago = ?, productos_id_producto = ?, Cliente_id_cliente = ?, vendedor_id_vendedor = ?, factura_id_factura = ?, descuentos_id_descuento = ? WHERE id_venta = ?", 
    [data.fecha, data.cantidad, data.total, data.MetodoPago, data.productos_id_producto, data.Cliente_id_cliente, data.vendedor_id_vendedor, data.factura_id_factura, data.descuentos_id_descuento, id], 
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
    db.query("DELETE FROM ventas WHERE id_venta = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
