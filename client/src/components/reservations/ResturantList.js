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

    let count =1;
    let restaurantCard = restaurants.map(restaurant => {
        count +=1;
        return (
            <ResurantListIndex name={restaurant} key={count} />
        )
    })

    return (
        restaurantCard
    )
}

export default ResturantList