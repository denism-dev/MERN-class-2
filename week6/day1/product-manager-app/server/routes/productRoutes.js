const express = require('express');
const router = express.Router()
const productController = require('../controllers/productControllers');

router.post('/api/newProduct', productController.createProduct);
router.post('/api/products', productController.createProduct);
router.put('/api/products/:id', productController.editProduct);
router.get('/api/products/:id', productController.getProductDetails);
router.get('/api/products', productController.getProductList);

module.exports = router;


