import React, { use } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import logoImg from '../../assets/logo.jpg'
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaUserCircle } from "react-icons/fa";
import { motion} from 'framer-motion';

const Navbar = () => {
    const{user, logOut} = use(AuthContext);
    const navigate = useNavigate();
    // console.log(user);
    const handleLogOut =() =>{
        logOut()
            .then(()=>{
                toast.success("Logged Out")
            })
            .catch( error =>{
                toast.error("error:", error)
            })
    }

    return (
        
        <div>
             
            <div className="navbar w-11/12 mx-auto">
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
                            <li className='text-lg'><NavLink to='/faqAll' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>FAQ</NavLink></li>
                        </ul>
                    </div >
                    <div className='flex items-center'>
                    <img className='hidden sm:block sm:w-10 sm:h-10 md:w-15 md:h-15  rounded-full' src={logoImg}></img>
                    <motion.div className='p-6' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} >
                        <Link to='/' className="text-xs md:text-base lg:text-xl text-green-900">Job Hunt</Link>
                    </motion.div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                   
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>Home</NavLink></li>
                        <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>About</NavLink></li>
                        <li className='text-lg'><NavLink to='/faqAll' className={({isActive})=> isActive ? 'underline text-red-600' : ''}>FAQ</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-2">
                    {
                        user?
                        <Link to='/profile'>
                            <div className='w-12 p-0.5 bg-black rounded-full'>
                                <img className='rounded-full' src={user?.photoURL}></img>
                            </div>
                        </Link>

                        :
                        <div className='cursor-pointer' onClick={()=>navigate('/auth/login')}>
                            <FaUserCircle  size={35}></FaUserCircle>
                        </div>
                           
                            
                    
                        
                    }
                    </div>
                    {
                        user?
                        <button onClick={handleLogOut} 
                        className="btn font-medium text-xs md:text-base  p-1 sm:p-2">Log Out</button>
                        :
                        <div>
                        <Link to='/auth/login' className="btn font-medium mr-2 text-xs md:text-base  p-1 sm:p-2">Log In</Link>
                        <Link to='/auth/register' className="btn font-medium text-xs md:text-base  p-1 sm:p-2">Register</Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;