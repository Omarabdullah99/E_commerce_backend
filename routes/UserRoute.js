const express= require('express')
const { updateUser, fetchUserById } = require('../controller/UserController')

const router= express.Router()

router.patch('/:id',updateUser)
router.get('/:id', fetchUserById)

exports.router= router
