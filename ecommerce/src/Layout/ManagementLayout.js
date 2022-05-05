import React from 'react';
import NavbarManagment from 'layout/structerLayout/NavbarManagment';
import Footer from 'layout/structerLayout/Footer';

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