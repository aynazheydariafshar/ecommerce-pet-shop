import Cart from 'components/Cart';
import React from 'react';
import notFound from 'assets/images/404 Error with a cute animal-amico.png';
import { Typography } from '@mui/material';

const NotFound = () => {
    return <Cart width='60%' padding='20px'>
        <img src={notFound} width='400px' height='400px' alt='NotFound'/>
        <Typography variant='h5' fontWeight='bold'>
            صفحه موردنظر پیدا نشد
        </Typography>
    </Cart>;
}


export default NotFound;