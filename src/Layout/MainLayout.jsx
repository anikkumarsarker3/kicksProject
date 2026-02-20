import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div >
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;