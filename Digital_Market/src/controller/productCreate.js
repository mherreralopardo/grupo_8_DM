const { validationResult } = require("express-validator");
const products = require("../database/products");
const { appendFile } = require("fs");
const path = require("path")

const crearProducto = (req, res) => {
    const error = validationResult(req);
    
    if (error.isEmpty()) {
JSON.stringify(req.body)
fs.appendFile( "/database/products.json", req.body, callback )

        res.send("Producto creado con éito");
    
    } else {
        res.send("error, no se pudo guardar" + error);
    }
};

module.exports = {
    crearProducto,
}