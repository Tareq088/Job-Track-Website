import React from 'react';

const CompanyDetailsCard = ({company}) => {
    const {name,bannerImage,website,headOfficeAddress} = company || {};
    // const {title,jobType,salary, description, requirements,website} = company.jobs
    const manyJobs = company.jobs;
    // console.log(jobs)
   
    return (
        <div className='bg-gray-100'>
            <div className='w-11/12 mx-auto p-5 pb-10 bg-white rounded-lg'>
                <div className='flex flex-col md:flex-row gap-5 items-center justify-center mb-5'>
                    <div className='w-[60%] md:w-[30%]'>
                        <img className='w-100 md:w-60' src={bannerImage} alt="" />
                    </div>
                    <div className='space-y-2 text-center md:text-start'>
                        <h2 className='font-bold text-3xl md:text-5xl text-shadow-slate-500'>{name}</h2>
                        <p className='text-sm md:text-lg'>Address: {headOfficeAddress}</p>
                        <a href="" className='text-green-600'>{website}</a>
                    </div>
                    
                </div>
                <hr className='w-full bg-slate-50 my-4'/>
                <div className='grid grid-cols-1 gap-5 w-[50%] text-center mx-auto'>
                   {
                            //jobs prothome undefined thake tai tokhon map hbe na. tai ? diye optional chaining korlam
                            manyJobs?.map(job => 
                            <div key={job.id} className='space-y-2 p-10 shadow-md bg-base-200 rounded-2xl'>
                                    <h3 className='font-bold text-red-950 text-xl'>Job Title: {job.title}</h3>
                                    <p className='text-base'>Salary: {job.salary}</p>
                                    <p>job Type: {job.jobType}</p>
                                
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                                        <button className="btn btn-outline btn-info" onClick={()=>document.getElementById('my_modal_1').showModal()}>Details</button>
                                        <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box space-y-1">
                                            <h3 className="font-bold text-lg text-red-800">Job Description: <span className='text-black'>{job.description}</span></h3>
                                            <p className="py-4 text-red-600 text-sm">Requirements: <span className='text-black'>{job.requirements}</span></p>

                                            <p className="py-4 text-red-600 text-sm">Location: <span className='text-black'>{job.location}</span></p>
                                            <div className="">
                                            <form method="dialog" className='flex justify-between'>
                                                {/* if there is a button in form, it will close the modal */}
                                                <a href={website} className='btn btn-success'>Apply</a>
                                                <button className="btn btn-">Close</button>
                                            </form>
                                            </div>
                                        </div>
                                        </dialog>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CompanyDetailsCard;