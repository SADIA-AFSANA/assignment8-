import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props.player);
    const { picture, name, time, age, description } = props.player;
    return (
        <div className='player'>
            <img src={picture} alt="" ></img>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Time:{time}</p>
            <div>
                <button className='btn'>Add To Cart</button>
            </div>


        </div>
    );
};

export default Player;