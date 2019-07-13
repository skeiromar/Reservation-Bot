const admin = require('firebase-admin');
const serviceAccount = require('./reservationBotKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://reservation-bot-db.firebaseio.com/'
  });

var db = admin.database();
var ref = db.ref("server");

function makeReservation(ResturantName, clientName, time, date) {

    var reservationsRef = ref.child("reservations");
    reservationsRef.set({
        "Hotel Trivago": {
            name: "osteopolithicus",
            time: "8 pm",
            date: "09/08/1000",
            created_at: Date.now()
        }
    });
}

