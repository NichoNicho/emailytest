const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//ES6 --> const Schema = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
