import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    for (const player of cart) {
        total = parseInt(total + player.time);
    }


    const [breakeTime, setBreakTime] = useState(0);
    const display = (time) => {

        localStorage.setItem('time', breakeTime)
        const breakTime = localStorage.getItem('time');

        setBreakTime(time)
    }
    // useEffect(() => {
    //     localStorage.setItem('time', breakeTime)

    // }, [breakeTime]);

    return (
        <div>
            <div>
                <h3>Exercise time : {total}s</h3>
                <div>
                    <h2>Add A Break</h2>
                    <button onClick={() => display(30)} className='cart-btn'>30</button>
                    <button onClick={() => display(40)} className='cart-btn'>40</button>
                    <button onClick={() => display(50)} className='cart-btn'>50</button>
                    <button onClick={() => display(60)} className='cart-btn'>60</button>
                </div>
                <div>
                    <h3>Break time : {breakeTime}</h3>
                </div>

            </div>
        </div>
    );
};

export default Cart;