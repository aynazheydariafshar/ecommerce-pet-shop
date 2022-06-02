import { Box, Pagination, Stack } from "@mui/material";
import PaginationPage from "components/PaginationPage";
import useFetch from "hooks/useFetch";
import CustomerLayout from "layout/CustomerLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";

const Category = () => {
    const dataParams = useParams();
    const {data , loading , error} = useFetch('products');
    const [product , setproduct] = useState(data)
    const filterProduct = () => {
        return data.filter(item => item.category === +dataParams.idcategory);
    }

    let [page, setPage] = useState(1);
    const perPage = 6;
  
    const count = Math.ceil(product.length / perPage);
    const productPage = PaginationPage(product, perPage);
  
    const handleChange = (e, p) => {
      setPage(p);
      productPage.jump(p);
    };

    useEffect(() => {
        setproduct(filterProduct())
    }, [product])

    return (
    <Box sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'center'}}>
        <Box sx={{display : 'flex' , flexDirection : {md : 'row' , sm : 'column'} , justifyContent : 'space-around' , alignItems : 'center' , flexWrap : 'wrap' , py : '30px'}}>
        {productPage.currentData()?.map(item => {
           return <Link className='link' to={`/products/${item.id}`}>
            <CardProduct 
                    imageSrc={`http://localhost:3002/files/${item.image}`}
                    titleCard={item.name}
                    price = {item.price}
                    brand = {item.brand}
                />
            </Link>
        }) 
        }
        </Box>
        <Stack className="pager" padding='30px'>
            <Pagination 
                size="large" 
                count={count} 
                color="secondary" 
                onChange={handleChange}
                page={page}
            />
        </Stack>
    </Box>
    )

}

export default CustomerLayout(Category);