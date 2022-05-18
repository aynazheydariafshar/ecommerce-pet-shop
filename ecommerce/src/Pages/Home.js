import CardProduct from 'components/CardProduct';
import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React from 'react';

const Home = () => {

    const {data , loading , error} = useFetch('products');

    return <>
        {data.map(item => {
           return <CardProduct 
                imageSrc={`http://localhost:3002/files/${item.image}`}
                titleCard={item.name}
                price = {item.price}
            />
        }) 
        }
    </>;
};


export default CustomerLayout(Home) ;