import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import NavbarSide from '../Components/NavbarSide';

const CustomerLayout = ({children}) => {
    return <>
        <Header />
        <NavbarSide />
        <main>{children}</main>
        <Footer />
    </>;
}


export default CustomerLayout;