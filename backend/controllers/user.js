const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validateUser, validateLogin } = require("../models/user");
const { JWT_SECRET_KEY } = require("../constants");
const { validationError, sendResponse } = require("../utils");


// Creating User 
const createUser = async (req, res) => {
  // if there are errors , return Bad request and the errors
  const { error } = validateUser(req.body);
  if (error) {
    return sendResponse(res, "error", 422, validationError(error));
  }
  // check whether the user with same email exist already
  
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return sendResponse(res,"error",400,req.t("Sorry the User with this email already exist"));
       }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      employementstatus: req.body.employementstatus,
      isAdmin: req.body.isAdmin,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET_KEY);

   sendResponse(res,"success",200,req.t("User Created",authtoken));
  
};

//Logining controller
const login = async (req, res) => {
  // if there are errors , return Bad request and the errors
  const { error } = validateLogin(req.body);
  if (error) {
    return sendResponse(res, "error", 422, validationError(error));
  }

  const { email, password } = req.body;

  
    let user = await User.findOne({ email });

    if (!user) {
      return sendResponse(res,"error",401,"Please login with correct credentials");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) { 
      return sendResponse(res,"error",401,"Please login with correct credentials");
    }
    user.password = undefined;
    const data = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET_KEY);
    
    return sendResponse(res,"success",200,"Succesfully Logged In",user,authtoken);
   
  
};


module.exports = {
  createUser,
  login,

};
