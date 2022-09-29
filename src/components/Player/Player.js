import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props.player);
    // const { handleAddToCart } = props;
    const { picture, name, time, age } = props.player;


    return (
        <div className='player'>
            <img src={picture} alt="" ></img>
            <div className='info'>
                <h3>{name}</h3>
                <p>Age: {age}</p>
                <p>Time:{time}s</p>
            </div>
            <div>
                <button onClick={() => props.handleAddToCart(props.player)} className='btn'>Add To Cart</button>
            </div>


        </div>
    );
};

export default Player;