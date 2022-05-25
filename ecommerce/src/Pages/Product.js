import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import useCategory from 'hooks/useCategory';
import useFetch from 'hooks/useFetch';
import CustomerLayout from 'layout/CustomerLayout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {MdOutlineAddCircleOutline} from 'react-icons/md'
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
            <Box sx={{display : 'flex', flexDirection : 'column' , justifyContent : 'space-around', alignItems : 'center',}}>
                <Box
                    sx={{
                    overflowY : 'hidden',    
                    width: '85%',
                    height: '70%',
                    display : 'flex',
                    flexDirection : {md : 'row' , sm : 'column'},
                    justifyContent : 'space-around',
                    alignItems : 'center',
                    background : '#F8F9FD',
                    boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',                  
                    borderRadius : 2,
                    padding : '75px',
                    marginY : '20px',
                    marginLeft : {md:'100px' , sm : '50px'},
                }}
                >
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
                        <Typography style={{fontWeight : 'bold'}} color='error.main' variant="h6" component="div" sx={{paddingY : '5px'}}>
                            قیمت : {item.price} تومان
                        </Typography>
                        <Typography style={{fontWeight : 'bold'}} variant="h6" component="div" sx={{paddingY : '5px'}}>
                            برند : {item.brand} 
                        </Typography>
                        <Typography style={{fontWeight : 'bold'}} variant="h6" component="div" sx={{paddingY : '5px'}}>
                            گونه حیوان : {item.type} 
                        </Typography>
                        <Typography style={{fontWeight : 'bold'}} variant="h6" component="div" sx={{paddingY : '5px'}}>
                            وزن  : {`${item.weight} گرم`} 
                        </Typography>
                        <Typography variant="h6" component="div" sx={{paddingY : '15px'}}>
                           : سایر مشخصات 
                            <ul style={{listStyleType : 'none'}}>
                                {item.detailes.map(i => <li style={{marginRight : '30px'}}>{i}</li>)}
                            </ul>    
                        </Typography>
                        <Button color = "secondary"  variant="contained" sx={{float : 'left'}} endIcon={<MdOutlineAddCircleOutline />}>
                            افزودن به سبد خرید
                        </Button>
                    </Box>
                    <Box padding='10px'>
                        <img src={`http://localhost:3002/files/${item.image}`} width="300px" height='300px'/>
                    </Box>
                </Box>

            </Box>  
                {item.description && <Typography variant="h6" component="div" sx={{padding : '35px' , marginX : '50px' , textAlign : 'right'}}>
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