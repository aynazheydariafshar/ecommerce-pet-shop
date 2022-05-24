import { Container, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {FaCat , FaDog } from 'react-icons/fa';
import {GiHummingbird} from 'react-icons/gi'

const NavbarSide = () => {    
    return <div style={{overflowX : 'hidden',top : 0 , height:'100vh',position:'sticky' ,textAlign : 'right',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' , zIndex : 1 , alignItems: 'center' , marginLeft:'13px' , backgroundColor : '#F8F9FD'}}>
            <Container sx={{mt : '10px' , flexDirection : 'column' , alignItems : 'flex-end' , display : 'flex'}}>
                <IconButton className='menu'>
                    <Typography fontSize='17px' marginRight='8px'>
                        خانه 
                    </Typography>
                    <HomeRoundedIcon />
                </IconButton>
                <IconButton className='menu'>
                    <Typography  fontSize='17px' marginRight='8px'>
                        محصولات گربه
                    </Typography>
                    <FaCat fontSize='23px'/>
                </IconButton> 
                <IconButton className='menu'>
                    <Typography  fontSize='17px' marginRight='8px'>
                        محصولات سگ ها 
                    </Typography>
                    <FaDog fontSize='23px'/>
                </IconButton> 
                <IconButton className='menu'>
                    <Typography  fontSize='17px' marginRight='8px'>
                        محصولات پرندگان 
                    </Typography>
                    <GiHummingbird fontSize='23px'/>
                </IconButton> 
            </Container> 
        </div>
}


export default NavbarSide;