const mongoose= require('mongoose')
const {Schema}= mongoose

const AddressSchema= new Schema({
    fullname: { type :String, required: true},
    email: { type :String, required: true},
    phone: { type :String, required: true},
    district: { type :String, required: true},
    streetaddress: { type :String, required: true},
    city: { type :String, required: true},
    area: { type :String, required: true},
    pinCode: { type :String, required: true},
    user:{ type: Schema.Types.ObjectId, ref: 'User', required: true}
})

const virtual  = AddressSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
AddressSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})

exports.Address= mongoose.model('Address',AddressSchema)