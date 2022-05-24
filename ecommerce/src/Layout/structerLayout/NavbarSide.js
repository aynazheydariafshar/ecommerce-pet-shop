import { Container, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {FaCat , FaDog } from 'react-icons/fa';
import {GiHummingbird , GiOpenedFoodCan , GiHealthNormal} from 'react-icons/gi';
import {RiScissors2Line} from 'react-icons/ri';


const NavbarSide = () => { 
    
    const [showCat , setShowCat] = useState(false);
    const [showDog , setShowDog] = useState(false);

    return <div style={{overflowX : 'hidden',top : 0 , height:'100vh',position:'sticky' ,textAlign : 'right',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' , zIndex : 1 , alignItems: 'center' , marginLeft:'13px' , backgroundColor : '#F8F9FD'}}>
            <Container sx={{mt : '20px' , flexDirection : 'column' , alignItems : 'flex-end' , display : 'flex'}}>
                <IconButton className='menu'>
                    <Typography fontSize='17px' marginRight='8px'>
                        خانه 
                    </Typography>
                    <HomeRoundedIcon />
                </IconButton>
                <IconButton className='menu' onClick={() => setShowCat(!showCat)}>
                    <Typography  fontSize='17px' marginRight='8px'>
                        محصولات گربه
                    </Typography>
                    <FaCat fontSize='23px'/>
                </IconButton> 
                {showCat && <>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='15px' marginRight='8px'>
                        غذای خشک گربه    
                    </Typography>
                    <GiOpenedFoodCan fontSize='18px'/>
                </IconButton>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='15px' marginRight='8px'>
                        سلامتی گربه    
                    </Typography>
                    <GiHealthNormal fontSize='16px'/>
                </IconButton>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='15px' marginRight='8px'>
                        آرایش و بهداشتی  گربه    
                    </Typography>
                    <RiScissors2Line fontSize='18px'/>
                </IconButton>
                </> }
                <IconButton className='menu' onClick={() => setShowDog(!showDog)}>
                    <Typography  fontSize='17px' marginRight='8px'>
                        محصولات سگ  
                    </Typography>
                    <FaDog fontSize='23px'/>
                </IconButton> 
                {showDog && <>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='15px' marginRight='8px'>
                        غذای خشک سگ     
                    </Typography>
                    <GiOpenedFoodCan fontSize='18px'/>
                </IconButton>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='15px' marginRight='8px'>
                        سلامتی سگ     
                    </Typography>
                    <GiHealthNormal fontSize='16px'/>
                </IconButton>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='15px' marginRight='8px'>
                        آرایش و بهداشتی  سگ     
                    </Typography>
                    <RiScissors2Line fontSize='18px'/>
                </IconButton>
                </> }
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