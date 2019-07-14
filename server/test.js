const date = require('date-and-time');



let newdate = new Date(date.parse('7-14-19 8p.m.', 'M-D-YY hA'));
let currentDate = new Date();

console.log(newdate.getTime() > currentDate.getTime());




// {
//     "S2lsbGFtYW5qYXJvW29iamVjdCBPYmplY3RdOA==": {
//       "id": "S2lsbGFtYW5qYXJvW29iamVjdCBPYmplY3RdOA==",
//       "name": "jack Amanfi",
//       "reservation_date": "7-13-19",
//       "reservation_time": {
//         "start": [
//           8,
//           "pm"
//         ],
//         "end": [
//           9,
//           "pm"
//         ]
//       },
//       "created_at": "7-14-19 11-a.m.",
//       "restaurant_name": "Killamanjaro",
//       "phone_number": "+13475612927"
//     }
//   }