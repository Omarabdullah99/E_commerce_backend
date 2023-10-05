const express= require('express')
const { createOrder, fetchOrdersByUser, updateOrder, deleteOrder, fetchAllOrders } = require('../controller/OrderController')

const router=express.Router()

router.patch('/:id',updateOrder)
router.delete('/:id',deleteOrder)
router.post('/',createOrder)
router.get('/user/:userId',fetchOrdersByUser)
router.get('/',fetchAllOrders)

exports.router= router