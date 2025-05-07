import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const ProfileLayout = () => {
    return (
        <div>
            <header className='bg-base-200 '>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='bg-red-50'>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default ProfileLayout;