import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props.player);
    const { picture, name, time, age, description } = props.player;
    return (
        <div className='player'>
            <img src={picture} alt="" ></img>
            <div className='info'>
                <h3>{name}</h3>
                <p>Age: {age}</p>
                <p>Time:{time}</p>
            </div>
            <div>
                <button className='btn'>Add To Cart</button>
            </div>


        </div>
    );
};

export default Player;