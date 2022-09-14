const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3030
const nodemailer = require("nodemailer");
const mongoose = require("mongoose")

const Model = require("./Models/models")
app.use(cors())

app.use(express.json())
const connection = "mongodb+srv://Muchmark:mLlrGljRs180tAAS@cluster0.irij3nk.mongodb.net/?retryWrites=true&w=majority"
//establishing connection to mongodb
//********** */

mongoose.connect(connection).then((res) => {

}).catch((err) => {
    console.log(err)
})

//console.log(Model)
//***************** */

app.get("/", (req, res) => {
    res.json({ status: "ok", message: "welcome to home page" })
})



//route to send email to user and save the data to mongodb 
app.post("/submitForm", (req, res) => {

    "use strict";
    async function main() {

        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "muchmarklbh@gmail.com",
                pass: "dzlmziluuzxgrhyl",
            },
        });
        let info = await transporter.sendMail({
            to: "akshaysutarwebsite@gmail.com,saquibaowte97.sa@gmail.com",
            html: `<b>hii my name is ${req.body.name} and my email is ${req.body.email}</b>.${req.body.content} <b>you can contact to ${req.body.contact}</b> thanks....`,
            subject: `recived message from ${req.body.name}`,
        });

        //create new entry and save to mongodb
        let useData = new Model(req.body)
        useData.save().then((doc) => {
            res.json({ status: 200, message: "mail sent succesfully..." })
        }).catch((err) => {

        })
    }

    main().catch((err) => {
        res.json({ status: 400, message: "some error occured please try again letter.." })
    });


})
//route end....

app.listen(port, () => { })