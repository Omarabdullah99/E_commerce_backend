const express= require('express')
const { addToAddress, fetchAddressByUser, deleteFromUserAddress } = require('../controller/AddressController')
const router= express.Router()

router.delete('/:id',deleteFromUserAddress)
router.post('/',addToAddress)
router.get('/',fetchAddressByUser)

exports.router=router