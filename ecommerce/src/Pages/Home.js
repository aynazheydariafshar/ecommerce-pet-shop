import { Box, Pagination, Stack } from '@mui/material';
import CardProduct from 'components/CardProduct';
import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React from 'react';

const Home = () => {

    const {data , loading , error} = useFetch('products');
    return <Box sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'center'}}>
        <Box sx={{display : 'flex' , flexDirection : {md : 'row' , sm : 'column'} , justifyContent : 'space-around' , alignItems : 'center' , flexWrap : 'wrap' , py : '30px'}}>
        {data.map(item => {
            return <CardProduct 
                imageSrc={`http://localhost:3002/files/${item.image}`}
                titleCard={item.name}
                price = {item.price}
                brand = {item.brand}
            />
        }) 
        }
        </Box> 
        <Stack padding='40px'>
            <Pagination count={10} color="secondary" />
        </Stack>
    </Box>
};


export default CustomerLayout(Home) ;