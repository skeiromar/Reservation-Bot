const editJsonFile = require("edit-json-file");
let file = editJsonFile('./db/file.json');
let db = file.toObject();

function getRestaurants(){
    return (db.Restaurants);
}

function getReservations(restaurants_name){
    // get all filled reservations
    return reservation = db.Restaurants[restaurants_name].available_slots.filter( booking => Object.keys(booking).length > 0 );
    //get 
    
}

// getReservations('Killamanjaro');
module.exports = {
    getRestaurants,
    getReservations
}
