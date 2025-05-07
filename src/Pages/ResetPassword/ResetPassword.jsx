import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ResetPassword = () => {

    const {resetPassword, emailForPasswordReset} = use(AuthContext);
    // console.log(emailForPasswordReset);
    const handleForgetPassword =()=>{
    resetPassword(emailForPasswordReset)
        .then( ()=>{
            toast.info(`An message is sent to: ${emailForPasswordReset}`)
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <Helmet>
                <title>Job Search | Reset Password</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            <h2 className='text-center font-bold text-lg md:text-3xl pt-4'>Reset Password</h2>
            <form className="card-body">
            <fieldset className="fieldset">
                        {/* email */}
                <label className="label">Email</label>
                <input type="email" value={emailForPasswordReset} className="input" name='email' placeholder="Email" required/>
                <div onClick={handleForgetPassword} className='mb-5 text-center'>
                    <a href='https://mail.google.com/mail/u/0/' className="btn btn-primary">Reset</a>
                </div>


            </fieldset>
            </form>
      </div>
        </div>
    );
};

export default ResetPassword;