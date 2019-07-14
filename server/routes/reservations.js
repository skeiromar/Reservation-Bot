var express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const { createReservation } = require('../firebase/firebaseUtilities');
const date = require('date-and-time');
const Base64 = require('js-base64').Base64;
const editJsonFile = require("edit-json-file");
let file = editJsonFile('./db/file.json');

let validator = require('../utilities/isAvailable');

var router = express.Router();
var dummyDB = {};

// file related test START 
// file.set(`Restaurants.${"Killamanjaro"}.available_slots`[2], {
//   phone_number: "+13475612927",
//   reservation_id: "123"
// });
// file.save();
// file.toObject().Restaurants.Killamanjaro.available_slots[2] = {h:1};
// file.save();

// const now = new Date();
// console.log(date.format(now, 'MM-DD-YY h-A'));
// file related test END

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([
    { id: 1, name: 'Israfil Jennigje, pary of 2 @ 2pm' },
    { id: 2, name: 'Abu Aðalsteinn, pary of 8 @ 3pm' },
    { id: 3, name: 'Kwasi juicy juice, party of 100 @ 10pm' }
  ]);
  // res.send('respond with a resource');
});

router.post('/sms', function (req, res, next) {
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
  let restaurant_name = msg[8];
  let phoneNum = req.body.From;
  let restaurant_id = Base64.encode(restaurant_name + date + time);

  let reservation_date_obj = new Date(date.parse(`${reservation_date} ${time}p.m.`, 'M-D-YY hA'));

  let now = new Date();
  let formatNow = date.format(now, 'M-D-YY h-A');


  validationObj = validator(restaurant_name, ampm, time, now, reservation_date_obj);
  
  if (validationObj.valid) {
     request = {
      [restaurant_id]: {
        id: restaurant_id,
        name,
        reservation_date,
        reservation_time: {
          start: [time, ampm], end: [time + 1, ampm]
        },
        created_at: formatNow,
        restaurant_name,
        phone_number: phoneNum
      }
    };

    file.set(`Persons.${phoneNum}`, request);

    file.toObject().Restaurants[restaurant_name].available_slots[time - 1] = {
      phone_number: phoneNum,
      reservation_id: restaurant_id,
      reservation_date: reservation_date_obj.getTime()
    };
    file.save();

  }


  // "Restaurants": {
  //   "Killamanjaro Suite": {
  //       "available_slots": [ {
  //           "phone_number": "19175284316", 
  //           "reservation_id": "12"
  //       }, {}, {}, {}, {}, {}, {}, {}, {} ],
  //       "opening_time": [1, "PM"],
  //       "closing_time": [10, "PM"]
  //   }
  // },


  twiml.message(validationObj.msg);
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());

});

router.get('/list', function (req, res, next) {
  res.json(dummyDB);
});



module.exports = router;

