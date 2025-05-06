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
            <header className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
            </header>
            <section className='w-11/12 mx-auto'>
                <Hero></Hero>
            </section>
            <main>
                <section>
                    <Suspense fallback={<Loading></Loading>}>
                            <Companies></Companies>
                    </Suspense>
                    
                </section>
                <Outlet></Outlet>
            </main>
            
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;