import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products: [
        {
            product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
            quantity: {type: Number, required: true}
        }
    ],
    total: {type: Number, required: true}
})

module.exports =  models.Order || model('Order', orderSchema)