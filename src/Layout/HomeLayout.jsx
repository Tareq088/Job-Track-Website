import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer/Footer';
import Companies from '../Components/Companies/Companies';
import Loading from '../Pages/Loading/Loading';

import Features from './../Components/Features/Features';
import CreateCv from '../Components/CreateCv/CreateCv';
import Faq from '../Components/Faq/Faq';


const HomeLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10000 bg-base-200 '>
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
                <section className='bg-[#03438c]'>
                    <Features></Features>
                </section>
                <section className='bg-base-300'>
                        <CreateCv></CreateCv>
                </section>
                <section className='bg-base-200'>
                    <Suspense fallback={<Loading></Loading>}>
                        <Faq></Faq>
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