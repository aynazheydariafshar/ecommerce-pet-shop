import React from 'react';
import NavbarManagment from 'Layout/structerLayout/NavbarManagment';
import Footer from 'Layout/structerLayout/Footer';

const ManagementLayout = (Component) => {
    return function(...props){
        return<>
            <NavbarManagment />
            <Component>{props}</Component>
            <Footer />
        </>
    };
};


export default ManagementLayout;