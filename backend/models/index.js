const mongoose = require("mongoose");
const { DATABASE_URL, DATABASE_NAME } = require("../constants");
const User = require("./user");
const Sale = require("./sales");
mongoose.set('strictQuery', false);

const connectToMongo = () => {
  mongoose.connect(DATABASE_URL + DATABASE_NAME, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
      return console.log(`CONNECTION TO MONGO SUCCESSFUL!`);
  }).catch(error => {
      console.log("Error connecting to database: ", error.message);
      return process.exit(1);
  });
};

module.exports = {connectToMongo, User,Sale};