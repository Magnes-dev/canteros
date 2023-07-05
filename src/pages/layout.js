import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function Layout() {
    return (
        <>
            <Header />

            <Outlet />

            <footer>
                <h3>Footer</h3>
            </footer>
        </>
    )
}

export default Layout;