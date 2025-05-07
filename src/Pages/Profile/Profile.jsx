import React, { use } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
    const {user} = use(AuthContext);
    // console.log(user)
    return (
        <div>
            {/* <header className='bg-base-200 '>
                <Navbar></Navbar>
            </header> */}
            <main className='my-10 flex flex-col gap-2 items-center'>
                    <h2 className='text-lg md:text-2xl lg:text-4xl text-red-950 font-bold text-center mb-10'>My Profile Page</h2>
                    <div className='w-50'>
                        <img className='rounded-full' src={user.photoURL}></img>
                    </div>
                    <h2 className='font-bold text-3xl'>Name: {user.displayName}</h2>
                    <p className='mb-2'>{user.email}</p>
                    <Link to='/profile/edit' className='btn btn-success'> Update Profile</Link>
            </main>
            {/* <footer className='bg-red-50'>
                <Footer></Footer>
            </footer> */}
        </div>
    );
};

export default Profile;