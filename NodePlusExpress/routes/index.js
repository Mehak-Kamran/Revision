var express = require('express');
var router = express.Router();

//import model from db file
const User=require("./users");
const passport = require('passport');
const localStrategy=require("passport-local");
passport.use(new localStrategy(User.authenticate()));



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

//creating profile route
router.get("/profile",isLoggedIn,function(req,res){
  res.render("profile");
});

//register route
router.post("/register",function(req,res){
  var userdata=new User({
    username:req.body.username,
    secret:req.body.secret
  })

  User.register(userdata,req.body.password)
  .then(function(registereduser){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/profile');//when register he can can now see this pagee
    })
  })
});


//code for login
router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",//if user is authentic go to profile page
  failureRedirect: "/"//if not then redirect to homepage
}),function(req,res){ })

//logout
router.get('/logout',function(req,res,next){
  req.logout(function(err){//if someone want to logout , log him out
    if (err){ return next(err); }
    res.redirect("/");//and redirect him to home page
  });
});

//isloggedin middleware
function isLoggedIn(req,res,next){//protection from unreg people
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

// create user in db
// router.get("/create", async function(req,res){
//   const createduser= await User.create({

//   username:"AYESHAAAY",
//   nickname:"YOMO",
//   description:"I love to PUNCH",
//   categories:["KEBAB","MOMO"]
//   });
//   res.send(createduser);
// });

// router.get("/find",async function(req,res){
//   var regex=new RegExp("^ayesha$","i");
//   const fuser=await User.find({username:regex});
//   res.send(fuser);
// });

// router.get("/find",async function(req,res){
//   var regex=new RegExp("^ayesha$","i");
//   const fuser=await User.find({categories:{$all:["biryani","pallao"]}});
//   res.send(fuser);
// });


// router.get("/find",async function(req,res){
//   const fuser=await User.find();
//   res.send(fuser);
// });

module.exports = router;
