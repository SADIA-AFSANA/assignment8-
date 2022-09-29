import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    return (<div className='activities'>
        <div className="players-container">
            <div className='fontAwsome' >
                <FontAwesomeIcon icon={faBriefcaseClock}></FontAwesomeIcon>
                <h2>Exercise-Club</h2>

            </div>
            <div className='short-p'>
                <h3>Select Best Exercise</h3>
            </div>
            <div className='player-container'>
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                    ></Player>)
                }
            </div>
        </div>
        <div className="cart-container">

            <div className='name'>
                <h1>Sadia Afsana</h1>
                <p>@ Cumilla,Bangladesh</p>
            </div>
            <div className='my-details'>
                <div>
                    <h4>80kg</h4>
                    <h3>Weight</h3>
                </div>
                <div>
                    <h4>5feet</h4>
                    <h3>Height</h3>
                </div>
                <div>
                    <h4>40yrs</h4>
                    <h3>Age</h3>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Players;