import React, { useState } from 'react';
import Footer from 'layout/structerLayout/Footer';
import Header from 'layout/structerLayout/Header';
import NavbarSide from 'layout/structerLayout/NavbarSide';
import { Grid } from '@mui/material';

const CustomerLayout = (Component) => {
    const WithCustomerLayout = (...props) => {
        return<div>
            <Header />
            <Grid container>
                <Grid item md={9} sm={8} xs={7}>
                    <Component>{props}</Component>
                </Grid>
                <Grid item md={3} sm={4} xs={5}>
                    <NavbarSide />
                </Grid>
            </Grid>
            <Footer />
        </div> 
    };
    return WithCustomerLayout;
};


export default CustomerLayout;