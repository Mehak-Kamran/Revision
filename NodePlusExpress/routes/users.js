const mongoose=require("mongoose");
//passport
const plm=require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/note");

const userSchema=mongoose.Schema({
  username:String,
  password:String,
  secret:String
  
});

userSchema.plugin(plm);
const User = mongoose.model("User", userSchema);
module.exports = User;