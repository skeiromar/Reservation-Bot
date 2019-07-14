const editJsonFile = require("edit-json-file");
let file = editJsonFile('./db/file.json');
let db = file.toObject();

function getRestaurants() {
    return (db.Restaurants);
}

function getReservations(restaurants_name) {
    // get all filled reservations
    reservation = db.Restaurants[restaurants_name].available_slots.filter(booking => {
        return (Object.keys(booking).length > 0 && booking.reservation_date - new Date().getTime() > 3600000);
    });
    //get 
    return reservation
}

module.exports = {
    getRestaurants,
    getReservations
}
