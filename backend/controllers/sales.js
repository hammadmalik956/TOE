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

    // total number of installments
    const installcount = req.body.product.totalInstal;
    const instalmentInterval = 30; // days
    
    const saledata = await Sale.findOne({ buyer: req.body.buyer })
    if (!saledata) {
        // creating sale
        let sale = await Sale.create({
            saleCreatedBy: req.body.saleCreatedBy,
            buyer: req.body.buyer,
            product: req.body.product,
            guaranter: req.body.guaranter,

        })
        // creating installment period
        
        for (let i = 1; i <= installcount; i++) {
            await Sale.updateOne({ _id: sale._id,"product._id": sale.product[0]._id},{ $push: { "product.$.installmentDueDate":new Date(Date.now() + i * instalmentInterval * 24 * 60 * 60 * 1000)  } })
          }
        sendResponse(res, "success", 200, "Sale Created", sale);
    }
    else {
        sendResponse(res, "failure", 400, "Sale Already Exist ");
    }




}
// update buyer from sale 
const updateBuyer = async (req,res)=>{
    const { sale_id,buyer } = req.body;
    // validating if there are correct details
    // const { error } = validateSale(req.body);

    // if (error) {
    //     return sendResponse(res, "error", 422, validationError(error));
    // }

    const sdata = await Sale.findById({_id:sale_id});

    if (sdata) {
        await Sale.updateOne({_id:sale_id},{$set:{buyer:buyer}});
       
        return sendResponse(res, "Success", 200, "Buyer information updated");
    }
    else {
        return sendResponse(res, "failure", 400, "Sale Not Found");
    }
}
// update gaurenter from sale 
const updateGaurenter = async (req,res)=>{
    const { sale_id,guaranter } = req.body;
    // validating if there are correct details
    // const { error } = validateSale(req.body);

    // if (error) {
    //     return sendResponse(res, "error", 422, validationError(error));
    // }

    const sdata = await Sale.findById({_id:sale_id});

    if (sdata) { 
        await Sale.updateOne({_id:sale_id},{$set:{guaranter:guaranter}});
       
        return sendResponse(res, "Success", 200, "Gaurenter information updated");
    }
    else {
        return sendResponse(res, "failure", 400, "Sale Not Found");
    }
}

// adding installment in sale
const addInstall = async (req, res) => {
    const { sale_id, installment, product_id } = req.body;
   
    

    const sdata = await Sale.findById({_id:sale_id});

    if (sdata) {

        await Sale.updateOne({ _id: sale_id, "product._id": product_id },{ $push: { "product.$.installment": installment } })

        return sendResponse(res, "Success", 200, "Installment Added");
    }
    else {
        return sendResponse(res, "failure", 400, "Sale Not Found");
    }

}

// Adding product to existing sale
const addProduct = async (req, res) => {
    const { sale_id,product } = req.body;
    // validating if there are correct details
    // const { error } = validateSale(req.body);

    // if (error) {
    //     return sendResponse(res, "error", 422, validationError(error));
    // }

        // total number of installments
        const installcount = req.body.product.totalInstal;
        const instalmentInterval = 30; // days
    const sdata = await Sale.findById({_id:sale_id});

    if (sdata) {

        // pushing  product into sale
      await Sale.updateOne({_id:sale_id},{$push:{product:product}},{new:true});
        // // pushing installdue date 
        //  // creating installment period
        // //finding length of product arrary
            const productsize = sdata.product.length;
             // again finding the sale because its updated
             const finddata = await Sale.findById({_id:sale_id});
            
         for (let i = 1; i <= installcount; i++) {
            await Sale.updateOne({ _id: sale_id,"product._id": finddata.product[productsize]._id},{ $push: { "product.$.installmentDueDate":new Date(Date.now() + i * instalmentInterval * 24 * 60 * 60 * 1000)  } })
          }


       
        return sendResponse(res, "Success", 200, "Product Added");
    }
    else {
        return sendResponse(res, "failure", 400, "Sale Not Found");
    }

}
// get all sales  of specific branch

const getAllSales = async(req,res)=>{
    
    const allsales = await Sale.find({saleCreatedBy:req.body.saleCreatedBy});
    return sendResponse(res, "Success", 200, "Got All Sales",allsales);
    

}

module.exports = { createSale, addInstall, addProduct, updateBuyer,updateGaurenter, getAllSales };