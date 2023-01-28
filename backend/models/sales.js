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


module.exports = model('sale', salesSchema);