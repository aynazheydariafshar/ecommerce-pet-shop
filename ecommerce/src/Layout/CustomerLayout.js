import React from 'react';
import Footer from 'layout/structerLayout/Footer';
import Header from 'layout/structerLayout/Header';
import NavbarSide from 'layout/structerLayout/NavbarSide';

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