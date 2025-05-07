import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {logInUser, googleSignIn, setEmailForPasswordReset} = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const emailRef = useRef("");

            //log in er jonno
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        logInUser(email, password)
            .then((result)=> {
                // console.log(result.user);
                toast.success("Logged In successfully.")
                navigate(location.state ||"/home");
            })
            .catch( (error) =>{
                console.log(error.message);
                setErrorMessage("Password doesn't match")
            })

    }
    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            // console.log(result.user);
            
            navigate("/home");
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const handleEmailValue =() =>{
        const email = emailRef.current.value;
        setEmailForPasswordReset(email);
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            <Helmet>
                <title>Job Search | Login</title>
            </Helmet>
            <h2 className='text-center font-bold text-lg md:text-3xl pt-4'>Login Your Account</h2>
            <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
                        {/* email */}
                <label className="label">Email</label>
                <input type="email" ref={emailRef} className="input" name='email' placeholder="Email" required/>
                <label className="label">Password</label>
                            {/* password */}
                <input type="password"  className="input" name='password' placeholder="Password" required/>
                {
                    errorMessage && <p className='text-xs text-red-500 text-center'>{errorMessage}</p>
                }
                <div className='mb-5'><Link to='/auth/resetPassword' onClick={handleEmailValue} className="link link-hover text-warning">Forgot password?</Link></div>
                {/* GitHub */}
                {/* <button className="btn bg-black hover:bg-blue-500 text-white border-black">
                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                Login with GitHub
                </button> */}

                {/* Google */}
                <button onClick={handleGoogleSignIn} className="btn  btn-outline btn-accent hover:text-white border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
                </button>
                <button type='submit' className="btn btn-neutral hover:btn-success mt-4">Login</button>
                <p className='font-semibold text-center text-sm mt-3'>Don't have an Accout? <Link to='/auth/register' className='text-red-600 underline'> Register Here.</Link></p>
            </fieldset>
            </form>
      </div>
    );
};

export default Login;