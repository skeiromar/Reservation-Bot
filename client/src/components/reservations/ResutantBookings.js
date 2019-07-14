import React, { useState, useEffect } from 'react';
import { async } from 'q';

function ResutantBookings(props) {
    const [bookings, setBookings] = useState([3]);
    useEffect(() => {
        async function getBookings() {
            const res = await fetch('/reservations');
            res
                .json()
                .then(res => setBookings(res));
        }
        getBookings();
    }, []);

    { debugger }
    const lis = bookings.map(booking => {
        return (
            <>
                <li>booking.kwasiAManfibooking.time</li>
            </>
        )

    })

    return (
        <ul>
            <li>{props.match.params.name}</li>

            {lis}
        </ul>
    )
};

export default ResutantBookings
