import { Box , Grid } from '@mui/material';
import CardProduct from 'components/CardProduct';
import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import NavbarSide from 'layout/structerLayout/NavbarSide';
import React from 'react';

const Home = () => {

    const {data , loading , error} = useFetch('products');

    return <>
        <Grid item md={9} sm={8} xs={7}>
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
        </Grid>
        <Grid item md={3} sm={4} xs={5}>
            <NavbarSide />
        </Grid>       
    </>
};


export default CustomerLayout(Home) ;