import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <div className="pt-[92px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
