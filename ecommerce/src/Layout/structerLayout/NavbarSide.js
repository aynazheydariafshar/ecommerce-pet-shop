import { Container, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {FaCat , FaDog } from 'react-icons/fa';
import {GiHummingbird , GiOpenedFoodCan , GiHealthNormal} from 'react-icons/gi';
import {RiScissors2Line} from 'react-icons/ri';
import {Link} from 'react-router-dom';


const NavbarSide = () => { 
    
    const [showCat , setShowCat] = useState(false);
    const [showDog , setShowDog] = useState(false);

    return <div style={{overflowX : 'hidden',top : 0 , height:'100vh',position:'sticky' ,textAlign : 'right',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' , zIndex : 1 , alignItems: 'center' , marginLeft:'13px' , backgroundColor : '#F8F9FD'}}>
            <Container sx={{mt : '20px' , flexDirection : 'column' , alignItems : 'flex-end' , display : 'flex'}}>
                <Link to='/' className='link'>
                    <IconButton className='menu'>
                        <Typography fontSize='20px' marginRight='8px'>
                            خانه 
                        </Typography>
                        <HomeRoundedIcon />
                    </IconButton>
                </Link>
                <IconButton className='menu' onClick={() => setShowCat(!showCat)}>
                    <Typography  fontSize='20px' marginRight='8px'>
                        محصولات گربه
                    </Typography>
                    <FaCat fontSize='23px'/>
                </IconButton> 
                {showCat && <>
                <Link to='/category/1' className='link'>
                    <IconButton sx={{marginRight : '28px'}} className='menu'>
                        <Typography  fontSize='18px' marginRight='8px'>
                            غذای خشک گربه    
                        </Typography>
                        <GiOpenedFoodCan fontSize='18px'/>
                    </IconButton>
                </Link>
                <Link to='/category/2' className='link'>
                    <IconButton sx={{marginRight : '28px'}} className='menu'>
                        <Typography  fontSize='18px' marginRight='8px'>
                            سلامتی گربه    
                        </Typography>
                        <GiHealthNormal fontSize='16px'/>
                    </IconButton>
                </Link>    
                <Link to='/category/6' className='link'>
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='18px' marginRight='8px'>
                        آرایش و بهداشتی  گربه    
                    </Typography>
                    <RiScissors2Line fontSize='18px'/>
                </IconButton>
                </Link>
                </> }
                <IconButton className='menu' onClick={() => setShowDog(!showDog)}>
                    <Typography  fontSize='20px' marginRight='8px'>
                        محصولات سگ  
                    </Typography>
                    <FaDog fontSize='23px'/>
                </IconButton> 
                {showDog && <>
                <Link to='/category/3' className='link'>
                    <IconButton sx={{marginRight : '28px'}} className='menu'>
                        <Typography  fontSize='18px' marginRight='8px'>
                            غذای خشک سگ     
                        </Typography>
                        <GiOpenedFoodCan fontSize='18px'/>
                    </IconButton>
                </Link>    
                <Link to='/category/4' className='link'>
                    <IconButton sx={{marginRight : '28px'}} className='menu'>
                        <Typography  fontSize='18px' marginRight='8px'>
                            سلامتی سگ     
                        </Typography>
                        <GiHealthNormal fontSize='16px'/>
                    </IconButton>
                </Link>
                <Link to='/category/7' className='link'>    
                <IconButton sx={{marginRight : '28px'}} className='menu'>
                    <Typography  fontSize='18px' marginRight='8px'>
                        آرایش و بهداشتی  سگ     
                    </Typography>
                    <RiScissors2Line fontSize='18px'/>
                </IconButton>
                </Link>
                </> }
                <Link to='/category/5' className='link'>
                    <IconButton className='menu'>
                        <Typography  fontSize='20px' marginRight='8px'>
                            محصولات پرندگان 
                        </Typography>
                        <GiHummingbird fontSize='23px'/>
                    </IconButton> 
                </Link>    
            </Container> 
        </div>
}


export default NavbarSide;