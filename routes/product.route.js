const express = require("express");
const Product = require("../models/product.models.js");
const router = express.Router();
const { getProducts, getSingleProducts, createProducts, updateProducts, deleteProducts } = require("../controllers/product.controller.js")

// get all product
router.get('/', getProducts);
// get single product
router.get('/:id', getSingleProducts);
// create a product
router.post('/', createProducts)
// update a product
router.put('/:id', updateProducts);
// delete a product
router.delete('/:id', deleteProducts);

// export module
module.exports = router;