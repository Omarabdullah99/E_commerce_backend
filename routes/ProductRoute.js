const express= require('express')
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/ProductController')

const router= express.Router()
//*Create Product
router.patch('/:id',updateProduct)
router.get('/:id',fetchProductById)
router.post('/',createProduct)
router.get('/',fetchAllProducts)

exports.router= router
