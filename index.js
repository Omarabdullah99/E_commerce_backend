const express = require('express')
const server= express()
const mongoose= require('mongoose')
const cors= require('cors')

const crypto = require('crypto')


const productRouter= require('./routes/ProductRoute')
const brandsRouter= require('./routes/BrandsRoute')
const categoriesRouter= require('./routes/CategoriesRoute')
const userRouter= require('./routes/UserRoute')
const authRouter= require('./routes/AuthRoute')
const cartRouter= require('./routes/CartRoute')
const orderRouter=require('./routes/OrderRoute');
const AddressRouter= require('./routes/AddressRoute')
const { User } = require('./models/UserModel');

//middleware
server.use(cors({
  exposedHeaders:['X-Total-Count']
}))
server.use(express.json()) //to parse req.body

//router
server.use('/products', productRouter.router)
server.use('/brands', brandsRouter.router)
server.use('/category', categoriesRouter.router)
server.use('/users', userRouter.router)
server.use('/auth', authRouter.router) 
server.use('/cart', cartRouter.router)
server.use('/orders', orderRouter.router)
server.use('/address',AddressRouter.router)


const MONDODB_URL="mongodb+srv://moviedekha42:iOdAZHj1yzazu7nK@e-commercedosto.mfysbmv.mongodb.net/?retryWrites=true&w=majority"
main().catch(err => console.log(err))

  async function main(){
    await mongoose.connect(MONDODB_URL);
    console.log('databse connected')
  }

server.get('/',(req,res)=>{
    res.json({status:'success'})
})


server.listen(8081,()=>{
    console.log('server go')
})