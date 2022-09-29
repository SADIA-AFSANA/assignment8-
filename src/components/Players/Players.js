import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Players = () => {



    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    const handleAddToCart = (player) => {
        console.log(player);
        const newCart = [...cart, player];
        setCart(newCart);

    }

    return (
        <div>
            <div className='activities'>
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
                                handleAddToCart={handleAddToCart}
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
                    <div className='addToCart'>
                        <h2>Exercise Details</h2>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
                {/* cart */}

            </div>
            <div className='question'>
                <h1 className='text'>Answering Question</h1>
                <h2>Q:1 How does react work?</h2>
                <h4>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h4>
                <h2>Q:2 Difference between props and state</h2>
                <h4>Ans:Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</h4>
                <h2>Q:3 What else is Usifect used for other than data load?</h2>
                <h4>Ans: With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.

                    The goal of this comprehensive article is to gather information about the underlying concepts of useEffect and, in addition, to provide learnings from my own experience with the useEffect Hook.</h4>
            </div>


        </div>
    );
};

export default Players;