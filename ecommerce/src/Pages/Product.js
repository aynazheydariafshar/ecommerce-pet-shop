import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Product = () => {

    const dataParams = useParams();
    const {data , loading , error} = useFetch('products');
    const [product , setProduct] = useState();

    const filterData = () => {
        return data.filter(item => item.id === +dataParams.id)
    }

    useEffect(() => {
        setProduct(filterData);
    }, [product])
   
   return <>
        {product?.map(item =><h1>{item.name}</h1>)}
    </>;
};

export default CustomerLayout(Product);