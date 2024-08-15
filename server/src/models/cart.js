const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    orders:[
        {
            name: {
                type: String,
                required: true,
              },
              shortDescription: {
                type: String,
                required: true,
              },
              price: {
                type: Number,
                required: true,
              },
              curColor:
                  {
                    type: String,
                    required: true,
                  },
              curSize: {
                    type: String,
                    required: true,
              },
                amount:{
                    type:Number,
                    required: true
                }
        }
    ]
});

const Cart = new mongoose.model("Cart",cartSchema);
module.exports = Cart;