const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const app = express
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aarchi4work007:3DGspGanUioqeIyj@aarosu-db.majaz.mongodb.net/?retryWrites=true&w=majority&appName=aarosu-db")

app.listen(3001, () => {
    console.log("server is running")
})