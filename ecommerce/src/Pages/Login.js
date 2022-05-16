import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import LoginImage from 'assets/images/24237-Cat-Dog-CorgiCat-Dog-HD-Wallpaper.jpg'
import Logo from 'assets/images/logo.png';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import DoorBackRoundedIcon from '@mui/icons-material/DoorBackRounded';
import {Link , useStory} from "react-router-dom";
const Login = () => {
    const history = useStory()
    useEffect(() => {
       if(localStorage.getItem('user-Info')){
           history.push('/management-productes')
       }
    }, [])
    return <div>
        <Grid container sx = {{minHeight : '100vh' , overflowY : 'hidden'}}>
            <Grid item xs={12} sm={6}>
                <img alt='animal' src={LoginImage} width='100%' height='100%' style={{objectFit : 'cover'}}/>
            </Grid>
            <Grid 
                container 
                alignItems='center' 
                direction='column'
                justifyContent='space-around' 
                xs={12} 
                sm={6}
                sx={{my : {xs : '30px' , sm :'0px'}}}
            >
                <div style={{display : 'flex' , flexDirection :'column' , maxWidth : 400 ,boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', minWidth : 300 , padding : '25px'}}>
                    <Grid container justifyContent='center'>
                        <img src={Logo} alt="logo" width='50px' height='50px'/>
                    </Grid>
                    <TextField  
                        variant="standard" 
                        type='text' 
                        label='نام کاربری' 
                        margin='normal'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonRoundedIcon />
                              </InputAdornment>
                            ),
                        }}
                    />
                    <TextField  
                        variant="standard" 
                        type='password' 
                        label='رمز عبور' 
                        margin='normal'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <KeyRoundedIcon />
                              </InputAdornment>
                            ),
                        }}
                    />
                    <Button sx={{my : '20px'}} color='primary' variant='contained'>
                        ورود
                    </Button>
                    <Link to='/'>
                        <DoorBackRoundedIcon color="action"/>
                    </Link>
                </div>
            </Grid>
        </Grid>
    </div>;
}


export default Login;