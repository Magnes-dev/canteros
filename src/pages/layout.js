import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/login';

function Layout() {
    return (
        <>
            {document.cookie === '' && <Login />}            

            <Header />

            <Outlet />

            <Footer />
        </>
    )
}

export default Layout;