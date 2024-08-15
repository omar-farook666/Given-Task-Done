const express = require('express');
const Product = require('../src/models/product');
const router = require('./routers/productRouter');
const cartRouter = require("./routers/cartRouter")
require('../src/db/connect')
require('../src/models/product')
require("../src/models/cart")
const cors = require("cors")

const app = express();

const port = process.env.PORT ||3001

app.use(cors())
app.use(express.json())
app.use(router)
app.use(cartRouter)
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})