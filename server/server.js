const express = require('express')
const mongoose=require("mongoose")
const productController=require("./routes/productRoute")
const app = express()
require('dotenv').config();
app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})

// app.use('/', (req, res) => {
//     res.send("Laundry App Backend")
// })
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/product",productController)
mongoose.connect(process.env.MONGODB_URL,(err)=>{
    if(!err){
        console.log("Connected to database");
    }else{
        console.log(err);
    }
})