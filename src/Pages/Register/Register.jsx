import React, { use, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const Register = () => {
    const {createUser} = use(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(" ");
    const [success, setSuccess] = useState(false);
    const handleRegister =(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
                    // na dile  ager error/success message state e dhore thakbe, tai reset korlam
                // dewar arekta karon hoilo if er pore amra else {} dei nai. else dile eta lage na
       setSuccess(false)
                    // password vlaidation
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,}/; 
        if(!passwordRegExp.test(password)){
            setErrorMessage("password Must have an Uppercase letter, Lowercase letter and length at least 6 characters");
            return;
        }
        else{
            setErrorMessage("");
        }
                    //create user with firebase
        createUser(email, password) 
                .then(result =>{
                    console.log(result.user);
                    setSuccess(true);
                    navigate('/home');
                })
                .catch( (error) =>{
                    console.log(error.message);
                })
            
    }
    
    
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            <h2 className='text-center font-bold text-lg md:text-3xl'>Sign Up</h2>
            <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
                            {/* Name */}
                <label className="label">Name</label>
                <input type="text" className="input" name='name' placeholder="Name" />
                            {/* photo */}
                <label className="label">Photo</label>
                <input type="text" className="input" name='photo' placeholder="Photo URL" />
                            {/* Email */}
                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" required/>
                                {/* password */}
                <label className="label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" required/>
                 {
                    errorMessage && <p className='text-red-500 text-xs px-2'> {errorMessage}</p>
                 }
              
                <button type='submit' className="btn btn-neutral hover:btn-success mt-4">Register</button>
                {
                    success && <p className='text-green-500 text-xs px-2 text-center mt-1'> Registration Successful </p>
                }
                <p className='font-semibold text-center text-sm mt-3'>Already have an Accout? <Link to='/auth/login' className='text-red-600 underline'> Login Your Account.</Link></p>
            </fieldset>
            </form>
        </div>
    );
};

export default Register;