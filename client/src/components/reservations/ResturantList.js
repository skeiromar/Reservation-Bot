import React, { useState, useEffect } from 'react';
import ResurantListIndex from './ResurantListIndex';
import '../../App.sass';

function ResturantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function fetchReservations() {
            const res = await fetch('/reservations/restaurants');
            res
                .json()
                .then(res => setRestaurants(res));
        }

        fetchReservations();
    }, []);

    let restaurantCard = restaurants.map(restaurant => {
        return (
            <ResurantListIndex name={restaurant} />
        )
    })

    return (
        restaurantCard
    )
}

export default ResturantList