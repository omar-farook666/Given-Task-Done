const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName: {
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
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  recommendations: {
    type: Number,
    required: true,
  },
  colors: [
      {
        type: String,
        required: true,
      }
  ],
  sizes: [
    {
        type: String,
        required: true,
    }
  ],
  images:[
    {
      original:{
        type: String,
      },
      thumbnail:{
        type: String,
      }
    }
  ],
  description:{
    type: String,
    required: true,
  },
  benefits:[
    {
        type: String,
    }
  ],
  details:[
    {
        type: String,
    }
  ],
  moreDetails:[
    {
        type:String
    }
  ]
});

const Product = new mongoose.model("Product",productSchema);
module.exports = Product;