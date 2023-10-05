const { Address } = require("../models/AddressModel");


exports.fetchAddressByUser=async(req,res)=>{
    const {user}= req.query;
    console.log("addresscontro",user)
    try {
        const addressByUserId= await Address.find({user:user})
        console.log("addresscontro",addressByUserId)
        res.status(200).json(addressByUserId)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

exports.addToAddress=async(req,res)=>{
    const address= new Address(req.body)
    console.log({address})
    try {
        const doc= await address.save()
        res.status(201).json(doc)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

// exports.updateCart=async(req,res)=>{
//     const {id}= req.params;
//     try {
//         const cart= await Cart.findByIdAndUpdate(id, req.body,{
//             new:true
//         })
//         const result= await cart.populate('product')
//         res.status(200).json(result);
        
//     } catch (error) {
//         res.status(400).json(error);   
//     }
// }

exports.deleteFromUserAddress=async(req,res)=>{
    const { id } = req.params;
    try {
        const doc= await Address.findByIdAndDelete(id)
        res.status(201).json(doc);
        
    } catch (error) {
        res.status(400).json(error);
        
    }
}