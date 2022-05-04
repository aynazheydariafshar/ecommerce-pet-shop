import React from 'react';
import NavbarManagment from 'Components/NavbarManagment';
import Footer from 'Components/Footer';

const ManagementLayout = ({children}) => {
    return <>
        <NavbarManagment />
        <main>{children}</main>
        <Footer />
    </>;
}


export default ManagementLayout;