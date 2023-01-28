const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { saleController } = require("../controllers");
const { errorCatcher } = require("../errors");


// route for  creating sale authentication required 

router.post("/createsale",[authorize,isAdmin], errorCatcher(saleController.createSale));






module.exports = router;