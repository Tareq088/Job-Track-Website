import React from 'react';
import logoImg from '../../assets/logo.jpg'
import { NavLink } from 'react-router';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { SiNetlify } from 'react-icons/si';

const Footer = () => {
    return (
        <div className='flex flex-col items-center bg-gray-400 py-5'>
            <img src={logoImg} alt="Logo png" />
            <div className="navbar-center :flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Home</NavLink></li>
                        <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>About</NavLink></li>
                        <li className='text-lg'><NavLink to='/contact' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Contact</NavLink></li>
                    </ul>
            </div>
            <hr className='text-gray-50 border-dotted w-full my-3'/>
            <div className='flex gap-2'>
                <a className='text-xl' href="https://www.facebook.com/"><FaFacebook color='blue'/></a>
                <a className='text-xl' href="https://github.com/Tareq088"><IoLogoFigma color='black'/></a>
                <a className='text-xl' href="https://app.netlify.com/teams/tareqrahman342"><SiNetlify color='green'/></a>
            </div>

        </div>
    );
};

export default Footer;