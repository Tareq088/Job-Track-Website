import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Job Search | Home</title>
        </Helmet>
        <Navigate to='/'></Navigate>
        </>
        )
}

export default Home;