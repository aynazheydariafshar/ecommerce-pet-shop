import { Grid } from '@mui/material';
import React from 'react';
import LoginImage from 'assets/images/24237-Cat-Dog-CorgiCat-Dog-HD-Wallpaper.jpg'

const Login = () => {
    return <div>
        <Grid container sx = {{minHeight : '100vh' , overflowY : 'hidden'}}>
            <Grid item xs={12} sm={6}>
                <img src={LoginImage} width='100%' height='100%' style={{objectFit : 'cover'}}/>
            </Grid>
            <Grid container xs={12} sm={6}>
                <div>
                    <Grid>

                    </Grid>
                </div>
            </Grid>
        </Grid>
    </div>;
}


export default Login;