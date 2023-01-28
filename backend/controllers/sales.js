const { Sale } = require("../models/");
const { validateSale } = require("../models/sales");
const { validationError, sendResponse } = require("../utils");


// creating new sale
const createSale = async (req, res) => {
    // validating if there are correct details
    const { error } = validateSale(req.body);
    
    if (error) {
        return sendResponse(res, "error", 422, validationError(error));
    }

    
    // creating sale
    let sale = await Sale.create({
        buyer: { name: req.body.name, cnic: req.body.cnic, address: req.body.address, contact: req.body.contact },
        product: { name: req.body.name, price: req.body.price, description: req.body.description, },
        advAmount: req.body.advAmount,
        installment: { month: req.body.mont, amount: req.body.amount, status: req.body.status, payDate: req.body.payDate },
        totalInstal: req.body.totalInstal,
    });
    

    sendResponse(res, "success", 200, "Sale Created", sale);


}

module.exports = {createSale};