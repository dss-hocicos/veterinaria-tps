import { getVentaProductos, addVentaProducto } from '../models/ventaproductomodel.js';

export const showVentaProductos = (req, res) => {
    getVentaProductos((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createVentaProducto = (req, res) => {
    const data = req.body;
    addVentaProducto(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
