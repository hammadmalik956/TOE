const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { saleController } = require("../controllers");
const { errorCatcher } = require("../errors");


// route for  creating sale authentication required 

router.post("/createsale",[authorize,isAdmin], errorCatcher(saleController.createSale));

// route for adding another installment in sale

router.post("/addinstall",[authorize,isAdmin], errorCatcher(saleController.addInstall));

// route for adding product in specific sale
router.post("/addproduct",[authorize,isAdmin], errorCatcher(saleController.addProduct));
// route for updating buyer information
router.post("/updatebuyer",[authorize,isAdmin], errorCatcher(saleController.updateBuyer));
// route for updating gaurenter information
router.post("/updategaurenter",[authorize,isAdmin], errorCatcher(saleController.updateGaurenter));
// route for geting all sales information
router.post("/getallsales",[authorize,isAdmin], errorCatcher(saleController.getAllSales));


module.exports = router;