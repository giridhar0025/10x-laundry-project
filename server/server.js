const express = require('express')
const app = express()
require('dotenv').config();

app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})

app.use('/', (req, res) => {
    res.send("Laundry App Backend")
})