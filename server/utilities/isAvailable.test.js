
const date = require('date-and-time');
const validator = require("./isAvailable");


let restaurant_name = "Killamanjaro";
let ampm = "pm";
let time = 6;
let date_now = new Date();
let reservation_date_obj = new Date(date.parse(`${7-17-19} ${time}p.m.`, 'M-D-YY hA'));


// test("It adds two numbers", () => {
//     expect(routeHandler({params: {operator: 'addition', num1: "20", num2: "45"}}, {})).toBe(65);
// });

test("It adds two numbers", () => {
    expect(validator(restaurant_name, ampm, time, date_now, reservation_date_obj)).toBe({
        valid: true,
        msg: 'Table Reserved. We look forward to seeing you.'
    });
});




// restaurant_name, ampm, time, date_now, reser_date_obj

// restaurant_name = "Killamanjaro"
// ampm = "am"
// time = 8
// date_now = Date.now()
// reser_date_obj = Date object 

