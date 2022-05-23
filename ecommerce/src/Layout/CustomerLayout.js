import React from 'react';
import Footer from 'layout/structerLayout/Footer';
import Header from 'layout/structerLayout/Header';
import NavbarSide from 'layout/structerLayout/NavbarSide';
import { Grid } from '@mui/material';

const CustomerLayout = (Component) => {
    return function(...props) {
        return<div>
            <Header />
            <Grid container>
                <Grid item sm={9} xs={11}>
                    <Component>{props}</Component>
                </Grid>
                <Grid item sm={3} xs={1}>
                    <NavbarSide />
                </Grid>
            </Grid>
            <Footer />
        </div> 
    };
};


export default CustomerLayout;