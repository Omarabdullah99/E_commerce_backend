const express= require('express')
const { addToCart, fetchCartByUser, updateCart, deleteFromCart } = require('../controller/CartController')

const router= express.Router()

router.patch('/:id',updateCart)
router.delete('/:id',deleteFromCart)
router.post('/',addToCart)
router.get('/',fetchCartByUser)

exports.router= router