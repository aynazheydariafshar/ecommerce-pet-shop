import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import useCategory from 'hooks/useCategory';
import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {MdOutlineAddCircleOutline} from 'react-icons/md'
import {CgUnavailable} from 'react-icons/cg'
import Cart from 'components/Cart';

const Product = () => {

    const dataParams = useParams();
    const {data , loading , error} = useFetch('products');
    const {category , loadingcategory , errorcategory} = useCategory();


    const [product , setProduct] = useState();

    const filterData = () => {
        return data.filter(item => item.id === +dataParams.id)
    }
    
    useEffect(() => {
        setProduct(filterData);
    }, [data])
   
   return <>
        {product?.map(item =>{
            return (
            <>
                <Cart>
                    <Box sx={{textAlign : 'right'}}>
                        <Typography variant="h5" sx={{fontWeight : 'bold' , paddingY : '10px'}} component="div">
                            {item.name} 
                        </Typography>
                    <Typography color='#652AD2' paddingY='5px'>
                        {category?.map(el => {
                            if(item.category === el.id){
                                return (
                                    <>
                                    <span style={{fontWeight : 'bold'}}>{`${el.group}`}</span>
                                    {el.subgroup && <span style={{fontWeight : 'bold'}}>{`>${el.subgroup}`}</span>}
                                    </>
                                )
                            }
                        })}
                    </Typography>
                        <Typography color='success.main' variant="h6" component="div" sx={{paddingY : '5px' , fontWeight : 'bold'}}>
                            قیمت : {item.price} تومان
                        </Typography>
                        <Typography variant="h7" component="div" sx={{paddingY : '5px' , fontWeight : 'bold'}}>
                            برند : {item.brand} 
                        </Typography>
                        <Typography variant="h7" component="div" sx={{paddingY : '5px' , fontWeight : 'bold'}}>
                            گونه حیوان : {item.type} 
                        </Typography>
                        <Typography variant="h7" component="div" sx={{paddingY : '5px' , fontWeight : 'bold'}}>
                            وزن  : {`${item.weight} گرم`} 
                        </Typography>
                        {item.detailes && <Typography variant="h7" component="div" sx={{paddingY : '15px'}}>
                           : سایر مشخصات 
                            <ul style={{listStyleType : 'none'}}>
                                {item.detailes?.map(i => <li style={{marginRight : '30px'}}>{i}</li>)}
                            </ul>    
                        </Typography>}
                        {item.count === 0 ? 
                        <Box sx={{display : 'flex' , alignItems : 'center'}}>
                            <Typography variant="h6" component="div" sx={{float : 'left',paddingY : '15px' , fontWeight : 'bold' , color : 'red'}}>ناموجود </Typography> 
                            <CgUnavailable color='red' fontSize='20px'/>
                        </Box> :
                        <Box sx={{display : 'flex' , alignItems : 'center'}}>
                            <Button color = "secondary"  variant="contained" sx={{float : 'left' , marginTop : '20px' }} endIcon={<MdOutlineAddCircleOutline />}>
                                افزودن به سبد خرید
                            </Button>
                            
                        </Box>}
                    </Box>
                    <Box padding='10px'>
                        <img src={`http://localhost:3002/files/${item.image}`} width="300px" height='300px'/>
                    </Box>
                </Cart>
                {item.description && <Typography variant="h6" component="div" sx={{padding : '35px' , marginX : '50px' , textAlign : 'right' , marginBottom : '150px'}}>
                   : توضیحات 
                    <div>{item.description} </div>
                </Typography>}
            </>
            )
        }
        )}
    </>;
};

export default CustomerLayout(Product);