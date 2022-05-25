import { Box } from "@mui/material";
import useFetch from "hooks/useFetch";
import CustomerLayout from "layout/CustomerLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "../components/CardProduct";

const Category = () => {
    const dataParams = useParams();
    const {data , loading , error} = useFetch('products');
    const [product , setproduct] = useState()
    const filterProduct = () => {
        return data.filter(item => item.category === +dataParams.idcategory);
    }
    
    useEffect(() => {
        setproduct(filterProduct())
        console.log(product)
    }, [product])

    return (
        <Box sx={{display : 'flex' , flexDirection : {md : 'row' , sm : 'column'} , justifyContent : 'space-around' , alignItems : 'center' , flexWrap : 'wrap' , py : '30px'}}>
        {product?.map(item => {
           return <CardProduct 
                imageSrc={`http://localhost:3002/files/${item.image}`}
                titleCard={item.name}
                price = {item.price}
                brand = {item.brand}
            />
        }) 
        }
    </Box>
    )

}

export default CustomerLayout(Category);