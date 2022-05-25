import { Box, Pagination, Stack } from '@mui/material';
import CardProduct from 'components/CardProduct';
import PaginationPage from 'components/PaginationPage';
import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React, { useState } from 'react';

const Home = () => {

    //data from products database
    const {data , loading , error} = useFetch('products');

    //pagination data
    let [page, setPage] = useState(1);
    const perPage = 6;
  
    const count = Math.ceil(data.length / perPage);
    const product = PaginationPage(data, perPage);
  
    const handleChange = (e, p) => {
      setPage(p);
        product.jump(p);
    };


    return <Box sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'center'}}>
        <Box sx={{display : 'flex' , flexDirection : {md : 'row' , sm : 'column'} , justifyContent : 'space-around' , alignItems : 'center' , flexWrap : 'wrap' , py : '30px'}}>
        {product.currentData().map(item => {
            return <CardProduct 
                imageSrc={`http://localhost:3002/files/${item.image}`}
                titleCard={item.name}
                price = {item.price}
                brand = {item.brand}
            />
        }) 
        }
        </Box> 
        <Stack padding='30px'>
            <Pagination 
                size="large" 
                count={count} 
                color="secondary" 
                onChange={handleChange}
                page={page}
            />
        </Stack>
    </Box>
};


export default CustomerLayout(Home) ;