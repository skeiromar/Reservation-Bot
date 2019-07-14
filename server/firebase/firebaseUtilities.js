const admin = require('firebase-admin');
const Base64 = require('js-base64').Base64;
const serviceAccount = require('../reservationBotKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://reservation-bot-db.firebaseio.com/'
  });

var db = admin.database();
var ref = db.ref("server");

// var reservationsRef = ref.child("reservations");
// reservationsRef.set({
//     "Hotel Trivago": {
//         name: "osteopolithicus",
//         time: "8 pm",
//         date: "09/08/1000",
//         created_at: Date.now()
//     }
// });

function createReservation(name, date, time, hotel) {
    var reservationsRef = ref.child(Base64.encode(name));

    reservationsRef.set({
            name: name, 
            date: date, 
            time,
            hotel                  
    });
}
createReservation("julius augustus", "02-10-19", "12pm", "trivago");

module.exports = {
    createReservation
};