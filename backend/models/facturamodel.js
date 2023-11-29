import db from "../config/database.js";

// Get All Facturas
export const getFacturas = (result) => {
    db.query("SELECT * FROM factura", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Factura
export const getFacturaById = (id, result) => {
    db.query("SELECT * FROM factura WHERE id_factura = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Factura to Database
export const insertFactura = (data, result) => {
    db.query("INSERT INTO factura (fecha, monto, codigo_control, cliente_id_cliente) VALUES (?, ?, ?, ?)", [data.fecha, data.monto, data.codigo_control, data.cliente_id_cliente], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Factura in Database
export const updateFacturaById = (data, id, result) => {
    db.query("UPDATE factura SET fecha = ?, monto = ?, codigo_control = ?, total = ?, ci = ?, razon_social = ?, Cliente_id_cliente = ?, Ventas_id_venta = ? WHERE id_factura = ?", [data.fecha, data.monto, data.codigo_control, data.total, data.ci, data.razon_social, data.Cliente_id_cliente, data.Ventas_id_venta, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Factura from Database
export const deleteFacturaById = (id, result) => {
    db.query("DELETE FROM factura WHERE id_factura = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
