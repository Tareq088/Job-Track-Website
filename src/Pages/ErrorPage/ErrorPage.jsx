import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router';
import Button from '../../Components/UI/Button';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center space-y-5 p-2'>
                <h1 className='text-9xl text-red-700 font-extrabold mt-10 mb-5'>404</h1>
                <p>Oops! The page You are looking for doesn't exist.</p>
                <Link to='/'><Button label='Go Back Home'></Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;