import db from "../config/database.js";

// Get All Categories
export const getCategorias = (result) => {
    db.query("SELECT * FROM categoria", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Provider
export const getCategoriaById = (id, result) => {
    db.query("SELECT * FROM categoria WHERE id_categoria = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}