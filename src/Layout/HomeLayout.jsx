import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer/Footer';
import Companies from '../Components/Companies/Companies';
import Loading from '../Pages/Loading/Loading';

const HomeLayout = () => {
    return (
        <div>
            <header className='bg-base-200 '>
                    <Navbar></Navbar>
            </header>
            <section className=' bg-linear-to-r from-blue-200 to to-blue-50'>
                <Hero></Hero>
            </section>
            <main>
                <section className='bg-amber-50'>
                    <Suspense fallback={<Loading></Loading>}>
                            <Companies></Companies>
                    </Suspense>
                    
                </section>
                <Outlet></Outlet>
            </main>
            
            <footer className='bg-red-50'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;