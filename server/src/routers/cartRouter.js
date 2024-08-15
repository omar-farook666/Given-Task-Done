const express = require('express');
const CartProduct = require('../models/cart');  // Import your Mongoose model
const router = express.Router();

// POST route to save cart items
router.post('/cart', async (req, res) => {
    const {cart} = req.body

  try{
    const newCart = new CartProduct({orders:cart});  // Destructure the cart array from the request body
    console.log(newCart)
    console.log("hiiii")
    responseCart = await newCart.save()
    res.status(201).json({ message: 'Cart items saved successfully' });
  }catch (error) {
    console.error('Error saving cart items:', error);
    res.status(500).json({ message: 'Failed to save cart items' });
  }
});

module.exports = router;