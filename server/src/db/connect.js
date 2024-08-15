const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Panjabi',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log("Error connecting to MongoDB")
    console.log(e)
})