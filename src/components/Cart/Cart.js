import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    for (const player of cart) {
        total = parseInt(total + player.time);
    }
    return (
        <div>
            <div>
                <h3>Exercise time : {total}s</h3>

            </div>
        </div>
    );
};

export default Cart;