const express = require('express')
const router = express.Router()
const Item = require("../modals/Item")
const bodyParser = require("body-parser")
const {homeShow, showAllItems, addItem} = require('./routeController')

router.get("/",showAllItems)


router.post("/additem",bodyParser.json(),addItem)

module.exports= router