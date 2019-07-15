const editJsonFile = require("edit-json-file");
const date = require('date-and-time');

let file = editJsonFile('./db/file.json');

function timeValidation(reser_date_obj, present_date_obj) {
    return reser_date_obj.getTime() > present_date_obj.getTime();
}



function validator(restaurant_name, ampm, time, date_now, reser_date_obj){

    let db = file.toObject();
    
    if (!timeValidation(reser_date_obj, date_now)) {
        return {
            valid: false,
            msg: `We have not mastered time travel yet....Please pick a time in the future`
        };
    } else if (!results) {
        return {
            valid: false,
            msg: `${restaurant_name} is not part of our chain of Restaurants`
        };
    } else if (ampm === 'am') {
        return {
            valid: false,
            msg: `${restaurant_name} hours are from 1pm - 10pm`
        };
    } else if (time < 1 || time > 9) {
        return {
            valid: false,
            msg: `${restaurant_name} hours are from 1pm - 10pm`
        };
    } else if (results.length > 0) {
        return {
            valid: false,
            msg: `Our big Round Tabe has already been booked for ${time}:PM Please pick another time`
        };
    } else {
        return {
            valid: true,
            msg: 'Table Reserved. We look forward to seeing you.'
        };
    }

}
module.exports = validator;