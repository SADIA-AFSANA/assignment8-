import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Players.css'

const Players = () => {
    return (<div className='activities'>
        <div className="players-container">
            <div className='fontAwsome' >
                <FontAwesomeIcon icon={faBriefcaseClock}></FontAwesomeIcon>
                <h2>Cricket-Club</h2>
            </div>
        </div>
        <div className="cart-container">
            <h1>My-Profile</h1>
        </div>
    </div>

    );
};

export default Players;