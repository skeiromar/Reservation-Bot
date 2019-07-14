var express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const { createReservation } = require('../firebase/firebaseUtilities');
const date = require('date-and-time');
const editJsonFile = require("edit-json-file");
const Base64 = require('js-base64').Base64;

let file = editJsonFile('./db/file.json');

var router = express.Router();
var dummyDB = {};

// file related test START 

// const now = new Date();
// console.log(date.format(now, 'MM-DD-YY h-A'));
// file related test END

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

  // logic for updating the database from the request of the user 
  // 1. make an object for the data and assign it to a var 
  // 2. find the date as we'll need it
  // 3. file.set(whatever, var) file.save() 
  // format of message: 
  // Reservation for NAME (first_last) at DATE TIME at RESTAURANT
  let msg = req.body.Body.split(' ');
  let name = `${msg[2]} ${msg[3]}`;
  let reservation_date = msg[5];
  let stringTime = msg[6];  
  let ampm = stringTime.slice(stringTime.indexOf('m') - 1);
  let time = parseInt(stringTime.slice(0, stringTime.indexOf('m') - 1));
  let restaurant = msg[8];
  let phoneNum = req.body.From;
  let restaurant_id = Base64.encode(restaurant);
  let now = new Date();
  let formatNow = date.format(now, 'M-D-YY h-A');

  

  let request = {
    [phoneNum]: {
      [restaurant_id]: {
        id: restaurant_id,
        name,
        reservation_date,
        reservation_time: {
          start: [time, ampm], end: [time + 1, ampm]
        },
        created_at: formatNow,
        restaurant, 
        phone_number: phoneNum
      }
    }
  };
  file.set("Persons", request);
  file.save();


  twiml.message('Welcome to Reservation Bot, the Bot for Reservations!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());  
 
});

router.get('/list', function(req, res, next) {
  res.json(dummyDB);
});



module.exports = router;

