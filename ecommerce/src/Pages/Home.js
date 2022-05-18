import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React from 'react';

const Home = () => {

    const {data , loading , error} = useFetch('products');

    return <>
    </>;
};


export default CustomerLayout(Home) ;