import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (<div className='activities'>
        <div className="players-container">
            <div className='fontAwsome' >
                <FontAwesomeIcon icon={faBriefcaseClock}></FontAwesomeIcon>
                <h2>Cricket-Club</h2>

            </div>
            <div className='short-p'>
                <h3>Select Best Players</h3>
            </div>
        </div>
        <div className="cart-container">
            <h1>My-Profile</h1>
        </div>
    </div>

    );
};

export default Players;