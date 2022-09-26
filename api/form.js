const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer");
const Model = require("../Models/models")
const Model2 = require("../Models/model2")

router.post("/", (req, res) => {
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

router.post('/postForm', (req, res) => {


    let Entry = new Model2(req.body);
    Entry.save().then((val) => {

        res.status(200).send("entry addded")
    }).catch((err) => {
        res.status(400).send(err)
    })


})

module.exports = router;