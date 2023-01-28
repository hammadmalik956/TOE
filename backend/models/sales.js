const mongoose = require('mongoose');
const Joi = require("joi");

const { Schema, model } = mongoose;
const salesSchema = new Schema({
   saleCreatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
   buyer: {
      name: String,
      cnic: String,
      address: String,
      contact: String

   },

   product: [{
      name: String,
      price: Number,
      description: String
   }],
   advAmount: {
      type: Number,
      required: true
   },
   installment: [{
      month: String,
      amount: Number,
      status: String,
      payDate: Date

   }],

   totalInstal: {
      type: Number,
      required: true
   },


});
// validating sale 
const validateSale = (sale) => {
   const schema = Joi.object().keys({
      buyer: Joi.object({
         name: Joi.string().required().min(5),
         cnic: Joi.string().required().length(15),
         address: Joi.string().required().max(20),
         contact: Joi.string().required().length(11)
      }),
      product: Joi.object({
         name: Joi.string().required().min(5),
         price: Joi.number().required(),
         description: Joi.string().required().max(20)
      }),
      advAmount: Joi.number(),
      installment: Joi.object({
         month: Joi.string().required().max(10),
         amount: Joi.number().required(),
         status: Joi.string().required(),
         payDate: Joi.date().iso().required()
      }),
      totalInstal: Joi.number().required()


   });
   return schema.validate(sale);
};


module.exports = model('sale', salesSchema);
module.exports.validateSale = validateSale;