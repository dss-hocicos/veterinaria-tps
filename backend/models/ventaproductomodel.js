import db from "../config/database.js";

export const getVentaProductos = (result) => {
    db.query("SELECT * FROM venta_producto", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const addVentaProducto = (data, result) => {
    db.query("INSERT INTO venta_producto SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
