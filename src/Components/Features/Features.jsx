import React from 'react';
import job1 from "../../assets/companies job.jpg"
import job2 from "../../assets/jobs.jpg"
import CountUp from 'react-countup';

const Features = () => {
    return (
        <div className='mx-auto'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='text-white pl-20 py-20 pr-10'>
                    <h2 className='text-lg md:text-xl lg:text-3xl font-bold mb-2'>Become A Prime Member</h2>
                    <p className="py-6 text-justify font-thin text-xs sm:text-sm md:text-base leading-8">Skill Jobs is a popular job site and a comprehensive career solutions provider. Our paid membership offers a complete career guide with step-by-step directions on how to create an outstanding resume, ace the interview, and find the right job. This package enables job seekers to get access to all of our premium resources such as pro resume builder, skills tests, career toolkit, remote work and so on.</p>
                    <button className='btn btn-outline p-4 font-semibold text-lg'>Be a Prime Member</button>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div className=''>
                            <img className='object-cover w-full' src={job1} alt="" />
                        </div>  
                        <div className='flex justify-center items-center'>
                            <p className='font-bold text-3xl text-white text-center p-5'><CountUp start={0} end={100}></CountUp> + Companies</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-white flex justify-center items-center'>
                            <p className='font-bold text-3xl p-5 text-center'><CountUp start={0} end={1200}></CountUp> + Job offers</p>
                        </div>
                        <div className=''>
                            <img className='w-full' src={job2}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;