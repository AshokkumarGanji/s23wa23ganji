var express = require('express');
var router = express.Router();

var rand1 = Math.random()*100;
var rand2 = Math.random()*100;
var num1=0;
var num2=0;
var num3=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  num1=Math.imul(rand1,rand2);
  num2=Math.log(rand1);
  num3=Math.log10(rand1);
  =
  
  //res.send(`The random values is: ${ran},<br>imul applied to ran is: ${num1},<br>log applied to ran is: ${num2},<br>log10 applied to ran is: ${num3}`);
  
  
  res.send(`The Random numbers are ${rand1} and ${rand2} <br> <br> imul applied to ${rand1},${rand2} is ${num1}  <br> <br> log applied to ${rand1},${rand2} is ${num2}  <br> <br>  log10 applied to ${rand1} is ${num3}`);


});

module.exports = router;