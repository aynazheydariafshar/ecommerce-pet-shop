import { Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {FaCat , FaDog , FaKiwiBird} from 'react-icons/fa'

const NavbarSide = () => {    
    return <Container sx={{pt : '10px',overflowX : 'hidden' , textAlign : 'right'}}>
        <IconButton>
            <Typography fontSize='20px'>
                خانه 
            </Typography>
            <HomeRoundedIcon />
        </IconButton>
        <IconButton>
            <Typography  fontSize='20px'>
                 محصولات گربه
            </Typography>
            <FaCat />
        </IconButton> 
        <IconButton>
            <Typography  fontSize='20px'>
                محصولات سگ ها 
            </Typography>
            <FaDog />
        </IconButton> 
        <IconButton>
            <Typography  fontSize='20px'>
                محصولات پرندگان 
            </Typography>
            <FaKiwiBird />
        </IconButton> 
    </Container>
}


export default NavbarSide;