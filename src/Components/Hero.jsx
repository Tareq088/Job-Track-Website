import React from 'react';
import heroImage from '../assets/hero.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img
                    src={heroImage}
                    className="rounded-lg shadow-2xl w-[80%] lg:w-[50%]"
                    />
                    <div className='p-5'>
                    <h1 className="text-center lg:text-start text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold leading-5 sm:leading-7 md:leading-10 lg:leading-14">The Best Place <br />To Find Your Job.</h1>
                    <p className="py-6 text-justify font-thin text-xs sm:text-sm md:text-base">
                    Are you looking for a job? Find all recent job circular available in Bangladesh and around the globe in one place with easy job application feature. Post your resume or discover valuable career resources on Skill Jobs.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;