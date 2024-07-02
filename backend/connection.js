const mongoose = require("mongoose");

const url ="mongodb+srv://Ayush:ayush@cluster0.oy69d4x.mongodb.net/CRUD?retryWrites=true&w=majority";

mongoose.connect(url)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });

module.exports = mongoose;
