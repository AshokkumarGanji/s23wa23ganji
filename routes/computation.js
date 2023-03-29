var express = require('express');
var router = express.Router();

var ran=Math.random()*100;
var num1=0;
var num2=0;
var num3=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  num1=Math.imul(ran);
  num2=Math.log(ran);
  num3=Math.log10(ran);
  
  res.send(`imul applied to ran is: ${num1},<br>log applied to ran is: ${num2},<br>log10 applied to ran is: ${num3}`);


});

module.exports = router;