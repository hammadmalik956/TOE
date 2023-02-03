const mongoose = require("mongoose");
const Joi = require("joi");
const { required } = require("joi");
const { Schema,model } = mongoose;

const branchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  employementstatus: {
    type: String,
  },
  branchcode:{
    type:String,
    required:true
  },
  isAdmin: Boolean,
  token:{
    type:String,
    default: ''
  }
});
// validating user for creation
const validateBranch = (user) => {
  const schema = Joi.object().keys({
      name: Joi.string().required().min(3),
      email: Joi.string().lowercase().required().email(),
      password: Joi.string().required().min(6).max(15),
      employementstatus: Joi.string().max(8),
      branchcode: Joi.string().required().max(3),
      isAdmin:Joi.boolean()
      
  });
  return schema.validate(user);
};
// validating user for loggin IN
const validateLogin = (user) => {
  const schema = Joi.object().keys({
      
      email: Joi.string().lowercase().required().email(),
      password: Joi.string().exist(),
 
      
  });
  return schema.validate(user);
};


module.exports =  model("branch", branchSchema);
module.exports.validateBranch = validateBranch;
module.exports.validateLogin = validateLogin;
