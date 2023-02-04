const mongoose = require('mongoose');
const Joi = require("joi");

const { Schema, model } = mongoose;
const salesSchema = new Schema({
   saleCreatedBy: { type: Schema.Types.ObjectId, ref: 'branch' },
   buyer: {
      name: String,
      cnic: String,
      address: String,
      contact: String

   },
   guaranter: {
      name: String,
      cnic: String,
      address: String,
      contact: String

   },

   product: [{
      installmentDueDate:[ {type: Date}],
      advAmount: Number,
      name: String,
      price: Number,
      description: String,

      installment: [{
         month: String,
         amount: Number,
         status: String,
         payDate: Date
      }],
      totalInstal: Number

   }],






});
// validating sale 
const validateSale = (sale) => {
   const schema = Joi.object().keys({
      saleCreatedBy: Joi.optional(),
      buyer: Joi.object({
         name: Joi.string().required().min(5),
         cnic: Joi.string().required().length(15),
         address: Joi.string().required().max(20),
         contact: Joi.string().required().length(11)
      }),
      guaranter: Joi.object({
         name: Joi.string().required().min(5),
         cnic: Joi.string().required().length(15),
         address: Joi.string().required().max(20),
         contact: Joi.string().required().length(11)
      }),
      product: Joi.object({
        
         name: Joi.string().required().min(5),
         price: Joi.number().required(),
         description: Joi.string().required().max(20),
         advAmount: Joi.number(),
         totalInstal: Joi.number().required(),

         installment: Joi.object({
            month: Joi.string().required().max(10),
            amount: Joi.number().required(),
            status: Joi.string().required(),
            payDate: Joi.date().iso().required()
         }),
      }),





   });
   return schema.validate(sale);
};


module.exports = model('sale', salesSchema);
module.exports.validateSale = validateSale;