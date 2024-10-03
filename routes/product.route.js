// Inisialisasi express JS
const express = require("express");
// Import model
const Product = require("../models/product.model.js");
// inisialisasi route
const router = express.Router();
// Import controller 
const {getProducts, getProduct, createProduct, updatedProduct, deleteProduct} = require('../controllers/product.controller.js');

// Memanggil controller yang ada pada route
router.get('/', getProducts);

// Memanggil hanya 1 data 
router.get("/:id", getProduct);

// Menampilkan data 
router.post("/", createProduct);

// Update product 
router.put("/:id", updatedProduct);

// Delete product
router.delete("/:id", deleteProduct);


// Export routes
module.exports = router;