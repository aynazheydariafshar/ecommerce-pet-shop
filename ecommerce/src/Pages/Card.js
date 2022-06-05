import Cart from 'components/Cart';
import CustomerLayout from 'layout/CustomerLayout';
import React from 'react';
import { useSelector } from 'react-redux';
import Emptycart from 'assets/images/emptycart.png';
import { Typography } from '@mui/material';

const Card = () => {

    //select cart from redux
    const cart = useSelector(state => state.cart);

    return <>
        <Cart padding='0px'>
            {cart.cartItems.length === 0 ? 
            <div>
                <Typography marginTop='40px' variant='h6' fontWeight='bold'>سبد خرید شما در حال حاضر خالی است</Typography>
                <img src={Emptycart} alt='emptycart' width='400px' height='400px' />
            </div> : <h1>vgj</h1>}
        </Cart>
    </>;
};


export default CustomerLayout(Card);