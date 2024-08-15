const express = require('express');
const router = new express.Router();
const Product = require('../models/product');
const Cart = require("../models/cart")


router.post("/product", async(req,res)=>{
    try{
        const addProduct = new Product(req.body)
        console.log(req.body)
        responseProduct = await addProduct.save()
        res.status(201).send(responseProduct)
    }catch(e){
        res.status(404).send(e)
        console.log(e)
    }
})

router.get("/product",async(req,res)=>{
    try{
        const getProduct = await Product.find({})
        res.send(getProduct)
    }catch(e){
        res.status(404).send(e)
        console.log(e)
    }
})

router.get("/product/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const getProduct = await Product.findById(_id)
        res.send(getProduct)
    }catch(e){
        res.status(404).send(e)
        console.log(e)
    }
})

router.get('/',async (req,res)=>{
    res.send("Hello Omar")
})

module.exports = router