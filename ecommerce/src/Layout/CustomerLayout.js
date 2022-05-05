import React from 'react';
import Footer from 'Layout/structerLayout/Footer';
import Header from 'Layout/structerLayout/Header';
import NavbarSide from 'Layout/structerLayout/NavbarSide';

const CustomerLayout = (Component) => {
    return function(...props) {
        return<>
            <Header />
            <NavbarSide />
            <Component>{props}</Component>
            <Footer />
        </> 
    };
};


export default CustomerLayout;