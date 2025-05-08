import React from 'react';
import directionImg from '../../assets/direction_man.jpg'
import { useNavigate } from 'react-router';

const CreateCv = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className='flex flex-col sm:flex-row gap-10'>
                <div className=''>
                    <img className='bg-base-300 h-full object-cover' src={directionImg}></img>
                </div>
                <div className='w-[50%] p-10'>
                    <h2 className='text-lg md:text-xl lg:text-3xl font-bold mb-2'>Resume Builder
                    </h2>
                    <p className="py-6 text-justify font-thin text-xs sm:text-sm md:text-base leading-8">Create and download a professional-looking resume, that matches all recent job circular, in minutes with our easy-to-use resume builder. Skill Jobs provides you with the most trusted resume-maker tool on the internet that will make your job application effective.</p>
                    <button onClick={()=>{navigate("/cv")}} className='btn btn-success'>Create Your Resume</button>
                </div>
            </div>
        </div>
    );
};

export default CreateCv;