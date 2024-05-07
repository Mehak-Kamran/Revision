
//boiler plate code for express server setup

const express = require('express')
const app = express()
//to use ejs we set viewengine as ejs
app.set("view engine","ejs");

//css using middleware
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
    res.render('about')
  })

app.get('/contact', function (req, res) {
    res.render('contact')
  })

app.get('/error', function (req, res,next) {
    
    throw Error("something went wrong");
  })


app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
