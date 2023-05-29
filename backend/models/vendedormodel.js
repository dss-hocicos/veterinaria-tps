import db from "../config/database.js";

export const getVendedor = (result) => {
    db.query("SELECT * FROM vendedor", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}