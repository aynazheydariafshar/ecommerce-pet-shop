import Cart from 'components/Cart';
import CustomerLayout from 'layout/CustomerLayout';
import React from 'react';
import successful from 'assets/images/Dog paw-amico.png';
import { Typography } from '@mui/material';

const Successful = () => {
    return <Cart width='75%' padding='25px'>
        <img src={successful} width='400px' height='400px' alt='successful'/>
        <Typography fontWeight='bold' variant='h6' align='right'>
             با تشکر از پرداخت شما ،
            سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد
        </Typography>
    </Cart>;
}


export default CustomerLayout(Successful);