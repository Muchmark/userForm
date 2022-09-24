const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3030
const nodemailer = require("nodemailer");
const mongoose = require("mongoose")
const form = require("./api/form")
app.use(cors())
app.use(express.json())
const connection = "mongodb+srv://Muchmark:mLlrGljRs180tAAS@cluster0.irij3nk.mongodb.net/?retryWrites=true&w=majority"

//establishing connection to mongodb
//********** */

mongoose.connect(connection).then((res) => {

}).catch((err) => {
    console.log(err)
})


//ruter for email sennd and mongodb database
app.get("/", (req, res) => {
    res.json({ status: "ok", message: "welcome to home page" })
})




app.use('/api/form', form);


app.listen(port, () => { })