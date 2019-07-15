import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../../App.sass';
import '../../App.css';


function ReservationList(props) {
    const [reservations, setReservations] = useState([]);
    let RestaurantName = props.match.params.name
    useEffect(() => {
        async function fetchReservations() {
            const res = await fetch('/reservations/list', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: RestaurantName })
            });
            res
                .json()
                .then(res => setReservations(res));
        }

        fetchReservations();
    }, []);

    let ReserveCol = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let CurrentHour = moment(Date.now()).format("h")
    let results = reservations.map(reservation => {
        //if the same day
        if (moment(reservation.reservation_date).format("dddd, MMMM Do YYYY") === moment(Date.now()).format("dddd, MMMM Do YYYY")) {
            let hour = parseInt(moment(reservation.reservation_date).format("h"));
            let booking = moment(reservation.reservation_date).format("hA");
            console.log(Date.now());
            ReserveCol[hour - 1] = (booking);
        }
    })

    for (let i = 0; i < 9; i++) {
        //if i is > hour, means ==> we can book/show reservations
        if ( i+1 > CurrentHour){
            if (ReserveCol[i] == 0) {
                ReserveCol[i] = (
                    <div className="columns" key={i}>
                        <div className="column">{i + 1}PM-AVAILABLE</div>
                    </div>
                )
            } else {
                ReserveCol[i] = (
                    <div className="columns" key={i}>
                        <div className="column">{i + 1}PM - BOOKED</div>
                    </div>
                )
            }
        }else{
            ReserveCol[i] = (
                <div className="columns" key={i}>
                    <div className="column" id="line">{i + 1}PM-UNAVILABLE</div>
                </div>
            )
        }

    }
    return (
        <div>
            <h1>{ReserveCol}</h1>

        </div>
    )
}

export default ReservationList