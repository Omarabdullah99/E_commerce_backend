const express= require('express')
const { fetchCategories, createCategories } = require('../controller/CategoryController')

const router= express.Router()

router.get('/', fetchCategories)
router.post('/',createCategories)

exports.router= router