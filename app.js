// app.js is the server page
// all *.ejs files called must be in /views folder (same level as app.js)

// fetch libraries
const express = require("express");
// const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require('lodash');
const app = express();

// global constants


// incorporate packages into express function 'app'
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




// get routes

app.get("/", function(req, res) {
  res.redirect("https://sites.google.com/view/coochieprogress/home");
})

app.get("/bus", function(req, res) {
  res.render("home", {}); 
})

app.get("/bus/roadmap", function(req, res) {
  res.render("roadmap", {}); 
})

app.get("/bus/volunteer", function(req, res) {
  res.render("volunteer", {}); 
})

app.get("/bus/invest", function(req, res) {
  res.render("invest", {}); 
})

// spin up server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
