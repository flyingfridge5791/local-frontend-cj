const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

router.get('/', productModel.getAllProducts);
router.get('/:id', productModel.getOneProduct);

router.post('/new' , auth.verifyToken , productModel.createProduct );

router.patch('/:id' , auth.verifyToken , productModel.updateProduct );

router.delete('/:id' , auth.verifyToken , productModel.deleteProduct );

module.exports = router;