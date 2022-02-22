const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myproject")
  .then(() => {
    console.log("connected to database successfully :)");
  })
  .catch(() => {
    console.log("connexion failed :( ");
  });

module.exports = mongoose;
