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
                <Component>{props}</Component>
            </Grid>
            <Footer />
        </div> 
    };
    return WithCustomerLayout;
};


export default CustomerLayout;