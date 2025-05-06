import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/logo.jpg'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Home</NavLink></li>
                            <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>About</NavLink></li>
                            <li className='text-lg'><NavLink to='/contact' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Contact</NavLink></li>
                        </ul>
                    </div >
                    <div className='flex items-center'>
                    <img className='hidden sm:block sm: w-15 md:w-20 lg:w-35' src={logoImg}></img>
                    <Link to='/' className="text-xs md:text-base lg:text-xl text-green-900">Job Hunt</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Home</NavLink></li>
                        <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>About</NavLink></li>
                        <li className='text-lg'><NavLink to='/contact' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/' className="mr-2">Profile</Link>
                    <Link to='/auth/login' className="btn font-medium mr-2 text-xs md:text-base  p-1 sm:p-2">Log In</Link>
                    <Link to='/auth/register' className="btn font-medium text-xs md:text-base  p-1 sm:p-2">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;