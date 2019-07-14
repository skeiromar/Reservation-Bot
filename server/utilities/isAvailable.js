const editJsonFile = require("edit-json-file");
let file = editJsonFile('./db/file.json');

function validator(restaurant_name, ampm, time){
//    Restaurant = file.toObject();
//    if (!Restaurant[restaurant]){
//        return {
//            valid: false,
//            err: `${restaurant} is not part of our network`
//        }
//    }else if(time > 10 && time >= 1){
//        return {
//            valid: false,
//            err: `${restaurant} hours of operation is between 1pm and 10pm`
//        }
//    }
//    else if( !Restaurant[restaurant].available_slots[time-1].phoneNumber){
//        return {
//            valid: false,
//            err: `Time slot at ${restaurant} is full`
//        }
//    }
//    else{
//        return{
//            valid: true
//        };
//    }
// {
//     [restaurant_id]: {
//       id: restaurant_id,
//       name,
//       reservation_date,
//       reservation_time: {
//         start: [time, ampm], end: [time + 1, ampm]
//       },
//       created_at: formatNow,
//       restaurant_name, 
//       phone_number: phoneNum
//     }
// }
    let db = file.toObject();
    if (!db.Resturants[restaurant_name]) {
        return {
            valid: false, 
            err: `${restaurant_name} does not exist`
        };
    } else if (ampm === 'am') {
        return {
            valid: false, 
            err: `${restaurant_name} hours are from 1pm - 10pm`
        };
    } else if (time >= 1 && time < 10) {
        return {
            valid: false, 
            err: `${restaurant_name} hours are from 1pm - 10pm`
        };
    } else if (Object.keys(db
        .Resturants[restaurant_name]
        .available_slots[time - 1]) > 0) {
            return {
                valid: false, 
                err: `We are not available at this time`
            };
    } else if () {
        
    }
}
module.exports = validator;