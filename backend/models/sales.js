const mongoose = require('mongoose');
const Joi = require("joi");

const { Schema, model } = mongoose;
const salesSchema = new Schema({
   saleCreatedBy: { type: Schema.Types.ObjectId, ref: 'branch' },
   buyer: {
      name: String,
      cnic:{type:String,unique:true} ,
      address: String,
      contact: String,
      pictures: [{
         type: String,
       }]
   },
   guaranter: {
      name: String,
      cnic:{type:String,unique:true},
      address: String,
      contact: String,
      pictures: [{
         type: String,
       }]

   },

   product: [{
      cleared: Boolean,
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
      totalInstal: Number,
      pictures: [{
         type: String,
       }]

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
         contact: Joi.string().required().length(11),
         pictures: Joi.string()
      }),
      guaranter: Joi.object({
         name: Joi.string().required().min(5),
         cnic: Joi.string().required().length(15),
         address: Joi.string().required().max(20),
         contact: Joi.string().required().length(11),
         pictures: Joi.string()
      }),
      product: Joi.object({
         cleared:Joi.boolean(),
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
         pictures: Joi.string()
      }),





   });
   return schema.validate(sale);
};


module.exports = model('sale', salesSchema);
module.exports.validateSale = validateSale;