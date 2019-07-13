import React, { useState, useEffect } from 'react';

function ReservationList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        async function fetchReservations() {
            const res = await fetch('/reservations');
            res
            .json()
            .then(res => setReservations(res));
        }

        fetchReservations();
    }, []);

    return (
        <div>
            <h1>Reservations</h1>
            {reservations.map(reservation => 
                <div key={reservation.id}>{reservation.name}</div>
            )}
        </div>
    )
}

export default ReservationList