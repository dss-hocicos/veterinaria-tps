// Import function from Proveedor Model
import { getCategorias, getCategoriaById } from "../models/categoriamodel.js";

// Get All Categories
export const showCategoria = (req, res) => {
    getCategorias((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Category
export const showCategoriaById = (req, res) => {
    getCategoriaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

