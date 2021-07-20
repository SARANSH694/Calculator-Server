const express = require('express');
const bodyParser= require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res)  {
  res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){

    var num1= Number(req.body.n1);
    var num2= Number(req.body.n2);

    var result= num1 + num2;

    res.send("The result-"+ result);

});


app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){

    var weight=parseFloat(req.body.w1);
    var height=parseFloat(req.body.h1);

    var rlt= weight / (height*height);
    res.send("The result-"+rlt);
});

app.listen(port, function() {
  console.log("Port 3000");
});