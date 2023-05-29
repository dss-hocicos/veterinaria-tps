import { getVendedor } from "../models/vendedormodel.js";

export const showVendedor = (req, res) => {
    getVendedor((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}