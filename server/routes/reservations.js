var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: 'Israfil Jennigje, pary of 2 @ 2pm'},
    {id: 2, name: 'Abu Aðalsteinn, pary of 8 @ 3pm'},
    {id: 3, name: 'Renzo Ivo, pary of 100 @ 10pm'}
  ]);
  
  
  
  // res.send('respond with a resource');
});

module.exports = router;
