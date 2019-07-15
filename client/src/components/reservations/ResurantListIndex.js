import React from 'react'
import '../../App.sass';
import { Link } from 'react-router-dom';

export default function ResurantListIndex(prop) {
    return (
        <div className='Mycard'>
            <div className="card">
                <div className="card-content">
                    <p className="title">{prop.name}</p>
                    {/* <p className="subtitle">Jeff Atwood</p> */}
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                        <Link to={`/reservations/${prop.name}`}>
                            Availability
                    </Link>
                    </p>
                </footer>
            </div>
        </div>

    )
}
