var express = require('express');
var router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var dummyDB = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: 'Israfil Jennigje, pary of 2 @ 2pm'},
    {id: 2, name: 'Abu Aðalsteinn, pary of 8 @ 3pm'},
    {id: 3, name: 'Kwasi juicy juice, party of 100 @ 10pm'}
  ]);
  // res.send('respond with a resource');
});

router.post('/sms', function(req, res, next) {
  const twiml = new MessagingResponse();
  console.log({
    message: req.body.Body,
    from: req.body.From
  })
  twiml.message('Welcome to Reservation Bot, the Bot for Reservations!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

router.get('/list', function(req, res, next) {
  res.json(dummyDB);
});



module.exports = router;

